import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageToggle from './LanguageToggle';

export default function PrivacyPolicyPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <>
      <LanguageToggle />
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 relative">
          <button
            onClick={() => navigate('/')}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="prose max-w-none mb-16">
            <h1 className="text-3xl font-bold mb-6">{t('privacy.title')}</h1>
            <p><strong>{t('privacy.effectiveDate')}</strong></p>
            
            <p className="mt-4">{t('privacy.intro')}</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">{t('privacy.section1.title')}</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-2">{t('privacy.section1a.title')}</h3>
            <p className="whitespace-pre-line">{t('privacy.section1a.content')}</p>

            <h3 className="text-xl font-semibold mt-6 mb-2">{t('privacy.section1b.title')}</h3>
            <p className="whitespace-pre-line">{t('privacy.section1b.content')}</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">{t('privacy.section2.title')}</h2>
            <p className="whitespace-pre-line">{t('privacy.section2.content')}</p>
          </div>

          <div className="flex justify-end">
            <button
              onClick={() => navigate('/')}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
            >
              {t('privacy.close')}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}