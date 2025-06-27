/**
 * WheelSpinner Component - Part 1: Core Functionality
 * Manages the spinning wheel functionality including SVG generation,
 * rotation animations, and winner selection logic
 */
import { WheelSpinnerHelpers } from './WheelSpinner_part2.js';

export class WheelSpinner {
  constructor(languageManager = null, containerId = 'wheel-svg') {
    // Handle parameter flexibility - languageManager might be passed as first param
    if (typeof languageManager === 'string') {
      containerId = languageManager;
      languageManager = null;
    }
    
    this.languageManager = languageManager;
    this.container = document.getElementById(containerId);
    this.segmentsGroup = document.getElementById('wheel-segments');
    this.options = [];
    this.isSpinning = false;
    this.currentRotation = 0;
    
    // Color palette for wheel segments
    this.colors = [
      '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FECA57',
      '#FF9FF3', '#54A0FF', '#5F27CD', '#00D2D3', '#FF9F43',
      '#FF3838', '#2ED573', '#1E90FF', '#FF6348', '#7BED9F'
    ];
    
    // Initialize helpers
    this.helpers = new WheelSpinnerHelpers(this);
    
    this.initializeEventListeners();
    // Don't generate initial wheel - wait for InputManager to notify us
  }

  /**
   * Initialize event listeners for wheel interactions
   */
  initializeEventListeners() {
    const spinButton = document.getElementById('spin-btn');
    if (spinButton) {
      spinButton.addEventListener('click', () => this.spin());
    }
    
    // Listen for auto-spin events from result modal
    document.addEventListener('autoSpin', () => {
      this.spin();
    });
  }

  /**
   * Update wheel options and regenerate segments
   * @param {Array} newOptions - Array of option strings
   */
  updateOptions(newOptions) {
    this.options = [...newOptions];
    this.generateWheel();
    this.updateSpinButtonState();
  }

  /**
   * Generate wheel segments based on current options
   */
  generateWheel() {
    if (!this.segmentsGroup) return;
    
    // Clear existing segments and fallback
    this.segmentsGroup.innerHTML = '';
    this.clearFallback();
    
    if (this.options.length === 0) {
      this.helpers.createEmptyWheel();
      return;
    }

    // Show SVG again
    this.container.style.opacity = '1';

    const segmentAngle = 360 / this.options.length;
    const radius = 320; // Increased for even larger wheel
    const centerX = 350; // Updated for new viewBox
    const centerY = 350; // Updated for new viewBox

    // Special case for single option - fill entire wheel
    if (this.options.length === 1) {
      this.helpers.createSingleOptionWheel(centerX, centerY, radius, this.options[0]);
      return;
    }

    this.options.forEach((option, index) => {
      const startAngle = index * segmentAngle;
      const endAngle = (index + 1) * segmentAngle;
      const color = this.colors[index % this.colors.length];
      
      this.helpers.createSegment(
        centerX, centerY, radius, startAngle, endAngle, 
        color, option, index
      );
    });
  }

  /**
   * Clear fallback message
   */
  clearFallback() {
    const wheelContainer = this.container.parentElement;
    const fallback = wheelContainer.querySelector('.wheel-fallback');
    if (fallback) {
      fallback.remove();
    }
  }

  /**
   * Spin the wheel and select a winner
   */
  async spin() {
    if (this.isSpinning || this.options.length === 0) return;
    
    this.isSpinning = true;
    this.updateSpinButtonState();
    
    // Calculate spin parameters
    const minSpins = 3;
    const maxSpins = 6;
    const spins = Math.random() * (maxSpins - minSpins) + minSpins;
    const extraRotation = Math.random() * 360;
    const totalRotation = spins * 360 + extraRotation;
    
    // Apply spin animation
    const finalRotation = this.currentRotation + totalRotation;
    this.container.style.transform = `rotate(${finalRotation}deg)`;
    this.container.style.transition = 'transform 3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    
    // Wait for spin to complete
    await this.helpers.waitForSpin(3000);
    
    // Calculate winner with correct pointer alignment
    const segmentAngle = 360 / this.options.length;
    
    // Normalize rotation to 0-360 range
    let normalizedRotation = finalRotation % 360;
    if (normalizedRotation < 0) normalizedRotation += 360;
    
    // The pointer is at the top (12 o'clock = 270 degrees in SVG coordinate system)
    // Segments start at 0 degrees (3 o'clock) and go clockwise
    // After rotation, we need to find which segment is under the pointer
    const pointerAngle = 270; // Top position
    
    // Calculate the effective angle where the pointer is pointing after rotation
    // We subtract the rotation because the wheel rotates, but the pointer stays fixed
    let pointingAngle = (pointerAngle - normalizedRotation) % 360;
    if (pointingAngle < 0) pointingAngle += 360;
    
    // Find which segment this angle falls into
    const winnerIndex = Math.floor(pointingAngle / segmentAngle) % this.options.length;
    
    // Debug logging to verify calculation
    console.log(`Wheel Debug:
      Final rotation: ${finalRotation}°
      Normalized rotation: ${normalizedRotation}°
      Pointing angle: ${pointingAngle}°
      Segment angle: ${segmentAngle}°
      Winner index: ${winnerIndex}
      Winner: "${this.options[winnerIndex]}"
      Options: [${this.options.map((opt, i) => `${i}:"${opt}"`).join(', ')}]`);
    
    this.currentRotation = finalRotation;
    this.isSpinning = false;
    this.updateSpinButtonState();
    
    // Announce winner
    this.announceWinner(this.options[winnerIndex]);
  }

  /**
   * Announce the winning option
   * @param {string} winner - Winning option text
   */
  announceWinner(winner) {
    const event = new CustomEvent('wheelWinner', {
      detail: { winner }
    });
    document.dispatchEvent(event);
  }

  /**
   * Update spin button enabled/disabled state
   */
  updateSpinButtonState() {
    const spinButton = document.getElementById('spin-btn');
    if (spinButton) {
      spinButton.disabled = this.isSpinning || this.options.length === 0;
      
      // Use translations if available
      const spinText = this.languageManager ? 
        this.languageManager.t('wheel.spinButton') : 'Spin the Wheel!';
      const spinningText = this.languageManager ? 
        this.languageManager.t('wheel.spinningButton') : 'Spinning...';
      
      spinButton.textContent = this.isSpinning ? spinningText : spinText;
    }
  }

  /**
   * Reset wheel rotation to starting position
   */
  reset() {
    this.currentRotation = 0;
    this.container.style.transform = 'rotate(0deg)';
    this.container.style.transition = 'none';
    this.isSpinning = false;
    this.updateSpinButtonState();
  }
}