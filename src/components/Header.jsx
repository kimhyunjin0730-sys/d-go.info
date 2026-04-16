import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Mail } from 'lucide-react'
import { useState, useEffect } from 'react'

const navItems = [
  { name: 'Product',     path: '/product' },
  { name: 'Technology',  path: '/technology' },
  { name: 'Dashboard',   path: '/dashboard' },
  { name: 'Manual',      path: '/manual' },
  { name: 'Purchase',    path: '/purchase' },
  { name: 'Contact',     path: '/support' },
]

const Header = () => {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          zIndex: 1000,
          padding: scrolled ? '0.75rem 0' : '1.1rem 0',
          background: scrolled ? 'rgba(15, 23, 42, 0.78)' : 'rgba(15, 23, 42, 0.45)',
          backdropFilter: 'blur(16px) saturate(160%)',
          WebkitBackdropFilter: 'blur(16px) saturate(160%)',
          borderBottom: `1px solid ${scrolled ? 'rgba(148, 163, 184, 0.12)' : 'transparent'}`,
          transition: 'padding 220ms var(--ease-out), background 220ms var(--ease-out), border-color 220ms var(--ease-out)',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              color: 'var(--text-primary)',
              flexShrink: 0,
            }}
          >
            <div
              aria-hidden
              style={{
                width: 34,
                height: 34,
                borderRadius: 10,
                background: 'linear-gradient(135deg, #0B1226 0%, #1E293B 100%)',
                border: '1px solid rgba(34, 211, 238, 0.35)',
                display: 'grid',
                placeItems: 'center',
                boxShadow: '0 0 24px rgba(34, 211, 238, 0.25), inset 0 1px 0 rgba(255,255,255,0.05)',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22D3EE" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2 4 6v6c0 5 3.5 9.5 8 10 4.5-.5 8-5 8-10V6l-8-4z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '1.15rem',
                letterSpacing: '0.04em',
              }}
            >
              D-GO <span style={{ color: 'var(--accent-cyan)' }}>VAULT</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="nav-desktop" style={{ display: 'flex', gap: '1.75rem', alignItems: 'center' }}>
            {navItems.map((item) => {
              const isActive = location.pathname === item.path
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    letterSpacing: '0.02em',
                    color: isActive ? 'var(--accent-cyan)' : 'var(--text-dim)',
                    position: 'relative',
                    padding: '4px 0',
                    transition: 'color 220ms var(--ease-out)',
                  }}
                  onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = 'var(--text-primary)' }}
                  onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = 'var(--text-dim)' }}
                >
                  {item.name}
                  {isActive && (
                    <span
                      aria-hidden
                      style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        bottom: -6,
                        height: 2,
                        background: 'var(--accent-cyan)',
                        boxShadow: '0 0 12px rgba(34,211,238,0.6)',
                      }}
                    />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* CTA desktop */}
          <a
            href="mailto:biz@boanlinks.com?subject=%5BD-GO%20Vault%5D%20%EB%8F%84%EC%9E%85%20%EB%AC%B8%EC%9D%98"
            className="nav-desktop btn btn-primary"
            style={{ minHeight: 42, padding: '0.6rem 1.15rem', fontSize: '0.82rem' }}
          >
            <Mail size={15} strokeWidth={2.4} />
            문의하기
          </a>

          {/* Mobile burger */}
          <button
            className="nav-burger"
            aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            style={{
              display: 'none',
              width: 44,
              height: 44,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 12,
              border: '1px solid rgba(148, 163, 184, 0.22)',
              background: 'rgba(17, 27, 48, 0.6)',
              color: 'var(--text-primary)',
              backdropFilter: 'blur(10px)',
            }}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        role="dialog"
        aria-modal="true"
        aria-hidden={!menuOpen}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 999,
          background: 'rgba(10, 15, 30, 0.96)',
          backdropFilter: 'blur(20px) saturate(160%)',
          WebkitBackdropFilter: 'blur(20px) saturate(160%)',
          display: menuOpen ? 'flex' : 'none',
          flexDirection: 'column',
          padding: '5.5rem 1.25rem 2rem',
          gap: '0.5rem',
        }}
      >
        {navItems.map((item, i) => {
          const isActive = location.pathname === item.path
          return (
            <Link
              key={item.path}
              to={item.path}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '1.15rem 1.25rem',
                borderRadius: 16,
                border: `1px solid ${isActive ? 'rgba(34,211,238,0.35)' : 'rgba(148,163,184,0.12)'}`,
                background: isActive ? 'rgba(34, 211, 238, 0.08)' : 'rgba(17, 27, 48, 0.55)',
                color: isActive ? 'var(--accent-cyan)' : 'var(--text-primary)',
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '1.1rem',
                letterSpacing: '0.01em',
                animation: menuOpen ? `fadeUp 0.5s var(--ease-out) ${i * 0.05 + 0.05}s backwards` : 'none',
              }}
            >
              <span>{item.name}</span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  letterSpacing: '0.1em',
                  color: 'var(--text-muted)',
                }}
              >
                0{i + 1}
              </span>
            </Link>
          )
        })}

        <a
          href="mailto:biz@boanlinks.com?subject=%5BD-GO%20Vault%5D%20%EB%8F%84%EC%9E%85%20%EB%AC%B8%EC%9D%98"
          className="btn btn-primary"
          style={{ marginTop: '1rem' }}
        >
          <Mail size={16} strokeWidth={2.4} />
          biz@boanlinks.com
        </a>
      </div>
    </>
  )
}

export default Header
