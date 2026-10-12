export const LOCALES = ["ko", "ja", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const PAGE_SLUGS = ["", "product", "technology", "dashboard", "device-screen", "manual", "purchase", "support"] as const;
export type PageSlug = (typeof PAGE_SLUGS)[number];
export const LANGUAGE_NAMES: Record<Locale, string> = { ko: "한국어", ja: "日本語", en: "English" };
export const SITE_ORIGIN = "https://www.d-go.info";

export function localeFromPath(pathname: string): Locale {
  const segment = pathname.split("/")[1];
  return segment === "ja" || segment === "en" ? segment : "ko";
}

export function unlocalizedPath(pathname: string): string {
  const locale = localeFromPath(pathname);
  const path = locale === "ko" ? pathname : pathname.slice(3);
  return path || "/";
}

export function localizedPath(pathname: string, locale: Locale): string {
  const path = unlocalizedPath(pathname);
  return locale === "ko" ? path : `/${locale}${path === "/" ? "/" : path}`;
}

export function pageFromPath(pathname: string): PageSlug | "404" {
  const slug = unlocalizedPath(pathname).replace(/^\/+|\/+$/g, "");
  return PAGE_SLUGS.includes(slug as PageSlug) ? slug as PageSlug : "404";
}
