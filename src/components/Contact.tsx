import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Send, Linkedin } from 'lucide-react'
import { useTranslation } from '../hooks/useLanguage'
import sendEmail from '../services/emailService'

const INFO = [
  {
    icon: Mail,
    label: 'Email',
    value: 'auzan@ajmtech.fr',
    href: 'mailto:auzan@ajmtech.fr',
    color: '#6366F1',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'alexandre-uzan',
    href: 'https://linkedin.com/in/alexandre-uzan',
    color: '#818CF8',
  },
  {
    icon: MapPin,
    label: 'Localisation',
    value: 'Paris, France',
    href: null,
    color: '#10B981',
  },
]

const fade = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay } },
})

const Contact = () => {
  const { t, isLoading } = useTranslation()
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [isSubmitting, setIsSubmitting]   = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [errorMessage, setErrorMessage]   = useState('')

  if (isLoading) return null

  const content       = t('contact')
  const commonContent = t('common')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setErrorMessage('')
    try {
      const result = await sendEmail(formData)
      if (result.success) {
        setSubmitSuccess(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setSubmitSuccess(false), 5000)
      } else {
        setErrorMessage(result.message)
      }
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'Une erreur est survenue')
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClass = `w-full px-4 py-3 bg-[#111113] border border-zinc-800 text-white text-sm
    placeholder:text-zinc-600 focus:border-indigo-500/60 focus:outline-none transition-colors duration-150`

  return (
    <section id="contact" className="bg-[#09090B] relative py-20">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="container">

        {/* Header */}
        <motion.div
          variants={fade(0)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="text-xs text-indigo-400 tracking-widest uppercase mb-2 font-medium">Contact</p>
          <h2 className="font-black text-white leading-none tracking-tight" style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}>
            {content.title}
          </h2>
          <p className="text-zinc-500 mt-3 text-sm max-w-md">
            {content.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* ── Left — info ── */}
          <motion.div
            variants={fade(0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            {INFO.map(item => (
              <div
                key={item.label}
                className="flex items-center gap-4 p-5 bg-[#111113] border border-zinc-800/60 hover:border-zinc-700/80 transition-colors duration-200"
              >
                <div
                  className="w-10 h-10 flex items-center justify-center shrink-0"
                  style={{ background: `${item.color}12`, border: `1px solid ${item.color}25` }}
                >
                  <item.icon className="w-4 h-4" style={{ color: item.color }} />
                </div>
                <div>
                  <p className="text-xs text-zinc-600 mb-0.5 uppercase tracking-widest font-medium">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="text-sm text-white hover:text-indigo-300 transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-white">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Availability note */}
            <div className="mt-2 p-5 border border-indigo-500/20 bg-indigo-500/5">
              <p className="text-xs text-zinc-500 leading-relaxed">
                Disponible pour des missions freelance et des opportunités CDI.
                Réponse généralement sous <span className="text-white font-medium">24–48 h</span>.
              </p>
            </div>
          </motion.div>

          {/* ── Right — form ── */}
          <motion.div
            variants={fade(0.15)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs text-zinc-500 mb-2 uppercase tracking-widest font-medium">
                    {content.form.name.label}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder={content.form.name.placeholder}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs text-zinc-500 mb-2 uppercase tracking-widest font-medium">
                    {content.form.email.label}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="votre@email.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs text-zinc-500 mb-2 uppercase tracking-widest font-medium">
                  {content.form.subject.label}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs text-zinc-500 mb-2 uppercase tracking-widest font-medium">
                  {content.form.message.label}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder={content.form.message.placeholder}
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#09090B] font-semibold text-sm hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-1"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    {content.form.sending}
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    {commonContent?.buttons?.sendMessage || 'Envoyer le message'}
                  </>
                )}
              </button>

              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm"
                >
                  {content.form.success}
                </motion.div>
              )}

              {errorMessage && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/10 border border-red-500/30 text-red-400 text-sm"
                >
                  {errorMessage}
                </motion.div>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Contact
