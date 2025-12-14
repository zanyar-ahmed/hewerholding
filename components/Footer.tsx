import React from 'react';
import { Language } from '../types';

interface Props {
  lang: Language;
}

const Footer: React.FC<Props> = ({ lang }) => {
  const year = new Date().getFullYear();
  
  const content = {
    rights: {
      en: `© ${year} Hewer Holding Group. All rights reserved.`,
      ar: `© ${year} مجموعة هيوَر القابضة. جميع الحقوق محفوظة.`,
      ku: `© ${year} گروپی هێوەر هۆڵدینگ. هەموو مافەکان پارێزراون.`,
    },
    location: {
      en: 'Baghdad • Erbil • Dubai • BVI',
      ar: 'بغداد • أربيل • دبي • جزر العذراء البريطانية',
      ku: 'بەغدا • هەولێر • دوبەی • دوورگەکانی ڤێرجین',
    }
  };

  return (
    <footer className="bg-hewer-blue text-slate-400 py-12 border-t border-white/5 mt-auto relative overflow-hidden">
      {/* Subtle texture or accent */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-hewer-gold/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
            <div className="text-center md:text-start rtl:md:text-right">
                <p className="text-white font-serif font-bold text-2xl tracking-wide mb-2">HEWER <span className="text-hewer-gold">HOLDING</span></p>
                <p className="text-sm font-light opacity-80 max-w-xs">{content.location[lang]}</p>
            </div>
            
            <div className="flex gap-4">
                {/* Social placeholders could go here */}
            </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs font-light tracking-wide">
             <div className="order-2 md:order-1 mt-4 md:mt-0">
                {content.rights[lang]}
             </div>
             <div className="order-1 md:order-2 flex gap-6">
                <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
                <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
             </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;