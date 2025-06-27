/**
 * Language Router - Advanced Multi-Language Routing System
 * Handles URL routing, language detection, and SEO optimization for 8 languages
 */

export class LanguageRouter {
  constructor() {
    // 40 Supported languages with comprehensive global coverage
    this.supportedLanguages = {
      // Tier 1: Major Global Languages (Critical Markets)
      'en': { code: 'en', name: 'English', nativeName: 'English', region: 'US', fullCode: 'en-US', rtl: false, default: true, flag: '🇺🇸', speakers: 1500000000, tier: 1 },
      'zh': { code: 'zh', name: 'Chinese', nativeName: '中文', region: 'CN', fullCode: 'zh-CN', rtl: false, flag: '🇨🇳', speakers: 918000000, tier: 1 },
      'hi': { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', region: 'IN', fullCode: 'hi-IN', rtl: false, flag: '🇮🇳', speakers: 602000000, tier: 1 },
      'es': { code: 'es', name: 'Spanish', nativeName: 'Español', region: 'ES', fullCode: 'es-ES', rtl: false, flag: '🇪🇸', speakers: 559000000, tier: 1 },
      'fr': { code: 'fr', name: 'French', nativeName: 'Français', region: 'FR', fullCode: 'fr-FR', rtl: false, flag: '🇫🇷', speakers: 280000000, tier: 1 },
      'ar': { code: 'ar', name: 'Arabic', nativeName: 'العربية', region: 'SA', fullCode: 'ar-SA', rtl: true, flag: '🇸🇦', speakers: 422000000, tier: 1 },
      'bn': { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', region: 'BD', fullCode: 'bn-BD', rtl: false, flag: '🇧🇩', speakers: 300000000, tier: 1 },
      'pt': { code: 'pt', name: 'Portuguese', nativeName: 'Português', region: 'BR', fullCode: 'pt-BR', rtl: false, flag: '🇧🇷', speakers: 260000000, tier: 1 },
      'ru': { code: 'ru', name: 'Russian', nativeName: 'Русский', region: 'RU', fullCode: 'ru-RU', rtl: false, flag: '🇷🇺', speakers: 258000000, tier: 1 },
      'ja': { code: 'ja', name: 'Japanese', nativeName: '日本語', region: 'JP', fullCode: 'ja-JP', rtl: false, flag: '🇯🇵', speakers: 125000000, tier: 1 },
      
      // Tier 2: Regional Powerhouses (High Priority Markets)
      'pa': { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ', region: 'IN', fullCode: 'pa-IN', rtl: false, flag: '🇮🇳', speakers: 113000000, tier: 2 },
      'de': { code: 'de', name: 'German', nativeName: 'Deutsch', region: 'DE', fullCode: 'de-DE', rtl: false, flag: '🇩🇪', speakers: 100000000, tier: 2 },
      'jv': { code: 'jv', name: 'Javanese', nativeName: 'Basa Jawa', region: 'ID', fullCode: 'jv-ID', rtl: false, flag: '🇮🇩', speakers: 98000000, tier: 2 },
      'ko': { code: 'ko', name: 'Korean', nativeName: '한국어', region: 'KR', fullCode: 'ko-KR', rtl: false, flag: '🇰🇷', speakers: 81000000, tier: 2 },
      'te': { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', region: 'IN', fullCode: 'te-IN', rtl: false, flag: '🇮🇳', speakers: 96000000, tier: 2 },
      'vi': { code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', region: 'VN', fullCode: 'vi-VN', rtl: false, flag: '🇻🇳', speakers: 85000000, tier: 2 },
      'mr': { code: 'mr', name: 'Marathi', nativeName: 'मराठी', region: 'IN', fullCode: 'mr-IN', rtl: false, flag: '🇮🇳', speakers: 95000000, tier: 2 },
      'ta': { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', region: 'IN', fullCode: 'ta-IN', rtl: false, flag: '🇮🇳', speakers: 78000000, tier: 2 },
      'ur': { code: 'ur', name: 'Urdu', nativeName: 'اردو', region: 'PK', fullCode: 'ur-PK', rtl: true, flag: '🇵🇰', speakers: 70000000, tier: 2 },
      'tr': { code: 'tr', name: 'Turkish', nativeName: 'Türkçe', region: 'TR', fullCode: 'tr-TR', rtl: false, flag: '🇹🇷', speakers: 88000000, tier: 2 },
      
      // Tier 3: Major European & Asian Languages (Medium Priority Markets)
      'it': { code: 'it', name: 'Italian', nativeName: 'Italiano', region: 'IT', fullCode: 'it-IT', rtl: false, flag: '🇮🇹', speakers: 65000000, tier: 3 },
      'th': { code: 'th', name: 'Thai', nativeName: 'ไทย', region: 'TH', fullCode: 'th-TH', rtl: false, flag: '🇹🇭', speakers: 61000000, tier: 3 },
      'gu': { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી', region: 'IN', fullCode: 'gu-IN', rtl: false, flag: '🇮🇳', speakers: 56000000, tier: 3 },
      'pl': { code: 'pl', name: 'Polish', nativeName: 'Polski', region: 'PL', fullCode: 'pl-PL', rtl: false, flag: '🇵🇱', speakers: 50000000, tier: 3 },
      'uk': { code: 'uk', name: 'Ukrainian', nativeName: 'Українська', region: 'UA', fullCode: 'uk-UA', rtl: false, flag: '🇺🇦', speakers: 41000000, tier: 3 },
      'fa': { code: 'fa', name: 'Persian', nativeName: 'فارسی', region: 'IR', fullCode: 'fa-IR', rtl: true, flag: '🇮🇷', speakers: 70000000, tier: 3 },
      'ml': { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം', region: 'IN', fullCode: 'ml-IN', rtl: false, flag: '🇮🇳', speakers: 38000000, tier: 3 },
      'kn': { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ', region: 'IN', fullCode: 'kn-IN', rtl: false, flag: '🇮🇳', speakers: 44000000, tier: 3 },
      'or': { code: 'or', name: 'Odia', nativeName: 'ଓଡ଼ିଆ', region: 'IN', fullCode: 'or-IN', rtl: false, flag: '🇮🇳', speakers: 38000000, tier: 3 },
      'my': { code: 'my', name: 'Burmese', nativeName: 'မြန်မာ', region: 'MM', fullCode: 'my-MM', rtl: false, flag: '🇲🇲', speakers: 33000000, tier: 3 },
      
      // Tier 4: Strategic Markets (Emerging & Specialized Markets)
      'nl': { code: 'nl', name: 'Dutch', nativeName: 'Nederlands', region: 'NL', fullCode: 'nl-NL', rtl: false, flag: '🇳🇱', speakers: 25000000, tier: 4 },
      'sw': { code: 'sw', name: 'Swahili', nativeName: 'Kiswahili', region: 'KE', fullCode: 'sw-KE', rtl: false, flag: '🇰🇪', speakers: 20000000, tier: 4 },
      'ro': { code: 'ro', name: 'Romanian', nativeName: 'Română', region: 'RO', fullCode: 'ro-RO', rtl: false, flag: '🇷🇴', speakers: 24000000, tier: 4 },
      'cs': { code: 'cs', name: 'Czech', nativeName: 'Čeština', region: 'CZ', fullCode: 'cs-CZ', rtl: false, flag: '🇨🇿', speakers: 13000000, tier: 4 },
      'hu': { code: 'hu', name: 'Hungarian', nativeName: 'Magyar', region: 'HU', fullCode: 'hu-HU', rtl: false, flag: '🇭🇺', speakers: 13000000, tier: 4 },
      'he': { code: 'he', name: 'Hebrew', nativeName: 'עברית', region: 'IL', fullCode: 'he-IL', rtl: true, flag: '🇮🇱', speakers: 9000000, tier: 4 },
      'sv': { code: 'sv', name: 'Swedish', nativeName: 'Svenska', region: 'SE', fullCode: 'sv-SE', rtl: false, flag: '🇸🇪', speakers: 10000000, tier: 4 },
      'da': { code: 'da', name: 'Danish', nativeName: 'Dansk', region: 'DK', fullCode: 'da-DK', rtl: false, flag: '🇩🇰', speakers: 6000000, tier: 4 },
      'no': { code: 'no', name: 'Norwegian', nativeName: 'Norsk', region: 'NO', fullCode: 'no-NO', rtl: false, flag: '🇳🇴', speakers: 5000000, tier: 4 },
      'fi': { code: 'fi', name: 'Finnish', nativeName: 'Suomi', region: 'FI', fullCode: 'fi-FI', rtl: false, flag: '🇫🇮', speakers: 5000000, tier: 4 },
      'el': { code: 'el', name: 'Greek', nativeName: 'Ελληνικά', region: 'GR', fullCode: 'el-GR', rtl: false, flag: '🇬🇷', speakers: 13000000, tier: 4 }
    };

    this.currentLanguage = 'en';
    this.defaultLanguage = 'en';
    this.basePath = '';
    
    this.init();
  }

  /**
   * Initialize the language router
   */
  init() {
    this.detectLanguageFromURL();
    this.setupURLHandling();
    this.updateDocumentLanguage();
  }

  /**
   * Detect language from current URL
   * Supports patterns: /es/, /en/, /pt/, etc.
   */
  detectLanguageFromURL() {
    const path = window.location.pathname;
    const segments = path.split('/').filter(Boolean);
    
    if (segments.length > 0) {
      const potentialLang = segments[0].toLowerCase();
      if (this.supportedLanguages[potentialLang]) {
        this.currentLanguage = potentialLang;
        this.basePath = `/${potentialLang}`;
        return;
      }
    }
    
    // If no language in URL, detect from browser or use default
    this.currentLanguage = this.detectBrowserLanguage();
    this.basePath = this.currentLanguage === this.defaultLanguage ? '' : `/${this.currentLanguage}`;
  }

  /**
   * Detect user's preferred language from browser settings
   */
  detectBrowserLanguage() {
    const browserLangs = navigator.languages || [navigator.language || navigator.userLanguage];
    
    for (const browserLang of browserLangs) {
      // Check exact match first (e.g., 'es-ES')
      for (const [code, config] of Object.entries(this.supportedLanguages)) {
        if (browserLang.toLowerCase() === config.fullCode.toLowerCase()) {
          return code;
        }
      }
      
      // Check language code only (e.g., 'es' from 'es-MX')
      const langCode = browserLang.split('-')[0].toLowerCase();
      if (this.supportedLanguages[langCode]) {
        return langCode;
      }
    }
    
    return this.defaultLanguage;
  }

  /**
   * Setup URL handling for language routing
   */
  setupURLHandling() {
    // Handle initial URL if language is not in path
    if (this.currentLanguage !== this.defaultLanguage && !window.location.pathname.startsWith(`/${this.currentLanguage}`)) {
      this.redirectToLanguage(this.currentLanguage);
    }

    // Setup popstate handling for browser navigation
    window.addEventListener('popstate', (event) => {
      this.detectLanguageFromURL();
      this.updateDocumentLanguage();
      
      // Emit language change event
      this.emitLanguageChange();
    });
  }

  /**
   * Redirect to specific language URL
   */
  redirectToLanguage(langCode, preservePath = true) {
    if (!this.supportedLanguages[langCode]) return;
    
    const currentPath = window.location.pathname;
    const currentSearch = window.location.search;
    const currentHash = window.location.hash;
    
    let newPath;
    
    if (preservePath) {
      // Remove current language prefix if exists
      const cleanPath = currentPath.replace(/^\/[a-z]{2}(\/|$)/, '/');
      // Add new language prefix (except for default language)
      newPath = langCode === this.defaultLanguage ? cleanPath : `/${langCode}${cleanPath}`;
    } else {
      newPath = langCode === this.defaultLanguage ? '/' : `/${langCode}/`;
    }
    
    // Ensure path starts with /
    if (!newPath.startsWith('/')) newPath = '/' + newPath;
    
    const newURL = newPath + currentSearch + currentHash;
    
    // Use pushState to avoid page reload
    window.history.pushState({}, '', newURL);
    
    // Update current language
    this.currentLanguage = langCode;
    this.basePath = langCode === this.defaultLanguage ? '' : `/${langCode}`;
    
    this.updateDocumentLanguage();
    this.updateHreflangTags(); // Update hreflang tags when language changes
    this.emitLanguageChange();
  }

  /**
   * Update document language attributes
   */
  updateDocumentLanguage() {
    const config = this.supportedLanguages[this.currentLanguage];
    if (!config) return;
    
    // Update html lang attribute
    document.documentElement.lang = config.fullCode;
    
    // Update dir attribute for RTL languages
    document.documentElement.dir = config.rtl ? 'rtl' : 'ltr';
    
    // Add language class for CSS targeting
    document.documentElement.className = document.documentElement.className
      .replace(/\blang-[a-z]{2}\b/g, '') + ` lang-${config.code}`;
  }

  /**
   * Emit language change event for components to listen
   */
  emitLanguageChange() {
    const event = new CustomEvent('languageChanged', {
      detail: {
        language: this.currentLanguage,
        config: this.supportedLanguages[this.currentLanguage],
        basePath: this.basePath
      }
    });
    
    document.dispatchEvent(event);
  }

  /**
   * Get current language info
   */
  getCurrentLanguage() {
    return {
      code: this.currentLanguage,
      config: this.supportedLanguages[this.currentLanguage],
      basePath: this.basePath
    };
  }

  /**
   * Get all supported languages
   */
  getSupportedLanguages() {
    return this.supportedLanguages;
  }

  /**
   * Generate advanced hreflang links with comprehensive country targeting
   * Implements Google's best practices for international SEO
   */
  generateHreflangLinks() {
    const currentPath = window.location.pathname.replace(/^\/[a-z]{2}(\/|$)/, '/');
    const links = [];
    const addedLanguages = new Set();
    
    // Sort languages by tier and speaker count for optimal indexing
    const sortedLanguages = Object.entries(this.supportedLanguages)
      .sort((a, b) => {
        // Primary sort by tier (1-4)
        if (a[1].tier !== b[1].tier) {
          return a[1].tier - b[1].tier;
        }
        // Secondary sort by speaker count (descending)
        return (b[1].speakers || 0) - (a[1].speakers || 0);
      });
    
    // Add primary country-specific hreflang links
    for (const [code, config] of sortedLanguages) {
      const href = code === this.defaultLanguage 
        ? currentPath 
        : `/${code}${currentPath}`;
      
      // Primary country-specific link
      links.push({
        rel: 'alternate',
        hreflang: config.fullCode,
        href: window.location.origin + href,
        tier: config.tier,
        speakers: config.speakers,
        region: config.region
      });
      
      addedLanguages.add(code);
    }
    
    // Add regional variants for major languages
    this.addRegionalVariants(links, currentPath, addedLanguages);
    
    // Add language-only fallbacks for better coverage
    this.addLanguageFallbacks(links, currentPath, addedLanguages);
    
    // Add x-default pointing to primary language/region
    const defaultHref = currentPath;
    links.push({
      rel: 'alternate',
      hreflang: 'x-default',
      href: window.location.origin + defaultHref,
      tier: 1,
      primary: true
    });
    
    return links;
  }

  /**
   * Add regional variants for major languages with multiple country markets
   * @param {Array} links - Links array to append to
   * @param {string} currentPath - Current clean path
   * @param {Set} addedLanguages - Set of already added language codes
   */
  addRegionalVariants(links, currentPath, addedLanguages) {
    const regionalVariants = {
      // English variants for major English-speaking markets
      'en': [
        { region: 'GB', fullCode: 'en-GB', priority: 'high' },
        { region: 'CA', fullCode: 'en-CA', priority: 'high' },
        { region: 'AU', fullCode: 'en-AU', priority: 'medium' },
        { region: 'IN', fullCode: 'en-IN', priority: 'high' },
        { region: 'ZA', fullCode: 'en-ZA', priority: 'medium' }
      ],
      // Spanish variants for major Spanish-speaking markets
      'es': [
        { region: 'MX', fullCode: 'es-MX', priority: 'high' },
        { region: 'AR', fullCode: 'es-AR', priority: 'high' },
        { region: 'CO', fullCode: 'es-CO', priority: 'medium' },
        { region: 'US', fullCode: 'es-US', priority: 'high' }
      ],
      // Portuguese variants
      'pt': [
        { region: 'PT', fullCode: 'pt-PT', priority: 'medium' }
      ],
      // French variants
      'fr': [
        { region: 'CA', fullCode: 'fr-CA', priority: 'medium' },
        { region: 'BE', fullCode: 'fr-BE', priority: 'low' },
        { region: 'CH', fullCode: 'fr-CH', priority: 'low' }
      ],
      // Arabic variants for different regions
      'ar': [
        { region: 'EG', fullCode: 'ar-EG', priority: 'high' },
        { region: 'AE', fullCode: 'ar-AE', priority: 'medium' },
        { region: 'JO', fullCode: 'ar-JO', priority: 'medium' }
      ],
      // Chinese variants
      'zh': [
        { region: 'TW', fullCode: 'zh-TW', priority: 'high' },
        { region: 'HK', fullCode: 'zh-HK', priority: 'medium' },
        { region: 'SG', fullCode: 'zh-SG', priority: 'medium' }
      ],
      // German variants
      'de': [
        { region: 'AT', fullCode: 'de-AT', priority: 'medium' },
        { region: 'CH', fullCode: 'de-CH', priority: 'medium' }
      ]
    };
    
    Object.entries(regionalVariants).forEach(([langCode, variants]) => {
      if (addedLanguages.has(langCode)) {
        const baseConfig = this.supportedLanguages[langCode];
        const href = langCode === this.defaultLanguage ? currentPath : `/${langCode}${currentPath}`;
        
        variants.forEach(variant => {
          // Only add high and medium priority variants for tier 1-2 languages
          if (baseConfig.tier <= 2 || variant.priority === 'high') {
            links.push({
              rel: 'alternate',
              hreflang: variant.fullCode,
              href: window.location.origin + href,
              tier: baseConfig.tier,
              priority: variant.priority,
              variant: true,
              baseLanguage: langCode
            });
          }
        });
      }
    });
  }

  /**
   * Add language-only fallbacks for broader coverage
   * @param {Array} links - Links array to append to
   * @param {string} currentPath - Current clean path
   * @param {Set} addedLanguages - Set of already added language codes
   */
  addLanguageFallbacks(links, currentPath, addedLanguages) {
    addedLanguages.forEach(langCode => {
      const config = this.supportedLanguages[langCode];
      const href = langCode === this.defaultLanguage ? currentPath : `/${langCode}${currentPath}`;
      
      // Add language-only hreflang for tier 1-2 languages
      if (config.tier <= 2) {
        links.push({
          rel: 'alternate',
          hreflang: langCode,
          href: window.location.origin + href,
          tier: config.tier,
          fallback: true,
          baseLanguage: langCode
        });
      }
    });
  }

  /**
   * Update hreflang meta tags with advanced optimization
   */
  updateHreflangTags() {
    // Remove existing hreflang tags
    const existingTags = document.querySelectorAll('link[hreflang]');
    existingTags.forEach(tag => tag.remove());
    
    // Generate optimized hreflang links
    const links = this.generateHreflangLinks();
    const head = document.head;
    
    // Add hreflang tags in order of priority
    links.forEach((linkData, index) => {
      const link = document.createElement('link');
      link.rel = linkData.rel;
      link.hreflang = linkData.hreflang;
      link.href = linkData.href;
      
      // Add data attributes for debugging and analytics
      if (linkData.tier) {
        link.setAttribute('data-tier', linkData.tier);
      }
      if (linkData.priority) {
        link.setAttribute('data-priority', linkData.priority);
      }
      if (linkData.variant) {
        link.setAttribute('data-variant', 'true');
      }
      if (linkData.fallback) {
        link.setAttribute('data-fallback', 'true');
      }
      
      head.appendChild(link);
    });
    
    console.log(`Added ${links.length} hreflang tags for comprehensive international SEO`);
  }

  /**
   * Generate localized URL for a given path
   */
  getLocalizedURL(path = '/', langCode = null) {
    const targetLang = langCode || this.currentLanguage;
    const config = this.supportedLanguages[targetLang];
    
    if (!config) return path;
    
    // Remove leading slash if present
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    
    if (targetLang === this.defaultLanguage) {
      return `/${cleanPath}`;
    } else {
      return `/${targetLang}/${cleanPath}`;
    }
  }

  /**
   * Check if current path matches a pattern
   */
  matchesRoute(pattern) {
    const currentPath = window.location.pathname.replace(/^\/[a-z]{2}(\/|$)/, '/');
    return new RegExp(pattern).test(currentPath);
  }

  /**
   * Get clean path without language prefix
   */
  getCleanPath() {
    return window.location.pathname.replace(/^\/[a-z]{2}(\/|$)/, '/');
  }

  /**
   * Generate comprehensive sitemap data for all language variants
   * @returns {Object} Sitemap data organized by tier and region
   */
  generateSitemapData() {
    const baseURL = window.location.origin;
    const sitemapData = {
      byTier: { 1: [], 2: [], 3: [], 4: [] },
      byRegion: {},
      total: 0
    };
    
    Object.entries(this.supportedLanguages).forEach(([code, config]) => {
      const href = code === this.defaultLanguage ? '/' : `/${code}/`;
      const urlData = {
        url: baseURL + href,
        language: code,
        region: config.region,
        tier: config.tier,
        speakers: config.speakers,
        lastmod: new Date().toISOString().split('T')[0],
        changefreq: this.getChangeFrequency(config.tier),
        priority: this.getSitemapPriority(config.tier),
        alternates: this.generateAlternatesForLanguage(code)
      };
      
      // Organize by tier
      sitemapData.byTier[config.tier].push(urlData);
      
      // Organize by region
      if (!sitemapData.byRegion[config.region]) {
        sitemapData.byRegion[config.region] = [];
      }
      sitemapData.byRegion[config.region].push(urlData);
      
      sitemapData.total++;
    });
    
    return sitemapData;
  }

  /**
   * Get change frequency based on tier
   * @param {number} tier - Language tier
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
   * Get sitemap priority based on tier
   * @param {number} tier - Language tier
   * @returns {string} Priority value
   */
  getSitemapPriority(tier) {
    const priorities = {
      1: '1.0',
      2: '0.8',
      3: '0.6',
      4: '0.4'
    };
    return priorities[tier] || '0.4';
  }

  /**
   * Generate alternate URLs for a specific language
   * @param {string} targetLang - Target language code
   * @returns {Array} Alternate URLs
   */
  generateAlternatesForLanguage(targetLang) {
    const alternates = [];
    
    Object.entries(this.supportedLanguages).forEach(([code, config]) => {
      if (code !== targetLang) {
        const href = code === this.defaultLanguage ? '/' : `/${code}/`;
        alternates.push({
          hreflang: config.fullCode,
          href: window.location.origin + href,
          tier: config.tier
        });
      }
    });
    
    return alternates.sort((a, b) => a.tier - b.tier);
  }

  /**
   * Get tier information for analytics and optimization
   * @returns {Object} Tier statistics
   */
  getTierStatistics() {
    const stats = { 1: 0, 2: 0, 3: 0, 4: 0, total: 0 };
    
    Object.values(this.supportedLanguages).forEach(config => {
      stats[config.tier]++;
      stats.total++;
    });
    
    return {
      tierCounts: stats,
      coverage: {
        critical: stats[1], // Tier 1
        high: stats[2],     // Tier 2  
        medium: stats[3],   // Tier 3
        standard: stats[4]  // Tier 4
      },
      totalLanguages: stats.total
    };
  }
}