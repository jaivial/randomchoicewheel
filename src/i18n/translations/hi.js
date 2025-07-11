/**
 * Hindi (हिन्दी) Translations
 * Complete translation file for the Decision Wheel Spinner application
 * Includes all UI texts, messages, and SEO content for Indian market
 */

export default {
  // Application meta information for SEO
  meta: {
    title: 'डिसीजन व्हील स्पिनर - आसानी से निर्णय लें',
    description: 'हमारे सुंदर डिसीजन व्हील स्पिनर के साथ आसानी से निर्णय लें। अपने विकल्प जोड़ें और एक यादृच्छिक परिणाम पाने के लिए व्हील घुमाएं।',
    keywords: 'व्हील, स्पिनर, निर्णय, यादृच्छिक, विकल्प, घुमाना, तय करना',
    ogTitle: 'डिसीजन व्हील स्पिनर - आसानी से निर्णय लें',
    ogDescription: 'हमारे सुंदर डिसीजन व्हील स्पिनर के साथ आसानी से निर्णय लें। जब आप तय नहीं कर सकते तो यह परफेक्ट है!',
    twitterTitle: 'डिसीजन व्हील स्पिनर - आसानी से निर्णय लें',
    twitterDescription: 'हमारे सुंदर डिसीजन व्हील स्पिनर के साथ आसानी से निर्णय लें।'
  },

  // Main application header
  header: {
    title: 'डिसीजन व्हील',
    subtitle: 'अपने विकल्प जोड़ें और निर्णय लेने के लिए घुमाएं!',
    iconAlt: 'व्हील आइकन'
  },

  // Input section for adding options
  input: {
    sectionTitle: 'विकल्प जोड़ें',
    placeholder: 'एक विकल्प दर्ज करें...',
    addButton: 'जोड़ें',
    clearAllButton: 'सभी साफ़ करें',
    maxOptionsReached: 'आपने {{max}} विकल्पों की अधिकतम सीमा पहुंचा दी है',
    emptyOptionError: 'कृपया एक वैध विकल्प दर्ज करें',
    duplicateOptionError: 'यह विकल्प पहले से मौजूद है',
    optionTooLong: 'विकल्प बहुत लंबा है (अधिकतम {{max}} अक्षर)',
    defaultOptions: [
      'विकल्प 1',
      'विकल्प 2',
      'विकल्प 3',
      'विकल्प 4'
    ],
    clearAllConfirmation: 'क्या आप वाकई सभी {{count}} विकल्पों को हटाना चाहते हैं?'
  },

  // Wheel section
  wheel: {
    spinButton: 'व्हील घुमाएं!',
    spinningButton: 'घूम रहा है...',
    noOptionsMessage: 'व्हील घुमाने के लिए कम से कम 2 विकल्प जोड़ें',
    centerAlt: 'व्हील का केंद्र',
    pointerAlt: 'व्हील पॉइंटर'
  },

  // Result modal
  result: {
    winnerTitle: '🎉 विजेता! 🎉',
    winnerPrefix: 'परिणाम है:',
    closeButton: 'बंद करें',
    spinAgainButton: 'फिर से घुमाएं',
    celebrationMessages: [
      'बधाई हो!',
      'उत्कृष्ट विकल्प!',
      'यही आपका जवाब है!',
      'परफेक्ट!',
      'शानदार!'
    ]
  },

  // Language selector
  language: {
    selectorTitle: 'भाषा',
    autoDetected: 'स्वचालित रूप से पहचानी गई',
    changeLanguage: 'भाषा को {{language}} में बदलें',
    currentLanguage: 'वर्तमान भाषा: {{language}}',
    searchPlaceholder: 'भाषाओं को खोजें...',
    mostPopularLanguages: 'सबसे लोकप्रिय भाषाएं',
    popularTag: 'लोकप्रिय',
    tierNames: {
      mostPopular: 'सबसे लोकप्रिय भाषाएं',
      regional: 'क्षेत्रीय भाषाएं',
      europeanAsian: 'यूरोपीय और एशियाई भाषाएं',
      additional: 'अतिरिक्त भाषाएं'
    },
    languages: {
      en: 'अंग्रेजी',
      zh: 'चीनी',
      hi: 'हिन्दी',
      es: 'स्पेनिश',
      fr: 'फ्रेंच',
      ar: 'अरबी',
      bn: 'बांग्ला',
      pt: 'पुर्तगाली',
      ru: 'रूसी',
      ja: 'जापानी',
      pa: 'पंजाबी',
      de: 'जर्मन',
      jv: 'जावानीज़',
      te: 'तेलुगु',
      mr: 'मराठी',
      tr: 'तुर्की',
      vi: 'वियतनामी',
      ko: 'कोरियाई',
      ta: 'तमिल',
      ur: 'उर्दू',
      fa: 'फ़ारसी',
      it: 'इतालवी',
      th: 'थाई',
      gu: 'गुजराती',
      pl: 'पोलिश',
      kn: 'कन्नड़',
      uk: 'यूक्रेनी',
      ml: 'मलयालम',
      or: 'ओड़िया',
      my: 'बर्मी',
      nl: 'डच',
      ro: 'रोमानियाई',
      sw: 'स्वाहिली',
      cs: 'चेक',
      hu: 'हंगेरियाई',
      el: 'ग्रीक',
      sv: 'स्वीडिश',
      he: 'हिब्रू',
      da: 'डेनिश',
      no: 'नॉर्वेजियन',
      fi: 'फिनिश'
    }
  },

  // Options management
  options: {
    deleteOption: 'विकल्प हटाएं: {{option}}',
    editOption: 'विकल्प संपादित करें: {{option}}',
    optionNumber: 'विकल्प {{number}}',
    totalOptions: 'कुल {{count}} विकल्प',
    noOptions: 'कोई विकल्प नहीं जोड़े गए',
    noOptionsYet: 'अभी तक कोई विकल्प नहीं जोड़े गए। शुरू करने के लिए कुछ विकल्प जोड़ें!',
    noOptionsWheel: 'कोई विकल्प नहीं जोड़े गए',
    noOptionsWheelDesc: 'अपने डिसीजन व्हील के साथ शुरू करने के लिए कुछ विकल्प जोड़ें!',
    saveEdit: 'सेव करें',
    cancelEdit: 'रद्द करें',
    editButton: 'विकल्प संपादित करें',
    removeButton: 'विकल्प हटाएं',
    saveEditButton: 'परिवर्तन सेव करें',
    cancelEditButton: 'संपादन रद्द करें'
  },

  // Wheel history
  history: {
    title: 'परिणामों का इतिहास',
    button: 'इतिहास',
    historyButton: 'इतिहास',
    noHistory: 'कोई स्पिन इतिहास नहीं',
    lastResult: 'अंतिम परिणाम: {{result}}',
    clearHistory: 'इतिहास साफ़ करें',
    resultNumber: 'परिणाम #{{number}}',
    timeAgo: '{{time}} पहले'
  },

  // Error messages
  errors: {
    loadingTranslations: 'अनुवाद लोड करने में त्रुटि',
    wheelSpinError: 'व्हील घुमाने में त्रुटि',
    saveOptionsError: 'विकल्प सेव करने में त्रुटि',
    loadOptionsError: 'विकल्प लोड करने में त्रुटि',
    genericError: 'एक अप्रत्याशित त्रुटि हुई',
    networkError: 'नेटवर्क त्रुटि। कृपया अपना इंटरनेट कनेक्शन जांचें।',
    storageError: 'स्थानीय भंडारण तक पहुंचने में त्रुटि'
  },

  // Success messages
  success: {
    optionAdded: 'विकल्प सफलतापूर्वक जोड़ा गया',
    optionDeleted: 'विकल्प सफलतापूर्वक हटाया गया',
    optionEdited: 'अपडेट किया गया: "{{oldText}}" → "{{newText}}"',
    optionsCleared: 'सभी विकल्प साफ़ कर दिए गए हैं',
    languageChanged: 'भाषा {{language}} में बदल दी गई',
    historyCleared: 'इतिहास सफलतापूर्वक साफ़ किया गया',
    historyLoaded: 'व्हील कॉन्फ़िगरेशन लोड किया गया!'
  },

  // Accessibility labels
  accessibility: {
    spinButton: 'व्हील घुमाने का बटन',
    addOptionButton: 'नया विकल्प जोड़ने का बटन',
    deleteOptionButton: 'इस विकल्प को हटाने का बटन',
    optionInput: 'नया विकल्प दर्ज करने का टेक्स्ट फील्ड',
    wheelCanvas: 'इंटरैक्टिव व्हील कैनवास',
    languageSelector: 'भाषा चयनकर्ता',
    closeModal: 'परिणाम विंडो बंद करें',
    optionsList: 'जोड़े गए विकल्पों की सूची'
  },

  // Time formatting
  time: {
    now: 'अभी',
    secondsAgo: '{{count}} सेकंड पहले',
    secondsAgo_plural: '{{count}} सेकंड पहले',
    minutesAgo: '{{count}} मिनट पहले',
    minutesAgo_plural: '{{count}} मिनट पहले',
    hoursAgo: '{{count}} घंटे पहले',
    hoursAgo_plural: '{{count}} घंटे पहले',
    daysAgo: '{{count}} दिन पहले',
    daysAgo_plural: '{{count}} दिन पहले'
  },

  // Loading states
  loading: {
    loadingApp: 'एप्लिकेशन लोड हो रहा है...',
    loadingTranslations: 'अनुवाद लोड हो रहे हैं...',
    spinning: 'व्हील घूम रहा है...',
    savingOptions: 'विकल्प सेव हो रहे हैं...',
    loadingOptions: 'विकल्प लोड हो रहे हैं...'
  },

  // Tooltips and help text
  tooltips: {
    addOption: 'व्हील में नया विकल्प जोड़ें',
    deleteOption: 'इस विकल्प को व्हील से हटाएं',
    clearAll: 'व्हील से सभी विकल्प हटाएं',
    spinWheel: 'यादृच्छिक परिणाम पाने के लिए व्हील घुमाएं',
    changeLanguage: 'एप्लिकेशन की भाषा बदलें',
    wheelCenter: 'व्हील का केंद्र'
  },

  // Keyboard shortcuts
  shortcuts: {
    addOption: 'विकल्प जोड़ने के लिए एंटर दबाएं',
    spinWheel: 'व्हील घुमाने के लिए स्पेस दबाएं',
    closeModal: 'बंद करने के लिए एस्केप दबाएं'
  },

  // Validation messages
  validation: {
    required: 'यह फ़ील्ड आवश्यक है',
    minLength: 'न्यूनतम {{min}} अक्षर',
    maxLength: 'अधिकतम {{max}} अक्षर',
    invalidCharacters: 'अमान्य अक्षर हैं',
    duplicateEntry: 'यह एंट्री पहले से मौजूद है'
  }
};