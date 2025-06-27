/**
 * Spanish (Español) Translations
 * Complete translation file for the Decision Wheel Spinner application
 * Includes all UI texts, messages, and SEO content
 */

export default {
  // Application meta information for SEO
  meta: {
    title: 'Ruleta de Decisiones - Toma Decisiones Fácilmente',
    description: 'Toma decisiones fácilmente con nuestra hermosa ruleta de decisiones. Añade tus opciones y gira la rueda para obtener un resultado aleatorio.',
    keywords: 'ruleta, decisiones, azar, elección, opciones, giratorio, decidir',
    ogTitle: 'Ruleta de Decisiones - Toma Decisiones Fácilmente',
    ogDescription: 'Toma decisiones fácilmente con nuestra hermosa ruleta de decisiones. ¡Perfecto para cuando no puedes decidir!',
    twitterTitle: 'Ruleta de Decisiones - Toma Decisiones Fácilmente',
    twitterDescription: 'Toma decisiones fácilmente con nuestra hermosa ruleta de decisiones.'
  },

  // Main application header
  header: {
    title: 'Ruleta de Decisiones',
    subtitle: '¡Añade tus opciones y gira para decidir!',
    iconAlt: 'Icono de la Ruleta'
  },

  // Input section for adding options
  input: {
    sectionTitle: 'Añadir Opciones',
    placeholder: 'Introduce una opción...',
    addButton: 'Añadir',
    clearAllButton: 'Borrar Todo',
    maxOptionsReached: 'Has alcanzado el límite máximo de {{max}} opciones',
    emptyOptionError: 'Por favor, introduce una opción válida',
    duplicateOptionError: 'Esta opción ya existe',
    optionTooLong: 'La opción es demasiado larga (máximo {{max}} caracteres)',
    defaultOptions: [
      'Opción 1',
      'Opción 2',
      'Opción 3',
      'Opción 4'
    ],
    clearAllConfirmation: '¿Estás seguro de que quieres eliminar todas las {{count}} opciones?'
  },

  // Wheel section
  wheel: {
    spinButton: '¡Gira la Ruleta!',
    spinningButton: 'Girando...',
    noOptionsMessage: 'Añade al menos 2 opciones para girar la ruleta',
    centerAlt: 'Centro de la ruleta',
    pointerAlt: 'Puntero de la ruleta'
  },

  // Result modal
  result: {
    winnerTitle: '🎉 ¡Ganador! 🎉',
    winnerPrefix: 'El resultado es:',
    closeButton: 'Cerrar',
    spinAgainButton: 'Girar de Nuevo',
    celebrationMessages: [
      '¡Felicidades!',
      '¡Excelente elección!',
      '¡Esa es tu respuesta!',
      '¡Perfecto!',
      '¡Genial!'
    ]
  },

  // Language selector
  language: {
    selectorTitle: 'Idioma',
    autoDetected: 'Detectado automáticamente',
    changeLanguage: 'Cambiar idioma a {{language}}',
    currentLanguage: 'Idioma actual: {{language}}',
    searchPlaceholder: 'Buscar idiomas...',
    tierNames: {
      mostPopular: 'Idiomas Más Populares',
      regional: 'Idiomas Regionales',
      europeanAsian: 'Idiomas Europeos y Asiáticos',
      additional: 'Idiomas Adicionales'
    },
    languages: {
      en: 'Inglés',
      es: 'Español',
      fr: 'Francés',
      pt: 'Portugués',
      de: 'Alemán',
      zh: 'Chino',
      ja: 'Japonés',
      ru: 'Ruso'
    }
  },

  // Options management
  options: {
    deleteOption: 'Eliminar opción: {{option}}',
    editOption: 'Editar opción: {{option}}',
    optionNumber: 'Opción {{number}}',
    totalOptions: '{{count}} opciones en total',
    noOptions: 'No hay opciones añadidas',
    noOptionsYet: 'Aún no se han añadido opciones. ¡Añade algunas opciones para empezar!',
    noOptionsWheel: 'No se han Añadido Opciones',
    noOptionsWheelDesc: '¡Añade algunas opciones para empezar con tu ruleta de decisiones!',
    saveEdit: 'Guardar',
    cancelEdit: 'Cancelar',
    editButton: 'Editar opción',
    removeButton: 'Eliminar opción',
    saveEditButton: 'Guardar cambios',
    cancelEditButton: 'Cancelar edición'
  },

  // Wheel history
  history: {
    title: 'Historial de Resultados',
    button: 'Historial',
    noHistory: 'No hay historial de giros',
    lastResult: 'Último resultado: {{result}}',
    clearHistory: 'Borrar Historial',
    resultNumber: 'Resultado #{{number}}',
    timeAgo: 'hace {{time}}'
  },

  // Error messages
  errors: {
    loadingTranslations: 'Error cargando traducciones',
    wheelSpinError: 'Error al girar la ruleta',
    saveOptionsError: 'Error guardando las opciones',
    loadOptionsError: 'Error cargando las opciones',
    genericError: 'Ha ocurrido un error inesperado',
    networkError: 'Error de conexión. Verifica tu conexión a internet.',
    storageError: 'Error accediendo al almacenamiento local'
  },

  // Success messages
  success: {
    optionAdded: 'Opción añadida correctamente',
    optionDeleted: 'Opción eliminada correctamente',
    optionEdited: 'Actualizado: "{{oldText}}" → "{{newText}}"',
    optionsCleared: 'Todas las opciones han sido borradas',
    languageChanged: 'Idioma cambiado a {{language}}',
    historyCleared: 'Historial borrado correctamente',
    historyLoaded: '¡Configuración de la ruleta cargada!'
  },

  // Accessibility labels
  accessibility: {
    spinButton: 'Botón para girar la ruleta',
    addOptionButton: 'Botón para añadir nueva opción',
    deleteOptionButton: 'Botón para eliminar esta opción',
    optionInput: 'Campo de texto para introducir nueva opción',
    wheelCanvas: 'Lienzo de la ruleta interactiva',
    languageSelector: 'Selector de idioma',
    closeModal: 'Cerrar ventana de resultado',
    optionsList: 'Lista de opciones añadidas'
  },

  // Time formatting
  time: {
    now: 'ahora',
    secondsAgo: 'hace {{count}} segundo',
    secondsAgo_plural: 'hace {{count}} segundos',
    minutesAgo: 'hace {{count}} minuto',
    minutesAgo_plural: 'hace {{count}} minutos',
    hoursAgo: 'hace {{count}} hora',
    hoursAgo_plural: 'hace {{count}} horas',
    daysAgo: 'hace {{count}} día',
    daysAgo_plural: 'hace {{count}} días'
  },

  // Loading states
  loading: {
    loadingApp: 'Cargando aplicación...',
    loadingTranslations: 'Cargando traducciones...',
    spinning: 'Girando la ruleta...',
    savingOptions: 'Guardando opciones...',
    loadingOptions: 'Cargando opciones...'
  },

  // Tooltips and help text
  tooltips: {
    addOption: 'Añade una nueva opción a la ruleta',
    deleteOption: 'Elimina esta opción de la ruleta',
    clearAll: 'Elimina todas las opciones de la ruleta',
    spinWheel: 'Gira la ruleta para obtener un resultado aleatorio',
    changeLanguage: 'Cambia el idioma de la aplicación',
    wheelCenter: 'Centro de la ruleta'
  },

  // Keyboard shortcuts
  shortcuts: {
    addOption: 'Presiona Enter para añadir la opción',
    spinWheel: 'Presiona Espacio para girar la ruleta',
    closeModal: 'Presiona Escape para cerrar'
  },

  // Validation messages
  validation: {
    required: 'Este campo es obligatorio',
    minLength: 'Mínimo {{min}} caracteres',
    maxLength: 'Máximo {{max}} caracteres',
    invalidCharacters: 'Contiene caracteres no válidos',
    duplicateEntry: 'Esta entrada ya existe'
  }
};