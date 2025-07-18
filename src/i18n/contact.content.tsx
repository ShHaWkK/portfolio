export default {
  fr: {
    title: "Contactez-moi",
    subtitle: "Discutons de vos projets de cybersécurité",
    description: "Prêt à collaborer sur des projets de cybersécurité ? Contactez-moi pour discuter de vos besoins en sécurité informatique, tests d'intrusion ou développement sécurisé.",
    info: {
      email: "Email",
      phone: "Téléphone", 
      location: "Localisation",
      discord: "Discord"
    },
    form: {
      name: {
        label: "Nom",
        placeholder: "Votre nom"
      },
      email: {
        label: "Email",
        placeholder: "votre.email@exemple.com"
      },
      subject: {
        label: "Sujet",
        placeholder: "Sujet de votre message"
      },
      message: {
        label: "Message",
        placeholder: "Votre message..."
      },
      sending: "Envoi en cours...",
      success: "Message envoyé avec succès !",
      error: "Erreur lors de l'envoi du message"
    },
    terminal: {
      status: {
        idle: "En attente",
        sending: "Envoi en cours",
        success: "Envoyé avec succès",
        error: (message: string) => `Erreur: ${message}`
      }
    },
    thanks: "Merci pour votre message ! Je vous répondrai rapidement."
  },
  en: {
    title: "Contact Me",
    subtitle: "Let's discuss your cybersecurity projects",
    description: "Ready to collaborate on cybersecurity projects? Contact me to discuss your computer security needs, penetration testing or secure development.",
    info: {
      email: "Email",
      phone: "Phone",
      location: "Location",
      discord: "Discord"
    },
    form: {
      name: {
        label: "Name",
        placeholder: "Your name"
      },
      email: {
        label: "Email",
        placeholder: "your.email@example.com"
      },
      subject: {
        label: "Subject",
        placeholder: "Subject of your message"
      },
      message: {
        label: "Message",
        placeholder: "Your message..."
      },
      sending: "Sending...",
      success: "Message sent successfully!",
      error: "Error sending message"
    },
    terminal: {
      status: {
        idle: "Idle",
        sending: "Sending",
        success: "Sent successfully",
        error: (message: string) => `Error: ${message}`
      }
    },
    thanks: "Thank you for your message! I'll get back to you soon."
  }
};