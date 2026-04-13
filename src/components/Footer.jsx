const Footer = () => {
  return (
    <footer style={{
      padding: '4rem 0',
      background: 'var(--color-bg-secondary)',
      borderTop: '1px solid var(--glass-border)',
      color: 'var(--color-text-dim)',
      fontSize: '0.9rem'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          <div>
            <h3 style={{ color: 'var(--color-text)', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>D-GO</h3>
            <p>No Data Server, Data Vault.<br />대한민국 보안의 새로운 표준.</p>
          </div>
          <div>
            <h4 style={{ color: 'var(--color-text)', marginBottom: '1.2rem' }}>Links</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li><a href="/product">제품 소개</a></li>
              <li><a href="/manual">매뉴얼 & 다운로드</a></li>
              <li><a href="/support">문의 센터</a></li>
            </ul>
          </div>
          <div>
            <h4 style={{ color: 'var(--color-text)', marginBottom: '1.2rem' }}>Contact</h4>
            <p style={{ marginBottom: '0.5rem' }}>E-mail: support@d-go.info</p>
            <p>평일 09:00 – 18:00 (공휴일 휴무)</p>
          </div>
        </div>
        
        <div style={{
          paddingTop: '2rem',
          borderTop: '1px solid var(--glass-border)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <p>© 2026 D-GO. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href="#">개인정보처리방침</a>
            <a href="#">이용약관</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
