import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, ChevronLeft, ChevronRight, X, Maximize2, Lock } from 'lucide-react'

//  Types ─
interface ClientProject {
  id: string
  number: string
  client: string
  subtitle: string
  description: string
  tags: string[]
  images: string[]
  legends?: string[]
  year: string
  href?: string
  confidential?: boolean
  cta?: string
  accent: string
}

//  Data 
const PROJECTS: ClientProject[] = [
  {
    id: 'givenchy',
    number: '01',
    client: 'Givenchy × Kenzo',
    subtitle: 'Échappée Belle',
    description: 'Plateforme événementielle sur mesure : authentification, live streaming, quiz interactif et espace participants.',
    tags: ['Événementiel', 'Live Streaming', 'Auth', 'Quiz'],
    images: [
      '/images/showcase/givenchy/givenchy1.png',
      '/images/showcase/givenchy/givenchy2.png',
      '/images/showcase/givenchy/givenchy3.png',
      '/images/showcase/givenchy/givenchy4.png',
    ],
    legends: ['Login', 'Accueil', 'Live', 'Quiz'],
    year: '2024',
    confidential: true,
    accent: '#C9A96E',
  },
  {
    id: 'oreal',
    number: '02',
    client: "L'Oréal",
    subtitle: 'Beauty Store',
    description: 'E-commerce beauté complet : vitrines de marques, catalogue produits, parcours achat, live shopping et espace client.',
    tags: ['E-commerce', 'Live Shopping', 'Catalogue', 'Paiement'],
    images: [
      '/images/showcase/oreal/oreal1.png',
      '/images/showcase/oreal/oreal2.png',
      '/images/showcase/oreal/oreal3.png',
      '/images/showcase/oreal/oreal4.png',
      '/images/showcase/oreal/oreal5.png',
      '/images/showcase/oreal/oreal6.png',
      '/images/showcase/oreal/oreal7.png',
      '/images/showcase/oreal/oreal8.png',
    ],
    legends: ['Accueil', 'Catégories', 'Produit', 'Panier', 'Paiement', 'Live', 'Promos', 'Client'],
    year: '2024',
    cta: 'Sur demande',
    accent: '#FF2D55',
  },
  {
    id: 'rabanne',
    number: '03',
    client: 'Rabanne',
    subtitle: 'Expérience interactive',
    description: 'Parcours de marque immersif : galeries média, mises en scène produits et animations interactives.',
    tags: ['Expérience', 'Galerie', 'Animation', 'Immersif'],
    images: [
      '/images/showcase/rabanne/rabanne0.png',
      '/images/showcase/rabanne/rabanne1.png',
      '/images/showcase/rabanne/rabanne2.png',
      '/images/showcase/rabanne/rabanne3.png',
      '/images/showcase/rabanne/rabanne4.png',
    ],
    legends: ['Accueil', 'Campagne', 'Galerie', 'Détails', 'Final'],
    year: '2024',
    cta: 'Sur demande',
    accent: '#F5A623',
  },
  {
    id: 'issva',
    number: '04',
    client: 'ISSVA',
    subtitle: 'Plateforme conférences',
    description: 'Plateforme de conférences en direct avec chat temps réel, modules d\'accès et espace d\'administration complet.',
    tags: ['Conférences', 'Chat temps réel', 'Admin', 'Live'],
    images: [
      '/images/showcase/issva/issva0.png',
      '/images/showcase/issva/issva1.png',
      '/images/showcase/issva/issva2.png',
      '/images/showcase/issva/issva3.png',
    ],
    legends: ['Login', 'Accueil', 'Live', 'Quiz'],
    year: '2023',
    cta: 'Sur demande',
    accent: '#5E8EFF',
  },
]

//  Fullscreen viewer ─
const Fullscreen = ({
  images, legends, initialIndex, onClose,
}: {
  images: string[]
  legends?: string[]
  initialIndex: number
  onClose: () => void
}) => {
  const [idx, setIdx] = useState(initialIndex)

  useEffect(() => {
    const fn = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft')  setIdx(i => (i - 1 + images.length) % images.length)
      if (e.key === 'ArrowRight') setIdx(i => (i + 1) % images.length)
    }
    window.addEventListener('keydown', fn)
    return () => window.removeEventListener('keydown', fn)
  }, [images.length, onClose])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-5 right-5 p-2 border border-gray-700 text-gray-400 hover:text-white transition-colors"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Nav */}
      <button
        onClick={e => { e.stopPropagation(); setIdx(i => (i - 1 + images.length) % images.length) }}
        className="absolute left-5 top-1/2 -translate-y-1/2 p-2 border border-gray-700 text-gray-400 hover:text-white"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={e => { e.stopPropagation(); setIdx(i => (i + 1) % images.length) }}
        className="absolute right-5 top-1/2 -translate-y-1/2 p-2 border border-gray-700 text-gray-400 hover:text-white"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <motion.img
        key={idx}
        src={images[idx]}
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }}
        className="max-w-[88vw] max-h-[88vh] object-contain"
        onClick={e => e.stopPropagation()}
        onError={e => { e.currentTarget.src = '/images/showcase/placeholder.svg' }}
      />

      {legends?.[idx] && (
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 font-code text-xs text-gray-400 border border-gray-700 px-4 py-1.5">
          {legends[idx]}
        </div>
      )}

      {/* Counter */}
      <div className="absolute bottom-5 right-5 font-code text-xs text-gray-600">
        {String(idx + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
      </div>
    </motion.div>
  )
}

//  Single project case study ─
const CaseStudy = ({ project, isLast }: { project: ClientProject; isLast: boolean }) => {
  const [mainIdx, setMainIdx]           = useState(0)
  const [fullscreen, setFullscreen]     = useState(false)
  const [direction, setDirection]       = useState(1)
  const [, setImageLoaded]   = useState(false)
  const touchRef                        = useRef<number | null>(null)

  const goTo = (i: number) => {
    setDirection(i > mainIdx ? 1 : -1)
    setMainIdx(i)
    setImageLoaded(false)
  }
  const prev = () => goTo((mainIdx - 1 + project.images.length) % project.images.length)
  const next = () => goTo((mainIdx + 1) % project.images.length)

  return (
    <>
      <AnimatePresence>
        {fullscreen && (
          <Fullscreen
            images={project.images}
            legends={project.legends}
            initialIndex={mainIdx}
            onClose={() => setFullscreen(false)}
          />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`${!isLast ? 'border-b border-gray-800/40' : ''}`}
      >
        {/*  Project header  */}
        <div className="px-8 md:px-14 pt-16 pb-8 flex items-start justify-between gap-6">
          <div>
            <span
              className="font-code text-[10px] tracking-[0.2em] mb-3 block"
              style={{ color: project.accent }}
            >
              {project.number} 
            </span>
            <h3 className="font-black text-white leading-[0.9] tracking-tight mb-1"
              style={{ fontSize: 'clamp(32px, 5vw, 64px)' }}
            >
              {project.client}
            </h3>
            <p className="text-gray-500 text-base mt-2 max-w-lg leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="text-right shrink-0">
            <span className="font-code text-xs text-gray-700 block mb-3">{project.year}</span>
            <div className="flex flex-col gap-1.5 items-end">
              {project.tags.slice(0, 3).map(tag => (
                <span
                  key={tag}
                  className="font-code text-[9px] uppercase tracking-widest px-2 py-0.5 border"
                  style={{ color: project.accent, borderColor: `${project.accent}30` }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/*  Main image — FULL WIDTH  */}
        <div
          className="relative w-full overflow-hidden group cursor-pointer"
          style={{ height: 'clamp(320px, 55vh, 700px)' }}
          onTouchStart={e => { touchRef.current = e.changedTouches[0].clientX }}
          onTouchEnd={e => {
            if (touchRef.current === null) return
            const dx = e.changedTouches[0].clientX - touchRef.current
            if (dx > 40) prev()
            if (dx < -40) next()
            touchRef.current = null
          }}
        >
          {/* Accent top line */}
          <div
            className="absolute top-0 left-0 right-0 h-[2px] z-10"
            style={{ background: `linear-gradient(90deg, ${project.accent}80, transparent)` }}
          />

          <AnimatePresence mode="wait" initial={false}>
            <motion.img
              key={mainIdx}
              src={project.images[mainIdx]}
              alt={`${project.client} — ${project.legends?.[mainIdx] ?? mainIdx + 1}`}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -40 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="w-full h-full object-cover object-top"
              onLoad={() => setImageLoaded(true)}
              onError={e => { e.currentTarget.src = '/images/showcase/placeholder.svg' }}
            />
          </AnimatePresence>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center gap-4">
            <motion.button
              onClick={() => setFullscreen(true)}
              className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 border border-white text-white font-code text-xs px-4 py-2.5 hover:bg-white hover:text-black"
            >
              <Maximize2 className="w-3.5 h-3.5" /> Voir en détail
            </motion.button>
          </div>

          {/* Image nav arrows (always visible on mobile) */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-black/60 border border-white/10 text-white hover:bg-black/80 transition-colors md:opacity-0 md:group-hover:opacity-100 duration-200"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center bg-black/60 border border-white/10 text-white hover:bg-black/80 transition-colors md:opacity-0 md:group-hover:opacity-100 duration-200"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Current legend */}
          {project.legends?.[mainIdx] && (
            <div className="absolute bottom-4 left-4 z-10 font-code text-[10px] text-white bg-black/60 border border-white/10 px-3 py-1">
              {project.legends[mainIdx]}
            </div>
          )}

          {/* Image counter */}
          <div className="absolute bottom-4 right-4 z-10 font-code text-[10px] text-gray-500">
            {String(mainIdx + 1).padStart(2, '0')} / {String(project.images.length).padStart(2, '0')}
          </div>
        </div>

        {/*  Thumbnail strip  */}
        {project.images.length > 1 && (
          <div className="px-8 md:px-14 mt-3 flex gap-2 overflow-x-auto pb-1">
            {project.images.map((img, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`shrink-0 w-20 h-14 overflow-hidden border-2 transition-all duration-150 ${
                  i === mainIdx
                    ? 'border-white opacity-100'
                    : 'border-transparent opacity-40 hover:opacity-70'
                }`}
              >
                <img
                  src={img}
                  alt={project.legends?.[i] ?? String(i + 1)}
                  className="w-full h-full object-cover object-top"
                  onError={e => { e.currentTarget.src = '/images/showcase/placeholder.svg' }}
                />
              </button>
            ))}
          </div>
        )}

        {/*  Footer  */}
        <div className="px-8 md:px-14 py-6 flex items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span key={tag} className="font-code text-[9px] text-gray-600 border border-gray-800/80 px-2 py-0.5 uppercase tracking-wider">
                {tag}
              </span>
            ))}
          </div>

          <div className="shrink-0">
            {project.href ? (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-code text-sm text-white hover:text-neon-blue transition-colors"
              >
                Voir le site <ExternalLink className="w-4 h-4" />
              </a>
            ) : (
              <span className="inline-flex items-center gap-2 font-code text-xs text-gray-600">
                {project.confidential
                  ? <><Lock className="w-3 h-3" /> Confidentiel</>
                  : project.cta ?? 'Sur demande'}
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </>
  )
}

//  Section ─
const Showcase = () => (
  <section id="showcase" className="bg-[#0A0D12] relative">
    {/* Section header */}
    <div className="px-8 md:px-14 pt-20 pb-0 border-b border-gray-800/60">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-end justify-between pb-10"
      >
        <div>
          <p className="font-code text-[11px] text-neon-blue tracking-[0.2em] uppercase mb-3">
            ~/showcase
          </p>
          <h2
            className="font-black text-white leading-[0.9] tracking-tight"
            style={{ fontSize: 'clamp(40px, 6vw, 80px)' }}
          >
            Réalisations
          </h2>
          <p className="text-gray-500 mt-3 text-sm max-w-md">
            Plateformes web sur mesure pour les plus grandes maisons de luxe françaises.
          </p>
        </div>

        <div className="text-right hidden md:block">
          <p className="font-code text-[10px] text-gray-700 mb-1">{PROJECTS.length} projets</p>
          <p className="font-code text-[10px] text-gray-700">via ajmtech.fr</p>
        </div>
      </motion.div>
    </div>

    {/* Case studies */}
    <div>
      {PROJECTS.map((p, i) => (
        <CaseStudy key={p.id} project={p} isLast={i === PROJECTS.length - 1} />
      ))}
    </div>

    {/* Footer */}
    <div className="px-8 md:px-14 py-8 border-t border-gray-800/40 flex items-center gap-3">
      <span className="font-code text-xs text-gray-700">Réalisé via</span>
      <a
        href="https://ajmtech.fr"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 font-code text-xs text-neon-purple hover:text-neon-purple/80 transition-colors"
      >
        ajmtech.fr <ExternalLink className="w-3 h-3" />
      </a>
    </div>
  </section>
)

export default Showcase
