/**
 * InputManager Component - Actions: User Action Handlers
 * Contains methods for handling user actions like adding, removing,
 * and clearing options with proper validation and feedback
 */
export class InputManagerActions {
  constructor(inputManager) {
    this.manager = inputManager;
  }

  /**
   * Add a new option to the wheel with animation
   */
  addOption() {
    if (!this.manager.optionInput) return;
    
    const optionText = this.manager.optionInput.value.trim();
    
    // Validate input
    if (!this.manager.isValidOption(optionText)) {
      this.manager.helpers.showInputError();
      return;
    }
    
    // Check for duplicates
    if (this.manager.isDuplicate(optionText)) {
      this.manager.helpers.showDuplicateError();
      return;
    }
    
    // Check maximum options limit
    if (this.manager.options.length >= this.manager.maxOptions) {
      this.manager.helpers.showMaxOptionsError();
      return;
    }
    
    // Add option
    this.manager.options.push(optionText);
    this.manager.clearInput();
    this.manager.renderOptions();
    this.manager.saveOptions();
    this.manager.notifyOptionsChanged();
    
    // Show success feedback
    this.manager.helpers.showSuccessFeedback();
  }

  /**
   * Remove an option by index with animation
   * @param {number} index - Index of option to remove
   */
  removeOption(index) {
    if (index >= 0 && index < this.manager.options.length) {
      const removedOption = this.manager.options.splice(index, 1)[0];
      this.manager.renderOptions();
      this.manager.saveOptions();
      this.manager.notifyOptionsChanged();
      
      // Show removal feedback
      this.manager.helpers.showRemovalFeedback(removedOption);
    }
  }

  /**
   * Edit an existing option with inline editing
   * @param {number} index - Index of option to edit
   * @param {HTMLElement} optionElement - The option DOM element
   */
  editOption(index, optionElement) {
    if (index < 0 || index >= this.manager.options.length) return;

    const currentText = this.manager.options[index];
    const optionTextSpan = optionElement.querySelector('.option-text');
    const optionButtons = optionElement.querySelector('.option-buttons');
    
    // Create input field for editing
    const editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.className = 'edit-option-input';
    editInput.value = currentText;
    // Remove maxLength restriction to allow unlimited text
    
    // Create edit control buttons
    const saveTooltip = this.manager.t('options.saveEditButton');
    const cancelTooltip = this.manager.t('options.cancelEditButton');
    
    const editControls = document.createElement('div');
    editControls.className = 'edit-controls';
    editControls.innerHTML = `
      <button class="save-edit" title="${saveTooltip}">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="20,6 9,17 4,12"/>
        </svg>
      </button>
      <button class="cancel-edit" title="${cancelTooltip}">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    `;
    
    // Hide original content and show edit interface
    optionTextSpan.style.display = 'none';
    optionButtons.style.display = 'none';
    
    // Insert edit interface
    optionElement.insertBefore(editInput, optionTextSpan);
    optionElement.insertBefore(editControls, optionTextSpan);
    
    // Focus and select text
    editInput.focus();
    editInput.select();
    
    // Add event listeners for edit controls
    const saveButton = editControls.querySelector('.save-edit');
    const cancelButton = editControls.querySelector('.cancel-edit');
    
    const saveEdit = () => {
      const newText = editInput.value.trim();
      
      // Validate the new text
      if (!this.manager.isValidOption(newText)) {
        this.manager.helpers.showInputError();
        editInput.focus();
        return;
      }
      
      // Check for duplicates (excluding current option)
      const otherOptions = this.manager.options.filter((_, i) => i !== index);
      if (otherOptions.includes(newText)) {
        this.manager.helpers.showDuplicateError();
        editInput.focus();
        return;
      }
      
      // Update the option
      this.manager.options[index] = newText;
      this.manager.renderOptions();
      this.manager.saveOptions();
      this.manager.notifyOptionsChanged();
      
      // Show success feedback
      this.manager.helpers.showEditSuccessFeedback(currentText, newText);
    };
    
    const cancelEdit = () => {
      // Restore original interface
      editInput.remove();
      editControls.remove();
      optionTextSpan.style.display = '';
      optionButtons.style.display = '';
    };
    
    // Event listeners
    saveButton.addEventListener('click', saveEdit);
    cancelButton.addEventListener('click', cancelEdit);
    
    // Save on Enter, cancel on Escape
    editInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        saveEdit();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        cancelEdit();
      }
    });
    
    // Cancel if click outside
    const handleClickOutside = (e) => {
      if (!optionElement.contains(e.target)) {
        cancelEdit();
        document.removeEventListener('click', handleClickOutside);
      }
    };
    
    // Delay the listener to avoid immediate trigger
    setTimeout(() => {
      document.addEventListener('click', handleClickOutside);
    }, 100);
  }

  /**
   * Clear all options with custom confirmation modal
   */
  async clearAllOptions() {
    if (this.manager.options.length === 0) return;
    
    // Show confirmation for multiple options
    if (this.manager.options.length > 1) {
      const title = this.manager.t('input.clearAllButton');
      const message = this.manager.t('input.clearAllConfirmation', { count: this.manager.options.length });
      const confirmText = this.manager.t('input.clearAllButton');
      const cancelText = this.manager.t('options.cancelEdit');
      
      const confirmed = await this.manager.confirmationModal.show({
        title,
        message,
        confirmText,
        cancelText
      });
      
      if (!confirmed) return;
    }
    
    this.manager.options = [];
    this.manager.renderOptions();
    this.manager.saveOptions();
    this.manager.notifyOptionsChanged();
    
    // Show clear feedback
    this.manager.helpers.showClearFeedback();
  }
}