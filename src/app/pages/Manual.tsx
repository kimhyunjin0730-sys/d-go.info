import { BookOpen, Clock, FileText, Info, Languages, Monitor, Smartphone } from "lucide-react";
import { CONTACT, mailto } from "../content";
import { ButtonLink } from "../components/site/Button";
import AppFeatures from "../components/site/AppFeatures";
import { AirGapDiagram, BootSequence, OnboardingFlows } from "../components/site/Diagrams";
import { Eyebrow, PageHero, Section, SectionIntro } from "../components/site/Layout";

const APP_DOWNLOADS = [
  { icon: Monitor, title: "PC 앱", body: "D-GO 전용 관리 앱", meta: "Windows · macOS · Linux" },
  { icon: Smartphone, title: "모바일 앱", body: "D-GO 전용 관리 앱", meta: "iOS · Android" },
];

const DOC_DOWNLOADS = [
  { icon: FileText, title: "Quick Start 가이드", body: "빠른 시작 안내서", meta: "PDF · 한글" },
  { icon: BookOpen, title: "전체 매뉴얼", body: "상세 사용 설명서", meta: "PDF · 한글" },
  { icon: Languages, title: "English Manual", body: "Full User Manual", meta: "PDF · ENG" },
];

const CONNECT_CHECKS = [
  "본체와 같은 전용 폐쇄망(Private Wi-Fi)에 연결되어 있나요?",
  "PUF 보안키가 본체에 꽂혀 있나요?",
  "본체 전원이 연결되어 있나요?",
  "앱 권한(위치, Wi-Fi)이 모두 허용되어 있나요?",
];

const FAQS = [
  {
    q: "(Android) 앱 설치 시 '출처를 알 수 없는 앱' 오류가 발생합니다",
    a: "Android 기기 설정 > 보안 > 출처를 알 수 없는 앱 설치 허용을 활성화해주세요. 설치 후에는 다시 비활성화하시는 것을 권장합니다.",
  },
  {
    q: "기기 등록이 되지 않아요",
    a: "① 본체와 같은 전용 폐쇄망(Private Wi-Fi)에 연결되어 있는지 ② PUF 보안키가 본체에 꽂혀 있는지 ③ 본체 전원이 연결되어 있는지 ④ 앱 권한(위치, Wi-Fi)이 모두 허용되어 있는지 확인하세요. 기기 등록은 근접 확인과 PUF 검증을 거치므로 본체 가까이에서 진행해 주세요.",
  },
  {
    q: "파일을 업로드했는데 앱에서 보이지 않아요",
    a: "파일 목록 화면에서 아래로 당겨 새로고침 해보세요. 대용량 파일의 경우 암호화 및 전송에 시간이 걸릴 수 있습니다.",
  },
  {
    q: "보안키를 분실했어요",
    a: "보안키를 분실하면 고객센터에 문의해 주세요. 등록된 기기와 인증서 상태에 따라 필요한 확인 절차를 안내드립니다.",
  },
];

type DownloadItem = (typeof APP_DOWNLOADS)[number];

function DownloadCard({ item }: { item: DownloadItem }) {
  const Icon = item.icon;
  return (
    <li className="flex gap-4 rounded-2xl border border-line bg-white p-5 md:flex-col md:p-6">
      <span className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-mist text-key" aria-hidden="true">
        <Icon size={22} strokeWidth={1.75} />
      </span>
      <div className="flex flex-1 flex-col">
        <h3 className="text-lg font-bold text-navy">{item.title}</h3>
        <p className="mt-1 text-[0.9375rem] leading-relaxed text-ink-2">{item.body}</p>
        <p className="mt-1 text-sm font-medium text-ink-3">{item.meta}</p>
        <p className="mt-auto pt-4">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-mist px-3 py-1 text-[0.8125rem] font-semibold text-ink-3">
            <Clock size={14} aria-hidden="true" />
            준비 중
          </span>
        </p>
      </div>
    </li>
  );
}

export default function Manual() {
  return (
    <div className="w-full">
      <PageHero eyebrow="Manual" title="사용 매뉴얼" lead="D-GO Quantum Data Vault를 시작하는 모든 것 — 설치부터 고급 기능까지 단계별 안내" />

      {/* ── 다운로드 ── */}
      <Section labelledBy="download-title">
        <SectionIntro id="download-title" eyebrow="Downloads" title="다운로드" />

        <div role="note" className="mb-8 flex items-start gap-3 rounded-xl bg-mist px-4 py-3.5 md:px-5">
          <Info size={20} className="mt-0.5 flex-none text-key" aria-hidden="true" />
          <p className="text-[0.9375rem] leading-relaxed text-ink-2">
            설치 파일과 PDF 매뉴얼은 정식 배포를 준비하고 있습니다. 먼저 받아보시려면{" "}
            <a href={mailto("D-GO 설치 파일·매뉴얼 요청")} className="font-semibold whitespace-nowrap text-key underline-offset-4 hover:underline">
              {CONTACT.email}
            </a>
            로 요청해 주세요.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-5">
          <div>
            <p id="dl-apps" className="eyebrow mb-3 text-ink-3">
              전용 앱
            </p>
            <ul aria-labelledby="dl-apps" className="grid gap-4 md:grid-cols-2 lg:gap-5">
              {APP_DOWNLOADS.map((item) => (
                <DownloadCard key={item.title} item={item} />
              ))}
            </ul>
          </div>
          <div>
            <p id="dl-docs" className="eyebrow mb-3 text-ink-3">
              매뉴얼 PDF
            </p>
            <ul aria-labelledby="dl-docs" className="grid gap-4 md:grid-cols-3 lg:gap-5">
              {DOC_DOWNLOADS.map((item) => (
                <DownloadCard key={item.title} item={item} />
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ── 처음 도입할 때는 ── */}
      <Section tone="mist" labelledBy="onboard-title">
        <SectionIntro
          id="onboard-title"
          eyebrow="Getting Started"
          title="처음 도입할 때는"
          lead="관리자와 팀원 모두 최초 1회만 진행합니다."
        />
        <OnboardingFlows />
      </Section>

      {/* ── 전원을 켤 때마다 ── */}
      <Section labelledBy="boot-title">
        <SectionIntro
          id="boot-title"
          eyebrow="Every Boot"
          title="전원을 켤 때마다"
          lead="기기 본체의 매 가동 흐름입니다. 모든 단계가 외부와 연결 없이 끝납니다."
        />
        <BootSequence />
      </Section>

      {/* ── 연결 방법 ── */}
      <Section tone="mist" labelledBy="connect-title">
        <div className="rounded-2xl border border-line bg-white p-5 md:p-8">
          <h2 id="connect-title" className="text-xl font-bold text-ink md:text-2xl">
            연결 방법 — 전용 폐쇄망 <span className="text-ink-3">(Private Wi-Fi)</span>
          </h2>
          <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-10">
            <AirGapDiagram />
            <div className="rounded-xl bg-mist p-5">
              <h3 id="connect-check" className="font-bold text-navy">
                연결 전 확인하세요
              </h3>
              <ol aria-labelledby="connect-check" className="mt-3 space-y-2.5">
                {CONNECT_CHECKS.map((c, i) => (
                  <li key={c} className="flex items-start gap-3 text-[0.9375rem] leading-relaxed text-ink">
                    <span
                      className="mt-0.5 grid h-6 w-6 flex-none place-items-center rounded-full bg-key text-xs font-bold text-white tabular-nums"
                      aria-hidden="true"
                    >
                      {i + 1}
                    </span>
                    <span>{c}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </Section>

      <AppFeatures />

      {/* ── FAQ ── */}
      <Section tone="mist" labelledBy="faq-title">
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
        <div className="mt-10 flex flex-col items-start gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-base font-semibold text-navy">더 궁금한 사항이 있으신가요?</p>
          <ButtonLink href={mailto()}>고객센터 문의하기</ButtonLink>
        </div>
      </Section>
    </div>
  );
}
