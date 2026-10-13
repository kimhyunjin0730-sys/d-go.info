import { Children, cloneElement, isValidElement, type ReactNode } from "react";
import { useLocale } from "./useLocale";
import { localizedPath, type Locale } from "./config";
import copy from "../locales/shared-pages.json";

const dictionary = copy as Record<string, [string, string]>;
const normalise = (value: string) => value.replace(/\s+/g, " ").trim();
const patterns = Object.entries(dictionary).filter(([key]) => /\{\d+\}/.test(key)).map(([key, value]) => ({
  pattern: new RegExp("^" + key.split(/(\{\d+\})/).map(part => /\{\d+\}/.test(part) ? "(.+?)" : part.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("") + "$"), value,
}));

export function translatePageText(text: string, locale: Locale): string {
  if (locale === "ko") return text;
  const key = normalise(text);
  const index = locale === "ja" ? 0 : 1;
  let translated = dictionary[key]?.[index];
  if (translated === undefined) {
    for (const entry of patterns) {
      const match = key.match(entry.pattern);
      if (match) {
        translated = entry.value[index].replace(/\{(\d+)\}/g, (_, position) => translatePageText(match[Number(position) + 1], locale));
        break;
      }
    }
  }
  if (translated === undefined) return text;
  return (text.match(/^\s*/)?.[0] ?? "") + translated + (text.match(/\s*$/)?.[0] ?? "");
}

function localizeLink(url: string, locale: Locale): string {
  if (url.startsWith("/") && !url.startsWith("//")) return localizedPath(url, locale);
  if (url.startsWith("mailto:") && url.includes("?")) {
    const [address, query] = url.split("?");
    const params = new URLSearchParams(query);
    for (const field of ["subject", "body"]) {
      const value = params.get(field);
      if (value) {
        const translated = translatePageText(value, locale);
        params.set(field, field === "body" ? translated.replace(/\r?\n/g, "\r\n") : translated);
      }
    }
    return address + "?" + params.toString().replace(/\+/g, "%20");
  }
  return url;
}

const textProps = new Set(["title", "lead", "aside", "accent", "label", "note", "desc", "body", "screenLabel", "alt", "placeholder", "aria-label", "aria-description"]);

/** Translate authored copy before rendering; retain the shared layout and interactive state. */
function localize(node: ReactNode, locale: Locale): ReactNode {
  if (typeof node === "string") return translatePageText(node, locale);
  if (!isValidElement<Record<string, unknown>>(node)) return node;
  const props: Record<string, unknown> = {};
  for (const [name, value] of Object.entries(node.props)) {
    if (name === "children") continue;
    if (typeof value === "string" && textProps.has(name)) props[name] = translatePageText(value, locale);
    else if (typeof value === "string" && ["to", "href"].includes(name)) props[name] = localizeLink(value, locale);
    else if (isValidElement(value)) props[name] = localize(value, locale);
  }
  if (node.props.children !== undefined) {
    props.children = Children.map(node.props.children as ReactNode, child => localize(child, locale));
  }
  return cloneElement(node, props);
}

export default function LocalizedContent({ children }: { children: ReactNode }) {
  const { locale } = useLocale();
  return locale === "ko" ? children : Children.map(children, child => localize(child, locale));
}
