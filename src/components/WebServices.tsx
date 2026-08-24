import { motion } from 'framer-motion'
import { ArrowRight, Code2, ShoppingCart, Zap, Globe, CheckCircle2 } from 'lucide-react'

const SERVICES = [
  {
    icon: Globe,
    title: 'Site vitrine & Landing page',
    description: 'Design sur mesure, animations fluides, SEO optimisé, formulaire de contact. Livré en 2–3 semaines.',
    features: ['Design custom', 'Responsive mobile', 'SEO & performances', 'Formulaire contact'],
    price: 'Sur devis',
    color: '#6366F1',
  },
  {
    icon: ShoppingCart,
    title: 'Application web complexe',
    description: 'Plateforme événementielle, e-commerce, espace client, live streaming, quiz interactif — comme pour L\'Oréal, Givenchy, Hermès.',
    features: ['Architecture sur mesure', 'Auth & back-office', 'Temps réel (WebSocket)', 'Déploiement inclus'],
    price: 'Sur devis',
    color: '#818CF8',
    featured: true,
  },
  {
    icon: Zap,
    title: 'Maintenance & évolution',
    description: 'Nouvelles fonctionnalités, corrections de bugs, montée de version, optimisations de performance.',
    features: ['Réponse < 24h', 'Rapport mensuel', 'Flexible & sans engagement', 'Suivi dédié'],
    price: 'Sur devis',
    color: '#10B981',
  },
]

const STACK = [
  { label: 'Frontend',  items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'] },
  { label: 'Backend',   items: ['Node.js', 'Express', 'API REST', 'WebSocket', 'PostgreSQL'] },
  { label: 'Déploiement', items: ['Vercel', 'Docker', 'Nginx', 'CI/CD', 'Git'] },
]

const fade = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay } },
})

const WebServices = () => (
  <section id="services" className="bg-[#0D1117] relative">
    {/* Top border accent */}
    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

    <div className="px-8 md:px-14 py-20">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mb-14"
      >
        <p className="text-[11px] text-indigo-400 tracking-[0.2em] uppercase mb-3 font-medium">
          Services
        </p>
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2
              className="font-black text-white leading-none tracking-tight"
              style={{ fontSize: 'clamp(32px, 5vw, 60px)' }}
            >
              Services web
            </h2>
            <p className="text-gray-500 mt-3 text-sm max-w-lg">
              Développeur fullstack disponible pour vos projets web — du site vitrine à la plateforme complexe.
              Basé à Paris, disponible en remote.
            </p>
          </div>
          <a
            href="/web"
            className="inline-flex items-center gap-2 text-xs text-indigo-400 border border-indigo-500/30 px-4 py-2 hover:bg-indigo-500/10 transition-colors shrink-0"
          >
            <Code2 className="w-3.5 h-3.5" />
            Page dédiée clients
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </motion.div>

      {/* Service cards */}
      <div className="grid md:grid-cols-3 gap-4 mb-14">
        {SERVICES.map((s, i) => (
          <motion.div
            key={s.title}
            variants={fade(i * 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className={`relative flex flex-col p-6 border transition-colors duration-200 ${
              s.featured
                ? 'border-indigo-500/30 bg-indigo-500/5'
                : 'border-zinc-800/60 bg-[#0C0C0E] hover:border-zinc-700'
            }`}
          >
            {s.featured && (
              <div className="absolute top-0 inset-x-0 h-[2px]" style={{ background: s.color }} />
            )}
            {s.featured && (
              <span className="absolute top-3 right-3 font-code text-[9px] uppercase tracking-widest px-2 py-0.5"
                style={{ color: s.color, background: `${s.color}15`, border: `1px solid ${s.color}25` }}>
                Populaire
              </span>
            )}

            <div className="mb-4">
              <div className="w-9 h-9 flex items-center justify-center border mb-4"
                style={{ borderColor: `${s.color}30`, background: `${s.color}10` }}>
                <s.icon className="w-4 h-4" style={{ color: s.color }} />
              </div>
              <h3 className="font-bold text-white text-sm mb-2">{s.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{s.description}</p>
            </div>

            <ul className="space-y-2 mb-6 flex-1">
              {s.features.map(f => (
                <li key={f} className="flex items-center gap-2 text-xs text-gray-400">
                  <CheckCircle2 className="w-3 h-3 shrink-0" style={{ color: s.color }} />
                  {f}
                </li>
              ))}
            </ul>

            <div className="pt-4 border-t border-gray-800/60">
              <p className="font-black text-white text-lg">{s.price}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Stack */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="border border-gray-800/60 p-6 mb-10"
      >
        <p className="text-[10px] text-zinc-600 tracking-widest uppercase mb-5 font-medium">Stack technique</p>
        <div className="grid sm:grid-cols-3 gap-6">
          {STACK.map(cat => (
            <div key={cat.label}>
              <p className="text-[10px] text-indigo-400/80 tracking-widest uppercase mb-3 font-medium">{cat.label}</p>
              <div className="flex flex-wrap gap-2">
                {cat.items.map(item => (
                  <span key={item} className="text-[10px] text-zinc-400 border border-zinc-800/80 px-2 py-1">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="flex flex-wrap items-center gap-4"
      >
        <button
          type="button"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#07090D] font-semibold text-sm hover:bg-gray-100 transition-colors"
        >
          Discuter de votre projet
          <ArrowRight className="w-4 h-4" />
        </button>
        <a
          href="/web"
          className="inline-flex items-center gap-2 px-6 py-3 border border-gray-800 text-gray-400 text-sm hover:border-gray-600 hover:text-white transition-all font-code"
        >
          Voir la page dédiée →
        </a>
        <span className="text-xs text-zinc-700 ml-auto hidden md:block">
          Disponible · Réponse sous 24h
        </span>
      </motion.div>
    </div>
  </section>
)

export default WebServices
