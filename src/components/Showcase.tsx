import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, ExternalLink, Lock } from 'lucide-react'

// ── Types ────────────────────────────────────────────────────────────────────

interface ClientProject {
  id: string
  number: string
  client: string
  subtitle: string
  description: string
  tags: string[]
  images: string[]
  year: string
  href?: string
  confidential?: boolean
  accent: string
}

// ── Data — 8 clients ─────────────────────────────────────────────────────────

const PROJECTS: ClientProject[] = [
  {
    id: 'givenchy',
    number: '01',
    client: 'Givenchy × Kenzo',
    subtitle: 'Plateforme événementielle',
    description: 'Plateforme événementielle sur mesure pour les équipes LVMH : authentification sécurisée, live streaming intégré, quiz interactif en temps réel et espace participants.',
    tags: ['Événementiel', 'Live Streaming', 'Auth', 'Quiz'],
    images: [
      '/images/showcase/givenchy/givenchy1.png',
      '/images/showcase/givenchy/givenchy2.png',
      '/images/showcase/givenchy/givenchy3.png',
      '/images/showcase/givenchy/givenchy4.png',
    ],
    year: '2024',
    confidential: true,
    accent: '#C9A96E',
  },
  {
    id: 'oreal',
    number: '02',
    client: "L'Oréal",
    subtitle: 'E-commerce beauté',
    description: 'E-commerce beauté grand compte : vitrines multi-marques, catalogue produits, parcours achat optimisé, live shopping et espace client personnalisé.',
    tags: ['E-commerce', 'Live Shopping', 'Catalogue', 'Paiement'],
    images: [
      '/images/showcase/oreal/accueil_oreal.png',
      '/images/showcase/oreal/catalog.png',
      '/images/showcase/oreal/filter.png',
      '/images/showcase/oreal/newsletter.png',
      '/images/showcase/oreal/product.png',
    ],
    year: '2024',
    accent: '#FF2D55',
  },
  {
    id: 'rabanne',
    number: '03',
    client: 'Rabanne',
    subtitle: 'Expérience de marque immersive',
    description: 'Parcours immersif pour Rabanne : galeries média haute définition, mises en scène produits animées et storytelling interactif pour une expérience de marque distinctive.',
    tags: ['Expérience', 'Galerie', 'Animation', 'Immersif'],
    images: [
      '/images/showcase/rabanne/rabanne0.png',
      '/images/showcase/rabanne/rabanne1.png',
      '/images/showcase/rabanne/rabanne2.png',
      '/images/showcase/rabanne/rabanne3.png',
      '/images/showcase/rabanne/rabanne4.png',
    ],
    year: '2024',
    accent: '#F5A623',
  },
  {
    id: 'hermes',
    number: '04',
    client: 'Hermès',
    subtitle: 'Expérience digitale',
    description: 'Interface digitale premium pour Hermès : parcours utilisateur épuré, quiz interactif et espace dédié aux équipes internes.',
    tags: ['Luxury', 'Quiz', 'Expérience'],
    images: [
      '/images/showcase/hermes/login.png',
      '/images/showcase/hermes/quizz.png',
    ],
    year: '2024',
    confidential: true,
    accent: '#E07B39',
  },
  {
    id: 'carolina',
    number: '05',
    client: 'Carolina Herrera',
    subtitle: 'Plateforme événementielle',
    description: 'Plateforme événementielle complète : authentification, espace live avec chat en temps réel, quiz interactif et gestion des participants.',
    tags: ['Événementiel', 'Live', 'Chat', 'Quiz'],
    images: [
      '/images/showcase/carolina/accueil.png',
      '/images/showcase/carolina/login.png',
      '/images/showcase/carolina/chat_and_live.png',
      '/images/showcase/carolina/quizz.png',
      '/images/showcase/carolina/quizz2.png',
      '/images/showcase/carolina/answer_quiz.png',
    ],
    year: '2024',
    accent: '#DB2777',
  },
  {
    id: 'caudalie',
    number: '06',
    client: 'Caudalie',
    subtitle: 'Application iOS',
    description: 'Application iOS native pour Caudalie : interface événementielle, live streaming intégré et chat temps réel pour les équipes et participants.',
    tags: ['iOS', 'Live', 'Chat temps réel'],
    images: [
      '/images/showcase/caudalie/accueil.png',
      '/images/showcase/caudalie/chat.png',
      '/images/showcase/caudalie/chat2.png',
    ],
    year: '2024',
    accent: '#7C3AED',
  },
  {
    id: 'issva',
    number: '07',
    client: 'ISSVA',
    subtitle: 'Plateforme conférences',
    description: 'Plateforme de conférences en direct : chat temps réel, sessions interactives, modules d\'accès sécurisés et espace d\'administration complet.',
    tags: ['Conférences', 'Chat', 'Admin', 'Live'],
    images: [
      '/images/showcase/issva/accueil.png',
      '/images/showcase/issva/live.png',
      '/images/showcase/issva/login.png',
      '/images/showcase/issva/sessions.png',
    ],
    year: '2023',
    accent: '#5E8EFF',
  },
  {
    id: 'atee',
    number: '08',
    client: 'ATEE',
    subtitle: 'Congrès digitaux',
    description: 'Application de congrès digitaux : accueil événementiel, gestion des replays et téléchargement de ressources PDF pour les participants.',
    tags: ['Congrès', 'Replay', 'Documents'],
    images: [
      '/images/showcase/atee/accueil.png',
      '/images/showcase/atee/replay.png',
      '/images/showcase/atee/pdf.png',
    ],
    year: '2023',
    accent: '#0D9488',
  },
  {
    id: 'wallets',
    number: '09',
    client: 'Wallets',
    subtitle: 'SaaS cartes de fidélité digitales',
    description: 'SaaS de cartes de fidélité digitales compatibles Apple Wallet et Google Wallet, sans application mobile à installer : génération de carte par QR code, scanner intégré, dashboard multi-commerçant et statistiques en temps réel.',
    tags: ['SaaS', 'Apple Wallet', 'Google Wallet', 'Multi-tenant'],
    images: [
      '/images/showcase/wallets/accueil.png',
      '/images/showcase/wallets/besoin.png',
      '/images/showcase/wallets/dasboard-client.png',
      '/images/showcase/wallets/subscribe.png',
    ],
    year: '2026',
    href: 'https://wallet-poc-tau.vercel.app',
    accent: '#9A4DFF',
  },
  {
    id: 'first-conseil',
    number: '10',
    client: 'First Conseil',
    subtitle: 'Site vitrine ESN',
    description: "Site vitrine pour First Conseil, ESN spécialisée en Assurance, Banque et Transformation digitale : présentation de l'entreprise, des métiers et expertises, offres d'emploi et candidature spontanée.",
    tags: ['Site vitrine', 'ESN', 'Recrutement'],
    images: [
      '/images/showcase/first-conseil/accueil.png',
      '/images/showcase/first-conseil/qui-sommes-nous.png',
      '/images/showcase/first-conseil/nos-metiers.png',
      '/images/showcase/first-conseil/contact.png',
    ],
    year: '2026',
    href: 'https://www.first-conseil.com',
    accent: '#E63312',
  },
]

// ── Lightbox ─────────────────────────────────────────────────────────────────

const Lightbox = ({
  project,
  startIndex,
  onClose,
}: {
  project: ClientProject
  startIndex: number
  onClose: () => void
}) => {
  const [idx, setIdx] = useState(startIndex)
  const images = project.images

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
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Top accent */}
      <div className="absolute top-0 inset-x-0 h-[2px]" style={{ background: project.accent }} />

      {/* Header */}
      <div className="absolute top-0 inset-x-0 h-14 flex items-center justify-between px-6">
        <span className="font-code text-xs text-gray-500">
          <span style={{ color: project.accent }}>{project.client}</span>
          <span className="mx-2 opacity-30">/</span>
          {String(idx + 1).padStart(2, '0')} sur {String(images.length).padStart(2, '0')}
        </span>
        <button
          type="button"
          aria-label="Fermer"
          onClick={onClose}
          className="w-9 h-9 flex items-center justify-center border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-all"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Prev */}
      <button
        type="button"
        aria-label="Précédent"
        onClick={e => { e.stopPropagation(); setIdx(i => (i - 1 + images.length) % images.length) }}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center border border-white/10 text-gray-300 hover:text-white hover:border-white/30 transition-all"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Next */}
      <button
        type="button"
        aria-label="Suivant"
        onClick={e => { e.stopPropagation(); setIdx(i => (i + 1) % images.length) }}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center border border-white/10 text-gray-300 hover:text-white hover:border-white/30 transition-all"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Image */}
      <AnimatePresence mode="wait">
        <motion.img
          key={idx}
          src={images[idx]}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[86vw] max-h-[80vh] object-contain"
          onClick={e => e.stopPropagation()}
          onError={e => { e.currentTarget.src = '/images/showcase/placeholder.svg' }}
        />
      </AnimatePresence>

      {/* Thumb strip */}
      <div className="absolute bottom-4 inset-x-0 flex justify-center gap-1.5 px-6 overflow-x-auto">
        {images.map((img, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Image ${i + 1}`}
            onClick={e => { e.stopPropagation(); setIdx(i) }}
            className="shrink-0 overflow-hidden transition-all duration-200"
            style={{
              width: 48,
              height: 32,
              opacity: i === idx ? 1 : 0.3,
              outline: i === idx ? `1.5px solid ${project.accent}` : '1.5px solid transparent',
            }}
          >
            <img src={img} alt="" className="w-full h-full object-cover object-top" />
          </button>
        ))}
      </div>
    </motion.div>
  )
}

// ── Image grid — shows ALL images, no carousel ────────────────────────────────

const ImageGrid = ({
  project,
  onOpen,
}: {
  project: ClientProject
  onOpen: (i: number) => void
}) => {
  const imgs = project.images
  const n = imgs.length

  const imgCell = (src: string, i: number, extraClass = '') => (
    <div
      key={i}
      className={`overflow-hidden cursor-zoom-in group relative ${extraClass}`}
      onClick={() => onOpen(i)}
    >
      <img
        src={src}
        alt={`${project.client} — capture ${i + 1}`}
        className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
        onError={e => { e.currentTarget.src = '/images/showcase/placeholder.svg' }}
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
    </div>
  )

  // 1 image
  if (n === 1) {
    return (
      <div className="w-full" style={{ height: 480 }}>
        {imgCell(imgs[0], 0, 'w-full h-full')}
      </div>
    )
  }

  // 2 images — side by side
  if (n === 2) {
    return (
      <div className="grid grid-cols-2 gap-[3px]" style={{ height: 400 }}>
        {imgs.map((src, i) => imgCell(src, i, 'h-full'))}
      </div>
    )
  }

  // 3 images — 1 large left + 2 stacked right
  if (n === 3) {
    return (
      <div className="grid grid-cols-2 gap-[3px]" style={{ height: 480 }}>
        {imgCell(imgs[0], 0, 'row-span-2 h-full')}
        {imgCell(imgs[1], 1, 'h-full')}
        {imgCell(imgs[2], 2, 'h-full')}
      </div>
    )
  }

  // 4 images — 2×2
  if (n === 4) {
    return (
      <div className="grid grid-cols-2 gap-[3px]">
        {imgs.map((src, i) => imgCell(src, i, 'h-[280px] md:h-[320px]'))}
      </div>
    )
  }

  // 5 images — 1 hero full width + 4 below
  if (n === 5) {
    return (
      <div className="flex flex-col gap-[3px]">
        <div style={{ height: 380 }}>
          {imgCell(imgs[0], 0, 'w-full h-full')}
        </div>
        <div className="grid grid-cols-4 gap-[3px]" style={{ height: 200 }}>
          {imgs.slice(1).map((src, i) => imgCell(src, i + 1, 'h-full'))}
        </div>
      </div>
    )
  }

  // 6+ images — 3 columns grid
  return (
    <div className="grid grid-cols-3 gap-[3px]">
      {imgs.map((src, i) => imgCell(src, i, 'h-[220px] md:h-[260px]'))}
    </div>
  )
}

// ── Project row ───────────────────────────────────────────────────────────────

const ProjectRow = ({ project }: { project: ClientProject; index?: number }) => {
  const [lightbox, setLightbox] = useState<number | null>(null)

  return (
    <>
      <AnimatePresence>
        {lightbox !== null && (
          <Lightbox
            project={project}
            startIndex={lightbox}
            onClose={() => setLightbox(null)}
          />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
        className="border-t border-white/[0.06]"
      >
        {/* Project header */}
        <div className="px-6 md:px-12 pt-10 pb-6 flex items-start justify-between gap-6">
          <div className="flex items-start gap-5">
            {/* Number */}
            <span
              className="font-code text-[11px] tracking-[0.25em] mt-1.5 shrink-0 tabular-nums"
              style={{ color: project.accent }}
            >
              {project.number}
            </span>

            {/* Client info */}
            <div>
              <h3
                className="font-black text-white tracking-tight leading-none mb-1"
                style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
              >
                {project.client}
              </h3>
              <p className="font-code text-xs text-gray-500 tracking-widest uppercase">
                {project.subtitle}
              </p>
            </div>
          </div>

          {/* Right — year + confidential */}
          <div className="text-right shrink-0 pt-1 flex flex-col items-end gap-2">
            <span className="font-code text-[11px] text-gray-600">{project.year}</span>
            {project.confidential && (
              <span className="inline-flex items-center gap-1 font-code text-[9px] text-gray-600 border border-gray-800/80 px-2 py-0.5">
                <Lock className="w-2.5 h-2.5" />
                NDA
              </span>
            )}
          </div>
        </div>

        {/* Images — full width, no padding */}
        <div className="px-0">
          <ImageGrid project={project} onOpen={i => setLightbox(i)} />
        </div>

        {/* Project footer */}
        <div className="px-6 md:px-12 py-6 flex flex-wrap items-start justify-between gap-5">
          {/* Description + tags */}
          <div className="flex-1 min-w-0">
            <p className="text-gray-400 text-sm leading-relaxed max-w-2xl mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span
                  key={tag}
                  className="font-code text-[9px] uppercase tracking-widest px-2.5 py-1 border"
                  style={{
                    color: project.accent,
                    borderColor: `${project.accent}28`,
                    background: `${project.accent}0a`,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="shrink-0">
            {project.href ? (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-code text-sm hover:opacity-70 transition-opacity"
                style={{ color: project.accent }}
              >
                Voir le site <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <span className="inline-flex items-center gap-1.5 font-code text-xs text-gray-700">
                {project.confidential ? <><Lock className="w-3 h-3" /> Sous NDA</> : 'Sur demande'}
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </>
  )
}

// ── Section ───────────────────────────────────────────────────────────────────

const Showcase = () => (
  <section id="showcase" className="bg-[#07090D]">

    {/* Section header */}
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="px-6 md:px-12 pt-20 pb-12 border-b border-white/[0.06] flex items-end justify-between gap-8"
    >
      <div>
        <p className="font-code text-[11px] text-neon-blue tracking-[0.2em] uppercase mb-4">
          ~/showcase
        </p>
        <h2
          className="font-black text-white leading-none tracking-tight"
          style={{ fontSize: 'clamp(42px, 7vw, 88px)' }}
        >
          Réalisations
        </h2>
        <p className="text-gray-500 mt-4 text-sm max-w-lg leading-relaxed">
          Plateformes web sur mesure pour les plus grandes maisons de luxe et entreprises françaises. Chaque projet conçu et développé via{' '}
          <a
            href="https://ajmtech.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neon-purple hover:text-neon-purple/70 transition-colors"
          >
            ajmtech.fr
          </a>
          .
        </p>
      </div>

      <div className="hidden md:flex flex-col items-end gap-1 shrink-0">
        <span className="font-code text-[11px] text-gray-600">{PROJECTS.length} clients</span>
        <span className="font-code text-[11px] text-gray-700">
          {PROJECTS.reduce((acc, p) => acc + p.images.length, 0)} captures
        </span>
      </div>
    </motion.div>

    {/* Projects */}
    <div>
      {PROJECTS.map((p, i) => (
        <ProjectRow key={p.id} project={p} index={i} />
      ))}
    </div>

    {/* Footer */}
    <div className="px-6 md:px-12 py-8 border-t border-white/[0.06] flex items-center justify-between gap-4">
      <a
        href="https://ajmtech.fr"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 font-code text-xs text-neon-purple hover:opacity-70 transition-opacity"
      >
        Voir toutes les réalisations sur ajmtech.fr
        <ExternalLink className="w-3 h-3" />
      </a>
      <span className="font-code text-[10px] text-gray-700">{PROJECTS.length} projets clients</span>
    </div>
  </section>
)

export default Showcase
