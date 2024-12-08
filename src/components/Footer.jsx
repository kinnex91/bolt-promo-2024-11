import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-12">
      <div className="text-center space-x-4">
        <button
          onClick={() => navigate('/privacy')}
          className="text-sm text-gray-600 hover:text-indigo-600"
        >
          {t('footer.privacy')}
        </button>
        <button
          onClick={() => navigate('/terms')}
          className="text-sm text-gray-600 hover:text-indigo-600"
        >
          {t('footer.terms')}
        </button>
        <button
          onClick={() => (window.location.href = 'https://www.sportcompetition.fr/public_events')}
          className="text-sm text-gray-600 hover:text-indigo-600"
        >
          {t('footer.demofreehere')}
        </button>
        <button
          onClick={() => (window.location.href = 'https://www.sportcompetition.fr/public_scores?sportTitle=Ligue%201%20-%20France')}
          className="text-sm text-gray-600 hover:text-indigo-600"
        >
          {t('footer.demofreehereligue1')}
        </button>
        

      </div>
    </div>
  );
}