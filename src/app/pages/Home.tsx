import { ArrowRight, Shield, Lock, FileCheck, Fingerprint, Scan, Database, Cpu, HardDrive, BatteryCharging, Thermometer, Usb, Wifi } from "lucide-react";
import { Link } from "react-router";

const specs = [
  { icon: Cpu, label: "PUF Core", value: "ICTK 반도체 지문" },
  { icon: HardDrive, label: "Storage", value: "RAID 1 NVMe" },
  { icon: BatteryCharging, label: "Power", value: "Internal UPS" },
  { icon: Thermometer, label: "Thermal", value: "UL CLASS 125" },
  { icon: Usb, label: "Ports", value: "USB-A · C · TB×3" },
  { icon: Wifi, label: "Network", value: "Direct Wi-Fi Only" },
];

export default function Home() {
  return (
    <div className="w-full">
      {/* ── Hero: Product + Value Prop ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-cyan-500/8 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6 relative">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left — copy + CTA */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-cyan-soft)] border border-[var(--accent-cyan)]/20 mb-4">
                <Shield size={14} className="text-[var(--accent-cyan)]" />
                <span className="badge text-[var(--accent-cyan)]">Quantum Data Vault</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4 leading-tight">
                당신의 데이터,<br />
                <span className="text-gradient-cyan">오직 당신의 손안에.</span>
              </h1>

              <p className="text-base text-[var(--text-secondary)] mb-5 leading-relaxed max-w-lg">
                외부 연결을 철저히 차단하는 폐쇄망 기반 구조.<br />
                PUF 하드웨어가 직접 수행하는 Zero-Knowledge 암호망으로<br />
                절대적인 데이터 주권을 실현합니다.
              </p>

              <div className="flex flex-wrap gap-3 mb-5">
                <a
                  href="mailto:biz@boanlinks.com"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--accent-cyan)] text-[var(--bg-primary)] font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  도입 문의하기 <ArrowRight size={16} />
                </a>
                <Link
                  to="/product"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[var(--accent-cyan)] text-[var(--accent-cyan)] font-semibold text-sm hover:bg-[var(--accent-cyan-soft)] transition-colors"
                >
                  제품 보기
                </Link>
              </div>

              {/* Trust strip inline */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[var(--border-hairline)]">
                <img src="/d-go.info/logo/ICTK.png" alt="ICTK PUF" className="h-6 w-auto opacity-80" style={{ filter: "brightness(0) saturate(100%) invert(55%) sepia(80%) saturate(500%) hue-rotate(160deg)" }} />
                <img src="/d-go.info/logo/KC인증.svg" alt="KC 인증" className="h-6 w-auto opacity-60" />
                <span className="badge text-[var(--text-muted)]">UL CLASS 125</span>
                <span className="badge text-[var(--text-muted)]">MADE IN KOREA</span>
              </div>
            </div>

            {/* Right — product image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/15 to-blue-600/10 rounded-2xl blur-2xl"></div>
              <img
                src="/d-go.info/images/renders/render-02.jpg"
                alt="D-GO Vault 45도 정면, 노브 LED 점등"
                className="relative rounded-xl shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Specs Strip ── */}
      <section className="border-y border-[var(--border-hairline)] bg-[var(--bg-elevated)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
            {specs.map((s) => (
              <div key={s.label} className="flex items-center gap-2.5 py-2">
                <s.icon size={16} className="text-[var(--accent-cyan)] flex-shrink-0" />
                <div className="min-w-0">
                  <div className="badge text-[var(--text-muted)] text-[0.6rem]">{s.label}</div>
                  <div className="text-xs font-semibold text-[var(--text-primary)] truncate">{s.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Feature Grid — compact 3-col ── */}
      <section className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl">주요 기능</h2>
              <p className="text-sm text-[var(--text-secondary)] mt-1">기업급 보안 기술을 개인용 데이터 금고에</p>
            </div>
            <Link to="/technology" className="hidden md:inline-flex items-center gap-1 text-sm text-[var(--accent-cyan)] font-semibold hover:gap-2 transition-all">
              기술 아키텍처 <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { icon: Lock, badge: "SECURE PORT", title: "PUF가 열어야만 열리는 포트", desc: "PUF 승인 시에만 USB-C / 네트워크 드라이브가 활성화. 그 외 시간엔 OS 레벨에서 차단." },
              { icon: Scan, badge: "DOCUMENT OCR", title: "카메라로 찍고, 원본은 금고로", desc: "촬영 문서 → OCR → PDF 변환 → 본체 암호화 저장. 클라이언트에 원본 미 잔류." },
              { icon: FileCheck, badge: "TAMPER-PROOF", title: "변조되면 바로 알 수 있도록", desc: "해시·타임스탬프·디지털 서명·접근 이력 일괄 저장. 원본 증명 및 법적 효력." },
            ].map((f) => (
              <div key={f.badge} className="glass-card glass-card-hover p-5 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-radial from-cyan-400/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-lg bg-[var(--accent-cyan-soft)] flex items-center justify-center">
                      <f.icon className="text-[var(--accent-cyan)]" size={18} />
                    </div>
                    <span className="badge text-[var(--accent-cyan)]">{f.badge}</span>
                  </div>
                  <h3 className="text-base font-semibold mb-2">{f.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Technology + Product Image — side by side ── */}
      <section className="py-10 md:py-14 bg-[var(--bg-elevated)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-6 items-start">
            {/* Left 3/5 — tech pillars */}
            <div className="lg:col-span-3">
              <div className="flex items-center gap-2 mb-4">
                <span className="badge text-[var(--accent-cyan)]">ZERO-KNOWLEDGE ARCHITECTURE</span>
              </div>
              <h2 className="text-2xl md:text-3xl mb-5">
                하드웨어 기반 제로 지식 암호화
              </h2>

              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { icon: Shield, title: "1:1 Direct Wi-Fi", desc: "외부 네트워크 미연결, 본체와 모바일 기기만 1:1 폐쇄형 연결" },
                  { icon: Fingerprint, title: "PUF 이중 복구", desc: "디지털 인증 분실 시 물리 키 + HW 정보로 PUF 키 재호출" },
                  { icon: Database, title: "RAID 1 + UPS", desc: "두 개 SSD 실시간 미러링 + 내장 배터리 전원 보호" },
                  { icon: Thermometer, title: "125°F 자동 셧다운", desc: "임계 온도 초과 시 디지털 섹션 즉시 차단, 데이터 보호" },
                ].map((p) => (
                  <div key={p.title} className="glass-card p-4 flex gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[var(--accent-cyan-soft)] flex items-center justify-center flex-shrink-0">
                      <p.icon size={16} className="text-[var(--accent-cyan)]" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold mb-1">{p.title}</h4>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link to="/technology" className="inline-flex items-center gap-2 text-sm text-[var(--accent-cyan)] font-semibold hover:gap-3 transition-all mt-4">
                전체 아키텍처 보기 <ArrowRight size={14} />
              </Link>
            </div>

            {/* Right 2/5 — product image */}
            <div className="lg:col-span-2">
              <div className="glass-card p-4 rounded-xl flex flex-col gap-3">
                <div className="text-center group">
                  <div className="relative overflow-hidden rounded-lg mb-2">
                    <img
                      src="/d-go.info/images/renders/render-01.jpg"
                      alt="D-GO Vault USB 보안키 분리"
                      className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-2 left-2 badge bg-[var(--bg-overlay)] backdrop-blur text-[var(--text-primary)]">
                      🔒 보안키 분리
                    </div>
                  </div>
                  <span className="text-xs text-[var(--text-secondary)]">네트워크 및 포트 물리적 차단 상태</span>
                </div>

                <div className="flex flex-col items-center justify-center my-1 relative">
                  <div className="absolute w-full h-[1px] bg-[var(--border-hairline)] top-1/2 -z-10"></div>
                  <div className="bg-[var(--bg-elevated)] px-3 py-1 rounded-full flex flex-col items-center justify-center border border-[var(--border-hairline)] shadow-sm">
                    <span className="text-[10px] font-semibold text-[var(--accent-cyan)] uppercase tracking-wider mb-0.5">PUF 인증</span>
                    <ArrowRight size={16} className="text-[var(--accent-cyan)] rotate-90" />
                  </div>
                </div>

                <div className="text-center group">
                  <div className="relative overflow-hidden rounded-lg mb-2">
                    <img
                      src="/d-go.info/images/renders/render-03.jpg"
                      alt="D-GO Vault USB 보안키 삽입"
                      className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-2 left-2 badge bg-[var(--accent-cyan)] text-[var(--bg-primary)]">
                      🔓 보안키 삽입
                    </div>
                  </div>
                  <span className="text-xs text-[var(--text-secondary)]">암호화 해제 및 데이터 접근 활성화</span>
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <Link to="/product" className="inline-flex items-center gap-2 text-sm text-[var(--accent-cyan)] font-semibold hover:gap-3 transition-all">
                  제품 상세 보기 <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Dashboard Preview — compact ── */}
      <section className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/8 to-blue-600/8 rounded-2xl blur-2xl"></div>
              <img
                src="https://images.unsplash.com/photo-1767449441925-737379bc2c4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzc2MjQwNTk1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="대시보드 미리보기"
                className="relative rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <span className="badge text-[var(--accent-cyan)]">ADMIN DASHBOARD</span>
              <h2 className="text-2xl md:text-3xl mt-3 mb-3">금고의 상태, 실시간으로</h2>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                모바일 앱으로 온도·습도·RAID·UPS·Secure Port·개폐 이력을 한 화면에서 모니터링하고 제어합니다.
              </p>
              <ul className="space-y-2 mb-4">
                {["온도/습도 실시간 모니터링", "RAID 1 미러링 상태 확인", "Secure Port 원격 승인", "개폐 이력 · 충격 감지 알림"].map((t) => (
                  <li key={t} className="flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-cyan)]"></span>
                    <span className="text-[var(--text-secondary)]">{t}</span>
                  </li>
                ))}
              </ul>
              <Link to="/dashboard" className="inline-flex items-center gap-2 text-sm text-[var(--accent-cyan)] font-semibold hover:gap-3 transition-all">
                대시보드 자세히 보기 <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA — compact ── */}
      <section className="py-10 md:py-14 bg-gradient-to-br from-cyan-500/8 to-blue-600/8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl mb-4">
            지금 D-GO Vault를 도입해 보세요
          </h2>
          <p className="text-sm text-[var(--text-secondary)] mb-6">
            법인·단체 도입 문의 환영 | 평일 09:00-18:00 | 010-3241-0427
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="mailto:biz@boanlinks.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--accent-cyan)] text-[var(--bg-primary)] font-semibold hover:opacity-90 transition-opacity"
            >
              이메일 문의하기 <ArrowRight size={18} />
            </a>
            <Link
              to="/purchase"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-[var(--accent-cyan)] text-[var(--accent-cyan)] font-semibold hover:bg-[var(--accent-cyan-soft)] transition-colors"
            >
              구매 방법 보기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
