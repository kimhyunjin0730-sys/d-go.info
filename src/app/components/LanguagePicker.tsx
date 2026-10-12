import { useLocation, useNavigate } from "react-router";
import { Globe } from "lucide-react";
import { LANGUAGE_NAMES, LOCALES, localizedPath, type Locale } from "../i18n/config";
import { useLocale } from "../i18n/useLocale";

export default function LanguagePicker() {
  const location = useLocation();
  const navigate = useNavigate();
  const { locale, common } = useLocale();
  return (
    <label className="inline-flex min-h-11 shrink-0 items-center gap-1 rounded-lg border border-line bg-white px-2 text-sm text-navy">
      <Globe size={16} className="hidden sm:block" aria-hidden="true" />
      <span className="sr-only">{common.language}</span>
      <select
        value={locale}
        className="min-h-10 max-w-[5rem] sm:max-w-[6rem] cursor-pointer bg-transparent font-medium"
        onChange={(event) => {
          const next = event.target.value as Locale;
          try { localStorage.setItem("dgo-language", next); } catch { /* Storage may be disabled. */ }
          navigate(localizedPath(location.pathname, next) + location.search + location.hash);
        }}
      >
        {LOCALES.map((lang) => <option key={lang} value={lang} lang={lang}>{LANGUAGE_NAMES[lang]}</option>)}
      </select>
    </label>
  );
}
