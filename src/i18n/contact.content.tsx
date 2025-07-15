import { t } from 'intlayer';

export default {
  title: t({
    en: 'Get in Touch',
    fr: 'Contactez-moi',
    es: 'Contáctame',
    de: 'Kontaktieren Sie mich',
    ru: 'Свяжитесь со мной',
  }),
  description: t({
    en: 'Feel free to reach out for collaborations, questions, or just to say hello. I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision.',
    fr: 'N\'hésitez pas à me contacter pour des collaborations, des questions ou simplement pour dire bonjour. Je suis toujours ouvert à discuter de nouveaux projets, d\'idées créatives ou d\'opportunités pour faire partie de votre vision.',
    es: 'No dudes en contactarme para colaboraciones, preguntas o simplemente para saludar. Siempre estoy abierto a discutir nuevos proyectos, ideas creativas u oportunidades para ser parte de tu visión.',
    de: 'Zögern Sie nicht, mich für Kooperationen, Fragen oder einfach nur zum Hallo sagen zu kontaktieren. Ich bin immer offen für die Diskussion neuer Projekte, kreativer Ideen oder Möglichkeiten, Teil Ihrer Vision zu sein.',
    ru: 'Не стесняйтесь обращаться за сотрудничеством, с вопросами или просто поздороваться. Я всегда открыт для обсуждения новых проектов, творческих идей или возможностей стать частью вашего видения.',
  }),
  info: {
    email: t({
      en: 'Email',
      fr: 'Email',
      es: 'Correo electrónico',
      de: 'E-Mail',
      ru: 'Электронная почта',
    }),
    phone: t({
      en: 'Phone',
      fr: 'Téléphone',
      es: 'Teléfono',
      de: 'Telefon',
      ru: 'Телефон',
    }),
    location: t({
      en: 'Location',
      fr: 'Localisation',
      es: 'Ubicación',
      de: 'Standort',
      ru: 'Местоположение',
    }),
  },
  form: {
    name: {
      label: t({
        en: 'Name',
        fr: 'Nom',
        es: 'Nombre',
        de: 'Name',
        ru: 'Имя',
      }),
      placeholder: t({
        en: 'Enter your name',
        fr: 'Entrez votre nom',
        es: 'Ingrese su nombre',
        de: 'Geben Sie Ihren Namen ein',
        ru: 'Введите ваше имя',
      }),
    },
    email: {
      label: t({
        en: 'Email',
        fr: 'Email',
        es: 'Correo electrónico',
        de: 'E-Mail',
        ru: 'Электронная почта',
      }),
    },
    subject: {
      label: t({
        en: 'Subject',
        fr: 'Sujet',
        es: 'Asunto',
        de: 'Betreff',
        ru: 'Тема',
      }),
    },
    message: {
      label: t({
        en: 'Message',
        fr: 'Message',
        es: 'Mensaje',
        de: 'Nachricht',
        ru: 'Сообщение',
      }),
      placeholder: t({
        en: 'Type your message here...',
        fr: 'Tapez votre message ici...',
        es: 'Escriba su mensaje aquí...',
        de: 'Geben Sie Ihre Nachricht hier ein...',
        ru: 'Введите ваше сообщение здесь...',
      }),
    },
    sending: t({
      en: 'Sending...',
      fr: 'Envoi en cours...',
      es: 'Enviando...',
      de: 'Senden...',
      ru: 'Отправка...',
    }),
    success: t({
      en: 'Message sent successfully!',
      fr: 'Message envoyé avec succès !',
      es: '¡Mensaje enviado con éxito!',
      de: 'Nachricht erfolgreich gesendet!',
      ru: 'Сообщение успешно отправлено!',
    }),
  },
  thanks: t({
    en: 'Thank you for your message!',
    fr: 'Merci pour votre message !',
    es: '¡Gracias por tu mensaje!',
    de: 'Vielen Dank für Ihre Nachricht!',
    ru: 'Спасибо за ваше сообщение!',
  }),
  terminal: {
    status: {
      idle: t({
        en: 'Ready to send',
        fr: 'Prêt à envoyer',
        es: 'Listo para enviar',
        de: 'Bereit zum Senden',
        ru: 'Готов к отправке',
      }),
      sending: t({
        en: 'Sending message...',
        fr: 'Envoi du message...',
        es: 'Enviando mensaje...',
        de: 'Nachricht wird gesendet...',
        ru: 'Отправка сообщения...',
      }),
      success: t({
        en: 'Message delivered',
        fr: 'Message livré',
        es: 'Mensaje entregado',
        de: 'Nachricht zugestellt',
        ru: 'Сообщение доставлено',
      }),
      error: ({ message }: { message: string }) => t({
        en: `Error: ${message}`,
        fr: `Erreur: ${message}`,
        es: `Error: ${message}`,
        de: `Fehler: ${message}`,
        ru: `Ошибка: ${message}`,
      }),
    },
  },
};