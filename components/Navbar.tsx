import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Language, NavigationItem } from '../types';
import LanguageSwitcher from './LanguageSwitcher';

interface Props {
  items: NavigationItem[];
  lang: Language;
  setLang: (lang: Language) => void;
}

const Navbar: React.FC<Props> = ({ items, lang, setLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // State for mobile dropdown toggles
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbarClasses = isScrolled
    ? "bg-hewer-blue/95 backdrop-blur-md shadow-lg py-3"
    : "bg-hewer-blue py-5";

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ease-in-out ${navbarClasses}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo / Brand */}
          <div className="flex-shrink-0 flex items-center group">
            <Link to="/" className="flex flex-col">
               <span className="text-3xl font-serif font-black tracking-wider text-white group-hover:text-hewer-gold transition-colors duration-300">HEWER</span>
               <span className="text-xs text-hewer-gold tracking-[0.3em] uppercase font-medium">Holding Group</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 items-center justify-end space-x-6 rtl:space-x-reverse">
            <div className="flex space-x-2 rtl:space-x-reverse">
              {items.map((item) => {
                if (item.children) {
                   // Dropdown Menu
                   return (
                     <div key={item.label.en} className="relative group">
                       <div className="flex items-center">
                         {item.path ? (
                            <Link 
                                to={item.path}
                                className={`flex items-center px-4 py-2 rounded-full text-base font-semibold transition-all duration-300 focus:outline-none ${
                                    location.pathname === item.path || item.children.some(child => child.path === location.pathname)
                                    ? 'text-hewer-gold bg-white/10' 
                                    : 'text-gray-200 hover:text-white hover:bg-white/5'
                                }`}
                            >
                                {item.label[lang]}
                            </Link>
                         ) : (
                            <span className="px-4 py-2 text-gray-200 font-semibold cursor-default">
                                {item.label[lang]}
                            </span>
                         )}
                         <svg className={`w-4 h-4 -ml-2 rtl:-ml-0 rtl:-mr-2 text-gray-400 transition-transform group-hover:rotate-180 pointer-events-none ${item.path ? '' : 'ml-1 rtl:ml-0 rtl:mr-1'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                       </div>

                       {/* Dropdown Content */}
                       <div className="absolute ltr:left-0 rtl:right-0 mt-2 w-56 bg-hewer-blue border border-white/10 rounded-lg shadow-2xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100 z-50">
                         {item.children.map((child) => (
                           <Link
                             key={child.path}
                             to={child.path!}
                             className={`block px-4 py-3 text-sm font-medium border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors ${
                               location.pathname === child.path
                                ? 'text-hewer-gold'
                                : 'text-gray-300 hover:text-white'
                             }`}
                           >
                             {child.label[lang]}
                           </Link>
                         ))}
                       </div>
                     </div>
                   );
                }

                // Regular Link
                return (
                  <Link
                    key={item.path}
                    to={item.path!}
                    className={`px-4 py-2 rounded-full text-base font-semibold transition-all duration-300 ${
                      location.pathname === item.path 
                        ? 'text-hewer-gold bg-white/10' 
                        : 'text-gray-200 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label[lang]}
                  </Link>
                );
              })}
            </div>
            <div className="border-l rtl:border-r rtl:border-l-0 border-white/20 pl-6 rtl:pr-6 rtl:pl-0">
               <LanguageSwitcher currentLang={lang} setLang={setLang} />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
             <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white focus:outline-none transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-hewer-blue border-t border-white/10 transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-1">
          {items.map((item) => {
            if (item.children) {
              const isDropdownOpen = mobileDropdownOpen === item.label.en;
              return (
                <div key={item.label.en} className="border-b border-white/5">
                  <div className="flex items-center justify-between px-3 py-4">
                     {item.path ? (
                        <Link 
                            to={item.path}
                            onClick={() => setIsOpen(false)}
                            className={`text-lg font-semibold flex-grow ${location.pathname === item.path ? 'text-hewer-gold' : 'text-gray-300'}`}
                        >
                            {item.label[lang]}
                        </Link>
                     ) : (
                        <span className={`text-lg font-semibold flex-grow text-gray-300`}>{item.label[lang]}</span>
                     )}
                     <button 
                        onClick={() => setMobileDropdownOpen(isDropdownOpen ? null : item.label.en)}
                        className="p-2 -mr-2 text-gray-400"
                     >
                        <svg className={`w-5 h-5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                     </button>
                  </div>
                  
                  <div className={`space-y-1 pl-4 rtl:pl-0 rtl:pr-4 overflow-hidden transition-all duration-300 ${isDropdownOpen ? 'max-h-60 opacity-100 pb-3' : 'max-h-0 opacity-0'}`}>
                    {item.children.map(child => (
                      <Link
                        key={child.path}
                        to={child.path!}
                        onClick={() => setIsOpen(false)}
                        className={`block px-3 py-2 rounded-md text-base font-medium ${
                          location.pathname === child.path
                           ? 'text-hewer-gold bg-white/5'
                           : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        {child.label[lang]}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <Link
                key={item.path}
                to={item.path!}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-4 rounded-md text-lg font-semibold border-b border-white/5 ${
                    location.pathname === item.path 
                      ? 'text-hewer-gold' 
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
              >
                {item.label[lang]}
              </Link>
            );
          })}
           <div className="px-3 py-6 flex justify-center">
              <LanguageSwitcher currentLang={lang} setLang={setLang} />
           </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;