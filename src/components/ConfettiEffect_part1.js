/**
 * ConfettiEffect Component - Part 1: Core Functionality
 * Manages celebratory confetti animations using canvas-confetti library
 * Provides different confetti patterns and intensities for various celebrations
 */
import confetti from 'canvas-confetti';
import { ConfettiPatterns } from './ConfettiEffect_part2.js';

export class ConfettiEffect {
  constructor() {
    this.isActive = false;
    this.animationId = null;
    
    // Confetti configuration presets
    this.presets = {
      winner: {
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57']
      },
      celebration: {
        particleCount: 150,
        spread: 100,
        origin: { y: 0.7 },
        colors: ['#ff9ff3', '#54a0ff', '#5f27cd', '#00d2d3', '#ff9f43']
      },
      burst: {
        particleCount: 200,
        spread: 120,
        origin: { y: 0.5 },
        colors: ['#ff3838', '#2ed573', '#1e90ff', '#ff6348', '#7bed9f']
      }
    };
    
    // Initialize patterns helper
    this.patterns = new ConfettiPatterns(this);
    
    this.initializeEventListeners();
  }

  /**
   * Initialize event listeners for confetti triggers
   */
  initializeEventListeners() {
    // Listen for confetti trigger events
    document.addEventListener('triggerConfetti', (e) => {
      const { winner, intensity } = e.detail;
      this.celebrate(intensity || 'winner', winner);
    });
    
    // Listen for wheel winner events for automatic confetti
    document.addEventListener('wheelWinner', (e) => {
      setTimeout(() => {
        this.celebrate('winner', e.detail.winner);
      }, 500);
    });
  }

  /**
   * Trigger confetti celebration
   * @param {string} type - Type of celebration ('winner', 'celebration', 'burst')
   * @param {string} context - Context for the celebration (e.g., winner name)
   */
  celebrate(type = 'winner', context = '') {
    if (this.isActive) {
      this.stop();
    }
    
    this.isActive = true;
    
    switch (type) {
      case 'winner':
        this.patterns.winnerCelebration();
        break;
      case 'celebration':
        this.patterns.standardCelebration();
        break;
      case 'burst':
        this.patterns.burstCelebration();
        break;
      case 'high':
        this.patterns.highIntensityCelebration();
        break;
      default:
        this.patterns.winnerCelebration();
    }
    
    // Auto-stop after duration
    setTimeout(() => {
      this.stop();
    }, 3000);
  }

  /**
   * Create custom shaped confetti
   * @param {string} shape - Shape type ('star', 'heart', 'circle')
   */
  customShapeConfetti(shape = 'star') {
    const shapes = {
      star: '★',
      heart: '♥',
      circle: '●',
      diamond: '♦'
    };
    
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
      shapes: [shapes[shape] || shapes.star],
      colors: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'],
      scalar: 1.2
    });
  }

  /**
   * Confetti cannon effect from specific position
   * @param {Object} position - Position object with x, y coordinates
   * @param {string} direction - Direction ('up', 'left', 'right', 'diagonal')
   */
  cannonEffect(position = { x: 0.5, y: 0.8 }, direction = 'up') {
    const directions = {
      up: { angle: 90, spread: 45 },
      left: { angle: 45, spread: 35 },
      right: { angle: 135, spread: 35 },
      diagonal: { angle: 60, spread: 50 }
    };
    
    const config = directions[direction] || directions.up;
    
    confetti({
      particleCount: 80,
      angle: config.angle,
      spread: config.spread,
      origin: position,
      colors: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'],
      startVelocity: 35,
      gravity: 0.6
    });
  }

  /**
   * Stop all confetti animations
   */
  stop() {
    this.isActive = false;
    
    if (this.animationId) {
      clearTimeout(this.animationId);
      this.animationId = null;
    }
    
    // Clear any remaining confetti
    confetti.reset();
  }

  /**
   * Check if confetti is currently active
   * @returns {boolean} Whether confetti is active
   */
  isConfettiActive() {
    return this.isActive;
  }

  /**
   * Trigger random confetti pattern
   */
  randomCelebration() {
    const patterns = ['winner', 'celebration', 'burst'];
    const randomPattern = patterns[Math.floor(Math.random() * patterns.length)];
    this.celebrate(randomPattern);
  }
}