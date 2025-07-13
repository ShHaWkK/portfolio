import { motion } from 'framer-motion'
import { Github, ExternalLink, Shield, Terminal, Code, Server, Lock, Cpu } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: "Malware LD_PRELOAD",
      description: "Développement d'un malware utilisant la technique LD_PRELOAD pour intercepter les clés SSH en mémoire sur les systèmes Linux.",
      image: "/projects/malware.jpg",
      stack: ["C", "Linux", "SSH"],
      github: "https://github.com/ShHaWkK/ld_preload_malware",
      demo: ""
    },
    {
      title: "Honeypot haute-interaction",
      description: "Conception d'un honeypot avancé avec stack ELK pour la détection, l'analyse et la visualisation des tentatives d'intrusion.",
      image: "/projects/honeypot.jpg",
      stack: ["Docker", "ELK Stack", "Python"],
      github: "https://github.com/ShHaWkK/honeypot-elk",
      demo: ""
    },
    {
      title: "Topologie IPv4 multi-sites",
      description: "Simulation d'une infrastructure réseau multi-sites avec routage dynamique OSPF et sécurisation des échanges via VPN.",
      image: "/projects/network.jpg",
      stack: ["Packet Tracer", "OSPF", "VPN"],
      github: "https://github.com/ShHaWkK/ipv4-topology",
      demo: ""
    },
    {
      title: "Reverse-shell asm x86-64",
      description: "Implémentation d'un reverse shell en assembleur x86-64 optimisé pour une empreinte mémoire minimale.",
      image: "/projects/reverse-shell.jpg",
      stack: ["Assembleur", "x86-64", "Sécurité"],
      github: "https://github.com/ShHaWkK/reverse-shell-asm",
      demo: ""
    }
  ]

  // Créer des images pour les projets avec un style cybersécurité
  const getProjectImage = (index: number) => {
    const colors = ['#00E5FF', '#9A4DFF', '#00FF9D', '#FF3E3E']
    const icons = [
      <Lock key="lock" className="w-12 h-12 text-neon-blue" />,
      <Terminal key="terminal" className="w-12 h-12 text-neon-purple" />,
      <Server key="server" className="w-12 h-12 text-neon-green" />,
      <Cpu key="cpu" className="w-12 h-12 text-neon-red" />
    ]
    
    return (
      <div 
        className="w-full h-48 flex items-center justify-center relative overflow-hidden" 
        style={{ 
          background: `linear-gradient(135deg, rgba(10, 14, 23, 0.9) 0%, rgba(11, 16, 33, 0.95) 100%)`,
        }}
      >
        {/* Grid background */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full" style={{ 
            backgroundImage: 'linear-gradient(to right, rgba(0, 229, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 229, 255, 0.05) 1px, transparent 1px)', 
            backgroundSize: '20px 20px'
          }}></div>
        </div>
        
        {/* Decorative circuit line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-blue to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-purple to-transparent"></div>
        
        {/* Project type label */}
        <div className="absolute top-3 right-3 bg-background px-2 py-1 border border-neon-blue">
          <span className="text-xs font-code text-neon-blue">{['MALWARE', 'HONEYPOT', 'NETWORK', 'REVERSE'][index]}</span>
        </div>
        
        {/* Icon with glow effect */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="mb-3 p-4 rounded-full bg-background-alt border border-neon-blue" style={{ boxShadow: `0 0 15px ${colors[index]}` }}>
            {icons[index]}
          </div>
          <div className="text-sm font-code text-neon-blue">./project_{index+1}.sh</div>
        </div>
      </div>
    )
  }

  return (
    <section id="projects" className="section bg-background-alt relative">
      {/* Section decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'url("/backgrounds/circuit-pattern.svg")', backgroundSize: 'cover' }}></div>
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
            <span className="font-code text-sm text-neon-blue">~/projects</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white cyber-text">
            Projets sélectionnés
          </h2>
          <div className="w-32 h-1 bg-neon-purple mx-auto relative">
            <div className="absolute -top-1 left-0 w-2 h-3 bg-neon-purple"></div>
            <div className="absolute -top-1 right-0 w-2 h-3 bg-neon-purple"></div>
          </div>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
            <span className="font-code text-neon-green">$</span> <span className="font-code">ls -la | grep "cybersecurity"</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="cyber-card overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              {getProjectImage(index)}
              <div className="p-6 relative">
                {/* Project ID */}
                <div className="absolute top-6 right-6 font-code text-xs text-neon-blue opacity-50">
                  ID: {(index + 1).toString().padStart(2, '0')}
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-white font-code">{project.title}</h3>
                <p className="text-gray-300 mb-4 border-l-2 border-neon-blue pl-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.stack.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 text-xs font-code bg-background border-t border-b border-neon-blue text-neon-blue"
                      style={{ clipPath: 'polygon(5% 0, 95% 0, 100% 100%, 0% 100%)' }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 mt-6 pt-4 border-t border-gray-700">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-terminal flex items-center gap-2 text-sm"
                      aria-label={`Code source de ${project.title} sur GitHub`}
                    >
                      <Github className="w-4 h-4" />
                      <span>View Source</span>
                    </a>
                  )}
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn-terminal flex items-center gap-2 text-sm"
                      aria-label={`Démo live de ${project.title}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Terminal-style footer */}
        <div className="mt-16 p-4 border border-terminal-green bg-dark-blue font-code text-terminal-green text-sm">
          <div className="flex items-center">
            <span className="mr-2">$</span>
            <span className="typing-animation">git clone https://github.com/ShHaWkK/cybersecurity-projects.git</span>
          </div>
          <div className="mt-2">Cloning into 'cybersecurity-projects'...</div>
          <div className="mt-1">4 repositories found. Access granted.</div>
        </div>
      </div>
    </section>
  )
}

export default Projects