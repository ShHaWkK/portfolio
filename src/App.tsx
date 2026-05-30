import { useState, useEffect } from 'react'
import './App.css'

import Sidebar        from './components/Sidebar'
import Hero           from './components/Hero'
import About          from './components/About'
import Skills         from './components/Skills'
import Experience     from './components/Experience'
import Projects       from './components/Projects'
import Showcase       from './components/Showcase'
import Certifications from './components/Certifications'
import Publications   from './components/Publications'
import Technologies   from './components/Technologies'
import Blog           from './components/Blog'
import Contact        from './components/Contact'
import Footer         from './components/Footer'

function AppContent() {
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')

  useEffect(() => {
    localStorage.setItem('theme', theme)
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const toggleTheme = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'))

  return (
    <div className="flex min-h-screen bg-[#0D1117] transition-colors duration-300">
      <Sidebar theme={theme} toggleTheme={toggleTheme} />

      {/* Main content — offset by sidebar width on desktop */}
      <div className="flex-1 md:ml-[220px] min-w-0">
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
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
  return <AppContent />
}

export default App
