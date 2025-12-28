import { motion } from 'framer-motion'
import { ExternalLink, ChevronLeft, ChevronRight, Maximize, X } from 'lucide-react'
import { useState, useEffect } from 'react'

type ShowcaseItem = {
  title: string
  description: string
  imageUrl?: string
  images?: string[]
  legends?: string[]
  href?: string
  confidential?: boolean
  cta?: string
  color: string
  wide?: boolean
  transition?: 'slide' | 'crossfade' | 'parallax'
}

const items: ShowcaseItem[] = [
  {
    title: "Échappée Belle – Givenchy & Kenzo",
    description: "Plateforme événementielle avec live, quiz et authentification.",
    images: [
      "/images/showcase/givenchy/givenchy1.png",
      "/images/showcase/givenchy/givenchy2.png",
      "/images/showcase/givenchy/givenchy3.png",
      "/images/showcase/givenchy/givenchy4.png"
    ],
    legends: ["Login", "Accueil", "Live", "Quiz"],
    confidential: true,
    color: 'neon-blue',
    wide: true,
    transition: 'slide',
  },
  {
    title: "ISSVA – Plateforme",
    description: "Conférences en direct, chat en temps réel, modules d'accès et d'administration.",
    images: [
      "/images/showcase/issva/issva0.png",
      "/images/showcase/issva/issva1.png",
      "/images/showcase/issva/issva2.png",
      "/images/showcase/issva/issva3.png"
    ],
    legends: ["Login", "Accueil", "Live", "Quiz"],
    color: 'neon-purple',
    cta: "Sur demande",
    wide: true,
    transition: 'crossfade',
  },
  {
    title: "Rabanne – Expérience",
    description: "Parcours interactif, galeries média et mises en scène.",
    images: [
      "/images/showcase/rabanne/rabanne0.png",
      "/images/showcase/rabanne/rabanne1.png",
      "/images/showcase/rabanne/rabanne2.png",
      "/images/showcase/rabanne/rabanne3.png",
      "/images/showcase/rabanne/rabanne4.png",
    ],
    legends: ["Accueil", "Campagne", "Galerie", "Détails", "Final"],
    color: 'neon-green',
    cta: "Sur demande",
    wide: true,
    transition: 'parallax',
  },
  {
    title: "L'Oréal Beauty Store",
    description: "E‑commerce beauté: vitrines, catalogue, parcours achat et expériences live.",
    images: [
      "/images/showcase/oreal/oreal1.png",
      "/images/showcase/oreal/oreal2.png",
      "/images/showcase/oreal/oreal3.png",
      "/images/showcase/oreal/oreal4.png",
      "/images/showcase/oreal/oreal5.png",
      "/images/showcase/oreal/oreal6.png",
      "/images/showcase/oreal/oreal7.png",
      "/images/showcase/oreal/oreal8.png",
    ],
    legends: ["Accueil vitrine", "Catégories", "Fiche produit", "Panier", "Paiement", "Live shopping", "Promotions", "Espace client"],
    color: 'neon-blue',
    cta: "Sur demande",
    wide: true,
    transition: 'slide',
  },
]

const ShowcaseCard = ({ item }: { item: ShowcaseItem }) => {
  const hasCarousel = Array.isArray(item.images) && item.images.length > 0
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState<1 | -1>(1)
  const [fullscreen, setFullscreen] = useState(false)
  const currentSrc = hasCarousel ? item.images![index] : item.imageUrl!

  const prev = () => {
    setDirection(-1)
    setIndex(i => (i - 1 + (item.images!.length)) % (item.images!.length))
  }
  const next = () => {
    setDirection(1)
    setIndex(i => (i + 1) % (item.images!.length))
  }
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [mouseStart, setMouseStart] = useState<number | null>(null)

  useEffect(() => {
    if (!fullscreen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setFullscreen(false)
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [fullscreen])

  const transition = item.transition || 'crossfade'
  const initialAnim =
    transition === 'slide'
      ? { opacity: 0, x: direction === 1 ? 40 : -40 }
      : transition === 'parallax'
      ? { opacity: 0, x: direction === 1 ? 20 : -20, scale: 0.99 }
      : { opacity: 0 }
  const animateAnim =
    transition === 'slide'
      ? { opacity: 1, x: 0 }
      : transition === 'parallax'
      ? { opacity: 1, x: 0, scale: 1 }
      : { opacity: 1 }
  const legend = hasCarousel ? item.legends?.[index] : undefined

  return (
    <div className="cyber-card p-0 overflow-hidden">
      <div
        className="relative group"
        tabIndex={0}
        onKeyDown={(e) => {
          if (!hasCarousel) return
          if (e.key === 'ArrowLeft') prev()
          if (e.key === 'ArrowRight') next()
        }}
        onTouchStart={(e) => setTouchStart(e.changedTouches[0].clientX)}
        onTouchEnd={(e) => {
          if (!hasCarousel || touchStart === null) return
          const dx = e.changedTouches[0].clientX - touchStart
          if (dx > 30) prev()
          if (dx < -30) next()
          setTouchStart(null)
        }}
        onMouseDown={(e) => setMouseStart(e.clientX)}
        onMouseUp={(e) => {
          if (!hasCarousel || mouseStart === null) return
          const dx = e.clientX - mouseStart
          if (dx > 30) prev()
          if (dx < -30) next()
          setMouseStart(null)
        }}
      >
        <motion.img
          key={currentSrc}
          src={currentSrc}
          alt={item.title}
          loading="lazy"
          onError={(e) => {
            const target = e.currentTarget as HTMLImageElement
            target.src = '/images/showcase/placeholder.svg'
          }}
          initial={initialAnim}
          animate={animateAnim}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="w-full h-[460px] md:h-[640px] object-cover rounded-none"
        />
        {legend && (
          <div className="absolute bottom-16 left-4 bg-background/80 border border-gray-700 text-white font-code text-xs px-3 py-1 rounded z-20">
            {legend}
          </div>
        )}
        {hasCarousel && (
          <div className="absolute inset-0 flex items-center justify-between px-2 md:opacity-0 opacity-100 md:group-hover:opacity-100 transition-opacity duration-300 z-20">
            <button
              type="button"
              onClick={prev}
              className="w-9 h-9 rounded-full bg-background/70 border border-gray-700 flex items-center justify-center text-white hover:text-neon-blue"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={next}
              className="w-9 h-9 rounded-full bg-background/70 border border-gray-700 flex items-center justify-center text-white hover:text-neon-blue"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}
        <button
          type="button"
          onClick={() => setFullscreen(true)}
          className="absolute top-3 right-3 w-9 h-9 rounded bg-background/70 border border-gray-700 flex items-center justify-center text-white hover:text-neon-blue z-20"
          aria-label="Plein écran"
        >
          <Maximize className="w-5 h-5" />
        </button>
        {hasCarousel && (
          <>
            <button
              type="button"
              aria-hidden="true"
              className="absolute inset-y-0 left-0 w-1/2 z-10 bg-transparent"
              onClick={prev}
            />
            <button
              type="button"
              aria-hidden="true"
              className="absolute inset-y-0 right-0 w-1/2 z-10 bg-transparent"
              onClick={next}
            />
          </>
        )}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white font-code text-lg">{item.title}</h3>
          <p className="text-gray-300 text-sm">{item.description}</p>
        </div>
        {hasCarousel && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {item.images!.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full ${i === index ? 'bg-neon-purple' : 'bg-gray-600'} transition-colors`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        {fullscreen && (
          <div className="fixed inset-0 bg-black/90 z-40 flex items-center justify-center">
            <div className="absolute top-4 right-4">
              <button
                type="button"
                onClick={() => setFullscreen(false)}
                className="w-10 h-10 rounded bg-background/70 border border-gray-700 flex items-center justify-center text-white hover:text-neon-blue"
                aria-label="Fermer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            {legend && (
              <div className="absolute bottom-8 left-8 bg-background/80 border border-gray-700 text-white font-code text-sm px-4 py-2 rounded">
                {legend}
              </div>
            )}
            <div className="absolute inset-0 flex items-center justify-between px-6">
              <button
                type="button"
                onClick={prev}
                className="w-10 h-10 rounded-full bg-background/70 border border-gray-700 flex items-center justify-center text-white hover:text-neon-blue"
                aria-label="Précédent"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={next}
                className="w-10 h-10 rounded-full bg-background/70 border border-gray-700 flex items-center justify-center text-white hover:text-neon-blue"
                aria-label="Suivant"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            <motion.img
              key={`${currentSrc}-fullscreen`}
              src={currentSrc}
              alt={item.title}
              loading="lazy"
              onError={(e) => {
                const target = e.currentTarget as HTMLImageElement
                target.src = '/images/showcase/placeholder.svg'
              }}
              initial={initialAnim}
              animate={animateAnim}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="max-w-[90vw] max-h-[90vh] object-contain rounded"
            />
          </div>
        )}
      </div>
      <div className="p-4 flex items-center justify-between border-t border-gray-800">
        {item.href ? (
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-neon-blue hover:text-neon-green font-code transition-colors duration-300"
          >
            <ExternalLink className="w-4 h-4" />
            Voir le site
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 px-3 py-1 border border-neon-blue text-neon-blue font-code text-xs">
            {item.confidential ? "Confidentiel" : item.cta || "Sur demande"}
          </span>
        )}
        <span className="text-xs font-code text-gray-400">{hasCarousel ? "Galerie" : "Photo"}</span>
      </div>
    </div>
  )
}

const Showcase = () => {
  return (
    <section id="showcase" className="section bg-background-alt relative">
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'url("/backgrounds/circuit-pattern.svg")', backgroundSize: 'cover' }}></div>
      </div>
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-1 border border-neon-blue bg-background">
            <span className="font-code text-sm text-neon-blue">~/showcase</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white cyber-text">
            Sites en ligne
          </h2>
          <div className="w-32 h-1 bg-neon-blue mx-auto relative">
            <div className="absolute -top-1 left-0 w-2 h-3 bg-neon-blue"></div>
            <div className="absolute -top-1 right-0 w-2 h-3 bg-neon-blue"></div>
          </div>
          <p className="mt-6 text-gray-300 font-code text-sm">
            Portfolio visuel avec photos et liens. Remplacez les placeholders par vos images.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {items.map((item, idx) => (
            <div key={idx} className={item.wide ? 'md:col-span-3' : ''}>
              <ShowcaseCard item={item} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Showcase
