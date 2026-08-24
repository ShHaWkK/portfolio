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
  Perl:         '#0298c3',
  FastAPI:      '#009688',
  SQLite:       '#003b57',
  PowerShell:   '#5391FE',
  ReactNative:  '#61dafb',
  Expo:         '#4B5563',
  CryptoJS:     '#9A4DFF',
  C:            '#555555',
  Shell:        '#89e051',
  Node:         '#339933',
  PostgreSQL:   '#336791',
  Prisma:       '#2D3748',
  NextJs15:     '#e2e8f0',
  LiveKit:      '#f84343',
  Express:      '#68A063',
  AWS:          '#FF9900',
}

//  Projects data ─
const PROJECTS: Project[] = [
  {
    id: 'aegislegacy',
    title: 'AegisLegacy',
    repo: 'ShHaWkK/AegisLegacy',
    description:
      'Plateforme de sécurité runtime pour code legacy Perl/Python : moteur de règles YAML, API FastAPI + SQLite, CLI Typer, et agent Perl autonome, score de risque explicable, pas de boîte noire.',
    category: 'Security',
    stack: [
      { name: 'Python',  color: L.Python },
      { name: 'Perl',    color: L.Perl },
      { name: 'FastAPI', color: L.FastAPI },
      { name: 'SQLite',  color: L.SQLite },
    ],
    github: 'https://github.com/ShHaWkK/AegisLegacy',
    status: 'Active',
    year: '2026',
    featured: true,
  },
  {
    id: 'honeyssh',
    title: 'HoneySSH',
    repo: 'ShHaWkK/HoneySSH',
    description:
      'Honeypot SSH avancé pour capturer les credentials et analyser les TTPs des attaquants : session replay, export d\'IoC, logs structurés.',
    category: 'Security',
    stack: [
      { name: 'Python',  color: L.Python },
      { name: 'asyncio', color: L.Python },
      { name: 'Docker',  color: L.Docker },
    ],
    github: 'https://github.com/ShHaWkK/HoneySSH',
    status: 'Active',
    year: '2025',
    featured: true,
  },
  {
    id: 'honeyftp',
    title: 'HoneyFTP',
    repo: 'ShHaWkK/HoneyFTP',
    description:
      'Piège FTP pour capturer les tentatives de connexion et analyser les patterns d\'attaque : brute-force, exfiltration, credentiels.',
    category: 'Security',
    stack: [
      { name: 'Python', color: L.Python },
      { name: 'Bash',   color: L.Bash },
    ],
    github: 'https://github.com/ShHaWkK/HoneyFTP',
    status: 'Active',
    year: '2025',
  },
  {
    id: 'honeyhttp',
    title: 'HoneyHTTP',
    repo: 'ShHaWkK/HoneyHTTP',
    description:
      'Honeypot HTTP pour détecter scans automatisés, injections SQL/XSS et bots malveillants avec fingerprinting des attaquants.',
    category: 'Security',
    stack: [
      { name: 'JavaScript', color: L.JavaScript },
      { name: 'Docker',     color: L.Docker },
    ],
    github: 'https://github.com/ShHaWkK/HoneyHTTP',
    status: 'Active',
    year: '2025',
  },
  {
    id: 'honeyrdp',
    title: 'HoneyRDP',
    repo: 'ShHaWkK/HoneyRDP',
    description:
      'Piège RDP simulant un bureau Windows pour capturer les tentatives de connexion à distance et analyser les outils d\'attaque.',
    category: 'Security',
    stack: [
      { name: 'PowerShell', color: L.PowerShell },
      { name: 'Python',     color: L.Python },
    ],
    github: 'https://github.com/ShHaWkK/HoneyRDP',
    status: 'Active',
    year: '2025',
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
    description:
      'Scripts Python pour CTF : exploitation web, reverse, crypto classique, pwn et OSINT. Automatise les étapes récurrentes.',
    category: 'Tools',
    stack: [
      { name: 'Python',   color: L.Python },
      { name: 'pwntools', color: L.pwntools },
      { name: 'Bash',     color: L.Bash },
    ],
    status: 'WIP',
    year: '2024',
  },
  {
    id: 'malware-analyzer',
    title: 'Malware Analyzer',
    description:
      'Sandbox d\'analyse dynamique : logging syscalls, détection comportementale, extraction automatique d\'IoC avec YARA.',
    category: 'Security',
    stack: [
      { name: 'Python',     color: L.Python },
      { name: 'YARA',       color: L.YARA },
      { name: 'Volatility', color: L.Volatility },
      { name: 'Docker',     color: L.Docker },
    ],
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
  // ── Security ──────────────────────────────────────────
  {
    id: 'ld-preload',
    title: 'LD_PRELOAD Malware',
    repo: 'ShHaWkK/LD_PRELOAD_malware',
    description:
      'Malware pédagogique Linux : interception syscalls via LD_PRELOAD, capture de credentials SSH, dissimulation de connexions réseau et C2 chiffré SSL/TLS.',
    category: 'Security',
    stack: [
      { name: 'C',      color: L.C },
      { name: 'Python', color: L.Python },
    ],
    github: 'https://github.com/ShHaWkK/LD_PRELOAD_malware',
    status: 'Completed',
    year: '2026',
    featured: true,
  },
  {
    id: 'usblok',
    title: 'USBlok',
    repo: 'ShHaWkK/USBlok',
    description:
      'Protection Linux contre les attaques USB (badUSB, RubberDucky, PoisonTap) : désactivation automatique des drivers, liste blanche et fenêtre d\'activation de 10 secondes.',
    category: 'Security',
    stack: [
      { name: 'Shell',  color: L.Shell },
      { name: 'Bash',   color: L.Bash },
    ],
    github: 'https://github.com/ShHaWkK/USBlok',
    status: 'Active',
    year: '2025',
  },
  {
    id: 'wifi-scanner',
    title: 'Wifi Scanner',
    repo: 'ShHaWkK/Wifi_Scanner',
    description:
      'Outil d\'audit WiFi : scan SSID/BSSID, capture de paquets, détection WPA2/WPA3, identification de réseaux rogue, déauth detection et rapports HTML/PDF.',
    category: 'Security',
    stack: [
      { name: 'Python', color: L.Python },
      { name: 'Bash',   color: L.Bash },
    ],
    github: 'https://github.com/ShHaWkK/Wifi_Scanner',
    status: 'Active',
    year: '2025',
  },
  // ── Web ───────────────────────────────────────────────
  {
    id: 'atelier-nova',
    title: 'Atelier Nova',
    repo: 'ShHaWkK/atelier-nova',
    description:
      'Plateforme artisanale complète : site public premium + back-office admin (leads, devis, réservations, blog). Next.js 15 App Router, Prisma ORM, NextAuth v5, Tailwind.',
    category: 'Web',
    stack: [
      { name: 'Next.js',    color: L.NextJs15 },
      { name: 'TypeScript', color: L.TypeScript },
      { name: 'Prisma',     color: L.Prisma },
      { name: 'Tailwind',   color: L.Tailwind },
    ],
    github: 'https://github.com/ShHaWkK/atelier-nova',
    status: 'Active',
    year: '2026',
    featured: true,
  },
  {
    id: 'candipilot',
    title: 'CandiPilot',
    repo: 'ShHaWkK/CandiPilot',
    description:
      'Application web de gestion de candidatures : suivi des candidats, workflow de recrutement et tableau de bord RH. Next.js 15, Prisma ORM, déployé sur Vercel.',
    category: 'Web',
    stack: [
      { name: 'Next.js',    color: L.NextJs15 },
      { name: 'TypeScript', color: L.TypeScript },
      { name: 'Prisma',     color: L.Prisma },
      { name: 'Tailwind',   color: L.Tailwind },
    ],
    github: 'https://github.com/ShHaWkK/CandiPilot',
    status: 'Active',
    year: '2025',
  },
  {
    id: 'bsrq-viewerhub',
    title: 'BSRQ ViewerHub',
    repo: 'ShHaWkK/BSRQ-ViewerHub',
    description:
      'Dashboard temps réel pour le monitoring de viewers YouTube lors d\'événements live : React frontend, Node.js/Express backend, PostgreSQL, Docker, export CSV.',
    category: 'Web',
    stack: [
      { name: 'React',      color: L.React },
      { name: 'Node.js',    color: L.Node },
      { name: 'Express',    color: L.Express },
      { name: 'PostgreSQL', color: L.PostgreSQL },
    ],
    github: 'https://github.com/ShHaWkK/BSRQ-ViewerHub',
    status: 'Active',
    year: '2025',
  },
  // ── Tools ─────────────────────────────────────────────
  {
    id: 'pve-vm-forge',
    title: 'PVE VM Forge',
    repo: 'ShHaWkK/pve-vm-forge',
    description:
      'Automatisation de création de VMs Proxmox depuis templates cloud-init (Ubuntu, Debian, Kali). Réduit le provisioning de heures à minutes via scripts Bash.',
    category: 'Tools',
    stack: [
      { name: 'Shell',  color: L.Shell },
      { name: 'Bash',   color: L.Bash },
      { name: 'Docker', color: L.Docker },
    ],
    github: 'https://github.com/ShHaWkK/pve-vm-forge',
    status: 'Active',
    year: '2026',
  },
  {
    id: 'jarvis-os',
    title: 'Jarvis OS',
    repo: 'ShHaWkK/jarvis-OS',
    description:
      'Assistant IA personnel auto-hébergé : pipeline vocal temps réel STT → LLM → TTS via LiveKit, mémoire conversationnelle et tâches autonomes en arrière-plan.',
    category: 'Tools',
    stack: [
      { name: 'Python',  color: L.Python },
      { name: 'LiveKit', color: L.LiveKit },
      { name: 'Docker',  color: L.Docker },
    ],
    github: 'https://github.com/ShHaWkK/jarvis-OS',
    status: 'WIP',
    year: '2026',
    featured: true,
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
