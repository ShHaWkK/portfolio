import { motion } from 'framer-motion'
import { Code, Terminal, Server, Database, Cpu, Monitor, Laptop } from 'lucide-react'

const Technologies = () => {
  const programmingLanguages = [
    { name: 'Python', icon: <Code className="w-6 h-6 text-neon-blue" />, color: 'neon-blue' },
    { name: 'JavaScript', icon: <Code className="w-6 h-6 text-cyber-yellow" />, color: 'cyber-yellow' },
    { name: 'TypeScript', icon: <Code className="w-6 h-6 text-neon-blue" />, color: 'neon-blue' },
    { name: 'PHP', icon: <Code className="w-6 h-6 text-neon-purple" />, color: 'neon-purple' },
    { name: 'Go', icon: <Code className="w-6 h-6 text-neon-blue" />, color: 'neon-blue' },
    { name: 'C/C++', icon: <Code className="w-6 h-6 text-neon-green" />, color: 'neon-green' },
    { name: 'Bash', icon: <Terminal className="w-6 h-6 text-neon-green" />, color: 'neon-green' },
    { name: 'SQL', icon: <Database className="w-6 h-6 text-neon-purple" />, color: 'neon-purple' },
  ]

  const software = [
    { name: 'VSCode', icon: <Code className="w-6 h-6 text-neon-blue" />, color: 'neon-blue' },
    { name: 'Docker', icon: <Server className="w-6 h-6 text-neon-blue" />, color: 'neon-blue' },
    { name: 'Git', icon: <Terminal className="w-6 h-6 text-neon-green" />, color: 'neon-green' },
    { name: 'Wireshark', icon: <Terminal className="w-6 h-6 text-neon-blue" />, color: 'neon-blue' },
    { name: 'Burp Suite', icon: <Terminal className="w-6 h-6 text-neon-purple" />, color: 'neon-purple' },
    { name: 'Metasploit', icon: <Terminal className="w-6 h-6 text-neon-red" />, color: 'neon-red' },
    { name: 'Nmap', icon: <Terminal className="w-6 h-6 text-neon-green" />, color: 'neon-green' },
    { name: 'Ghidra', icon: <Cpu className="w-6 h-6 text-cyber-yellow" />, color: 'cyber-yellow' },
  ]

  const operatingSystems = [
    { name: 'Arch Linux', icon: <Laptop className="w-6 h-6 text-neon-blue" />, color: 'neon-blue' },
    { name: 'Fedora 42', icon: <Laptop className="w-6 h-6 text-neon-purple" />, color: 'neon-purple' },
    { name: 'Kali Linux', icon: <Laptop className="w-6 h-6 text-neon-green" />, color: 'neon-green' },
    { name: 'macOS', icon: <Laptop className="w-6 h-6 text-cyber-yellow" />, color: 'cyber-yellow' },
    { name: 'Windows', icon: <Laptop className="w-6 h-6 text-neon-blue" />, color: 'neon-blue' },
  ]

  return (
    <section id="technologies" className="section bg-background-alt relative">
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
          <div className="inline-block mb-4 px-4 py-1 border border-neon-blue bg-background">
            <span className="font-code text-sm text-neon-blue">~/technologies</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white cyber-text">
            Technologies & Environnements
          </h2>
          <div className="w-32 h-1 bg-neon-blue mx-auto relative">
            <div className="absolute -top-1 left-0 w-2 h-3 bg-neon-blue"></div>
            <div className="absolute -top-1 right-0 w-2 h-3 bg-neon-blue"></div>
          </div>
          <div className="mt-4 font-code text-sm text-gray-400">
            <span className="text-neon-blue">$</span> tech_scan --verbose
          </div>
        </motion.div>

        {/* Programming Languages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 cyber-card p-6 relative max-w-4xl mx-auto"
        >
          <div className="absolute top-0 right-0 bg-neon-blue text-xs text-background px-3 py-1">
            <span className="font-code">LANGUAGES</span>
          </div>
          
          <div className="mb-6 text-neon-blue font-code text-sm">
            <span className="inline-block">$ ls -la /usr/bin/languages</span>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {programmingLanguages.map((lang, index) => (
              <div key={index} className={`p-4 border-2 border-${lang.color} bg-background`}>
                <div className="flex items-center">
                  {lang.icon}
                  <span className={`ml-2 font-code text-${lang.color}`}>{lang.name}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Software */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16 cyber-card p-6 relative max-w-4xl mx-auto"
        >
          <div className="absolute top-0 right-0 bg-neon-purple text-xs text-background px-3 py-1">
            <span className="font-code">SOFTWARE</span>
          </div>
          
          <div className="mb-6 text-neon-purple font-code text-sm">
            <span className="inline-block">$ dpkg -l | grep "security"</span>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {software.map((sw, index) => (
              <div key={index} className={`p-4 border-2 border-${sw.color} bg-background`}>
                <div className="flex items-center">
                  {sw.icon}
                  <span className={`ml-2 font-code text-${sw.color}`}>{sw.name}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Operating Systems */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16 cyber-card p-6 relative max-w-4xl mx-auto"
        >
          <div className="absolute top-0 right-0 bg-neon-green text-xs text-background px-3 py-1">
            <span className="font-code">OS</span>
          </div>
          
          <div className="mb-6 text-neon-green font-code text-sm">
            <span className="inline-block">$ uname -a</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {operatingSystems.map((os, index) => (
              <div key={index} className={`p-4 border-2 border-${os.color} bg-background`}>
                <div className="flex items-center justify-center">
                  {os.icon}
                  <span className={`ml-2 font-code text-${os.color}`}>{os.name}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        
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
            <span className="typing-animation">environment_check --complete</span>
          </div>
          <div className="mt-2 text-gray-400">
            <div>Status: <span className="text-neon-green">All systems operational</span></div>
            <div>Primary Environment: <span className="text-neon-purple">Kali Linux + VSCode + Python</span></div>
            <div>Focus: <span className="text-cyber-yellow">Security Tools & Development</span></div>
            <div>GitHub: <a href="https://github.com/ShHaWkK" target="_blank" rel="noopener noreferrer" className="text-neon-blue hover:underline">github.com/ShHaWkK</a></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Technologies