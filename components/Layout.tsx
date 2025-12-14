import React, { useEffect } from 'react';
import { Language } from '../types';
import Navbar from './Navbar';
import Footer from './Footer';
import { NAV_ITEMS } from '../constants';

interface Props {
  children: React.ReactNode;
  lang: Language;
  setLang: (lang: Language) => void;
}

const Layout: React.FC<Props> = ({ children, lang, setLang }) => {
  useEffect(() => {
    // Set direction based on language
    const dir = lang === 'en' ? 'ltr' : 'rtl';
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
  }, [lang]);

  const fontClass = lang === 'en' ? 'font-sans' : 'font-sans'; 
  
  return (
    <div className={`min-h-screen flex flex-col bg-white ${fontClass} text-slate-800 antialiased selection:bg-hewer-gold selection:text-white`}>
      <Navbar items={NAV_ITEMS} lang={lang} setLang={setLang} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer lang={lang} />
    </div>
  );
};

export default Layout;