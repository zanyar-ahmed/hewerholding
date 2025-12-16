import React from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../types';
import { COMPANIES_PAGE_CONTENT, SUBSIDIARIES } from '../constants';
import SEOHead from '../components/SEOHead';

interface Props {
  lang: Language;
}

const Companies: React.FC<Props> = ({ lang }) => {
  const { hero, intro, meta } = COMPANIES_PAGE_CONTENT;

  return (
    <div className="flex flex-col">
       <SEOHead meta={meta} lang={lang} />

       {/* Hero Section */}
       <div className="bg-hewer-blue pt-32 pb-20 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
             <span className="text-hewer-gold font-bold tracking-widest uppercase text-sm mb-4 block animate-fade-in-up">Our Portfolio</span>
             <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 animate-fade-in-up [animation-delay:100ms]">{hero.title[lang]}</h1>
             <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed animate-fade-in-up [animation-delay:200ms]">{hero.subtitle[lang]}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
           <div className="max-w-3xl mx-auto text-center mb-20">
               <p className="text-lg text-slate-600 leading-relaxed">{intro[lang]}</p>
           </div>

           <div className="grid md:grid-cols-2 gap-10">
               {Object.values(SUBSIDIARIES).map((sub, idx) => (
                   <article key={sub.id} className={`flex flex-col rounded-2xl overflow-hidden shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-500 group bg-white ${idx % 2 === 0 ? 'md:translate-y-8' : ''}`}>
                       <div className="h-64 relative overflow-hidden">
                           <div className="absolute inset-0 bg-gradient-to-t from-hewer-blue/80 to-transparent opacity-60 z-10"></div>
                           <img src={sub.heroImage} alt={sub.name[lang]} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                           <div className="absolute bottom-0 left-0 p-6 z-20">
                                <div className="bg-white p-3 rounded-lg inline-block shadow-lg mb-2">
                                     <img src={sub.logo} alt={`${sub.shortName} logo`} className="h-8 object-contain" />
                                </div>
                           </div>
                       </div>
                       <div className="p-8 flex-1 flex flex-col">
                           <h3 className="text-2xl font-serif font-bold text-hewer-blue mb-4 group-hover:text-hewer-gold transition-colors">{sub.name[lang]}</h3>
                           <p className="text-slate-600 mb-6 line-clamp-3 flex-1">{sub.description[lang]}</p>
                           <div className="flex items-center justify-between mt-auto">
                               <Link to={`/${sub.id}`} className="inline-flex items-center font-bold text-hewer-blue hover:text-hewer-gold transition-colors">
                                   {lang === 'en' ? 'View Full Profile' : lang === 'ar' ? 'عرض الملف الكامل' : 'بینینی پڕۆفایلی تەواو'}
                                   <svg className="w-5 h-5 ml-2 rtl:ml-0 rtl:mr-2 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                               </Link>
                               {sub.website && (
                                   <a href={sub.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-hewer-gold transition-colors">
                                       <span className="mr-1 rtl:mr-0 rtl:ml-1">{lang === 'en' ? 'Website' : lang === 'ar' ? 'الموقع' : 'ماڵپەڕ'}</span>
                                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                                   </a>
                               )}
                           </div>
                       </div>
                   </article>
               ))}
           </div>
      </div>
    </div>
  );
};

export default Companies;
