import { motion } from 'framer-motion'
import { Download, PlayCircle, HelpCircle, AlertTriangle, Mail } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

const downloads = [
  { name: 'D-GO App APK',       version: 'v1.2.4', type: 'Android', status: 'available' },
  { name: 'Quick Start Guide',  version: 'KR',     type: 'PDF',     status: 'available' },
  { name: 'Full User Manual',   version: 'KR',     type: 'PDF',     status: 'pending'   },
  { name: 'English Manual',     version: 'EN',     type: 'PDF',     status: 'pending'   },
]

const steps = [
  { step: '01', title: 'APK 받기',    desc: '아래 버튼을 눌러 설치 파일을 내려받으세요.' },
  { step: '02', title: '출처 허용',    desc: "휴대폰 설정에서 '출처를 알 수 없는 앱'을 허용해야 설치됩니다." },
  { step: '03', title: '권한 켜기',    desc: '앱을 처음 열면 묻는 권한을 모두 허용해 주세요.' },
  { step: '04', title: '뷰어 설치',    desc: "플레이스토어에서 '한컴오피스 Viewer'를 함께 설치해 주세요." },
]

const faqs = [
  { q: '한컴오피스 Viewer를 꼭 깔아야 하나요?',  a: '파일 미리보기 기능을 쓰시려면 필요합니다. 플레이스토어에서 무료로 받을 수 있어요.' },
  { q: '아이폰에서도 쓸 수 있나요?',             a: '지금은 안드로이드만 됩니다. iOS 버전은 준비 중입니다.' },
  { q: '보안키를 잃어버리면 어떻게 되나요?',      a: '다시 발급할 방법이 없습니다. 처음 만들 때 종이에 적어두거나 다른 안전한 곳에 따로 보관해 주세요.' },
  { q: '인터넷 없이도 쓸 수 있나요?',             a: '네. D-GO는 원래 인터넷 없이 동작합니다. 다만 시점 증명을 받을 때 한 번씩 잠깐 연결이 필요합니다.' },
]

const Manual = () => {
  return (
    <div style={{ paddingTop: 'clamp(140px, 18vw, 200px)' }}>
      {/* Hero */}
      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} style={{ maxWidth: 760, marginBottom: '2rem' }}>
            <span className="eyebrow">Manual · Downloads</span>
            <h1 style={{ marginTop: '1rem', marginBottom: '1.25rem' }}>처음 쓰시는 분께</h1>
            <p style={{ fontSize: '1.05rem' }}>
              앱 설치부터 첫 보안키 만들기까지, 차근차근 안내해 드립니다.
            </p>
          </motion.div>

          {/* Temporary notice banner */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={fadeUp}
            className="bento-card"
            style={{
              padding: '1.25rem 1.5rem',
              borderColor: 'rgba(245, 158, 11, 0.3)',
              marginBottom: '2.5rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
              <AlertTriangle size={20} color="var(--status-warn)" style={{ flexShrink: 0, marginTop: 2 }} />
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--text-primary)', marginBottom: 4 }}>
                  임시 자료 안내
                </div>
                <p style={{ fontSize: '0.9rem', margin: 0 }}>
                  현재 게시된 매뉴얼과 앱은 <strong style={{ color: 'var(--text-primary)' }}>임시 레퍼런스</strong>입니다.
                  정식 D-GO Vault 앱 및 매뉴얼은 약 1주 내 업데이트 예정입니다.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Two-col */}
          <div className="bento-grid">
            {/* Install steps */}
            <motion.article initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={fadeUp} className="bento-card b-col-7">
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.5rem' }}>
                <PlayCircle size={22} color="var(--accent-cyan)" strokeWidth={2} />
                <span className="badge"><span className="dot" />Android Install</span>
              </div>
              <h3 style={{ marginBottom: '1.75rem' }}>앱 설치 (안드로이드)</h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {steps.map((s) => (
                  <div
                    key={s.step}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '52px 1fr',
                      gap: '1rem',
                      padding: '1rem 1.15rem',
                      borderRadius: 12,
                      background: 'rgba(10,15,30,0.5)',
                      border: '1px solid rgba(148,163,184,0.10)',
                    }}
                  >
                    <div style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent-cyan)', fontSize: '1.1rem', fontWeight: 700 }}>{s.step}</div>
                    <div>
                      <div style={{ fontWeight: 700, color: 'var(--text-primary)', marginBottom: 4 }}>{s.title}</div>
                      <div style={{ fontSize: '0.88rem', color: 'var(--text-dim)' }}>{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.article>

            {/* Downloads */}
            <motion.article initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={fadeUp} className="bento-card b-col-5">
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.5rem' }}>
                <Download size={22} color="var(--accent-cyan)" strokeWidth={2} />
                <span className="badge"><span className="dot" />Downloads</span>
              </div>
              <h3 style={{ marginBottom: '1.75rem' }}>자료 다운로드</h3>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {downloads.map((d) => {
                  const disabled = d.status === 'pending'
                  return (
                    <li
                      key={d.name}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 12,
                        padding: '0.95rem 1.15rem',
                        borderRadius: 12,
                        background: 'rgba(10,15,30,0.5)',
                        border: '1px solid rgba(148,163,184,0.10)',
                        opacity: disabled ? 0.55 : 1,
                      }}
                    >
                      <div>
                        <div style={{ color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.92rem' }}>{d.name}</div>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: 3 }}>
                          {d.type} · {d.version}
                        </div>
                      </div>
                      {disabled ? (
                        <span className="badge badge--ghost">수령 예정</span>
                      ) : (
                        <button className="btn btn-ghost" style={{ padding: '0.45rem 0.85rem', minHeight: 36, fontSize: '0.78rem' }}>
                          <Download size={14} strokeWidth={2.4} />
                          받기
                        </button>
                      )}
                    </li>
                  )
                })}
              </ul>
            </motion.article>

            {/* FAQ */}
            <motion.article initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={fadeUp} className="bento-card b-col-12">
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.5rem' }}>
                <HelpCircle size={22} color="var(--accent-cyan)" strokeWidth={2} />
                <span className="badge"><span className="dot" />FAQ</span>
              </div>
              <h3 style={{ marginBottom: '1.75rem' }}>자주 묻는 질문</h3>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
                {faqs.map((f, i) => (
                  <div
                    key={i}
                    style={{
                      padding: '1.1rem 1.25rem',
                      borderRadius: 12,
                      background: 'rgba(10,15,30,0.5)',
                      border: '1px solid rgba(148,163,184,0.10)',
                    }}
                  >
                    <div style={{ fontWeight: 700, color: 'var(--text-primary)', marginBottom: 8, fontSize: '0.95rem' }}>Q. {f.q}</div>
                    <div style={{ color: 'var(--text-dim)', fontSize: '0.88rem', lineHeight: 1.65 }}>{f.a}</div>
                  </div>
                ))}
              </div>
            </motion.article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="container">
          <div className="bento-card" style={{ textAlign: 'center', padding: 'clamp(2.5rem, 6vw, 4rem)' }}>
            <h2 style={{ marginBottom: '1rem' }}>해결되지 않는 문제가 있나요?</h2>
            <p style={{ marginBottom: '2rem' }}>담당자가 직접 도와드립니다.</p>
            <a href="mailto:biz@boanlinks.com?subject=%5BD-GO%20Vault%5D%20%EA%B8%B0%EC%88%A0%20%EC%A7%80%EC%9B%90" className="btn btn-primary">
              <Mail size={16} strokeWidth={2.4} />
              기술 지원 문의
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Manual
