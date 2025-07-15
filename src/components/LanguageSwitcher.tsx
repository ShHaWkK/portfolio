import { useState, useEffect } from 'react';
import { useIntlayer, useLocale } from 'react-intlayer';
import { Locales }                from 'intlayer';

const LanguageSwitcher: React.FC = () => {
  const [isOpen, setIsOpen]   = useState(false);
  const { locale, setLocale } = useLocale();

  // 1) Cast away the deep instantiation error by telling TS exactly what you expect
  const content = useIntlayer('common') as {
    language: { fr: string; en: string; es: string; de: string; ru: string };
  };

  // Languages you actually support in the UI
  const languages = [
    { code: Locales.FRENCH,  display: 'FR' },
    { code: Locales.ENGLISH, display: 'EN' },
    { code: Locales.SPANISH, display: 'ES' },
    { code: Locales.GERMAN,  display: 'DE' },
    { code: Locales.RUSSIAN, display: 'RU' },
  ] as const;

  // 2) Use Partial<Record<Locales,string>> so any enum member can be used as a key
  const codeMap: Partial<Record<Locales, string>> = {
    [Locales.FRENCH]:  'fr',
    [Locales.ENGLISH]: 'en',
    [Locales.SPANISH]: 'es',
    [Locales.GERMAN]:  'de',
    [Locales.RUSSIAN]: 'ru',
  };

  const getLanguageDisplay = (lng: Locales): string => {
    switch (lng) {
      case Locales.FRENCH:  return content.language.fr;
      case Locales.ENGLISH: return content.language.en;
      case Locales.SPANISH: return content.language.es;
      case Locales.GERMAN:  return content.language.de;
      case Locales.RUSSIAN: return content.language.ru;
      default:              return content.language.fr;
    }
  };

  useEffect(() => {
    if (!isOpen) return;
    const onClickOutside = () => setIsOpen(false);
    document.addEventListener('click', onClickOutside);
    return () => document.removeEventListener('click', onClickOutside);
  }, [isOpen]);

  const changeLanguage = (lng: Locales) => {
    setLocale(lng);
    setIsOpen(false);

    const langCode = codeMap[lng] ?? 'fr';
    const url = new URL(window.location.href);
    url.searchParams.set('lang', langCode);
    window.history.replaceState({}, '', url);
  };

  const onToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(o => !o);
  };
  const onSelect = (e: React.MouseEvent, lng: Locales) => {
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
