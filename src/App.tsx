import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'
import { IntlayerProviderContent, useIntlayer } from 'react-intlayer'
import { Locales } from 'intlayer'
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

function AppContent() {
  const [theme, setTheme] = useState(() => {
    // Check if theme is stored in localStorage
    const savedTheme = localStorage.getItem('theme')
    // Return saved theme or default to 'dark'
    return savedTheme || 'dark'
  })

  const content = useIntlayer("common")

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
        aria-label={theme === 'dark' ? content.theme.light : content.theme.dark}
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

function App() {
  // Récupérer la langue depuis l'URL si présente
  const getInitialLocale = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const langParam = urlParams.get('lang');
    
    // Convertir le paramètre de langue en valeur Locales
    switch(langParam) {
      case 'en': return Locales.ENGLISH;
      case 'es': return Locales.SPANISH;
      case 'de': return Locales.GERMAN;
      case 'ru': return Locales.RUSSIAN;
      case 'fr':
      default: return Locales.FRENCH; // Défaut à français si non spécifié
    }
  };

  return (
    <IntlayerProviderContent defaultLocale={getInitialLocale()}>
      <AppContent />
    </IntlayerProviderContent>
  );
}

export default App
