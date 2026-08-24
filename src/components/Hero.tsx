import { motion } from 'framer-motion'
import { ArrowRight, ExternalLink, Shield, Code2 } from 'lucide-react'

const STATS = [
  { value: '3 ans',  label: 'exp. fullstack',        color: '#6366F1' },
  { value: 'Top 5%', label: 'pwn.college',            color: '#818CF8' },
  { value: '8+',     label: 'clients grand compte',   color: '#10B981' },
  { value: '6+',     label: 'projets open source',    color: '#71717A' },
]

const ROLES = [
  { icon: Code2,   label: 'Développeur Fullstack',    sub: '3 ans d\'expérience',   color: '#6366F1' },
  { icon: Shield,  label: 'Ingénieur Cybersécurité',  sub: 'Offensive & Défensive', color: '#818CF8' },
]

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay } },
})

const Hero = () => (
  <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden py-24">

    {/* Subtle ambient gradient */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ background: 'radial-gradient(ellipse 60% 50% at 20% 50%, rgba(99,102,241,0.04) 0%, transparent 70%)' }}
    />

    {/* Layout: text left + photo right */}
    <div className="relative z-10 flex items-center gap-0 px-8 md:px-14">

      {/* ── Left — text content ── */}
      <div className="flex-1 min-w-0 max-w-2xl">

        {/* Dual-role badges */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate="show"
          className="flex flex-wrap gap-3 mb-10"
        >
          {ROLES.map(r => (
            <div
              key={r.label}
              className="inline-flex items-center gap-2.5 px-4 py-2 border text-sm"
              style={{ borderColor: `${r.color}25`, background: `${r.color}06` }}
            >
              <r.icon className="w-3.5 h-3.5 shrink-0" style={{ color: r.color }} />
              <span className="font-semibold text-white text-xs">{r.label}</span>
              <span
                className="text-[10px] px-1.5 py-0.5"
                style={{ color: r.color, background: `${r.color}12` }}
              >
                {r.sub}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp(0.1)}
          initial="hidden"
          animate="show"
          className="font-black leading-[0.9] tracking-tight text-white mb-8"
          style={{ fontSize: 'clamp(48px, 7.5vw, 96px)' }}
        >
          Je construis.<br />
          Je sécurise.<br />
          <span style={{ color: '#6366F1' }}>Je livre.</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={fadeUp(0.2)}
          initial="hidden"
          animate="show"
          className="text-zinc-400 text-base leading-relaxed max-w-lg mb-4"
        >
          Développeur fullstack et ingénieur cybersécurité avec{' '}
          <span className="text-white font-semibold">3 ans d'expérience</span>{' '}
          dans la conception d'applications web complexes — de l'architecture au déploiement.
        </motion.p>

        <motion.p
          variants={fadeUp(0.22)}
          initial="hidden"
          animate="show"
          className="text-zinc-500 text-sm leading-relaxed max-w-lg mb-10"
        >
          Expertise sécurité offensive · Réalisations via{' '}
          <a
            href="https://ajmtech.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-indigo-300 transition-colors underline underline-offset-4 decoration-white/20"
          >
            ajmtech.fr
          </a>{' '}
          pour Givenchy, L'Oréal, Hermès, Prada, Caudalie…
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp(0.3)}
          initial="hidden"
          animate="show"
          className="flex flex-wrap gap-3 mb-14"
        >
          <button
            type="button"
            onClick={() => document.getElementById('showcase')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#09090B] font-semibold text-sm hover:bg-gray-100 transition-colors"
          >
            Voir mes réalisations
            <ArrowRight className="w-4 h-4" />
          </button>
          <a
            href="https://ajmtech.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-indigo-500/40 text-indigo-400 text-sm hover:border-indigo-500 hover:bg-indigo-500/10 transition-all"
          >
            <ExternalLink className="w-4 h-4" />
            ajmtech.fr
          </a>
          <button
            type="button"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-6 py-3 border border-zinc-800 text-zinc-500 text-sm hover:border-zinc-600 hover:text-zinc-300 transition-all"
          >
            Me contacter
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={fadeUp(0.4)}
          initial="hidden"
          animate="show"
          className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-zinc-800/30 border border-zinc-800/60 overflow-hidden"
        >
          {STATS.map(s => (
            <div key={s.label} className="bg-[#09090B] px-5 py-5 hover:bg-[#111113] transition-colors">
              <p className="font-black text-2xl mb-1" style={{ color: s.color }}>{s.value}</p>
              <p className="text-[10px] text-zinc-600 leading-snug">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Right — photo ── */}
      <motion.div
        initial={{ opacity: 0, x: 32 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="hidden lg:flex flex-col items-center shrink-0 ml-16 xl:ml-24"
      >
        <div className="relative" style={{ width: 260, height: 340 }}>
          {/* Subtle corner accents */}
          <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-zinc-600/50" />
          <div className="absolute top-0 right-0 w-5 h-5 border-t border-r border-zinc-600/50" />
          <div className="absolute bottom-0 left-0 w-5 h-5 border-b border-l border-zinc-600/50" />
          <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-zinc-600/50" />

          {/* Photo */}
          <img
            src="/images/face.jpg"
            alt="Alexandre Uzan"
            className="w-full h-full object-cover object-top"
            style={{ filter: 'grayscale(0.15) brightness(0.9) contrast(1.05)' }}
          />

          {/* Bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090B]/50 via-transparent to-transparent" />
        </div>

        <div className="mt-4 text-center">
          <p className="font-semibold text-white text-sm">Alexandre Uzan</p>
          <p className="text-[10px] text-zinc-600 mt-0.5 tracking-wider">
            ESGI · Paris
          </p>
        </div>
      </motion.div>

    </div>
  </section>
)

export default Hero
