import { motion } from 'framer-motion'
import { Download, PlayCircle, ShieldQuestion, HelpCircle } from 'lucide-react'

const Manual = () => {
  const faqs = [
    { q: "한컴오피스 Viewer를 꼭 깔아야 하나요?", a: "파일 미리보기 기능을 쓰시려면 필요합니다. 플레이스토어에서 무료로 받을 수 있어요." },
    { q: "아이폰에서도 쓸 수 있나요?", a: "지금은 안드로이드만 됩니다. iOS 버전은 준비 중입니다." },
    { q: "보안키를 잃어버리면 어떻게 되나요?", a: "다시 발급할 방법이 없습니다. 처음 만들 때 종이에 적어두시거나 다른 안전한 곳에 따로 보관해 주세요." },
    { q: "인터넷 없이도 쓸 수 있나요?", a: "네. D-GO는 원래 인터넷 없이 동작합니다. 다만 시점 증명을 받을 때 한 번씩 잠깐 연결이 필요합니다." }
  ]

  const downloads = [
    { name: "D-GO App APK", version: "v1.2.4", type: "Android", link: "#" },
    { name: "Quick Start Guide", version: "KR", type: "PDF", link: "#" },
    { name: "Full User Manual", version: "KR", type: "PDF", status: "수령 예정" },
    { name: "English Manual", version: "EN", type: "PDF", status: "수령 예정" }
  ]

  return (
    <div className="manual-page" style={{ paddingTop: '10rem' }}>
      <section>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ textAlign: 'center', marginBottom: '6rem' }}
          >
            <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>처음 쓰시는 분께</h1>
            <p style={{ color: 'var(--color-text-dim)', fontSize: '1.2rem' }}>앱 설치부터 첫 보안키 만들기까지, 차근차근 안내해 드립니다</p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem', marginBottom: '8rem' }}>
            <div className="glass-card" style={{ padding: '3rem' }}>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <PlayCircle color="var(--color-primary)" />
                앱 설치 (안드로이드)
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {[
                  { step: "1", title: "APK 받기", desc: "아래 버튼을 눌러서 설치 파일을 내려받으세요." },
                  { step: "2", title: "출처 허용", desc: "휴대폰 설정에서 '출처를 알 수 없는 앱'을 허용해 주셔야 설치가 됩니다." },
                  { step: "3", title: "권한 켜기", desc: "앱을 처음 열면 권한을 묻는데, 모두 허용해 주세요." },
                  { step: "4", title: "뷰어 설치", desc: "플레이스토어에서 '한컴오피스 Viewer'를 함께 설치해 주세요." }
                ].map((s) => (
                  <div key={s.step} style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{ width: '40px', height: '40px', background: 'var(--color-primary)', color: '#000', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, flexShrink: 0 }}>{s.step}</div>
                    <div>
                      <h4 style={{ marginBottom: '0.5rem' }}>{s.title}</h4>
                      <p style={{ color: 'var(--color-text-dim)', fontSize: '0.9rem' }}>{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button className="btn-primary" style={{ width: '100%', marginTop: '3rem', justifyContent: 'center' }}>
                <Download size={20} /> D-GO App APK 다운로드
              </button>
            </div>

            <div className="glass-card" style={{ padding: '3rem' }}>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <ShieldQuestion color="var(--color-primary)" />
                처음 한 번만 해두면 되는 세 가지
              </h3>
              <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.02)', borderRadius: '16px', marginBottom: '2rem' }}>
                <h4 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>① 저장할 곳 정하기</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-dim)' }}>설정 → [저장 경로 설정] 에서 Vault 도킹 폴더를 골라 주세요.</p>
              </div>
              <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.02)', borderRadius: '16px', marginBottom: '2rem' }}>
                <h4 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>② 자동 백업 주기 정하기</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-dim)' }}>설정 → [자동 동기화] 에서 1시간 등 원하는 간격을 골라 주세요.</p>
              </div>
              <div style={{ padding: '2rem', background: 'rgba(255,176,0,0.05)', borderRadius: '16px', border: '1px solid rgba(255,176,0,0.2)' }}>
                <h4 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>③ 보안키 만들기</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-dim)', marginBottom: '1rem' }}>설정 → [보안키 관리] → [새로 생성] 을 누르면 됩니다.</p>
                <div style={{ background: '#000', padding: '1rem', borderRadius: '8px', fontSize: '0.75rem', color: '#ff4d4d', fontWeight: 700 }}>
                  주의: 한 번 만든 보안키는 잃어버리면 다시 만들 수 없습니다. 꼭 어딘가에 적어두세요.
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '8rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>받을 수 있는 파일</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {downloads.map((item, i) => (
                <div key={i} className="glass-card" style={{ padding: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <h4 style={{ marginBottom: '0.25rem' }}>{item.name}</h4>
                    <p style={{ fontSize: '0.8rem', color: 'var(--color-text-dim)' }}>{item.version} | {item.type}</p>
                  </div>
                  {item.status ? (
                     <span style={{ fontSize: '0.8rem', color: 'var(--color-text-dim)', background: 'rgba(255,255,255,0.05)', padding: '0.4rem 0.8rem', borderRadius: '4px' }}>{item.status}</span>
                  ) : (
                    <button style={{ color: 'var(--color-primary)' }}><Download size={24} /></button>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
              <HelpCircle color="var(--color-primary)" /> 자주 묻는 질문
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {faqs.map((faq, i) => (
                <div key={i} className="glass-card" style={{ padding: '2rem' }}>
                  <h4 style={{ color: 'var(--color-primary)', marginBottom: '1rem', fontSize: '1.1rem' }}>{faq.q}</h4>
                  <p style={{ color: 'var(--color-text-dim)', fontSize: '0.95rem' }}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Manual
