export default {
  fr: {
    title: "Publications & Recherches",
    command: "~/publications",
    publications: [
      {
        id: "iot-vulnerabilities",
        title: "Analyse des Vulnérabilités dans les Systèmes IoT",
        type: "Article de Recherche",
        publisher: "Journal de Cybersécurité",
        date: "2023",
        link: "https://example.com/iot-vulnerabilities.pdf",
        color: "neon-blue",
        abstract: "Étude approfondie des failles de sécurité dans les objets connectés et propositions de solutions innovantes pour renforcer la sécurité des écosystèmes IoT."
      },
      {
        id: "post-quantum-crypto",
        title: "Cryptographie Post-Quantique : Enjeux et Perspectives",
        type: "Mémoire",
        publisher: "Université de Cybersécurité",
        date: "2022",
        link: "https://example.com/post-quantum-crypto.pdf",
        color: "neon-purple",
        abstract: "Analyse des défis posés par l'informatique quantique à la cryptographie actuelle et exploration des nouvelles approches cryptographiques résistantes aux attaques quantiques."
      },
      {
        id: "enterprise-security",
        title: "Sécurisation des Réseaux d'Entreprise",
        type: "Guide Technique",
        publisher: "Éditions Sécurité IT",
        date: "2021",
        link: "https://example.com/enterprise-security.pdf",
        color: "neon-green",
        abstract: "Guide pratique pour l'implémentation de mesures de sécurité en environnement professionnel, incluant les meilleures pratiques et les outils recommandés."
      }
    ],
    readCommand: "cat",
    footer: {
      command: "cat research_status.log",
      status: "Statut:",
      statusValue: "Recherche active",
      currentFocus: "Focus actuel:",
      currentFocusValue: "IA & Cybersécurité",
      latestUpdate: "Dernière mise à jour:",
      latestUpdateValue: "Janvier 2024",
      github: "github.com/username/research"
    }
  },
  en: {
    title: "Publications & Research",
    command: "~/publications",
    publications: [
      {
        id: "iot-vulnerabilities",
        title: "Vulnerability Analysis in IoT Systems",
        type: "Research Article",
        publisher: "Cybersecurity Journal",
        date: "2023",
        link: "https://example.com/iot-vulnerabilities.pdf",
        color: "neon-blue",
        abstract: "In-depth study of security flaws in connected objects and proposed innovative solutions to strengthen the security of IoT ecosystems."
      },
      {
        id: "post-quantum-crypto",
        title: "Post-Quantum Cryptography: Challenges and Perspectives",
        type: "Thesis",
        publisher: "Cybersecurity University",
        date: "2022",
        link: "https://example.com/post-quantum-crypto.pdf",
        color: "neon-purple",
        abstract: "Analysis of challenges posed by quantum computing to current cryptography and exploration of new cryptographic approaches resistant to quantum attacks."
      },
      {
        id: "enterprise-security",
        title: "Enterprise Network Security",
        type: "Technical Guide",
        publisher: "IT Security Publications",
        date: "2021",
        link: "https://example.com/enterprise-security.pdf",
        color: "neon-green",
        abstract: "Practical guide for implementing security measures in professional environments, including best practices and recommended tools."
      }
    ],
    readCommand: "cat",
    footer: {
      command: "cat research_status.log",
      status: "Status:",
      statusValue: "Active research",
      currentFocus: "Current focus:",
      currentFocusValue: "AI & Cybersecurity",
      latestUpdate: "Latest update:",
      latestUpdateValue: "January 2024",
      github: "github.com/username/research"
    }
  }
};