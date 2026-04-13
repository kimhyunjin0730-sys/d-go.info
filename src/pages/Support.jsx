import { motion } from 'framer-motion'
import { Send, Mail, Phone, Clock, MapPin } from 'lucide-react'

const Support = () => {
  return (
    <div className="support-page" style={{ paddingTop: '10rem' }}>
      <section>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ textAlign: 'center', marginBottom: '6rem' }}
          >
            <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>We're Here to <span className="text-gradient">Help</span></h1>
            <p style={{ color: 'var(--color-text-dim)', fontSize: '1.2rem' }}>D-GO 사용 중 궁금한 점이나 도입 문의를 남겨주세요.</p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '4rem' }}>
            {/* Contact Form */}
            <div className="glass-card" style={{ padding: '4rem' }}>
              <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: 700 }}>이름 *</label>
                    <input type="text" placeholder="홍길동" style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', borderRadius: '12px', color: '#fff' }} required />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                    <label style={{ fontSize: '0.9rem', fontWeight: 700 }}>연락처 *</label>
                    <input type="text" placeholder="010-0000-0000" style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', borderRadius: '12px', color: '#fff' }} required />
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: 700 }}>문의 유형 *</label>
                  <select style={{ padding: '1rem', background: 'rgba(5,5,5,1)', border: '1px solid var(--glass-border)', borderRadius: '12px', color: '#fff' }}>
                    <option>제품 구매 문의</option>
                    <option>기술 지원 / 오류 신고</option>
                    <option>법인 / 단체 도입 문의</option>
                    <option>파트너십 / 총판 문의</option>
                    <option>기타</option>
                  </select>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  <label style={{ fontSize: '0.9rem', fontWeight: 700 }}>문의 내용 *</label>
                  <textarea rows="5" placeholder="궁금하신 내용을 상세히 적어주세요." style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', borderRadius: '12px', color: '#fff', resize: 'none' }} required></textarea>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <input type="checkbox" id="privacy" required />
                  <label htmlFor="privacy" style={{ fontSize: '0.85rem', color: 'var(--color-text-dim)' }}>개인정보 수집 및 이용에 동의합니다. *</label>
                </div>

                <button type="submit" className="btn-primary" style={{ justifyContent: 'center' }}>
                  문의 접수하기 <Send size={20} />
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div className="glass-card" style={{ padding: '3rem' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '2.5rem' }}>Contact Channels</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                    <div style={{ color: 'var(--color-primary)' }}><Mail size={24} /></div>
                    <div>
                      <h4 style={{ marginBottom: '0.25rem' }}>Email Support</h4>
                      <p style={{ color: 'var(--color-text-dim)', fontSize: '0.95rem' }}>support@d-go.info</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                    <div style={{ color: 'var(--color-primary)' }}><Phone size={24} /></div>
                    <div>
                      <h4 style={{ marginBottom: '0.25rem' }}>Customer Hotline</h4>
                      <p style={{ color: 'var(--color-text-dim)', fontSize: '0.95rem' }}>상담 준비 중 (이메일 문의 권장)</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                    <div style={{ color: 'var(--color-primary)' }}><Clock size={24} /></div>
                    <div>
                      <h4 style={{ marginBottom: '0.25rem' }}>Operating Hours</h4>
                      <p style={{ color: 'var(--color-text-dim)', fontSize: '0.95rem' }}>평일 09:00 – 18:00 (KST)</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                    <div style={{ color: 'var(--color-primary)' }}><MapPin size={24} /></div>
                    <div>
                      <h4 style={{ marginBottom: '0.25rem' }}>Location</h4>
                      <p style={{ color: 'var(--color-text-dim)', fontSize: '0.95rem' }}>서울시 강남구 테헤란로 (D-GO Security Hub)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card" style={{ padding: '3rem', background: 'rgba(0, 255, 171, 0.05)', border: '1px solid rgba(0, 255, 171, 0.2)' }}>
                <h4 style={{ color: 'var(--color-accent)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>⚡ Fast Response</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-dim)' }}>
                  영업일 기준 평균 24시간 이내에 답변을 드립니다. 급한 기술 문의는 제품 시리얼 번호를 함께 남겨주시면 더욱 빠른 처리가 가능합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Support
