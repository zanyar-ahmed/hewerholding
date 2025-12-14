import React from 'react';
import { Language, SubsidiaryContent } from '../types';

interface Props {
  content: SubsidiaryContent;
  lang: Language;
}

const Subsidiary: React.FC<Props> = ({ content, lang }) => {
  return (
    <div className="flex flex-col">
      {/* Hero Banner */}
      <div 
        className="relative h-[60vh] min-h-[500px] w-full flex items-end parallax-bg"
        style={{ backgroundImage: `url('${content.heroImage}')` }}
      >
        <div className="absolute inset-0 bg-slate-900/90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="flex flex-col md:flex-row items-center md:items-end gap-8 md:gap-12 pb-12 md:pb-16">
                
                {/* Logo Card - shifted down to overlap */}
                <div className="order-2 md:order-1 relative -mb-24 md:-mb-28 z-20 flex-shrink-0 w-full md:w-auto flex justify-center md:block">
                    <div className="bg-white p-8 rounded-lg shadow-2xl w-64 h-64 md:w-80 md:h-80 flex items-center justify-center border border-slate-100">
                         <img src={content.logo} alt={content.name[lang]} className="max-w-full max-h-full object-contain p-2" />
                    </div>
                </div>

                {/* Text Content */}
                <div className="order-1 md:order-2 flex-1 text-center md:text-start rtl:md:text-right pb-4">
                    <span className="inline-block px-4 py-1.5 mb-6 border border-hewer-gold text-hewer-gold text-xs font-bold uppercase tracking-[0.2em] rounded-sm">
                        Subsidiary
                    </span>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 drop-shadow-lg leading-tight">
                        {content.name[lang]}
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 font-light tracking-wide max-w-2xl leading-relaxed">
                        {lang === 'en' ? 'Excellence and Innovation within the Hewer Holding Group' : lang === 'ar' ? 'التميز والابتكار ضمن مجموعة هيوَر القابضة' : 'باڵایی و داهێنان لەناو گروپی هێوەر هۆڵدینگ'}
                    </p>
                    {content.website && (
                         <a 
                            href={content.website} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center mt-8 px-8 py-3 bg-hewer-gold hover:bg-white hover:text-hewer-blue text-white font-bold rounded shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                         >
                            {lang === 'en' ? 'Visit Official Website' : lang === 'ar' ? 'زيارة الموقع الرسمي' : 'سەردانی ماڵپەڕی فەرمی'}
                            <svg className="w-5 h-5 ml-2 rtl:ml-0 rtl:mr-2 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                         </a>
                    )}
                </div>
            </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 md:pt-40 pb-20 grid lg:grid-cols-12 gap-12">
        
        {/* Left Column (Content) */}
        <div className="lg:col-span-8 space-y-16">
            <section>
                <div className="flex items-center space-x-3 rtl:space-x-reverse mb-8 border-b border-slate-200 pb-4">
                    <span className="w-1.5 h-8 bg-hewer-gold rounded-full"></span>
                    <h2 className="text-3xl font-serif font-bold text-hewer-blue">
                        {lang === 'en' ? 'Company Profile' : lang === 'ar' ? 'نبذة عن الشركة' : 'دەربارەی کۆمپانیا'}
                    </h2>
                </div>
                <div className="prose prose-lg text-slate-700 max-w-none font-light text-justify leading-relaxed">
                    <p>{content.description[lang]}</p>
                </div>
            </section>

            <section>
                <div className="flex items-center space-x-3 rtl:space-x-reverse mb-8 border-b border-slate-200 pb-4">
                    <span className="w-1.5 h-8 bg-hewer-gold rounded-full"></span>
                    <h2 className="text-3xl font-serif font-bold text-hewer-blue">
                        {content.services.title[lang]}
                    </h2>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-6">
                    {content.services.items.map((item, idx) => (
                        <div key={idx} className="group bg-slate-50 hover:bg-white p-6 rounded-xl border border-slate-200 hover:border-hewer-gold/50 shadow-sm hover:shadow-lg transition-all duration-300 flex items-start">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-hewer-blue/5 group-hover:bg-hewer-gold/10 text-hewer-gold flex items-center justify-center mt-1 transition-colors">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            </div>
                            <div className="ml-4 rtl:ml-0 rtl:mr-4">
                                <span className="text-slate-800 font-semibold text-lg group-hover:text-hewer-blue transition-colors">{item[lang]}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>

        {/* Right Column (Sidebar) */}
        <div className="lg:col-span-4 space-y-8 lg:pt-8">
            {/* Contact Card */}
            <div className="bg-hewer-blue text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-hewer-gold rounded-full opacity-20 blur-xl"></div>
                <h3 className="text-xl font-serif font-bold text-white mb-6 relative z-10 border-b border-white/20 pb-4">
                    {lang === 'en' ? 'Quick Contact' : lang === 'ar' ? 'تواصل سريع' : 'پەیوەندی خێرا'}
                </h3>
                <div className="space-y-6 relative z-10">
                    
                    {/* Render specific locations if available, otherwise default single contact */}
                    {content.contact.locations ? (
                        <div className="space-y-8">
                            {content.contact.locations.map((loc, idx) => (
                                <div key={idx} className="border-b border-white/10 pb-6 last:border-0 last:pb-0">
                                    <h4 className="font-bold text-hewer-gold mb-3 text-sm uppercase tracking-wide">{loc.name[lang]}</h4>
                                    
                                    <div className="flex items-start group mb-3">
                                         <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mr-3 rtl:mr-0 rtl:ml-3 group-hover:bg-hewer-gold transition-colors">
                                            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                         </div>
                                         <p className="text-sm text-gray-300 leading-relaxed pt-1">{loc.address[lang]}</p>
                                    </div>
                                    
                                    {loc.phone && (
                                        <div className="flex items-center group">
                                             <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mr-3 rtl:mr-0 rtl:ml-3 group-hover:bg-hewer-gold transition-colors">
                                                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                             </div>
                                             <p dir="ltr" className="text-sm text-gray-300 font-medium rtl:text-right">{loc.phone}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    ) : (
                        // Default Single Contact Display
                        <>
                            <div className="flex items-start group">
                                 <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mr-4 rtl:mr-0 rtl:ml-4 group-hover:bg-hewer-gold transition-colors">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                 </div>
                                 <p className="text-sm text-gray-300 leading-relaxed pt-2">{content.contact.address[lang]}</p>
                            </div>
                            {content.contact.phone && (
                                <div className="flex items-center group">
                                     <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mr-4 rtl:mr-0 rtl:ml-4 group-hover:bg-hewer-gold transition-colors">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                                     </div>
                                     <p dir="ltr" className="text-gray-300 font-medium rtl:text-right">{content.contact.phone}</p>
                                </div>
                            )}
                        </>
                    )}

                     {content.contact.email && (
                        <div className={`flex items-center group ${content.contact.locations ? 'border-t border-white/10 pt-6 mt-6' : ''}`}>
                             <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mr-4 rtl:mr-0 rtl:ml-4 group-hover:bg-hewer-gold transition-colors">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                             </div>
                             <p className="text-gray-300 font-medium">{content.contact.email}</p>
                        </div>
                    )}
                    {content.website && (
                        <div className="flex items-center group pt-4 border-t border-white/10 mt-4">
                             <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 mr-4 rtl:mr-0 rtl:ml-4 group-hover:bg-hewer-gold transition-colors">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                             </div>
                             <a href={content.website} target="_blank" rel="noopener noreferrer" className="text-hewer-gold font-bold hover:text-white transition-colors">{content.website.replace(/^https?:\/\/(www\.)?/, '')}</a>
                        </div>
                    )}
                </div>
            </div>

            {/* Certifications or Partners */}
            {content.certifications && (
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                    <h3 className="text-lg font-serif font-bold text-hewer-blue mb-6 pb-2 border-b border-slate-100">
                         {lang === 'en' ? 'Certifications' : lang === 'ar' ? 'الشهادات' : 'بڕوانامەکان'}
                    </h3>
                    <ul className="space-y-3">
                        {content.certifications.map((cert, i) => (
                            <li key={i} className="flex items-center text-slate-700 bg-slate-50 px-4 py-3 rounded-lg border border-slate-100">
                                <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 rtl:mr-0 rtl:ml-3">
                                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                </div>
                                <span className="font-medium text-sm">{cert}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            
            {content.partners && (
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
                    <h3 className="text-lg font-serif font-bold text-hewer-blue mb-6 pb-2 border-b border-slate-100">
                         {lang === 'en' ? 'Strategic Partners' : lang === 'ar' ? 'شركاء استراتيجيون' : 'هاوبەشە ستراتیجییەکان'}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {content.partners.map((partner, i) => (
                            <span key={i} className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-semibold border border-slate-200">
                                {partner}
                            </span>
                        ))}
                    </div>
                </div>
            )}

        </div>
      </div>
    </div>
  );
};

export default Subsidiary;
