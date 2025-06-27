/**
 * InputManager Component - Core Part 2: Rendering and Management Methods
 * Contains rendering, options management, and utility methods
 */
export class InputManagerCore2 {
  constructor(inputManager) {
    this.manager = inputManager;
  }

  /**
   * Render the options list in the DOM with animations
   */
  renderOptions() {
    if (!this.manager.optionsList) return;
    
    this.manager.optionsList.innerHTML = '';
    
    if (this.manager.options.length === 0) {
      this.manager.helpers.renderEmptyState();
      return;
    }
    
    this.manager.options.forEach((option, index) => {
      const optionElement = this.manager.helpers.createOptionElement(option, index);
      this.manager.optionsList.appendChild(optionElement);
      
      // Add animation for new options
      this.manager.helpers.animateOptionAdd(optionElement);
    });
    
    this.updateClearButtonState();
  }

  /**
   * Update clear button enabled/disabled state
   */
  updateClearButtonState() {
    if (this.manager.clearButton) {
      this.manager.clearButton.disabled = this.manager.options.length === 0;
    }
  }

  /**
   * Clear input field and reset state
   */
  clearInput() {
    if (this.manager.optionInput) {
      this.manager.optionInput.value = '';
      this.manager.helpers.clearInputError();
      this.manager.validateInput();
    }
  }

  /**
   * Save options to localStorage
   */
  saveOptions() {
    this.manager.helpers.saveOptions();
  }

  /**
   * Load options from localStorage
   */
  loadSavedOptions() {
    this.manager.helpers.loadSavedOptions();
  }

  /**
   * Notify other components of options change
   */
  notifyOptionsChanged() {
    const event = new CustomEvent('optionsChanged', {
      detail: { options: [...this.manager.options] }
    });
    document.dispatchEvent(event);
  }

  /**
   * Get current options list
   * @returns {Array} Current options
   */
  getOptions() {
    return [...this.manager.options];
  }

  /**
   * Set options programmatically
   * @param {Array} newOptions - New options array
   */
  setOptions(newOptions) {
    if (!Array.isArray(newOptions)) return;
    
    this.manager.options = newOptions
      .filter(option => typeof option === 'string' && this.manager.isValidOption(option))
      .slice(0, this.manager.maxOptions);
    
    this.renderOptions();
    this.saveOptions();
    this.notifyOptionsChanged();
  }
}