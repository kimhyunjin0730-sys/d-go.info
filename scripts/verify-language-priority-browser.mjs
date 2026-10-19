import assert from "node:assert/strict";
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
 await send("Page.enable"); await send("Page.setLifecycleEventsEnabled", {enabled:true}); await send("Runtime.discardConsoleEntries"); await send("Runtime.enable"); await send("Network.enable"); await send("Network.setCacheDisabled", {cacheDisabled:true});
 let caseId = 0;
 for(const [time, preference, route, expected] of [
  ["2026-10-18T23:59:59+09:00",null,"/","/"],
  ["2026-10-19T00:00:00+09:00",null,"/","/ja/"],
  ["2026-10-19T12:00:00+09:00",null,"/","/ja/"],
  ["2026-11-30T23:59:59+09:00",null,"/","/ja/"],
  ["2026-12-01T00:00:00+09:00",null,"/","/"],
  ["2026-11-01T12:00:00+09:00","ko","/","/"],
  ["2026-11-01T12:00:00+09:00","en","/","/en/"],
  ["2026-11-01T12:00:00+09:00",null,"/en/","/en/"],
 ]) {
  const source=`Date.now = () => ${Date.parse(time)}; try {${preference ? `localStorage.setItem('dgo-language',${JSON.stringify(preference)})` : "localStorage.removeItem('dgo-language')"}}catch(e){}`;
  const injection=await send("Page.addScriptToEvaluateOnNewDocument",{source});
  const suffix = "?source=test&case=" + (++caseId) + "#app-features";
  await send("Page.navigate",{url:origin+route+suffix});
  await waitFor(`location.pathname === ${JSON.stringify(expected)} && document.readyState === 'complete' && !!document.querySelector('header select') && document.documentElement.style.visibility !== 'hidden'`);
  assert.equal(await evaluate(`location.search+location.hash`),suffix);
  assert.equal(await evaluate(`localStorage.getItem('dgo-language')`),preference);
  await send("Page.removeScriptToEvaluateOnNewDocument",{identifier:injection.identifier});
 }
 assert.deepEqual(runtimeErrors,[]);
 await send("Page.navigate",{url:origin+"/dashboard"});
 console.log("Browser language campaign: date boundaries, automatic Japanese, explicit English, manual choices and query/hash passed.");
}finally {socket.close();}
