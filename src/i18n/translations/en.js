/**
 * English Translations
 * Complete translation file for the Decision Wheel Spinner application
 * Includes all UI texts, messages, and SEO content
 */

export default {
  // Application meta information for SEO
  meta: {
    title: 'Decision Wheel Spinner - Make Decisions Easily',
    description: 'Make decisions easily with our beautiful decision wheel spinner. Add your options and spin the wheel to get a random result.',
    keywords: 'wheel, spinner, decision, random, choice, options, spin, decide',
    ogTitle: 'Decision Wheel Spinner - Make Decisions Easily',
    ogDescription: 'Make decisions easily with our beautiful decision wheel spinner. Perfect for when you can\'t decide!',
    twitterTitle: 'Decision Wheel Spinner - Make Decisions Easily',
    twitterDescription: 'Make decisions easily with our beautiful decision wheel spinner.'
  },

  // Main application header
  header: {
    title: 'Decision Wheel',
    subtitle: 'Add your options and spin to decide!',
    iconAlt: 'Wheel Icon'
  },

  // Input section for adding options
  input: {
    sectionTitle: 'Add Options',
    placeholder: 'Enter an option...',
    addButton: 'Add',
    clearAllButton: 'Clear All',
    maxOptionsReached: 'You have reached the maximum limit of {{max}} options',
    emptyOptionError: 'Please enter a valid option',
    duplicateOptionError: 'This option already exists',
    optionTooLong: 'Option is too long (maximum {{max}} characters)',
    defaultOptions: [
      'Option 1',
      'Option 2',
      'Option 3',
      'Option 4'
    ],
    clearAllConfirmation: 'Are you sure you want to remove all {{count}} options?'
  },

  // Wheel section
  wheel: {
    spinButton: 'Spin the Wheel!',
    spinningButton: 'Spinning...',
    noOptionsMessage: 'Add at least 2 options to spin the wheel',
    centerAlt: 'Wheel center',
    pointerAlt: 'Wheel pointer'
  },

  // Result modal
  result: {
    winnerTitle: '🎉 Winner! 🎉',
    winnerPrefix: 'The result is:',
    closeButton: 'Close',
    spinAgainButton: 'Spin Again',
    celebrationMessages: [
      'Congratulations!',
      'Excellent choice!',
      'That\'s your answer!',
      'Perfect!',
      'Great!'
    ]
  },

  // Language selector
  language: {
    selectorTitle: 'Language',
    autoDetected: 'Auto-detected',
    changeLanguage: 'Change language to {{language}}',
    currentLanguage: 'Current language: {{language}}',
    languages: {
      en: 'English',
      es: 'Spanish',
      fr: 'French',
      pt: 'Portuguese',
      de: 'German',
      zh: 'Chinese',
      ja: 'Japanese',
      ru: 'Russian'
    }
  },

  // Options management
  options: {
    deleteOption: 'Delete option: {{option}}',
    editOption: 'Edit option: {{option}}',
    optionNumber: 'Option {{number}}',
    totalOptions: '{{count}} options total',
    noOptions: 'No options added',
    noOptionsYet: 'No options added yet. Add some options to get started!',
    noOptionsWheel: 'No Options Added',
    noOptionsWheelDesc: 'Add some options to get started with your decision wheel!',
    saveEdit: 'Save',
    cancelEdit: 'Cancel',
    editButton: 'Edit option',
    removeButton: 'Remove option',
    saveEditButton: 'Save changes',
    cancelEditButton: 'Cancel editing'
  },

  // Wheel history
  history: {
    title: 'Results History',
    button: 'History',
    noHistory: 'No spin history',
    lastResult: 'Last result: {{result}}',
    clearHistory: 'Clear History',
    resultNumber: 'Result #{{number}}',
    timeAgo: '{{time}} ago'
  },

  // Error messages
  errors: {
    loadingTranslations: 'Error loading translations',
    wheelSpinError: 'Error spinning the wheel',
    saveOptionsError: 'Error saving options',
    loadOptionsError: 'Error loading options',
    genericError: 'An unexpected error occurred',
    networkError: 'Network error. Please check your internet connection.',
    storageError: 'Error accessing local storage'
  },

  // Success messages
  success: {
    optionAdded: 'Option added successfully',
    optionDeleted: 'Option deleted successfully',
    optionEdited: 'Updated: "{{oldText}}" → "{{newText}}"',
    optionsCleared: 'All options have been cleared',
    languageChanged: 'Language changed to {{language}}',
    historyCleared: 'History cleared successfully',
    historyLoaded: 'Wheel configuration loaded!'
  },

  // Accessibility labels
  accessibility: {
    spinButton: 'Button to spin the wheel',
    addOptionButton: 'Button to add new option',
    deleteOptionButton: 'Button to delete this option',
    optionInput: 'Text field to enter new option',
    wheelCanvas: 'Interactive wheel canvas',
    languageSelector: 'Language selector',
    closeModal: 'Close result window',
    optionsList: 'List of added options'
  },

  // Time formatting
  time: {
    now: 'now',
    secondsAgo: '{{count}} second ago',
    secondsAgo_plural: '{{count}} seconds ago',
    minutesAgo: '{{count}} minute ago',
    minutesAgo_plural: '{{count}} minutes ago',
    hoursAgo: '{{count}} hour ago',
    hoursAgo_plural: '{{count}} hours ago',
    daysAgo: '{{count}} day ago',
    daysAgo_plural: '{{count}} days ago'
  },

  // Loading states
  loading: {
    loadingApp: 'Loading application...',
    loadingTranslations: 'Loading translations...',
    spinning: 'Spinning the wheel...',
    savingOptions: 'Saving options...',
    loadingOptions: 'Loading options...'
  },

  // Tooltips and help text
  tooltips: {
    addOption: 'Add a new option to the wheel',
    deleteOption: 'Remove this option from the wheel',
    clearAll: 'Remove all options from the wheel',
    spinWheel: 'Spin the wheel to get a random result',
    changeLanguage: 'Change the application language',
    wheelCenter: 'Wheel center'
  },

  // Keyboard shortcuts
  shortcuts: {
    addOption: 'Press Enter to add the option',
    spinWheel: 'Press Space to spin the wheel',
    closeModal: 'Press Escape to close'
  },

  // Validation messages
  validation: {
    required: 'This field is required',
    minLength: 'Minimum {{min}} characters',
    maxLength: 'Maximum {{max}} characters',
    invalidCharacters: 'Contains invalid characters',
    duplicateEntry: 'This entry already exists'
  }
};