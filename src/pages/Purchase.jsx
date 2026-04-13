import { motion } from 'framer-motion'
import { Check, ShoppingCart, MessageSquare, ExternalLink } from 'lucide-react'

const Purchase = () => {
  const plans = [
    {
      name: "D-GO 스타터",
      price: "문의",
      desc: "개인 및 프리랜서를 위한 필수 패키지",
      features: ["Vault (보안 저장소)", "도킹 스테이션", "보안 USB 1ea", "D-GO App 라이선스"],
      btn: "구매 문의"
    },
    {
      name: "D-GO 풀 패키지",
      price: "문의",
      desc: "전문적인 자산 관리를 위한 올인원 구성",
      features: ["스타터 전 구성 포함", "전용 보안 Scanner", "Voice Recording Device", "24/7 기술 지원"],
      btn: "구매 문의",
      highlight: true
    },
    {
      name: "D-GO 법인용",
      price: "별도 견적",
      desc: "기업 보안 및 업무 자동화 최적화",
      features: ["풀 패키지 다수 구성", "내부 업무 AI 자동화 모듈", "중앙 관리 콘솔", "현장 방문 설치 가이드"],
      btn: "법인 상담"
    }
  ]

  return (
    <div className="purchase-page" style={{ paddingTop: '10rem' }}>
      <section>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ textAlign: 'center', marginBottom: '6rem' }}
          >
            <h1 style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>Own Your <span className="text-gradient">Security</span></h1>
            <p style={{ color: 'var(--color-text-dim)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
              당신의 데이터 주권을 위한 완벽한 선택. 
              사용 환경에 맞는 D-GO 패키지를 선택하세요.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', marginBottom: '8rem' }}>
            {plans.map((plan, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="glass-card" 
                style={{ 
                  padding: '4rem 3rem', 
                  display: 'flex', 
                  flexDirection: 'column',
                  border: plan.highlight ? '1px solid var(--color-primary)' : '1px solid var(--glass-border)',
                  position: 'relative'
                }}
              >
                {plan.highlight && (
                  <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'var(--color-primary)', color: '#000', fontSize: '0.75rem', fontWeight: 800, padding: '0.3rem 0.8rem', borderRadius: '4px' }}>RECOMMENDED</div>
                )}
                <h3 style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>{plan.name}</h3>
                <p style={{ color: 'var(--color-text-dim)', fontSize: '0.9rem', marginBottom: '2rem' }}>{plan.desc}</p>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '2.5rem' }}>{plan.price}</div>
                
                <div style={{ flexGrow: 1, marginBottom: '3rem' }}>
                  <div style={{ fontWeight: 700, marginBottom: '1.5rem', fontSize: '0.95rem' }}>구성 포함 목록:</div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {plan.features.map((f, fi) => (
                      <li key={fi} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--color-text-dim)' }}>
                        <Check size={18} color="var(--color-primary)" /> {f}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button className={plan.highlight ? "btn-primary" : "btn-outline"} style={{ width: '100%', justifyContent: 'center' }}>
                  {plan.btn}
                </button>
              </motion.div>
            ))}
          </div>

          <div className="glass-card" style={{ padding: '4rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '3rem' }}>Other Purchase Channels</h2>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ width: '80px', height: '80px', background: 'rgba(255,255,255,0.03)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto', border: '1px solid var(--glass-border)' }}>
                  <ShoppingCart size={32} color="var(--color-primary)" />
                </div>
                <h4>Naver Store</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-dim)', marginTop: '0.5rem' }}>준비 중</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ width: '80px', height: '80px', background: 'rgba(255,255,255,0.03)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto', border: '1px solid var(--glass-border)' }}>
                  <ExternalLink size={32} color="var(--color-primary)" />
                </div>
                <h4>Partner Shops</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-dim)', marginTop: '0.5rem' }}>준비 중</p>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ width: '80px', height: '80px', background: 'rgba(255,255,255,0.03)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto', border: '1px solid var(--glass-border)' }}>
                  <MessageSquare size={32} color="var(--color-primary)" />
                </div>
                <h4>Contact Sales</h4>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-primary)', marginTop: '0.5rem', fontWeight: 700 }}>연중무휴 상담 지원</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Purchase
