import { ArrowRight, Shield, Lock, FileCheck, Fingerprint, Scan, Database } from "lucide-react";
import { Link } from "react-router";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-radial from-cyan-500/10 via-transparent to-transparent opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--accent-cyan-soft)] border border-[var(--accent-cyan)]/20 mb-6">
                <Shield size={16} className="text-[var(--accent-cyan)]" />
                <span className="badge text-[var(--accent-cyan)]">Quantum Data Vault</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6">
                당신의 데이터,<br />
                <span className="text-gradient-cyan">오직 당신의 손안에</span>
              </h1>
              
              <p className="text-lg text-[var(--text-secondary)] mb-8 leading-relaxed">
                외부 서버 없이 완벽하게 보호되는 자기주권형 데이터 금고.<br />
                D-GO Vault로 진정한 데이터 소유권을 경험하세요.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:biz@boanlinks.com"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[var(--accent-cyan)] text-[var(--bg-primary)] font-semibold hover:opacity-90 transition-opacity"
                >
                  도입 문의하기
                  <ArrowRight size={20} />
                </a>
                <Link
                  to="/product"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-[var(--accent-cyan)] text-[var(--accent-cyan)] font-semibold hover:bg-[var(--accent-cyan-soft)] transition-colors"
                >
                  제품 보기
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-3xl blur-3xl"></div>
              <img
                src="/d-go.info/images/renders/render-02.jpg"
                alt="D-GO Vault 45도 정면, 노브 LED 점등"
                className="relative rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-y border-[var(--border-hairline)] bg-[var(--bg-elevated)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <img src="/d-go.info/logo/ICTK.png" alt="ICTK PUF" className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity hover:opacity-100 transition-opacity" />
            <img src="/d-go.info/logo/KC인증.svg" alt="KC 인증" className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity hover:opacity-100 transition-opacity" />
            <div className="badge text-[var(--text-secondary)]">UL CLASS 125</div>
            <div className="badge text-[var(--text-secondary)]">MADE IN KOREA</div>
          </div>
        </div>
      </section>

      {/* Feature Bento Grid */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">핵심 기능</h2>
            <p className="text-lg text-[var(--text-secondary)]">
              기업급 보안 기술을 개인용 데이터 금고에
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Secure Port Card */}
            <div className="glass-card glass-card-hover p-8 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-radial from-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-[var(--accent-cyan-soft)] flex items-center justify-center mb-4">
                  <Lock className="text-[var(--accent-cyan)]" size={24} />
                </div>
                
                <div className="inline-block px-2 py-1 rounded bg-[var(--bg-elevated)] mb-4">
                  <span className="badge text-[var(--accent-cyan)]">SECURE PORT</span>
                </div>
                
                <h3 className="text-xl mb-3">PUF가 열어야만 열리는 포트</h3>
                
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  관리자 앱에서 PUF 승인이 떨어진 순간에만 USB-C / 네트워크 드라이브가 활성화됩니다.
                </p>
              </div>
            </div>

            {/* OCR Scan Card */}
            <div className="glass-card glass-card-hover p-8 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-radial from-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-[var(--accent-cyan-soft)] flex items-center justify-center mb-4">
                  <Scan className="text-[var(--accent-cyan)]" size={24} />
                </div>
                
                <div className="inline-block px-2 py-1 rounded bg-[var(--bg-elevated)] mb-4">
                  <span className="badge text-[var(--accent-cyan)]">DOCUMENT OCR</span>
                </div>
                
                <h3 className="text-xl mb-3">카메라로 찍고, 원본은 금고로</h3>
                
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  촬영된 문서는 OCR 후 PDF로 변환되어 본체에 암호화 저장. 클라이언트 단말에는 원본이 남지 않습니다.
                </p>
              </div>
            </div>

            {/* Data Integrity Card */}
            <div className="glass-card glass-card-hover p-8 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-radial from-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-[var(--accent-cyan-soft)] flex items-center justify-center mb-4">
                  <FileCheck className="text-[var(--accent-cyan)]" size={24} />
                </div>
                
                <div className="inline-block px-2 py-1 rounded bg-[var(--bg-elevated)] mb-4">
                  <span className="badge text-[var(--accent-cyan)]">TAMPER-PROOF</span>
                </div>
                
                <h3 className="text-xl mb-3">변조되면 바로 알 수 있도록</h3>
                
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  모든 파일은 해시·타임스탬프·디지털 서명·접근 이력을 묶어 저장. 원본 증명과 법적 효력 가능.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Teaser */}
      <section className="py-20 md:py-32 bg-[var(--bg-elevated)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-2 py-1 rounded bg-[var(--bg-primary)] mb-4">
                <span className="badge text-[var(--accent-cyan)]">ZERO-KNOWLEDGE</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl mb-6">
                하드웨어 기반<br />
                제로 지식 암호화
              </h2>
              
              <p className="text-lg text-[var(--text-secondary)] mb-6 leading-relaxed">
                ICTK PUF 칩을 통한 반도체 지문 인증으로 외부 서버 없이 완벽한 데이터 보호를 실현합니다.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[var(--accent-cyan-soft)] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Shield size={14} className="text-[var(--accent-cyan)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">폐쇄형 1:1 Direct Wi-Fi</h4>
                    <p className="text-sm text-[var(--text-secondary)]">외부 네트워크 미연결, 완전 격리</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[var(--accent-cyan-soft)] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Fingerprint size={14} className="text-[var(--accent-cyan)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">PUF 물리-디지털 이중 복구</h4>
                    <p className="text-sm text-[var(--text-secondary)]">복제 불가능한 반도체 지문 기반 인증</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[var(--accent-cyan-soft)] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Database size={14} className="text-[var(--accent-cyan)]" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">RAID 1 + UPS 이중 보호</h4>
                    <p className="text-sm text-[var(--text-secondary)]">실시간 미러링 및 전원 보호</p>
                  </div>
                </li>
              </ul>
              
              <Link
                to="/technology"
                className="inline-flex items-center gap-2 text-[var(--accent-cyan)] font-semibold hover:gap-3 transition-all"
              >
                기술 자세히 보기
                <ArrowRight size={20} />
              </Link>
            </div>
            
            <div className="relative">
              <div className="glass-card p-8">
                <img
                  src="/d-go.info/images/renders/render-03.jpg"
                  alt="D-GO Vault USB 보안키 삽입"
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4">관리 대시보드</h2>
            <p className="text-lg text-[var(--text-secondary)]">
              모바일 앱으로 실시간 모니터링 및 제어
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-blue-600/10 rounded-3xl blur-3xl"></div>
            <img
              src="https://images.unsplash.com/photo-1767449441925-737379bc2c4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzc2MjQwNTk1fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="대시보드 미리보기"
              className="relative rounded-2xl shadow-2xl w-full h-auto max-w-4xl mx-auto"
            />
          </div>
          
          <div className="text-center mt-8">
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-2 text-[var(--accent-cyan)] font-semibold hover:gap-3 transition-all"
            >
              대시보드 자세히 보기
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-cyan-500/10 to-blue-600/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">
            지금 D-GO Vault를<br />
            도입해보세요
          </h2>
          
          <p className="text-lg text-[var(--text-secondary)] mb-8">
            법인·단체 도입 문의 환영합니다.<br />
            평일 09:00-18:00 | 010-3241-0427
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:biz@boanlinks.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-[var(--accent-cyan)] text-[var(--bg-primary)] font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              이메일 문의하기
              <ArrowRight size={24} />
            </a>
            <Link
              to="/purchase"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg border border-[var(--accent-cyan)] text-[var(--accent-cyan)] font-semibold text-lg hover:bg-[var(--accent-cyan-soft)] transition-colors"
            >
              구매 방법 보기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
