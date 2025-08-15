import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Send, Terminal, Shield, Wifi } from 'lucide-react'
import { useTranslation } from '../hooks/useLanguage'
import sendEmail from '../services/emailService'

const Contact = () => {
  const { t, isLoading } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  if (isLoading) {
    return (
      <section id="contact" className="section bg-background-alt relative">
        <div className="container relative z-10 flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-neon-green mx-auto mb-4"></div>
            <p className="text-neon-green font-code">Chargement du contact...</p>
          </div>
        </div>
      </section>
    )
  }

  const content = t('contact')
  const commonContent = t('common')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage('')
    
    try {
      // Envoi de l'email via le service
      const result = await sendEmail(formData)
      
      if (result.success) {
        setSubmitSuccess(true)
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        })
        
        // Réinitialiser le message de succès après 5 secondes
        setTimeout(() => {
          setSubmitSuccess(false)
        }, 5000)
      } else {
        setErrorMessage(result.message)
      }
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'Une erreur est survenue')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section bg-background-alt relative">
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
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-1 border border-neon-green bg-background">
            <span className="font-code text-sm text-neon-green">~/contact</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white cyber-text">
            {content.title}
          </h2>
          <div className="w-32 h-1 bg-neon-green mx-auto relative">
            <div className="absolute -top-1 left-0 w-2 h-3 bg-neon-green"></div>
            <div className="absolute -top-1 right-0 w-2 h-3 bg-neon-green"></div>
          </div>
          <div className="mt-4 font-code text-sm text-gray-400">
            <span className="text-neon-green">$</span> ssh -p 22 user@alexandre-uzan.fr
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="cyber-card p-6 relative"
          >
            <div className="absolute top-0 right-0 bg-neon-green text-xs text-background px-3 py-1">
              <span className="font-code">SECURE_CHANNEL</span>
            </div>
            
            <div className="mb-6 text-neon-green font-code text-sm">
              <span className="inline-block">$ cat contact_info.txt</span>
            </div>
            
            <h3 className="text-2xl font-bold mb-6 text-white font-code">Canaux de communication</h3>
            <p className="text-gray-300 mb-8 border-l-2 border-neon-green pl-4">
              {content.description}
            </p>
            
            <div className="space-y-4">
              <div className="terminal-card p-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-neon-green bg-opacity-10 flex items-center justify-center mr-4">
                    <Mail className="w-5 h-5 text-neon-green" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white font-code">{content.info.email}</h4>
                    <a href="mailto:alexandre.jacel7@gmail.com" className="text-gray-400 hover:text-neon-green transition-colors duration-300 font-code">
                      alexandre.jacel7@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              

              
              <div className="terminal-card p-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-neon-purple bg-opacity-10 flex items-center justify-center mr-4">
                    <MapPin className="w-5 h-5 text-neon-purple" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white font-code">{content.info.location}</h4>
                    <p className="text-gray-400 font-code">Paris, France</p>
                  </div>
                </div>
              </div>
              
              <div className="terminal-card p-4">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-indigo-500 bg-opacity-10 flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-indigo-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white font-code">Discord</h4>
                    <p className="text-gray-400 font-code">shhawk</p>
                    <p className="text-xs text-gray-500 font-code">(pour l'ajout d'ami)</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center">
                <Terminal className="w-8 h-8 text-neon-blue mb-2" />
                <span className="text-xs text-gray-400 font-code">CTF</span>
              </div>
              <div className="flex flex-col items-center">
                <Shield className="w-8 h-8 text-neon-purple mb-2" />
                <span className="text-xs text-gray-400 font-code">SECURITY</span>
              </div>
              <div className="flex flex-col items-center">
                <Wifi className="w-8 h-8 text-neon-green mb-2" />
                <span className="text-xs text-gray-400 font-code">NETWORK</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="cyber-card p-6 relative"
          >
            <div className="absolute top-0 right-0 bg-neon-blue text-xs text-background px-3 py-1">
              <span className="font-code">MESSAGE_FORM</span>
            </div>
            
            <div className="mb-6 text-neon-blue font-code text-sm">
              <span className="inline-block">$ nano new_message.txt</span>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2 font-code">{content.form.name.label}:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border-2 border-neon-blue rounded-none text-neon-blue font-code focus:border-neon-green focus:outline-none"
                    placeholder={content.form.name.placeholder}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2 font-code">{content.form.email.label}:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border-2 border-neon-blue rounded-none text-neon-blue font-code focus:border-neon-green focus:outline-none"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2 font-code">{content.form.subject.label}:</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-background border-2 border-neon-blue rounded-none text-neon-blue font-code focus:border-neon-green focus:outline-none"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2 font-code">{content.form.message.label}:</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-background border-2 border-neon-blue rounded-none text-neon-blue font-code focus:border-neon-green focus:outline-none resize-none"
                  placeholder={content.form.message.placeholder}
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                className="btn-terminal w-full flex items-center justify-center"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <span className="flex items-center font-code">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {content.form.sending}
                  </span>
                ) : (
                  <span className="flex items-center font-code">
                    <span className="mr-2">$</span>
                    <Send className="w-4 h-4 mr-2" />
                    {commonContent?.buttons?.sendMessage || 'Send Message'}
                  </span>
                )}
              </motion.button>
              
              {submitSuccess && (
                <motion.div 
                  className="p-4 bg-green-500 bg-opacity-10 border-2 border-green-500 text-green-500 font-code"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center">
                    <span className="text-neon-green mr-2">$</span>
                    <span>{content.form.success}</span>
                  </div>
                </motion.div>
              )}
              
              
              <div className="mt-4 p-3 border border-neon-green bg-background font-code text-xs">
                <div className="flex items-center text-neon-green">
                  <span className="mr-2">$</span>
                  <span>message --status</span>
                </div>
                <div className="mt-2 text-gray-400">
                  <div>Status: <span className="text-neon-green">{isSubmitting ? content.terminal.status.sending : submitSuccess ? content.terminal.status.success : errorMessage ? content.terminal.status.error({ message: errorMessage }) : content.terminal.status.idle}</span></div>
                  <div>Encryption: <span className="text-neon-blue">AES-256</span></div>
                  <div>Channel: <span className="text-neon-purple">Secure</span></div>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
        
        {/* Terminal-style footer */}
        <motion.div 
          className="mt-12 p-4 border border-neon-green bg-background font-code text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex items-center text-neon-green">
            <span className="mr-2">$</span>
            <span className="typing-animation">echo "{content.thanks}" | lolcat</span>
          </div>
          <div className="mt-2">
            {content.thanks.split('').map((char: string, index: number) => {
              const colors = ['text-neon-blue', 'text-neon-purple', 'text-neon-green'];
              const color = char === ' ' ? 'text-white' : colors[index % colors.length];
              return <span key={index} className={color}>{char}</span>;
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
