import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer
      style={{
        position: 'relative',
        marginTop: 'clamp(80px, 10vw, 140px)',
        padding: '5rem 0 2.5rem',
        borderTop: '1px solid rgba(148, 163, 184, 0.10)',
        background:
          'linear-gradient(180deg, rgba(10, 15, 30, 0) 0%, rgba(10, 15, 30, 0.6) 40%, rgba(10, 15, 30, 0.9) 100%)',
      }}
    >
      {/* Top cyan hairline glow */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          top: -1,
          left: 0,
          right: 0,
          height: 1,
          background:
            'linear-gradient(90deg, transparent 0%, rgba(34, 211, 238, 0.45) 50%, transparent 100%)',
          filter: 'blur(0.5px)',
        }}
      />

      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '3rem',
            marginBottom: '3.5rem',
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                marginBottom: '1.25rem',
              }}
            >
              <div
                aria-hidden
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 10,
                  background: 'linear-gradient(135deg, #0B1226 0%, #1E293B 100%)',
                  border: '1px solid rgba(34, 211, 238, 0.35)',
                  display: 'grid',
                  placeItems: 'center',
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#22D3EE" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2 4 6v6c0 5 3.5 9.5 8 10 4.5-.5 8-5 8-10V6l-8-4z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  letterSpacing: '0.04em',
                  fontSize: '1.05rem',
                  color: 'var(--text-primary)',
                }}
              >
                D-GO <span style={{ color: 'var(--accent-cyan)' }}>VAULT</span>
              </span>
            </div>
            <p
              style={{
                color: 'var(--text-dim)',
                fontSize: '0.92rem',
                lineHeight: 1.7,
                maxWidth: 260,
              }}
            >
              Quantum Data Vault.
              <br />
              No Data Server — PUF 기반 완전 폐쇄형 데이터 금고.
            </p>

            {/* Boanlinks logo */}
            <div
              style={{
                marginTop: '1.5rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid rgba(148, 163, 184, 0.10)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                color: 'var(--text-muted)',
                fontSize: '0.78rem',
              }}
            >
              <img src="/logo/boanlinks.png" alt="Boanlinks" style={{ height: 20, width: 'auto', opacity: 0.75 }} />
              <span>Powered by Boanlinks</span>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="eyebrow" style={{ marginBottom: '1.1rem' }}>Product</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <li><Link to="/product"    style={{ color: 'var(--text-dim)' }}>제품 소개</Link></li>
              <li><Link to="/technology" style={{ color: 'var(--text-dim)' }}>기술 아키텍처</Link></li>
              <li><Link to="/dashboard"  style={{ color: 'var(--text-dim)' }}>대시보드 미리보기</Link></li>
              <li><Link to="/manual"     style={{ color: 'var(--text-dim)' }}>매뉴얼 · 다운로드</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="eyebrow" style={{ marginBottom: '1.1rem' }}>Company</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
              <li><Link to="/purchase" style={{ color: 'var(--text-dim)' }}>구매 · 도입 문의</Link></li>
              <li><Link to="/support"  style={{ color: 'var(--text-dim)' }}>문의센터</Link></li>
              <li>
                <a href="https://boanlinks.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-dim)' }}>
                  Boanlinks ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="eyebrow" style={{ marginBottom: '1.1rem' }}>Contact</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.88rem', color: 'var(--text-dim)' }}>
              <li style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                <Mail size={15} color="var(--accent-cyan)" style={{ marginTop: 2, flexShrink: 0 }} />
                <a href="mailto:biz@boanlinks.com" style={{ color: 'var(--text-primary)' }}>biz@boanlinks.com</a>
              </li>
              <li style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                <Phone size={15} color="var(--accent-cyan)" style={{ marginTop: 2, flexShrink: 0 }} />
                <a href="tel:01032410427" style={{ color: 'var(--text-primary)' }}>010-3241-0427</a>
              </li>
              <li style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                <Clock size={15} color="var(--accent-cyan)" style={{ marginTop: 2, flexShrink: 0 }} />
                <span>평일 09:00 – 18:00</span>
              </li>
              <li style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                <MapPin size={15} color="var(--accent-cyan)" style={{ marginTop: 2, flexShrink: 0 }} />
                <span>
                  경기 하남시 미사대로 540
                  <br />
                  현대지식산업센터 한강미사2차 비동 614호
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust / Certification row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '2rem',
            padding: '1.75rem 0',
            borderTop: '1px solid rgba(148, 163, 184, 0.10)',
            borderBottom: '1px solid rgba(148, 163, 184, 0.10)',
            marginBottom: '2rem',
          }}
        >
          <span className="eyebrow" style={{ color: 'var(--text-muted)' }}>Certified by</span>
          <img src="/logo/ICTK.png"   alt="ICTK PUF" className="trust-logo" />
          <img src="/logo/KC인증.svg" alt="KC 인증"  className="trust-logo" />
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              border: '1px solid rgba(148,163,184,0.2)',
              padding: '6px 12px',
              borderRadius: 999,
            }}
          >
            UL CLASS 125
          </span>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              border: '1px solid rgba(148,163,184,0.2)',
              padding: '6px 12px',
              borderRadius: 999,
            }}
          >
            Made in Korea
          </span>
        </div>

        {/* Bottom */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.78rem',
            color: 'var(--text-muted)',
          }}
        >
          <p>© {new Date().getFullYear()} Boanlinks Inc. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1.25rem' }}>
            <a href="#" style={{ color: 'var(--text-muted)' }}>개인정보처리방침</a>
            <a href="#" style={{ color: 'var(--text-muted)' }}>이용약관</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
