import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import {
  Github, ExternalLink, Globe, Sun, Moon, Menu, X,
  User, Terminal, Briefcase, Code, BookOpen, Mail,
  Award, Cpu, ChevronRight, Shield, Layers,
} from 'lucide-react'
import { useLanguage } from '../hooks/useLanguage'
import type { Language } from '../hooks/useLanguage'

//  Typewriter 
function useTypewriter(words: string[], speed = 70, pause = 2000) {
  const [displayed, setDisplayed] = useState('')
  const [wordIdx, setWordIdx]     = useState(0)
  const [deleting, setDeleting]   = useState(false)

  useEffect(() => {
    const current = words[wordIdx] ?? ''
    let t: ReturnType<typeof setTimeout>
    if (!deleting && displayed.length < current.length) {
      t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), speed)
    } else if (!deleting && displayed.length === current.length) {
      t = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && displayed.length > 0) {
      t = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), speed / 2)
    } else {
      setDeleting(false)
      setWordIdx(i => (i + 1) % words.length)
    }
    return () => clearTimeout(t)
  }, [displayed, deleting, wordIdx, words, speed, pause])

  return displayed
}

//  Nav items ─
const NAV = [
  { id: 'hero',           label: 'Home',           icon: Shield },
  { id: 'about',          label: 'About',          icon: User },
  { id: 'skills',         label: 'Skills',         icon: Terminal },
  { id: 'experience',     label: 'Expérience',     icon: Briefcase },
  { id: 'showcase',       label: 'Showcase',       icon: Layers },
  { id: 'projects',       label: 'Projets',        icon: Code },
  { id: 'blog',           label: 'Blog / CVE',     icon: BookOpen },
  { id: 'certifications', label: 'Certifications', icon: Award },
  { id: 'technologies',   label: 'Technologies',   icon: Cpu },
  { id: 'contact',        label: 'Contact',        icon: Mail },
]

const ROLES = ['Cybersecurity Student', 'CTF Player', 'Pentester', 'Freelance Dev']

//  Inner sidebar (shared desktop + mobile) ─
interface InnerProps {
  activeSection: string
  scrollTo: (id: string) => void
  typedRole: string
  scaleX: ReturnType<typeof useTransform<number, number>>
  theme: string
  toggleTheme: () => void
  language: Language
  setLanguage: (l: Language) => void
  onClose?: () => void
}

const SidebarInner = ({
  activeSection, scrollTo, typedRole, scaleX,
  theme, toggleTheme, language, setLanguage, onClose,
}: InnerProps) => (
  <div className="flex flex-col h-full select-none">

    {/*  Profile  */}
    <div className="px-5 pt-6 pb-5 border-b border-white/[0.05]">
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-gray-600 hover:text-gray-300 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      )}

      {/* Avatar */}
      <div className="relative w-14 h-14 mb-4">
        <div className="w-full h-full rounded-full overflow-hidden border border-neon-blue/30 bg-[#111827]">
          <img
            src="/images/me.png"
            alt="Alexandre UZAN"
            className="w-full h-full object-cover object-top"
            onError={e => { e.currentTarget.src = '/images/profile.svg' }}
          />
        </div>
        <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-neon-green border-2 border-[#07090D]" />
      </div>

      <p className="text-white font-semibold text-sm leading-none mb-1">Alexandre UZAN</p>
      <p className="font-code text-[11px] text-neon-blue min-h-[15px]">
        {typedRole}<span className="animate-blink">_</span>
      </p>
      <p className="font-code text-[9px] text-gray-600 mt-2 tracking-widest uppercase">
        Paris, France
      </p>
    </div>

    {/*  Navigation  */}
    <nav className="flex-1 py-3 overflow-y-auto">
      <p className="px-5 mb-1 font-code text-[9px] text-gray-700 tracking-widest uppercase">Navigation</p>
      {NAV.map(({ id, label, icon: Icon }) => {
        const active = activeSection === id
        return (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            className={`relative w-full flex items-center gap-3 px-5 py-2.5 font-code text-[11px] transition-all duration-150 group ${
              active
                ? 'text-neon-blue'
                : 'text-gray-500 hover:text-gray-200'
            }`}
          >
            {active && (
              <motion.div
                layoutId="sb-active"
                className="absolute left-0 top-1 bottom-1 w-[2px] bg-neon-blue rounded-r-full"
                style={{ boxShadow: '2px 0 8px rgba(0,229,255,0.5)' }}
              />
            )}
            <span
              className={`flex items-center justify-center w-5 h-5 rounded-sm transition-all duration-150 ${
                active ? 'bg-neon-blue/15 text-neon-blue' : 'text-gray-600 group-hover:text-gray-400'
              }`}
            >
              <Icon className="w-3 h-3" />
            </span>
            <span>{label}</span>
            {active && <ChevronRight className="w-2.5 h-2.5 ml-auto text-neon-blue/40" />}
          </button>
        )
      })}
    </nav>

    {/*  Footer  */}
    <div className="px-4 pb-5 pt-4 border-t border-white/[0.05] space-y-2.5">

      {/* ajmtech */}
      <a
        href="https://ajmtech.fr"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-3 py-2 font-code text-[10px] text-neon-purple border border-neon-purple/25 hover:border-neon-purple/50 hover:bg-neon-purple/8 transition-all duration-150 rounded-sm"
      >
        <Globe className="w-3 h-3" />
        <span>ajmtech.fr</span>
        <ExternalLink className="w-2.5 h-2.5 ml-auto opacity-50" />
      </a>

      {/* Social links */}
      <div className="flex gap-2">
        <a
          href="https://github.com/ShHaWkK"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-1.5 font-code text-[10px] text-gray-500 border border-gray-800/80 hover:border-gray-700 hover:text-white transition-all duration-150 rounded-sm"
        >
          <Github className="w-3 h-3" /> GitHub
        </a>
        <a
          href="https://pwn.college/hacker/ShHawk"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-1.5 font-code text-[10px] text-gray-500 border border-gray-800/80 hover:border-neon-green/40 hover:text-neon-green transition-all duration-150 rounded-sm"
        >
          <Terminal className="w-3 h-3" /> pwn
        </a>
      </div>

      {/* Controls */}
      <div className="flex gap-2">
        <button
          onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
          className="flex-1 py-1.5 font-code text-[10px] text-gray-500 border border-gray-800/80 hover:border-gray-700 hover:text-gray-300 transition-all duration-150 rounded-sm"
        >
          {language === 'fr' ? 'FR → EN' : 'EN → FR'}
        </button>
        <button
          onClick={toggleTheme}
          className="px-3 py-1.5 border border-gray-800/80 hover:border-gray-700 text-gray-500 hover:text-gray-300 transition-all duration-150 rounded-sm"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Scroll progress */}
      <div className="h-[2px] bg-gray-800/60 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-green origin-left"
          style={{ scaleX }}
        />
      </div>
    </div>
  </div>
)

//  Sidebar export ─
interface SidebarProps {
  theme: string
  toggleTheme: () => void
}

const Sidebar = ({ theme, toggleTheme }: SidebarProps) => {
  const [activeSection, setActiveSection] = useState('hero')
  const [mobileOpen, setMobileOpen]       = useState(false)
  const { language, setLanguage }         = useLanguage()
  const { scrollYProgress }               = useScroll()
  const scaleX                            = useTransform(scrollYProgress, [0, 1], [0, 1])
  const typedRole                         = useTypewriter(ROLES)

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    NAV.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) setActiveSection(id) },
        { rootMargin: '-25% 0px -65% 0px' }
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

  const innerProps: InnerProps = {
    activeSection, scrollTo, typedRole, scaleX,
    theme, toggleTheme, language, setLanguage,
  }

  return (
    <>
      {/*  Desktop sidebar  */}
      <aside className="hidden md:flex flex-col fixed left-0 top-0 h-screen w-[220px] bg-[#07090D] border-r border-white/[0.05] z-50">
        <SidebarInner {...innerProps} />
      </aside>

      {/*  Mobile hamburger  */}
      <button
        onClick={() => setMobileOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-[#07090D] border border-gray-800 text-gray-400 hover:text-white transition-colors rounded-sm"
        aria-label="Open menu"
      >
        <Menu className="w-4 h-4" />
      </button>

      {/*  Mobile drawer  */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              key="drawer"
              initial={{ x: -220 }}
              animate={{ x: 0 }}
              exit={{ x: -220 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="fixed left-0 top-0 h-screen w-[220px] bg-[#07090D] border-r border-white/[0.05] z-50 flex flex-col"
            >
              <SidebarInner {...innerProps} onClose={() => setMobileOpen(false)} />
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Sidebar
