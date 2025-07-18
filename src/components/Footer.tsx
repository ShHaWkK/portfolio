import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Twitter, Terminal, Shield, Cpu, Code, Server } from 'lucide-react'
import { useTranslation } from '../hooks/useLanguage'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const { t, isLoading } = useTranslation()

  if (isLoading) {
    return (
      <footer className="bg-background py-12 border-t border-gray-800 relative">
        <div className="container relative z-10 flex items-center justify-center min-h-[200px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-neon-green mx-auto mb-4"></div>
            <p className="text-neon-green font-code">Chargement du footer...</p>
          </div>
        </div>
      </footer>
    )
  }

  const content = t('common')
  
  return (
    <footer className="bg-background py-12 border-t border-gray-800 relative">
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
      
      <div className="container relative z-10">
        <div className="cyber-card p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-6 md:mb-0"
            >
              <div className="flex items-center">
                <div className="w-12 h-12 mr-4 relative">
                  <div className="absolute inset-0 border-2 border-neon-blue rounded-full animate-pulse-slow"></div>
                  <div className="absolute inset-2 border border-neon-purple rounded-full"></div>
                  <div className="absolute inset-4 border border-neon-green rounded-full"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-neon-blue" />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white cyber-text">Alexandre UZAN</h2>
                  <p className="text-gray-400 font-code text-xs">ADMINISTRATEUR SYSTÈMES, RÉSEAUX & SÉCURITÉ</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex space-x-4 mb-6 md:mb-0"
            >
              <a 
                href="https://github.com/ShHaWkK" 
                target="_blank" 
                rel="noopener noreferrer"
                className="terminal-card w-12 h-12 flex items-center justify-center text-neon-blue hover:text-neon-green transition-colors duration-300 hover:border-neon-green"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/in/alexandre-uzan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="terminal-card w-12 h-12 flex items-center justify-center text-neon-purple hover:text-neon-green transition-colors duration-300 hover:border-neon-green"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com/alexandre_uzan" 
                target="_blank" 
                rel="noopener noreferrer"
                className="terminal-card w-12 h-12 flex items-center justify-center text-neon-green hover:text-neon-blue transition-colors duration-300 hover:border-neon-blue"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://pwn.college/hacker/ShHawk" 
                target="_blank" 
                rel="noopener noreferrer"
                className="terminal-card w-12 h-12 flex items-center justify-center text-neon-red hover:text-neon-green transition-colors duration-300 hover:border-neon-green"
              >
                <Terminal className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="terminal-card p-4">
            <h4 className="text-neon-blue font-code text-sm mb-3">SECURITY</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="font-code">Offensive Security</li>
              <li className="font-code">Penetration Testing</li>
              <li className="font-code">Vulnerability Analysis</li>
              <li className="font-code">CTF Challenges</li>
            </ul>
            <div className="mt-3 text-neon-blue">
              <Shield className="w-4 h-4" />
            </div>
          </div>
          
          <div className="terminal-card p-4">
            <h4 className="text-neon-purple font-code text-sm mb-3">DEVELOPMENT</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="font-code">Python</li>
              <li className="font-code">Bash Scripting</li>
              <li className="font-code">C/C++</li>
              <li className="font-code">Assembly</li>
            </ul>
            <div className="mt-3 text-neon-purple">
              <Code className="w-4 h-4" />
            </div>
          </div>
          
          <div className="terminal-card p-4">
            <h4 className="text-neon-green font-code text-sm mb-3">INFRASTRUCTURE</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="font-code">Network Security</li>
              <li className="font-code">Linux Administration</li>
              <li className="font-code">Virtualization</li>
              <li className="font-code">Cloud Security</li>
            </ul>
            <div className="mt-3 text-neon-green">
              <Server className="w-4 h-4" />
            </div>
          </div>
          
          <div className="terminal-card p-4">
            <h4 className="text-neon-red font-code text-sm mb-3">PROJECTS</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="font-code">HoneySSH</li>
              <li className="font-code">HoneyFTP</li>
              <li className="font-code">HoneyRDP</li>
              <li className="font-code">Malware Analysis</li>
            </ul>
            <div className="mt-3 text-neon-red">
              <Cpu className="w-4 h-4" />
            </div>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="mb-4 md:mb-0 font-code text-sm">
            <div className="flex items-center text-neon-green mb-2">
              <span className="mr-2">$</span>
              <span>whoami</span>
            </div>
            <p className="text-gray-500">
              <span className="text-neon-blue">root@alexandre-uzan</span>:<span className="text-neon-purple">~</span>$ {content.footer.copyright(currentYear)}
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-neon-green text-sm transition-colors duration-300 font-code">{content.footer.legalNotice}</a>
            <a href="#" className="text-gray-500 hover:text-neon-green text-sm transition-colors duration-300 font-code">{content.footer.privacyPolicy}</a>
            <div className="text-gray-500 text-sm font-code">{content.footer.madeWith}</div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
