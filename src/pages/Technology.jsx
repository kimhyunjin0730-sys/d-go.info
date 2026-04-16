import { motion } from 'framer-motion'
import { Cpu, Fingerprint, Thermometer, Usb, KeyRound, ShieldCheck, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

const Pillar = ({ icon: Icon, badge, title, children, span = 'b-col-6' }) => (
  <motion.article variants={fadeUp} className={`bento-card ${span}`}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
      <span className="badge"><span className="dot" />{badge}</span>
      <Icon size={22} color="var(--accent-cyan)" strokeWidth={2} />
    </div>
    <h3>{title}</h3>
    <div style={{ marginTop: '0.85rem', color: 'var(--text-dim)', fontSize: '0.96rem', lineHeight: 1.7 }}>
      {children}
    </div>
  </motion.article>
)

const Technology = () => {
  return (
    <div style={{ paddingTop: 'clamp(140px, 18vw, 200px)' }}>
      {/* Hero */}
      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} style={{ maxWidth: 760 }}>
            <span className="eyebrow">Technology</span>
            <h1 style={{ marginTop: '1rem', marginBottom: '1.25rem' }}>
              Zero-Knowledge,<br />
              <span className="text-gradient">By Hardware.</span>
            </h1>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
              D-GO Vault의 모든 보안 레이어는 ICTK PUF 칩에 뿌리내립니다.
              암호화 키는 본체를 떠나지 않고, 외부 서버는 존재하지 않으며,
              물리·디지털 이중 잠금이 데이터를 지킵니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section>
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            className="bento-card"
            style={{ padding: 'clamp(1.5rem, 4vw, 3rem)' }}
          >
            <span className="badge"><span className="dot" />System Architecture</span>
            <h2 style={{ marginTop: '1.25rem', marginBottom: '2rem' }}>1:1 폐쇄망 · 본체 내부 완결 구조</h2>

            <div
              style={{
                padding: '2rem',
                borderRadius: 16,
                background: 'rgba(10, 15, 30, 0.5)',
                border: '1px solid rgba(148, 163, 184, 0.12)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                color: 'var(--text-dim)',
                whiteSpace: 'pre',
                overflowX: 'auto',
                lineHeight: 1.8,
              }}
            >
{`┌────────── Direct Wi-Fi (1:1, 폐쇄망) ──────────┐
│                                                 │
│   [ Mobile Client ]  ──pair──▶  [ D-GO Vault ] │
│                                       │         │
│                                  ┌────┴─────┐   │
│                                  │ PUF Core │   │
│                                  │  (ICTK)  │   │
│                                  └────┬─────┘   │
│              ┌──────────┬──────────┼──────────┐│
│              ▼          ▼          ▼          ▼│
│           RAID 1   Internal UPS  Sensor   Secure││
│           Mirror   (Battery)    (Temp/RH)  Port ││
└─────────────────────────────────────────────────┘`}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4 Pillars */}
      <section>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={fadeUp} style={{ maxWidth: 720, marginBottom: '3rem' }}>
            <span className="eyebrow">Four Pillars</span>
            <h2 style={{ marginTop: '0.75rem' }}>네 개의 기둥으로 받치는 보안</h2>
          </motion.div>

          <motion.div
            className="bento-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          >
            <Pillar icon={Cpu} badge="Core Logic">
              <strong style={{ color: 'var(--text-primary)' }}>PUF 기반 암호 제어.</strong> 반도체 특성을 이용한 고유 식별값 생성, 메모리 휘발성 키 관리,
              외부 서버 없는 Zero-Knowledge 암·복호화 — 모든 과정이 본체 내부에서 완결됩니다.
            </Pillar>

            <Pillar icon={KeyRound} badge="Dual Recovery">
              <strong style={{ color: 'var(--text-primary)' }}>물리-디지털 이중 복구.</strong> 디지털 인증을 잃어버려도 물리 키와 본체 하드웨어 정보를 조합해
              PUF 키를 재호출하거나 데이터를 복구하는 비상 시나리오를 제공합니다.
            </Pillar>

            <Pillar icon={Thermometer} badge="Environmental Guard">
              <strong style={{ color: 'var(--text-primary)' }}>환경 센싱과 RAID 1.</strong> 내부 온도 125°F 초과 시 디지털 섹션이 자동 셧다운되고, 두 개의 SSD에
              실시간 미러링되어 하드웨어 결함에 대비합니다. UL CLASS 125 준수.
            </Pillar>

            <Pillar icon={Usb} badge="Secure Port">
              <strong style={{ color: 'var(--text-primary)' }}>PUF 승인 시에만 열리는 포트.</strong> 외부 접근용 USB-C와 네트워크 드라이브는 PUF 승인이
              떨어진 순간에만 활성화됩니다. 그 외 시간엔 OS 레벨에서 부재합니다.
            </Pillar>
          </motion.div>
        </div>
      </section>

      {/* Reliability Table */}
      <section>
        <div className="container">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} className="bento-card" style={{ padding: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
            <span className="badge"><span className="dot" />Reliability Matrix</span>
            <h2 style={{ marginTop: '1.25rem', marginBottom: '1.75rem' }}>핵심 기능 한눈에 보기</h2>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.92rem', minWidth: 560 }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(148,163,184,0.18)' }}>
                    <th style={{ textAlign: 'left', padding: '0.85rem 0.5rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-display)', fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>구분</th>
                    <th style={{ textAlign: 'left', padding: '0.85rem 0.5rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-display)', fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>기능</th>
                    <th style={{ textAlign: 'left', padding: '0.85rem 0.5rem', color: 'var(--accent-cyan)', fontFamily: 'var(--font-display)', fontSize: '0.78rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>주요 내용</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['인증',     '하이브리드 2FA',     '키패드 + PUF 하드웨어 키 결합 인증'],
                    ['모니터링', '환경 안전 대시보드', '온도, 습도, 배터리, RAID 상태 실시간 표시'],
                    ['보안 제어','Secure Port 활성화', '물리 개방 + 앱 승인 시에만 USB·네트워크 드라이브 전송 허용'],
                    ['복구',     '물리 키 연동 복구',  '물리 보안키와 SW 인증을 통한 데이터 복구'],
                    ['신뢰성',   '데이터 무결성 보장', '시점 인증 및 양자 암호화 기술 적용 저장'],
                  ].map((row, i) => (
                    <tr key={i} style={{ borderBottom: '1px solid rgba(148,163,184,0.08)' }}>
                      <td style={{ padding: '0.95rem 0.5rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.82rem' }}>{row[0]}</td>
                      <td style={{ padding: '0.95rem 0.5rem', color: 'var(--text-primary)', fontWeight: 600 }}>{row[1]}</td>
                      <td style={{ padding: '0.95rem 0.5rem', color: 'var(--text-dim)' }}>{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="container">
          <div className="bento-card" style={{ textAlign: 'center', padding: 'clamp(2.5rem, 6vw, 4rem)' }}>
            <ShieldCheck size={32} color="var(--accent-cyan)" style={{ marginBottom: '1rem' }} />
            <h2 style={{ marginBottom: '1rem' }}>기술 상담이 필요하신가요?</h2>
            <p style={{ marginBottom: '2rem' }}>전문 엔지니어가 직접 응답합니다.</p>
            <a href="mailto:biz@boanlinks.com?subject=%5BD-GO%20Vault%5D%20%EA%B8%B0%EC%88%A0%20%EC%83%81%EB%8B%B4" className="btn btn-primary">
              <Mail size={16} strokeWidth={2.4} />
              biz@boanlinks.com
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Technology
