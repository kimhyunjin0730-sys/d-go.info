import { Check, CircleCheck, Clock, Copy, Mail, MapPin, MessageCircle, MessageSquare, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { CONTACT, mailto } from "../content";
import { ButtonLink } from "../components/site/Button";
import { Eyebrow, PageHero, Section, SectionIntro } from "../components/site/Layout";
import { cn } from "../components/ui/utils";

const INQUIRY_TYPES = ["제품 구매", "기술 지원", "법인·단체 도입", "파트너십·총판", "A/S 문의", "기타"];

const FAQS = [
  {
    category: "구매",
    q: "개인도 구매할 수 있나요?",
    a: "네, 개인 구매 가능합니다. 법인·단체 도입뿐만 아니라 개인 사용자를 위한 단품 구매도 지원합니다. 자세한 사항은 구매 페이지를 참고하시거나 문의해주세요.",
  },
  {
    category: "구매",
    q: "납품 기간은 얼마나 걸리나요?",
    a: "주문 확정 후 약 2-3주 소요됩니다. 수량 및 커스터마이징 여부에 따라 달라질 수 있으며, 정확한 일정은 주문 시 안내드립니다.",
  },
  {
    category: "배송",
    q: "배송 지역 제한이 있나요?",
    a: "국내 전 지역 배송 가능합니다. 제주·도서 지역은 추가 배송료가 발생할 수 있습니다. 해외 배송은 별도 문의해주세요.",
  },
  {
    category: "A/S",
    q: "제품 보증 기간은 어떻게 되나요?",
    a: "구매일로부터 1년간 무상 A/S를 제공합니다. 하드웨어 결함 시 수리 또는 교체해드리며, 사용자 과실로 인한 고장은 유상 수리입니다.",
  },
  {
    category: "A/S",
    q: "고장 시 데이터는 어떻게 되나요?",
    a: "RAID 1 미러링으로 데이터는 안전하게 보호됩니다. A/S 시에도 데이터는 암호화 상태로 유지되며, PUF 인증 없이는 접근할 수 없습니다.",
  },
  {
    category: "기술",
    q: "Windows/Mac 모두 지원하나요?",
    a: "네. 전용 앱이 PC(Windows·macOS·Linux)와 모바일(iOS·Android)을 지원합니다. 보안을 위해 웹 브라우저 접속은 차단되며, 전용 앱으로만 접속합니다.",
  },
  {
    category: "보증",
    q: "환불 정책은 어떻게 되나요?",
    a: "제품 수령 후 7일 이내 미개봉 상태에 한해 환불 가능합니다. 개봉 후에는 제품 결함이 있을 경우에만 교환·환불이 가능합니다.",
  },
  {
    category: "보증",
    q: "연장 보증이 가능한가요?",
    a: "네, 법인 구매 시 연간 유지보수 계약을 통해 보증 기간을 연장할 수 있습니다. 자세한 사항은 영업팀에 문의해주세요.",
  },
];

type CopyState = "idle" | "copied" | "failed";

async function copyText(text: string) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }
  // Fallback for non-secure contexts (e.g. LAN preview over http)
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.setAttribute("readonly", "");
  ta.style.position = "fixed";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.select();
  const ok = document.execCommand("copy");
  document.body.removeChild(ta);
  if (!ok) throw new Error("copy failed");
}

const cardBase = "flex flex-col rounded-2xl border p-5 md:p-6";
const iconTile = "grid h-11 w-11 place-items-center rounded-xl text-key";

export default function Support() {
  const [copyState, setCopyState] = useState<CopyState>("idle");
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copyEmail = async () => {
    try {
      await copyText(CONTACT.email);
      setCopyState("copied");
    } catch {
      setCopyState("failed");
    }
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setCopyState("idle"), 2500);
  };

  return (
    <div className="w-full">
      <PageHero eyebrow="Support" title="고객 지원" lead="D-GO Quantum Data Vault 사용 중 궁금한 점이 있으신가요? 언제든 문의해주세요." />

      {/* ── 연락처 ── */}
      <Section labelledBy="contact-title">
        <SectionIntro id="contact-title" eyebrow="Contact" title="연락처" />

        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {/* 이메일 */}
          <li className={cn(cardBase, "border-line bg-white")}>
            <span className={cn(iconTile, "bg-mist")} aria-hidden="true">
              <Mail size={22} strokeWidth={1.75} />
            </span>
            <h3 className="mt-4 text-lg font-bold text-ink">이메일</h3>
            <p className="mt-1 text-xl font-bold tracking-tight break-all text-navy">{CONTACT.email}</p>
            <p className="mt-0.5 text-sm text-ink-3">24시간 접수</p>
            <div className="mt-auto flex gap-2 pt-5">
              <ButtonLink href={mailto()} className="flex-1">
                보내기
              </ButtonLink>
              <button
                type="button"
                onClick={copyEmail}
                className={cn(
                  "inline-flex min-h-11 min-w-[6.5rem] cursor-pointer items-center justify-center gap-1.5 rounded-full border px-4 text-[0.9375rem] font-semibold whitespace-nowrap transition-colors duration-200",
                  copyState === "copied"
                    ? "border-status-ok bg-white text-status-ok"
                    : copyState === "failed"
                      ? "border-status-crit bg-white text-status-crit"
                      : "border-navy/30 bg-white text-navy hover:border-navy hover:bg-mist",
                )}
                aria-label={copyState === "idle" ? `이메일 주소 ${CONTACT.email} 복사` : undefined}
              >
                {copyState === "copied" ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
                {copyState === "copied" ? "복사됨" : copyState === "failed" ? "복사 실패" : "복사"}
              </button>
            </div>
            <p className="sr-only" aria-live="polite">
              {copyState === "copied"
                ? "이메일 주소가 복사되었습니다."
                : copyState === "failed"
                  ? "복사하지 못했습니다. 이메일 주소를 직접 선택해 복사해 주세요."
                  : ""}
            </p>
          </li>

          {/* 전화 */}
          <li className={cn(cardBase, "border-line bg-white")}>
            <span className={cn(iconTile, "bg-mist")} aria-hidden="true">
              <Phone size={22} strokeWidth={1.75} />
            </span>
            <h3 className="mt-4 text-lg font-bold text-ink">전화</h3>
            <p className="mt-1 text-xl font-bold tracking-tight text-navy tabular-nums">{CONTACT.phone}</p>
            <p className="mt-0.5 text-sm text-ink-3">{CONTACT.hours}</p>
            <div className="mt-auto pt-5">
              <ButtonLink href={CONTACT.tel} className="w-full">
                <Phone size={16} aria-hidden="true" />
                전화 걸기
              </ButtonLink>
            </div>
          </li>

          {/* 카카오톡 채널 */}
          <li
            className={cn(
              cardBase,
              "border-panel-line bg-panel md:col-span-2 md:flex-row md:items-center md:gap-6 lg:col-span-1 lg:row-span-2 lg:flex-col lg:items-stretch lg:gap-0",
            )}
          >
            <div className="md:flex-1 lg:flex-none">
              <span className={cn(iconTile, "bg-white")} aria-hidden="true">
                <MessageCircle size={22} strokeWidth={1.75} />
              </span>
              <h3 className="mt-4 text-lg font-bold text-ink">카카오톡 채널</h3>
              <p className="mt-1 text-xl font-bold tracking-tight text-navy">24시간 고객 지원</p>
              <p className="mt-0.5 text-sm text-ink-3">채팅으로 바로 문의하거나, 휴대폰으로 QR을 스캔해 채널을 추가하세요.</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <ButtonLink href={CONTACT.kakaoChat} external className="h-10 min-h-10 px-4 text-sm">
                  <MessageCircle size={16} aria-hidden="true" />
                  채팅 시작하기
                </ButtonLink>
                <ButtonLink href={CONTACT.kakaoChannel} external variant="secondary" className="h-10 min-h-10 px-4 text-sm">
                  채널 홈 열기
                </ButtonLink>
              </div>
            </div>
            <div className="mt-5 flex items-center justify-center rounded-xl border border-panel-line bg-white p-4 md:mt-0 md:w-56 md:flex-none lg:mt-5 lg:w-auto lg:flex-1">
              {/* The PNG ships on a light-gray canvas with wide margins: crop to the code + label and lift the gray to white. */}
              <div className="relative aspect-[4/5] w-full max-w-[200px] overflow-hidden">
                <img
                  src="/kakao-qr.png"
                  alt="D-GO 카카오톡 채널 QR"
                  width={375}
                  height={382}
                  className="absolute h-auto max-w-none brightness-[1.05]"
                  style={{ width: "180.29%", left: "-39.9%", top: "-23.08%" }}
                />
              </div>
            </div>
          </li>

          {/* 운영 시간 */}
          <li className={cn(cardBase, "border-line bg-white")}>
            <span className={cn(iconTile, "bg-mist")} aria-hidden="true">
              <Clock size={22} strokeWidth={1.75} />
            </span>
            <h3 className="mt-4 text-lg font-bold text-ink">운영 시간</h3>
            <ul className="mt-1 space-y-0.5 text-[0.9375rem] leading-relaxed">
              <li className="font-semibold text-navy">{CONTACT.hours}</li>
              <li className="text-ink-2">{CONTACT.holidays}</li>
              <li className="text-ink-3">이메일은 24시간 접수</li>
            </ul>
          </li>

          {/* 주소 */}
          <li className={cn(cardBase, "border-line bg-white")}>
            <span className={cn(iconTile, "bg-mist")} aria-hidden="true">
              <MapPin size={22} strokeWidth={1.75} />
            </span>
            <h3 className="mt-4 text-lg font-bold text-ink">주소</h3>
            <address className="mt-1 text-[0.9375rem] leading-relaxed text-ink-2 not-italic">
              {CONTACT.addressLines[0]}
              <br />
              {CONTACT.addressLines[1]}
            </address>
          </li>
        </ul>
      </Section>

      {/* ── 문의하기 ── */}
      <Section tone="mist" labelledBy="inquiry-title">
        <SectionIntro id="inquiry-title" eyebrow="Inquiry" title="문의하기" lead="아래 버튼을 클릭하면 이메일 앱이 열립니다" />

        <div className="grid gap-4 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-5">
          <div className="rounded-2xl border border-line bg-white p-5 md:p-7">
            <h3 id="inquiry-type-title" className="text-lg font-bold text-navy">
              문의 유형
            </h3>
            <ul aria-labelledby="inquiry-type-title" className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
              {INQUIRY_TYPES.map((type) => (
                <li key={type}>
                  <a
                    href={mailto(`문의: ${type}`)}
                    className="flex min-h-12 items-center justify-center rounded-xl border border-line bg-white px-3 py-2 text-center text-[0.9375rem] font-semibold text-navy transition-colors duration-200 hover:border-key hover:bg-mist hover:text-key"
                  >
                    {type}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col rounded-2xl border border-line bg-white p-5 md:p-7">
            <h3 className="text-lg font-bold text-navy">일반 문의</h3>
            <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-ink-2">문의 유형을 선택하지 않고 바로 이메일을 보내실 수 있습니다.</p>
            <div className="mt-4">
              <ButtonLink href={mailto()}>
                <Mail size={18} aria-hidden="true" />
                이메일 앱 열기
              </ButtonLink>
            </div>
            <p className="mt-auto pt-5 text-sm leading-relaxed text-ink-2">
              <span className="block rounded-xl bg-mist px-4 py-3">
                <span className="font-semibold text-key">안내:</span> 메일 앱이 열리지 않으면{" "}
                <span className="font-semibold whitespace-nowrap text-navy">{CONTACT.email}</span>로 직접 보내주세요.
              </span>
            </p>
          </div>
        </div>
      </Section>

      {/* ── FAQ ── */}
      <Section labelledBy="faq-title">
        <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
          <div>
            <Eyebrow>Q &amp; A</Eyebrow>
            <h2 id="faq-title" className="display mt-2 text-[clamp(1.625rem,2.8vw,2.25rem)] text-navy">
              자주 묻는 질문
            </h2>
            <p className="mt-2 text-[0.9375rem] text-ink-2">구매·A/S·배송·보증 관련 FAQ</p>
          </div>
          <dl className="grid gap-x-10 md:grid-cols-2">
            {FAQS.map((f) => (
              <div key={f.q} className="border-t border-line py-5">
                <dt>
                  <span className="inline-flex rounded-full border border-line bg-mist px-2.5 py-0.5 text-xs font-semibold text-key">
                    {f.category}
                  </span>
                  <span className="sr-only"> — </span>
                  <span className="mt-2 block text-lg font-bold text-ink">{f.q}</span>
                </dt>
                <dd className="mt-2 text-[0.9375rem] leading-relaxed text-ink-2">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="mt-10 flex flex-col items-start gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-base font-semibold text-navy">원하는 답변을 찾지 못하셨나요?</p>
          <ButtonLink href={mailto()}>
            <MessageSquare size={18} aria-hidden="true" />
            직접 문의하기
          </ButtonLink>
        </div>
      </Section>

      {/* ── 보안 공지 ── */}
      <Section tone="mist" labelledBy="notice-title">
        <SectionIntro id="notice-title" eyebrow="Security Notice" title="보안 공지" lead="제품 업데이트 및 보안 관련 중요 공지사항" />
        <div className="flex items-start gap-4 rounded-2xl border border-line bg-white p-5 md:p-7">
          <CircleCheck size={32} strokeWidth={1.75} className="flex-none text-status-ok" aria-hidden="true" />
          <div>
            <h3 className="text-lg font-bold text-ink">현재 공지사항 없음</h3>
            <p className="mt-1 text-[0.9375rem] leading-relaxed text-ink-2">
              모든 시스템이 안정적으로 운영되고 있습니다. 중요한 업데이트나 보안 공지가 있을 경우 이곳에 게시됩니다.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
