import { Mail, Phone, MapPin, Clock, Copy, CheckCircle, MessageSquare, HelpCircle } from "lucide-react";
import { useState } from "react";

export default function Support() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("biz@boanlinks.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="pt-10 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <div className="inline-block px-3 py-1 rounded-full bg-[var(--accent-cyan-soft)] border border-[var(--accent-cyan)]/20 mb-4">
              <span className="badge text-[var(--accent-cyan)]">SUPPORT</span>
            </div>
            <h1 className="text-2xl md:text-3xl mb-3">고객 지원</h1>
            <p className="text-lg text-[var(--text-secondary)] max-w-3xl mx-auto">
              D-GO Vault 사용 중 궁금한 점이 있으신가요? 언제든 문의해주세요.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-10 md:py-14 bg-[var(--bg-elevated)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl text-center mb-6">연락처</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            {/* Email */}
            <div className="glass-card p-4">
              <div className="w-10 h-10 rounded-xl bg-[var(--accent-cyan-soft)] flex items-center justify-center mb-3">
                <Mail className="text-[var(--accent-cyan)]" size={20} />
              </div>
              <h3 className="font-semibold text-sm mb-1">이메일</h3>
              <p className="text-sm text-[var(--text-secondary)] mb-2 break-all">
                biz@boanlinks.com
              </p>
              <div className="flex gap-2">
                <a
                  href="mailto:biz@boanlinks.com"
                  className="flex-1 px-3 py-1.5 rounded-lg bg-[var(--accent-cyan)] text-[var(--bg-primary)] text-xs font-medium text-center hover:opacity-90 transition-opacity"
                >
                  보내기
                </a>
                <button
                  onClick={copyEmail}
                  className="px-2.5 py-1.5 rounded-lg border border-[var(--accent-cyan)] text-[var(--accent-cyan)] hover:bg-[var(--accent-cyan-soft)] transition-colors"
                  aria-label="이메일 복사"
                >
                  {copied ? <CheckCircle size={14} /> : <Copy size={14} />}
                </button>
              </div>
            </div>

            {/* Phone */}
            <div className="glass-card p-4">
              <div className="w-10 h-10 rounded-xl bg-[var(--accent-cyan-soft)] flex items-center justify-center mb-3">
                <Phone className="text-[var(--accent-cyan)]" size={20} />
              </div>
              <h3 className="font-semibold text-sm mb-1">전화</h3>
              <p className="text-sm text-[var(--text-secondary)] mb-2 mono">
                010-3241-0427
              </p>
              <a
                href="tel:010-3241-0427"
                className="block px-3 py-1.5 rounded-lg bg-[var(--accent-cyan)] text-[var(--bg-primary)] text-xs font-medium text-center hover:opacity-90 transition-opacity"
              >
                전화 걸기
              </a>
            </div>

            {/* Hours */}
            <div className="glass-card p-4">
              <div className="w-10 h-10 rounded-xl bg-[var(--accent-cyan-soft)] flex items-center justify-center mb-3">
                <Clock className="text-[var(--accent-cyan)]" size={20} />
              </div>
              <h3 className="font-semibold text-sm mb-1">운영 시간</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                평일 09:00-18:00<br />
                주말·공휴일: 휴무<br />
                <span className="text-[var(--text-muted)]">이메일은 24시간 접수</span>
              </p>
            </div>

            {/* Address */}
            <div className="glass-card p-4">
              <div className="w-10 h-10 rounded-xl bg-[var(--accent-cyan-soft)] flex items-center justify-center mb-3">
                <MapPin className="text-[var(--accent-cyan)]" size={20} />
              </div>
              <h3 className="font-semibold text-sm mb-1">주소</h3>
              <p className="text-sm text-[var(--text-secondary)]">
                경기 하남시 미사대로 540<br />
                현대지식산업센터<br />
                한강미사2차 비동 614호
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-10 md:py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl mb-2">문의하기</h2>
            <p className="text-base text-[var(--text-secondary)]">
              아래 버튼을 클릭하면 이메일 앱이 열립니다
            </p>
          </div>

          <div className="glass-card p-5">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-sm mb-2 text-[var(--accent-cyan)]">문의 유형</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {[
                    "제품 구매",
                    "기술 지원",
                    "법인·단체 도입",
                    "파트너십·총판",
                    "A/S 문의",
                    "기타"
                  ].map((type) => (
                    <a
                      key={type}
                      href={`mailto:biz@boanlinks.com?subject=문의: ${type}`}
                      className="px-3 py-2 rounded-lg border border-[var(--border-hairline)] hover:border-[var(--accent-cyan)] hover:bg-[var(--accent-cyan-soft)] transition-all text-sm text-center"
                    >
                      {type}
                    </a>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--border-hairline)]">
                <h3 className="font-semibold text-sm mb-2 text-[var(--accent-cyan)]">일반 문의</h3>
                <p className="text-sm text-[var(--text-secondary)] mb-3">
                  문의 유형을 선택하지 않고 바로 이메일을 보내실 수 있습니다.
                </p>
                <a
                  href="mailto:biz@boanlinks.com"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--accent-cyan)] text-[var(--bg-primary)] font-semibold hover:opacity-90 transition-opacity"
                >
                  <Mail size={18} />
                  이메일 앱 열기
                </a>
              </div>

              <div className="p-3 rounded-lg bg-[var(--bg-primary)]/50 border border-[var(--border-hairline)]">
                <p className="text-xs text-[var(--text-secondary)]">
                  <span className="text-[var(--accent-cyan)] font-semibold">안내:</span> 메일 앱이 열리지 않으면 <span className="mono text-[var(--accent-cyan)]">biz@boanlinks.com</span> 으로 직접 보내주세요.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-10 md:py-14 bg-[var(--bg-elevated)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <div className="w-12 h-12 rounded-xl bg-[var(--accent-cyan-soft)] flex items-center justify-center mx-auto mb-3">
              <HelpCircle className="text-[var(--accent-cyan)]" size={24} />
            </div>
            <h2 className="text-2xl md:text-3xl mb-2">자주 묻는 질문</h2>
            <p className="text-base text-[var(--text-secondary)]">
              구매·A/S·배송·보증 관련 FAQ
            </p>
          </div>

          <div className="space-y-3">
            {[
              {
                category: "구매",
                q: "개인도 구매할 수 있나요?",
                a: "네, 개인 구매 가능합니다. 법인·단체 도입뿐만 아니라 개인 사용자를 위한 단품 구매도 지원합니다. 자세한 사항은 구매 페이지를 참고하시거나 문의해주세요."
              },
              {
                category: "구매",
                q: "납품 기간은 얼마나 걸리나요?",
                a: "주문 확정 후 약 2-3주 소요됩니다. 수량 및 커스터마이징 여부에 따라 달라질 수 있으며, 정확한 일정은 주문 시 안내드립니다."
              },
              {
                category: "배송",
                q: "배송 지역 제한이 있나요?",
                a: "국내 전 지역 배송 가능합니다. 제주·도서 지역은 추가 배송료가 발생할 수 있습니다. 해외 배송은 별도 문의해주세요."
              },
              {
                category: "A/S",
                q: "제품 보증 기간은 어떻게 되나요?",
                a: "구매일로부터 1년간 무상 A/S를 제공합니다. 하드웨어 결함 시 수리 또는 교체해드리며, 사용자 과실로 인한 고장은 유상 수리입니다."
              },
              {
                category: "A/S",
                q: "고장 시 데이터는 어떻게 되나요?",
                a: "RAID 1 미러링으로 데이터는 안전하게 보호됩니다. A/S 시에도 데이터는 암호화 상태로 유지되며, PUF 인증 없이는 접근할 수 없습니다."
              },
              {
                category: "기술",
                q: "Windows/Mac 모두 지원하나요?",
                a: "현재는 Android 앱으로 제어하며, USB-C 포트를 통한 PC 연결 시 Windows/Mac 모두 지원합니다. iOS 앱은 개발 예정입니다."
              },
              {
                category: "보증",
                q: "환불 정책은 어떻게 되나요?",
                a: "제품 수령 후 7일 이내 미개봉 상태에 한해 환불 가능합니다. 개봉 후에는 제품 결함이 있을 경우에만 교환·환불이 가능합니다."
              },
              {
                category: "보증",
                q: "연장 보증이 가능한가요?",
                a: "네, 법인 구매 시 연간 유지보수 계약을 통해 보증 기간을 연장할 수 있습니다. 자세한 사항은 영업팀에 문의해주세요."
              },
            ].map((faq, index) => (
              <div key={index} className="glass-card p-4">
                <div className="flex items-start gap-2 mb-2">
                  <div className="px-2 py-0.5 rounded bg-[var(--accent-cyan-soft)]">
                    <span className="badge text-[var(--accent-cyan)] text-xs">{faq.category}</span>
                  </div>
                  <h3 className="font-semibold text-base flex-1">Q. {faq.q}</h3>
                </div>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">A. {faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-[var(--text-secondary)] mb-3">
              원하는 답변을 찾지 못하셨나요?
            </p>
            <a
              href="mailto:biz@boanlinks.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--accent-cyan)] text-[var(--bg-primary)] font-semibold hover:opacity-90 transition-opacity"
            >
              <MessageSquare size={18} />
              직접 문의하기
            </a>
          </div>
        </div>
      </section>

      {/* Security Notice Section */}
      <section className="py-10 md:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl mb-2">보안 공지</h2>
            <p className="text-base text-[var(--text-secondary)]">
              제품 업데이트 및 보안 관련 중요 공지사항
            </p>
          </div>

          <div className="glass-card p-8 max-w-3xl mx-auto text-center">
            <CheckCircle className="text-[var(--status-ok)] mx-auto mb-3" size={40} />
            <h3 className="text-lg font-semibold mb-1">현재 공지사항 없음</h3>
            <p className="text-sm text-[var(--text-secondary)]">
              모든 시스템이 안정적으로 운영되고 있습니다. 중요한 업데이트나 보안 공지가 있을 경우 이곳에 게시됩니다.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
