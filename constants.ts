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
    heroImage: 'https://picsum.photos/id/292/1920/600', // Agriculture themed
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
    heroImage: 'https://picsum.photos/id/196/1920/600', // Industrial/Oil themed
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
    },
    certifications: ['ISO 9001', 'ISO 14001:2015', 'ISO 45001:2018'],
    website: 'https://hewer.iq/',
  },
  optimum: {
    id: 'optimum',
    name: {
      en: 'OPTIMUM Drilling Services',
      ar: 'أوبتيموم لخدمات الحفر',
      ku: 'ئۆپتیمەم بۆ خزمەتگوزاری هەڵکۆڵین',
    },
    shortName: 'OPTIMUM',
    logo: LOGOS.OPTIMUM,
    heroImage: 'https://picsum.photos/id/119/1920/600', // Industrial/Metal themed
    description: {
      en: 'OPTIMUM Drilling Services is an international independent oilfield services company providing integrated drilling, workover, completion, and project management solutions. Established in the British Virgin Islands, OPTIMUM serves the Middle East and North Africa with a strong focus on quality, safety, and operational efficiency.',
      ar: 'شركة OPTIMUM لخدمات الحفر هي شركة دولية مستقلة تقدم حلولاً متكاملة في مجال الحفر وخدمات الآبار وإدارة المشاريع لقطاع النفط والغاز. تخدم الشركة الشرق الأوسط وشمال إفريقيا مع تركيز قوي على الجودة والسلامة.',
      ku: 'OPTIMUM Drilling Services کۆمپانیایەکی نێودەوڵەتییە لە بواری خزمەتگوزاری نەفت کە چارەسەری درێلینگ، وەرکۆڤەر و بەڕێوەبردنی پڕۆژە پێشکەش دەکات. خزمەتگوزاری پێشکەش دەکات لە ڕۆژهەڵاتی ناوەڕاست و باکووری ئەفریقا.',
    },
    services: {
      title: { en: 'Key Services', ar: 'الخدمات الرئيسية', ku: 'خزمەتگوزارییە سەرەکییەکان' },
      items: [
        { en: 'Integrated Drilling Services', ar: 'خدمات الحفر المتكاملة', ku: 'خزمەتگوزاری هەڵکۆڵینی یەکگرتوو' },
        { en: 'Workover Contracted Rigs', ar: 'منصات صيانة الآبار المتعاقد عليها', ku: 'بورجەکانی چاککردنەوەی گرێبەستکراو' },
        { en: 'Slickline Services', ar: 'خدمات الأسلاك الانزلاقية', ku: 'خزمەتگوزاری وایەری لووس' },
        { en: 'Equipment Supply', ar: 'تجهيز المعدات', ku: 'دابینکردنی کەلوپەل' },
        { en: 'Project Management', ar: 'إدارة المشاريع', ku: 'بەڕێوەبردنی پڕۆژە' },
      ],
    },
    contact: {
      address: {
        en: 'Baghdad Office: Karrada, Arrasat El-Hendiya, Building No. 437, Baghdad – Iraq',
        ar: 'مكتب بغداد: الكرادة، عرصات الهندية، مبنى رقم 437، بغداد - العراق',
        ku: 'نووسینگەی بەغدا: کەرادە، عەرەسات هندییە، باڵەخانەی ژمارە 437، بەغدا - عێراق',
      },
      phone: '+964 (750) 281-9191',
      email: 'info@optimum-ops.com',
    },
    website: 'https://optimum-ops.com/',
  },
  xeed: {
    id: 'xeed',
    name: {
      en: 'XEED Energy Solutions',
      ar: 'إكسيد لحلول الطاقة',
      ku: 'ئێکسید بۆ چارەسەری وزە',
    },
    shortName: 'XEED',
    logo: LOGOS.XEED,
    heroImage: 'https://picsum.photos/id/515/1920/600', // Tech/Energy themed
    description: {
      en: 'A dynamic organization that specializes in providing energy solutions with an innovative approach. Our scope of services is focused on Surface Well Testing, Early Production Facilities & Carbon Footprint Reduction solutions. We are committed to empowering clients with unparalleled data accuracy, integrity, and operational efficiency.',
      ar: 'منظمة ديناميكية متخصصة في توفير حلول الطاقة بنهج مبتكر. يركز نطاق خدماتنا على اختبار الآبار السطحية، ومرافق الإنتاج المبكر، وحلول تقليل البصمة الكربونية. نحن ملتزمون بتمكين العملاء من خلال دقة البيانات التي لا مثيل لها والنزاهة والكفاءة التشغيلية.',
      ku: 'ڕێکخراوێکی چالاکە کە تایبەتمەندە بە دابینکردنی چارەسەری وزە بە شێوازێکی داهێنەرانە. مەودای خزمەتگوزارییەکانمان تەرخانکراوە بۆ پشکنینی بیری سەر ڕووی زەوی، دامەزراوەکانی بەرهەمهێنانی پێشوەختە و چارەسەری کەمکردنەوەی شوێنپێی کاربۆن.',
    },
    services: {
      title: { en: 'Solutions & Services', ar: 'الحلول والخدمات', ku: 'چارەسەر و خزمەتگوزارییەکان' },
      items: [
        { en: 'Surface Well Testing', ar: 'اختبار الآبار السطحية', ku: 'پشکنینی بیری سەر ڕووی زەوی' },
        { en: 'Early Production Facilities', ar: 'مرافق الإنتاج المبكر', ku: 'دامەزراوەکانی بەرهەمهێنانی پێشوەختە' },
        { en: 'Carbon Footprint Reduction', ar: 'تقليل البصمة الكربونية', ku: 'کەمکردنەوەی شوێنپێی کاربۆن' },
        { en: 'Operational Efficiency Optimization', ar: 'تحسين الكفاءة التشغيلية', ku: 'باشترکردنی کارایی بەگەڕخستن' },
        { en: 'Data Accuracy & Integrity', ar: 'دقة وسلامة البيانات', ku: 'وردی و دروستی داتاکان' },
      ],
    },
    contact: {
      address: {
        en: 'PO Box: 6084, Abu Dhabi, United Arab Emirates',
        ar: 'صندوق البريد: 6084، أبو ظبي، الإمارات العربية المتحدة',
        ku: 'سندوقی پۆست: 6084، ئەبوزەبی، ئیماراتی یەکگرتووی عەرەبی',
      },
      phone: '+971 2 491 4283',
      email: 'info@xeed.ae',
    },
    website: 'https://www.xeed.ae/',
  },
};

export const CONTACT_PAGE: ContactPageContent = {
  title: {
    en: 'Contact Us',
    ar: 'اتصل بنا',
    ku: 'پەیوەندیمان پێوە بکەن',
  },
  intro: {
    en: 'Get in touch with our headquarters or one of our specialized subsidiaries.',
    ar: 'تواصل مع مقرنا الرئيسي أو إحدى شركاتنا التابعة المتخصصة.',
    ku: 'پەیوەندی بکە بە بارەگای سەرەکیمان یان یەکێک لە کۆمپانیا تایبەتمەندەکانمان.',
  },
};
