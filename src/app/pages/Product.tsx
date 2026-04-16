import { Shield, Cpu, HardDrive, Battery, Thermometer, Lock, Usb, Wifi, Scan, FileCheck } from "lucide-react";
import { Link } from "react-router";

export default function Product() {
  const specs = [
    { icon: HardDrive, label: "Storage", value: "고용량 SSD" },
    { icon: Shield, label: "Encryption", value: "AES-256 이중 암호화" },
    { icon: Cpu, label: "Auth", value: "ICTK PUF 칩" },
    { icon: Battery, label: "UPS", value: "무정전 전원 공급" },
    { icon: Thermometer, label: "Thermal", value: "UL CLASS 125" },
    { icon: Wifi, label: "Network", value: "Direct Wi-Fi 폐쇄망" },
  ];

  const features = [
    {
      icon: Lock,
      badge: "SECURE PORT",
      title: "물리적 데이터 금고",
      description: "인감, OTP, 카드, 통장 등 실물 자산도 함께 보관할 수 있는 하이브리드 금고",
    },
    {
      icon: Shield,
      badge: "AES-256",
      title: "이중 암호화",
      description: "AES-256 기반 이중 암호화로 도난·분실 시에도 데이터 유출 원천 차단",
    },
    {
      icon: Cpu,
      badge: "PUF",
      title: "PUF 인증",
      description: "반도체 지문 기반 인증으로 복제 불가능한 보안 시스템 구현",
    },
    {
      icon: Usb,
      badge: "USB-C",
      title: "Secure Port",
      description: "PUF 승인 시에만 USB-C 및 네트워크 드라이브 활성화",
    },
  ];

  return (
    <div className="w-full">
      {/* ── Hero: compact, image beside title ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-cyan-500/8 via-transparent to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6 relative">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left — copy */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-cyan-soft)] border border-[var(--accent-cyan)]/20 mb-4">
                <Shield size={14} className="text-[var(--accent-cyan)]" />
                <span className="badge text-[var(--accent-cyan)]">PRODUCT</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl mb-4 leading-tight">
                D-GO Vault
              </h1>

              <p className="text-base text-[var(--text-secondary)] mb-5 leading-relaxed max-w-lg">
                외부 서버 없이 완벽하게 보호되는<br />
                자기주권형 데이터 금고
              </p>

              {/* Trust strip */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[var(--border-hairline)]">
                <img src="/d-go.info/logo/ICTK.png" alt="ICTK PUF" className="h-6 w-auto opacity-60" />
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
                alt="D-GO Vault 45도 정면"
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

      {/* ── Key Features — 2x2 grid ── */}
      <section className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl mb-6">주요 기능</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {features.map((f) => (
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
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── System Components — HW + SW side by side ── */}
      <section className="py-10 md:py-14 bg-[var(--bg-elevated)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl mb-6">시스템 구성</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Hardware */}
            <div className="glass-card p-5">
              <h3 className="text-lg font-semibold mb-4">하드웨어</h3>
              <div className="space-y-3">
                {[
                  { label: "아날로그 자산 보관", desc: "인감·OTP·카드·통장 등 실물 자산 수납 공간 내장" },
                  { label: "디지털 자산 저장", desc: "이중 암호화(AES-256) 보안 스토리지 · 물리적 폐쇄망 내부 격리 보관" },
                  { label: "환경 센싱", desc: "온도·습도 모니터링 · UL CLASS 125 내구성 인증" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-cyan)] mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-sm font-semibold text-[var(--accent-cyan)]">{item.label}</h4>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Software */}
            <div className="glass-card p-5">
              <h3 className="text-lg font-semibold mb-4">소프트웨어</h3>
              <div className="space-y-3">
                {[
                  { label: "데이터 금고 관리", desc: "입력·출력·현황 조회 (파일은 Vault에만 존재)" },
                  { label: "시점인증 연결", desc: "SHA-256 해시 + TSA 타임스탬프 자동 발급 · 법적 효력 확보" },
                  { label: "보안 검사", desc: "유입 파일 악성코드 실시간 스캔 · 무결성 검증" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-cyan)] mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-sm font-semibold text-[var(--accent-cyan)]">{item.label}</h4>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Data I/O — compact 2-col ── */}
      <section className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl mb-6">데이터 입출력</h2>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Input */}
            <div className="glass-card p-5">
              <h3 className="text-base font-semibold text-[var(--accent-cyan)] mb-4">입력 방식</h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Scan, num: "1", title: "스캔본", desc: "계약서·증명서·보안 문서" },
                  { icon: FileCheck, num: "2", title: "음성본", desc: "회의록·녹취·메모, STT 변환" },
                  { icon: Usb, num: "3", title: "파일본", desc: "법인 자료·기밀 파일 (보안 USB)" },
                  { icon: HardDrive, num: "4", title: "미디어", desc: "사진·동영상 (보안 USB)" },
                ].map((item) => (
                  <div key={item.num} className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-[var(--accent-cyan-soft)] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-[0.6rem] text-[var(--accent-cyan)] font-semibold">{item.num}</span>
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold">{item.title}</h4>
                      <p className="text-[0.65rem] text-[var(--text-secondary)]">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Output */}
            <div className="glass-card p-5">
              <h3 className="text-base font-semibold text-[var(--accent-cyan)] mb-4">출력 방식</h3>
              <div className="flex items-start gap-3 mb-3">
                <Usb size={16} className="text-[var(--accent-cyan)] mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold mb-1">보안 USB</h4>
                  <p className="text-xs text-[var(--text-secondary)]">
                    전용 보안 USB를 통한 단방향 출력<br />
                    PUF 승인 시에만 포트 활성화
                  </p>
                </div>
              </div>
              <div className="p-3 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-hairline)]">
                <p className="text-xs text-[var(--text-secondary)]">
                  <span className="text-[var(--accent-cyan)] font-semibold">보안 정책</span><br />
                  • PUF 인증 후에만 포트 활성화<br />
                  • 모든 출력 기록 로그 보관<br />
                  • 무단 접근 시도 자동 차단
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Certifications — compact strip with logos ── */}
      <section className="py-10 md:py-14 bg-gradient-to-br from-cyan-500/8 to-blue-600/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl text-center mb-6">인증 및 품질</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
            <div className="glass-card p-4 text-center">
              <img src="/d-go.info/logo/ICTK.png" alt="ICTK PUF" className="h-8 w-auto mx-auto mb-2" />
              <div className="badge text-[var(--accent-cyan)] mb-1">ICTK PUF</div>
              <p className="text-xs text-[var(--text-secondary)]">반도체 지문 인증</p>
            </div>
            <div className="glass-card p-4 text-center">
              <img src="/d-go.info/logo/KC인증.svg" alt="KC 인증" className="h-8 w-auto mx-auto mb-2" />
              <div className="badge text-[var(--accent-cyan)] mb-1">KC 인증</div>
              <p className="text-xs text-[var(--text-secondary)]">국가 안전 인증</p>
            </div>
            <div className="glass-card p-4 text-center">
              <div className="h-8 flex items-center justify-center mb-2">
                <Thermometer size={24} className="text-[var(--accent-cyan)]" />
              </div>
              <div className="badge text-[var(--accent-cyan)] mb-1">UL CLASS 125</div>
              <p className="text-xs text-[var(--text-secondary)]">내화·내구성 인증</p>
            </div>
            <div className="glass-card p-4 text-center">
              <div className="h-8 flex items-center justify-center mb-2">
                <Shield size={24} className="text-[var(--accent-cyan)]" />
              </div>
              <div className="badge text-[var(--accent-cyan)] mb-1">MADE IN KOREA</div>
              <p className="text-xs text-[var(--text-secondary)]">국내 생산</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
