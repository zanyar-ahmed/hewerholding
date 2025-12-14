import React from 'react';
import { Language } from '../types';

interface Props {
  currentLang: Language;
  setLang: (lang: Language) => void;
}

const LanguageSwitcher: React.FC<Props> = ({ currentLang, setLang }) => {
  return (
    <div className="flex space-x-2 rtl:space-x-reverse text-sm">
      <button 
        onClick={() => setLang('en')} 
        className={`px-2 py-1 rounded transition-colors ${currentLang === 'en' ? 'bg-hewer-gold text-white font-bold' : 'text-gray-300 hover:text-white'}`}
      >
        EN
      </button>
      <button 
        onClick={() => setLang('ar')} 
        className={`px-2 py-1 rounded transition-colors font-serif ${currentLang === 'ar' ? 'bg-hewer-gold text-white font-bold' : 'text-gray-300 hover:text-white'}`}
      >
        عربي
      </button>
      <button 
        onClick={() => setLang('ku')} 
        className={`px-2 py-1 rounded transition-colors font-serif ${currentLang === 'ku' ? 'bg-hewer-gold text-white font-bold' : 'text-gray-300 hover:text-white'}`}
      >
        کوردی
      </button>
    </div>
  );
};

export default LanguageSwitcher;
