/**
 * Main Application Entry Point - Part 2: Event Handlers and App Utilities
 * Contains event handling logic and application utility functions
 */
export class AppEventHandlers {
  constructor(app) {
    this.app = app;
  }

  /**
   * Setup event handlers for component communication
   */
  setupEventHandlers() {
    // Handle options changes from InputManager
    document.addEventListener('optionsChanged', (e) => {
      const { options } = e.detail;
      this.handleOptionsChange(options);
    });
    
    // Handle wheel winner selection
    document.addEventListener('wheelWinner', (e) => {
      const { winner } = e.detail;
      this.handleWheelWinner(winner);
    });
    
    // Handle spin again requests
    document.addEventListener('spinAgain', () => {
      this.handleSpinAgain();
    });
    
    // Handle confetti triggers
    document.addEventListener('triggerConfetti', (e) => {
      const { winner, intensity } = e.detail;
      this.handleConfettiTrigger(winner, intensity);
    });
    
    // Handle keyboard shortcuts
    document.addEventListener('keydown', (e) => {
      this.handleKeyboardShortcuts(e);
    });
    
    // Handle window resize for responsive adjustments
    window.addEventListener('resize', () => {
      this.handleWindowResize();
    });
    
    // Handle visibility change (pause animations when tab not active)
    document.addEventListener('visibilitychange', () => {
      this.handleVisibilityChange();
    });
  }

  /**
   * Handle options change from InputManager
   * @param {Array} options - Updated options array
   */
  handleOptionsChange(options) {
    if (this.app.components.wheelSpinner) {
      this.app.components.wheelSpinner.updateOptions(options);
    }
    
    // Save to history if it's a new configuration
    if (this.app.components.historyManager && options.length > 0) {
      this.app.components.historyManager.saveWheelConfiguration(options);
    }
  }

  /**
   * Handle wheel winner selection
   * @param {string} winner - Winning option
   */
  handleWheelWinner(winner) {
    console.log(`Winner selected: ${winner}`);
    
    // Save winner to history
    if (this.app.components.historyManager) {
      const currentOptions = this.app.components.inputManager?.getOptions() || [];
      this.app.components.historyManager.saveSpinResult(currentOptions, winner);
    }
    
    // Modal will handle itself via its own event listener
    // Confetti will also trigger automatically
    
    // Check if modal ad should be displayed
    if (this.app.components.adManager) {
      // Create and potentially show modal ad
      import('./components/AdUnits.js').then(({ ModalAdUnit }) => {
        const modalAd = new ModalAdUnit();
        if (modalAd.shouldShow()) {
          modalAd.createElement();
          setTimeout(() => modalAd.show(), 2000); // Show after result modal
        }
      });
    }
    
    // Additional winner handling
    this.logWinnerToAnalytics(winner);
  }

  /**
   * Handle spin again request
   */
  handleSpinAgain() {
    // Reset wheel if needed
    if (this.app.components.wheelSpinner) {
      // Wheel will handle its own reset
    }
    
    // Stop any active confetti
    if (this.app.components.confettiEffect) {
      this.app.components.confettiEffect.stop();
    }
  }

  /**
   * Handle confetti trigger
   * @param {string} winner - Winner context
   * @param {string} intensity - Confetti intensity
   */
  handleConfettiTrigger(winner, intensity) {
    // Confetti component handles its own triggers
    console.log(`Confetti triggered for: ${winner}`);
  }

  /**
   * Handle keyboard shortcuts
   * @param {KeyboardEvent} e - Keyboard event
   */
  handleKeyboardShortcuts(e) {
    // Don't handle shortcuts if typing in input
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
      return;
    }
    
    switch (e.key.toLowerCase()) {
      case ' ':
      case 'enter':
        // Spacebar or Enter to spin
        e.preventDefault();
        if (this.app.components.wheelSpinner && !this.app.components.wheelSpinner.isSpinning) {
          const spinButton = document.getElementById('spin-btn');
          if (spinButton && !spinButton.disabled) {
            spinButton.click();
          }
        }
        break;
        
      case 'escape':
        // Escape to close modal (handled by modal component)
        break;
        
      case 'r':
        // R to reset/spin again
        if (this.app.components.resultModal && this.app.components.resultModal.isModalOpen()) {
          this.app.components.resultModal.spinAgain();
        }
        break;
        
      case 'h':
        // H to toggle history
        if (this.app.components.historyManager) {
          this.app.components.historyManager.toggleHistoryPanel();
        }
        break;
    }
  }

  /**
   * Handle window resize
   */
  handleWindowResize() {
    // Components handle their own responsive behavior
    // This could be used for additional global responsive logic
    
    // Update wheel size if needed
    if (this.app.components.wheelSpinner) {
      // Wheel handles its own resizing
    }
  }

  /**
   * Handle visibility change (tab focus/blur)
   */
  handleVisibilityChange() {
    if (document.hidden) {
      // Pause animations when tab is not visible
      if (this.app.components.confettiEffect) {
        this.app.components.confettiEffect.stop();
      }
    }
  }

  /**
   * Log winner selection for analytics (placeholder)
   * @param {string} winner - Winning option
   */
  logWinnerToAnalytics(winner) {
    // Placeholder for analytics tracking
    // In a real app, this would send data to analytics service
    const analyticsData = {
      event: 'wheel_spin_result',
      winner: winner,
      timestamp: new Date().toISOString(),
      totalOptions: this.app.components.inputManager?.getOptions().length || 0
    };
    
    console.log('Analytics:', analyticsData);
  }
}