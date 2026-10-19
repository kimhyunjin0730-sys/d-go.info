import assert from "node:assert/strict";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
const origin = process.env.DGO_TEST_ORIGIN || "http://127.0.0.1:4173";
const targets = await (await fetch("http://127.0.0.1:9333/json/list")).json();
const target = targets.find((item) => item.type === "page");
assert.ok(target, "Chrome page target");
const socket = new WebSocket(target.webSocketDebuggerUrl);
await new Promise((resolve, reject) => { socket.addEventListener("open", resolve, { once: true }); socket.addEventListener("error", reject, { once: true }); });
let id = 0;
const pending = new Map();
const runtimeErrors = [];
const lifecycle = new Set();
socket.addEventListener("message", (event) => {
  const message = JSON.parse(event.data);
  if (message.id && pending.has(message.id)) {
    const { resolve, reject } = pending.get(message.id); pending.delete(message.id);
    message.error ? reject(new Error(message.error.message)) : resolve(message.result);
  }
  if (message.method === "Page.lifecycleEvent") lifecycle.add(message.params.loaderId + ":" + message.params.name);
  if (message.method === "Runtime.exceptionThrown") runtimeErrors.push(message.params.exceptionDetails.exception?.description || message.params.exceptionDetails.text);
  if (message.method === "Runtime.consoleAPICalled" && message.params.type === "error") runtimeErrors.push(message.params.args.map((arg) => arg.value || arg.description).join(" "));
});
function send(method, params = {}) {
  return new Promise((resolve, reject) => { const next = ++id; pending.set(next, { resolve, reject }); socket.send(JSON.stringify({ id: next, method, params })); });
}
async function evaluate(expression) {
  const value = await send("Runtime.evaluate", { expression, returnByValue: true, awaitPromise: true });
  if (value.exceptionDetails) throw new Error(value.exceptionDetails.text);
  return value.result.value;
}
const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
async function waitFor(expression) {
  for (let attempt = 0; attempt < 100; attempt++) { if (await evaluate(expression)) return; await pause(100); }
  throw new Error(`Timed out: ${expression}`);
}

const viewports = [[320,568],[390,844],[600,960],[768,1024],[820,1180],[1024,768],[1180,820],[1279,800],[1280,800],[1366,900],[844,390]];
const slugs = ["", "product", "technology", "dashboard", "device-screen", "manual", "purchase", "support"];
async function size(width, height) {
  await send("Emulation.setDeviceMetricsOverride", {width, height, deviceScaleFactor:1, mobile:width<1280});
  await send("Emulation.setTouchEmulationEnabled", {enabled:width<1280, maxTouchPoints:5});
  await evaluate("new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))");
  await pause(50);
}
async function navigate(route) {
  await send("Page.navigate", {url:origin+route});
  await waitFor(`location.pathname === ${JSON.stringify(route)} && document.readyState !== 'loading' && !!document.querySelector('header select')`);
  await waitFor(`Object.keys(document.querySelector('header select')).some(key => key.startsWith('__reactProps$'))`);
  await evaluate("Promise.race([document.fonts.ready,new Promise(r=>setTimeout(r,1000))])");
}
async function inspect(label) {
  const state=await evaluate(`({width:document.documentElement.clientWidth,scroll:document.documentElement.scrollWidth,images:[...document.querySelectorAll('main img[src^="/images/product/"]')].map(e=>{const r=e.getBoundingClientRect();return {w:r.width,h:r.height,nw:e.naturalWidth,nh:e.naturalHeight,right:r.right}})})`);
  if(state.scroll>state.width+1) console.log(label,await evaluate(`([...document.querySelectorAll('body *')].filter(e=>e.getBoundingClientRect().right>document.documentElement.clientWidth+1).map(e=>({tag:e.tagName,cls:e.className,right:e.getBoundingClientRect().right,text:e.textContent?.slice(0,65)}))).slice(0,12)`));
  assert.ok(state.scroll<=state.width+1,label+" horizontal overflow");
  for(const i of state.images) {assert.ok(i.w>0&&i.h>0&&i.right<=state.width+1,label+" image fits");if(i.nw&&i.nh)assert.ok(Math.abs(i.w/i.h-i.nw/i.nh)<0.015,label+" image aspect ratio");}
}
try {
  await send("Page.enable");await send("Runtime.discardConsoleEntries");await send("Runtime.enable");
  await send("Emulation.setEmulatedMedia",{features:[{name:"prefers-reduced-motion",value:"reduce"}]});
  await size(390,844);await navigate('/dashboard');await evaluate(`localStorage.setItem('dgo-language','ko')`);
  const shots=path.join(process.cwd(),"shots","responsive-"+Date.now());await mkdir(shots,{recursive:true});
  for(const locale of ['ko','ja','en']) for(const slug of slugs) {
    const route=(locale==='ko'?'':'/'+locale)+'/'+slug;
    await navigate(route);
    for(const [width,height] of viewports) {
      await size(width,height);await inspect(route+' '+width+'x'+height);
      if(locale==='ja'&&['','product','dashboard'].includes(slug)&&[390,768,1024].includes(width)) {
        const capture=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:false});
        await writeFile(path.join(shots,`ja-${slug||'home'}-${width}.png`),Buffer.from(capture.data,'base64'),{flag:'wx'});
      }
    }
    console.log(route+': eleven phone/tablet/desktop viewports passed');
  }
  // Opening navigation must not push the document, lose the scroll position, or trap a touch user.
  for(const locale of ['ko','ja','en']) {
    await navigate((locale==='ko'?'':'/'+locale)+'/product');
    for(const [width,height] of [[320,480],[320,568],[600,960],[768,1024],[844,390],[1180,820]]) {
      await size(width,height);await evaluate('window.scrollTo(0,420)');await pause(50);
      const before=await evaluate(`({y:scrollY,top:document.querySelector('main').getBoundingClientRect().top})`);
      await evaluate(`document.querySelector('header button[aria-controls="mobile-nav"]').click()`);await waitFor(`!!document.getElementById('mobile-nav')`);
      const state=await evaluate(`(()=>{const panel=document.getElementById('mobile-nav'),r=panel.getBoundingClientRect(),bar=document.querySelector('.site-header-bar').getBoundingClientRect();return {headerTop:bar.top,y:scrollY,top:document.querySelector('main').getBoundingClientRect().top,pt:r.top,pb:r.bottom,barBottom:bar.bottom,position:getComputedStyle(panel).position,columns:getComputedStyle(panel.querySelector('ul')).gridTemplateColumns.split(' ').length,inert:document.querySelector('main').inert,locked:document.documentElement.style.overflow==='hidden',links:panel.querySelectorAll('a').length,focused:panel.contains(document.activeElement)}})()`);
      assert.ok(Math.abs(state.top-before.top)<1,'menu does not push page');assert.equal(state.y,before.y,'menu preserves scroll');
      assert.ok(Math.abs(state.headerTop)<1&&state.pt>=0&&Math.abs(state.pt-state.barBottom)<2&&state.pb>state.pt&&state.pb<=height+1,'header and menu stay inside viewport');
      assert.ok(await evaluate(`!!document.elementFromPoint(24,document.getElementById('mobile-nav').getBoundingClientRect().top+16)?.closest('#mobile-nav')`),'menu is visibly painted above the page');
      assert.equal(state.columns,width>=600?2:1);assert.equal(state.links,9);assert.ok(state.inert&&state.locked);
      if (await evaluate(`document.getElementById('mobile-nav').scrollHeight > document.getElementById('mobile-nav').clientHeight`)) {
        const start = Math.min(height-60,350);
        await send('Input.dispatchTouchEvent',{type:'touchStart',touchPoints:[{x:width/2,y:start}]});
        for(const distance of [20,50,90,130,170,210]) {await send('Input.dispatchTouchEvent',{type:'touchMove',touchPoints:[{x:width/2,y:start-distance}]});await pause(30);}
        await send('Input.dispatchTouchEvent',{type:'touchEnd',touchPoints:[]});await pause(150);
        assert.ok(await evaluate(`document.getElementById('mobile-nav').scrollTop > 0 && [...document.querySelectorAll('#mobile-nav a')].at(-1).getBoundingClientRect().bottom <= innerHeight+1`),'touch scrolling reaches final menu action');
        assert.equal(await evaluate('scrollY'),before.y,'touch scroll stays inside menu');
      }
      await evaluate(`[...document.querySelectorAll('#mobile-nav a')].at(-1).focus({preventScroll:true})`);
      await send('Input.dispatchKeyEvent',{type:'keyDown',key:'Tab',code:'Tab',windowsVirtualKeyCode:9});await send('Input.dispatchKeyEvent',{type:'keyUp',key:'Tab',code:'Tab',windowsVirtualKeyCode:9});
      assert.ok(await evaluate(`document.activeElement === document.querySelector('header a')`),'Tab wraps from final menu link to header logo');
      if(locale==='ja'&&[320,768,844].includes(width)) {const capture=await send('Page.captureScreenshot',{format:'png'});await writeFile(path.join(shots,`ja-menu-${width}x${height}.png`),Buffer.from(capture.data,'base64'),{flag:'wx'});}
      await send('Input.dispatchKeyEvent',{type:'keyDown',key:'Escape',code:'Escape',windowsVirtualKeyCode:27});
      await waitFor(`!document.getElementById('mobile-nav')`);assert.ok(await evaluate(`!document.querySelector('main').inert && document.documentElement.style.overflow !== 'hidden'`),'scroll and background restored');
      assert.ok(Math.abs(await evaluate('scrollY')-before.y)<1,`${locale} ${width}: closing preserves scroll (${before.y} -> ${await evaluate('scrollY')})`);
    }
    await size(768,1024);await evaluate(`document.querySelector('header button[aria-controls="mobile-nav"]').click()`);await waitFor(`!!document.getElementById('mobile-nav')`);
    await evaluate(`document.querySelector('.site-nav-backdrop').click()`);await waitFor(`!document.getElementById('mobile-nav')`);
    await evaluate(`document.querySelector('header button[aria-controls="mobile-nav"]').click()`);await waitFor(`!!document.getElementById('mobile-nav')`);
    await size(1366,900);await waitFor(`!document.getElementById('mobile-nav')`);assert.ok(await evaluate(`document.documentElement.style.overflow !== 'hidden'`),'rotation/desktop resize unlocks scrolling');
    await size(768,1024);await evaluate(`document.querySelector('header button[aria-controls="mobile-nav"]').click()`);await waitFor(`!!document.getElementById('mobile-nav')`);
    await evaluate(`document.querySelector('#mobile-nav a[href$="/manual"]').click()`);await waitFor(`location.pathname.endsWith('/manual') && !document.getElementById('mobile-nav')`);
  }
  assert.deepEqual(runtimeErrors,[],'Runtime/hydration errors');
  console.log('Responsive: 264 page/viewports, product image proportions, menu geometry, focus, scroll locking, closing and resize passed. '+shots);
} finally {socket.close();}
