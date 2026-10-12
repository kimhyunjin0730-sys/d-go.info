import { renderToString } from "react-dom/server";
import { MemoryRouter, useRoutes } from "react-router";
import { appRoutes } from "./app/route-config";
import { LOCALES, PAGE_SLUGS, localizedPath, SITE_ORIGIN } from "./app/i18n/config";
import { metadataHTML, pageMetadata, escapeHTML } from "./app/i18n/metadata";

export const routes = LOCALES.flatMap((locale) => [...PAGE_SLUGS, "404"].map((slug) => localizedPath(slug ? `/${slug}` : "/", locale)));
function RoutedContent() { return useRoutes(appRoutes); }

export function renderPage(template: string, pathname: string) {
  const markup = renderToString(<MemoryRouter initialEntries={[pathname]}><RoutedContent /></MemoryRouter>);
  const meta = pageMetadata(pathname);
  return template
    .replace('<html lang="ko">', `<html lang="${meta.locale}">`)
    .replace(/<title>[\s\S]*?<\/title>/, "")
    .replace(/<meta (?:name="(?:description|robots)"|property="og:(?:title|description|url|locale)")[^>]*>/g, "")
    .replace("</head>", `${metadataHTML(pathname)}\n</head>`)
    .replace('<div id="root"></div>', `<div id="root">${markup}</div>`);
}

export function sitemapXML() {
  const pages = PAGE_SLUGS.flatMap((slug) => LOCALES.map((locale) => {
    const url = localizedPath(slug ? `/${slug}` : "/", locale);
    const meta = pageMetadata(url);
    return `<url><loc>${SITE_ORIGIN}${url}</loc>${meta.alternates.map((alt) => `<xhtml:link rel="alternate" hreflang="${alt.lang}" href="${escapeHTML(alt.url)}" />`).join("")}</url>`;
  }));
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${pages.join("\n")}</urlset>`;
}
