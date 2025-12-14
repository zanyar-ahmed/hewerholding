import React from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../types';
import { HOME_CONTENT, SUBSIDIARIES } from '../constants';

interface Props {
  lang: Language;
}

const Home: React.FC<Props> = ({ lang }) => {
  const { hero, about } = HOME_CONTENT;

  return (
    <div className="flex flex-col">
      {/* Hero Section with Video Background */}
      <div className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-hewer-blue">
        
        {/* Fallback Background Image (Visible if video fails or loads slowly) */}
        <div 
          className="absolute inset-0 bg-cover bg-center z-0"
          // Placeholder for the agricultural theme
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1622630325950-c65181768b55?q=80&w=2000&auto=format&fit=crop')` }}
        ></div>

        {/* Video Background - Native Video Tag for Reliability */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-[1] pointer-events-none">
            <video 
                className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
                autoPlay 
                muted 
                loop 
                playsInline
                poster="https://images.unsplash.com/photo-1622630325950-c65181768b55?q=80&w=2000&auto=format&fit=crop"
            >
                {/* Pexels Free Stock Video: Combine Harvester / Agriculture Theme */}
                <source src="https://videos.pexels.com/video-files/2883072/2883072-hd_1920_1080_30fps.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>

        {/* Overlays to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-hewer-blue/95 via-hewer-blue/60 to-hewer-blue/95 z-10"></div>
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        
        <div className="relative z-20 max-w-5xl mx-auto text-center px-4 pt-20">
          <div className="inline-block mb-6 px-4 py-1.5 border border-hewer-gold/30 rounded-full bg-hewer-blue/30 backdrop-blur-sm animate-fade-in-up">
            <span className="text-hewer-gold text-xs md:text-sm font-medium tracking-widest uppercase">Est. 2020 • Iraq & International</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-black text-white mb-8 leading-tight tracking-tight drop-shadow-lg animate-fade-in-up [animation-delay:200ms]">
            {hero.title[lang]}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed font-light animate-fade-in-up [animation-delay:400ms]">
            {hero.subtitle[lang]}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up [animation-delay:600ms]">
            <Link to="/contact" className="px-10 py-4 bg-hewer-gold hover:bg-hewer-goldHover text-white font-bold rounded-sm shadow-lg hover:shadow-hewer-gold/20 transition-all duration-300 transform hover:-translate-y-1">
              {lang === 'en' ? 'Get in Touch' : lang === 'ar' ? 'تواصل معنا' : 'پەیوەندی'}
            </Link>
            <Link to="/companies" className="px-10 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white hover:text-hewer-blue font-bold rounded-sm shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              {lang === 'en' ? 'Explore Companies' : lang === 'ar' ? 'استكشف الشركات' : 'گەڕانی کۆمپانیاکان'}
            </Link>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce opacity-70 z-20">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7-7-7"></path></svg>
        </div>
      </div>

      {/* About Teaser Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-hewer-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center space-x-4 rtl:space-x-reverse mb-6">
                <span className="h-0.5 w-12 bg-hewer-gold"></span>
                <span className="text-hewer-gold font-bold uppercase tracking-widest text-sm">
                   {about.title[lang]}
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-hewer-blue mb-8 leading-tight">
                Driving Industrial <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-hewer-blue to-hewer-gold">Excellence</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                {about.content[lang]}
              </p>
              
              <Link to="/about" className="inline-flex items-center text-hewer-blue font-bold hover:text-hewer-gold transition-colors mt-4">
                 {lang === 'en' ? 'Read our full story' : lang === 'ar' ? 'اقرأ قصتنا الكاملة' : 'چیرۆکی تەواومان بخوێنەوە'}
                 <svg className="w-5 h-5 ml-2 rtl:ml-0 rtl:mr-2 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </Link>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/5] bg-slate-200 rounded-lg overflow-hidden shadow-2xl relative z-10">
                 {/* Updated image to the specific URL requested by the user */}
                 <img src="https://hewer.iq/wp-content/uploads/2025/12/ChatGPT-Image-Dec-13-2025-09_57_14-AM.png" alt="Industrial Excellence" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-hewer-blue/10"></div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-10 -left-10 w-full h-full border-2 border-hewer-gold/20 rounded-lg z-0 hidden lg:block"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Grid - Teaser */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold text-hewer-blue mb-4">
              {lang === 'en' ? 'Our Companies' : lang === 'ar' ? 'شركاتنا' : 'کۆمپانیاکانمان'}
            </h2>
            <div className="w-24 h-1 bg-hewer-gold mx-auto rounded-full"></div>
            <p className="mt-6 text-xl text-slate-500 max-w-2xl mx-auto">
                Specialized entities delivering excellence across key sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.values(SUBSIDIARIES).map((sub) => (
              <Link key={sub.id} to={`/${sub.id}`} className="group relative flex flex-col h-full bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-slate-100 overflow-hidden">
                {/* Image Area */}
                <div className="h-48 bg-slate-100 relative overflow-hidden flex items-center justify-center p-6 border-b border-slate-100">
                   <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors duration-300"></div>
                   <img src={sub.logo} alt={sub.name[lang]} className="max-w-full max-h-full object-contain transform group-hover:scale-105 transition-transform duration-500" />
                </div>
                
                {/* Content Area */}
                <div className="flex-1 p-6 flex flex-col">
                  <div className="mb-2">
                    <span className="text-xs font-bold text-hewer-gold uppercase tracking-wider">{sub.shortName}</span>
                  </div>
                  <h3 className="text-lg font-serif font-bold text-hewer-blue mb-0 group-hover:text-hewer-gold transition-colors">{sub.name[lang]}</h3>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-12 text-center">
             <Link to="/companies" className="inline-block px-8 py-3 border-2 border-hewer-blue text-hewer-blue hover:bg-hewer-blue hover:text-white font-bold rounded-full transition-all duration-300">
                 {lang === 'en' ? 'View All Companies' : lang === 'ar' ? 'عرض جميع الشركات' : 'بینینی هەموو کۆمپانیاکان'}
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;