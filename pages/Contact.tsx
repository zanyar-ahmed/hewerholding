import React from 'react';
import { Language } from '../types';
import { CONTACT_PAGE, SUBSIDIARIES } from '../constants';

interface Props {
  lang: Language;
}

const Contact: React.FC<Props> = ({ lang }) => {
  return (
    <div className="bg-slate-50 min-h-screen pt-16">
      <div className="bg-hewer-blue py-24 text-center relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
         <div className="relative z-10 max-w-4xl mx-auto px-4">
            <span className="text-hewer-gold text-sm font-bold tracking-widest uppercase mb-4 block">Get In Touch</span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">{CONTACT_PAGE.title[lang]}</h1>
            <p className="text-slate-300 max-w-2xl mx-auto text-lg font-light">{CONTACT_PAGE.intro[lang]}</p>
         </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 -mt-16 relative z-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            
            {Object.values(SUBSIDIARIES).map((sub) => (
                <div key={sub.id} className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col">
                    <div className="h-20 flex items-center mb-8 border-b border-slate-100 pb-6 relative">
                        <img src={sub.logo} alt={`${sub.name[lang]} Logo`} className="max-h-16 max-w-full object-contain" />
                        {sub.website && (
                             <a href={sub.website} target="_blank" rel="noopener noreferrer" className="absolute right-0 top-0 mt-2 text-hewer-gold hover:text-hewer-blue transition-colors">
                                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                             </a>
                        )}
                    </div>
                    <h3 className="text-xl font-serif font-bold text-hewer-blue mb-6">{sub.name[lang]}</h3>
                    <div className="space-y-5 text-slate-600 text-sm flex-1">
                       <div className="flex items-start">
                            <div className="w-8 h-8 rounded bg-hewer-gold/10 text-hewer-gold flex items-center justify-center flex-shrink-0 mr-3 rtl:mr-0 rtl:ml-3">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            </div>
                            <div>
                                <span className="font-bold block text-hewer-blue mb-1">{lang === 'en' ? 'Address:' : lang === 'ar' ? 'العنوان:' : 'ناونیشان:'}</span>
                                <span className="leading-relaxed block">{sub.contact.address[lang]}</span>
                            </div>
                       </div>
                       
                       <div className="flex items-start">
                            <div className="w-8 h-8 rounded bg-hewer-gold/10 text-hewer-gold flex items-center justify-center flex-shrink-0 mr-3 rtl:mr-0 rtl:ml-3">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                            </div>
                            <div>
                                <span className="font-bold block text-hewer-blue mb-1">{lang === 'en' ? 'Phone:' : lang === 'ar' ? 'هاتف:' : 'مۆبایل:'}</span>
                                <span dir="ltr" className="block">{sub.contact.phone}</span>
                            </div>
                       </div>

                       {sub.contact.email && (
                            <div className="flex items-start">
                                <div className="w-8 h-8 rounded bg-hewer-gold/10 text-hewer-gold flex items-center justify-center flex-shrink-0 mr-3 rtl:mr-0 rtl:ml-3">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                </div>
                                <div>
                                    <span className="font-bold block text-hewer-blue mb-1">{lang === 'en' ? 'Email:' : lang === 'ar' ? 'البريد:' : 'ئیمەیڵ:'}</span>
                                    <span className="block break-all">{sub.contact.email}</span>
                                </div>
                            </div>
                       )}

                       {sub.website && (
                            <div className="flex items-start">
                                <div className="w-8 h-8 rounded bg-hewer-gold/10 text-hewer-gold flex items-center justify-center flex-shrink-0 mr-3 rtl:mr-0 rtl:ml-3">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                                </div>
                                <div>
                                    <span className="font-bold block text-hewer-blue mb-1">{lang === 'en' ? 'Website:' : lang === 'ar' ? 'الموقع:' : 'ماڵپەڕ:'}</span>
                                    <a href={sub.website} target="_blank" rel="noopener noreferrer" className="block text-hewer-gold hover:underline">{sub.website.replace(/^https?:\/\/(www\.)?/, '').split('/')[0]}</a>
                                </div>
                            </div>
                       )}
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;