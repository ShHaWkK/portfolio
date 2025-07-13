import { motion } from 'framer-motion'
import { Terminal, Shield, Server, Code, Lock, Cpu, Wifi, Database } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      role: "Administrateur Systèmes & Réseaux",
      company: "BSIO MEDIA",
      period: "09/2024 - Présent",
      icon: <Server className="w-6 h-6 text-neon-blue" />,
      color: "neon-blue",
      commandId: "SYS_ADMIN_01",
      description: [
        "Gestion d'infrastructures (Proxmox, Netgear, Aruba): sécurisation WiFi & réseau, déploiement de serveurs Linux",
        "Administration système (Debian, CentOS): configuration de services web & mail, monitoring",
        "Mise en place de solutions de sécurité: pare-feu, IDS/IPS, VPN, analyse de logs"
      ]
    },
    {
      role: "Développeur Web & Maintenance",
      company: "First Conseil",
      period: "06/2024 - 08/2024",
      icon: <Code className="w-6 h-6 text-neon-green" />,
      color: "neon-green",
      commandId: "DEV_WEB_02",
      description: [
        "Développement web (React.js): gestion de projets (Jira, Salesforce), intégration continue",
        "Maintenance et sécurisation d'applications web: audit, correction de vulnérabilités",
        "Implémentation de mécanismes d'authentification sécurisés et chiffrement des données"
      ]
    },
    {
      role: "Développeur Web & Analyste",
      company: "Freelance",
      period: "01/2023 - 07/2023",
      icon: <Lock className="w-6 h-6 text-neon-purple" />,
      color: "neon-purple",
      commandId: "SEC_DEV_03",
      description: [
        "Mise à jour de sites web, développement PHP, Python, bases SQL, intégration Figma",
        "Développement d'un honeypot SSH pour analyse des techniques d'attaque",
        "Participation à des CTFs (pwn.college): exploitation de vulnérabilités, reverse engineering"
      ]
    },
    {
      role: "Assistant Gestion & Support",
      company: "HR DIFFUSION",
      period: "07/2020 - 06/2020",
      icon: <Database className="w-6 h-6 text-cyber-yellow" />,
      color: "cyber-yellow",
      commandId: "SUP_TECH_04",
      description: [
        "Assistance technique et support (Help Desk): analyse avec Excel",
        "Gestion de parc informatique: maintenance, mise à jour, sécurisation",
        "Implémentation de procédures de sécurité et formation des utilisateurs"
      ]
    }
  ]

  return (
    <section id="experience" className="section bg-background-alt relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'url("/backgrounds/matrix-rain.svg")', backgroundSize: 'cover' }}></div>
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
            <span className="font-code text-sm text-neon-blue">~/experience</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white cyber-text">
            Expériences professionnelles
          </h2>
          <div className="w-32 h-1 bg-neon-blue mx-auto relative">
            <div className="absolute -top-1 left-0 w-2 h-3 bg-neon-blue"></div>
            <div className="absolute -top-1 right-0 w-2 h-3 bg-neon-blue"></div>
          </div>
          <div className="mt-4 font-code text-sm text-gray-400">
            <span className="text-neon-blue">$</span> cat career_history.log | sort -r
          </div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 h-full w-1 bg-gradient-to-b from-neon-blue via-neon-green to-neon-purple transform -translate-x-1/2"></div>

          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className={`relative mb-16 md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex items-center mb-4">
                {/* Timeline dot with pulse effect */}
                <div className="absolute left-0 md:left-0 w-5 h-5 rounded-none bg-background border-2 border-neon-blue transform md:translate-x(-50%) z-10 flex items-center justify-center">
                  <div className={`w-2 h-2 bg-${exp.color} animate-pulse`}></div>
                </div>
                
                {/* Date badge */}
                <div className="ml-8 md:ml-0 px-4 py-1 bg-background border-2 border-neon-blue text-neon-blue text-sm font-code">
                  {exp.period}
                </div>
              </div>

              <div className="ml-8 md:ml-0 cyber-card p-6 relative">
                {/* Command ID tag */}
                <div className={`absolute top-0 right-0 bg-${exp.color} text-xs text-background px-3 py-1`}>
                  <span className="font-code">{exp.commandId}</span>
                </div>
                
                <div className="flex items-start mb-4">
                  <div className={`w-12 h-12 rounded-none border-2 border-${exp.color} flex items-center justify-center mr-4`}>
                    {exp.icon}
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold text-${exp.color} font-code`}>{exp.role}</h3>
                    <p className="text-gray-400 text-sm font-code">{exp.company}</p>
                  </div>
                </div>
                
                <div className="mt-6 space-y-3">
                  {exp.description.map((item, i) => (
                    <div key={i} className={`pl-4 border-l-2 border-${exp.color}`}>
                      <div className="flex items-start">
                        <span className={`text-${exp.color} font-code mr-2`}>[{i+1}]</span>
                        <span className="text-gray-300 font-code text-sm">{item}</span>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Terminal-style footer */}
                <div className="mt-4 pt-4 border-t border-gray-800">
                  <div className="flex items-center text-gray-400 text-xs font-code">
                    <span className={`text-${exp.color} mr-2`}>$</span>
                    <span>skill_level --analyze</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
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
            <span className="typing-animation">career_analysis --complete</span>
          </div>
          <div className="mt-2 text-gray-400">
            <div>Status: <span className="text-neon-green">Active</span></div>
            <div>Focus: <span className="text-neon-purple">Cybersecurity, Development, System Administration</span></div>
            <div>CTF Platform: <a href="https://pwn.college/hacker/ShHawk" target="_blank" rel="noopener noreferrer" className="text-neon-blue hover:underline">pwn.college/hacker/ShHawk</a></div>
            <div>GitHub Projects: <a href="https://github.com/ShHaWkK" target="_blank" rel="noopener noreferrer" className="text-neon-blue hover:underline">github.com/ShHaWkK</a></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience