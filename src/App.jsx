import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './i18n';
import Hero from './components/Hero';
import Features from './components/Features';
import LanguageToggle from './components/LanguageToggle';
import Footer from './components/Footer';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import TermsOfServicePage from './components/TermsOfServicePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen">
            <LanguageToggle />
            <Hero />
            <Features />
            <Footer />
          </div>
        } />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/terms" element={<TermsOfServicePage />} />
      </Routes>
    </Router>
  );
}

export default App;