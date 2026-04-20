import { Shield, Lock, RefreshCw, Thermometer, Fingerprint, Database, Wifi, CheckCircle, Layers, Brain, Radio, Camera, HardDrive, Smartphone, ArrowRight, ArrowDown, Cpu, Zap, Settings, Usb } from "lucide-react";

export default function Technology() {
  const pillars = [
    {
      icon: Lock,
      badge: "PILLAR 1",
      title: "PUF 기반 암호 제어",
      subtitle: "Core Logic",
      features: [
        "반도체 고유 지문을 이용한 암호 키 생성",
        "메모리 휘발성 키 관리로 복제 불가",
        "Zero-Knowledge 암호화 (외부 서버 없음)",
        "본체 내부에서 모든 암호화 작업 완결"
      ]
    },
    {
      icon: RefreshCw,
      badge: "PILLAR 2",
      title: "물리-디지털 이중 복구",
      subtitle: "Dual Recovery",
      features: [
        "디지털 인증 분실 시 물리 키로 복구",
        "PUF 전자키 + 하드웨어 정보 조합",
        "전자식 버튼과 모터 제어 연동",
        "복구 시나리오 다중 경로 제공"
      ]
    },
    {
      icon: Thermometer,
      badge: "PILLAR 3",
      title: "환경 센싱 & 데이터 보호",
      subtitle: "Environmental Protection",
      features: [
        "125°F(52°C) 초과 시 자동 셧다운",
        "RAID 1 실시간 미러링",
        "UPS 무정전 전원 공급",
        "충격·진동 감지 및 알림"
      ]
    },
    {
      icon: Fingerprint,
      badge: "PILLAR 4",
      title: "하이브리드 2FA + Secure Port",
      subtitle: "Access Control",
      features: [
        "키패드 + PUF 하드웨어 키 이중 인증",
        "PUF 승인 시에만 USB-C 포트 활성화",
        "네트워크 드라이브 동적 제어",
        "모든 접근 시도 로그 기록"
      ]
    }
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="pt-10 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <div className="inline-block px-3 py-1 rounded-full bg-[var(--accent-cyan-soft)] border border-[var(--accent-cyan)]/20 mb-3">
              <span className="badge text-[var(--accent-cyan)]">TECHNOLOGY</span>
            </div>
            <h1 className="text-2xl md:text-3xl mb-3">
              Zero-Knowledge,{" "}
              <span className="text-gradient-cyan">By Hardware</span>
            </h1>
            <p className="text-base text-[var(--text-secondary)] max-w-3xl mx-auto leading-snug">
              외부 서버 없이 하드웨어 단독으로 완성되는 제로 지식 암호화.
              ICTK PUF 칩과 폐쇄형 아키텍처로 진정한 데이터 주권을 실현합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="py-10 md:py-14 bg-[var(--bg-elevated)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl text-center mb-8">시스템 아키텍처</h2>

          <div className="max-w-5xl mx-auto relative">
            {/* The Diagram Flow */}
            <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
              
              {/* Left: Mobile Client */}
              <div className="w-full lg:w-1/3 flex flex-col gap-4 relative z-10">
                <div className="glass-card p-5 border-t-4 border-t-[var(--accent-cyan)]">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[var(--accent-cyan-soft)] flex items-center justify-center flex-shrink-0">
                      <Smartphone className="text-[var(--accent-cyan)]" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">Client App</h3>
                      <p className="text-sm text-[var(--text-secondary)]">모바일 관리자 환경</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                      <CheckCircle className="text-[var(--accent-cyan)] w-3.5 h-3.5" /> 대시보드 모니터링
                    </li>
                    <li className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                      <CheckCircle className="text-[var(--accent-cyan)] w-3.5 h-3.5" /> 문서 스캔 (OCR PDF)
                    </li>
                    <li className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                      <CheckCircle className="text-[var(--accent-cyan)] w-3.5 h-3.5" /> 음성 녹취 및 STT
                    </li>
                    <li className="flex items-center gap-2 text-sm text-[var(--status-warn)] font-medium">
                      <Shield className="text-[var(--status-warn)] w-3.5 h-3.5" /> 전송 후 데이터 자동 파기
                    </li>
                  </ul>
                </div>
              </div>

              {/* Middle: Connection Layer */}
              <div className="flex flex-col items-center justify-center relative z-0 lg:w-1/6">
                <div className="hidden lg:block absolute w-full h-[2px] bg-gradient-to-r from-[var(--bg-elevated)] via-[var(--accent-cyan)] to-[var(--bg-elevated)] -z-10"></div>
                <div className="w-[2px] h-12 lg:hidden bg-gradient-to-b from-[var(--bg-elevated)] via-[var(--accent-cyan)] to-[var(--bg-elevated)]"></div>
                
                <div className="glass-card p-2 md:p-3 rounded-full flex flex-col items-center justify-center border-2 border-[var(--accent-cyan)] bg-[var(--bg-primary)] z-10 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                  <Wifi className="text-[var(--accent-cyan)] shrink-0" size={20} />
                </div>
                <span className="text-[10px] font-bold text-[var(--accent-cyan)] mt-2 text-center uppercase tracking-wider relative bg-[var(--bg-elevated)] px-2">
                  폐쇄망 암호화<br/>(1:1 Direct Wi-Fi)
                </span>
                
                <div className="w-[2px] h-12 lg:hidden bg-gradient-to-b from-[var(--bg-elevated)] via-[var(--accent-cyan)] to-[var(--bg-elevated)]"></div>
              </div>

              {/* Right: Embedded Server (Vault) */}
              <div className="w-full lg:w-1/2 relative z-10">
                <div className="glass-card border-2 border-[var(--border-hairline)] overflow-hidden">
                  {/* Header */}
                  <div className="bg-[var(--bg-primary)]/50 p-4 border-b border-[var(--border-hairline)] flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[var(--bg-elevated)] flex items-center justify-center border border-[var(--border-hairline)]">
                        <Database className="text-[var(--text-primary)]" size={20} />
                      </div>
                      <div>
                        <h3 className="text-base font-bold">Embedded Server <span className="font-normal text-[var(--text-secondary)] text-sm">(금고 본체)</span></h3>
                        <p className="text-xs text-[var(--text-secondary)]">리눅스 기반 임베디드 OS</p>
                      </div>
                    </div>
                    <div className="text-right hidden sm:block">
                      <div className="px-2 py-1 rounded bg-[var(--bg-overlay)] border border-[var(--border-hairline)] text-[10px] font-medium text-[var(--text-secondary)]">
                        8" 터치스크린 내장
                      </div>
                    </div>
                  </div>

                  {/* Body Flow */}
                  <div className="p-5 flex flex-col gap-4">
                    {/* PUF Layer */}
                    <div className="p-4 rounded-xl border border-[var(--accent-cyan)]/50 bg-[var(--accent-cyan-soft)] relative">
                      <div className="flex items-center gap-3 mb-2">
                        <Cpu className="text-[var(--accent-cyan)]" size={20} />
                        <span className="font-bold text-sm text-[var(--accent-cyan)]">PUF Core Logic (암호/제어 중심)</span>
                      </div>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                        제로 지식 암호화 수행. 외부 서버 입출력 일체 차단.<br/>
                        비상시 물리 USB 키 + HW 정보로 이중 복구(Dual Recovery)
                      </p>
                    </div>

                    <div className="flex justify-center -my-2 z-10">
                      <ArrowDown className="text-[var(--border-hairline)]" size={20} />
                    </div>

                    {/* Subsystems */}
                    <div className="grid grid-cols-2 gap-3 relative z-0">
                      {/* Storage */}
                      <div className="p-3 rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-primary)]/40 hover:border-[var(--accent-cyan)]/50 transition-colors">
                        <div className="flex items-center gap-2 mb-2">
                          <HardDrive className="text-[var(--text-primary)]" size={16} />
                          <span className="text-sm font-semibold">이중화 스토리지</span>
                        </div>
                        <ul className="text-xs text-[var(--text-secondary)] space-y-1 pl-1">
                          <li>• RAID 1 미러링</li>
                          <li>• C/D/E 보안파티션</li>
                        </ul>
                      </div>
                      
                      {/* Power & Thermal */}
                      <div className="p-3 rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-primary)]/40 hover:border-orange-500/50 transition-colors">
                        <div className="flex items-center gap-2 mb-2">
                          <Thermometer className="text-orange-400" size={16} />
                          <span className="text-sm font-semibold">환경 제어</span>
                        </div>
                        <ul className="text-xs text-[var(--text-secondary)] space-y-1 pl-1">
                          <li>• 내장 UPS 탑재</li>
                          <li>• 125°F 이상 시 셧다운</li>
                        </ul>
                      </div>

                      {/* Motor / Lock */}
                      <div className="p-3 rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-primary)]/40 hover:border-[var(--status-ok)]/50 transition-colors">
                        <div className="flex items-center gap-2 mb-2">
                          <Settings className="text-[var(--status-ok)]" size={16} />
                          <span className="text-sm font-semibold">물리 개폐 시스템</span>
                        </div>
                        <ul className="text-xs text-[var(--text-secondary)] space-y-1 pl-1">
                          <li>• PUF 인증 연동</li>
                          <li>• 모터 드라이버 제어</li>
                        </ul>
                      </div>

                      {/* Secure Port */}
                      <div className="p-3 rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-primary)]/40 hover:border-purple-500/50 transition-colors">
                        <div className="flex items-center gap-2 mb-2">
                          <Usb className="text-purple-400" size={16} />
                          <span className="text-sm font-semibold">Secure Port</span>
                        </div>
                        <ul className="text-xs text-[var(--text-secondary)] space-y-1 pl-1">
                          <li>• PUF 인가 시 활성</li>
                          <li>• USB-C 포트 접근통제</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 text-center">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--bg-primary)] border border-[var(--border-hairline)] text-xs text-[var(--text-secondary)]">
                <Shield size={14} className="text-[var(--accent-cyan)]" /> 단절된 네트워크와 하드웨어 암호화의 결합으로 서버 해킹 원천 차단
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl text-center mb-2">4가지 핵심 기술</h2>
          <p className="text-center text-sm text-[var(--text-secondary)] mb-6 max-w-2xl mx-auto">
            D-GO Vault를 지탱하는 네 가지 기술적 기둥
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {pillars.map((pillar, index) => (
              <div key={index} className="glass-card glass-card-hover p-4 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-radial from-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-lg bg-[var(--accent-cyan-soft)] flex items-center justify-center">
                        <pillar.icon className="text-[var(--accent-cyan)]" size={22} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold leading-tight">{pillar.title}</h3>
                        <p className="text-xs text-[var(--text-secondary)]">{pillar.subtitle}</p>
                      </div>
                    </div>
                    <span className="badge text-[var(--accent-cyan)] text-xs">{pillar.badge}</span>
                  </div>

                  <ul className="space-y-1.5 mt-3">
                    {pillar.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="text-[var(--accent-cyan)] flex-shrink-0 mt-0.5" size={14} />
                        <span className="text-sm text-[var(--text-secondary)] leading-snug">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Layers */}
      <section className="py-10 md:py-14 bg-[var(--bg-elevated)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl text-center mb-6">보안 계층</h2>

          <div className="glass-card p-4 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-x-4 gap-y-1">
              {[
                { layer: "Layer 0", name: "물리적 격리", desc: "폐쇄망, 통신 모듈 없음" },
                { layer: "Layer 1", name: "장치 인증", desc: "PUF 칩 기반 등록 장치만 접근 허용" },
                { layer: "Layer 2", name: "근접 조건", desc: "거리 이탈 시 자동 파일 잠금" },
                { layer: "Layer 3", name: "사용자 인증", desc: "생체인증 / PIN" },
                { layer: "Layer 4", name: "데이터 암호화", desc: "AES-256 이중 암호화" },
                { layer: "Layer 5", name: "무결성 검증", desc: "SHA-256 + TSA 시점인증" },
                { layer: "Layer 6", name: "악성코드 검사", desc: "입력 파일 실시간 스캔" },
                { layer: "Layer 7", name: "감사 추적", desc: "모든 접근·반출 이력 로그 체인" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 py-2 px-3 rounded-lg hover:bg-[var(--bg-primary)]/50 transition-colors">
                  <span className="mono text-xs text-[var(--accent-cyan)] w-14 flex-shrink-0">{item.layer}</span>
                  <div className="flex-1 min-w-0">
                    <span className="font-semibold text-sm">{item.name}</span>
                    <span className="text-xs text-[var(--text-secondary)] ml-2">{item.desc}</span>
                  </div>
                  <CheckCircle className="text-[var(--status-ok)] flex-shrink-0" size={16} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Partition Management (PDF 6.4) */}
      <section className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl text-center mb-2">보안 등급 기반 파티션 관리</h2>
          <p className="text-center text-sm text-[var(--text-secondary)] mb-6 max-w-2xl mx-auto">
            파일 민감도에 따라 C / D / E 3단계 파티션으로 자동 분류·보호
          </p>

          <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {[
              {
                grade: "C",
                level: "저등급",
                title: "일반 저장 공간",
                desc: "비암호화 일반 파티션",
                tone: "var(--text-secondary)",
                items: ["일반 문서·이미지 보관", "빠른 접근", "기본 무결성 검증"],
              },
              {
                grade: "D",
                level: "중등급",
                title: "파티션 단위 암호화",
                desc: "별도 비밀번호 필요",
                tone: "var(--accent-cyan)",
                items: ["파티션 단위 AES 암호화", "전용 비밀번호 요구", "업무용 기밀 파일"],
              },
              {
                grade: "E",
                level: "고등급",
                title: "2중 암호화 + 생체 인증",
                desc: "사용자 인증 + 생체 인증",
                tone: "var(--accent-cyan)",
                items: ["2중 암호화 적용", "사용자 인증 + 생체 인증", "최고 보안 자산"],
              },
            ].map((p) => (
              <div key={p.grade} className="glass-card glass-card-hover p-5">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-lg bg-[var(--accent-cyan-soft)] flex items-center justify-center">
                      <span className="mono font-bold text-[var(--accent-cyan)]">{p.grade}</span>
                    </div>
                    <div>
                      <span className="badge text-[var(--text-muted)]">{p.level}</span>
                      <h3 className="text-base font-semibold leading-tight">{p.title}</h3>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-[var(--text-secondary)] mb-3">{p.desc}</p>
                <ul className="space-y-1.5">
                  {p.items.map((it) => (
                    <li key={it} className="flex items-start gap-2">
                      <CheckCircle className="text-[var(--accent-cyan)] flex-shrink-0 mt-0.5" size={14} />
                      <span className="text-sm text-[var(--text-secondary)] leading-snug">{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-5 max-w-5xl mx-auto glass-card p-4 flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-[var(--accent-cyan-soft)] flex items-center justify-center flex-shrink-0">
              <Layers className="text-[var(--accent-cyan)]" size={18} />
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-1">자동 분류</h4>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                사용자 태그 기반으로 파일이 자동 분류되며, 보안 등급에 따라 C / D / E 파티션에 자동 할당됩니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap (PDF 7) */}
      <section className="py-10 md:py-14 bg-[var(--bg-elevated)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <div className="inline-block px-3 py-1 rounded-full bg-[var(--accent-cyan-soft)] border border-[var(--accent-cyan)]/20 mb-3">
              <span className="badge text-[var(--accent-cyan)]">ROADMAP</span>
            </div>
            <h2 className="text-2xl md:text-3xl mb-2">향후 연구 및 개발 계획</h2>
            <p className="text-sm text-[var(--text-secondary)] max-w-2xl mx-auto">
              AI 기반 기능과 물리 보안 기술을 결합해 차세대 보안 금고 플랫폼으로 확장합니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
            {[
              {
                icon: HardDrive,
                num: "7.1",
                title: "저장장치 보안",
                items: ["보드 탈착 시 NVMe SSD 데이터 파기 기술 연구"],
              },
              {
                icon: Brain,
                num: "7.2",
                title: "로컬 AI 기능 확장",
                items: [
                  "로컬 LLM 탑재",
                  "내부 데이터 검색 및 정리",
                  "Local NotebookLM 기능",
                  "위키형 정보 시스템",
                ],
              },
              {
                icon: Camera,
                num: "7.3",
                title: "하드웨어 확장",
                items: ["카메라 기반 인감도장 시스템 연구"],
              },
              {
                icon: Radio,
                num: "7.4",
                title: "통신 및 추적 기능",
                items: [
                  "독립 통신 보드(Wi-Fi, BLDC, GPS) 장착",
                  "전원 차단 시 신호 전송 (Heartbeat)",
                  "지정 클라이언트로 알림 전달",
                  "위치 추적 기능 검토",
                ],
              },
            ].map((r) => (
              <div key={r.num} className="glass-card glass-card-hover p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[var(--accent-cyan-soft)] flex items-center justify-center">
                    <r.icon className="text-[var(--accent-cyan)]" size={20} />
                  </div>
                  <div>
                    <span className="mono text-xs text-[var(--accent-cyan)]">{r.num}</span>
                    <h3 className="text-base font-semibold leading-tight">{r.title}</h3>
                  </div>
                </div>
                <ul className="space-y-1.5">
                  {r.items.map((it) => (
                    <li key={it} className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-[var(--accent-cyan)] mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-[var(--text-secondary)] leading-snug">{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl text-center mb-6">핵심 차별점</h2>

          <div className="glass-card p-4 max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[var(--border-hairline)]">
                  <th className="text-left py-2 px-3 font-semibold text-sm">비교 항목</th>
                  <th className="text-left py-2 px-3 font-semibold text-sm text-[var(--text-secondary)]">기존 제품</th>
                  <th className="text-left py-2 px-3 font-semibold text-sm text-[var(--accent-cyan)]">D-GO Vault</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    item: "데이터 위치",
                    existing: "클라우드에 복사본 존재",
                    dgo: "No Data Server. 물리적 장치에만 존재"
                  },
                  {
                    item: "장치 연결",
                    existing: "누구나 접근 가능",
                    dgo: "PUF 인증 장치만 연결 허용"
                  },
                  {
                    item: "분실 시",
                    existing: "데이터 노출 위험",
                    dgo: "보안키 자동 소멸로 데이터 보호"
                  },
                  {
                    item: "자산 관리",
                    existing: "디지털 자산만",
                    dgo: "아날로그 + 디지털 통합 관리"
                  },
                  {
                    item: "원본 증명",
                    existing: "진위 증명 불가",
                    dgo: "시점인증(TSA)으로 법적 효력"
                  },
                  {
                    item: "접근 제어",
                    existing: "항상 접근 가능",
                    dgo: "근접 조건 + 장치 인증 이중 잠금"
                  },
                ].map((row, index) => (
                  <tr key={index} className="border-b border-[var(--border-hairline)]">
                    <td className="py-2 px-3 font-medium text-sm">{row.item}</td>
                    <td className="py-2 px-3 text-xs text-[var(--text-secondary)]">{row.existing}</td>
                    <td className="py-2 px-3 text-xs text-[var(--accent-cyan)]">{row.dgo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 md:py-14 bg-gradient-to-br from-cyan-500/10 to-blue-600/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl text-center mb-6">기술 FAQ</h2>

          <div className="space-y-3">
            {[
              {
                q: "Zero-Knowledge가 정확히 무엇인가요?",
                a: "외부 서버나 제3자가 사용자의 데이터에 대해 '아무것도 알 수 없는' 상태를 의미합니다. D-GO Vault는 모든 암호화/복호화 작업을 본체 내부에서만 처리하며, 키는 PUF 칩에서 생성되어 메모리에 휘발성으로 보관됩니다."
              },
              {
                q: "PUF 물리 키를 잃어버리면 어떻게 되나요?",
                a: "디지털 인증과 물리 키의 이중 복구 시스템을 제공합니다. 물리 키 분실 시 등록된 모바일 앱과 하드웨어 정보 조합으로 PUF 키를 재생성할 수 있습니다."
              },
              {
                q: "양자 암호화는 실제로 적용되나요?",
                a: "D-GO Vault는 '양자 시대에 대비한 데이터 금고'라는 의미에서 Quantum Data Vault로 명명되었습니다. 현재는 AES-256 암호화를 사용하며, 향후 양자내성암호(PQC) 알고리즘 적용을 준비 중입니다."
              },
            ].map((faq, index) => (
              <div key={index} className="glass-card p-4">
                <h3 className="font-semibold text-sm mb-1.5 text-[var(--accent-cyan)]">{faq.q}</h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
