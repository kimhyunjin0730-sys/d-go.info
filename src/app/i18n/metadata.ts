import { COMMON } from "./common";
import { LOCALES, PAGE_SLUGS, SITE_ORIGIN, localeFromPath, localizedPath, pageFromPath } from "./config";

export function pageMetadata(pathname: string) {
  const locale = localeFromPath(pathname);
  const page = pageFromPath(pathname);
  const common = COMMON[locale];
  const index = page === "404" ? -1 : PAGE_SLUGS.indexOf(page);
  const title = `${index < 0 ? common.notFound : common.titles[index]} | D-GO`;
  const description = index < 0 ? common.notFoundBody : common.descriptions[index];
  const basePath = index < 0 ? "/404" : page ? `/${page}` : "/";
  return {
    locale, title, description, noindex: page === "404",
    canonical: SITE_ORIGIN + localizedPath(basePath, locale),
    ogLocale: { ko: "ko_KR", ja: "ja_JP", en: "en_US" }[locale],
    alternates: index < 0 ? [] : [
      ...LOCALES.map((lang) => ({ lang, url: SITE_ORIGIN + localizedPath(basePath, lang) })),
      { lang: "x-default", url: SITE_ORIGIN + basePath },
    ],
  };
}

export function escapeHTML(value: string) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

export function metadataHTML(pathname: string) {
  const meta = pageMetadata(pathname);
  return `<title>${escapeHTML(meta.title)}</title>
<meta name="description" content="${escapeHTML(meta.description)}" />
<meta name="robots" content="${meta.noindex ? "noindex,follow" : "index,follow"}" />
<meta property="og:title" content="${escapeHTML(meta.title)}" />
<meta property="og:description" content="${escapeHTML(meta.description)}" />
<meta property="og:url" content="${meta.canonical}" />
<meta property="og:locale" content="${meta.ogLocale}" />
<link rel="canonical" href="${meta.canonical}" />
${meta.alternates.map((alt) => `<link rel="alternate" hreflang="${alt.lang}" href="${alt.url}" />`).join("\n")}`;
}
