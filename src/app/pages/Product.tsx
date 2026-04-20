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
      badge: "HYBRID VAULT",
      title: "물리적·디지털 하이브리드 금고",
      description: "인감, OTP, 통장 등 실물 자산과 디지털 기밀 데이터를 함께 보관하는 올인원 보안 금고",
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
      badge: "SECURE PORT",
      title: "물리적 포트 통제",
      description: "PUF 승인 시에만 USB-C 및 네트워크 드라이브가 물리적으로 활성화",
    },
    {
      icon: Scan,
      badge: "MEDIA SECURITY",
      title: "보안 미디어 생성",
      description: "촬영 즉시 OCR PDF 변환 및 모바일 데이터 즉시 파기",
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
              <h3 className="text-lg font-semibold mb-4">하드웨어 · 공급 본체</h3>
              <div className="space-y-3">
                {[
                  { label: "임베디드 서버", desc: "리눅스 기반 임베디드 OS · 내부 서버 + 컨트롤 보드 일체형 구조" },
                  { label: "8인치 터치스크린", desc: "본체 전면 터치 키패드 및 문서 관리 UI 시스템 탑재" },
                  { label: "개폐 제어 시스템", desc: "전자식 버튼 + PUF 인증 기반 모터 드라이버 금고 개폐 제어" },
                  { label: "디지털 자산 저장", desc: "PUF 기반 고유 키 생성 · RAID 1 이중화 · SSD 이중화 저장 구조" },
                  { label: "환경 센싱", desc: "온도·습도 모니터링 · 125°F 초과 시 자동 셧다운 기능" },
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
                  { label: "모바일 백업 지원", desc: "모바일 기기의 크롬 기록, 연락처, 중요 파일 자동 백업 보호" },
                  { label: "자격 증명 보관", desc: "웹사이트 ID 및 패스워드를 위한 안전한 보관소 기능 탑재" },
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

      {/* ── Data Security Lifecycle Flow ── */}
      <section className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl text-center mb-2">데이터 보안 라이프사이클</h2>
          <p className="text-center text-sm text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
            생성부터 저장, 폐기까지 완벽하게 통제되는 데이터 흐름
          </p>

          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-stretch gap-4 md:gap-0 relative">
            
            {/* Step 1: Input & Upload (Mobile) */}
            <div className="flex-1 glass-card p-5 relative z-10 border-t-4 border-t-blue-500">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 font-bold">1</div>
                <h3 className="font-semibold text-base text-blue-500">모바일 입력</h3>
              </div>
              
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-[var(--bg-primary)]/50 border border-[var(--border-hairline)]">
                  <div className="flex items-center gap-2 mb-1">
                    <Scan size={14} className="text-blue-400" />
                    <span className="font-medium text-xs">보안 캡처</span>
                  </div>
                  <p className="text-[10px] text-[var(--text-secondary)]">문서 촬영(OCR) & 음성 녹취(STT)</p>
                </div>
                <div className="p-2 rounded bg-red-500/10 border border-red-500/20 text-center mt-2">
                  <span className="text-[10px] font-semibold text-red-500">서버 전송 후 원본 즉시 파기</span>
                </div>
              </div>
            </div>

            {/* Connection Arrow (Desktop) */}
            <div className="hidden md:flex flex-col items-center justify-center w-16 relative z-0">
              <div className="w-full h-[2px] bg-gradient-to-r from-blue-500 to-[var(--accent-cyan)] absolute"></div>
              <Wifi className="text-[var(--text-secondary)] bg-[var(--bg-elevated)] p-1 rounded-full relative z-10" size={24} />
            </div>

            {/* Step 2: Storage & Classification (Vault) */}
            <div className="flex-[1.2] glass-card p-5 relative z-10 border-t-4 border-t-[var(--accent-cyan)]">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-[var(--accent-cyan-soft)] flex items-center justify-center text-[var(--accent-cyan)] font-bold">2</div>
                <h3 className="font-semibold text-base text-[var(--accent-cyan)]">금고 암호화 분배</h3>
              </div>
              
              <div className="flex items-center gap-3 mb-4 p-2 rounded-lg bg-[var(--accent-cyan-soft)] border border-[var(--accent-cyan)]/30">
                <Cpu className="text-[var(--accent-cyan)]" size={20} />
                <p className="text-[11px] font-medium text-[var(--accent-cyan)]">PUF 키 생성 및 AES 인증</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-semibold text-[var(--text-secondary)]">파티션 자동 분류 (C/D/E)</span>
                </div>
                <div className="h-2 w-full rounded-full bg-gradient-to-r from-gray-400 via-[var(--accent-cyan)] to-indigo-500"></div>
              </div>
            </div>

            {/* Connection Arrow (Desktop) */}
            <div className="hidden md:flex flex-col items-center justify-center w-16 relative z-0">
              <div className="w-full h-[2px] bg-gradient-to-r from-[var(--accent-cyan)] to-purple-500 absolute"></div>
            </div>

            {/* Step 3: Secure Output */}
            <div className="flex-1 glass-card p-5 relative z-10 border-t-4 border-t-purple-500">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-bold">3</div>
                <h3 className="font-semibold text-base text-purple-400">출력 제어</h3>
              </div>
              
              <div className="space-y-3">
                <div className="p-3 rounded-lg border border-purple-500/30 bg-purple-500/5 relative overflow-hidden">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-xs text-purple-400">Secure Port</span>
                    <Usb size={14} className="text-purple-400" />
                  </div>
                  <p className="text-[9px] text-[var(--text-secondary)]">
                    PUF 인증 후에만 활성화<br/>
                    네트워크 및 물리 포트 통제
                  </p>
                </div>
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
              <img src="/d-go.info/logo/ICTK.png" alt="ICTK PUF" className="h-8 w-auto mx-auto mb-2" style={{ filter: "brightness(0) saturate(100%) invert(55%) sepia(80%) saturate(500%) hue-rotate(160deg)" }} />
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
