import { useLocation } from "react-router";
import { COMMON } from "./common";
import { localeFromPath, localizedPath } from "./config";
import ko from "../locales/ko/app.json";
import en from "../locales/en/app.json";
import ja from "../locales/ja/app.json";

const APP_COPY = { ko, ja, en };
export function useLocale() {
  const { pathname } = useLocation();
  const locale = localeFromPath(pathname);
  return { locale, common: COMMON[locale], app: APP_COPY[locale], path: (url: string) => localizedPath(url, locale) };
}
