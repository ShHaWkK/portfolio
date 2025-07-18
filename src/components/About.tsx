import { motion } from 'framer-motion'
import { Terminal, Shield, Lock } from 'lucide-react'
import { useTranslation } from '../hooks/useLanguage'

const About = () => {
  const { t, isLoading } = useTranslation()

  if (isLoading) {
    return (
      <section id="about" className="section bg-background-alt relative">
        <div className="container relative z-10 flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-neon-blue mx-auto mb-4"></div>
            <p className="text-neon-blue font-code">Chargement du profil...</p>
          </div>
        </div>
      </section>
    )
  }

  const content = t('about')

  return (
    <section id="about" className="section bg-background-alt relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'url("/backgrounds/matrix-rain.svg")', backgroundSize: 'cover' }}></div>
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
            <span className="font-code text-sm text-neon-blue">~/about</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white cyber-text">
            {content.title}
          </h2>
          <div className="w-32 h-1 bg-neon-blue mx-auto relative">
            <div className="absolute -top-1 left-0 w-2 h-3 bg-neon-blue"></div>
            <div className="absolute -top-1 right-0 w-2 h-3 bg-neon-blue"></div>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="cyber-card p-6 mb-8 relative">
            <div className="absolute top-0 right-0 bg-neon-blue text-xs text-background px-3 py-1">
              <span className="font-code">{content.badge}</span>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-4 text-neon-blue font-code text-sm"
            >
              <span className="inline-block">{content.catProfile || ''}</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="space-y-6 text-lg text-gray-300"
            >
              <p className="border-l-2 border-neon-blue pl-4">
                <span dangerouslySetInnerHTML={{ 
                  __html: content.description?.paragraph1 ? content.description.paragraph1.replace(
                    /cybersécurité|cybersecurity|ciberseguridad|cybersicherheit|кибербезопасность/gi, 
                    '<span class="text-neon-blue">$&</span>'
                  ) : ''
                }} />
              </p>
              <p className="border-l-2 border-neon-purple pl-4">
                <span dangerouslySetInnerHTML={{ 
                  __html: content.description?.paragraph2 ? content.description.paragraph2.replace(
                    /pwn\.college/gi, 
                    '<a href="https://pwn.college/hacker/ShHawk" target="_blank" rel="noopener noreferrer" class="text-neon-purple underline">$&</a>'
                  ) : ''
                }} />
              </p>
              <p className="border-l-2 border-neon-green pl-4">
                <span dangerouslySetInnerHTML={{ 
                  __html: content.description?.paragraph3 ? content.description.paragraph3.replace(
                    /ShHaWkK/gi, 
                    '<a href="https://github.com/ShHaWkK" target="_blank" rel="noopener noreferrer" class="text-neon-green underline">$&</a>'
                  ) : ''
                }} />
              </p>
            </motion.div>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="cyber-card p-4 flex flex-col items-center text-center">
              <Terminal className="text-neon-blue mb-4 h-8 w-8" />
              <h3 className="text-lg font-bold mb-2 font-code text-neon-blue">{content.specialties.ctf.title}</h3>
              <p className="text-sm text-gray-300">{content.specialties.ctf.description}</p>
            </div>
            
            <div className="cyber-card p-4 flex flex-col items-center text-center">
              <Shield className="text-neon-purple mb-4 h-8 w-8" />
              <h3 className="text-lg font-bold mb-2 font-code text-neon-purple">{content.specialties.honeypot.title}</h3>
              <p className="text-sm text-gray-300">{content.specialties.honeypot.description}</p>
            </div>
            
            <div className="cyber-card p-4 flex flex-col items-center text-center">
              <Lock className="text-neon-green mb-4 h-8 w-8" />
              <h3 className="text-lg font-bold mb-2 font-code text-neon-green">{content.specialties.security.title}</h3>
              <p className="text-sm text-gray-300">{content.specialties.security.description}</p>
            </div>
          </motion.div>
          
          {/* Terminal-style footer */}
          <motion.div 
            className="mt-12 p-4 border border-neon-blue bg-background font-code text-sm"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center text-neon-blue">
              <span className="mr-2">$</span>
              <span>{content.terminal.command}</span>
            </div>
            <div className="mt-2 text-gray-300">
              <div>Name: <span className="text-neon-blue">{content.terminal.name}</span></div>
              <div>Role: <span className="text-neon-green">{content.terminal.role}</span></div>
              <div>Focus: <span className="text-neon-purple">{content.terminal.focus}</span></div>
              <div>Status: <span className="text-neon-blue">{content.terminal.status}</span></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About