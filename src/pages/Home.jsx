import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, Cpu, Clock, HardDrive, ChevronRight, Lock, Fingerprint, WifiOff, KeyRound, ScanLine, Database } from 'lucide-react'
import { Link } from 'react-router-dom'

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  }

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero" style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '6rem',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Animated background decorations */}
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
          <div className="anim-rotate" style={{
            position: 'absolute',
            width: '560px', height: '560px',
            top: '-120px', right: '-160px',
            border: '1px solid rgba(0, 255, 200, 0.06)',
            borderRadius: '50%'
          }} />
          <div className="anim-rotate" style={{
            position: 'absolute',
            width: '380px', height: '380px',
            bottom: '-100px', left: '-120px',
            border: '1px solid rgba(0, 212, 255, 0.07)',
            borderRadius: '50%',
            animationDirection: 'reverse',
            animationDuration: '15s'
          }} />
          <div className="anim-glow" style={{
            position: 'absolute',
            width: '320px', height: '320px',
            top: '18%', left: '8%',
            background: 'radial-gradient(circle, rgba(0, 255, 200, 0.08), transparent 70%)',
            borderRadius: '50%'
          }} />
          <div className="anim-glow" style={{
            position: 'absolute',
            width: '260px', height: '260px',
            bottom: '18%', right: '12%',
            background: 'radial-gradient(circle, rgba(124, 58, 237, 0.09), transparent 70%)',
            borderRadius: '50%',
            animationDelay: '1.5s'
          }} />
        </div>

        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          alignItems: 'center',
          gap: '4rem',
          position: 'relative',
          zIndex: 1
        }}>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.55rem 1.1rem',
              background: 'rgba(0, 255, 200, 0.08)',
              borderRadius: '100px',
              color: 'var(--color-primary)',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '1.75rem',
              border: '1px solid rgba(0, 255, 200, 0.2)',
              fontFamily: 'var(--font-heading)'
            }}>
              <span className="anim-glow" style={{
                width: '8px', height: '8px', borderRadius: '50%',
                background: '#00ffc8', boxShadow: '0 0 10px #00ffc8'
              }} />
              No Data Server · Self-Sovereign Data
            </motion.div>

            <motion.h1 variants={itemVariants} style={{
              fontSize: 'clamp(3rem, 8vw, 5.5rem)',
              lineHeight: 1.05,
              marginBottom: '1.25rem',
              maxWidth: '640px',
              fontFamily: 'var(--font-heading)',
              letterSpacing: '-0.01em'
            }}>
              <span className="shimmer-text">QUANTUM</span><br />
              <span style={{ color: '#fff' }}>DATA VAULT</span>
            </motion.h1>

            <motion.p variants={itemVariants} style={{
              fontSize: '1.15rem',
              color: 'var(--color-text-dim)',
              marginBottom: '2.75rem',
              maxWidth: '540px',
              lineHeight: 1.8
            }}>
              내 손안의 완벽한 데이터 요새.<br />
              엣지 컴퓨팅 기반의 폐쇄형 데이터 금고로,
              클라우드 해킹의 위협에서 당신의 자산을 직접 지키세요.
            </motion.p>

            <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <Link to="/purchase" className="btn-primary">
                지금 구매하기 <ArrowRight size={18} />
              </Link>
              <Link to="/product" className="btn-outline">
                <ShieldCheck size={16} style={{ marginRight: '0.4rem' }} />
                자세히 보기
              </Link>
            </motion.div>
          </motion.div>

          {/* Floating Vault Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            style={{
              position: 'relative',
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            aria-hidden="true"
          >
            <div className="anim-float" style={{
              position: 'relative',
              width: 'min(320px, 80%)',
              aspectRatio: '1 / 1'
            }}>
              {/* Outer frame */}
              <div style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '32px',
                background: 'linear-gradient(145deg, rgba(0, 255, 200, 0.14), rgba(0, 212, 255, 0.06))',
                border: '1.5px solid rgba(0, 255, 200, 0.28)',
                transform: 'perspective(600px) rotateY(-8deg) rotateX(5deg)',
                boxShadow: '0 30px 80px rgba(0, 255, 200, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                overflow: 'hidden'
              }}>
                {/* Inner bezel */}
                <div style={{
                  position: 'absolute',
                  inset: '1.25rem',
                  borderRadius: '24px',
                  border: '1px solid rgba(0, 255, 200, 0.18)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  background: 'radial-gradient(circle at center, rgba(0, 255, 200, 0.05), transparent 70%)'
                }}>
                  <Lock size={56} color="#00ffc8" strokeWidth={1.4} />
                  <span style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.72rem',
                    letterSpacing: '0.35em',
                    color: '#00ffc8',
                    fontWeight: 700
                  }}>
                    VAULT
                  </span>
                </div>
                {/* Scan line */}
                <div className="anim-scan" style={{
                  position: 'absolute',
                  left: '0.75rem',
                  right: '0.75rem',
                  height: '2px',
                  background: 'linear-gradient(90deg, transparent, #00ffc8, transparent)',
                  opacity: 0.55,
                  boxShadow: '0 0 12px #00ffc8'
                }} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section style={{ padding: '4rem 0', background: 'var(--color-bg-secondary)' }}>
        <div className="container">
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '2rem',
            opacity: 0.6
          }}>
            {['AES-256 암호화', 'PUF 하드웨어 인증', 'SHA-256 시점인증', 'No Cloud', '물리적 폐쇄망'].map((badge) => (
              <div key={badge} style={{ fontWeight: 700, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <ShieldCheck size={18} color="var(--color-primary)" />
                {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '5rem' }}
          >
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Security Redefined.</h2>
            <p style={{ color: 'var(--color-text-dim)', fontSize: '1.2rem' }}>D-GO가 제공하는 타협 없는 보안 기술</p>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {[
              { icon: <HardDrive size={32} />, title: "완전 폐쇄형", desc: "외부 네트워크 미연결. 클라우드에 어떤 데이터 흔적도 남지 않습니다." },
              { icon: <Cpu size={32} />, title: "PUF 인증", desc: "반도체 지문 기반의 복제 불가능한 고유 인증키로 장치를 보호합니다." },
              { icon: <Clock size={32} />, title: "시점인증", desc: "SHA-256 해시와 타임스탬프로 법적 효력 있는 원본 증명을 지원합니다." }
            ].map((card, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card" 
                style={{ padding: '3rem', textAlign: 'left' }}
              >
                <div style={{ color: 'var(--color-primary)', marginBottom: '1.5rem' }}>{card.icon}</div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{card.title}</h3>
                <p style={{ color: 'var(--color-text-dim)' }}>{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Grid - Key Features */}
      <section style={{ padding: '8rem 0' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '4rem' }}
          >
            <span style={{
              display: 'inline-block',
              fontSize: '0.75rem',
              fontWeight: 700,
              letterSpacing: '0.25em',
              color: 'var(--color-primary)',
              fontFamily: 'var(--font-heading)',
              textTransform: 'uppercase',
              marginBottom: '1rem'
            }}>
              · Core Architecture ·
            </span>
            <h2 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', marginBottom: '1.25rem', letterSpacing: '-0.01em' }}>
              하나의 장치, <span className="shimmer-text">완전한 주권</span>
            </h2>
            <p style={{ color: 'var(--color-text-dim)', fontSize: '1.1rem', maxWidth: '620px', margin: '0 auto', lineHeight: 1.7 }}>
              클라우드가 아닌 당신의 손안에서 작동하는 6가지 핵심 기술
            </p>
          </motion.div>

          <div
            className="bento-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(6, 1fr)',
              gridAutoRows: 'minmax(180px, auto)',
              gap: '1.25rem'
            }}
          >
            {/* Feature 1 — Large hero tile: Closed Network */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card bento-tile bento-xl"
              style={{
                gridColumn: 'span 4',
                gridRow: 'span 2',
                padding: '3rem',
                position: 'relative',
                overflow: 'hidden',
                background: 'linear-gradient(135deg, rgba(0, 255, 200, 0.08) 0%, rgba(8, 12, 20, 0.6) 60%)',
                border: '1px solid rgba(0, 255, 200, 0.18)'
              }}
            >
              <div aria-hidden="true" style={{
                position: 'absolute',
                top: '-80px', right: '-80px',
                width: '320px', height: '320px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(0, 255, 200, 0.12), transparent 70%)',
                pointerEvents: 'none'
              }} />
              <WifiOff size={36} color="var(--color-primary)" strokeWidth={1.6} />
              <h3 style={{ fontSize: '1.9rem', margin: '1.5rem 0 1rem', maxWidth: '480px', lineHeight: 1.2 }}>
                네트워크는 끊고, <br />보안은 잇습니다
              </h3>
              <p style={{ color: 'var(--color-text-dim)', maxWidth: '460px', lineHeight: 1.75, fontSize: '1rem' }}>
                외부 인터넷과 완전히 단절된 폐쇄형 구조. 모든 연산은 기기 내부에서 완결되어,
                원격 침투와 클라우드 유출의 가능성을 원천 차단합니다.
              </p>
              <div style={{
                marginTop: '2rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                color: 'var(--color-primary)',
                fontFamily: 'var(--font-heading)',
                textTransform: 'uppercase'
              }}>
                AIR-GAPPED VAULT <ArrowRight size={14} />
              </div>
            </motion.div>

            {/* Feature 2 — PUF */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="glass-card bento-tile"
              style={{ gridColumn: 'span 2', gridRow: 'span 1', padding: '2rem' }}
            >
              <Fingerprint size={30} color="var(--color-primary)" strokeWidth={1.6} />
              <h3 style={{ fontSize: '1.2rem', margin: '1rem 0 0.5rem' }}>PUF 인증</h3>
              <p style={{ color: 'var(--color-text-dim)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                반도체 지문 기반 복제 불가능 키
              </p>
            </motion.div>

            {/* Feature 3 — AES-256 */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card bento-tile"
              style={{
                gridColumn: 'span 2',
                gridRow: 'span 1',
                padding: '2rem',
                background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.1), rgba(8, 12, 20, 0.5))',
                border: '1px solid rgba(124, 58, 237, 0.22)'
              }}
            >
              <KeyRound size={30} color="var(--color-accent)" strokeWidth={1.6} />
              <h3 style={{ fontSize: '1.2rem', margin: '1rem 0 0.5rem' }}>AES-256</h3>
              <p style={{ color: 'var(--color-text-dim)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                군사 등급 이중 암호화 저장
              </p>
            </motion.div>

            {/* Feature 4 — Timestamp */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="glass-card bento-tile"
              style={{ gridColumn: 'span 2', gridRow: 'span 1', padding: '2rem' }}
            >
              <Clock size={30} color="var(--color-primary)" strokeWidth={1.6} />
              <h3 style={{ fontSize: '1.2rem', margin: '1rem 0 0.5rem' }}>시점 인증</h3>
              <p style={{ color: 'var(--color-text-dim)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                SHA-256 해시 + 타임스탬프
              </p>
            </motion.div>

            {/* Feature 5 — Malware scan (wide) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card bento-tile"
              style={{
                gridColumn: 'span 4',
                gridRow: 'span 1',
                padding: '2.25rem 2.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1.75rem',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div aria-hidden="true" className="anim-scan" style={{
                position: 'absolute',
                left: 0, right: 0,
                height: '1.5px',
                background: 'linear-gradient(90deg, transparent, var(--color-primary), transparent)',
                opacity: 0.35,
                boxShadow: '0 0 12px var(--color-primary)',
                pointerEvents: 'none'
              }} />
              <div style={{
                flexShrink: 0,
                width: '64px', height: '64px',
                borderRadius: '16px',
                background: 'rgba(0, 255, 200, 0.08)',
                border: '1px solid rgba(0, 255, 200, 0.22)',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>
                <ScanLine size={30} color="var(--color-primary)" strokeWidth={1.6} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.35rem' }}>실시간 악성코드 스캔</h3>
                <p style={{ color: 'var(--color-text-dim)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                  유입되는 모든 파일을 장치 내부에서 즉시 검사합니다. 위협은 격리, 데이터는 무결성 유지.
                </p>
              </div>
            </motion.div>

            {/* Feature 6 — ID/PW Vault */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="glass-card bento-tile"
              style={{ gridColumn: 'span 2', gridRow: 'span 1', padding: '2rem' }}
            >
              <Database size={30} color="var(--color-primary)" strokeWidth={1.6} />
              <h3 style={{ fontSize: '1.2rem', margin: '1rem 0 0.5rem' }}>오프라인 ID 금고</h3>
              <p style={{ color: 'var(--color-text-dim)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                계정 · OTP · 인증서 로컬 보관
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4 Steps Section */}
      <section style={{ background: 'var(--color-bg-secondary)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Step into Security.</h2>
            <p style={{ color: 'var(--color-text-dim)', fontSize: '1.2rem' }}>데이터 자산 관리 4단계 프로세스</p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.5rem'
          }}>
            {[
              { step: "01", title: "데이터 접수", sub: "Digital Notary", desc: "스캐너·음성기기로 데이터 유입" },
              { step: "02", title: "도킹 인증", sub: "Docking Auth", desc: "물리적 결합 & PUF 인증" },
              { step: "03", title: "금고 보관", sub: "Secure Storage", desc: "Vault 이중 암호화 저장" },
              { step: "04", title: "감사 추적", sub: "Audit Control", desc: "실시간 접근 이력 모니터링" }
            ].map((item, i) => (
              <div key={i} style={{ position: 'relative' }}>
                <div className="glass-card" style={{ padding: '2.5rem', height: '100%', borderTop: '4px solid var(--color-primary)' }}>
                  <span style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--color-primary)', opacity: 0.5 }}>STEP {item.step}</span>
                  <h4 style={{ fontSize: '1.25rem', margin: '1rem 0 0.5rem 0' }}>{item.title}</h4>
                  <p style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-accent)', marginBottom: '1rem' }}>{item.sub}</p>
                  <p style={{ fontSize: '0.95rem', color: 'var(--color-text-dim)' }}>{item.desc}</p>
                </div>
                {i < 3 && <ChevronRight size={24} style={{ position: 'absolute', right: '-12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-primary)', opacity: 0.5, display: 'none' }} className="step-arrow" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '10rem 0' }}>
        <div className="container">
          <div className="glass-card" style={{ 
            padding: '5rem', 
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(255, 176, 0, 0.1) 0%, rgba(5, 5, 5, 0.4) 100%)',
            border: '1px solid rgba(255, 176, 0, 0.2)'
          }}>
            <h2 style={{ fontSize: '3.5rem', marginBottom: '2rem' }}>보안, 이제 당신이 주도하세요.</h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-dim)', marginBottom: '3rem', maxWidth: '700px', marginInline: 'auto' }}>
              D-GO는 단순한 저장소가 아닙니다. 당신의 주권과 프라이버시를 지키는 가장 강력한 방패입니다.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
              <Link to="/purchase" className="btn-primary">구매 상담 신청</Link>
              <Link to="/manual" className="btn-outline">매뉴얼 다운로드</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
