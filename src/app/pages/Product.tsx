import { Shield, Cpu, HardDrive, Battery, Thermometer, Lock, Usb, Wifi } from "lucide-react";

export default function Product() {
  const specs = [
    { icon: HardDrive, label: "저장 용량", value: "고용량 SSD" },
    { icon: Shield, label: "보안", value: "AES-256 암호화" },
    { icon: Cpu, label: "인증", value: "ICTK PUF 칩" },
    { icon: Battery, label: "UPS", value: "무정전 전원 공급" },
    { icon: Thermometer, label: "내구성", value: "UL CLASS 125 인증" },
    { icon: Wifi, label: "연결", value: "Direct Wi-Fi 폐쇄망" },
  ];

  const features = [
    {
      icon: Lock,
      title: "물리적 데이터 금고",
      description: "인감, OTP, 카드, 통장 등 실물 자산도 함께 보관 가능한 하이브리드 금고"
    },
    {
      icon: Shield,
      title: "이중 암호화",
      description: "AES-256 기반 이중 암호화로 도난·분실 시에도 데이터 유출 원천 차단"
    },
    {
      icon: Cpu,
      title: "PUF 인증",
      description: "반도체 지문 기반 인증으로 복제 불가능한 보안 시스템 구현"
    },
    {
      icon: Usb,
      title: "Secure Port",
      description: "PUF 승인 시에만 USB-C 및 네트워크 드라이브 활성화"
    },
  ];

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-[var(--accent-cyan-soft)] border border-[var(--accent-cyan)]/20 mb-6">
              <span className="badge text-[var(--accent-cyan)]">PRODUCT</span>
            </div>
            <h1 className="text-4xl md:text-5xl mb-6">D-GO Vault</h1>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
              외부 서버 없이 완벽하게 보호되는<br />
              자기주권형 데이터 금고
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto mb-16">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-3xl blur-3xl"></div>
            <img
              src="https://images.unsplash.com/photo-1566254488277-aebfe9ebb6a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBzZWN1cml0eSUyMHZhdWx0JTIwZGV2aWNlfGVufDF8fHx8MTc3NjI5OTA5MXww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="D-GO Vault 제품"
              className="relative rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Specs */}
      <section className="py-20 bg-[var(--bg-elevated)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-center mb-12">제품 사양</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specs.map((spec, index) => (
              <div key={index} className="glass-card glass-card-hover p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--accent-cyan-soft)] flex items-center justify-center flex-shrink-0">
                    <spec.icon className="text-[var(--accent-cyan)]" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{spec.label}</h3>
                    <p className="text-[var(--text-secondary)]">{spec.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-center mb-12">주요 기능</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="glass-card glass-card-hover p-8 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-radial from-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative">
                  <div className="w-14 h-14 rounded-xl bg-[var(--accent-cyan-soft)] flex items-center justify-center mb-4">
                    <feature.icon className="text-[var(--accent-cyan)]" size={28} />
                  </div>
                  
                  <h3 className="text-xl mb-3">{feature.title}</h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Components */}
      <section className="py-20 bg-[var(--bg-elevated)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-center mb-12">시스템 구성</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Hardware */}
            <div className="glass-card p-8">
              <h3 className="text-2xl mb-6">하드웨어</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-[var(--accent-cyan)]">아날로그 자산 보관</h4>
                  <p className="text-sm text-[var(--text-secondary)]">
                    인감·OTP·카드·통장 등 실물 자산 수납 공간 내장
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 text-[var(--accent-cyan)]">디지털 자산 저장</h4>
                  <p className="text-sm text-[var(--text-secondary)]">
                    이중 암호화(AES-256) 보안 스토리지<br />
                    물리적 폐쇄망 내부 격리 보관
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 text-[var(--accent-cyan)]">환경 센싱</h4>
                  <p className="text-sm text-[var(--text-secondary)]">
                    온도·습도 모니터링<br />
                    UL CLASS 125 내구성 인증
                  </p>
                </div>
              </div>
            </div>
            
            {/* Software */}
            <div className="glass-card p-8">
              <h3 className="text-2xl mb-6">소프트웨어</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-[var(--accent-cyan)]">데이터 금고 관리</h4>
                  <p className="text-sm text-[var(--text-secondary)]">
                    입력·출력·현황 조회<br />
                    (파일은 Vault에만 존재)
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 text-[var(--accent-cyan)]">시점인증 연결</h4>
                  <p className="text-sm text-[var(--text-secondary)]">
                    SHA-256 해시 + TSA 타임스탬프 자동 발급<br />
                    법적 효력 확보
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 text-[var(--accent-cyan)]">보안 검사</h4>
                  <p className="text-sm text-[var(--text-secondary)]">
                    유입 파일 악성코드 실시간 스캔<br />
                    무결성 검증
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Input/Output */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-center mb-12">데이터 입출력</h2>
          
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl mb-6 text-[var(--accent-cyan)]">입력 방식</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[var(--accent-cyan-soft)] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs text-[var(--accent-cyan)] font-semibold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">스캔본</h4>
                      <p className="text-sm text-[var(--text-secondary)]">계약서·증명서·보안 문서 (전용 Scanner)</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[var(--accent-cyan-soft)] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs text-[var(--accent-cyan)] font-semibold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">음성본</h4>
                      <p className="text-sm text-[var(--text-secondary)]">회의록·녹취·메모, STT 변환</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[var(--accent-cyan-soft)] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs text-[var(--accent-cyan)] font-semibold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">파일본</h4>
                      <p className="text-sm text-[var(--text-secondary)]">법인 자료·기밀 파일 (보안 USB)</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[var(--accent-cyan-soft)] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs text-[var(--accent-cyan)] font-semibold">4</span>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">미디어</h4>
                      <p className="text-sm text-[var(--text-secondary)]">사진·동영상 (보안 USB)</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl mb-6 text-[var(--accent-cyan)]">출력 방식</h3>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[var(--accent-cyan-soft)] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Usb className="text-[var(--accent-cyan)]" size={14} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">보안 USB</h4>
                    <p className="text-sm text-[var(--text-secondary)] mb-4">
                      전용 보안 USB를 통한 단방향 출력<br />
                      PUF 승인 시에만 포트 활성화
                    </p>
                    
                    <div className="p-4 rounded-lg bg-[var(--bg-elevated)] border border-[var(--border-hairline)]">
                      <p className="text-sm text-[var(--text-secondary)]">
                        <span className="text-[var(--accent-cyan)] font-semibold">보안 정책:</span><br />
                        • PUF 인증 후에만 포트 활성화<br />
                        • 모든 출력 기록 로그 보관<br />
                        • 무단 접근 시도 자동 차단
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gradient-to-br from-cyan-500/10 to-blue-600/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-8">인증 및 품질</h2>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="glass-card p-6 min-w-[200px]">
              <div className="badge text-[var(--accent-cyan)] mb-2">ICTK PUF</div>
              <p className="text-sm text-[var(--text-secondary)]">반도체 지문 인증</p>
            </div>
            <div className="glass-card p-6 min-w-[200px]">
              <div className="badge text-[var(--accent-cyan)] mb-2">KC 인증</div>
              <p className="text-sm text-[var(--text-secondary)]">국가 안전 인증</p>
            </div>
            <div className="glass-card p-6 min-w-[200px]">
              <div className="badge text-[var(--accent-cyan)] mb-2">UL CLASS 125</div>
              <p className="text-sm text-[var(--text-secondary)]">내화·내구성 인증</p>
            </div>
            <div className="glass-card p-6 min-w-[200px]">
              <div className="badge text-[var(--accent-cyan)] mb-2">MADE IN KOREA</div>
              <p className="text-sm text-[var(--text-secondary)]">국내 생산</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
