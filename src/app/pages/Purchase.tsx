import { Mail, Phone, Building2, Users, CheckCircle, Clock } from "lucide-react";

export default function Purchase() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-[var(--accent-cyan-soft)] border border-[var(--accent-cyan)]/20 mb-6">
              <span className="badge text-[var(--accent-cyan)]">PURCHASE</span>
            </div>
            <h1 className="text-4xl md:text-5xl mb-6">구매 안내</h1>
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto">
              법인·단체 도입 문의 환영합니다<br />
              전문 상담을 통해 최적의 솔루션을 제공합니다
            </p>
          </div>
        </div>
      </section>

      {/* Primary CTA */}
      <section className="py-20 bg-gradient-to-br from-cyan-500/10 to-blue-600/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl mb-4">법인·단체 도입 문의</h2>
              <p className="text-lg text-[var(--text-secondary)]">
                규모에 맞는 맞춤형 솔루션을 제안해드립니다
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Email */}
              <a
                href="mailto:biz@boanlinks.com"
                className="glass-card glass-card-hover p-6 text-center group"
              >
                <div className="w-14 h-14 rounded-xl bg-[var(--accent-cyan-soft)] flex items-center justify-center mx-auto mb-4 group-hover:bg-[var(--accent-cyan)] transition-colors">
                  <Mail className="text-[var(--accent-cyan)] group-hover:text-[var(--bg-primary)] transition-colors" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">이메일 문의</h3>
                <p className="text-sm text-[var(--text-secondary)] mb-3">
                  biz@boanlinks.com
                </p>
                <p className="text-xs text-[var(--text-muted)]">
                  24시간 접수 가능
                </p>
              </a>

              {/* Phone */}
              <a
                href="tel:010-3241-0427"
                className="glass-card glass-card-hover p-6 text-center group"
              >
                <div className="w-14 h-14 rounded-xl bg-[var(--accent-cyan-soft)] flex items-center justify-center mx-auto mb-4 group-hover:bg-[var(--accent-cyan)] transition-colors">
                  <Phone className="text-[var(--accent-cyan)] group-hover:text-[var(--bg-primary)] transition-colors" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">전화 상담</h3>
                <p className="text-sm text-[var(--text-secondary)] mb-3">
                  010-3241-0427
                </p>
                <p className="text-xs text-[var(--text-muted)]">
                  평일 09:00 - 18:00
                </p>
              </a>
            </div>

            <div className="flex items-start gap-3 p-4 rounded-lg bg-[var(--bg-primary)]/50 border border-[var(--border-hairline)]">
              <Clock className="text-[var(--accent-cyan)] flex-shrink-0 mt-0.5" size={20} />
              <div>
                <h4 className="font-semibold mb-1">평균 응답 시간</h4>
                <p className="text-sm text-[var(--text-secondary)]">
                  이메일: 24시간 이내<br />
                  전화: 즉시 상담 (운영시간 내)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Purchase Types */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl text-center mb-12">구매 유형</h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Corporate */}
            <div className="glass-card glass-card-hover p-8 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-radial from-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-[var(--accent-cyan-soft)] flex items-center justify-center mb-4">
                  <Building2 className="text-[var(--accent-cyan)]" size={28} />
                </div>
                
                <h3 className="text-2xl mb-3">법인 도입</h3>
                <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                  기업 및 기관을 위한 대량 구매 및 맞춤형 솔루션
                </p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-[var(--accent-cyan)] flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-[var(--text-secondary)]">볼륨 할인 제공</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-[var(--accent-cyan)] flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-[var(--text-secondary)]">전담 기술 지원</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-[var(--accent-cyan)] flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-[var(--text-secondary)]">맞춤형 설치 및 교육</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-[var(--accent-cyan)] flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-[var(--text-secondary)]">연간 유지보수 계약</span>
                  </li>
                </ul>
                
                <a
                  href="mailto:biz@boanlinks.com?subject=법인 도입 문의"
                  className="inline-flex items-center gap-2 text-[var(--accent-cyan)] font-semibold hover:gap-3 transition-all"
                >
                  법인 문의하기 →
                </a>
              </div>
            </div>

            {/* Individual/Small Business */}
            <div className="glass-card glass-card-hover p-8 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-radial from-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-[var(--accent-cyan-soft)] flex items-center justify-center mb-4">
                  <Users className="text-[var(--accent-cyan)]" size={28} />
                </div>
                
                <h3 className="text-2xl mb-3">개인·소규모 구매</h3>
                <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">
                  개인 사용자 및 소규모 사업장을 위한 구매
                </p>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-[var(--accent-cyan)] flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-[var(--text-secondary)]">단품 구매 가능</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-[var(--accent-cyan)] flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-[var(--text-secondary)]">온라인 설치 가이드</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-[var(--accent-cyan)] flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-[var(--text-secondary)]">이메일/전화 기술 지원</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-[var(--accent-cyan)] flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-sm text-[var(--text-secondary)]">제품 보증 서비스</span>
                  </li>
                </ul>
                
                <a
                  href="mailto:biz@boanlinks.com?subject=개인 구매 문의"
                  className="inline-flex items-center gap-2 text-[var(--accent-cyan)] font-semibold hover:gap-3 transition-all"
                >
                  구매 문의하기 →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Request */}
      <section className="py-20 bg-[var(--bg-elevated)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">견적 요청</h2>
            <p className="text-lg text-[var(--text-secondary)]">
              아래 정보를 포함하여 문의해주시면<br />
              신속하게 견적을 안내해드리겠습니다
            </p>
          </div>

          <div className="glass-card p-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3 text-[var(--accent-cyan)]">필수 정보</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-cyan)] mt-1.5 flex-shrink-0"></div>
                    <span>회사명 또는 소속</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-cyan)] mt-1.5 flex-shrink-0"></div>
                    <span>담당자 성함 및 연락처</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-cyan)] mt-1.5 flex-shrink-0"></div>
                    <span>희망 수량</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-cyan)] mt-1.5 flex-shrink-0"></div>
                    <span>사용 용도 (간략히)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-3 text-[var(--accent-cyan)]">선택 정보</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-cyan)] mt-1.5 flex-shrink-0"></div>
                    <span>희망 도입 시기</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-cyan)] mt-1.5 flex-shrink-0"></div>
                    <span>특수 요구사항 (커스터마이징 등)</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-cyan)] mt-1.5 flex-shrink-0"></div>
                    <span>기술 지원 범위</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-[var(--border-hairline)]">
                <a
                  href="mailto:biz@boanlinks.com?subject=D-GO Vault 견적 요청&body=회사명: %0D%0A담당자: %0D%0A연락처: %0D%0A희망 수량: %0D%0A사용 용도: %0D%0A%0D%0A기타 문의사항: "
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-[var(--accent-cyan)] text-[var(--bg-primary)] font-semibold text-lg hover:opacity-90 transition-opacity"
                >
                  <Mail size={24} />
                  견적 요청 이메일 보내기
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sales Partner Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">판매 파트너</h2>
            <p className="text-lg text-[var(--text-secondary)]">
              공식 판매 파트너를 통해서도 구매하실 수 있습니다
            </p>
          </div>

          <div className="glass-card p-12 max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--bg-primary)] border border-[var(--border-hairline)] mb-4">
              <span className="badge text-[var(--text-secondary)]">준비 중</span>
            </div>
            <p className="text-[var(--text-secondary)]">
              공식 판매 파트너 네트워크를 구축 중입니다.<br />
              현재는 직접 문의를 통한 구매만 가능합니다.
            </p>
          </div>
        </div>
      </section>

      {/* Support Info */}
      <section className="py-20 bg-gradient-to-br from-cyan-500/10 to-blue-600/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl mb-6">구매 상담 안내</h2>
          
          <div className="glass-card p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h3 className="font-semibold mb-2 text-[var(--accent-cyan)]">운영 시간</h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  평일: 09:00 - 18:00<br />
                  주말 및 공휴일: 휴무<br />
                  이메일: 24시간 접수 가능
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-[var(--accent-cyan)]">연락처</h3>
                <p className="text-sm text-[var(--text-secondary)]">
                  이메일: biz@boanlinks.com<br />
                  전화: 010-3241-0427<br />
                  주소: 경기 하남시 미사대로 540
                </p>
              </div>
            </div>
          </div>

          <p className="text-lg text-[var(--text-secondary)] mb-6">
            궁금한 점이 있으시다면 언제든 문의해주세요.<br />
            전문 상담원이 친절하게 안내해드리겠습니다.
          </p>
        </div>
      </section>
    </div>
  );
}
