/**
 * WheelHistoryManager Component - Part 1: Core History Management
 * Manages history of wheel configurations and spin results
 * Provides functionality to save, load, and display previous wheels and results
 */
import { HistoryUI } from './WheelHistoryManager_part2.js';

export class WheelHistoryManager {
  constructor(languageManager = null) {
    this.languageManager = languageManager;
    this.historyKey = 'wheelHistory';
    this.maxHistoryItems = 50;
    this.isHistoryPanelOpen = false;
    
    // Initialize UI helper
    this.ui = new HistoryUI(this);
    
    this.ui.initializeHistoryPanel();
    this.loadHistory();
  }

  /**
   * Save a wheel configuration to history
   * @param {Array} options - Wheel options
   */
  saveWheelConfiguration(options) {
    const history = this.getHistory();
    const configItem = {
      id: Date.now(),
      type: 'configuration',
      timestamp: new Date().toISOString(),
      options: [...options],
      winner: null
    };
    
    // Check if this configuration already exists recently
    const isDuplicate = history.some(item => 
      item.type === 'configuration' && 
      JSON.stringify(item.options) === JSON.stringify(options) &&
      Date.now() - new Date(item.timestamp).getTime() < 60000 // Within 1 minute
    );
    
    if (!isDuplicate) {
      history.unshift(configItem);
      this.saveHistory(history);
    }
  }

  /**
   * Save a spin result to history
   * @param {Array} options - Wheel options
   * @param {string} winner - Winning option
   */
  saveSpinResult(options, winner) {
    const history = this.getHistory();
    const resultItem = {
      id: Date.now(),
      type: 'result',
      timestamp: new Date().toISOString(),
      options: [...options],
      winner: winner
    };
    
    history.unshift(resultItem);
    this.saveHistory(history);
    this.ui.updateHistoryDisplay();
  }

  /**
   * Get history from localStorage
   * @returns {Array} History items
   */
  getHistory() {
    try {
      const stored = localStorage.getItem(this.historyKey);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.warn('Error loading history:', error);
      return [];
    }
  }

  /**
   * Save history to localStorage
   * @param {Array} history - History items to save
   */
  saveHistory(history) {
    try {
      // Limit history size
      const limitedHistory = history.slice(0, this.maxHistoryItems);
      localStorage.setItem(this.historyKey, JSON.stringify(limitedHistory));
    } catch (error) {
      console.warn('Error saving history:', error);
    }
  }

  /**
   * Load and display history
   */
  loadHistory() {
    this.ui.updateHistoryDisplay();
  }

  /**
   * Load a history item back into the wheel
   * @param {Object} item - History item to load
   */
  loadHistoryItem(item) {
    // Find InputManager component and update options
    const app = window.DecisionWheelApp;
    if (app && app.components.inputManager) {
      app.components.inputManager.setOptions(item.options);
      
      // Show feedback
      this.ui.showLoadFeedback();
      this.closeHistoryPanel();
    }
  }

  /**
   * Toggle history panel visibility
   */
  toggleHistoryPanel() {
    const panel = document.getElementById('history-panel');
    if (!panel) return;
    
    if (this.isHistoryPanelOpen) {
      this.closeHistoryPanel();
    } else {
      this.openHistoryPanel();
    }
  }

  /**
   * Open history panel
   */
  openHistoryPanel() {
    const panel = document.getElementById('history-panel');
    if (!panel) return;
    
    panel.classList.remove('hidden');
    panel.classList.add('open');
    this.isHistoryPanelOpen = true;
    this.ui.updateHistoryDisplay();
  }

  /**
   * Close history panel
   */
  closeHistoryPanel() {
    const panel = document.getElementById('history-panel');
    if (!panel) return;
    
    panel.classList.remove('open');
    setTimeout(() => {
      panel.classList.add('hidden');
    }, 300);
    this.isHistoryPanelOpen = false;
  }

  /**
   * Clear all history
   */
  clearHistory() {
    const confirmed = confirm('Are you sure you want to clear all history?');
    if (confirmed) {
      localStorage.removeItem(this.historyKey);
      this.ui.updateHistoryDisplay();
    }
  }
}