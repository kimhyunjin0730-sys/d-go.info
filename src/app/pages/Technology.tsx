import {
  ArrowDown,
  ArrowRight,
  Brain,
  BrainCircuit,
  Camera,
  Check,
  CircleCheck,
  Cpu,
  Database,
  Fingerprint,
  HardDrive,
  Layers,
  Lock,
  MonitorSmartphone,
  Radio,
  RefreshCw,
  Settings,
  ShieldCheck,
  Thermometer,
  Usb,
  Wifi,
} from "lucide-react";
import { TIERS, mailto } from "../content";
import { ButtonLink } from "../components/site/Button";
import { AirGapDiagram } from "../components/site/Diagrams";
import { Container, Eyebrow, PageHero, Section, SectionIntro } from "../components/site/Layout";
import { cn } from "../components/ui/utils";

const PILLARS = [
  {
    icon: Lock,
    badge: "PILLAR 1",
    title: "PUF 기반 암호 제어",
    subtitle: "Core Logic",
    features: [
      "반도체 고유 지문을 이용한 암호 키 생성",
      "메모리 휘발성 키 관리로 복제 불가",
      "Zero-Outbound 암호화 (외부 인터넷 원천 차단)",
      "본체 내부에서 모든 암호화 작업 완결",
    ],
  },
  {
    icon: RefreshCw,
    badge: "PILLAR 2",
    title: "물리-디지털 이중 복구",
    subtitle: "Dual Recovery",
    features: [
      "디지털 인증 분실 시 물리 키로 복구",
      "PUF 전자키 + 하드웨어 정보 조합",
      "전자식 버튼과 모터 제어 연동",
      "복구 시나리오 다중 경로 제공",
    ],
  },
  {
    icon: Thermometer,
    badge: "PILLAR 3",
    title: "환경 센싱 & 데이터 보호",
    subtitle: "Environmental Protection",
    features: ["125°F(52°C) 초과 시 자동 셧다운", "RAID 1 실시간 미러링", "UPS 무정전 전원 공급", "충격·진동 감지 및 알림"],
  },
  {
    icon: Fingerprint,
    badge: "PILLAR 4",
    title: "하이브리드 2FA + Secure Port",
    subtitle: "Access Control",
    features: [
      "키패드 + PUF 하드웨어 키 이중 인증",
      "PUF 승인 시에만 USB-C 포트 활성화",
      "네트워크 드라이브 동적 제어",
      "모든 접근 시도 로그 기록",
    ],
  },
];

/** 페이지 내 기술 항목 요약 */
const SPECS = [
  { term: "보안칩", value: "ICTK PUF (복제 불가 반도체 지문)" },
  { term: "암호화", value: "AES-256 · RSA-2048 이중 암호화" },
  { term: "장치 통신", value: "상호 인증 통신 mTLS" },
  { term: "무결성", value: "SHA-256 + TSA 시점인증" },
  { term: "로컬 AI", value: "NPU 6 TOPS · Local RAG LLM" },
  { term: "본체", value: "리눅스 임베디드 OS · 8\" 터치스크린" },
];

const CLIENT_FEATURES = ["대시보드 모니터링", "문서 스캔 (OCR PDF)", "음성 녹취 및 STT"];

const SUBSYSTEMS = [
  { icon: HardDrive, title: "이중화 스토리지", items: ["RAID 1 미러링", "C/D/E 보안파티션"] },
  { icon: Thermometer, title: "환경 제어", items: ["내장 UPS 탑재", "125°F 이상 시 셧다운"] },
  { icon: Settings, title: "물리 개폐 시스템", items: ["PUF 인증 연동", "모터 드라이버 제어"] },
  { icon: Usb, title: "Secure Port", items: ["PUF 인가 시 활성", "USB-C 포트 접근통제"] },
];

const LAYERS = [
  { layer: "Layer 0", name: "물리적 격리", desc: "전용 폐쇄망만 사용 · 인터넷 연결 경로 없음" },
  { layer: "Layer 1", name: "장치 인증", desc: "PUF 인증 + 상호 인증 통신(mTLS)으로 등록 장치만 접근" },
  { layer: "Layer 2", name: "근접 조건", desc: "거리 이탈 시 자동 파일 잠금" },
  { layer: "Layer 3", name: "사용자 인증", desc: "C·D·E 등급별 인증 (ID·비밀번호 / 2단계 인증 / 생체인증)" },
  { layer: "Layer 4", name: "데이터 암호화", desc: "AES-256 이중 암호화" },
  { layer: "Layer 5", name: "무결성 검증", desc: "SHA-256 + TSA 시점인증" },
  { layer: "Layer 6", name: "악성코드 검사", desc: "입력 파일 실시간 스캔" },
  { layer: "Layer 7", name: "감사 추적", desc: "모든 접근·반출 이력 로그 체인" },
];

/** Cumulative factors per grade — C: ID·PW, D: +2단계, E: +스마트폰 생체인증 */
const TIER_FACTORS = ["아이디·비밀번호", "2단계 인증", "스마트폰 생체인증"];

const ROADMAP = [
  { icon: HardDrive, num: "7.1", title: "저장장치 보안", items: ["보드 탈착 시 NVMe SSD 데이터 파기 기술 연구"] },
  {
    icon: Brain,
    num: "7.2",
    title: "로컬 AI 기능 확장",
    items: ["Local NotebookLM 기능", "위키형 정보 시스템"],
    note: "로컬 LLM 문서 검색·요약은 현재 기본 탑재",
  },
  { icon: Camera, num: "7.3", title: "하드웨어 확장", items: ["카메라 기반 인감도장 시스템 연구"] },
  {
    icon: Radio,
    num: "7.4",
    title: "통신 및 추적 기능",
    items: ["독립 통신 보드(Wi-Fi, BLDC, GPS) 장착", "전원 차단 시 신호 전송 (Heartbeat)", "지정 클라이언트로 알림 전달", "위치 추적 기능 검토"],
  },
];

const COMPARISON = [
  { item: "데이터 위치", existing: "클라우드에 복사본 존재", dgo: "Air-Gap · Zero-Outbound. 물리적 장치에만 존재" },
  { item: "장치 연결", existing: "누구나 접근 가능", dgo: "PUF 인증 장치만 연결 허용" },
  { item: "분실 시", existing: "데이터 노출 위험", dgo: "보안키 자동 소멸로 데이터 보호" },
  { item: "자산 관리", existing: "디지털 자산만", dgo: "아날로그 + 디지털 통합 관리" },
  { item: "원본 증명", existing: "진위 증명 불가", dgo: "시점인증(TSA)으로 법적 효력" },
  { item: "접근 제어", existing: "항상 접근 가능", dgo: "근접 조건 + 장치 인증 이중 잠금" },
  { item: "AI 활용", existing: "문서를 외부 AI 서비스로 전송", dgo: "폐쇄망 Local RAG LLM — 금고 안에서 검색·요약" },
];

const FAQS = [
  {
    q: "Zero-Outbound가 정확히 무엇인가요?",
    a: "외부 인터넷으로의 데이터 송신 경로 자체를 원천 차단하는 보안 모델입니다. D-GO Quantum Data Vault는 폐쇄망(Private Wi-Fi) 안에서만 동작하며, 모든 암호화/복호화 작업을 본체 내부에서 처리합니다. 키는 PUF 칩에서 생성되어 메모리에 휘발성으로 보관됩니다.",
  },
  {
    q: "PUF 물리 키를 잃어버리면 어떻게 되나요?",
    a: "디지털 인증과 물리 키의 이중 복구 시스템을 제공합니다. 물리 키 분실 시 등록된 모바일 앱과 하드웨어 정보 조합으로 PUF 키를 재생성할 수 있습니다.",
  },
  {
    q: "양자 암호화는 실제로 적용되나요?",
    a: "D-GO Quantum Data Vault는 '양자 시대에 대비한 데이터 금고'를 의미합니다. 현재는 AES-256 + RSA-2048 이중 암호화를 사용하며, 향후 양자내성암호(PQC) 알고리즘 적용을 준비 중입니다.",
  },
];

export default function Technology() {
  return (
    <div className="w-full">
      <PageHero
        eyebrow="Technology"
        title="Zero-Outbound,"
        accent="By Hardware"
        lead="외부 인터넷 원천 차단 — 하드웨어 단독으로 완성되는 폐쇄망 보안 아키텍처. ICTK PUF 칩과 Air-Gap 구조로 진정한 데이터 주권을 실현합니다."
      />

      {/* ── 연결 방법 ── */}
      <Section tone="mist" labelledBy="connect-title">
        <div className="grid gap-5 xl:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]">
          <div className="rounded-2xl border border-line bg-white p-5 md:p-8">
            <h2 id="connect-title" className="text-xl font-bold text-ink md:text-2xl">
              연결 방법 — 전용 폐쇄망 <span className="text-ink-3">(Private Wi-Fi)</span>
            </h2>
            <AirGapDiagram className="mt-6" />
          </div>
          <div className="rounded-2xl border border-line bg-white p-5 md:p-8">
            <h2 id="spec-title" className="text-xl font-bold text-key md:text-2xl">
              핵심 보안 사양
            </h2>
            <dl className="mt-4 grid md:grid-cols-2 md:gap-x-10 xl:grid-cols-1">
              {SPECS.map((s) => (
                <div key={s.term} className="grid grid-cols-[4.75rem_1fr] gap-3 border-t border-line py-3 sm:grid-cols-[7.5rem_1fr]">
                  <dt className="text-sm text-ink-3">{s.term}</dt>
                  <dd className="text-[0.9375rem] font-semibold text-navy">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>

      {/* ── 시스템 아키텍처 ── */}
      <Section labelledBy="arch-title">
        <SectionIntro
          id="arch-title"
          eyebrow="Architecture"
          title="시스템 아키텍처"
          lead="전용 앱과 금고 본체가 인터넷을 거치지 않는 폐쇄망으로만 연결됩니다."
        />

        <div className="grid items-center lg:grid-cols-[minmax(0,4fr)_10rem_minmax(0,7fr)]">
          {/* Client App */}
          <div className="rounded-2xl border border-line bg-white p-5 md:p-6">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 flex-none place-items-center rounded-xl border border-panel-line bg-panel text-key" aria-hidden="true">
                <MonitorSmartphone size={24} strokeWidth={1.75} />
              </span>
              <div>
                <h3 className="text-lg font-bold text-navy">Client App</h3>
                <p className="text-sm text-ink-2">PC·모바일 전용 앱</p>
              </div>
            </div>
            <ul className="mt-5 space-y-2.5">
              {CLIENT_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-[0.9375rem] text-ink-2">
                  <Check size={16} strokeWidth={2.5} className="mt-1 flex-none text-key" aria-hidden="true" />
                  {f}
                </li>
              ))}
              <li className="flex items-start gap-2.5 text-[0.9375rem] font-semibold text-navy">
                <ShieldCheck size={16} strokeWidth={2.25} className="mt-1 flex-none text-key" aria-hidden="true" />
                전송 후 데이터 자동 파기
              </li>
            </ul>
          </div>

          {/* Connection */}
          <div className="flex flex-col items-center lg:pt-[3.25rem]">
            <div className="flex w-full flex-col items-center lg:flex-row" aria-hidden="true">
              <span className="h-7 w-0.5 bg-key lg:h-0.5 lg:w-auto lg:flex-1" />
              <span className="grid h-12 w-12 flex-none place-items-center rounded-full border-2 border-key bg-white text-key">
                <Wifi size={20} strokeWidth={2} />
              </span>
              <span className="hidden bg-key lg:block lg:h-0.5 lg:flex-1" />
            </div>
            <p className="mt-2 px-2 text-center text-[0.8125rem] leading-snug font-bold text-key">
              전용 폐쇄망 <span className="whitespace-nowrap">(Private Wi-Fi)</span>
              <span className="mt-1 block text-xs font-semibold text-ink-3">
                <span className="sr-only">· </span>
                <span className="whitespace-nowrap">Air-Gap ·</span> <span className="whitespace-nowrap">Zero-Outbound</span>
              </span>
            </p>
            <span className="mt-2 h-7 w-0.5 bg-key lg:hidden" aria-hidden="true" />
          </div>

          {/* Embedded Server */}
          <div className="overflow-hidden rounded-2xl border border-navy bg-white">
            <div className="flex flex-wrap items-center justify-between gap-3 bg-navy px-5 py-4 text-white md:px-6">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 flex-none place-items-center rounded-lg bg-white/10" aria-hidden="true">
                  <Database size={20} strokeWidth={1.75} />
                </span>
                <div>
                  <h3 className="text-base font-bold md:text-lg">
                    Embedded Server <span className="text-sm font-medium text-on-navy-2">(금고 본체)</span>
                  </h3>
                  <p className="text-[0.8125rem] text-on-navy-2">리눅스 기반 임베디드 OS</p>
                </div>
              </div>
              <span className="rounded-full border border-white/30 px-3 py-1 text-xs font-semibold whitespace-nowrap text-white">8" 터치스크린 내장</span>
            </div>

            <div className="p-4 md:p-6">
              <div className="rounded-xl border border-panel-line bg-panel p-4">
                <p className="flex items-center gap-2 text-[0.9375rem] font-bold text-key">
                  <Cpu size={18} strokeWidth={2} aria-hidden="true" />
                  PUF Core Logic <span className="font-semibold text-navy">(암호/제어 중심)</span>
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-2">
                  외부 인터넷 원천 차단(Zero-Outbound) 수행. 모든 입출력 폐쇄망 내부 처리.
                  <br className="hidden sm:block" /> 비상시 물리 USB 키 + HW 정보로 이중 복구(Dual Recovery)
                </p>
              </div>

              <ArrowDown size={18} className="mx-auto my-2 text-ink-3" aria-hidden="true" />

              <ul className="grid grid-cols-2 gap-2 sm:gap-2.5">
                {SUBSYSTEMS.map((s) => (
                  <li key={s.title} className="rounded-xl border border-line p-3 sm:p-3.5">
                    <p className="flex items-center gap-2 text-sm font-bold text-navy">
                      <s.icon size={16} strokeWidth={2} className="flex-none text-key" aria-hidden="true" />
                      {s.title}
                    </p>
                    <ul className="mt-1.5 space-y-0.5 text-[0.8125rem] text-ink-2">
                      {s.items.map((it) => (
                        <li key={it}>· {it}</li>
                      ))}
                    </ul>
                  </li>
                ))}
                <li className="col-span-2 rounded-xl border border-key/40 bg-mist p-3 sm:p-3.5">
                  <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-bold text-navy">
                    <BrainCircuit size={16} strokeWidth={2} className="flex-none text-key" aria-hidden="true" />
                    Local AI
                    <span className="font-mono text-xs font-semibold text-key">NPU 6 TOPS</span>
                  </p>
                  <p className="mt-1.5 text-[0.8125rem] text-ink-2">폐쇄망 Local RAG LLM (문서 검색·요약)</p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-8 flex w-fit max-w-full items-start gap-2 rounded-2xl border border-line bg-mist px-4 py-2.5 text-sm text-ink-2 sm:items-center sm:rounded-full">
          <ShieldCheck size={16} className="mt-0.5 flex-none text-key sm:mt-0" aria-hidden="true" />
          단절된 네트워크와 하드웨어 암호화의 결합으로 서버 해킹 원천 차단
        </p>
      </Section>

      {/* ── 4가지 핵심 기술 ── */}
      <Section tone="mist" labelledBy="pillars-title">
        <SectionIntro id="pillars-title" eyebrow="Core Technology" title="4가지 핵심 기술" lead="D-GO Quantum Data Vault를 지탱하는 네 가지 기술적 기둥" />
        <ul className="grid gap-4 md:grid-cols-2">
          {PILLARS.map((p) => (
            <li key={p.badge} className="rounded-2xl border border-line bg-white p-5 md:p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <span className="grid h-11 w-11 flex-none place-items-center rounded-xl border border-panel-line bg-panel text-key" aria-hidden="true">
                    <p.icon size={22} strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="text-lg leading-snug font-bold text-navy">{p.title}</h3>
                    <p className="text-[0.8125rem] font-medium text-ink-3">{p.subtitle}</p>
                  </div>
                </div>
                <span className="font-mono text-[0.6875rem] font-semibold tracking-[0.12em] whitespace-nowrap text-key">{p.badge}</span>
              </div>
              <ul className="mt-4 space-y-2 border-t border-line pt-4">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[0.9375rem] leading-snug text-ink-2">
                    <Check size={16} strokeWidth={2.5} className="mt-0.5 flex-none text-key" aria-hidden="true" />
                    {f}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Section>

      {/* ── 보안 계층 ── */}
      <Section labelledBy="layers-title">
        <SectionIntro
          id="layers-title"
          eyebrow="Defense in Depth"
          title="보안 계층"
          lead="물리적 격리부터 감사 추적까지, 여덟 겹의 보호 장치가 차례로 작동합니다."
        />
        <ol className="grid gap-2.5 md:grid-flow-col md:grid-cols-2 md:grid-rows-4 md:gap-x-5">
          {LAYERS.map((l) => (
            <li key={l.layer} className="flex items-start gap-4 rounded-xl border border-line bg-white px-4 py-3.5 md:items-center">
              <span className="w-16 flex-none pt-0.5 font-mono text-xs font-semibold tracking-wide text-key md:pt-0">{l.layer}</span>
              <div className="min-w-0 flex-1">
                <p className="font-bold text-navy">{l.name}</p>
                <p className="mt-0.5 text-sm leading-snug text-ink-2">{l.desc}</p>
              </div>
              <CircleCheck size={18} strokeWidth={2} className="mt-0.5 flex-none text-status-ok md:mt-0" aria-hidden="true" />
            </li>
          ))}
        </ol>
      </Section>

      {/* ── 보안 등급 기반 파티션 관리 ── */}
      <Section tone="mist" labelledBy="partition-title">
        <SectionIntro
          id="partition-title"
          eyebrow="Partitions"
          title="보안 등급 기반 파티션 관리"
          lead="파일 민감도에 따라 C / D / E 3단계 파티션으로 자동 분류·보호합니다. 중요한 문서일수록 여는 방법이 엄격해집니다."
        />
        <ul className="grid gap-4 md:grid-cols-3">
          {TIERS.map((t, i) => {
            const top = t.grade === "E";
            return (
              <li
                key={t.grade}
                className={cn("flex flex-col rounded-2xl border p-5 md:p-6", top ? "border-key bg-key text-white" : "border-line bg-white text-ink")}
              >
                <div className="flex items-baseline gap-3">
                  <span className={cn("font-mono text-4xl leading-none font-semibold", top ? "text-white" : "text-key")} aria-hidden="true">
                    {t.grade}
                  </span>
                  <h3 className={cn("text-xl font-bold", top ? "text-white" : "text-navy")}>
                    <span className="sr-only">{t.grade}등급 </span>
                    {t.name}
                  </h3>
                </div>
                <dl className={cn("mt-5 grid gap-3 border-t pt-4 text-[0.9375rem]", top ? "border-white/30" : "border-line")}>
                  <div>
                    <dt className={cn("text-[0.8125rem] font-medium", top ? "text-white/80" : "text-ink-3")}>인증</dt>
                    <dd className="mt-0.5 font-bold">{top ? "+스마트폰 생체인증" : t.auth}</dd>
                  </div>
                  <div>
                    <dt className={cn("text-[0.8125rem] font-medium", top ? "text-white/80" : "text-ink-3")}>대상 문서</dt>
                    <dd className={cn("mt-0.5", top ? "text-white" : "text-ink-2")}>{t.scope}</dd>
                  </div>
                </dl>
                <ul className="mt-5 flex flex-wrap gap-1.5" aria-label={`${t.grade}등급에 필요한 인증`}>
                  {TIER_FACTORS.slice(0, i + 1).map((f) => (
                    <li
                      key={f}
                      className={cn(
                        "inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold",
                        top ? "bg-white/15 text-white" : "border border-line bg-mist text-ink-2",
                      )}
                    >
                      <Check size={12} strokeWidth={3} aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>

        <div className="mt-4 flex items-start gap-4 rounded-2xl border border-line bg-white p-5 md:p-6">
          <span className="grid h-10 w-10 flex-none place-items-center rounded-xl border border-panel-line bg-panel text-key" aria-hidden="true">
            <Layers size={20} strokeWidth={1.75} />
          </span>
          <div>
            <h3 className="font-bold text-navy">자동 분류</h3>
            <p className="mt-1 text-[0.9375rem] leading-relaxed text-ink-2">
              사용자 태그 기반으로 파일이 자동 분류되며, 보안 등급에 따라 C / D / E 파티션에 자동 할당됩니다.
            </p>
          </div>
        </div>
      </Section>

      {/* ── 로드맵 ── */}
      <Section labelledBy="roadmap-title">
        <SectionIntro
          id="roadmap-title"
          eyebrow="Roadmap"
          title="향후 연구 및 개발 계획"
          lead="AI 기반 기능과 물리 보안 기술을 결합해 차세대 보안 금고 플랫폼으로 확장합니다."
        />
        <ul className="grid gap-4 md:grid-cols-2">
          {ROADMAP.map((r) => (
            <li key={r.num} className="flex flex-col rounded-2xl border border-line bg-white p-5 md:p-6">
              <div className="flex items-center gap-3.5">
                <span className="grid h-11 w-11 flex-none place-items-center rounded-xl border border-panel-line bg-panel text-key" aria-hidden="true">
                  <r.icon size={22} strokeWidth={1.75} />
                </span>
                <div>
                  <p className="font-mono text-xs font-semibold tracking-wide text-key">{r.num}</p>
                  <h3 className="text-lg leading-snug font-bold text-navy">{r.title}</h3>
                </div>
              </div>
              <ul className="mt-4 space-y-2 border-t border-line pt-4">
                {r.items.map((it) => (
                  <li key={it} className="flex items-start gap-2.5 text-[0.9375rem] leading-snug text-ink-2">
                    <span className="mt-[0.45rem] h-1.5 w-1.5 flex-none rounded-full bg-key" aria-hidden="true" />
                    {it}
                  </li>
                ))}
              </ul>
              {r.note && (
                <p className="mt-4 flex items-center gap-2 rounded-lg bg-mist px-3 py-2 text-[0.8125rem] font-semibold text-navy">
                  <CircleCheck size={16} strokeWidth={2} className="flex-none text-status-ok" aria-hidden="true" />
                  {r.note}
                </p>
              )}
            </li>
          ))}
        </ul>
      </Section>

      {/* ── 핵심 차별점 ── */}
      <Section tone="mist" labelledBy="compare-title">
        <SectionIntro id="compare-title" eyebrow="Comparison" title="핵심 차별점" />
        <ul className="grid gap-3 md:hidden">
          {COMPARISON.map((row) => (
            <li key={row.item} className="overflow-hidden rounded-2xl border border-line bg-white">
              <h3 className="border-b border-line px-5 py-3 font-bold text-ink">{row.item}</h3>
              <dl className="text-[0.9375rem]">
                <div className="grid grid-cols-[4.5rem_1fr] gap-3 px-5 py-3">
                  <dt className="text-sm text-ink-3">기존 제품</dt>
                  <dd className="text-ink-2">{row.existing}</dd>
                </div>
                <div className="grid grid-cols-[4.5rem_1fr] gap-3 bg-panel/60 px-5 py-3">
                  <dt className="text-sm font-bold text-key">D-GO</dt>
                  <dd className="font-semibold text-navy">{row.dgo}</dd>
                </div>
              </dl>
            </li>
          ))}
        </ul>
        <div className="hidden overflow-x-auto rounded-2xl border border-line bg-white md:block">
          <table className="w-full min-w-[40rem] text-left">
            <caption className="sr-only">기존 제품과 D-GO Quantum Data Vault 비교</caption>
            <thead>
              <tr className="border-b border-line">
                <th scope="col" className="w-[22%] px-5 py-4 text-sm font-bold text-ink-3">
                  비교 항목
                </th>
                <th scope="col" className="w-[32%] px-5 py-4 text-sm font-bold text-ink-3">
                  기존 제품
                </th>
                <th scope="col" className="bg-navy px-5 py-4 text-sm font-bold text-white">
                  D-GO Quantum Data Vault
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((row) => (
                <tr key={row.item} className="border-b border-line last:border-b-0">
                  <th scope="row" className="px-5 py-4 text-[0.9375rem] font-bold text-ink">
                    {row.item}
                  </th>
                  <td className="px-5 py-4 text-[0.9375rem] text-ink-2">{row.existing}</td>
                  <td className="bg-panel/60 px-5 py-4 text-[0.9375rem] font-semibold text-navy">{row.dgo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ── 기술 FAQ ── */}
      <Section labelledBy="faq-title">
        <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
          <div>
            <Eyebrow>Q &amp; A</Eyebrow>
            <h2 id="faq-title" className="display mt-2 text-[clamp(1.625rem,2.8vw,2.25rem)] text-navy">
              기술 FAQ
            </h2>
          </div>
          <dl>
            {FAQS.map((f) => (
              <div key={f.q} className="border-t border-line py-5">
                <dt className="text-lg font-bold text-ink">{f.q}</dt>
                <dd className="mt-2 text-[0.9375rem] leading-relaxed text-ink-2">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      {/* ── CTA ── */}
      <section aria-labelledby="tech-cta-title" className="bg-navy text-white">
        <Container className="grid gap-8 py-14 md:py-20 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <h2 id="tech-cta-title" className="display text-[clamp(1.75rem,3.2vw,2.5rem)]">
              구조로 막는 보안,
              <br />
              <span className="text-led">실제 기기로</span> 확인하세요.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-on-navy-2 md:text-lg">
              PUF 인증부터 폐쇄망 안의 AI 검색·요약까지, 실제 기기로 보여드립니다. 법인·단체 도입 상담도 함께 받습니다.
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
