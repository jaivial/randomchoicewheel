/**
 * Language Manager - Core Internationalization System
 * Handles automatic language detection, translation loading, and language switching
 * Optimized for SEO with browser language detection and fallback mechanisms
 */

/**
 * Core Language Manager Class
 * Manages internationalization across the entire application
 */
export class LanguageManager {
  constructor() {
    // Supported languages configuration
    this.supportedLanguages = {
      'en': { name: 'English', nativeName: 'English', flag: '🇺🇸', rtl: false },
      'es': { name: 'Spanish', nativeName: 'Español', flag: '🇪🇸', rtl: false },
      'fr': { name: 'French', nativeName: 'Français', flag: '🇫🇷', rtl: false }
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
    
    // Initialize the language system
    this.initialize();
  }

  /**
   * Initialize the language management system
   * Detects browser language and loads appropriate translations
   */
  async initialize() {
    try {
      // Detect and set initial language
      const detectedLanguage = this.detectInitialLanguage();
      
      // Load translations for detected language
      await this.loadTranslations(detectedLanguage);
      
      // Set current language
      this.setLanguage(detectedLanguage, false);
      
      console.log(`Language Manager initialized with language: ${detectedLanguage}`);
      
    } catch (error) {
      console.error('Error initializing Language Manager:', error);
      // Fallback to default language
      await this.loadTranslations(this.defaultLanguage);
      this.setLanguage(this.defaultLanguage, false);
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
   * Detect browser language from various sources
   * @returns {string|null} Detected language code or null
   */
  detectBrowserLanguage() {
    // Try different browser language sources in order of preference
    const browserLanguages = [
      navigator.language,
      navigator.languages?.[0],
      navigator.userLanguage,
      navigator.browserLanguage,
      navigator.systemLanguage
    ].filter(Boolean);
    
    for (const lang of browserLanguages) {
      // Extract main language code (e.g., 'en' from 'en-US')
      const langCode = lang.toLowerCase().split('-')[0];
      
      if (this.isLanguageSupported(langCode)) {
        return langCode;
      }
    }
    
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
   */
  async setLanguage(languageCode, savePreference = true) {
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
    return {
      current: this.currentLanguage,
      supported: Object.keys(this.supportedLanguages),
      autoDetected: this.isAutoDetected(),
      browserLanguage: this.detectBrowserLanguage(),
      loadedTranslations: Object.keys(this.translations)
    };
  }
}