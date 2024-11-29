import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import './i18n';
import Hero from './components/Hero';
import Features from './components/Features';
import LanguageToggle from './components/LanguageToggle';
import Footer from './components/Footer';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import TermsOfServicePage from './components/TermsOfServicePage';
import { useTranslation } from 'react-i18next';

function MainLayout() {
  const location = useLocation();
  const { i18n } = useTranslation();
  
  React.useEffect(() => {
    // Set language based on URL
    const isFrenchRoute = location.pathname.startsWith('/fr');
    const currentLang = isFrenchRoute ? 'fr' : 'en';
    
    if (i18n.language !== currentLang) {
      i18n.changeLanguage(currentLang);
    }
  }, [location.pathname, i18n]);

  return (
    <div className="min-h-screen">
      <LanguageToggle />
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/fr" element={<MainLayout />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/fr/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsOfServicePage />} />
        <Route path="/fr/terms" element={<TermsOfServicePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;