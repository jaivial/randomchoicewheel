/**
 * Chinese Simplified (简体中文) Translations
 * Complete translation file for the Decision Wheel Spinner application
 * Includes all UI texts, messages, and SEO content
 */

export default {
  // Application meta information for SEO
  meta: {
    title: '决策转盘 - 轻松做决定',
    description: '用我们漂亮的决策转盘轻松做决定。添加您的选项并转动转盘以获得随机结果。',
    keywords: '转盘, 决策, 随机, 选择, 选项, 旋转, 决定',
    ogTitle: '决策转盘 - 轻松做决定',
    ogDescription: '用我们漂亮的决策转盘轻松做决定。当您无法决定时的完美工具！',
    twitterTitle: '决策转盘 - 轻松做决定',
    twitterDescription: '用我们漂亮的决策转盘轻松做决定。'
  },

  // Main application header
  header: {
    title: '决策转盘',
    subtitle: '添加您的选项并转动以决定！',
    iconAlt: '转盘图标'
  },

  // Input section for adding options
  input: {
    sectionTitle: '添加选项',
    placeholder: '输入选项...',
    addButton: '添加',
    clearAllButton: '清除全部',
    maxOptionsReached: '您已达到最大限制 {{max}} 个选项',
    emptyOptionError: '请输入有效选项',
    duplicateOptionError: '此选项已存在',
    optionTooLong: '选项太长（最多 {{max}} 个字符）',
    defaultOptions: [
      '选项 1',
      '选项 2',
      '选项 3',
      '选项 4'
    ],
    clearAllConfirmation: '您确定要删除所有 {{count}} 个选项吗？'
  },

  // Wheel section
  wheel: {
    spinButton: '转动转盘！',
    spinningButton: '转动中...',
    noOptionsMessage: '添加至少 2 个选项来转动转盘',
    centerAlt: '转盘中心',
    pointerAlt: '转盘指针'
  },

  // Result modal
  result: {
    winnerTitle: '🎉 获胜者！ 🎉',
    winnerPrefix: '结果是：',
    closeButton: '关闭',
    spinAgainButton: '再次转动',
    celebrationMessages: [
      '恭喜！',
      '绝佳选择！',
      '这就是您的答案！',
      '完美！',
      '太棒了！'
    ]
  },

  // Language selector
  language: {
    selectorTitle: '语言',
    autoDetected: '自动检测',
    changeLanguage: '更改语言为 {{language}}',
    currentLanguage: '当前语言：{{language}}',
    searchPlaceholder: '搜索语言...',
    mostPopularLanguages: '最受欢迎的语言',
    popularTag: '热门',
    tierNames: {
      mostPopular: '最受欢迎的语言',
      regional: '地区语言',
      europeanAsian: '欧洲和亚洲语言',
      additional: '附加语言'
    },
    languages: {
      en: '英语',
      es: '西班牙语',
      fr: '法语',
      pt: '葡萄牙语',
      de: '德语',
      zh: '中文',
      ja: '日语',
      ru: '俄语'
    }
  },

  // Options management
  options: {
    deleteOption: '删除选项：{{option}}',
    editOption: '编辑选项：{{option}}',
    optionNumber: '选项 {{number}}',
    totalOptions: '总共 {{count}} 个选项',
    noOptions: '未添加选项',
    noOptionsYet: '尚未添加任何选项。添加一些选项开始吧！',
    noOptionsWheel: '未添加选项',
    noOptionsWheelDesc: '添加一些选项来开始使用您的决策转盘！',
    saveEdit: '保存',
    cancelEdit: '取消',
    editButton: '编辑选项',
    removeButton: '删除选项',
    saveEditButton: '保存更改',
    cancelEditButton: '取消编辑'
  },

  // Wheel history
  history: {
    title: '结果历史',
    button: '历史',
    historyButton: '历史',
    noHistory: '无旋转历史',
    lastResult: '最后结果：{{result}}',
    clearHistory: '清除历史',
    resultNumber: '结果 #{{number}}',
    timeAgo: '{{time}}前'
  },

  // Error messages
  errors: {
    loadingTranslations: '加载翻译时出错',
    wheelSpinError: '转动转盘时出错',
    saveOptionsError: '保存选项时出错',
    loadOptionsError: '加载选项时出错',
    genericError: '发生意外错误',
    networkError: '网络错误。请检查您的互联网连接。',
    storageError: '访问本地存储时出错'
  },

  // Success messages
  success: {
    optionAdded: '选项添加成功',
    optionDeleted: '选项删除成功',
    optionEdited: '已更新："{{oldText}}" → "{{newText}}"',
    optionsCleared: '所有选项已清除',
    languageChanged: '语言已更改为 {{language}}',
    historyCleared: '历史清除成功',
    historyLoaded: '转盘配置已加载！'
  },

  // Accessibility labels
  accessibility: {
    spinButton: '转动转盘的按钮',
    addOptionButton: '添加新选项的按钮',
    deleteOptionButton: '删除此选项的按钮',
    optionInput: '输入新选项的文本字段',
    wheelCanvas: '互动转盘画布',
    languageSelector: '语言选择器',
    closeModal: '关闭结果窗口',
    optionsList: '已添加选项列表'
  },

  // Time formatting
  time: {
    now: '现在',
    secondsAgo: '{{count}} 秒',
    secondsAgo_plural: '{{count}} 秒',
    minutesAgo: '{{count}} 分钟',
    minutesAgo_plural: '{{count}} 分钟',
    hoursAgo: '{{count}} 小时',
    hoursAgo_plural: '{{count}} 小时',
    daysAgo: '{{count}} 天',
    daysAgo_plural: '{{count}} 天'
  },

  // Loading states
  loading: {
    loadingApp: '正在加载应用程序...',
    loadingTranslations: '正在加载翻译...',
    spinning: '转盘转动中...',
    savingOptions: '正在保存选项...',
    loadingOptions: '正在加载选项...'
  },

  // Tooltips and help text
  tooltips: {
    addOption: '向转盘添加新选项',
    deleteOption: '从转盘删除此选项',
    clearAll: '从转盘删除所有选项',
    spinWheel: '转动转盘获得随机结果',
    changeLanguage: '更改应用程序语言',
    wheelCenter: '转盘中心'
  },

  // Keyboard shortcuts
  shortcuts: {
    addOption: '按 Enter 键添加选项',
    spinWheel: '按空格键转动转盘',
    closeModal: '按 Esc 键关闭'
  },

  // Validation messages
  validation: {
    required: '此字段为必填项',
    minLength: '最少 {{min}} 个字符',
    maxLength: '最多 {{max}} 个字符',
    invalidCharacters: '包含无效字符',
    duplicateEntry: '此条目已存在'
  }
};