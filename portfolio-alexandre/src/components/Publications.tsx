import { motion } from 'framer-motion'
import { BookOpen, FileText, Terminal, Shield, Lock, Cpu, ExternalLink, AlertTriangle } from 'lucide-react'

const Publications = () => {
  const publications = [
    {
      title: "Analyse des vulnérabilités dans les réseaux Wi-Fi d'entreprise",
      type: "Article",
      publisher: "Journal de la Cybersécurité",
      date: "2023",
      link: "#",
      icon: <Shield className="w-6 h-6" />,
      color: "neon-blue",
      id: "DOC_0x01",
      abstract: "Étude approfondie des failles WPA2/WPA3 et méthodes d'exploitation dans les environnements professionnels."
    },
    {
      title: "Techniques avancées de détection d'intrusion dans les environnements cloud",
      type: "Conférence",
      publisher: "SecurIT Summit",
      date: "2022",
      link: "#",
      icon: <AlertTriangle className="w-6 h-6" />,
      color: "neon-green",
      id: "DOC_0x02",
      abstract: "Présentation des méthodes de détection basées sur l'IA pour identifier les comportements anormaux dans les infrastructures cloud."
    },
    {
      title: "Implémentation de mécanismes de défense contre les attaques par canal auxiliaire",
      type: "Livre blanc",
      publisher: "Tech Security Research",
      date: "2021",
      link: "#",
      icon: <Lock className="w-6 h-6" />,
      color: "neon-purple",
      id: "DOC_0x03",
      abstract: "Analyse des contre-mesures efficaces pour protéger les systèmes cryptographiques contre les attaques par canal auxiliaire."
    },
    {
      title: "Développement d'un honeypot SSH pour l'analyse des techniques d'attaque",
      type: "Projet",
      publisher: "GitHub",
      date: "2023",
      link: "https://github.com/ShHaWkK",
      icon: <Cpu className="w-6 h-6" />,
      color: "cyber-yellow",
      id: "DOC_0x04",
      abstract: "Conception et déploiement d'un honeypot SSH haute interaction pour capturer et analyser les techniques d'attaque en temps réel."
    }
  ]

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
            Publications & Veille
          </h2>
          <div className="w-32 h-1 bg-neon-purple mx-auto relative">
            <div className="absolute -top-1 left-0 w-2 h-3 bg-neon-purple"></div>
            <div className="absolute -top-1 right-0 w-2 h-3 bg-neon-purple"></div>
          </div>
          <div className="mt-4 font-code text-sm text-gray-400">
            <span className="text-neon-purple">$</span> find . -name "*.research" | sort -r
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {publications.map((pub, index) => (
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
                    {pub.icon}
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
                    aria-label={`Lire ${pub.title}`}
                  >
                    <span className="mr-2">$</span>
                    <span>cat document.txt</span>
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
            <span className="typing-animation">research_status --active-projects</span>
          </div>
          <div className="mt-2 text-gray-400">
            <div>Status: <span className="text-neon-green">Active</span></div>
            <div>Current Focus: <span className="text-neon-blue">Honeypots, Vulnerability Research, CTF</span></div>
            <div>Latest Update: <span className="text-neon-purple">Developing SSH honeypot with advanced logging capabilities</span></div>
            <div>GitHub: <a href="https://github.com/ShHaWkK" target="_blank" rel="noopener noreferrer" className="text-neon-blue hover:underline">github.com/ShHaWkK</a></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Publications