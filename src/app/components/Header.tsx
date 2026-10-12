import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { cn } from "./ui/utils";
import LanguagePicker from "./LanguagePicker";
import { PAGE_SLUGS } from "../i18n/config";
import { useLocale } from "../i18n/useLocale";

/**
 * Official lockup artwork from the 2026 collateral (marketing/그래픽).
 * The wordmark is part of the image — the logo's G is drawn, not typeset.
 */
export function BrandLockup({ tone = "light", className }: { tone?: "light" | "dark"; className?: string }) {
  const dark = tone === "dark";
  return (
    <img
      src={dark ? "/logo/dgo-lockup-dark.png" : "/logo/dgo-lockup.png"}
      srcSet={
        dark
          ? "/logo/dgo-lockup-dark-300.png 300w, /logo/dgo-lockup-dark.png 600w"
          : "/logo/dgo-lockup-300.png 300w, /logo/dgo-lockup.png 600w"
      }
      sizes="180px"
      width={600}
      height={dark ? 175 : 176}
      alt="D-GO Quantum Data Vault"
      className={cn("h-11 w-auto", className)}
    />
  );
}

export default function Header() {
  const { pathname } = useLocation();
  const { common, path } = useLocale();
  const links = PAGE_SLUGS.map((slug, index) => ({ path: path(slug ? `/${slug}` : "/"), label: common.nav[index], home: !slug }));
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      "relative inline-flex min-h-11 items-center px-2 text-[0.875rem] font-medium transition-colors duration-200",
      isActive
        ? "text-navy after:absolute after:inset-x-3 after:bottom-0 after:h-[3px] after:rounded-full after:bg-key"
        : "text-ink-2 hover:text-navy",
    );

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[68px] w-full max-w-[1440px] items-center justify-between gap-2 px-4 sm:px-6 lg:px-8">
        <Link to={path("/")} aria-label={`D-GO — ${common.nav[0]}`} className="rounded-md">
          <BrandLockup className="h-auto w-[112px] shrink-0 sm:w-[150px]" />
        </Link>

        <nav aria-label={common.navigation} className="hidden h-full items-stretch xl:flex">
          {links.map((l) => (
            <NavLink key={l.path} to={l.path} end={l.home} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to={path("/purchase")}
          className="hidden min-h-10 items-center rounded-[10px] bg-key px-4 text-sm font-semibold text-white transition-colors duration-200 hover:bg-key-hover xl:inline-flex"
        >
          {common.sales}
        </Link>

        <LanguagePicker />

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? common.closeMenu : common.openMenu}
          className="-mr-2 grid h-11 w-11 cursor-pointer place-items-center rounded-lg text-navy xl:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label={common.navigation} className="border-t border-line bg-white xl:hidden">
          <ul className="mx-auto flex max-w-[1200px] flex-col px-4 py-3 sm:px-6">
            {links.map((l) => (
              <li key={l.path}>
                <NavLink
                  to={l.path}
                  end={l.home}
                  className={({ isActive }) =>
                    cn(
                      "flex min-h-12 items-center border-b border-line text-base font-medium",
                      isActive ? "text-key" : "text-ink",
                    )
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-4 pb-2">
              <Link
                to={path("/purchase")}
                className="flex min-h-12 items-center justify-center rounded-[10px] bg-key text-base font-semibold text-white"
              >
                {common.sales}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
