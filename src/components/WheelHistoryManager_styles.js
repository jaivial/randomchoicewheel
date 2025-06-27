/**
 * WheelHistoryManager Component - Styles: CSS Styling and Layout
 * Contains CSS styles for the history panel layout and responsive design
 */
export class HistoryStyles {
  constructor(historyManager) {
    this.manager = historyManager;
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
        .history-panel,
        .history-panel.open,
        .history-panel.hidden {
          position: fixed !important;
          top: 50% !important;
          left: 50% !important;
          right: auto !important;
          width: calc(100vw - 20px) !important;
          max-width: 350px !important;
          height: 80vh !important;
          transition: opacity 0.3s ease-out, visibility 0.3s ease-out, transform 0.3s ease-out !important;
        }
        
        .history-panel {
          transform: translate(-50%, -50%) scale(0.9) !important;
          opacity: 0 !important;
          visibility: hidden !important;
          pointer-events: none !important;
        }
        
        .history-panel.open {
          transform: translate(-50%, -50%) scale(1) !important;
          opacity: 1 !important;
          visibility: visible !important;
          pointer-events: auto !important;
        }
        
        .history-panel.hidden {
          transform: translate(-50%, -50%) scale(0.9) !important;
          opacity: 0 !important;
          visibility: hidden !important;
          pointer-events: none !important;
          display: none !important;
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
}