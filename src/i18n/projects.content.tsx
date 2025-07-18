export default {
  fr: {
    title: "Mes Projets",
    command: "ls -la ~/projects/",
    projects: [
      {
        title: "SSH Honeypot",
        description: "Honeypot SSH avancé pour capturer et analyser les tentatives d'intrusion en temps réel",
        type: "HONEYPOT",
        stack: ["Python", "SSH", "Logging", "Docker"],
        github: "https://github.com/ShHaWkK/ssh-honeypot",
        demo: null
      },
      {
        title: "FTP Honeypot",
        description: "Système de piège FTP pour détecter et analyser les activités malveillantes",
        type: "HONEYPOT",
        stack: ["Python", "FTP", "Security", "Analysis"],
        github: "https://github.com/ShHaWkK/ftp-honeypot",
        demo: null
      },
      {
        title: "RDP Honeypot",
        description: "Honeypot RDP pour capturer les tentatives de connexion à distance",
        type: "HONEYPOT",
        stack: ["Python", "RDP", "Windows", "Monitoring"],
        github: "https://github.com/ShHaWkK/rdp-honeypot",
        demo: null
      },
      {
        title: "Malware Analyzer",
        description: "Outil d'analyse automatisée de malwares avec sandbox intégrée",
        type: "TOOL",
        stack: ["Python", "Sandbox", "Analysis", "Forensics"],
        github: "https://github.com/ShHaWkK/malware-analyzer",
        demo: null
      }
    ],
    buttons: {
      viewSource: "Code Source",
      liveDemo: "Démo Live"
    },
    terminal: {
      clone: "git clone https://github.com/ShHaWkK/*.git",
      cloning: "Clonage des repositories...",
      found: "4 projets trouvés - Honeypots, Outils de sécurité"
    }
  },
  en: {
    title: "My Projects",
    command: "ls -la ~/projects/",
    projects: [
      {
        title: "SSH Honeypot",
        description: "Advanced SSH honeypot to capture and analyze intrusion attempts in real-time",
        type: "HONEYPOT",
        stack: ["Python", "SSH", "Logging", "Docker"],
        github: "https://github.com/ShHaWkK/ssh-honeypot",
        demo: null
      },
      {
        title: "FTP Honeypot",
        description: "FTP trap system to detect and analyze malicious activities",
        type: "HONEYPOT",
        stack: ["Python", "FTP", "Security", "Analysis"],
        github: "https://github.com/ShHaWkK/ftp-honeypot",
        demo: null
      },
      {
        title: "RDP Honeypot",
        description: "RDP honeypot to capture remote connection attempts",
        type: "HONEYPOT",
        stack: ["Python", "RDP", "Windows", "Monitoring"],
        github: "https://github.com/ShHaWkK/rdp-honeypot",
        demo: null
      },
      {
        title: "Malware Analyzer",
        description: "Automated malware analysis tool with integrated sandbox",
        type: "TOOL",
        stack: ["Python", "Sandbox", "Analysis", "Forensics"],
        github: "https://github.com/ShHaWkK/malware-analyzer",
        demo: null
      }
    ],
    buttons: {
      viewSource: "Source Code",
      liveDemo: "Live Demo"
    },
    terminal: {
      clone: "git clone https://github.com/ShHaWkK/*.git",
      cloning: "Cloning repositories...",
      found: "4 projects found - Honeypots, Security tools"
    }
  }
};