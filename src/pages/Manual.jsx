import { motion } from 'framer-motion'
import { Download, PlayCircle, ShieldInfo, HelpCircle } from 'lucide-react'

const Manual = () => {
  const faqs = [
    { q: "한컴오피스 Viewer는 필수인가요?", a: "파일 뷰어 기능을 사용하려면 필수입니다. 플레이스토어에서 무료로 설치하실 수 있습니다." },
    { q: "iOS(아이폰)에서 사용 가능한가요?", a: "현재 Android 전용이며, iOS 버전은 추후 출시 예정입니다." },
    { q: "보안키를 분실하면 데이터를 복구할 수 있나요?", a: "보안키는 재발급이 불가합니다. 반드시 최초 생성 시 안전한 곳에 별도 저장해 주세요." },
    { q: "네트워크가 없어도 작동하나요?", a: "예. D-GO는 기본적으로 폐쇄형(오프라인) 동작이 핵심입니다. 시점인증 서비스 연동 시에만 일시적 네트워크 접근이 필요합니다." }
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
            <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>Start Your <span className="text-gradient">Journey</span></h1>
            <p style={{ color: 'var(--color-text-dim)', fontSize: '1.2rem' }}>D-GO App 설치 및 초기 설정 가이드</p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem', marginBottom: '8rem' }}>
            <div className="glass-card" style={{ padding: '3rem' }}>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <PlayCircle color="var(--color-primary)" />
                설치 안내 (Android)
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {[
                  { step: "1", title: "APK 다운로드", desc: "아래 버튼을 눌러 설치 파일을 내려받습니다." },
                  { step: "2", title: "출처 허용", desc: "기기 설정에서 '출처를 알 수 없는 앱 설치'를 허용합니다." },
                  { step: "3", title: "권한 설정", desc: "앱 실행 후 모든 필수 권한을 허용합니다." },
                  { step: "4", title: "뷰어 설치", desc: "플레이스토어에서 '한컴오피스 Viewer'를 추가 설치합니다." }
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
                <ShieldInfo color="var(--color-primary)" />
                초기 설정 3단계
              </h3>
              <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.02)', borderRadius: '16px', marginBottom: '2rem' }}>
                <h4 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>① 저장 경로 지정</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-dim)' }}>설정 → [저장 경로 설정] → Vault 도킹 폴더 선택</p>
              </div>
              <div style={{ padding: '2rem', background: 'rgba(255,255,255,0.02)', borderRadius: '16px', marginBottom: '2rem' }}>
                <h4 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>② 자동 동기화 설정</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-dim)' }}>설정 → [자동 동기화] → 원하는 주기(예: 1시간) 선택</p>
              </div>
              <div style={{ padding: '2rem', background: 'rgba(255,176,0,0.05)', borderRadius: '16px', border: '1px solid rgba(255,176,0,0.2)' }}>
                <h4 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>③ 보안키 생성</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-dim)', marginBottom: '1rem' }}>설정 → [보안키 관리] → [새로 생성]</p>
                <div style={{ background: '#000', padding: '1rem', borderRadius: '8px', fontSize: '0.75rem', color: '#ff4d4d', fontWeight: 700 }}>
                  ⚠️ 보안키 분실 시 복구가 절대 불가능합니다!
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '8rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Download Hub</h2>
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
              <HelpCircle color="var(--color-primary)" /> FAQ
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
