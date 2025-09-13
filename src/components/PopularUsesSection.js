/**
 * Popular Uses Section Component
 * Displays various use cases for the decision wheel
 */

export class PopularUsesSection {
  constructor(languageManager) {
    this.languageManager = languageManager;
    this.element = null;

    // Listen for language changes
    this.languageManager.addLanguageChangeListener(() => {
      this.render();
    });
  }

  /**
   * Create the popular uses section element
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
      <h2>${t('content.popularUses.title')}</h2>
      <div class="use-cases-grid">
        <div class="use-case">
          <h3>${t('content.popularUses.foodDecisions.title')}</h3>
          <p>${t('content.popularUses.foodDecisions.description')}</p>
        </div>
        <div class="use-case">
          <h3>${t('content.popularUses.entertainmentChoices.title')}</h3>
          <p>${t('content.popularUses.entertainmentChoices.description')}</p>
        </div>
        <div class="use-case">
          <h3>${t('content.popularUses.travelPlanning.title')}</h3>
          <p>${t('content.popularUses.travelPlanning.description')}</p>
        </div>
        <div class="use-case">
          <h3>${t('content.popularUses.dailyActivities.title')}</h3>
          <p>${t('content.popularUses.dailyActivities.description')}</p>
        </div>
        <div class="use-case">
          <h3>${t('content.popularUses.partyGames.title')}</h3>
          <p>${t('content.popularUses.partyGames.description')}</p>
        </div>
        <div class="use-case">
          <h3>${t('content.popularUses.educationalTools.title')}</h3>
          <p>${t('content.popularUses.educationalTools.description')}</p>
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