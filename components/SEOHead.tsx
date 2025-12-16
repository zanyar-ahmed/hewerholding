import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Language, SEOMetadata } from '../types';

interface Props {
  meta: SEOMetadata;
  lang: Language;
  type?: 'website' | 'article' | 'organization';
  structuredData?: object;
}

const SEOHead: React.FC<Props> = ({ meta, lang, type = 'website', structuredData }) => {
  const location = useLocation();

  useEffect(() => {
    // Safety check: if meta is undefined, do nothing to avoid crash
    if (!meta) return;

    // Update Title
    if (meta.title && meta.title[lang]) {
      document.title = meta.title[lang];
    }

    // Helper to update or create meta tags
    const updateMeta = (name: string, content: string, attribute = 'name') => {
      if (!content) return;
      
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Standard Meta
    if (meta.description) updateMeta('description', meta.description[lang]);
    if (meta.keywords) updateMeta('keywords', meta.keywords[lang]);

    // Open Graph / Social
    if (meta.title) updateMeta('og:title', meta.title[lang], 'property');
    if (meta.description) updateMeta('og:description', meta.description[lang], 'property');
    updateMeta('og:type', type, 'property');
    updateMeta('og:url', window.location.href, 'property');
    updateMeta('og:locale', lang === 'ar' ? 'ar_IQ' : lang === 'ku' ? 'ku_IQ' : 'en_US', 'property');

    // Twitter Card
    updateMeta('twitter:card', 'summary_large_image');
    if (meta.title) updateMeta('twitter:title', meta.title[lang]);
    if (meta.description) updateMeta('twitter:description', meta.description[lang]);

    // Note: Canonical URLs are tricky with HashRouter. 
    // We avoid setting them automatically here to prevent setting all pages to the root URL.

    // Structured Data (JSON-LD)
    if (structuredData) {
      let script = document.querySelector('#seo-structured-data');
      if (!script) {
        script = document.createElement('script');
        script.setAttribute('id', 'seo-structured-data');
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(structuredData);
    }

  }, [meta, lang, type, location, structuredData]);

  return null;
};

export default SEOHead;
