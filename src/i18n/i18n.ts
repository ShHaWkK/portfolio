import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

// Initialisation de i18next
i18n
  // Chargement des traductions depuis le dossier /public/locales/{lang}/translation.json
  .use(Backend)
  // Détection automatique de la langue du navigateur
  .use(LanguageDetector)
  // Intégration avec React
  .use(initReactI18next)
  // Initialisation
  .init({
    fallbackLng: import.meta.env.VITE_DEFAULT_LANGUAGE || 'fr',
    debug: import.meta.env.DEV,
    defaultNS: 'common',
    ns: ['common', 'contact', 'home', 'projects', 'about'],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
      lookupQuerystring: 'lng',
      lookupCookie: 'i18next',
      lookupLocalStorage: 'i18nextLng',
      cookieDomain: 'localhost',
      cookieExpirationDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365),
      cookiePath: '/',
      cookieSecure: false,
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    react: {
      wait: true,
      useSuspense: true,
    },
  });

export default i18n;