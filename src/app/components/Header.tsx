import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
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
  const [headerHeight, setHeaderHeight] = useState(69);
  const headerRef = useRef<HTMLElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1280px)");
    const closeOnDesktop = () => { if (desktop.matches) setOpen(false); };
    desktop.addEventListener("change", closeOnDesktop);
    const measure = () => {
      if (barRef.current) {
        const height = barRef.current.getBoundingClientRect().height;
        headerRef.current?.style.setProperty("--site-header-height", `${height}px`);
        setHeaderHeight(Math.ceil(height) + 1);
      }
    };
    const observer = new ResizeObserver(measure);
    if (barRef.current) observer.observe(barRef.current);
    measure();
    return () => { desktop.removeEventListener("change", closeOnDesktop); observer.disconnect(); };
  }, []);

  useEffect(() => {
    if (!open) return;
    const scroll = { x: window.scrollX, y: window.scrollY, route: window.location.pathname + window.location.search + window.location.hash };
    const body = document.body;
    const root = document.documentElement;
    const previous = { bodyOverflow: body.style.overflow, rootOverflow: root.style.overflow, paddingRight: body.style.paddingRight };
    const scrollbar = window.innerWidth - root.clientWidth;
    const padding = parseFloat(getComputedStyle(body).paddingRight) || 0;
    headerRef.current?.style.setProperty("--site-scrollbar-width", `${scrollbar}px`);
    body.style.paddingRight = `${padding + scrollbar}px`;
    body.style.overflow = "hidden";
    root.style.overflow = "hidden";
    const background = Array.from(document.querySelectorAll<HTMLElement>("main, footer"));
    const inert = background.map(element => element.inert);
    background.forEach(element => { element.inert = true; });
    const frame = requestAnimationFrame(() => menuRef.current?.querySelector<HTMLAnchorElement>("a")?.focus({ preventScroll: true }));
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") { event.preventDefault(); setOpen(false); }
      if (event.key === "Tab") {
        const controls = Array.from(headerRef.current?.querySelectorAll<HTMLElement>("a, button:not([tabindex='-1']), select") ?? []).filter(element => element.getClientRects().length > 0);
        const current = controls.indexOf(document.activeElement as HTMLElement);
        const next = controls[(current + (event.shiftKey ? -1 : 1) + controls.length) % controls.length];
        event.preventDefault();
        next?.focus({ preventScroll: true });
        const panel = menuRef.current;
        if (panel && next && panel.contains(next)) {
          const item = next.getBoundingClientRect();
          const bounds = panel.getBoundingClientRect();
          if (item.bottom > bounds.bottom) panel.scrollTop += item.bottom - bounds.bottom + 8;
          if (item.top < bounds.top) panel.scrollTop -= bounds.top - item.top + 8;
        }
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      cancelAnimationFrame(frame);
      body.style.overflow = previous.bodyOverflow;
      root.style.overflow = previous.rootOverflow;
      body.style.paddingRight = previous.paddingRight;
      background.forEach((element, index) => { element.inert = inert[index]; });
      document.removeEventListener("keydown", onKeyDown);
      if (window.matchMedia("(max-width: 1279px)").matches) toggleRef.current?.focus({ preventScroll: true });
      if (window.location.pathname + window.location.search + window.location.hash === scroll.route) window.scrollTo({left: scroll.x, top: scroll.y, behavior: "instant"});
    };
  }, [open]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    cn("relative inline-flex min-h-11 items-center px-2 text-[0.875rem] font-medium transition-colors duration-200",
      isActive ? "text-navy after:absolute after:inset-x-3 after:bottom-0 after:h-[3px] after:rounded-full after:bg-key" : "text-ink-2 hover:text-navy");

  return (
    <>
    {open && <div aria-hidden="true" style={{height: headerHeight}} />}
    <header ref={headerRef} className={cn("site-header top-0 z-50 border-b border-line bg-white", open ? "site-header--open" : "sticky")}>
      <div ref={barRef} className="site-header-bar mx-auto flex w-full max-w-[1440px] items-center gap-3 px-4 sm:px-6 lg:px-8">
        <Link to={path("/")} aria-label={`D-GO — ${common.nav[0]}`} onClick={() => setOpen(false)} className="shrink-0 rounded-md">
          <BrandLockup className="h-auto w-[112px] sm:w-[150px]" />
        </Link>
        <nav aria-label={common.navigation} className="ml-auto hidden h-full min-w-0 items-stretch xl:flex">
          {links.map(link => <NavLink key={link.path} to={link.path} end={link.home} className={linkClass}>{link.label}</NavLink>)}
        </nav>
        <div className="ml-auto flex shrink-0 items-center gap-2">
          <Link to={path("/purchase")} className="hidden min-h-10 items-center rounded-[10px] bg-key px-4 text-sm font-semibold text-white hover:bg-key-hover xl:inline-flex">{common.sales}</Link>
          <LanguagePicker />
          <button ref={toggleRef} type="button" onClick={() => setOpen(value => !value)} aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? common.closeMenu : common.openMenu} className="-mr-2 grid h-11 w-11 shrink-0 cursor-pointer place-items-center rounded-lg text-navy xl:hidden">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {open && <>
        <button type="button" tabIndex={-1} onClick={() => setOpen(false)} aria-label={common.closeMenu} className="site-nav-backdrop xl:hidden" />
        <nav ref={menuRef} id="mobile-nav" aria-label={common.navigation} className="site-mobile-nav xl:hidden">
          <ul className="site-mobile-links">
            {links.map(link => <li key={link.path}><NavLink to={link.path} end={link.home} onClick={() => setOpen(false)} className={({ isActive }) => cn("site-mobile-link", isActive ? "bg-mist text-key" : "text-ink hover:bg-mist")}>{link.label}</NavLink></li>)}
            <li className="site-mobile-sales"><Link to={path("/purchase")} onClick={() => setOpen(false)} className="flex min-h-12 items-center justify-center rounded-[10px] bg-key px-4 py-2 text-center text-base font-semibold text-white">{common.sales}</Link></li>
          </ul>
        </nav>
      </>}
    </header>
    </>
  );
}
