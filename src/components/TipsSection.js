/**
 * Tips Section Component
 * Displays tips for better decision making with the wheel
 */

export class TipsSection {
  constructor(languageManager) {
    this.languageManager = languageManager;
    this.element = null;

    // Listen for language changes
    this.languageManager.addLanguageChangeListener(() => {
      this.render();
    });
  }

  /**
   * Create the tips section element
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
      <h2>${t('content.tips.title')}</h2>
      <div class="tips-content">
        <h3>${t('content.tips.subtitle')}</h3>
        <ul class="tips-list">
          <li><strong>${t('content.tips.beSpecific.title')}</strong> ${t('content.tips.beSpecific.description')}</li>
          <li><strong>${t('content.tips.considerWeight.title')}</strong> ${t('content.tips.considerWeight.description')}</li>
          <li><strong>${t('content.tips.reviewOptions.title')}</strong> ${t('content.tips.reviewOptions.description')}</li>
          <li><strong>${t('content.tips.trustProcess.title')}</strong> ${t('content.tips.trustProcess.description')}</li>
          <li><strong>${t('content.tips.useBrainstorming.title')}</strong> ${t('content.tips.useBrainstorming.description')}</li>
        </ul>
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