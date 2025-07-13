import { motion } from 'framer-motion'
import { Award, Shield, Lock, Server, CheckCircle, Cpu, Code, Database } from 'lucide-react'

const Certifications = () => {
  const certifications = [
    {
      title: "IBM QRadar Sales / SIEM",
      issuer: "IBM",
      date: "2023",
      icon: <Shield className="w-6 h-6 text-neon-blue" />,
      color: "neon-blue",
      description: "Solutions de sécurité SIEM pour la détection et la réponse aux incidents."
    },
    {
      title: "CCNA Endpoint Security",
      issuer: "Cisco",
      date: "2022",
      icon: <Lock className="w-6 h-6 text-neon-green" />,
      color: "neon-green",
      description: "Sécurisation des terminaux et protection contre les menaces avancées."
    },
    {
      title: "Master 1 Cyber",
      issuer: "ESGI",
      date: "2021",
      icon: <Award className="w-6 h-6 text-neon-purple" />,
      color: "neon-purple",
      description: "Formation avancée en cybersécurité, cryptographie et sécurité des réseaux."
    },
    {
      title: "Certified Ethical Hacker",
      issuer: "EC-Council",
      date: "2020",
      icon: <Cpu className="w-6 h-6 text-neon-red" />,
      color: "neon-red",
      description: "Techniques et méthodologies de hacking éthique pour identifier les vulnérabilités."
    },
    {
      title: "CompTIA Security+",
      issuer: "CompTIA",
      date: "2019",
      icon: <Database className="w-6 h-6 text-cyber-yellow" />,
      color: "cyber-yellow",
      description: "Fondamentaux de la sécurité des réseaux, gestion des risques et cryptographie."
    }
  ]

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
            <span className="font-code text-sm text-neon-purple">~/certifications</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white cyber-text">
            Certifications & Formations
          </h2>
          <div className="w-32 h-1 bg-neon-purple mx-auto relative">
            <div className="absolute -top-1 left-0 w-2 h-3 bg-neon-purple"></div>
            <div className="absolute -top-1 right-0 w-2 h-3 bg-neon-purple"></div>
          </div>
          <div className="mt-4 font-code text-sm text-gray-400">
            <span className="text-neon-purple">$</span> ls -la | grep "credentials"
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="cyber-card p-6 relative"
            >
              <div className={`absolute top-0 right-0 bg-${cert.color} text-xs text-background px-3 py-1`}>
                <span className="font-code">CERT_{index + 1}</span>
              </div>
              
              <div className="flex items-start mb-4">
                <div className={`w-12 h-12 rounded-none border-2 border-${cert.color} flex items-center justify-center mr-4`}>
                  {cert.icon}
                </div>
                <div>
                  <h3 className={`text-lg font-bold text-${cert.color} font-code`}>{cert.title}</h3>
                  <p className="text-gray-400 text-sm font-code">{cert.issuer} | {cert.date}</p>
                </div>
              </div>
              
              <p className={`text-gray-300 border-l-2 border-${cert.color} pl-4 mb-4`}>
                {cert.description}
              </p>
              
              <div className="mt-4 flex items-center">
                <CheckCircle className={`w-4 h-4 text-${cert.color} mr-2`} />
                <span className="text-gray-400 text-sm font-code">Validation status: Completed</span>
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
            <span className="font-code">EDUCATION</span>
          </div>
          
          <div className="mb-6 text-neon-blue font-code text-sm">
            <span className="inline-block">$ cat education.txt</span>
          </div>
          
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="w-12 h-12 rounded-none border-2 border-neon-blue flex items-center justify-center mr-4">
                <Award className="w-6 h-6 text-neon-blue" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-neon-blue font-code">Master 1 : Cybersécurité</h3>
                <p className="text-gray-400 text-sm font-code">Université Paris 8 | 2023 - Présent</p>
                <p className="text-gray-300 mt-2">Spécialisation en sécurité des systèmes d'information, cryptographie, analyse de vulnérabilités et réponse aux incidents.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-12 h-12 rounded-none border-2 border-neon-purple flex items-center justify-center mr-4">
                <Award className="w-6 h-6 text-neon-purple" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-neon-purple font-code">Licence de Droit</h3>
                <p className="text-gray-400 text-sm font-code">Sorbonne Paris Nord | 2021</p>
                <p className="text-gray-300 mt-2">Formation juridique avec une attention particulière au droit du numérique et à la protection des données.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="w-12 h-12 rounded-none border-2 border-neon-green flex items-center justify-center mr-4">
                <Award className="w-6 h-6 text-neon-green" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-neon-green font-code">Baccalauréat Scientifique</h3>
                <p className="text-gray-400 text-sm font-code">Lycée Européen de l'Europe | 2019</p>
                <p className="text-gray-300 mt-2">Spécialité Mathématiques et Sciences de l'Ingénieur, mention Bien.</p>
              </div>
            </div>
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
            <span>verify_credentials --all</span>
          </div>
          <div className="mt-2 text-gray-400">
            <div>Status: <span className="text-neon-green">Verified</span></div>
            <div>Skills: <span className="text-neon-blue">Security, Networks, Development</span></div>
            <div>Continuous Learning: <span className="text-neon-purple">Active</span></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certifications