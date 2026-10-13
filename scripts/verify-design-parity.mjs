import assert from 'node:assert/strict';import {mkdir,writeFile} from 'node:fs/promises';import path from 'node:path';const root=process.cwd();const origin=process.env.DGO_TEST_ORIGIN||'http://127.0.0.1:4173';
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
 await send('Page.enable');await send('Page.setLifecycleEventsEnabled',{enabled:true});await send('Runtime.discardConsoleEntries');await send('Runtime.enable');await send('Network.enable');await send('Network.setCacheDisabled',{cacheDisabled:true});await send('Emulation.setEmulatedMedia',{features:[{name:'prefers-reduced-motion',value:'reduce'}]});
 await navigate('/dashboard');await evaluate(`localStorage.removeItem('dgo-language')`);
 const shots=path.join(root,'shots','design-parity-'+Date.now());await mkdir(shots,{recursive:true});
 for(const width of [320,1440])for(const slug of ['', 'product','technology','dashboard','device-screen','manual','purchase','support','missing-page']){
 let reference;for(const locale of ['ko','ja','en']){
 const route=(locale==='ko'?'':'/'+locale)+'/'+slug;await navigate(route,width);
 const data=await evaluate(`({sections:[...document.querySelectorAll('main section')].map(e=>({id:e.id,label:e.getAttribute('aria-labelledby'),cls:e.className})),images:[...document.querySelectorAll('main img')].map(e=>e.getAttribute('src')),headings:[...document.querySelectorAll('main h1,main h2,main h3')].filter(e=>!e.closest('.dgo-app-design')).map(e=>({tag:e.tagName,id:e.id,cls:e.className})),overflow:document.documentElement.scrollWidth>document.documentElement.clientWidth+1,badLinks:[...document.querySelectorAll('main a[href^="/"]')].map(e=>e.getAttribute('href')),korean:[...document.querySelectorAll('main *')].flatMap(e=>[...[...e.childNodes].filter(n=>n.nodeType===3).map(n=>n.textContent),...['alt','aria-label','title'].map(a=>e.getAttribute(a)||'')]).filter(s=>/[가-힣]/.test(s))})`);
 if(data.overflow)console.log(route,width,await evaluate(`([...document.querySelectorAll('main *')].filter(e=>e.getBoundingClientRect().right>document.documentElement.clientWidth+1).map(e=>({tag:e.tagName,cls:e.className,right:e.getBoundingClientRect().right,text:e.textContent?.slice(0,65)}))).slice(0,12)`));assert.equal(data.overflow,false,route+' '+width+' overflow');
 const signature={sections:data.sections,images:data.images.filter(src=>src!=='/assets/dgo-app/newhome-imgContainer18.svg'),headings:data.headings};if(locale==='ko')reference=signature;else {assert.deepEqual(signature,reference,route+' shares Korean layout and imagery');assert.ok(data.badLinks.every(h=>h.startsWith('/'+locale+'/')),route+' internal links preserve locale');const allowed=/퍼플넷|쿠도커뮤니케이션|솔모정보기술|보헤미안 OS|워킹랩|\.(pdf|jpg|dwg)/;const unhandled=data.korean.filter(s=>!allowed.test(s));assert.deepEqual(unhandled,[],route+' untranslated copy');}
 if(['','product','device-screen'].includes(slug)){const shot=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:false});await writeFile(path.join(shots,locale+'-'+(slug||'home')+'-'+width+'.png'),Buffer.from(shot.data,'base64'),{flag:'wx'});}
 console.log(locale,slug||'home',width,'layout matched');
 }
 }
 assert.deepEqual(runtimeErrors,[],'Runtime and hydration errors');console.log('Design parity: eight pages and localized 404s in three languages at 320px and 1440px passed. '+shots);
}finally{socket.close();}
