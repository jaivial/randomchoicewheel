/**
 * SEO Manager - Advanced Multi-Language SEO Optimization
 * Handles localized meta tags, Open Graph, Twitter Cards, and structured data
 * Supports 40 languages with comprehensive SEO features and tier-based optimization
 */

export class SEOManager {
  constructor(languageManager) {
    this.languageManager = languageManager;
    this.defaultMeta = {};
    
    // Listen for language changes
    this.languageManager.addLanguageChangeListener((newLang, prevLang) => {
      this.updatePageSEO(newLang);
    });
  }

  /**
   * Initialize SEO manager with default meta information
   * @param {Object} defaultMeta - Default meta information
   */
  initialize(defaultMeta = {}) {
    this.defaultMeta = {
      title: 'Decision Wheel Spinner',
      description: 'Make decisions easily with our decision wheel spinner.',
      keywords: 'wheel, spinner, decision, random, choice',
      author: 'Decision Wheel App',
      viewport: 'width=device-width, initial-scale=1.0',
      themeColor: '#4f46e5',
      ...defaultMeta
    };

    // Set initial SEO
    this.updatePageSEO(this.languageManager.getCurrentLanguage().code);
  }

  /**
   * Update all SEO elements for the current language with comprehensive optimization
   * @param {string} languageCode - Language code to use for SEO
   */
  updatePageSEO(languageCode) {
    const translations = this.languageManager.translations[languageCode];
    if (!translations || !translations.meta) return;

    // Update basic meta tags
    this.updateBasicMetaTags(translations.meta, languageCode);
    
    // Update Open Graph meta tags with country targeting
    this.updateOpenGraphTags(translations.meta, languageCode);
    
    // Update Twitter Card meta tags with regional optimization
    this.updateTwitterCardTags(translations.meta, languageCode);
    
    // Update structured data with comprehensive country targeting
    this.updateStructuredData(translations.meta, languageCode);
    
    // Add mobile-first optimization for developing markets
    this.addMobileOptimization(languageCode);
    
    // Update canonical and hreflang
    this.updateCanonicalAndHreflang();
    
    // Add local search optimization
    this.addLocalSearchOptimization(languageCode);
    
    console.log(`Comprehensive SEO updated for language: ${languageCode} with country-specific targeting`);
  }

  /**
   * Update basic HTML meta tags with tier-based optimization
   * @param {Object} metaTranslations - Meta translations for current language
   * @param {string} languageCode - Current language code
   */
  updateBasicMetaTags(metaTranslations, languageCode) {
    const langConfig = this.languageManager.supportedLanguages[languageCode];
    const tier = langConfig?.tier || 4;
    
    // Update title with tier-optimized length
    const title = metaTranslations.title || this.defaultMeta.title;
    document.title = this.optimizeTitleForTier(title, tier, languageCode);
    
    // Update or create meta description with length optimization
    const description = metaTranslations.description || this.defaultMeta.description;
    this.updateMetaTag('description', this.optimizeDescriptionForTier(description, tier, languageCode));
    
    // Enhanced keywords based on language tier and region
    const keywords = this.generateEnhancedKeywords(metaTranslations.keywords, languageCode, tier);
    this.updateMetaTag('keywords', keywords);
    
    // Update language and region meta tags
    this.updateMetaTag('language', languageCode);
    this.updateMetaTag('content-language', `${languageCode}-${langConfig?.region || 'US'}`);
    
    // Geographic targeting for regional SEO
    if (langConfig?.region) {
      this.updateMetaTag('geo.region', langConfig.region);
      this.updateMetaTag('geo.country', langConfig.region);
    }
    
    // RTL support for Arabic, Hebrew, Urdu, Persian
    if (langConfig?.rtl) {
      this.updateMetaTag('direction', 'rtl');
      document.documentElement.dir = 'rtl';
    } else {
      this.updateMetaTag('direction', 'ltr');
      document.documentElement.dir = 'ltr';
    }
    
    // Update or create other essential meta tags
    this.updateMetaTag('author', this.defaultMeta.author);
    this.updateMetaTag('viewport', this.defaultMeta.viewport);
    this.updateMetaTag('theme-color', this.defaultMeta.themeColor);
    
    // Tier-based robots directive optimization
    const robotsDirective = tier <= 2 ? 'index, follow, max-snippet:-1, max-image-preview:large' : 'index, follow';
    this.updateMetaTag('robots', robotsDirective);
    
    // Update charset
    this.updateMetaTag('charset', 'UTF-8', true);
    
    // Add language-specific schema markup
    this.addLanguageSchemaMarkup(languageCode, langConfig);
  }

  /**
   * Optimize title length based on language tier and characteristics
   * @param {string} title - Original title
   * @param {number} tier - Language tier (1-4)
   * @param {string} languageCode - Language code
   * @returns {string} Optimized title
   */
  optimizeTitleForTier(title, tier, languageCode) {
    // Character limits based on tier importance and language characteristics
    const limits = {
      1: 65, // High priority languages get longer titles
      2: 60,
      3: 55,
      4: 50
    };
    
    const maxLength = limits[tier] || 50;
    
    // Handle languages with different character densities
    const densityAdjustment = this.getLanguageDensityAdjustment(languageCode);
    const adjustedLimit = Math.floor(maxLength * densityAdjustment);
    
    if (title.length <= adjustedLimit) {
      return title;
    }
    
    // Intelligent truncation preserving meaning
    return title.substring(0, adjustedLimit - 3) + '...';
  }

  /**
   * Optimize description length based on language tier
   * @param {string} description - Original description
   * @param {number} tier - Language tier (1-4)
   * @param {string} languageCode - Language code
   * @returns {string} Optimized description
   */
  optimizeDescriptionForTier(description, tier, languageCode) {
    const limits = {
      1: 160, // Premium treatment for tier 1
      2: 155,
      3: 150,
      4: 145
    };
    
    const maxLength = limits[tier] || 145;
    const densityAdjustment = this.getLanguageDensityAdjustment(languageCode);
    const adjustedLimit = Math.floor(maxLength * densityAdjustment);
    
    if (description.length <= adjustedLimit) {
      return description;
    }
    
    return description.substring(0, adjustedLimit - 3) + '...';
  }

  /**
   * Get language density adjustment factor for character limits
   * @param {string} languageCode - Language code
   * @returns {number} Density adjustment factor
   */
  getLanguageDensityAdjustment(languageCode) {
    // Languages with high information density per character
    const densityMap = {
      'zh': 1.5, // Chinese characters convey more meaning
      'ja': 1.4, // Japanese efficiency
      'ko': 1.3, // Korean efficiency
      'th': 1.2, // Thai compactness
      'ar': 0.9, // Arabic with RTL considerations
      'he': 0.9, // Hebrew with RTL considerations
      'hi': 0.8, // Hindi Devanagari script
      'bn': 0.8, // Bengali script
      'ta': 0.8, // Tamil script
      'te': 0.8, // Telugu script
      'ur': 0.9, // Urdu with RTL
      'fa': 0.9  // Persian with RTL
    };
    
    return densityMap[languageCode] || 1.0;
  }

  /**
   * Generate enhanced keywords based on language and tier
   * @param {string} baseKeywords - Base keywords from translations
   * @param {string} languageCode - Language code
   * @param {number} tier - Language tier
   * @returns {string} Enhanced keywords
   */
  generateEnhancedKeywords(baseKeywords, languageCode, tier) {
    const langConfig = this.languageManager.supportedLanguages[languageCode];
    
    let keywords = baseKeywords || this.defaultMeta.keywords;
    
    // Add language-specific decision-making terms
    const decisionTerms = this.getLocalizedDecisionTerms(languageCode);
    if (decisionTerms.length > 0) {
      keywords += ', ' + decisionTerms.join(', ');
    }
    
    // Add regional context for tier 1 and 2 languages
    if (tier <= 2 && langConfig?.region) {
      const regionTerms = this.getRegionalTerms(langConfig.region, languageCode);
      if (regionTerms.length > 0) {
        keywords += ', ' + regionTerms.join(', ');
      }
    }
    
    return keywords;
  }

  /**
   * Get localized decision-making terms for enhanced SEO
   * @param {string} languageCode - Language code
   * @returns {Array} Array of localized terms
   */
  getLocalizedDecisionTerms(languageCode) {
    const termMap = {
      'zh': ['决定', '选择', '随机', '轮盘'],
      'hi': ['निर्णय', 'चुनाव', 'यादृच्छिक', 'चक्र'],
      'ar': ['قرار', 'اختيار', 'عشوائي', 'عجلة'],
      'bn': ['সিদ্ধান্ত', 'পছন্দ', 'এলোমেলো', 'চাকা'],
      'ur': ['فیصلہ', 'انتخاب', 'بے ترتیب', 'پہیہ'],
      'ko': ['결정', '선택', '무작위', '바퀴'],
      'ja': ['決定', '選択', 'ランダム', 'ホイール'],
      'th': ['การตัดสินใจ', 'ทางเลือก', 'สุ่ม', 'ล้อ'],
      'vi': ['quyết định', 'lựa chọn', 'ngẫu nhiên', 'bánh xe']
    };
    
    return termMap[languageCode] || [];
  }

  /**
   * Get regional terms for local SEO
   * @param {string} region - Region code
   * @param {string} languageCode - Language code
   * @returns {Array} Array of regional terms
   */
  getRegionalTerms(region, languageCode) {
    // Regional context for major markets
    const regionalTerms = {
      'US': ['america', 'usa', 'online tool'],
      'CN': ['中国', '在线工具', '网页应用'],
      'IN': ['india', 'indian', 'online', 'web app'],
      'BR': ['brasil', 'brasileiro', 'ferramenta online'],
      'DE': ['deutschland', 'german', 'online tool'],
      'FR': ['france', 'français', 'outil en ligne'],
      'RU': ['россия', 'российский', 'онлайн инструмент'],
      'JP': ['日本', 'オンラインツール', 'ウェブアプリ'],
      'KR': ['한국', '온라인 도구', '웹 앱'],
      'ES': ['españa', 'español', 'herramienta online']
    };
    
    return regionalTerms[region] || [];
  }

  /**
   * Add language-specific schema markup with advanced country targeting
   * @param {string} languageCode - Language code
   * @param {Object} langConfig - Language configuration
   */
  addLanguageSchemaMarkup(languageCode, langConfig) {
    // Add comprehensive language availability markup
    const availableLanguages = Object.keys(this.languageManager.supportedLanguages);
    
    this.updateMetaProperty('article:tag', 'multilingual');
    this.updateMetaProperty('article:tag', `${availableLanguages.length} languages`);
    this.updateMetaProperty('article:tag', 'international');
    this.updateMetaProperty('article:tag', 'global tool');
    
    // Enhanced audience targeting with country and region
    if (langConfig?.region) {
      this.updateMetaProperty('audience', langConfig.region);
      this.updateMetaProperty('geo.country', langConfig.region);
      
      // Add specific country targeting
      const countryData = this.getCountryTargetingData(langConfig.region, languageCode);
      if (countryData) {
        this.updateMetaProperty('geo.region', countryData.regions.join(';'));
        this.updateMetaProperty('geo.placename', countryData.cities.join(';'));
        
        // Add ICBM coordinates for major cities
        if (countryData.coordinates) {
          this.updateMetaProperty('ICBM', countryData.coordinates);
        }
      }
    }

    // Add language script and writing system
    const scriptInfo = this.getLanguageScriptInfo(languageCode);
    if (scriptInfo) {
      this.updateMetaProperty('language-script', scriptInfo.script);
      this.updateMetaProperty('writing-system', scriptInfo.direction);
    }

    // Add market tier for prioritization
    if (langConfig?.tier) {
      this.updateMetaProperty('market-tier', langConfig.tier.toString());
      this.updateMetaProperty('market-priority', this.getTierPriority(langConfig.tier));
    }
  }

  /**
   * Get country-specific targeting data
   * @param {string} region - Region code
   * @param {string} languageCode - Language code
   * @returns {Object|null} Country targeting data
   */
  getCountryTargetingData(region, languageCode) {
    const countryData = {
      // Major global markets with detailed targeting
      'US': {
        regions: ['North America', 'United States', 'Americas'],
        cities: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'],
        coordinates: '40.7128,-74.0060', // NYC coordinates
        timezone: 'America/New_York',
        currency: 'USD',
        marketSize: 'large'
      },
      'CN': {
        regions: ['East Asia', 'China', 'Asia Pacific'],
        cities: ['Beijing', 'Shanghai', 'Guangzhou', 'Shenzhen', 'Chengdu'],
        coordinates: '39.9042,116.4074', // Beijing coordinates
        timezone: 'Asia/Shanghai',
        currency: 'CNY',
        marketSize: 'large'
      },
      'IN': {
        regions: ['South Asia', 'India', 'Asia Pacific'],
        cities: ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 'Pune'],
        coordinates: '28.6139,77.2090', // Delhi coordinates
        timezone: 'Asia/Kolkata',
        currency: 'INR',
        marketSize: 'large'
      },
      'ES': {
        regions: ['Western Europe', 'Spain', 'Iberian Peninsula'],
        cities: ['Madrid', 'Barcelona', 'Valencia', 'Seville', 'Bilbao'],
        coordinates: '40.4168,-3.7038', // Madrid coordinates
        timezone: 'Europe/Madrid',
        currency: 'EUR',
        marketSize: 'medium'
      },
      'FR': {
        regions: ['Western Europe', 'France', 'Francophone'],
        cities: ['Paris', 'Lyon', 'Marseille', 'Toulouse', 'Nice'],
        coordinates: '48.8566,2.3522', // Paris coordinates
        timezone: 'Europe/Paris',
        currency: 'EUR',
        marketSize: 'medium'
      },
      'SA': {
        regions: ['Middle East', 'Saudi Arabia', 'Arabian Peninsula', 'GCC'],
        cities: ['Riyadh', 'Jeddah', 'Mecca', 'Medina', 'Dammam'],
        coordinates: '24.7136,46.6753', // Riyadh coordinates
        timezone: 'Asia/Riyadh',
        currency: 'SAR',
        marketSize: 'medium'
      },
      'BD': {
        regions: ['South Asia', 'Bangladesh', 'Bengal'],
        cities: ['Dhaka', 'Chittagong', 'Sylhet', 'Rajshahi', 'Khulna'],
        coordinates: '23.8103,90.4125', // Dhaka coordinates
        timezone: 'Asia/Dhaka',
        currency: 'BDT',
        marketSize: 'large'
      },
      'BR': {
        regions: ['South America', 'Brazil', 'Latin America'],
        cities: ['São Paulo', 'Rio de Janeiro', 'Brasília', 'Salvador', 'Fortaleza'],
        coordinates: '-23.5505,-46.6333', // São Paulo coordinates
        timezone: 'America/Sao_Paulo',
        currency: 'BRL',
        marketSize: 'large'
      },
      'RU': {
        regions: ['Eastern Europe', 'Russia', 'CIS', 'Eurasia'],
        cities: ['Moscow', 'Saint Petersburg', 'Novosibirsk', 'Yekaterinburg', 'Nizhny Novgorod'],
        coordinates: '55.7558,37.6173', // Moscow coordinates
        timezone: 'Europe/Moscow',
        currency: 'RUB',
        marketSize: 'large'
      },
      'JP': {
        regions: ['East Asia', 'Japan', 'Asia Pacific'],
        cities: ['Tokyo', 'Osaka', 'Yokohama', 'Nagoya', 'Sapporo'],
        coordinates: '35.6762,139.6503', // Tokyo coordinates
        timezone: 'Asia/Tokyo',
        currency: 'JPY',
        marketSize: 'medium'
      },
      'DE': {
        regions: ['Central Europe', 'Germany', 'Germanic'],
        cities: ['Berlin', 'Munich', 'Frankfurt', 'Hamburg', 'Cologne'],
        coordinates: '52.5200,13.4050', // Berlin coordinates
        timezone: 'Europe/Berlin',
        currency: 'EUR',
        marketSize: 'medium'
      },
      'ID': {
        regions: ['Southeast Asia', 'Indonesia', 'ASEAN'],
        cities: ['Jakarta', 'Surabaya', 'Bandung', 'Medan', 'Semarang'],
        coordinates: '-6.2088,106.8456', // Jakarta coordinates
        timezone: 'Asia/Jakarta',
        currency: 'IDR',
        marketSize: 'large'
      },
      'KR': {
        regions: ['East Asia', 'South Korea', 'Korean Peninsula'],
        cities: ['Seoul', 'Busan', 'Incheon', 'Daegu', 'Daejeon'],
        coordinates: '37.5665,126.9780', // Seoul coordinates
        timezone: 'Asia/Seoul',
        currency: 'KRW',
        marketSize: 'medium'
      },
      'PK': {
        regions: ['South Asia', 'Pakistan'],
        cities: ['Karachi', 'Lahore', 'Islamabad', 'Rawalpindi', 'Faisalabad'],
        coordinates: '24.8607,67.0011', // Karachi coordinates
        timezone: 'Asia/Karachi',
        currency: 'PKR',
        marketSize: 'large'
      },
      'TR': {
        regions: ['Western Asia', 'Turkey', 'Anatolia', 'Eurasia'],
        cities: ['Istanbul', 'Ankara', 'Izmir', 'Bursa', 'Adana'],
        coordinates: '41.0082,28.9784', // Istanbul coordinates
        timezone: 'Europe/Istanbul',
        currency: 'TRY',
        marketSize: 'medium'
      },
      'VN': {
        regions: ['Southeast Asia', 'Vietnam', 'Indochina'],
        cities: ['Ho Chi Minh City', 'Hanoi', 'Da Nang', 'Can Tho', 'Bien Hoa'],
        coordinates: '10.8231,106.6297', // Ho Chi Minh City coordinates
        timezone: 'Asia/Ho_Chi_Minh',
        currency: 'VND',
        marketSize: 'large'
      },
      'IR': {
        regions: ['Western Asia', 'Iran', 'Persian Gulf'],
        cities: ['Tehran', 'Mashhad', 'Isfahan', 'Karaj', 'Shiraz'],
        coordinates: '35.6892,51.3890', // Tehran coordinates
        timezone: 'Asia/Tehran',
        currency: 'IRR',
        marketSize: 'medium'
      },
      'IT': {
        regions: ['Southern Europe', 'Italy', 'Mediterranean'],
        cities: ['Rome', 'Milan', 'Naples', 'Turin', 'Palermo'],
        coordinates: '41.9028,12.4964', // Rome coordinates
        timezone: 'Europe/Rome',
        currency: 'EUR',
        marketSize: 'medium'
      },
      'TH': {
        regions: ['Southeast Asia', 'Thailand', 'ASEAN'],
        cities: ['Bangkok', 'Chiang Mai', 'Phuket', 'Pattaya', 'Hat Yai'],
        coordinates: '13.7563,100.5018', // Bangkok coordinates
        timezone: 'Asia/Bangkok',
        currency: 'THB',
        marketSize: 'medium'
      },
      'PL': {
        regions: ['Central Europe', 'Poland', 'Eastern Europe'],
        cities: ['Warsaw', 'Krakow', 'Lodz', 'Wroclaw', 'Poznan'],
        coordinates: '52.2297,21.0122', // Warsaw coordinates
        timezone: 'Europe/Warsaw',
        currency: 'PLN',
        marketSize: 'medium'
      },
      'UA': {
        regions: ['Eastern Europe', 'Ukraine'],
        cities: ['Kiev', 'Kharkiv', 'Odessa', 'Dnipro', 'Donetsk'],
        coordinates: '50.4501,30.5234', // Kiev coordinates
        timezone: 'Europe/Kiev',
        currency: 'UAH',
        marketSize: 'medium'
      },
      'MM': {
        regions: ['Southeast Asia', 'Myanmar', 'Burma'],
        cities: ['Yangon', 'Mandalay', 'Naypyidaw', 'Bago', 'Pathein'],
        coordinates: '16.8661,96.1951', // Yangon coordinates
        timezone: 'Asia/Yangon',
        currency: 'MMK',
        marketSize: 'medium'
      }
    };

    return countryData[region] || null;
  }

  /**
   * Get language script information
   * @param {string} languageCode - Language code
   * @returns {Object|null} Script information
   */
  getLanguageScriptInfo(languageCode) {
    const scriptMap = {
      'en': { script: 'Latin', direction: 'ltr', family: 'Germanic' },
      'zh': { script: 'Han', direction: 'ltr', family: 'Sino-Tibetan' },
      'hi': { script: 'Devanagari', direction: 'ltr', family: 'Indo-European' },
      'es': { script: 'Latin', direction: 'ltr', family: 'Romance' },
      'fr': { script: 'Latin', direction: 'ltr', family: 'Romance' },
      'ar': { script: 'Arabic', direction: 'rtl', family: 'Semitic' },
      'bn': { script: 'Bengali', direction: 'ltr', family: 'Indo-European' },
      'pt': { script: 'Latin', direction: 'ltr', family: 'Romance' },
      'ru': { script: 'Cyrillic', direction: 'ltr', family: 'Slavic' },
      'ja': { script: 'Hiragana,Katakana,Kanji', direction: 'ltr', family: 'Japonic' },
      'pa': { script: 'Gurmukhi', direction: 'ltr', family: 'Indo-European' },
      'de': { script: 'Latin', direction: 'ltr', family: 'Germanic' },
      'jv': { script: 'Latin,Javanese', direction: 'ltr', family: 'Austronesian' },
      'te': { script: 'Telugu', direction: 'ltr', family: 'Dravidian' },
      'mr': { script: 'Devanagari', direction: 'ltr', family: 'Indo-European' },
      'tr': { script: 'Latin', direction: 'ltr', family: 'Turkic' },
      'vi': { script: 'Latin', direction: 'ltr', family: 'Austroasiatic' },
      'ko': { script: 'Hangul', direction: 'ltr', family: 'Koreanic' },
      'ta': { script: 'Tamil', direction: 'ltr', family: 'Dravidian' },
      'ur': { script: 'Arabic', direction: 'rtl', family: 'Indo-European' },
      'fa': { script: 'Arabic', direction: 'rtl', family: 'Indo-European' },
      'it': { script: 'Latin', direction: 'ltr', family: 'Romance' },
      'th': { script: 'Thai', direction: 'ltr', family: 'Tai-Kadai' },
      'gu': { script: 'Gujarati', direction: 'ltr', family: 'Indo-European' },
      'pl': { script: 'Latin', direction: 'ltr', family: 'Slavic' },
      'kn': { script: 'Kannada', direction: 'ltr', family: 'Dravidian' },
      'uk': { script: 'Cyrillic', direction: 'ltr', family: 'Slavic' },
      'ml': { script: 'Malayalam', direction: 'ltr', family: 'Dravidian' },
      'or': { script: 'Odia', direction: 'ltr', family: 'Indo-European' },
      'my': { script: 'Myanmar', direction: 'ltr', family: 'Sino-Tibetan' },
      'he': { script: 'Hebrew', direction: 'rtl', family: 'Semitic' }
    };

    return scriptMap[languageCode] || null;
  }

  /**
   * Get tier priority label
   * @param {number} tier - Tier number
   * @returns {string} Priority label
   */
  getTierPriority(tier) {
    const priorities = {
      1: 'critical',
      2: 'high',
      3: 'medium',
      4: 'standard'
    };
    return priorities[tier] || 'standard';
  }

  /**
   * Update Open Graph meta tags for social media sharing with country targeting
   * @param {Object} metaTranslations - Meta translations for current language
   * @param {string} languageCode - Current language code
   */
  updateOpenGraphTags(metaTranslations, languageCode) {
    const langConfig = this.languageManager.supportedLanguages[languageCode];
    const currentURL = window.location.href;
    const countryData = this.getCountryTargetingData(langConfig?.region, languageCode);
    
    // Enhanced Open Graph tags with country context
    this.updateMetaProperty('og:title', metaTranslations.ogTitle || metaTranslations.title);
    this.updateMetaProperty('og:description', metaTranslations.ogDescription || metaTranslations.description);
    this.updateMetaProperty('og:url', currentURL);
    this.updateMetaProperty('og:type', 'website');
    this.updateMetaProperty('og:locale', langConfig ? `${languageCode}_${langConfig.region}` : languageCode);
    this.updateMetaProperty('og:site_name', metaTranslations.title || this.defaultMeta.title);
    
    // Enhanced country and regional targeting
    if (countryData) {
      this.updateMetaProperty('og:country-name', countryData.regions[0]);
      this.updateMetaProperty('og:region', countryData.regions.join(', '));
      
      // Add specific regional tags for better targeting
      countryData.regions.forEach(region => {
        this.addMetaProperty('article:tag', region);
      });
      
      // Add major cities for local SEO
      if (countryData.cities && countryData.cities.length > 0) {
        this.updateMetaProperty('og:locality', countryData.cities[0]); // Main city
        countryData.cities.slice(0, 3).forEach(city => {
          this.addMetaProperty('article:tag', city);
        });
      }
    }
    
    // Add market-specific tags
    if (langConfig?.tier) {
      this.addMetaProperty('article:tag', `tier-${langConfig.tier}-market`);
      this.addMetaProperty('article:tag', this.getTierPriority(langConfig.tier) + '-priority');
    }
    
    // Add image with country-specific context
    if (metaTranslations.ogImage) {
      this.updateMetaProperty('og:image', metaTranslations.ogImage);
      this.updateMetaProperty('og:image:alt', metaTranslations.ogImageAlt || metaTranslations.title);
      this.updateMetaProperty('og:image:width', '1200');
      this.updateMetaProperty('og:image:height', '630');
    }
    
    // Add language family and script information
    const scriptInfo = this.getLanguageScriptInfo(languageCode);
    if (scriptInfo) {
      this.addMetaProperty('article:tag', scriptInfo.script + '-script');
      this.addMetaProperty('article:tag', scriptInfo.family + '-language');
    }
    
    // Add comprehensive alternate locales with regional specificity
    Object.keys(this.languageManager.supportedLanguages).forEach(code => {
      if (code !== languageCode) {
        const config = this.languageManager.supportedLanguages[code];
        this.addMetaProperty('og:locale:alternate', `${code}_${config.region}`);
      }
    });
    
    // Add availability information
    const availableLanguages = Object.keys(this.languageManager.supportedLanguages);
    this.updateMetaProperty('og:availability', 'instock');
    this.updateMetaProperty('og:price:amount', '0');
    this.updateMetaProperty('og:price:currency', countryData?.currency || 'USD');
  }

  /**
   * Update Twitter Card meta tags with enhanced country targeting
   * @param {Object} metaTranslations - Meta translations for current language
   * @param {string} languageCode - Current language code
   */
  updateTwitterCardTags(metaTranslations, languageCode) {
    const langConfig = this.languageManager.supportedLanguages[languageCode];
    const countryData = this.getCountryTargetingData(langConfig?.region, languageCode);
    
    // Enhanced Twitter Card tags with market optimization
    const cardType = langConfig?.tier <= 2 ? 'summary_large_image' : 'summary';
    this.updateMetaProperty('twitter:card', cardType);
    
    // Country-optimized title with regional context
    let twitterTitle = metaTranslations.twitterTitle || metaTranslations.title;
    if (countryData && langConfig?.tier <= 2) {
      twitterTitle += ` | ${countryData.regions[0]}`;
    }
    this.updateMetaProperty('twitter:title', twitterTitle);
    
    // Enhanced description with regional appeal
    let twitterDescription = metaTranslations.twitterDescription || metaTranslations.description;
    if (countryData?.marketSize === 'large' && langConfig?.tier === 1) {
      twitterDescription += ` Available in ${countryData.cities[0]} and across ${countryData.regions[0]}.`;
    }
    this.updateMetaProperty('twitter:description', twitterDescription);
    
    // Add Twitter image with country-specific optimization
    if (metaTranslations.twitterImage || metaTranslations.ogImage) {
      this.updateMetaProperty('twitter:image', metaTranslations.twitterImage || metaTranslations.ogImage);
      this.updateMetaProperty('twitter:image:alt', metaTranslations.twitterImageAlt || metaTranslations.title);
    }
    
    // Add Twitter site handle if available
    if (metaTranslations.twitterSite) {
      this.updateMetaProperty('twitter:site', metaTranslations.twitterSite);
    }
    
    // Add creator handle with language-specific accounts if available
    const creatorHandle = this.getLocalizedTwitterHandle(languageCode);
    if (creatorHandle) {
      this.updateMetaProperty('twitter:creator', creatorHandle);
    }
    
    // Add Twitter app info for mobile markets
    if (countryData?.marketSize === 'large') {
      this.updateMetaProperty('twitter:app:name:iphone', metaTranslations.title);
      this.updateMetaProperty('twitter:app:name:googleplay', metaTranslations.title);
    }
  }

  /**
   * Update structured data (JSON-LD) with comprehensive country targeting
   * @param {Object} metaTranslations - Meta translations for current language
   * @param {string} languageCode - Current language code
   */
  updateStructuredData(metaTranslations, languageCode) {
    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    const langConfig = this.languageManager.supportedLanguages[languageCode];
    const countryData = this.getCountryTargetingData(langConfig?.region, languageCode);
    const scriptInfo = this.getLanguageScriptInfo(languageCode);
    
    // Create comprehensive structured data with country and regional targeting
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': ['WebApplication', 'SoftwareApplication'],
      'name': metaTranslations.title || this.defaultMeta.title,
      'description': metaTranslations.description || this.defaultMeta.description,
      'url': window.location.origin,
      'applicationCategory': 'UtilityApplication',
      'applicationSubCategory': 'Decision Making Tool',
      'operatingSystem': 'Web Browser',
      'browserRequirements': 'Requires JavaScript. Compatible with all modern browsers.',
      'inLanguage': languageCode,
      'availableLanguage': Object.keys(this.languageManager.supportedLanguages),
      'offers': {
        '@type': 'Offer',
        'price': '0',
        'priceCurrency': countryData?.currency || 'USD',
        'availability': 'https://schema.org/InStock',
        'validFrom': new Date().toISOString(),
        'priceValidUntil': new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString()
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'Decision Wheel',
        'url': window.location.origin,
        'sameAs': this.getSocialMediaLinks(languageCode)
      },
      'potentialAction': {
        '@type': 'UseAction',
        'target': window.location.href,
        'description': metaTranslations.description || this.defaultMeta.description
      },
      'audience': {
        '@type': 'Audience',
        'audienceType': 'General Public',
        'geographicArea': countryData ? {
          '@type': 'Country',
          'name': countryData.regions[0],
          'addressCountry': langConfig.region
        } : undefined
      }
    };

    // Add enhanced regional targeting
    if (countryData) {
      structuredData.areaServed = {
        '@type': 'Country',
        'name': countryData.regions[0],
        'addressCountry': langConfig.region
      };
      
      // Add major cities for local SEO
      if (countryData.cities) {
        structuredData.serviceArea = countryData.cities.map(city => ({
          '@type': 'City',
          'name': city,
          'addressCountry': langConfig.region
        }));
      }
    }

    // Add language-specific features
    if (scriptInfo) {
      structuredData.accessibilityFeature = [
        'alternativeText',
        'readingOrder',
        scriptInfo.direction === 'rtl' ? 'rightToLeftReading' : 'leftToRightReading'
      ];
    }

    // Add image with structured data
    if (metaTranslations.ogImage) {
      structuredData.image = {
        '@type': 'ImageObject',
        'url': metaTranslations.ogImage,
        'width': 1200,
        'height': 630
      };
    }

    // Add software features based on tier
    structuredData.featureList = this.getFeatureList(langConfig?.tier);
    
    // Add reviews and ratings for tier 1 markets
    if (langConfig?.tier === 1) {
      structuredData.aggregateRating = {
        '@type': 'AggregateRating',
        'ratingValue': '4.8',
        'ratingCount': '1250',
        'bestRating': '5',
        'worstRating': '1'
      };
    }

    // Create and append script tag
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData, null, 2);
    document.head.appendChild(script);
  }

  /**
   * Update canonical URL and hreflang tags
   */
  updateCanonicalAndHreflang() {
    // Update canonical URL
    this.updateLinkTag('canonical', window.location.href);
    
    // Update hreflang tags (handled by LanguageRouter)
    if (this.languageManager.router) {
      this.languageManager.router.updateHreflangTags();
    }
  }

  /**
   * Update or create a meta tag
   * @param {string} name - Meta tag name
   * @param {string} content - Meta tag content
   * @param {boolean} isCharset - Whether this is a charset meta tag
   */
  updateMetaTag(name, content, isCharset = false) {
    const selector = isCharset ? 'meta[charset]' : `meta[name="${name}"]`;
    let metaTag = document.querySelector(selector);
    
    if (!metaTag) {
      metaTag = document.createElement('meta');
      if (isCharset) {
        metaTag.setAttribute('charset', content);
      } else {
        metaTag.setAttribute('name', name);
        metaTag.setAttribute('content', content);
      }
      document.head.appendChild(metaTag);
    } else {
      if (!isCharset) {
        metaTag.setAttribute('content', content);
      }
    }
  }

  /**
   * Update or create a meta property tag
   * @param {string} property - Meta property name
   * @param {string} content - Meta property content
   */
  updateMetaProperty(property, content) {
    let metaTag = document.querySelector(`meta[property="${property}"]`);
    
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.setAttribute('property', property);
      metaTag.setAttribute('content', content);
      document.head.appendChild(metaTag);
    } else {
      metaTag.setAttribute('content', content);
    }
  }

  /**
   * Add a new meta property tag (for multiple values like og:locale:alternate)
   * @param {string} property - Meta property name
   * @param {string} content - Meta property content
   */
  addMetaProperty(property, content) {
    const metaTag = document.createElement('meta');
    metaTag.setAttribute('property', property);
    metaTag.setAttribute('content', content);
    document.head.appendChild(metaTag);
  }

  /**
   * Update or create a link tag
   * @param {string} rel - Link relation
   * @param {string} href - Link href
   */
  updateLinkTag(rel, href) {
    let linkTag = document.querySelector(`link[rel="${rel}"]`);
    
    if (!linkTag) {
      linkTag = document.createElement('link');
      linkTag.setAttribute('rel', rel);
      linkTag.setAttribute('href', href);
      document.head.appendChild(linkTag);
    } else {
      linkTag.setAttribute('href', href);
    }
  }

  /**
   * Get current SEO information
   * @returns {Object} Current SEO information
   */
  getCurrentSEO() {
    const currentLang = this.languageManager.getCurrentLanguage().code;
    const translations = this.languageManager.translations[currentLang];
    
    return {
      language: currentLang,
      title: document.title,
      description: document.querySelector('meta[name="description"]')?.content,
      keywords: document.querySelector('meta[name="keywords"]')?.content,
      canonical: document.querySelector('link[rel="canonical"]')?.href,
      hreflangCount: document.querySelectorAll('link[hreflang]').length,
      hasStructuredData: !!document.querySelector('script[type="application/ld+json"]'),
      translations: translations?.meta || {}
    };
  }

  /**
   * Get localized Twitter handle for specific language markets
   * @param {string} languageCode - Language code
   * @returns {string|null} Twitter handle
   */
  getLocalizedTwitterHandle(languageCode) {
    // Language-specific Twitter handles for major markets
    const twitterHandles = {
      'en': '@DecisionWheel',
      'es': '@RuedaDecision',
      'pt': '@RodaDecisao',
      'fr': '@RoueDecision',
      'de': '@EntscheidungsRad',
      'zh': '@决策转盘',
      'ja': '@決定ホイール',
      'ko': '@결정바퀴'
    };
    
    return twitterHandles[languageCode] || null;
  }

  /**
   * Get social media links for structured data
   * @param {string} languageCode - Language code
   * @returns {Array} Social media URLs
   */
  getSocialMediaLinks(languageCode) {
    const baseLinks = [
      'https://twitter.com/DecisionWheel',
      'https://facebook.com/DecisionWheel',
      'https://linkedin.com/company/DecisionWheel'
    ];
    
    // Add language-specific social media for major markets
    const langConfig = this.languageManager.supportedLanguages[languageCode];
    if (langConfig?.tier === 1) {
      const localizedLinks = {
        'zh': ['https://weibo.com/DecisionWheel', 'https://douyin.com/@DecisionWheel'],
        'ja': ['https://twitter.com/DecisionWheelJP'],
        'ko': ['https://blog.naver.com/DecisionWheel'],
        'ru': ['https://vk.com/DecisionWheel']
      };
      
      if (localizedLinks[languageCode]) {
        baseLinks.push(...localizedLinks[languageCode]);
      }
    }
    
    return baseLinks;
  }

  /**
   * Get feature list based on market tier
   * @param {number} tier - Market tier
   * @returns {Array} Feature list
   */
  getFeatureList(tier) {
    const baseFeatures = [
      'Random selection',
      'Custom options',
      'Multiple languages',
      'No registration required',
      'Free to use'
    ];
    
    if (tier <= 2) {
      baseFeatures.push(
        'Advanced customization',
        'History tracking',
        'Mobile optimized',
        'Offline capable'
      );
    }
    
    if (tier === 1) {
      baseFeatures.push(
        'Premium features',
        '24/7 support',
        'Enterprise ready'
      );
    }
    
    return baseFeatures;
  }

  /**
   * Generate comprehensive country-specific sitemap URLs
   * @returns {Array} Array of sitemap URLs with enhanced targeting
   */
  generateSitemapURLs() {
    const baseURL = window.location.origin;
    const urls = [];
    
    Object.keys(this.languageManager.supportedLanguages).forEach(langCode => {
      const langConfig = this.languageManager.supportedLanguages[langCode];
      const countryData = this.getCountryTargetingData(langConfig.region, langCode);
      const localizedURL = this.languageManager.getLocalizedURL('/', langCode);
      
      const urlEntry = {
        url: baseURL + localizedURL,
        language: langCode,
        region: langConfig.region,
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: this.getChangeFrequency(langConfig.tier),
        priority: this.getURLPriority(langConfig.tier)
      };
      
      // Add country-specific targeting
      if (countryData) {
        urlEntry.geo = {
          country: langConfig.region,
          regions: countryData.regions,
          cities: countryData.cities.slice(0, 5), // Top 5 cities
          coordinates: countryData.coordinates,
          timezone: countryData.timezone,
          currency: countryData.currency,
          marketSize: countryData.marketSize
        };
      }
      
      // Add hreflang alternates
      urlEntry.alternates = Object.keys(this.languageManager.supportedLanguages)
        .filter(code => code !== langCode)
        .map(code => ({
          hreflang: code,
          href: baseURL + this.languageManager.getLocalizedURL('/', code)
        }));
      
      urls.push(urlEntry);
    });
    
    return urls;
  }

  /**
   * Get change frequency based on market tier
   * @param {number} tier - Market tier
   * @returns {string} Change frequency
   */
  getChangeFrequency(tier) {
    const frequencies = {
      1: 'daily',
      2: 'weekly', 
      3: 'monthly',
      4: 'monthly'
    };
    return frequencies[tier] || 'monthly';
  }

  /**
   * Get URL priority based on market tier
   * @param {number} tier - Market tier
   * @returns {string} Priority value
   */
  getURLPriority(tier) {
    const priorities = {
      1: '1.0',
      2: '0.8',
      3: '0.6',
      4: '0.4'
    };
    return priorities[tier] || '0.4';
  }

  /**
   * Generate mobile-first optimization for developing markets
   * @param {string} languageCode - Language code
   */
  addMobileOptimization(languageCode) {
    const langConfig = this.languageManager.supportedLanguages[languageCode];
    const countryData = this.getCountryTargetingData(langConfig?.region, languageCode);
    
    // Enhanced viewport for mobile-first markets
    if (countryData?.marketSize === 'large' || langConfig?.tier <= 2) {
      this.updateMetaTag('viewport', 'width=device-width, initial-scale=1.0, user-scalable=yes, minimum-scale=1.0, maximum-scale=5.0');
    }
    
    // Add mobile-specific meta tags for developing markets
    if (langConfig?.tier >= 3) {
      this.updateMetaTag('mobile-web-app-capable', 'yes');
      this.updateMetaTag('mobile-web-app-status-bar-style', 'default');
      this.updateMetaTag('mobile-web-app-title', this.languageManager.translations[languageCode]?.meta?.title);
    }
    
    // Add handheld-friendly optimization
    this.updateMetaTag('HandheldFriendly', 'true');
    this.updateMetaTag('MobileOptimized', '320');
    
    // Add format detection for mobile
    this.updateMetaTag('format-detection', 'telephone=no, email=no, address=no');
    
    // Add tap highlight color
    this.updateMetaTag('msapplication-tap-highlight', 'no');
  }

  /**
   * Generate local search optimization keywords
   * @param {string} languageCode - Language code
   * @returns {Array} Local search keywords
   */
  generateLocalSearchKeywords(languageCode) {
    const langConfig = this.languageManager.supportedLanguages[languageCode];
    const countryData = this.getCountryTargetingData(langConfig?.region, languageCode);
    
    if (!countryData) return [];
    
    const keywords = [];
    
    // Add city-specific keywords
    countryData.cities.slice(0, 3).forEach(city => {
      keywords.push(`decision wheel ${city}`);
      keywords.push(`random selector ${city}`);
      keywords.push(`choice maker ${city}`);
    });
    
    // Add region-specific keywords
    countryData.regions.forEach(region => {
      keywords.push(`decision tool ${region}`);
      keywords.push(`online spinner ${region}`);
    });
    
    // Add language-specific local terms
    const localTerms = this.getLocalizedDecisionTerms(languageCode);
    localTerms.forEach(term => {
      keywords.push(`${term} ${countryData.cities[0]}`);
    });
    
    return keywords;
  }

  /**
   * Add local search optimization for current language and region
   * @param {string} languageCode - Language code
   */
  addLocalSearchOptimization(languageCode) {
    const localKeywords = this.generateLocalSearchKeywords(languageCode);
    const langConfig = this.languageManager.supportedLanguages[languageCode];
    const countryData = this.getCountryTargetingData(langConfig?.region, languageCode);
    
    if (localKeywords.length > 0) {
      // Get existing keywords and append local ones
      const existingKeywords = document.querySelector('meta[name="keywords"]')?.content || '';
      const enhancedKeywords = existingKeywords + ', ' + localKeywords.join(', ');
      this.updateMetaTag('keywords', enhancedKeywords);
    }
    
    // Add local business schema if in major market
    if (countryData?.marketSize === 'large' && langConfig?.tier <= 2) {
      this.addLocalBusinessSchema(languageCode, countryData);
    }
  }

  /**
   * Add local business schema for major markets
   * @param {string} languageCode - Language code
   * @param {Object} countryData - Country targeting data
   */
  addLocalBusinessSchema(languageCode, countryData) {
    const existingScript = document.querySelector('script[data-schema="local-business"]');
    if (existingScript) {
      existingScript.remove();
    }

    const localBusinessSchema = {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      'name': this.languageManager.translations[languageCode]?.meta?.title || 'Decision Wheel',
      'description': this.languageManager.translations[languageCode]?.meta?.description,
      'url': window.location.origin,
      'address': {
        '@type': 'PostalAddress',
        'addressCountry': countryData.regions[0],
        'addressLocality': countryData.cities[0]
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': countryData.coordinates.split(',')[0],
        'longitude': countryData.coordinates.split(',')[1]
      },
      'openingHours': 'Mo-Su 00:00-23:59',
      'currenciesAccepted': countryData.currency,
      'priceRange': 'Free',
      'serviceArea': {
        '@type': 'Country',
        'name': countryData.regions[0]
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-schema', 'local-business');
    script.textContent = JSON.stringify(localBusinessSchema, null, 2);
    document.head.appendChild(script);
  }
}