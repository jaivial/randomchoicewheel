/**
 * Content Sections Manager
 * Manages all AdSense compliance content sections
 */

import { HowToUseSection } from './HowToUseSection.js';
import { PopularUsesSection } from './PopularUsesSection.js';
import { WhyChooseSection } from './WhyChooseSection.js';
import { TipsSection } from './TipsSection.js';

export class ContentSections {
  constructor(languageManager) {
    this.languageManager = languageManager;
    this.container = null;
    this.sections = {};

    this.init();
  }

  /**
   * Initialize all content sections
   */
  init() {
    // Create section components
    this.sections = {
      howToUse: new HowToUseSection(this.languageManager),
      popularUses: new PopularUsesSection(this.languageManager),
      whyChoose: new WhyChooseSection(this.languageManager),
      tips: new TipsSection(this.languageManager)
    };
  }

  /**
   * Create and render all content sections
   * @param {HTMLElement} container - Container element to append sections to
   */
  render(container) {
    if (!container) return;

    this.container = container;

    // Create and append each section
    Object.keys(this.sections).forEach(sectionKey => {
      const section = this.sections[sectionKey];
      const sectionElement = section.create();
      container.appendChild(sectionElement);
    });
  }

  /**
   * Replace existing static content with dynamic components
   */
  replaceStaticContent() {
    // Find the main container where content should be placed
    const main = document.querySelector('main');
    if (!main) return;

    // Remove existing static content sections
    const existingContentSections = main.querySelectorAll('.content-section');
    existingContentSections.forEach(section => section.remove());

    // Render the new dynamic sections
    this.render(main);
  }

  /**
   * Update all sections when language changes
   */
  updateLanguage() {
    Object.keys(this.sections).forEach(sectionKey => {
      this.sections[sectionKey].render();
    });
  }

  /**
   * Get a specific section component
   * @param {string} sectionName - Name of the section to get
   * @returns {Object} The section component
   */
  getSection(sectionName) {
    return this.sections[sectionName];
  }

  /**
   * Destroy all sections and cleanup
   */
  destroy() {
    Object.keys(this.sections).forEach(sectionKey => {
      this.sections[sectionKey].destroy();
    });
    this.sections = {};
    this.container = null;
  }
}