import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Code, Terminal, Server, Database, Cpu, Laptop } from 'lucide-react'
import { useTranslation } from '../hooks/useLanguage'

const Technologies = () => {
  const { t } = useTranslation()
  const [content, setContent] = useState<any>(null)

  useEffect(() => {
    setContent(t('technologies'))
  }, [t])

  if (!content) {
    return <div>Loading...</div>
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

  const iconMapping: Record<string, string> = {
    'Python': 'code',
    'JavaScript': 'code',
    'TypeScript': 'code',
    'PHP': 'code',
    'Go': 'code',
    'C/C++': 'code',
    'Bash': 'terminal',
    'SQL': 'database',
    'VSCode': 'code',
    'Docker': 'server',
    'Git': 'terminal',
    'Wireshark': 'terminal',
    'Burp Suite': 'terminal',
    'Metasploit': 'terminal',
    'Nmap': 'terminal',
    'Ghidra': 'cpu',
    'Arch Linux': 'laptop',
    'Fedora 42': 'laptop',
    'Kali Linux': 'laptop',
    'macOS': 'laptop',
    'Windows': 'laptop',
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
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {content.sections?.languages?.items?.map((lang: { name: string; color: string }, index: number) => (
              <div key={index} className={`p-4 border-2 border-${lang.color} bg-background`}>
                <div className="flex items-center">
                  {getIcon(iconMapping[lang.name] || 'code', lang.color)}
                  <span className={`ml-2 font-code text-${lang.color}`}>{lang.name}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

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
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {content.sections?.software?.items?.map((sw: { name: string; color: string }, index: number) => (
              <div key={index} className={`p-4 border-2 border-${sw.color} bg-background`}>
                <div className="flex items-center">
                  {getIcon(iconMapping[sw.name] || 'code', sw.color)}
                  <span className={`ml-2 font-code text-${sw.color}`}>{sw.name}</span>
                </div>
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
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {content.sections?.os?.items?.map((os: { name: string; color: string }, index: number) => (
              <div key={index} className={`p-4 border-2 border-${os.color} bg-background`}>
                <div className="flex items-center justify-center">
                  {getIcon(iconMapping[os.name] || 'laptop', os.color)}
                  <span className={`ml-2 font-code text-${os.color}`}>{os.name}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        
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