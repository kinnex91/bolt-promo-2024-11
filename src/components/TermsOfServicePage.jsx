import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import LanguageToggle from './LanguageToggle';

export default function TermsOfServicePage() {
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
            <h1 className="text-3xl font-bold mb-6">{t('terms.title')}</h1>
            <p className="text-xl mb-6">{t('terms.welcome')}</p>
            <p className="mb-8">{t('terms.intro')}</p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">{t('terms.section1.title')}</h2>
              <p>{t('terms.section1.content')}</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">{t('terms.section2.title')}</h2>
              <p>{t('terms.section2.content')}</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">{t('terms.section3.title')}</h2>
              <p>{t('terms.section3.content')}</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">{t('terms.section4.title')}</h2>
              <p>{t('terms.section4.content')}</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">{t('terms.section5.title')}</h2>
              <p>{t('terms.section5.content')}</p>
            </section>
          </div>

          <div className="flex justify-end">
            <button
              onClick={() => navigate('/')}
              className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
            >
              {t('terms.close')}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}