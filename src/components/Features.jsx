import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ChartBarIcon, PresentationChartLineIcon, AcademicCapIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import FeatureModal from './FeatureModal';

const features = [
  {
    icon: ChartBarIcon,
    titleKey: 'features.mode1.title',
    descriptionKey: 'features.mode1.description',
  },
  {
    icon: PresentationChartLineIcon,
    titleKey: 'features.mode2.title',
    descriptionKey: 'features.mode2.description',
  },
  {
    icon: AcademicCapIcon,
    titleKey: 'features.mode3.title',
    descriptionKey: 'features.mode3.description',
  },
];

export default function Features() {
  const { t } = useTranslation();
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFeatureClick = (feature) => {
    setSelectedFeature(feature);
    setIsModalOpen(true);
  };

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">{t('features.title')}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white p-6 rounded-lg shadow-lg cursor-pointer"
              onClick={() => handleFeatureClick(feature)}
            >
              <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{t(feature.titleKey)}</h3>
              <p className="text-gray-600">{t(feature.descriptionKey)}</p>
            </motion.div>
          ))}
        </div>
      </div>
      
      <FeatureModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        feature={selectedFeature}
      />
    </div>
  );
}