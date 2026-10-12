import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import vm from "node:vm";

const source = await readFile(new URL("../public/locale-entry.js", import.meta.url), "utf8");
function entry(time, preference = null, pathname = "/", storageDisabled = false) {
  let redirect = null;
  const style = {};
  vm.runInNewContext(source, {
    Date: {now: () => Date.parse(time), parse: Date.parse},
    document: {documentElement: {style}},
    window: {
      location: {pathname, search: "?source=campaign", hash: "#app-features", replace: value => {redirect = value;}},
      localStorage: {getItem: () => {if (storageDisabled) throw new Error("Storage disabled"); return preference;}},
    },
  });
  assert.equal(style.visibility === "hidden", redirect !== null);
  return redirect;
}
assert.equal(entry("2026-10-19T23:59:59+09:00"), null);
assert.equal(entry("2026-10-20T00:00:00+09:00"), "/ja/?source=campaign#app-features");
assert.equal(entry("2026-11-30T23:59:59+09:00"), "/ja/?source=campaign#app-features");
assert.equal(entry("2026-12-01T00:00:00+09:00"), null);
assert.equal(entry("2026-11-01T12:00:00+09:00", "ko"), null);
assert.equal(entry("2026-11-01T12:00:00+09:00", "en"), "/en/?source=campaign#app-features");
assert.equal(entry("2026-12-01T00:00:00+09:00", "ja"), "/ja/?source=campaign#app-features");
for (const route of ["/ja/", "/en/", "/dashboard", "/ja/dashboard"]) {
  assert.equal(entry("2026-11-01T12:00:00+09:00", null, route), null);
}
assert.equal(entry("2026-11-01T12:00:00+09:00", "invalid"), "/ja/?source=campaign#app-features");
assert.equal(entry("2026-11-01T12:00:00+09:00", null, "/", true), "/ja/?source=campaign#app-features");
console.log("Language priority: campaign boundaries, saved choices, explicit URLs, query/hash and disabled storage passed.");
