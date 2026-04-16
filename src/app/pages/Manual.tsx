import { Download, FileText, Book, AlertCircle, Smartphone, Shield, Key, Upload } from "lucide-react";

export default function Manual() {
  const downloads = [
    {
      icon: Smartphone,
      title: "Android 앱 (APK)",
      description: "D-GO Vault 관리 앱",
      size: "12.4 MB",
      version: "v1.0.0",
      link: "#"
    },
    {
      icon: FileText,
      title: "Quick Start 가이드",
      description: "빠른 시작 안내서 (PDF)",
      size: "2.1 MB",
      version: "한글",
      link: "#"
    },
    {
      icon: Book,
      title: "전체 매뉴얼",
      description: "상세 사용 설명서 (PDF)",
      size: "8.7 MB",
      version: "한글",
      link: "#"
    },
    {
      icon: Book,
      title: "English Manual",
      description: "Full User Manual (PDF)",
      size: "8.3 MB",
      version: "ENG",
      link: "#"
    },
  ];

  return (
    <div className="w-full">
      {/* Notice Banner */}
      <div className="bg-gradient-to-r from-orange-500/20 to-amber-500/20 border-b border-orange-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="text-orange-400 flex-shrink-0 mt-0.5" size={20} />
            <p className="text-sm text-[var(--text-secondary)]">
              <span className="font-semibold text-orange-400">안내:</span> 본 매뉴얼 및 앱은 임시 자료입니다. 정식 D-GO Vault 앱 및 매뉴얼은 약 1주 내 업데이트 예정입니다.
            </p>
          </div>
        </div>
      </div>

      {/* Hero */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-[var(--accent-cyan-soft)] border border-[var(--accent-cyan)]/20 mb-6">
              <span className="badge text-[var(--accent-cyan)]">MANUAL</span>
            </div>
            <h1 className="text-4xl md:text-5xl mb-6">사용 매뉴얼</h1>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
              D-GO Vault를 시작하는 모든 것<br />
              설치부터 고급 기능까지 단계별 안내
            </p>
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-20 bg-[var(--bg-elevated)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-center mb-12">다운로드</h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {downloads.map((item, index) => (
              <div key={index} className="glass-card glass-card-hover p-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-[var(--accent-cyan-soft)] flex items-center justify-center flex-shrink-0">
                    <item.icon className="text-[var(--accent-cyan)]" size={28} />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-[var(--text-secondary)] mb-3">{item.description}</p>
                    
                    <div className="flex items-center gap-4 text-xs text-[var(--text-muted)]">
                      <span className="mono">{item.size}</span>
                      <span>•</span>
                      <span>{item.version}</span>
                    </div>
                  </div>
                  
                  <a
                    href={item.link}
                    className="flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--accent-cyan)] hover:opacity-90 transition-opacity flex items-center justify-center"
                    aria-label={`${item.title} 다운로드`}
                  >
                    <Download className="text-[var(--bg-primary)]" size={20} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-center mb-12">시작하기</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Step 1 */}
            <div className="glass-card p-8 relative">
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[var(--accent-cyan-soft)] flex items-center justify-center">
                <span className="text-xl font-bold text-[var(--accent-cyan)]">1</span>
              </div>
              
              <div className="w-14 h-14 rounded-xl bg-[var(--accent-cyan-soft)] flex items-center justify-center mb-4">
                <Smartphone className="text-[var(--accent-cyan)]" size={28} />
              </div>
              
              <h3 className="text-xl mb-3">앱 설치</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                Android APK 파일을 다운로드하여 설치합니다. 설치 시 "출처를 알 수 없는 앱" 권한이 필요할 수 있습니다.
              </p>
            </div>

            {/* Step 2 */}
            <div className="glass-card p-8 relative">
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[var(--accent-cyan-soft)] flex items-center justify-center">
                <span className="text-xl font-bold text-[var(--accent-cyan)]">2</span>
              </div>
              
              <div className="w-14 h-14 rounded-xl bg-[var(--accent-cyan-soft)] flex items-center justify-center mb-4">
                <Shield className="text-[var(--accent-cyan)]" size={28} />
              </div>
              
              <h3 className="text-xl mb-3">페어링</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                D-GO Vault 본체와 모바일 앱을 Direct Wi-Fi로 페어링합니다. PUF 인증이 필요합니다.
              </p>
            </div>

            {/* Step 3 */}
            <div className="glass-card p-8 relative">
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[var(--accent-cyan-soft)] flex items-center justify-center">
                <span className="text-xl font-bold text-[var(--accent-cyan)]">3</span>
              </div>
              
              <div className="w-14 h-14 rounded-xl bg-[var(--accent-cyan-soft)] flex items-center justify-center mb-4">
                <Key className="text-[var(--accent-cyan)]" size={28} />
              </div>
              
              <h3 className="text-xl mb-3">보안키 생성</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed">
                초기 설정에서 보안키를 생성하고 백업합니다. 물리 키와 디지털 인증을 모두 설정하세요.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 bg-[var(--bg-elevated)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-center mb-12">주요 기능 안내</h2>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {/* File Upload */}
            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--accent-cyan-soft)] flex items-center justify-center flex-shrink-0">
                  <Upload className="text-[var(--accent-cyan)]" size={24} />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl mb-2">파일 업로드</h3>
                  <p className="text-[var(--text-secondary)] mb-4">
                    중요한 문서, 사진, 동영상을 암호화하여 안전하게 저장합니다.
                  </p>
                  
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-cyan)] mt-1.5 flex-shrink-0"></div>
                      <span>앱에서 "파일 추가" 버튼 선택</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-cyan)] mt-1.5 flex-shrink-0"></div>
                      <span>파일 선택 후 자동 암호화 및 전송</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-cyan)] mt-1.5 flex-shrink-0"></div>
                      <span>업로드 완료 후 원본은 자동 삭제 가능</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* File View */}
            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--accent-cyan-soft)] flex items-center justify-center flex-shrink-0">
                  <FileText className="text-[var(--accent-cyan)]" size={24} />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl mb-2">파일 조회</h3>
                  <p className="text-[var(--text-secondary)] mb-4">
                    저장된 파일을 안전하게 조회하고 관리합니다.
                  </p>
                  
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-cyan)] mt-1.5 flex-shrink-0"></div>
                      <span>파일 목록에서 원하는 파일 선택</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-cyan)] mt-1.5 flex-shrink-0"></div>
                      <span>PUF 인증 후 복호화하여 미리보기</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-cyan)] mt-1.5 flex-shrink-0"></div>
                      <span>필요시 보안 USB로 내보내기</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Security Key */}
            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--accent-cyan-soft)] flex items-center justify-center flex-shrink-0">
                  <Key className="text-[var(--accent-cyan)]" size={24} />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl mb-2">보안키 관리</h3>
                  <p className="text-[var(--text-secondary)] mb-4">
                    물리 키와 디지털 인증을 통한 이중 보안 시스템
                  </p>
                  
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-cyan)] mt-1.5 flex-shrink-0"></div>
                      <span>PUF 물리 키는 안전한 장소에 보관</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-cyan)] mt-1.5 flex-shrink-0"></div>
                      <span>디지털 백업키는 별도 저장 매체에 보관</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-cyan)] mt-1.5 flex-shrink-0"></div>
                      <span>복구 시나리오에 따라 이중 복구 가능</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-center mb-12">자주 묻는 질문</h2>
          
          <div className="space-y-6">
            {[
              {
                q: "앱 설치 시 '출처를 알 수 없는 앱' 오류가 발생합니다",
                a: "Android 기기 설정 > 보안 > 출처를 알 수 없는 앱 설치 허용을 활성화해주세요. 설치 후에는 다시 비활성화하시는 것을 권장합니다."
              },
              {
                q: "페어링이 되지 않아요",
                a: "1) Wi-Fi가 켜져 있는지 확인 2) D-GO Vault 본체가 전원에 연결되어 있는지 확인 3) 앱 권한(위치, Wi-Fi)이 모두 허용되어 있는지 확인하세요."
              },
              {
                q: "파일을 업로드했는데 앱에서 보이지 않아요",
                a: "파일 목록 화면에서 아래로 당겨 새로고침 해보세요. 대용량 파일의 경우 암호화 및 전송에 시간이 걸릴 수 있습니다."
              },
              {
                q: "보안키를 분실했어요",
                a: "물리 키 분실: 등록된 모바일 앱으로 복구 가능. 디지털 인증 분실: 물리 키로 복구 가능. 둘 다 분실: 고객센터로 문의해주세요."
              },
            ].map((faq, index) => (
              <div key={index} className="glass-card p-6">
                <h3 className="font-semibold text-lg mb-3 text-[var(--accent-cyan)]">Q. {faq.q}</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">A. {faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-[var(--text-secondary)] mb-4">
              더 궁금한 사항이 있으신가요?
            </p>
            <a
              href="mailto:biz@boanlinks.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--accent-cyan)] text-[var(--bg-primary)] font-semibold hover:opacity-90 transition-opacity"
            >
              고객센터 문의하기
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
