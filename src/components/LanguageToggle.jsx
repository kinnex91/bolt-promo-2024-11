import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation } from 'react-router-dom';

export default function LanguageToggle() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const toggleLanguage = () => {
    const currentPath = location.pathname;
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    
    // Update the language
    i18n.changeLanguage(newLang);
    
    // Update the URL
    if (newLang === 'fr') {
      // If switching to French, add /fr prefix
      if (currentPath === '/') {
        navigate('/fr');
      } else {
        navigate(`/fr${currentPath}`);
      }
    } else {
      // If switching to English, remove /fr prefix
      navigate(currentPath.replace('/fr', ''));
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