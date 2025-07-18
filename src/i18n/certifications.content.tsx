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
  }, 

  ru: {
    title: "Сертификаты и Обучение",
    command: "~/certifications",
    terminalCommand: "ls -la | grep \"credentials\"",
    validationStatus: "Подтверждено",
    certifications: [
      {
        title: "Магистр 1 Кибербезопасность",
        issuer: "Ynov Campus",
        date: "2023 - 2024",
        description: "Продвинутое обучение по кибербезопасности, тестированию на проникновение и безопасности систем."
      },
      {
        title: "Бакалавр Кибербезопасность Python",
        issuer: "Ynov Campus",
        date: "2022 - 2023",
        description: "Специализация по безопасной разработке на Python и анализу уязвимостей."
      },
      {
        title: "Assembler x86 x64",
        issuer: "Техническое обучение",
        date: "2022",
        description: "Владение ассемблером для анализа вредоносных программ и реверс-инжиниринга."
      },
      {
        title: "Безопасность и Уязвимости (WEP,WPA,WPS, WPA2) / Управление эксплойтами: ROP,RTE,ASLR, pwn",
        issuer: "Специализированное обучение",
        date: "2021 - 2022",
        description: "Экспертиза в области WiFi-безопасности и продвинутых техник эксплуатации."
      },
      {
        title: "Криптография и Шифрование",
        issuer: "Техническое обучение",
        date: "2021",
        description: "Алгоритмы шифрования, криптоанализ и криптографическая безопасность."
      },
      {
        title: "Администрирование Linux (Fedora, vim, bash) / Виртуализация сетей",
        issuer: "Системное обучение",
        date: "2020 - 2021",
        description: "Продвинутое администрирование Linux и виртуализация сетевой инфраструктуры."
      },
      {
        title: "Облако (Heroku, Render...) и Веб-приложения (React, JS, PHP, Angular, API REST)",
        issuer: "Обучение разработке",
        date: "2019 - 2020",
        description: "Разработка облачных приложений и современных веб-технологий."
      }
    ],
    education: {
      title: "ОБРАЗОВАНИЕ",
      command: "cat education.log",
      degrees: [
        {
          title: "Магистр 1 Кибербезопасность",
          institution: "Ynov Campus",
          period: "2023 - 2024",
          description: "Специализированное обучение по кибербезопасности, тестированию на проникновение, цифровой криминалистике и управлению рисками."
        },
        {
          title: "Бакалавр Кибербезопасность Python",
          institution: "Ynov Campus",
          period: "2022 - 2023",
          description: "Обучение безопасной разработке на Python, анализу уязвимостей и безопасности приложений."
        },
        {
          title: "Степень по праву",
          institution: "Университет Париж Норд",
          period: "Сентябрь 2021 - ноябрь 2022",
          description: "Юридическое образование со специализацией в цифровом праве и кибербезопасности."
        },
        {
          title: "Диплом по здравоохранению 100 Quai de la Râpée",
          institution: "Медицинская школа",
          period: "Сентябрь 2019 - июнь 2020",
          description: "Обучение в области общественного здравоохранения и управления информационными системами здравоохранения."
        },
        {
          title: "Бакалавриат по инженерным наукам",
          institution: "Лицей Бенуа де Л'Европа",
          period: "2018 - 2019",
          description: "Научное образование со специализацией в инженерных науках."
        }
      ]
    },
    footer: {
      command: "cat status.log",
      status: "Статус:",
      statusValue: "Студент магистратуры 1 курса",
      skills: "Подтвержденные навыки:",
      skillsValue: "Python, Кибербезопасность, Администрирование Linux",
      learning: "Непрерывное обучение:",
      learningValue: "Пентестинг, Облачная безопасность, DevSecOps"
    }
  },
  es: {
    title: "Certificaciones y Formación",
    command: "~/certifications",
    terminalCommand: "ls -la | grep \"credentials\"",
    validationStatus: "Validado",
    certifications: [
      {
        title: "Máster 1 Ciberseguridad",
        issuer: "Ynov Campus",
        date: "2023 - 2024",
        description: "Formación avanzada en ciberseguridad, pruebas de penetración y seguridad de sistemas."
      },
      {
        title: "Grado en Ciberseguridad Python",
        issuer: "Ynov Campus",
        date: "2022 - 2023",
        description: "Especialización en desarrollo seguro con Python y análisis de vulnerabilidades."
      },
      {
        title: "Assembler x86 x64",
        issuer: "Formación Técnica",
        date: "2022",
        description: "Dominio de ensamblador para análisis de malware e ingeniería inversa."
      },
      {
        title: "Seguridad y Vulnerabilidad (WEP,WPA,WPS, WPA2) / Gestión de exploits: ROP,RTE,ASLR, pwn",
        issuer: "Formación Especializada",
        date: "2021 - 2022",
        description: "Experiencia en seguridad WiFi y técnicas avanzadas de explotación."
      },
      {
        title: "Criptografía y Cifrado",
        issuer: "Formación Técnica",
        date: "2021",
        description: "Algoritmos de cifrado, criptoanálisis y seguridad criptográfica."
      },
      {
        title: "Administración Linux (Fedora, vim, bash) / Virtualización de redes",
        issuer: "Formación en Sistemas",
        date: "2020 - 2021",
        description: "Administración avanzada de Linux y virtualización de infraestructuras de red."
      },
      {
        title: "Cloud (Heroku, Render...) y Aplicaciones Web (React, JS, PHP, Angular, API REST)",
        issuer: "Formación en Desarrollo",
        date: "2019 - 2020",
        description: "Desarrollo de aplicaciones en la nube y tecnologías web modernas."
      }
    ],
    education: {
      title: "EDUCACIÓN",
      command: "cat education.log",
      degrees: [
        {
          title: "Máster 1 Ciberseguridad",
          institution: "Ynov Campus",
          period: "2023 - 2024",
          description: "Formación especializada en ciberseguridad, pruebas de penetración, informática forense y gestión de riesgos."
        },
        {
          title: "Grado en Ciberseguridad Python",
          institution: "Ynov Campus",
          period: "2022 - 2023",
          description: "Formación en desarrollo seguro con Python, análisis de vulnerabilidades y seguridad de aplicaciones."
        },
        {
          title: "Licenciatura en Derecho",
          institution: "Universidad Paris Nord",
          period: "Septiembre 2021 a noviembre 2022",
          description: "Formación jurídica con especialización en derecho digital y ciberseguridad."
        },
        {
          title: "Diploma de Salud 100 Quai de la Râpée",
          institution: "Escuela de Salud",
          period: "Septiembre 2019 a junio 2020",
          description: "Formación en salud pública y gestión de sistemas de información sanitaria."
        },
        {
          title: "Bachillerato en Ciencias de la Ingeniería",
          institution: "Lycée Benoît de L'Europe",
          period: "2018 - 2019",
          description: "Formación científica con especialización en ciencias de la ingeniería."
        }
      ]
    },
    footer: {
      command: "cat status.log",
      status: "Estado:",
      statusValue: "Estudiante de Máster 1",
      skills: "Competencias validadas:",
      skillsValue: "Python, Ciberseguridad, Administración Linux",
      learning: "Formación continua:",
      learningValue: "Pentesting, Seguridad en la Nube, DevSecOps"
    }
  },
  de: {
    title: "Zertifikate & Ausbildung",
    command: "~/certifications",
    terminalCommand: "ls -la | grep \"credentials\"",
    validationStatus: "Bestätigt",
    certifications: [
      {
        title: "Master 1 Cybersicherheit",
        issuer: "Ynov Campus",
        date: "2023 - 2024",
        description: "Fortgeschrittene Ausbildung in Cybersicherheit, Penetrationstests und Systemsicherheit."
      },
      {
        title: "Bachelor Cybersicherheit Python",
        issuer: "Ynov Campus",
        date: "2022 - 2023",
        description: "Spezialisierung auf sichere Python-Entwicklung und Schwachstellenanalyse."
      },
      {
        title: "Assembler x86 x64",
        issuer: "Technische Ausbildung",
        date: "2022",
        description: "Beherrschung von Assembler für Malware-Analyse und Reverse Engineering."
      },
      {
        title: "Sicherheit & Schwachstellen (WEP,WPA,WPS, WPA2) / Exploit-Management: ROP,RTE,ASLR, pwn",
        issuer: "Spezialisierte Ausbildung",
        date: "2021 - 2022",
        description: "Expertise in WLAN-Sicherheit und fortgeschrittenen Exploit-Techniken."
      },
      {
        title: "Kryptographie & Verschlüsselung",
        issuer: "Technische Ausbildung",
        date: "2021",
        description: "Verschlüsselungsalgorithmen, Kryptoanalyse und kryptographische Sicherheit."
      },
      {
        title: "Linux-Administration (Fedora, vim, bash) / Netzwerkvirtualisierung",
        issuer: "Systemausbildung",
        date: "2020 - 2021",
        description: "Fortgeschrittene Linux-Administration und Virtualisierung von Netzwerkinfrastrukturen."
      },
      {
        title: "Cloud (Heroku, Render...) & Webanwendungen (React, JS, PHP, Angular, API REST)",
        issuer: "Entwicklungsausbildung",
        date: "2019 - 2020",
        description: "Entwicklung von Cloud-Anwendungen und modernen Webtechnologien."
      }
    ],
    education: {
      title: "AUSBILDUNG",
      command: "cat education.log",
      degrees: [
        {
          title: "Master 1 Cybersicherheit",
          institution: "Ynov Campus",
          period: "2023 - 2024",
          description: "Spezialisierte Ausbildung in Cybersicherheit, Penetrationstests, digitale Forensik und Risikomanagement."
        },
        {
          title: "Bachelor Cybersicherheit Python",
          institution: "Ynov Campus",
          period: "2022 - 2023",
          description: "Ausbildung in sicherer Python-Entwicklung, Schwachstellenanalyse und Anwendungssicherheit."
        },
        {
          title: "Jurastudium",
          institution: "Universität Paris Nord",
          period: "September 2021 bis November 2022",
          description: "Juristische Ausbildung mit Spezialisierung auf Digitalrecht und Cybersicherheit."
        },
        {
          title: "Gesundheitsdiplom 100 Quai de la Râpée",
          institution: "Gesundheitsschule",
          period: "September 2019 bis Juni 2020",
          description: "Ausbildung in öffentlicher Gesundheit und Management von Gesundheitsinformationssystemen."
        },
        {
          title: "Abitur Ingenieurwissenschaften",
          institution: "Lycée Benoît de L'Europe",
          period: "2018 - 2019",
          description: "Wissenschaftliche Ausbildung mit Spezialisierung auf Ingenieurwissenschaften."
        }
      ]
    },
    footer: {
      command: "cat status.log",
      status: "Status:",
      statusValue: "Master 1 Student",
      skills: "Bestätigte Kompetenzen:",
      skillsValue: "Python, Cybersicherheit, Linux-Administration",
      learning: "Fortlaufende Weiterbildung:",
      learningValue: "Pentesting, Cloud-Sicherheit, DevSecOps"
    }
  },
};