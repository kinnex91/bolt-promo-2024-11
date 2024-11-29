import React from 'react';
import './i18n';
import Hero from './components/Hero';
import Features from './components/Features';
import LanguageToggle from './components/LanguageToggle';

function App() {
  return (
    <div className="min-h-screen">
      <LanguageToggle />
      <Hero />
      <Features />
    </div>
  );
}

export default App;