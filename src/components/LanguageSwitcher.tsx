import React, { useState, useEffect } from 'react';
import { useLanguage, useTranslation } from '../hooks/useLanguage';
import type { Locale } from '../hooks/useLanguage';

const LanguageSwitcher: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { locale, setLocale } = useLanguage();
  const { t } = useTranslation();
  const [content, setContent] = useState<any>(null);

  // Languages you actually support in the UI
  const languages = [
    { code: 'fr' as Locale, display: 'FR' },
    { code: 'en' as Locale, display: 'EN' },
    { code: 'es' as Locale, display: 'ES' },
    { code: 'de' as Locale, display: 'DE' },
    { code: 'ru' as Locale, display: 'RU' },
  ] as const;

  // Load content
  useEffect(() => {
    setContent(t('common'));
  }, [t]);

  // Handle click outside to close dropdown
  useEffect(() => {
    if (!isOpen) return;
    const onClickOutside = () => setIsOpen(false);
    document.addEventListener('click', onClickOutside);
    return () => document.removeEventListener('click', onClickOutside);
  }, [isOpen]);
  
  // This conditional rendering must come after all hooks
  if (!content) {
    return <div>Loading...</div>;
  }

  const getLanguageDisplay = (lng: Locale): string => {
    return content?.languages?.[lng] || lng.toUpperCase();
  };

  const changeLanguage = (lng: Locale) => {
    setLocale(lng);
    setIsOpen(false);

    const url = new URL(window.location.href);
    url.searchParams.set('lang', lng);
    window.history.replaceState({}, '', url);
  };

  const onToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(o => !o);
  };
  const onSelect = (e: React.MouseEvent, lng: Locale) => {
    e.stopPropagation();
    changeLanguage(lng);
  };

  return (
    <div className="relative inline-block text-left z-50">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-transparent border border-green-500 rounded-md hover:bg-green-500/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
      >
        {languages.find(l => l.code === locale)?.display ?? 'FR'}
        <svg className="-mr-1 ml-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293
               a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4
               a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-24 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
        >
          <div className="py-1">
            {languages.map(lang => (
              <button
                key={lang.code}
                onClick={e => onSelect(e, lang.code)}
                className={`block w-full text-left px-4 py-2 text-sm ${
                  locale === lang.code
                    ? 'text-green-500'
                    : 'text-white hover:text-green-500'
                }`}
                role="menuitem"
              >
                {getLanguageDisplay(lang.code)}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
