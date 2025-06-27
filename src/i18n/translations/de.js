/**
 * German (Deutsch) Translations
 * Complete translation file for the Decision Wheel Spinner application
 * Includes all UI texts, messages, and SEO content
 */

export default {
  // Application meta information for SEO
  meta: {
    title: 'Entscheidungsrad - Treffen Sie einfach Entscheidungen',
    description: 'Treffen Sie einfach Entscheidungen mit unserem schönen Entscheidungsrad. Fügen Sie Ihre Optionen hinzu und drehen Sie das Rad für ein zufälliges Ergebnis.',
    keywords: 'rad, entscheidung, zufällig, auswahl, optionen, drehen, entscheiden',
    ogTitle: 'Entscheidungsrad - Treffen Sie einfach Entscheidungen',
    ogDescription: 'Treffen Sie einfach Entscheidungen mit unserem schönen Entscheidungsrad. Perfekt, wenn Sie sich nicht entscheiden können!',
    twitterTitle: 'Entscheidungsrad - Treffen Sie einfach Entscheidungen',
    twitterDescription: 'Treffen Sie einfach Entscheidungen mit unserem schönen Entscheidungsrad.'
  },

  // Main application header
  header: {
    title: 'Entscheidungsrad',
    subtitle: 'Fügen Sie Ihre Optionen hinzu und drehen Sie, um zu entscheiden!',
    iconAlt: 'Rad-Symbol'
  },

  // Input section for adding options
  input: {
    sectionTitle: 'Optionen hinzufügen',
    placeholder: 'Option eingeben...',
    addButton: 'Hinzufügen',
    clearAllButton: 'Alles löschen',
    maxOptionsReached: 'Sie haben das maximale Limit von {{max}} Optionen erreicht',
    emptyOptionError: 'Bitte geben Sie eine gültige Option ein',
    duplicateOptionError: 'Diese Option existiert bereits',
    optionTooLong: 'Option ist zu lang (maximal {{max}} Zeichen)',
    defaultOptions: [
      'Option 1',
      'Option 2',
      'Option 3',
      'Option 4'
    ],
    clearAllConfirmation: 'Sind Sie sicher, dass Sie alle {{count}} Optionen entfernen möchten?'
  },

  // Wheel section
  wheel: {
    spinButton: 'Rad drehen!',
    spinningButton: 'Dreht...',
    noOptionsMessage: 'Fügen Sie mindestens 2 Optionen hinzu, um das Rad zu drehen',
    centerAlt: 'Radmitte',
    pointerAlt: 'Radzeiger'
  },

  // Result modal
  result: {
    winnerTitle: '🎉 Gewinner! 🎉',
    winnerPrefix: 'Das Ergebnis ist:',
    closeButton: 'Schließen',
    spinAgainButton: 'Erneut drehen',
    celebrationMessages: [
      'Herzlichen Glückwunsch!',
      'Ausgezeichnete Wahl!',
      'Das ist Ihre Antwort!',
      'Perfekt!',
      'Großartig!'
    ]
  },

  // Language selector
  language: {
    selectorTitle: 'Sprache',
    autoDetected: 'Automatisch erkannt',
    changeLanguage: 'Sprache zu {{language}} ändern',
    currentLanguage: 'Aktuelle Sprache: {{language}}',
    searchPlaceholder: 'Sprachen suchen...',
    mostPopularLanguages: 'BELIEBTESTE SPRACHEN',
    popularTag: 'BELIEBT',
    tierNames: {
      mostPopular: 'Beliebteste Sprachen',
      regional: 'Regionale Sprachen',
      europeanAsian: 'Europäische und Asiatische Sprachen',
      additional: 'Zusätzliche Sprachen'
    },
    languages: {
      en: 'Englisch',
      es: 'Spanisch',
      fr: 'Französisch',
      pt: 'Portugiesisch',
      de: 'Deutsch',
      zh: 'Chinesisch',
      ja: 'Japanisch',
      ru: 'Russisch'
    }
  },

  // Options management
  options: {
    deleteOption: 'Option löschen: {{option}}',
    editOption: 'Option bearbeiten: {{option}}',
    optionNumber: 'Option {{number}}',
    totalOptions: '{{count}} Optionen insgesamt',
    noOptions: 'Keine Optionen hinzugefügt',
    noOptionsYet: 'Noch keine Optionen hinzugefügt. Fügen Sie einige Optionen hinzu, um zu beginnen!',
    noOptionsWheel: 'Keine Optionen hinzugefügt',
    noOptionsWheelDesc: 'Fügen Sie einige Optionen hinzu, um mit Ihrem Entscheidungsrad zu beginnen!',
    saveEdit: 'Speichern',
    cancelEdit: 'Abbrechen',
    editButton: 'Option bearbeiten',
    removeButton: 'Option entfernen',
    saveEditButton: 'Änderungen speichern',
    cancelEditButton: 'Bearbeitung abbrechen'
  },

  // Wheel history
  history: {
    title: 'Ergebnis-Verlauf',
    button: 'Verlauf',
    historyButton: 'Verlauf',
    noHistory: 'Keine Drehhistorie',
    lastResult: 'Letztes Ergebnis: {{result}}',
    clearHistory: 'Verlauf löschen',
    resultNumber: 'Ergebnis #{{number}}',
    timeAgo: 'vor {{time}}'
  },

  // Error messages
  errors: {
    loadingTranslations: 'Fehler beim Laden der Übersetzungen',
    wheelSpinError: 'Fehler beim Drehen des Rads',
    saveOptionsError: 'Fehler beim Speichern der Optionen',
    loadOptionsError: 'Fehler beim Laden der Optionen',
    genericError: 'Ein unerwarteter Fehler ist aufgetreten',
    networkError: 'Netzwerkfehler. Überprüfen Sie Ihre Internetverbindung.',
    storageError: 'Fehler beim Zugriff auf lokalen Speicher'
  },

  // Success messages
  success: {
    optionAdded: 'Option erfolgreich hinzugefügt',
    optionDeleted: 'Option erfolgreich entfernt',
    optionEdited: 'Aktualisiert: "{{oldText}}" → "{{newText}}"',
    optionsCleared: 'Alle Optionen wurden gelöscht',
    languageChanged: 'Sprache geändert zu {{language}}',
    historyCleared: 'Verlauf erfolgreich gelöscht',
    historyLoaded: 'Rad-Konfiguration geladen!'
  },

  // Accessibility labels
  accessibility: {
    spinButton: 'Taste zum Drehen des Rads',
    addOptionButton: 'Taste zum Hinzufügen einer neuen Option',
    deleteOptionButton: 'Taste zum Löschen dieser Option',
    optionInput: 'Textfeld zur Eingabe einer neuen Option',
    wheelCanvas: 'Interaktive Rad-Leinwand',
    languageSelector: 'Sprachauswahl',
    closeModal: 'Ergebnisfenster schließen',
    optionsList: 'Liste der hinzugefügten Optionen'
  },

  // Time formatting
  time: {
    now: 'jetzt',
    secondsAgo: 'vor {{count}} Sekunde',
    secondsAgo_plural: 'vor {{count}} Sekunden',
    minutesAgo: 'vor {{count}} Minute',
    minutesAgo_plural: 'vor {{count}} Minuten',
    hoursAgo: 'vor {{count}} Stunde',
    hoursAgo_plural: 'vor {{count}} Stunden',
    daysAgo: 'vor {{count}} Tag',
    daysAgo_plural: 'vor {{count}} Tagen'
  },

  // Loading states
  loading: {
    loadingApp: 'Anwendung wird geladen...',
    loadingTranslations: 'Übersetzungen werden geladen...',
    spinning: 'Rad dreht sich...',
    savingOptions: 'Optionen werden gespeichert...',
    loadingOptions: 'Optionen werden geladen...'
  },

  // Tooltips and help text
  tooltips: {
    addOption: 'Eine neue Option zum Rad hinzufügen',
    deleteOption: 'Diese Option vom Rad entfernen',
    clearAll: 'Alle Optionen vom Rad entfernen',
    spinWheel: 'Das Rad drehen für ein zufälliges Ergebnis',
    changeLanguage: 'Die Sprache der Anwendung ändern',
    wheelCenter: 'Radmitte'
  },

  // Keyboard shortcuts
  shortcuts: {
    addOption: 'Drücken Sie Enter, um die Option hinzuzufügen',
    spinWheel: 'Drücken Sie Leertaste, um das Rad zu drehen',
    closeModal: 'Drücken Sie Esc zum Schließen'
  },

  // Validation messages
  validation: {
    required: 'Dieses Feld ist erforderlich',
    minLength: 'Mindestens {{min}} Zeichen',
    maxLength: 'Maximal {{max}} Zeichen',
    invalidCharacters: 'Enthält ungültige Zeichen',
    duplicateEntry: 'Dieser Eintrag existiert bereits'
  }
};