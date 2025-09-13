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
  },

  // Social proof section
  socialProof: {
    happyUsers: 'Usuários Felizes',
    decisionsMade: 'Decisões Tomadas',
    userRating: 'Avaliação',
    trustedText: 'Confiado por milhares de usuários ao redor do mundo'
  },

  // Recent activity messages
  recentActivity: {
    messages: [
      'Alguém em Nova York acabou de girar a roleta',
      'Um usuário de Londres compartilhou seu resultado',
      'Alguém de Tóquio tomou uma decisão',
      'Um usuário de Sydney usou a roleta',
      'Alguém de Berlim obteve sua resposta'
    ]
  },

  // AdSense Compliance Content
  content: {
    howToUse: {
      title: 'Como Usar a Roleta de Decisão',
      step1: {
        title: 'Passo 1: Adicione Suas Opções',
        description: 'Comece adicionando todas as escolhas que você quer considerar. Digite cada opção no campo de entrada e clique em "Adicionar" para incluí-la na sua roleta de decisão. Você pode adicionar quantas opções precisar - nossa roleta se ajustará automaticamente para acomodar todas as suas escolhas.'
      },
      step2: {
        title: 'Passo 2: Gire a Roleta',
        description: 'Depois de adicionar todas as suas opções, clique no botão "Girar a Roleta!" para iniciar o processo de seleção aleatória. A roleta girará por alguns segundos antes de parar em uma de suas opções, fornecendo uma decisão imparcial.'
      },
      step3: {
        title: 'Passo 3: Obtenha Seu Resultado',
        description: 'Após a roleta parar de girar, você verá a opção selecionada destacada. Se não estiver satisfeito com o resultado, você sempre pode girar novamente ou modificar sua lista de opções para refletir melhor suas preferências.'
      }
    },
    popularUses: {
      title: 'Usos Populares da Nossa Roleta de Decisão',
      foodDecisions: {
        title: '🍕 Decisões de Comida',
        description: 'Não consegue decidir o que comer no jantar? Adicione seus restaurantes favoritos, culinárias ou opções de refeição à roleta e deixe ela escolher por você. Perfeito para casais ou famílias que não conseguem concordar onde jantar.'
      },
      entertainmentChoices: {
        title: '🎬 Escolhas de Entretenimento',
        description: 'Use nossa roleta para escolher filmes para assistir, jogos para jogar ou atividades para fazer. Adicione suas opções de entretenimento e deixe a roleta decidir seus planos da noite.'
      },
      travelPlanning: {
        title: '✈️ Planejamento de Viagem',
        description: 'Planejando suas próximas férias mas não consegue decidir o destino? Liste seus potenciais locais de viagem e gire a roleta para selecionar aleatoriamente sua próxima aventura.'
      },
      dailyActivities: {
        title: '🎯 Atividades Diárias',
        description: 'Torne as decisões do dia a dia mais divertidas usando a roleta para rotinas de exercício, atividades de fim de semana, ou até mesmo para escolher qual tarefa abordar primeiro.'
      },
      partyGames: {
        title: '🎪 Jogos de Festa',
        description: 'Adicione emoção às festas e reuniões usando a roleta para seleção de jogos, desafios de verdade ou consequência, ou distribuindo tarefas divertidas aos participantes.'
      },
      educationalTools: {
        title: '📚 Ferramentas Educacionais',
        description: 'Professores podem usar a roleta de decisão para seleção aleatória de alunos, escolher tópicos de discussão, ou tornar as atividades em sala de aula mais envolventes e justas.'
      }
    },
    whyChoose: {
      title: 'Por Que Escolher Nossa Roleta de Decisão?',
      randomResults: {
        title: '🔄 Resultados Verdadeiramente Aleatórios',
        description: 'Nosso algoritmo garante seleção completamente imparcial, dando a cada opção uma chance igual de ser escolhida. Sem preferências ocultas ou padrões.'
      },
      mobileFriendly: {
        title: '📱 Compatível com Celular',
        description: 'Funciona perfeitamente em todos os dispositivos - smartphones, tablets e computadores desktop. O design responsivo garante uma experiência suave independentemente do tamanho da tela.'
      },
      noRegistration: {
        title: '🚀 Sem Necessidade de Cadastro',
        description: 'Comece a usar a roleta imediatamente sem criar contas ou fornecer informações pessoais. Simples, rápido e anônimo.'
      },
      beautifulDesign: {
        title: '🎨 Design Bonito',
        description: 'Aproveite uma interface moderna e visualmente atraente com animações suaves e efeitos de glassmorfismo que tornam a tomada de decisão mais prazerosa.'
      },
      fastPerformance: {
        title: '⚡ Performance Rápida',
        description: 'Otimizado para velocidade com tempos mínimos de carregamento e animações de giro suaves. Tenha suas decisões tomadas rapidamente sem atrasos frustrantes.'
      },
      multipleLanguages: {
        title: '🌐 Múltiplos Idiomas',
        description: 'Disponível em vários idiomas para atender usuários do mundo todo. Alterne entre inglês, espanhol, francês e mais para uma experiência localizada.'
      }
    },
    tips: {
      title: 'Dicas para Melhor Tomada de Decisão',
      subtitle: 'Aproveitando ao Máximo Sua Experiência com a Roleta',
      beSpecific: {
        title: 'Seja Específico:',
        description: 'Ao adicionar opções, seja o mais específico possível. Em vez de "comida italiana", tente "Pizza do Mario" ou "Casa de Massas do Tony" para resultados mais claros.'
      },
      considerWeight: {
        title: 'Considere o Peso:',
        description: 'Se algumas opções são mais atraentes que outras, você pode adicioná-las várias vezes para aumentar suas chances de serem selecionadas.'
      },
      reviewOptions: {
        title: 'Revise Suas Opções:',
        description: 'Antes de girar, leia sua lista para ter certeza de que todas as opções ainda são relevantes e atraentes para você.'
      },
      trustProcess: {
        title: 'Confie no Processo:',
        description: 'Uma vez que você gire, tente aceitar o resultado. A roleta ajuda a remover a paralisia de decisão fazendo a escolha por você.'
      },
      useBrainstorming: {
        title: 'Use para Brainstorming:',
        description: 'Adicione opções criativas ou inesperadas para descobrir novas possibilidades que você pode não ter considerado.'
      }
    }
  }
};