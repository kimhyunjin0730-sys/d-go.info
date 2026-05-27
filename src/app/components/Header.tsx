import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "홈" },
    { path: "/product", label: "제품" },
    { path: "/technology", label: "기술" },
    { path: "/dashboard", label: "대시보드" },
    { path: "/manual", label: "매뉴얼" },
    { path: "/purchase", label: "구매" },
    { path: "/support", label: "문의" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[var(--bg-overlay)] border-b border-[var(--border-hairline)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <img src="/logo/dgo-icon.png" alt="D-GO" className="h-11 w-auto object-contain" />
            <span className="text-2xl font-bold text-gradient-cyan">D-GO</span>
            <span className="hidden lg:inline text-base font-medium text-[var(--text-secondary)]">Quantum Vault</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                  isActive(link.path)
                    ? "bg-[var(--accent-cyan-soft)] text-[var(--accent-cyan)]"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              to="/event"
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
                isActive("/event")
                  ? "border-[var(--accent-cyan)] bg-[var(--accent-cyan-soft)] text-[var(--accent-cyan)]"
                  : "border-[var(--accent-cyan)]/40 text-[var(--accent-cyan)] hover:bg-[var(--accent-cyan-soft)]"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-cyan)] animate-pulse"></span>
              이벤트
            </Link>
            <a
              href="mailto:biz@boanlinks.com"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[var(--accent-cyan)] text-[var(--bg-primary)] font-medium text-sm hover:opacity-90 transition-opacity"
            >
              문의하기
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-[var(--bg-elevated)] transition-colors"
            aria-label="메뉴"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-[var(--border-hairline)]">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm transition-all duration-200 ${
                    isActive(link.path)
                      ? "bg-[var(--accent-cyan-soft)] text-[var(--accent-cyan)]"
                      : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/event"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-lg border border-[var(--accent-cyan)]/40 text-[var(--accent-cyan)] font-medium text-sm text-center"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-cyan)] animate-pulse"></span>
                이벤트
              </Link>
              <a
                href="mailto:biz@boanlinks.com"
                className="px-4 py-3 rounded-lg bg-[var(--accent-cyan)] text-[var(--bg-primary)] font-medium text-sm text-center"
              >
                문의하기
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
