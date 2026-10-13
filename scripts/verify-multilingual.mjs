import assert from "node:assert/strict";
import { readFile, mkdir, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = fileURLToPath(new URL("../", import.meta.url));
const origin = "http://127.0.0.1:4173";
const slugs = ["", "product", "technology", "dashboard", "device-screen", "manual", "purchase", "support"];
const locales = ["ko", "ja", "en"];
const localePath = (lang, slug) => `${lang === "ko" ? "" : `/${lang}`}/${slug}`;

// Check initial responses, independently of JavaScript execution.
for (const lang of locales) {
  for (const slug of slugs) {
    const route = localePath(lang, slug);
    const response = await fetch(origin + route);
    assert.equal(response.status, 200, route);
    const html = await response.text();
    assert.ok(html.includes(`<html lang="${lang}">`), `${route}: html lang`);
    assert.equal((html.match(/<title>/g) || []).length, 1, `${route}: one title`);
    assert.equal((html.match(/hreflang=/g) || []).length, 4, `${route}: alternates`);
    assert.ok(html.includes(`<link rel="canonical" href="https://www.d-go.info${route}"`), `${route}: canonical`);
    assert.ok(html.includes('<div id="root"><'), `${route}: prerendered content`);
    if (slug === "dashboard") {
      assert.ok(html.includes('id="app-screen"'), `${route}: app interface exists`);
      assert.ok(!html.includes('class="ds"') && !html.includes('id="device-title"'), `${route}: no device monitor UI`);
    }
    if (slug === "device-screen") {
      assert.ok(!html.includes('id="app-screen"'), `${route}: device page does not contain app screen`);
      assert.ok(html.includes('role="img"'), `${route}: device monitor preview exists`);
    }
  }
  const missing = await fetch(origin + localePath(lang, "missing-page"));
  assert.equal(missing.status, 404);
  const html = await missing.text();
  assert.ok(html.includes(`<html lang="${lang}">`) && html.includes('content="noindex,follow"'));
}
const htmlRedirect = await fetch(origin + "/en/product.html?source=test", {redirect:"manual"});
assert.equal(htmlRedirect.status, 308);
assert.equal(htmlRedirect.headers.get("location"), "/en/product?source=test");
const sitemap = await (await fetch(origin + "/sitemap.xml")).text();
assert.equal((sitemap.match(/<loc>/g) || []).length, 24);

for (const lang of locales) {
  const app = JSON.parse(await readFile(path.join(root, `src/app/locales/${lang}/app.json`), "utf8"));
  assert.equal(Object.keys(app.features).length, 5);
  assert.ok(app.features.documentAccess.title && app.features.documentAccess.description);
}
console.log("HTTP: 24 pages, language metadata, sitemap and three localized 404s passed.");

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
  await navigate("/dashboard");
  await evaluate(`localStorage.removeItem("dgo-language")`);
  for (const lang of locales) {
    for (const slug of slugs) {
      const route = localePath(lang, slug);
      await navigate(route);
      const state = await evaluate(`({lang: document.documentElement.lang, locale: document.querySelector('header select').value, overflow: document.documentElement.scrollWidth > innerWidth + 1, h1: document.querySelector('h1')?.textContent, links: [...document.querySelectorAll('header a, footer nav a')].map(a => a.getAttribute('href'))})`);
      assert.equal(state.lang, lang, route);
      assert.equal(state.locale, lang, route);
      if (state.overflow) console.log(await evaluate(`([...document.querySelectorAll('body *')].map(e => ({tag:e.tagName, cls:e.className, right:e.getBoundingClientRect().right, width:e.getBoundingClientRect().width, text:e.textContent?.slice(0,80)})).filter(e => e.right > innerWidth+1)).slice(0,20)`));
      assert.ok(!state.overflow, `${route}: horizontal overflow at 320px`);
      assert.ok(state.h1, `${route}: h1`);
      assert.ok(state.links.every((href) => lang === "ko" ? !/^\/(en|ja)(\/|$)/.test(href) : href.startsWith(`/${lang}/`)), `${route}: localized navigation`);
    }
  }
  for (const lang of locales) {
    await navigate(localePath(lang, "dashboard"));
    await evaluate(`document.querySelector('[data-app-screen="files"]').click()`);
    await waitFor(`!!document.querySelector('[data-filter="photos"]')`);
    await evaluate(`document.querySelector('[data-filter="photos"]').click()`);
    assert.equal(await evaluate(`document.querySelectorAll('[data-node-id="1:5838"] > div').length`),1);
    await evaluate(`document.querySelector('[data-app-screen="device"]').click()`);
    await waitFor(`!!document.querySelector('[data-node-id="1:6235"]')`);
    assert.ok(await evaluate(`!document.querySelector('main .ds') && !document.getElementById('device-title')`));
  }
  await navigate("/en/product?source=test#app-features", 768);
  await evaluate(`document.querySelector('header select').value='ja'; document.querySelector('header select').dispatchEvent(new Event('change', {bubbles:true}));`);
  await waitFor(`location.pathname === '/ja/product' && document.documentElement.lang === 'ja'`);
  assert.equal(await evaluate("location.search + location.hash"), "?source=test#app-features");
  assert.equal(await evaluate("localStorage.getItem('dgo-language')"), "ja");
  const beforeReload = (await send("Page.getFrameTree")).frameTree.frame.loaderId;
  await send("Page.reload");
  for (let attempt = 0; attempt < 100; attempt++) {
    if ((await send("Page.getFrameTree")).frameTree.frame.loaderId !== beforeReload) break;
    await pause(100);
  }
  assert.notEqual((await send("Page.getFrameTree")).frameTree.frame.loaderId, beforeReload, "Reload created a new document");
  await waitFor(`Object.keys(document.querySelector('header select') || {}).some(key => key.startsWith('__reactProps$'))`);
  await waitFor("document.readyState !== 'loading' && document.querySelector('header select')?.value === 'ja'");
  await evaluate(`document.querySelector('header button[aria-controls="mobile-nav"]').click()`);
  await waitFor(`!!document.getElementById('mobile-nav')`);
  await evaluate(`document.querySelector('#mobile-nav a[href="/ja/manual"]').click()`);
  await waitFor(`location.pathname === '/ja/manual' && !document.getElementById('mobile-nav')`);
  await navigate("/ja/dashboard", 1440);
  assert.ok(await evaluate(`document.querySelector('main').textContent.includes('文書閲覧証明')`));
  await evaluate(`document.documentElement.style.fontSize='30px'`);
  assert.ok(await evaluate("document.documentElement.scrollWidth <= innerWidth + 1"), "200% text enlargement overflow");
  await evaluate(`document.documentElement.style.fontSize=''`);
  for (const lang of ["en", "ja"]) {
    await navigate(`/${lang}/support`, 320);
    const enquiries = await evaluate(`Array.from(document.querySelectorAll('main a[href^="mailto:"]')).map(a => a.href)`);
    assert.ok(enquiries.length >= 6, "Shared support page provides enquiry links");
    assert.ok(enquiries.every(href => !/[가-힣]/.test(decodeURIComponent(href))), "Enquiry subjects use the selected language");
    assert.equal(await evaluate(`document.querySelector('main form')`), null, "Support uses the shared Korean mailto layout");
  }
  const output = path.join(root, "shots", `multilingual-${Date.now()}`);
  await mkdir(output, { recursive: true });
  for (const [lang, width] of [["ja", 1440], ["en", 320]]) {
    await navigate(`/${lang}/dashboard`, width);
    await evaluate(`Promise.race([document.fonts.ready, new Promise(r => setTimeout(r, 2000))])`);
    const capture = await send("Page.captureScreenshot", { format: "png", captureBeyondViewport: false });
    await writeFile(path.join(output, `${lang}-dashboard-${width}.png`), Buffer.from(capture.data, "base64"), { flag: "wx" });
  }
  assert.deepEqual(runtimeErrors, [], "Browser runtime/hydration errors");
  console.log(`Browser: 24 routes at 320px, language switch with query/hash, reload, mobile navigation, 200% text, localized enquiry links and hydration passed. Screenshots: ${output}`);
} finally { socket.close(); }
