/**
 * Language Selector Component - Modal Version
 * Simple button that opens a centered modal for language selection
 * Clean and accessible design
 */

/**
 * Language Selector Component - Modal Design
 * Creates a simple button that opens a centered modal for language selection
 */
export class LanguageSelector {
  constructor(languageManager) {
    // Reference to the language manager instance
    this.languageManager = languageManager;
    
    // Component state
    this.isModalOpen = false;
    this.selectedLanguage = null;
    
    // DOM elements
    this.container = null;
    this.button = null;
    this.modal = null;
    this.modalOverlay = null;
    this.modalContent = null;
    this.currentFlag = null;
    this.currentLabel = null;
    this.autoDetectedBadge = null;
    
    // Event listeners array for cleanup
    this.eventListeners = [];
    
    // Initialize the component
    this.initialize();
  }

  /**
   * Initialize the language selector component
   */
  async initialize() {
    try {
      // Wait for language manager to be ready
      if (!this.languageManager.currentLanguage) {
        await this.waitForLanguageManager();
      }
      
      // Create the component UI
      this.createUI();
      
      // Setup event listeners
      this.setupEventListeners();
      
      // Update initial state
      this.updateDisplay();
      
      console.log('Language Selector (Modal) initialized successfully');
      
    } catch (error) {
      console.error('Error initializing Language Selector:', error);
    }
  }

  /**
   * Wait for language manager to be ready
   * @returns {Promise} Promise that resolves when language manager is ready
   */
  waitForLanguageManager() {
    return new Promise((resolve) => {
      const checkReady = () => {
        const currentLang = this.languageManager.getCurrentLanguage();
        if (this.languageManager.currentLanguage && currentLang && currentLang.code) {
          console.log('Language Manager is ready with language:', currentLang.code);
          resolve();
        } else {
          console.log('Waiting for Language Manager to be ready...');
          setTimeout(checkReady, 50);
        }
      };
      checkReady();
    });
  }

  /**
   * Create the language selector UI elements
   */
  createUI() {
    // Create main container (just the button)
    this.container = document.createElement('div');
    this.container.className = 'language-selector-container';
    
    // Create button that shows current language
    this.createButton();
    
    // Create modal for language selection
    this.createModal();
    
    // Add to page header
    this.insertIntoPage();
  }

  /**
   * Create the button that shows current language and opens modal
   */
  createButton() {
    this.button = document.createElement('button');
    this.button.className = 'language-selector-button';
    this.button.setAttribute('type', 'button');
    this.button.setAttribute('aria-label', 'Open language selector');
    
    // Modern language icon
    this.currentFlag = document.createElement('span');
    this.currentFlag.className = 'language-flag';
    this.currentFlag.setAttribute('aria-hidden', 'true');
    this.currentFlag.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    `;
    
    // Current language label
    this.currentLabel = document.createElement('span');
    this.currentLabel.className = 'language-label';
    
    // Auto-detected badge
    this.autoDetectedBadge = document.createElement('span');
    this.autoDetectedBadge.className = 'auto-detected-badge';
    this.autoDetectedBadge.textContent = 'Auto';
    this.autoDetectedBadge.setAttribute('title', 'Automatically detected');
    
    // Assemble button
    this.button.appendChild(this.currentFlag);
    this.button.appendChild(this.currentLabel);
    this.button.appendChild(this.autoDetectedBadge);
    
    this.container.appendChild(this.button);
  }

  /**
   * Create the modal for language selection
   */
  createModal() {
    // Create modal overlay
    this.modalOverlay = document.createElement('div');
    this.modalOverlay.className = 'language-modal-overlay hidden';
    this.modalOverlay.setAttribute('aria-hidden', 'true');
    
    // Create modal content
    this.modalContent = document.createElement('div');
    this.modalContent.className = 'language-modal-content glass-card';
    this.modalContent.setAttribute('role', 'dialog');
    this.modalContent.setAttribute('aria-labelledby', 'language-modal-title');
    this.modalContent.setAttribute('aria-modal', 'true');
    
    // Modal header
    const modalHeader = document.createElement('div');
    modalHeader.className = 'language-modal-header';
    
    const modalTitle = document.createElement('h2');
    modalTitle.id = 'language-modal-title';
    modalTitle.className = 'language-modal-title';
    modalTitle.textContent = 'Select Language';
    
    const closeButton = document.createElement('button');
    closeButton.className = 'language-modal-close';
    closeButton.setAttribute('type', 'button');
    closeButton.setAttribute('aria-label', 'Close language selector');
    closeButton.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="18" y1="6" x2="6" y2="18"/>
        <line x1="6" y1="6" x2="18" y2="18"/>
      </svg>
    `;
    
    modalHeader.appendChild(modalTitle);
    modalHeader.appendChild(closeButton);
    
    // Modal body with organized language options
    const modalBody = document.createElement('div');
    modalBody.className = 'language-modal-body';
    
    // Create search box for 40+ languages
    const searchContainer = document.createElement('div');
    searchContainer.className = 'language-search-container';
    
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    const searchPlaceholder = this.languageManager.t ? 
      this.languageManager.t('language.searchPlaceholder') : 
      'Search languages...';
    searchInput.placeholder = searchPlaceholder;
    searchInput.className = 'language-search-input';
    searchInput.setAttribute('aria-label', searchPlaceholder);
    
    searchContainer.appendChild(searchInput);
    modalBody.appendChild(searchContainer);
    
    // Get and organize languages by tier
    const supportedLanguages = this.languageManager.getSupportedLanguages();
    const languagesByTier = this.organizeLanguagesByTier(supportedLanguages);
    
    // Create tier sections
    this.createTierSections(modalBody, languagesByTier);
    
    // Add search functionality
    this.setupLanguageSearch(searchInput, modalBody);
    
    // Assemble modal
    this.modalContent.appendChild(modalHeader);
    this.modalContent.appendChild(modalBody);
    this.modalOverlay.appendChild(this.modalContent);
    
    // Append modal to body
    document.body.appendChild(this.modalOverlay);
    
    // Store close button reference
    this.closeButton = closeButton;
  }

  /**
   * Create a single language option with tier-based styling
   * @param {string} code - Language code
   * @param {Object} info - Language information
   * @returns {HTMLElement} Language option element
   */
  createLanguageOption(code, info) {
    const option = document.createElement('button');
    option.className = `language-option tier-${info.tier || 4}`;
    option.setAttribute('type', 'button');
    option.setAttribute('data-language', code);
    option.setAttribute('data-tier', info.tier || 4);
    option.setAttribute('aria-label', `Select ${info.name}`);
    
    // Add speakers count for sorting hint
    if (info.speakers) {
      option.setAttribute('data-speakers', info.speakers);
    }
    
    // Flag
    const flag = document.createElement('span');
    flag.className = 'language-flag';
    flag.textContent = info.flag || '🌐';
    flag.setAttribute('aria-hidden', 'true');
    
    // Language info container
    const infoContainer = document.createElement('div');
    infoContainer.className = 'language-info';
    
    // Native name
    const nativeName = document.createElement('span');
    nativeName.className = 'language-native-name';
    nativeName.textContent = info.nativeName;
    
    // English name without speaker count
    const englishName = document.createElement('span');
    englishName.className = 'language-english-name';
    englishName.textContent = info.name;
    
    infoContainer.appendChild(nativeName);
    infoContainer.appendChild(englishName);
    
    // Selected indicator
    const selectedIndicator = document.createElement('span');
    selectedIndicator.className = 'language-selected-indicator';
    selectedIndicator.innerHTML = '✓';
    selectedIndicator.setAttribute('aria-hidden', 'true');
    
    // Priority badge for tier 1 languages
    if (info.tier === 1) {
      const priorityBadge = document.createElement('span');
      priorityBadge.className = 'language-priority-badge';
      priorityBadge.textContent = this.languageManager.t ? 
        this.languageManager.t('language.popularTag') : 'Popular';
      priorityBadge.setAttribute('aria-hidden', 'true');
      option.appendChild(priorityBadge);
    }
    
    option.appendChild(flag);
    option.appendChild(infoContainer);
    option.appendChild(selectedIndicator);
    
    return option;
  }


  /**
   * Organize languages by tier for better UX
   * @param {Object} supportedLanguages - All supported languages
   * @returns {Object} Languages organized by tier
   */
  organizeLanguagesByTier(supportedLanguages) {
    const tiers = { 1: [], 2: [], 3: [], 4: [] };
    
    Object.entries(supportedLanguages).forEach(([code, info]) => {
      const tier = info.tier || 4;
      tiers[tier].push({ code, info });
    });
    
    // Sort each tier by speaker count (descending)
    Object.keys(tiers).forEach(tier => {
      tiers[tier].sort((a, b) => (b.info.speakers || 0) - (a.info.speakers || 0));
    });
    
    return tiers;
  }

  /**
   * Create tier sections in the modal
   * @param {HTMLElement} modalBody - Modal body element
   * @param {Object} languagesByTier - Languages organized by tier
   */
  createTierSections(modalBody, languagesByTier) {
    const tierNames = {
      1: this.languageManager.t ? this.languageManager.t('language.tierNames.mostPopular') : 'Most Popular Languages',
      2: this.languageManager.t ? this.languageManager.t('language.tierNames.regional') : 'Regional Languages',
      3: this.languageManager.t ? this.languageManager.t('language.tierNames.europeanAsian') : 'European & Asian Languages',
      4: this.languageManager.t ? this.languageManager.t('language.tierNames.additional') : 'Additional Languages'
    };

    Object.entries(languagesByTier).forEach(([tier, languages]) => {
      if (languages.length === 0) return;
      
      // Create tier section
      const tierSection = document.createElement('div');
      tierSection.className = `language-tier-section tier-${tier}`;
      
      // Tier header
      const tierHeader = document.createElement('h3');
      tierHeader.className = 'language-tier-header';
      tierHeader.textContent = tierNames[tier];
      tierSection.appendChild(tierHeader);
      
      // Languages container
      const languagesContainer = document.createElement('div');
      languagesContainer.className = 'language-tier-options';
      
      languages.forEach(({ code, info }) => {
        const option = this.createLanguageOption(code, info);
        languagesContainer.appendChild(option);
      });
      
      tierSection.appendChild(languagesContainer);
      modalBody.appendChild(tierSection);
    });
  }

  /**
   * Setup language search functionality
   * @param {HTMLElement} searchInput - Search input element
   * @param {HTMLElement} modalBody - Modal body element
   */
  setupLanguageSearch(searchInput, modalBody) {
    let searchTimeout;
    
    searchInput.addEventListener('input', (event) => {
      clearTimeout(searchTimeout);
      
      searchTimeout = setTimeout(() => {
        const query = event.target.value.toLowerCase().trim();
        this.filterLanguages(query, modalBody);
      }, 150);
    });
    
    // Clear search on escape
    searchInput.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        event.target.value = '';
        this.filterLanguages('', modalBody);
        event.target.blur();
      }
    });
  }

  /**
   * Filter languages based on search query
   * @param {string} query - Search query
   * @param {HTMLElement} modalBody - Modal body element
   */
  filterLanguages(query, modalBody) {
    const options = modalBody.querySelectorAll('.language-option');
    const tierSections = modalBody.querySelectorAll('.language-tier-section');
    const tierHeaders = modalBody.querySelectorAll('.language-tier-header');
    
    if (!query) {
      // Show all languages organized by tiers
      options.forEach(option => {
        option.style.display = '';
      });
      tierSections.forEach(section => {
        section.style.display = '';
      });
      tierHeaders.forEach(header => {
        header.style.display = '';
      });
      return;
    }
    
    // Hide tier organization during search
    tierHeaders.forEach(header => {
      header.style.display = 'none';
    });
    
    let hasVisibleOptions = false;
    
    options.forEach(option => {
      const nativeName = option.querySelector('.language-native-name')?.textContent.toLowerCase() || '';
      const englishName = option.querySelector('.language-english-name')?.textContent.toLowerCase() || '';
      const languageCode = option.getAttribute('data-language').toLowerCase();
      
      const matches = nativeName.includes(query) || 
                     englishName.includes(query) || 
                     languageCode.includes(query);
      
      if (matches) {
        option.style.display = '';
        hasVisibleOptions = true;
      } else {
        option.style.display = 'none';
      }
    });
    
    // Show no results message if needed
    this.toggleNoResultsMessage(modalBody, !hasVisibleOptions, query);
  }

  /**
   * Toggle no results message
   * @param {HTMLElement} modalBody - Modal body element
   * @param {boolean} show - Whether to show the message
   * @param {string} query - Search query
   */
  toggleNoResultsMessage(modalBody, show, query) {
    let noResults = modalBody.querySelector('.language-no-results');
    
    if (show && !noResults) {
      noResults = document.createElement('div');
      noResults.className = 'language-no-results';
      noResults.innerHTML = `
        <p>No languages found for "${query}"</p>
        <p class="suggestion">Try searching by language name or region</p>
      `;
      modalBody.appendChild(noResults);
    } else if (!show && noResults) {
      noResults.remove();
    }
  }

  /**
   * Insert the language selector into the page header
   */
  insertIntoPage() {
    // Find the header element
    const header = document.querySelector('header');
    if (header) {
      // Create a language selector wrapper in the header
      let langWrapper = document.querySelector('.header-language-wrapper');
      if (!langWrapper) {
        langWrapper = document.createElement('div');
        langWrapper.className = 'header-language-wrapper';
        header.appendChild(langWrapper);
      }
      
      langWrapper.appendChild(this.container);
      
    } else {
      // Fallback: add to body
      document.body.appendChild(this.container);
    }
  }

  /**
   * Setup all event listeners
   */
  setupEventListeners() {
    // Button click to open modal
    const buttonClickHandler = (event) => {
      event.preventDefault();
      event.stopPropagation();
      this.openModal();
    };
    this.button.addEventListener('click', buttonClickHandler);
    this.eventListeners.push({ element: this.button, event: 'click', handler: buttonClickHandler });
    
    // Close button click
    const closeClickHandler = (event) => {
      event.preventDefault();
      event.stopPropagation();
      this.closeModal();
    };
    this.closeButton.addEventListener('click', closeClickHandler);
    this.eventListeners.push({ element: this.closeButton, event: 'click', handler: closeClickHandler });
    
    // Language option click events
    const optionClickHandler = (event) => {
      event.preventDefault();
      event.stopPropagation();
      const languageCode = event.currentTarget.getAttribute('data-language');
      if (languageCode) {
        this.selectLanguage(languageCode);
      }
    };
    
    this.modalContent.querySelectorAll('.language-option').forEach(option => {
      option.addEventListener('click', optionClickHandler);
      this.eventListeners.push({ element: option, event: 'click', handler: optionClickHandler });
    });
    
    // Close modal when clicking overlay
    const overlayClickHandler = (event) => {
      if (event.target === this.modalOverlay) {
        this.closeModal();
      }
    };
    this.modalOverlay.addEventListener('click', overlayClickHandler);
    this.eventListeners.push({ element: this.modalOverlay, event: 'click', handler: overlayClickHandler });
    
    // Keyboard navigation
    const keydownHandler = (event) => {
      this.handleKeyboardNavigation(event);
    };
    document.addEventListener('keydown', keydownHandler);
    this.eventListeners.push({ element: document, event: 'keydown', handler: keydownHandler });
    
    // Listen for language changes from language manager
    const languageChangeHandler = (newLanguage) => {
      this.updateDisplay();
    };
    this.languageManager.addLanguageChangeListener(languageChangeHandler);
    this.eventListeners.push({ 
      element: this.languageManager, 
      event: 'languageChange', 
      handler: languageChangeHandler 
    });
  }

  /**
   * Handle keyboard navigation for accessibility
   * @param {KeyboardEvent} event - Keyboard event
   */
  handleKeyboardNavigation(event) {
    if (!this.isModalOpen) return;
    
    switch (event.key) {
      case 'Escape':
        event.preventDefault();
        this.closeModal();
        break;
        
      case 'Tab':
        // Trap focus within modal
        this.trapFocus(event);
        break;
    }
  }

  /**
   * Trap focus within modal for accessibility
   * @param {KeyboardEvent} event - Tab key event
   */
  trapFocus(event) {
    const focusableElements = this.modalContent.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];
    
    if (event.shiftKey) {
      if (document.activeElement === firstFocusable) {
        event.preventDefault();
        lastFocusable.focus();
      }
    } else {
      if (document.activeElement === lastFocusable) {
        event.preventDefault();
        firstFocusable.focus();
      }
    }
  }

  /**
   * Open the modal
   */
  openModal() {
    this.isModalOpen = true;
    this.modalOverlay.classList.remove('hidden');
    this.modalOverlay.setAttribute('aria-hidden', 'false');
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    
    // Focus management
    setTimeout(() => {
      const firstOption = this.modalContent.querySelector('.language-option');
      if (firstOption) {
        firstOption.focus();
      }
    }, 100);
  }

  /**
   * Close the modal
   */
  closeModal() {
    this.isModalOpen = false;
    this.modalOverlay.classList.add('hidden');
    this.modalOverlay.setAttribute('aria-hidden', 'true');
    
    // Restore body scroll
    document.body.style.overflow = '';
    
    // Return focus to button
    this.button.focus();
  }

  /**
   * Select a language
   * @param {string} languageCode - Language code to select
   */
  async selectLanguage(languageCode) {
    try {
      // Change language through language manager
      await this.languageManager.setLanguage(languageCode, true);
      
      // Close modal
      this.closeModal();
      
      console.log(`Language selected: ${languageCode}`);
      
    } catch (error) {
      console.error('Error selecting language:', error);
    }
  }

  /**
   * Update the display based on current language
   */
  updateDisplay() {
    const currentLang = this.languageManager.getCurrentLanguage();
    const supportedLanguages = this.languageManager.getSupportedLanguages();
    
    // Debug logging
    console.log('LanguageSelector updateDisplay:', {
      currentLang,
      currentLanguageCode: currentLang?.code,
      managerCurrentLanguage: this.languageManager.currentLanguage
    });
    
    if (currentLang && currentLang.code && supportedLanguages[currentLang.code]) {
      const langInfo = supportedLanguages[currentLang.code];
      
      // Update button display
      this.currentFlag.textContent = langInfo.flag;
      this.currentLabel.textContent = langInfo.nativeName;
      
      // Update auto-detected badge visibility
      if (this.languageManager.isAutoDetected()) {
        this.autoDetectedBadge.classList.remove('hidden');
      } else {
        this.autoDetectedBadge.classList.add('hidden');
      }
      
      // Update selected state in modal - use the actual current language code
      this.updateSelectedOption(currentLang.code);
      
      // Update accessibility attributes
      this.button.setAttribute('aria-label', `Current language: ${langInfo.name}. Click to change language.`);
      
      // Update modal title if translated
      const modalTitle = this.modalContent.querySelector('.language-modal-title');
      if (modalTitle && this.languageManager.t) {
        modalTitle.textContent = this.languageManager.t('language.selectorTitle') || 'Select Language';
      }
      
      // Update tier headers with translations
      this.updateTierHeaders();
      
      // Update search placeholder
      const searchInput = this.modalContent.querySelector('.language-search-input');
      if (searchInput && this.languageManager.t) {
        const placeholder = this.languageManager.t('language.searchPlaceholder');
        searchInput.placeholder = placeholder;
        searchInput.setAttribute('aria-label', placeholder);
      }
      
      // Update popular badges
      this.updatePopularBadges();
    } else {
      // Fallback display when language info is not available yet
      console.warn('Language info not available, using fallback display');
      this.currentFlag.textContent = '🌐';
      this.currentLabel.textContent = 'Loading...';
      this.autoDetectedBadge.classList.add('hidden');
      // Clear all selections when language is not properly detected
      this.updateSelectedOption(null);
    }
  }

  /**
   * Update tier headers with current language translations
   */
  updateTierHeaders() {
    if (!this.languageManager.t) return;
    
    const tierNames = {
      1: this.languageManager.t('language.tierNames.mostPopular'),
      2: this.languageManager.t('language.tierNames.regional'),
      3: this.languageManager.t('language.tierNames.europeanAsian'),
      4: this.languageManager.t('language.tierNames.additional')
    };
    
    Object.entries(tierNames).forEach(([tier, name]) => {
      const header = this.modalContent.querySelector(`.tier-${tier} .language-tier-header`);
      if (header && name) {
        header.textContent = name;
      }
    });
  }
  
  /**
   * Update popular badges with current language translation
   */
  updatePopularBadges() {
    if (!this.languageManager.t) return;
    
    const popularText = this.languageManager.t('language.popularTag');
    const badges = this.modalContent.querySelectorAll('.language-priority-badge');
    badges.forEach(badge => {
      if (popularText) {
        badge.textContent = popularText;
      }
    });
  }
  
  /**
   * Update the selected option styling in modal
   * @param {string} selectedCode - Currently selected language code
   */
  updateSelectedOption(selectedCode) {
    // Clear all selections first to avoid stale highlighting
    this.modalContent.querySelectorAll('.language-option').forEach(option => {
      option.classList.remove('selected');
    });
    
    // Then apply selection to the correct option
    if (selectedCode) {
      const selectedOption = this.modalContent.querySelector(`[data-language="${selectedCode}"]`);
      if (selectedOption) {
        selectedOption.classList.add('selected');
      }
    }
  }

  /**
   * Get current language selector state
   * @returns {Object} Current state
   */
  getState() {
    return {
      isModalOpen: this.isModalOpen,
      currentLanguage: this.languageManager.currentLanguage,
      isAutoDetected: this.languageManager.isAutoDetected(),
      supportedLanguages: Object.keys(this.languageManager.getSupportedLanguages())
    };
  }

  /**
   * Cleanup component resources
   */
  cleanup() {
    // Remove all event listeners
    this.eventListeners.forEach(({ element, event, handler }) => {
      if (element === this.languageManager) {
        element.removeLanguageChangeListener(handler);
      } else {
        element.removeEventListener(event, handler);
      }
    });
    
    // Remove from DOM
    if (this.container && this.container.parentNode) {
      this.container.parentNode.removeChild(this.container);
    }
    
    if (this.modalOverlay && this.modalOverlay.parentNode) {
      this.modalOverlay.parentNode.removeChild(this.modalOverlay);
    }
    
    // Restore body scroll if modal was open
    if (this.isModalOpen) {
      document.body.style.overflow = '';
    }
    
    console.log('Language Selector (Modal) cleaned up');
  }
}