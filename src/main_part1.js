/**
 * Main Application Entry Point - Part 1: Core Application Class
 * Initializes and orchestrates all components for the Decision Wheel app
 * Manages component communication, global event handling, and internationalization
 */
import { WheelSpinner } from './components/WheelSpinner_part1.js';
import { InputManager } from './components/InputManager_core.js';
import { ResultModal } from './components/ResultModal_part1.js';
import { ConfettiEffect } from './components/ConfettiEffect_part1.js';
import { AppEventHandlers } from './main_part2.js';
import { WheelHistoryManager } from './components/WheelHistoryManager_part1.js';
import { LanguageManager } from './i18n/LanguageManager_core.js';
import { LanguageSelector } from './components/LanguageSelector_part1.js';
import { SEOManager } from './seo/SEOManager_part1.js';
import { SEOAdvancedManager } from './seo/SEOManager_part2.js';
import { SEOAnalyzer } from './seo/SEOAnalyzer.js';
import AdManager from './components/AdManager.js';
import SimpleAd from './components/SimpleAd.js';

/**
 * Main Application Class
 * Coordinates all components and manages application state
 */
class DecisionWheelApp {
  constructor() {
    this.components = {};
    this.isInitialized = false;
    
    // Initialize event handlers helper
    this.eventHandlers = new AppEventHandlers(this);
    
    this.initializeApp();
  }

  /**
   * Initialize the application and all components
   */
  async initializeApp() {
    try {
      // Wait for DOM to be ready
      if (document.readyState === 'loading') {
        await this.waitForDOMReady();
      }
      
      // Initialize language system first (before other components)
      await this.initializeLanguageSystem();
      
      // Initialize all other components
      this.initializeComponents();
      
      // Setup component communication
      this.eventHandlers.setupEventHandlers();
      
      // Load saved options after all components are ready
      this.loadInitialOptions();
      
      // Setup default options if none exist
      this.setupDefaultState();
      
      this.isInitialized = true;
      console.log('Decision Wheel App initialized successfully');
      
    } catch (error) {
      console.error('Failed to initialize Decision Wheel App:', error);
      this.showInitializationError();
    }
  }

  /**
   * Wait for DOM to be ready
   * @returns {Promise} Promise that resolves when DOM is ready
   */
  waitForDOMReady() {
    return new Promise(resolve => {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', resolve);
      } else {
        resolve();
      }
    });
  }

  /**
   * Initialize the language management system
   */
  async initializeLanguageSystem() {
    try {
      // Initialize Language Manager
      this.components.languageManager = new LanguageManager();
      
      // Wait for language manager to be fully initialized
      await this.components.languageManager.initialize();
      
      // Initialize SEO Manager (depends on Language Manager)
      this.components.seoManager = new SEOManager(this.components.languageManager);
      
      // Initialize Advanced SEO Manager (depends on basic SEO Manager)
      this.components.seoAdvancedManager = new SEOAdvancedManager(this.components.seoManager);
      
      // Initialize SEO Analyzer for development/analysis
      this.components.seoAnalyzer = new SEOAnalyzer();
      
      // Initialize Language Selector UI
      this.components.languageSelector = new LanguageSelector(this.components.languageManager);
      
      // Make language manager globally available for components
      window.i18n = this.components.languageManager;
      
      console.log('Language system initialized successfully');
      
    } catch (error) {
      console.error('Error initializing language system:', error);
      throw error;
    }
  }

  /**
   * Initialize all application components
   */
  initializeComponents() {
    try {
      // Initialize Input Manager first (handles options)
      this.components.inputManager = new InputManager(this.components.languageManager);
      
      // Initialize Wheel Spinner
      this.components.wheelSpinner = new WheelSpinner(this.components.languageManager);
      
      // Initialize Result Modal
      this.components.resultModal = new ResultModal(this.components.languageManager);
      
      // Initialize Confetti Effect
      this.components.confettiEffect = new ConfettiEffect();
      
      // Initialize Wheel History Manager
      this.components.historyManager = new WheelHistoryManager(this.components.languageManager);
      
      // Initialize Ad Manager
      this.components.adManager = AdManager;
      
      // Initialize Simple Ads (alternative implementation)
      this.components.simpleAd = SimpleAd;
      
      console.log('All components initialized');
      
    } catch (error) {
      console.error('Error initializing components:', error);
      throw error;
    }
  }

  /**
   * Load initial options after all components are ready
   */
  loadInitialOptions() {
    if (this.components.inputManager) {
      this.components.inputManager.loadSavedOptions();
    }
  }

  /**
   * Setup default application state
   */
  setupDefaultState() {
    // InputManager handles its own default options
    // Nothing needed here since loadSavedOptions() handles defaults
  }

  /**
   * Show initialization error to user
   */
  showInitializationError() {
    const errorHTML = `
      <div style="
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(255, 0, 0, 0.9);
        color: white;
        padding: 2rem;
        border-radius: 10px;
        text-align: center;
        z-index: 9999;
      ">
        <h2>⚠️ Application Error</h2>
        <p>Failed to initialize the Decision Wheel app.</p>
        <p>Please refresh the page to try again.</p>
        <button onclick="location.reload()" style="
          background: white;
          color: red;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 5px;
          cursor: pointer;
          margin-top: 1rem;
        ">
          Refresh Page
        </button>
      </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', errorHTML);
  }

  /**
   * Get application status
   * @returns {Object} Status object
   */
  getStatus() {
    return {
      initialized: this.isInitialized,
      components: Object.keys(this.components),
      optionsCount: this.components.inputManager?.getOptions().length || 0,
      wheelSpinning: this.components.wheelSpinner?.isSpinning || false,
      modalOpen: this.components.resultModal?.isModalOpen() || false
    };
  }

  /**
   * Run SEO analysis and get report
   * @param {string} format - Report format ('console', 'json', 'html')
   * @returns {Object|string} SEO analysis report
   */
  runSEOAnalysis(format = 'console') {
    if (!this.components.seoAnalyzer) {
      console.error('SEO Analyzer not initialized');
      return null;
    }
    
    return this.components.seoAnalyzer.generateReport(format);
  }

  /**
   * Cleanup resources (for testing or page unload)
   */
  cleanup() {
    // Stop any active animations
    if (this.components.confettiEffect) {
      this.components.confettiEffect.stop();
    }
    
    // Close modal
    if (this.components.resultModal) {
      this.components.resultModal.forceClose();
    }
    
    // Cleanup language components
    if (this.components.languageSelector) {
      this.components.languageSelector.cleanup();
    }
    
    // Cleanup SEO managers
    if (this.components.seoAdvancedManager) {
      this.components.seoAdvancedManager.cleanup();
    }
    
    if (this.components.seoManager) {
      this.components.seoManager.cleanup();
    }
    
    // Cleanup Ad Manager
    if (this.components.adManager) {
      // Ad Manager cleanup would be handled here if needed
      console.log('Ad Manager cleaned up');
    }
    
    // Remove global i18n reference
    if (window.i18n) {
      delete window.i18n;
    }
    
    console.log('Application cleaned up');
  }
}

// Initialize the application when script loads
const app = new DecisionWheelApp();

// Make app globally available for debugging
window.DecisionWheelApp = app;

// Handle page unload cleanup
window.addEventListener('beforeunload', () => {
  app.cleanup();
});