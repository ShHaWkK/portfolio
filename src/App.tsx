import { useState, useEffect } from 'react'
import './App.css'

import Navbar         from './components/Navbar'
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
    <div className="min-h-screen bg-background transition-colors duration-300">
      <Navbar theme={theme} toggleTheme={toggleTheme} />

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
  )
}

function App() {
  return <AppContent />
}

export default App
