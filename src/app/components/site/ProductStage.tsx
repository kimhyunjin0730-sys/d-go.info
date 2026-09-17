import { Pause, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { BOOT_STEPS } from "../../content";
import { cn } from "../ui/utils";
import DeviceScreen from "./DeviceScreen";

const STEP_MS = 3600;

// Screen rectangle inside /images/product/dgo-front.* (measured from the source render)
const SCREEN_BOX = { left: "62.765%", top: "16.211%", width: "27.084%", height: "34.668%" };

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(() =>
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

export function ProductImage({ className, priority = false }: { className?: string; priority?: boolean }) {
  return (
    <picture>
      <source type="image/webp" srcSet="/images/product/dgo-front-800.webp 800w, /images/product/dgo-front.webp 1600w" sizes="(min-width: 1024px) 640px, 100vw" />
      <img
        src="/images/product/dgo-front.jpg"
        width={1600}
        height={708}
        alt="D-GO Quantum Data Vault 정면 — 전원 노브와 LED, USB 포트, 전면 화면, 하단 금고 서랍"
        className={cn("block h-auto w-full", className)}
        loading={priority ? "eager" : "lazy"}
        {...(priority ? { fetchpriority: "high" } : {})}
      />
    </picture>
  );
}

/**
 * The product photo whose front display runs the real boot sequence
 * (KEY → BOOT → AUTH → ACCESS). Autoplays unless reduced motion is requested.
 */
export default function ProductStage() {
  const reducedMotion = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(!reducedMotion);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (reducedMotion) setPlaying(false);
  }, [reducedMotion]);

  const step = BOOT_STEPS[index];
  const autoplay = playing && !reducedMotion;

  return (
    <figure
      className={cn("m-0", hovered && "stage-paused")}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative">
        <ProductImage priority />
        <div className="absolute" style={SCREEN_BOX}>
          <DeviceScreen key={step.state} state={step.state} fill label={step.screenLabel} />
        </div>
      </div>

      <figcaption className="mt-6">
        <div className="flex items-stretch gap-2">
          <div role="group" aria-label="본체 가동 단계" className="grid flex-1 grid-cols-4 gap-2">
            {BOOT_STEPS.map((s, i) => {
              const active = i === index;
              const fillClass = active
                ? autoplay
                  ? "stage-fill--run"
                  : "stage-fill--done"
                : i < index
                  ? "stage-fill--done"
                  : "";
              return (
                <button
                  key={s.code}
                  type="button"
                  aria-pressed={active}
                  onClick={() => {
                    setIndex(i);
                    setPlaying(false);
                  }}
                  className={cn(
                    "group cursor-pointer rounded-md pb-1 text-left transition-colors duration-200",
                    active ? "text-navy" : "text-ink-3 hover:text-navy",
                  )}
                >
                  <span className="relative mb-2 block h-[3px] overflow-hidden rounded-full bg-line">
                    <span
                      key={`${index}-${autoplay}`}
                      className={cn("stage-fill", fillClass)}
                      style={{ ["--stage-ms" as string]: `${STEP_MS}ms` }}
                      onAnimationEnd={active && autoplay ? () => setIndex((index + 1) % BOOT_STEPS.length) : undefined}
                    />
                  </span>
                  <span className="block font-mono text-[0.6875rem] font-semibold tracking-[0.12em]">{s.code}</span>
                  <span className="mt-0.5 block text-[0.8125rem] font-semibold leading-snug sm:text-sm">{s.title}</span>
                </button>
              );
            })}
          </div>
          {!reducedMotion && (
            <button
              type="button"
              onClick={() => setPlaying((p) => !p)}
              aria-label={playing ? "자동 재생 멈추기" : "자동 재생 시작"}
              className="grid h-11 w-11 flex-none cursor-pointer place-items-center self-center rounded-full border border-line text-navy transition-colors duration-200 hover:border-navy"
            >
              {playing ? <Pause size={16} /> : <Play size={16} />}
            </button>
          )}
        </div>
        <p aria-live="polite" className="mt-3 min-h-[3.4em] text-[0.9375rem] leading-relaxed text-ink-2">
          <span className="font-semibold text-navy">{step.strong}</span> {step.body}
        </p>
      </figcaption>
    </figure>
  );
}
