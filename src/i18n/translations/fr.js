/**
 * French (Français) Translations
 * Complete translation file for the Decision Wheel Spinner application
 * Includes all UI texts, messages, and SEO content
 */

export default {
  // Application meta information for SEO
  meta: {
    title: 'Roue de Décision - Prenez des Décisions Facilement',
    description: 'Prenez des décisions facilement avec notre belle roue de décision. Ajoutez vos options et faites tourner la roue pour obtenir un résultat aléatoire.',
    keywords: 'roue, décision, hasard, choix, options, tourner, décider',
    ogTitle: 'Roue de Décision - Prenez des Décisions Facilement',
    ogDescription: 'Prenez des décisions facilement avec notre belle roue de décision. Parfait quand vous n\'arrivez pas à décider !',
    twitterTitle: 'Roue de Décision - Prenez des Décisions Facilement',
    twitterDescription: 'Prenez des décisions facilement avec notre belle roue de décision.'
  },

  // Main application header
  header: {
    title: 'Roue de Décision',
    subtitle: 'Ajoutez vos options et faites tourner pour décider !',
    iconAlt: 'Icône de la Roue'
  },

  // Input section for adding options
  input: {
    sectionTitle: 'Ajouter des Options',
    placeholder: 'Entrez une option...',
    addButton: 'Ajouter',
    clearAllButton: 'Tout Effacer',
    maxOptionsReached: 'Vous avez atteint la limite maximale de {{max}} options',
    emptyOptionError: 'Veuillez entrer une option valide',
    duplicateOptionError: 'Cette option existe déjà',
    optionTooLong: 'L\'option est trop longue (maximum {{max}} caractères)',
    defaultOptions: [
      'Option 1',
      'Option 2',
      'Option 3',
      'Option 4'
    ],
    clearAllConfirmation: 'Êtes-vous sûr de vouloir supprimer toutes les {{count}} options ?'
  },

  // Wheel section
  wheel: {
    spinButton: 'Faire Tourner la Roue !',
    spinningButton: 'En cours...',
    noOptionsMessage: 'Ajoutez au moins 2 options pour faire tourner la roue',
    centerAlt: 'Centre de la roue',
    pointerAlt: 'Pointeur de la roue'
  },

  // Result modal
  result: {
    winnerTitle: '🎉 Gagnant ! 🎉',
    winnerPrefix: 'Le résultat est :',
    closeButton: 'Fermer',
    spinAgainButton: 'Tourner à Nouveau',
    celebrationMessages: [
      'Félicitations !',
      'Excellent choix !',
      'Voilà votre réponse !',
      'Parfait !',
      'Génial !'
    ]
  },

  // Language selector
  language: {
    selectorTitle: 'Langue',
    autoDetected: 'Détecté automatiquement',
    changeLanguage: 'Changer la langue en {{language}}',
    currentLanguage: 'Langue actuelle : {{language}}',
    searchPlaceholder: 'Rechercher des langues...',
    mostPopularLanguages: 'LANGUES LES PLUS POPULAIRES',
    popularTag: 'POPULAIRE',
    tierNames: {
      mostPopular: 'Langues Les Plus Populaires',
      regional: 'Langues Régionales',
      europeanAsian: 'Langues Européennes et Asiatiques',
      additional: 'Langues Supplémentaires'
    },
    languages: {
      en: 'Anglais',
      es: 'Espagnol',
      fr: 'Français',
      pt: 'Portugais',
      de: 'Allemand',
      zh: 'Chinois',
      ja: 'Japonais',
      ru: 'Russe'
    }
  },

  // Options management
  options: {
    deleteOption: 'Supprimer l\'option : {{option}}',
    editOption: 'Modifier l\'option : {{option}}',
    optionNumber: 'Option {{number}}',
    totalOptions: '{{count}} options au total',
    noOptions: 'Aucune option ajoutée',
    noOptionsYet: 'Aucune option ajoutée pour le moment. Ajoutez quelques options pour commencer !',
    noOptionsWheel: 'Aucune Option Ajoutée',
    noOptionsWheelDesc: 'Ajoutez quelques options pour commencer avec votre roue de décision !',
    saveEdit: 'Enregistrer',
    cancelEdit: 'Annuler',
    editButton: 'Modifier l\'option',
    removeButton: 'Supprimer l\'option',
    saveEditButton: 'Enregistrer les modifications',
    cancelEditButton: 'Annuler la modification'
  },

  // Wheel history
  history: {
    title: 'Historique des Résultats',
    button: 'Historique',
    historyButton: 'Historique',
    noHistory: 'Aucun historique de tours',
    lastResult: 'Dernier résultat : {{result}}',
    clearHistory: 'Effacer l\'Historique',
    resultNumber: 'Résultat #{{number}}',
    timeAgo: 'il y a {{time}}'
  },

  // Error messages
  errors: {
    loadingTranslations: 'Erreur lors du chargement des traductions',
    wheelSpinError: 'Erreur lors de la rotation de la roue',
    saveOptionsError: 'Erreur lors de la sauvegarde des options',
    loadOptionsError: 'Erreur lors du chargement des options',
    genericError: 'Une erreur inattendue s\'est produite',
    networkError: 'Erreur réseau. Veuillez vérifier votre connexion internet.',
    storageError: 'Erreur d\'accès au stockage local'
  },

  // Success messages
  success: {
    optionAdded: 'Option ajoutée avec succès',
    optionDeleted: 'Option supprimée avec succès',
    optionEdited: 'Mis à jour : "{{oldText}}" → "{{newText}}"',
    optionsCleared: 'Toutes les options ont été effacées',
    languageChanged: 'Langue changée en {{language}}',
    historyCleared: 'Historique effacé avec succès',
    historyLoaded: 'Configuration de la roue chargée !'
  },

  // Accessibility labels
  accessibility: {
    spinButton: 'Bouton pour faire tourner la roue',
    addOptionButton: 'Bouton pour ajouter une nouvelle option',
    deleteOptionButton: 'Bouton pour supprimer cette option',
    optionInput: 'Champ de texte pour entrer une nouvelle option',
    wheelCanvas: 'Canevas de roue interactive',
    languageSelector: 'Sélecteur de langue',
    closeModal: 'Fermer la fenêtre de résultat',
    optionsList: 'Liste des options ajoutées'
  },

  // Time formatting
  time: {
    now: 'maintenant',
    secondsAgo: 'il y a {{count}} seconde',
    secondsAgo_plural: 'il y a {{count}} secondes',
    minutesAgo: 'il y a {{count}} minute',
    minutesAgo_plural: 'il y a {{count}} minutes',
    hoursAgo: 'il y a {{count}} heure',
    hoursAgo_plural: 'il y a {{count}} heures',
    daysAgo: 'il y a {{count}} jour',
    daysAgo_plural: 'il y a {{count}} jours'
  },

  // Loading states
  loading: {
    loadingApp: 'Chargement de l\'application...',
    loadingTranslations: 'Chargement des traductions...',
    spinning: 'Rotation de la roue en cours...',
    savingOptions: 'Sauvegarde des options...',
    loadingOptions: 'Chargement des options...'
  },

  // Tooltips and help text
  tooltips: {
    addOption: 'Ajouter une nouvelle option à la roue',
    deleteOption: 'Supprimer cette option de la roue',
    clearAll: 'Supprimer toutes les options de la roue',
    spinWheel: 'Faire tourner la roue pour obtenir un résultat aléatoire',
    changeLanguage: 'Changer la langue de l\'application',
    wheelCenter: 'Centre de la roue'
  },

  // Keyboard shortcuts
  shortcuts: {
    addOption: 'Appuyez sur Entrée pour ajouter l\'option',
    spinWheel: 'Appuyez sur Espace pour faire tourner la roue',
    closeModal: 'Appuyez sur Échap pour fermer'
  },

  // Validation messages
  validation: {
    required: 'Ce champ est obligatoire',
    minLength: 'Minimum {{min}} caractères',
    maxLength: 'Maximum {{max}} caractères',
    invalidCharacters: 'Contient des caractères non valides',
    duplicateEntry: 'Cette entrée existe déjà'
  },

  // Social proof section
  socialProof: {
    happyUsers: 'Utilisateurs Satisfaits',
    decisionsMade: 'Décisions Prises',
    userRating: 'Note des Utilisateurs',
    trustedText: 'Fait confiance par des milliers d\'utilisateurs dans le monde'
  },

  // Recent activity messages
  recentActivity: {
    messages: [
      'Quelqu\'un à New York vient de faire tourner la roue',
      'Un utilisateur de Londres a partagé son résultat',
      'Quelqu\'un de Tokyo a pris une décision',
      'Un utilisateur de Sydney a utilisé la roue',
      'Quelqu\'un de Berlin a obtenu sa réponse'
    ]
  },

  // AdSense Compliance Content
  content: {
    howToUse: {
      title: 'Comment Utiliser la Roue de Décision',
      step1: {
        title: 'Étape 1 : Ajoutez Vos Options',
        description: 'Commencez par ajouter tous les choix que vous souhaitez considérer. Tapez chaque option dans le champ de saisie et cliquez sur "Ajouter" pour l\'inclure dans votre roue de décision. Vous pouvez ajouter autant d\'options que nécessaire - notre roue s\'ajustera automatiquement pour accommoder tous vos choix.'
      },
      step2: {
        title: 'Étape 2 : Faites Tourner la Roue',
        description: 'Une fois que vous avez ajouté toutes vos options, cliquez sur le bouton "Faire Tourner la Roue !" pour commencer le processus de sélection aléatoire. La roue tournera pendant quelques secondes avant de s\'arrêter sur l\'une de vos options, vous fournissant une décision impartiale.'
      },
      step3: {
        title: 'Étape 3 : Obtenez Votre Résultat',
        description: 'Après que la roue s\'arrête de tourner, vous verrez l\'option sélectionnée mise en surbrillance. Si vous n\'êtes pas satisfait du résultat, vous pouvez toujours tourner à nouveau ou modifier votre liste d\'options pour mieux refléter vos préférences.'
      }
    },
    popularUses: {
      title: 'Utilisations Populaires de Notre Roue de Décision',
      foodDecisions: {
        title: '🍕 Décisions Alimentaires',
        description: 'Vous n\'arrivez pas à décider quoi manger pour le dîner ? Ajoutez vos restaurants préférés, cuisines, ou options de repas à la roue et laissez-la choisir pour vous. Parfait pour les couples ou familles qui ne peuvent pas se mettre d\'accord sur où dîner.'
      },
      entertainmentChoices: {
        title: '🎬 Choix de Divertissement',
        description: 'Utilisez notre spinner pour choisir des films à regarder, des jeux à jouer, ou des activités à faire. Ajoutez vos options de divertissement et laissez la roue décider de vos plans de soirée.'
      },
      travelPlanning: {
        title: '✈️ Planification de Voyage',
        description: 'Vous planifiez vos prochaines vacances mais n\'arrivez pas à vous décider sur une destination ? Listez vos destinations potentielles de voyage et faites tourner la roue pour sélectionner aléatoirement votre prochaine aventure.'
      },
      dailyActivities: {
        title: '🎯 Activités Quotidiennes',
        description: 'Rendez les décisions quotidiennes plus amusantes en utilisant la roue pour les routines d\'exercice, les activités de week-end, ou même pour choisir quelle tâche aborder en premier.'
      },
      partyGames: {
        title: '🎪 Jeux de Fête',
        description: 'Ajoutez de l\'excitation aux fêtes et rassemblements en utilisant la roue pour la sélection de jeux, les défis vérité ou action, ou l\'attribution de tâches amusantes aux participants.'
      },
      educationalTools: {
        title: '📚 Outils Pédagogiques',
        description: 'Les enseignants peuvent utiliser la roue de décision pour la sélection aléatoire d\'étudiants, choisir des sujets de discussion, ou rendre les activités de classe plus engageantes et équitables.'
      }
    },
    whyChoose: {
      title: 'Pourquoi Choisir Notre Roue de Décision ?',
      randomResults: {
        title: '🔄 Résultats Véritablement Aléatoires',
        description: 'Notre algorithme assure une sélection complètement impartiale, donnant à chaque option une chance égale d\'être choisie. Aucune préférence cachée ou motif.'
      },
      mobileFriendly: {
        title: '📱 Compatible Mobile',
        description: 'Fonctionne parfaitement sur tous les appareils - smartphones, tablettes et ordinateurs de bureau. Le design responsive assure une expérience fluide quelle que soit la taille de l\'écran.'
      },
      noRegistration: {
        title: '🚀 Aucune Inscription Requise',
        description: 'Commencez à utiliser la roue immédiatement sans créer de comptes ou fournir d\'informations personnelles. Simple, rapide et anonyme.'
      },
      beautifulDesign: {
        title: '🎨 Design Magnifique',
        description: 'Profitez d\'une interface moderne et visuellement attrayante avec des animations fluides et des effets de glassmorphisme qui rendent la prise de décision plus agréable.'
      },
      fastPerformance: {
        title: '⚡ Performance Rapide',
        description: 'Optimisé pour la vitesse avec des temps de chargement minimaux et des animations de rotation fluides. Obtenez vos décisions prises rapidement sans délais frustrants.'
      },
      multipleLanguages: {
        title: '🌐 Plusieurs Langues',
        description: 'Disponible en plusieurs langues pour servir les utilisateurs du monde entier. Basculez entre l\'anglais, l\'espagnol, le français et plus pour une expérience localisée.'
      }
    },
    tips: {
      title: 'Conseils pour une Meilleure Prise de Décision',
      subtitle: 'Tirer le Meilleur Parti de Votre Expérience avec la Roue Spinner',
      beSpecific: {
        title: 'Soyez Spécifique :',
        description: 'Lors de l\'ajout d\'options, soyez aussi spécifique que possible. Au lieu de "nourriture italienne", essayez "Pizza de Mario" ou "Maison des Pâtes de Tony" pour des résultats plus clairs.'
      },
      considerWeight: {
        title: 'Considérez le Poids :',
        description: 'Si certaines options sont plus attrayantes que d\'autres, vous pouvez les ajouter plusieurs fois pour augmenter leurs chances d\'être sélectionnées.'
      },
      reviewOptions: {
        title: 'Révisez Vos Options :',
        description: 'Avant de faire tourner, lisez votre liste pour vous assurer que toutes les options sont encore pertinentes et attrayantes pour vous.'
      },
      trustProcess: {
        title: 'Faites Confiance au Processus :',
        description: 'Une fois que vous faites tourner, essayez de suivre le résultat. La roue aide à éliminer la paralysie décisionnelle en faisant le choix pour vous.'
      },
      useBrainstorming: {
        title: 'Utilisez pour le Brainstorming :',
        description: 'Ajoutez des options créatives ou inattendues pour découvrir de nouvelles possibilités auxquelles vous n\'auriez peut-être pas pensé.'
      }
    }
  }
};