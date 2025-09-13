/**
 * Why Choose Section Component
 * Displays features and benefits of the decision wheel
 */

export class WhyChooseSection {
  constructor(languageManager) {
    this.languageManager = languageManager;
    this.element = null;

    // Listen for language changes
    this.languageManager.addLanguageChangeListener(() => {
      this.render();
    });
  }

  /**
   * Create the why choose section element
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
      <h2>${t('content.whyChoose.title')}</h2>
      <div class="features-list">
        <div class="feature">
          <h3>${t('content.whyChoose.randomResults.title')}</h3>
          <p>${t('content.whyChoose.randomResults.description')}</p>
        </div>
        <div class="feature">
          <h3>${t('content.whyChoose.mobileFriendly.title')}</h3>
          <p>${t('content.whyChoose.mobileFriendly.description')}</p>
        </div>
        <div class="feature">
          <h3>${t('content.whyChoose.noRegistration.title')}</h3>
          <p>${t('content.whyChoose.noRegistration.description')}</p>
        </div>
        <div class="feature">
          <h3>${t('content.whyChoose.beautifulDesign.title')}</h3>
          <p>${t('content.whyChoose.beautifulDesign.description')}</p>
        </div>
        <div class="feature">
          <h3>${t('content.whyChoose.fastPerformance.title')}</h3>
          <p>${t('content.whyChoose.fastPerformance.description')}</p>
        </div>
        <div class="feature">
          <h3>${t('content.whyChoose.multipleLanguages.title')}</h3>
          <p>${t('content.whyChoose.multipleLanguages.description')}</p>
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