/**
 * WheelHistoryManager Component - Part 2: Integration and Delegation
 * Integrates UI and styling components for the history panel
 */
import { HistoryUI } from './WheelHistoryManager_ui.js';
import { HistoryStyles } from './WheelHistoryManager_styles.js';

export class HistoryUIManager {
  constructor(historyManager) {
    this.manager = historyManager;
    this.ui = new HistoryUI(historyManager);
    this.styles = new HistoryStyles(historyManager);
  }

  /**
   * Initialize the history panel in the DOM
   */
  initializeHistoryPanel() {
    this.ui.initializeHistoryPanel();
    this.styles.addHistoryStyles();
  }


  /**
   * Update the history display
   */
  updateHistoryDisplay() {
    this.ui.updateHistoryDisplay();
  }

  /**
   * Create HTML for a history item
   * @param {Object} item - History item
   * @returns {string} HTML string
   */
  createHistoryItemHTML(item) {
    return this.ui.createHistoryItemHTML(item);
  }

  /**
   * Show feedback when loading a history item
   */
  showLoadFeedback() {
    this.ui.showLoadFeedback();
  }
}