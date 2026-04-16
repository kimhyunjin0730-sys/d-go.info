import { Shield, Lock, RefreshCw, Thermometer, Fingerprint, Database, Wifi, CheckCircle } from "lucide-react";

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
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-[var(--accent-cyan-soft)] border border-[var(--accent-cyan)]/20 mb-6">
              <span className="badge text-[var(--accent-cyan)]">TECHNOLOGY</span>
            </div>
            <h1 className="text-4xl md:text-5xl mb-6">
              Zero-Knowledge,<br />
              <span className="text-gradient-cyan">By Hardware</span>
            </h1>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed">
              외부 서버 없이 하드웨어 단독으로 완성되는 제로 지식 암호화.<br />
              ICTK PUF 칩과 폐쇄형 아키텍처로 진정한 데이터 주권을 실현합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Architecture Diagram */}
      <section className="py-20 bg-[var(--bg-elevated)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-center mb-12">시스템 아키텍처</h2>
          
          <div className="glass-card p-8 md:p-12 max-w-5xl mx-auto">
            <div className="space-y-8">
              {/* Network Layer */}
              <div className="border-2 border-[var(--accent-cyan)]/30 rounded-xl p-6 bg-[var(--bg-primary)]/50">
                <div className="flex items-center gap-3 mb-6">
                  <Wifi className="text-[var(--accent-cyan)]" size={24} />
                  <h3 className="text-xl font-semibold">폐쇄망 1:1 Direct Wi-Fi</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Mobile Client */}
                  <div className="glass-card p-6 text-center">
                    <div className="w-12 h-12 rounded-xl bg-[var(--accent-cyan-soft)] flex items-center justify-center mx-auto mb-3">
                      <Shield className="text-[var(--accent-cyan)]" size={24} />
                    </div>
                    <h4 className="font-semibold mb-2">Mobile Client</h4>
                    <p className="text-sm text-[var(--text-secondary)]">관리자 앱</p>
                  </div>
                  
                  {/* D-GO Vault */}
                  <div className="glass-card p-6 text-center border-2 border-[var(--accent-cyan)]/50">
                    <div className="w-12 h-12 rounded-xl bg-[var(--accent-cyan)] flex items-center justify-center mx-auto mb-3">
                      <Database className="text-[var(--bg-primary)]" size={24} />
                    </div>
                    <h4 className="font-semibold mb-2">D-GO Vault</h4>
                    <p className="text-sm text-[var(--text-secondary)]">데이터 금고 본체</p>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <div className="inline-flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                    <div className="w-2 h-2 rounded-full bg-[var(--accent-cyan)] animate-pulse"></div>
                    1:1 Direct Wi-Fi 페어링 (외부 네트워크 미연결)
                  </div>
                </div>
              </div>

              {/* PUF Core */}
              <div className="text-center">
                <div className="inline-block glass-card p-6 border-2 border-[var(--accent-cyan)]">
                  <div className="flex items-center gap-3">
                    <Lock className="text-[var(--accent-cyan)]" size={28} />
                    <div className="text-left">
                      <h4 className="font-semibold text-lg">PUF Core</h4>
                      <p className="text-sm text-[var(--text-secondary)]">ICTK Hardware</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Components */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="glass-card p-4 text-center">
                  <Database className="text-[var(--accent-cyan)] mx-auto mb-2" size={20} />
                  <p className="text-sm font-semibold">RAID 1</p>
                </div>
                <div className="glass-card p-4 text-center">
                  <Shield className="text-[var(--accent-cyan)] mx-auto mb-2" size={20} />
                  <p className="text-sm font-semibold">UPS</p>
                </div>
                <div className="glass-card p-4 text-center">
                  <Thermometer className="text-[var(--accent-cyan)] mx-auto mb-2" size={20} />
                  <p className="text-sm font-semibold">Sensor</p>
                </div>
                <div className="glass-card p-4 text-center">
                  <Lock className="text-[var(--accent-cyan)] mx-auto mb-2" size={20} />
                  <p className="text-sm font-semibold">Secure Port</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-[var(--text-secondary)]">
              모든 구성 요소가 PUF Core를 중심으로 통합 제어됩니다
            </p>
          </div>
        </div>
      </section>

      {/* Four Pillars */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-center mb-4">4가지 핵심 기술</h2>
          <p className="text-center text-[var(--text-secondary)] mb-16 max-w-2xl mx-auto">
            D-GO Vault를 지탱하는 네 가지 기술적 기둥
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {pillars.map((pillar, index) => (
              <div key={index} className="glass-card glass-card-hover p-8 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-radial from-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-14 h-14 rounded-xl bg-[var(--accent-cyan-soft)] flex items-center justify-center">
                      <pillar.icon className="text-[var(--accent-cyan)]" size={28} />
                    </div>
                    <span className="badge text-[var(--accent-cyan)]">{pillar.badge}</span>
                  </div>
                  
                  <h3 className="text-2xl mb-2">{pillar.title}</h3>
                  <p className="text-sm text-[var(--text-secondary)] mb-6">{pillar.subtitle}</p>
                  
                  <ul className="space-y-3">
                    {pillar.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="text-[var(--accent-cyan)] flex-shrink-0 mt-0.5" size={16} />
                        <span className="text-sm text-[var(--text-secondary)]">{feature}</span>
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
      <section className="py-20 bg-[var(--bg-elevated)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-center mb-12">보안 계층</h2>
          
          <div className="glass-card p-8 max-w-4xl mx-auto">
            <div className="space-y-4">
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
                <div key={index} className="flex items-start gap-4 p-4 rounded-lg hover:bg-[var(--bg-primary)]/50 transition-colors">
                  <div className="w-16 flex-shrink-0">
                    <span className="mono text-sm text-[var(--accent-cyan)]">{item.layer}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">{item.name}</h4>
                    <p className="text-sm text-[var(--text-secondary)]">{item.desc}</p>
                  </div>
                  <CheckCircle className="text-[var(--status-ok)] flex-shrink-0 mt-1" size={20} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-center mb-12">핵심 차별점</h2>
          
          <div className="glass-card p-8 max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[var(--border-hairline)]">
                  <th className="text-left py-4 px-4 font-semibold">비교 항목</th>
                  <th className="text-left py-4 px-4 font-semibold text-[var(--text-secondary)]">기존 제품</th>
                  <th className="text-left py-4 px-4 font-semibold text-[var(--accent-cyan)]">D-GO Vault</th>
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
                    <td className="py-4 px-4 font-medium">{row.item}</td>
                    <td className="py-4 px-4 text-sm text-[var(--text-secondary)]">{row.existing}</td>
                    <td className="py-4 px-4 text-sm text-[var(--accent-cyan)]">{row.dgo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gradient-to-br from-cyan-500/10 to-blue-600/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-center mb-12">기술 FAQ</h2>
          
          <div className="space-y-6">
            {[
              {
                q: "Zero-Knowledge가 정확히 무엇인가요?",
                a: "외부 서버나 제3자가 사용자의 데이터에 대해 '아무것도 알 수 없는' 상태를 의미합니다. D-GO Vault는 모든 암호화/복호화 작업을 본체 내부에서만 처리하며, 키는 PUF 칩에서 생성되어 메모리에 휘발성으로 보관됩니다."
              },
              {
                q: "PUF 물리키를 잃어버리면 어떻게 되나요?",
                a: "디지털 인증과 물리 키의 이중 복구 시스템을 제공합니다. 물리 키 분실 시 등록된 모바일 앱과 하드웨어 정보 조합으로 PUF 키를 재생성할 수 있습니다."
              },
              {
                q: "양자 암호화는 실제로 적용되나요?",
                a: "D-GO Vault는 '양자 시대에 대비한 데이터 금고'라는 의미에서 Quantum Data Vault로 명명되었습니다. 현재는 AES-256 암호화를 사용하며, 향후 양자내성암호(PQC) 알고리즘 적용을 준비 중입니다."
              },
            ].map((faq, index) => (
              <div key={index} className="glass-card p-6">
                <h3 className="font-semibold text-lg mb-3 text-[var(--accent-cyan)]">{faq.q}</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
