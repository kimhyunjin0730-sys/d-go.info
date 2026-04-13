import { motion } from 'framer-motion'
import { ArrowRight, ShieldCheck, Cpu, Clock, HardDrive, Download, ChevronRight } from 'lucide-react'
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
        {/* Background Gradients */}
        <div style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '60%',
          height: '60%',
          background: 'radial-gradient(circle, rgba(255, 176, 0, 0.05) 0%, transparent 70%)',
          zIndex: -1
        }} />
        
        <div className="container" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          alignItems: 'center',
          gap: '4rem'
        }}>
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} style={{
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
              <ShieldCheck size={16} />
              <span>No Data Server. Pure Physical Vault.</span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} style={{
              fontSize: 'clamp(3rem, 8vw, 5rem)',
              lineHeight: 1.1,
              marginBottom: '2rem',
              maxWidth: '600px'
            }}>
              당신의 데이터,<br />
              <span className="text-gradient">오직 당신의 손안에.</span>
            </motion.h1>
            
            <motion.p variants={itemVariants} style={{
              fontSize: '1.25rem',
              color: 'var(--color-text-dim)',
              marginBottom: '3rem',
              maxWidth: '540px'
            }}>
              D-GO는 외부 서버가 없는 완전 폐쇄형 데이터 금고입니다. 
              클라우드 해킹의 위협에서 벗어나, 당신의 소중한 자산을 직접 지키세요.
            </motion.p>
            
            <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <Link to="/purchase" className="btn-primary">
                지금 구매하기 <ArrowRight size={20} />
              </Link>
              <Link to="/product" className="btn-outline">
                제품 알아보기
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            style={{ position: 'relative' }}
          >
            <div style={{
              position: 'relative',
              borderRadius: '32px',
              overflow: 'hidden',
              boxShadow: '0 40px 100px rgba(0,0,0,0.5), 0 0 50px rgba(255, 176, 0, 0.1)',
              border: '1px solid var(--glass-border)'
            }}>
              <img 
                src="/images/hero.png" 
                alt="D-GO Vault" 
                style={{ width: '100%', display: 'block', transform: 'scale(1.02)' }} 
              />
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
