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
      padding: '1.5rem 0',
      background: 'rgba(5, 5, 5, 0.8)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--glass-border)'
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
          fontSize: '1.5rem',
          fontWeight: 800,
          fontFamily: 'var(--font-heading)',
          color: 'var(--color-primary)'
        }}>
          <Shield size={32} />
          <span>D-GO</span>
        </Link>

        <nav style={{ display: 'flex', gap: '2.5rem' }}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              style={{
                fontSize: '0.95rem',
                fontWeight: 600,
                color: location.pathname === item.path ? 'var(--color-primary)' : 'var(--color-text-dim)',
                transition: 'var(--transition-smooth)'
              }}
              onMouseOver={(e) => (e.target.style.color = 'var(--color-primary)')}
              onMouseOut={(e) => (e.target.style.color = location.pathname === item.path ? 'var(--color-primary)' : 'var(--color-text-dim)')}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem', fontWeight: 600 }}>
          <button style={{ color: 'var(--color-primary)' }}>KO</button>
          <span style={{ color: 'var(--color-text-dim)' }}>|</span>
          <button style={{ color: 'var(--color-text-dim)' }}>EN</button>
        </div>
      </div>
    </header>
  )
}

export default Header
