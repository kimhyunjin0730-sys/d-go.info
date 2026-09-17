import type { ReactNode } from "react";
import { cn } from "../ui/utils";

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn("mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8", className)}>{children}</div>;
}

type Tone = "white" | "mist" | "navy";

const toneClass: Record<Tone, string> = {
  white: "bg-white text-ink",
  mist: "bg-mist text-ink",
  navy: "bg-navy text-white",
};

export function Section({
  tone = "white",
  className,
  children,
  id,
  labelledBy,
}: {
  tone?: Tone;
  className?: string;
  children: ReactNode;
  id?: string;
  labelledBy?: string;
}) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={cn(toneClass[tone], "py-14 md:py-20", className)}>
      <Container>{children}</Container>
    </section>
  );
}

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={cn("eyebrow text-key", className)}>{children}</p>;
}

/** Heading block for white/mist sections. */
export function SectionIntro({
  id,
  eyebrow,
  title,
  lead,
  align = "left",
  className,
}: {
  id?: string;
  eyebrow?: ReactNode;
  title: ReactNode;
  lead?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn("mb-8 md:mb-12", align === "center" && "mx-auto max-w-2xl text-center", className)}>
      {eyebrow && <Eyebrow className="mb-3">{eyebrow}</Eyebrow>}
      <h2 id={id} className="display text-[clamp(1.625rem,2.8vw,2.25rem)] text-navy">
        {title}
      </h2>
      {lead && <p className="mt-3 max-w-2xl text-base text-pretty text-ink-2 md:text-lg">{lead}</p>}
    </div>
  );
}

/**
 * Full-bleed navy title bar — the catalog's section header
 * ("유출 경로 원천 차단.", "전원을 켤 때마다 — …").
 */
export function BandHeader({
  id,
  title,
  accent,
  aside,
}: {
  id?: string;
  title: ReactNode;
  accent?: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <div className="bg-navy text-white">
      <Container className="flex flex-col gap-3 py-8 md:flex-row md:items-end md:justify-between md:gap-10 md:py-10">
        <h2 id={id} className="display text-[clamp(1.625rem,3vw,2.375rem)]">
          {title}
          {accent && <span className="text-led"> {accent}</span>}
        </h2>
        {aside && <p className="max-w-sm text-sm leading-relaxed text-balance text-on-navy-2 md:pb-1 md:text-right md:text-[0.9375rem]">{aside}</p>}
      </Container>
    </div>
  );
}

/** Navy hero band used at the top of every sub page. */
export function PageHero({
  eyebrow,
  title,
  accent,
  lead,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  accent?: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="bg-navy text-white">
      <Container className="py-12 md:py-16">
        <p className="eyebrow mb-4 text-led">{eyebrow}</p>
        <h1 className="display text-[clamp(1.875rem,3.4vw,2.75rem)]">
          {title}
          {accent && <span className="text-led"> {accent}</span>}
        </h1>
        {lead && <p className="mt-4 max-w-3xl text-base leading-relaxed text-pretty text-on-navy-2 md:text-lg">{lead}</p>}
        {children}
      </Container>
    </section>
  );
}

export function Chip({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-ink/25 bg-white px-3 py-1 text-[0.8125rem] font-medium text-ink-2",
        className,
      )}
    >
      {children}
    </span>
  );
}
