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
            <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>편하게 물어보세요</h1>
            <p style={{ color: 'var(--color-text-dim)', fontSize: '1.2rem' }}>제품 사용 중에 막힌 부분이든, 도입 상담이든 한 줄만 남겨 주시면 됩니다</p>
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
                  <textarea rows="5" placeholder="어떤 점이 궁금하신지 편하게 적어주세요" style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', borderRadius: '12px', color: '#fff', resize: 'none' }} required></textarea>
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
                <h3 style={{ fontSize: '1.5rem', marginBottom: '2.5rem' }}>연락 방법</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                  <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                    <div style={{ color: 'var(--color-primary)' }}><Mail size={24} /></div>
                    <div>
                      <h4 style={{ marginBottom: '0.25rem' }}>이메일</h4>
                      <p style={{ color: 'var(--color-text-dim)', fontSize: '0.95rem' }}>support@d-go.info</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                    <div style={{ color: 'var(--color-primary)' }}><Phone size={24} /></div>
                    <div>
                      <h4 style={{ marginBottom: '0.25rem' }}>전화 상담</h4>
                      <p style={{ color: 'var(--color-text-dim)', fontSize: '0.95rem' }}>준비 중입니다. 그동안은 이메일로 부탁드려요</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                    <div style={{ color: 'var(--color-primary)' }}><Clock size={24} /></div>
                    <div>
                      <h4 style={{ marginBottom: '0.25rem' }}>응대 시간</h4>
                      <p style={{ color: 'var(--color-text-dim)', fontSize: '0.95rem' }}>평일 오전 9시 ~ 오후 6시</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                    <div style={{ color: 'var(--color-primary)' }}><MapPin size={24} /></div>
                    <div>
                      <h4 style={{ marginBottom: '0.25rem' }}>오시는 길</h4>
                      <p style={{ color: 'var(--color-text-dim)', fontSize: '0.95rem' }}>서울시 강남구 테헤란로</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-card" style={{ padding: '3rem', background: 'rgba(0, 255, 171, 0.05)', border: '1px solid rgba(0, 255, 171, 0.2)' }}>
                <h4 style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}>답변까지 보통 하루 안</h4>
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-dim)' }}>
                  평일에 보내주시면 24시간 안에 답변드리고 있어요. 기기에 문제가 생긴 경우라면 시리얼 번호도 함께 적어주시면 더 빨리 봐드릴 수 있습니다.
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
