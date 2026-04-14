import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Product from './pages/Product.jsx'
import Manual from './pages/Manual.jsx'
import Purchase from './pages/Purchase.jsx'
import Support from './pages/Support.jsx'

function App() {
  return (
    <div className="app-container">
      <a href="#main" className="skip-link">메인 콘텐츠로 건너뛰기</a>
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/manual" element={<Manual />} />
          <Route path="/purchase" element={<Purchase />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
