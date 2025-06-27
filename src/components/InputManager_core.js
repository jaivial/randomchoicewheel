/**
 * InputManager Component - Core: Main Class and Essential Methods
 * Contains the main InputManager class with core functionality
 */
import { InputManagerHelpers } from './InputManager_part2.js';
import { InputManagerActions } from './InputManager_actions.js';
import { ConfirmationModal } from './ConfirmationModal.js';

export class InputManager {
  constructor(languageManager = null) {
    this.options = [];
    this.maxOptions = 20;
    this.minOptionLength = 1;
    this.maxOptionLength = 50;
    
    // Language management
    this.languageManager = languageManager;
    
    // DOM elements
    this.optionInput = document.getElementById('option-input');
    this.addButton = document.getElementById('add-option-btn');
    this.clearButton = document.getElementById('clear-all-btn');
    this.optionsList = document.getElementById('options-list');
    
    // Initialize helpers, actions, and confirmation modal
    this.helpers = new InputManagerHelpers(this);
    this.actions = new InputManagerActions(this);
    this.confirmationModal = new ConfirmationModal(this.languageManager);
    
    this.initializeEventListeners();
    this.setupLanguageListeners();
    this.updateUITexts();
    // loadSavedOptions() will be called by main app after all components are ready
  }

  /**
   * Setup language change listeners
   */
  setupLanguageListeners() {
    if (this.languageManager) {
      this.languageManager.addLanguageChangeListener(() => {
        this.updateUITexts();
        this.renderOptions(); // Re-render options with new language
        this.validateInput(); // Re-validate with new error messages
      });
    }
  }

  /**
   * Update UI texts based on current language
   */
  updateUITexts() {
    if (!this.languageManager) return;
    
    // Update app title and subtitle
    const appTitle = document.getElementById('app-title');
    if (appTitle) {
      appTitle.textContent = this.languageManager.t('header.title');
    }
    
    const appSubtitle = document.getElementById('app-subtitle');
    if (appSubtitle) {
      appSubtitle.textContent = this.languageManager.t('header.subtitle');
    }
    
    // Update placeholder text
    if (this.optionInput) {
      this.optionInput.placeholder = this.languageManager.t('input.placeholder');
    }
    
    // Update button texts
    if (this.addButton) {
      this.addButton.textContent = this.languageManager.t('input.addButton');
    }
    
    if (this.clearButton) {
      this.clearButton.textContent = this.languageManager.t('input.clearAllButton');
    }
    
    // Update section title
    const sectionTitle = document.querySelector('#input-section h2');
    if (sectionTitle) {
      sectionTitle.textContent = this.languageManager.t('input.sectionTitle');
    }
    
    // Update spin button
    const spinButton = document.getElementById('spin-btn');
    if (spinButton) {
      spinButton.textContent = this.languageManager.t('wheel.spinButton');
    }
  }

  /**
   * Get translated text with fallback
   * @param {string} key - Translation key
   * @param {Object} params - Parameters for interpolation
   * @returns {string} Translated text or fallback
   */
  t(key, params = {}) {
    if (this.languageManager) {
      return this.languageManager.t(key, params);
    }
    // Fallback for when language manager is not available
    return key;
  }

  /**
   * Initialize all event listeners for input management
   */
  initializeEventListeners() {
    // Add option button click
    if (this.addButton) {
      this.addButton.addEventListener('click', () => this.actions.addOption());
    }
    
    // Enter key on input field
    if (this.optionInput) {
      this.optionInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          this.actions.addOption();
        }
      });
      
      // Real-time validation
      this.optionInput.addEventListener('input', () => this.validateInput());
    }
    
    // Clear all options button
    if (this.clearButton) {
      this.clearButton.addEventListener('click', () => this.actions.clearAllOptions());
    }
  }

  /**
   * Validate option input
   * @param {string} optionText - Text to validate
   * @returns {boolean} Whether option is valid
   */
  isValidOption(optionText) {
    return optionText.length >= this.minOptionLength && 
           optionText.length <= this.maxOptionLength;
  }

  /**
   * Check if option already exists
   * @param {string} optionText - Text to check
   * @returns {boolean} Whether option is duplicate
   */
  isDuplicate(optionText) {
    return this.options.some(option => 
      option.toLowerCase() === optionText.toLowerCase()
    );
  }

  /**
   * Validate input field in real-time
   */
  validateInput() {
    if (!this.optionInput) return;
    
    const value = this.optionInput.value.trim();
    const addButton = this.addButton;
    
    if (!addButton) return;
    
    // Update button state based on validation
    if (value.length === 0) {
      addButton.disabled = true;
      this.helpers.clearInputError();
    } else if (!this.isValidOption(value)) {
      addButton.disabled = true;
      this.helpers.setInputError(this.t('input.optionTooLong', { max: this.maxOptionLength }));
    } else if (this.isDuplicate(value)) {
      addButton.disabled = true;
      this.helpers.setInputError(this.t('input.duplicateOptionError'));
    } else if (this.options.length >= this.maxOptions) {
      addButton.disabled = true;
      this.helpers.setInputError(this.t('input.maxOptionsReached', { max: this.maxOptions }));
    } else {
      addButton.disabled = false;
      this.helpers.clearInputError();
    }
  }

  /**
   * Render the options list in the DOM with animations
   */
  renderOptions() {
    if (!this.optionsList) return;
    
    this.optionsList.innerHTML = '';
    
    if (this.options.length === 0) {
      this.helpers.renderEmptyState();
      return;
    }
    
    this.options.forEach((option, index) => {
      const optionElement = this.helpers.createOptionElement(option, index);
      this.optionsList.appendChild(optionElement);
      
      // Add animation for new options
      this.helpers.animateOptionAdd(optionElement);
    });
    
    this.updateClearButtonState();
  }

  /**
   * Update clear button enabled/disabled state
   */
  updateClearButtonState() {
    if (this.clearButton) {
      this.clearButton.disabled = this.options.length === 0;
    }
  }

  /**
   * Clear input field and reset state
   */
  clearInput() {
    if (this.optionInput) {
      this.optionInput.value = '';
      this.helpers.clearInputError();
      this.validateInput();
    }
  }

  /**
   * Save options to localStorage
   */
  saveOptions() {
    this.helpers.saveOptions();
  }

  /**
   * Load options from localStorage
   */
  loadSavedOptions() {
    this.helpers.loadSavedOptions();
  }

  /**
   * Notify other components of options change
   */
  notifyOptionsChanged() {
    const event = new CustomEvent('optionsChanged', {
      detail: { options: [...this.options] }
    });
    document.dispatchEvent(event);
  }

  /**
   * Get current options list
   * @returns {Array} Current options
   */
  getOptions() {
    return [...this.options];
  }

  /**
   * Set options programmatically
   * @param {Array} newOptions - New options array
   */
  setOptions(newOptions) {
    if (!Array.isArray(newOptions)) return;
    
    this.options = newOptions
      .filter(option => typeof option === 'string' && this.isValidOption(option))
      .slice(0, this.maxOptions);
    
    this.renderOptions();
    this.saveOptions();
    this.notifyOptionsChanged();
  }

  /**
   * Load saved options (delegated to helper)
   */
  loadSavedOptions() {
    this.helpers.loadSavedOptions();
  }
}