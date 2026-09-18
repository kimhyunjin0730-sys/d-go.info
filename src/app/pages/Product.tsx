import {
  Archive,
  ArrowRight,
  BatteryCharging,
  Brain,
  Check,
  ChevronRight,
  Cpu,
  Factory,
  Fingerprint,
  FlaskConical,
  GlobeLock,
  HardDrive,
  Home,
  KeyRound,
  Landmark,
  Layers,
  Lock,
  Scale,
  Scan,
  ScrollText,
  ShieldCheck,
  Thermometer,
  Trash2,
  Usb,
  Wifi,
} from "lucide-react";
import { HARDWARE_CHIPS, mailto } from "../content";
import { ButtonLink } from "../components/site/Button";
import { BootSequence, TierTable } from "../components/site/Diagrams";
import { BandHeader, Chip, Container, Eyebrow, PageHero, Section, SectionIntro } from "../components/site/Layout";
import { ProductImage } from "../components/site/ProductStage";
import { cn } from "../components/ui/utils";

/** 사양 스트립 — 8항목 (value: 줄바꿈 가능한 덩어리 단위) */
const SPECS = [
  { icon: HardDrive, label: "Storage", value: ["외부 격리", "NVMe SSD"] },
  { icon: Lock, label: "Encryption", value: ["AES-256 +", "RSA-2048"] },
  { icon: Cpu, label: "Auth", value: ["ICTK PUF 칩"] },
  { icon: Brain, label: "Local AI", value: ["NPU 6 TOPS"] },
  { icon: GlobeLock, label: "Network", value: ["Air-Gap ·", "Zero-Outbound"] },
  { icon: Wifi, label: "Link", value: ["전용 폐쇄망 ·", "mTLS"] },
  { icon: BatteryCharging, label: "UPS", value: ["무정전 전원 공급"] },
  { icon: Thermometer, label: "Thermal", value: ["UL CLASS 125"] },
];

/** 주요 기능 */
const FEATURES = [
  {
    icon: Archive,
    tag: "HYBRID VAULT",
    title: "물리적·디지털 하이브리드 금고",
    body: "인감, OTP, 통장 등 실물 자산과 디지털 기밀 데이터를 함께 보관하는 올인원 보안 금고",
  },
  {
    icon: Lock,
    tag: "AES-256 + RSA-2048",
    title: "이중 암호화",
    body: "AES-256 + RSA-2048 이중 암호화로 도난·분실 시에도 데이터 유출 원천 차단",
  },
  { icon: Cpu, tag: "PUF", title: "PUF 인증", body: "반도체 지문 기반 인증으로 복제 불가능한 보안 시스템 구현" },
  {
    icon: Usb,
    tag: "SECURE PORT",
    title: "물리적 포트 통제",
    body: "PUF 승인 시에만 USB-C 및 네트워크 드라이브가 물리적으로 활성화",
  },
  { icon: Scan, tag: "MEDIA SECURITY", title: "보안 미디어 생성", body: "촬영 즉시 OCR PDF 변환 및 모바일 데이터 즉시 파기" },
];

/** 4대 핵심 기능 */
const CAPABILITIES = [
  {
    icon: KeyRound,
    title: "인증 & 접근 관리",
    points: [
      "PUF USB 하드웨어 인증 — 서버 기동 물리 열쇠 역할",
      "관리자 QR 코드 발급 + SSID/RSSI 근접 검증으로 신규 기기 등록",
      "본체 화면에 표시되는 6자리 코드로 신규 기기 승인",
      "mTLS 기반 인증서 발급, 비인가 기기 원천 차단",
      "데스크톱 접근 시 등록 모바일로 생체 인증 요청 전송",
    ],
  },
  {
    icon: Brain,
    title: "Local AI — 오프라인 파일 지능화",
    points: [
      "Local RAG & LLM — 서버 내 AI가 내 파일 내용 학습·답변·요약",
      "폐쇄망 Local AI · NPU 6 TOPS 내장",
      "완전 폐쇄망 동작 — 데이터 외부 유출 제로",
      "“Local Notebook LM” 방식으로 문서 기반 Q&A 지원",
    ],
  },
  {
    icon: ShieldCheck,
    title: "E2EE 암호 볼트",
    points: [
      "패스워드·연락처 등 민감 정보를 단말기에서 직접 암호화",
      "서버 관리자조차 내용 열람 불가 (End-to-End Encryption)",
      "AES-256 + RSA-2048 이중 암호화 적용",
    ],
  },
  {
    icon: ScrollText,
    title: "무결성 감사 & 모니터링",
    points: [
      "접속 시각·읽기/쓰기/삭제 이력 수정 불가 시계열 DB 기록",
      "이상 접근 실시간 알림 — 탈취 시 키 자동 즉시 소멸",
      "온도·디스크·메모리·업타임 실시간 모니터링",
      "기기 간 파일 즉시 동기화 — 업무 연속성 보장",
    ],
  },
];

/** 시스템 구성 */
const SYSTEM = [
  {
    icon: Cpu,
    eyebrow: "Hardware",
    title: "하드웨어 · 공급 본체",
    items: [
      { label: "임베디드 서버", desc: "리눅스 기반 임베디드 OS · 내부 서버 + 컨트롤 보드 일체형 구조" },
      { label: "로컬 AI 연산", desc: "NPU 6 TOPS · 폐쇄망 Local RAG LLM" },
      { label: "8인치 터치스크린", desc: "본체 전면 터치 키패드 및 문서 관리 UI 시스템 탑재" },
      { label: "개폐 제어 시스템", desc: "전자식 버튼 + PUF 인증 기반 모터 드라이버 금고 개폐 제어" },
      { label: "디지털 자산 저장", desc: "PUF 기반 고유 키 생성 · RAID 1 이중화 · SSD 이중화 저장 구조" },
      { label: "환경 센싱", desc: "온도·습도 모니터링 · 125°F 초과 시 자동 셧다운 기능" },
    ],
  },
  {
    icon: Layers,
    eyebrow: "Software",
    title: "소프트웨어",
    items: [
      { label: "데이터 금고 관리", desc: "입력·출력·현황 조회 (파일은 Vault에만 존재)" },
      { label: "시점인증 연결", desc: "SHA-256 해시 + TSA 타임스탬프 자동 발급 · 법적 효력 확보" },
      { label: "보안 검사", desc: "유입 파일 악성코드 실시간 스캔 · 무결성 검증" },
      { label: "모바일 백업 지원", desc: "모바일 기기의 크롬 기록, 연락처, 중요 파일 자동 백업 보호" },
      { label: "자격 증명 보관", desc: "웹사이트 ID 및 패스워드를 위한 안전한 보관소 기능 탑재" },
    ],
  },
];

/** 상세 사양 */
const DETAILED_SPECS = [
  { label: "타겟 하드웨어", value: "리눅스 기반 고성능 AI SBC 탑재" },
  { label: "로컬 AI", value: "폐쇄망 Local RAG LLM · NPU\u00a06\u00a0TOPS" },
  { label: "물리적 수납 규격", value: "320mm × 230mm × 40mm (A4 서류 수납 최적화)" },
  { label: "물리적 보관함", value: "인감도장 · 계약서 · 통장 · 등기권리증 · OTP · 보안카드" },
  { label: "스토리지", value: "외부 격리 NVMe SSD · 계층형 보안 파티션 (C/D/E)" },
  { label: "암호화", value: "AES-256 + RSA-2048 이중 암호화" },
  { label: "네트워크", value: "Air-Gap · Zero-Outbound · 화이트리스트 업데이트" },
  { label: "통신", value: "전용 폐쇄망(Private Wi-Fi) · 상호 인증 mTLS" },
  { label: "지원 플랫폼", value: "Windows · macOS · Linux (PC 앱) · iOS · Android (모바일 앱)" },
  { label: "웹브라우저", value: "보안 취약성 방지를 위해 원천 차단" },
  { label: "모니터링", value: "온도 · 디스크 · 메모리 · 업타임 실시간 대시보드" },
];

/** 타겟 고객 */
const TARGETS = [
  { icon: Scale, title: "전문직 종사자", desc: "변호사·회계사·세무사 — 비밀 유지 의무가 있는 계약서를 AI로 다루고 싶은 분" },
  { icon: FlaskConical, title: "연구소 · 제조", desc: "도면·미공개 기술자료를 유출 없이 축적하려는 곳" },
  { icon: Home, title: "스마트홈 사용자", desc: "클라우드 월정액 대체·개인정보 완전 자가 통제" },
  { icon: Landmark, title: "의료·공공기관", desc: "개인정보가 포함된 문서를 규제 안에서 활용 · 감사 로그 완비" },
];

/** PUF 물리 인증 — 사이트 공통 카피(BOOT_STEPS · PROOF_POINTS · FAQ)에서 발췌 */
const PUF_POINTS = ["키가 없으면 전원조차 켜지지 않습니다", "키를 뽑는 순간 전체 잠금", "탈취·분해 시 보안키 자동 소멸"];

/*
 * ICTK.png is a white-on-transparent asset. On light surfaces render it as a
 * neutral monochrome mark (no hue shift) so it stays visible.
 */
const MONO_LOGO = { filter: "brightness(0)" };

function IconTile({ icon: Icon, className }: { icon: typeof Lock; className?: string }) {
  return (
    <span className={cn("grid h-12 w-12 flex-none place-items-center rounded-xl bg-panel text-key", className)} aria-hidden="true">
      <Icon size={24} strokeWidth={1.75} />
    </span>
  );
}

function FlowConnector({ icon: Icon = ChevronRight }: { icon?: typeof Lock }) {
  return (
    <span
      className="absolute top-full left-1/2 flex h-10 -translate-x-1/2 items-center justify-center lg:top-1/2 lg:left-full lg:h-auto lg:w-12 lg:translate-x-0 lg:-translate-y-1/2"
      aria-hidden="true"
    >
      <span className="grid h-9 w-9 place-items-center rounded-full bg-navy text-white">
        <Icon size={Icon === ChevronRight ? 20 : 17} strokeWidth={2.25} className={Icon === ChevronRight ? "rotate-90 lg:rotate-0" : undefined} />
      </span>
    </span>
  );
}

export default function Product() {
  return (
    <div className="w-full">
      <PageHero
        eyebrow="Product"
        title="D-GO"
        accent="Quantum Data Vault"
        lead="인터넷에 연결되지 않는 ‘독립형 데이터 안전금고’입니다. 문서 보관도, AI 검색·요약도, 이 한 대 안에서 모두 끝납니다."
      />

      {/* ── 제품 개요 ── */}
      <Section labelledBy="overview-title">
        <h2 id="overview-title" className="sr-only">
          제품 개요
        </h2>
        <div className="mx-auto max-w-[1040px]">
          <ProductImage priority />
        </div>

        <div className="mt-10 grid gap-8 border-t border-line pt-10 md:mt-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] lg:gap-14">
          <div>
            <p className="text-lg leading-relaxed font-bold text-key md:text-xl">
              외부 클라우드에 의존하지 않고 가정·사무실의 폐쇄망(Private Wi-Fi) 내에서만 동작하는 초강력 보안 파일·모니터링 서버.
            </p>
            <p className="mt-3 text-base leading-relaxed text-ink-2 md:text-lg">
              물리적 하드웨어 인증과 계층형 보안 파티션을 결합한 차세대 개인형 물리적·디지털 데이터 금고입니다.
            </p>
          </div>

          <div>
            <ul className="flex flex-wrap gap-2" aria-label="하드웨어 사양">
              {HARDWARE_CHIPS.map((c) => (
                <li key={c}>
                  <Chip>{c}</Chip>
                </li>
              ))}
            </ul>
            <ul className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-line pt-6" aria-label="인증 및 제조">
              <li>
                <img src="/logo/ICTK.png" alt="ICTK PUF" width={368} height={117} className="h-6 w-auto opacity-80" style={MONO_LOGO} />
              </li>
              <li>
                <img src="/logo/KC인증.svg" alt="KC 인증" width={198} height={306} className="h-7 w-auto" />
              </li>
              <li className="rounded-md border border-line px-2.5 py-1 font-mono text-xs font-semibold tracking-[0.12em] text-ink-2">
                UL CLASS 125
              </li>
              <li className="rounded-md border border-line px-2.5 py-1 font-mono text-xs font-semibold tracking-[0.12em] text-ink-2">
                MADE IN KOREA
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* ── 사양 스트립 ── */}
      <Section tone="mist" labelledBy="specs-title" className="py-10 md:py-12">
        <h2 id="specs-title" className="sr-only">
          핵심 사양
        </h2>
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line lg:grid-cols-4">
          {SPECS.map((s) => (
            <div key={s.label} className="flex flex-col gap-2 bg-white p-4 md:p-5">
              <dt className="flex items-center gap-2 text-ink-3">
                <s.icon size={18} strokeWidth={1.75} className="flex-none text-key" aria-hidden="true" />
                <span className="eyebrow text-[0.75rem] md:text-[0.75rem]">{s.label}</span>
              </dt>
              <dd className="text-[0.9375rem] leading-snug font-bold text-navy md:text-base">
                {s.value.map((chunk, i) => (
                  <span key={chunk} className="whitespace-nowrap">
                    {i > 0 && " "}
                    {chunk}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* ── 주요 기능 ── */}
      <Section labelledBy="features-title">
        <SectionIntro id="features-title" eyebrow="Key Features" title="주요 기능" />
        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-6">
          {FEATURES.map((f, i) => (
            <li
              key={f.tag}
              className={cn(
                "flex gap-4 rounded-2xl border border-panel-line bg-panel p-5 md:p-6",
                i === 0 && "md:col-span-2",
                i < 2 ? "lg:col-span-3" : "lg:col-span-2",
              )}
            >
              <f.icon size={30} strokeWidth={1.6} className="mt-0.5 flex-none text-key" aria-hidden="true" />
              <div>
                <h3 className="text-lg font-bold text-key">{f.title}</h3>
                <p className="mt-1.5 inline-flex rounded-full border border-ink/25 bg-white px-2.5 py-0.5 text-xs font-medium text-ink-2">{f.tag}</p>
                <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-ink-2">{f.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {/* ── 4대 핵심 기능 ── */}
      <Section tone="mist" labelledBy="capabilities-title">
        <SectionIntro id="capabilities-title" eyebrow="Core Capabilities" title="4대 핵심 기능" />
        <ul className="grid gap-4 md:grid-cols-2 md:gap-5">
          {CAPABILITIES.map((c, i) => (
            <li key={c.title} className="rounded-2xl border border-line bg-white p-5 md:p-7">
              <div className="flex items-center gap-4">
                <IconTile icon={c.icon} />
                <div className="min-w-0">
                  <p className="font-mono text-xs font-semibold tracking-[0.14em] text-ink-3" aria-hidden="true">
                    0{i + 1}
                  </p>
                  <h3 className="text-lg font-bold text-navy md:text-xl">{c.title}</h3>
                </div>
              </div>
              <ul className="mt-5 space-y-2.5 border-t border-line pt-5">
                {c.points.map((p) => (
                  <li key={p} className="flex gap-3 text-[0.9375rem] leading-relaxed text-ink-2">
                    <span className="mt-[0.65em] h-1.5 w-1.5 flex-none rounded-full bg-key" aria-hidden="true" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Section>

      {/* ── 시스템 구성 ── */}
      <Section labelledBy="system-title">
        <SectionIntro id="system-title" eyebrow="System" title="시스템 구성" />
        <div className="grid gap-4 md:grid-cols-2 md:gap-5">
          {SYSTEM.map((g) => (
            <div key={g.title} className="rounded-2xl border border-line bg-white p-5 md:p-7">
              <div className="flex items-center gap-4">
                <IconTile icon={g.icon} />
                <div>
                  <Eyebrow>{g.eyebrow}</Eyebrow>
                  <h3 className="text-lg font-bold text-navy md:text-xl">{g.title}</h3>
                </div>
              </div>
              <dl className="mt-5 divide-y divide-line border-t border-line">
                {g.items.map((item) => (
                  <div key={item.label} className="grid gap-1 py-3.5 sm:grid-cols-[9rem_1fr] sm:gap-4 md:grid-cols-1 md:gap-1 lg:grid-cols-[9rem_1fr] lg:gap-4">
                    <dt className="text-[0.9375rem] font-bold text-navy">{item.label}</dt>
                    <dd className="text-[0.9375rem] leading-relaxed text-ink-2">{item.desc}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </Section>

      {/* ── 데이터 보안 라이프사이클 ── */}
      <Section tone="mist" labelledBy="lifecycle-title">
        <SectionIntro
          id="lifecycle-title"
          eyebrow="Data Lifecycle"
          title="데이터 보안 라이프사이클"
          lead="생성부터 저장, 폐기까지 완벽하게 통제되는 데이터 흐름"
        />
        <ol className="mx-auto grid max-w-xl gap-10 lg:max-w-none lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-12">
          {/* 1 — 모바일 입력 */}
          <li className="relative">
            <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-5 md:p-6">
              <div className="flex items-center gap-3">
                <span className="grid h-8 w-8 flex-none place-items-center rounded-full bg-key text-sm font-bold text-white" aria-hidden="true">
                  1
                </span>
                <span className="font-mono text-xs font-semibold tracking-[0.14em] text-key">INPUT</span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-navy">
                <span className="sr-only">1단계. </span>모바일 입력
              </h3>
              <div className="mt-4 flex gap-3 rounded-xl border border-line p-4">
                <Scan size={20} strokeWidth={1.75} className="mt-0.5 flex-none text-key" aria-hidden="true" />
                <div>
                  <p className="font-bold text-ink">보안 캡처</p>
                  <p className="mt-0.5 text-sm leading-relaxed text-ink-2">문서 촬영(OCR) &amp; 음성 녹취(STT)</p>
                </div>
              </div>
              <p className="mt-3 flex items-center gap-2 rounded-xl bg-mist px-4 py-3 text-sm font-semibold text-navy lg:mt-auto">
                <Trash2 size={16} strokeWidth={2} className="flex-none text-key" aria-hidden="true" />
                서버 전송 후 원본 즉시 파기
              </p>
            </div>
            <FlowConnector icon={Wifi} />
          </li>

          {/* 2 — 금고 암호화 분배 */}
          <li className="relative">
            <div className="flex h-full flex-col rounded-2xl border border-panel-line bg-panel p-5 md:p-6">
              <div className="flex items-center gap-3">
                <span className="grid h-8 w-8 flex-none place-items-center rounded-full bg-key text-sm font-bold text-white" aria-hidden="true">
                  2
                </span>
                <span className="font-mono text-xs font-semibold tracking-[0.14em] text-key">VAULT</span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-navy">
                <span className="sr-only">2단계. </span>금고 암호화 분배
              </h3>
              <div className="mt-4 flex items-center gap-3 rounded-xl border border-panel-line bg-white p-4">
                <Cpu size={20} strokeWidth={1.75} className="flex-none text-key" aria-hidden="true" />
                <p className="font-bold text-ink">PUF 키 생성 및 AES 인증</p>
              </div>
              <div className="mt-3 lg:mt-auto">
                <p className="pt-2 text-sm font-semibold text-ink-2">파티션 자동 분류 (C/D/E)</p>
                <ul className="mt-2 grid grid-cols-3 gap-1.5" aria-label="보안 파티션">
                  <li className="rounded-lg bg-white px-2 py-2 text-center text-sm font-bold text-ink">
                    <span className="font-mono text-key">C</span> 일반
                  </li>
                  <li className="rounded-lg border border-panel-line bg-mist px-2 py-2 text-center text-sm font-bold text-ink">
                    <span className="font-mono text-key">D</span> 보호
                  </li>
                  <li className="rounded-lg bg-key px-2 py-2 text-center text-sm font-bold text-white">
                    <span className="font-mono">E</span> 기밀
                  </li>
                </ul>
              </div>
            </div>
            <FlowConnector />
          </li>

          {/* 3 — 출력 제어 */}
          <li>
            <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-5 md:p-6">
              <div className="flex items-center gap-3">
                <span className="grid h-8 w-8 flex-none place-items-center rounded-full bg-key text-sm font-bold text-white" aria-hidden="true">
                  3
                </span>
                <span className="font-mono text-xs font-semibold tracking-[0.14em] text-key">OUTPUT</span>
              </div>
              <h3 className="mt-4 text-xl font-bold text-navy">
                <span className="sr-only">3단계. </span>출력 제어
              </h3>
              <div className="mt-4 rounded-xl border border-line p-4">
                <p className="flex items-center justify-between gap-3 font-bold text-ink">
                  Secure Port
                  <Usb size={20} strokeWidth={1.75} className="flex-none text-key" aria-hidden="true" />
                </p>
                <ul className="mt-2 space-y-1 text-sm leading-relaxed text-ink-2">
                  <li className="flex gap-2">
                    <span className="mt-[0.6em] h-1 w-1 flex-none rounded-full bg-key" aria-hidden="true" />
                    PUF 인증 후에만 활성화
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-[0.6em] h-1 w-1 flex-none rounded-full bg-key" aria-hidden="true" />
                    네트워크 및 물리 포트 통제
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ol>
      </Section>

      {/* ── PUF + 3단 보안 등급 ── */}
      <Section labelledBy="tier-title">
        <SectionIntro
          id="tier-title"
          eyebrow="PUF · 3-Tier Access"
          title="PUF + 3단 보안 등급"
          lead="PUF · 2FA · 생체인증을 단계별로 결합 — 민감도별 접근 분리"
        />
        <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12">
          <div className="relative">
            <div className="flex h-full flex-col justify-between gap-8 rounded-2xl bg-navy p-6 text-white md:p-8">
              <div className="flex items-center justify-between gap-4">
                <p className="eyebrow text-led">Step 1 · 서버 기동</p>
                <Fingerprint size={40} strokeWidth={1.5} className="flex-none text-led" aria-hidden="true" />
              </div>
              <div>
                <p className="font-mono text-sm font-semibold tracking-[0.14em] text-on-navy-2">PUF</p>
                <h3 className="mt-1 text-2xl font-bold md:text-[1.75rem]">물리 인증 (PUF USB)</h3>
                <p className="mt-2 text-base leading-relaxed text-on-navy-2">복제 불가능 하드웨어 인증으로 서버 기동 제어</p>
              </div>
              <ul className="space-y-2.5 border-t border-white/15 pt-5 text-[0.9375rem] leading-relaxed text-white">
                {PUF_POINTS.map((p) => (
                  <li key={p} className="flex gap-2.5">
                    <Check size={18} strokeWidth={2.5} className="mt-0.5 flex-none text-led" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
            <FlowConnector />
          </div>

          <div className="rounded-2xl border border-line bg-white p-5 md:p-8">
            <Eyebrow>Step 2 · 문서 접근</Eyebrow>
            <h3 className="mt-2 text-2xl font-bold text-navy">3단 보안 등급</h3>
            <p className="mt-1 text-sm text-ink-2">중요한 문서일수록 여는 방법이 엄격해집니다.</p>
            <div className="mt-4 overflow-x-auto">
              <TierTable />
            </div>
            <p className="mt-3 flex gap-2.5 rounded-xl bg-mist px-4 py-3 text-sm leading-relaxed text-ink-2">
              <Fingerprint size={18} strokeWidth={1.75} className="mt-0.5 flex-none text-key" aria-hidden="true" />
              <span>
                <strong className="font-bold text-navy">E 기밀</strong> 문서는 모바일 생체 <span className="whitespace-nowrap">인증(얼굴·지문)에</span> 성공해야 화면에 표시됩니다.
              </span>
            </p>
          </div>
        </div>
      </Section>

      {/* ── 전원을 켤 때마다 ── */}
      <section aria-labelledby="boot-title" className="bg-white">
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

      {/* ── 상세 사양 ── */}
      <Section tone="mist" labelledBy="detail-specs-title">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-12">
          <div>
            <SectionIntro id="detail-specs-title" eyebrow="Detailed Specs" title="상세 사양" className="mb-0 md:mb-0" />
            <figure className="mt-6 rounded-2xl border border-panel-line bg-panel p-6 md:mt-8 lg:sticky lg:top-28">
              <Archive size={28} strokeWidth={1.6} className="text-key" aria-hidden="true" />
              <blockquote className="mt-4 text-xl leading-snug font-bold text-navy md:text-2xl">
                “A4 계약서를 접지 않고 그대로, 인감도장은 서버 깊숙한 곳에.”
              </blockquote>
            </figure>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-line bg-white">
            <table className="w-full text-left">
              <caption className="sr-only">D-GO 상세 사양</caption>
              <tbody className="divide-y divide-line">
                {DETAILED_SPECS.map((s) => (
                  <tr key={s.label}>
                    <th scope="row" className="w-[7.25rem] px-4 py-4 align-top text-sm font-bold text-navy sm:w-44 md:px-6 md:text-[0.9375rem]">
                      {s.label}
                    </th>
                    <td className="py-4 pr-4 align-top text-[0.9375rem] leading-relaxed text-ink-2 md:pr-6">{s.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* ── 타겟 고객 ── */}
      <Section labelledBy="targets-title">
        <SectionIntro id="targets-title" eyebrow="Target Customers" title="타겟 고객" />
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TARGETS.map((t) => (
            <li key={t.title} className="flex gap-4 rounded-2xl border border-line bg-white p-5 sm:flex-col sm:gap-5 md:p-6">
              <IconTile icon={t.icon} />
              <div>
                <h3 className="text-lg font-bold text-navy">{t.title}</h3>
                <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-pretty text-ink-2 sm:mt-2">{t.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      {/* ── 인증 및 품질 ── */}
      <Section tone="mist" labelledBy="cert-title">
        <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
          <div>
            <Eyebrow>Certification</Eyebrow>
            <h2 id="cert-title" className="display mt-2 text-[clamp(1.625rem,2.8vw,2.25rem)] text-navy">
              인증 및 품질
            </h2>
          </div>
          <ul className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            <li className="flex flex-col items-center rounded-2xl border border-line bg-white p-5 text-center md:p-6">
              <span className="flex h-12 items-center justify-center">
                <img src="/logo/ICTK.png" alt="" width={368} height={117} className="h-8 w-auto opacity-80" style={MONO_LOGO} />
              </span>
              <h3 className="mt-3 font-bold text-navy">ICTK PUF</h3>
              <p className="mt-1 text-sm text-ink-2">반도체 지문 인증</p>
            </li>
            <li className="flex flex-col items-center rounded-2xl border border-line bg-white p-5 text-center md:p-6">
              <span className="flex h-12 items-center justify-center">
                <img src="/logo/KC인증.svg" alt="" width={198} height={306} className="h-11 w-auto" />
              </span>
              <h3 className="mt-3 font-bold text-navy">KC 인증</h3>
              <p className="mt-1 text-sm text-ink-2">국가 안전 인증</p>
            </li>
            <li className="flex flex-col items-center rounded-2xl border border-line bg-white p-5 text-center md:p-6">
              <span className="flex h-12 items-center justify-center text-key" aria-hidden="true">
                <Thermometer size={30} strokeWidth={1.6} />
              </span>
              <h3 className="mt-3 font-bold text-navy">UL CLASS 125</h3>
              <p className="mt-1 text-sm text-ink-2">내화·내구성 인증</p>
            </li>
            <li className="flex flex-col items-center rounded-2xl border border-line bg-white p-5 text-center md:p-6">
              <span className="flex h-12 items-center justify-center text-key" aria-hidden="true">
                <Factory size={30} strokeWidth={1.6} />
              </span>
              <h3 className="mt-3 font-bold text-navy">MADE IN KOREA</h3>
              <p className="mt-1 text-sm text-ink-2">국내 생산</p>
            </li>
          </ul>
        </div>
      </Section>

      {/* ── CTA ── */}
      <section aria-labelledby="cta-title" className="bg-navy text-white">
        <Container className="grid gap-8 py-14 md:py-20 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <h2 id="cta-title" className="display text-[clamp(1.75rem,3.2vw,2.5rem)]">
              문서도 AI도 금고 안에서,
              <br />
              <span className="text-led">실제 기기로</span> 확인하세요.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-on-navy-2 md:text-lg">
              PUF 키 인증부터 로컬 AI 검색·요약, 내장 금고 서랍까지 실제 기기로 보여드립니다. 법인·단체 도입 상담도 함께 받습니다.
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
