import { ArrowRight, Building2, CircleCheck, Clock, CloudOff, Handshake, Mail, MapPin, MonitorCheck, Phone, Users, Wallet } from "lucide-react";
import { CONTACT, EASY_ADOPTION, SALES_PARTNERS, mailto } from "../content";
import { ButtonLink } from "../components/site/Button";
import { PageHero, Section, SectionIntro } from "../components/site/Layout";

const ADOPTION_ICONS = [Wallet, CloudOff, MonitorCheck];

const PURCHASE_TYPES = [
  {
    icon: Building2,
    title: "법인 도입",
    body: "기업 및 기관을 위한 대량 구매 및 맞춤형 솔루션",
    points: ["볼륨 할인 제공", "전담 기술 지원", "맞춤형 설치 및 교육", "연간 유지보수 계약"],
    cta: "법인 문의하기",
    href: mailto("법인 도입 문의"),
    variant: "primary" as const,
  },
  {
    icon: Users,
    title: "개인·소규모 구매",
    body: "개인 사용자 및 소규모 사업장을 위한 구매",
    points: ["단품 구매 가능", "온라인 설치 가이드", "이메일/전화 기술 지원", "제품 보증 서비스"],
    cta: "구매 문의하기",
    href: mailto("개인 구매 문의"),
    variant: "secondary" as const,
  },
];

const QUOTE_REQUIRED = ["회사명 또는 소속", "담당자 성함 및 연락처", "희망 수량", "사용 용도 (간략히)"];
const QUOTE_OPTIONAL = ["희망 도입 시기", "특수 요구사항 (커스터마이징 등)", "기술 지원 범위"];

const QUOTE_MAILTO = mailto(
  "D-GO Quantum Data Vault 견적 요청",
  "회사명: \n담당자: \n연락처: \n희망 수량: \n사용 용도: \n\n기타 문의사항: ",
);

export default function Purchase() {
  return (
    <div className="w-full">
      <PageHero eyebrow="Purchase" title="구매 안내" lead="법인·단체 도입 문의 환영합니다 — 전문 상담을 통해 최적의 솔루션을 제공합니다" />

      {/* ── 법인·단체 도입 문의 ── */}
      <Section labelledBy="inquiry-title">
        <SectionIntro id="inquiry-title" eyebrow="Contact Sales" title="법인·단체 도입 문의" lead="규모에 맞는 맞춤형 솔루션을 제안해드립니다" />

        <ul className="grid gap-4 md:grid-cols-2 lg:gap-5">
          <li>
            <a
              href={mailto()}
              className="group flex h-full flex-col rounded-2xl border border-line bg-white p-5 transition-colors duration-200 hover:border-key md:p-7"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-mist text-key" aria-hidden="true">
                <Mail size={24} strokeWidth={1.75} />
              </span>
              <h3 className="mt-4 text-lg font-bold text-ink">이메일 문의</h3>
              <p className="mt-1 text-2xl font-bold tracking-tight break-all text-navy md:text-[1.75rem]">{CONTACT.email}</p>
              <p className="mt-1 text-[0.9375rem] text-ink-2">24시간 접수 가능</p>
              <span className="mt-5 inline-flex min-h-11 items-center gap-1.5 text-[0.9375rem] font-semibold text-key">
                메일 보내기 <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
            </a>
          </li>
          <li>
            <a
              href={CONTACT.tel}
              className="group flex h-full flex-col rounded-2xl border border-line bg-white p-5 transition-colors duration-200 hover:border-key md:p-7"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-mist text-key" aria-hidden="true">
                <Phone size={24} strokeWidth={1.75} />
              </span>
              <h3 className="mt-4 text-lg font-bold text-ink">전화 상담</h3>
              <p className="mt-1 text-2xl font-bold tracking-tight text-navy tabular-nums md:text-[1.75rem]">{CONTACT.phone}</p>
              <p className="mt-1 text-[0.9375rem] text-ink-2">{CONTACT.hours}</p>
              <span className="mt-5 inline-flex min-h-11 items-center gap-1.5 text-[0.9375rem] font-semibold text-key">
                전화 걸기 <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
              </span>
            </a>
          </li>
        </ul>

        <div className="mt-4 flex items-start gap-3 rounded-xl bg-mist px-4 py-3.5 md:px-5 lg:mt-5">
          <Clock size={20} className="mt-0.5 flex-none text-key" aria-hidden="true" />
          <p className="text-[0.9375rem] leading-relaxed text-ink-2">
            <span className="font-bold text-navy">평균 응답 시간</span>{" "}
            <span className="block sm:ml-2 sm:inline">이메일: 24시간 이내 · 전화: 즉시 상담 (운영시간 내)</span>
          </p>
        </div>
      </Section>

      {/* ── 도입 방식 ── */}
      <Section tone="mist" labelledBy="adopt-title">
        <SectionIntro id="adopt-title" eyebrow="Easy Adoption" title="도입 방식" lead="구독 계약도, 설치 공사도 필요 없습니다." />
        <div className="grid overflow-hidden rounded-2xl border border-line bg-white lg:grid-cols-[200px_1fr]">
          <p className="flex items-center bg-navy px-6 py-4 text-lg font-bold text-white lg:justify-center">도입도 간단</p>
          <ul className="grid md:grid-cols-3">
            {EASY_ADOPTION.map((e, i) => {
              const Icon = ADOPTION_ICONS[i];
              return (
                <li key={e.title} className="flex gap-3.5 border-t border-line px-6 py-5 first:border-t-0 md:border-t-0 md:border-l md:first:border-l-0">
                  {Icon && <Icon size={24} strokeWidth={1.6} className="mt-0.5 flex-none text-key" aria-hidden="true" />}
                  <div>
                    <h3 className="font-bold text-navy">{e.title}</h3>
                    <p className="mt-0.5 text-sm leading-relaxed text-ink-2">{e.body}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </Section>

      {/* ── 구매 유형 ── */}
      <Section labelledBy="type-title">
        <SectionIntro id="type-title" eyebrow="Purchase Types" title="구매 유형" />
        <ul className="grid gap-4 md:grid-cols-2 lg:gap-5">
          {PURCHASE_TYPES.map((t) => (
            <li key={t.title} className="flex flex-col rounded-2xl border border-panel-line bg-panel p-5 md:p-7">
              <t.icon size={30} strokeWidth={1.6} className="text-key" aria-hidden="true" />
              <h3 className="mt-3 text-xl font-bold text-navy">{t.title}</h3>
              <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-ink-2">{t.body}</p>
              <ul className="mt-5 grid gap-2.5 border-t border-panel-line pt-5 sm:grid-cols-2">
                {t.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-[0.9375rem] text-ink">
                    <CircleCheck size={18} className="mt-0.5 flex-none text-key" aria-hidden="true" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-6">
                <ButtonLink href={t.href} variant={t.variant}>
                  {t.cta} <ArrowRight size={18} aria-hidden="true" />
                </ButtonLink>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {/* ── 견적 요청 ── */}
      <Section tone="mist" labelledBy="quote-title">
        <SectionIntro
          id="quote-title"
          eyebrow="Quotation"
          title="견적 요청"
          lead="아래 정보를 포함하여 문의해주시면 신속하게 견적을 안내해드리겠습니다"
        />
        <div className="rounded-2xl border border-line bg-white p-5 md:p-8">
          <div className="grid gap-8 md:grid-cols-2 md:gap-10">
            <div>
              <h3 className="flex items-center gap-2 text-lg font-bold text-navy">
                필수 정보
                <span aria-hidden="true" className="rounded-full bg-key px-2 py-0.5 text-xs font-semibold text-white">필수</span>
              </h3>
              <ul className="mt-3 divide-y divide-line border-t border-line">
                {QUOTE_REQUIRED.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 py-3 text-[0.9375rem] text-ink">
                    <CircleCheck size={18} className="flex-none text-key" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="flex items-center gap-2 text-lg font-bold text-navy">
                선택 정보
                <span aria-hidden="true" className="rounded-full border border-line bg-mist px-2 py-0.5 text-xs font-semibold text-ink-3">선택</span>
              </h3>
              <ul className="mt-3 divide-y divide-line border-t border-line">
                {QUOTE_OPTIONAL.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 py-3 text-[0.9375rem] text-ink-2">
                    <span className="mx-[0.4375rem] h-1.5 w-1.5 flex-none rounded-full bg-ink-3" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-ink-3">버튼을 누르면 항목이 채워진 이메일 양식이 열립니다.</p>
            <ButtonLink href={QUOTE_MAILTO}>
              <Mail size={18} aria-hidden="true" />
              견적 요청 이메일 보내기
            </ButtonLink>
          </div>
        </div>
      </Section>

      {/* ── 판매 파트너 ── */}
      <Section labelledBy="partner-title">
        <SectionIntro
          id="partner-title"
          eyebrow="Sales Partners"
          title="판매 파트너"
          lead="공식 판매 파트너를 통해서도 도입 상담을 받으실 수 있습니다."
        />
        <div className="grid gap-4 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-5">
          <div className="rounded-2xl border border-line bg-white p-5 md:p-7">
            <h3 className="text-lg font-bold text-navy">공식 판매 파트너</h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 sm:grid-cols-3">
              {SALES_PARTNERS.map((p) => (
                <li key={p} className="flex min-h-12 items-center border-t border-line py-2.5 text-[0.9375rem] font-semibold text-ink">
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col rounded-2xl border border-panel-line bg-panel p-5 md:p-7">
            <Handshake size={30} strokeWidth={1.6} className="text-key" aria-hidden="true" />
            <h3 className="mt-3 text-lg font-bold text-navy">기술 협약</h3>
            <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-ink-2">
              본 제품은 국내 PUF 기술 선도 기업 ICTK와의 기술 협약을 통해 제조됩니다.
            </p>
          </div>
        </div>
      </Section>

      {/* ── 구매 상담 안내 ── */}
      <Section tone="mist" labelledBy="consult-title">
        <SectionIntro
          id="consult-title"
          eyebrow="Consultation"
          title="구매 상담 안내"
          lead="궁금한 점이 있으시다면 언제든 문의해주세요. 전문 상담원이 친절하게 안내해드리겠습니다."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:gap-5">
          <div className="rounded-2xl border border-line bg-white p-5 md:p-7">
            <h3 className="flex items-center gap-2.5 text-lg font-bold text-navy">
              <Clock size={20} className="text-key" aria-hidden="true" />
              운영 시간
            </h3>
            <ul className="mt-4 divide-y divide-line border-t border-line text-[0.9375rem]">
              <li className="py-3 font-semibold text-ink">{CONTACT.hours}</li>
              <li className="py-3 text-ink-2">{CONTACT.holidays}</li>
              <li className="py-3 text-ink-2">이메일 24시간 접수 가능</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-line bg-white p-5 md:p-7">
            <h3 className="flex items-center gap-2.5 text-lg font-bold text-navy">
              <Phone size={20} className="text-key" aria-hidden="true" />
              연락처
            </h3>
            <dl className="mt-4 divide-y divide-line border-t border-line text-[0.9375rem]">
              <div className="flex gap-4 py-1">
                <dt className="flex min-h-11 w-14 flex-none items-center gap-1.5 text-ink-3">
                  <Mail size={15} aria-hidden="true" /> 이메일
                </dt>
                <dd className="min-w-0">
                  <a href={mailto()} className="inline-flex min-h-11 items-center font-semibold break-all text-key hover:underline">
                    {CONTACT.email}
                  </a>
                </dd>
              </div>
              <div className="flex gap-4 py-1">
                <dt className="flex min-h-11 w-14 flex-none items-center gap-1.5 text-ink-3">
                  <Phone size={15} aria-hidden="true" /> 전화
                </dt>
                <dd>
                  <a href={CONTACT.tel} className="inline-flex min-h-11 items-center font-semibold text-key tabular-nums hover:underline">
                    {CONTACT.phone}
                  </a>
                </dd>
              </div>
              <div className="flex gap-4 py-3">
                <dt className="flex w-14 flex-none items-start gap-1.5 pt-px text-ink-3">
                  <MapPin size={15} className="mt-1 flex-none" aria-hidden="true" /> 주소
                </dt>
                <dd className="text-ink">
                  {CONTACT.addressLines[0]}
                  <br />
                  {CONTACT.addressLines[1]}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </Section>
    </div>
  );
}
