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
  },

  // Social proof section
  socialProof: {
    happyUsers: 'Zufriedene Nutzer',
    decisionsMade: 'Getroffene Entscheidungen',
    userRating: 'Nutzerbewertung',
    trustedText: 'Vertraut von Tausenden von Nutzern weltweit'
  },

  // Recent activity messages
  recentActivity: {
    messages: [
      'Jemand in New York hat gerade das Rad gedreht',
      'Ein Nutzer aus London hat sein Ergebnis geteilt',
      'Jemand aus Tokio hat eine Entscheidung getroffen',
      'Ein Nutzer aus Sydney hat das Rad benutzt',
      'Jemand aus Berlin hat seine Antwort erhalten'
    ]
  },

  // AdSense Compliance Content
  content: {
    howToUse: {
      title: 'So verwenden Sie das Entscheidungsrad',
      step1: {
        title: 'Schritt 1: Optionen hinzufügen',
        description: 'Beginnen Sie damit, alle Wahlmöglichkeiten hinzuzufügen, die Sie in Betracht ziehen möchten. Geben Sie jede Option in das Eingabefeld ein und klicken Sie auf "Hinzufügen", um sie in Ihr Entscheidungsrad aufzunehmen. Sie können so viele Optionen hinzufügen, wie Sie benötigen - unser Rad passt sich automatisch an, um alle Ihre Auswahlmöglichkeiten zu berücksichtigen.'
      },
      step2: {
        title: 'Schritt 2: Das Rad drehen',
        description: 'Sobald Sie alle Ihre Optionen hinzugefügt haben, klicken Sie auf die Schaltfläche "Rad drehen!", um den zufälligen Auswahlprozess zu starten. Das Rad dreht sich einige Sekunden lang, bevor es auf einer Ihrer Optionen landet und Ihnen eine unvoreingenommene Entscheidung liefert.'
      },
      step3: {
        title: 'Schritt 3: Ihr Ergebnis erhalten',
        description: 'Nachdem das Rad aufgehört hat zu drehen, sehen Sie die ausgewählte Option hervorgehoben. Wenn Sie mit dem Ergebnis nicht zufrieden sind, können Sie jederzeit erneut drehen oder Ihre Optionsliste ändern, um Ihre Präferenzen besser widerzuspiegeln.'
      }
    },
    popularUses: {
      title: 'Beliebte Verwendungen für unser Entscheidungsrad',
      foodDecisions: {
        title: '🍕 Essensentscheidungen',
        description: 'Können Sie sich nicht entscheiden, was Sie zum Abendessen essen sollen? Fügen Sie Ihre Lieblingsrestaurants, Küchen oder Mahlzeitoptionen zum Rad hinzu und lassen Sie es für Sie auswählen. Perfekt für Paare oder Familien, die sich nicht einigen können, wo sie essen gehen.'
      },
      entertainmentChoices: {
        title: '🎬 Unterhaltungsoptionen',
        description: 'Verwenden Sie unser Drehrad, um Filme zum Anschauen, Spiele zum Spielen oder Aktivitäten auszuwählen. Fügen Sie Ihre Unterhaltungsoptionen hinzu und lassen Sie das Rad Ihre Abendpläne entscheiden.'
      },
      travelPlanning: {
        title: '✈️ Reiseplanung',
        description: 'Planen Sie Ihren nächsten Urlaub, können sich aber nicht für ein Reiseziel entscheiden? Listen Sie Ihre potenziellen Reiseziele auf und drehen Sie das Rad, um zufällig Ihr nächstes Abenteuer auszuwählen.'
      },
      dailyActivities: {
        title: '🎯 Tägliche Aktivitäten',
        description: 'Machen Sie alltägliche Entscheidungen unterhaltsamer, indem Sie das Rad für Trainingsroutinen, Wochenendaktivitäten oder sogar zur Auswahl verwenden, welche Aufgabe Sie zuerst angehen.'
      },
      partyGames: {
        title: '🎪 Partyspiele',
        description: 'Bringen Sie Spannung in Partys und Zusammenkünfte, indem Sie das Rad für die Spielauswahl, Wahrheit oder Pflicht-Herausforderungen oder die Zuteilung lustiger Aufgaben an Teilnehmer verwenden.'
      },
      educationalTools: {
        title: '📚 Bildungstools',
        description: 'Lehrer können das Entscheidungsrad für die zufällige Schülerauswahl, die Auswahl von Diskussionsthemen oder um Klassenraumaktivitäten ansprechender und fairer zu gestalten, verwenden.'
      }
    },
    whyChoose: {
      title: 'Warum unser Entscheidungsrad wählen?',
      randomResults: {
        title: '🔄 Wirklich zufällige Ergebnisse',
        description: 'Unser Algorithmus gewährleistet eine vollständig unvoreingenommene Auswahl und gibt jeder Option die gleiche Chance, ausgewählt zu werden. Keine versteckten Präferenzen oder Muster.'
      },
      mobileFriendly: {
        title: '📱 Mobilfreundlich',
        description: 'Funktioniert perfekt auf allen Geräten - Smartphones, Tablets und Desktop-Computern. Das responsive Design gewährleistet eine reibungslose Erfahrung unabhängig von der Bildschirmgröße.'
      },
      noRegistration: {
        title: '🚀 Keine Registrierung erforderlich',
        description: 'Beginnen Sie sofort mit der Nutzung des Rads, ohne Konten zu erstellen oder persönliche Informationen anzugeben. Einfach, schnell und anonym.'
      },
      beautifulDesign: {
        title: '🎨 Schönes Design',
        description: 'Genießen Sie eine moderne, optisch ansprechende Benutzeroberfläche mit flüssigen Animationen und Glasmorphismus-Effekten, die das Entscheiden angenehmer machen.'
      },
      fastPerformance: {
        title: '⚡ Schnelle Leistung',
        description: 'Optimiert für Geschwindigkeit mit minimalen Ladezeiten und flüssigen Drehanimationen. Treffen Sie Ihre Entscheidungen schnell ohne frustrierende Verzögerungen.'
      },
      multipleLanguages: {
        title: '🌐 Mehrere Sprachen',
        description: 'Verfügbar in mehreren Sprachen, um Nutzer weltweit zu bedienen. Wechseln Sie zwischen Deutsch, Englisch, Spanisch, Französisch und mehr für eine lokalisierte Erfahrung.'
      }
    },
    tips: {
      title: 'Tipps für bessere Entscheidungsfindung',
      subtitle: 'Das Beste aus Ihrer Rad-Erfahrung herausholen',
      beSpecific: {
        title: 'Seien Sie spezifisch:',
        description: 'Beim Hinzufügen von Optionen seien Sie so spezifisch wie möglich. Anstatt "Italienisches Essen" versuchen Sie "Marios Pizza" oder "Tonys Nudelhaus" für klarere Ergebnisse.'
      },
      considerWeight: {
        title: 'Gewichtung berücksichtigen:',
        description: 'Wenn einige Optionen ansprechender sind als andere, können Sie sie mehrmals hinzufügen, um ihre Chancen auf Auswahl zu erhöhen.'
      },
      reviewOptions: {
        title: 'Optionen überprüfen:',
        description: 'Bevor Sie drehen, lesen Sie Ihre Liste durch, um sicherzustellen, dass alle Optionen noch relevant und ansprechend für Sie sind.'
      },
      trustProcess: {
        title: 'Vertrauen Sie dem Prozess:',
        description: 'Sobald Sie gedreht haben, versuchen Sie, mit dem Ergebnis zu gehen. Das Rad hilft dabei, Entscheidungslähmung zu beseitigen, indem es die Wahl für Sie trifft.'
      },
      useBrainstorming: {
        title: 'Für Brainstorming nutzen:',
        description: 'Fügen Sie kreative oder unerwartete Optionen hinzu, um neue Möglichkeiten zu entdecken, die Sie vielleicht nicht in Betracht gezogen hätten.'
      }
    }
  }
};