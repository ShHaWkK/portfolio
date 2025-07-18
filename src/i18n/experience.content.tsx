export default {
  fr: {
    title: "Expérience Professionnelle",
    command: "ls -la ~/experience/",
    experiences: [
      {
        role: "Administrateur Système et Réseau (Alternance)",
        company: "BSRQ MEDIA",
        period: "09/2024 - Aujourd'hui",
        commandId: "EXP_0x01",
        description: [
          "Gestion d'infrastructures (Proxmox, Netgate, Aruba), sécurisation WiFi & Firewall",
          "Installation/Configuration: Datacenter, support ticketing N1-2",
          "Développement Web & Maintenance : Serveur + Test (Docker, Grafana, Jeedom)",
          "Supervision avec Grafana, gestion Docker, automatisation"
        ]
      },
      {
        role: "Développeur Web (Stage)",
        company: "First-Conseil et Conseil en Gestion",
        period: "04/2023 - 08/2023",
        commandId: "EXP_0x02",
        description: [
          "Développement d'applications web avec Laravel, PHP, SQL",
          "Prototypage Figma, application web Recette",
          "Développement d'un malware basé sur LID_PRELOAD pour octroyer les droits SSH",
          "Sécurisation entre le client et un serveur OpenSSH, Mise en place de fonctionnalités avancées"
        ]
      },
      {
        role: "Audit et exploitation de défense WiFi (WEP, WPA2, WPS)",
        company: "LAB_Security",
        period: "07/2020 - 08/2020",
        commandId: "EXP_0x03",
        description: [
          "Accès Point permettant la capture/analyse de paquets et la redirection des victimes",
          "Réalisation d'un Pentest sur l'infrastructure réseau",
          "Exploitation de vulnérabilités WiFi, analyse de sécurité réseau",
          "Rédaction de rapports de sécurité et recommandations"
        ]
      },
      {
        role: "Développement d'un honeypot de haute interaction",
        company: "Projet Personnel",
        period: "2019 - Présent",
        commandId: "EXP_0x04",
        description: [
          "Conception d'un honeypot SSH utilisant VLAN pour capturer les attaques",
          "Développement avec Docker, analyse comportementale des attaquants",
          "Collecte et analyse de données d'intrusion",
          "Amélioration continue de la détection des menaces"
        ]
      }
    ],
    terminal: {
      complete: "experience_analysis --complete",
      status: "Statut :",
      active: "Actif en alternance",
      focus: "Focus :",
      focusAreas: "Administration Système, Sécurité Réseau, Développement",
      ctfPlatform: "Plateforme CTF :",
      githubProjects: "Projets GitHub :"
    }
  },
  en: {
    title: "Professional Experience",
    command: "ls -la ~/experience/",
    experiences: [
      {
        role: "System and Network Administrator (Work-Study)",
        company: "BSRQ MEDIA",
        period: "09/2024 - Present",
        commandId: "EXP_0x01",
        description: [
          "Infrastructure management (Proxmox, Netgate, Aruba), WiFi & Firewall security",
          "Installation/Configuration: Datacenter, N1-2 ticketing support",
          "Web Development & Maintenance: Server + Testing (Docker, Grafana, Jeedom)",
          "Grafana monitoring, Docker management, automation"
        ]
      },
      {
        role: "Web Developer (Internship)",
        company: "First-Conseil et Conseil en Gestion",
        period: "04/2023 - 08/2023",
        commandId: "EXP_0x02",
        description: [
          "Web application development with Laravel, PHP, SQL",
          "Figma prototyping, Recipe web application",
          "Development of LID_PRELOAD-based malware to grant SSH rights",
          "Security between client and OpenSSH server, advanced features implementation"
        ]
      },
      {
        role: "WiFi Defense Audit and Exploitation (WEP, WPA2, WPS)",
        company: "LAB_Security",
        period: "07/2020 - 08/2020",
        commandId: "EXP_0x03",
        description: [
          "Access Point for packet capture/analysis and victim redirection",
          "Network infrastructure penetration testing",
          "WiFi vulnerability exploitation, network security analysis",
          "Security report writing and recommendations"
        ]
      },
      {
        role: "High-Interaction Honeypot Development",
        company: "Personal Project",
        period: "2019 - Present",
        commandId: "EXP_0x04",
        description: [
          "SSH honeypot design using VLAN to capture attacks",
          "Docker development, attacker behavioral analysis",
          "Intrusion data collection and analysis",
          "Continuous threat detection improvement"
        ]
      }
    ],
    terminal: {
      complete: "experience_analysis --complete",
      status: "Status:",
      active: "Active in work-study",
      focus: "Focus:",
      focusAreas: "System Administration, Network Security, Development",
      ctfPlatform: "CTF Platform:",
      githubProjects: "GitHub Projects:"
    }
  }
};