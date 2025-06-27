/**
 * Korean (한국어) Translations
 * Complete translation file for the Decision Wheel Spinner application
 * Includes all UI texts, messages, and SEO content for Korean market
 */

export default {
  // Application meta information for SEO
  meta: {
    title: '결정 휠 스피너 - 쉽게 결정하세요',
    description: '아름다운 결정 휠 스피너로 쉽게 결정을 내리세요. 옵션을 추가하고 휠을 돌려 무작위 결과를 얻으세요.',
    keywords: '휠, 스피너, 결정, 무작위, 선택, 회전, 결정하기',
    ogTitle: '결정 휠 스피너 - 쉽게 결정하세요',
    ogDescription: '아름다운 결정 휠 스피너로 쉽게 결정을 내리세요. 결정하기 어려울 때 완벽합니다!',
    twitterTitle: '결정 휠 스피너 - 쉽게 결정하세요',
    twitterDescription: '아름다운 결정 휠 스피너로 쉽게 결정을 내리세요.'
  },

  // Main application header
  header: {
    title: '결정 휠',
    subtitle: '옵션을 추가하고 회전하여 결정하세요!',
    iconAlt: '휠 아이콘'
  },

  // Input section for adding options
  input: {
    sectionTitle: '옵션 추가',
    placeholder: '옵션을 입력하세요...',
    addButton: '추가',
    clearAllButton: '모두 삭제',
    maxOptionsReached: '최대 {{max}}개 옵션 한계에 도달했습니다',
    emptyOptionError: '유효한 옵션을 입력해 주세요',
    duplicateOptionError: '이 옵션은 이미 존재합니다',
    optionTooLong: '옵션이 너무 깁니다 (최대 {{max}}자)',
    defaultOptions: [
      '옵션 1',
      '옵션 2',
      '옵션 3',
      '옵션 4'
    ],
    clearAllConfirmation: '정말로 모든 {{count}}개 옵션을 삭제하시겠습니까?'
  },

  // Wheel section
  wheel: {
    spinButton: '휠 돌리기!',
    spinningButton: '돌리는 중...',
    noOptionsMessage: '휠을 돌리려면 최소 2개의 옵션을 추가하세요',
    centerAlt: '휠 중심',
    pointerAlt: '휠 포인터'
  },

  // Result modal
  result: {
    winnerTitle: '🎉 당첨! 🎉',
    winnerPrefix: '결과는:',
    closeButton: '닫기',
    spinAgainButton: '다시 돌리기',
    celebrationMessages: [
      '축하합니다!',
      '훌륭한 선택입니다!',
      '이것이 당신의 답입니다!',
      '완벽해요!',
      '멋져요!'
    ]
  },

  // Language selector
  language: {
    selectorTitle: '언어',
    autoDetected: '자동 감지됨',
    changeLanguage: '언어를 {{language}}로 변경',
    currentLanguage: '현재 언어: {{language}}',
    languages: {
      en: '영어',
      zh: '중국어',
      hi: '힌디어',
      es: '스페인어',
      fr: '프랑스어',
      ar: '아랍어',
      bn: '벵골어',
      pt: '포르투갈어',
      ru: '러시아어',
      ja: '일본어',
      pa: '펀자브어',
      de: '독일어',
      jv: '자바어',
      te: '텔루구어',
      mr: '마라티어',
      tr: '터키어',
      vi: '베트남어',
      ko: '한국어',
      ta: '타밀어',
      ur: '우르두어',
      fa: '페르시아어',
      it: '이탈리아어',
      th: '태국어',
      gu: '구자라트어',
      pl: '폴란드어',
      kn: '칸나다어',
      uk: '우크라이나어',
      ml: '말라얄람어',
      or: '오디아어',
      my: '버마어',
      nl: '네덜란드어',
      ro: '루마니아어',
      sw: '스와힐리어',
      cs: '체코어',
      hu: '헝가리어',
      el: '그리스어',
      sv: '스웨덴어',
      he: '히브리어',
      da: '덴마크어',
      no: '노르웨이어',
      fi: '핀란드어'
    }
  },

  // Options management
  options: {
    deleteOption: '옵션 삭제: {{option}}',
    editOption: '옵션 편집: {{option}}',
    optionNumber: '옵션 {{number}}',
    totalOptions: '총 {{count}}개 옵션',
    noOptions: '추가된 옵션 없음',
    noOptionsYet: '아직 추가된 옵션이 없습니다. 시작하려면 몇 가지 옵션을 추가하세요!',
    noOptionsWheel: '추가된 옵션 없음',
    noOptionsWheelDesc: '결정 휠을 시작하려면 몇 가지 옵션을 추가하세요!',
    saveEdit: '저장',
    cancelEdit: '취소',
    editButton: '옵션 편집',
    removeButton: '옵션 제거',
    saveEditButton: '변경사항 저장',
    cancelEditButton: '편집 취소'
  },

  // Wheel history
  history: {
    title: '결과 기록',
    button: '기록',
    noHistory: '회전 기록 없음',
    lastResult: '마지막 결과: {{result}}',
    clearHistory: '기록 삭제',
    resultNumber: '결과 #{{number}}',
    timeAgo: '{{time}} 전'
  },

  // Error messages
  errors: {
    loadingTranslations: '번역 로딩 오류',
    wheelSpinError: '휠 회전 오류',
    saveOptionsError: '옵션 저장 오류',
    loadOptionsError: '옵션 로딩 오류',
    genericError: '예상치 못한 오류가 발생했습니다',
    networkError: '네트워크 오류입니다. 인터넷 연결을 확인해 주세요.',
    storageError: '로컬 저장소 접근 오류'
  },

  // Success messages
  success: {
    optionAdded: '옵션이 성공적으로 추가되었습니다',
    optionDeleted: '옵션이 성공적으로 삭제되었습니다',
    optionEdited: '업데이트됨: "{{oldText}}" → "{{newText}}"',
    optionsCleared: '모든 옵션이 삭제되었습니다',
    languageChanged: '언어가 {{language}}로 변경되었습니다',
    historyCleared: '기록이 성공적으로 삭제되었습니다',
    historyLoaded: '휠 설정이 로드되었습니다!'
  },

  // Accessibility labels
  accessibility: {
    spinButton: '휠을 돌리는 버튼',
    addOptionButton: '새 옵션을 추가하는 버튼',
    deleteOptionButton: '이 옵션을 삭제하는 버튼',
    optionInput: '새 옵션을 입력하는 텍스트 필드',
    wheelCanvas: '상호작용 휠 캔버스',
    languageSelector: '언어 선택기',
    closeModal: '결과 창 닫기',
    optionsList: '추가된 옵션 목록'
  },

  // Time formatting
  time: {
    now: '지금',
    secondsAgo: '{{count}}초 전',
    secondsAgo_plural: '{{count}}초 전',
    minutesAgo: '{{count}}분 전',
    minutesAgo_plural: '{{count}}분 전',
    hoursAgo: '{{count}}시간 전',
    hoursAgo_plural: '{{count}}시간 전',
    daysAgo: '{{count}}일 전',
    daysAgo_plural: '{{count}}일 전'
  },

  // Loading states
  loading: {
    loadingApp: '애플리케이션 로딩 중...',
    loadingTranslations: '번역 로딩 중...',
    spinning: '휠 회전 중...',
    savingOptions: '옵션 저장 중...',
    loadingOptions: '옵션 로딩 중...'
  },

  // Tooltips and help text
  tooltips: {
    addOption: '휠에 새 옵션 추가',
    deleteOption: '휠에서 이 옵션 제거',
    clearAll: '휠에서 모든 옵션 제거',
    spinWheel: '무작위 결과를 얻기 위해 휠 돌리기',
    changeLanguage: '애플리케이션 언어 변경',
    wheelCenter: '휠 중심'
  },

  // Keyboard shortcuts
  shortcuts: {
    addOption: 'Enter를 눌러 옵션 추가',
    spinWheel: 'Space를 눌러 휠 돌리기',
    closeModal: 'Escape를 눌러 닫기'
  },

  // Validation messages
  validation: {
    required: '이 필드는 필수입니다',
    minLength: '최소 {{min}}자',
    maxLength: '최대 {{max}}자',
    invalidCharacters: '유효하지 않은 문자가 포함되어 있습니다',
    duplicateEntry: '이 항목은 이미 존재합니다'
  }
};