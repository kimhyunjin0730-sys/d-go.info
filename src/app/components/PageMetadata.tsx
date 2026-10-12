import { useEffect } from "react";
import { useLocation } from "react-router";
import { pageMetadata } from "../i18n/metadata";

export default function PageMetadata() {
  const { pathname } = useLocation();
  useEffect(() => {
    const meta = pageMetadata(pathname);
    document.documentElement.lang = meta.locale;
    document.title = meta.title;
    const setMeta = (attribute: "name" | "property", name: string, content: string) => {
      let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${name}"]`);
      if (!element) { element = document.createElement("meta"); element.setAttribute(attribute, name); document.head.appendChild(element); }
      element.content = content;
    };
    setMeta("name", "description", meta.description);
    setMeta("name", "robots", meta.noindex ? "noindex,follow" : "index,follow");
    setMeta("property", "og:title", meta.title);
    setMeta("property", "og:description", meta.description);
    setMeta("property", "og:url", meta.canonical);
    setMeta("property", "og:locale", meta.ogLocale);
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
    canonical.href = meta.canonical;
    document.head.querySelectorAll('link[rel="alternate"][hreflang]').forEach((link) => link.remove());
    for (const alt of meta.alternates) {
      const link = document.createElement("link");
      link.rel = "alternate"; link.hreflang = alt.lang; link.href = alt.url; document.head.appendChild(link);
    }
  }, [pathname]);
  return null;
}
