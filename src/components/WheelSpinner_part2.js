/**
 * WheelSpinner Component - Part 2: Helper Functions and Utilities
 * Contains utility functions for wheel rendering, text calculation,
 * and segment creation
 */
export class WheelSpinnerHelpers {
  constructor(wheelSpinner) {
    this.wheel = wheelSpinner;
  }

  /**
   * Create fallback message when no options exist
   */
  createEmptyWheel() {
    // Create fallback container
    const fallbackDiv = document.createElement('div');
    fallbackDiv.className = 'wheel-fallback glass-card';
    const title = this.wheel.languageManager ? 
      this.wheel.languageManager.t('options.noOptionsWheel') : 'No Options Added';
    const description = this.wheel.languageManager ? 
      this.wheel.languageManager.t('options.noOptionsWheelDesc') : 'Add some options to get started with your decision wheel!';
    
    fallbackDiv.innerHTML = `
      <div class="fallback-icon">🎯</div>
      <h3>${title}</h3>
      <p>${description}</p>
      <div class="fallback-arrow">👆</div>
    `;
    
    // Style the fallback
    fallbackDiv.style.cssText = `
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      padding: 2rem;
      max-width: 350px;
      width: 90vw;
      animation: fadeIn 0.5s ease-out;
    `;
    
    // Insert into wheel container
    const wheelContainer = this.wheel.container.parentElement;
    wheelContainer.style.position = 'relative';
    wheelContainer.appendChild(fallbackDiv);
    
    // Hide the SVG
    this.wheel.container.style.opacity = '0.1';
  }

  /**
   * Create individual wheel segment with larger size
   * @param {number} centerX - Center X coordinate
   * @param {number} centerY - Center Y coordinate
   * @param {number} radius - Segment radius
   * @param {number} startAngle - Start angle in degrees
   * @param {number} endAngle - End angle in degrees
   * @param {string} color - Segment color
   * @param {string} text - Segment text
   * @param {number} index - Segment index
   */
  createSegment(centerX, centerY, radius, startAngle, endAngle, color, text, index) {
    const startAngleRad = (startAngle * Math.PI) / 180;
    const endAngleRad = (endAngle * Math.PI) / 180;
    
    const x1 = centerX + radius * Math.cos(startAngleRad);
    const y1 = centerY + radius * Math.sin(startAngleRad);
    const x2 = centerX + radius * Math.cos(endAngleRad);
    const y2 = centerY + radius * Math.sin(endAngleRad);
    
    const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0;
    
    const pathData = [
      `M ${centerX} ${centerY}`,
      `L ${x1} ${y1}`,
      `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
      'Z'
    ].join(' ');
    
    // Create segment path
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', pathData);
    path.setAttribute('fill', color);
    path.setAttribute('stroke', 'rgba(255, 255, 255, 0.2)');
    path.setAttribute('stroke-width', '1');
    path.setAttribute('class', 'wheel-segment');
    path.setAttribute('data-index', index);
    
    // Create segment text with better positioning
    const midAngle = (startAngle + endAngle) / 2;
    const textRadius = radius * 0.6; // Moved closer to center for better fit
    const textX = centerX + textRadius * Math.cos((midAngle * Math.PI) / 180);
    const textY = centerY + textRadius * Math.sin((midAngle * Math.PI) / 180);
    
    const textElement = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    textElement.setAttribute('x', textX);
    textElement.setAttribute('y', textY);
    textElement.setAttribute('text-anchor', 'middle');
    textElement.setAttribute('dominant-baseline', 'central');
    textElement.setAttribute('fill', 'white');
    textElement.setAttribute('font-size', this.calculateFontSize(text, this.wheel.options.length));
    textElement.setAttribute('font-weight', '600');
    textElement.setAttribute('font-family', 'system-ui, -apple-system, sans-serif');
    textElement.setAttribute('transform', `rotate(${midAngle}, ${textX}, ${textY})`);
    
    // Add subtle text shadow for better readability
    textElement.style.textShadow = '0.5px 0.5px 1px rgba(0,0,0,0.4)';
    textElement.style.filter = 'drop-shadow(0.5px 0.5px 1px rgba(0,0,0,0.4))';
    
    textElement.textContent = this.truncateText(text, this.wheel.options.length);
    
    this.wheel.segmentsGroup.appendChild(path);
    this.wheel.segmentsGroup.appendChild(textElement);
  }

  /**
   * Calculate appropriate font size based on text length and segment count with better scaling
   * @param {string} text - Text content
   * @param {number} segmentCount - Number of segments
   * @returns {number} Font size
   */
  calculateFontSize(text, segmentCount) {
    // Check screen size for different font sizes
    const isMobile = window.innerWidth <= 480;
    const isTablet = window.innerWidth <= 768;
    const isDesktop = window.innerWidth > 768;
    
    // Increased font sizes for better readability, especially on mobile/tablet
    let baseSize;
    let minSize;
    
    if (isMobile) {
      baseSize = 50;
      minSize = 35;
    } else if (isTablet) {
      baseSize = 52;
      minSize = 35;
    } else {
      baseSize = 42;
      minSize = 24;
    }
    
    // Less aggressive scaling factors to maintain larger text
    const segmentFactor = Math.max(0.6, 1 - (segmentCount / 20));
    const lengthFactor = Math.max(0.5, 1 - (text.length / 20));
    const combinedFactor = segmentFactor * lengthFactor;
    
    return Math.max(minSize, baseSize * combinedFactor);
  }

  /**
   * Truncate text if too long for segment with proper ellipsis
   * @param {string} text - Original text
   * @param {number} segmentCount - Number of segments
   * @returns {string} Truncated text
   */
  truncateText(text, segmentCount) {
    // Much more aggressive truncation to prevent overflow
    const isMobile = window.innerWidth <= 480;
    const isTablet = window.innerWidth <= 768;
    
    let maxLength;
    if (isMobile) {
      maxLength = segmentCount > 6 ? 6 : segmentCount > 3 ? 8 : 12;
    } else if (isTablet) {
      maxLength = segmentCount > 6 ? 8 : segmentCount > 3 ? 12 : 16;
    } else {
      maxLength = segmentCount > 6 ? 10 : segmentCount > 3 ? 15 : 20;
    }
    
    if (text.length <= maxLength) {
      return text;
    }
    
    // Smart truncation: try to break at word boundaries
    const truncated = text.substring(0, maxLength - 1);
    const lastSpaceIndex = truncated.lastIndexOf(' ');
    
    if (lastSpaceIndex > maxLength * 0.5) {
      return truncated.substring(0, lastSpaceIndex) + '…';
    }
    
    return truncated + '…';
  }

  /**
   * Create single option wheel that fills entire circle
   * @param {number} centerX - Center X coordinate
   * @param {number} centerY - Center Y coordinate  
   * @param {number} radius - Wheel radius
   * @param {string} option - Single option text
   */
  createSingleOptionWheel(centerX, centerY, radius, option) {
    // Create full circle for single option
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', centerX);
    circle.setAttribute('cy', centerY);
    circle.setAttribute('r', radius);
    circle.setAttribute('fill', this.wheel.colors[0]);
    circle.setAttribute('stroke', 'rgba(255, 255, 255, 0.2)');
    circle.setAttribute('stroke-width', '2');
    circle.setAttribute('class', 'wheel-segment');
    circle.setAttribute('data-index', '0');
    
    // Create text for single option
    const textElement = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    textElement.setAttribute('x', centerX);
    textElement.setAttribute('y', centerY);
    textElement.setAttribute('text-anchor', 'middle');
    textElement.setAttribute('dominant-baseline', 'central');
    textElement.setAttribute('fill', 'white');
    textElement.setAttribute('font-size', window.innerWidth > 768 ? '48' : window.innerWidth > 480 ? '50' : '44');
    textElement.setAttribute('font-weight', '700');
    textElement.textContent = this.truncateText(option, 1);
    
    this.wheel.segmentsGroup.appendChild(circle);
    this.wheel.segmentsGroup.appendChild(textElement);
  }

  /**
   * Wait for spin animation to complete
   * @param {number} duration - Duration in milliseconds
   * @returns {Promise} Promise that resolves after duration
   */
  waitForSpin(duration) {
    return new Promise(resolve => setTimeout(resolve, duration));
  }
}