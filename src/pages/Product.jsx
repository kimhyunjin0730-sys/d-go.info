import { motion } from 'framer-motion'
import { Shield, Layers, Zap, Lock, Database, FileText, Box, Fingerprint, KeyRound, ScanLine, Aperture, Gem, Disc3, Key, Hand, CircuitBoard } from 'lucide-react'

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
            <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>안에는 무엇이 있나</h1>
            <p style={{ color: 'var(--color-text-dim)', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
              D-GO 한 대 안에 들어 있는 부품과 작동 방식을 정리했습니다.
              하드웨어와 소프트웨어가 어떻게 맞물려서 외부 통로를 만들지 않는지 보여드립니다.
            </p>
          </motion.div>

          {/* Product Design Gallery */}
          <div style={{ marginBottom: '8rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1rem',
                background: 'rgba(255, 176, 0, 0.1)',
                borderRadius: '100px',
                color: 'var(--color-primary)',
                fontSize: '0.85rem',
                fontWeight: 700,
                marginBottom: '1.5rem',
                border: '1px solid rgba(255, 176, 0, 0.2)'
              }}>
                <Gem size={16} />
                <span>Industrial Design</span>
              </div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>실제 모습</h2>
              <p style={{ color: 'var(--color-text-dim)', fontSize: '1.1rem', maxWidth: '720px', margin: '0 auto' }}>
                알루미늄 본체에 도킹 포트와 잠금 메커니즘이 들어 있습니다. 손으로 들면 금고답게 묵직합니다.
              </p>
            </div>

            {/* Hero Render */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'relative',
                borderRadius: '32px',
                overflow: 'hidden',
                marginBottom: '2rem',
                boxShadow: '0 40px 100px rgba(0,0,0,0.5), 0 0 60px rgba(0, 255, 200, 0.1)',
                border: '1px solid var(--glass-border)',
                aspectRatio: '16 / 9',
                background: '#0a0a0a'
              }}
            >
              <img
                src="/images/renders/render-00.jpg"
                alt="D-GO 금고 대표 렌더링"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                loading="lazy"
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, transparent 55%, rgba(5,5,5,0.85) 100%)',
                pointerEvents: 'none'
              }} />
              <div style={{
                position: 'absolute',
                left: '2.5rem',
                bottom: '2rem',
                right: '2.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem'
              }}>
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-primary)', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>
                    FLAGSHIP
                  </div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800 }}>D-GO Vault · Matte Edition</div>
                </div>
                <div style={{ display: 'flex', gap: '1.5rem', color: 'var(--color-text-dim)', fontSize: '0.85rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Aperture size={16} color="var(--color-primary)" />
                    Precision CNC
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Shield size={16} color="var(--color-primary)" />
                    Tamper-Proof
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Render Thumbnails */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
              gap: '1.25rem'
            }}>
              {[
                { src: '/images/renders/render-01.jpg', icon: <Box size={18} />, label: 'Exterior', desc: '알루미늄 유니바디' },
                { src: '/images/renders/render-02.jpg', icon: <ScanLine size={18} />, label: 'Docking Port', desc: 'PUF 접점부' },
                { src: '/images/renders/render-03.jpg', icon: <Fingerprint size={18} />, label: 'Auth Surface', desc: '생체인증 영역' },
                { src: '/images/renders/render-04.jpg', icon: <KeyRound size={18} />, label: 'Vault Chamber', desc: '내장 금고 구조' },
                { src: '/images/renders/render-05.jpg', icon: <Layers size={18} />, label: 'Cross Section', desc: '다층 보안 설계' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="glass-card"
                  style={{
                    padding: 0,
                    overflow: 'hidden',
                    borderRadius: '20px'
                  }}
                >
                  <div style={{
                    aspectRatio: '4 / 3',
                    background: '#0a0a0a',
                    overflow: 'hidden'
                  }}>
                    <img
                      src={item.src}
                      alt={`D-GO ${item.label}`}
                      loading="lazy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  </div>
                  <div style={{ padding: '1.25rem 1.5rem' }}>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      color: 'var(--color-primary)',
                      marginBottom: '0.35rem'
                    }}>
                      {item.icon}
                      <span style={{ fontSize: '0.95rem', fontWeight: 700 }}>{item.label}</span>
                    </div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--color-text-dim)' }}>{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Dual Physical Interface — Diptych */}
          <div style={{ marginBottom: '8rem' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1rem',
                background: 'rgba(255, 176, 0, 0.1)',
                borderRadius: '100px',
                color: 'var(--color-primary)',
                fontSize: '0.85rem',
                fontWeight: 700,
                marginBottom: '1.5rem',
                border: '1px solid rgba(255, 176, 0, 0.2)'
              }}>
                <Hand size={16} />
                <span>Physical Interface</span>
              </div>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', lineHeight: 1.2 }}>
                금고를 여는 두 가지 방법
              </h2>
              <p style={{ color: 'var(--color-text-dim)', fontSize: '1.1rem', maxWidth: '720px', margin: '0 auto' }}>
                다이얼을 돌리거나, 키를 꽂거나. 둘 다 직접 손으로 해야 합니다.
                네트워크를 거치지 않으니 멀리서 뚫을 수 있는 길이 없습니다.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))',
              gap: '2rem'
            }}>
              {/* Card A: Rotary Dial */}
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card"
                style={{
                  padding: 0,
                  overflow: 'hidden',
                  borderRadius: '24px',
                  display: 'flex',
                  flexDirection: 'column'
                }}
                aria-labelledby="iface-dial-title"
              >
                <div style={{
                  position: 'relative',
                  aspectRatio: '16 / 10',
                  background: '#0a0a0a',
                  overflow: 'hidden'
                }}>
                  <img
                    src="/images/renders/render-02.jpg"
                    alt="D-GO 금고 전면의 로터리 다이얼. 금속 노브 주위에 시안 컬러 인덱스 마커가 4방향으로 배치되어 있음"
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(5,5,5,0) 40%, rgba(5,5,5,0.75) 100%)',
                    pointerEvents: 'none'
                  }} />
                  <div style={{
                    position: 'absolute',
                    top: '1.25rem',
                    left: '1.25rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.4rem 0.85rem',
                    background: 'rgba(10,10,10,0.7)',
                    backdropFilter: 'blur(8px)',
                    borderRadius: '100px',
                    border: '1px solid rgba(255,255,255,0.08)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    color: 'var(--color-primary)'
                  }}>
                    <Disc3 size={14} />
                    INPUT · 01
                  </div>
                </div>
                <div style={{ padding: '2rem 2rem 2.25rem' }}>
                  <h3 id="iface-dial-title" style={{
                    fontSize: '1.6rem',
                    marginBottom: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem'
                  }}>
                    <Disc3 size={22} color="var(--color-primary)" />
                    Rotary Dial
                  </h3>
                  <p style={{ color: 'var(--color-text-dim)', fontSize: '0.95rem', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                    돌릴 때마다 손끝에 클릭감이 옵니다. 화면 없이 다이얼만으로
                    저장·출력·기록 모드를 바꿀 수 있어서 익숙해지면 보지 않고도 조작할 수 있습니다.
                  </p>
                  <dl style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '0.75rem 1.5rem',
                    fontSize: '0.82rem',
                    margin: 0
                  }}>
                    {[
                      { k: 'Haptic', v: '24-step click' },
                      { k: 'Material', v: 'CNC Aluminum' },
                      { k: 'Indicator', v: 'Cyan LED × 4' },
                      { k: 'Interface', v: 'Offline-only' },
                    ].map((r) => (
                      <div key={r.k}>
                        <dt style={{ color: 'var(--color-text-dim)', marginBottom: '0.15rem' }}>{r.k}</dt>
                        <dd style={{ margin: 0, fontWeight: 700 }}>{r.v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </motion.article>

              {/* Card B: Physical Key */}
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="glass-card"
                style={{
                  padding: 0,
                  overflow: 'hidden',
                  borderRadius: '24px',
                  display: 'flex',
                  flexDirection: 'column'
                }}
                aria-labelledby="iface-key-title"
              >
                <div style={{
                  position: 'relative',
                  aspectRatio: '16 / 10',
                  background: '#0a0a0a',
                  overflow: 'hidden'
                }}>
                  <img
                    src="/images/renders/render-03.jpg"
                    alt="D-GO 금고 전면의 물리 키홀에 금속 실린더 키가 삽입되어 있는 모습"
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(5,5,5,0) 40%, rgba(5,5,5,0.75) 100%)',
                    pointerEvents: 'none'
                  }} />
                  <div style={{
                    position: 'absolute',
                    top: '1.25rem',
                    left: '1.25rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.4rem 0.85rem',
                    background: 'rgba(10,10,10,0.7)',
                    backdropFilter: 'blur(8px)',
                    borderRadius: '100px',
                    border: '1px solid rgba(255,255,255,0.08)',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                    color: 'var(--color-primary)'
                  }}>
                    <Key size={14} />
                    AUTH · 02
                  </div>
                </div>
                <div style={{ padding: '2rem 2rem 2.25rem' }}>
                  <h3 id="iface-key-title" style={{
                    fontSize: '1.6rem',
                    marginBottom: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem'
                  }}>
                    <Key size={22} color="var(--color-primary)" />
                    Physical Key
                  </h3>
                  <p style={{ color: 'var(--color-text-dim)', fontSize: '0.95rem', marginBottom: '1.25rem', lineHeight: 1.6 }}>
                    금속 실린더 안에 PUF 칩이 들어 있습니다. 이 키는 내 D-GO 한 대하고만
                    짝지어져 있어서, 다른 사람이 똑같이 만들 수 없습니다.
                  </p>
                  <dl style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '0.75rem 1.5rem',
                    fontSize: '0.82rem',
                    margin: 0
                  }}>
                    {[
                      { k: 'Auth Core', v: 'PUF Chip' },
                      { k: 'Form', v: 'Steel Cylinder' },
                      { k: 'Cloning', v: 'Impossible' },
                      { k: 'Pairing', v: '1 Key / 1 Vault' },
                    ].map((r) => (
                      <div key={r.k}>
                        <dt style={{ color: 'var(--color-text-dim)', marginBottom: '0.15rem' }}>{r.k}</dt>
                        <dd style={{ margin: 0, fontWeight: 700 }}>{r.v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </motion.article>
            </div>

            {/* Footer stripe */}
            <div style={{
              marginTop: '2rem',
              padding: '1.25rem 1.5rem',
              background: 'rgba(255, 176, 0, 0.04)',
              border: '1px solid rgba(255, 176, 0, 0.15)',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
              flexWrap: 'wrap',
              justifyContent: 'center',
              textAlign: 'center'
            }}>
              <CircuitBoard size={18} color="var(--color-primary)" />
              <span style={{ fontSize: '0.92rem', color: 'var(--color-text-dim)' }}>
                둘 다 <strong style={{ color: 'var(--color-text)' }}>인터넷을 거치지 않습니다.</strong>
                그래서 멀리서 가로챌 방법이 없습니다.
              </span>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem', marginBottom: '8rem' }}>
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
