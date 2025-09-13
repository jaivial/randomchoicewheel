/**
 * How to Use Section Component
 * Displays step-by-step instructions for using the decision wheel
 */

export class HowToUseSection {
  constructor(languageManager) {
    this.languageManager = languageManager;
    this.element = null;

    // Listen for language changes
    this.languageManager.addLanguageChangeListener(() => {
      this.render();
    });
  }

  /**
   * Create the how-to-use section element
   * @returns {HTMLElement} The section element
   */
  create() {
    this.element = document.createElement('section');
    this.element.className = 'content-section glass-card';
    this.element.style.marginTop = '2rem';

    this.render();
    return this.element;
  }

  /**
   * Render the content with current language translations
   */
  render() {
    if (!this.element) return;

    const t = this.languageManager.t.bind(this.languageManager);

    this.element.innerHTML = `
      <h2>${t('content.howToUse.title')}</h2>
      <div class="content-grid">
        <div class="content-item">
          <h3>${t('content.howToUse.step1.title')}</h3>
          <p>${t('content.howToUse.step1.description')}</p>
        </div>
        <div class="content-item">
          <h3>${t('content.howToUse.step2.title')}</h3>
          <p>${t('content.howToUse.step2.description')}</p>
        </div>
        <div class="content-item">
          <h3>${t('content.howToUse.step3.title')}</h3>
          <p>${t('content.howToUse.step3.description')}</p>
        </div>
      </div>
    `;
  }

  /**
   * Get the component element
   * @returns {HTMLElement} The component element
   */
  getElement() {
    return this.element || this.create();
  }

  /**
   * Destroy the component and cleanup
   */
  destroy() {
    if (this.element && this.element.parentNode) {
      this.element.parentNode.removeChild(this.element);
    }
    this.element = null;
  }
}