import {
  Activity,
  ArrowRight,
  Battery,
  Check,
  CircleCheck,
  FileCheck,
  HardDrive,
  Layers,
  Lock,
  Mic,
  ScanText,
  Thermometer,
  TriangleAlert,
} from "lucide-react";
import type { ReactNode } from "react";
import type { ScreenState } from "../content";
import { BOOT_STEPS, mailto } from "../content";
import { ButtonLink } from "../components/site/Button";
import DeviceScreen, { DeviceBezel as Bezel } from "../components/site/DeviceScreen";
import { Container, PageHero, Section, SectionIntro } from "../components/site/Layout";
import { cn } from "../components/ui/utils";

const ACCESS_STEP = BOOT_STEPS.find((s) => s.state === "access")!;
/** Other device screens shown under the dashboard — the boot steps plus device pairing. */
const SCREEN_STRIP: { code: string; state: ScreenState; title: string; screenLabel: string }[] = [
  ...BOOT_STEPS.filter((s) => s.state !== "access").map((s) => ({ code: s.code, state: s.state, title: s.title, screenLabel: s.screenLabel })),
  { code: "PAIR", state: "pair", title: "신규 기기 승인", screenLabel: "본체 화면 — 신규 디바이스 페어링(6자리 코드)" },
];

const PARTITIONS = [
  { grade: "C", label: "일반", use: 75, bar: "bg-ink-3" },
  { grade: "D", label: "보호", use: 30, bar: "bg-key" },
  { grade: "E", label: "기밀", use: 10, bar: "bg-navy" },
];

const ACCESS_LOG = [
  { time: "2026-04-16 14:32", action: "파일 업로드", target: "contract_2026.pdf" },
  { time: "2026-04-16 10:15", action: "금고 개방", target: "PUF 인증 성공" },
  { time: "2026-04-15 18:47", action: "데이터 조회", target: "financial_report.xlsx" },
  { time: "2026-04-15 09:23", action: "금고 개방", target: "PUF 인증 성공" },
];

const PORTS = [
  { name: "USB-C 포트", desc: "데이터 전송 및 충전" },
  { name: "네트워크 드라이브", desc: "전용 폐쇄망 접근" },
];

const CAPTURE = [
  {
    icon: ScanText,
    title: "문서 OCR",
    body: "카메라로 촬영한 문서를 PDF로 변환하여 암호화 저장",
    items: ["실시간 OCR 처리", "PDF 자동 변환", "원본은 단말에 남지 않음"],
  },
  {
    icon: Mic,
    title: "음성 녹음",
    body: "회의록·녹취를 STT 변환하여 암호화 저장",
    items: ["클라이언트 단말 기록 즉시 삭제", "STT 자동 변환 및 화자 식별", "로컬 LLM 기반 녹취록 자동 생성"],
  },
];

function Pill({ tone = "neutral", children }: { tone?: "ok" | "neutral" | "key"; children: ReactNode }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold whitespace-nowrap",
        tone === "ok" && "bg-status-ok/10 text-status-ok",
        tone === "key" && "bg-key/10 text-key",
        tone === "neutral" && "border border-line bg-mist text-ink-2",
      )}
    >
      {children}
    </span>
  );
}

function Meter({ label, value, percent, bar = "bg-key", note }: { label: string; value: string; percent: number; bar?: string; note?: string }) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-3 text-sm">
        <span className="text-ink-2">{label}</span>
        <span className="font-mono text-[0.8125rem] font-semibold text-navy">{value}</span>
      </div>
      <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-mist" aria-hidden="true">
        <div className={cn("h-full rounded-full", bar)} style={{ width: `${percent}%` }} />
      </div>
      {note && <p className="mt-1 text-xs text-ink-3">{note}</p>}
    </div>
  );
}

function Widget({
  icon: Icon,
  title,
  desc,
  status,
  className,
  children,
}: {
  icon: typeof Thermometer;
  title: string;
  desc: string;
  status: ReactNode;
  className?: string;
  children: ReactNode;
}) {
  return (
    <li className={cn("flex flex-col rounded-2xl border border-line bg-white p-5 md:p-6", className)}>
      <div className="flex items-start justify-between gap-3">
        <span className="grid h-10 w-10 flex-none place-items-center rounded-xl border border-panel-line bg-panel text-key" aria-hidden="true">
          <Icon size={20} strokeWidth={1.75} />
        </span>
        {status}
      </div>
      <h3 className="mt-4 text-lg font-bold text-navy">{title}</h3>
      <p className="mt-0.5 text-sm text-ink-2">{desc}</p>
      <div className="mt-4 flex-1">{children}</div>
    </li>
  );
}

export default function Dashboard() {
  return (
    <div className="w-full">
      <PageHero eyebrow="Dashboard" title="관리 대시보드" lead="PC·모바일 전용 앱과 본체 화면에서 D-GO의 상태를 실시간으로 확인하고 제어합니다." />

      {/* ── 본체 화면 ── */}
      <Section labelledBy="screen-title">
        <SectionIntro
          id="screen-title"
          eyebrow="Device Screen"
          title="본체 화면에서도 한눈에"
          lead="금고가 열리면 본체 터치스크린에 대시보드가 뜨고, 같은 정보를 PC·모바일 앱에서도 확인합니다."
          align="center"
        />
        <figure className="mx-auto max-w-3xl">
          <Bezel className="rounded-[18px] p-2 md:p-2.5">
            <DeviceScreen state="access" label={`${ACCESS_STEP.screenLabel}: 금고 열림, 암호화 문서 128건, SoC 온도 48.2도, PUF 모듈 정상, 연결 기기 iPhone 14 Pro Max, 최근 접근 로그`} />
          </Bezel>
          <figcaption className="mt-4 text-center text-sm font-semibold text-navy">{ACCESS_STEP.screenLabel}</figcaption>
        </figure>

        <ul className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2 md:gap-6">
          {SCREEN_STRIP.map((s) => (
            <li key={s.code}>
              <figure>
                <Bezel>
                  <DeviceScreen state={s.state} label={s.screenLabel} />
                </Bezel>
                <figcaption className="mt-3 text-center">
                  <span className="block font-mono text-[0.6875rem] font-semibold tracking-[0.14em] text-key">{s.code}</span>
                  <span className="mt-0.5 block text-[0.8125rem] leading-snug text-ink-2">{s.title}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Section>

      {/* ── 주요 기능 ── */}
      <Section tone="mist" labelledBy="widgets-title">
        <SectionIntro id="widgets-title" eyebrow="Features" title="주요 기능" lead="기기 상태부터 보안 알림까지, 대시보드에서 확인하는 항목입니다." />
        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Widget
            icon={Thermometer}
            title="기기 상태"
            desc="내부 온도·습도 실시간 모니터링"
            status={
              <Pill tone="ok">
                <CircleCheck size={13} strokeWidth={2.5} aria-hidden="true" />
                정상
              </Pill>
            }
          >
            <div className="space-y-4">
              <Meter label="온도" value="23°C" percent={45} note="UL CLASS 125 경계선: 52°C" />
              <Meter label="습도" value="42%" percent={42} />
            </div>
          </Widget>

          <Widget icon={HardDrive} title="저장소 용량" desc="SSD 용량 및 RAID 1 상태" status={<Pill tone="ok">RAID 1</Pill>}>
            <div className="space-y-4">
              <Meter label="사용 중" value="256 GB / 512 GB" percent={50} />
              <p className="flex items-center gap-2 rounded-lg bg-mist px-3 py-2 text-sm text-ink-2">
                <Activity size={15} strokeWidth={2} className="flex-none text-status-ok" aria-hidden="true" />
                실시간 미러링 활성
              </p>
            </div>
          </Widget>

          <Widget icon={Battery} title="UPS 상태" desc="배터리 잔량 및 전원 상태" status={<Pill tone="ok">충전 중</Pill>}>
            <div className="space-y-4">
              <Meter label="배터리" value="95%" percent={95} />
              <dl className="space-y-1 rounded-lg bg-mist px-3 py-2 text-sm">
                <div className="flex justify-between gap-3">
                  <dt className="text-ink-2">외부 전원</dt>
                  <dd className="font-semibold text-status-ok">연결됨</dd>
                </div>
                <div className="flex justify-between gap-3">
                  <dt className="text-ink-2">예상 백업 시간</dt>
                  <dd className="font-semibold text-navy">
                    <span className="font-mono text-[0.8125rem]">4.2</span>시간
                  </dd>
                </div>
              </dl>
            </div>
          </Widget>

          <Widget icon={TriangleAlert} title="보안 알림" desc="충격·파괴 시도 감지" status={<Pill tone="ok">0 건</Pill>}>
            <div className="flex h-full flex-col items-center justify-center rounded-xl bg-mist px-4 py-5 text-center">
              <FileCheck size={26} strokeWidth={1.75} className="text-status-ok" aria-hidden="true" />
              <p className="mt-2 font-bold text-status-ok">이상 없음</p>
              <p className="mt-0.5 text-sm text-ink-3">모든 센서 정상 작동 중</p>
            </div>
          </Widget>

          <Widget
            icon={Layers}
            title="파티션 관리"
            desc="보안 등급별 저장 공간 현황"
            status={<Pill tone="key">C/D/E 등급</Pill>}
            className="md:col-span-2 lg:col-span-1"
          >
            <div className="space-y-3.5">
              {PARTITIONS.map((p) => (
                <Meter key={p.grade} label={`${p.grade} ${p.label}`} value={`${p.use}%`} percent={p.use} bar={p.bar} />
              ))}
            </div>
          </Widget>

          <Widget
            icon={Activity}
            title="접근 이력"
            desc="개폐 이력 및 데이터 접근 타임라인"
            status={<Pill>최근 7일</Pill>}
            className="md:col-span-2 lg:col-span-3"
          >
            <ol className="divide-y divide-line rounded-xl border border-line">
              {ACCESS_LOG.map((log) => (
                <li key={log.time} className="flex flex-col gap-1 px-4 py-3 sm:flex-row sm:items-center sm:gap-4">
                  <div className="flex min-w-0 flex-1 items-center gap-2.5">
                    <span className="h-2 w-2 flex-none rounded-full bg-status-ok" aria-hidden="true" />
                    <span className="sr-only">성공: </span>
                    <span className="text-[0.9375rem] font-bold whitespace-nowrap text-ink">{log.action}</span>
                    <span className="min-w-0 truncate text-sm text-ink-2">{log.target}</span>
                  </div>
                  <time dateTime={log.time.replace(" ", "T")} className="pl-[1.125rem] font-mono text-xs text-ink-3 sm:pl-0">
                    {log.time}
                  </time>
                </li>
              ))}
            </ol>
          </Widget>
        </ul>
      </Section>

      {/* ── Secure Port 제어 ── */}
      <Section labelledBy="port-title">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14">
          <SectionIntro
            id="port-title"
            eyebrow="Secure Port"
            title="Secure Port 제어"
            lead="USB-C 포트와 네트워크 드라이브는 평소 잠겨 있고, PUF 승인 후에만 활성화됩니다."
            className="mb-0 md:mb-0"
          />

          <div className="rounded-2xl border border-line bg-white p-5 md:p-6">
            <div className="flex items-center gap-3.5">
              <span className="grid h-11 w-11 flex-none place-items-center rounded-xl border border-panel-line bg-panel text-key" aria-hidden="true">
                <Lock size={22} strokeWidth={1.75} />
              </span>
              <div>
                <h3 className="text-lg font-bold text-navy">USB-C 포트 상태</h3>
                <p className="text-sm text-ink-2">PUF 승인 후에만 포트 활성화</p>
              </div>
            </div>

            <ul className="mt-5 divide-y divide-line rounded-xl border border-line">
              {PORTS.map((port) => (
                <li key={port.name} className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 px-4 py-3.5">
                  <div>
                    <p className="font-bold text-ink">{port.name}</p>
                    <p className="text-sm text-ink-3">{port.desc}</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-mist px-3 py-1 text-sm font-semibold text-navy">
                    <Lock size={14} strokeWidth={2.25} aria-hidden="true" />
                    비활성
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-4 rounded-xl border border-panel-line bg-panel px-4 py-3.5 text-sm leading-relaxed text-ink-2">
              <p className="font-bold text-key">보안 안내</p>
              <p className="mt-1">포트 활성화는 PUF 인증 후 앱에서만 가능합니다.</p>
              <p>무단 접근 시도는 자동으로 차단되며 로그에 기록됩니다.</p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── 캡처 기능 ── */}
      <Section tone="mist" labelledBy="capture-title">
        <SectionIntro id="capture-title" eyebrow="Capture" title="캡처 기능" lead="앱으로 촬영·녹음한 자료는 금고로 옮겨 암호화하고, 단말에는 남기지 않습니다." />
        <ul className="grid gap-4 md:grid-cols-2">
          {CAPTURE.map((c) => (
            <li key={c.title} className="rounded-2xl border border-line bg-white p-5 md:p-6">
              <div className="flex items-start gap-3.5">
                <span className="grid h-11 w-11 flex-none place-items-center rounded-xl border border-panel-line bg-panel text-key" aria-hidden="true">
                  <c.icon size={22} strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-navy">{c.title}</h3>
                  <p className="mt-0.5 text-[0.9375rem] leading-snug text-ink-2">{c.body}</p>
                </div>
              </div>
              <ul className="mt-4 space-y-2 border-t border-line pt-4">
                {c.items.map((it) => (
                  <li key={it} className="flex items-start gap-2.5 text-[0.9375rem] leading-snug text-ink-2">
                    <Check size={16} strokeWidth={2.5} className="mt-0.5 flex-none text-key" aria-hidden="true" />
                    {it}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Section>

      {/* ── CTA ── */}
      <section aria-labelledby="dash-cta-title" className="bg-navy text-white">
        <Container className="grid gap-8 py-14 md:py-20 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <h2 id="dash-cta-title" className="display text-[clamp(1.75rem,3.2vw,2.5rem)]">
              대시보드와 본체 화면,
              <br />
              <span className="text-led">실제 기기로</span> 확인하세요.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-on-navy-2 md:text-lg">
              키 인증부터 금고 열림, 앱 대시보드까지 실제 기기로 보여드립니다. 법인·단체 도입 상담도 함께 받습니다.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <ButtonLink to="/purchase" variant="onNavy">
              도입 문의하기 <ArrowRight size={18} aria-hidden="true" />
            </ButtonLink>
            <ButtonLink href={mailto("D-GO 실기기 시연 요청")} variant="onNavyGhost">
              시연 요청하기
            </ButtonLink>
          </div>
        </Container>
      </section>
    </div>
  );
}
