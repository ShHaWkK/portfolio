import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  X, Calendar, Clock, Tag, ExternalLink,
  ChevronRight, Flag, AlertTriangle, ShieldAlert,
  Server, Lock, Activity,
} from 'lucide-react'
import type { BlogPost } from '../data/blogPosts'
import { formatDate } from '../data/blogPosts'

interface Props {
  post: BlogPost | null
  onClose: () => void
}

const CATEGORY_COLORS: Record<string, string> = {
  CVE:     'text-neon-red    bg-neon-red/10    border-neon-red/30',
  CTF:     'text-neon-blue   bg-neon-blue/10   border-neon-blue/30',
  Tools:   'text-neon-green  bg-neon-green/10  border-neon-green/30',
  Notes:   'text-cyber-yellow bg-cyber-yellow/10 border-cyber-yellow/30',
  Writeup: 'text-neon-purple  bg-neon-purple/10  border-neon-purple/30',
}

const DIFFICULTY_COLORS: Record<string, string> = {
  Easy:   'text-neon-green   border-neon-green/40   bg-neon-green/5',
  Medium: 'text-cyber-yellow border-cyber-yellow/40  bg-cyber-yellow/5',
  Hard:   'text-neon-red     border-neon-red/40     bg-neon-red/5',
  Insane: 'text-neon-purple  border-neon-purple/40  bg-neon-purple/5',
}

const CVSS_COLOR = (s: number) => {
  if (s >= 9.0) return { hex: '#FF3E3E', label: 'CRITICAL', tw: 'text-neon-red'     }
  if (s >= 7.0) return { hex: '#FF8C00', label: 'HIGH',     tw: 'text-orange-400'   }
  if (s >= 4.0) return { hex: '#FFD600', label: 'MEDIUM',   tw: 'text-cyber-yellow' }
  return              { hex: '#00FF9D', label: 'LOW',      tw: 'text-neon-green'  }
}

//  CVE Info Card ─
const CveCard = ({ post }: { post: BlogPost }) => {
  if (!post.cveId) return null
  const cvss  = post.cvssScore ?? 0
  const color = CVSS_COLOR(cvss)

  return (
    <a
      href={post.sourceUrl ?? `https://www.cve.org/CVERecord?id=${post.cveId}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group block mb-8 border border-neon-red/30 bg-[#0D1117] hover:border-neon-red/50 transition-all duration-200 overflow-hidden"
    >
      <div className="h-[3px] bg-gradient-to-r from-neon-red via-neon-purple to-transparent" />
      <div className="p-5">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1.5 flex-wrap">
              <ShieldAlert className="w-4 h-4 text-neon-red shrink-0" />
              <span className="font-code text-neon-red text-sm font-bold">{post.cveId}</span>
              {post.cweId && (
                <span className="font-code text-[10px] text-gray-600 border border-gray-800 px-1.5 py-0.5">{post.cweId}</span>
              )}
              {post.exploitedInWild && (
                <span className="flex items-center gap-1 font-code text-[10px] text-neon-red border border-neon-red/30 bg-neon-red/5 px-1.5 py-0.5">
                  <Activity className="w-2.5 h-2.5" /> EXPLOITÉ IN THE WILD
                </span>
              )}
            </div>
            <p className="text-white text-sm font-semibold leading-snug group-hover:text-neon-blue transition-colors line-clamp-2">
              {post.title}
            </p>
          </div>
          {cvss > 0 && (
            <div className="shrink-0 text-center">
              <div
                className="w-16 h-16 flex items-center justify-center text-2xl font-bold text-white border-2"
                style={{ borderColor: color.hex, background: `${color.hex}12` }}
              >
                {cvss.toFixed(1)}
              </div>
              <span className={`font-code text-[10px] mt-1 block font-bold ${color.tw}`}>{color.label}</span>
            </div>
          )}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-xs font-code text-gray-600">
          {post.affectedProduct && (
            <span className="flex items-center gap-1.5"><Server className="w-3 h-3" />{post.affectedProduct}</span>
          )}
          <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" />{formatDate(post.date)}</span>
          {post.cweId && (
            <span className="flex items-center gap-1.5"><Lock className="w-3 h-3" />{post.cweId}</span>
          )}
        </div>
      </div>
      <div className="px-5 pb-3 flex items-center gap-1 font-code text-[10px] text-gray-700 group-hover:text-neon-blue transition-colors">
        <ExternalLink className="w-3 h-3" />Voir sur cve.org
      </div>
    </a>
  )
}

//  Inline text formatter ─
function inlineFormat(text: string): string {
  return text
    .replace(/`([^`]+)`/g, '<code class="font-code text-neon-green bg-[#0D1117] border border-gray-800 px-1.5 py-0.5 text-xs rounded-sm">$1</code>')
    .replace(/(https?:\/\/[^\s<"]+)/g, '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-neon-blue underline underline-offset-2 hover:text-white transition-colors break-all">$1</a>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong class="text-white font-semibold">$1</strong>')
}

//  Robust content renderer ─
// Parses blocks in one pass, correctly handling multi-line code blocks
function renderContent(raw: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = []
  const lines = raw.split('\n')
  let i = 0

  while (i < lines.length) {
    const line = lines[i]

    // ─ Code block ─
    if (line.trimStart().startsWith('```')) {
      const lang = line.trim().slice(3).trim()
      const codeLines: string[] = []
      i++
      while (i < lines.length && !lines[i].trim().startsWith('```')) {
        codeLines.push(lines[i])
        i++
      }
      i++ // skip closing ```
      nodes.push(
        <div key={`code-${i}`} className="my-5 bg-[#0A0D14] border border-gray-800/80 overflow-hidden rounded-sm">
          <div className="flex items-center justify-between px-4 py-1.5 bg-[#0D1117] border-b border-gray-800">
            <span className="font-code text-[11px] text-gray-600">{lang || 'code'}</span>
            <div className="flex gap-1.5">
              <span className="w-2 h-2 rounded-full bg-neon-red/50" />
              <span className="w-2 h-2 rounded-full bg-cyber-yellow/50" />
              <span className="w-2 h-2 rounded-full bg-neon-green/50" />
            </div>
          </div>
          <pre className="p-4 overflow-x-auto text-sm font-code text-neon-green leading-relaxed whitespace-pre">
            {codeLines.join('\n')}
          </pre>
        </div>
      )
      continue
    }

    // ─ H2 
    if (line.startsWith('## ')) {
      nodes.push(
        <h2 key={`h2-${i}`} className="text-lg font-bold text-neon-blue mt-10 mb-3 font-poppins flex items-center gap-2 border-b border-neon-blue/15 pb-2">
          <ChevronRight className="w-4 h-4 shrink-0" />
          {line.slice(3)}
        </h2>
      )
      i++; continue
    }

    // ─ H3 
    if (line.startsWith('### ')) {
      nodes.push(
        <h3 key={`h3-${i}`} className="text-base font-bold text-white mt-7 mb-2 font-poppins">
          {line.slice(4)}
        </h3>
      )
      i++; continue
    }

    // ─ Blockquote 
    if (line.startsWith('> ')) {
      const quoteLines: string[] = []
      while (i < lines.length && lines[i].startsWith('> ')) {
        quoteLines.push(lines[i].slice(2))
        i++
      }
      const text     = quoteLines.join(' ')
      const isWarn   = /attention|warning|important/i.test(text)
      nodes.push(
        <div
          key={`quote-${i}`}
          className={`my-4 px-4 py-3 border-l-4 ${isWarn ? 'border-cyber-yellow bg-cyber-yellow/5' : 'border-neon-blue bg-neon-blue/5'}`}
        >
          <p
            className={`font-code text-sm leading-relaxed ${isWarn ? 'text-cyber-yellow' : 'text-neon-blue/90'}`}
            dangerouslySetInnerHTML={{ __html: inlineFormat(text) }}
          />
        </div>
      )
      continue
    }

    // ─ List item 
    if (line.startsWith('- ')) {
      const items: string[] = []
      while (i < lines.length && lines[i].startsWith('- ')) {
        items.push(lines[i].slice(2))
        i++
      }
      nodes.push(
        <ul key={`ul-${i}`} className="my-3 space-y-2">
          {items.map((item, j) => (
            <li key={j} className="flex items-start gap-2.5 text-gray-300 text-sm leading-relaxed">
              <span className="mt-[7px] w-1.5 h-1.5 shrink-0 bg-neon-blue rounded-full" />
              <span dangerouslySetInnerHTML={{ __html: inlineFormat(item) }} />
            </li>
          ))}
        </ul>
      )
      continue
    }

    // ─ Empty line ─
    if (line.trim() === '') { i++; continue }

    // ─ Paragraph (accumulate consecutive non-special lines) ─
    const paraLines: string[] = []
    while (
      i < lines.length &&
      lines[i].trim() !== '' &&
      !lines[i].startsWith('## ') &&
      !lines[i].startsWith('### ') &&
      !lines[i].startsWith('> ') &&
      !lines[i].startsWith('- ') &&
      !lines[i].trimStart().startsWith('```')
    ) {
      paraLines.push(lines[i])
      i++
    }
    if (paraLines.length > 0) {
      nodes.push(
        <p
          key={`p-${i}`}
          className="text-gray-400 text-sm leading-7 font-inter my-3"
          dangerouslySetInnerHTML={{ __html: inlineFormat(paraLines.join(' ')) }}
        />
      )
    }
  }

  return nodes
}

//  Modal ─
const BlogModal = ({ post, onClose }: Props) => {
  useEffect(() => {
    document.body.style.overflow = post ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [post])

  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', fn)
    return () => window.removeEventListener('keydown', fn)
  }, [onClose])

  return (
    <AnimatePresence>
      {post && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            key="panel"
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-0 left-0 right-0 z-[101] flex flex-col bg-[#0A0E17] border-t border-neon-blue/20"
            style={{ height: '92vh', boxShadow: '0 -30px 100px rgba(0,0,0,0.8)' }}
          >
            {/* Top bar */}
            <div className="shrink-0 flex items-center justify-between px-5 py-2.5 border-b border-gray-800/60 bg-[#0A0E17]">
              <div className="flex items-center gap-2 flex-wrap">
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 border font-code text-[11px] font-bold ${CATEGORY_COLORS[post.category]}`}>
                  {post.category === 'CVE' && <AlertTriangle className="w-3 h-3" />}
                  {post.category === 'CTF' && <Flag className="w-3 h-3" />}
                  {post.category}
                </span>
                {post.cveId   && <span className="font-code text-[11px] text-neon-red/70">{post.cveId}</span>}
                {post.platform && <span className="font-code text-[11px] text-gray-600">{post.platform}</span>}
                {post.difficulty && (
                  <span className={`border px-2 py-0.5 font-code text-[10px] ${DIFFICULTY_COLORS[post.difficulty]}`}>
                    {post.difficulty}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-3">
                <span className="hidden md:flex items-center gap-1 font-code text-[11px] text-gray-700">
                  <Clock className="w-3 h-3" />{post.readTime} min
                </span>
                <button
                  onClick={onClose}
                  className="p-1.5 text-gray-600 hover:text-white hover:bg-gray-800/60 transition-colors rounded-sm"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Scrollable body */}
            <div className="flex-1 overflow-y-auto">
              <div className="max-w-2xl mx-auto px-6 py-10">

                {/* Accent line */}
                <div
                  className="w-full h-[3px] mb-8 rounded-full"
                  style={{ background: post.coverGradient ?? 'linear-gradient(90deg,#00E5FF,#9A4DFF)' }}
                />

                {/* Title */}
                <h1 className="text-2xl md:text-[1.75rem] font-bold text-white font-poppins mb-5 leading-tight">
                  {post.title}
                </h1>

                {/* Meta */}
                <div className="flex flex-wrap items-center gap-4 mb-6 pb-5 border-b border-gray-800">
                  <span className="flex items-center gap-1.5 font-code text-xs text-gray-600">
                    <Calendar className="w-3 h-3" />{formatDate(post.date)}
                  </span>
                  <span className="flex items-center gap-1.5 font-code text-xs text-gray-600">
                    <Clock className="w-3 h-3" />{post.readTime} min de lecture
                  </span>
                  {post.sourceUrl && (
                    <a href={post.sourceUrl} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1 font-code text-xs text-neon-blue hover:underline">
                      <ExternalLink className="w-3 h-3" />Source officielle
                    </a>
                  )}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {post.tags.map(tag => (
                    <span key={tag} className="inline-flex items-center gap-1 px-2 py-0.5 border border-gray-800 font-code text-[11px] text-gray-600">
                      <Tag className="w-2.5 h-2.5" />{tag}
                    </span>
                  ))}
                </div>

                {/* CVE card */}
                <CveCard post={post} />

                {/* Article body */}
                <article className="space-y-0">
                  {renderContent(post.content)}
                </article>

                <div className="mt-14 pt-5 border-t border-gray-800 font-code text-xs text-gray-800 flex items-center gap-2">
                  <span className="text-neon-green">$</span>
                  <span>EOF — {post.title}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default BlogModal
