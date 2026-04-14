import { Link, useLocation } from 'react-router-dom'
import { Shield, Menu, X } from 'lucide-react'
import { useState, useEffect } from 'react'

const Header = () => {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { name: '제품소개', path: '/product' },
    { name: '매뉴얼/다운로드', path: '/manual' },
    { name: '구매하기', path: '/purchase' },
    { name: '문의센터', path: '/support' },
  ]

  // Close menu on route change
  useEffect(() => { setMenuOpen(false) }, [location.pathname])

  // Lock body scroll while menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        padding: '1rem 0',
        background: 'rgba(238, 242, 247, 0.82)',
        backdropFilter: 'blur(14px) saturate(180%)',
        WebkitBackdropFilter: 'blur(14px) saturate(180%)',
        borderBottom: '1px solid rgba(15, 26, 46, 0.08)'
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '1rem'
        }}>
          <Link to="/" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            fontSize: 'clamp(1.1rem, 3vw, 1.35rem)',
            fontWeight: 800,
            fontFamily: 'var(--font-heading)',
            letterSpacing: '0.08em',
            color: 'var(--color-ink)',
            flexShrink: 0
          }}>
            <div style={{
              width: '34px',
              height: '34px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #0f1a2e, #1a2a45)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 6px 16px rgba(15, 26, 46, 0.25), 0 0 20px rgba(0, 255, 200, 0.18)'
            }}>
              <Shield size={18} color="#00ffc8" strokeWidth={2.5} />
            </div>
            <span>D-GO</span>
          </Link>

          {/* Desktop nav */}
          <nav className="nav-desktop" style={{ display: 'flex', gap: '2.25rem', alignItems: 'center' }}>
            {navItems.map((item) => {
              const isActive = location.pathname === item.path
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  style={{
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: isActive ? 'var(--color-ink)' : 'var(--color-text-dim)',
                    transition: 'var(--transition-smooth)',
                    borderBottom: isActive ? '2px solid var(--color-primary)' : '2px solid transparent',
                    paddingBottom: '2px'
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.color = 'var(--color-ink)')}
                  onMouseOut={(e) => (e.currentTarget.style.color = isActive ? 'var(--color-ink)' : 'var(--color-text-dim)')}
                >
                  {item.name}
                </Link>
              )
            })}
          </nav>

          {/* Desktop lang */}
          <div className="lang-desktop" style={{
            display: 'flex',
            gap: '0.75rem',
            fontSize: '0.78rem',
            fontWeight: 700,
            fontFamily: 'var(--font-heading)',
            letterSpacing: '0.08em'
          }}>
            <button style={{ color: 'var(--color-ink)' }}>KO</button>
            <span style={{ color: 'var(--color-text-muted)' }}>|</span>
            <button style={{ color: 'var(--color-text-muted)' }}>EN</button>
          </div>

          {/* Mobile burger */}
          <button
            className="nav-burger"
            aria-label={menuOpen ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            style={{
              display: 'none',
              width: '44px',
              height: '44px',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '10px',
              border: '1px solid rgba(15, 26, 46, 0.15)',
              background: 'rgba(255, 255, 255, 0.6)',
              color: 'var(--color-ink)'
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
        className="nav-drawer"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 999,
          background: 'rgba(238, 242, 247, 0.97)',
          backdropFilter: 'blur(20px) saturate(160%)',
          WebkitBackdropFilter: 'blur(20px) saturate(160%)',
          display: menuOpen ? 'flex' : 'none',
          flexDirection: 'column',
          alignItems: 'stretch',
          justifyContent: 'center',
          padding: '5rem 2rem 3rem',
          gap: '0.5rem'
        }}
      >
        {navItems.map((item, i) => {
          const isActive = location.pathname === item.path
          return (
            <Link
              key={item.path}
              to={item.path}
              style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                fontFamily: 'var(--font-heading)',
                letterSpacing: '0.02em',
                padding: '1.1rem 1.25rem',
                borderRadius: '14px',
                border: '1px solid rgba(15, 26, 46, 0.1)',
                color: isActive ? 'var(--color-ink)' : 'var(--color-text-dim)',
                background: isActive ? 'rgba(0, 168, 143, 0.08)' : 'rgba(255, 255, 255, 0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                animation: menuOpen ? `fadeIn 0.5s ease ${i * 0.06 + 0.1}s backwards` : 'none'
              }}
            >
              <span>{item.name}</span>
              <span style={{
                fontSize: '0.72rem',
                letterSpacing: '0.18em',
                color: 'var(--color-text-muted)'
              }}>
                0{i + 1}
              </span>
            </Link>
          )
        })}
        <div style={{
          marginTop: '2rem',
          paddingTop: '1.5rem',
          borderTop: '1px solid rgba(15, 26, 46, 0.1)',
          display: 'flex',
          gap: '1rem',
          fontSize: '0.8rem',
          fontWeight: 700,
          fontFamily: 'var(--font-heading)',
          letterSpacing: '0.08em',
          justifyContent: 'center'
        }}>
          <button style={{ color: 'var(--color-primary)' }}>KO</button>
          <span style={{ color: 'var(--color-text-muted)' }}>|</span>
          <button style={{ color: 'var(--color-text-muted)' }}>EN</button>
        </div>
      </div>
    </>
  )
}

export default Header
