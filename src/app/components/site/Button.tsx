import type { ReactNode } from "react";
import { Link } from "react-router";
import { cn } from "../ui/utils";

type Variant = "primary" | "secondary" | "onNavy" | "onNavyGhost";

const variants: Record<Variant, string> = {
  primary: "bg-key text-white hover:bg-key-hover",
  secondary: "border border-navy/30 bg-white text-navy hover:border-navy hover:bg-mist",
  onNavy: "bg-white text-navy hover:bg-panel",
  onNavyGhost: "border border-white/40 text-white hover:border-white hover:bg-white/10",
};

const base =
  "inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-[10px] px-5 text-[0.9375rem] font-semibold whitespace-nowrap transition-colors duration-200";

export function buttonClass(variant: Variant = "primary", className?: string) {
  return cn(base, variants[variant], className);
}

export function ButtonLink({
  to,
  href,
  variant = "primary",
  external = false,
  className,
  children,
}: {
  to?: string;
  href?: string;
  variant?: Variant;
  /** Opens in a new tab — for links that leave the site. */
  external?: boolean;
  className?: string;
  children: ReactNode;
}) {
  const cls = buttonClass(variant, className);
  if (to) {
    return (
      <Link to={to} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={cls} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
      {children}
    </a>
  );
}
