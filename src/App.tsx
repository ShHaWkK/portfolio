import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { LanguageProvider } from './hooks/useLanguage'

import Sidebar        from './components/Sidebar'
import Hero           from './components/Hero'
import About          from './components/About'
import Skills         from './components/Skills'
import Experience     from './components/Experience'
import WebServices    from './components/WebServices'
import Showcase       from './components/Showcase'
import Projects       from './components/Projects'
import Blog           from './components/Blog'
import Certifications from './components/Certifications'
import Publications   from './components/Publications'
import Technologies   from './components/Technologies'
import Contact        from './components/Contact'
import Footer         from './components/Footer'
import WebPage        from './pages/WebPage'

function PortfolioPage() {
  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])

  return (
    <div className="flex min-h-screen bg-[#0D1117] transition-colors duration-300">
      <Sidebar />

      <div className="flex-1 md:ml-[220px] min-w-0">
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <WebServices />
          <Showcase />
          <Projects />
          <Blog />
          <Certifications />
          <Technologies />
          <Publications />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/"    element={<PortfolioPage />} />
          <Route path="/web" element={<WebPage />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App
