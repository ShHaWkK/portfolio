import { motion } from 'framer-motion'
import { Code, Database, Terminal, Server, Cpu, Laptop } from 'lucide-react'
import { useTranslation } from '../hooks/useLanguage'
import {
  siPython,
  siJavascript,
  siTypescript,
  siPhp,
  siGo,
  siCplusplus,
  siGnubash,
  siReact,
  siPostgresql,
  siMysql,
  siSqlite,
  siMicrosoftazure,
  siHeroku,
  siRender,
  siVisualstudiocode,
  siDocker,
  siGit,
  siWireshark,
  siBurpsuite,
  siMetasploit,
  siHtml5,
  siCss3,
  siRust,
  siArchlinux,
  siFedora,
  siKalilinux,
  siApple,
  siWindows,
} from 'simple-icons/icons'

const Technologies = () => {
  const { t, isLoading } = useTranslation()
  
  if (isLoading) {
    return (
      <section id="technologies" className="section bg-background-alt relative">
        <div className="container relative z-10 flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-neon-blue mx-auto mb-4"></div>
            <p className="text-neon-blue font-code">Chargement des technologies...</p>
          </div>
        </div>
      </section>
    )
  }

  const content = t('technologies')

  const hexToRGBA = (hex: string, alpha: number) => {
    const clean = hex.replace('#', '')
    const bigint = parseInt(clean, 16)
    const r = (bigint >> 16) & 255
    const g = (bigint >> 8) & 255
    const b = bigint & 255
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  }

  const getIcon = (type: string, color: string) => {
    const iconClass = `w-6 h-6 text-${color}`
    switch (type) {
      case 'code':
        return <Code className={iconClass} />
      case 'terminal':
        return <Terminal className={iconClass} />
      case 'server':
        return <Server className={iconClass} />
      case 'database':
        return <Database className={iconClass} />
      case 'cpu':
        return <Cpu className={iconClass} />
      case 'laptop':
        return <Laptop className={iconClass} />
      default:
        return <Code className={iconClass} />
    }
  }

  const brandIcons: Record<string, { path: string; hex: string }> = {
    Python: siPython,
    JavaScript: siJavascript,
    TypeScript: siTypescript,
    PHP: siPhp,
    Go: siGo,
    'C/C++': siCplusplus,
    Bash: siGnubash,
    HTML5: siHtml5,
    CSS3: siCss3,
    Rust: siRust,
    React: siReact,
    PostgreSQL: siPostgresql,
    MySQL: siMysql,
    SQLite: siSqlite,
    Azure: siMicrosoftazure,
    Heroku: siHeroku,
    Render: siRender,
    VSCode: siVisualstudiocode,
    Docker: siDocker,
    Git: siGit,
    Wireshark: siWireshark,
    'Burp Suite': siBurpsuite,
    Metasploit: siMetasploit,
    'Arch Linux': siArchlinux,
    'Fedora 42': siFedora,
    'Kali Linux': siKalilinux,
    macOS: siApple,
    Windows: siWindows,
  }

  const IconChip: React.FC<{ label: string; color: string }> = ({ label, color }) => {
    const brand = brandIcons[label]
    if (brand) {
      const borderColor = `#${brand.hex}`
      const glowColor = hexToRGBA(borderColor, 0.5)
      return (
        <div className="inline-flex flex-col items-center" aria-label={label} title={label}>
          <div
            className="group inline-flex items-center justify-center rounded-2xl w-16 h-16 tile-soft border-2 shadow-md transition-transform duration-300 ease-out hover:scale-110"
            style={{ borderColor, boxShadow: `0 0 18px ${glowColor}` }}
          >
            <svg role="img" viewBox="0 0 24 24" width="32" height="32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d={brand.path} fill={borderColor} />
            </svg>
          </div>
          <span className="mt-2 text-sm font-code text-gray-300">{label}</span>
        </div>
      )
    }
    return (
      <div className="inline-flex flex-col items-center" aria-label={label} title={label}>
        <div
          className={`group inline-flex items-center justify-center rounded-2xl w-16 h-16 tile-soft border-2 border-${color} shadow-md transition-transform duration-300 ease-out hover:scale-110`}
        >
          {getIcon('code', color)}
        </div>
        <span className="mt-2 text-sm font-code text-gray-300">{label}</span>
      </div>
    )
  }

  

  return (
    <section id="technologies" className="section bg-background-alt relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'url("/backgrounds/circuit-pattern.svg")', backgroundSize: 'cover' }}></div>
      </div>
      
      {/* Grid lines */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="h-full w-full" style={{ 
          backgroundImage: 'linear-gradient(to right, rgba(0, 255, 170, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 255, 170, 0.1) 1px, transparent 1px)', 
          backgroundSize: '40px 40px' 
        }}></div>
      </div>

      {/* Scanning line animation */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-1 bg-neon-blue opacity-30 animate-scan"></div>
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-1 border border-neon-blue bg-background">
            <span className="font-code text-sm text-neon-blue">~/technologies</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white cyber-text">
            {content.title || ''}
          </h2>
          <div className="w-32 h-1 bg-neon-blue mx-auto relative">
            <div className="absolute -top-1 left-0 w-2 h-3 bg-neon-blue"></div>
            <div className="absolute -top-1 right-0 w-2 h-3 bg-neon-blue"></div>
          </div>
          <div className="mt-4 font-code text-sm text-gray-400">
            <span className="text-neon-blue">$</span> {content.command || ''}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 cyber-card p-6 relative max-w-4xl mx-auto"
        >
          <div className="absolute top-0 right-0 bg-neon-blue text-xs text-background px-3 py-1">
            <span className="font-code">{content.sections?.languages?.label || ''}</span>
          </div>
          
          <div className="mb-6 text-neon-blue font-code text-sm">
            <span className="inline-block">{content.sections?.languages?.command || ''}</span>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {content.sections?.languages?.items?.map((lang: { name: string; color: string }, index: number) => (
              <div key={index} className="flex items-center justify-center">
                <IconChip label={lang.name} color={lang.color} />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Frameworks */}
        {content.sections?.frameworks && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-16 cyber-card p-6 relative max-w-4xl mx-auto"
          >
            <div className="absolute top-0 right-0 bg-neon-purple text-xs text-background px-3 py-1">
              <span className="font-code">{content.sections.frameworks.label}</span>
            </div>
            <div className="mb-6 text-neon-purple font-code text-sm">
              <span className="inline-block">{content.sections.frameworks.command}</span>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {content.sections.frameworks.items?.map((fw: { name: string; color: string }, index: number) => (
                <div key={index} className="flex items-center justify-center">
                  <IconChip label={fw.name} color={fw.color} />
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Databases */}
        {content.sections?.databases && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mb-16 cyber-card p-6 relative max-w-4xl mx-auto"
          >
            <div className="absolute top-0 right-0 bg-cyber-yellow text-xs text-background px-3 py-1">
              <span className="font-code">{content.sections.databases.label}</span>
            </div>
            <div className="mb-6 text-cyber-yellow font-code text-sm">
              <span className="inline-block">{content.sections.databases.command}</span>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {content.sections.databases.items?.map((db: { name: string; color: string }, index: number) => (
                <div key={index} className="flex items-center justify-center">
                  <IconChip label={db.name} color={db.color} />
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Software */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16 cyber-card p-6 relative max-w-4xl mx-auto"
        >
          <div className="absolute top-0 right-0 bg-neon-purple text-xs text-background px-3 py-1">
            <span className="font-code">{content.sections?.software?.label || ''}</span>
          </div>
          
          <div className="mb-6 text-neon-purple font-code text-sm">
            <span className="inline-block">{content.sections?.software?.command || ''}</span>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {content.sections?.software?.items?.map((sw: { name: string; color: string }, index: number) => (
              <div key={index} className="flex items-center justify-center">
                <IconChip label={sw.name} color={sw.color} />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Operating Systems */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16 cyber-card p-6 relative max-w-4xl mx-auto"
        >
          <div className="absolute top-0 right-0 bg-neon-green text-xs text-background px-3 py-1">
            <span className="font-code">{content.sections?.os?.label || ''}</span>
          </div>
          
          <div className="mb-6 text-neon-green font-code text-sm">
            <span className="inline-block">{content.sections?.os?.command || ''}</span>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
            {content.sections?.os?.items?.map((os: { name: string; color: string }, index: number) => (
              <div key={index} className="flex items-center justify-center">
                <IconChip label={os.name} color={os.color} />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Cloud */}
        {content.sections?.cloud && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-16 cyber-card p-6 relative max-w-4xl mx-auto"
          >
            <div className="absolute top-0 right-0 bg-neon-blue text-xs text-background px-3 py-1">
              <span className="font-code">{content.sections.cloud.label}</span>
            </div>
            <div className="mb-6 text-neon-blue font-code text-sm">
              <span className="inline-block">{content.sections.cloud.command}</span>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
              {content.sections.cloud.items?.map((c: { name: string; color: string }, index: number) => (
                <div key={index} className="flex items-center justify-center">
                  <IconChip label={c.name} color={c.color} />
                </div>
              ))}
            </div>
          </motion.div>
        )}
        
        {/* Terminal-style footer */}
        <motion.div 
          className="mt-12 p-4 border border-neon-blue bg-background font-code text-sm max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center text-neon-blue">
            <span className="mr-2">$</span>
            <span className="typing-animation">{content.footer?.command || ''}</span>
          </div>
          <div className="mt-2 text-gray-400">
            <div>{content.footer?.status || ''} <span className="text-neon-green">{content.footer?.statusValue || ''}</span></div>
            <div>{content.footer?.primaryEnv || ''} <span className="text-neon-purple">{content.footer?.primaryEnvValue || ''}</span></div>
            <div>{content.footer?.focus || ''} <span className="text-cyber-yellow">{content.footer?.focusValue || ''}</span></div>
            <div>{content.footer?.github || ''} <a href="https://github.com/ShHaWkK" target="_blank" rel="noopener noreferrer" className="text-neon-blue hover:underline">github.com/ShHaWkK</a></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Technologies
