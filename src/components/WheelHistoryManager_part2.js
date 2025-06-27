/**
 * WheelHistoryManager Component - Part 2: UI Management and Styling
 * Contains UI creation, styling, and display logic for the history panel
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
        this.manager.languageManager.t('history.button') : 'History';
      
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
    historyPanel.innerHTML = `
      <div class="history-header">
        <h3>Wheel History</h3>
        <button id="close-history" class="close-btn">✕</button>
      </div>
      <div class="history-content">
        <div id="history-list" class="history-list"></div>
        <button id="clear-history" class="glass-btn danger">Clear History</button>
      </div>
    `;
    
    document.getElementById('app').appendChild(historyPanel);
    
    // Add event listeners
    document.getElementById('close-history').addEventListener('click', () => this.manager.closeHistoryPanel());
    document.getElementById('clear-history').addEventListener('click', () => this.manager.clearHistory());
    
    // Add styles
    this.addHistoryStyles();
  }

  /**
   * Add CSS styles for history panel
   */
  addHistoryStyles() {
    const styleId = 'history-panel-styles';
    if (document.getElementById(styleId)) return;
    
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
      .history-panel {
        position: fixed;
        top: 10vh;
        right: -400px;
        width: 350px;
        height: 80vh;
        overflow: hidden;
        z-index: 1001;
        box-sizing: border-box;
        margin: 0;
        padding: 1.5rem;
        border: none;
        outline: none;
        transition: right 0.3s ease-out, opacity 0.3s ease-out, visibility 0.3s ease-out;
        display: flex;
        flex-direction: column;
      }
      
      .history-panel.open {
        right: 20px;
      }
      
      .history-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
        flex-shrink: 0;
      }
      
      .history-header h3 {
        margin: 0;
        font-size: 1.5rem;
      }
      
      .close-btn {
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0.5rem;
        border-radius: 50%;
        transition: background 0.2s;
      }
      
      .close-btn:hover {
        background: rgba(255, 255, 255, 0.1);
      }
      
      .history-content {
        display: flex;
        flex-direction: column;
        flex: 1;
        min-height: 0;
      }
      
      .history-list {
        flex: 1;
        overflow-y: auto;
        margin-bottom: 1rem;
        min-height: 0;
      }
      
      #clear-history {
        flex-shrink: 0;
        margin-top: auto;
      }
      
      .history-item {
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 8px;
        padding: 1rem;
        margin: 0 0 0.5rem 0;
        cursor: pointer;
        box-sizing: border-box;
        display: block;
        width: 100%;
        position: static;
      }
      
      .history-item:hover {
        background: rgba(255, 255, 255, 0.1);
        border-color: rgba(255, 255, 255, 0.2);
      }
      
      .history-item-date {
        font-size: 0.8rem;
        opacity: 0.7;
        margin-bottom: 0.5rem;
      }
      
      .history-item-options {
        font-size: 0.9rem;
        margin-bottom: 0.5rem;
      }
      
      .history-item-winner {
        font-weight: bold;
        color: #00ff88;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
      }
      
      .history-empty {
        text-align: center;
        opacity: 0.7;
        font-style: italic;
        padding: 2rem;
      }
      
      @media (max-width: 768px) {
        .history-panel {
          width: 300px;
          right: -320px;
        }
        
        .history-panel.open {
          right: 10px;
        }
      }
      
      @media (max-width: 480px) {
        .history-panel {
          position: fixed !important;
          top: 50% !important;
          left: 50% !important;
          right: auto !important;
          transform: translate(-50%, -50%) !important;
          width: calc(100vw - 20px) !important;
          max-width: 350px !important;
          height: 80vh !important;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s ease-out, visibility 0.3s ease-out, transform 0.3s ease-out;
        }
        
        .history-panel.hidden {
          opacity: 0 !important;
          visibility: hidden !important;
          transform: translate(-50%, -50%) scale(0.9) !important;
        }
        
        .history-panel.open {
          opacity: 1 !important;
          visibility: visible !important;
          transform: translate(-50%, -50%) scale(1) !important;
        }
      }
      
      /* Disable hover effects on touch devices */
      @media (hover: none) and (pointer: coarse) {
        .close-btn:hover,
        .history-item:hover {
          background: inherit !important;
          border-color: inherit !important;
          transform: none !important;
        }
        
        .close-btn,
        .history-item {
          transition: none !important;
        }
        
        .history-item:active {
          background: rgba(255, 255, 255, 0.15) !important;
          transform: scale(0.98) !important;
        }
      }
    `;
    document.head.appendChild(style);
  }

  /**
   * Update the history display
   */
  updateHistoryDisplay() {
    const historyList = document.getElementById('history-list');
    if (!historyList) return;
    
    const history = this.manager.getHistory();
    
    if (history.length === 0) {
      historyList.innerHTML = '<div class="history-empty">No history yet. Spin the wheel to create some!</div>';
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