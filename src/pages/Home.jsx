import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight, Mail, ShieldCheck, Usb, ScanLine, FileCheck2,
  Cpu, WifiOff, Thermometer, BatteryCharging, Fingerprint, KeyRound,
} from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

const Badge = ({ children, variant = 'default' }) => (
  <span className={`badge${variant === 'ghost' ? ' badge--ghost' : ''}`}>
    {variant !== 'ghost' && <span className="dot" />}
    {children}
  </span>
)

const Home = () => {
  return (
    <div className="home-page">
      {/* =====================================================================
          HERO
      ===================================================================== */}
      <section style={{ paddingTop: 'clamp(140px, 18vw, 200px)', paddingBottom: 'clamp(40px, 6vw, 80px)' }}>
        <div className="container">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 1fr)',
              gap: 'clamp(2rem, 5vw, 4rem)',
              alignItems: 'center',
            }}
            className="hero-grid"
          >
            {/* Left — copy */}
            <div>
              <motion.div variants={fadeUp} style={{ marginBottom: '1.5rem' }}>
                <Badge>Quantum Data Vault · ICTK PUF</Badge>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                style={{
                  marginBottom: '1.5rem',
                  fontFamily: 'var(--font-display)',
                }}
              >
                당신의 데이터,
                <br />
                <span className="text-gradient">오직 당신의 손안에.</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                style={{
                  maxWidth: 560,
                  fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
                  lineHeight: 1.7,
                  color: 'var(--text-dim)',
                  marginBottom: '2.25rem',
                }}
              >
                D-GO Vault는 외부 서버 없는 완전 폐쇄형 데이터 금고입니다.
                PUF 하드웨어 기반 Zero-Knowledge 암호화로 해킹 경로를 원천 차단하고,
                당신의 자산을 당신이 직접 지킵니다.
              </motion.p>

              <motion.div variants={fadeUp} style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                <a
                  href="mailto:biz@boanlinks.com?subject=%5BD-GO%20Vault%5D%20%EB%8F%84%EC%9E%85%20%EB%AC%B8%EC%9D%98"
                  className="btn btn-primary"
                >
                  <Mail size={16} strokeWidth={2.4} />
                  도입 문의하기
                </a>
                <Link to="/technology" className="btn btn-outline">
                  기술 아키텍처 보기
                  <ArrowRight size={16} strokeWidth={2.4} />
                </Link>
              </motion.div>

              {/* Micro trust line */}
              <motion.div
                variants={fadeUp}
                style={{
                  marginTop: '2.5rem',
                  display: 'flex',
                  gap: '1.5rem',
                  flexWrap: 'wrap',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  color: 'var(--text-muted)',
                  letterSpacing: '0.02em',
                }}
              >
                <span>◆ PUF Hardware Key</span>
                <span>◆ RAID 1 Mirror</span>
                <span>◆ UL Class 125</span>
                <span>◆ Direct Wi-Fi</span>
              </motion.div>
            </div>

            {/* Right — hero render */}
            <motion.div
              variants={fadeUp}
              style={{
                position: 'relative',
                minHeight: 'clamp(300px, 42vw, 520px)',
              }}
            >
              {/* Radial cyan glow bg */}
              <div
                aria-hidden
                style={{
                  position: 'absolute',
                  inset: '-10% -10% -10% 0',
                  background:
                    'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(34, 211, 238, 0.25), transparent 60%)',
                  filter: 'blur(40px)',
                  zIndex: 0,
                }}
              />
              <img
                src="/images/renders/render-01.jpg"
                alt="D-GO Vault 45도 정면, 노브 LED 점등"
                style={{
                  position: 'relative',
                  width: '100%',
                  height: 'auto',
                  zIndex: 1,
                  filter: 'drop-shadow(0 40px 60px rgba(0,0,0,0.5)) drop-shadow(0 0 60px rgba(34,211,238,0.15))',
                }}
                loading="eager"
                decoding="async"
              />
            </motion.div>
          </motion.div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            .hero-grid { grid-template-columns: 1fr !important; }
            .hero-grid img { max-width: 440px; margin: 0 auto; display: block; }
          }
        `}</style>
      </section>

      {/* =====================================================================
          TRUST BAR
      ===================================================================== */}
      <section style={{ padding: 'clamp(30px, 5vw, 60px) 0' }}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: 'clamp(1.5rem, 4vw, 3.5rem)',
              padding: '1.75rem 2rem',
              borderRadius: 20,
              background: 'rgba(17, 27, 48, 0.4)',
              border: '1px solid rgba(148, 163, 184, 0.10)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <span className="eyebrow" style={{ color: 'var(--text-muted)' }}>Certified</span>
            <img src="/logo/ICTK.png"   alt="ICTK PUF" className="trust-logo" />
            <img src="/logo/KC인증.svg" alt="KC 인증"  className="trust-logo" />
            <span className="badge badge--ghost">UL Class 125</span>
            <span className="badge badge--ghost">Made in Korea</span>
            <span className="badge badge--ghost">Zero-Knowledge</span>
          </div>
        </div>
      </section>

      {/* =====================================================================
          FEATURE BENTO — 3 핵심 카드
      ===================================================================== */}
      <section>
        <div className="container">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            style={{ marginBottom: '3rem', maxWidth: 720 }}
          >
            <div className="eyebrow" style={{ marginBottom: '0.75rem' }}>Core Capabilities</div>
            <h2>
              하드웨어가 보증하는 <span className="text-cyan">세 가지 약속.</span>
            </h2>
            <p style={{ marginTop: '1rem', fontSize: '1.05rem' }}>
              D-GO Vault의 모든 보안 레이어는 클라우드가 아니라 <strong style={{ color: 'var(--text-primary)' }}>물리적 PUF 칩</strong>에 뿌리내립니다.
            </p>
          </motion.div>

          <motion.div
            className="bento-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {/* CARD 1 — SECURE PORT */}
            <motion.article variants={fadeUp} className="bento-card b-col-4">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <Badge>Secure Port Control</Badge>
                <Usb size={22} color="var(--accent-cyan)" strokeWidth={2} />
              </div>

              <h3>PUF가 열어야만<br />열리는 포트</h3>
              <p style={{ marginTop: '0.85rem' }}>
                관리자 앱에서 PUF 승인이 떨어진 순간에만 USB-C·네트워크 드라이브가 활성화됩니다.
                그 외 시간엔 물리적으로 존재해도 OS 레벨에서 부재합니다.
              </p>

              {/* Visual */}
              <div
                aria-hidden
                style={{
                  marginTop: '1.75rem',
                  padding: '1.1rem 1.25rem',
                  borderRadius: 14,
                  background: 'rgba(10, 15, 30, 0.55)',
                  border: '1px solid rgba(148, 163, 184, 0.12)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  lineHeight: 1.7,
                  color: 'var(--text-dim)',
                }}
              >
                <div><span style={{ color: 'var(--text-muted)' }}>$</span> port.status USB-C0</div>
                <div style={{ color: 'var(--status-crit)' }}>→ DENIED (PUF required)</div>
                <div style={{ marginTop: 6 }}><span style={{ color: 'var(--text-muted)' }}>$</span> auth.puf --verify</div>
                <div style={{ color: 'var(--status-ok)' }}>→ GRANTED · USB-C0 LIVE</div>
              </div>
            </motion.article>

            {/* CARD 2 — OCR SCAN */}
            <motion.article variants={fadeUp} className="bento-card b-col-4">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <Badge>Document OCR</Badge>
                <ScanLine size={22} color="var(--accent-cyan)" strokeWidth={2} />
              </div>

              <h3>카메라로 찍고,<br />원본은 금고로.</h3>
              <p style={{ marginTop: '0.85rem' }}>
                촬영된 문서는 OCR 후 PDF로 변환되어 본체에 암호화 저장됩니다.
                클라이언트 단말에는 <strong style={{ color: 'var(--text-primary)' }}>원본이 남지 않습니다.</strong>
              </p>

              {/* Visual — doc scan frame */}
              <div
                aria-hidden
                style={{
                  marginTop: '1.75rem',
                  position: 'relative',
                  height: 110,
                  borderRadius: 14,
                  background: 'linear-gradient(135deg, rgba(34,211,238,0.06), rgba(10,15,30,0.4))',
                  border: '1px solid rgba(34, 211, 238, 0.18)',
                  overflow: 'hidden',
                }}
              >
                {/* Corner brackets */}
                {[[6, 6, true, true], [6, 6, false, true], [6, 6, true, false], [6, 6, false, false]].map((c, i) => (
                  <span
                    key={i}
                    style={{
                      position: 'absolute',
                      width: 16, height: 16,
                      [c[2] ? 'left' : 'right']: 10,
                      [c[3] ? 'top' : 'bottom']: 10,
                      borderTop: c[3] ? '2px solid var(--accent-cyan)' : 'none',
                      borderBottom: !c[3] ? '2px solid var(--accent-cyan)' : 'none',
                      borderLeft: c[2] ? '2px solid var(--accent-cyan)' : 'none',
                      borderRight: !c[2] ? '2px solid var(--accent-cyan)' : 'none',
                    }}
                  />
                ))}
                {/* Scanning lines */}
                <div style={{ position: 'absolute', top: '30%', left: 24, right: 24, height: 2, background: 'rgba(148,163,184,0.25)' }} />
                <div style={{ position: 'absolute', top: '50%', left: 24, right: 40, height: 2, background: 'rgba(148,163,184,0.22)' }} />
                <div style={{ position: 'absolute', top: '70%', left: 24, right: 60, height: 2, background: 'rgba(148,163,184,0.18)' }} />
                <div
                  className="anim-breathe"
                  style={{
                    position: 'absolute',
                    left: 0, right: 0, top: '45%',
                    height: 2,
                    background: 'var(--accent-cyan)',
                    boxShadow: '0 0 16px var(--accent-cyan)',
                  }}
                />
              </div>
            </motion.article>

            {/* CARD 3 — DATA INTEGRITY */}
            <motion.article variants={fadeUp} className="bento-card b-col-4">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <Badge>Tamper-Proof</Badge>
                <FileCheck2 size={22} color="var(--accent-cyan)" strokeWidth={2} />
              </div>

              <h3>변조되면 바로<br />알 수 있도록.</h3>
              <p style={{ marginTop: '0.85rem' }}>
                모든 파일은 해시·생성자 ID·타임스탬프·디지털 서명·접근 이력을 묶어 저장.
                원본 증명과 법적 효력이 가능합니다.
              </p>

              {/* Visual — hash block */}
              <div
                aria-hidden
                style={{
                  marginTop: '1.75rem',
                  padding: '1rem 1.15rem',
                  borderRadius: 14,
                  background: 'rgba(10, 15, 30, 0.55)',
                  border: '1px solid rgba(148, 163, 184, 0.12)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  lineHeight: 1.7,
                  color: 'var(--text-dim)',
                  wordBreak: 'break-all',
                }}
              >
                <div style={{ color: 'var(--text-muted)' }}>SHA-256</div>
                <div style={{ color: 'var(--accent-cyan)' }}>7b4f…c2a9d8…041e…f3b</div>
                <div style={{ marginTop: 8, color: 'var(--text-muted)' }}>Signed · 2026-04-16 14:22 KST</div>
                <div style={{ marginTop: 4, display: 'flex', alignItems: 'center', gap: 6, color: 'var(--status-ok)' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Integrity verified
                </div>
              </div>
            </motion.article>
          </motion.div>
        </div>
      </section>

      {/* =====================================================================
          TECH TEASER — architecture preview + feature cluster
      ===================================================================== */}
      <section>
        <div className="container">
          <motion.div
            className="bento-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {/* Big architecture card */}
            <motion.article variants={fadeUp} className="bento-card b-col-8">
              <Badge>Zero-Knowledge Architecture</Badge>
              <h2 style={{ marginTop: '1.25rem', marginBottom: '0.85rem' }}>
                외부 서버 없이,<br />
                <span className="text-cyan">본체 안에서만 완결.</span>
              </h2>
              <p style={{ maxWidth: 520, marginBottom: '2rem' }}>
                PUF 칩이 생성한 휘발성 키는 본체를 떠나지 않습니다. 복호화도 재암호화도 전부 장치 내부에서.
                인터넷이 없어도 동작하고, 공격자가 가져갈 키가 애초에 존재하지 않습니다.
              </p>

              {/* Mini arch diagram */}
              <div
                aria-hidden
                style={{
                  marginTop: '1rem',
                  padding: '1.5rem',
                  borderRadius: 16,
                  background: 'rgba(10, 15, 30, 0.5)',
                  border: '1px solid rgba(148, 163, 184, 0.12)',
                  display: 'grid',
                  gridTemplateColumns: '1fr auto 1fr',
                  gap: '1rem',
                  alignItems: 'center',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                }}
              >
                <div style={{ textAlign: 'center' }}>
                  <div style={{ padding: '0.75rem', borderRadius: 12, border: '1px solid rgba(148,163,184,0.2)' }}>Mobile Client</div>
                  <div style={{ marginTop: 6, color: 'var(--text-muted)', fontSize: '0.68rem' }}>Admin App</div>
                </div>
                <div style={{ color: 'var(--accent-cyan)', textAlign: 'center', fontSize: '0.68rem' }}>
                  ◀── Direct Wi-Fi ──▶
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ padding: '0.75rem', borderRadius: 12, border: '1px solid rgba(34,211,238,0.35)', background: 'rgba(34,211,238,0.06)', color: 'var(--accent-cyan)' }}>
                    D-GO Vault
                  </div>
                  <div style={{ marginTop: 6, color: 'var(--text-muted)', fontSize: '0.68rem' }}>PUF Core · RAID1 · UPS</div>
                </div>
              </div>

              <Link to="/technology" className="btn btn-ghost" style={{ marginTop: '1.75rem', padding: '0.6rem 0', minHeight: 'auto' }}>
                전체 아키텍처 보기 <ArrowRight size={15} strokeWidth={2.4} />
              </Link>
            </motion.article>

            {/* Side pillar cards */}
            <motion.article variants={fadeUp} className="bento-card b-col-4">
              <Fingerprint size={22} color="var(--accent-cyan)" strokeWidth={2} style={{ marginBottom: '1rem' }} />
              <Badge variant="ghost">Hybrid 2FA</Badge>
              <h3 style={{ marginTop: '0.9rem' }}>키패드 + PUF 물리키</h3>
              <p style={{ marginTop: '0.5rem' }}>
                디지털 비밀번호와 반도체 지문을 동시에 요구하는 이중 잠금.
              </p>
            </motion.article>

            <motion.article variants={fadeUp} className="bento-card b-col-4">
              <Thermometer size={22} color="var(--accent-cyan)" strokeWidth={2} style={{ marginBottom: '1rem' }} />
              <Badge variant="ghost">Environmental Guard</Badge>
              <h3 style={{ marginTop: '0.9rem' }}>125°F 자동 셧다운</h3>
              <p style={{ marginTop: '0.5rem' }}>
                임계 온도 초과 시 디지털 섹션이 즉시 차단됩니다.
              </p>
            </motion.article>

            <motion.article variants={fadeUp} className="bento-card b-col-4">
              <KeyRound size={22} color="var(--accent-cyan)" strokeWidth={2} style={{ marginBottom: '1rem' }} />
              <Badge variant="ghost">Dual Recovery</Badge>
              <h3 style={{ marginTop: '0.9rem' }}>물리 키 연동 복구</h3>
              <p style={{ marginTop: '0.5rem' }}>
                디지털 인증 분실 시 물리 키 + 하드웨어 정보로 재호출.
              </p>
            </motion.article>
          </motion.div>
        </div>
      </section>

      {/* =====================================================================
          PRODUCT SHOT
      ===================================================================== */}
      <section>
        <div className="container">
          <motion.div
            className="bento-grid"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <motion.div variants={fadeUp} className="bento-card b-col-7" style={{ padding: 0, overflow: 'hidden' }}>
              <div
                style={{
                  position: 'relative',
                  minHeight: 360,
                  background: 'radial-gradient(ellipse at center, rgba(34,211,238,0.12), transparent 65%)',
                  display: 'grid',
                  placeItems: 'center',
                }}
              >
                <img
                  src="/images/renders/render-02.jpg"
                  alt="D-GO Vault 정면 노브 클로즈업"
                  style={{ width: '100%', height: 'auto' }}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </motion.div>

            <motion.article variants={fadeUp} className="bento-card b-col-5">
              <Badge>Industrial Design</Badge>
              <h2 style={{ marginTop: '1.1rem', marginBottom: '1rem' }}>
                금고의 무게,<br />오디오 장비의 정밀함.
              </h2>
              <p>
                항공 등급 알루미늄 섀시, CNC 노브, 청록색 LED 인디케이터. D-GO Vault는
                책상 위에 두고 쓰는 보안 인프라입니다.
              </p>

              <ul
                style={{
                  listStyle: 'none',
                  marginTop: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.85rem',
                }}
              >
                {[
                  ['Cpu',     'ICTK PUF Core'],
                  ['ShieldCheck', 'RAID 1 · Internal UPS'],
                  ['WifiOff', 'Direct Wi-Fi Only · 폐쇄망'],
                ].map(([, label]) => (
                  <li key={label} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-secondary)', fontSize: '0.92rem' }}>
                    <span style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--accent-cyan)', boxShadow: '0 0 8px var(--accent-cyan)' }} />
                    {label}
                  </li>
                ))}
              </ul>

              <Link to="/product" className="btn btn-outline" style={{ marginTop: '2rem' }}>
                제품 상세 보기 <ArrowRight size={15} strokeWidth={2.4} />
              </Link>
            </motion.article>
          </motion.div>
        </div>
      </section>

      {/* =====================================================================
          BOTTOM CTA
      ===================================================================== */}
      <section>
        <div className="container">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="bento-card b-col-12"
            style={{ textAlign: 'center', padding: 'clamp(2.5rem, 6vw, 4.5rem)' }}
          >
            <Badge>Get Started</Badge>
            <h2 style={{ marginTop: '1rem', marginBottom: '1rem' }}>
              지금 바로 <span className="text-cyan">D-GO Vault</span> 도입을 시작하세요.
            </h2>
            <p style={{ maxWidth: 560, margin: '0 auto 2.25rem' }}>
              법인·단체 도입, 파트너십, 기술 상담 모두 단일 채널에서 응답합니다.
            </p>
            <div style={{ display: 'flex', gap: '0.8rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="mailto:biz@boanlinks.com?subject=%5BD-GO%20Vault%5D%20%EB%8F%84%EC%9E%85%20%EB%AC%B8%EC%9D%98"
                className="btn btn-primary"
              >
                <Mail size={16} strokeWidth={2.4} />
                biz@boanlinks.com
              </a>
              <a href="tel:01032410427" className="btn btn-outline">
                010-3241-0427
              </a>
            </div>
            <p style={{ marginTop: '1.75rem', fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              평일 09:00 – 18:00 · Boanlinks Inc.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
