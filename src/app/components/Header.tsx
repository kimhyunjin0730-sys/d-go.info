import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import { cn } from "./ui/utils";

const NAV_LINKS = [
  { path: "/", label: "홈" },
  { path: "/product", label: "제품" },
  { path: "/technology", label: "기술" },
  { path: "/dashboard", label: "대시보드" },
  { path: "/manual", label: "매뉴얼" },
  { path: "/purchase", label: "구매" },
  { path: "/support", label: "문의" },
];

export function BrandLockup({ tone = "light", className }: { tone?: "light" | "dark"; className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <img src="/logo/dgo-mark-96.png" alt="" width={40} height={40} className="h-9 w-9" />
      <span className="flex flex-col leading-none">
        <span className={cn("display text-[1.375rem] tracking-[0.02em]", tone === "light" ? "text-key" : "text-white")}>D-GO</span>
        <span className={cn("mt-0.5 text-[0.6875rem] font-medium tracking-[0.01em]", tone === "light" ? "text-ink-2" : "text-on-navy-2")}>
          Quantum Data Vault
        </span>
      </span>
    </span>
  );
}

export default function Header() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    cn(
      "relative inline-flex min-h-11 items-center px-3 text-[0.9375rem] font-medium transition-colors duration-200",
      isActive
        ? "text-navy after:absolute after:inset-x-3 after:bottom-0 after:h-[3px] after:rounded-full after:bg-key"
        : "text-ink-2 hover:text-navy",
    );

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[68px] w-full max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" aria-label="D-GO Quantum Data Vault 홈" className="rounded-md">
          <BrandLockup />
        </Link>

        <nav aria-label="주요 메뉴" className="hidden h-full items-stretch md:flex">
          {NAV_LINKS.map((l) => (
            <NavLink key={l.path} to={l.path} end={l.path === "/"} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/purchase"
          className="hidden min-h-10 items-center rounded-[10px] bg-key px-4 text-sm font-semibold text-white transition-colors duration-200 hover:bg-key-hover md:inline-flex"
        >
          도입 문의
        </Link>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          className="-mr-2 grid h-11 w-11 cursor-pointer place-items-center rounded-lg text-navy md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="주요 메뉴" className="border-t border-line bg-white md:hidden">
          <ul className="mx-auto flex max-w-[1200px] flex-col px-4 py-3 sm:px-6">
            {NAV_LINKS.map((l) => (
              <li key={l.path}>
                <NavLink
                  to={l.path}
                  end={l.path === "/"}
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
                to="/purchase"
                className="flex min-h-12 items-center justify-center rounded-[10px] bg-key text-base font-semibold text-white"
              >
                도입 문의
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
