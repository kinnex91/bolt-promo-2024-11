import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20"
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6">{t('hero.title')}</h1>
        <p className="text-xl mb-8">{t('hero.subtitle')}</p>
        <div className="space-x-4">
          <a 
            href="https://www.betforfun.devforever.ovh" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
          >
            {t('cta.visit')}
          </a>
        </div>
      </div>
    </motion.div>
  );
}