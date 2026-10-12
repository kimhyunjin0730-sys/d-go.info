import http from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

// Preview the generated HTML with the same language routes and 404 behaviour as production.
const root = fileURLToPath(new URL("../dist/", import.meta.url));
const pages = new Set(["product", "technology", "dashboard", "device-screen", "manual", "purchase", "support"]);
const mime = { ".html": "text/html; charset=utf-8", ".js": "text/javascript", ".css": "text/css", ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg", ".webp": "image/webp", ".xml": "application/xml", ".txt": "text/plain; charset=utf-8" };
const port = Number(process.env.DGO_PREVIEW_PORT || 4173);

http.createServer(async (request, response) => {
  try {
    const url = new URL(request.url, `http://127.0.0.1:${port}`);
    const pathname = decodeURIComponent(url.pathname);
    const parts = pathname.split("/").filter(Boolean);
    const locale = parts[0] === "ja" || parts[0] === "en" ? parts.shift() : "ko";
    const prefix = locale === "ko" ? "" : `${locale}/`;
    if (parts.length === 1 && (parts[0] === "index.html" || pages.has(parts[0].replace(/\.html$/, "")))) {
      if (parts[0].endsWith(".html")) {
        const slug = parts[0] === "index.html" ? "" : parts[0].slice(0, -5);
        response.writeHead(308, { Location: `/${prefix}${slug}${url.search}` }); response.end(); return;
      }
    }
    let relative;
    let status = 200;
    if (parts.length === 0) relative = `${prefix}index.html`;
    else if (parts.length === 1 && pages.has(parts[0])) relative = `${prefix}${parts[0]}.html`;
    else {
      relative = pathname.slice(1);
      const candidate = path.resolve(root, relative);
      if (!candidate.startsWith(root)) { response.writeHead(400); response.end(); return; }
      try { if (!(await stat(candidate)).isFile()) throw new Error("Not a file"); }
      catch { relative = `${prefix}404.html`; status = 404; }
    }
    const file = path.resolve(root, relative);
    const body = await readFile(file);
    response.writeHead(status, { "Content-Type": mime[path.extname(file)] || "application/octet-stream", "Cache-Control": "no-store" });
    response.end(body);
  } catch {
    response.writeHead(500, { "Content-Type": "text/plain" }); response.end("Preview error");
  }
}).listen(port, "127.0.0.1", () => console.log(`D-GO preview: http://127.0.0.1:${port}/ja/`));
