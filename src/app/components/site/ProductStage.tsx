import { Pause, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { BOOT_STEPS } from "../../content";
import { cn } from "../ui/utils";
import DeviceScreen from "./DeviceScreen";

const STEP_MS = 4200;

// Screen rectangle inside /images/product/dgo-front.* (measured from the source render)
const SCREEN_BOX = { left: "63.625%", top: "19.512%", width: "27.062%", height: "35.151%" };

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

export function ProductImage({
  className,
  priority = false,
  cutout = false,
}: {
  className?: string;
  priority?: boolean;
  /** Transparent-background render, for dark surfaces. */
  cutout?: boolean;
}) {
  if (cutout) {
    return (
      <picture>
        <source
          type="image/webp"
          srcSet="/images/product/dgo-front-cut-900.webp 900w, /images/product/dgo-front-cut.webp 1600w"
          sizes="(min-width: 1024px) 680px, 100vw"
        />
        <img
          src="/images/product/dgo-front-cut-900.png"
          width={1600}
          height={697}
          alt="D-GO Quantum Data Vault 정면 — 전원 노브와 LED, USB 포트, 전면 화면, 하단 금고 서랍"
          className={cn("block h-auto w-full", className)}
          loading={priority ? "eager" : "lazy"}
          {...(priority ? { fetchpriority: "high" } : {})}
        />
      </picture>
    );
  }
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
 * (KEY → BOOT → AUTH → ACCESS), with the same screen shown enlarged beside it.
 * Autoplays unless reduced motion is requested.
 */
export default function ProductStage() {
  const reducedMotion = usePrefersReducedMotion();
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(!reducedMotion);

  useEffect(() => {
    if (reducedMotion) setPlaying(false);
  }, [reducedMotion]);

  const step = BOOT_STEPS[index];
  const autoplay = playing && !reducedMotion;

  return (
    <figure className="m-0">
      {/* the unit itself, standing on the dark hero */}
      <div className="relative">
        <span
          aria-hidden="true"
          className="absolute inset-x-[8%] bottom-[-3%] h-[10%] rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(89,236,255,0.18),rgba(5,10,30,0)_70%)]"
        />
        <ProductImage priority cutout />
        <div className="absolute" style={SCREEN_BOX}>
          <DeviceScreen key={`sm-${step.state}`} state={step.state} fill label={step.screenLabel} />
        </div>
      </div>

      {/* enlarged view of the same screen + step rail */}
      <figcaption className="mt-5 grid gap-5 sm:grid-cols-[minmax(0,15rem)_minmax(0,1fr)] sm:items-start">
        <div>
          <p className="eyebrow mb-2 text-led">본체 화면</p>
          <div className="rounded-[12px] bg-[#0A0D1C] p-1 ring-1 ring-white/12">
            <DeviceScreen key={`lg-${step.state}`} state={step.state} />
          </div>
        </div>

        <div>
          <ol role="group" aria-label="본체 가동 단계" className="grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-4">
            {BOOT_STEPS.map((s, i) => {
              const active = i === index;
              const fillClass = active ? (autoplay ? "stage-fill--run" : "stage-fill--done") : i < index ? "stage-fill--done" : "";
              return (
                <li key={s.code}>
                  <button
                    type="button"
                    aria-pressed={active}
                    onClick={() => {
                      setIndex(i);
                      setPlaying(false);
                    }}
                    className={cn(
                      "w-full cursor-pointer pb-1 text-left transition-colors duration-200",
                      active ? "text-white" : "text-on-navy-2 hover:text-white",
                    )}
                  >
                    <span className="relative mb-2 block h-[2px] overflow-hidden bg-white/20">
                      <span
                        key={`${index}-${autoplay}`}
                        className={cn("stage-fill", fillClass)}
                        style={{ ["--stage-ms" as string]: `${STEP_MS}ms` }}
                        onAnimationEnd={active && autoplay ? () => setIndex((index + 1) % BOOT_STEPS.length) : undefined}
                      />
                    </span>
                    <span className="block font-mono text-[0.75rem] font-semibold tracking-[0.16em]">{s.code}</span>
                    <span className="mt-0.5 block text-[0.8125rem] font-semibold">{s.title}</span>
                  </button>
                </li>
              );
            })}
          </ol>

          <p aria-live="polite" className="mt-4 text-[0.9375rem] leading-relaxed text-on-navy-2 sm:min-h-[4.5em]">
            <span className="font-semibold text-white">{step.strong}</span> {step.body}
          </p>

          {!reducedMotion && (
            <button
              type="button"
              onClick={() => setPlaying((p) => !p)}
              className="mt-2 inline-flex min-h-9 cursor-pointer items-center gap-1.5 text-[0.8125rem] font-medium text-on-navy-2 transition-colors duration-200 hover:text-white"
            >
              {playing ? <Pause size={13} aria-hidden="true" /> : <Play size={13} aria-hidden="true" />}
              {playing ? "자동 재생 멈춤" : "자동 재생"}
            </button>
          )}
        </div>
      </figcaption>
    </figure>
  );
}
