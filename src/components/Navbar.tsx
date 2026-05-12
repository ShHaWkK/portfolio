import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Moon, Sun, Menu, X, Globe, ExternalLink, Shield } from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'
import type { Language } from '../hooks/useLanguage'

const NAV_SECTIONS = [
  { id: 'about',        label: 'About' },
  { id: 'skills',       label: 'Skills' },
  { id: 'experience',   label: 'Experience' },
  { id: 'projects',     label: 'Projects' },
  { id: 'blog',         label: 'Blog' },
  { id: 'contact',      label: 'Contact' },
]

interface NavbarProps {
  theme: string
  toggleTheme: () => void
}

const Navbar = ({ theme, toggleTheme }: NavbarProps) => {
  const [activeSection, setActiveSection] = useState('hero')
  const [mobileOpen, setMobileOpen]       = useState(false)
  const [scrolled, setScrolled]           = useState(false)
  const [langOpen, setLangOpen]           = useState(false)
  const { scrollYProgress }               = useScroll()
  const scaleX                            = useTransform(scrollYProgress, [0, 1], [0, 1])
  const { language, setLanguage } = useLanguage()

  const langs: { code: Language; label: string; flag: string }[] = [
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'en', label: 'English',  flag: '🇬🇧' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    const sectionIds = ['hero', ...NAV_SECTIONS.map(s => s.id)]

    sectionIds.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[60] h-[2px] origin-left"
        style={{
          scaleX,
          background: 'linear-gradient(90deg, #00E5FF, #9A4DFF, #00FF9D)',
        }}
      />

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-[2px] left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0A0E17]/90 backdrop-blur-xl border-b border-neon-blue/20 shadow-[0_4px_30px_rgba(0,229,255,0.08)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <motion.button
              onClick={() => scrollTo('hero')}
              className="flex items-center gap-2 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 border border-neon-blue rounded-sm animate-pulse-slow opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-neon-blue" />
                </div>
              </div>
              <span className="font-code text-sm font-bold">
                <span className="text-neon-blue">Alexandre</span>
                <span className="text-white">.UZAN</span>
              </span>
            </motion.button>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_SECTIONS.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="relative px-3 py-2 font-code text-xs uppercase tracking-widest transition-colors duration-200 group"
                >
                  <span className={activeSection === id ? 'text-neon-blue' : 'text-gray-400 group-hover:text-white'}>
                    {label}
                  </span>
                  {activeSection === id && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-0 right-0 h-[1px] bg-neon-blue"
                      style={{ boxShadow: '0 0 6px #00E5FF' }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Right controls */}
            <div className="hidden md:flex items-center gap-2">
              {/* ajmtech.fr */}
              <motion.a
                href="https://ajmtech.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 font-code text-xs border border-neon-purple/50 text-neon-purple hover:border-neon-purple hover:bg-neon-purple/10 transition-all duration-200 rounded-sm"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <Globe className="w-3 h-3" />
                ajmtech.fr
                <ExternalLink className="w-3 h-3 opacity-60" />
              </motion.a>

              {/* Language picker */}
              <div className="relative">
                <button
                  onClick={() => setLangOpen(v => !v)}
                  className="px-3 py-1.5 font-code text-xs border border-gray-700 text-gray-400 hover:border-gray-500 hover:text-white transition-all duration-200 rounded-sm uppercase"
                >
                  {language?.toUpperCase() ?? 'FR'}
                </button>
                <AnimatePresence>
                  {langOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -4, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -4, scale: 0.96 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 top-full mt-1 bg-[#0A0E17] border border-gray-700 rounded-sm min-w-[120px] overflow-hidden z-50"
                    >
                      {langs.map(l => (
                        <button
                          key={l.code}
                          onClick={() => { setLanguage(l.code); setLangOpen(false) }}
                          className={`w-full flex items-center gap-2 px-3 py-2 font-code text-xs hover:bg-neon-blue/10 transition-colors ${
                            language === l.code ? 'text-neon-blue' : 'text-gray-400'
                          }`}
                        >
                          <span>{l.flag}</span>
                          <span>{l.label}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Theme toggle */}
              <motion.button
                onClick={toggleTheme}
                className="p-2 border border-gray-700 hover:border-neon-blue/60 text-gray-400 hover:text-neon-blue transition-all duration-200 rounded-sm"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.92 }}
                aria-label="Toggle theme"
              >
                {theme === 'dark'
                  ? <Sun className="w-4 h-4" />
                  : <Moon className="w-4 h-4" />}
              </motion.button>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(v => !v)}
              className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="fixed top-[18px] left-0 right-0 z-40 bg-[#0A0E17]/95 backdrop-blur-xl border-b border-neon-blue/20 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
              {NAV_SECTIONS.map(({ id, label }, i) => (
                <motion.button
                  key={id}
                  onClick={() => scrollTo(id)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className={`text-left px-4 py-3 font-code text-sm uppercase tracking-widest border-l-2 transition-all duration-200 ${
                    activeSection === id
                      ? 'border-neon-blue text-neon-blue bg-neon-blue/5'
                      : 'border-transparent text-gray-400 hover:text-white hover:border-gray-600'
                  }`}
                >
                  {label}
                </motion.button>
              ))}
              <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-800">
                <a
                  href="https://ajmtech.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 font-code text-xs border border-neon-purple/50 text-neon-purple rounded-sm"
                >
                  <Globe className="w-3 h-3" /> ajmtech.fr
                </a>
                <button
                  onClick={toggleTheme}
                  className="p-2 border border-gray-700 text-gray-400 rounded-sm"
                >
                  {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Click-outside to close lang dropdown */}
      {langOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setLangOpen(false)} />
      )}
    </>
  )
}

export default Navbar
