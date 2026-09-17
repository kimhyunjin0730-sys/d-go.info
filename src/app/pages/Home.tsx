import { Archive, ArrowRight, Cpu, FileSearch, GlobeLock, Layers, Lock } from "lucide-react";
import { Link } from "react-router";
import {
  AUDIENCES,
  CONTACT,
  EASY_ADOPTION,
  HARDWARE_CHIPS,
  PROMISES,
  PROOF_POINTS,
  SALES_PARTNERS,
  mailto,
} from "../content";
import { ButtonLink } from "../components/site/Button";
import { AirGapDiagram, BootSequence, OnboardingFlows, TierTable } from "../components/site/Diagrams";
import { BandHeader, Chip, Container, Eyebrow, Section, SectionIntro } from "../components/site/Layout";
import ProductStage from "../components/site/ProductStage";

const FEATURES = [
  { icon: Cpu, title: "반도체 지문키", tag: "PUF", body: "칩마다 다른 고유 지문으로 잠금 해제가 복제 불가. 탈취 시 자동 소멸." },
  { icon: GlobeLock, title: "외부 인터넷 망 원천 차단", tag: "Air-Gap · Zero-Outbound", body: "인터넷으로 나가는 통신 경로 자체가 없는 구조." },
  { icon: Layers, title: "3단계 접근등급", tag: "다계층 접근제어", body: "일반 C · 보호 D · 기밀 E — 문서를 등급별로 분리 보관." },
  { icon: FileSearch, title: "내장 AI 문서비서", tag: "폐쇄망 Local RAG LLM", body: "인터넷 없이, 기기 안에서 문서를 찾고 요약." },
  { icon: Lock, title: "이중 삼중 로컬데이터 암호화", tag: "E2EE 종단간 암호화", body: "단말에서 직접 암호화해 저장 — 서버 관리자도 내용을 열람할 수 없습니다." },
  { icon: Archive, title: "실물 보관 금고 내장", tag: "물리 보안 금고", body: "A4 계약서 · 인감 도장까지 실물로 수납." },
];

const FAQS = [
  { q: "인터넷 없이도 AI를 쓸 수 있나요?", a: "네. Local RAG & LLM이 본체 내부에서 동작해, 외부 유출 없이 금고 속 문서를 AI로 검색·요약합니다." },
  { q: "도난·분해되면 어떻게 되나요?", a: "PUF 보안키가 즉시 자동 소멸합니다. 물리적으로 탈취되어도 복호화할 수 없습니다." },
  { q: "설치가 어렵지 않나요?", a: "개봉 후 5분이면 설치가 끝납니다. D-GO 전용 카카오톡 채널에서 24시간 지원합니다." },
  { q: "누가 사용하면 좋을까요?", a: "변호사·회계사 등 전문직, 연구소·제조사, 의료·공공기관처럼 외부로 내보낼 수 없는 문서를 다루는 곳에 맞춰 설계했습니다." },
];

export default function Home() {
  return (
    <div className="w-full">
      {/* ── Hero ── */}
      <section aria-labelledby="hero-title" className="overflow-hidden bg-white">
        <Container className="pt-10 pb-14 md:pt-16 md:pb-20">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Eyebrow>Zero-Outbound&nbsp;&nbsp;•&nbsp;&nbsp;Air-Gap</Eyebrow>
            <span className="hidden rounded-full bg-navy px-4 py-1.5 text-sm font-semibold text-white sm:inline-flex">독립형 데이터 안전금고</span>
          </div>

          <h1 id="hero-title" className="display mt-5 text-[clamp(2.125rem,4.4vw,3.75rem)] text-navy">
            <span className="block">인터넷과 분리된</span>
            <span className="block">독립형 데이터 안전금고.</span>
          </h1>

          <div className="mt-10 grid items-start gap-12 lg:mt-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14">
            <div className="lg:pt-6">
              <p className="text-lg leading-relaxed font-bold text-key md:text-xl">
                문서와 AI가 외부와 연결되지 않는 금고 안에서만 움직입니다. 유출 경로 원천 차단!
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink-2">
                문서 보관도, AI 검색·요약도 이 한 대 안에서 끝납니다. 가정·사무실의 전용 폐쇄망(Private Wi-Fi) 안에서만 동작하고, PUF 보안키가
                없으면 켜지지도 않습니다.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <ButtonLink to="/purchase">
                  도입 문의하기 <ArrowRight size={18} aria-hidden="true" />
                </ButtonLink>
                <ButtonLink href={mailto("D-GO 실기기 시연 요청")} variant="secondary">
                  실기기 시연 요청
                </ButtonLink>
              </div>
              <ul className="mt-7 flex flex-wrap gap-2" aria-label="하드웨어 사양">
                {HARDWARE_CHIPS.map((c) => (
                  <li key={c}>
                    <Chip>{c}</Chip>
                  </li>
                ))}
              </ul>
            </div>

            <ProductStage />
          </div>

          <dl className="mt-14 grid gap-8 border-t border-line pt-10 sm:grid-cols-3 sm:gap-6 md:mt-16">
            {PROOF_POINTS.map((p) => (
              <div key={p.title} className="flex gap-5 sm:block">
                <dt className="w-[6.75rem] flex-none sm:mb-3 sm:w-auto">
                  <span className="mb-4 hidden h-[3px] w-10 bg-navy sm:block" aria-hidden="true" />
                  <span className="display block text-[2.5rem] leading-none text-navy sm:text-[2.75rem] md:text-[3rem]">
                    {p.figure}
                    {p.unit && <span className="ml-0.5 text-[0.55em]">{p.unit}</span>}
                  </span>
                </dt>
                <dd>
                  <p className="text-lg font-bold text-ink">{p.title}</p>
                  <p className="mt-1 text-[0.9375rem] leading-relaxed text-ink-2">{p.body}</p>
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* ── 유출 경로 원천 차단 ── */}
      <section aria-labelledby="block-title">
        <BandHeader
          id="block-title"
          title="유출 경로 원천 차단."
          aside="인터넷과 완전히 분리된 사내 설치형 AI 보안 금고 — Quantum Data Vault D-GO"
        />
        <Container className="py-14 md:py-20">
          <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <li key={f.title} className="flex gap-4 rounded-2xl border border-panel-line bg-panel p-5 md:p-6">
                <f.icon size={30} strokeWidth={1.6} className="mt-0.5 flex-none text-key" aria-hidden="true" />
                <div>
                  <h3 className="text-lg font-bold text-key">{f.title}</h3>
                  <p className="mt-1.5 inline-flex rounded-full border border-ink/25 bg-white px-2.5 py-0.5 text-xs font-medium text-ink-2">{f.tag}</p>
                  <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-2">{f.body}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center">
            <span className="block text-lg font-bold text-navy">PUF 키가 없으면 켜지지도 않습니다</span>
            <span className="mt-1 block text-sm text-ink-3">AES-256 암호화 · RSA-2048 · 상호 인증 통신 mTLS</span>
          </p>
          <p className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-[0.9375rem] font-semibold">
            <Link to="/product" className="inline-flex min-h-11 items-center gap-1.5 text-key hover:underline">
              제품 상세 보기 <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <Link to="/technology" className="inline-flex min-h-11 items-center gap-1.5 text-key hover:underline">
              기술 아키텍처 <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </p>

          <div className="mt-14 grid gap-8 border-t border-line pt-12 md:grid-cols-3 md:gap-8">
            {PROMISES.map((p) => (
              <div key={p.label} className="border-t-[3px] border-key pt-5">
                <Eyebrow>{p.label}</Eyebrow>
                <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-navy">{p.title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-2">{p.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 전원을 켤 때마다 ── */}
      <section aria-labelledby="boot-title">
        <BandHeader
          id="boot-title"
          title="전원을 켤 때마다 —"
          accent="인터넷 없는 로컬 AI 가동"
          aside="기기 본체의 매 가동 흐름입니다. 모든 단계가 외부와 연결 없이 끝납니다."
        />
        <Container className="py-14 md:py-20">
          <BootSequence />
        </Container>
      </section>

      {/* ── 연결 방법 + 3단 보안 등급 ── */}
      <Section tone="mist" labelledBy="connect-title">
        <div className="grid gap-5 xl:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
          <div className="rounded-2xl border border-line bg-white p-6 md:p-8">
            <h2 id="connect-title" className="text-xl font-bold text-ink md:text-2xl">
              연결 방법 — 전용 폐쇄망 <span className="text-ink-3">(Private Wi-Fi)</span>
            </h2>
            <AirGapDiagram className="mt-6" />
          </div>
          <div className="rounded-2xl border border-line bg-white p-6 md:p-8">
            <h2 className="text-xl font-bold text-key md:text-2xl">3단 보안 등급</h2>
            <p className="mt-1 text-sm text-ink-2">중요한 문서일수록 여는 방법이 엄격해집니다.</p>
            <TierTable className="mt-4" />
          </div>
        </div>
      </Section>

      {/* ── 처음 도입할 때는 ── */}
      <Section labelledBy="onboard-title">
        <SectionIntro id="onboard-title" eyebrow="Onboarding" title="처음 도입할 때는" lead="아래 두 흐름은 최초 1회뿐입니다. 이후에는 키를 꽂고 켜기만 하면 됩니다." />
        <div className="rounded-2xl bg-mist p-4 md:p-6">
          <OnboardingFlows />
        </div>
        <div className="mt-5 grid overflow-hidden rounded-2xl border border-line lg:grid-cols-[200px_repeat(3,1fr)]">
          <p className="flex items-center bg-navy px-6 py-4 text-lg font-bold text-white lg:justify-center">도입도 간단</p>
          {EASY_ADOPTION.map((e) => (
            <div key={e.title} className="border-t border-line px-6 py-4 lg:border-t-0 lg:border-l">
              <p className="font-bold text-navy">{e.title}</p>
              <p className="mt-0.5 text-sm text-ink-2">{e.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── 이런 분들께 ── */}
      <Section tone="mist" labelledBy="audience-title">
        <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
          <h2 id="audience-title" className="display text-[clamp(1.625rem,2.8vw,2.25rem)] text-navy">
            이런 분들께
          </h2>
          <ul className="grid gap-6 md:grid-cols-3">
            {AUDIENCES.map((a) => (
              <li key={a.title} className="border-l-[3px] border-key pl-5">
                <h3 className="text-xl font-bold text-key">{a.title}</h3>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-2">{a.body}</p>
              </li>
            ))}
          </ul>
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
          </div>
          <dl className="grid gap-x-10 md:grid-cols-2">
            {FAQS.map((f) => (
              <div key={f.q} className="border-t border-line py-5">
                <dt className="text-lg font-bold text-ink">{f.q}</dt>
                <dd className="mt-2 text-[0.9375rem] leading-relaxed text-ink-2">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="mt-10 flex flex-col gap-3 border-t border-line pt-8 md:flex-row md:items-baseline md:gap-6">
          <p className="eyebrow flex-none text-ink-3">Sales Partners</p>
          <p className="flex flex-wrap gap-x-5 gap-y-1 text-[0.9375rem] font-medium text-ink-2">
            {SALES_PARTNERS.map((p) => (
              <span key={p}>{p}</span>
            ))}
          </p>
        </div>
      </Section>

      {/* ── CTA ── */}
      <section aria-labelledby="cta-title" className="bg-navy text-white">
        <Container className="grid gap-8 py-14 md:py-20 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <h2 id="cta-title" className="display text-[clamp(1.75rem,3.2vw,2.5rem)]">
              “밖으로 내보내지 않는 AI”,
              <br />
              <span className="text-led">실제 기기로</span> 확인하세요.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-on-navy-2 md:text-lg">
              키 인증부터 문서 검색·요약까지, 실제 기기로 보여드립니다. 법인·단체 도입 상담도 함께 받습니다.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink href={mailto("D-GO 실기기 시연 요청")} variant="onNavy">
              시연 요청하기 <ArrowRight size={18} aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href={CONTACT.tel} variant="onNavyGhost">
              {CONTACT.phone}
            </ButtonLink>
          </div>
        </Container>
      </section>
    </div>
  );
}
