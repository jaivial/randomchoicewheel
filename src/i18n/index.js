/**
 * Internationalization System - Main Entry Point
 * Comprehensive i18n system with routing, translations, and SEO optimization
 * Supports 8 languages: English, Spanish, Portuguese, German, French, Chinese, Japanese, Russian
 */

import { LanguageManager } from './LanguageManager_core.js';
import { SEOManager } from './SEOManager.js';
import { CultureManager } from './CultureManager.js';
import { SitemapGenerator } from './SitemapGenerator.js';

/**
 * Main Internationalization System Class
 * Orchestrates all i18n components and provides a unified API
 */
class InternationalizationSystem {
  constructor() {
    this.languageManager = null;
    this.seoManager = null;
    this.cultureManager = null;
    this.sitemapGenerator = null;
    this.initialized = false;
    this.initializationPromise = null;
  }

  /**
   * Initialize the complete internationalization system
   * @param {Object} options - Configuration options
   * @returns {Promise} Promise that resolves when system is ready
   */
  async initialize(options = {}) {
    // Prevent multiple initializations
    if (this.initialized) {
      return this.initializationPromise;
    }

    if (this.initializationPromise) {
      return this.initializationPromise;
    }

    this.initializationPromise = this._doInitialization(options);
    return this.initializationPromise;
  }

  /**
   * Internal initialization logic
   * @param {Object} options - Configuration options
   */
  async _doInitialization(options) {
    try {
      console.log('Initializing Internationalization System...');

      // Initialize Language Manager (includes router)
      this.languageManager = new LanguageManager();
      
      // Wait for language manager to be ready
      await this._waitForLanguageManager();

      // Initialize SEO Manager
      this.seoManager = new SEOManager(this.languageManager);
      
      // Initialize SEO with default meta information
      const defaultMeta = {
        title: 'Decision Wheel Spinner - Make Decisions Easily',
        description: 'Make decisions easily with our beautiful decision wheel spinner. Add your options and spin the wheel to get a random result.',
        keywords: 'wheel, spinner, decision, random, choice, options, spin, decide',
        author: 'Decision Wheel App',
        themeColor: '#4f46e5',
        ogImage: '/images/og-image.png',
        twitterSite: '@decisionwheel',
        ...options.meta
      };

      this.seoManager.initialize(defaultMeta);

      // Initialize Culture Manager
      this.cultureManager = new CultureManager(this.languageManager);
      await this.cultureManager.initialize();

      // Initialize Sitemap Generator
      this.sitemapGenerator = new SitemapGenerator(this.languageManager, this.seoManager);
      this.sitemapGenerator.initialize({
        baseURL: options.baseURL || window.location.origin,
        ...options.sitemap
      });

      // Set up global event listeners
      this._setupGlobalEventListeners();

      this.initialized = true;
      console.log('Internationalization System initialized successfully');

      // Return system info
      return {
        languageManager: this.languageManager,
        seoManager: this.seoManager,
        cultureManager: this.cultureManager,
        sitemapGenerator: this.sitemapGenerator,
        currentLanguage: this.languageManager.getCurrentLanguage(),
        supportedLanguages: this.languageManager.getSupportedLanguages()
      };

    } catch (error) {
      console.error('Failed to initialize Internationalization System:', error);
      throw error;
    }
  }

  /**
   * Wait for language manager to be fully initialized
   */
  async _waitForLanguageManager() {
    // Wait for current language to be set
    let attempts = 0;
    const maxAttempts = 50; // 5 seconds max wait
    
    while (!this.languageManager.currentLanguage && attempts < maxAttempts) {
      await new Promise(resolve => setTimeout(resolve, 100));
      attempts++;
    }

    if (!this.languageManager.currentLanguage) {
      throw new Error('Language Manager failed to initialize within timeout');
    }
  }

  /**
   * Set up global event listeners for the system
   */
  _setupGlobalEventListeners() {
    // Listen for browser language changes (though rare)
    window.addEventListener('languagechange', () => {
      console.log('Browser language changed, updating system...');
      this.handleBrowserLanguageChange();
    });

    // Listen for page visibility changes to update SEO if needed
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden && this.seoManager) {
        // Update SEO when page becomes visible (useful for SPA navigation)
        const currentLang = this.languageManager.getCurrentLanguage().code;
        this.seoManager.updatePageSEO(currentLang);
      }
    });
  }

  /**
   * Handle browser language change event
   */
  async handleBrowserLanguageChange() {
    if (!this.languageManager) return;

    const detectedLanguage = this.languageManager.detectBrowserLanguage();
    const currentLanguage = this.languageManager.getCurrentLanguage().code;

    // Only change if detected language is different and user hasn't manually set a preference
    if (detectedLanguage !== currentLanguage && this.languageManager.isAutoDetected()) {
      console.log(`Browser language changed to: ${detectedLanguage}`);
      await this.languageManager.setLanguage(detectedLanguage, false);
    }
  }

  /**
   * Get the language manager instance
   * @returns {LanguageManager} Language manager instance
   */
  getLanguageManager() {
    if (!this.initialized) {
      console.warn('Internationalization system not initialized yet');
      return null;
    }
    return this.languageManager;
  }

  /**
   * Get the SEO manager instance
   * @returns {SEOManager} SEO manager instance
   */
  getSEOManager() {
    if (!this.initialized) {
      console.warn('Internationalization system not initialized yet');
      return null;
    }
    return this.seoManager;
  }

  /**
   * Get the culture manager instance
   * @returns {CultureManager} Culture manager instance
   */
  getCultureManager() {
    if (!this.initialized) {
      console.warn('Internationalization system not initialized yet');
      return null;
    }
    return this.cultureManager;
  }

  /**
   * Get the sitemap generator instance
   * @returns {SitemapGenerator} Sitemap generator instance
   */
  getSitemapGenerator() {
    if (!this.initialized) {
      console.warn('Internationalization system not initialized yet');
      return null;
    }
    return this.sitemapGenerator;
  }

  /**
   * Get translation function
   * @returns {Function} Translation function
   */
  getTranslationFunction() {
    if (!this.languageManager) {
      return (key) => key; // Fallback function
    }
    return this.languageManager.t.bind(this.languageManager);
  }

  /**
   * Get current system status
   * @returns {Object} System status information
   */
  getStatus() {
    return {
      initialized: this.initialized,
      currentLanguage: this.languageManager?.getCurrentLanguage(),
      supportedLanguages: this.languageManager?.getSupportedLanguages(),
      loadedTranslations: this.languageManager ? Object.keys(this.languageManager.translations) : [],
      routerEnabled: !!this.languageManager?.router,
      seoEnabled: !!this.seoManager,
      cultureEnabled: !!this.cultureManager,
      sitemapEnabled: !!this.sitemapGenerator,
      currentCulture: this.cultureManager?.getCurrentCulture(),
      stats: {
        language: this.languageManager?.getLanguageStats(),
        culture: this.cultureManager?.getCultureStats(),
        sitemap: this.sitemapGenerator?.getStatus()
      }
    };
  }

  /**
   * Change language programmatically
   * @param {string} languageCode - Language code to change to
   * @param {boolean} savePreference - Whether to save as user preference
   * @returns {Promise} Promise that resolves when language is changed
   */
  async changeLanguage(languageCode, savePreference = true) {
    if (!this.languageManager) {
      throw new Error('Language manager not initialized');
    }

    return this.languageManager.setLanguage(languageCode, savePreference);
  }

  /**
   * Get localized URL for a path
   * @param {string} path - Path to localize
   * @param {string} langCode - Optional language code
   * @returns {string} Localized URL
   */
  getLocalizedURL(path, langCode) {
    if (!this.languageManager) return path;
    return this.languageManager.getLocalizedURL(path, langCode);
  }

  /**
   * Get current SEO information
   * @returns {Object} Current SEO information
   */
  getCurrentSEO() {
    if (!this.seoManager) return null;
    return this.seoManager.getCurrentSEO();
  }
}

// Create singleton instance
const i18nSystem = new InternationalizationSystem();

// Export singleton instance and classes for advanced usage
export default i18nSystem;
export { i18nSystem, LanguageManager, SEOManager, CultureManager, SitemapGenerator };

// Export convenience functions that work with the singleton
export const initializeI18n = (options) => i18nSystem.initialize(options);
export const getLanguageManager = () => i18nSystem.getLanguageManager();
export const getSEOManager = () => i18nSystem.getSEOManager();
export const getCultureManager = () => i18nSystem.getCultureManager();
export const getSitemapGenerator = () => i18nSystem.getSitemapGenerator();
export const getStatus = () => i18nSystem.getStatus();
export const changeLanguage = (langCode, save) => i18nSystem.changeLanguage(langCode, save);
export const getLocalizedURL = (path, langCode) => i18nSystem.getLocalizedURL(path, langCode);
export const getCurrentSEO = () => i18nSystem.getCurrentSEO();

// Culture formatting convenience functions
export const formatNumber = (number) => {
  const culture = i18nSystem.getCultureManager();
  return culture ? culture.formatNumber(number) : number?.toString() || '0';
};

export const formatDate = (date) => {
  const culture = i18nSystem.getCultureManager();
  return culture ? culture.formatDate(date) : new Date(date).toLocaleDateString();
};

export const formatTime = (date) => {
  const culture = i18nSystem.getCultureManager();
  return culture ? culture.formatTime(date) : new Date(date).toLocaleTimeString();
};

export const formatDateTime = (date) => {
  const culture = i18nSystem.getCultureManager();
  return culture ? culture.formatDateTime(date) : new Date(date).toLocaleString();
};

export const formatRelativeTime = (date) => {
  const culture = i18nSystem.getCultureManager();
  return culture ? culture.formatRelativeTime(date) : new Date(date).toLocaleString();
};

export const formatCurrency = (amount) => {
  const culture = i18nSystem.getCultureManager();
  return culture ? culture.formatCurrency(amount) : `$${amount}`;
};

// Sitemap generation convenience functions
export const generateSitemap = () => {
  const sitemap = i18nSystem.getSitemapGenerator();
  return sitemap ? sitemap.generateSitemap() : null;
};

export const generateLanguageSitemap = (langCode) => {
  const sitemap = i18nSystem.getSitemapGenerator();
  return sitemap ? sitemap.generateLanguageSitemap(langCode) : null;
};

export const generateAllSitemaps = () => {
  const sitemap = i18nSystem.getSitemapGenerator();
  return sitemap ? sitemap.generateAllSitemaps() : {};
};

export const generateStructuredData = (pageType) => {
  const sitemap = i18nSystem.getSitemapGenerator();
  return sitemap ? sitemap.generateStructuredData(pageType) : null;
};

export const generateRobotsTxt = () => {
  const sitemap = i18nSystem.getSitemapGenerator();
  return sitemap ? sitemap.generateRobotsTxt() : '';
};

// Export translation function that will be available after initialization
export const t = (...args) => {
  const langManager = i18nSystem.getLanguageManager();
  if (!langManager) {
    console.warn('i18n system not initialized, returning key');
    return args[0];
  }
  return langManager.t(...args);
};

// Auto-initialize when module is imported (can be configured to be manual)
if (typeof window !== 'undefined') {
  // Initialize automatically in browser environment
  document.addEventListener('DOMContentLoaded', () => {
    if (!i18nSystem.initialized) {
      i18nSystem.initialize().catch(error => {
        console.error('Auto-initialization of i18n system failed:', error);
      });
    }
  });
}