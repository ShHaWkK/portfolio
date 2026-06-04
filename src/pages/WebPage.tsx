import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowRight, ExternalLink, Mail, Globe, Code2,
  ShoppingCart, Zap, Shield, Smartphone, Wrench,
  ChevronLeft, ChevronRight, X, Maximize2, CheckCircle2,
  Server, Lock, FileText, BarChart3,
} from 'lucide-react'

//  Services 

const SERVICES = [
  {
    icon: Globe,
    title: 'Sites web & Vitrines',
    color: '#00E5FF',
    items: [
      'Site vitrine premium sur mesure',
      'Landing page & page de vente',
      'Blog / portfolio',
      'SEO technique & performances',
      'Responsive mobile-first',
    ],
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce',
    color: '#FF2D55',
    items: [
      'Boutique en ligne sur mesure',
      'Catalogue produits & filtres',
      'Panier & tunnel d\'achat',
      'Paiement (Stripe, PayPal…)',
      'Back-office & gestion stocks',
    ],
  },
  {
    icon: Code2,
    title: 'Applications web',
    color: '#9A4DFF',
    featured: true,
    items: [
      'Plateforme événementielle',
      'Système de réservation (booking)',
      'Espace client & tableau de bord',
      'Live streaming & quiz interactif',
      'Chat & notifications temps réel',
      'Application SaaS & multi-tenant',
    ],
  },
  {
    icon: Smartphone,
    title: 'Applications mobiles',
    color: '#F5A623',
    items: [
      'Application iOS & Android',
      'React Native (cross-platform)',
      'Interface utilisateur native',
      'Notifications push',
      'Synchronisation API backend',
    ],
  },
  {
    icon: Wrench,
    title: 'Logiciels sur mesure',
    color: '#00FF9D',
    items: [
      'CRM & ERP personnalisé',
      'Outil interne d\'entreprise',
      'Automatisation de processus',
      'Tableaux de bord & reporting',
      'Intégration API tierces',
    ],
  },
  {
    icon: Shield,
    title: 'Sécurité & Conformité web',
    color: '#FF6B35',
    items: [
      'Audit de sécurité applicative',
      'Mise en conformité RGPD',
      'Accompagnement ISO 27001',
      'Protection contre les attaques (XSS, SQLi…)',
      'Politique de sécurité & cookies',
    ],
  },
]

const STACK = [
  { label: 'Frontend',    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
  { label: 'Backend',     items: ['Node.js', 'Express', 'API REST / GraphQL', 'WebSocket', 'PostgreSQL', 'MongoDB'] },
  { label: 'Mobile',      items: ['React Native', 'Expo', 'iOS', 'Android'] },
  { label: 'Sécurité',    items: ['RGPD', 'ISO 27001', 'OWASP', 'Audit', 'Pentest web'] },
  { label: 'Déploiement', items: ['Vercel', 'Docker', 'Nginx', 'CI/CD', 'AWS / VPS'] },
]

const PROCESS = [
  { n: '01', title: 'Cadrage',       desc: 'On discute de votre besoin, vos objectifs et contraintes. Devis détaillé sous 48h.' },
  { n: '02', title: 'Design',        desc: 'Maquettes et prototypes interactifs pour valider chaque écran avant le développement.' },
  { n: '03', title: 'Développement', desc: 'Développement itératif avec accès à une démo en continu et points réguliers.' },
  { n: '04', title: 'Livraison',     desc: 'Tests complets, optimisations, déploiement en production et transfert du projet.' },
]

//  Clients — tous les 8 

const CLIENTS = [
  {
    id: 'givenchy', label: 'Givenchy × Kenzo', type: 'Plateforme événementielle', accent: '#C9A96E',
    images: [
      '/images/showcase/givenchy/givenchy1.png',
      '/images/showcase/givenchy/givenchy2.png',
      '/images/showcase/givenchy/givenchy3.png',
      '/images/showcase/givenchy/givenchy4.png',
    ],
  },
  {
    id: 'oreal', label: "L'Oréal", type: 'E-commerce beauté', accent: '#FF2D55',
    images: [
      '/images/showcase/oreal/accueil_oreal.png',
      '/images/showcase/oreal/catalog.png',
      '/images/showcase/oreal/filter.png',
      '/images/showcase/oreal/product.png',
      '/images/showcase/oreal/newsletter.png',
    ],
  },
  {
    id: 'hermes', label: 'Hermès', type: 'Expérience digitale', accent: '#E07B39',
    images: ['/images/showcase/hermes/login.png', '/images/showcase/hermes/quizz.png'],
  },
  {
    id: 'rabanne', label: 'Rabanne', type: 'Expérience immersive', accent: '#F5A623',
    images: [
      '/images/showcase/rabanne/rabanne0.png',
      '/images/showcase/rabanne/rabanne1.png',
      '/images/showcase/rabanne/rabanne2.png',
      '/images/showcase/rabanne/rabanne3.png',
    ],
  },
  {
    id: 'carolina', label: 'Carolina Herrera', type: 'Plateforme événementielle', accent: '#DB2777',
    images: [
      '/images/showcase/carolina/accueil.png',
      '/images/showcase/carolina/login.png',
      '/images/showcase/carolina/chat_and_live.png',
      '/images/showcase/carolina/quizz.png',
      '/images/showcase/carolina/quizz2.png',
      '/images/showcase/carolina/answer_quiz.png',
    ],
  },
  {
    id: 'caudalie', label: 'Caudalie', type: 'Application iOS', accent: '#7C3AED',
    images: [
      '/images/showcase/caudalie/accueil.png',
      '/images/showcase/caudalie/chat.png',
      '/images/showcase/caudalie/chat2.png',
    ],
  },
  {
    id: 'issva', label: 'ISSVA', type: 'Plateforme conférences', accent: '#5E8EFF',
    images: [
      '/images/showcase/issva/accueil.png',
      '/images/showcase/issva/live.png',
      '/images/showcase/issva/login.png',
      '/images/showcase/issva/sessions.png',
    ],
  },
  {
    id: 'atee', label: 'ATEE', type: 'Congrès digitaux', accent: '#0D9488',
    images: [
      '/images/showcase/atee/accueil.png',
      '/images/showcase/atee/replay.png',
      '/images/showcase/atee/pdf.png',
    ],
  },
]

//  Lightbox 

const Lightbox = ({ images, idx: init, onClose }: { images: string[]; idx: number; onClose: () => void }) => {
  const [idx, setIdx] = useState(init)
  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      <button type="button" aria-label="Fermer" onClick={onClose}
        className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center border border-white/10 text-gray-400 hover:text-white transition-colors">
        <X className="w-4 h-4" />
      </button>
      <button type="button" aria-label="Précédent"
        onClick={e => { e.stopPropagation(); setIdx(i => (i - 1 + images.length) % images.length) }}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center border border-white/10 text-gray-300 hover:text-white transition-colors">
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button type="button" aria-label="Suivant"
        onClick={e => { e.stopPropagation(); setIdx(i => (i + 1) % images.length) }}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center border border-white/10 text-gray-300 hover:text-white transition-colors">
        <ChevronRight className="w-5 h-5" />
      </button>
      <AnimatePresence mode="wait">
        <motion.img key={idx} src={images[idx]}
          initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
          className="max-w-[86vw] max-h-[85vh] object-contain"
          onClick={e => e.stopPropagation()}
          onError={e => { e.currentTarget.src = '/images/showcase/placeholder.svg' }} />
      </AnimatePresence>
      <div className="absolute bottom-4 inset-x-0 flex justify-center gap-1.5">
        {images.map((_, i) => (
          <button key={i} type="button" aria-label={`Image ${i + 1}`}
            onClick={e => { e.stopPropagation(); setIdx(i) }}
            className="w-1.5 h-1.5 rounded-full transition-all"
            style={{ background: i === idx ? '#fff' : 'rgba(255,255,255,0.2)' }} />
        ))}
      </div>
    </motion.div>
  )
}

//  ImageGrid 

const ImageGrid = ({ images, accent, onOpen }: { images: string[]; accent: string; onOpen: (i: number) => void }) => {
  const n = images.length
  const cell = (src: string, i: number, cls = '') => (
    <div key={i} className={`overflow-hidden cursor-zoom-in group relative ${cls}`} onClick={() => onOpen(i)}>
      <img src={src} alt={`Capture ${i + 1}`}
        className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
        onError={e => { e.currentTarget.src = '/images/showcase/placeholder.svg' }} />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
        <Maximize2 className="w-4 h-4 text-white opacity-0 group-hover:opacity-70 transition-opacity" />
      </div>
    </div>
  )

  if (n === 1) return <div style={{ height: 440 }}>{cell(images[0], 0, 'w-full h-full')}</div>
  if (n === 2) return <div className="grid grid-cols-2 gap-[3px]" style={{ height: 380 }}>{images.map((s, i) => cell(s, i, 'h-full'))}</div>
  if (n === 3) return (
    <div className="grid grid-cols-2 gap-[3px]" style={{ gridTemplateRows: 'repeat(2, 220px)' }}>
      {cell(images[0], 0, 'row-span-2')}
      {cell(images[1], 1)}
      {cell(images[2], 2)}
    </div>
  )
  if (n === 4) return (
    <div className="flex flex-col gap-[3px]">
      <div style={{ height: 320 }}>{cell(images[0], 0, 'w-full h-full')}</div>
      <div className="grid grid-cols-3 gap-[3px]" style={{ height: 180 }}>
        {images.slice(1).map((s, i) => cell(s, i + 1, 'h-full'))}
      </div>
    </div>
  )
  if (n === 5) return (
    <div className="flex flex-col gap-[3px]">
      <div style={{ height: 300 }}>{cell(images[0], 0, 'w-full h-full')}</div>
      <div className="grid grid-cols-4 gap-[3px]" style={{ height: 160 }}>
        {images.slice(1).map((s, i) => cell(s, i + 1, 'h-full'))}
      </div>
    </div>
  )
  return (
    <div className="grid grid-cols-3 gap-[3px]">
      {images.map((s, i) => cell(s, i, 'h-[200px] md:h-[240px]'))}
    </div>
  )
}

//  Page 

const WebPage = () => {
  const [lb, setLb]               = useState<{ images: string[]; idx: number } | null>(null)
  const [activeClient, setActive] = useState(0)
  const client = CLIENTS[activeClient]

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div className="min-h-screen bg-[#07090D] text-white">
      <AnimatePresence>{lb && <Lightbox images={lb.images} idx={lb.idx} onClose={() => setLb(null)} />}</AnimatePresence>

      {/*  Header  */}
      <header className="fixed top-0 inset-x-0 z-40 bg-[#07090D]/90 backdrop-blur-md border-b border-white/[0.05]">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="/" className="flex items-center gap-1.5 font-code text-xs text-gray-500 hover:text-white transition-colors">
              <ChevronLeft className="w-3.5 h-3.5" /> Portfolio
            </a>
            <span className="text-gray-800">·</span>
            <span className="font-semibold text-white text-sm">Alexandre Uzan</span>
            <span className="font-code text-[10px] text-neon-purple border border-neon-purple/30 px-2 py-0.5 ml-1 hidden sm:inline">
              Dev Web & Mobile
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-5 font-code text-[11px] text-gray-500">
            {[['services-web', 'Services'], ['realisations-web', 'Réalisations'], ['process-web', 'Process'], ['contact-web', 'Contact']].map(([id, label]) => (
              <button key={id} type="button" onClick={() => scrollTo(id)} className="hover:text-white transition-colors">{label}</button>
            ))}
          </nav>
          <button type="button" onClick={() => scrollTo('contact-web')}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white text-[#07090D] font-semibold text-xs hover:bg-gray-100 transition-colors">
            Discuter du projet <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </header>

      {/*  Hero  */}
      <section className="pt-32 pb-20 px-6 max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
          <p className="font-code text-[11px] text-neon-purple tracking-[0.2em] uppercase mb-6">
            Développeur Fullstack · 3 ans d'expérience · Paris / Remote
          </p>
          <h1 className="font-black text-white leading-[0.9] tracking-tight mb-6"
            style={{ fontSize: 'clamp(40px, 6.5vw, 82px)' }}>
            Sites, apps, logiciels —<br />
            <span style={{ color: '#00E5FF' }}>tout ce dont votre entreprise a besoin.</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mb-8">
            Du site vitrine à la plateforme e-commerce complexe, en passant par les applications mobiles,
            les logiciels sur mesure et la mise en conformité <strong className="text-white">RGPD / ISO 27001</strong>.
            Clients : Givenchy, L'Oréal, Hermès, Rabanne, Carolina Herrera, Caudalie…
          </p>

          <div className="flex flex-wrap gap-3 mb-12">
            <button type="button" onClick={() => scrollTo('services-web')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#07090D] font-semibold text-sm hover:bg-gray-100 transition-colors">
              Voir les services <ArrowRight className="w-4 h-4" />
            </button>
            <button type="button" onClick={() => scrollTo('realisations-web')}
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-700 text-gray-300 text-sm hover:border-gray-500 hover:text-white transition-all">
              Voir les réalisations
            </button>
          </div>

          {/* Chiffres clés */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-gray-800/30 border border-gray-800/60 overflow-hidden">
            {[
              { v: '8+',      l: 'clients grands comptes', c: '#9A4DFF' },
              { v: '3 ans',   l: 'expérience fullstack',   c: '#00E5FF' },
              { v: '100 %',   l: 'projets livrés',          c: '#00FF9D' },
              { v: 'Remote',  l: 'Paris & partout',         c: '#FF6B35' },
            ].map(s => (
              <div key={s.l} className="bg-[#0D1117] px-5 py-5">
                <p className="font-black text-2xl mb-1" style={{ color: s.c }}>{s.v}</p>
                <p className="font-code text-[10px] text-gray-600 leading-snug">{s.l}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/*  Services  */}
      <section id="services-web" className="py-20 border-t border-white/[0.05]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="font-code text-[11px] text-neon-blue tracking-[0.2em] uppercase mb-3">Ce que je fais</p>
            <h2 className="font-black text-white leading-none tracking-tight mb-3"
              style={{ fontSize: 'clamp(30px, 4vw, 52px)' }}>
              Services
            </h2>
            <p className="text-gray-500 text-sm mb-12 max-w-lg">
              De la conception à la mise en ligne — une expertise complète pour tous vos projets digitaux.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {SERVICES.map((s, i) => (
              <motion.div key={s.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className={`relative flex flex-col p-6 border transition-colors duration-200 ${
                  s.featured
                    ? 'border-neon-purple/40 bg-neon-purple/5 hover:border-neon-purple/60'
                    : 'border-gray-800/60 bg-[#080B10] hover:border-gray-700'
                }`}
              >
                {s.featured && <div className="absolute top-0 inset-x-0 h-[2px]" style={{ background: s.color }} />}
                <div className="w-9 h-9 flex items-center justify-center border mb-4"
                  style={{ borderColor: `${s.color}30`, background: `${s.color}10` }}>
                  <s.icon className="w-4 h-4" style={{ color: s.color }} />
                </div>
                <h3 className="font-bold text-white text-sm mb-4">{s.title}</h3>
                <ul className="space-y-2 flex-1">
                  {s.items.map(it => (
                    <li key={it} className="flex items-start gap-2 text-xs text-gray-400">
                      <CheckCircle2 className="w-3 h-3 shrink-0 mt-[1px]" style={{ color: s.color }} />
                      {it}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Stack */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="mt-8 border border-gray-800/60 p-6">
            <p className="font-code text-[10px] text-gray-600 tracking-widest uppercase mb-5">Stack technique</p>
            <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {STACK.map(cat => (
                <div key={cat.label}>
                  <p className="font-code text-[10px] text-neon-blue tracking-widest uppercase mb-3">{cat.label}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.items.map(it => (
                      <span key={it} className="font-code text-[9px] text-gray-400 border border-gray-800/80 px-2 py-1">
                        {it}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/*  Réalisations  */}
      <section id="realisations-web" className="py-20 border-t border-white/[0.05]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="font-code text-[11px] text-neon-blue tracking-[0.2em] uppercase mb-3">Références</p>
            <h2 className="font-black text-white leading-none tracking-tight mb-12"
              style={{ fontSize: 'clamp(30px, 4vw, 52px)' }}>
              Ils m'ont fait confiance
            </h2>
          </motion.div>

          {/* Client tabs — scrollable */}
          <div className="flex overflow-x-auto border-b border-gray-800/40 gap-0 mb-0">
            {CLIENTS.map((c, i) => (
              <button key={c.id} type="button" onClick={() => setActive(i)}
                className={`relative flex items-center gap-2 pb-3 pt-1 pr-6 font-code text-xs whitespace-nowrap transition-colors duration-200 ${
                  i === activeClient ? 'text-white' : 'text-gray-600 hover:text-gray-400'
                }`}>
                <span className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ background: c.accent, opacity: i === activeClient ? 1 : 0.3 }} />
                {c.label}
                {i === activeClient && (
                  <motion.div layoutId="web-tab" className="absolute bottom-0 left-0 right-6 h-[2px]"
                    style={{ background: c.accent }}
                    transition={{ type: 'spring', stiffness: 400, damping: 35 }} />
                )}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div key={client.id}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}>
              <div className="py-5 flex items-center justify-between">
                <div>
                  <h3 className="font-black text-white text-2xl md:text-3xl">{client.label}</h3>
                  <p className="font-code text-xs mt-1" style={{ color: client.accent }}>{client.type}</p>
                </div>
                <span className="font-code text-[10px] text-gray-600 border border-gray-800 px-2 py-1">Confidentiel</span>
              </div>
              <ImageGrid images={client.images} accent={client.accent}
                onOpen={i => setLb({ images: client.images, idx: i })} />
            </motion.div>
          </AnimatePresence>

          {/* Dots navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {CLIENTS.map((c, i) => (
              <button key={c.id} type="button" aria-label={c.label} onClick={() => setActive(i)}
                className="w-6 h-6 flex items-center justify-center">
                <span className="block rounded-full transition-all duration-300"
                  style={{ width: i === activeClient ? 20 : 6, height: 3, borderRadius: 2,
                    background: i === activeClient ? c.accent : '#374151' }} />
              </button>
            ))}
          </div>

          <div className="mt-6 text-center">
            <a href="/#showcase" className="inline-flex items-center gap-2 font-code text-xs text-gray-500 hover:text-white transition-colors">
              Voir toutes les captures sur le portfolio <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/*  Process  */}
      <section id="process-web" className="py-20 border-t border-white/[0.05]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="font-code text-[11px] text-neon-purple tracking-[0.2em] uppercase mb-3">Comment ça se passe</p>
            <h2 className="font-black text-white leading-none tracking-tight mb-12"
              style={{ fontSize: 'clamp(30px, 4vw, 52px)' }}>
              Process de travail
            </h2>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PROCESS.map((p, i) => (
              <motion.div key={p.n}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="p-5 border border-gray-800/60 bg-[#080B10]">
                <span className="font-black text-5xl text-gray-800/40 block mb-3 leading-none">{p.n}</span>
                <h4 className="font-bold text-white text-sm mb-2">{p.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/*  Contact  */}
      <section id="contact-web" className="py-20 border-t border-white/[0.05]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="font-code text-[11px] text-neon-green tracking-[0.2em] uppercase mb-3">Démarrer un projet</p>
              <h2 className="font-black text-white leading-none tracking-tight mb-4"
                style={{ fontSize: 'clamp(30px, 4vw, 52px)' }}>
                Vous avez un projet ?
              </h2>
              <p className="text-gray-400 text-base leading-relaxed mb-8">
                Décrivez-moi votre besoin et je vous réponds sous 24h avec une estimation et mes disponibilités.
                Devis gratuit, sans engagement.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                <a href="mailto:contact@ajmtech.fr"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#07090D] font-semibold text-sm hover:bg-gray-100 transition-colors">
                  <Mail className="w-4 h-4" /> contact@ajmtech.fr
                </a>
                <a href="https://ajmtech.fr" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-neon-purple/40 text-neon-purple text-sm hover:bg-neon-purple/10 transition-all">
                  <Globe className="w-4 h-4" /> ajmtech.fr <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
              <div className="grid sm:grid-cols-3 gap-6 pt-8 border-t border-gray-800/60">
                {[
                  { label: 'Réponse', value: '< 24h' },
                  { label: 'Devis',   value: 'Gratuit' },
                  { label: 'Zone',    value: 'Paris & Remote' },
                ].map(i => (
                  <div key={i.label}>
                    <p className="font-code text-[10px] text-gray-600 uppercase tracking-widest mb-1">{i.label}</p>
                    <p className="font-bold text-white text-sm">{i.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/*  Footer  */}
      <footer className="border-t border-white/[0.05] py-6">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between gap-4 flex-wrap">
          <p className="font-code text-[11px] text-gray-700">
            © 2025 Alexandre Uzan —{' '}
            <a href="https://ajmtech.fr" className="hover:text-gray-400 transition-colors">ajmtech.fr</a>
          </p>
          <a href="/" className="font-code text-[11px] text-gray-600 hover:text-white transition-colors flex items-center gap-1.5">
            <Code2 className="w-3 h-3" /> Portfolio complet
          </a>
        </div>
      </footer>
    </div>
  )
}

export default WebPage
