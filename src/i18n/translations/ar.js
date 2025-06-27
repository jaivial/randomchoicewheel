/**
 * Arabic (العربية) Translations
 * Complete translation file for the Decision Wheel Spinner application
 * Includes all UI texts, messages, and SEO content for Arabic markets
 * RTL (Right-to-Left) support included
 */

export default {
  // Application meta information for SEO
  meta: {
    title: 'عجلة القرار - اتخذ قراراتك بسهولة',
    description: 'اتخذ قراراتك بسهولة مع عجلة القرار الجميلة. أضف خياراتك وأدر العجلة للحصول على نتيجة عشوائية.',
    keywords: 'عجلة، دوران، قرار، عشوائي، خيارات، تدوير، اختيار',
    ogTitle: 'عجلة القرار - اتخذ قراراتك بسهولة',
    ogDescription: 'اتخذ قراراتك بسهولة مع عجلة القرار الجميلة. مثالية عندما لا تستطيع أن تقرر!',
    twitterTitle: 'عجلة القرار - اتخذ قراراتك بسهولة',
    twitterDescription: 'اتخذ قراراتك بسهولة مع عجلة القرار الجميلة.'
  },

  // Main application header
  header: {
    title: 'عجلة القرار',
    subtitle: 'أضف خياراتك وأدر العجلة لتقرر!',
    iconAlt: 'رمز العجلة'
  },

  // Input section for adding options
  input: {
    sectionTitle: 'إضافة خيارات',
    placeholder: 'أدخل خياراً...',
    addButton: 'إضافة',
    clearAllButton: 'مسح الكل',
    maxOptionsReached: 'لقد وصلت إلى الحد الأقصى من {{max}} خيارات',
    emptyOptionError: 'يرجى إدخال خيار صحيح',
    duplicateOptionError: 'هذا الخيار موجود بالفعل',
    optionTooLong: 'الخيار طويل جداً (الحد الأقصى {{max}} حرف)',
    defaultOptions: [
      'الخيار 1',
      'الخيار 2',
      'الخيار 3',
      'الخيار 4'
    ],
    clearAllConfirmation: 'هل أنت متأكد من أنك تريد إزالة جميع الخيارات الـ {{count}}؟'
  },

  // Wheel section
  wheel: {
    spinButton: 'أدر العجلة!',
    spinningButton: 'تدور...',
    noOptionsMessage: 'أضف خيارين على الأقل لتدوير العجلة',
    centerAlt: 'مركز العجلة',
    pointerAlt: 'مؤشر العجلة'
  },

  // Result modal
  result: {
    winnerTitle: '🎉 الفائز! 🎉',
    winnerPrefix: 'النتيجة هي:',
    closeButton: 'إغلاق',
    spinAgainButton: 'دوران مرة أخرى',
    celebrationMessages: [
      'تهانينا!',
      'اختيار ممتاز!',
      'هذه إجابتك!',
      'مثالي!',
      'رائع!'
    ]
  },

  // Language selector
  language: {
    selectorTitle: 'اللغة',
    autoDetected: 'تم اكتشافها تلقائياً',
    changeLanguage: 'تغيير اللغة إلى {{language}}',
    currentLanguage: 'اللغة الحالية: {{language}}',
    languages: {
      en: 'الإنجليزية',
      zh: 'الصينية',
      hi: 'الهندية',
      es: 'الإسبانية',
      fr: 'الفرنسية',
      ar: 'العربية',
      bn: 'البنغالية',
      pt: 'البرتغالية',
      ru: 'الروسية',
      ja: 'اليابانية',
      pa: 'البنجابية',
      de: 'الألمانية',
      jv: 'الجاوية',
      te: 'التيلوغو',
      mr: 'الماراثي',
      tr: 'التركية',
      vi: 'الفيتنامية',
      ko: 'الكورية',
      ta: 'التاميلية',
      ur: 'الأردية',
      fa: 'الفارسية',
      it: 'الإيطالية',
      th: 'التايلاندية',
      gu: 'الغوجاراتية',
      pl: 'البولندية',
      kn: 'الكانادا',
      uk: 'الأوكرانية',
      ml: 'المالايالام',
      or: 'الأوديا',
      my: 'البورمية',
      nl: 'الهولندية',
      ro: 'الرومانية',
      sw: 'السواحيلية',
      cs: 'التشيكية',
      hu: 'المجرية',
      el: 'اليونانية',
      sv: 'السويدية',
      he: 'العبرية',
      da: 'الدنماركية',
      no: 'النرويجية',
      fi: 'الفنلندية'
    }
  },

  // Options management
  options: {
    deleteOption: 'حذف الخيار: {{option}}',
    editOption: 'تعديل الخيار: {{option}}',
    optionNumber: 'الخيار {{number}}',
    totalOptions: '{{count}} خيارات إجمالي',
    noOptions: 'لم تتم إضافة خيارات',
    noOptionsYet: 'لم تتم إضافة خيارات بعد. أضف بعض الخيارات للبدء!',
    noOptionsWheel: 'لم تتم إضافة خيارات',
    noOptionsWheelDesc: 'أضف بعض الخيارات للبدء مع عجلة القرار الخاصة بك!',
    saveEdit: 'حفظ',
    cancelEdit: 'إلغاء',
    editButton: 'تعديل الخيار',
    removeButton: 'إزالة الخيار',
    saveEditButton: 'حفظ التغييرات',
    cancelEditButton: 'إلغاء التعديل'
  },

  // Wheel history
  history: {
    title: 'تاريخ النتائج',
    button: 'التاريخ',
    noHistory: 'لا يوجد تاريخ دوران',
    lastResult: 'آخر نتيجة: {{result}}',
    clearHistory: 'مسح التاريخ',
    resultNumber: 'النتيجة #{{number}}',
    timeAgo: 'منذ {{time}}'
  },

  // Error messages
  errors: {
    loadingTranslations: 'خطأ في تحميل الترجمات',
    wheelSpinError: 'خطأ في تدوير العجلة',
    saveOptionsError: 'خطأ في حفظ الخيارات',
    loadOptionsError: 'خطأ في تحميل الخيارات',
    genericError: 'حدث خطأ غير متوقع',
    networkError: 'خطأ في الشبكة. يرجى التحقق من اتصال الإنترنت الخاص بك.',
    storageError: 'خطأ في الوصول إلى التخزين المحلي'
  },

  // Success messages
  success: {
    optionAdded: 'تمت إضافة الخيار بنجاح',
    optionDeleted: 'تم حذف الخيار بنجاح',
    optionEdited: 'تم التحديث: "{{oldText}}" ← "{{newText}}"',
    optionsCleared: 'تم مسح جميع الخيارات',
    languageChanged: 'تم تغيير اللغة إلى {{language}}',
    historyCleared: 'تم مسح التاريخ بنجاح',
    historyLoaded: 'تم تحميل إعداد العجلة!'
  },

  // Accessibility labels
  accessibility: {
    spinButton: 'زر لتدوير العجلة',
    addOptionButton: 'زر لإضافة خيار جديد',
    deleteOptionButton: 'زر لحذف هذا الخيار',
    optionInput: 'حقل نص لإدخال خيار جديد',
    wheelCanvas: 'لوحة العجلة التفاعلية',
    languageSelector: 'منتقي اللغة',
    closeModal: 'إغلاق نافذة النتيجة',
    optionsList: 'قائمة الخيارات المضافة'
  },

  // Time formatting
  time: {
    now: 'الآن',
    secondsAgo: 'منذ {{count}} ثانية',
    secondsAgo_plural: 'منذ {{count}} ثواني',
    minutesAgo: 'منذ {{count}} دقيقة',
    minutesAgo_plural: 'منذ {{count}} دقائق',
    hoursAgo: 'منذ {{count}} ساعة',
    hoursAgo_plural: 'منذ {{count}} ساعات',
    daysAgo: 'منذ {{count}} يوم',
    daysAgo_plural: 'منذ {{count}} أيام'
  },

  // Loading states
  loading: {
    loadingApp: 'تحميل التطبيق...',
    loadingTranslations: 'تحميل الترجمات...',
    spinning: 'تدوير العجلة...',
    savingOptions: 'حفظ الخيارات...',
    loadingOptions: 'تحميل الخيارات...'
  },

  // Tooltips and help text
  tooltips: {
    addOption: 'إضافة خيار جديد إلى العجلة',
    deleteOption: 'إزالة هذا الخيار من العجلة',
    clearAll: 'إزالة جميع الخيارات من العجلة',
    spinWheel: 'دوران العجلة للحصول على نتيجة عشوائية',
    changeLanguage: 'تغيير لغة التطبيق',
    wheelCenter: 'مركز العجلة'
  },

  // Keyboard shortcuts
  shortcuts: {
    addOption: 'اضغط Enter لإضافة الخيار',
    spinWheel: 'اضغط مسافة لتدوير العجلة',
    closeModal: 'اضغط Escape للإغلاق'
  },

  // Validation messages
  validation: {
    required: 'هذا الحقل مطلوب',
    minLength: 'الحد الأدنى {{min}} أحرف',
    maxLength: 'الحد الأقصى {{max}} حرف',
    invalidCharacters: 'يحتوي على أحرف غير صحيحة',
    duplicateEntry: 'هذا الإدخال موجود بالفعل'
  }
};