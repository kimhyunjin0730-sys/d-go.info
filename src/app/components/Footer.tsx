import { Shield, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-hairline)] bg-[var(--bg-elevated)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12">
        {/* Mobile: compact 2-col layout */}
        <div className="grid grid-cols-2 md:hidden gap-x-4 gap-y-5">
          {/* Logo + tagline */}
          <div className="col-span-2 flex items-center gap-2.5">
            <img src="/logo/dgo-icon.png" alt="D-GO" className="h-9 w-auto object-contain" />
            <span className="text-lg font-bold text-gradient-cyan">D-GO</span>
            <span className="text-sm font-medium text-[var(--text-secondary)]">Quantum Data Vault</span>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-xs mb-2">빠른 링크</h4>
            <ul className="space-y-1">
              {[
                { to: "/product", label: "제품 소개" },
                { to: "/technology", label: "기술 정보" },
                { to: "/manual", label: "매뉴얼" },
                { to: "/purchase", label: "구매 문의" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-xs text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-xs mb-2">연락처</h4>
            <ul className="space-y-1.5">
              <li>
                <a href="mailto:sales@d-go.info" className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)] hover:text-[var(--accent-cyan)]">
                  <Mail size={12} /> sales@d-go.info
                </a>
              </li>
              <li>
                <a href="tel:010-3241-0427" className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)] hover:text-[var(--accent-cyan)]">
                  <Phone size={12} /> 010-3241-0427
                </a>
              </li>
              <li className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)]">
                <MessageCircle size={12} /> 카카오톡 채널 (24시간)
              </li>
              <li className="flex items-start gap-1.5 text-xs text-[var(--text-secondary)]">
                <MapPin size={12} className="mt-0.5 flex-shrink-0" />
                <span>경기 하남시 미사대로 540<br />현대지식산업센터 한강미사2차 비동 614호</span>
              </li>
            </ul>
          </div>

          {/* Certifications + Hours — single row */}
          <div className="col-span-2 flex items-center justify-between pt-3 border-t border-[var(--border-hairline)]">
            <div className="flex items-center gap-2">
              <img src="/logo/ICTK.png" alt="ICTK PUF" className="h-4 w-auto opacity-80" style={{ filter: "brightness(0) saturate(100%) invert(55%) sepia(80%) saturate(500%) hue-rotate(160deg)" }} />
              <img src="/logo/KC인증.svg" alt="KC 인증" className="h-4 w-auto opacity-60" />
              <span className="badge text-[var(--text-muted)] text-[0.6rem]">UL CLASS 125</span>
            </div>
            <span className="text-[0.6rem] text-[var(--text-muted)]">평일 09-18 | 주말 휴무</span>
          </div>
        </div>

        {/* Desktop: original 4-col layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img src="/logo/dgo-icon.png" alt="D-GO" className="h-11 w-auto object-contain" />
              <span className="text-xl font-bold text-gradient-cyan">D-GO</span>
              <span className="text-base font-medium text-[var(--text-secondary)]">Quantum Data Vault</span>
            </div>
            <p className="text-sm text-[var(--text-secondary)] mb-4">
              완벽한 격리, 타협 없는 보안.<br />
              당신만의 물리적·디지털 데이터 요새<br />
              <span className="text-[var(--accent-cyan)]">"Data Goes Only Where You Want."</span>
            </p>
            <div className="flex items-center gap-2 text-[var(--accent-cyan)] text-sm">
              <Shield size={16} />
              <span className="badge">Quantum Data Vault</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">빠른 링크</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/product" className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-colors">
                  제품 소개
                </Link>
              </li>
              <li>
                <Link to="/technology" className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-colors">
                  기술 정보
                </Link>
              </li>
              <li>
                <Link to="/manual" className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-colors">
                  사용 매뉴얼
                </Link>
              </li>
              <li>
                <Link to="/purchase" className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-colors">
                  구매 문의
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">연락처</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:sales@d-go.info"
                  className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-colors"
                >
                  <Mail size={16} />
                  <span>sales@d-go.info</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:010-3241-0427"
                  className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-colors"
                >
                  <Phone size={16} />
                  <span>010-3241-0427</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                <MessageCircle size={16} />
                <span>카카오톡 채널 (24시간 고객 지원)</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span>
                  경기 하남시 미사대로 540<br />
                  현대지식산업센터 한강미사2차<br />
                  비동 614호
                </span>
              </li>
            </ul>
          </div>

          {/* Business Hours & Certifications */}
          <div>
            <h4 className="font-semibold mb-4">운영 시간</h4>
            <p className="text-sm text-[var(--text-secondary)] mb-4">
              평일 09:00 - 18:00<br />
              주말 및 공휴일 휴무
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 flex-wrap">
                <img src="/logo/ICTK.png" alt="ICTK PUF" className="h-6 w-auto opacity-80 hover:opacity-100 transition-opacity" style={{ filter: "brightness(0) saturate(100%) invert(55%) sepia(80%) saturate(500%) hue-rotate(160deg)" }} />
                <img src="/logo/KC인증.svg" alt="KC 인증" className="h-6 w-auto opacity-60 hover:opacity-100 transition-opacity" />
              </div>
              <div className="badge text-[var(--text-secondary)] inline-block px-2 py-1 bg-[var(--bg-primary)] rounded">
                UL CLASS 125
              </div>
              <div className="badge text-[var(--text-secondary)] inline-block px-2 py-1 bg-[var(--bg-primary)] rounded ml-2">
                MADE IN KOREA
              </div>
            </div>
          </div>
        </div>

        {/* Sales Partners */}
        <div className="mt-5 md:mt-12 pt-4 md:pt-8 border-t border-[var(--border-hairline)]">
          <h4 className="text-xs md:text-sm font-semibold text-[var(--text-secondary)] mb-3 text-center md:text-left">
            Sales Partners
          </h4>
          <div className="flex flex-wrap justify-center md:justify-start gap-x-3 md:gap-x-5 gap-y-2">
            {["진앤현시큐리티", "ICTK", "MTT GLOBAL", "쿠도커뮤니케이션", "솔모정보기술", "보헤미안 OS", "워킹랩"].map((p) => (
              <span key={p} className="text-[0.7rem] md:text-xs text-[var(--text-muted)]">
                {p}
              </span>
            ))}
          </div>
          <p className="text-[0.65rem] md:text-xs text-[var(--text-muted)] mt-3 text-center md:text-left">
            본 제품은 국내 PUF 기술 선도 기업 ICTK와의 기술 협약을 통해 제조됩니다.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="mt-5 md:mt-8 pt-4 md:pt-6 border-t border-[var(--border-hairline)]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-4">
            <p className="text-xs md:text-sm text-[var(--text-muted)]">
              © 2026 D-GO. All rights reserved.
            </p>
            <span className="text-xs md:text-sm text-[var(--text-muted)]">www.d-go.info</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
