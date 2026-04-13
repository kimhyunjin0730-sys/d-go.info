import { Link, useLocation } from 'react-router-dom'
import { Shield } from 'lucide-react'

const Header = () => {
  const location = useLocation()

  const navItems = [
    { name: '제품소개', path: '/product' },
    { name: '매뉴얼/다운로드', path: '/manual' },
    { name: '구매하기', path: '/purchase' },
    { name: '문의센터', path: '/support' },
  ]

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      padding: '1.25rem 0',
      background: 'rgba(8, 12, 20, 0.85)',
      backdropFilter: 'blur(14px)',
      WebkitBackdropFilter: 'blur(14px)',
      borderBottom: '1px solid rgba(0, 255, 200, 0.08)'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link to="/" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          fontSize: '1.35rem',
          fontWeight: 800,
          fontFamily: 'var(--font-heading)',
          letterSpacing: '0.08em',
          color: 'var(--color-primary)'
        }}>
          <div style={{
            width: '36px',
            height: '36px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #00ffc8, #00d4ff)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 20px rgba(0, 255, 200, 0.4)'
          }}>
            <Shield size={20} color="#080c14" strokeWidth={2.5} />
          </div>
          <span>D-GO</span>
        </Link>

        <nav style={{ display: 'flex', gap: '2.5rem' }}>
          {navItems.map((item) => {
            const isActive = location.pathname === item.path
            return (
              <Link
                key={item.path}
                to={item.path}
                style={{
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  position: 'relative',
                  color: isActive ? 'var(--color-primary)' : 'var(--color-text-dim)',
                  transition: 'var(--transition-smooth)',
                  textShadow: isActive ? '0 0 12px rgba(0, 255, 200, 0.5)' : 'none'
                }}
                onMouseOver={(e) => (e.currentTarget.style.color = 'var(--color-primary)')}
                onMouseOut={(e) => (e.currentTarget.style.color = isActive ? 'var(--color-primary)' : 'var(--color-text-dim)')}
              >
                {item.name}
              </Link>
            )
          })}
        </nav>

        <div style={{ display: 'flex', gap: '1rem', fontSize: '0.8rem', fontWeight: 700, fontFamily: 'var(--font-heading)', letterSpacing: '0.05em' }}>
          <button style={{ color: 'var(--color-primary)' }}>KO</button>
          <span style={{ color: 'var(--color-text-muted)' }}>|</span>
          <button style={{ color: 'var(--color-text-muted)' }}>EN</button>
        </div>
      </div>
    </header>
  )
}

export default Header
