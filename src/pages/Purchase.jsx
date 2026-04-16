import { motion } from 'framer-motion'
import { Mail, Phone, Building2, Package, Handshake } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

const channels = [
  { icon: Building2, badge: 'Enterprise',  title: '법인 · 기관 도입', desc: '대량 도입, 맞춤 구성, 온사이트 설치 및 교육까지 지원합니다.', subject: '법인 도입 문의' },
  { icon: Package,   badge: 'Single Unit', title: '단건 구매',        desc: '개인 사용자 및 소규모 팀을 위한 단건 구매 상담.',           subject: '단건 구매 문의' },
  { icon: Handshake, badge: 'Partnership', title: '파트너십 · 총판',  desc: '유통, 총판, 리셀러 파트너 모집. 지역·산업별 협력 가능.',      subject: '파트너십 문의' },
]

const Purchase = () => {
  return (
    <div style={{ paddingTop: 'clamp(140px, 18vw, 200px)' }}>
      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <motion.div
            initial="hidden" animate="visible" variants={fadeUp}
            style={{ maxWidth: 760, textAlign: 'center', margin: '0 auto 3rem' }}
          >
            <span className="eyebrow">Purchase</span>
            <h1 style={{ marginTop: '1rem', marginBottom: '1.25rem' }}>
              도입 상담부터 <span className="text-cyan">맞춤 제안까지.</span>
            </h1>
            <p style={{ fontSize: '1.05rem' }}>
              D-GO Vault는 전용 상담 채널을 통해 판매됩니다. 어떤 규모든 편하게 문의해 주세요.
            </p>
          </motion.div>

          <motion.div
            className="bento-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          >
            {channels.map((c) => {
              const Icon = c.icon
              return (
                <motion.article key={c.title} variants={fadeUp} className="bento-card b-col-4">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                    <span className="badge"><span className="dot" />{c.badge}</span>
                    <Icon size={22} color="var(--accent-cyan)" strokeWidth={2} />
                  </div>
                  <h3>{c.title}</h3>
                  <p style={{ marginTop: '0.85rem', marginBottom: '1.75rem' }}>{c.desc}</p>
                  <a
                    href={`mailto:biz@boanlinks.com?subject=${encodeURIComponent(`[D-GO Vault] ${c.subject}`)}`}
                    className="btn btn-outline"
                    style={{ width: '100%' }}
                  >
                    <Mail size={15} strokeWidth={2.4} />
                    문의하기
                  </a>
                </motion.article>
              )
            })}

            <motion.article variants={fadeUp} className="bento-card b-col-12" style={{ textAlign: 'center' }}>
              <span className="badge"><span className="dot" />Direct Line</span>
              <h2 style={{ marginTop: '1.25rem', marginBottom: '0.75rem' }}>가장 빠른 길은 직접 연락입니다</h2>
              <p style={{ marginBottom: '2rem' }}>평일 09:00 – 18:00 · 평균 응답 1영업일 이내</p>
              <div style={{ display: 'flex', gap: '0.8rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="mailto:biz@boanlinks.com?subject=%5BD-GO%20Vault%5D%20%EA%B5%AC%EB%A7%A4%20%EB%AC%B8%EC%9D%98" className="btn btn-primary">
                  <Mail size={16} strokeWidth={2.4} /> biz@boanlinks.com
                </a>
                <a href="tel:01032410427" className="btn btn-outline">
                  <Phone size={16} strokeWidth={2.4} /> 010-3241-0427
                </a>
              </div>
            </motion.article>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Purchase
