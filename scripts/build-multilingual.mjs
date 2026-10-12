import { build } from "vite";
import { cp, mkdir, readFile, writeFile, access } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

// Build in a new directory, validate, then back up and copy into dist.
// Never empty or delete an existing output directory.
const root = fileURLToPath(new URL("../", import.meta.url));
const stamp = new Date().toISOString().replace(/[:.]/g, "-");
const retained = path.join(root, "backups", `build-${stamp}`);
const stage = path.join(retained, "staging");
const server = path.join(retained, "server");
await mkdir(retained, { recursive: true });

await build({ root, build: { outDir: stage, emptyOutDir: false } });
await build({ root, build: { ssr: "src/prerender.tsx", outDir: server, emptyOutDir: false, rollupOptions: { output: { entryFileNames: "prerender.mjs" } } } });
const { routes, renderPage, sitemapXML } = await import(pathToFileURL(path.join(server, "prerender.mjs")).href);
const template = await readFile(path.join(stage, "index.html"), "utf8");
for (const route of routes) {
  const html = renderPage(template, route);
  if (!html.includes('<link rel="canonical"') || !html.includes('<div id="root"><')) throw new Error(`Incomplete prerender: ${route}`);
  const relative = route === "/" ? "index.html" : route.endsWith("/") ? `${route.slice(1)}index.html` : `${route.slice(1)}.html`;
  const output = path.join(stage, relative);
  await mkdir(path.dirname(output), { recursive: true });
  // The stage's index is new output from this build; retain its Vite-only template too.
  if (route === "/") await writeFile(path.join(retained, "vite-template.html"), template);
  await writeFile(output, html);
}
await writeFile(path.join(stage, "sitemap.xml"), sitemapXML());
await writeFile(path.join(stage, "robots.txt"), "User-agent: *\nAllow: /\nSitemap: https://www.d-go.info/sitemap.xml\n");

const destination = path.join(root, "dist");
let exists = true;
try { await access(destination); } catch (error) { if (error.code === "ENOENT") exists = false; else throw error; }
if (exists) await cp(destination, path.join(retained, "previous-dist"), { recursive: true, errorOnExist: true, force: false });
await cp(stage, destination, { recursive: true });
console.log(`Generated ${routes.length} language/page HTML files and sitemap. Previous files retained in ${retained}`);
