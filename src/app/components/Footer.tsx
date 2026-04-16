import { Shield, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-hairline)] bg-[var(--bg-elevated)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <img src="/d-go.info/logo/dgo-icon.png" alt="D-GO" className="w-8 h-8 rounded-lg" />
              <span className="text-lg font-bold text-gradient-cyan">D-GO Vault</span>
            </div>
            <p className="text-sm text-[var(--text-secondary)] mb-4">
              No Data Server, Data Vault.<br />
              외부 서버 없이 안전하게 보관하는<br />
              자기주권형 데이터 금고
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
                  href="mailto:biz@boanlinks.com"
                  className="flex items-center gap-2 text-sm text-[var(--text-secondary)] hover:text-[var(--accent-cyan)] transition-colors"
                >
                  <Mail size={16} />
                  <span>biz@boanlinks.com</span>
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
                <img src="/d-go.info/logo/ICTK.png" alt="ICTK PUF" className="h-6 w-auto opacity-60 hover:opacity-100 transition-opacity" />
                <img src="/d-go.info/logo/KC인증.svg" alt="KC 인증" className="h-6 w-auto opacity-60 hover:opacity-100 transition-opacity" />
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

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[var(--border-hairline)]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[var(--text-muted)]">
              © 2026 보안링스 (Boanlinks). All rights reserved.
            </p>
            <div className="flex items-center gap-2">
              <img src="/d-go.info/logo/boanlinks.png" alt="Boanlinks" className="h-5 w-auto opacity-50" />
              <span className="text-sm text-[var(--text-muted)]">Powered by Boanlinks</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
