/**
 * Portuguese (Português Brasileiro) Translations
 * Complete translation file for the Decision Wheel Spinner application
 * Includes all UI texts, messages, and SEO content
 */

export default {
  // Application meta information for SEO
  meta: {
    title: 'Roleta de Decisão - Tome Decisões Facilmente',
    description: 'Tome decisões facilmente com nossa bela roleta de decisão. Adicione suas opções e gire a roleta para obter um resultado aleatório.',
    keywords: 'roleta, decisão, aleatório, escolha, opções, girar, decidir',
    ogTitle: 'Roleta de Decisão - Tome Decisões Facilmente',
    ogDescription: 'Tome decisões facilmente com nossa bela roleta de decisão. Perfeito para quando você não consegue decidir!',
    twitterTitle: 'Roleta de Decisão - Tome Decisões Facilmente',
    twitterDescription: 'Tome decisões facilmente com nossa bela roleta de decisão.'
  },

  // Main application header
  header: {
    title: 'Roleta de Decisão',
    subtitle: 'Adicione suas opções e gire para decidir!',
    iconAlt: 'Ícone da Roleta'
  },

  // Input section for adding options
  input: {
    sectionTitle: 'Adicionar Opções',
    placeholder: 'Digite uma opção...',
    addButton: 'Adicionar',
    clearAllButton: 'Limpar Tudo',
    maxOptionsReached: 'Você atingiu o limite máximo de {{max}} opções',
    emptyOptionError: 'Por favor, digite uma opção válida',
    duplicateOptionError: 'Esta opção já existe',
    optionTooLong: 'A opção é muito longa (máximo {{max}} caracteres)',
    defaultOptions: [
      'Opção 1',
      'Opção 2',
      'Opção 3',
      'Opção 4'
    ],
    clearAllConfirmation: 'Tem certeza de que deseja remover todas as {{count}} opções?'
  },

  // Wheel section
  wheel: {
    spinButton: 'Girar a Roleta!',
    spinningButton: 'Girando...',
    noOptionsMessage: 'Adicione pelo menos 2 opções para girar a roleta',
    centerAlt: 'Centro da roleta',
    pointerAlt: 'Ponteiro da roleta'
  },

  // Result modal
  result: {
    winnerTitle: '🎉 Vencedor! 🎉',
    winnerPrefix: 'O resultado é:',
    closeButton: 'Fechar',
    spinAgainButton: 'Girar Novamente',
    celebrationMessages: [
      'Parabéns!',
      'Excelente escolha!',
      'Essa é sua resposta!',
      'Perfeito!',
      'Incrível!'
    ]
  },

  // Language selector
  language: {
    selectorTitle: 'Idioma',
    autoDetected: 'Detectado automaticamente',
    changeLanguage: 'Mudar idioma para {{language}}',
    currentLanguage: 'Idioma atual: {{language}}',
    searchPlaceholder: 'Pesquisar idiomas...',
    mostPopularLanguages: 'IDIOMAS MAIS POPULARES',
    popularTag: 'POPULAR',
    tierNames: {
      mostPopular: 'Idiomas Mais Populares',
      regional: 'Idiomas Regionais',
      europeanAsian: 'Idiomas Europeus e Asiáticos',
      additional: 'Idiomas Adicionais'
    },
    languages: {
      en: 'Inglês',
      es: 'Espanhol',
      fr: 'Francês',
      pt: 'Português',
      de: 'Alemão',
      zh: 'Chinês',
      ja: 'Japonês',
      ru: 'Russo'
    }
  },

  // Options management
  options: {
    deleteOption: 'Excluir opção: {{option}}',
    editOption: 'Editar opção: {{option}}',
    optionNumber: 'Opção {{number}}',
    totalOptions: '{{count}} opções no total',
    noOptions: 'Nenhuma opção adicionada',
    noOptionsYet: 'Nenhuma opção adicionada ainda. Adicione algumas opções para começar!',
    noOptionsWheel: 'Nenhuma Opção Adicionada',
    noOptionsWheelDesc: 'Adicione algumas opções para começar com sua roleta de decisão!',
    saveEdit: 'Salvar',
    cancelEdit: 'Cancelar',
    editButton: 'Editar opção',
    removeButton: 'Remover opção',
    saveEditButton: 'Salvar alterações',
    cancelEditButton: 'Cancelar edição'
  },

  // Wheel history
  history: {
    title: 'Histórico de Resultados',
    button: 'Histórico',
    historyButton: 'Histórico',
    noHistory: 'Nenhum histórico de giros',
    lastResult: 'Último resultado: {{result}}',
    clearHistory: 'Limpar Histórico',
    resultNumber: 'Resultado #{{number}}',
    timeAgo: '{{time}} atrás'
  },

  // Error messages
  errors: {
    loadingTranslations: 'Erro ao carregar traduções',
    wheelSpinError: 'Erro ao girar a roleta',
    saveOptionsError: 'Erro ao salvar as opções',
    loadOptionsError: 'Erro ao carregar as opções',
    genericError: 'Ocorreu um erro inesperado',
    networkError: 'Erro de rede. Verifique sua conexão com a internet.',
    storageError: 'Erro ao acessar o armazenamento local'
  },

  // Success messages
  success: {
    optionAdded: 'Opção adicionada com sucesso',
    optionDeleted: 'Opção removida com sucesso',
    optionEdited: 'Atualizado: "{{oldText}}" → "{{newText}}"',
    optionsCleared: 'Todas as opções foram removidas',
    languageChanged: 'Idioma alterado para {{language}}',
    historyCleared: 'Histórico limpo com sucesso',
    historyLoaded: 'Configuração da roleta carregada!'
  },

  // Accessibility labels
  accessibility: {
    spinButton: 'Botão para girar a roleta',
    addOptionButton: 'Botão para adicionar nova opção',
    deleteOptionButton: 'Botão para excluir esta opção',
    optionInput: 'Campo de texto para inserir uma nova opção',
    wheelCanvas: 'Tela da roleta interativa',
    languageSelector: 'Seletor de idioma',
    closeModal: 'Fechar janela de resultado',
    optionsList: 'Lista de opções adicionadas'
  },

  // Time formatting
  time: {
    now: 'agora',
    secondsAgo: '{{count}} segundo',
    secondsAgo_plural: '{{count}} segundos',
    minutesAgo: '{{count}} minuto',
    minutesAgo_plural: '{{count}} minutos',
    hoursAgo: '{{count}} hora',
    hoursAgo_plural: '{{count}} horas',
    daysAgo: '{{count}} dia',
    daysAgo_plural: '{{count}} dias'
  },

  // Loading states
  loading: {
    loadingApp: 'Carregando aplicativo...',
    loadingTranslations: 'Carregando traduções...',
    spinning: 'Girando a roleta...',
    savingOptions: 'Salvando opções...',
    loadingOptions: 'Carregando opções...'
  },

  // Tooltips and help text
  tooltips: {
    addOption: 'Adicionar uma nova opção à roleta',
    deleteOption: 'Remover esta opção da roleta',
    clearAll: 'Remover todas as opções da roleta',
    spinWheel: 'Girar a roleta para obter um resultado aleatório',
    changeLanguage: 'Alterar o idioma do aplicativo',
    wheelCenter: 'Centro da roleta'
  },

  // Keyboard shortcuts
  shortcuts: {
    addOption: 'Pressione Enter para adicionar a opção',
    spinWheel: 'Pressione Espaço para girar a roleta',
    closeModal: 'Pressione Esc para fechar'
  },

  // Validation messages
  validation: {
    required: 'Este campo é obrigatório',
    minLength: 'Mínimo {{min}} caracteres',
    maxLength: 'Máximo {{max}} caracteres',
    invalidCharacters: 'Contém caracteres inválidos',
    duplicateEntry: 'Esta entrada já existe'
  }
};