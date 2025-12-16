import { HomeContent, NavigationItem, SubsidiaryContent, ContactPageContent, AboutPageContent, CompaniesPageContent } from './types';

export const LOGOS = {
  HEWER: 'https://hewer.iq/wp-content/uploads/2021/10/ChatGPT-Image-Dec-3-2025-01_42_06-PM.png',
  LASS: 'https://i0.wp.com/lass.iq/wp-content/uploads/2024/03/Lass-OG.png?fit=7297%2C2837&ssl=1',
  OPTIMUM: 'https://optimum-ops.com/wp-content/uploads/2023/01/logo_v2_d400-1.png',
  XEED: 'https://www.xeed.ae/wp-content/uploads/2020/09/XEED_FullColor.png',
};

export const NAV_ITEMS: NavigationItem[] = [
  { label: { en: 'Home', ar: 'الرئيسية', ku: 'سەرەکی' }, path: '/' },
  { label: { en: 'About Us', ar: 'من نحن', ku: 'دەربارەی ئێمە' }, path: '/about' },
  {
    label: { en: 'Our Companies', ar: 'شركاتنا', ku: 'کۆمپانیاکانمان' },
    path: '/companies',
    children: [
      { label: { en: 'LASS Industrial', ar: 'لاس للاستثمار الصناعي', ku: 'لاس بۆ وەبەرهێنانی پیشەسازی' }, path: '/lass' },
      { label: { en: 'HEWER Oil', ar: 'هيوَر للخدمات النفطية', ku: 'هێوەر بۆ خزمەتگوزاری نەوت' }, path: '/hewer' },
      { label: { en: 'OPTIMUM Drilling', ar: 'أوبتيموم للحفر', ku: 'ئۆپتیمەم بۆ هەڵکۆڵین' }, path: '/optimum' },
      { label: { en: 'XEED Energy', ar: 'إكسيد للطاقة', ku: 'ئێکسید بۆ وزە' }, path: '/xeed' },
    ]
  },
  { label: { en: 'Contact', ar: 'اتصل بنا', ku: 'پەیوەندی' }, path: '/contact' },
];

export const HOME_CONTENT: HomeContent = {
  meta: {
    title: {
      en: 'Hewer Holding Group | Leading Industrial & Energy Investment in Iraq',
      ar: 'مجموعة هيوَر القابضة | رائدة الاستثمار الصناعي والطاقة في العراق',
      ku: 'گروپی هێوەر هۆڵدینگ | پێشەنگی وەبەرهێنانی پیشەسازی و وزە لە عێراق'
    },
    description: {
      en: 'Hewer Holding Group drives excellence in Agriculture, Oil & Gas, and Energy. Parent company of LASS, HEWER Oil Services, OPTIMUM Drilling, and XEED.',
      ar: 'تقود مجموعة هيوَر القابضة التميز في الزراعة والنفط والغاز والطاقة. الشركة الأم لشركات لاس، هيوَر للخدمات النفطية، أوبتيموم للحفر، وإكسيد.',
      ku: 'گروپی هێوەر هۆڵدینگ باڵایی لە کشتوکاڵ، نەوت و گاز و وزە بەڕێوەدەبات. کۆمپانیای دایکی لاس، خزمەتگوزاری نەوتی هێوەر، هەڵکۆڵینی ئۆپتیمەم و ئێکسید.'
    },
    keywords: {
      en: 'Hewer Holding, Iraq Investment, Oil and Gas Iraq, Agriculture Iraq, Drilling Services Erbil, Industrial Group Baghdad',
      ar: 'مجموعة هيوَر، استثمار العراق، نفط وغاز العراق، زراعة العراق، خدمات حفر أربيل، مجموعة صناعية بغداد',
      ku: 'هێوەر هۆڵدینگ، وەبەرهێنانی عێراق، نەوت و گاز عێراق، کشتوکاڵی عێراق، خزمەتگوزاری هەڵکۆڵین هەولێر'
    }
  },
  hero: {
    title: {
      en: 'Hewer Holding Group',
      ar: 'مجموعة هيوَر القابضة',
      ku: 'گروپی هێوەر هۆڵدینگ',
    },
    subtitle: {
      en: 'Diversified excellence in Agriculture, Oil & Gas, Energy Solutions, and Industrial Investment.',
      ar: 'تميز متنوع في الزراعة والنفط والغاز وحلول الطاقة والاستثمار الصناعي.',
      ku: 'تایبەتمەندی هەمەچەشن لە کشتوکاڵ، نەوت و گاز، چارەسەری وزە و وەبەرهێنانی پیشەسازی.',
    },
  },
  about: {
    title: { en: 'Who We Are', ar: 'من نحن', ku: 'ئێمە کێین' },
    content: {
      en: 'Hewer Holding Group is a diversified holding company established in 2020, bringing together specialized companies operating across agriculture, industrial investment, oil & gas services, and drilling operations.',
      ar: 'مجموعة هيوَر القابضة هي شركة قابضة متعددة القطاعات تأسست عام 2020، وتضم شركات متخصصة تعمل في مجالات الزراعة والاستثمار الصناعي وخدمات النفط والغاز وأعمال الحفر.',
      ku: 'گروپی هێوەر هۆڵدینگ گروپێکی فرەبوارییە کە لە ساڵی 2020 دامەزراوە و کۆمپانیا تایبەتەکان لە بواری کشتوکاڵ، وەبەرهێنانی پیشەسازی، خزمەتگوزاری نەفت و گاز، و کارەکانی درێلینگ یەکدەخات.',
    },
  },
  mission: {
    title: { en: 'Our Mission', ar: 'مهمتنا', ku: 'ئەرکمان' },
    content: {
      en: 'To provide world-class industrial and energy solutions by combining expertise, technology, and strong partnerships while adhering to international standards.',
      ar: 'توفير حلول صناعية وطاقة ذات مستوى عالمي من خلال الجمع بين الخبرة والتكنولوجيا والشراكات القوية مع الالتزام بالمعايير الدولية.',
      ku: 'دابینکردنی چارەسەری پیشەسازی و وزەی ئاست جیهانی لە ڕێگەی تێکەڵکردنی شارەزایی، تەکنەلۆژیا، و هاوبەشی بەهێز لەگەڵ پابەندبوون بە ستانداردە نێودەوڵەتییەکان.',
    },
  },
  vision: {
    title: { en: 'Our Vision', ar: 'رؤيتنا', ku: 'دیدگامان' },
    content: {
      en: 'To become a leading regional holding group delivering sustainable growth in agriculture and energy through excellence and innovation.',
      ar: 'أن نصبح مجموعة قابضة إقليمية رائدة تحقق نمواً مستداماً في الزراعة والطاقة من خلال التميز والابتكار.',
      ku: 'ببین بە گروپێکی هۆڵدینگی پێشەنگی ناوچەیی کە گەشەی بەردەوام لە کشتوکاڵ و وزە دابین دەکات لە ڕێگەی باڵایی و داهێنانەوە.',
    },
  },
};

export const ABOUT_PAGE_CONTENT: AboutPageContent = {
  meta: {
    title: {
      en: 'About Hewer Holding | Our Story & Leadership',
      ar: 'عن مجموعة هيوَر | قصتنا وقيادتنا',
      ku: 'دەربارەی هێوەر هۆڵدینگ | چیرۆک و سەرکردایەتیمان'
    },
    description: {
      en: 'Founded in 2020, Hewer Holding unifies specialized companies to foster growth in Iraq’s industrial sector. Learn about our mission, vision, and leadership.',
      ar: 'تأسست مجموعة هيوَر في عام 2020 لتوحيد الشركات المتخصصة وتعزيز النمو في القطاع الصناعي في العراق. تعرف على مهمتنا ورؤيتنا وقيادتنا.',
      ku: 'لە ساڵی 2020 دامەزراوە، هێوەر هۆڵدینگ کۆمپانیا تایبەتمەندەکان یەکدەخات بۆ پەرەپێدانی گەشە لە کەرتی پیشەسازی عێراق. دەربارەی ئەرک، دیدگا و سەرکردایەتیمان بزانە.'
    },
    keywords: {
      en: 'Hewer History, Corporate Governance Iraq, Industrial Leadership Baghdad, Hewer Board of Directors',
      ar: 'تاريخ هيوَر، حوكمة الشركات العراق، القيادة الصناعية بغداد، مجلس إدارة هيوَر',
      ku: 'مێژووی هێوەر، حوکمڕانی کۆمپانیاکان عێراق، سەرکردایەتی پیشەسازی بەغدا'
    }
  },
  hero: {
    title: { en: 'About Hewer Holding', ar: 'عن مجموعة هيوَر', ku: 'دەربارەی هێوەر' },
    subtitle: { en: 'Building the future through diversified investment and operational excellence.', ar: 'بناء المستقبل من خلال الاستثمار المتنوع والتميز التشغيلي.', ku: 'بونیادنانی داهاتوو لە ڕێگەی وەبەرهێنانی هەمەچەشن و باڵایی کارکردن.' }
  },
  story: {
    title: { en: 'Our Story', ar: 'قصتنا', ku: 'چیرۆکی ئێمە' },
    content: {
      en: 'Established in 2020, Hewer Holding Group has rapidly evolved into a cornerstone of Iraq’s industrial and energy sectors. By unifying specialized companies under one strategic umbrella, we have created an ecosystem that fosters cross-company collaboration, centralized governance, and sustainable growth. Our journey is defined by a commitment to combining local expertise with international standards.',
      ar: 'تأسست مجموعة هيوَر القابضة في عام 2020، وسرعان ما تطورت لتصبح حجر الزاوية في قطاعي الصناعة والطاقة في العراق. من خلال توحيد الشركات المتخصصة تحت مظلة استراتيجية واحدة، قمنا بإنشاء نظام بيئي يعزز التعاون بين الشركات، والحوكمة المركزية، والنمو المستدام. رحلتنا محددة بالالتزام بالجمع بين الخبرة المحلية والمعايير الدولية.',
      ku: 'لە ساڵی 2020 دامەزراوە، گروپی هێوەر هۆڵدینگ بە خێرایی گەشەی کردووە و بووەتە بەردی بناغەی کەرتەکانی پیشەسازی و وزەی عێراق. بە یەکخستنی کۆمپانیا تایبەتمەندەکان لەژێر یەک چەتری ستراتیژیدا، سیستەمێکی ژینگەیمان دروستکردووە کە هاوکاری نێوان کۆمپانیاکان، حوکمڕانی ناوەندی و گەشەی بەردەوام پەرە پێدەدات.',
    }
  },
  values: {
    title: { en: 'Core Values', ar: 'القيم الجوهرية', ku: 'بەها بنچینەییەکان' },
    items: [
      {
        title: { en: 'Innovation', ar: 'الابتكار', ku: 'داهێنان' },
        desc: { en: 'Embracing technology to solve complex challenges.', ar: 'تبني التكنولوجيا لحل التحديات المعقدة.', ku: 'باوەشکردن بە تەکنەلۆژیا بۆ چارەسەرکردنی ئاڵنگارییە ئاڵۆزەکان.' }
      },
      {
        title: { en: 'Quality', ar: 'الجودة', ku: 'کواڵێتی' },
        desc: { en: 'Adhering to ISO standards in every operation.', ar: 'الالتزام بمعايير ISO في كل عملية.', ku: 'پابەندبوون بە ستانداردەکانی ISO لە هەموو کارێکدا.' }
      },
      {
        title: { en: 'Sustainability', ar: 'الاستدامة', ku: 'بەردەوامی' },
        desc: { en: 'Commitment to environmental stewardship.', ar: 'الالتزام بالإشراف البيئي.', ku: 'پابەندبوون بە پاراستنی ژینگە.' }
      },
      {
        title: { en: 'Safety', ar: 'السلامة', ku: 'سەلامەتی' },
        desc: { en: 'Prioritizing the health and safety of our people.', ar: 'إعطاء الأولوية لصحة وسلامة موظفينا.', ku: 'پێشینەدان بە تەندروستی و سەلامەتی کارمەندەکانمان.' }
      }
    ]
  },
  leadership: {
    title: { en: 'Leadership Message', ar: 'رسالة القيادة', ku: 'پەیامی سەرکردایەتی' },
    content: {
      en: 'Our leadership underscores a commitment to innovation, excellence, and sustainable energy solutions. We focus on providing clients with reliable services that help drive operational success and future growth, ensuring Hewer Holding Group remains a trusted partner in the region.',
      ar: 'تؤكد قيادتنا على الالتزام بالابتكار والتميز وحلول الطاقة المستدامة. نحن نركز على تزويد العملاء بخدمات موثوقة تساعد في دفع النجاح التشغيلي والنمو المستقبلي، مما يضمن بقاء مجموعة هيوَر القابضة شريكًا موثوقًا به في المنطقة.',
      ku: 'سەرکردایەتیمان جەخت لەسەر پابەندبوون بە داهێنان، باڵایی، و چارەسەری وزەی بەردەوام دەکاتەوە. ئێمە تەرکیز دەکەینە سەر دابینکردنی خزمەتگوزاری متمانەپێکراو بۆ بریکارەکانمان کە یارمەتیدەرە بۆ سەرکەوتنی کارکردن و گەشەی داهاتوو.',
    }
  }
};

export const COMPANIES_PAGE_CONTENT: CompaniesPageContent = {
  meta: {
    title: {
      en: 'Our Companies | LASS, HEWER Oil, OPTIMUM, XEED',
      ar: 'شركاتنا | لاس، هيوَر للخدمات النفطية، أوبتيموم، إكسيد',
      ku: 'کۆمپانیاکانمان | لاس، هێوەر بۆ نەوت، ئۆپتیمەم، ئێکسید'
    },
    description: {
      en: 'Explore the Hewer Holding portfolio: LASS Industrial Investment, HEWER Oil Services, OPTIMUM Drilling, and XEED Energy Solutions.',
      ar: 'اكتشف محفظة مجموعة هيوَر: لاس للاستثمار الصناعي، هيوَر للخدمات النفطية، أوبتيموم للحفر، وإكسيد لحلول الطاقة.',
      ku: 'پۆرتفۆلیۆی هێوەر هۆڵدینگ ببینە: وەبەرهێنانی پیشەسازی لاس، خزمەتگوزاری نەوتی هێوەر، هەڵکۆڵینی ئۆپتیمەم، و چارەسەری وزەی ئێکسید.'
    },
    keywords: {
      en: 'Hewer Subsidiaries, Iraq Industrial Portfolio, Energy Companies Iraq, Oil Services Providers',
      ar: 'شركات هيوَر التابعة، محفظة العراق الصناعية، شركات الطاقة العراق، مقدمي خدمات النفط',
      ku: 'کۆمپانیاکانی هێوەر، پۆرتفۆلیۆی پیشەسازی عێراق، کۆمپانیاکانی وزە عێراق'
    }
  },
  hero: {
    title: { en: 'Our Companies', ar: 'شركاتنا', ku: 'کۆمپانیاکانمان' },
    subtitle: { en: 'A synergetic portfolio delivering excellence across sectors.', ar: 'محفظة تآزرية تقدم التميز عبر القطاعات.', ku: 'پۆرتفۆلیۆیەکی هاوبەش کە باڵایی پێشکەش دەکات لە هەموو کەرتەکاندا.' }
  },
  intro: {
    en: 'Hewer Holding Group unifies a portfolio of specialized companies. Each entity operates with autonomy while benefiting from the group’s centralized governance and strategic support.',
    ar: 'توحد مجموعة هيوَر القابضة محفظة من الشركات المتخصصة. تعمل كل جهة باستقلالية مع الاستفادة من الحوكمة المركزية للمجموعة والدعم الاستراتيجي.',
    ku: 'گروپی هێوەر هۆڵدینگ پۆرتفۆلیۆیەک لە کۆمپانیا تایبەتمەندەکان یەکدەخات. هەر قەوارەیەک بە سەربەخۆیی کار دەکات لە کاتێکدا سوود لە حوکمڕانی ناوەندی و پشتگیری ستراتیژی گروپەکە وەردەگرێت.'
  }
};

export const CONTACT_PAGE: ContactPageContent = {
  meta: {
    title: {
      en: 'Contact Us | Hewer Holding Group',
      ar: 'اتصل بنا | مجموعة هيوَر القابضة',
      ku: 'پەیوەندی | گروپی هێوەر هۆڵدینگ'
    },
    description: {
      en: 'Get in touch with Hewer Holding Group and its subsidiaries: LASS, HEWER Oil, OPTIMUM, and XEED. Find contact details for our offices in Iraq and UAE.',
      ar: 'تواصل مع مجموعة هيوَر القابضة وشركاتها التابعة: لاس، هيوَر للخدمات النفطية، أوبتيموم، وإكسيد. اعثر على تفاصيل الاتصال بمكاتبنا في العراق والإمارات.',
      ku: 'پەیوەندی بکە بە گروپی هێوەر هۆڵدینگ و کۆمپانیاکانی: لاس، هێوەر، ئۆپتیمەم، و ئێکسید. وردەکاری پەیوەندی نووسینگەکانمان لە عێراق و ئیمارات بدۆزەرەوە.'
    },
    keywords: {
      en: 'Contact Hewer Holding, Hewer Office Baghdad, Oil Services Contact Iraq, Investment Group Email',
      ar: 'اتصل بمجموعة هيوَر، مكتب هيوَر بغداد، اتصال خدمات النفط العراق، بريد مجموعة الاستثمار',
      ku: 'پەیوەندی هێوەر هۆڵدینگ، نووسینگەی هێوەر بەغدا، پەیوەندی خزمەتگوزاری نەوت'
    }
  },
  title: {
    en: 'Contact Us',
    ar: 'اتصل بنا',
    ku: 'پەیوەندی',
  },
  intro: {
    en: 'We are here to answer your questions and discuss how our diversified portfolio can serve your needs. Reach out to Hewer Holding or contact our specific subsidiaries directly.',
    ar: 'نحن هنا للإجابة على أسئلتكم ومناقشة كيف يمكن لمحفظتنا المتنوعة أن تخدم احتياجاتكم. تواصل مع مجموعة هيوَر القابضة أو اتصل بشركاتنا التابعة مباشرة.',
    ku: 'ئێمە لێرەین بۆ وەڵامدانەوەی پرسیارەکانتان و گفتوگۆکردن لەسەر ئەوەی چۆن پۆرتفۆلیۆ هەمەچەشنەکەمان دەتوانێت خزمەتی پێداویستییەکانتان بکات. پەیوەندی بکەن بە هێوەر هۆڵدینگ یان ڕاستەوخۆ پەیوەندی بە کۆمپانیاکانمانەوە بکەن.',
  },
};

export const SUBSIDIARIES: Record<string, SubsidiaryContent> = {
  lass: {
    id: 'lass',
    name: {
      en: 'LASS Industrial Investment Company',
      ar: 'شركة لاس للاستثمار الصناعي',
      ku: 'کۆمپانیای لاس بۆ وەبەرهێنانی پیشەسازی',
    },
    shortName: 'LASS',
    logo: LOGOS.LASS,
    heroImage: 'https://hewer.iq/wp-content/uploads/2025/12/Dec-14-2025-09_49_12-PM.png',
    meta: {
      title: {
        en: 'LASS Industrial | New Holland Agriculture Distributor Iraq',
        ar: 'لاس الصناعية | وكيل نيو هولاند الزراعية في العراق',
        ku: 'لاس بۆ پیشەسازی | بریکاری نیو هۆڵاند بۆ کشتوکاڵ لە عێراق'
      },
      description: {
        en: 'LASS Industrial Investment is the premier distributor of New Holland Agricultural Machinery in Iraq, providing tractors, harvesters, and irrigation systems.',
        ar: 'تعد شركة لاس للاستثمار الصناعي الموزع الأول لمعدات نيو هولاند الزراعية في العراق، حيث توفر الجرارات والحصادات وأنظمة الري.',
        ku: 'کۆمپانیای لاس بۆ وەبەرهێنانی پیشەسازی دابینکەری سەرەکی ئامێری کشتوکاڵی نیو هۆڵاندە لە عێراق، کە تراکتۆر، دەراسە و سیستەمی ئاودێری دابین دەکات.'
      },
      keywords: {
        en: 'New Holland Iraq, Agriculture Machinery Baghdad, Erhas Irrigation, Atlantis Irrigation, Tractors Iraq',
        ar: 'نيو هولاند العراق، آلات زراعية بغداد، ري Erhas، ري Atlantis، جرارات العراق',
        ku: 'نیو هۆڵاند عێراق، ئامێری کشتوکاڵی بەغدا، ئاودێری Erhas، تراکتۆر عێراق'
      }
    },
    description: {
      en: 'LASS Industrial Investment Company is dedicated to revolutionizing farming practices in Iraq through the introduction of modern agricultural machinery and advanced irrigation systems. As the premier distributor of New Holland Agricultural Machinery, LASS provides nationwide coverage across Iraq.',
      ar: 'شركة LASS للاستثمار الصناعي مكرسة لإحداث نقلة نوعية في الممارسات الزراعية في العراق من خلال توفير أحدث الآلات الزراعية وأنظمة الري المتطورة. تُعد LASS الموزع الأول لمعدات New Holland الزراعية في العراق.',
      ku: 'کۆمپانیای LASS بۆ وەبەرهێنانی پیشەسازی ئامانجی گۆڕینی شێوازی کشتوکاڵ لە عێراق هەیە بە بەکارهێنانی ئامێری کشتوکاڵی نوێ و سیستەمی ئاودانکردنی پێشکەوتوو. LASS دابینکەری سەرەکی ئامێری New Holland لە عێراقە.',
    },
    services: {
      title: { en: 'Products & Solutions', ar: 'المنتجات والحلول', ku: 'بەرهەم و چارەسەرەکان' },
      items: [
        { en: 'New Holland tractors', ar: 'جرارات نيو هولاند', ku: 'تراککتۆرەکانی نیو هۆڵاند' },
        { en: 'New Holland harvesters', ar: 'حصادات نيو هولاند', ku: 'دەراسەکانی نیو هۆڵاند' },
        { en: 'Erhas irrigation systems', ar: 'أنظمة ري Erhas', ku: 'سیستەمی ئاودێری Erhas' },
        { en: 'Atlantis irrigation systems', ar: 'أنظمة ري Atlantis', ku: 'سیستەمی ئاودێری Atlantis' },
        { en: 'Local manufacturing & assembly', ar: 'التصنيع والتجميع المحلي', ku: 'بەرهەمهێنان و کۆکردنەوەی ناوخۆیی' },
      ],
    },
    contact: {
      address: {
        en: 'Almansoor, St. Alamerat St. B. 609, Alley 13, H.13/2 Near German Embassy, Baghdad',
        ar: 'المنصور، شارع الاميرات، مبنى 609، زقاق 13، منزل 13/2، قرب السفارة الألمانية، بغداد',
        ku: 'مەنسوور، شەقامی ئەمیرات، باڵەخانەی 609، کۆڵانی 13، خانووی 13/2، نزیک باڵیۆزخانەی ئەڵمانیا، بەغدا',
      },
      phone: '+964 770 779 9991',
      email: 'info@lass.iq',
      locations: [
        {
            name: { en: 'Baghdad Office (Headquarter)', ar: 'مكتب بغداد (المقر الرئيسي)', ku: 'نووسینگەی بەغدا (بارەگای سەرەکی)' },
            address: { 
                en: 'Almansoor, St. Alamerat St. B. 609, Alley 13, H.13/2 Near German Embassy',
                ar: 'المنصور، شارع الاميرات، مبنى 609، زقاق 13، منزل 13/2، قرب السفارة الألمانية',
                ku: 'مەنسوور، شەقامی ئەمیرات، باڵەخانەی 609، کۆڵانی 13، خانووی 13/2، نزیک باڵیۆزخانەی ئەڵمانیا'
            },
            phone: '+964 770 779 9991'
        },
        {
            name: { en: 'Alexandria Branch', ar: 'فرع الإسكندرية', ku: 'لقی ئەسکەندەرییە' },
            address: { 
                en: 'Office and Workshop in SCAIE Alexandria, Hillah',
                ar: 'مكتب وورشة في المنطقة الصناعية، الإسكندرية، الحلة',
                ku: 'نووسینگە و وەرشە لە ناوچەی پیشەسازی، ئەسکەندەرییە، حیللە'
            },
            phone: '+964 770 779 9991'
        },
        {
            name: { en: 'Gazna Branch', ar: 'فرع غزنة', ku: 'لقی غەزنە' },
            address: { 
                en: 'Warehouse and Service Centre Gazna Road, Near Erbi Airport Erbil',
                ar: 'المستودع ومركز الخدمة، طريق غزنة، قرب مطار أربيل',
                ku: 'کۆگا و سەنتەری خزمەتگوزاری، ڕێگای غەزنە، نزیک فڕۆکەخانەی هەولێر'
            },
            phone: '+964 770 623 3131'
        },
        {
            name: { en: 'Jurf Al Nadaf Showroom', ar: 'معرض جرف النداف', ku: 'پێشانگای جورف ئەلنەداف' },
            address: { 
                en: 'Jurf Al Nadaf, Baghdad Wasit Road, Near Pasmayia Complex, Baghdad',
                ar: 'جرف النداف، طريق بغداد واسط، قرب مجمع بسماية، بغداد',
                ku: 'جورف ئەلنەداف، ڕێگای بەغدا واسیت، نزیک کۆمەڵگای بەسمایە، بەغدا'
            },
            phone: '+964 770 779 9991'
        },
        {
            name: { en: 'Erbil Qushtapa Showroom', ar: 'معرض قوشتبة', ku: 'پێشانگای قوشتەپە' },
            address: { 
                en: 'Qushtapa District, Erbil–Kirkuk Main Road, Erbil, Iraq',
                ar: 'قضاء قوشتبة، طريق أربيل-كركوك الرئيسي، أربيل، العراق',
                ku: 'قەزای قوشتەپە، ڕێگای سەرەکی هەولێر-کەرکووک، هەولێر، عێراق'
            },
            phone: '+964 770 623 3131'
        }
      ]
    },
    partners: ['New Holland', 'Erhas', 'Atlantis'],
    website: 'https://lass.iq/',
  },
  hewer: {
    id: 'hewer',
    name: {
      en: 'HEWER Oil Services',
      ar: 'هيوَر للخدمات النفطية',
      ku: 'هێوەر بۆ خزمەتگوزاری نەوت',
    },
    shortName: 'HEWER',
    logo: LOGOS.HEWER,
    heroImage: 'https://integratedoilservices.com/wp-content/uploads/2016/08/DSC_0020-scaled.jpg',
    meta: {
      title: {
        en: 'HEWER Oil Services | Integrated Project Management & Drilling Iraq',
        ar: 'هيوَر للخدمات النفطية | إدارة المشاريع المتكاملة والحفر في العراق',
        ku: 'خزمەتگوزاری نەوتی هێوەر | بەڕێوەبردنی پڕۆژەی یەکگرتوو و هەڵکۆڵین لە عێراق'
      },
      description: {
        en: 'HEWER Oil Services delivers precision oil and gas solutions in Iraq, including drilling, workover, coiled tubing, and well testing.',
        ar: 'تقدم شركة هيوَر للخدمات النفطية حلولاً دقيقة للنفط والغاز في العراق، بما في ذلك الحفر، وصيانة الآبار، والأنابيب الملتفة، واختبار الآبار.',
        ku: 'خزمەتگوزاری نەوتی هێوەر چارەسەری وردی نەوت و گاز لە عێراق پێشکەش دەکات، بە هەڵکۆڵین، چاککردنەوە، بۆری لوولپێچ و پشکنینی بیر.'
      },
      keywords: {
        en: 'Oil Services Baghdad, Drilling Contractors Iraq, Coiled Tubing Services, Well Testing Erbil, Early Production Facilities',
        ar: 'خدمات نفطية بغداد، مقاولي حفر العراق، خدمات الأنابيب الملتفة، اختبار الآبار أربيل، مرافق الإنتاج المبكر',
        ku: 'خزمەتگوزاری نەوتی بەغدا، بەڵێندەرانی هەڵکۆڵین عێراق، پشکنینی بیر هەولێر'
      }
    },
    description: {
      en: 'HEWER Oil Services was established to meet the evolving needs of the oil and gas industry with precision, efficiency, and operational excellence. Through innovation, advanced technology, and a strategic partnership with OPTIMUM, HEWER delivers reliable solutions aligned with international best practices.',
      ar: 'تأسست شركة HEWER لخدمات النفط لتلبية متطلبات قطاع النفط والغاز بدقة وكفاءة وتميّز تشغيلي. من خلال الابتكار والشراكة الاستراتيجية مع شركة OPTIMUM، تقدم HEWER حلولاً موثوقة وفق أفضل الممارسات العالمية.',
      ku: 'HEWER Oil Services دامەزرا بۆ دابینکردنی پێداویستییەکانی بواری نەفت و گاز بە وردی و باشترین کارکردن. کۆمپانیاکە بە نوێکاری، تەکنەلۆجیا پێشکەوتوو و هاوبەشی ستراتیجی لەگەڵ OPTIMUM کار دەکات.',
    },
    services: {
      title: { en: 'Services Offered', ar: 'الخدمات المقدمة', ku: 'خزمەتگوزارییە پێشکەشکراوەکان' },
      items: [
        { en: 'Integrated Project Management', ar: 'إدارة المشاريع المتكاملة', ku: 'بەڕێوەبردنی پڕۆژەی یەکگرتوو' },
        { en: 'Drilling & Workover Operations', ar: 'عمليات الحفر وصيانة الآبار', ku: 'کارەکانی هەڵکۆڵین و چاککردنەوە' },
        { en: 'Coiled Tubing Solutions', ar: 'حلول الأنابيب الملتفة', ku: 'چارەسەری بۆری لوولپێچ' },
        { en: 'Well Testing and Evaluation', ar: 'فحص وتقييم الآبار', ku: 'پشکنین و هەڵسەنگاندنی بیر' },
        { en: 'Early Production Facility Supply', ar: 'توريد مرافق الإنتاج المبكر', ku: 'دابینکردنی دامەزراوەی بەرهەمهێنانی پێشوەختە' },
      ],
    },
    contact: {
      address: {
        en: 'Al-Mansour, Al-Amerat St., Building 609, Alley 13, House 13/2, Near German Embassy, Baghdad – Iraq',
        ar: 'المنصور، شارع الاميرات، مبنى 609، زقاق 13، منزل 13/2، قرب السفارة الألمانية، بغداد - العراق',
        ku: 'مەنسوور، شەقامی ئەمیرات، باڵەخانەی 609، کۆڵانی 13، خانووی 13/2، نزیک باڵیۆزخانەی ئەڵمانیا، بەغدا - عێراق',
      },
      phone: '+964 770 429 0615',
      locations: [
        {
          name: { en: 'Baghdad Office (Headquarter)', ar: 'مكتب بغداد (المقر الرئيسي)', ku: 'نووسینگەی بەغدا (بارەگای سەرەکی)' },
          address: {
            en: 'Al-Mansour, Al-Amerat St., Building 609, Alley 13, House 13/2, Near German Embassy, Baghdad – Iraq',
            ar: 'المنصور، شارع الاميرات، مبنى 609، زقاق 13، منزل 13/2، قرب السفارة الألمانية، بغداد - العراق',
            ku: 'مەنسوور، شەقامی ئەمیرات، باڵەخانەی 609، کۆڵانی 13، خانووی 13/2، نزیک باڵیۆزخانەی ئەڵمانیا، بەغدا - عێراق'
          },
          phone: '+964 770 429 0615'
        },
        {
            name: { en: 'Gazna Branch', ar: 'فرع غزنة', ku: 'لقی غەزنە' },
            address: { 
                en: 'Warehouse and Service Centre Gazna Road, Near Erbi Airport Erbil',
                ar: 'المستودع ومركز الخدمة، طريق غزنة، قرب مطار أربيل',
                ku: 'کۆگا و سەنتەری خزمەتگوزاری، ڕێگای غەزنە، نزیک فڕۆکەخانەی هەولێر'
            },
            phone: '+964 770 623 3131'
        }
      ]
    },
    website: 'https://hewer.iq',
  },
  optimum: {
    id: 'optimum',
    name: {
      en: 'OPTIMUM Drilling',
      ar: 'أوبتيموم للحفر',
      ku: 'ئۆپتیمەم بۆ هەڵکۆڵین',
    },
    shortName: 'OPTIMUM',
    logo: LOGOS.OPTIMUM,
    heroImage: 'https://hewer.iq/wp-content/uploads/2025/12/ChatGPT-Image-Dec-16-2025-08_03_01-PM.png',
    meta: {
      title: {
        en: 'OPTIMUM Drilling | Advanced Drilling Solutions Iraq',
        ar: 'أوبتيموم للحفر | حلول حفر متقدمة في العراق',
        ku: 'ئۆپتیمەم بۆ هەڵکۆڵین | چارەسەری هەڵکۆڵینی پێشکەوتوو لە عێراق'
      },
      description: {
        en: 'OPTIMUM Drilling provides state-of-the-art drilling and workover rigs, ensuring operational efficiency and safety in Iraq’s oil fields.',
        ar: 'توفر أوبتيموم للحفر أجهزة حفر وصيانة متطورة، مما يضمن الكفاءة التشغيلية والسلامة في حقول النفط في العراق.',
        ku: 'ئۆپتیمەم بۆ هەڵکۆڵین ئامێری هەڵکۆڵین و چاککردنەوەی پێشکەوتوو دابین دەکات، بۆ مسۆگەرکردنی کارایی و سەلامەتی لە کێڵگە نەوتییەکانی عێراق.'
      },
      keywords: {
        en: 'Drilling Rigs Iraq, Workover Operations, Oil Field Services, Optimum Drilling Erbil',
        ar: 'أجهزة الحفر العراق، عمليات صيانة الآبار، خدمات حقول النفط، أوبتيموم للحفر أربيل',
        ku: 'ئامێری هەڵکۆڵین عێراق، کارەکانی چاککردنەوە، خزمەتگوزاری کێڵگەی نەوت'
      }
    },
    description: {
      en: 'OPTIMUM Drilling is a leading provider of drilling and workover services in Iraq. We utilize modern fleets and adhere to strict safety protocols to deliver projects on time and within budget. Our strategic alliance with HEWER Oil Services allows us to offer comprehensive turnkey solutions.',
      ar: 'تعد أوبتيموم للحفر مزوداً رائداً لخدمات الحفر وصيانة الآبار في العراق. نحن نستخدم أساطيل حديثة ونلتزم ببروتوكولات سلامة صارمة لتسليم المشاريع في الوقت المحدد وضمن الميزانية. تحالفنا الاستراتيجي مع HEWER يسمح لنا بتقديم حلول شاملة.',
      ku: 'ئۆپتیمەم بۆ هەڵکۆڵین دابینکەری پێشەنگی خزمەتگوزاری هەڵکۆڵین و چاککردنەوەیە لە عێراق. ئێمە کەشتیگەلی مۆدێرن بەکاردەهێنین و پابەندین بە پرۆتۆکۆڵە توندەکانی سەلامەتی بۆ جێبەجێکردنی پڕۆژەکان لە کاتی خۆیدا. هاوپەیمانی ستراتیژیمان لەگەڵ HEWER ڕێگەمان دەدات چارەسەری گشتگیر پێشکەش بکەین.',
    },
    services: {
      title: { en: 'Core Competencies', ar: 'الكفاءات الأساسية', ku: 'توانا بنچینەییەکان' },
      items: [
        { en: 'Drilling Rigs Operations', ar: 'عمليات أجهزة الحفر', ku: 'کارەکانی ئامێری هەڵکۆڵین' },
        { en: 'Workover Services', ar: 'خدمات صيانة الآبار', ku: 'خزمەتگوزاری چاککردنەوەی بیر' },
        { en: 'Rig Maintenance', ar: 'صيانة منصات الحفر', ku: 'چاککردنەوەی سەکۆی هەڵکۆڵین' },
        { en: 'Drilling Engineering', ar: 'هندسة الحفر', ku: 'ئەندازیاری هەڵکۆڵین' },
      ],
    },
    contact: {
      address: {
        en: 'Al-Mansour, Al-Amerat St., Baghdad – Iraq',
        ar: 'المنصور، شارع الاميرات، بغداد - العراق',
        ku: 'مەنسوور، شەقامی ئەمیرات، بەغدا - عێراق',
      },
      phone: '+964 770 429 0615',
      locations: [
        {
          name: { en: 'Baghdad Office', ar: 'مكتب بغداد', ku: 'نووسینگەی بەغدا' },
          address: {
            en: 'Karrada, Arrasat El-Hendiya, Building No. 437, Baghdad – Iraq',
            ar: 'الكرادة، عرصات الهندية، مبنى رقم 437، بغداد - العراق',
            ku: 'کەرادە، عەرەسات هندییە، باڵەخانەی ژمارە 437، بەغدا - عێراق',
          },
          phone: '+964 (750) 281-9191'
        },
        {
            name: { en: 'Gazna Branch', ar: 'فرع غزنة', ku: 'لقی غەزنە' },
            address: { 
                en: 'Warehouse and Service Centre Gazna Road, Near Erbi Airport Erbil',
                ar: 'المستودع ومركز الخدمة، طريق غزنة، قرب مطار أربيل',
                ku: 'کۆگا و سەنتەری خزمەتگوزاری، ڕێگای غەزنە، نزیک فڕۆکەخانەی هەولێر'
            },
            phone: '+964 770 623 3131'
        }
      ]
    },
    website: 'https://optimum-ops.com',
  },
  xeed: {
    id: 'xeed',
    name: {
      en: 'XEED Energy',
      ar: 'إكسيد للطاقة',
      ku: 'ئێکسید بۆ وزە',
    },
    shortName: 'XEED',
    logo: LOGOS.XEED,
    heroImage: 'https://hewer.iq/wp-content/uploads/2025/12/unnamed.webp',
    meta: {
      title: {
        en: 'XEED Energy | Sustainable Power & Energy Solutions',
        ar: 'إكسيد للطاقة | حلول الطاقة المستدامة',
        ku: 'ئێکسید بۆ وزە | چارەسەری وزەی بەردەوام'
      },
      description: {
        en: 'XEED Energy specializes in providing innovative power generation and energy management solutions, supporting Iraq’s infrastructure and industrial growth.',
        ar: 'تتخصص إكسيد للطاقة في تقديم حلول مبتكرة لتوليد الطاقة وإدارة الطاقة، مما يدعم البنية التحتية والنمو الصناعي في العراق.',
        ku: 'ئێکسید بۆ وزە تایبەتمەندە لە دابینکردنی چارەسەری داهێنەرانەی بەرهەمهێنانی وزە و بەڕێوەبردنی وزە، پشتگیری ژێرخان و گەشەی پیشەسازی عێراق دەکات.'
      },
      keywords: {
        en: 'Energy Solutions Iraq, Power Generation Baghdad, Renewable Energy Iraq, Industrial Power',
        ar: 'حلول الطاقة العراق، توليد الطاقة بغداد، الطاقة المتجددة العراق، الطاقة الصناعية',
        ku: 'چارەسەری وزە عێراق، بەرهەمهێنانی وزە بەغدا، وزەی نوێبووەوە عێراق'
      }
    },
    description: {
      en: 'XEED Energy is committed to powering Iraq’s future through sustainable and efficient energy solutions. From traditional power generation to emerging renewable technologies, XEED provides the expertise and infrastructure necessary to support large-scale industrial projects and community development.',
      ar: 'تلتزم إكسيد للطاقة بتزويد مستقبل العراق بالطاقة من خلال حلول طاقة مستدامة وفعالة. من توليد الطاقة التقليدية إلى تقنيات الطاقة المتجددة الناشئة، توفر XEED الخبرة والبنية التحتية اللازمة لدعم المشاريع الصناعية واسعة النطاق وتنمية المجتمع.',
      ku: 'ئێکسید بۆ وزە پابەندە بە دابینکردنی وزە بۆ داهاتووی عێراق لە ڕێگەی چارەسەری وزەی بەردەوام و کارا. لە بەرهەمهێنانی وزەی تەقلیدییەوە بۆ تەکنەلۆژیا نوێیەکانی وزەی نوێبووەوە، XEED شارەزایی و ژێرخانی پێویست دابین دەکات بۆ پشتگیری پڕۆژە پیشەسازییە گەورەکان.',
    },
    services: {
      title: { en: 'Energy Services', ar: 'خدمات الطاقة', ku: 'خزمەتگوزارییەکانی وزە' },
      items: [
        { en: 'Power Generation', ar: 'توليد الطاقة', ku: 'بەرهەمهێنانی وزە' },
        { en: 'Energy Infrastructure', ar: 'البنية التحتية للطاقة', ku: 'ژێرخانی وزە' },
        { en: 'Consultancy Services', ar: 'الخدمات الاستشارية', ku: 'خزمەتگوزاری ڕاوێژکاری' },
      ],
    },
    contact: {
      address: {
        en: 'Baghdad, Iraq',
        ar: 'بغداد، العراق',
        ku: 'بەغدا، عێراق',
      },
      phone: '+964 780 000 0000',
    },
    website: 'https://www.xeed.ae',
  },
};