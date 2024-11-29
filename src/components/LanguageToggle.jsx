import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';

export default function LanguageToggle() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);

    // Get the current path without the language prefix
    const pathWithoutLang = location.pathname.replace(/^\/fr/, '');
    
    // If switching to French, add /fr prefix
    if (newLang === 'fr') {
      navigate(`/fr${pathWithoutLang}`);
    } else {
      // If switching to English, use path without prefix
      navigate(pathWithoutLang || '/');
    }
  };

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-4 right-4 bg-white text-blue-600 px-4 py-2 rounded-full shadow-md hover:bg-blue-50 transition-colors"
    >
      {t('language')}
    </button>
  );
}