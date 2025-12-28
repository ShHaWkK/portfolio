export default {
  fr: {
    title: "Expérience Professionnelle",
    command: "ls -la ~/experience/",
    experiences: [
      {
        role: "Alternance - Analyste SOC & Developer",
        company: "BSRQ MEDIA",
        period: "10/2025 - Aujourd'hui",
        commandId: "EXP_0x00",
        description: [
          "Surveillance SIEM en temps réel, triage et escalade des incidents",
          "Investigation des événements de sécurité (EDR, IDS/IPS, Firewall, logs)",
          "Threat hunting et création de playbooks d’intervention (SOAR)",
          "Analyse phishing/malwares et rédaction de rapports d’incident",
          "Développement d’outils et automatisations (TSX/React, Prisma, Azure Functions)",
          "Scripts et services orientés sécurité en Rust et Python",
          "Pipelines de collecte et corrélation (Azure, bases de données)"
        ]
      },
      {
        role: "Administrateur Système et Réseau (Alternance)",
        company: "BSRQ MEDIA",
        period: "09/2024 - 10/2025",
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
  }, 
  ru: {
    title: "Профессиональный опыт",
    command: "ls -la ~/experience/",
    experiences: [
      {
        role: "Системный и сетевой администратор (Альтернанс)",
        company: "BSRQ MEDIA",
        period: "09/2024 - Настоящее время",
        commandId: "EXP_0x01",
        description: [
          "Управление инфраструктурой (Proxmox, Netgate, Aruba), безопасность WiFi и Firewall",
          "Установка/настройка: дата-центр, поддержка тикетов N1-2",
          "Веб-разработка и обслуживание: сервер + тестирование (Docker, Grafana, Jeedom)",
          "Мониторинг с Grafana, управление Docker, автоматизация"
        ]
      },
      {
        role: "Веб-разработчик (Стажировка)",
        company: "First-Conseil et Conseil en Gestion",
        period: "04/2023 - 08/2023",
        commandId: "EXP_0x02",
        description: [
          "Разработка веб-приложений с использованием Laravel, PHP, SQL",
          "Прототипирование в Figma, веб-приложение Recipe",
          "Разработка вредоносного ПО на основе LID_PRELOAD для предоставления SSH-доступа",
          "Безопасность между клиентом и сервером OpenSSH, внедрение расширенных функций"
        ]
      },
      {
        role: "Аудит и эксплуатация защиты WiFi (WEP, WPA2, WPS)",
        company: "LAB_Security",
        period: "07/2020 - 08/2020",
        commandId: "EXP_0x03",
        description: [
          "Точка доступа для захвата/анализа пакетов и перенаправления жертв",
          "Проведение пентеста сетевой инфраструктуры",
          "Эксплуатация уязвимостей WiFi, анализ сетевой безопасности",
          "Подготовка отчетов по безопасности и рекомендации"
        ]
      },
      {
        role: "Разработка высокоинтерактивного honeypot",
        company: "Личный проект",
        period: "2019 - Настоящее время",
        commandId: "EXP_0x04",
        description: [
          "Проектирование SSH honeypot с использованием VLAN для захвата атак",
          "Разработка с Docker, поведенческий анализ атакующих",
          "Сбор и анализ данных о вторжениях",
          "Постоянное совершенствование обнаружения угроз"
        ]
      }
    ],
    terminal: {
      complete: "experience_analysis --complete",
      status: "Статус:",
      active: "Активен в альтернансе",
      focus: "Фокус:",
      focusAreas: "Системное администрирование, Сетевая безопасность, Разработка",
      ctfPlatform: "Платформа CTF:",
      githubProjects: "Проекты на GitHub:"
    }
  },
  de: {
    title: "Berufserfahrung",
    command: "ls -la ~/experience/",
    experiences: [
      {
        role: "System- und Netzwerkadministrator (Duales Studium)",
        company: "BSRQ MEDIA",
        period: "09/2024 - Heute",
        commandId: "EXP_0x01",
        description: [
          "Infrastrukturmanagement (Proxmox, Netgate, Aruba), WiFi- & Firewall-Sicherheit",
          "Installation/Konfiguration: Rechenzentrum, N1-2 Ticket-Support",
          "Webentwicklung & Wartung: Server + Tests (Docker, Grafana, Jeedom)",
          "Überwachung mit Grafana, Docker-Management, Automatisierung"
        ]
      },
      {
        role: "Webentwickler (Praktikum)",
        company: "First-Conseil et Conseil en Gestion",
        period: "04/2023 - 08/2023",
        commandId: "EXP_0x02",
        description: [
          "Webanwendungsentwicklung mit Laravel, PHP, SQL",
          "Figma-Prototyping, Rezept-Webanwendung",
          "Entwicklung von LID_PRELOAD-basierter Malware zur SSH-Rechtevergabe",
          "Sicherheit zwischen Client und OpenSSH-Server, Implementierung fortgeschrittener Funktionen"
        ]
      },
      {
        role: "WiFi-Sicherheitsaudit und -ausnutzung (WEP, WPA2, WPS)",
        company: "LAB_Security",
        period: "07/2020 - 08/2020",
        commandId: "EXP_0x03",
        description: [
          "Access Point für Paketaufnahme/-analyse und Opferumleitung",
          "Penetrationstest der Netzwerkinfrastruktur",
          "Ausnutzung von WiFi-Schwachstellen, Netzwerksicherheitsanalyse",
          "Erstellung von Sicherheitsberichten und Empfehlungen"
        ]
      },
      {
        role: "Entwicklung eines High-Interaction Honeypots",
        company: "Eigenes Projekt",
        period: "2019 - Heute",
        commandId: "EXP_0x04",
        description: [
          "SSH-Honeypot-Design mit VLAN zur Angriffserfassung",
          "Docker-Entwicklung, Verhaltensanalyse von Angreifern",
          "Sammlung und Analyse von Eindringdaten",
          "Kontinuierliche Verbesserung der Bedrohungserkennung"
        ]
      }
    ],
    terminal: {
      complete: "experience_analysis --complete",
      status: "Status:",
      active: "Aktiv im dualen Studium",
      focus: "Fokus:",
      focusAreas: "Systemadministration, Netzwerksicherheit, Entwicklung",
      ctfPlatform: "CTF-Plattform:",
      githubProjects: "GitHub-Projekte:"
    }
  },
  es: {
    title: "Experiencia Profesional",
    command: "ls -la ~/experience/",
    experiences: [
      {
        role: "Administrador de Sistemas y Redes (Alternancia)",
        company: "BSRQ MEDIA",
        period: "09/2024 - Actualidad",
        commandId: "EXP_0x01",
        description: [
          "Gestión de infraestructuras (Proxmox, Netgate, Aruba), seguridad WiFi y Firewall",
          "Instalación/Configuración: centro de datos, soporte de tickets N1-2",
          "Desarrollo y mantenimiento web: servidor + pruebas (Docker, Grafana, Jeedom)",
          "Supervisión con Grafana, gestión de Docker, automatización"
        ]
      },
      {
        role: "Desarrollador Web (Prácticas)",
        company: "First-Conseil et Conseil en Gestion",
        period: "04/2023 - 08/2023",
        commandId: "EXP_0x02",
        description: [
          "Desarrollo de aplicaciones web con Laravel, PHP, SQL",
          "Prototipado en Figma, aplicación web de recetas",
          "Desarrollo de malware basado en LID_PRELOAD para otorgar derechos SSH",
          "Seguridad entre cliente y servidor OpenSSH, implementación de funciones avanzadas"
        ]
      },
      {
        role: "Auditoría y explotación de defensa WiFi (WEP, WPA2, WPS)",
        company: "LAB_Security",
        period: "07/2020 - 08/2020",
        commandId: "EXP_0x03",
        description: [
          "Punto de acceso para captura/análisis de paquetes y redirección de víctimas",
          "Pentesting de la infraestructura de red",
          "Explotación de vulnerabilidades WiFi, análisis de seguridad de red",
          "Redacción de informes de seguridad y recomendaciones"
        ]
      },
      {
        role: "Desarrollo de honeypot de alta interacción",
        company: "Proyecto Personal",
        period: "2019 - Actualidad",
        commandId: "EXP_0x04",
        description: [
          "Diseño de honeypot SSH usando VLAN para capturar ataques",
          "Desarrollo con Docker, análisis de comportamiento de atacantes",
          "Recopilación y análisis de datos de intrusión",
          "Mejora continua de la detección de amenazas"
        ]
      }
    ],
    terminal: {
      complete: "experience_analysis --complete",
      status: "Estado:",
      active: "Activo en alternancia",
      focus: "Enfoque:",
      focusAreas: "Administración de Sistemas, Seguridad de Redes, Desarrollo",
      ctfPlatform: "Plataforma CTF:",
      githubProjects: "Proyectos en GitHub:"
    }
  },
};