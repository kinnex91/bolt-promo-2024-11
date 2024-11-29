import React from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageToggle() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
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