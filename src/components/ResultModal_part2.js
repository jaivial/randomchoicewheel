/**
 * ResultModal Component - Part 2: Helper Functions and Utilities
 * Contains helper functions for winner display, animations,
 * focus management, and modal styling enhancements
 */
export class ResultModalHelpers {
  constructor(resultModal) {
    this.modal = resultModal;
  }

  /**
   * Update the winner display text and styling with improved readability
   */
  updateWinnerDisplay() {
    if (!this.modal.winnerText || !this.modal.currentWinner) return;
    
    // Clear existing content
    this.modal.winnerText.innerHTML = '';
    
    // Create container with solid background for better readability
    const winnerContainer = document.createElement('div');
    winnerContainer.style.cssText = `
      background: rgba(0, 0, 0, 0.8);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border-radius: 15px;
      padding: 2rem;
      border: 2px solid rgba(255, 255, 255, 0.2);
      box-shadow: 
        0 8px 32px rgba(0, 0, 0, 0.4),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
      position: relative;
      overflow: hidden;
    `;
    
    // Create winner text with enhanced styling and auto-adjusted font size
    const winnerSpan = document.createElement('span');
    winnerSpan.textContent = this.modal.currentWinner;
    
    // Calculate optimal font size based on text length
    const fontSize = this.calculateModalFontSize(this.modal.currentWinner);
    
    winnerSpan.style.cssText = `
      background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1);
      background-size: 200% 200%;
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: gradientShift 2s ease-in-out infinite;
      font-weight: 800;
      font-size: ${fontSize}rem;
      text-shadow: 0 2px 10px rgba(255, 255, 255, 0.3);
      display: block;
      text-align: center;
      line-height: 1.2;
      word-wrap: break-word;
      overflow-wrap: break-word;
      hyphens: auto;
    `;
    
    // Add decorative elements
    const sparkle1 = document.createElement('div');
    sparkle1.innerHTML = '✨';
    sparkle1.style.cssText = `
      position: absolute;
      top: 10px;
      left: 10px;
      font-size: 1.5rem;
      animation: sparkleFloat 3s ease-in-out infinite;
    `;
    
    const sparkle2 = document.createElement('div');
    sparkle2.innerHTML = '🎉';
    sparkle2.style.cssText = `
      position: absolute;
      top: 15px;
      right: 15px;
      font-size: 1.5rem;
      animation: sparkleFloat 3s ease-in-out infinite 0.5s;
    `;
    
    const sparkle3 = document.createElement('div');
    sparkle3.innerHTML = '⭐';
    sparkle3.style.cssText = `
      position: absolute;
      bottom: 10px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 1.2rem;
      animation: sparkleFloat 3s ease-in-out infinite 1s;
    `;
    
    // Assemble the container
    winnerContainer.appendChild(sparkle1);
    winnerContainer.appendChild(sparkle2);
    winnerContainer.appendChild(winnerSpan);
    winnerContainer.appendChild(sparkle3);
    
    this.modal.winnerText.appendChild(winnerContainer);
    
    // Add gradient animation CSS if not already present
    this.addGradientAnimation();
  }

  /**
   * Calculate optimal font size for modal text based on length and screen size
   * @param {string} text - The winner text to display
   * @returns {number} Font size in rem units
   */
  calculateModalFontSize(text) {
    if (!text) return 2.5;
    
    // Base font sizes for different screen sizes
    const isMobile = window.innerWidth <= 480;
    const isTablet = window.innerWidth <= 768;
    
    let baseSize, minSize, maxSize;
    
    if (isMobile) {
      baseSize = 2.2;
      minSize = 1.4;
      maxSize = 2.8;
    } else if (isTablet) {
      baseSize = 2.4;
      minSize = 1.6;
      maxSize = 3.0;
    } else {
      baseSize = 2.8;
      minSize = 1.8;
      maxSize = 3.5;
    }
    
    // Calculate size based on text length
    const textLength = text.length;
    let calculatedSize;
    
    if (textLength <= 10) {
      calculatedSize = maxSize;
    } else if (textLength <= 20) {
      calculatedSize = baseSize;
    } else if (textLength <= 30) {
      calculatedSize = baseSize * 0.85;
    } else if (textLength <= 50) {
      calculatedSize = baseSize * 0.7;
    } else {
      calculatedSize = minSize;
    }
    
    // Ensure size is within bounds
    return Math.max(minSize, Math.min(maxSize, calculatedSize));
  }

  /**
   * Add gradient and sparkle animation keyframes to document
   */
  addGradientAnimation() {
    const styleId = 'gradient-animation-styles';
    if (document.getElementById(styleId)) return;
    
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
      @keyframes gradientShift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
      
      @keyframes pulseGlow {
        0%, 100% { 
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
          transform: scale(1);
        }
        50% { 
          box-shadow: 0 0 30px rgba(255, 255, 255, 0.5);
          transform: scale(1.02);
        }
      }
      
      @keyframes sparkleFloat {
        0%, 100% { 
          transform: translateY(0) rotate(0deg);
          opacity: 0.7;
        }
        25% { 
          transform: translateY(-5px) rotate(90deg);
          opacity: 1;
        }
        50% { 
          transform: translateY(-10px) rotate(180deg);
          opacity: 0.8;
        }
        75% { 
          transform: translateY(-5px) rotate(270deg);
          opacity: 1;
        }
      }
      
      @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
      }
    `;
    document.head.appendChild(style);
  }

  /**
   * Trap focus within modal for accessibility
   */
  trapFocus() {
    if (!this.modal.modal) return;
    
    const focusableElements = this.modal.modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    // Focus first element
    if (firstElement) {
      firstElement.focus();
    }
    
    // Handle tab navigation
    const handleTabKey = (e) => {
      if (e.key !== 'Tab') return;
      
      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };
    
    // Add tab listener
    this.modal.modal.addEventListener('keydown', handleTabKey);
    
    // Remove listener when modal closes
    const originalClose = this.modal.close.bind(this.modal);
    this.modal.close = () => {
      this.modal.modal.removeEventListener('keydown', handleTabKey);
      this.modal.close = originalClose;
      originalClose();
    };
  }
}