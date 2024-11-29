import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'react-i18next';
import FeatureIllustration from './FeatureIllustration';

export default function FeatureModal({ isOpen, onClose, feature }) {
  const { t } = useTranslation();
  
  if (!feature) return null;

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { delay: 0.2 }
    }
  };

  // Extract the base key (e.g., 'features.mode1')
  const baseKey = feature.titleKey.split('.').slice(0, 2).join('.');

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto"
          onClick={onClose}
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-white rounded-xl p-8 max-w-3xl w-full relative my-8"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>

            <motion.div variants={contentVariants} initial="hidden" animate="visible">
              <div className="flex items-center mb-6">
                <feature.icon className="h-16 w-16 text-blue-600 mr-4" />
                <div>
                  <h2 className="text-3xl font-bold">{t(feature.titleKey)}</h2>
                  <p className="text-gray-600 mt-2">{t(feature.descriptionKey)}</p>
                </div>
              </div>

              <FeatureIllustration featureKey={feature.titleKey} />
              
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div 
                  className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center mb-3">
                    <h3 className="font-semibold">{t(`${baseKey}.features.1.title`)}</h3>
                  </div>
                  <p className="text-gray-600">{t(`${baseKey}.features.1.description`)}</p>
                  <p className="text-gray-600 mt-4">{t(`${baseKey}.features.1.context`)}</p>
                </motion.div>

                <motion.div 
                  className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-center mb-3">
                    <h3 className="font-semibold">{t(`${baseKey}.features.2.title`)}</h3>
                  </div>
                  <p className="text-gray-600">{t(`${baseKey}.features.2.description`)}</p>
                  <p className="text-gray-600 mt-4">{t(`${baseKey}.features.2.context`)}</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}