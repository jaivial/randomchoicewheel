/**
 * SEO Manager - Part 2: Advanced SEO Features and Performance Optimizations
 * Handles page speed optimization, Core Web Vitals, and advanced SEO features
 */

/**
 * Advanced SEO utilities and performance optimizations
 */
export class SEOAdvancedManager {
  constructor(seoManager) {
    // Reference to main SEO manager
    this.seoManager = seoManager;
    
    // Performance monitoring
    this.performanceObserver = null;
    this.webVitalsData = {
      fcp: null, // First Contentful Paint
      lcp: null, // Largest Contentful Paint
      fid: null, // First Input Delay
      cls: null  // Cumulative Layout Shift
    };
    
    // Initialize advanced features
    this.initialize();
  }

  /**
   * Initialize advanced SEO features
   */
  initialize() {
    try {
      // Setup performance monitoring
      this.setupPerformanceMonitoring();
      
      // Setup lazy loading for images
      this.setupLazyLoading();
      
      // Setup service worker for caching (if needed)
      this.setupServiceWorker();
      
      // Add breadcrumb structured data
      this.addBreadcrumbStructuredData();
      
      // Setup FAQ structured data if FAQ section exists
      this.setupFAQStructuredData();
      
      console.log('Advanced SEO Manager initialized successfully');
      
    } catch (error) {
      console.error('Error initializing Advanced SEO Manager:', error);
    }
  }

  /**
   * Setup performance monitoring for Core Web Vitals
   */
  setupPerformanceMonitoring() {
    // Check if PerformanceObserver is supported
    if ('PerformanceObserver' in window) {
      // Monitor paint events
      this.observePaintMetrics();
      
      // Monitor layout shift
      this.observeLayoutShift();
      
      // Monitor input delay
      this.observeInputDelay();
    }
    
    // Alternative: Use basic performance API
    this.measureBasicPerformance();
  }

  /**
   * Observe paint metrics (FCP, LCP)
   */
  observePaintMetrics() {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            this.webVitalsData.fcp = entry.startTime;
            this.reportWebVital('FCP', entry.startTime);
          }
          
          if (entry.entryType === 'largest-contentful-paint') {
            this.webVitalsData.lcp = entry.startTime;
            this.reportWebVital('LCP', entry.startTime);
          }
        });
      });
      
      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint'] });
      
    } catch (error) {
      console.warn('Could not observe paint metrics:', error);
    }
  }

  /**
   * Observe layout shift (CLS)
   */
  observeLayoutShift() {
    try {
      let clsValue = 0;
      
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        
        entries.forEach((entry) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        
        this.webVitalsData.cls = clsValue;
        this.reportWebVital('CLS', clsValue);
      });
      
      observer.observe({ entryTypes: ['layout-shift'] });
      
    } catch (error) {
      console.warn('Could not observe layout shift:', error);
    }
  }

  /**
   * Observe input delay (FID)
   */
  observeInputDelay() {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        
        entries.forEach((entry) => {
          this.webVitalsData.fid = entry.processingStart - entry.startTime;
          this.reportWebVital('FID', this.webVitalsData.fid);
        });
      });
      
      observer.observe({ entryTypes: ['first-input'] });
      
    } catch (error) {
      console.warn('Could not observe input delay:', error);
    }
  }

  /**
   * Measure basic performance metrics
   */
  measureBasicPerformance() {
    window.addEventListener('load', () => {
      const navigation = performance.getEntriesByType('navigation')[0];
      
      if (navigation) {
        const metrics = {
          pageLoadTime: navigation.loadEventEnd - navigation.fetchStart,
          domContentLoaded: navigation.domContentLoadedEventEnd - navigation.fetchStart,
          firstByte: navigation.responseStart - navigation.fetchStart
        };
        
        console.log('Basic Performance Metrics:', metrics);
        
        // Report to analytics if available
        this.reportPerformanceMetrics(metrics);
      }
    });
  }

  /**
   * Report Web Vital metric
   * @param {string} name - Metric name
   * @param {number} value - Metric value
   */
  reportWebVital(name, value) {
    console.log(`Web Vital - ${name}:`, value);
    
    // Here you could send to analytics service
    // For example: gtag('event', name, { value: Math.round(value) });
  }

  /**
   * Report performance metrics to analytics
   * @param {Object} metrics - Performance metrics object
   */
  reportPerformanceMetrics(metrics) {
    // Send to analytics service
    console.log('Performance Metrics:', metrics);
  }

  /**
   * Setup lazy loading for images
   */
  setupLazyLoading() {
    // Check if Intersection Observer is supported
    if ('IntersectionObserver' in window) {
      const images = document.querySelectorAll('img[data-src]');
      
      if (images.length > 0) {
        const imageObserver = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              img.src = img.dataset.src;
              img.classList.remove('lazy');
              imageObserver.unobserve(img);
            }
          });
        });
        
        images.forEach((img) => imageObserver.observe(img));
      }
    }
  }

  /**
   * Setup service worker for caching (optional)
   */
  setupServiceWorker() {
    if ('serviceWorker' in navigator) {
      // Register service worker if available
      // This is optional and depends on your caching strategy
      console.log('Service Worker support detected');
      
      // Uncomment if you have a service worker file
      // navigator.serviceWorker.register('/sw.js')
      //   .then(() => console.log('Service Worker registered'))
      //   .catch((error) => console.error('Service Worker registration failed:', error));
    }
  }

  /**
   * Add breadcrumb structured data
   */
  addBreadcrumbStructuredData() {
    const breadcrumbData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://wheelspinner.app/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Decision Wheel Spinner",
          "item": "https://wheelspinner.app/"
        }
      ]
    };
    
    this.addStructuredData('breadcrumb-data', breadcrumbData);
  }

  /**
   * Setup FAQ structured data (if FAQ section exists)
   */
  setupFAQStructuredData() {
    // Example FAQ data - customize based on your actual FAQ
    const faqData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How does the decision wheel spinner work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Simply add your options to the wheel, then click the spin button. The wheel will randomly select one of your options to help you make a decision."
          }
        },
        {
          "@type": "Question",
          "name": "Is the wheel spinner really random?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, our wheel spinner uses JavaScript's built-in random number generator to ensure fair and unbiased results."
          }
        },
        {
          "@type": "Question",
          "name": "Can I customize the wheel colors?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The wheel automatically assigns different colors to each option to make them easily distinguishable."
          }
        },
        {
          "@type": "Question",
          "name": "How many options can I add to the wheel?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can add multiple options to the wheel. The wheel will automatically adjust to accommodate all your choices."
          }
        }
      ]
    };
    
    this.addStructuredData('faq-data', faqData);
  }

  /**
   * Add structured data to page
   * @param {string} id - Script element ID
   * @param {Object} data - Structured data object
   */
  addStructuredData(id, data) {
    // Remove existing script if it exists
    const existingScript = document.getElementById(id);
    if (existingScript) {
      existingScript.remove();
    }
    
    // Create new script element
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = id;
    script.textContent = JSON.stringify(data, null, 2);
    
    // Add to head
    document.head.appendChild(script);
  }

  /**
   * Generate and add meta tags for specific pages
   * @param {string} pageType - Type of page (home, about, etc.)
   * @param {Object} pageData - Page-specific data
   */
  addPageSpecificMeta(pageType, pageData) {
    const metaTags = [];
    
    switch (pageType) {
      case 'home':
        metaTags.push(
          { name: 'article:author', content: 'Decision Wheel Spinner Team' },
          { name: 'article:section', content: 'Tools' },
          { name: 'article:tag', content: 'decision making, wheel spinner, random choice' }
        );
        break;
        
      default:
        break;
    }
    
    // Add meta tags to head
    metaTags.forEach(tag => {
      const metaElement = document.createElement('meta');
      Object.keys(tag).forEach(key => {
        metaElement.setAttribute(key, tag[key]);
      });
      document.head.appendChild(metaElement);
    });
  }

  /**
   * Optimize images for better performance
   */
  optimizeImages() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
      // Add loading="lazy" if not present
      if (!img.hasAttribute('loading')) {
        img.setAttribute('loading', 'lazy');
      }
      
      // Add decoding="async" for better performance
      if (!img.hasAttribute('decoding')) {
        img.setAttribute('decoding', 'async');
      }
      
      // Ensure alt text exists
      if (!img.hasAttribute('alt')) {
        console.warn('Image missing alt text:', img.src);
      }
    });
  }

  /**
   * Add preload hints for critical resources
   */
  addPreloadHints() {
    const criticalResources = [
      { href: '/src/styles/globals.css', as: 'style' },
      { href: '/src/styles/glassmorphism.css', as: 'style' },
      { href: '/assets/img/wheelicon.png', as: 'image' }
    ];
    
    criticalResources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource.href;
      link.as = resource.as;
      
      // Add to head if not already present
      if (!document.querySelector(`link[href="${resource.href}"]`)) {
        document.head.appendChild(link);
      }
    });
  }

  /**
   * Setup Open Graph meta tags for better social sharing
   * @param {Object} socialData - Social media specific data
   */
  updateSocialMetaTags(socialData) {
    const socialTags = [
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: socialData.siteName || 'Decision Wheel Spinner' },
      { property: 'og:image:type', content: 'image/png' },
      { property: 'og:image:width', content: '512' },
      { property: 'og:image:height', content: '512' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:domain', content: 'wheelspinner.app' }
    ];
    
    socialTags.forEach(tag => {
      const selector = tag.property ? `meta[property="${tag.property}"]` : `meta[name="${tag.name}"]`;
      let metaElement = document.querySelector(selector);
      
      if (!metaElement) {
        metaElement = document.createElement('meta');
        if (tag.property) {
          metaElement.setAttribute('property', tag.property);
        } else {
          metaElement.setAttribute('name', tag.name);
        }
        document.head.appendChild(metaElement);
      }
      
      metaElement.setAttribute('content', tag.content);
    });
  }

  /**
   * Get comprehensive SEO audit data
   * @returns {Object} SEO audit results
   */
  getSEOAudit() {
    const audit = {
      meta: {
        title: document.title,
        description: document.querySelector('meta[name="description"]')?.content,
        keywords: document.querySelector('meta[name="keywords"]')?.content,
        canonical: document.querySelector('link[rel="canonical"]')?.href,
        robots: document.querySelector('meta[name="robots"]')?.content
      },
      images: {
        total: document.querySelectorAll('img').length,
        withAlt: document.querySelectorAll('img[alt]').length,
        withLazyLoading: document.querySelectorAll('img[loading="lazy"]').length
      },
      performance: this.webVitalsData,
      structuredData: {
        scripts: document.querySelectorAll('script[type="application/ld+json"]').length
      },
      socialMedia: {
        ogTags: document.querySelectorAll('meta[property^="og:"]').length,
        twitterTags: document.querySelectorAll('meta[name^="twitter:"]').length
      }
    };
    
    return audit;
  }

  /**
   * Clean up resources
   */
  cleanup() {
    if (this.performanceObserver) {
      this.performanceObserver.disconnect();
    }
    
    console.log('Advanced SEO Manager cleanup completed');
  }
}