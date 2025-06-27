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
    languages: {
      en: 'Anglais',
      es: 'Espagnol',
      fr: 'Français'
    }
  },

  // Options management
  options: {
    deleteOption: 'Supprimer l\'option : {{option}}',
    editOption: 'Modifier l\'option : {{option}}',
    optionNumber: 'Option {{number}}',
    totalOptions: '{{count}} options au total',
    noOptions: 'Aucune option ajoutée',
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
  }
};