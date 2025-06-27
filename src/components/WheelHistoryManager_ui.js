/**
 * WheelHistoryManager Component - UI Management: Panel Creation and Display
 * Contains UI creation, initialization, and display logic for the history panel
 */
export class HistoryUI {
  constructor(historyManager) {
    this.manager = historyManager;
  }

  /**
   * Initialize the history panel in the DOM
   */
  initializeHistoryPanel() {
    // Create history button in the header
    const header = document.querySelector('header');
    if (header) {
      const historyButton = document.createElement('button');
      historyButton.id = 'history-btn';
      historyButton.className = 'glass-btn history-button';
      const historyText = this.manager.languageManager ? 
        this.manager.languageManager.t('history.historyButton') : 'History';
      
      historyButton.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/>
          <path d="M3 3v5h5"/>
          <path d="M12 7v5l4 2"/>
        </svg>
        <span>${historyText}</span>
      `;
      historyButton.style.marginTop = 'var(--spacing-lg)';
      historyButton.addEventListener('click', () => this.manager.toggleHistoryPanel());
      header.appendChild(historyButton);
    }

    // Create history panel
    const historyPanel = document.createElement('div');
    historyPanel.id = 'history-panel';
    historyPanel.className = 'history-panel glass-card hidden';
    const titleText = this.manager.languageManager ? 
      this.manager.languageManager.t('history.title') : 'Wheel History';
    const clearText = this.manager.languageManager ? 
      this.manager.languageManager.t('history.clearHistory') : 'Clear History';
    
    historyPanel.innerHTML = `
      <div class="history-header">
        <h3>${titleText}</h3>
        <button id="close-history" class="close-btn">✕</button>
      </div>
      <div class="history-content">
        <div id="history-list" class="history-list"></div>
        <button id="clear-history" class="glass-btn danger">${clearText}</button>
      </div>
    `;
    
    document.getElementById('app').appendChild(historyPanel);
    
    // Add event listeners
    document.getElementById('close-history').addEventListener('click', () => this.manager.closeHistoryPanel());
    document.getElementById('clear-history').addEventListener('click', () => this.manager.clearHistory());
    
    // Styles are handled by HistoryStyles component
  }

  /**
   * Update the history display
   */
  updateHistoryDisplay() {
    const historyList = document.getElementById('history-list');
    if (!historyList) return;
    
    const history = this.manager.getHistory();
    
    if (history.length === 0) {
      const noHistoryText = this.manager.languageManager ? 
        this.manager.languageManager.t('history.noHistory') : 'No history yet. Spin the wheel to create some!';
      historyList.innerHTML = `<div class="history-empty">${noHistoryText}</div>`;
      return;
    }
    
    historyList.innerHTML = history.map(item => this.createHistoryItemHTML(item)).join('');
    
    // Add click listeners
    historyList.querySelectorAll('.history-item').forEach((element, index) => {
      element.addEventListener('click', () => this.manager.loadHistoryItem(history[index]));
    });
  }

  /**
   * Create HTML for a history item
   * @param {Object} item - History item
   * @returns {string} HTML string
   */
  createHistoryItemHTML(item) {
    const date = new Date(item.timestamp).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
    
    const optionsText = item.options.length > 3 
      ? `${item.options.slice(0, 3).join(', ')}... (+${item.options.length - 3} more)`
      : item.options.join(', ');
    
    const winnerHTML = item.winner 
      ? `<div class="history-item-winner">🎉 Winner: ${item.winner}</div>`
      : '';
    
    return `
      <div class="history-item" data-id="${item.id}">
        <div class="history-item-date">${date}</div>
        <div class="history-item-options">${optionsText}</div>
        ${winnerHTML}
      </div>
    `;
  }

  /**
   * Show feedback when loading a history item
   */
  showLoadFeedback() {
    const toast = document.createElement('div');
    toast.className = 'toast toast-info';
    
    // Use translation if available
    const message = this.manager.languageManager ? 
      this.manager.languageManager.t('success.historyLoaded') : 
      'Wheel configuration loaded!';
    
    toast.textContent = message;
    toast.style.cssText = `
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      padding: 1rem 1.5rem;
      border-radius: 8px;
      color: white;
      font-weight: 600;
      z-index: 10000;
      background: linear-gradient(135deg, #4ecdc4, #45b7d1);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
      animation: slideDown 0.3s ease-out;
    `;
    
    document.body.appendChild(toast);
    setTimeout(() => document.body.removeChild(toast), 3000);
  }
}