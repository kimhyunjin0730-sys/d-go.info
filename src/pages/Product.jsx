import { motion } from 'framer-motion'
import { Shield, Layers, Zap, Lock, Database, FileText } from 'lucide-react'

const Product = () => {
  const specs = [
    { label: "인증 방식", value: "PUF (Physical Unclonable Function) 칩 기반" },
    { label: "암호화", value: "AES-256 이중 암호화" },
    { label: "무결성 검증", value: "SHA-256 해시 + TSA 타임스탬프" },
    { label: "네트워크", value: "폐쇄형 (통신 모듈 없음)" },
    { label: "데이터 입력", value: "전용 Scanner / Voice Recorder / 보안 USB" },
    { label: "데이터 출력", value: "전용 보안 USB (단방향)" },
    { label: "앱 플랫폼", value: "Android (전용 앱)" },
    { label: "아날로그 보관", value: "인감·OTP·카드·통장 수납 공간 내장" },
  ]

  const comparison = [
    { item: "외부 해킹 차단", cloud: "❌ 취약", ssd: "△ 분실 위험", dgo: "✅ 폐쇄망 원천 차단" },
    { item: "물리적 인증", cloud: "❌", ssd: "❌", dgo: "✅ PUF 칩" },
    { item: "시점 인증 (법적 효력)", cloud: "❌", ssd: "❌", dgo: "✅ SHA-256 + TSA" },
    { item: "아날로그 자산 보관", cloud: "❌", ssd: "❌", dgo: "✅ 내장 금고" },
    { item: "탈취 시 데이터 보호", cloud: "❌", ssd: "❌", dgo: "✅ 보안키 자동 소멸" },
  ]

  return (
    <div className="product-page" style={{ paddingTop: '10rem' }}>
      <section>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ textAlign: 'center', marginBottom: '6rem' }}
          >
            <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>Tech Behind <span className="text-gradient">Security</span></h1>
            <p style={{ color: 'var(--color-text-dim)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
              D-GO는 하드웨어와 소프트웨어가 결합된 고도의 보안 생태계입니다. 
              단순한 저장 장치를 넘어 데이터 주권을 실현하는 핵심 기지입니다.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '8rem' }}>
            <div className="glass-card" style={{ padding: '3rem' }}>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Layers color="var(--color-primary)" />
                보안 계층
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  "Layer 0: 물리적 격리 (폐쇄망)",
                  "Layer 1: PUF 기반 장치 인증",
                  "Layer 2: 근접 조건 자동 잠금",
                  "Layer 3: 생체인증 / PIN",
                  "Layer 4: AES-256 이중 암호화",
                  "Layer 5: SHA-256 + TSA 시점인증"
                ].map((layer, i) => (
                  <div key={i} style={{ padding: '0.8rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', fontSize: '0.9rem' }}>
                    {layer}
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card" style={{ padding: '3rem' }}>
              <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Database color="var(--color-primary)" />
                취급 데이터
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {[
                  { icon: <FileText size={20} />, label: "스캔본", desc: "계약서, 증명서" },
                  { icon: <Lock size={20} />, label: "파일본", desc: "법인 기밀, 파일" },
                  { icon: <FileText size={20} />, label: "음성본", desc: "회의록, 메모" },
                  { icon: <Database size={20} />, label: "멀티미디어", desc: "사진, 영상" }
                ].map((type, i) => (
                  <div key={i} style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '12px' }}>
                    <div style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>{type.icon}</div>
                    <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>{type.label}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--color-text-dim)' }}>{type.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ marginBottom: '8rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>Technical Specifications</h2>
            <div className="glass-card" style={{ padding: '3rem', maxWidth: '900px', margin: '0 auto' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
                {specs.map((spec, i) => (
                  <div key={i} style={{ display: 'contents' }}>
                    <div style={{ fontWeight: 700, color: 'var(--color-primary)', borderBottom: '1px solid var(--glass-border)', padding: '1rem 0' }}>{spec.label}</div>
                    <div style={{ color: 'var(--color-text-dim)', borderBottom: '1px solid var(--glass-border)', padding: '1rem 0' }}>{spec.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', textAlign: 'center' }}>Competition Analysis</h2>
            <div className="glass-card" style={{ overflowX: 'auto', padding: '2rem' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center', minWidth: '600px' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--color-primary)' }}>
                    <th style={{ padding: '1.5rem', textAlign: 'left' }}>항목</th>
                    <th style={{ padding: '1.5rem' }}>일반 클라우드</th>
                    <th style={{ padding: '1.5rem' }}>외장 SSD</th>
                    <th style={{ padding: '1.5rem', color: 'var(--color-primary)' }}>D-GO</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid var(--glass-border)' }}>
                      <td style={{ padding: '1.2rem', textAlign: 'left', fontWeight: 600 }}>{row.item}</td>
                      <td style={{ padding: '1.2rem', color: 'var(--color-text-dim)' }}>{row.cloud}</td>
                      <td style={{ padding: '1.2rem', color: 'var(--color-text-dim)' }}>{row.ssd}</td>
                      <td style={{ padding: '1.2rem', fontWeight: 700 }}>{row.dgo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Product
