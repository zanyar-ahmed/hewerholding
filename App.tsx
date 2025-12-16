import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Companies from './pages/Companies';
import Subsidiary from './pages/Subsidiary';
import Contact from './pages/Contact';
import { Language } from './types';
import { SUBSIDIARIES } from './constants';

// Helper component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');

  return (
    <HashRouter>
      <ScrollToTop />
      <Layout lang={lang} setLang={setLang}>
        <Routes>
          <Route path="/" element={<Home lang={lang} />} />
          <Route path="/about" element={<About lang={lang} />} />
          <Route path="/companies" element={<Companies lang={lang} />} />
          <Route path="/hewer" element={<Subsidiary content={SUBSIDIARIES.hewer} lang={lang} />} />
          <Route path="/lass" element={<Subsidiary content={SUBSIDIARIES.lass} lang={lang} />} />
          <Route path="/optimum" element={<Subsidiary content={SUBSIDIARIES.optimum} lang={lang} />} />
          <Route path="/xeed" element={<Subsidiary content={SUBSIDIARIES.xeed} lang={lang} />} />
          <Route path="/contact" element={<Contact lang={lang} />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
