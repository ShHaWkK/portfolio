import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, ExternalLink, Shield, Globe, Wrench, Star, GitFork } from 'lucide-react'

//  Types ─
type Cat    = 'Security' | 'Web' | 'Tools'
type Status = 'Active' | 'Completed' | 'WIP'

interface Project {
  id: string
  title: string
  repo?: string        // "ShHaWkK/HoneyCred"
  description: string
  category: Cat
  stack: Array<{ name: string; color: string }>
  github?: string
  demo?: string
  status: Status
  year: string
  stars?: number
  forks?: number
  featured?: boolean
}

//  Language colours (GitHub palette) ─
const L = {
  Python:     '#3572A5',
  TypeScript: '#3178c6',
  JavaScript: '#f1e05a',
  Bash:       '#89e051',
  Docker:     '#384d54',
  Rust:       '#dea584',
  React:      '#61dafb',
  NextJs:     '#ffffff',
  Tailwind:   '#38bdf8',
  pwntools:   '#FF3E3E',
  YARA:       '#9A4DFF',
  Volatility: '#00FF9D',
  Framer:     '#bb4fff',
  Vite:       '#646cff',
  gdb:        '#FF8C00',
}

//  Projects data ─
const PROJECTS: Project[] = [
  {
    id: 'honeycred',
    title: 'HoneyCred',
    repo: 'ShHaWkK/HoneyCred',
    description:
      'Honeypot multi-protocoles (SSH, FTP, RDP) qui capture les credentials et TTPs des attaquants avec session replay complet et export d\'IoC.',
    category: 'Security',
    stack: [
      { name: 'Python',   color: L.Python },
      { name: 'asyncio',  color: L.Python },
      { name: 'Docker',   color: L.Docker },
      { name: 'Bash',     color: L.Bash },
    ],
    github: 'https://github.com/ShHaWkK/HoneyCred',
    status: 'Active',
    year: '2024',
    stars: 12,
    forks: 3,
    featured: true,
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
    repo: 'ShHaWkK/portfolio',
    description:
      'Ce portfolio — blog CVE/CTF, animations Framer Motion, i18n FR/EN, design terminal/cyber.',
    category: 'Web',
    stack: [
      { name: 'React',      color: L.React },
      { name: 'TypeScript', color: L.TypeScript },
      { name: 'Tailwind',   color: L.Tailwind },
      { name: 'Vite',       color: L.Vite },
      { name: 'Framer',     color: L.Framer },
    ],
    github: 'https://github.com/ShHaWkK/portfolio',
    demo: 'https://alexandreuzan.fr',
    status: 'Active',
    year: '2025',
    stars: 8,
    featured: true,
  },
  {
    id: 'ajmtech',
    title: 'ajmtech.fr',
    description:
      'Agence freelance — plateformes événementielles et e-commerce pour Givenchy, L\'Oréal, Kenzo, Rabanne.',
    category: 'Web',
    stack: [
      { name: 'Next.js',    color: L.NextJs },
      { name: 'TypeScript', color: L.TypeScript },
      { name: 'Tailwind',   color: L.Tailwind },
    ],
    demo: 'https://ajmtech.fr',
    status: 'Active',
    year: '2024',
  },
  {
    id: 'ctf-toolkit',
    title: 'CTF Toolkit',
    repo: 'ShHaWkK/ctf-toolkit',
    description:
      'Scripts Python pour CTF : exploitation web, reverse, crypto classique, pwn et OSINT. Automatise les étapes récurrentes.',
    category: 'Tools',
    stack: [
      { name: 'Python',   color: L.Python },
      { name: 'pwntools', color: L.pwntools },
      { name: 'Bash',     color: L.Bash },
    ],
    github: 'https://github.com/ShHaWkK',
    status: 'WIP',
    year: '2024',
  },
  {
    id: 'malware-analyzer',
    title: 'Malware Analyzer',
    repo: 'ShHaWkK/malware-analyzer',
    description:
      'Sandbox d\'analyse dynamique : logging syscalls, détection comportementale, extraction automatique d\'IoC avec YARA.',
    category: 'Security',
    stack: [
      { name: 'Python',    color: L.Python },
      { name: 'YARA',      color: L.YARA },
      { name: 'Volatility', color: L.Volatility },
      { name: 'Docker',    color: L.Docker },
    ],
    github: 'https://github.com/ShHaWkK',
    status: 'WIP',
    year: '2025',
  },
  {
    id: 'pwn-college',
    title: 'PWN College Notes',
    description:
      'Write-ups pwn.college : kernel exploitation, ROP chains, heap feng-shui, shellcoding. Actuellement top 5% de la plateforme.',
    category: 'Security',
    stack: [
      { name: 'Python',   color: L.Python },
      { name: 'pwntools', color: L.pwntools },
      { name: 'gdb',      color: L.gdb },
    ],
    demo: 'https://pwn.college/hacker/ShHawk',
    status: 'Active',
    year: '2024',
  },
]

//  Design tokens per category 
const CAT_CONFIG: Record<Cat, { border: string; bg: string; text: string; label: string; icon: React.ReactNode }> = {
  Security: {
    border: 'border-l-neon-red/60',
    bg:     'bg-neon-red/5',
    text:   'text-neon-red',
    label:  'Security',
    icon:   <Shield className="w-3 h-3" />,
  },
  Web: {
    border: 'border-l-neon-blue/60',
    bg:     'bg-neon-blue/5',
    text:   'text-neon-blue',
    label:  'Web',
    icon:   <Globe className="w-3 h-3" />,
  },
  Tools: {
    border: 'border-l-neon-green/60',
    bg:     'bg-neon-green/5',
    text:   'text-neon-green',
    label:  'Tools',
    icon:   <Wrench className="w-3 h-3" />,
  },
}

const STATUS_DOT: Record<Status, string> = {
  Active:    'bg-neon-green',
  Completed: 'bg-neon-blue',
  WIP:       'bg-cyber-yellow',
}

//  Animation ─
const grid = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } }
const card = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] } },
}

//  Card component ─
const ProjectCard = ({ p }: { p: Project }) => {
  const cfg = CAT_CONFIG[p.category]

  return (
    <motion.article
      variants={card}
      layout
      whileHover={{ y: -3 }}
      transition={{ duration: 0.15 }}
      className={`group flex flex-col border-l-2 ${cfg.border} bg-[#0D1117] border border-gray-800/60 hover:border-gray-700 transition-colors duration-200 p-5`}
    >
      {/* Top row — category + status + year */}
      <div className="flex items-center justify-between mb-3">
        <span className={`inline-flex items-center gap-1.5 font-code text-[10px] font-semibold ${cfg.text} ${cfg.bg} px-2 py-0.5 border border-current/20`}>
          {cfg.icon}
          {cfg.label}
        </span>
        <div className="flex items-center gap-3 font-code text-[10px] text-gray-700">
          {p.stars !== undefined && (
            <span className="flex items-center gap-1">
              <Star className="w-2.5 h-2.5" />
              {p.stars}
            </span>
          )}
          {p.forks !== undefined && (
            <span className="flex items-center gap-1">
              <GitFork className="w-2.5 h-2.5" />
              {p.forks}
            </span>
          )}
          <span className="flex items-center gap-1.5">
            <span className={`w-1.5 h-1.5 rounded-full ${STATUS_DOT[p.status]}`} />
            {p.status}
          </span>
        </div>
      </div>

      {/* Repo / title */}
      <div className="mb-1">
        {p.repo && (
          <span className="font-code text-[10px] text-gray-700 block mb-0.5">{p.repo}</span>
        )}
        <h3 className="font-bold text-white text-[0.95rem] leading-snug group-hover:text-neon-blue transition-colors duration-150">
          {p.title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-gray-500 text-xs leading-relaxed flex-1 mb-4 mt-1.5">
        {p.description}
      </p>

      {/* Language dots */}
      <div className="flex flex-wrap items-center gap-3 mb-4 pt-3 border-t border-gray-800/60">
        {p.stack.map(s => (
          <span key={s.name} className="flex items-center gap-1.5 font-code text-[10px] text-gray-500">
            <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: s.color }} />
            {s.name}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-4 font-code text-[11px]">
        {p.github && (
          <a
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-gray-600 hover:text-white transition-colors duration-150"
          >
            <Github className="w-3.5 h-3.5" />
            Code
          </a>
        )}
        {p.demo && (
          <a
            href={p.demo}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1.5 transition-colors duration-150 ${cfg.text} hover:opacity-80`}
          >
            <ExternalLink className="w-3.5 h-3.5" />
            {p.category === 'Web' ? 'Live' : 'Voir'}
          </a>
        )}
        <span className="ml-auto text-gray-800">{p.year}</span>
      </div>
    </motion.article>
  )
}

//  Section ─
type Filter = Cat | 'All'

const Projects = () => {
  const [filter, setFilter] = useState<Filter>('All')

  const visible = filter === 'All' ? PROJECTS : PROJECTS.filter(p => p.category === filter)
  const tabs: Filter[] = ['All', 'Security', 'Web', 'Tools']
  const count = (f: Filter) => f === 'All' ? PROJECTS.length : PROJECTS.filter(p => p.category === f).length

  return (
    <section id="projects" className="section bg-background relative">
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: 'radial-gradient(ellipse 70% 40% at 50% 0%, rgba(154,77,255,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="container relative z-10">

        {/* Header — left-aligned, no terminal badge */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
        >
          <p className="font-code text-xs text-neon-purple mb-2 tracking-widest uppercase">~/projects</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-1">
            Ce que je construis
          </h2>
          <p className="text-gray-600 text-sm max-w-md">
            Outils de sécurité, sites web, scripts CTF — tout est open source ou lié.
          </p>
        </motion.div>

        {/* Filter — minimal pill tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.1 }}
          className="flex gap-1 mb-8 flex-wrap"
        >
          {tabs.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1 font-code text-xs rounded-sm transition-all duration-150 border ${
                filter === f
                  ? 'bg-neon-purple/15 border-neon-purple/50 text-neon-purple'
                  : 'border-gray-800 text-gray-600 hover:text-gray-400 hover:border-gray-700'
              }`}
            >
              {f}
              <span className="ml-1.5 opacity-50">({count(f)})</span>
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            variants={grid}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
          >
            {visible.map(p => (
              <ProjectCard key={p.id} p={p} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Footer line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.25 }}
          className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 pt-6 border-t border-gray-800/60 font-code text-[11px] text-gray-700"
        >
          <span>{PROJECTS.length} projets</span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-neon-green" />
            {PROJECTS.filter(p => p.status === 'Active').length} actifs
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-cyber-yellow" />
            {PROJECTS.filter(p => p.status === 'WIP').length} en cours
          </span>
          <a
            href="https://github.com/ShHaWkK"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-auto flex items-center gap-1.5 text-gray-600 hover:text-white transition-colors"
          >
            <Github className="w-3.5 h-3.5" />
            Voir tout sur GitHub
          </a>
        </motion.div>

      </div>
    </section>
  )
}

export default Projects
