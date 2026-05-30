import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Shield, Flag, ChevronDown, ExternalLink,
  AlertTriangle, Lock, Bug, Calendar, Tag,
} from 'lucide-react'

type Category = 'ALL' | 'CVE' | 'CTF'
type Difficulty = 'Easy' | 'Medium' | 'Hard' | 'Insane'

interface WriteUp {
  id: string
  type: 'CVE' | 'CTF'
  title: string
  platform?: string        // e.g. HackTheBox, TryHackMe, pwn.college
  cveId?: string           // e.g. CVE-2024-12345
  difficulty?: Difficulty
  date: string
  tags: string[]
  summary: string
  link?: string
}

const DIFFICULTY_COLORS: Record<Difficulty, string> = {
  Easy:   'text-neon-green  border-neon-green/40  bg-neon-green/5',
  Medium: 'text-cyber-yellow border-cyber-yellow/40 bg-cyber-yellow/5',
  Hard:   'text-neon-red    border-neon-red/40    bg-neon-red/5',
  Insane: 'text-neon-purple  border-neon-purple/40  bg-neon-purple/5',
}

// ─ Placeholder data — replace with real write-ups 
const WRITEUPS: WriteUp[] = [
  {
    id: 'ctf-001',
    type: 'CTF',
    title: 'Coming soon — CTF Write-Up',
    platform: 'HackTheBox',
    difficulty: 'Medium',
    date: '2025-01',
    tags: ['Web', 'SQLi', 'Privesc'],
    summary: 'Cette section accueillera bientôt mes write-ups de challenges CTF. Fournis-moi les détails et je les intègrerai ici.',
  },
  {
    id: 'cve-001',
    type: 'CVE',
    title: 'Coming soon — CVE Analysis',
    cveId: 'CVE-XXXX-XXXXX',
    date: '2025-01',
    tags: ['RCE', 'Linux', 'Kernel'],
    summary: 'Cette section accueillera bientôt mes analyses de CVE. Fournis-moi les détails et je les intègrerai ici.',
  },
]
// ─

const FILTERS: { label: string; value: Category }[] = [
  { label: 'All',  value: 'ALL' },
  { label: 'CTF',  value: 'CTF' },
  { label: 'CVE',  value: 'CVE' },
]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
}

const WriteUpCard = ({ wu }: { wu: WriteUp }) => {
  const [expanded, setExpanded] = useState(false)
  const isCVE = wu.type === 'CVE'
  const accent = isCVE ? 'neon-red' : 'neon-blue'

  return (
    <motion.div variants={itemVariants} layout>
      <div
        className={`relative border transition-all duration-300 cursor-pointer group ${
          expanded
            ? `border-${accent} shadow-[0_0_20px_rgba(var(--${accent}-rgb),0.15)]`
            : 'border-gray-800 hover:border-gray-600'
        } bg-[#111827]`}
        onClick={() => setExpanded(v => !v)}
      >
        {/* Type badge */}
        <div className={`absolute top-0 left-0 px-3 py-0.5 font-code text-[10px] font-bold ${
          isCVE ? 'bg-neon-red text-background' : 'bg-neon-blue text-background'
        }`}>
          {wu.type}
        </div>

        <div className="p-5 pt-7">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              {/* CVE ID / Platform */}
              {wu.cveId && (
                <span className="font-code text-xs text-neon-red opacity-80 mb-1 block">
                  {wu.cveId}
                </span>
              )}
              {wu.platform && (
                <span className="font-code text-xs text-neon-blue opacity-80 mb-1 block">
                  {wu.platform}
                </span>
              )}

              <h3 className="text-white font-bold text-base mb-2 group-hover:text-neon-blue transition-colors duration-200 truncate">
                {wu.title}
              </h3>

              {/* Meta row */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-code text-gray-500">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> {wu.date}
                </span>
                {wu.difficulty && (
                  <span className={`border px-2 py-0.5 rounded-sm ${DIFFICULTY_COLORS[wu.difficulty]}`}>
                    {wu.difficulty}
                  </span>
                )}
              </div>
            </div>

            <motion.div
              animate={{ rotate: expanded ? 180 : 0 }}
              transition={{ duration: 0.25 }}
              className="shrink-0 text-gray-500 group-hover:text-white transition-colors"
            >
              <ChevronDown className="w-5 h-5" />
            </motion.div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mt-3">
            {wu.tags.map(tag => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 px-2 py-0.5 bg-background border border-gray-700 font-code text-[10px] text-gray-400"
              >
                <Tag className="w-2.5 h-2.5" /> {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Expanded content */}
        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className={`px-5 pb-5 border-t border-gray-800 pt-4`}>
                <p className="text-gray-300 text-sm leading-relaxed font-code mb-4">
                  {wu.summary}
                </p>
                {wu.link && (
                  <a
                    href={wu.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                    className={`inline-flex items-center gap-2 px-4 py-2 border font-code text-xs transition-all duration-200 ${
                      isCVE
                        ? 'border-neon-red/50 text-neon-red hover:bg-neon-red/10'
                        : 'border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10'
                    }`}
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Read full write-up
                  </a>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

const WriteUps = () => {
  const [filter, setFilter] = useState<Category>('ALL')

  const visible = filter === 'ALL' ? WRITEUPS : WRITEUPS.filter(w => w.type === filter)

  return (
    <section id="writeups" className="section bg-background-alt relative">
      {/* Background grid */}
      <div className="absolute inset-0 z-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(to right, #00E5FF 1px, transparent 1px), linear-gradient(to bottom, #00E5FF 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Scan line */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-neon-blue/30 animate-scan" />
      </div>

      <div className="container relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 border border-neon-blue/30 bg-neon-blue/5">
            <Flag className="w-3.5 h-3.5 text-neon-blue" />
            <span className="font-code text-sm text-neon-blue">~/write-ups</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
            CVE &amp; CTF{' '}
            <span className="text-neon-blue" style={{ textShadow: '0 0 20px rgba(0,229,255,0.4)' }}>
              Write-Ups
            </span>
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-4" />
          <p className="text-gray-400 font-code text-sm max-w-xl mx-auto">
            <span className="text-neon-green">$</span> cat solutions.log | grep -E &quot;CVE|CTF&quot;
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="flex justify-center gap-2 mb-10"
        >
          {FILTERS.map(f => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`relative px-5 py-2 font-code text-xs uppercase tracking-widest transition-all duration-200 border ${
                filter === f.value
                  ? 'border-neon-blue text-neon-blue bg-neon-blue/10'
                  : 'border-gray-700 text-gray-500 hover:border-gray-500 hover:text-gray-300'
              }`}
            >
              {f.value === 'CVE' && <AlertTriangle className="w-3 h-3 inline mr-1.5 -mt-0.5" />}
              {f.value === 'CTF' && <Flag className="w-3 h-3 inline mr-1.5 -mt-0.5" />}
              {f.value === 'ALL' && <Shield className="w-3 h-3 inline mr-1.5 -mt-0.5" />}
              {f.label}
              {filter === f.value && (
                <motion.div
                  layoutId="filter-indicator"
                  className="absolute bottom-0 left-0 right-0 h-[1px] bg-neon-blue"
                  style={{ boxShadow: '0 0 6px #00E5FF' }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Cards grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto"
          >
            {visible.length > 0 ? (
              visible.map(wu => <WriteUpCard key={wu.id} wu={wu} />)
            ) : (
              <motion.div
                variants={itemVariants}
                className="col-span-2 py-20 text-center"
              >
                <Lock className="w-10 h-10 text-gray-700 mx-auto mb-4" />
                <p className="font-code text-gray-600 text-sm">
                  Aucun write-up dans cette catégorie pour l&apos;instant.
                </p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Terminal footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 p-4 border border-neon-blue/20 bg-background font-code text-xs max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-2 text-neon-green mb-1">
            <Bug className="w-3.5 h-3.5" />
            <span>$ ls -la ./writeups/</span>
          </div>
          <p className="text-gray-500 pl-5">
            total <span className="text-neon-blue">{WRITEUPS.length}</span> — nouvelles solutions à venir.
            Les write-ups détaillés sont progressivement publiés ici.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default WriteUps
