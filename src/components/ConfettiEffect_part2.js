/**
 * ConfettiEffect Component - Part 2: Pattern Implementations
 * Contains specific confetti pattern implementations and complex animations
 */
import confetti from 'canvas-confetti';

export class ConfettiPatterns {
  constructor(confettiEffect) {
    this.effect = confettiEffect;
  }

  /**
   * Winner celebration pattern - focused burst from center
   */
  winnerCelebration() {
    const preset = this.effect.presets.winner;
    
    // Initial burst
    confetti({
      ...preset,
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    
    // Side bursts
    setTimeout(() => {
      confetti({
        ...preset,
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.8 }
      });
    }, 250);
    
    setTimeout(() => {
      confetti({
        ...preset,
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.8 }
      });
    }, 400);
  }

  /**
   * Standard celebration pattern - continuous moderate confetti
   */
  standardCelebration() {
    const preset = this.effect.presets.celebration;
    
    const fireConfetti = () => {
      if (!this.effect.isActive) return;
      
      confetti({
        ...preset,
        particleCount: 30,
        spread: 60,
        origin: { 
          x: Math.random() * 0.6 + 0.2, 
          y: Math.random() * 0.4 + 0.5 
        }
      });
      
      this.effect.animationId = setTimeout(fireConfetti, 200);
    };
    
    fireConfetti();
  }

  /**
   * Burst celebration pattern - explosive single burst
   */
  burstCelebration() {
    const preset = this.effect.presets.burst;
    
    confetti({
      ...preset,
      particleCount: 200,
      spread: 100,
      origin: { y: 0.5 },
      startVelocity: 30,
      gravity: 0.5,
      drift: 0
    });
  }

  /**
   * High intensity celebration - multiple effects combined
   */
  highIntensityCelebration() {
    // Central explosion
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57']
    });
    
    // Fireworks effect
    setTimeout(() => {
      this.fireworksEffect();
    }, 300);
    
    // Continuous rain
    setTimeout(() => {
      this.confettiRain();
    }, 800);
  }

  /**
   * Fireworks-style confetti effect
   */
  fireworksEffect() {
    const count = 5;
    const angles = [30, 60, 90, 120, 150];
    
    angles.forEach((angle, index) => {
      setTimeout(() => {
        confetti({
          particleCount: 40,
          angle: angle,
          spread: 30,
          origin: { 
            x: 0.1 + (index * 0.2), 
            y: 0.3 + Math.random() * 0.3 
          },
          colors: ['#ff9ff3', '#54a0ff', '#5f27cd', '#00d2d3', '#ff9f43'],
          startVelocity: 25,
          gravity: 0.8
        });
      }, index * 100);
    });
  }

  /**
   * Confetti rain effect
   */
  confettiRain() {
    let rainCount = 0;
    const maxRain = 10;
    
    const rainInterval = setInterval(() => {
      if (rainCount >= maxRain || !this.effect.isActive) {
        clearInterval(rainInterval);
        return;
      }
      
      confetti({
        particleCount: 20,
        spread: 40,
        origin: { 
          x: Math.random(), 
          y: -0.1 
        },
        colors: ['#ff3838', '#2ed573', '#1e90ff', '#ff6348', '#7bed9f'],
        startVelocity: 15,
        gravity: 0.4,
        drift: Math.random() * 2 - 1
      });
      
      rainCount++;
    }, 200);
  }
}