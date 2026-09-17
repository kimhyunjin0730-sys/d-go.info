import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router";
import { CONTACT, SALES_PARTNERS } from "../content";
import { BrandLockup } from "./Header";

const QUICK_LINKS = [
  { to: "/product", label: "제품 소개" },
  { to: "/technology", label: "기술 정보" },
  { to: "/dashboard", label: "관리 대시보드" },
  { to: "/manual", label: "사용 매뉴얼" },
  { to: "/purchase", label: "구매 문의" },
  { to: "/support", label: "고객 지원" },
];

const WHITE_LOGO = { filter: "brightness(0) invert(1)" };

export default function Footer() {
  return (
    <footer className="bg-navy-deep text-white">
      <div className="mx-auto w-full max-w-[1200px] px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1.2fr_1fr]">
          <div>
            <BrandLockup tone="dark" />
            <p className="mt-5 text-[0.9375rem] leading-relaxed text-on-navy-2">
              인터넷과 분리된
              <br />
              독립형 데이터 안전금고.
            </p>
          </div>

          <nav aria-label="바로가기">
            <h2 className="eyebrow mb-4 text-led">바로가기</h2>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1 md:grid-cols-1">
              {QUICK_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="inline-flex min-h-9 items-center text-sm text-on-navy-2 transition-colors duration-200 hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="eyebrow mb-4 text-led">연락처</h2>
            <ul className="space-y-2.5 text-sm text-on-navy-2">
              <li>
                <a href={`mailto:${CONTACT.email}`} className="inline-flex min-h-9 items-center gap-2.5 transition-colors duration-200 hover:text-white">
                  <Mail size={16} aria-hidden="true" /> {CONTACT.email}
                </a>
              </li>
              <li>
                <a href={CONTACT.tel} className="inline-flex min-h-9 items-center gap-2.5 transition-colors duration-200 hover:text-white">
                  <Phone size={16} aria-hidden="true" /> {CONTACT.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle size={16} aria-hidden="true" /> 카카오톡 채널 (24시간 고객 지원)
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 flex-none" aria-hidden="true" />
                <span>
                  {CONTACT.addressLines[0]}
                  <br />
                  {CONTACT.addressLines[1]}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="eyebrow mb-4 text-led">운영 시간</h2>
            <p className="text-sm leading-relaxed text-on-navy-2">
              {CONTACT.hours}
              <br />
              {CONTACT.holidays}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3">
              <img src="/logo/ICTK.png" alt="ICTK PUF" className="h-5 w-auto opacity-90" style={WHITE_LOGO} />
              <img src="/logo/KC인증.svg" alt="KC 인증" className="h-6 w-auto opacity-90" style={WHITE_LOGO} />
              <span className="rounded border border-white/25 px-2 py-0.5 font-mono text-[0.6875rem] tracking-wider text-on-navy-2">UL CLASS 125</span>
              <span className="rounded border border-white/25 px-2 py-0.5 font-mono text-[0.6875rem] tracking-wider text-on-navy-2">MADE IN KOREA</span>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-8">
          <h2 className="eyebrow mb-3 text-led">Sales Partners</h2>
          <p className="flex flex-wrap gap-x-5 gap-y-1.5 text-sm text-on-navy-2">
            {SALES_PARTNERS.map((p) => (
              <span key={p}>{p}</span>
            ))}
          </p>
          <p className="mt-3 text-[0.8125rem] text-on-navy-2/80">본 제품은 국내 PUF 기술 선도 기업 ICTK와의 기술 협약을 통해 제조됩니다.</p>
        </div>

        <div className="mt-8 flex flex-col gap-2 border-t border-white/15 pt-6 text-[0.8125rem] text-on-navy-2/80 md:flex-row md:items-center md:justify-between">
          <p>© 2026 D-GO · {CONTACT.company}. All rights reserved.</p>
          <p>{CONTACT.site}</p>
        </div>
      </div>
    </footer>
  );
}
