
export type Language = 'en' | 'ar' | 'ku';

export interface LocalizedString {
  en: string;
  ar: string;
  ku: string;
}

export interface SEOMetadata {
  title: LocalizedString;
  description: LocalizedString;
  keywords: LocalizedString;
}

export interface NavigationItem {
  label: LocalizedString;
  path?: string;
  children?: NavigationItem[];
}

export interface LocationItem {
  name: LocalizedString;
  address: LocalizedString;
  phone: string;
}

export interface SubsidiaryContent {
  id: string;
  name: LocalizedString;
  shortName: string;
  logo: string;
  description: LocalizedString;
  meta: SEOMetadata; // Added SEO meta
  mission?: LocalizedString;
  vision?: LocalizedString;
  services: {
    title: LocalizedString;
    items: LocalizedString[];
  };
  contact: {
    address: LocalizedString;
    phone: string;
    email?: string;
    locations?: LocationItem[];
  };
  heroImage: string;
  certifications?: string[];
  partners?: string[];
  website?: string;
}

export interface HomeContent {
  meta: SEOMetadata; // Added SEO meta
  hero: {
    title: LocalizedString;
    subtitle: LocalizedString;
  };
  about: {
    title: LocalizedString;
    content: LocalizedString;
  };
  mission: {
    title: LocalizedString;
    content: LocalizedString;
  };
  vision: {
    title: LocalizedString;
    content: LocalizedString;
  };
}

export interface AboutPageContent {
  meta: SEOMetadata; // Added SEO meta
  hero: {
    title: LocalizedString;
    subtitle: LocalizedString;
  };
  story: {
    title: LocalizedString;
    content: LocalizedString;
  };
  values: {
    title: LocalizedString;
    items: { title: LocalizedString; desc: LocalizedString }[];
  };
  leadership: {
    title: LocalizedString;
    content: LocalizedString;
  };
}

export interface CompaniesPageContent {
  meta: SEOMetadata; // Added SEO meta
  hero: {
    title: LocalizedString;
    subtitle: LocalizedString;
  };
  intro: LocalizedString;
}

export interface ContactPageContent {
  meta: SEOMetadata; // Added SEO meta
  title: LocalizedString;
  intro: LocalizedString;
}
