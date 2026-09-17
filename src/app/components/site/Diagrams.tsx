import { ChevronRight, Globe, KeyRound, Monitor, Smartphone, X } from "lucide-react";
import { BOOT_STEPS, ONBOARDING, PLATFORMS, TIERS } from "../../content";
import { cn } from "../ui/utils";
import DeviceScreen, { DeviceBezel } from "./DeviceScreen";

/** 연결방법 — 전용 폐쇄망 (Private Wi-Fi): apps → D-GO server ✕ internet */
export function AirGapDiagram({ className }: { className?: string }) {
  const sources = [
    { icon: Monitor, label: "PC 앱" },
    { icon: Smartphone, label: "모바일 앱" },
    { icon: KeyRound, label: "PUF USB 키" },
  ];
  return (
    <div className={className}>
      <div className="flex flex-col items-stretch gap-3 md:flex-row md:items-center">
        <ul className="grid grid-cols-3 gap-2 md:flex md:flex-col">
          {sources.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex flex-col items-center gap-1.5 rounded-lg border border-line bg-white px-2 py-3 text-center text-sm font-semibold whitespace-nowrap text-navy md:flex-row md:gap-2 md:px-3.5 md:py-2.5"
            >
              <Icon size={18} strokeWidth={1.75} className="text-key" aria-hidden="true" />
              {label}
            </li>
          ))}
        </ul>

        <ChevronRight className="mx-auto flex-none rotate-90 text-navy md:mx-0 md:rotate-0" size={22} aria-hidden="true" />

        <div className="rounded-lg bg-key px-4 py-3.5 text-center text-[0.9375rem] font-semibold whitespace-nowrap text-white">
          D-GO 서버 연결
        </div>

        {/* the cut */}
        <div className="relative mx-auto flex h-12 w-12 flex-none items-center justify-center md:mx-0 md:h-10 md:w-14" aria-hidden="true">
          <span className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-line md:inset-x-0 md:inset-y-auto md:top-1/2 md:left-0 md:h-px md:w-full md:translate-x-0" />
          <span className="relative grid h-8 w-8 place-items-center rounded-full bg-white">
            <X className="text-cut" size={26} strokeWidth={3} />
          </span>
        </div>

        <div className="flex items-center justify-center gap-2 rounded-lg border border-dashed border-ink-3/60 px-4 py-3.5 text-[0.9375rem] font-semibold whitespace-nowrap text-ink-2">
          <Globe size={18} strokeWidth={1.75} aria-hidden="true" />
          인터넷 연결 없음
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-ink-2">
        전용 앱으로만 접속하고, 웹 접속은 차단됩니다 — 애초에 인터넷과 연결되지 않는 구조입니다.
      </p>
      <p className="mt-2 text-sm text-ink-3">
        <span className="sr-only">지원 플랫폼: </span>
        {PLATFORMS.join(" · ")}
      </p>
    </div>
  );
}

/** 3단 보안 등급 — C 일반 / D 보호 / E 기밀 */
export function TierTable({ className }: { className?: string }) {
  return (
    <table className={cn("w-full border-separate border-spacing-y-1.5 text-left", className)}>
      <caption className="sr-only">3단 보안 등급과 필요한 인증</caption>
      <thead className="sr-only">
        <tr>
          <th scope="col">등급</th>
          <th scope="col">인증</th>
          <th scope="col">대상 문서</th>
        </tr>
      </thead>
      <tbody>
        {TIERS.map((t) => {
          const top = t.grade === "E";
          return (
            <tr key={t.grade} className={cn(top ? "bg-key text-white" : t.grade === "D" ? "bg-panel text-ink" : "bg-mist text-ink")}>
              <th scope="row" className="rounded-l-lg px-4 py-3.5 align-middle whitespace-nowrap">
                <span className={cn("font-mono text-lg font-semibold", top ? "text-white" : "text-key")}>{t.grade}</span>
                <span className="ml-2 text-base font-bold">{t.name}</span>
              </th>
              <td className="rounded-r-lg px-4 py-3.5 text-right text-sm sm:rounded-none sm:px-2 sm:text-left">
                <span className="block font-semibold whitespace-nowrap">{t.auth}</span>
                <span className={cn("mt-0.5 block text-[0.8125rem] sm:hidden", top ? "text-white/90" : "text-ink-2")}>{t.scope}</span>
              </td>
              <td className={cn("hidden rounded-r-lg px-4 py-3.5 text-right text-sm sm:table-cell", top ? "text-white/90" : "text-ink-2")}>{t.scope}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

/** 처음 도입할 때는 — 관리자 / 팀원 최초 1회 흐름 */
export function OnboardingFlows({ className }: { className?: string }) {
  return (
    <div className={cn("space-y-4", className)}>
      {ONBOARDING.map((flow, fi) => (
        <div key={flow.role} className="grid gap-3 lg:grid-cols-[180px_1fr] lg:items-stretch">
          <div className={cn("rounded-lg px-4 py-3 text-white", fi === 0 ? "bg-navy" : "bg-key")}>
            <p className="text-lg font-bold">{flow.role}</p>
            <p className="text-[0.8125rem] leading-snug text-white/85">{flow.note}</p>
          </div>
          <ol className="grid gap-2 sm:grid-cols-5 sm:gap-5">
            {flow.steps.map((s, i) => {
              const last = i === flow.steps.length - 1;
              return (
                  <li key={s.title} className="relative flex items-center">
                    <div
                      className={cn(
                        "flex w-full items-center gap-3 rounded-lg bg-white px-3.5 py-2.5 sm:h-full sm:flex-col sm:justify-center sm:gap-0.5 sm:px-2 sm:text-center",
                        last ? "border-2 border-key" : "border border-line",
                      )}
                    >
                      <span className="font-mono text-xs font-semibold text-ink-3 sm:hidden">{i + 1}</span>
                      <span className="text-[0.9375rem] font-bold text-key">{s.title}</span>
                      <span className="ml-auto text-[0.8125rem] text-ink-2 sm:ml-0">{s.sub}</span>
                    </div>
                    {!last && (
                      <ChevronRight
                        size={16}
                        strokeWidth={2.5}
                        className="absolute top-1/2 -right-[18px] hidden -translate-y-1/2 text-navy sm:block"
                        aria-hidden="true"
                      />
                    )}
                  </li>
              );
            })}
          </ol>
        </div>
      ))}
    </div>
  );
}

/** 전원을 켤 때마다 — KEY / BOOT / AUTH / ACCESS with the matching screens */
export function BootSequence({ className }: { className?: string }) {
  return (
    <ol className={cn("grid gap-x-5 gap-y-10 sm:grid-cols-2 xl:grid-cols-4", className)}>
      {BOOT_STEPS.map((s, i) => (
        <li key={s.code} className="flex flex-col">
          <DeviceBezel>
            <DeviceScreen state={s.state} label={s.screenLabel} />
          </DeviceBezel>
          <div className="mt-5 flex items-center gap-3">
            <span className="grid h-8 w-8 flex-none place-items-center rounded-full bg-key text-sm font-bold text-white" aria-hidden="true">
              {i + 1}
            </span>
            <span className="font-mono text-xs font-semibold tracking-[0.14em] text-key">{s.code}</span>
            <span className="h-px flex-1 bg-line" aria-hidden="true" />
          </div>
          <h3 className="mt-3 text-xl font-bold text-navy">
            <span className="sr-only">{i + 1}단계. </span>
            {s.title}
          </h3>
          <p className="mt-0.5 text-[0.8125rem] font-medium text-ink-3">{s.tag}</p>
          <p className="mt-3 text-[0.9375rem] leading-relaxed text-ink-2">{s.body}</p>
          <p className="mt-2 text-[0.9375rem] leading-relaxed font-semibold text-key">{s.strong}</p>
        </li>
      ))}
    </ol>
  );
}
