import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import './App.css'

// Import du sélecteur de langue
import LanguageSwitcher from './components/LanguageSwitcher'

// Components
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Publications from './components/Publications'
import Technologies from './components/Technologies'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [theme, setTheme] = useState(() => {
    // Check if theme is stored in localStorage
    const savedTheme = localStorage.getItem('theme')
    // Return saved theme or default to 'dark'
    return savedTheme || 'dark'
  })

  useEffect(() => {
    // Update localStorage when theme changes
    localStorage.setItem('theme', theme)
    // Update document class for Tailwind dark mode
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Sélecteur de langue */}
      <div className="fixed top-5 right-20 z-50">
        <LanguageSwitcher />
      </div>
      
      {/* Bouton de thème */}
      <button 
        onClick={toggleTheme} 
        className="fixed top-5 right-5 z-50 p-2 rounded-full bg-background border border-gray-700 hover:border-neon-blue transition-all duration-300"
        aria-label={theme === 'dark' ? 'Activer le mode clair' : 'Activer le mode sombre'}
      >
        {theme === 'dark' ? (
          <Sun className="w-6 h-6 text-neon-blue" />
        ) : (
          <Moon className="w-6 h-6 text-neon-purple" />
        )}
      </button>

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Technologies />
        <Publications />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
