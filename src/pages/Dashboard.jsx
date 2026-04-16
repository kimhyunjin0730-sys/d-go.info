import { motion } from 'framer-motion'
import { Thermometer, Droplets, HardDrive, BatteryCharging, ShieldAlert, Usb, Activity, Mail } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
}

const Widget = ({ icon: Icon, label, children, span = 'b-col-4', status = 'ok' }) => {
  const statusColor = status === 'ok' ? 'var(--status-ok)' : status === 'warn' ? 'var(--status-warn)' : 'var(--status-crit)'
  return (
    <motion.article variants={fadeUp} className={`bento-card ${span}`}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
        <span className="eyebrow" style={{ color: 'var(--text-muted)' }}>{label}</span>
        <Icon size={18} color="var(--accent-cyan)" strokeWidth={2} />
      </div>
      {children}
      <div style={{ marginTop: '1rem', display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: statusColor }}>
        <span style={{ width: 6, height: 6, borderRadius: 999, background: statusColor, boxShadow: `0 0 10px ${statusColor}` }} />
        {status === 'ok' ? 'NORMAL' : status === 'warn' ? 'WARNING' : 'CRITICAL'}
      </div>
    </motion.article>
  )
}

const Bigstat = ({ value, unit }) => (
  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.4rem' }}>
    <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 2.75rem)', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>{value}</span>
    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--text-muted)' }}>{unit}</span>
  </div>
)

const Dashboard = () => {
  return (
    <div style={{ paddingTop: 'clamp(140px, 18vw, 200px)' }}>
      {/* Hero */}
      <section style={{ paddingTop: 0 }}>
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} style={{ maxWidth: 760, marginBottom: '3rem' }}>
            <span className="eyebrow">Admin Dashboard · Concept Preview</span>
            <h1 style={{ marginTop: '1rem', marginBottom: '1.25rem' }}>
              금고의 상태,<br />
              <span className="text-gradient">손끝에서 실시간으로.</span>
            </h1>
            <p style={{ fontSize: '1.05rem', lineHeight: 1.7 }}>
              D-GO Vault 전용 모바일 앱은 온도·습도·RAID·UPS·개폐이력을 한 화면에 띄웁니다.
              아래는 정식 앱 출시 전 <strong style={{ color: 'var(--accent-cyan)' }}>콘셉트 프리뷰</strong>입니다.
            </p>
          </motion.div>

          {/* Bento dashboard */}
          <motion.div
            className="bento-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
          >
            <Widget icon={Thermometer} label="Internal Temperature" status="ok">
              <Bigstat value="26.4" unit="°C" />
              <div style={{ marginTop: 12, height: 6, borderRadius: 999, background: 'rgba(148,163,184,0.12)', overflow: 'hidden' }}>
                <div style={{ width: '32%', height: '100%', background: 'linear-gradient(90deg, var(--accent-cyan), var(--status-ok))' }} />
              </div>
              <div style={{ marginTop: 8, fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                Threshold · 125°F / 51.7°C
              </div>
            </Widget>

            <Widget icon={Droplets} label="Humidity" status="ok">
              <Bigstat value="42" unit="%" />
              <div style={{ marginTop: 12, height: 6, borderRadius: 999, background: 'rgba(148,163,184,0.12)', overflow: 'hidden' }}>
                <div style={{ width: '42%', height: '100%', background: 'var(--accent-cyan)' }} />
              </div>
              <div style={{ marginTop: 8, fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                Target · 30–60%
              </div>
            </Widget>

            <Widget icon={BatteryCharging} label="Internal UPS" status="ok">
              <Bigstat value="98" unit="%" />
              <div style={{ marginTop: 12, height: 6, borderRadius: 999, background: 'rgba(148,163,184,0.12)', overflow: 'hidden' }}>
                <div style={{ width: '98%', height: '100%', background: 'var(--status-ok)' }} />
              </div>
              <div style={{ marginTop: 8, fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                AC Power · Connected
              </div>
            </Widget>

            {/* Storage */}
            <Widget icon={HardDrive} label="Storage · RAID 1" span="b-col-6" status="ok">
              <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-end' }}>
                <Bigstat value="847.2" unit="GB / 2 TB" />
              </div>
              <div style={{ marginTop: 16, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                {['SSD-A', 'SSD-B'].map((d) => (
                  <div key={d} style={{ padding: '0.75rem 0.9rem', borderRadius: 10, background: 'rgba(10,15,30,0.55)', border: '1px solid rgba(148,163,184,0.12)' }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)' }}>{d}</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem', color: 'var(--status-ok)', marginTop: 3 }}>● SYNCED</div>
                  </div>
                ))}
              </div>
            </Widget>

            {/* Secure Port */}
            <Widget icon={Usb} label="Secure Port" span="b-col-6" status="warn">
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: '0.5rem' }}>
                <div
                  style={{
                    width: 52, height: 28,
                    borderRadius: 999,
                    background: 'rgba(245,158,11,0.15)',
                    border: '1px solid rgba(245,158,11,0.4)',
                    position: 'relative',
                  }}
                >
                  <div style={{ position: 'absolute', top: 2, left: 2, width: 22, height: 22, borderRadius: 999, background: 'var(--status-warn)' }} />
                </div>
                <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--text-primary)' }}>PUF Approval Required</span>
              </div>
              <div style={{ marginTop: 14, fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                USB-C0 · DENIED<br />
                USB-C1 · DENIED<br />
                NET-DRIVE · DENIED
              </div>
            </Widget>

            {/* Access log */}
            <Widget icon={Activity} label="Access Log" span="b-col-8">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginTop: '0.25rem' }}>
                {[
                  ['14:22', 'Digital unlock',    'Admin · iPhone · Direct Wi-Fi', 'ok'],
                  ['13:07', 'File uploaded',     'contract_0416.pdf · SHA verified', 'ok'],
                  ['11:40', 'Secure Port OPEN',  'USB-C0 · 4m 18s session', 'ok'],
                  ['09:15', 'Physical unlock',   'Keypad + PUF key', 'ok'],
                ].map((row, i) => (
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: '52px 1fr auto', gap: '1rem', alignItems: 'center', padding: '0.75rem 0.9rem', borderRadius: 10, background: 'rgba(10,15,30,0.45)', border: '1px solid rgba(148,163,184,0.08)' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>{row[0]}</span>
                    <div>
                      <div style={{ color: 'var(--text-primary)', fontSize: '0.88rem', fontWeight: 600 }}>{row[1]}</div>
                      <div style={{ color: 'var(--text-dim)', fontSize: '0.78rem', marginTop: 2 }}>{row[2]}</div>
                    </div>
                    <span style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--status-ok)', boxShadow: '0 0 10px var(--status-ok)' }} />
                  </div>
                ))}
              </div>
            </Widget>

            {/* Alerts */}
            <Widget icon={ShieldAlert} label="Alerts" span="b-col-4" status="ok">
              <div style={{ marginTop: '0.25rem' }}>
                <div style={{ padding: '0.85rem 1rem', borderRadius: 10, background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.25)' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--status-ok)', marginBottom: 4 }}>● ALL CLEAR</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-primary)' }}>충격·파괴 시도 없음</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: 4 }}>Last check · 2m ago</div>
                </div>
              </div>
            </Widget>
          </motion.div>

          {/* Concept watermark */}
          <div
            style={{
              marginTop: '2rem',
              textAlign: 'center',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: 'var(--text-muted)',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
            }}
          >
            ◆ Concept Preview — 실제 앱 UI는 변경될 수 있습니다 ◆
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="container">
          <div className="bento-card" style={{ textAlign: 'center', padding: 'clamp(2.5rem, 6vw, 4rem)' }}>
            <h2 style={{ marginBottom: '1rem' }}>앱 출시 소식을 가장 먼저 받고 싶으신가요?</h2>
            <p style={{ marginBottom: '2rem' }}>베타 참여 및 도입 협의는 biz@boanlinks.com 으로.</p>
            <a href="mailto:biz@boanlinks.com?subject=%5BD-GO%20Vault%5D%20%EC%95%B1%20%EB%B2%A0%ED%83%80" className="btn btn-primary">
              <Mail size={16} strokeWidth={2.4} />
              베타 참여 문의
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Dashboard
