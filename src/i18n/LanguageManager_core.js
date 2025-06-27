/**
 * Enhanced Language Manager - Advanced Internationalization System
 * Handles automatic language detection, translation loading, URL routing, and SEO optimization
 * Supports 8 major languages with complete localization features
 */

import { LanguageRouter } from './LanguageRouter.js';

/**
 * Enhanced Language Manager Class
 * Manages internationalization across the entire application with routing integration
 */
export class LanguageManager {
  constructor() {
    // Enhanced supported languages configuration (40 languages for global coverage)
    this.supportedLanguages = {
      // Tier 1: Major Global Languages (10 languages)
      'en': { name: 'English', nativeName: 'English', flag: '🇺🇸', rtl: false, region: 'US', speakers: 1500000000, tier: 1 },
      'zh': { name: 'Chinese', nativeName: '中文', flag: '🇨🇳', rtl: false, region: 'CN', speakers: 918000000, tier: 1 },
      'hi': { name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳', rtl: false, region: 'IN', speakers: 602000000, tier: 1 },
      'es': { name: 'Spanish', nativeName: 'Español', flag: '🇪🇸', rtl: false, region: 'ES', speakers: 559000000, tier: 1 },
      'fr': { name: 'French', nativeName: 'Français', flag: '🇫🇷', rtl: false, region: 'FR', speakers: 280000000, tier: 1 },
      'ar': { name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦', rtl: true, region: 'SA', speakers: 422000000, tier: 1 },
      'bn': { name: 'Bengali', nativeName: 'বাংলা', flag: '🇧🇩', rtl: false, region: 'BD', speakers: 300000000, tier: 1 },
      'pt': { name: 'Portuguese', nativeName: 'Português', flag: '🇧🇷', rtl: false, region: 'BR', speakers: 260000000, tier: 1 },
      'ru': { name: 'Russian', nativeName: 'Русский', flag: '🇷🇺', rtl: false, region: 'RU', speakers: 258000000, tier: 1 },
      'ja': { name: 'Japanese', nativeName: '日本語', flag: '🇯🇵', rtl: false, region: 'JP', speakers: 125000000, tier: 1 },
      
      // Tier 2: Regional Powerhouses (10 languages)
      'pa': { name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ', flag: '🇮🇳', rtl: false, region: 'IN', speakers: 113000000, tier: 2 },
      'de': { name: 'German', nativeName: 'Deutsch', flag: '🇩🇪', rtl: false, region: 'DE', speakers: 100000000, tier: 2 },
      'jv': { name: 'Javanese', nativeName: 'Basa Jawa', flag: '🇮🇩', rtl: false, region: 'ID', speakers: 98000000, tier: 2 },
      'te': { name: 'Telugu', nativeName: 'తెలుగు', flag: '🇮🇳', rtl: false, region: 'IN', speakers: 96000000, tier: 2 },
      'mr': { name: 'Marathi', nativeName: 'मराठी', flag: '🇮🇳', rtl: false, region: 'IN', speakers: 95000000, tier: 2 },
      'tr': { name: 'Turkish', nativeName: 'Türkçe', flag: '🇹🇷', rtl: false, region: 'TR', speakers: 88000000, tier: 2 },
      'vi': { name: 'Vietnamese', nativeName: 'Tiếng Việt', flag: '🇻🇳', rtl: false, region: 'VN', speakers: 85000000, tier: 2 },
      'ko': { name: 'Korean', nativeName: '한국어', flag: '🇰🇷', rtl: false, region: 'KR', speakers: 81000000, tier: 2 },
      'ta': { name: 'Tamil', nativeName: 'தமிழ்', flag: '🇮🇳', rtl: false, region: 'IN', speakers: 78000000, tier: 2 },
      'ur': { name: 'Urdu', nativeName: 'اردو', flag: '🇵🇰', rtl: true, region: 'PK', speakers: 70000000, tier: 2 },
      
      // Tier 3: Major European & Asian Languages (10 languages)
      'fa': { name: 'Persian', nativeName: 'فارسی', flag: '🇮🇷', rtl: true, region: 'IR', speakers: 70000000, tier: 3 },
      'it': { name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹', rtl: false, region: 'IT', speakers: 65000000, tier: 3 },
      'th': { name: 'Thai', nativeName: 'ไทย', flag: '🇹🇭', rtl: false, region: 'TH', speakers: 61000000, tier: 3 },
      'gu': { name: 'Gujarati', nativeName: 'ગુજરાતી', flag: '🇮🇳', rtl: false, region: 'IN', speakers: 56000000, tier: 3 },
      'pl': { name: 'Polish', nativeName: 'Polski', flag: '🇵🇱', rtl: false, region: 'PL', speakers: 50000000, tier: 3 },
      'kn': { name: 'Kannada', nativeName: 'ಕನ್ನಡ', flag: '🇮🇳', rtl: false, region: 'IN', speakers: 44000000, tier: 3 },
      'uk': { name: 'Ukrainian', nativeName: 'Українська', flag: '🇺🇦', rtl: false, region: 'UA', speakers: 41000000, tier: 3 },
      'ml': { name: 'Malayalam', nativeName: 'മലയാളം', flag: '🇮🇳', rtl: false, region: 'IN', speakers: 38000000, tier: 3 },
      'or': { name: 'Odia', nativeName: 'ଓଡ଼ିଆ', flag: '🇮🇳', rtl: false, region: 'IN', speakers: 38000000, tier: 3 },
      'my': { name: 'Burmese', nativeName: 'မြန်မာ', flag: '🇲🇲', rtl: false, region: 'MM', speakers: 33000000, tier: 3 },
      
      // Tier 4: Strategic Markets (10 languages)
      'nl': { name: 'Dutch', nativeName: 'Nederlands', flag: '🇳🇱', rtl: false, region: 'NL', speakers: 25000000, tier: 4 },
      'ro': { name: 'Romanian', nativeName: 'Română', flag: '🇷🇴', rtl: false, region: 'RO', speakers: 24000000, tier: 4 },
      'sw': { name: 'Swahili', nativeName: 'Kiswahili', flag: '🇰🇪', rtl: false, region: 'KE', speakers: 20000000, tier: 4 },
      'cs': { name: 'Czech', nativeName: 'Čeština', flag: '🇨🇿', rtl: false, region: 'CZ', speakers: 13000000, tier: 4 },
      'hu': { name: 'Hungarian', nativeName: 'Magyar', flag: '🇭🇺', rtl: false, region: 'HU', speakers: 13000000, tier: 4 },
      'el': { name: 'Greek', nativeName: 'Ελληνικά', flag: '🇬🇷', rtl: false, region: 'GR', speakers: 13000000, tier: 4 },
      'sv': { name: 'Swedish', nativeName: 'Svenska', flag: '🇸🇪', rtl: false, region: 'SE', speakers: 10000000, tier: 4 },
      'he': { name: 'Hebrew', nativeName: 'עברית', flag: '🇮🇱', rtl: true, region: 'IL', speakers: 9000000, tier: 4 },
      'da': { name: 'Danish', nativeName: 'Dansk', flag: '🇩🇰', rtl: false, region: 'DK', speakers: 6000000, tier: 4 },
      'no': { name: 'Norwegian', nativeName: 'Norsk', flag: '🇳🇴', rtl: false, region: 'NO', speakers: 5000000, tier: 4 },
      'fi': { name: 'Finnish', nativeName: 'Suomi', flag: '🇫🇮', rtl: false, region: 'FI', speakers: 5000000, tier: 4 }
    };
    
    // Default configuration
    this.defaultLanguage = 'en';
    this.currentLanguage = null;
    this.translations = {};
    this.changeListeners = [];
    
    // Storage keys for persistence
    this.storageKeys = {
      language: 'wheel_spinner_language',
      autoDetected: 'wheel_spinner_auto_detected'
    };
    
    // Initialize the language router
    this.router = new LanguageRouter();
    
    // Set up router event listening
    this.setupRouterIntegration();
    
    // Initialize the language system
    this.initialize();
  }

  /**
   * Set up integration between Language Manager and Language Router
   * Listens for router events and synchronizes state
   */
  setupRouterIntegration() {
    // Listen for language changes from router
    document.addEventListener('languageChanged', (event) => {
      const { language } = event.detail;
      
      // Update current language if different
      if (this.currentLanguage !== language) {
        this.handleRouterLanguageChange(language);
      }
    });
  }

  /**
   * Handle language change initiated by router
   * @param {string} languageCode - New language code from router
   */
  async handleRouterLanguageChange(languageCode) {
    try {
      // Load translations if not already loaded
      if (!this.translations[languageCode]) {
        await this.loadTranslations(languageCode);
      }
      
      // Update current language without router redirect (already handled by router)
      const previousLanguage = this.currentLanguage;
      this.currentLanguage = languageCode;
      
      // Update document language attribute
      document.documentElement.lang = languageCode;
      
      // Update hreflang tags for SEO
      this.router.updateHreflangTags();
      
      // Notify listeners about language change
      this.notifyLanguageChange(languageCode, previousLanguage);
      
      console.log(`Language changed via router to: ${languageCode}`);
      
    } catch (error) {
      console.error('Error handling router language change:', error);
    }
  }

  /**
   * Initialize the language management system
   * Detects browser language and loads appropriate translations
   */
  async initialize() {
    try {
      // Get initial language from router (which handles URL detection)
      const detectedLanguage = this.router.getCurrentLanguage().code;
      
      // Load translations for detected language
      await this.loadTranslations(detectedLanguage);
      
      // Set current language
      this.currentLanguage = detectedLanguage;
      
      // Update document language attribute
      document.documentElement.lang = detectedLanguage;
      
      // Update hreflang tags for SEO
      this.router.updateHreflangTags();
      
      // Notify listeners
      this.notifyLanguageChange(detectedLanguage, null);
      
      console.log(`Language Manager initialized with language: ${detectedLanguage}`);
      
    } catch (error) {
      console.error('Error initializing Language Manager:', error);
      // Fallback to default language
      await this.loadTranslations(this.defaultLanguage);
      this.currentLanguage = this.defaultLanguage;
      document.documentElement.lang = this.defaultLanguage;
    }
  }

  /**
   * Detect initial language based on user preferences and browser settings
   * Priority: 1) Saved preference, 2) Browser language, 3) Default fallback
   * @returns {string} Language code to use
   */
  detectInitialLanguage() {
    // First check if user has manually selected a language before
    const savedLanguage = localStorage.getItem(this.storageKeys.language);
    if (savedLanguage && this.isLanguageSupported(savedLanguage)) {
      console.log(`Using saved language preference: ${savedLanguage}`);
      return savedLanguage;
    }
    
    // Detect browser language if no saved preference
    const browserLanguage = this.detectBrowserLanguage();
    if (browserLanguage && this.isLanguageSupported(browserLanguage)) {
      console.log(`Auto-detected browser language: ${browserLanguage}`);
      // Mark as auto-detected for future reference
      localStorage.setItem(this.storageKeys.autoDetected, 'true');
      return browserLanguage;
    }
    
    // Fallback to default language
    console.log(`Falling back to default language: ${this.defaultLanguage}`);
    return this.defaultLanguage;
  }

  /**
   * Enhanced browser language detection for 40 languages
   * Supports exact locale matching and fallback strategies
   * @returns {string|null} Detected language code or null
   */
  detectBrowserLanguage() {
    // Get all browser language preferences
    const browserLanguages = [
      navigator.language,
      ...(navigator.languages || []),
      navigator.userLanguage,
      navigator.browserLanguage,
      navigator.systemLanguage
    ].filter(Boolean);
    
    console.log('Browser languages detected:', browserLanguages);
    
    // First pass: Try exact locale matching (e.g., 'en-US' -> 'en')
    for (const browserLang of browserLanguages) {
      const normalizedLang = browserLang.toLowerCase();
      
      // Try exact locale match first (e.g., 'pt-BR' matches 'pt' with region 'BR')
      for (const [code, config] of Object.entries(this.supportedLanguages)) {
        const expectedLocale = `${code}-${config.region}`.toLowerCase();
        if (normalizedLang === expectedLocale) {
          console.log(`Exact locale match found: ${browserLang} -> ${code}`);
          return code;
        }
      }
      
      // Try main language code match
      const langCode = normalizedLang.split('-')[0];
      if (this.isLanguageSupported(langCode)) {
        console.log(`Language code match found: ${browserLang} -> ${langCode}`);
        return langCode;
      }
    }
    
    // Second pass: Try regional fallbacks for common language variants
    const languageFallbacks = {
      'en-gb': 'en', 'en-au': 'en', 'en-ca': 'en', 'en-nz': 'en',
      'es-mx': 'es', 'es-ar': 'es', 'es-co': 'es', 'es-pe': 'es',
      'pt-pt': 'pt', 'fr-ca': 'fr', 'fr-ch': 'fr',
      'de-at': 'de', 'de-ch': 'de',
      'zh-tw': 'zh', 'zh-hk': 'zh', 'zh-sg': 'zh',
      'ar-ae': 'ar', 'ar-eg': 'ar', 'ar-ma': 'ar',
      'hi-latn': 'hi', 'bn-in': 'bn'
    };
    
    for (const browserLang of browserLanguages) {
      const normalizedLang = browserLang.toLowerCase();
      if (languageFallbacks[normalizedLang]) {
        const fallbackCode = languageFallbacks[normalizedLang];
        console.log(`Fallback match found: ${browserLang} -> ${fallbackCode}`);
        return fallbackCode;
      }
    }
    
    // Third pass: Script-based detection for languages with specific scripts
    for (const browserLang of browserLanguages) {
      const normalizedLang = browserLang.toLowerCase();
      
      // Detect by script/writing system
      if (normalizedLang.includes('arab') || normalizedLang.includes('ara')) return 'ar';
      if (normalizedLang.includes('deva') || normalizedLang.includes('hindi')) return 'hi';
      if (normalizedLang.includes('beng') || normalizedLang.includes('bengali')) return 'bn';
      if (normalizedLang.includes('guru') || normalizedLang.includes('punjabi')) return 'pa';
      if (normalizedLang.includes('telu') || normalizedLang.includes('telugu')) return 'te';
      if (normalizedLang.includes('taml') || normalizedLang.includes('tamil')) return 'ta';
      if (normalizedLang.includes('gujr') || normalizedLang.includes('gujarati')) return 'gu';
      if (normalizedLang.includes('knda') || normalizedLang.includes('kannada')) return 'kn';
      if (normalizedLang.includes('mlym') || normalizedLang.includes('malayalam')) return 'ml';
      if (normalizedLang.includes('orya') || normalizedLang.includes('odia')) return 'or';
      if (normalizedLang.includes('mymr') || normalizedLang.includes('burmese')) return 'my';
      if (normalizedLang.includes('thai')) return 'th';
      if (normalizedLang.includes('hebr') || normalizedLang.includes('hebrew')) return 'he';
      if (normalizedLang.includes('cyrl') || normalizedLang.includes('cyrillic')) {
        if (normalizedLang.includes('ru')) return 'ru';
        if (normalizedLang.includes('uk')) return 'uk';
      }
    }
    
    console.log('No browser language match found, will use default');
    return null;
  }

  /**
   * Check if a language is supported by the application
   * @param {string} languageCode - Language code to check
   * @returns {boolean} Whether the language is supported
   */
  isLanguageSupported(languageCode) {
    return languageCode && this.supportedLanguages.hasOwnProperty(languageCode);
  }

  /**
   * Load translations for a specific language
   * @param {string} languageCode - Language code to load
   * @returns {Promise} Promise that resolves when translations are loaded
   */
  async loadTranslations(languageCode) {
    if (!this.isLanguageSupported(languageCode)) {
      throw new Error(`Unsupported language: ${languageCode}`);
    }
    
    try {
      // Dynamic import of translation file
      const translationModule = await import(`./translations/${languageCode}.js`);
      this.translations[languageCode] = translationModule.default || translationModule;
      
      console.log(`Loaded translations for language: ${languageCode}`);
      
    } catch (error) {
      console.error(`Failed to load translations for ${languageCode}:`, error);
      
      // If not default language, try to load default as fallback
      if (languageCode !== this.defaultLanguage) {
        console.log(`Loading fallback translations for: ${this.defaultLanguage}`);
        const fallbackModule = await import(`./translations/${this.defaultLanguage}.js`);
        this.translations[languageCode] = fallbackModule.default || fallbackModule;
      } else {
        throw error;
      }
    }
  }

  /**
   * Set the current application language
   * @param {string} languageCode - Language code to set
   * @param {boolean} savePreference - Whether to save this as user preference
   * @param {boolean} updateURL - Whether to update the URL via router
   */
  async setLanguage(languageCode, savePreference = true, updateURL = true) {
    if (!this.isLanguageSupported(languageCode)) {
      console.warn(`Attempted to set unsupported language: ${languageCode}`);
      return;
    }
    
    // Load translations if not already loaded
    if (!this.translations[languageCode]) {
      await this.loadTranslations(languageCode);
    }
    
    const previousLanguage = this.currentLanguage;
    this.currentLanguage = languageCode;
    
    // Save preference if requested (user manually changed language)
    if (savePreference) {
      localStorage.setItem(this.storageKeys.language, languageCode);
      localStorage.removeItem(this.storageKeys.autoDetected);
    }
    
    // Update document language attribute for SEO
    document.documentElement.lang = languageCode;
    
    // Update URL via router if requested (usually for manual language changes)
    if (updateURL && this.router) {
      this.router.redirectToLanguage(languageCode);
    }
    
    // Update hreflang tags for SEO
    if (this.router) {
      this.router.updateHreflangTags();
    }
    
    // Notify all listeners about language change
    this.notifyLanguageChange(languageCode, previousLanguage);
    
    console.log(`Language changed to: ${languageCode}`);
  }

  /**
   * Get translated text for a given key
   * @param {string} key - Translation key (supports nested keys with dots)
   * @param {Object} params - Parameters for string interpolation
   * @returns {string} Translated text or key if not found
   */
  t(key, params = {}) {
    if (!this.currentLanguage || !this.translations[this.currentLanguage]) {
      console.warn('No translations loaded, returning key:', key);
      return key;
    }
    
    // Navigate through nested object using dot notation
    const keys = key.split('.');
    let translation = this.translations[this.currentLanguage];
    
    for (const k of keys) {
      if (translation && typeof translation === 'object' && translation.hasOwnProperty(k)) {
        translation = translation[k];
      } else {
        // Translation not found, try fallback language
        return this.getFallbackTranslation(key, params);
      }
    }
    
    // Handle string interpolation
    if (typeof translation === 'string' && Object.keys(params).length > 0) {
      return this.interpolateString(translation, params);
    }
    
    return translation || key;
  }

  /**
   * Get fallback translation from default language
   * @param {string} key - Translation key
   * @param {Object} params - Parameters for interpolation
   * @returns {string} Fallback translation or key
   */
  getFallbackTranslation(key, params = {}) {
    if (this.currentLanguage === this.defaultLanguage || !this.translations[this.defaultLanguage]) {
      console.warn(`Translation not found for key: ${key}`);
      return key;
    }
    
    const keys = key.split('.');
    let translation = this.translations[this.defaultLanguage];
    
    for (const k of keys) {
      if (translation && typeof translation === 'object' && translation.hasOwnProperty(k)) {
        translation = translation[k];
      } else {
        console.warn(`Fallback translation not found for key: ${key}`);
        return key;
      }
    }
    
    if (typeof translation === 'string' && Object.keys(params).length > 0) {
      return this.interpolateString(translation, params);
    }
    
    return translation || key;
  }

  /**
   * Interpolate string with parameters
   * @param {string} template - Template string with {{key}} placeholders
   * @param {Object} params - Parameters to interpolate
   * @returns {string} Interpolated string
   */
  interpolateString(template, params) {
    return template.replace(/\{\{(\w+)\}\}/g, (match, key) => {
      return params.hasOwnProperty(key) ? params[key] : match;
    });
  }

  /**
   * Get current language information
   * @returns {Object} Current language information
   */
  getCurrentLanguage() {
    return {
      code: this.currentLanguage,
      ...this.supportedLanguages[this.currentLanguage]
    };
  }

  /**
   * Get all supported languages
   * @returns {Object} All supported languages with their information
   */
  getSupportedLanguages() {
    return { ...this.supportedLanguages };
  }

  /**
   * Add a listener for language change events
   * @param {Function} callback - Callback function to call on language change
   */
  addLanguageChangeListener(callback) {
    if (typeof callback === 'function') {
      this.changeListeners.push(callback);
    }
  }

  /**
   * Remove a language change listener
   * @param {Function} callback - Callback function to remove
   */
  removeLanguageChangeListener(callback) {
    const index = this.changeListeners.indexOf(callback);
    if (index > -1) {
      this.changeListeners.splice(index, 1);
    }
  }

  /**
   * Notify all listeners about language change
   * @param {string} newLanguage - New language code
   * @param {string} previousLanguage - Previous language code
   */
  notifyLanguageChange(newLanguage, previousLanguage) {
    this.changeListeners.forEach(callback => {
      try {
        callback(newLanguage, previousLanguage);
      } catch (error) {
        console.error('Error in language change listener:', error);
      }
    });
  }

  /**
   * Check if current language was auto-detected
   * @returns {boolean} Whether current language was auto-detected
   */
  isAutoDetected() {
    return localStorage.getItem(this.storageKeys.autoDetected) === 'true';
  }

  /**
   * Reset language preference (will auto-detect on next load)
   */
  resetLanguagePreference() {
    localStorage.removeItem(this.storageKeys.language);
    localStorage.removeItem(this.storageKeys.autoDetected);
  }

  /**
   * Get language statistics for analytics
   * @returns {Object} Language usage statistics
   */
  getLanguageStats() {
    const routerInfo = this.router ? this.router.getCurrentLanguage() : null;
    
    return {
      current: this.currentLanguage,
      supported: Object.keys(this.supportedLanguages),
      autoDetected: this.isAutoDetected(),
      browserLanguage: this.detectBrowserLanguage(),
      loadedTranslations: Object.keys(this.translations),
      router: {
        enabled: !!this.router,
        currentPath: routerInfo ? routerInfo.basePath : null,
        cleanPath: this.router ? this.router.getCleanPath() : null
      }
    };
  }

  /**
   * Get localized URL for a given path
   * @param {string} path - The path to localize
   * @param {string} langCode - Optional language code (defaults to current)
   * @returns {string} Localized URL
   */
  getLocalizedURL(path = '/', langCode = null) {
    if (!this.router) return path;
    return this.router.getLocalizedURL(path, langCode || this.currentLanguage);
  }

  /**
   * Get clean path without language prefix
   * @returns {string} Clean path
   */
  getCleanPath() {
    if (!this.router) return window.location.pathname;
    return this.router.getCleanPath();
  }

  /**
   * Check if current path matches a pattern
   * @param {string} pattern - Pattern to match against
   * @returns {boolean} Whether path matches pattern
   */
  matchesRoute(pattern) {
    if (!this.router) return false;
    return this.router.matchesRoute(pattern);
  }

  /**
   * Generate hreflang links for current page
   * @returns {Array} Array of hreflang link objects
   */
  getHreflangLinks() {
    if (!this.router) return [];
    return this.router.generateHreflangLinks();
  }

  /**
   * Get router instance for advanced usage
   * @returns {LanguageRouter|null} Router instance
   */
  getRouter() {
    return this.router;
  }

  /**
   * Get current language with router information
   * @returns {Object} Enhanced current language information
   */
  getCurrentLanguageExtended() {
    const baseInfo = this.getCurrentLanguage();
    const routerInfo = this.router ? this.router.getCurrentLanguage() : {};
    
    return {
      ...baseInfo,
      basePath: routerInfo.basePath || '',
      cleanPath: this.getCleanPath(),
      localizedURL: this.getLocalizedURL()
    };
  }
}