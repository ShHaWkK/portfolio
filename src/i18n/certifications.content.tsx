export default {
  fr: {
    title: "Certifications & Formations",
    command: "~/certifications",
    terminalCommand: "ls -la | grep \"credentials\"",
    validationStatus: "Validé",
    certifications: [
      {
        title: "Master 1 Cybersécurité",
        issuer: "Ynov Campus",
        date: "2023 - 2024",
        description: "Formation avancée en cybersécurité, tests d'intrusion et sécurité des systèmes."
      },
      {
        title: "Bachelor Cybersécurité Python",
        issuer: "Ynov Campus",
        date: "2022 - 2023",
        description: "Spécialisation en développement sécurisé avec Python et analyse de vulnérabilités."
      },
      {
        title: "Assembler x86 x64",
        issuer: "Formation Technique",
        date: "2022",
        description: "Maîtrise de l'assembleur pour l'analyse de malwares et le reverse engineering."
      },
      {
        title: "Sécurité & Vulnérabilité (WEP,WPA,WPS, WPA2) / Gestion d'exploit : ROP,RTE,ASLR, pwn",
        issuer: "Formation Spécialisée",
        date: "2021 - 2022",
        description: "Expertise en sécurité WiFi et techniques d'exploitation avancées."
      },
      {
        title: "Cryptographie & Chiffrement",
        issuer: "Formation Technique",
        date: "2021",
        description: "Algorithmes de chiffrement, cryptanalyse et sécurité cryptographique."
      },
      {
        title: "Linux administration (Fedora, vim, bash) / Virtualisation des réseaux",
        issuer: "Formation Système",
        date: "2020 - 2021",
        description: "Administration Linux avancée et virtualisation d'infrastructures réseau."
      },
      {
        title: "Cloud (Heroku, Render...) & application Web (React, JS, PHP, Angular, API REST)",
        issuer: "Formation Développement",
        date: "2019 - 2020",
        description: "Développement d'applications cloud et technologies web modernes."
      }
    ],
    education: {
      title: "FORMATION",
      command: "cat education.log",
      degrees: [
        {
          title: "Master 1 Cybersécurité",
          institution: "Ynov Campus",
          period: "2023 - 2024",
          description: "Formation spécialisée en cybersécurité, tests d'intrusion, forensique numérique et gestion des risques."
        },
        {
          title: "Bachelor Cybersécurité Python",
          institution: "Ynov Campus", 
          period: "2022 - 2023",
          description: "Formation en développement sécurisé Python, analyse de vulnérabilités et sécurité applicative."
        },
        {
          title: "Licence de Droit",
          institution: "Université Paris Nord",
          period: "Septembre 2021 à novembre 2022",
          description: "Formation juridique avec spécialisation en droit du numérique et cybersécurité."
        },
        {
          title: "Diplôme Santé 100 Quai de la Râpée",
          institution: "École de Santé",
          period: "Septembre 2019 à juin 2020",
          description: "Formation en santé publique et gestion des systèmes d'information de santé."
        },
        {
          title: "Baccalauréat Science de l'Ingénieur",
          institution: "Lycée Benoît de L'Europe",
          period: "2018 - 2019",
          description: "Formation scientifique avec spécialisation en sciences de l'ingénieur."
        }
      ]
    },
    footer: {
      command: "cat status.log",
      status: "Status:",
      statusValue: "Étudiant Master 1",
      skills: "Compétences validées:",
      skillsValue: "Python, Cybersécurité, Administration Linux",
      learning: "Formation continue:",
      learningValue: "Pentesting, Cloud Security, DevSecOps"
    }
  },
  en: {
    title: "Certifications & Training",
    command: "~/certifications",
    terminalCommand: "ls -la | grep \"credentials\"",
    validationStatus: "Validated",
    certifications: [
      {
        title: "Master 1 Cybersecurity",
        issuer: "Ynov Campus",
        date: "2023 - 2024",
        description: "Advanced training in cybersecurity, penetration testing and systems security."
      },
      {
        title: "Bachelor Cybersecurity Python",
        issuer: "Ynov Campus",
        date: "2022 - 2023",
        description: "Specialization in secure Python development and vulnerability analysis."
      },
      {
        title: "Assembler x86 x64",
        issuer: "Technical Training",
        date: "2022",
        description: "Assembly language mastery for malware analysis and reverse engineering."
      },
      {
        title: "Security & Vulnerability (WEP,WPA,WPS, WPA2) / Exploit Management: ROP,RTE,ASLR, pwn",
        issuer: "Specialized Training",
        date: "2021 - 2022",
        description: "Expertise in WiFi security and advanced exploitation techniques."
      },
      {
        title: "Cryptography & Encryption",
        issuer: "Technical Training",
        date: "2021",
        description: "Encryption algorithms, cryptanalysis and cryptographic security."
      },
      {
        title: "Linux Administration (Fedora, vim, bash) / Network Virtualization",
        issuer: "System Training",
        date: "2020 - 2021",
        description: "Advanced Linux administration and network infrastructure virtualization."
      },
      {
        title: "Cloud (Heroku, Render...) & Web Applications (React, JS, PHP, Angular, API REST)",
        issuer: "Development Training",
        date: "2019 - 2020",
        description: "Cloud application development and modern web technologies."
      }
    ],
    education: {
      title: "EDUCATION",
      command: "cat education.log",
      degrees: [
        {
          title: "Master 1 Cybersecurity",
          institution: "Ynov Campus",
          period: "2023 - 2024",
          description: "Specialized training in cybersecurity, penetration testing, digital forensics and risk management."
        },
        {
          title: "Bachelor Cybersecurity Python",
          institution: "Ynov Campus",
          period: "2022 - 2023",
          description: "Training in secure Python development, vulnerability analysis and application security."
        },
        {
          title: "Law Degree",
          institution: "Paris Nord University",
          period: "September 2021 to November 2022",
          description: "Legal training with specialization in digital law and cybersecurity."
        },
        {
          title: "Health Diploma 100 Quai de la Râpée",
          institution: "Health School",
          period: "September 2019 to June 2020",
          description: "Public health training and health information systems management."
        },
        {
          title: "Engineering Science Baccalaureate",
          institution: "Benoît de L'Europe High School",
          period: "2018 - 2019",
          description: "Scientific training with specialization in engineering sciences."
        }
      ]
    },
    footer: {
      command: "cat status.log",
      status: "Status:",
      statusValue: "Master 1 Student",
      skills: "Validated skills:",
      skillsValue: "Python, Cybersecurity, Linux Administration",
      learning: "Continuous learning:",
      learningValue: "Pentesting, Cloud Security, DevSecOps"
    }
  }
};