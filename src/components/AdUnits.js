/**
 * AdUnits - Individual ad unit components
 * Provides reusable ad components for different placements
 * Integrates with AdManager for centralized ad management
 */

/**
 * Base AdUnit class for creating ad components
 * Handles common ad functionality and styling
 */
export class BaseAdUnit {
  constructor(placement, config = {}) {
    this.placement = placement;
    this.config = {
      size: { width: 300, height: 250 },
      adUnitId: 'ca-pub-7898475614767076/1940254660',
      responsive: true,
      lazy: true,
      ...config
    };
    this.element = null;
    this.loaded = false;
    this.visible = false;
  }

  /**
   * Create the ad unit HTML element
   * Generates the complete ad container with proper styling
   */
  createElement() {
    // Create container
    const container = document.createElement('div');
    container.className = `ad-container ad-${this.placement}`;
    container.id = `ad-${this.placement}`;

    // Add ad label for transparency
    const label = document.createElement('div');
    label.className = 'ad-label';
    label.textContent = 'Advertisement';
    container.appendChild(label);

    // Create AdSense unit
    const adUnit = document.createElement('ins');
    adUnit.className = 'adsbygoogle';
    adUnit.style.display = 'block';
    
    // Set ad unit attributes
    adUnit.setAttribute('data-ad-client', 'ca-pub-7898475614767076');
    adUnit.setAttribute('data-ad-slot', '1940254660');
    
    if (this.config.responsive) {
      adUnit.setAttribute('data-ad-format', 'auto');
      adUnit.setAttribute('data-full-width-responsive', 'true');
    } else {
      adUnit.style.width = `${this.config.size.width}px`;
      adUnit.style.height = `${this.config.size.height}px`;
    }

    container.appendChild(adUnit);
    this.element = container;
    return container;
  }

  /**
   * Load the ad unit
   * Initializes AdSense advertising
   */
  load() {
    if (this.loaded || !this.element) return;

    try {
      // Add loading class for visual feedback
      this.element.classList.add('loading');

      // Push to AdSense queue
      if (window.adsbygoogle) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        this.loaded = true;
        
        // Remove loading class after delay
        setTimeout(() => {
          this.element?.classList.remove('loading');
        }, 2000);
      }
    } catch (error) {
      console.error(`Failed to load ad unit ${this.placement}:`, error);
      this.showFallback();
    }
  }

  /**
   * Show fallback content when ad fails to load
   * Provides placeholder content maintaining layout
   */
  showFallback() {
    if (!this.element) return;

    const fallback = document.createElement('div');
    fallback.className = 'ad-fallback';
    fallback.innerHTML = `
      <p>Advertisement Space</p>
    `;

    // Replace ad content with fallback
    const adUnit = this.element.querySelector('.adsbygoogle');
    if (adUnit) {
      adUnit.parentNode.replaceChild(fallback, adUnit);
    }
  }

  /**
   * Set up intersection observer for lazy loading
   * Loads ads only when they become visible
   */
  setupLazyLoading() {
    if (!this.config.lazy || !this.element) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.loaded) {
          this.load();
          this.visible = true;
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '50px'
    });

    observer.observe(this.element);
  }

  /**
   * Destroy the ad unit
   * Cleans up event listeners and DOM elements
   */
  destroy() {
    if (this.element && this.element.parentNode) {
      this.element.parentNode.removeChild(this.element);
    }
    this.element = null;
    this.loaded = false;
    this.visible = false;
  }
}

/**
 * Header Ad Unit
 * Leaderboard banner for top of page
 */
export class HeaderAdUnit extends BaseAdUnit {
  constructor(config = {}) {
    super('header', {
      size: { width: 728, height: 90 },
      mobileSize: { width: 320, height: 50 },
      responsive: true,
      ...config
    });
  }

  createElement() {
    const element = super.createElement();
    
    // Add specific styling for header placement
    element.style.textAlign = 'center';
    element.style.marginBottom = 'var(--spacing-lg)';
    
    return element;
  }
}

/**
 * Sidebar Ad Unit
 * Medium rectangle for sidebar placement
 */
export class SidebarAdUnit extends BaseAdUnit {
  constructor(config = {}) {
    super('sidebar', {
      size: { width: 300, height: 250 },
      responsive: false,
      desktopOnly: true,
      ...config
    });
  }

  createElement() {
    const element = super.createElement();
    
    // Hide on mobile if desktop only
    if (this.config.desktopOnly && this.isMobile()) {
      element.style.display = 'none';
    }
    
    return element;
  }

  isMobile() {
    return window.innerWidth <= 768;
  }
}

/**
 * Content Ad Unit
 * Banner placement between content sections
 */
export class ContentAdUnit extends BaseAdUnit {
  constructor(config = {}) {
    super('content', {
      size: { width: 320, height: 100 },
      responsive: true,
      ...config
    });
  }

  createElement() {
    const element = super.createElement();
    
    // Center the content ad
    element.style.margin = 'var(--spacing-xl) auto';
    element.style.maxWidth = '500px';
    
    return element;
  }
}

/**
 * Footer Ad Unit
 * Bottom banner placement
 */
export class FooterAdUnit extends BaseAdUnit {
  constructor(config = {}) {
    super('footer', {
      size: { width: 728, height: 90 },
      mobileSize: { width: 320, height: 50 },
      responsive: true,
      ...config
    });
  }

  createElement() {
    const element = super.createElement();
    
    // Footer specific styling
    element.style.marginTop = 'var(--spacing-xl)';
    element.style.textAlign = 'center';
    
    return element;
  }
}

/**
 * Wheel Bottom Ad Unit
 * Medium rectangle below wheel (desktop only)
 */
export class WheelBottomAdUnit extends BaseAdUnit {
  constructor(config = {}) {
    super('wheel-bottom', {
      size: { width: 300, height: 250 },
      responsive: false,
      desktopOnly: true,
      ...config
    });
  }

  createElement() {
    const element = super.createElement();
    
    // Hide on mobile if desktop only
    if (this.config.desktopOnly && this.isMobile()) {
      element.style.display = 'none';
    }
    
    // Center the ad below wheel
    element.style.textAlign = 'center';
    element.style.marginTop = 'var(--spacing-xl)';
    
    return element;
  }

  isMobile() {
    return window.innerWidth <= 768;
  }
}

/**
 * After Wheel 1 Ad Unit
 * Banner after main container
 */
export class AfterWheel1AdUnit extends BaseAdUnit {
  constructor(config = {}) {
    super('after-wheel-1', {
      size: { width: 728, height: 90 },
      mobileSize: { width: 320, height: 50 },
      responsive: true,
      ...config
    });
  }

  createElement() {
    const element = super.createElement();
    
    // Add specific styling
    element.style.textAlign = 'center';
    element.style.margin = 'var(--spacing-2xl) auto';
    element.style.padding = 'var(--spacing-lg) 0';
    
    return element;
  }
}

/**
 * After Wheel 2 Ad Unit
 * Rectangle after main container
 */
export class AfterWheel2AdUnit extends BaseAdUnit {
  constructor(config = {}) {
    super('after-wheel-2', {
      size: { width: 300, height: 250 },
      responsive: true,
      ...config
    });
  }

  createElement() {
    const element = super.createElement();
    
    // Add specific styling
    element.style.textAlign = 'center';
    element.style.margin = 'var(--spacing-2xl) auto';
    element.style.padding = 'var(--spacing-lg) 0';
    
    return element;
  }
}

/**
 * Modal Ad Unit
 * Interstitial or overlay ad placement
 */
export class ModalAdUnit extends BaseAdUnit {
  constructor(config = {}) {
    super('modal', {
      size: { width: 300, height: 250 },
      responsive: true,
      frequency: 3, // Show every 3rd spin
      ...config
    });
    this.spinCount = 0;
  }

  /**
   * Check if modal ad should be shown
   * Based on frequency configuration
   */
  shouldShow() {
    this.spinCount++;
    return this.spinCount % this.config.frequency === 0;
  }

  createElement() {
    const element = super.createElement();
    
    // Create modal overlay
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay ad-modal-overlay';
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: var(--z-modal);
    `;

    // Create close button
    const closeButton = document.createElement('button');
    closeButton.className = 'glass-btn';
    closeButton.textContent = '✕';
    closeButton.style.cssText = `
      position: absolute;
      top: 10px;
      right: 10px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    `;

    closeButton.addEventListener('click', () => {
      this.hide();
    });

    element.appendChild(closeButton);
    overlay.appendChild(element);
    
    this.overlay = overlay;
    return overlay;
  }

  /**
   * Show modal ad
   * Displays overlay with ad content
   */
  show() {
    if (!this.shouldShow() || !this.overlay) return;

    document.body.appendChild(this.overlay);
    this.load();
    
    // Auto-hide after 10 seconds
    setTimeout(() => {
      this.hide();
    }, 10000);
  }

  /**
   * Hide modal ad
   * Removes overlay from DOM
   */
  hide() {
    if (this.overlay && this.overlay.parentNode) {
      this.overlay.parentNode.removeChild(this.overlay);
    }
  }
}

/**
 * Sticky Ad Unit
 * Floating ad that stays in viewport
 */
export class StickyAdUnit extends BaseAdUnit {
  constructor(config = {}) {
    super('sticky', {
      size: { width: 320, height: 50 },
      position: 'bottom', // 'top', 'bottom', 'left', 'right'
      responsive: true,
      ...config
    });
  }

  createElement() {
    const element = super.createElement();
    
    // Apply sticky positioning
    element.style.cssText = `
      position: fixed;
      ${this.config.position}: 0;
      left: 50%;
      transform: translateX(-50%);
      z-index: var(--z-dropdown);
      width: auto;
      max-width: 90vw;
    `;

    // Add close button for sticky ads
    const closeButton = document.createElement('button');
    closeButton.innerHTML = '✕';
    closeButton.className = 'sticky-ad-close';
    closeButton.style.cssText = `
      position: absolute;
      top: -10px;
      right: -10px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.9);
      color: #333;
      border: none;
      cursor: pointer;
      font-size: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
    `;

    closeButton.addEventListener('click', () => {
      this.destroy();
    });

    element.appendChild(closeButton);
    
    return element;
  }
}

/**
 * AdUnit Factory
 * Creates appropriate ad units based on placement type
 */
export class AdUnitFactory {
  static create(placement, config = {}) {
    switch (placement) {
      case 'header':
        return new HeaderAdUnit(config);
      case 'sidebar':
        return new SidebarAdUnit(config);
      case 'content':
        return new ContentAdUnit(config);
      case 'footer':
        return new FooterAdUnit(config);
      case 'wheel-bottom':
        return new WheelBottomAdUnit(config);
      case 'after-wheel-1':
        return new AfterWheel1AdUnit(config);
      case 'after-wheel-2':
        return new AfterWheel2AdUnit(config);
      case 'modal':
        return new ModalAdUnit(config);
      case 'sticky':
        return new StickyAdUnit(config);
      default:
        return new BaseAdUnit(placement, config);
    }
  }

  /**
   * Create multiple ad units
   * Bulk creation with configuration
   */
  static createMultiple(placements) {
    return placements.map(({ placement, config }) => 
      this.create(placement, config)
    );
  }
}

// Export all ad unit classes
export {
  BaseAdUnit,
  HeaderAdUnit,
  SidebarAdUnit,
  ContentAdUnit,
  FooterAdUnit,
  WheelBottomAdUnit,
  AfterWheel1AdUnit,
  AfterWheel2AdUnit,
  ModalAdUnit,
  StickyAdUnit,
  AdUnitFactory
};