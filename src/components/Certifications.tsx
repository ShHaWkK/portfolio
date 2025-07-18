import { motion } from 'framer-motion'
import { Award, Shield, Lock, Cpu, Database, CheckCircle } from 'lucide-react'
import { useTranslation } from '../hooks/useLanguage'

const Certifications = () => {
  const { t, isLoading } = useTranslation()
  
  if (isLoading) {
    return (
      <section id="certifications" className="section bg-background-alt relative">
        <div className="container relative z-10 flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-neon-purple mx-auto mb-4"></div>
            <p className="text-neon-purple font-code">Chargement des certifications...</p>
          </div>
        </div>
      </section>
    )
  }

  const content = t('certifications')
  
  const certificationIcons = [
    <Shield className="w-6 h-6 text-neon-blue" />,
    <Lock className="w-6 h-6 text-neon-green" />,
    <Award className="w-6 h-6 text-neon-purple" />,
    <Cpu className="w-6 h-6 text-neon-red" />,
    <Database className="w-6 h-6 text-cyber-yellow" />
  ]
  
  const certificationColors = ["neon-blue", "neon-green", "neon-purple", "neon-red", "cyber-yellow"]

  return (
    <section id="certifications" className="section bg-background-alt relative">
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
          <div className="inline-block mb-4 px-4 py-1 border border-neon-purple bg-background">
            <span className="font-code text-sm text-neon-purple">{content.command}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white cyber-text">
            {content.title}
          </h2>
          <div className="w-32 h-1 bg-neon-purple mx-auto relative">
            <div className="absolute -top-1 left-0 w-2 h-3 bg-neon-purple"></div>
            <div className="absolute -top-1 right-0 w-2 h-3 bg-neon-purple"></div>
          </div>
          <div className="mt-4 font-code text-sm text-gray-400">
            <span className="text-neon-purple">$</span> {content.terminalCommand}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {content.certifications && content.certifications.map((cert: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="cyber-card p-6 relative"
            >
              <div className={`absolute top-0 right-0 bg-${certificationColors[index]} text-xs text-background px-3 py-1`}>
                <span className="font-code">CERT_{index + 1}</span>
              </div>
              
              <div className="flex items-start mb-4">
                <div className={`w-12 h-12 rounded-none border-2 border-${certificationColors[index]} flex items-center justify-center mr-4`}>
                  {certificationIcons[index]}
                </div>
                <div>
                  <h3 className={`text-lg font-bold text-${certificationColors[index]} font-code`}>{cert.title}</h3>
                  <p className="text-gray-400 text-sm font-code">{cert.issuer} | {cert.date}</p>
                </div>
              </div>
              
              <p className={`text-gray-300 border-l-2 border-${certificationColors[index]} pl-4 mb-4`}>
                {cert.description}
              </p>
              
              <div className="mt-4 flex items-center">
                <CheckCircle className={`w-4 h-4 text-${certificationColors[index]} mr-2`} />
                <span className="text-gray-400 text-sm font-code">{content.validationStatus}</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Education section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 max-w-5xl mx-auto cyber-card p-6"
        >
          <div className="absolute top-0 right-0 bg-neon-blue text-xs text-background px-3 py-1">
            <span className="font-code">{content.education && content.education.title}</span>
          </div>
          
          <div className="mb-6 text-neon-blue font-code text-sm">
            <span className="inline-block">$ {content.education && content.education.command}</span>
          </div>
          
          <div className="space-y-8">
            {content.education && content.education.degrees && content.education.degrees.map((degree: any, index: number) => {
              const colors = ["neon-blue", "neon-purple", "neon-green"];
              const color = colors[index] || "neon-blue";
              
              return (
                <div key={index} className="flex items-start">
                  <div className={`w-12 h-12 rounded-none border-2 border-${color} flex items-center justify-center mr-4`}>
                    <Award className={`w-6 h-6 text-${color}`} />
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold text-${color} font-code`}>{degree.title}</h3>
                    <p className="text-gray-400 text-sm font-code">{degree.institution} | {degree.period}</p>
                    <p className="text-gray-300 mt-2">{degree.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
        
        {/* Terminal-style footer */}
        <motion.div 
          className="mt-12 p-4 border border-neon-purple bg-background font-code text-sm max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center text-neon-purple">
            <span className="mr-2">$</span>
            <span>{content.footer && content.footer.command}</span>
          </div>
          <div className="mt-2 text-gray-400">
            <div>{content.footer && content.footer.status} <span className="text-neon-green">{content.footer && content.footer.statusValue}</span></div>
            <div>{content.footer && content.footer.skills} <span className="text-neon-blue">{content.footer && content.footer.skillsValue}</span></div>
            <div>{content.footer && content.footer.learning} <span className="text-neon-purple">{content.footer && content.footer.learningValue}</span></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications
