import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router";
import { CONTACT, SALES_PARTNERS } from "../content";
import { BrandLockup } from "./Header";
import { useLocale } from "../i18n/useLocale";
import { PAGE_SLUGS } from "../i18n/config";

export default function Footer() {
  const { locale, common, path } = useLocale();
  return (
    <footer className="bg-navy-deep text-white">
      <div className="mx-auto w-full max-w-[1200px] px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1.2fr_1fr]">
          <div><BrandLockup tone="dark" /><p className="mt-5 text-[0.9375rem] leading-relaxed text-on-navy-2">{common.tagline}</p></div>
          <nav aria-label={common.links}>
            <h2 className="eyebrow mb-4 text-led">{common.links}</h2>
            <ul className="grid gap-x-4 gap-y-1">
              {PAGE_SLUGS.slice(1).map((slug, index) => <li key={slug}><Link to={path(`/${slug}`)} className="inline-flex min-h-9 items-center text-sm text-on-navy-2 transition-colors hover:text-white">{common.nav[index + 1]}</Link></li>)}
            </ul>
          </nav>
          <div>
            <h2 className="eyebrow mb-4 text-led">{common.contact}</h2>
            <ul className="space-y-2.5 text-sm text-on-navy-2">
              <li><a href={`mailto:${CONTACT.email}`} className="inline-flex min-h-9 max-w-full items-center gap-2.5 break-all hover:text-white"><Mail size={16} className="shrink-0" aria-hidden="true" />{CONTACT.email}</a></li>
              <li>{locale === "ko" ? <a href={CONTACT.tel} className="inline-flex min-h-9 items-center gap-2.5 hover:text-white"><Phone size={16} aria-hidden="true" />{CONTACT.phone}</a> : <p>{CONTACT.phone}<br />{common.koreaPhone}</p>}</li>
              <li><a href={CONTACT.kakaoChat} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-9 items-center gap-2.5 hover:text-white"><MessageCircle size={16} className="shrink-0" aria-hidden="true" />{common.kakao}</a></li>
              <li className="flex items-start gap-2.5"><MapPin size={16} className="mt-1 shrink-0" aria-hidden="true" /><span>{common.address}</span></li>
            </ul>
          </div>
          <div>
            <h2 className="eyebrow mb-4 text-led">{common.hoursTitle}</h2>
            <p className="text-sm leading-relaxed text-on-navy-2">{common.hours}<br />{common.holidays}</p>
            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3">
              <img src="/logo/ICTK.png" alt="ICTK PUF" className="h-5 w-auto opacity-90" style={{ filter: "brightness(0) invert(1)" }} />
              <img src="/logo/KC인증.svg" alt="KC" className="h-6 w-auto opacity-90" style={{ filter: "brightness(0) invert(1)" }} />
              <span className="rounded border border-white/25 px-2 py-0.5 font-mono text-xs tracking-wider text-on-navy-2">UL CLASS 125</span>
              <span className="rounded border border-white/25 px-2 py-0.5 font-mono text-xs tracking-wider text-on-navy-2">MADE IN KOREA</span>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/15 pt-8">
          <h2 className="eyebrow mb-3 text-led">{common.partners}</h2>
          <p className="flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-on-navy-2">{SALES_PARTNERS.map((partner) => <span key={partner} lang={/[가-힣]/.test(partner) ? "ko" : undefined}>{partner}</span>)}</p>
          <p className="mt-3 text-sm text-on-navy-2">{common.partnerNote}</p>
        </div>
        <div className="mt-8 flex flex-col gap-2 border-t border-white/15 pt-6 text-sm text-on-navy-2 md:flex-row md:justify-between"><p>© 2026 D-GO · {common.company}. {common.copyright}</p><p>{CONTACT.site}</p></div>
      </div>
    </footer>
  );
}
