/**
 * Culture Manager - Advanced Cultural Localization System
 * Handles date/number formats, regional preferences, and cultural adaptations
 * Supports 8 languages with their respective cultural conventions
 */

export class CultureManager {
  constructor(languageManager) {
    this.languageManager = languageManager;
    
    // Cultural configurations for all 40 supported languages
    this.cultures = {
      // Tier 1: Major Global Languages
      'en': {
        name: 'English (United States)', locale: 'en-US', dateFormat: 'MM/dd/yyyy', timeFormat: '12h',
        firstDayOfWeek: 0, currency: 'USD', currencySymbol: '$', numberFormat: { decimal: '.', thousands: ',', grouping: [3] },
        rtl: false, timezone: 'America/New_York', tier: 1
      },
      'zh': {
        name: '中文 (中国)', locale: 'zh-CN', dateFormat: 'yyyy/MM/dd', timeFormat: '24h',
        firstDayOfWeek: 1, currency: 'CNY', currencySymbol: '¥', numberFormat: { decimal: '.', thousands: ',', grouping: [4] },
        rtl: false, timezone: 'Asia/Shanghai', tier: 1
      },
      'hi': {
        name: 'हिन्दी (भारत)', locale: 'hi-IN', dateFormat: 'dd/MM/yyyy', timeFormat: '12h',
        firstDayOfWeek: 0, currency: 'INR', currencySymbol: '₹', numberFormat: { decimal: '.', thousands: ',', grouping: [3, 2] },
        rtl: false, timezone: 'Asia/Kolkata', tier: 1
      },
      'es': {
        name: 'Español (España)', locale: 'es-ES', dateFormat: 'dd/MM/yyyy', timeFormat: '24h',
        firstDayOfWeek: 1, currency: 'EUR', currencySymbol: '€', numberFormat: { decimal: ',', thousands: '.', grouping: [3] },
        rtl: false, timezone: 'Europe/Madrid', tier: 1
      },
      'fr': {
        name: 'Français (France)', locale: 'fr-FR', dateFormat: 'dd/MM/yyyy', timeFormat: '24h',
        firstDayOfWeek: 1, currency: 'EUR', currencySymbol: '€', numberFormat: { decimal: ',', thousands: ' ', grouping: [3] },
        rtl: false, timezone: 'Europe/Paris', tier: 1
      },
      'ar': {
        name: 'العربية (السعودية)', locale: 'ar-SA', dateFormat: 'dd/MM/yyyy', timeFormat: '12h',
        firstDayOfWeek: 6, currency: 'SAR', currencySymbol: 'ر.س', numberFormat: { decimal: '.', thousands: ',', grouping: [3] },
        rtl: true, timezone: 'Asia/Riyadh', tier: 1
      },
      'bn': {
        name: 'বাংলা (বাংলাদেশ)', locale: 'bn-BD', dateFormat: 'dd/MM/yyyy', timeFormat: '12h',
        firstDayOfWeek: 0, currency: 'BDT', currencySymbol: '৳', numberFormat: { decimal: '.', thousands: ',', grouping: [3, 2] },
        rtl: false, timezone: 'Asia/Dhaka', tier: 1
      },
      'pt': {
        name: 'Português (Brasil)', locale: 'pt-BR', dateFormat: 'dd/MM/yyyy', timeFormat: '24h',
        firstDayOfWeek: 0, currency: 'BRL', currencySymbol: 'R$', numberFormat: { decimal: ',', thousands: '.', grouping: [3] },
        rtl: false, timezone: 'America/Sao_Paulo', tier: 1
      },
      'ru': {
        name: 'Русский (Россия)', locale: 'ru-RU', dateFormat: 'dd.MM.yyyy', timeFormat: '24h',
        firstDayOfWeek: 1, currency: 'RUB', currencySymbol: '₽', numberFormat: { decimal: ',', thousands: ' ', grouping: [3] },
        rtl: false, timezone: 'Europe/Moscow', tier: 1
      },
      'ja': {
        name: '日本語 (日本)', locale: 'ja-JP', dateFormat: 'yyyy/MM/dd', timeFormat: '24h',
        firstDayOfWeek: 0, currency: 'JPY', currencySymbol: '¥', numberFormat: { decimal: '.', thousands: ',', grouping: [3] },
        rtl: false, timezone: 'Asia/Tokyo', tier: 1
      },

      // Tier 2: Regional Powerhouses
      'pa': {
        name: 'ਪੰਜਾਬੀ (ਭਾਰਤ)', locale: 'pa-IN', dateFormat: 'dd/MM/yyyy', timeFormat: '12h',
        firstDayOfWeek: 0, currency: 'INR', currencySymbol: '₹', numberFormat: { decimal: '.', thousands: ',', grouping: [3, 2] },
        rtl: false, timezone: 'Asia/Kolkata', tier: 2
      },
      'de': {
        name: 'Deutsch (Deutschland)', locale: 'de-DE', dateFormat: 'dd.MM.yyyy', timeFormat: '24h',
        firstDayOfWeek: 1, currency: 'EUR', currencySymbol: '€', numberFormat: { decimal: ',', thousands: '.', grouping: [3] },
        rtl: false, timezone: 'Europe/Berlin', tier: 2
      },
      'jv': {
        name: 'Basa Jawa (Indonesia)', locale: 'jv-ID', dateFormat: 'dd/MM/yyyy', timeFormat: '24h',
        firstDayOfWeek: 0, currency: 'IDR', currencySymbol: 'Rp', numberFormat: { decimal: ',', thousands: '.', grouping: [3] },
        rtl: false, timezone: 'Asia/Jakarta', tier: 2
      },
      'te': {
        name: 'తెలుగు (భారతదేశం)', locale: 'te-IN', dateFormat: 'dd/MM/yyyy', timeFormat: '12h',
        firstDayOfWeek: 0, currency: 'INR', currencySymbol: '₹', numberFormat: { decimal: '.', thousands: ',', grouping: [3, 2] },
        rtl: false, timezone: 'Asia/Kolkata', tier: 2
      },
      'mr': {
        name: 'मराठी (भारत)', locale: 'mr-IN', dateFormat: 'dd/MM/yyyy', timeFormat: '12h',
        firstDayOfWeek: 0, currency: 'INR', currencySymbol: '₹', numberFormat: { decimal: '.', thousands: ',', grouping: [3, 2] },
        rtl: false, timezone: 'Asia/Kolkata', tier: 2
      },
      'tr': {
        name: 'Türkçe (Türkiye)', locale: 'tr-TR', dateFormat: 'dd.MM.yyyy', timeFormat: '24h',
        firstDayOfWeek: 1, currency: 'TRY', currencySymbol: '₺', numberFormat: { decimal: ',', thousands: '.', grouping: [3] },
        rtl: false, timezone: 'Europe/Istanbul', tier: 2
      },
      'vi': {
        name: 'Tiếng Việt (Việt Nam)', locale: 'vi-VN', dateFormat: 'dd/MM/yyyy', timeFormat: '24h',
        firstDayOfWeek: 1, currency: 'VND', currencySymbol: '₫', numberFormat: { decimal: ',', thousands: '.', grouping: [3] },
        rtl: false, timezone: 'Asia/Ho_Chi_Minh', tier: 2
      },
      'ko': {
        name: '한국어 (대한민국)', locale: 'ko-KR', dateFormat: 'yyyy.MM.dd', timeFormat: '12h',
        firstDayOfWeek: 0, currency: 'KRW', currencySymbol: '₩', numberFormat: { decimal: '.', thousands: ',', grouping: [3] },
        rtl: false, timezone: 'Asia/Seoul', tier: 2
      },
      'ta': {
        name: 'தமிழ் (இந்தியா)', locale: 'ta-IN', dateFormat: 'dd/MM/yyyy', timeFormat: '12h',
        firstDayOfWeek: 0, currency: 'INR', currencySymbol: '₹', numberFormat: { decimal: '.', thousands: ',', grouping: [3, 2] },
        rtl: false, timezone: 'Asia/Kolkata', tier: 2
      },
      'ur': {
        name: 'اردو (پاکستان)', locale: 'ur-PK', dateFormat: 'dd/MM/yyyy', timeFormat: '12h',
        firstDayOfWeek: 0, currency: 'PKR', currencySymbol: '₨', numberFormat: { decimal: '.', thousands: ',', grouping: [3] },
        rtl: true, timezone: 'Asia/Karachi', tier: 2
      },

      // Tier 3: Major European & Asian Languages
      'fa': {
        name: 'فارسی (ایران)', locale: 'fa-IR', dateFormat: 'yyyy/MM/dd', timeFormat: '24h',
        firstDayOfWeek: 6, currency: 'IRR', currencySymbol: '﷼', numberFormat: { decimal: '.', thousands: ',', grouping: [3] },
        rtl: true, timezone: 'Asia/Tehran', tier: 3
      },
      'it': {
        name: 'Italiano (Italia)', locale: 'it-IT', dateFormat: 'dd/MM/yyyy', timeFormat: '24h',
        firstDayOfWeek: 1, currency: 'EUR', currencySymbol: '€', numberFormat: { decimal: ',', thousands: '.', grouping: [3] },
        rtl: false, timezone: 'Europe/Rome', tier: 3
      },
      'th': {
        name: 'ไทย (ประเทศไทย)', locale: 'th-TH', dateFormat: 'dd/MM/yyyy', timeFormat: '24h',
        firstDayOfWeek: 0, currency: 'THB', currencySymbol: '฿', numberFormat: { decimal: '.', thousands: ',', grouping: [3] },
        rtl: false, timezone: 'Asia/Bangkok', tier: 3
      },
      'gu': {
        name: 'ગુજરાતી (ભારત)', locale: 'gu-IN', dateFormat: 'dd/MM/yyyy', timeFormat: '12h',
        firstDayOfWeek: 0, currency: 'INR', currencySymbol: '₹', numberFormat: { decimal: '.', thousands: ',', grouping: [3, 2] },
        rtl: false, timezone: 'Asia/Kolkata', tier: 3
      },
      'pl': {
        name: 'Polski (Polska)', locale: 'pl-PL', dateFormat: 'dd.MM.yyyy', timeFormat: '24h',
        firstDayOfWeek: 1, currency: 'PLN', currencySymbol: 'zł', numberFormat: { decimal: ',', thousands: ' ', grouping: [3] },
        rtl: false, timezone: 'Europe/Warsaw', tier: 3
      },
      'kn': {
        name: 'ಕನ್ನಡ (ಭಾರತ)', locale: 'kn-IN', dateFormat: 'dd/MM/yyyy', timeFormat: '12h',
        firstDayOfWeek: 0, currency: 'INR', currencySymbol: '₹', numberFormat: { decimal: '.', thousands: ',', grouping: [3, 2] },
        rtl: false, timezone: 'Asia/Kolkata', tier: 3
      },
      'uk': {
        name: 'Українська (Україна)', locale: 'uk-UA', dateFormat: 'dd.MM.yyyy', timeFormat: '24h',
        firstDayOfWeek: 1, currency: 'UAH', currencySymbol: '₴', numberFormat: { decimal: ',', thousands: ' ', grouping: [3] },
        rtl: false, timezone: 'Europe/Kiev', tier: 3
      },
      'ml': {
        name: 'മലയാളം (ഇന്ത്യ)', locale: 'ml-IN', dateFormat: 'dd/MM/yyyy', timeFormat: '12h',
        firstDayOfWeek: 0, currency: 'INR', currencySymbol: '₹', numberFormat: { decimal: '.', thousands: ',', grouping: [3, 2] },
        rtl: false, timezone: 'Asia/Kolkata', tier: 3
      },
      'or': {
        name: 'ଓଡ଼ିଆ (ଭାରତ)', locale: 'or-IN', dateFormat: 'dd/MM/yyyy', timeFormat: '12h',
        firstDayOfWeek: 0, currency: 'INR', currencySymbol: '₹', numberFormat: { decimal: '.', thousands: ',', grouping: [3, 2] },
        rtl: false, timezone: 'Asia/Kolkata', tier: 3
      },
      'my': {
        name: 'မြန်မာ (မြန်မာ)', locale: 'my-MM', dateFormat: 'dd/MM/yyyy', timeFormat: '24h',
        firstDayOfWeek: 0, currency: 'MMK', currencySymbol: 'K', numberFormat: { decimal: '.', thousands: ',', grouping: [3] },
        rtl: false, timezone: 'Asia/Yangon', tier: 3
      },

      // Tier 4: Strategic Markets
      'nl': {
        name: 'Nederlands (Nederland)', locale: 'nl-NL', dateFormat: 'dd-MM-yyyy', timeFormat: '24h',
        firstDayOfWeek: 1, currency: 'EUR', currencySymbol: '€', numberFormat: { decimal: ',', thousands: '.', grouping: [3] },
        rtl: false, timezone: 'Europe/Amsterdam', tier: 4
      },
      'ro': {
        name: 'Română (România)', locale: 'ro-RO', dateFormat: 'dd.MM.yyyy', timeFormat: '24h',
        firstDayOfWeek: 1, currency: 'RON', currencySymbol: 'lei', numberFormat: { decimal: ',', thousands: '.', grouping: [3] },
        rtl: false, timezone: 'Europe/Bucharest', tier: 4
      },
      'sw': {
        name: 'Kiswahili (Kenya)', locale: 'sw-KE', dateFormat: 'dd/MM/yyyy', timeFormat: '24h',
        firstDayOfWeek: 0, currency: 'KES', currencySymbol: 'KSh', numberFormat: { decimal: '.', thousands: ',', grouping: [3] },
        rtl: false, timezone: 'Africa/Nairobi', tier: 4
      },
      'cs': {
        name: 'Čeština (Česká republika)', locale: 'cs-CZ', dateFormat: 'dd.MM.yyyy', timeFormat: '24h',
        firstDayOfWeek: 1, currency: 'CZK', currencySymbol: 'Kč', numberFormat: { decimal: ',', thousands: ' ', grouping: [3] },
        rtl: false, timezone: 'Europe/Prague', tier: 4
      },
      'hu': {
        name: 'Magyar (Magyarország)', locale: 'hu-HU', dateFormat: 'yyyy.MM.dd', timeFormat: '24h',
        firstDayOfWeek: 1, currency: 'HUF', currencySymbol: 'Ft', numberFormat: { decimal: ',', thousands: ' ', grouping: [3] },
        rtl: false, timezone: 'Europe/Budapest', tier: 4
      },
      'el': {
        name: 'Ελληνικά (Ελλάδα)', locale: 'el-GR', dateFormat: 'dd/MM/yyyy', timeFormat: '24h',
        firstDayOfWeek: 1, currency: 'EUR', currencySymbol: '€', numberFormat: { decimal: ',', thousands: '.', grouping: [3] },
        rtl: false, timezone: 'Europe/Athens', tier: 4
      },
      'sv': {
        name: 'Svenska (Sverige)', locale: 'sv-SE', dateFormat: 'yyyy-MM-dd', timeFormat: '24h',
        firstDayOfWeek: 1, currency: 'SEK', currencySymbol: 'kr', numberFormat: { decimal: ',', thousands: ' ', grouping: [3] },
        rtl: false, timezone: 'Europe/Stockholm', tier: 4
      },
      'he': {
        name: 'עברית (ישראל)', locale: 'he-IL', dateFormat: 'dd/MM/yyyy', timeFormat: '24h',
        firstDayOfWeek: 0, currency: 'ILS', currencySymbol: '₪', numberFormat: { decimal: '.', thousands: ',', grouping: [3] },
        rtl: true, timezone: 'Asia/Jerusalem', tier: 4
      },
      'da': {
        name: 'Dansk (Danmark)', locale: 'da-DK', dateFormat: 'dd.MM.yyyy', timeFormat: '24h',
        firstDayOfWeek: 1, currency: 'DKK', currencySymbol: 'kr', numberFormat: { decimal: ',', thousands: '.', grouping: [3] },
        rtl: false, timezone: 'Europe/Copenhagen', tier: 4
      },
      'no': {
        name: 'Norsk (Norge)', locale: 'no-NO', dateFormat: 'dd.MM.yyyy', timeFormat: '24h',
        firstDayOfWeek: 1, currency: 'NOK', currencySymbol: 'kr', numberFormat: { decimal: ',', thousands: ' ', grouping: [3] },
        rtl: false, timezone: 'Europe/Oslo', tier: 4
      },
      'fi': {
        name: 'Suomi (Suomi)', locale: 'fi-FI', dateFormat: 'dd.MM.yyyy', timeFormat: '24h',
        firstDayOfWeek: 1, currency: 'EUR', currencySymbol: '€', numberFormat: { decimal: ',', thousands: ' ', grouping: [3] },
        rtl: false, timezone: 'Europe/Helsinki', tier: 4
      }
    };
    
    this.currentCulture = null;
    this.formatters = {};
    
    // Initialize when language manager is ready
    this.initialize();
  }

  /**
   * Initialize the culture manager
   */
  async initialize() {
    // Wait for language manager to be ready
    if (!this.languageManager.currentLanguage) {
      await this.waitForLanguageManager();
    }
    
    // Set initial culture based on current language
    this.setCulture(this.languageManager.currentLanguage);
    
    // Listen for language changes
    this.languageManager.addLanguageChangeListener((newLang, prevLang) => {
      this.setCulture(newLang);
    });
    
    console.log('Culture Manager initialized');
  }

  /**
   * Wait for language manager to be ready
   */
  async waitForLanguageManager() {
    let attempts = 0;
    const maxAttempts = 50;
    
    while (!this.languageManager.currentLanguage && attempts < maxAttempts) {
      await new Promise(resolve => setTimeout(resolve, 100));
      attempts++;
    }
  }

  /**
   * Set current culture
   * @param {string} languageCode - Language code to set culture for
   */
  setCulture(languageCode) {
    if (!this.cultures[languageCode]) {
      console.warn(`Culture not found for language: ${languageCode}`);
      languageCode = 'en'; // Fallback to English
    }
    
    this.currentCulture = this.cultures[languageCode];
    this.setupFormatters();
    
    console.log(`Culture set to: ${this.currentCulture.name}`);
  }

  /**
   * Setup formatters for current culture
   */
  setupFormatters() {
    if (!this.currentCulture) return;
    
    try {
      // Number formatter
      this.formatters.number = new Intl.NumberFormat(this.currentCulture.locale, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 10
      });
      
      // Currency formatter
      this.formatters.currency = new Intl.NumberFormat(this.currentCulture.locale, {
        style: 'currency',
        currency: this.currentCulture.currency
      });
      
      // Date formatter
      this.formatters.date = new Intl.DateTimeFormat(this.currentCulture.locale, {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      });
      
      // Time formatter
      this.formatters.time = new Intl.DateTimeFormat(this.currentCulture.locale, {
        hour: '2-digit',
        minute: '2-digit',
        hour12: this.currentCulture.timeFormat === '12h'
      });
      
      // DateTime formatter
      this.formatters.datetime = new Intl.DateTimeFormat(this.currentCulture.locale, {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hour12: this.currentCulture.timeFormat === '12h'
      });
      
      // Relative time formatter
      if (Intl.RelativeTimeFormat) {
        this.formatters.relativeTime = new Intl.RelativeTimeFormat(this.currentCulture.locale, {
          numeric: 'auto'
        });
      }
      
    } catch (error) {
      console.error('Error setting up formatters:', error);
      // Fallback formatters
      this.setupFallbackFormatters();
    }
  }

  /**
   * Setup fallback formatters for older browsers
   */
  setupFallbackFormatters() {
    this.formatters = {
      number: { format: (num) => num.toString() },
      currency: { format: (num) => `${this.currentCulture.currencySymbol}${num}` },
      date: { format: (date) => date.toLocaleDateString() },
      time: { format: (date) => date.toLocaleTimeString() },
      datetime: { format: (date) => date.toLocaleString() }
    };
  }

  /**
   * Format a number according to current culture
   * @param {number} number - Number to format
   * @returns {string} Formatted number
   */
  formatNumber(number) {
    if (typeof number !== 'number' || isNaN(number)) {
      return '0';
    }
    
    try {
      return this.formatters.number.format(number);
    } catch (error) {
      console.error('Error formatting number:', error);
      return number.toString();
    }
  }

  /**
   * Format a currency amount according to current culture
   * @param {number} amount - Amount to format
   * @returns {string} Formatted currency
   */
  formatCurrency(amount) {
    if (typeof amount !== 'number' || isNaN(amount)) {
      return this.currentCulture.currencySymbol + '0';
    }
    
    try {
      return this.formatters.currency.format(amount);
    } catch (error) {
      console.error('Error formatting currency:', error);
      return `${this.currentCulture.currencySymbol}${amount}`;
    }
  }

  /**
   * Format a date according to current culture
   * @param {Date|string|number} date - Date to format
   * @returns {string} Formatted date
   */
  formatDate(date) {
    const dateObj = this.parseDate(date);
    if (!dateObj) return '';
    
    try {
      return this.formatters.date.format(dateObj);
    } catch (error) {
      console.error('Error formatting date:', error);
      return dateObj.toLocaleDateString();
    }
  }

  /**
   * Format a time according to current culture
   * @param {Date|string|number} date - Date to format time for
   * @returns {string} Formatted time
   */
  formatTime(date) {
    const dateObj = this.parseDate(date);
    if (!dateObj) return '';
    
    try {
      return this.formatters.time.format(dateObj);
    } catch (error) {
      console.error('Error formatting time:', error);
      return dateObj.toLocaleTimeString();
    }
  }

  /**
   * Format a datetime according to current culture
   * @param {Date|string|number} date - Date to format
   * @returns {string} Formatted datetime
   */
  formatDateTime(date) {
    const dateObj = this.parseDate(date);
    if (!dateObj) return '';
    
    try {
      return this.formatters.datetime.format(dateObj);
    } catch (error) {
      console.error('Error formatting datetime:', error);
      return dateObj.toLocaleString();
    }
  }

  /**
   * Format relative time (e.g., "2 hours ago")
   * @param {Date|string|number} date - Date to format relative to now
   * @returns {string} Formatted relative time
   */
  formatRelativeTime(date) {
    const dateObj = this.parseDate(date);
    if (!dateObj) return '';
    
    const now = new Date();
    const diffMs = dateObj.getTime() - now.getTime();
    
    try {
      if (this.formatters.relativeTime) {
        // Use modern RelativeTimeFormat if available
        const diffSeconds = Math.round(diffMs / 1000);
        const diffMinutes = Math.round(diffSeconds / 60);
        const diffHours = Math.round(diffMinutes / 60);
        const diffDays = Math.round(diffHours / 24);
        
        if (Math.abs(diffSeconds) < 60) {
          return this.formatters.relativeTime.format(diffSeconds, 'second');
        } else if (Math.abs(diffMinutes) < 60) {
          return this.formatters.relativeTime.format(diffMinutes, 'minute');
        } else if (Math.abs(diffHours) < 24) {
          return this.formatters.relativeTime.format(diffHours, 'hour');
        } else {
          return this.formatters.relativeTime.format(diffDays, 'day');
        }
      } else {
        // Fallback for older browsers
        return this.formatRelativeTimeFallback(diffMs);
      }
    } catch (error) {
      console.error('Error formatting relative time:', error);
      return this.formatDateTime(dateObj);
    }
  }

  /**
   * Fallback relative time formatting
   * @param {number} diffMs - Difference in milliseconds
   * @returns {string} Formatted relative time
   */
  formatRelativeTimeFallback(diffMs) {
    const absMs = Math.abs(diffMs);
    const isPast = diffMs < 0;
    
    const seconds = Math.floor(absMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    
    let unit, value;
    
    if (days > 0) {
      unit = 'day';
      value = days;
    } else if (hours > 0) {
      unit = 'hour';
      value = hours;
    } else if (minutes > 0) {
      unit = 'minute';
      value = minutes;
    } else {
      unit = 'second';
      value = seconds;
    }
    
    // Use translation system if available
    if (this.languageManager && this.languageManager.t) {
      const timeKey = value === 1 ? `time.${unit}sAgo` : `time.${unit}sAgo_plural`;
      return this.languageManager.t(timeKey, { count: value });
    }
    
    // Simple fallback
    const suffix = isPast ? ' ago' : ' from now';
    const plural = value === 1 ? '' : 's';
    return `${value} ${unit}${plural}${suffix}`;
  }

  /**
   * Parse various date formats into Date object
   * @param {Date|string|number} date - Date to parse
   * @returns {Date|null} Parsed date or null if invalid
   */
  parseDate(date) {
    if (date instanceof Date) {
      return isNaN(date.getTime()) ? null : date;
    }
    
    if (typeof date === 'number') {
      return new Date(date);
    }
    
    if (typeof date === 'string') {
      const parsed = new Date(date);
      return isNaN(parsed.getTime()) ? null : parsed;
    }
    
    return null;
  }

  /**
   * Get first day of week for current culture
   * @returns {number} First day of week (0 = Sunday, 1 = Monday)
   */
  getFirstDayOfWeek() {
    return this.currentCulture?.firstDayOfWeek || 0;
  }

  /**
   * Get current culture information
   * @returns {Object} Current culture configuration
   */
  getCurrentCulture() {
    return this.currentCulture;
  }

  /**
   * Get all available cultures
   * @returns {Object} All culture configurations
   */
  getAllCultures() {
    return { ...this.cultures };
  }

  /**
   * Check if current culture uses RTL text direction
   * @returns {boolean} Whether RTL is used
   */
  isRTL() {
    return this.currentCulture?.rtl || false;
  }

  /**
   * Get currency symbol for current culture
   * @returns {string} Currency symbol
   */
  getCurrencySymbol() {
    return this.currentCulture?.currencySymbol || '$';
  }

  /**
   * Get decimal separator for current culture
   * @returns {string} Decimal separator
   */
  getDecimalSeparator() {
    return this.currentCulture?.numberFormat?.decimal || '.';
  }

  /**
   * Get thousands separator for current culture
   * @returns {string} Thousands separator
   */
  getThousandsSeparator() {
    return this.currentCulture?.numberFormat?.thousands || ',';
  }

  /**
   * Parse a localized number string back to number
   * @param {string} numberString - Localized number string
   * @returns {number|null} Parsed number or null if invalid
   */
  parseNumber(numberString) {
    if (typeof numberString !== 'string') {
      return null;
    }
    
    try {
      const culture = this.currentCulture;
      
      // Remove thousands separators and replace decimal separator
      let cleaned = numberString
        .replace(new RegExp('\\' + culture.numberFormat.thousands, 'g'), '')
        .replace(culture.numberFormat.decimal, '.');
      
      const number = parseFloat(cleaned);
      return isNaN(number) ? null : number;
    } catch (error) {
      console.error('Error parsing number:', error);
      return null;
    }
  }

  /**
   * Get culture-specific day names
   * @returns {Array<string>} Array of day names starting from first day of week
   */
  getDayNames() {
    const date = new Date();
    const dayNames = [];
    
    // Get day names in current locale
    for (let i = 0; i < 7; i++) {
      date.setDate(date.getDate() - date.getDay() + i);
      try {
        const dayName = new Intl.DateTimeFormat(this.currentCulture.locale, {
          weekday: 'long'
        }).format(date);
        dayNames.push(dayName);
      } catch (error) {
        // Fallback day names
        const fallbackDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        dayNames.push(fallbackDays[i]);
      }
    }
    
    // Reorder according to first day of week
    const firstDay = this.getFirstDayOfWeek();
    return [...dayNames.slice(firstDay), ...dayNames.slice(0, firstDay)];
  }

  /**
   * Get culture-specific month names
   * @returns {Array<string>} Array of month names
   */
  getMonthNames() {
    const monthNames = [];
    
    for (let i = 0; i < 12; i++) {
      const date = new Date(2023, i, 1); // Use a fixed year
      try {
        const monthName = new Intl.DateTimeFormat(this.currentCulture.locale, {
          month: 'long'
        }).format(date);
        monthNames.push(monthName);
      } catch (error) {
        // Fallback month names
        const fallbackMonths = [
          'January', 'February', 'March', 'April', 'May', 'June',
          'July', 'August', 'September', 'October', 'November', 'December'
        ];
        monthNames.push(fallbackMonths[i]);
      }
    }
    
    return monthNames;
  }

  /**
   * Get culture statistics for analytics
   * @returns {Object} Culture usage statistics
   */
  getCultureStats() {
    return {
      currentCulture: this.currentCulture?.name,
      locale: this.currentCulture?.locale,
      dateFormat: this.currentCulture?.dateFormat,
      timeFormat: this.currentCulture?.timeFormat,
      currency: this.currentCulture?.currency,
      rtl: this.currentCulture?.rtl,
      formattersAvailable: !!this.formatters.number,
      intlSupport: {
        NumberFormat: typeof Intl !== 'undefined' && !!Intl.NumberFormat,
        DateTimeFormat: typeof Intl !== 'undefined' && !!Intl.DateTimeFormat,
        RelativeTimeFormat: typeof Intl !== 'undefined' && !!Intl.RelativeTimeFormat
      }
    };
  }
}