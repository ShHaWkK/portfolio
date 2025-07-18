import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Types pour les langues supportées
export type Language = 'fr' | 'en';
export type Locale = Language; // Alias pour compatibilité

// Interface pour le contexte de langue
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  locale: Language; // Alias pour compatibilité
  setLocale: (lang: Language) => void; // Alias pour compatibilité
  t: (key: string) => any;
  isLoading: boolean;
}

// Contexte de langue
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Fournisseur de contexte de langue
interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fr');
  const [translations, setTranslations] = useState<Record<string, any>>({});
  const [isLoading, setIsLoading] = useState(true);

  // Charger les traductions
  const loadTranslations = async (lang: Language) => {
    setIsLoading(true);
    try {
      // Importer directement chaque module
      const [
        commonModule,
        heroModule,
        aboutModule,
        skillsModule,
        experienceModule,
        projectsModule,
        contactModule,
        certificationsModule,
        technologiesModule,
        publicationsModule
      ] = await Promise.all([
        import('../i18n/common.content.tsx'),
        import('../i18n/hero.content.tsx'),
        import('../i18n/about.content.tsx'),
        import('../i18n/skills.content.tsx'),
        import('../i18n/experience.content.tsx'),
        import('../i18n/projects.content.tsx'),
        import('../i18n/contact.content.tsx'),
        import('../i18n/certifications.content.tsx'),
        import('../i18n/technologies.content.tsx'),
        import('../i18n/publications.content.tsx')
      ]);
      
      const loadedTranslations: Record<string, any> = {
        common: commonModule.default[lang] || {},
        hero: heroModule.default[lang] || {},
        about: aboutModule.default[lang] || {},
        skills: skillsModule.default[lang] || {},
        experience: experienceModule.default[lang] || {},
        projects: projectsModule.default[lang] || {},
        contact: contactModule.default[lang] || {},
        certifications: certificationsModule.default[lang] || {},
        technologies: technologiesModule.default[lang] || {},
        publications: publicationsModule.default[lang] || {}
      };

      setTranslations(loadedTranslations);
    } catch (error) {
      console.error('Erreur lors du chargement des traductions:', error);
      // En cas d'erreur, on initialise avec des objets vides
      setTranslations({
        common: {},
        hero: {},
        about: {},
        skills: {},
        experience: {},
        projects: {},
        contact: {},
        certifications: {},
        technologies: {},
        publications: {}
      });
    } finally {
      setIsLoading(false);
    }
  };

  // Fonction de traduction
  const t = (key: string) => {
    if (isLoading) {
      return {}; // Retourne un objet vide pendant le chargement
    }
    return translations[key] || {};
  };

  // Charger les traductions quand la langue change
  useEffect(() => {
    loadTranslations(language);
  }, [language]);

  // Charger la langue sauvegardée au démarrage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'fr' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  // Sauvegarder la langue quand elle change
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage: handleSetLanguage, 
      locale: language, // Alias pour compatibilité
      setLocale: handleSetLanguage, // Alias pour compatibilité
      t,
      isLoading
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook pour utiliser le contexte de langue
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Hook pour les traductions (compatible avec l'ancien système)
export const useTranslation = () => {
  const { t, isLoading } = useLanguage();
  return { t, isLoading };
};