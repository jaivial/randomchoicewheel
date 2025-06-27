/**
 * InputManager Component - Part 2: Helper Functions and Utilities
 * Contains helper functions for option rendering, animations,
 * validation feedback, and storage management
 */
export class InputManagerHelpers {
  constructor(inputManager) {
    this.manager = inputManager;
  }

  /**
   * Create DOM element for a single option with enhanced styling
   * @param {string} option - Option text
   * @param {number} index - Option index
   * @returns {HTMLElement} Option element
   */
  createOptionElement(option, index) {
    const optionDiv = document.createElement('div');
    optionDiv.className = 'option-item';
    optionDiv.style.opacity = '0';
    optionDiv.style.transform = 'translateX(-20px)';
    const editTooltip = this.manager.t('options.editButton');
    const removeTooltip = this.manager.t('options.removeButton');
    
    optionDiv.innerHTML = `
      <span class="option-text" title="${option}">${option}</span>
      <div class="option-buttons">
        <button class="edit-option" data-index="${index}" title="${editTooltip}">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
            <path d="m18.5 2.5 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
          </svg>
        </button>
        <button class="remove-option" data-index="${index}" title="${removeTooltip}">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
      </div>
    `;
    
    // Add edit button event listener
    const editButton = optionDiv.querySelector('.edit-option');
    editButton.addEventListener('click', () => {
      this.manager.actions.editOption(index, optionDiv);
    });
    
    // Add remove button event listener
    const removeButton = optionDiv.querySelector('.remove-option');
    removeButton.addEventListener('click', () => {
      this.animateOptionRemove(optionDiv, () => {
        this.manager.actions.removeOption(index);
      });
    });
    
    return optionDiv;
  }

  /**
   * Animate option addition
   * @param {HTMLElement} element - Option element to animate
   */
  animateOptionAdd(element) {
    // Trigger reflow
    element.offsetHeight;
    
    // Add transition
    element.style.transition = 'all 0.3s ease-out';
    element.style.opacity = '1';
    element.style.transform = 'translateX(0)';
    
    // Add bounce effect
    setTimeout(() => {
      element.style.transform = 'scale(1.02)';
      setTimeout(() => {
        element.style.transform = 'scale(1)';
      }, 100);
    }, 300);
  }

  /**
   * Animate option removal
   * @param {HTMLElement} element - Option element to animate
   * @param {Function} callback - Callback to execute after animation
   */
  animateOptionRemove(element, callback) {
    element.style.transition = 'all 0.3s ease-in';
    element.style.opacity = '0';
    element.style.transform = 'translateX(20px) scale(0.8)';
    element.style.maxHeight = element.offsetHeight + 'px';
    
    setTimeout(() => {
      element.style.maxHeight = '0';
      element.style.padding = '0';
      element.style.margin = '0';
      
      setTimeout(() => {
        callback();
      }, 200);
    }, 300);
  }

  /**
   * Render empty state when no options exist
   */
  renderEmptyState() {
    const emptyDiv = document.createElement('div');
    emptyDiv.className = 'empty-state';
    emptyDiv.style.opacity = '0';
    const message = this.manager.t('options.noOptionsYet');
    emptyDiv.innerHTML = `
      <p style="text-align: center; opacity: 0.7; font-style: italic; padding: 2rem;">
        ${message}
      </p>
    `;
    
    this.manager.optionsList.appendChild(emptyDiv);
    
    // Animate in
    setTimeout(() => {
      emptyDiv.style.transition = 'opacity 0.3s ease-in';
      emptyDiv.style.opacity = '1';
    }, 50);
  }

  /**
   * Set input error state and message
   * @param {string} message - Error message
   */
  setInputError(message) {
    if (this.manager.optionInput) {
      this.manager.optionInput.style.borderColor = '#ff6b6b';
      this.manager.optionInput.style.boxShadow = '0 0 0 3px rgba(255, 107, 107, 0.2)';
      this.manager.optionInput.title = message;
      
      // Add shake animation
      this.manager.optionInput.style.animation = 'shake 0.5s ease-in-out';
      setTimeout(() => {
        this.manager.optionInput.style.animation = '';
      }, 500);
    }
  }

  /**
   * Clear input error state
   */
  clearInputError() {
    if (this.manager.optionInput) {
      this.manager.optionInput.style.borderColor = '';
      this.manager.optionInput.style.boxShadow = '';
      this.manager.optionInput.title = '';
      this.manager.optionInput.style.animation = '';
    }
  }

  /**
   * Show feedback messages with translations
   */
  showInputError() { 
    const message = this.manager.t('input.emptyOptionError');
    this.showToast(message, 'error'); 
  }
  showDuplicateError() { 
    const message = this.manager.t('input.duplicateOptionError');
    this.showToast(message, 'warning'); 
  }
  showMaxOptionsError() { 
    const message = this.manager.t('input.maxOptionsReached', { max: this.manager.maxOptions });
    this.showToast(message, 'warning'); 
  }
  showSuccessFeedback() { 
    const message = this.manager.t('success.optionAdded');
    this.showToast(message, 'success'); 
  }
  showRemovalFeedback(option) { 
    const message = this.manager.t('success.optionDeleted');
    this.showToast(message, 'info'); 
  }
  showClearFeedback() { 
    const message = this.manager.t('success.optionsCleared');
    this.showToast(message, 'info'); 
  }
  showEditSuccessFeedback(oldText, newText) { 
    const message = this.manager.t('success.optionEdited', { oldText, newText });
    this.showToast(message, 'success'); 
  }

  /**
   * Show toast notification
   * @param {string} message - Message to show
   * @param {string} type - Type of toast (success, error, warning, info)
   */
  showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    toast.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 1rem 1.5rem;
      border-radius: 8px;
      color: white;
      font-weight: 600;
      z-index: 10000;
      opacity: 0;
      transform: translateX(100%);
      transition: all 0.3s ease-out;
      background: ${this.getToastColor(type)};
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    `;
    
    document.body.appendChild(toast);
    
    // Animate in
    setTimeout(() => {
      toast.style.opacity = '1';
      toast.style.transform = 'translateX(0)';
    }, 50);
    
    // Auto remove
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      setTimeout(() => {
        document.body.removeChild(toast);
      }, 300);
    }, 3000);
  }

  /**
   * Get toast background color based on type
   */
  getToastColor(type) {
    const colors = {
      success: 'linear-gradient(135deg, #2ed573, #1e90ff)',
      error: 'linear-gradient(135deg, #ff6b6b, #ee5a24)',
      warning: 'linear-gradient(135deg, #feca57, #ff9f43)',
      info: 'linear-gradient(135deg, #4ecdc4, #45b7d1)'
    };
    return colors[type] || colors.info;
  }

  /**
   * Save options to localStorage
   */
  saveOptions() {
    try {
      localStorage.setItem('wheelOptions', JSON.stringify(this.manager.options));
    } catch (error) {
      console.warn('Could not save options to localStorage:', error);
    }
  }

  /**
   * Load options from localStorage
   */
  loadSavedOptions() {
    try {
      const saved = localStorage.getItem('wheelOptions');
      if (saved) {
        const parsedOptions = JSON.parse(saved);
        if (Array.isArray(parsedOptions) && parsedOptions.length > 0) {
          this.manager.options = parsedOptions.filter(option => 
            typeof option === 'string' && this.manager.isValidOption(option)
          );
          this.manager.renderOptions();
          this.manager.notifyOptionsChanged();
          return; // Exit early if we loaded options
        }
      }
      
      // No saved options or empty array - set defaults
      this.setDefaultOptions();
    } catch (error) {
      console.warn('Could not load options from localStorage:', error);
      this.setDefaultOptions();
    }
  }

  /**
   * Set default options when none are saved
   */
  setDefaultOptions() {
    this.manager.options = ['Pizza', 'Sushi', 'Tacos', 'Burgers', 'Thai Food'];
    this.manager.renderOptions();
    this.manager.saveOptions();
    this.manager.notifyOptionsChanged();
  }
}