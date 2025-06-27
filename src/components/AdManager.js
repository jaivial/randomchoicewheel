/**
 * AdManager - Comprehensive advertising management system
 * Handles ad loading, display, tracking, and responsive placement
 * Supports Google AdSense and custom ad networks
 */

export class AdManager {
  constructor() {
    // Configuration for different ad placements
    this.adConfig = {
      header: {
        enabled: true,
        size: { width: 728, height: 90 }, // Leaderboard
        mobileSize: { width: 320, height: 50 }, // Mobile banner
        adUnitId: 'ca-pub-7898475614767076/1940254660', // Your wheelspinner ad unit
        position: 'header'
      },
      sidebar: {
        enabled: false, // Disabled since wheel is now in this position
        size: { width: 300, height: 250 }, // Medium rectangle
        adUnitId: 'ca-pub-7898475614767076/1940254660',
        position: 'sidebar',
        desktopOnly: true
      },
      content: {
        enabled: true,
        size: { width: 320, height: 100 }, // Large mobile banner
        adUnitId: 'ca-pub-7898475614767076/1940254660',
        position: 'content'
      },
      footer: {
        enabled: true,
        size: { width: 728, height: 90 },
        mobileSize: { width: 320, height: 50 },
        adUnitId: 'ca-pub-7898475614767076/1940254660',
        position: 'footer'
      },
      wheelBottom: {
        enabled: true,
        size: { width: 300, height: 250 }, // Medium rectangle below wheel
        adUnitId: 'ca-pub-7898475614767076/1940254660',
        position: 'wheel-bottom',
        desktopOnly: true
      },
      afterWheel1: {
        enabled: true,
        size: { width: 728, height: 90 }, // Banner after wheel
        mobileSize: { width: 320, height: 50 },
        adUnitId: 'ca-pub-7898475614767076/1940254660',
        position: 'after-wheel-1'
      },
      afterWheel2: {
        enabled: true,
        size: { width: 300, height: 250 }, // Rectangle after wheel
        adUnitId: 'ca-pub-7898475614767076/1940254660',
        position: 'after-wheel-2'
      }
    };

    // Performance tracking
    this.adMetrics = {
      loaded: {},
      viewed: {},
      clicked: {},
      errors: {}
    };

    // Ad blocker detection
    this.adBlockerDetected = false;
    
    // Initialize the ad system
    this.init();
  }

  /**
   * Initialize the advertising system
   * Sets up ad containers and loads necessary scripts
   */
  async init() {
    try {
      // Detect ad blocker
      await this.detectAdBlocker();
      
      // Initialize AdSense if not blocked
      if (!this.adBlockerDetected) {
        await this.initializeAdSense();
      }
      
      // Create ad containers
      this.createAdContainers();
      
      // Set up responsive behavior
      this.setupResponsiveBehavior();
      
      console.log('AdManager initialized successfully');
    } catch (error) {
      console.error('AdManager initialization failed:', error);
      this.handleAdError('initialization', error);
    }
  }

  /**
   * Detect if ad blocker is present
   * Uses multiple detection methods for reliability
   */
  async detectAdBlocker() {
    return new Promise((resolve) => {
      // Method 1: Test element creation
      const testAd = document.createElement('div');
      testAd.innerHTML = '&nbsp;';
      testAd.className = 'adsbox';
      testAd.style.position = 'absolute';
      testAd.style.left = '-10000px';
      document.body.appendChild(testAd);

      setTimeout(() => {
        const isBlocked = testAd.offsetHeight === 0;
        document.body.removeChild(testAd);
        
        if (isBlocked) {
          this.adBlockerDetected = true;
          this.showAdBlockerMessage();
        }
        
        resolve(isBlocked);
      }, 100);
    });
  }

  /**
   * Initialize Google AdSense
   * Loads AdSense script and sets up global configuration
   */
  async initializeAdSense() {
    // Check if AdSense is already loaded
    if (window.adsbygoogle) {
      return;
    }

    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
      script.async = true;
      script.crossOrigin = 'anonymous';
      
      script.onload = () => {
        window.adsbygoogle = window.adsbygoogle || [];
        resolve();
      };
      
      script.onerror = () => {
        this.adBlockerDetected = true;
        reject(new Error('Failed to load AdSense script'));
      };
      
      document.head.appendChild(script);
    });
  }

  /**
   * Create ad containers in the DOM
   * Generates ad units for each configured placement
   */
  createAdContainers() {
    Object.entries(this.adConfig).forEach(([placement, config]) => {
      if (config.enabled) {
        this.createAdUnit(placement, config);
      }
    });
  }

  /**
   * Create individual ad unit
   * Generates HTML structure and styling for ad placement
   */
  createAdUnit(placement, config) {
    const adContainer = document.createElement('div');
    adContainer.className = `ad-container ad-${placement}`;
    adContainer.id = `ad-${placement}`;

    // Skip sidebar ads on mobile if configured
    if (config.desktopOnly && this.isMobile()) {
      adContainer.style.display = 'none';
    }

    // Create the actual ad unit
    const adUnit = document.createElement('ins');
    adUnit.className = 'adsbygoogle';
    adUnit.style.display = 'block';
    adUnit.setAttribute('data-ad-client', 'ca-pub-7898475614767076');
    adUnit.setAttribute('data-ad-slot', '1940254660');
    adUnit.setAttribute('data-ad-format', 'auto');
    adUnit.setAttribute('data-full-width-responsive', 'true');
    
    // Set responsive sizing based on placement
    if (config.mobileSize && this.isMobile()) {
      adUnit.style.width = `${config.mobileSize.width}px`;
      adUnit.style.height = `${config.mobileSize.height}px`;
    } else {
      adUnit.style.width = `${config.size.width}px`;
      adUnit.style.height = `${config.size.height}px`;
    }

    adContainer.appendChild(adUnit);

    // Insert into appropriate location
    this.insertAdContainer(placement, adContainer);

    // Load the ad if AdSense is available
    if (!this.adBlockerDetected && window.adsbygoogle) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        this.trackAdMetric('loaded', placement);
      } catch (error) {
        console.error(`Failed to load ad for ${placement}:`, error);
        this.handleAdError(placement, error);
      }
    }
  }

  /**
   * Insert ad container into appropriate DOM location
   * Handles different placement strategies
   */
  insertAdContainer(placement, container) {
    switch (placement) {
      case 'header':
        const header = document.querySelector('header');
        if (header) {
          header.appendChild(container);
        }
        break;
        
      case 'sidebar':
        // Create sidebar if it doesn't exist
        let sidebar = document.querySelector('.sidebar');
        if (!sidebar) {
          sidebar = document.createElement('aside');
          sidebar.className = 'sidebar';
          const mainContainer = document.querySelector('.main-container');
          if (mainContainer && mainContainer.parentNode) {
            mainContainer.parentNode.insertBefore(sidebar, mainContainer.nextSibling);
          }
        }
        sidebar.appendChild(container);
        break;
        
      case 'content':
        const wheelSection = document.querySelector('#wheel-section');
        if (wheelSection && wheelSection.parentNode) {
          // Insert AFTER wheel-section instead of before
          wheelSection.parentNode.insertBefore(container, wheelSection.nextSibling);
        }
        break;
        
      case 'footer':
        const app = document.querySelector('#app');
        if (app) {
          app.appendChild(container);
        }
        break;
        
      case 'wheel-bottom':
        const wheelContainer = document.querySelector('.wheel-container');
        if (wheelContainer) {
          wheelContainer.appendChild(container);
        }
        break;
        
      case 'after-wheel-1':
      case 'after-wheel-2':
        const mainContainer = document.querySelector('.main-container');
        if (mainContainer && mainContainer.parentNode) {
          // Insert after main-container
          mainContainer.parentNode.insertBefore(container, mainContainer.nextSibling);
        }
        break;
    }
  }

  /**
   * Set up responsive behavior for ads
   * Handles window resize and orientation change events
   */
  setupResponsiveBehavior() {
    const handleResize = () => {
      this.updateAdSizes();
      this.toggleMobileAds();
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
  }

  /**
   * Update ad sizes based on current screen size
   * Switches between desktop and mobile ad formats
   */
  updateAdSizes() {
    Object.entries(this.adConfig).forEach(([placement, config]) => {
      const adContainer = document.querySelector(`#ad-${placement}`);
      const adUnit = adContainer?.querySelector('.adsbygoogle');
      
      if (adUnit && config.mobileSize) {
        const isMobile = this.isMobile();
        const size = isMobile ? config.mobileSize : config.size;
        
        adUnit.style.width = `${size.width}px`;
        adUnit.style.height = `${size.height}px`;
      }
    });
  }

  /**
   * Toggle mobile-specific ad behavior
   * Shows/hides desktop-only ads on mobile
   */
  toggleMobileAds() {
    const isMobile = this.isMobile();
    
    Object.entries(this.adConfig).forEach(([placement, config]) => {
      if (config.desktopOnly) {
        const adContainer = document.querySelector(`#ad-${placement}`);
        if (adContainer) {
          adContainer.style.display = isMobile ? 'none' : 'block';
        }
      }
    });
  }

  /**
   * Show ad blocker detection message
   * Provides fallback content when ads are blocked
   */
  showAdBlockerMessage() {
    const message = document.createElement('div');
    message.className = 'ad-blocker-message glass-card';
    message.innerHTML = `
      <h3>🚫 Ad Blocker Detected</h3>
      <p>We use ads to keep this service free. Please consider disabling your ad blocker or supporting us directly.</p>
      <button class="glass-btn" onclick="this.parentElement.style.display='none'">Dismiss</button>
    `;
    
    // Insert after header
    const header = document.querySelector('header');
    if (header && header.nextSibling) {
      header.parentNode.insertBefore(message, header.nextSibling);
    }
  }

  /**
   * Track ad performance metrics
   * Records ad loading, viewing, and interaction data
   */
  trackAdMetric(type, placement, data = {}) {
    if (!this.adMetrics[type]) {
      this.adMetrics[type] = {};
    }
    
    if (!this.adMetrics[type][placement]) {
      this.adMetrics[type][placement] = 0;
    }
    
    this.adMetrics[type][placement]++;
    
    // Log for analytics (can be sent to analytics service)
    console.log(`Ad ${type}:`, { placement, count: this.adMetrics[type][placement], ...data });
  }

  /**
   * Handle ad loading errors
   * Provides error recovery and fallback content
   */
  handleAdError(placement, error) {
    this.trackAdMetric('errors', placement, { error: error.message });
    
    // Show fallback content
    const adContainer = document.querySelector(`#ad-${placement}`);
    if (adContainer) {
      adContainer.innerHTML = `
        <div class="ad-fallback glass-card">
          <p>Advertisement space</p>
        </div>
      `;
    }
  }

  /**
   * Check if device is mobile
   * Uses screen size and user agent detection
   */
  isMobile() {
    return window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  /**
   * Get ad performance metrics
   * Returns comprehensive analytics data
   */
  getMetrics() {
    return {
      ...this.adMetrics,
      adBlockerDetected: this.adBlockerDetected,
      activeAds: Object.keys(this.adConfig).filter(key => this.adConfig[key].enabled).length
    };
  }

  /**
   * Enable/disable specific ad placement
   * Allows dynamic control of ad visibility
   */
  toggleAdPlacement(placement, enabled) {
    if (this.adConfig[placement]) {
      this.adConfig[placement].enabled = enabled;
      const adContainer = document.querySelector(`#ad-${placement}`);
      if (adContainer) {
        adContainer.style.display = enabled ? 'block' : 'none';
      }
    }
  }

  /**
   * Refresh all ads
   * Useful for single-page applications
   */
  refreshAds() {
    if (!this.adBlockerDetected && window.adsbygoogle) {
      try {
        window.adsbygoogle.forEach((ad, index) => {
          ad.innerHTML = '';
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        });
      } catch (error) {
        console.error('Error refreshing ads:', error);
      }
    }
  }
}

// Export default instance
export default new AdManager();