export default {
  fr: {
    title: "Technologies & Environnements",
    command: "tech_scan --verbose",
    sections: {
      languages: {
        label: "LANGUAGES",
        command: "$ ls -la /usr/bin/languages",
        items: [
          { name: 'Python', color: 'neon-blue' },
          { name: 'JavaScript', color: 'cyber-yellow' },
          { name: 'TypeScript', color: 'neon-blue' },
          { name: 'PHP', color: 'neon-purple' },
          { name: 'Go', color: 'neon-blue' },
          { name: 'C/C++', color: 'neon-green' },
          { name: 'Bash', color: 'neon-green' },
          { name: 'SQL', color: 'neon-purple' },
        ]
      },
      software: {
        label: "SOFTWARE",
        command: '$ dpkg -l | grep "security"',
        items: [
          { name: 'VSCode', color: 'neon-blue' },
          { name: 'Docker', color: 'neon-blue' },
          { name: 'Git', color: 'neon-green' },
          { name: 'Wireshark', color: 'neon-blue' },
          { name: 'Burp Suite', color: 'neon-purple' },
          { name: 'Metasploit', color: 'neon-red' },
          { name: 'Nmap', color: 'neon-green' },
          { name: 'Ghidra', color: 'cyber-yellow' },
        ]
      },
      os: {
        label: "SYSTEMS",
        command: "$ uname -a",
        items: [
          { name: 'Arch Linux', color: 'neon-green' },
          { name: 'Fedora 42', color: 'neon-blue' },
          { name: 'Kali Linux', color: 'neon-purple' },
          { name: 'macOS', color: 'cyber-yellow' },
          { name: 'Windows', color: 'neon-blue' },
        ]
      }
    },
    footer: {
      command: "cat tech_status.log",
      status: "Environnement actuel:",
      statusValue: "Arch Linux + Docker",
      focus: "Focus actuel:",
      focusValue: "Cloud Security & DevSecOps",
      tools: "Outils favoris:",
      toolsValue: "Python, Burp Suite, Wireshark"
    }
  },
  en: {
    title: "Technologies & Environments",
    command: "tech_scan --verbose",
    sections: {
      languages: {
        label: "LANGUAGES",
        command: "$ ls -la /usr/bin/languages",
        items: [
          { name: 'Python', color: 'neon-blue' },
          { name: 'JavaScript', color: 'cyber-yellow' },
          { name: 'TypeScript', color: 'neon-blue' },
          { name: 'PHP', color: 'neon-purple' },
          { name: 'Go', color: 'neon-blue' },
          { name: 'C/C++', color: 'neon-green' },
          { name: 'Bash', color: 'neon-green' },
          { name: 'SQL', color: 'neon-purple' },
        ]
      },
      software: {
        label: "SOFTWARE",
        command: '$ dpkg -l | grep "security"',
        items: [
          { name: 'VSCode', color: 'neon-blue' },
          { name: 'Docker', color: 'neon-blue' },
          { name: 'Git', color: 'neon-green' },
          { name: 'Wireshark', color: 'neon-blue' },
          { name: 'Burp Suite', color: 'neon-purple' },
          { name: 'Metasploit', color: 'neon-red' },
          { name: 'Nmap', color: 'neon-green' },
          { name: 'Ghidra', color: 'cyber-yellow' },
        ]
      },
      os: {
        label: "SYSTEMS",
        command: "$ uname -a",
        items: [
          { name: 'Arch Linux', color: 'neon-green' },
          { name: 'Fedora 42', color: 'neon-blue' },
          { name: 'Kali Linux', color: 'neon-purple' },
          { name: 'macOS', color: 'cyber-yellow' },
          { name: 'Windows', color: 'neon-blue' },
        ]
      }
    },
    footer: {
      command: "cat tech_status.log",
      status: "Current environment:",
      statusValue: "Arch Linux + Docker",
      focus: "Current focus:",
      focusValue: "Cloud Security & DevSecOps",
      tools: "Favorite tools:",
      toolsValue: "Python, Burp Suite, Wireshark"
    }
  }, 
  ru: {
    title: "Технологии и Окружения",
    command: "tech_scan --verbose",
    sections: {
      languages: {
        label: "ЯЗЫКИ",
        command: "$ ls -la /usr/bin/languages",
        items: [
          { name: 'Python', color: 'neon-blue' },
          { name: 'JavaScript', color: 'cyber-yellow' },
          { name: 'TypeScript', color: 'neon-blue' },
          { name: 'PHP', color: 'neon-purple' },
          { name: 'Go', color: 'neon-blue' },
          { name: 'C/C++', color: 'neon-green' },
          { name: 'Bash', color: 'neon-green' },
          { name: 'SQL', color: 'neon-purple' },
        ]
      },
      software: {
        label: "ПРОГРАММЫ",
        command: '$ dpkg -l | grep "security"',
        items: [
          { name: 'VSCode', color: 'neon-blue' },
          { name: 'Docker', color: 'neon-blue' },
          { name: 'Git', color: 'neon-green' },
          { name: 'Wireshark', color: 'neon-blue' },
          { name: 'Burp Suite', color: 'neon-purple' },
          { name: 'Metasploit', color: 'neon-red' },
          { name: 'Nmap', color: 'neon-green' },
          { name: 'Ghidra', color: 'cyber-yellow' },
        ]
      },
      os: {
        label: "СИСТЕМЫ",
        command: "$ uname -a",
        items: [
          { name: 'Arch Linux', color: 'neon-green' },
          { name: 'Fedora 42', color: 'neon-blue' },
          { name: 'Kali Linux', color: 'neon-purple' },
          { name: 'macOS', color: 'cyber-yellow' },
          { name: 'Windows', color: 'neon-blue' },
        ]
      }
    },
    footer: {
      command: "cat tech_status.log",
      status: "Текущее окружение:",
      statusValue: "Arch Linux + Docker",
      focus: "Текущий фокус:",
      focusValue: "Cloud Security & DevSecOps",
      tools: "Любимые инструменты:",
      toolsValue: "Python, Burp Suite, Wireshark"
    }
  },
  de: {
    title: "Technologien & Umgebungen",
    command: "tech_scan --verbose",
    sections: {
      languages: {
        label: "SPRACHEN",
        command: "$ ls -la /usr/bin/languages",
        items: [
          { name: 'Python', color: 'neon-blue' },
          { name: 'JavaScript', color: 'cyber-yellow' },
          { name: 'TypeScript', color: 'neon-blue' },
          { name: 'PHP', color: 'neon-purple' },
          { name: 'Go', color: 'neon-blue' },
          { name: 'C/C++', color: 'neon-green' },
          { name: 'Bash', color: 'neon-green' },
          { name: 'SQL', color: 'neon-purple' },
        ]
      },
      software: {
        label: "SOFTWARE",
        command: '$ dpkg -l | grep "security"',
        items: [
          { name: 'VSCode', color: 'neon-blue' },
          { name: 'Docker', color: 'neon-blue' },
          { name: 'Git', color: 'neon-green' },
          { name: 'Wireshark', color: 'neon-blue' },
          { name: 'Burp Suite', color: 'neon-purple' },
          { name: 'Metasploit', color: 'neon-red' },
          { name: 'Nmap', color: 'neon-green' },
          { name: 'Ghidra', color: 'cyber-yellow' },
        ]
      },
      os: {
        label: "SYSTEME",
        command: "$ uname -a",
        items: [
          { name: 'Arch Linux', color: 'neon-green' },
          { name: 'Fedora 42', color: 'neon-blue' },
          { name: 'Kali Linux', color: 'neon-purple' },
          { name: 'macOS', color: 'cyber-yellow' },
          { name: 'Windows', color: 'neon-blue' },
        ]
      }
    },
    footer: {
      command: "cat tech_status.log",
      status: "Aktuelle Umgebung:",
      statusValue: "Arch Linux + Docker",
      focus: "Aktueller Fokus:",
      focusValue: "Cloud Security & DevSecOps",
      tools: "Lieblingswerkzeuge:",
      toolsValue: "Python, Burp Suite, Wireshark"
    }
  },
  es: {
    title: "Tecnologías y Entornos",
    command: "tech_scan --verbose",
    sections: {
      languages: {
        label: "LENGUAJES",
        command: "$ ls -la /usr/bin/languages",
        items: [
          { name: 'Python', color: 'neon-blue' },
          { name: 'JavaScript', color: 'cyber-yellow' },
          { name: 'TypeScript', color: 'neon-blue' },
          { name: 'PHP', color: 'neon-purple' },
          { name: 'Go', color: 'neon-blue' },
          { name: 'C/C++', color: 'neon-green' },
          { name: 'Bash', color: 'neon-green' },
          { name: 'SQL', color: 'neon-purple' },
        ]
      },
      software: {
        label: "SOFTWARE",
        command: '$ dpkg -l | grep "security"',
        items: [
          { name: 'VSCode', color: 'neon-blue' },
          { name: 'Docker', color: 'neon-blue' },
          { name: 'Git', color: 'neon-green' },
          { name: 'Wireshark', color: 'neon-blue' },
          { name: 'Burp Suite', color: 'neon-purple' },
          { name: 'Metasploit', color: 'neon-red' },
          { name: 'Nmap', color: 'neon-green' },
          { name: 'Ghidra', color: 'cyber-yellow' },
        ]
      },
      os: {
        label: "SISTEMAS",
        command: "$ uname -a",
        items: [
          { name: 'Arch Linux', color: 'neon-green' },
          { name: 'Fedora 42', color: 'neon-blue' },
          { name: 'Kali Linux', color: 'neon-purple' },
          { name: 'macOS', color: 'cyber-yellow' },
          { name: 'Windows', color: 'neon-blue' },
        ]
      }
    },
    footer: {
      command: "cat tech_status.log",
      status: "Entorno actual:",
      statusValue: "Arch Linux + Docker",
      focus: "Enfoque actual:",
      focusValue: "Cloud Security & DevSecOps",
      tools: "Herramientas favoritas:",
      toolsValue: "Python, Burp Suite, Wireshark"
    }
  },
};