/**
 * InputManager Component - Core Part 1: Main Class and Constructor
 * Contains the main InputManager class initialization and core properties
 */
import { InputManagerHelpers } from './InputManager_part2.js';
import { InputManagerActions } from './InputManager_actions.js';
import { ConfirmationModal } from './ConfirmationModal.js';
import { InputManagerCore2 } from './InputManager_core_part2.js';

export class InputManager {
  // Delegate methods to core2 for rendering and management
  renderOptions() { return this.core2.renderOptions(); }
  updateClearButtonState() { return this.core2.updateClearButtonState(); }
  clearInput() { return this.core2.clearInput(); }
  saveOptions() { return this.core2.saveOptions(); }
  loadSavedOptions() { return this.core2.loadSavedOptions(); }
  notifyOptionsChanged() { return this.core2.notifyOptionsChanged(); }
  getOptions() { return this.core2.getOptions(); }
  setOptions(newOptions) { return this.core2.setOptions(newOptions); }
  constructor(languageManager = null) {
    this.options = [];
    this.maxOptions = 20;
    this.minOptionLength = 1;
    this.maxOptionLength = Number.MAX_SAFE_INTEGER;
    
    // Language management
    this.languageManager = languageManager;
    
    // DOM elements
    this.optionInput = document.getElementById('option-input');
    this.addButton = document.getElementById('add-option-btn');
    this.clearButton = document.getElementById('clear-all-btn');
    this.optionsList = document.getElementById('options-list');
    
    // Initialize helpers, actions, core2, and confirmation modal
    this.helpers = new InputManagerHelpers(this);
    this.actions = new InputManagerActions(this);
    this.core2 = new InputManagerCore2(this);
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
        this.core2.renderOptions(); // Re-render options with new language
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
}