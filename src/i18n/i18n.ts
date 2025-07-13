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
    // Langue par défaut
    fallbackLng: import.meta.env.VITE_DEFAULT_LANGUAGE || 'fr',
    // Langue à utiliser si la traduction dans la langue détectée n'est pas disponible
    debug: import.meta.env.DEV,
    // Espace de noms par défaut
    defaultNS: 'common',
    // Espaces de noms utilisés
    ns: ['common', 'contact', 'home', 'projects', 'about'],
    // Interpolation
    interpolation: {
      // Ne pas échapper les valeurs HTML dans les traductions
      escapeValue: false,
    },
    // Options de détection de la langue
    detection: {
      // Ordre des méthodes de détection
      order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
      // Nom du paramètre d'URL pour la langue
      lookupQuerystring: 'lng',
      // Nom du cookie pour la langue
      lookupCookie: 'i18next',
      // Nom de la clé localStorage pour la langue
      lookupLocalStorage: 'i18nextLng',
      // Nom du cookie pour la langue
      cookieDomain: 'localhost',
      // Durée de vie du cookie en jours
      cookieExpirationDate: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365),
      // Chemin du cookie
      cookiePath: '/',
      // Sécurité du cookie
      cookieSecure: false,
    },
    // Chemin vers les fichiers de traduction
    backend: {
      // Chemin vers les fichiers de traduction
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    // Réagir aux changements de langue
    react: {
      // Attendre que les traductions soient chargées
      wait: true,
      // Utiliser le suspense de React
      useSuspense: true,
    },
  });

export default i18n;