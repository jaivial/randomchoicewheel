/**
 * ConfirmationModal Component
 * Custom modal for confirming destructive actions like "clear all"
 * Provides better UX than browser's confirm() dialog
 */
export class ConfirmationModal {
  constructor(languageManager = null) {
    this.languageManager = languageManager;
    this.modal = null;
    this.isOpen = false;
    this.currentResolve = null;
    
    this.createModal();
    this.setupEventListeners();
  }

  /**
   * Create the modal HTML structure
   */
  createModal() {
    const modal = document.createElement('div');
    modal.id = 'confirmation-modal';
    modal.className = 'confirmation-modal hidden';
    
    modal.innerHTML = `
      <div class="confirmation-overlay"></div>
      <div class="confirmation-content glass-card">
        <div class="confirmation-header">
          <div class="confirmation-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.667-.833-2.5 0L4.268 18.5c-.77.833.192 2.5 1.732 2.5z"/>
            </svg>
          </div>
          <h3 class="confirmation-title"></h3>
        </div>
        <div class="confirmation-body">
          <p class="confirmation-message"></p>
        </div>
        <div class="confirmation-footer">
          <button class="confirmation-cancel glass-btn">Cancel</button>
          <button class="confirmation-confirm glass-btn danger">Confirm</button>
        </div>
      </div>
    `;
    
    document.getElementById('app').appendChild(modal);
    this.modal = modal;
    
    this.addStyles();
  }

  /**
   * Add CSS styles for the confirmation modal
   */
  addStyles() {
    const styleId = 'confirmation-modal-styles';
    if (document.getElementById(styleId)) return;
    
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
      .confirmation-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s ease-out;
      }
      
      .confirmation-modal.open {
        opacity: 1;
      }
      
      .confirmation-modal.hidden {
        display: none;
      }
      
      .confirmation-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(4px);
        -webkit-backdrop-filter: blur(4px);
      }
      
      .confirmation-content {
        position: relative;
        max-width: 450px;
        width: 90%;
        margin: 0 auto;
        padding: 0;
        transform: scale(0.9);
        transition: transform 0.3s ease-out;
      }
      
      .confirmation-modal.open .confirmation-content {
        transform: scale(1);
      }
      
      .confirmation-header {
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1.5rem 1.5rem 1rem 1.5rem;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }
      
      .confirmation-icon {
        color: #ff6b6b;
        flex-shrink: 0;
      }
      
      .confirmation-title {
        margin: 0;
        font-size: 1.25rem;
        font-weight: 600;
        color: white;
      }
      
      .confirmation-body {
        padding: 1.5rem;
      }
      
      .confirmation-message {
        margin: 0;
        color: rgba(255, 255, 255, 0.9);
        line-height: 1.5;
      }
      
      .confirmation-footer {
        display: flex;
        gap: 0.75rem;
        padding: 1rem 1.5rem 1.5rem 1.5rem;
        justify-content: flex-end;
      }
      
      .confirmation-cancel {
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
      }
      
      .confirmation-cancel:hover {
        background: rgba(255, 255, 255, 0.2);
      }
      
      .confirmation-confirm.danger {
        background: linear-gradient(135deg, #ff6b6b, #ee5a52);
        border: 1px solid rgba(255, 107, 107, 0.3);
      }
      
      .confirmation-confirm.danger:hover {
        background: linear-gradient(135deg, #ff5252, #e53935);
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(255, 107, 107, 0.3);
      }
      
      @media (max-width: 480px) {
        .confirmation-content {
          width: 95%;
          max-width: none;
        }
        
        .confirmation-footer {
          flex-direction: column;
        }
        
        .confirmation-footer button {
          width: 100%;
        }
      }
      
      /* Disable hover effects on touch devices */
      @media (hover: none) and (pointer: coarse) {
        .confirmation-cancel:hover,
        .confirmation-confirm.danger:hover {
          background: inherit !important;
          transform: none !important;
          box-shadow: inherit !important;
        }
        
        .confirmation-cancel,
        .confirmation-confirm {
          transition: none !important;
        }
        
        .confirmation-cancel:active,
        .confirmation-confirm:active {
          transform: scale(0.98) !important;
          opacity: 0.8 !important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  /**
   * Setup event listeners for modal interactions
   */
  setupEventListeners() {
    // Close on overlay click
    this.modal.querySelector('.confirmation-overlay').addEventListener('click', () => {
      this.close(false);
    });
    
    // Cancel button
    this.modal.querySelector('.confirmation-cancel').addEventListener('click', () => {
      this.close(false);
    });
    
    // Confirm button
    this.modal.querySelector('.confirmation-confirm').addEventListener('click', () => {
      this.close(true);
    });
    
    // Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.close(false);
      }
    });
  }

  /**
   * Show confirmation modal
   * @param {Object} options - Modal configuration
   * @param {string} options.title - Modal title
   * @param {string} options.message - Modal message
   * @param {string} options.confirmText - Confirm button text
   * @param {string} options.cancelText - Cancel button text
   * @returns {Promise<boolean>} True if confirmed, false if cancelled
   */
  show(options = {}) {
    return new Promise((resolve) => {
      this.currentResolve = resolve;
      
      // Set content
      const title = options.title || (this.languageManager ? this.languageManager.t('input.clearAllButton') : 'Confirm Action');
      const message = options.message || 'Are you sure you want to continue?';
      const confirmText = options.confirmText || (this.languageManager ? this.languageManager.t('input.clearAllButton') : 'Confirm');
      const cancelText = options.cancelText || (this.languageManager ? this.languageManager.t('options.cancelEdit') : 'Cancel');
      
      this.modal.querySelector('.confirmation-title').textContent = title;
      this.modal.querySelector('.confirmation-message').textContent = message;
      this.modal.querySelector('.confirmation-confirm').textContent = confirmText;
      this.modal.querySelector('.confirmation-cancel').textContent = cancelText;
      
      // Show modal
      this.modal.classList.remove('hidden');
      this.isOpen = true;
      
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
      
      // Add opening animation
      requestAnimationFrame(() => {
        this.modal.classList.add('open');
      });
      
      // Focus confirm button
      setTimeout(() => {
        this.modal.querySelector('.confirmation-cancel').focus();
      }, 100);
    });
  }

  /**
   * Close modal with result
   * @param {boolean} confirmed - Whether user confirmed
   */
  close(confirmed) {
    if (!this.isOpen) return;
    
    this.isOpen = false;
    this.modal.classList.remove('open');
    
    // Hide modal after animation
    setTimeout(() => {
      this.modal.classList.add('hidden');
      document.body.style.overflow = '';
      
      // Resolve promise
      if (this.currentResolve) {
        this.currentResolve(confirmed);
        this.currentResolve = null;
      }
    }, 300);
  }

  /**
   * Get translated text with fallback
   * @param {string} key - Translation key
   * @returns {string} Translated text or fallback
   */
  t(key) {
    if (this.languageManager) {
      return this.languageManager.t(key);
    }
    return key;
  }
}