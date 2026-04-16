import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, ArrowRight, Cpu, HardDrive, BatteryCharging, Thermometer, Usb, Ruler } from 'lucide-react'
import { Link } from 'react-router-dom'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

const renders = [
  { src: '/images/renders/render-01.jpg', alt: '45도 정면, 노브 LED 점등' },
  { src: '/images/renders/render-02.jpg', alt: '정면 노브 클로즈업' },
  { src: '/images/renders/render-03.jpg', alt: '상단 사선 뷰' },
  { src: '/images/renders/render-00.jpg', alt: '후면 포트 사선 뷰' },
  { src: '/images/renders/render-05.jpg', alt: '정면 풀 뷰' },
  { src: '/images/renders/render-04.jpg', alt: '후면 정면 (USB-A · Thunderbolt ×3)' },
]

const specs = [
  { icon: Cpu,         label: 'Core',      value: 'ICTK PUF Core' },
  { icon: HardDrive,   label: 'Storage',   value: 'RAID 1 Mirror · NVMe' },
  { icon: BatteryCharging, label: 'Power', value: 'Internal UPS' },
  { icon: Thermometer, label: 'Thermal',   value: 'UL CLASS 125 (~125°F)' },
  { icon: Usb,         label: 'Ports',     value: 'USB-A · USB-C · TB ×3' },
  { icon: Ruler,       label: 'Build',     value: 'Aluminum Chassis' },
]

const Product = () => {
  const [active, setActive] = useState(0)

  return (
    <div style={{ paddingTop: 'clamp(140px, 18vw, 200px)' }}>
      {/* Hero */}
      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} style={{ maxWidth: 760, marginBottom: '2.5rem' }}>
            <span className="eyebrow">Product</span>
            <h1 style={{ marginTop: '1rem', marginBottom: '1.25rem' }}>
              D-GO <span className="text-cyan">Vault.</span>
            </h1>
            <p style={{ fontSize: '1.1rem' }}>
              Quantum Data Vault — 항공 등급 알루미늄 섀시에 ICTK PUF 코어와 RAID 1 미러링,
              Internal UPS, 환경 센싱을 한 몸에 담은 폐쇄형 데이터 금고.
            </p>
          </motion.div>

          {/* Gallery */}
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={fadeUp}
            className="bento-card"
            style={{ padding: 'clamp(1.25rem, 2.5vw, 2rem)' }}
          >
            <div
              style={{
                position: 'relative',
                borderRadius: 16,
                overflow: 'hidden',
                background: 'radial-gradient(ellipse at center, rgba(34,211,238,0.10), rgba(10,15,30,0.6) 65%)',
                minHeight: 320,
                display: 'grid',
                placeItems: 'center',
                marginBottom: '1.25rem',
              }}
            >
              <img
                src={renders[active].src}
                alt={`D-GO Vault — ${renders[active].alt}`}
                style={{ width: '100%', height: 'auto', maxHeight: 540, objectFit: 'contain' }}
                loading="eager"
                decoding="async"
              />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 10 }}>
              {renders.map((r, i) => (
                <button
                  key={r.src}
                  onClick={() => setActive(i)}
                  aria-label={`이미지 ${i + 1}`}
                  aria-current={active === i}
                  style={{
                    position: 'relative',
                    padding: 0,
                    borderRadius: 10,
                    overflow: 'hidden',
                    border: `1px solid ${active === i ? 'rgba(34,211,238,0.55)' : 'rgba(148,163,184,0.15)'}`,
                    background: 'rgba(10,15,30,0.6)',
                    aspectRatio: '16 / 10',
                    boxShadow: active === i ? '0 0 0 2px rgba(34,211,238,0.25)' : 'none',
                    transition: 'all 220ms var(--ease-out)',
                  }}
                >
                  <img src={r.src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: active === i ? 1 : 0.7 }} />
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Specs Bento */}
      <section>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={fadeUp} style={{ marginBottom: '2.5rem', maxWidth: 720 }}>
            <span className="eyebrow">Specifications</span>
            <h2 style={{ marginTop: '0.75rem' }}>금고급 신뢰성, 워크스테이션급 정밀함</h2>
          </motion.div>

          <motion.div
            className="bento-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
          >
            {specs.map((s) => {
              const Icon = s.icon
              return (
                <motion.article key={s.label} variants={fadeUp} className="bento-card b-col-4">
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: '0.85rem' }}>
                    <Icon size={20} color="var(--accent-cyan)" strokeWidth={2} />
                    <span className="eyebrow" style={{ color: 'var(--text-muted)' }}>{s.label}</span>
                  </div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.2rem', color: 'var(--text-primary)' }}>
                    {s.value}
                  </div>
                </motion.article>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="container">
          <div className="bento-card" style={{ textAlign: 'center', padding: 'clamp(2.5rem, 6vw, 4rem)' }}>
            <h2 style={{ marginBottom: '1rem' }}>기술 아키텍처를 더 깊게 보고 싶다면</h2>
            <p style={{ marginBottom: '2rem' }}>PUF 기반 Zero-Knowledge 구조와 4 Pillar를 따로 정리했습니다.</p>
            <div style={{ display: 'flex', gap: '0.8rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/technology" className="btn btn-primary">
                기술 페이지로 <ArrowRight size={16} strokeWidth={2.4} />
              </Link>
              <a href="mailto:biz@boanlinks.com?subject=%5BD-GO%20Vault%5D%20%EC%A0%9C%ED%92%88%20%EB%AC%B8%EC%9D%98" className="btn btn-outline">
                <Mail size={16} strokeWidth={2.4} />
                도입 문의
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Product
