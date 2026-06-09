import { Shield, Cpu, HardDrive, Battery, Thermometer, Lock, Usb, Wifi, Scan, Fingerprint, Layers, Box, Brain, ShieldCheck, ScrollText, KeyRound, Scale, FlaskConical, Home, Landmark, QrCode, ChevronRight } from "lucide-react";

export default function Product() {
  const specs = [
    { icon: HardDrive, label: "Storage", value: "외부 격리 NVMe SSD" },
    { icon: Shield, label: "Encryption", value: "AES-256 + RSA-2048" },
    { icon: Cpu, label: "Auth", value: "ICTK PUF 칩" },
    { icon: Battery, label: "UPS", value: "무정전 전원 공급" },
    { icon: Thermometer, label: "Thermal", value: "UL CLASS 125" },
    { icon: Wifi, label: "Network", value: "Air-Gap · Zero-Outbound" },
  ];

  const detailedSpecs = [
    { label: "타겟 하드웨어", value: "리눅스 기반 고성능 AI SBC 탑재" },
    { label: "물리적 수납 규격", value: "320mm × 230mm × 40mm (A4 서류 수납 최적화)" },
    { label: "물리적 보관함", value: "인감도장 · 계약서 · 통장 · 등기권리증 · OTP · 보안카드" },
    { label: "스토리지", value: "외부 격리 NVMe SSD · 계층형 보안 파티션 (C/D/E)" },
    { label: "암호화", value: "AES-256 + RSA-2048 이중 암호화" },
    { label: "네트워크", value: "Air-Gap · Zero-Outbound · 화이트리스트 업데이트" },
    { label: "지원 플랫폼", value: "iOS · Android · PC (Windows/macOS/Linux)" },
    { label: "웹브라우저", value: "보안 취약성 방지를 위해 원천 차단" },
    { label: "모니터링", value: "온도 · 디스크 · 메모리 · 업타임 실시간 대시보드" },
  ];

  const partitions = [
    { level: "PUF", title: "물리 인증 (PUF USB)", desc: "복제 불가능 하드웨어 인증으로 서버 기동 제어", icon: Fingerprint, color: "text-[var(--accent-cyan)]" },
    { level: "L1", title: "C 파티션", desc: "기본 ID/PW 로그인 시 접근 허용", icon: Lock, color: "text-blue-400" },
    { level: "L2", title: "D 파티션", desc: "2FA 추가 인증 후 해제", icon: Layers, color: "text-indigo-400" },
    { level: "L3", title: "E 파티션", desc: "모바일 생체 인증(얼굴·지문) 성공 시에만 UI 노출", icon: Shield, color: "text-purple-400" },
  ];

  const capabilities = [
    {
      icon: KeyRound,
      title: "인증 & 접근 관리",
      points: [
        "PUF USB 하드웨어 인증 — 서버 기동 물리 열쇠 역할",
        "관리자 QR 코드 발급 + SSID/RSSI 근접 검증으로 신규 기기 등록",
        "mTLS 기반 인증서 발급, 비인가 기기 원천 차단",
        "데스크톱 접근 시 등록 모바일로 생체 인증 요청 전송",
      ],
    },
    {
      icon: Brain,
      title: "Local AI — 오프라인 파일 지능화",
      points: [
        "Local RAG & LLM — 서버 내 AI가 내 파일 내용 학습·답변·요약",
        "완전 폐쇄망 동작 — 데이터 외부 유출 제로",
        "\"Local Notebook LM\" 방식으로 문서 기반 Q&A 지원",
      ],
    },
    {
      icon: ShieldCheck,
      title: "E2EE 암호 볼트",
      points: [
        "패스워드·연락처 등 민감 정보를 단말기에서 직접 암호화",
        "서버 관리자조차 내용 열람 불가 (End-to-End Encryption)",
        "AES-256 + RSA-2048 이중 암호화 적용",
      ],
    },
    {
      icon: ScrollText,
      title: "무결성 감사 & 모니터링",
      points: [
        "접속 시각·읽기/쓰기/삭제 이력 수정 불가 시계열 DB 기록",
        "이상 접근 실시간 알림 — 탈취 시 키 자동 즉시 소멸",
        "온도·디스크·메모리·업타임 실시간 모니터링",
        "기기 간 파일 즉시 동기화 — 업무 연속성 보장",
      ],
    },
  ];

  const journey = [
    { step: "01", title: "기기 등록", desc: "QR + 생체 + 근접 검증", icon: QrCode },
    { step: "02", title: "PUF 인증", desc: "USB 도킹 서버 기동", icon: Usb },
    { step: "03", title: "계층 접근", desc: "L1 → L2 → L3 파티션", icon: Layers },
    { step: "04", title: "AI 활용", desc: "Local LLM 검색·요약", icon: Brain },
  ];

  const targets = [
    { icon: Scale, title: "전문직 종사자", desc: "변호사·회계사·세무사 — 기밀 문서 유출 원천 차단" },
    { icon: FlaskConical, title: "연구소·중소기업", desc: "폐쇄망 환경 데이터 협업·기술 유출 방지" },
    { icon: Home, title: "스마트홈 사용자", desc: "클라우드 월정액 대체·개인정보 완전 자가 통제" },
    { icon: Landmark, title: "의료·공공기관", desc: "법적 데이터 보안 의무 이행 + 감사 로그 완비" },
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
      badge: "AES-256 + RSA-2048",
      title: "이중 암호화",
      description: "AES-256 + RSA-2048 이중 암호화로 도난·분실 시에도 데이터 유출 원천 차단",
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
                D-GO <span className="text-gradient-cyan">Quantum Data Vault</span>
              </h1>

              <p className="text-base text-[var(--text-secondary)] mb-5 leading-relaxed max-w-lg">
                외부 클라우드에 의존하지 않고 가정·사무실의 폐쇄망(Private Wi-Fi) 내에서만 동작하는
                초강력 보안 파일·모니터링 서버.<br />
                물리적 하드웨어 인증과 계층형 보안 파티션을 결합한 차세대 개인형 물리적·디지털 데이터 금고입니다.
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {["PUF 물리보안", "AIR-GAP 격리", "3중 계층 파티션", "LOCAL AI 내장", "E2EE 볼트", "물리적 금고 내장"].map((b) => (
                  <span key={b} className="badge text-[var(--accent-cyan)] border border-[var(--accent-cyan)]/30 rounded-full px-2.5 py-0.5 text-[0.7rem]">
                    {b}
                  </span>
                ))}
              </div>

              {/* Trust strip */}
              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[var(--border-hairline)]">
                <img src="/logo/ICTK.png" alt="ICTK PUF" className="h-6 w-auto opacity-80" style={{ filter: "brightness(0) saturate(100%) invert(55%) sepia(80%) saturate(500%) hue-rotate(160deg)" }} />
                <img src="/logo/KC인증.svg" alt="KC 인증" className="h-6 w-auto opacity-60" />
                <span className="badge text-[var(--text-muted)]">UL CLASS 125</span>
                <span className="badge text-[var(--text-muted)]">MADE IN KOREA</span>
              </div>
            </div>

            {/* Right — product image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/15 to-blue-600/10 rounded-2xl blur-2xl"></div>
              <img
                src="/images/renders/render-02.jpg"
                alt="D-GO Quantum Data Vault 45도 정면"
                className="relative rounded-xl shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Specs Strip ── */}
      <section className="border-y border-[var(--border-hairline)] bg-[var(--bg-elevated)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-3 gap-y-2">
            {specs.map((s) => (
              <div key={s.label} className="flex items-center gap-2.5 py-2 min-w-0">
                <s.icon size={16} className="text-[var(--accent-cyan)] flex-shrink-0" />
                <div className="min-w-0">
                  <div className="badge text-[var(--text-muted)] text-[0.65rem] uppercase">{s.label}</div>
                  <div className="text-xs sm:text-[13px] font-semibold text-[var(--text-primary)] truncate">{s.value}</div>
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

      {/* ── 4 Core Capabilities (detailed) ── */}
      <section className="py-10 md:py-14 bg-[var(--bg-elevated)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <span className="badge text-[var(--accent-cyan)]">CORE CAPABILITIES</span>
            <h2 className="text-2xl md:text-3xl mt-3">4대 핵심 기능</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {capabilities.map((c) => (
              <div key={c.title} className="glass-card p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-[var(--accent-cyan-soft)] flex items-center justify-center flex-shrink-0">
                    <c.icon className="text-[var(--accent-cyan)]" size={18} />
                  </div>
                  <h3 className="text-base font-semibold">{c.title}</h3>
                </div>
                <ul className="space-y-2">
                  {c.points.map((p) => (
                    <li key={p} className="flex gap-2 text-sm text-[var(--text-secondary)] leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-cyan)] mt-1.5 flex-shrink-0"></span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── System Components — HW + SW side by side ── */}
      <section className="py-10 md:py-14">
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
      <section className="py-10 md:py-14 bg-[var(--bg-elevated)]">
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

      {/* ── 3-Tier Partition Security ── */}
      <section className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <span className="badge text-[var(--accent-cyan)]">3-TIER PARTITION</span>
            <h2 className="text-2xl md:text-3xl mt-3 mb-2">3중 계층형 철통 보안</h2>
            <p className="text-sm text-[var(--text-secondary)]">
              PUF · 2FA · 생체인증을 단계별로 결합 — 민감도별 접근 분리
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-6xl mx-auto">
            {partitions.map((p) => (
              <div key={p.level} className="glass-card p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-xs font-bold ${p.color}`}>{p.level}</span>
                  <p.icon size={16} className={p.color} />
                </div>
                <h3 className="text-sm font-semibold mb-1.5">{p.title}</h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── User Journey ── */}
      <section className="py-10 md:py-14 bg-[var(--bg-elevated)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="badge text-[var(--accent-cyan)]">USER JOURNEY</span>
            <h2 className="text-2xl md:text-3xl mt-3">사용자 여정</h2>
          </div>
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-stretch gap-3 md:gap-0">
            {journey.map((j, i) => (
              <div key={j.step} className="contents">
                <div className="flex-1 glass-card p-5 text-center relative">
                  <div className="w-12 h-12 mx-auto rounded-full bg-[var(--accent-cyan-soft)] flex items-center justify-center mb-3">
                    <j.icon size={22} className="text-[var(--accent-cyan)]" />
                  </div>
                  <div className="badge text-[var(--accent-cyan)] mb-1">{j.step}</div>
                  <h3 className="text-sm font-semibold mb-1">{j.title}</h3>
                  <p className="text-xs text-[var(--text-secondary)]">{j.desc}</p>
                </div>
                {i < journey.length - 1 && (
                  <div className="hidden md:flex items-center justify-center w-10">
                    <ChevronRight size={20} className="text-[var(--accent-cyan)]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Detailed Specs Table ── */}
      <section className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <span className="badge text-[var(--accent-cyan)]">DETAILED SPECS</span>
            <h2 className="text-2xl md:text-3xl mt-3">상세 사양</h2>
          </div>
          <div className="max-w-3xl mx-auto glass-card overflow-hidden">
            <div className="divide-y divide-[var(--border-hairline)]">
              {detailedSpecs.map((s) => (
                <div key={s.label} className="grid grid-cols-1 sm:grid-cols-3 gap-2 px-5 py-3">
                  <div className="text-sm font-semibold text-[var(--accent-cyan)] sm:col-span-1">{s.label}</div>
                  <div className="text-sm text-[var(--text-secondary)] sm:col-span-2">{s.value}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-5">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--accent-cyan-soft)] border border-[var(--accent-cyan)]/20">
              <Box size={16} className="text-[var(--accent-cyan)]" />
              <span className="text-sm font-medium text-[var(--accent-cyan)]">
                "A4 계약서를 접지 않고 그대로, 인감도장은 서버 깊숙한 곳에."
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Target Customers ── */}
      <section className="py-10 md:py-14 bg-[var(--bg-elevated)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <span className="badge text-[var(--accent-cyan)]">TARGET CUSTOMERS</span>
            <h2 className="text-2xl md:text-3xl mt-3">타겟 고객</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-6xl mx-auto">
            {targets.map((t) => (
              <div key={t.title} className="glass-card glass-card-hover p-5">
                <div className="w-10 h-10 rounded-lg bg-[var(--accent-cyan-soft)] flex items-center justify-center mb-3">
                  <t.icon size={20} className="text-[var(--accent-cyan)]" />
                </div>
                <h3 className="text-sm font-semibold mb-1.5">{t.title}</h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certifications — compact strip with logos ── */}
      <section className="py-10 md:py-14 bg-gradient-to-br from-cyan-500/8 to-blue-600/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl text-center mb-6">인증 및 품질</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
            <div className="glass-card p-4 text-center">
              <img src="/logo/ICTK.png" alt="ICTK PUF" className="h-8 w-auto mx-auto mb-2" style={{ filter: "brightness(0) saturate(100%) invert(55%) sepia(80%) saturate(500%) hue-rotate(160deg)" }} />
              <div className="badge text-[var(--accent-cyan)] mb-1">ICTK PUF</div>
              <p className="text-xs text-[var(--text-secondary)]">반도체 지문 인증</p>
            </div>
            <div className="glass-card p-4 text-center">
              <img src="/logo/KC인증.svg" alt="KC 인증" className="h-8 w-auto mx-auto mb-2" />
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
