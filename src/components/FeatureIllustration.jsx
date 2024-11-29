import React from 'react';
import { motion } from 'framer-motion';

const ExpertModeIllustration = () => (
  <motion.svg 
    className="w-full h-48" 
    viewBox="0 0 400 200" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    {/* Background Grids */}
    <motion.rect 
      x="30" y="30" 
      width="160" 
      height="140" 
      rx="8" 
      fill="#EBF5FF"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.2 }}
    />
    <motion.rect 
      x="210" y="30" 
      width="160" 
      height="140" 
      rx="8" 
      fill="#EBF5FF"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 0.3 }}
    />

    {/* Left Panel - Statistics */}
    <motion.g
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.4 }}
    >
      {/* Bar Chart */}
      <rect x="45" y="50" width="20" height="100" fill="#60A5FA" opacity="0.3" />
      <rect x="75" y="70" width="20" height="80" fill="#60A5FA" opacity="0.5" />
      <rect x="105" y="40" width="20" height="110" fill="#60A5FA" opacity="0.7" />
      <rect x="135" y="60" width="20" height="90" fill="#60A5FA" opacity="0.9" />
      
      {/* X-axis */}
      <line x1="45" y1="150" x2="155" y2="150" stroke="#2563EB" strokeWidth="2" />
      
      {/* Y-axis */}
      <line x1="45" y1="40" x2="45" y2="150" stroke="#2563EB" strokeWidth="2" />
    </motion.g>

    {/* Right Panel - League Coverage */}
    <motion.g
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 }}
    >
      {/* World Map Representation */}
      <path 
        d="M225,70 C240,65 260,60 280,70 C300,80 320,75 335,70" 
        stroke="#2563EB" 
        strokeWidth="2" 
        fill="none"
      />
      <path 
        d="M225,90 C245,85 265,95 285,90 C305,85 320,95 335,90" 
        stroke="#60A5FA" 
        strokeWidth="2" 
        fill="none"
      />
      <path 
        d="M225,110 C240,105 265,115 285,110 C305,105 325,115 335,110" 
        stroke="#93C5FD" 
        strokeWidth="2" 
        fill="none"
      />
      
      {/* League Indicators */}
      <circle cx="230" cy="70" r="3" fill="#2563EB" />
      <circle cx="260" cy="70" r="3" fill="#2563EB" />
      <circle cx="290" cy="70" r="3" fill="#2563EB" />
      <circle cx="320" cy="70" r="3" fill="#2563EB" />
    </motion.g>

    {/* Animated Pulse Effect */}
    <motion.circle
      cx="320"
      cy="70"
      r="8"
      stroke="#2563EB"
      strokeWidth="2"
      fill="none"
      initial={{ scale: 0, opacity: 1 }}
      animate={{ scale: 2, opacity: 0 }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        repeatType: "loop"
      }}
    />
  </motion.svg>
);

const illustrations = {
  'features.mode1.title': (
    <svg className="w-full h-48" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="50" y="40" width="300" height="120" rx="8" fill="#EBF5FF" />
      <rect x="70" y="60" width="120" height="30" rx="4" fill="#2563EB" />
      <rect x="210" y="60" width="120" height="30" rx="4" fill="#60A5FA" />
      <rect x="70" y="110" width="260" height="30" rx="4" fill="#93C5FD" />
    </svg>
  ),
  'features.mode2.title': (
    <motion.svg 
      className="w-full h-48" 
      viewBox="0 0 400 200" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path 
        d="M50,150 L150,80 L250,120 L350,50" 
        stroke="#2563EB" 
        strokeWidth="3" 
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5 }}
      />
      <motion.g
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5 }}
      >
        <circle cx="150" cy="80" r="6" fill="#60A5FA" />
        <circle cx="250" cy="120" r="6" fill="#60A5FA" />
        <circle cx="350" cy="50" r="6" fill="#60A5FA" />
      </motion.g>
    </motion.svg>
  ),
  'features.mode3.title': ExpertModeIllustration
};

export default function FeatureIllustration({ featureKey }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="mb-8"
    >
      {illustrations[featureKey]}
    </motion.div>
  );
}