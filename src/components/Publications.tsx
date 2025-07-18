import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Shield, Lock, Cpu, ExternalLink, AlertTriangle } from 'lucide-react'
import { useTranslation } from '../hooks/useLanguage'

interface Publication {
  title: string
  type: string
  publisher: string
  date: string
  link: string
  color: string
  id: string
  abstract: string
}

const Publications = () => {
  const { t } = useTranslation()
  const [content, setContent] = useState<any>(null)

  useEffect(() => {
    setContent(t('publications'))
  }, [t])

  if (!content) {
    return <div>Loading...</div>
  }

  const getIcon = (index: number) => {
    const iconClass = `w-6 h-6`
    const icons = [
      <Shield className={iconClass} />,
      <AlertTriangle className={iconClass} />,
      <Lock className={iconClass} />,
      <Cpu className={iconClass} />
    ]
    return icons[index % icons.length]
  }

  return (
    <section id="publications" className="section bg-background-alt relative">
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
        <div className="absolute top-0 left-0 w-full h-1 bg-neon-purple opacity-30 animate-scan"></div>
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-1 border border-neon-purple bg-background">
            <span className="font-code text-sm text-neon-purple">~/publications</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white cyber-text">
            {content.title}
          </h2>
          <div className="w-32 h-1 bg-neon-purple mx-auto relative">
            <div className="absolute -top-1 left-0 w-2 h-3 bg-neon-purple"></div>
            <div className="absolute -top-1 right-0 w-2 h-3 bg-neon-purple"></div>
          </div>
          <div className="mt-4 font-code text-sm text-gray-400">
            <span className="text-neon-purple">$</span> {content.command}
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {content.publications?.map((pub: Publication, index: number) => (
              <motion.div
              key={index}
              className="mb-8 cyber-card p-6 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Document ID tag */}
              <div className={`absolute top-0 right-0 bg-${pub.color} text-xs text-background px-3 py-1`}>
                <span className="font-code">{pub.id}</span>
              </div>
              
              <div className="flex items-start">
                <div className={`w-12 h-12 rounded-none border-2 border-${pub.color} flex items-center justify-center mr-4`}>
                  <div className={`text-${pub.color}`}>
                    {getIcon(index)}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className={`text-xl font-bold mb-2 text-${pub.color} font-code`}>{pub.title}</h3>
                  <div className="flex flex-wrap items-center text-sm text-gray-400 mb-3 font-code">
                    <span className="mr-3 px-2 py-1 bg-background-alt border border-gray-700">{pub.type}</span>
                    <span className="mr-3">|</span>
                    <span className="mr-3">{pub.publisher}</span>
                    <span className="mr-3">|</span>
                    <span>{pub.date}</span>
                  </div>
                  
                  <div className={`mt-4 mb-4 pl-4 border-l-2 border-${pub.color}`}>
                    <p className="text-gray-300 text-sm font-code">{pub.abstract}</p>
                  </div>
                  
                  <a 
                    href={pub.link} 
                    className={`inline-flex items-center btn-terminal text-${pub.color} hover:text-white transition-colors duration-300`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${content.readLabel} ${pub.title}`}
                  >
                    <span className="mr-2">$</span>
                    <span>{content.readCommand}</span>
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Terminal-style footer */}
        <motion.div 
          className="mt-12 p-4 border border-neon-purple bg-background font-code text-sm max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center text-neon-purple">
            <span className="mr-2">$</span>
            <span className="typing-animation">{content.footer?.command}</span>
          </div>
          <div className="mt-2 text-gray-400">
            <div>{content.footer?.status} <span className="text-neon-green">{content.footer?.statusValue}</span></div>
            <div>{content.footer?.currentFocus} <span className="text-neon-blue">{content.footer?.currentFocusValue}</span></div>
            <div>{content.footer?.latestUpdate} <span className="text-neon-purple">{content.footer?.latestUpdateValue}</span></div>
            <div>{content.footer?.github} <a href="https://github.com/ShHaWkK" target="_blank" rel="noopener noreferrer" className="text-neon-blue hover:underline">github.com/ShHaWkK</a></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Publications
