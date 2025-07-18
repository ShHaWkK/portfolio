import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Terminal, Shield, Code, Cpu } from 'lucide-react'
import { useTranslation } from '../hooks/useLanguage'

const Hero = () => {
  const { t, isLoading } = useTranslation()
  
  if (isLoading) {
    return (
      <section id="hero" className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-neon-blue mx-auto mb-4"></div>
          <p className="text-neon-blue font-code">Initialisation du système...</p>
        </div>
      </section>
    )
  }

  const content = t('hero')
  const commonContent = t('common')

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Matrix-like background effect */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute inset-0" style={{ backgroundImage: 'url("/backgrounds/matrix-rain.svg")', backgroundSize: 'cover' }}></div>
      </div>
      
      {/* Grid lines */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full" style={{ 
          backgroundImage: 'linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)', 
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-4xl mx-auto">
          <div className="cyber-card p-8 mb-8 flex flex-col md:flex-row items-center">
            <div className="absolute top-0 right-0 bg-neon-blue text-xs text-background px-3 py-1">
              <span className="font-code">{content?.badge || 'CYBERSECURITY STUDENT'}</span>
            </div>
            
            {/* Profile Picture */}
            <motion.div 
              className="mb-6 md:mb-0 md:mr-8 relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-neon-blue relative">
                <div className="absolute inset-0 border-4 border-neon-purple rounded-full animate-pulse-slow opacity-50"></div>
                <img 
                  src="/images/profile.svg" 
                  alt="Alexandre UZAN" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-background border border-neon-green px-2 py-1 rounded-sm">
                <span className="font-code text-xs text-neon-green">ID: 0x4L3X</span>
              </div>
            </motion.div>
            
            {/* Text Content */}
            <div className="text-center md:text-left flex-1">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="mb-2 text-neon-blue font-code text-sm"
              >
                <span className="inline-block">{content?.whoami || '$ whoami'}</span>
              </motion.div>
              
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-4 glitch-effect"
                data-text={content?.name || 'Alexandre UZAN'}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {content?.name || 'Alexandre UZAN'}
              </motion.h1>
              
              <motion.div 
                className="text-xl md:text-2xl mb-6 text-gray-300 font-code"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="terminal-text">{content?.title || 'Cybersecurity Student & CTF Enthusiast'}</span>
              </motion.div>
              
              <motion.p 
                className="text-lg mb-8 text-neon-green font-code"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <span className="inline-block">{content?.quote || '$ echo "Security is not a product, but a process"'}</span>
              </motion.p>
              
              <motion.div
                className="flex flex-wrap justify-center md:justify-start gap-4 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <a 
                  href="https://pwn.college/hacker/ShHawk" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-terminal flex items-center gap-2"
                >
                  <Terminal className="h-4 w-4" /> pwn.college
                </a>
                <a 
                  href="https://github.com/ShHaWkK" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-terminal flex items-center gap-2"
                >
                  <Code className="h-4 w-4" /> GitHub
                </a>
                <a 
                  href="#contact" 
                  className="btn btn-primary inline-flex items-center"
                >
                  {commonContent?.navigation?.contact || 'Contact'} <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </motion.div>
            </div>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="cyber-card p-4 flex items-center">
              <Shield className="text-neon-blue mr-3 h-6 w-6" />
              <div>
                <h3 className="font-code text-neon-blue">{content?.skills?.offensive?.title || 'Offensive Security'}</h3>
                <p className="text-sm text-gray-300">{content?.skills?.offensive?.description || 'Pentesting & Exploitation'}</p>
              </div>
            </div>
            <div className="cyber-card p-4 flex items-center">
              <Cpu className="text-neon-purple mr-3 h-6 w-6" />
              <div>
                <h3 className="font-code text-neon-purple">{content?.skills?.honeypots?.title || 'Honeypots'}</h3>
                <p className="text-sm text-gray-300">{content?.skills?.honeypots?.description || 'SSH, FTP, RDP'}</p>
              </div>
            </div>
            <div className="cyber-card p-4 flex items-center">
              <Code className="text-neon-green mr-3 h-6 w-6" />
              <div>
                <h3 className="font-code text-neon-green">{content?.skills?.development?.title || 'Development'}</h3>
                <p className="text-sm text-gray-300">{content?.skills?.development?.description || 'Malware & Security'}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated cyber elements */}
      <motion.div
        className="absolute bottom-10 left-10 w-72 h-72 border border-neon-blue rounded-full opacity-10"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 360],
          borderWidth: [1, 2, 1]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          repeatType: "loop"
        }}
      />
      
      <motion.div
        className="absolute bottom-10 left-10 w-40 h-40 border border-neon-green rounded-full opacity-10"
        animate={{ 
          scale: [1, 1.5, 1],
          rotate: [360, 0],
          borderWidth: [1, 3, 1]
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          repeatType: "loop"
        }}
      />
      
      <motion.div
        className="absolute top-20 right-20 w-60 h-60 border border-neon-purple rounded-full opacity-10"
        animate={{ 
          scale: [1, 1.3, 1],
          rotate: [0, -360],
          borderWidth: [1, 2, 1]
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          repeatType: "loop"
        }}
      />
    </section>
  )
}

export default Hero