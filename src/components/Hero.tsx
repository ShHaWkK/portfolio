import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Terminal, Shield, Code, Cpu, Globe, ExternalLink } from 'lucide-react'
import { useTranslation } from '../hooks/useLanguage'

// ── Typewriter hook ──────────────────────────────────────────────────────────
function useTypewriter(words: string[], speed = 80, pause = 1800) {
  const [displayed, setDisplayed] = useState('')
  const [wordIdx, setWordIdx]     = useState(0)
  const [deleting, setDeleting]   = useState(false)

  useEffect(() => {
    const current = words[wordIdx] ?? ''
    let timeout: ReturnType<typeof setTimeout>

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), speed)
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), speed / 2)
    } else if (deleting && displayed.length === 0) {
      setDeleting(false)
      setWordIdx(i => (i + 1) % words.length)
    }
    return () => clearTimeout(timeout)
  }, [displayed, deleting, wordIdx, words, speed, pause])

  return displayed
}

// ── Floating particle ────────────────────────────────────────────────────────
const Particle = ({ x, y, delay }: { x: string; y: string; delay: number }) => (
  <motion.div
    className="absolute w-[2px] h-[2px] rounded-full bg-neon-blue/50"
    style={{ left: x, top: y }}
    animate={{
      y: [0, -20, 0],
      opacity: [0, 0.8, 0],
      scale: [1, 1.8, 1],
    }}
    transition={{ duration: 3.5 + delay, repeat: Infinity, delay, ease: 'easeInOut' }}
  />
)

// ── Stagger container ────────────────────────────────────────────────────────
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const Hero = () => {
  const { t, isLoading } = useTranslation()
  const ROLES = [
    'Cybersecurity Student',
    'CTF Player',
    'Pentester',
    'Freelance Dev — ajmtech.fr',
  ]
  const typedRole = useTypewriter(ROLES)

  if (isLoading) {
    return (
      <section id="hero" className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-neon-blue mx-auto mb-4" />
          <p className="text-neon-blue font-code text-sm">Initialisation du système...</p>
        </div>
      </section>
    )
  }

  const content       = t('hero')
  const commonContent = t('common')

  const PARTICLES = [
    { x: '10%',  y: '20%',  delay: 0 },
    { x: '80%',  y: '15%',  delay: 0.8 },
    { x: '25%',  y: '70%',  delay: 1.4 },
    { x: '65%',  y: '65%',  delay: 0.4 },
    { x: '45%',  y: '30%',  delay: 2.1 },
    { x: '90%',  y: '55%',  delay: 1.0 },
    { x: '5%',   y: '50%',  delay: 1.7 },
    { x: '55%',  y: '85%',  delay: 0.3 },
  ]

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">

      {/* Floating particles */}
      {PARTICLES.map((p, i) => <Particle key={i} {...p} />)}

      {/* Grid overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(to right, rgba(0,229,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,229,255,0.04) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
      }} />

      {/* Radial glow behind content */}
      <div className="absolute inset-0 z-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(0,229,255,0.04) 0%, transparent 70%)',
      }} />

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-5xl mx-auto">

          {/* Main card */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="relative"
          >
            <div className="cyber-card p-8 md:p-12 flex flex-col md:flex-row items-center md:items-start gap-10">

              {/* Corner badge */}
              <div className="absolute top-0 right-0 bg-neon-blue text-background font-code text-[10px] px-3 py-1 tracking-widest">
                {content?.badge || 'CYBERSECURITY STUDENT'}
              </div>

              {/* ── Profile picture — Cyber ID Card ── */}
              <motion.div variants={fadeUp} className="shrink-0 relative select-none">
                {/* Outer rotating dashed rings */}
                <motion.div
                  className="absolute inset-[-18px] rounded-full border border-neon-blue/20 pointer-events-none"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
                  style={{ borderStyle: 'dashed' }}
                />
                <motion.div
                  className="absolute inset-[-32px] rounded-full border border-neon-purple/10 pointer-events-none"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 34, repeat: Infinity, ease: 'linear' }}
                  style={{ borderStyle: 'dashed' }}
                />

                {/* Card frame */}
                <div
                  className="relative w-44 h-44 md:w-56 md:h-56"
                  style={{
                    filter: 'drop-shadow(0 0 18px rgba(0,229,255,0.25))',
                  }}
                >
                  {/* Outer border — clipped corners */}
                  <div
                    className="absolute inset-0 border-2 border-neon-blue/70"
                    style={{
                      clipPath: 'polygon(16px 0%, 100% 0%, 100% calc(100% - 16px), calc(100% - 16px) 100%, 0% 100%, 0% 16px)',
                    }}
                  />

                  {/* Corner brackets */}
                  {/* Top-left */}
                  <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-neon-blue" />
                  {/* Top-right */}
                  <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-neon-blue" />
                  {/* Bottom-left */}
                  <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-neon-blue" />
                  {/* Bottom-right */}
                  <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-neon-blue" />

                  {/* Photo */}
                  <div
                    className="absolute inset-[5px] overflow-hidden"
                    style={{
                      clipPath: 'polygon(12px 0%, 100% 0%, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0% 100%, 0% 12px)',
                    }}
                  >
                    <img
                      src="/images/me.png"
                      alt="Alexandre UZAN"
                      className="w-full h-full object-cover object-top"
                      onError={(e) => { e.currentTarget.src = '/images/profile.svg' }}
                    />
                    {/* Subtle colour overlay */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(180deg, transparent 55%, rgba(0,229,255,0.08) 100%)',
                      }}
                    />
                  </div>

                  {/* Animated scan line */}
                  <motion.div
                    className="absolute left-0 right-0 h-[2px] pointer-events-none"
                    style={{
                      background: 'linear-gradient(90deg, transparent, rgba(0,229,255,0.6), transparent)',
                    }}
                    animate={{ top: ['10%', '90%', '10%'] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1.2 }}
                  />

                  {/* Face-lock reticle (thin cross-hair at centre) */}
                  <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-20">
                    <div className="relative w-10 h-10">
                      <div className="absolute top-1/2 left-0 right-0 h-px bg-neon-blue" />
                      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-neon-blue" />
                      <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-neon-blue" />
                      <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-neon-blue" />
                      <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-neon-blue" />
                      <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-neon-blue" />
                    </div>
                  </div>

                  {/* Status chip — bottom-left inside card */}
                  <div className="absolute bottom-2 left-2 flex items-center gap-1.5 bg-background/80 backdrop-blur-sm px-2 py-0.5 border border-neon-green/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-neon-green animate-pulse-slow" />
                    <span className="font-code text-[9px] text-neon-green tracking-widest">ONLINE</span>
                  </div>
                </div>

                {/* ID chip below */}
                <div className="mt-4 flex justify-center">
                  <div className="flex items-center gap-2 bg-background border border-neon-blue/30 px-3 py-1">
                    <span className="w-1 h-4 bg-neon-blue opacity-60" />
                    <span className="font-code text-[10px] text-neon-blue tracking-widest">ID: 0x4L3X</span>
                    <span className="font-code text-[10px] text-gray-600">// ShHaWkK</span>
                  </div>
                </div>
              </motion.div>

              {/* ── Text content ── */}
              <div className="flex-1 text-center md:text-left">
                <motion.div variants={fadeUp} className="font-code text-sm text-neon-blue mb-2 opacity-80">
                  {content?.whoami || '$ whoami'}
                </motion.div>

                <motion.h1
                  variants={fadeUp}
                  className="text-4xl md:text-6xl font-bold mb-3"
                  style={{ textShadow: '0 0 30px rgba(0,229,255,0.2)' }}
                >
                  {content?.name || 'Alexandre UZAN'}
                </motion.h1>

                {/* Typewriter role */}
                <motion.div variants={fadeUp} className="text-lg md:text-2xl mb-5 font-code min-h-[2em]">
                  <span className="text-gray-400">&gt; </span>
                  <span className="text-neon-blue">{typedRole}</span>
                  <span className="animate-blink text-neon-blue">_</span>
                </motion.div>

                <motion.p
                  variants={fadeUp}
                  className="text-neon-green font-code text-sm mb-8 opacity-90"
                >
                  {content?.quote || '$ echo "Security is not a product, but a process"'}
                </motion.p>

                {/* CTA buttons */}
                <motion.div
                  variants={fadeUp}
                  className="flex flex-wrap justify-center md:justify-start gap-3"
                >
                  {/* ajmtech.fr — highlighted */}
                  <motion.a
                    href="https://ajmtech.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 font-code text-sm border-2 border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-background transition-all duration-250 relative overflow-hidden group"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Globe className="h-4 w-4" />
                    ajmtech.fr
                    <ExternalLink className="h-3.5 w-3.5 opacity-70" />
                    <div className="absolute inset-0 bg-neon-purple/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>

                  <motion.a
                    href="https://pwn.college/hacker/ShHawk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 font-code text-sm border border-gray-700 text-gray-300 hover:border-neon-blue hover:text-neon-blue transition-all duration-200"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Terminal className="h-4 w-4" /> pwn.college
                  </motion.a>

                  <motion.a
                    href="https://github.com/ShHaWkK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2.5 font-code text-sm border border-gray-700 text-gray-300 hover:border-neon-blue hover:text-neon-blue transition-all duration-200"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Code className="h-4 w-4" /> GitHub
                  </motion.a>

                  <motion.a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 font-code text-sm bg-neon-blue text-background font-semibold hover:bg-transparent hover:text-neon-blue border-2 border-neon-blue transition-all duration-200"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {commonContent?.navigation?.contact || 'Contact'}
                    <ArrowRight className="h-4 w-4" />
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* ── Stats cards ── */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6"
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.1, delayChildren: 0.7 } },
            }}
          >
            {[
              {
                icon: <Shield className="w-5 h-5" />,
                title: content?.skills?.offensive?.title || 'Offensive Security',
                desc:  content?.skills?.offensive?.description || 'Pentesting & Exploitation',
                color: 'neon-blue',
              },
              {
                icon: <Cpu className="w-5 h-5" />,
                title: content?.skills?.honeypots?.title || 'Honeypots',
                desc:  content?.skills?.honeypots?.description || 'SSH, FTP, RDP',
                color: 'neon-purple',
              },
              {
                icon: <Code className="w-5 h-5" />,
                title: content?.skills?.development?.title || 'Development',
                desc:  content?.skills?.development?.description || 'Malware & Security',
                color: 'neon-green',
              },
            ].map(card => (
              <motion.div
                key={card.title}
                variants={fadeUp}
                className="group cyber-card p-4 flex items-center gap-3 cursor-default"
                whileHover={{ y: -3, boxShadow: `0 8px 30px rgba(0,229,255,0.12)` }}
                transition={{ duration: 0.2 }}
              >
                <div className={`text-${card.color} shrink-0 transition-transform duration-200 group-hover:scale-110`}>
                  {card.icon}
                </div>
                <div>
                  <h3 className={`font-code text-sm font-semibold text-${card.color}`}>{card.title}</h3>
                  <p className="text-xs text-gray-400 mt-0.5">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Decorative rotating circles */}
      <motion.div
        className="absolute bottom-12 left-8 w-64 h-64 border border-neon-blue/10 rounded-full pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-12 left-8 w-36 h-36 border border-neon-green/10 rounded-full pointer-events-none"
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute top-24 right-16 w-52 h-52 border border-neon-purple/10 rounded-full pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      />
    </section>
  )
}

export default Hero
