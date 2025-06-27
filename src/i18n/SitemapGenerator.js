/**
 * Sitemap Generator - Multi-Language Sitemap and Structured Data Generator
 * Creates language-specific sitemaps and enhanced structured data for SEO
 * Supports 8 languages with comprehensive URL management
 */

export class SitemapGenerator {
  constructor(languageManager, seoManager) {
    this.languageManager = languageManager;
    this.seoManager = seoManager;
    
    // Site configuration
    this.siteConfig = {
      baseURL: '',
      defaultChangeFreq: 'monthly',
      defaultPriority: 0.8,
      lastModified: new Date().toISOString().split('T')[0]
    };
    
    // URL patterns for the application
    this.urlPatterns = [
      {
        path: '/',
        priority: 1.0,
        changeFreq: 'weekly',
        includeInSitemap: true
      },
      {
        path: '/about',
        priority: 0.6,
        changeFreq: 'monthly',
        includeInSitemap: false // Only if these pages exist
      },
      {
        path: '/help',
        priority: 0.7,
        changeFreq: 'monthly',
        includeInSitemap: false
      },
      {
        path: '/privacy',
        priority: 0.4,
        changeFreq: 'yearly',
        includeInSitemap: false
      },
      {
        path: '/terms',
        priority: 0.4,
        changeFreq: 'yearly',
        includeInSitemap: false
      }
    ];
  }

  /**
   * Initialize the sitemap generator
   * @param {Object} config - Configuration options
   */
  initialize(config = {}) {
    this.siteConfig = {
      ...this.siteConfig,
      baseURL: config.baseURL || window.location.origin,
      ...config
    };
    
    console.log('Sitemap Generator initialized');
  }

  /**
   * Generate complete sitemap XML for all languages
   * @returns {string} Complete sitemap XML
   */
  generateSitemap() {
    const supportedLanguages = this.languageManager.getSupportedLanguages();
    const urls = [];

    // Generate URLs for each language
    Object.keys(supportedLanguages).forEach(langCode => {
      const langConfig = supportedLanguages[langCode];
      
      this.urlPatterns.forEach(pattern => {
        if (pattern.includeInSitemap) {
          const localizedURL = this.languageManager.getLocalizedURL(pattern.path, langCode);
          const fullURL = this.siteConfig.baseURL + localizedURL;
          
          // Generate alternate URLs for this page
          const alternates = this.generateAlternateURLs(pattern.path);
          
          urls.push({
            loc: fullURL,
            lastmod: this.siteConfig.lastModified,
            changefreq: pattern.changeFreq || this.siteConfig.defaultChangeFreq,
            priority: pattern.priority || this.siteConfig.defaultPriority,
            alternates: alternates,
            language: langCode
          });
        }
      });
    });

    return this.generateSitemapXML(urls);
  }

  /**
   * Generate alternate URLs for a given path
   * @param {string} path - Base path to generate alternates for
   * @returns {Array} Array of alternate URL objects
   */
  generateAlternateURLs(path) {
    const supportedLanguages = this.languageManager.getSupportedLanguages();
    const alternates = [];

    Object.keys(supportedLanguages).forEach(langCode => {
      const langConfig = supportedLanguages[langCode];
      const localizedURL = this.languageManager.getLocalizedURL(path, langCode);
      const fullURL = this.siteConfig.baseURL + localizedURL;
      
      alternates.push({
        hreflang: `${langCode}-${langConfig.region}`,
        href: fullURL
      });
    });

    // Add x-default alternate
    const defaultURL = this.siteConfig.baseURL + path;
    alternates.push({
      hreflang: 'x-default',
      href: defaultURL
    });

    return alternates;
  }

  /**
   * Generate sitemap XML from URL data
   * @param {Array} urls - Array of URL objects
   * @returns {string} Sitemap XML
   */
  generateSitemapXML(urls) {
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
    xml += '        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n';

    urls.forEach(url => {
      xml += '  <url>\n';
      xml += `    <loc>${this.escapeXML(url.loc)}</loc>\n`;
      xml += `    <lastmod>${url.lastmod}</lastmod>\n`;
      xml += `    <changefreq>${url.changefreq}</changefreq>\n`;
      xml += `    <priority>${url.priority}</priority>\n`;
      
      // Add alternate language links
      url.alternates.forEach(alternate => {
        xml += `    <xhtml:link rel="alternate" hreflang="${alternate.hreflang}" href="${this.escapeXML(alternate.href)}" />\n`;
      });
      
      xml += '  </url>\n';
    });

    xml += '</urlset>';
    return xml;
  }

  /**
   * Generate language-specific sitemap for a single language
   * @param {string} languageCode - Language code to generate sitemap for
   * @returns {string} Language-specific sitemap XML
   */
  generateLanguageSitemap(languageCode) {
    const supportedLanguages = this.languageManager.getSupportedLanguages();
    
    if (!supportedLanguages[languageCode]) {
      throw new Error(`Unsupported language: ${languageCode}`);
    }

    const urls = [];
    
    this.urlPatterns.forEach(pattern => {
      if (pattern.includeInSitemap) {
        const localizedURL = this.languageManager.getLocalizedURL(pattern.path, languageCode);
        const fullURL = this.siteConfig.baseURL + localizedURL;
        
        urls.push({
          loc: fullURL,
          lastmod: this.siteConfig.lastModified,
          changefreq: pattern.changeFreq || this.siteConfig.defaultChangeFreq,
          priority: pattern.priority || this.siteConfig.defaultPriority,
          alternates: this.generateEnhancedAlternateURLs(pattern.path),
          language: languageCode
        });
      }
    });

    return this.generateEnhancedSitemapXML(urls, 'language-specific');
  }

  /**
   * Generate sitemap index XML that links to individual language sitemaps
   * @returns {string} Sitemap index XML
   */
  generateSitemapIndex() {
    const supportedLanguages = this.languageManager.getSupportedLanguages();
    
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    // Add main sitemap
    xml += '  <sitemap>\n';
    xml += `    <loc>${this.siteConfig.baseURL}/sitemap.xml</loc>\n`;
    xml += `    <lastmod>${this.siteConfig.lastModified}</lastmod>\n`;
    xml += '  </sitemap>\n';

    // Add language-specific sitemaps
    Object.keys(supportedLanguages).forEach(langCode => {
      xml += '  <sitemap>\n';
      xml += `    <loc>${this.siteConfig.baseURL}/sitemap-${langCode}.xml</loc>\n`;
      xml += `    <lastmod>${this.siteConfig.lastModified}</lastmod>\n`;
      xml += '  </sitemap>\n';
    });

    xml += '</sitemapindex>';
    return xml;
  }

  /**
   * Generate robots.txt content with sitemap references
   * @returns {string} Robots.txt content
   */
  generateRobotsTxt() {
    let robots = 'User-agent: *\n';
    robots += 'Allow: /\n\n';
    
    // Add sitemap references
    robots += `Sitemap: ${this.siteConfig.baseURL}/sitemap.xml\n`;
    robots += `Sitemap: ${this.siteConfig.baseURL}/sitemap-index.xml\n\n`;
    
    // Add language-specific sitemaps
    const supportedLanguages = this.languageManager.getSupportedLanguages();
    Object.keys(supportedLanguages).forEach(langCode => {
      robots += `Sitemap: ${this.siteConfig.baseURL}/sitemap-${langCode}.xml\n`;
    });

    return robots;
  }

  /**
   * Generate enhanced structured data for the current page
   * @param {string} pageType - Type of page (home, about, etc.)
   * @returns {Object} Structured data object
   */
  generateStructuredData(pageType = 'home') {
    const currentLang = this.languageManager.getCurrentLanguage().code;
    const translations = this.languageManager.translations[currentLang];
    const culture = this.languageManager.router ? 
      this.languageManager.router.getCurrentLanguage().config : {};

    const baseStructuredData = {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      'name': translations?.meta?.title || 'Decision Wheel Spinner',
      'description': translations?.meta?.description || 'Make decisions easily',
      'url': window.location.origin,
      'applicationCategory': 'UtilityApplication',
      'operatingSystem': 'Web Browser',
      'inLanguage': culture.fullCode || currentLang,
      'isAccessibleForFree': true,
      'offers': {
        '@type': 'Offer',
        'price': '0',
        'priceCurrency': 'USD'
      },
      'creator': {
        '@type': 'Organization',
        'name': 'Decision Wheel',
        'url': window.location.origin
      },
      'publisher': {
        '@type': 'Organization',
        'name': 'Decision Wheel',
        'url': window.location.origin
      },
      'potentialAction': [
        {
          '@type': 'UseAction',
          'target': window.location.href,
          'name': translations?.wheel?.spinButton || 'Spin the Wheel'
        },
        {
          '@type': 'InteractAction',
          'target': window.location.href,
          'name': translations?.input?.addButton || 'Add Options'
        }
      ]
    };

    // Add page-specific structured data
    switch (pageType) {
      case 'home':
        baseStructuredData.mainEntity = {
          '@type': 'SoftwareApplication',
          'name': translations?.meta?.title || 'Decision Wheel Spinner',
          'applicationCategory': 'Game',
          'genre': 'Decision Making Tool'
        };
        break;
        
      case 'about':
        baseStructuredData['@type'] = 'AboutPage';
        break;
        
      case 'help':
        baseStructuredData['@type'] = 'FAQPage';
        break;
    }

    // Add multilingual alternatives
    baseStructuredData.workTranslation = this.generateTranslationReferences();

    // Add breadcrumb if not home page
    if (pageType !== 'home') {
      baseStructuredData.breadcrumb = this.generateBreadcrumb(pageType);
    }

    return baseStructuredData;
  }

  /**
   * Generate translation references for structured data
   * @returns {Array} Array of translation references
   */
  generateTranslationReferences() {
    const supportedLanguages = this.languageManager.getSupportedLanguages();
    const translations = [];
    const currentPath = window.location.pathname;
    
    Object.keys(supportedLanguages).forEach(langCode => {
      const langConfig = supportedLanguages[langCode];
      const localizedURL = this.languageManager.getLocalizedURL(currentPath, langCode);
      const fullURL = this.siteConfig.baseURL + localizedURL;
      
      translations.push({
        '@type': 'CreativeWork',
        'url': fullURL,
        'inLanguage': `${langCode}-${langConfig.region}`,
        'name': this.languageManager.translations[langCode]?.meta?.title || 'Decision Wheel Spinner'
      });
    });

    return translations;
  }

  /**
   * Generate breadcrumb structured data
   * @param {string} pageType - Current page type
   * @returns {Object} Breadcrumb structured data
   */
  generateBreadcrumb(pageType) {
    const currentLang = this.languageManager.getCurrentLanguage().code;
    const translations = this.languageManager.translations[currentLang];
    
    const breadcrumb = {
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': translations?.header?.title || 'Home',
          'item': this.siteConfig.baseURL + this.languageManager.getLocalizedURL('/')
        }
      ]
    };

    // Add current page to breadcrumb
    if (pageType !== 'home') {
      breadcrumb.itemListElement.push({
        '@type': 'ListItem',
        'position': 2,
        'name': this.getPageTitle(pageType),
        'item': window.location.href
      });
    }

    return breadcrumb;
  }

  /**
   * Get localized page title for breadcrumb
   * @param {string} pageType - Page type
   * @returns {string} Localized page title
   */
  getPageTitle(pageType) {
    const currentLang = this.languageManager.getCurrentLanguage().code;
    const translations = this.languageManager.translations[currentLang];
    
    const titleMap = {
      'about': 'About',
      'help': 'Help',
      'privacy': 'Privacy Policy',
      'terms': 'Terms of Service'
    };

    return titleMap[pageType] || pageType;
  }

  /**
   * Add custom URL pattern to sitemap generation
   * @param {Object} pattern - URL pattern configuration
   */
  addURLPattern(pattern) {
    const defaultPattern = {
      path: '/',
      priority: 0.5,
      changeFreq: 'monthly',
      includeInSitemap: true
    };
    
    this.urlPatterns.push({ ...defaultPattern, ...pattern });
  }

  /**
   * Update site configuration
   * @param {Object} config - New configuration options
   */
  updateConfig(config) {
    this.siteConfig = { ...this.siteConfig, ...config };
  }

  /**
   * Generate all sitemap files as downloadable data
   * @returns {Object} Object containing all sitemap files
   */
  generateAllSitemaps() {
    const supportedLanguages = this.languageManager.getSupportedLanguages();
    const sitemaps = {};

    // Main sitemap
    sitemaps['sitemap.xml'] = this.generateSitemap();
    
    // Sitemap index
    sitemaps['sitemap-index.xml'] = this.generateSitemapIndex();
    
    // Language-specific sitemaps
    Object.keys(supportedLanguages).forEach(langCode => {
      sitemaps[`sitemap-${langCode}.xml`] = this.generateLanguageSitemap(langCode);
    });
    
    // Robots.txt
    sitemaps['robots.txt'] = this.generateRobotsTxt();

    return sitemaps;
  }

  /**
   * Escape XML special characters
   * @param {string} text - Text to escape
   * @returns {string} Escaped text
   */
  escapeXML(text) {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  /**
   * Get current sitemap generator status
   * @returns {Object} Status information
   */
  getStatus() {
    const supportedLanguages = this.languageManager.getSupportedLanguages();
    
    return {
      siteConfig: this.siteConfig,
      supportedLanguages: Object.keys(supportedLanguages),
      urlPatterns: this.urlPatterns.length,
      enabledPatterns: this.urlPatterns.filter(p => p.includeInSitemap).length,
      estimatedURLs: Object.keys(supportedLanguages).length * this.urlPatterns.filter(p => p.includeInSitemap).length
    };
  }
}