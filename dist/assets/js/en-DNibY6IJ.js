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
    searchPlaceholder: 'Search languages...',
    mostPopularLanguages: 'MOST POPULAR LANGUAGES',
    popularTag: 'POPULAR',
    tierNames: {
      mostPopular: 'Most Popular Languages',
      regional: 'Regional Languages',
      europeanAsian: 'European & Asian Languages',
      additional: 'Additional Languages'
    },
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
    historyButton: 'History',
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
  },

  // Social proof section
  socialProof: {
    happyUsers: 'Happy Users',
    decisionsMade: 'Decisions Made',
    userRating: 'User Rating',
    trustedText: 'Trusted by thousands of users worldwide'
  },

  // Social sharing section
  socialSharing: {
    title: 'Share Your Decision',
    subtitle: 'Let others know about this useful tool!',
    platforms: {
      twitter: 'Twitter',
      facebook: 'Facebook',
      linkedin: 'LinkedIn',
      reddit: 'Reddit',
      whatsapp: 'WhatsApp',
      telegram: 'Telegram',
      copy: 'Copy Link'
    },
    followText: 'Follow us for updates:',
    followButton: 'Follow @wheelspinner',
    copySuccess: 'Copied!',
    shareCount: 'people shared this tool'
  },

  // Recent activity messages
  recentActivity: {
    messages: [
      'Someone in New York just spun the wheel',
      'A user from London shared their result',
      'Someone from Tokyo made a decision',
      'A user from Sydney used the wheel',
      'Someone from Berlin got their answer'
    ]
  },

  // AdSense Compliance Content
  content: {
    howToUse: {
      title: 'How to Use the Decision Wheel Spinner',
      step1: {
        title: 'Step 1: Add Your Options',
        description: 'Start by adding all the choices you want to consider. Type each option in the input field and click "Add" to include it in your decision wheel. You can add as many options as you need - our wheel will automatically adjust to accommodate all your choices.'
      },
      step2: {
        title: 'Step 2: Spin the Wheel',
        description: 'Once you\'ve added all your options, click the "Spin the Wheel!" button to start the random selection process. The wheel will spin for a few seconds before landing on one of your options, providing you with an unbiased decision.'
      },
      step3: {
        title: 'Step 3: Get Your Result',
        description: 'After the wheel stops spinning, you\'ll see the selected option highlighted. If you\'re not satisfied with the result, you can always spin again or modify your options list to better reflect your preferences.'
      }
    },
    popularUses: {
      title: 'Popular Uses for Our Decision Wheel',
      foodDecisions: {
        title: '🍕 Food Decisions',
        description: 'Can\'t decide what to eat for dinner? Add your favorite restaurants, cuisines, or meal options to the wheel and let it choose for you. Perfect for couples or families who can\'t agree on where to dine.'
      },
      entertainmentChoices: {
        title: '🎬 Entertainment Choices',
        description: 'Use our spinner to pick movies to watch, games to play, or activities to do. Add your entertainment options and let the wheel decide your evening plans.'
      },
      travelPlanning: {
        title: '✈️ Travel Planning',
        description: 'Planning your next vacation but can\'t decide on a destination? List your potential travel spots and spin the wheel to randomly select your next adventure.'
      },
      dailyActivities: {
        title: '🎯 Daily Activities',
        description: 'Make everyday decisions more fun by using the wheel for workout routines, weekend activities, or even choosing which task to tackle first.'
      },
      partyGames: {
        title: '🎪 Party Games',
        description: 'Add excitement to parties and gatherings by using the wheel for game selection, truth or dare challenges, or assigning fun tasks to participants.'
      },
      educationalTools: {
        title: '📚 Educational Tools',
        description: 'Teachers can use the decision wheel for random student selection, choosing discussion topics, or making classroom activities more engaging and fair.'
      }
    },
    whyChoose: {
      title: 'Why Choose Our Decision Wheel Spinner?',
      randomResults: {
        title: '🔄 Truly Random Results',
        description: 'Our algorithm ensures completely unbiased selection, giving each option an equal chance of being chosen. No hidden preferences or patterns.'
      },
      mobileFriendly: {
        title: '📱 Mobile Friendly',
        description: 'Works perfectly on all devices - smartphones, tablets, and desktop computers. The responsive design ensures a smooth experience regardless of screen size.'
      },
      noRegistration: {
        title: '🚀 No Registration Required',
        description: 'Start using the wheel immediately without creating accounts or providing personal information. Simple, fast, and anonymous.'
      },
      beautifulDesign: {
        title: '🎨 Beautiful Design',
        description: 'Enjoy a modern, visually appealing interface with smooth animations and glassmorphism effects that make decision-making more enjoyable.'
      },
      fastPerformance: {
        title: '⚡ Fast Performance',
        description: 'Optimized for speed with minimal loading times and smooth spinning animations. Get your decisions made quickly without frustrating delays.'
      },
      multipleLanguages: {
        title: '🌐 Multiple Languages',
        description: 'Available in multiple languages to serve users worldwide. Switch between English, Spanish, French, and more for a localized experience.'
      }
    },
    tips: {
      title: 'Tips for Better Decision Making',
      subtitle: 'Making the Most of Your Wheel Spinner Experience',
      beSpecific: {
        title: 'Be Specific:',
        description: 'When adding options, be as specific as possible. Instead of "Italian food," try "Mario\'s Pizza" or "Tony\'s Pasta House" for clearer results.'
      },
      considerWeight: {
        title: 'Consider Weight:',
        description: 'If some options are more appealing than others, you can add them multiple times to increase their chances of being selected.'
      },
      reviewOptions: {
        title: 'Review Your Options:',
        description: 'Before spinning, read through your list to make sure all options are still relevant and appealing to you.'
      },
      trustProcess: {
        title: 'Trust the Process:',
        description: 'Once you spin, try to go with the result. The wheel helps remove decision paralysis by making the choice for you.'
      },
      useBrainstorming: {
        title: 'Use for Brainstorming:',
        description: 'Add creative or unexpected options to discover new possibilities you might not have considered.'
      }
    }
  }
};