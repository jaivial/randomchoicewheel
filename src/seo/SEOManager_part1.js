/**
 * SEO Manager - Part 1: Dynamic SEO and Meta Tags Management
 * Handles dynamic updates of meta tags, OpenGraph, Twitter Cards, and structured data
 * Optimized for multilingual SEO with automatic language switching
 */

/**
 * SEO Manager Class
 * Manages all SEO-related meta tags and structured data dynamically
 */
export class SEOManager {
  constructor(languageManager) {
    // Reference to language manager for translations
    this.languageManager = languageManager;
    
    // Base URL configuration
    this.baseUrl = 'https://wheelspinner.app';
    
    // Default values and configuration
    this.defaultConfig = {
      siteName: 'Decision Wheel Spinner',
      appName: 'Decision Wheel Spinner',
      twitterHandle: '@wheelspinner',
      themeColor: '#667eea',
      locale: {
        en: 'en_US',
        es: 'es_ES',
        fr: 'fr_FR'
      }
    };
    
    // Cache for DOM elements to avoid repeated queries
    this.elements = {
      title: null,
      description: null,
      keywords: null,
      language: null,
      htmlLang: null,
      structuredData: null
    };
    
    // Initialize the SEO manager
    this.initialize();
  }

  /**
   * Initialize the SEO manager and setup language change listeners
   */
  initialize() {
    try {
      // Cache DOM elements
      this.cacheElements();
      
      // Setup language change listener
      this.languageManager.addLanguageChangeListener((newLanguage, previousLanguage) => {
        this.updateSEOForLanguage(newLanguage);
      });
      
      // Update SEO for current language
      if (this.languageManager.currentLanguage) {
        this.updateSEOForLanguage(this.languageManager.currentLanguage);
      }
      
      console.log('SEO Manager initialized successfully');
      
    } catch (error) {
      console.error('Error initializing SEO Manager:', error);
    }
  }

  /**
   * Cache frequently used DOM elements
   */
  cacheElements() {
    // Basic meta tags
    this.elements.title = document.querySelector('title');
    this.elements.description = document.querySelector('meta[name="description"]');
    this.elements.keywords = document.querySelector('meta[name="keywords"]');
    this.elements.language = document.querySelector('meta[name="language"]');
    this.elements.htmlLang = document.documentElement;
    
    // Structured data
    this.elements.structuredData = document.querySelector('#structured-data');
    
    // OpenGraph elements
    this.elements.ogTitle = document.querySelector('meta[property="og:title"]');
    this.elements.ogDescription = document.querySelector('meta[property="og:description"]');
    this.elements.ogUrl = document.querySelector('meta[property="og:url"]');
    this.elements.ogLocale = document.querySelector('meta[property="og:locale"]');
    
    // Twitter Card elements
    this.elements.twitterTitle = document.querySelector('meta[name="twitter:title"]');
    this.elements.twitterDescription = document.querySelector('meta[name="twitter:description"]');
  }

  /**
   * Update all SEO elements for a specific language
   * @param {string} languageCode - Language code to update SEO for
   */
  updateSEOForLanguage(languageCode) {
    try {
      // Get translations for meta content
      const metaTranslations = this.getMetaTranslations(languageCode);
      
      if (!metaTranslations) {
        console.warn(`No meta translations found for language: ${languageCode}`);
        return;
      }
      
      // Update basic meta tags
      this.updateBasicMetaTags(metaTranslations, languageCode);
      
      // Update OpenGraph tags
      this.updateOpenGraphTags(metaTranslations, languageCode);
      
      // Update Twitter Card tags
      this.updateTwitterCardTags(metaTranslations, languageCode);
      
      // Update structured data
      this.updateStructuredData(metaTranslations, languageCode);
      
      // Update hreflang and alternate links
      this.updateAlternateLinks(languageCode);
      
      // Update URL parameters if needed
      this.updateUrlParameters(languageCode);
      
      console.log(`SEO updated for language: ${languageCode}`);
      
    } catch (error) {
      console.error(`Error updating SEO for language ${languageCode}:`, error);
    }
  }

  /**
   * Get meta translations for a specific language
   * @param {string} languageCode - Language code
   * @returns {Object|null} Meta translations object
   */
  getMetaTranslations(languageCode) {
    if (!this.languageManager.translations[languageCode]) {
      return null;
    }
    
    return this.languageManager.translations[languageCode].meta || null;
  }

  /**
   * Update basic HTML meta tags
   * @param {Object} metaTranslations - Meta translations object
   * @param {string} languageCode - Language code
   */
  updateBasicMetaTags(metaTranslations, languageCode) {
    // Update title
    if (this.elements.title && metaTranslations.title) {
      this.elements.title.textContent = metaTranslations.title;
    }
    
    // Update description
    if (this.elements.description && metaTranslations.description) {
      this.elements.description.setAttribute('content', metaTranslations.description);
    }
    
    // Update keywords
    if (this.elements.keywords && metaTranslations.keywords) {
      this.elements.keywords.setAttribute('content', metaTranslations.keywords);
    }
    
    // Update language meta tag
    if (this.elements.language) {
      this.elements.language.setAttribute('content', languageCode);
    }
    
    // Update HTML lang attribute
    if (this.elements.htmlLang) {
      this.elements.htmlLang.setAttribute('lang', languageCode);
    }
  }

  /**
   * Update OpenGraph meta tags
   * @param {Object} metaTranslations - Meta translations object
   * @param {string} languageCode - Language code
   */
  updateOpenGraphTags(metaTranslations, languageCode) {
    // Update OG title
    if (this.elements.ogTitle && metaTranslations.ogTitle) {
      this.elements.ogTitle.setAttribute('content', metaTranslations.ogTitle);
    }
    
    // Update OG description
    if (this.elements.ogDescription && metaTranslations.ogDescription) {
      this.elements.ogDescription.setAttribute('content', metaTranslations.ogDescription);
    }
    
    // Update OG URL with language parameter
    if (this.elements.ogUrl) {
      const urlWithLang = `${this.baseUrl}/${languageCode}`;
      this.elements.ogUrl.setAttribute('content', urlWithLang);
    }
    
    // Update OG locale
    if (this.elements.ogLocale && this.defaultConfig.locale[languageCode]) {
      this.elements.ogLocale.setAttribute('content', this.defaultConfig.locale[languageCode]);
    }
  }

  /**
   * Update Twitter Card meta tags
   * @param {Object} metaTranslations - Meta translations object
   * @param {string} languageCode - Language code
   */
  updateTwitterCardTags(metaTranslations, languageCode) {
    // Update Twitter title
    if (this.elements.twitterTitle && metaTranslations.twitterTitle) {
      this.elements.twitterTitle.setAttribute('content', metaTranslations.twitterTitle);
    }
    
    // Update Twitter description
    if (this.elements.twitterDescription && metaTranslations.twitterDescription) {
      this.elements.twitterDescription.setAttribute('content', metaTranslations.twitterDescription);
    }
  }

  /**
   * Update JSON-LD structured data
   * @param {Object} metaTranslations - Meta translations object
   * @param {string} languageCode - Language code
   */
  updateStructuredData(metaTranslations, languageCode) {
    if (!this.elements.structuredData) return;
    
    try {
      // Get current structured data
      const currentData = JSON.parse(this.elements.structuredData.textContent);
      
      // Update with new language data
      const updatedData = {
        ...currentData,
        name: metaTranslations.title || currentData.name,
        description: metaTranslations.description || currentData.description,
        url: `${this.baseUrl}/${languageCode}`,
        inLanguage: languageCode,
        // Keep all available languages
        availableLanguage: [
          {
            "@type": "Language",
            "name": "English",
            "alternateName": "en"
          },
          {
            "@type": "Language",
            "name": "Spanish",
            "alternateName": "es"
          },
          {
            "@type": "Language",
            "name": "French",
            "alternateName": "fr"
          }
        ]
      };
      
      // Update the script content
      this.elements.structuredData.textContent = JSON.stringify(updatedData, null, 2);
      
    } catch (error) {
      console.error('Error updating structured data:', error);
    }
  }

  /**
   * Update hreflang and alternate links
   * @param {string} currentLanguage - Current language code
   */
  updateAlternateLinks(currentLanguage) {
    // Remove existing hreflang links
    const existingHreflangLinks = document.querySelectorAll('link[hreflang]');
    existingHreflangLinks.forEach(link => link.remove());
    
    // Add new hreflang links
    const supportedLanguages = this.languageManager.getSupportedLanguages();
    const head = document.head;
    
    // Add links for each supported language
    Object.keys(supportedLanguages).forEach(langCode => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = langCode;
      link.href = `${this.baseUrl}/${langCode}`;
      head.appendChild(link);
    });
    
    // Add x-default link
    const defaultLink = document.createElement('link');
    defaultLink.rel = 'alternate';
    defaultLink.hreflang = 'x-default';
    defaultLink.href = `${this.baseUrl}/`;
    head.appendChild(defaultLink);
  }

  /**
   * Update URL parameters for language (optional, for SPA routing)
   * @param {string} languageCode - Language code
   */
  updateUrlParameters(languageCode) {
    // Only update URL if it's different and not causing page reload
    const currentUrl = new URL(window.location);
    const shouldUpdateUrl = !currentUrl.searchParams.get('lang') || 
                           currentUrl.searchParams.get('lang') !== languageCode;
    
    if (shouldUpdateUrl && window.history && window.history.replaceState) {
      const newUrl = new URL(window.location);
      newUrl.searchParams.set('lang', languageCode);
      
      // Use replaceState to avoid adding to browser history
      window.history.replaceState(null, '', newUrl.toString());
    }
  }

  /**
   * Get current SEO configuration
   * @returns {Object} Current SEO state
   */
  getSEOState() {
    return {
      currentLanguage: this.languageManager.currentLanguage,
      baseUrl: this.baseUrl,
      title: this.elements.title?.textContent,
      description: this.elements.description?.getAttribute('content'),
      keywords: this.elements.keywords?.getAttribute('content'),
      ogTitle: this.elements.ogTitle?.getAttribute('content'),
      ogDescription: this.elements.ogDescription?.getAttribute('content'),
      ogUrl: this.elements.ogUrl?.getAttribute('content'),
      twitterTitle: this.elements.twitterTitle?.getAttribute('content'),
      twitterDescription: this.elements.twitterDescription?.getAttribute('content')
    };
  }

  /**
   * Manually trigger SEO update (useful for testing)
   * @param {string} languageCode - Language code to update to
   */
  forceSEOUpdate(languageCode) {
    if (this.languageManager.isLanguageSupported(languageCode)) {
      this.updateSEOForLanguage(languageCode);
      console.log(`Forced SEO update for language: ${languageCode}`);
    } else {
      console.warn(`Cannot force SEO update for unsupported language: ${languageCode}`);
    }
  }

  /**
   * Update base URL (useful for different environments)
   * @param {string} newBaseUrl - New base URL
   */
  updateBaseUrl(newBaseUrl) {
    this.baseUrl = newBaseUrl.replace(/\/$/, ''); // Remove trailing slash
    
    // Re-update SEO for current language with new base URL
    if (this.languageManager.currentLanguage) {
      this.updateSEOForLanguage(this.languageManager.currentLanguage);
    }
    
    console.log(`Base URL updated to: ${this.baseUrl}`);
  }

  /**
   * Generate canonical URL for current language
   * @returns {string} Canonical URL
   */
  getCanonicalUrl() {
    const currentLang = this.languageManager.currentLanguage || 'en';
    return `${this.baseUrl}/${currentLang}`;
  }

  /**
   * Add canonical link if it doesn't exist
   */
  ensureCanonicalLink() {
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    
    canonicalLink.href = this.getCanonicalUrl();
  }

  /**
   * Cleanup resources
   */
  cleanup() {
    // Remove language change listener
    if (this.languageManager && this.languageManager.removeLanguageChangeListener) {
      // Note: We need to store the reference to the listener function to remove it
      // This is a simplified cleanup
      console.log('SEO Manager cleanup completed');
    }
  }
}