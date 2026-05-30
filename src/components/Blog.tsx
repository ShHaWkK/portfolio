import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Flag, AlertTriangle, BookOpen, Calendar,
  Clock, Tag, ChevronRight, ShieldAlert,
} from 'lucide-react'
import { BLOG_POSTS, ALL_CATEGORIES, formatDate } from '../data/blogPosts'
import type { PostCategory, BlogPost } from '../data/blogPosts'
import BlogModal from './BlogModal'

const CATEGORY_ACCENT: Record<string, string> = {
  CVE:     '#FF3E3E',
  CTF:     '#00E5FF',
  Tools:   '#00FF9D',
  Notes:   '#FFD600',
  Writeup: '#9A4DFF',
}

const CATEGORY_CLASSES: Record<string, string> = {
  CVE:     'text-neon-red    border-neon-red/40    bg-neon-red/5',
  CTF:     'text-neon-blue   border-neon-blue/40   bg-neon-blue/5',
  Tools:   'text-neon-green  border-neon-green/40  bg-neon-green/5',
  Notes:   'text-cyber-yellow border-cyber-yellow/40 bg-cyber-yellow/5',
  Writeup: 'text-neon-purple  border-neon-purple/40  bg-neon-purple/5',
}

const DIFFICULTY_CLASSES: Record<string, string> = {
  Easy:   'text-neon-green   border-neon-green/40',
  Medium: 'text-cyber-yellow border-cyber-yellow/40',
  Hard:   'text-neon-red     border-neon-red/40',
  Insane: 'text-neon-purple  border-neon-purple/40',
}

const container = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.07 } },
}
const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
}

// ── Blog card ─────────────────────────────────────────────────────────────────
const BlogCard = ({ post, onClick }: { post: BlogPost; onClick: () => void }) => {
  const accent = CATEGORY_ACCENT[post.category] ?? '#00E5FF'

  return (
    <motion.article
      variants={cardVariant}
      layout
      whileHover={{ y: -3 }}
      transition={{ duration: 0.18 }}
      onClick={onClick}
      className="group cursor-pointer flex flex-col bg-[#0D1117] border border-gray-800/80 hover:border-gray-600 transition-all duration-250 overflow-hidden"
    >
      {/* Cover */}
      <div
        className="relative w-full h-32 shrink-0 overflow-hidden"
        style={{ background: post.coverGradient ?? `linear-gradient(135deg, ${accent}15 0%, ${accent}05 100%)` }}
      >
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `linear-gradient(to right, ${accent} 1px, transparent 1px), linear-gradient(to bottom, ${accent} 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
          }}
        />
        <div
          className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full blur-3xl opacity-15 pointer-events-none"
          style={{ background: accent }}
        />

        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className={`inline-flex items-center gap-1 px-2 py-0.5 border font-code text-[10px] font-bold ${CATEGORY_CLASSES[post.category]}`}>
            {post.category === 'CVE' && <AlertTriangle className="w-2.5 h-2.5" />}
            {post.category === 'CTF' && <Flag className="w-2.5 h-2.5" />}
            {!['CVE','CTF'].includes(post.category) && <BookOpen className="w-2.5 h-2.5" />}
            {post.category}
          </span>
        </div>

        {/* CVSS badge for CVE posts */}
        {post.cvssScore && (
          <div className="absolute top-3 right-3">
            <span
              className="font-code text-[10px] font-bold px-2 py-0.5 border"
              style={{
                color: post.cvssScore >= 9 ? '#FF3E3E' : post.cvssScore >= 7 ? '#FF8C00' : '#FFD600',
                borderColor: post.cvssScore >= 9 ? 'rgba(255,62,62,0.4)' : post.cvssScore >= 7 ? 'rgba(255,140,0,0.4)' : 'rgba(255,214,0,0.4)',
                background: post.cvssScore >= 9 ? 'rgba(255,62,62,0.08)' : 'rgba(255,140,0,0.08)',
              }}
            >
              CVSS {post.cvssScore.toFixed(1)}
            </span>
          </div>
        )}

        {/* Exploited in wild badge */}
        {post.exploitedInWild && (
          <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-neon-red/10 border border-neon-red/30 px-2 py-0.5">
            <span className="w-1.5 h-1.5 rounded-full bg-neon-red animate-pulse" />
            <span className="font-code text-[9px] text-neon-red font-bold tracking-widest">IN THE WILD</span>
          </div>
        )}

        {/* CVE ID or platform */}
        {post.cveId && !post.exploitedInWild && (
          <div className="absolute bottom-3 left-3 font-code text-[10px] text-neon-red/60">{post.cveId}</div>
        )}
        {post.platform && (
          <div className="absolute bottom-3 left-3 font-code text-[10px] text-gray-600">{post.platform}</div>
        )}

        {/* Big icon faded */}
        <div className="absolute bottom-2 right-3 opacity-10 group-hover:opacity-20 transition-opacity">
          {post.category === 'CVE'
            ? <ShieldAlert className="w-12 h-12" style={{ color: accent }} />
            : post.category === 'CTF'
            ? <Flag className="w-12 h-12" style={{ color: accent }} />
            : <BookOpen className="w-12 h-12" style={{ color: accent }} />}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-bold text-[0.9rem] text-white group-hover:text-neon-blue transition-colors duration-200 leading-snug mb-2 line-clamp-2">
          {post.title}
        </h3>

        <p className="text-gray-600 text-xs leading-relaxed line-clamp-2 flex-1 mb-3">
          {post.excerpt}
        </p>

        {/* Meta */}
        <div className="flex flex-wrap items-center justify-between gap-2 mt-auto">
          <div className="flex items-center gap-3 font-code text-[11px] text-gray-700">
            <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{formatDate(post.date)}</span>
            <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime} min</span>
          </div>
          {post.difficulty && (
            <span className={`border px-2 py-0.5 font-code text-[10px] ${DIFFICULTY_CLASSES[post.difficulty]}`}>
              {post.difficulty}
            </span>
          )}
        </div>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-gray-800/60">
            {post.tags.slice(0, 5).map(tag => (
              <span key={tag} className="inline-flex items-center gap-1 px-1.5 py-0.5 border border-gray-800 font-code text-[10px] text-gray-700">
                <Tag className="w-2 h-2" /> {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center gap-1 mt-3 font-code text-[11px] text-gray-700 group-hover:text-neon-blue transition-colors duration-200">
          <span>Lire l&apos;article</span>
          <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
        </div>
      </div>
    </motion.article>
  )
}

// ── Main section ──────────────────────────────────────────────────────────────
const Blog = () => {
  const [filter, setFilter]         = useState<PostCategory | 'ALL'>('ALL')
  const [activePost, setActivePost] = useState<BlogPost | null>(null)

  const visible     = filter === 'ALL' ? BLOG_POSTS : BLOG_POSTS.filter(p => p.category === filter)
  const allFilters: Array<PostCategory | 'ALL'> = ['ALL', ...ALL_CATEGORIES]

  return (
    <>
      <section id="blog" className="section bg-background relative">
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(to right, rgba(0,229,255,0.025) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,229,255,0.025) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />

        <div className="container relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10"
          >
            <p className="font-code text-xs text-neon-blue mb-2 tracking-widest uppercase">~/blog</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-1">
              Blog &amp; Write-Ups
            </h2>
            <p className="text-gray-600 text-sm max-w-md">
              Analyses CVE, write-ups CTF et notes techniques.
            </p>
          </motion.div>

          {/* Filter tabs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-2 mb-10"
          >
            {allFilters.map(f => {
              const count = f === 'ALL' ? BLOG_POSTS.length : BLOG_POSTS.filter(p => p.category === f).length
              return (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`relative px-4 py-1.5 font-code text-xs uppercase tracking-widest border transition-all duration-200 ${
                    filter === f
                      ? 'border-neon-blue text-neon-blue bg-neon-blue/10'
                      : 'border-gray-800 text-gray-600 hover:border-gray-700 hover:text-gray-400'
                  }`}
                >
                  {f}
                  {count > 0 && (
                    <span className={`ml-1.5 font-code text-[10px] ${filter === f ? 'text-neon-blue/70' : 'text-gray-700'}`}>
                      ({count})
                    </span>
                  )}
                  {filter === f && (
                    <motion.div
                      layoutId="blog-filter"
                      className="absolute bottom-0 left-0 right-0 h-[1px] bg-neon-blue"
                      style={{ boxShadow: '0 0 6px #00E5FF' }}
                    />
                  )}
                </button>
              )
            })}
          </motion.div>

          {/* Cards — uniform grid, no broken featured span */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {visible.length === 0 ? (
                <motion.div variants={cardVariant} className="col-span-3 py-24 text-center">
                  <BookOpen className="w-10 h-10 text-gray-800 mx-auto mb-3" />
                  <p className="font-code text-sm text-gray-700">Aucun article dans cette catégorie.</p>
                </motion.div>
              ) : (
                visible.map(post => (
                  <BlogCard key={post.id} post={post} onClick={() => setActivePost(post)} />
                ))
              )}
            </motion.div>
          </AnimatePresence>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 flex flex-wrap items-center justify-between gap-4 p-4 border border-gray-800/60 bg-[#0D1117] font-code text-xs"
          >
            <div className="flex items-center gap-2 text-gray-700">
              <span className="text-neon-green">$</span>
              <span>ls ./blog/ | wc -l</span>
              <span className="text-neon-blue">{BLOG_POSTS.length} articles</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {ALL_CATEGORIES.map(cat => {
                const n = BLOG_POSTS.filter(p => p.category === cat).length
                return n > 0 ? (
                  <span key={cat} className={`border px-2 py-0.5 ${CATEGORY_CLASSES[cat]}`}>
                    {cat} ({n})
                  </span>
                ) : null
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <BlogModal post={activePost} onClose={() => setActivePost(null)} />
    </>
  )
}

export default Blog
