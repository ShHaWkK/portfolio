import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink } from 'lucide-react'

const STATS = [
  { value: 'Top 5%',  label: 'pwn.college',         color: '#00FF9D' },
  { value: '3+',      label: 'CVE analysées',        color: '#FF3E3E' },
  { value: '4',       label: 'clients grand compte', color: '#9A4DFF' },
  { value: '6+',      label: 'projets open source',  color: '#00E5FF' },
]

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 32 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay } },
})

const Hero = () => (
  <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden px-8 md:px-14 py-24">

    {/* Huge faded background word */}
    <div
      className="absolute right-[-2rem] top-1/2 -translate-y-1/2 font-black leading-none select-none pointer-events-none"
      style={{ fontSize: 'clamp(120px, 22vw, 320px)', color: 'rgba(255,255,255,0.022)', letterSpacing: '-0.04em' }}
    >
      SEC
    </div>

    {/* Subtle grid */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: 'linear-gradient(rgba(0,229,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,255,0.03) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
      }}
    />

    {/* Photo — desktop only */}
    <div className="absolute right-14 top-1/2 -translate-y-1/2 hidden xl:block pointer-events-none select-none">
      <div className="relative w-[280px] h-[360px]">
        {/* Accent border frame */}
        <div className="absolute -inset-[1px] bg-gradient-to-b from-neon-blue/30 via-neon-purple/20 to-transparent" />
        <img
          src="/images/face.jpg"
          alt="Alexandre Uzan"
          className="relative w-full h-full object-cover object-top grayscale"
          style={{ filter: 'grayscale(1) brightness(0.85) contrast(1.1)' }}
        />
        {/* Overlay gradient fade bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-transparent to-transparent" />
        {/* Scan line effect */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,229,255,0.8) 3px, rgba(0,229,255,0.8) 4px)',
          }}
        />
      </div>
      {/* Label below photo */}
      <div className="mt-2 text-center font-code text-[9px] text-gray-700 tracking-widest uppercase">
        Alexandre Uzan
      </div>
    </div>

    {/* Content */}
    <div className="relative z-10 max-w-3xl">

      {/* Eyebrow */}
      <motion.div
        variants={fadeUp(0)}
        initial="hidden"
        animate="show"
        className="flex items-center gap-3 mb-10"
      >
        <div className="w-10 h-px bg-neon-blue" />
        <span className="font-code text-[11px] text-neon-blue tracking-[0.25em] uppercase">
          Cybersecurity · Web Development
        </span>
      </motion.div>

      {/* Main headline */}
      <motion.h1
        variants={fadeUp(0.1)}
        initial="hidden"
        animate="show"
        className="font-black leading-[0.92] tracking-tight text-white mb-10"
        style={{ fontSize: 'clamp(52px, 8vw, 100px)' }}
      >
        Je sécurise.<br />
        Je construis.<br />
        <span style={{ color: '#00E5FF' }}>Je livre.</span>
      </motion.h1>

      {/* Description */}
      <motion.p
        variants={fadeUp(0.2)}
        initial="hidden"
        animate="show"
        className="text-gray-400 text-lg leading-relaxed max-w-xl mb-10"
      >
        Étudiant en cybersécurité, CTF player classé top&nbsp;5%&nbsp;sur pwn.college,
        et développeur freelance pour{' '}
        <a
          href="https://ajmtech.fr"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-neon-blue transition-colors underline underline-offset-4 decoration-white/20"
        >
          ajmtech.fr
        </a>{' '}
        — Givenchy, L'Oréal, Kenzo, Rabanne.
      </motion.p>

      {/* CTAs */}
      <motion.div
        variants={fadeUp(0.3)}
        initial="hidden"
        animate="show"
        className="flex flex-wrap gap-3 mb-16"
      >
        <button
          type="button"
          onClick={() => document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' })}
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#07090D] font-semibold text-sm hover:bg-gray-100 transition-colors"
        >
          Voir mes réalisations
          <ArrowRight className="w-4 h-4" />
        </button>
        <a
          href="https://ajmtech.fr"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 border border-neon-purple/40 text-neon-purple text-sm hover:border-neon-purple hover:bg-neon-purple/10 transition-all"
        >
          <ExternalLink className="w-4 h-4" />
          ajmtech.fr
        </a>
        <button
          type="button"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="inline-flex items-center gap-2 px-6 py-3 border border-gray-800 text-gray-500 text-sm hover:border-gray-600 hover:text-gray-300 transition-all"
        >
          Me contacter
        </button>
      </motion.div>

      {/* Stats */}
      <motion.div
        variants={fadeUp(0.4)}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-gray-800/30 border border-gray-800/60 overflow-hidden"
      >
        {STATS.map(s => (
          <div key={s.label} className="bg-[#0D1117] px-5 py-5 group hover:bg-[#111827] transition-colors">
            <p className="font-black text-2xl mb-1 transition-colors" style={{ color: s.color }}>
              {s.value}
            </p>
            <p className="font-code text-[10px] text-gray-600 leading-snug">{s.label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  </section>
)

export default Hero
