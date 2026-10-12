import assert from "node:assert/strict";
import { mkdir, writeFile, readFile } from "node:fs/promises";
import path from "node:path";
const origin = "http://127.0.0.1:4173";
const root = process.cwd();
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
async function navigate(route, width = 320) {
  await send("Emulation.setDeviceMetricsOverride", { width, height: 900, deviceScaleFactor: 1, mobile: false });
  const navigation = await send("Page.navigate", { url: origin + route });
  for (let attempt = 0; attempt < 100 && !lifecycle.has(navigation.loaderId + ":DOMContentLoaded"); attempt++) await pause(100);
  await waitFor(`location.pathname === ${JSON.stringify(route.split(/[?#]/)[0])} && document.readyState !== 'loading' && !!document.querySelector('header select')`);
  await waitFor(`Object.keys(document.querySelector('header select') || {}).some(key => key.startsWith('__reactProps$'))`);
  await evaluate(`Promise.race([document.fonts.ready, new Promise(r => setTimeout(r, 1000))])`);
  await pause(100);
}

try {
 await send("Page.enable"); await send("Page.setLifecycleEventsEnabled", {enabled:true}); await send("Runtime.enable");
 const shots = path.join(root,"shots","real-app-" + Date.now()); await mkdir(shots,{recursive:true});
 for (const locale of ["ko","ja","en"]) {
  for (const width of [320,1440]) {
   await navigate((locale === "ko" ? "" : "/"+locale)+"/dashboard",width);
   for(const screen of ["home","files","device"]) {
    await evaluate(`document.querySelector('[data-app-screen="${screen}"]').click()`);
    await pause(100);
    assert.ok(await evaluate(`document.documentElement.scrollWidth <= innerWidth+1`),locale+screen+width+" page overflow");
    await waitFor(`Array.from(document.querySelectorAll('.dgo-app-design img')).every(i => i.complete && i.naturalWidth > 0)`);
    const assets = await evaluate(`Array.from(document.querySelectorAll('.dgo-app-design img')).map(i => ({src:i.getAttribute('src'),nw:i.naturalWidth,nh:i.naturalHeight,w:i.getBoundingClientRect().width,h:i.getBoundingClientRect().height}))`);
    const bad = [];
    for(const i of assets) {
      const file = path.join(root,"public",i.src);
      const bytes = await readFile(file); assert.ok(bytes.length>0,i.src);
      let ratio=i.nw/i.nh;
      if(i.src.endsWith(".svg")) {
        const tag=bytes.toString().match(/<svg[^>]+>/)[0];
        const w=Number(tag.match(/width="([\d.]+)"/)[1]);
        const h=Number(tag.match(/height="([\d.]+)"/)[1]);ratio=w/h;
      }
      if(Math.abs(i.w/i.h-ratio)>0.02)bad.push(i);
    }
    assert.deepEqual(bad,[],locale+screen+width+" asset aspect ratio");
    const clipping = await evaluate(`(() => {const box=document.querySelector('.dgo-app-design').getBoundingClientRect();return [...document.querySelectorAll('.dgo-app-design p,.dgo-app-design img')].filter(e => !e.closest('[data-node-id="1:5815"]')).map(e=>({id:e.closest('[data-node-id]')?.getAttribute('data-node-id'),txt:e.textContent,left:e.getBoundingClientRect().left,right:e.getBoundingClientRect().right})).filter(e=>e.right>box.right+1||e.left<box.left-1)})()`);
    assert.deepEqual(clipping, [], locale+screen+width+' unexpected clipping');
    if (locale === "ko" && width ===1440 || width ===320 && screen ==="files") {
     await evaluate(`document.getElementById('app-screen').scrollIntoView()`);await pause(100);
     const clip = await evaluate(`(() => {const r=document.querySelector('.dgo-app-design').getBoundingClientRect();return {x:r.x+scrollX,y:r.y+scrollY,width:r.width,height:r.height,scale:1}})()`);
     const img=await send("Page.captureScreenshot",{format:"png",clip,captureBeyondViewport:true});
     await writeFile(path.join(shots,`${locale}-${screen}-${width}.png`),Buffer.from(img.data,"base64"));
    }
    if(screen ==="files"){
     await evaluate(`document.querySelector('[data-filter="photos"]').click()`);
     assert.equal(await evaluate(`document.querySelectorAll('[data-node-id="1:5838"] > div').length`),1);
     await evaluate(`document.querySelector('[data-filter="documents"]').click()`);
     assert.equal(await evaluate(`document.querySelectorAll('[data-node-id="1:5838"] > div').length`),3);
     await evaluate(`document.querySelector('[data-filter="all"]').click()`);
     await evaluate(`document.querySelector('[data-node-id="1:5861"]').click()`);
     assert.ok(await evaluate(`!!document.getElementById('app-guide-title')`));
    }
   }
   await evaluate(`document.querySelector('[data-app-screen="home"]').click()`);
   await waitFor(`!!document.querySelector('[data-node-id="1:6691"]')`);
   await evaluate(`document.querySelector('[data-node-id="1:6691"]').click()`);
   assert.ok(await evaluate(`document.querySelector('[data-node-id="1:6691"]').getAttribute('aria-pressed')==='true'`));
   await evaluate(`document.querySelector('[data-node-id="1:6721"]').click()`);
   assert.ok(await evaluate(`document.querySelector('[data-app-screen="files"]').getAttribute('aria-pressed')==='true'`));
   assert.ok(await evaluate(`!document.querySelector('main .ds') && !document.getElementById('device-title')`));
  }
 }
 assert.deepEqual(runtimeErrors,[]);
 console.log('App preview: three screens in three languages at 320/1440, assets, filters, navigation, pause and guides passed.');
 console.log('Screenshots:',shots);
}finally{socket.close();}
