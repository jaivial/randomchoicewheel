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
    mostPopularLanguages: 'IDIOMAS MÁS POPULARES',
    popularTag: 'POPULAR',
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
    historyButton: 'Historial',
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
  },

  // Social proof section
  socialProof: {
    happyUsers: 'Usuarios Felices',
    decisionsMade: 'Decisiones Tomadas',
    userRating: 'Calificación',
    trustedText: 'Confiado por miles de usuarios en todo el mundo'
  },

  // Recent activity messages
  recentActivity: {
    messages: [
      'Alguien en Nueva York acaba de girar la rueda',
      'Un usuario de Londres compartió su resultado',
      'Alguien de Tokio tomó una decisión',
      'Un usuario de Sídney usó la rueda',
      'Alguien de Berlín obtuvo su respuesta'
    ]
  },

  // AdSense Compliance Content
  content: {
    howToUse: {
      title: 'Cómo Usar la Ruleta de Decisiones',
      step1: {
        title: 'Paso 1: Agregar Tus Opciones',
        description: 'Comienza agregando todas las opciones que quieras considerar. Escribe cada opción en el campo de entrada y haz clic en "Agregar" para incluirla en tu rueda de decisiones. Puedes agregar tantas opciones como necesites: nuestra rueda se ajustará automáticamente para acomodar todas tus opciones.'
      },
      step2: {
        title: 'Paso 2: Girar la Rueda',
        description: 'Una vez que hayas agregado todas tus opciones, haz clic en el botón "¡Girar la Rueda!" para iniciar el proceso de selección aleatoria. La rueda girará durante unos segundos antes de detenerse en una de tus opciones, proporcionándote una decisión imparcial.'
      },
      step3: {
        title: 'Paso 3: Obtener Tu Resultado',
        description: 'Después de que la rueda se detenga, verás la opción seleccionada resaltada. Si no estás satisfecho con el resultado, siempre puedes girar de nuevo o modificar tu lista de opciones para reflejar mejor tus preferencias.'
      }
    },
    popularUses: {
      title: 'Usos Populares de Nuestra Rueda de Decisiones',
      foodDecisions: {
        title: '🍕 Decisiones de Comida',
        description: '¿No puedes decidir qué cenar? Agrega tus restaurantes favoritos, cocinas o opciones de comida a la rueda y deja que elija por ti. Perfecto para parejas o familias que no se ponen de acuerdo en dónde cenar.'
      },
      entertainmentChoices: {
        title: '🎬 Opciones de Entretenimiento',
        description: 'Usa nuestra ruleta para elegir películas que ver, juegos que jugar o actividades que hacer. Agrega tus opciones de entretenimiento y deja que la rueda decida tus planes para la noche.'
      },
      travelPlanning: {
        title: '✈️ Planificación de Viajes',
        description: '¿Planificando tus próximas vacaciones pero no puedes decidir el destino? Lista tus posibles lugares de viaje y gira la rueda para seleccionar aleatoriamente tu próxima aventura.'
      },
      dailyActivities: {
        title: '🎯 Actividades Diarias',
        description: 'Haz que las decisiones cotidianas sean más divertidas usando la rueda para rutinas de ejercicio, actividades de fin de semana o incluso elegir qué tarea abordar primero.'
      },
      partyGames: {
        title: '🎪 Juegos de Fiesta',
        description: 'Agrega emoción a fiestas y reuniones usando la rueda para selección de juegos, desafíos de verdad o atrevimiento, o asignar tareas divertidas a los participantes.'
      },
      educationalTools: {
        title: '📚 Herramientas Educativas',
        description: 'Los maestros pueden usar la rueda de decisiones para selección aleatoria de estudiantes, elegir temas de discusión, o hacer que las actividades del aula sean más atractivas y justas.'
      }
    },
    whyChoose: {
      title: '¿Por Qué Elegir Nuestra Ruleta de Decisiones?',
      randomResults: {
        title: '🔄 Resultados Verdaderamente Aleatorios',
        description: 'Nuestro algoritmo garantiza una selección completamente imparcial, dando a cada opción una oportunidad igual de ser elegida. Sin preferencias ocultas o patrones.'
      },
      mobileFriendly: {
        title: '📱 Compatible con Móviles',
        description: 'Funciona perfectamente en todos los dispositivos: smartphones, tablets y computadoras de escritorio. El diseño responsivo garantiza una experiencia fluida independientemente del tamaño de pantalla.'
      },
      noRegistration: {
        title: '🚀 Sin Registro Requerido',
        description: 'Comienza a usar la rueda inmediatamente sin crear cuentas o proporcionar información personal. Simple, rápido y anónimo.'
      },
      beautifulDesign: {
        title: '🎨 Diseño Hermoso',
        description: 'Disfruta de una interfaz moderna y visualmente atractiva con animaciones suaves y efectos de glassmorphism que hacen que tomar decisiones sea más agradable.'
      },
      fastPerformance: {
        title: '⚡ Rendimiento Rápido',
        description: 'Optimizado para velocidad con tiempos de carga mínimos y animaciones de giro suaves. Toma tus decisiones rápidamente sin retrasos frustrantes.'
      },
      multipleLanguages: {
        title: '🌐 Múltiples Idiomas',
        description: 'Disponible en múltiples idiomas para servir a usuarios de todo el mundo. Cambia entre inglés, español, francés y más para una experiencia localizada.'
      }
    },
    tips: {
      title: 'Consejos para Mejores Decisiones',
      subtitle: 'Aprovechando al Máximo Tu Experiencia con la Ruleta',
      beSpecific: {
        title: 'Sé Específico:',
        description: 'Al agregar opciones, sé lo más específico posible. En lugar de "comida italiana", prueba "Pizza de Mario" o "Casa de Pasta de Tony" para resultados más claros.'
      },
      considerWeight: {
        title: 'Considera el Peso:',
        description: 'Si algunas opciones son más atractivas que otras, puedes agregarlas múltiples veces para aumentar sus posibilidades de ser seleccionadas.'
      },
      reviewOptions: {
        title: 'Revisa Tus Opciones:',
        description: 'Antes de girar, lee tu lista para asegurarte de que todas las opciones sigan siendo relevantes y atractivas para ti.'
      },
      trustProcess: {
        title: 'Confía en el Proceso:',
        description: 'Una vez que gires, trata de seguir con el resultado. La rueda ayuda a eliminar la parálisis de decisión tomando la elección por ti.'
      },
      useBrainstorming: {
        title: 'Usa para Lluvia de Ideas:',
        description: 'Agrega opciones creativas o inesperadas para descubrir nuevas posibilidades que tal vez no hayas considerado.'
      }
    }
  }
};