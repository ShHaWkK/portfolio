import { motion } from 'framer-motion'
import { Lock, Globe } from 'lucide-react'

interface Realisation {
  brand:       string
  logo:        string
  accent:      string
  type:        string
  year:        string
  description: string
  stack:       string[]
  featured?:   boolean
}

const REALISATIONS: Realisation[] = [
  {
    brand:       'Givenchy',
    logo:        '/images/logos/givenchy.svg',
    accent:      '#C9A96E',
    type:        'Plateforme événementielle',
    year:        '2024',
    description: 'Paris Fashion Week — invitations digitales, live streaming, espace presse accrédité, gestion des flux en temps réel.',
    stack:       ['Next.js', 'TypeScript', 'Tailwind', 'WebSocket', 'Framer Motion'],
    featured:    true,
  },
  {
    brand:       "L'Oréal",
    logo:        '/images/logos/loreal.svg',
    accent:      '#FF4D8D',
    type:        'Portail marketing B2B',
    year:        '2024',
    description: 'Outil interne de gestion des campagnes et assets médias pour les équipes marketing mondiales.',
    stack:       ['React', 'Node.js', 'TypeScript', 'PostgreSQL'],
  },
  {
    brand:       'Prada',
    logo:        '/images/logos/prada.svg',
    accent:      '#C8B89A',
    type:        'Site vitrine & CMS headless',
    year:        '2024',
    description: 'Architecture Jamstack, Core Web Vitals 95+, internationalisation 8 régions, déploiement edge.',
    stack:       ['Next.js', 'Prismic', 'TypeScript', 'Tailwind'],
  },
  {
    brand:       'Valentino',
    logo:        '/images/logos/valentino.svg',
    accent:      '#B5121B',
    type:        'E-commerce collection capsule',
    year:        '2023',
    description: 'Boutique éphémère pour collection limitée — checkout Stripe, réservations, CMS produits.',
    stack:       ['Next.js', 'Stripe', 'Sanity', 'TypeScript'],
  },
  {
    brand:       'Carolina Herrera',
    logo:        '/images/logos/carolina-herrera.svg',
    accent:      '#DB2777',
    type:        'Expérience digitale interactive',
    year:        '2024',
    description: 'Lancement de collection — animations GSAP, parallax cinematique, formulaire d\'invitation VIP.',
    stack:       ['React', 'GSAP', 'TypeScript', 'SCSS'],
  },
  {
    brand:       'Caudalie',
    logo:        '/images/logos/caudalie.svg',
    accent:      '#7C3AED',
    type:        'Refonte e-commerce',
    year:        '2024',
    description: 'Migration headless Shopify, optimisation conversion, Lighthouse 90+, SEO technique complet.',
    stack:       ['Next.js', 'Shopify', 'TypeScript', 'Tailwind'],
  },
]

const fade = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.42, ease: [0.22, 1, 0.36, 1], delay } },
})

const Card = ({ r, i }: { r: Realisation; i: number }) => (
  <motion.article
    variants={fade(i * 0.06)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: '-60px' }}
    className="group relative flex flex-col bg-[#0D1117] border border-gray-800/50 hover:border-gray-700/80 transition-colors duration-300 overflow-hidden"
  >
    {/* Brand-colour stripe */}
    <div className="h-[3px] w-full shrink-0" style={{ background: r.accent }} />

    <div className="flex flex-col flex-1 p-5 gap-4">

      {/* Logo + year */}
      <div className="flex items-center justify-between">
        <img
          src={r.logo}
          alt={r.brand}
          className="h-5 w-auto object-contain opacity-50 group-hover:opacity-90 transition-opacity duration-300"
          onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none' }}
        />
        <span className="font-code text-[10px] text-gray-800">{r.year}</span>
      </div>

      {/* Type + description */}
      <div className="flex flex-col gap-1.5">
        <span
          className="font-code text-[10px] font-semibold tracking-widest uppercase"
          style={{ color: r.accent }}
        >
          {r.type}
        </span>
        <p className="text-xs text-gray-500 leading-relaxed">
          {r.description}
        </p>
      </div>

      {/* Stack chips */}
      <div className="flex flex-wrap gap-1.5 mt-auto">
        {r.stack.map(s => (
          <span
            key={s}
            className="font-code text-[10px] px-2 py-0.5 bg-gray-900/80 border border-gray-800/80 text-gray-600 group-hover:text-gray-500 transition-colors"
          >
            {s}
          </span>
        ))}
      </div>

      {/* NDA */}
      <div className="flex items-center gap-1.5 pt-3 border-t border-gray-800/50">
        <Lock className="w-2.5 h-2.5 text-gray-800" />
        <span className="font-code text-[9px] text-gray-800">NDA — aperçu sur demande</span>
      </div>
    </div>

    {/* Hover glow — brand colour bleeds into the dark bg */}
    <div
      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      style={{ background: `radial-gradient(ellipse 80% 50% at 50% 0%, ${r.accent}10 0%, transparent 70%)` }}
    />
  </motion.article>
)

const WebRealisations = () => (
  <section id="realisations" className="bg-background relative py-20">
    {/* Separator */}
    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

    <div className="container">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mb-10"
      >
        <p className="text-xs text-indigo-400 mb-2 tracking-widest uppercase font-medium">Réalisations</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-1">
          Réalisations Web
        </h2>
        <p className="text-gray-600 text-sm max-w-md">
          Projets clients — Luxe & Digital. Chaque réalisation sous accord de confidentialité.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {REALISATIONS.map((r, i) => <Card key={r.brand} r={r} i={i} />)}
      </div>

      {/* Footer note */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="mt-8 flex items-center gap-2 text-gray-800 font-code text-[11px]"
      >
        <Globe className="w-3 h-3" />
        <span>
          Toutes les réalisations sont confidentielles. Screenshots & références disponibles lors d'un entretien.
        </span>
      </motion.div>
    </div>
  </section>
)

export default WebRealisations
