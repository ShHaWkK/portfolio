import { motion } from 'framer-motion'
import { Shield, Terminal, Lock, Wifi, Bug, FileCode, Network, HardDrive } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: "Sécurité Offensive",
      skills: [
        "Pentesting",
        "Audit de sécurité",
        "Exploitation",
        "OSINT",
        "Forensics",
        "Reverse Engineering",
        "Malware Analysis",
        "Web Security",
        "CTF Challenges"
      ],
      icon: <Shield className="w-6 h-6" />,
      color: "neon-blue",
      secondaryIcon: <Bug className="w-4 h-4" />
    },
    {
      title: "Réseaux & Infrastructure",
      skills: [
        "Firewall (PfSense)",
        "VPN (OpenVPN, WireGuard)",
        "VLAN",
        "Routage",
        "DNS",
        "DHCP",
        "Active Directory",
        "Honeypots",
        "IDS/IPS"
      ],
      icon: <Network className="w-6 h-6" />,
      color: "neon-purple",
      secondaryIcon: <Wifi className="w-4 h-4" />
    },
    {
      title: "Outils & Techniques",
      skills: [
        "Kali Linux",
        "Metasploit",
        "Burp Suite",
        "Wireshark",
        "Nmap",
        "John the Ripper",
        "Hashcat",
        "Ghidra",
        "pwn.college"
      ],
      icon: <Lock className="w-6 h-6" />,
      color: "neon-green",
      secondaryIcon: <HardDrive className="w-4 h-4" />
    },
    {
      title: "Développement",
      skills: [
        "Python",
        "Bash",
        "PowerShell",
        "C/C++",
        "Assembleur",
        "Docker",
        "Git",
        "CI/CD",
        "Monitoring"
      ],
      icon: <FileCode className="w-6 h-6" />,
      color: "neon-blue",
      secondaryIcon: <Terminal className="w-4 h-4" />
    }
  ]

  const skillVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="skills" className="section bg-background relative">
      {/* Background grid effect */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full" style={{ 
          backgroundImage: 'linear-gradient(to right, var(--grid-line) 1px, transparent 1px), linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)', 
          backgroundSize: '50px 50px'
        }}></div>
      </div>
      
      {/* Scanning line effect */}
      <motion.div
        className="absolute inset-0 z-0 bg-neon-green opacity-5 pointer-events-none"
        animate={{
          top: ["-100%", "100%"],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear"
        }}
        style={{ height: "2px" }}
      />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-1 border border-neon-green bg-background">
            <span className="font-code text-sm text-neon-green">~/skills</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white cyber-text">
            Compétences Techniques
          </h2>
          <div className="w-32 h-1 bg-neon-green mx-auto relative">
            <div className="absolute -top-1 left-0 w-2 h-3 bg-neon-green"></div>
            <div className="absolute -top-1 right-0 w-2 h-3 bg-neon-green"></div>
          </div>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto font-code">
            <span className="text-neon-green">$</span> skill_scan --target="cybersecurity" --level="advanced"
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="terminal-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute top-0 right-0 bg-terminal-green text-dark-blue text-xs px-2 py-1">
                <span className="font-code">SKILL_SET_{index + 1}</span>
              </div>
              
              <div className={`flex items-center mb-6 text-${category.color}`}>
                <div className="p-2 border border-neon-blue mr-3 relative">
                  {category.icon}
                  <div className="absolute -top-1 -right-1 p-1 bg-background border border-neon-blue">
                    {category.secondaryIcon}
                  </div>
                </div>
                <h3 className="text-xl font-bold font-code">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="flex items-center"
                    variants={skillVariants}
                  >
                    <span className="text-neon-green mr-2 font-code text-xs">[{skillIndex + 1}]</span>
                    <span className={`inline-block px-3 py-1 text-sm bg-background border-l-2 border-${category.color} text-${category.color} font-code w-full`}>
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-800 text-xs text-gray-400 font-code">
                <span className="text-neon-green">$</span> skill_level --analyze="{category.title.toLowerCase()}"
                <div className="mt-2 flex">
                  <span className="mr-2">Progress:</span>
                  <div className="w-full bg-background-alt h-2 mt-1">
                    <div 
                      className={`h-full bg-${category.color}`} 
                      style={{ width: `${85 + Math.floor(Math.random() * 15)}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Terminal output effect */}
        <motion.div 
          className="mt-16 p-4 border border-neon-blue bg-background-alt font-code text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center text-neon-blue">
            <span className="mr-2">$</span>
            <span>skill_analysis --complete</span>
          </div>
          <div className="mt-2 text-gray-300">
            <div>Analyzing skill sets...</div>
            <div>CTF participation: <span className="text-neon-green">Active</span> on <a href="https://pwn.college/hacker/ShHawk" target="_blank" rel="noopener noreferrer" className="text-neon-blue underline">pwn.college</a></div>
            <div>GitHub projects: <span className="text-neon-green">Multiple</span> security tools available at <a href="https://github.com/ShHaWkK" target="_blank" rel="noopener noreferrer" className="text-neon-blue underline">github.com/ShHaWkK</a></div>
            <div>Skill assessment complete. Profile matches <span className="text-neon-purple">cybersecurity specialist</span> requirements.</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
