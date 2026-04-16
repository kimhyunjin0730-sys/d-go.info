import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, Phone, Clock, MapPin, Send, Copy, Check } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

const Support = () => {
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '', type: '제품 구매 문의', message: '',
  })
  const [copied, setCopied] = useState(false)

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = `[D-GO Vault] ${form.type} - ${form.name || '문의'}`
    const body = [
      `이름: ${form.name}`,
      `회사/소속: ${form.company}`,
      `이메일: ${form.email}`,
      `연락처: ${form.phone}`,
      `문의 유형: ${form.type}`,
      ``,
      `--- 문의 내용 ---`,
      form.message,
    ].join('\n')
    window.location.href = `mailto:biz@boanlinks.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('biz@boanlinks.com')
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (_) {}
  }

  const inputStyle = {
    padding: '0.95rem 1.1rem',
    background: 'rgba(10, 15, 30, 0.55)',
    border: '1px solid rgba(148, 163, 184, 0.18)',
    borderRadius: 12,
    color: 'var(--text-primary)',
    fontFamily: 'var(--font-body)',
    fontSize: '0.95rem',
    width: '100%',
    transition: 'border-color 220ms var(--ease-out), background 220ms var(--ease-out)',
  }

  return (
    <div style={{ paddingTop: 'clamp(140px, 18vw, 200px)' }}>
      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} style={{ maxWidth: 720, marginBottom: '3rem', textAlign: 'center', margin: '0 auto 3rem' }}>
            <span className="eyebrow">Contact</span>
            <h1 style={{ marginTop: '1rem', marginBottom: '1rem' }}>편하게 물어보세요</h1>
            <p style={{ fontSize: '1.05rem' }}>
              제품 구매, 도입 상담, 기술 문의 — 모두 한 채널에서 응답합니다.
            </p>
          </motion.div>

          <div className="bento-grid">
            {/* Form */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={fadeUp} className="bento-card b-col-7">
              <span className="badge"><span className="dot" />Inquiry Form</span>
              <h3 style={{ marginTop: '1rem', marginBottom: '1.75rem' }}>1분이면 충분합니다</h3>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-dim)', letterSpacing: '0.04em' }}>이름 *</label>
                    <input type="text" required value={form.name} onChange={update('name')} placeholder="홍길동" style={inputStyle} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-dim)', letterSpacing: '0.04em' }}>회사 / 소속</label>
                    <input type="text" value={form.company} onChange={update('company')} placeholder="(선택)" style={inputStyle} />
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-dim)', letterSpacing: '0.04em' }}>이메일 *</label>
                    <input type="email" required value={form.email} onChange={update('email')} placeholder="you@example.com" style={inputStyle} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-dim)', letterSpacing: '0.04em' }}>연락처</label>
                    <input type="tel" value={form.phone} onChange={update('phone')} placeholder="010-0000-0000" style={inputStyle} />
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-dim)', letterSpacing: '0.04em' }}>문의 유형</label>
                  <select value={form.type} onChange={update('type')} style={{ ...inputStyle, appearance: 'none' }}>
                    <option>제품 구매 문의</option>
                    <option>법인 / 단체 도입 문의</option>
                    <option>기술 지원 / 오류 신고</option>
                    <option>파트너십 / 총판 문의</option>
                    <option>기타</option>
                  </select>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-dim)', letterSpacing: '0.04em' }}>문의 내용 *</label>
                  <textarea required value={form.message} onChange={update('message')} rows={5} placeholder="궁금한 점을 자유롭게 작성해 주세요." style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6 }} />
                </div>

                <button type="submit" className="btn btn-primary" style={{ marginTop: '0.5rem' }}>
                  <Send size={16} strokeWidth={2.4} />
                  메일로 보내기
                </button>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: 4 }}>
                  버튼을 누르면 메일 앱이 열립니다. 열리지 않으면 우측 정보로 직접 보내주세요.
                </p>
              </form>
            </motion.div>

            {/* Contact info */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={fadeUp} className="bento-card b-col-5">
              <span className="badge"><span className="dot" />Direct Channel</span>
              <h3 style={{ marginTop: '1rem', marginBottom: '1.75rem' }}>직접 연락하기</h3>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <li>
                  <div className="eyebrow" style={{ color: 'var(--text-muted)', marginBottom: 6 }}>Email</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <Mail size={18} color="var(--accent-cyan)" />
                    <a href="mailto:biz@boanlinks.com" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-mono)', fontSize: '0.95rem' }}>
                      biz@boanlinks.com
                    </a>
                    <button onClick={copyEmail} aria-label="이메일 복사" style={{ marginLeft: 'auto', padding: 6, borderRadius: 8, color: copied ? 'var(--status-ok)' : 'var(--text-muted)' }}>
                      {copied ? <Check size={16} /> : <Copy size={16} />}
                    </button>
                  </div>
                </li>

                <li>
                  <div className="eyebrow" style={{ color: 'var(--text-muted)', marginBottom: 6 }}>Phone</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <Phone size={18} color="var(--accent-cyan)" />
                    <a href="tel:01032410427" style={{ color: 'var(--text-primary)', fontFamily: 'var(--font-mono)', fontSize: '0.95rem' }}>
                      010-3241-0427
                    </a>
                  </div>
                </li>

                <li>
                  <div className="eyebrow" style={{ color: 'var(--text-muted)', marginBottom: 6 }}>Hours</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, color: 'var(--text-secondary)' }}>
                    <Clock size={18} color="var(--accent-cyan)" />
                    평일 09:00 – 18:00
                  </div>
                </li>

                <li>
                  <div className="eyebrow" style={{ color: 'var(--text-muted)', marginBottom: 6 }}>Address</div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.65 }}>
                    <MapPin size={18} color="var(--accent-cyan)" style={{ marginTop: 2, flexShrink: 0 }} />
                    <span>경기 하남시 미사대로 540<br />현대지식산업센터 한강미사2차 비동 614호</span>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Support
