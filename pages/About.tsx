import React from 'react';
import { Language } from '../types';
import { ABOUT_PAGE_CONTENT, HOME_CONTENT } from '../constants';
import SEOHead from '../components/SEOHead';

interface Props {
  lang: Language;
}

const About: React.FC<Props> = ({ lang }) => {
  const { hero, story, values, leadership, meta } = ABOUT_PAGE_CONTENT;
  const { mission, vision } = HOME_CONTENT;

  return (
    <div className="flex flex-col">
      <SEOHead meta={meta} lang={lang} type="article" />

      {/* Hero Section */}
      <div className="bg-hewer-blue pt-32 pb-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-hewer-gold/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
             <span className="text-hewer-gold font-bold tracking-widest uppercase text-sm mb-4 block animate-fade-in-up">Who We Are</span>
             <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 animate-fade-in-up [animation-delay:100ms]">{hero.title[lang]}</h1>
             <p className="text-xl text-slate-300 max-w-3xl mx-auto font-light leading-relaxed animate-fade-in-up [animation-delay:200ms]">{hero.subtitle[lang]}</p>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                     <img 
                        src="https://hewer.iq/wp-content/uploads/2025/01/6.png" 
                        alt="Hewer Holding Story - Iraq Industry" 
                        className="rounded-lg shadow-2xl object-cover"
                        loading="lazy"
                     />
                </div>
                <div>
                    <h2 className="text-3xl font-serif font-bold text-hewer-blue mb-6 border-l-4 rtl:border-l-0 rtl:border-r-4 border-hewer-gold pl-4 rtl:pl-0 rtl:pr-4">{story.title[lang]}</h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">{story.content[lang]}</p>
                    <div className="flex gap-8 border-t border-slate-100 pt-8">
                        <div>
                            <span className="block text-4xl font-bold text-hewer-gold mb-1">2020</span>
                            <span className="text-sm text-slate-500 uppercase">Founded</span>
                        </div>
                        <div>
                            <span className="block text-4xl font-bold text-hewer-gold mb-1">4</span>
                            <span className="text-sm text-slate-500 uppercase">Subsidiaries</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-hewer-gray">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="grid md:grid-cols-2 gap-8">
                 <article className="bg-white p-10 rounded-xl shadow-lg border-t-4 border-hewer-blue">
                     <div className="w-16 h-16 bg-hewer-blue/10 text-hewer-blue rounded-full flex items-center justify-center mb-6">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                     </div>
                     <h3 className="text-2xl font-serif font-bold text-hewer-blue mb-4">{mission.title[lang]}</h3>
                     <p className="text-slate-600 leading-relaxed">{mission.content[lang]}</p>
                 </article>
                 <article className="bg-white p-10 rounded-xl shadow-lg border-t-4 border-hewer-gold">
                     <div className="w-16 h-16 bg-hewer-gold/10 text-hewer-gold rounded-full flex items-center justify-center mb-6">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                     </div>
                     <h3 className="text-2xl font-serif font-bold text-hewer-blue mb-4">{vision.title[lang]}</h3>
                     <p className="text-slate-600 leading-relaxed">{vision.content[lang]}</p>
                 </article>
             </div>
         </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-hewer-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
                <h2 className="text-3xl font-serif font-bold mb-4">{values.title[lang]}</h2>
                <div className="w-16 h-1 bg-hewer-gold mx-auto"></div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.items.map((item, idx) => (
                    <div key={idx} className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:bg-white/10 transition-colors duration-300">
                        <h3 className="text-xl font-bold text-hewer-gold mb-3">{item.title[lang]}</h3>
                        <p className="text-slate-300 text-sm leading-relaxed">{item.desc[lang]}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Leadership Message */}
      <section className="py-24 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-slate-50 rounded-2xl p-10 md:p-16 border border-slate-100 shadow-sm relative">
                  <div className="absolute top-0 left-0 transform -translate-x-4 -translate-y-4 text-hewer-gold opacity-30">
                     <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9.01705C9.01705 16.0384 9.01605 16.0384 9.01605 16.0384C9.01605 16.0384 9.01605 8.99596 9.01605 8.99596C9.01605 8.99596 14.0161 8.99596 14.0161 8.99596C15.1206 8.99596 16.0161 8.10053 16.0161 6.99596V3.99596C16.0161 2.89139 15.1206 1.99596 14.0161 1.99596H6.01605C4.91148 1.99596 4.01605 2.89139 4.01605 3.99596V21H14.017ZM19.9839 21V16.0384C19.9839 16.0384 19.9829 16.0384 19.9829 16.0384C19.9829 16.0384 17.017 16 17.017 16C15.9125 16 15.017 16.8954 15.017 18V21H19.9839Z" /></svg>
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-hewer-blue mb-8 text-center">{leadership.title[lang]}</h2>
                  <div className="prose prose-lg text-slate-600 mx-auto text-center font-light leading-relaxed">
                      <p>"{leadership.content[lang]}"</p>
                  </div>
                  <div className="mt-8 text-center">
                      <span className="block font-bold text-hewer-blue">Hewer Holding Group</span>
                      <span className="text-sm text-slate-500 uppercase tracking-widest">Board of Directors</span>
                  </div>
              </div>
          </div>
      </section>
    </div>
  );
};

export default About;
