import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  // Liste des langues disponibles
  const languages = [
    { code: 'fr', name: 'FR' },
    { code: 'en', name: 'EN' }
  ];

  // Fermer le menu déroulant lorsqu'on clique en dehors
  useEffect(() => {
    const handleClickOutside = () => {
      setIsOpen(false);
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Changer la langue
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);
  };

  // Empêcher la propagation du clic pour éviter de fermer le menu
  const handleToggleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  // Empêcher la propagation du clic pour éviter de fermer le menu
  const handleOptionClick = (e: React.MouseEvent, lng: string) => {
    e.stopPropagation();
    changeLanguage(lng);
  };

  return (
    <div className="relative inline-block text-left z-50">
      <div>
        <button
          type="button"
          className="inline-flex items-center justify-center w-full px-3 py-2 text-sm font-medium text-white bg-transparent border border-green-500 rounded-md hover:bg-green-500/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          onClick={handleToggleClick}
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          {languages.find(lang => lang.code === i18n.language)?.name || 'FR'}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-24 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="py-1" role="none">
            {languages.map((lang) => (
              <button
                key={lang.code}
                className={`block w-full text-left px-4 py-2 text-sm ${i18n.language === lang.code ? 'text-green-500' : 'text-white hover:text-green-500'}`}
                role="menuitem"
                tabIndex={-1}
                onClick={(e) => handleOptionClick(e, lang.code)}
              >
                {t(`language.${lang.code}`)}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;