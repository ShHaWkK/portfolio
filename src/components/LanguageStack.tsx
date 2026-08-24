import { motion } from 'framer-motion'

// Language bars — inspired by github-linguist breakdown
// Percentages are indicative of relative experience across repos
const LANG_BARS = [
  { name: 'Python',     pct: 38, color: '#3572A5' },
  { name: 'TypeScript', pct: 24, color: '#3178c6' },
  { name: 'JavaScript', pct: 14, color: '#f1e05a' },
  { name: 'C',          pct: 8,  color: '#555555' },
  { name: 'Bash',       pct: 6,  color: '#89e051' },
  { name: 'Perl',       pct: 4,  color: '#0298c3' },
  { name: 'PowerShell', pct: 3,  color: '#5391FE' },
  { name: 'Other',      pct: 3,  color: '#374151' },
]

// Domain groups — chip display
const GROUPS = [
  {
    label:   'Security',
    accent:  '#FF4444',
    langs: [
      { name: 'Python',     color: '#3572A5' },
      { name: 'C',          color: '#6E6E6E' },
      { name: 'Bash',       color: '#89e051' },
      { name: 'Perl',       color: '#0298c3' },
      { name: 'pwntools',   color: '#FF3E3E' },
      { name: 'YARA',       color: '#9A4DFF' },
    ],
  },
  {
    label:   'Frontend',
    accent:  '#22D3EE',
    langs: [
      { name: 'TypeScript', color: '#3178c6' },
      { name: 'React',      color: '#61dafb' },
      { name: 'Next.js',    color: '#e2e8f0' },
      { name: 'Tailwind',   color: '#38bdf8' },
      { name: 'Framer',     color: '#bb4fff' },
      { name: 'Vite',       color: '#646cff' },
    ],
  },
  {
    label:   'Backend',
    accent:  '#00FF9D',
    langs: [
      { name: 'FastAPI',    color: '#009688' },
      { name: 'Node.js',    color: '#8cc84b' },
      { name: 'PostgreSQL', color: '#336791' },
      { name: 'SQLite',     color: '#5B9BD5' },
      { name: 'REST',       color: '#374151' },
    ],
  },
  {
    label:   'Infra & Tools',
    accent:  '#9A4DFF',
    langs: [
      { name: 'Docker',     color: '#0db7ed' },
      { name: 'Linux',      color: '#fcc624' },
      { name: 'Git',        color: '#f05032' },
      { name: 'Vercel',     color: '#e2e8f0' },
      { name: 'Nginx',      color: '#269539' },
    ],
  },
]

const barFade = {
  hidden: { width: 0 },
  show:   (pct: number) => ({
    width: `${pct}%`,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 },
  }),
}

const itemFade = (i: number) => ({
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1], delay: i * 0.04 } },
})

const LanguageStack = () => (
  <section id="languages" className="bg-[#0D1117] relative py-20">
    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

    <div className="container">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mb-12"
      >
        <p className="text-xs text-indigo-400 mb-2 tracking-widest uppercase font-medium">Stack</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-1">
          Stack & Langages
        </h2>
        <p className="text-gray-600 text-sm">
          Distribution mesurée sur l'ensemble des repositories publics.
        </p>
      </motion.div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* LEFT — linguist-style bar breakdown */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Section label */}
          <div className="text-[11px] text-zinc-600 mb-6 border-b border-zinc-800/60 pb-4 tracking-widest uppercase font-medium">
            Distribution par langage · 203 repositories
          </div>

          {/* Stacked colour bar */}
          <div className="flex h-2.5 w-full rounded-sm overflow-hidden mb-7 gap-px">
            {LANG_BARS.filter(l => l.name !== 'Other').map((l) => (
              <motion.div
                key={l.name}
                custom={l.pct}
                variants={barFade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                style={{ background: l.color, width: `${l.pct}%` }}
                title={`${l.name} ${l.pct}%`}
              />
            ))}
          </div>

          {/* Legend */}
          <div className="space-y-3">
            {LANG_BARS.map((l, i) => (
              <motion.div
                key={l.name}
                variants={itemFade(i)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex items-center gap-3"
              >
                <span
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ background: l.color }}
                />
                <div className="flex-1 flex items-center gap-2">
                  <span className="font-code text-[12px] text-gray-400 w-28">{l.name}</span>
                  {/* Mini bar */}
                  <div className="flex-1 h-px bg-gray-800/60 relative">
                    <motion.div
                      custom={l.pct}
                      variants={barFade}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true }}
                      className="absolute inset-y-0 left-0 h-full"
                      style={{ background: l.color, opacity: 0.5 }}
                    />
                  </div>
                  <span className="font-code text-[11px] text-gray-700 w-10 text-right">
                    {l.pct.toFixed(1)}%
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-8 text-[11px] text-zinc-700 border-t border-zinc-800/60 pt-4 space-y-1">
            <div>203 repositories analysés · 8 langages détectés</div>
            <div className="text-zinc-600">Profil : <span className="text-indigo-400/70">Fullstack + Security</span></div>
          </div>
        </motion.div>

        {/* RIGHT — domain chip groups */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {GROUPS.map((g, gi) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1], delay: gi * 0.08 }}
              className="flex flex-col gap-3"
            >
              {/* Group header */}
              <div className="flex items-center gap-2">
                <div className="w-1 h-4 rounded-full shrink-0" style={{ background: g.accent }} />
                <span className="font-code text-[11px] font-semibold tracking-widest uppercase text-gray-500">
                  {g.label}
                </span>
              </div>

              {/* Chips */}
              <div className="flex flex-wrap gap-1.5">
                {g.langs.map((l, li) => (
                  <motion.span
                    key={l.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.25, delay: gi * 0.06 + li * 0.03 }}
                    className="inline-flex items-center gap-1.5 font-code text-[11px] px-2.5 py-1 bg-background border border-gray-800/80 text-gray-500 hover:text-gray-300 hover:border-gray-700 transition-colors duration-150 cursor-default"
                  >
                    <span
                      className="w-2 h-2 rounded-full shrink-0"
                      style={{ background: l.color }}
                    />
                    {l.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  </section>
)

export default LanguageStack
