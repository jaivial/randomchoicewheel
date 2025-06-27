/**
 * ResultModal Component - Part 1: Core Modal Functionality
 * Manages the modal that displays the winning result after wheel spin
 * Includes modal opening/closing animations and winner display
 */
import { ResultModalHelpers } from './ResultModal_part2.js';

export class ResultModal {
  constructor(languageManager = null) {
    this.modal = document.getElementById('result-modal');
    this.modalContent = this.modal?.querySelector('.modal-content');
    this.winnerText = document.getElementById('winner-text');
    this.closeButton = document.getElementById('close-modal-btn');
    this.spinAgainButton = document.getElementById('spin-again-btn');
    
    this.isOpen = false;
    this.currentWinner = null;
    
    // Language management
    this.languageManager = languageManager;
    
    // Initialize helpers
    this.helpers = new ResultModalHelpers(this);
    
    this.initializeEventListeners();
    this.setupLanguageListeners();
    this.updateUITexts();
  }

  /**
   * Setup language change listeners
   */
  setupLanguageListeners() {
    if (this.languageManager) {
      this.languageManager.addLanguageChangeListener(() => {
        this.updateUITexts();
      });
    }
  }

  /**
   * Update UI texts based on current language
   */
  updateUITexts() {
    if (!this.languageManager) return;
    
    // Update modal title
    const modalTitle = this.modal?.querySelector('h2');
    if (modalTitle) {
      modalTitle.textContent = this.languageManager.t('result.winnerTitle');
    }
    
    // Update button texts
    if (this.closeButton) {
      this.closeButton.textContent = this.languageManager.t('result.closeButton');
    }
    
    if (this.spinAgainButton) {
      this.spinAgainButton.textContent = this.languageManager.t('result.spinAgainButton');
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
   * Initialize event listeners for modal interactions
   */
  initializeEventListeners() {
    // Close button click
    if (this.closeButton) {
      this.closeButton.addEventListener('click', () => this.close());
    }
    
    // Spin again button click
    if (this.spinAgainButton) {
      this.spinAgainButton.addEventListener('click', () => this.spinAgain());
    }
    
    // Close modal when clicking outside content
    if (this.modal) {
      this.modal.addEventListener('click', (e) => {
        if (e.target === this.modal) {
          this.close();
        }
      });
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.close();
      }
    });
    
    // Listen for wheel winner events
    document.addEventListener('wheelWinner', (e) => {
      this.showWinner(e.detail.winner);
    });
  }

  /**
   * Display the winning result in the modal
   * @param {string} winner - The winning option text
   */
  showWinner(winner) {
    if (!this.modal || !this.winnerText) return;
    
    this.currentWinner = winner;
    this.helpers.updateWinnerDisplay();
    this.open();
    
    // Trigger confetti after modal opens
    setTimeout(() => {
      this.triggerConfetti();
    }, 300);
  }

  /**
   * Open the modal with animation
   */
  open() {
    if (!this.modal || this.isOpen) return;
    
    this.isOpen = true;
    this.modal.classList.remove('hidden');
    
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    
    // Add opening animation
    requestAnimationFrame(() => {
      this.modal.style.opacity = '0';
      this.modal.style.display = 'flex';
      
      requestAnimationFrame(() => {
        this.modal.style.transition = 'opacity 0.3s ease-out';
        this.modal.style.opacity = '1';
        
        if (this.modalContent) {
          this.modalContent.style.animation = 'modalSlideIn 0.4s ease-out';
        }
      });
    });
    
    // Focus management for accessibility
    this.helpers.trapFocus();
  }

  /**
   * Close the modal with animation
   */
  close() {
    if (!this.modal || !this.isOpen) return;
    
    this.isOpen = false;
    
    // Add closing animation
    this.modal.style.transition = 'opacity 0.2s ease-in';
    this.modal.style.opacity = '0';
    
    if (this.modalContent) {
      this.modalContent.style.animation = 'modalSlideOut 0.3s ease-in';
    }
    
    // Hide modal after animation
    setTimeout(() => {
      this.modal.classList.add('hidden');
      this.modal.style.display = 'none';
      this.modal.style.opacity = '';
      this.modal.style.transition = '';
      
      if (this.modalContent) {
        this.modalContent.style.animation = '';
      }
      
      // Restore body scroll
      document.body.style.overflow = '';
    }, 300);
    
    // Clear winner data
    this.currentWinner = null;
  }

  /**
   * Handle spin again button click - close modal and auto-spin
   */
  spinAgain() {
    this.close();
    
    // Auto-spin the wheel after a short delay to allow modal to close
    setTimeout(() => {
      const event = new CustomEvent('autoSpin');
      document.dispatchEvent(event);
    }, 200);
  }

  /**
   * Trigger confetti animation
   */
  triggerConfetti() {
    const event = new CustomEvent('triggerConfetti', {
      detail: { 
        winner: this.currentWinner,
        intensity: 'high'
      }
    });
    document.dispatchEvent(event);
  }

  /**
   * Check if modal is currently open
   * @returns {boolean} Whether modal is open
   */
  isModalOpen() {
    return this.isOpen;
  }

  /**
   * Get current winner
   * @returns {string|null} Current winner text
   */
  getCurrentWinner() {
    return this.currentWinner;
  }

  /**
   * Force close modal (for cleanup)
   */
  forceClose() {
    if (this.modal) {
      this.modal.classList.add('hidden');
      this.modal.style.display = 'none';
      document.body.style.overflow = '';
    }
    this.isOpen = false;
    this.currentWinner = null;
  }
}