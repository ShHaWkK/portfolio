import { t, type Dictionary } from "intlayer";
import type { ReactNode } from "react";

const commonContent = {
  key: "common",
  content: {
    navigation: {
      home: t({
        en: "Home",
        fr: "Accueil",
        es: "Inicio",
        de: "Startseite",
        ru: "Главная",
      }),
      about: t({
        en: "About",
        fr: "À propos",
        es: "Sobre mí",
        de: "Über mich",
        ru: "Обо мне",
      }),
      projects: t({
        en: "Projects",
        fr: "Projets",
        es: "Proyectos",
        de: "Projekte",
        ru: "Проекты",
      }),
      contact: t({
        en: "Contact",
        fr: "Contact",
        es: "Contacto",
        de: "Kontakt",
        ru: "Контакт",
      }),
    },
    language: {
      fr: t({
        en: "French",
        fr: "Français",
        es: "Francés",
        de: "Französisch",
        ru: "Французский",
      }),
      en: t({
        en: "English",
        fr: "Anglais",
        es: "Inglés",
        de: "Englisch",
        ru: "Английский",
      }),
      es: t({
        en: "Spanish",
        fr: "Espagnol",
        es: "Español",
        de: "Spanisch",
        ru: "Испанский",
      }),
      de: t({
        en: "German",
        fr: "Allemand",
        es: "Alemán",
        de: "Deutsch",
        ru: "Немецкий",
      }),
      ru: t({
        en: "Russian",
        fr: "Russe",
        es: "Ruso",
        de: "Russisch",
        ru: "Русский",
      }),
    },
    buttons: {
      readMore: t({
        en: "Read more",
        fr: "Lire plus",
        es: "Leer más",
        de: "Mehr lesen",
        ru: "Читать далее",
      }),
      viewProject: t({
        en: "View project",
        fr: "Voir le projet",
        es: "Ver proyecto",
        de: "Projekt ansehen",
        ru: "Посмотреть проект",
      }),
      viewCode: t({
        en: "View code",
        fr: "Voir le code",
        es: "Ver código",
        de: "Code ansehen",
        ru: "Посмотреть код",
      }),
      send: t({
        en: "Send",
        fr: "Envoyer",
        es: "Enviar",
        de: "Senden",
        ru: "Отправить",
      }),
      download: t({
        en: "Download",
        fr: "Télécharger",
        es: "Descargar",
        de: "Herunterladen",
        ru: "Скачать",
      }),
    },
    footer: {
      copyright: t<ReactNode>({
        en: (year: number) => <>© {year} Alexandre Uzan. All rights reserved.</>,
        fr: (year: number) => <>© {year} Alexandre Uzan. Tous droits réservés.</>,
        es: (year: number) => <>© {year} Alexandre Uzan. Todos los derechos reservados.</>,
        de: (year: number) => <>© {year} Alexandre Uzan. Alle Rechte vorbehalten.</>,
        ru: (year: number) => <>© {year} Alexandre Uzan. Все права защищены.</>,
      }),
      madeWith: t({
        en: "Made with ❤️ and React",
        fr: "Fait avec ❤️ et React",
        es: "Hecho con ❤️ y React",
        de: "Gemacht mit ❤️ und React",
        ru: "Сделано с ❤️ и React",
      }),
      legalNotice: t({
        en: "Legal Notice",
        fr: "Mentions Légales",
        es: "Aviso Legal",
        de: "Impressum",
        ru: "Правовая информация",
      }),
      privacyPolicy: t({
        en: "Privacy Policy",
        fr: "Politique de Confidentialité",
        es: "Política de Privacidad",
        de: "Datenschutzrichtlinie",
        ru: "Политика конфиденциальности",
      }),
    },
    theme: {
      light: t({
        en: "Switch to light mode",
        fr: "Passer au mode clair",
        es: "Cambiar al modo claro",
        de: "Zum hellen Modus wechseln",
        ru: "Переключиться на светлый режим",
      }),
      dark: t({
        en: "Switch to dark mode",
        fr: "Passer au mode sombre",
        es: "Cambiar al modo oscuro",
        de: "Zum dunklen Modus wechseln",
        ru: "Переключиться на темный режим",
      }),
    },
  },
} satisfies Dictionary;

export default commonContent;