import {
  CompassIcon,
  GraduationCapIcon,
  ImageIcon,
  MicroscopeIcon,
  PenLineIcon,
  ShapesIcon,
  SparklesIcon,
  VideoIcon,
} from "lucide-react";

import type { Translations } from "./types";

export const zhTW: Translations = {
  // Locale meta
  locale: {
    localName: "繁體中文",
  },

  // Common
  common: {
    home: "首頁",
    settings: "設定",
    delete: "刪除",
    edit: "編輯",
    rename: "重新命名",
    share: "分享",
    openInNewWindow: "在新視窗開啟",
    close: "關閉",
    more: "更多",
    search: "搜尋",
    loadMore: "載入更多",
    download: "下載",
    thinking: "思考",
    artifacts: "檔案",
    public: "公開",
    custom: "自訂",
    notAvailableInDemoMode: "在示範模式下無法使用",
    loading: "載入中...",
    version: "版本",
    lastUpdated: "最後更新",
    code: "程式碼",
    preview: "預覽",
    cancel: "取消",
    save: "儲存",
    install: "安裝",
    create: "建立",
    import: "匯入",
    export: "匯出",
    exportAsMarkdown: "匯出為 Markdown",
    exportAsJSON: "匯出為 JSON",
    exportSuccess: "對話已匯出",
    regenerate: "重新生成",
  },

  // Home
  home: {
    docs: "文件",
    blog: "部落格",
    contact: "聯絡作者",
  },

  // Welcome
  welcome: {
    greeting: "你好，歡迎回來！",
    description:
      "歡迎使用 🦌 Antler Platform，一個完全開源的超級智能體。透過內建和自訂的 Skills，\nAntler Platform 可以幫你搜尋網路、分析資料，還能為你生成簡報、\n圖片、影片、Podcast 及網頁等，幾乎可以做任何事情。",

    createYourOwnSkill: "建立你自己的 Agent SKill",
    createYourOwnSkillDescription:
      "建立你的 Agent Skill 來釋放 Antler Platform 的潛力。透過自訂技能，Antler Platform\n可以幫你搜尋網路、分析資料，還能為你生成簡報、\n網頁等作品，幾乎可以做任何事情。",
  },

  // Clipboard
  clipboard: {
    copyToClipboard: "複製到剪貼簿",
    copiedToClipboard: "已複製到剪貼簿",
    failedToCopyToClipboard: "複製到剪貼簿失敗",
    linkCopied: "連結已複製到剪貼簿",
  },

  // Input Box
  inputBox: {
    placeholder: "今天我能為你做些什麼？",
    createSkillPrompt:
      "我們一起用 skill-creator 技能來建立一個技能吧。先問問我希望這個技能能做什麼。",
    addAttachments: "新增附件",
    mode: "模式",
    flashMode: "閃速",
    flashModeDescription: "快速且高效地完成任務，但可能不夠精準",
    reasoningMode: "思考",
    reasoningModeDescription: "思考後再行動，在時間與準確性之間取得平衡",
    proMode: "Pro",
    proModeDescription: "思考、規劃再執行，獲得更精準的結果，可能需要更多時間",
    ultraMode: "Ultra",
    ultraModeDescription:
      "繼承自 Pro 模式，可調用子代理分工協作，適合複雜多步驟任務，能力最強",
    reasoningEffort: "推理深度",
    reasoningEffortMinimal: "最低",
    reasoningEffortMinimalDescription: "檢索 + 直接輸出",
    reasoningEffortLow: "低",
    reasoningEffortLowDescription: "簡單邏輯校驗 + 淺層推演",
    reasoningEffortMedium: "中",
    reasoningEffortMediumDescription: "多層邏輯分析 + 基礎驗證",
    reasoningEffortHigh: "高",
    reasoningEffortHighDescription: "全維度邏輯推演 + 多路徑驗證 + 反推校驗",
    searchModels: "搜尋模型...",
    surpriseMe: "小驚喜",
    surpriseMePrompt: "給我一個小驚喜吧",
    followupLoading: "正在生成可能的後續問題...",
    followupConfirmTitle: "傳送建議問題？",
    followupConfirmDescription: "目前輸入框已有內容，請選擇傳送方式。",
    followupConfirmAppend: "附加並傳送",
    followupConfirmReplace: "取代並傳送",
    suggestionPlaceholderRequired: "傳送前請先填寫建議範本中的佔位內容。",
    goalCommandDescription: "設定、查看或清除目前目標",
    goalLabel: "目標",
    goalContinuing: "續跑中 {count}/{max}",
    goalContinuationTooltip:
      "為達成目標已自動續跑 {count}/{max} 次，達上限後自動停止",
    goalSet: "目標已設定。",
    goalCleared: "目標已清除。",
    goalNone: "目前沒有目標。",
    goalActive: "目前目標：{goal}",
    goalFailed: "目標指令執行失敗。",
    suggestions: [
      {
        suggestion: "寫作",
        prompt: "撰寫一篇關於[主題]的部落格文章",
        icon: PenLineIcon,
      },
      {
        suggestion: "研究",
        prompt: "深入淺出地研究一下[主題]，並總結發現。",
        icon: MicroscopeIcon,
      },
      {
        suggestion: "收集",
        prompt: "從[來源]收集資料並建立報告。",
        icon: ShapesIcon,
      },
      {
        suggestion: "學習",
        prompt: "學習關於[主題]並建立教學。",
        icon: GraduationCapIcon,
      },
    ],
    suggestionsCreate: [
      {
        suggestion: "網頁",
        prompt: "生成一個關於[主題]的網頁",
        icon: CompassIcon,
      },
      {
        suggestion: "圖片",
        prompt: "生成一個關於[主題]的圖片",
        icon: ImageIcon,
      },
      {
        suggestion: "影片",
        prompt: "生成一個關於[主題]的影片",
        icon: VideoIcon,
      },
      {
        type: "separator",
      },
      {
        suggestion: "技能",
        prompt:
          "我們一起用 skill-creator 技能來建立一個技能吧。先問問我希望這個技能能做什麼。",
        icon: SparklesIcon,
      },
    ],
  },

  // Sidebar
  sidebar: {
    newChat: "新對話",
    chats: "對話",
    channels: "管道",
    recentChats: "最近的對話",
    demoChats: "示範對話",
    agents: "智能體",
    agentsDisabledTooltip: "功能未啟用",
    console: "控制台",
  },

  // Console (operations dashboard)
  console: {
    title: "控制台",
    subtitle:
      "全部會話的執行、Token 消耗與資產總覽——來自平台執行時的即時資料。",
    statTokens: "累計 Token",
    statTokensHint: "近 {days} 天:{tokens}",
    statCost: "累計費用",
    statCostHint: "近 {days} 天:{cost}",
    pricingNotConfigured: "在 config.yaml 的 models[].pricing 設定單價",
    statRuns: "執行總數",
    statRunsActive: "進行中 {count}",
    statRunsFailed: "失敗 {count}",
    statThreads: "會話數",
    statAgents: "智能體",
    usageTitle: "Token 用量",
    usageSubtitle: "近 {days} 天的每日消耗",
    byModel: "按模型",
    cacheHit: "快取命中 {pct}%",
    noUsage: "此時間窗內暫無用量紀錄。",
    runsTitle: "最近執行",
    runsSubtitle: "跨所有會話的執行紀錄,最新在前",
    colStatus: "狀態",
    colThread: "會話",
    colModel: "模型",
    colTokens: "Token",
    colCost: "費用",
    colDuration: "耗時",
    colTime: "開始時間",
    statusPending: "排隊中",
    statusRunning: "執行中",
    statusSuccess: "成功",
    statusError: "出錯",
    statusTimeout: "逾時",
    statusInterrupted: "已中斷",
    cancel: "取消執行",
    untitledThread: "未命名會話",
    empty: "暫無執行紀錄",
    emptyHint: "發起一次對話後,這裡會即時展示它的執行。",
    pagePrev: "上一頁",
    pageNext: "下一頁",
    unavailableTitle: "控制台需要 SQL 資料庫",
    unavailableHint:
      "請在 config.yaml 中將 database.backend 設為 sqlite 或 postgres,然後重啟 Gateway。",
    loadFailed: "控制台資料載入失敗。",
  },

  // Agents
  agents: {
    title: "智能體",
    description: "建立和管理具有專屬 Prompt 與能力的自訂智能體。",
    newAgent: "新增智能體",
    emptyTitle: "還沒有自訂智能體",
    emptyDescription: "建立你的第一個自訂智能體，設定專屬系統提示詞。",
    featureDisabledTitle: "智能體功能未啟用",
    featureDisabledDescription: "此功能未在這台伺服器上啟用，請聯絡管理員。",
    chat: "對話",
    delete: "刪除",
    deleteConfirm: "確定要刪除該智能體嗎？此操作無法復原。",
    deleteSuccess: "智能體已刪除",
    newChat: "新對話",
    createPageTitle: "設計你的智能體",
    createPageSubtitle: "描述你想要的智能體，我來幫你透過對話建立。",
    nameStepTitle: "給新智能體取個名字",
    nameStepHint:
      "只允許字母、數字和連字號，儲存時自動轉為小寫（例如 code-reviewer）",
    nameStepPlaceholder: "例如 code-reviewer",
    nameStepContinue: "繼續",
    nameStepInvalidError: "名稱無效，只允許字母、數字和連字號",
    nameStepAlreadyExistsError: "已存在同名智能體",
    nameStepNetworkError: "網路請求失敗，請檢查網路或後端連線",
    nameStepCheckError: "無法驗證名稱可用性，請稍後重試",
    nameStepCheckErrorWithDetail: "名稱校驗失敗：{detail}",
    nameStepApiDisabledError: "伺服器未開啟自訂智能體管理功能，請聯絡管理員。",
    nameStepBootstrapMessage:
      "新智能體的名稱是 {name}。請先幫我設計它的用途、行為方式和 SOUL.md，再儲存它。",
    save: "儲存智能體",
    saving: "正在儲存智能體...",
    saveRequested:
      "已提交儲存請求，Antler Platform 正在根據目前對話生成並儲存初版智能體。",
    saveHint:
      "你可以在右上角的選單裡隨時儲存這個智能體，就算目前還只是初稿也可以。",
    saveCommandMessage:
      "請現在根據我們目前已經討論的全部內容儲存這個自訂智能體。這就是我明確的儲存確認。如果仍有少量細節缺失，請根據上下文做出合理假設，生成一份簡潔的英文初始 SOUL.md，並直接呼叫 setup_agent，不要再向我索取額外確認。",
    agentCreatedPendingRefresh:
      "智能體已建立，但 Antler Platform 暫時還無法讀取到它。請稍後重新整理目前頁面。",
    more: "更多操作",
    agentCreated: "智能體已建立！",
    startChatting: "開始對話",
    backToGallery: "返回 Gallery",
  },

  // Breadcrumb
  breadcrumb: {
    workspace: "工作區",
    chats: "對話",
  },

  // Workspace
  workspace: {
    officialWebsite: "造訪 Antler Platform 官方網站",
    githubTooltip: "造訪 Antler Platform 的 Github 儲存庫",
    settingsAndMore: "設定和更多",
    visitGithub: "在 Github 上查看 Antler Platform",
    reportIssue: "回報問題",
    contactUs: "聯絡我們",
    about: "關於 Antler Platform",
    logout: "登出",
    gatewayUnavailable: "閘道暫時無法使用。",
    gatewayUnavailableRetrying: "正在後台重試…",
  },

  // Conversation
  conversation: {
    noMessages: "還沒有訊息",
    startConversation: "開始新的對話以查看訊息",
  },

  // Chats
  chats: {
    searchChats: "搜尋對話",
    loadMoreToSearch: "載入更多以搜尋更早的對話",
    loadingMore: "正在載入...",
    loadOlderChats: "載入更早的對話",
  },

  // Channels
  channels: {
    title: "管道",
    connect: "連接",
    modify: "修改",
    reconnect: "重新連接",
    disconnect: "中斷連接",
    connected: "已連接",
    notConnected: "未連接",
    pending: "待完成",
    revoked: "已中斷",
    disabled: "已停用",
    unconfigured: "未設定",
    unavailable: "目前無法使用管道連接。",
    unavailableShort: "無法使用",
    setupTitle: (name: string) => `連接 ${name}`,
    setupEditTitle: (name: string) => `修改 ${name}`,
    setupDescription:
      "填寫目前服務程序需要的設定值。這些內容不會寫入 config.yaml。",
    saveAndConnect: "儲存並連接",
    saveChanges: "儲存修改",
    descriptions: {
      telegram: "透過 Antler Platform Bot 接收 Telegram 私訊。",
      slack: "接收 Slack 工作區訊息和提及。",
      discord: "透過 Antler Platform Bot 接收 Discord 伺服器訊息。",
      feishu: "透過 Antler Platform 應用接收飛書和 Lark 訊息。",
      dingtalk: "透過 Antler Platform Bot 接收釘釘 Stream Push 訊息。",
      wechat: "透過 Antler Platform Bot 接收微信 iLink 訊息。",
      wecom: "透過 Antler Platform AI Bot 接收企業微信訊息。",
    },
    connectedAs: (name: string) => `已連接為 ${name}。`,
  },

  // Page titles (document title)
  pages: {
    appName: "Antler Platform",
    chats: "對話",
    newChat: "新對話",
    untitled: "未命名",
  },

  // Tool calls
  toolCalls: {
    moreSteps: (count: number) => `查看其他 ${count} 個步驟`,
    lessSteps: "隱藏步驟",
    executeCommand: "執行命令",
    presentFiles: "展示檔案",
    needYourHelp: "需要你的協助",
    useTool: (toolName: string) => `使用 “${toolName}” 工具`,
    searchFor: (query: string) => `搜尋 “${query}”`,
    searchForRelatedInfo: "搜尋相關資訊",
    searchForRelatedImages: "搜尋相關圖片",
    searchForRelatedImagesFor: (query: string) => `搜尋相關圖片 “${query}”`,
    searchOnWebFor: (query: string) => `在網路上搜尋 “${query}”`,
    viewWebPage: "查看網頁",
    listFolder: "列出資料夾",
    readFile: "讀取檔案",
    writeFile: "寫入檔案",
    clickToViewContent: "點擊查看檔案內容",
    writeTodos: "更新 To-do 清單",
    skillInstallTooltip: "安裝技能並使其可在 Antler Platform 中使用",
  },

  uploads: {
    uploading: "上傳中...",
    uploadingFiles: "檔案上傳中，請稍候...",
    limitsHint: (maxFiles: number, maxFileSize: string, maxTotalSize: string) =>
      `新增附件（最多 ${maxFiles} 個，單一檔案不超過 ${maxFileSize}，總計不超過 ${maxTotalSize}）。支援一般檔案類型；macOS .app 應先壓縮。`,
    filesTooLarge: (files: string, maxFileSize: string) =>
      `${files} 超過單一檔案 ${maxFileSize} 的限制，未被新增。`,
    tooManyFiles: (count: number, maxFiles: number) =>
      `有 ${count} 個檔案未被新增；一次最多新增 ${maxFiles} 個檔案。`,
    totalSizeTooLarge: (count: number, maxTotalSize: string) =>
      `有 ${count} 個檔案未被新增；附件總大小不能超過 ${maxTotalSize}。`,
  },

  subtasks: {
    subtask: "子任務",
    executing: (count: number) =>
      `${count > 1 ? "並行" : ""}執行 ${count} 個子任務`,
    in_progress: "子任務執行中",
    completed: "子任務已完成",
    failed: "子任務失敗",
  },

  // Token Usage
  tokenUsage: {
    title: "Token 用量",
    label: "Tokens",
    input: "輸入",
    output: "輸出",
    total: "總計",
    view: "顯示方式",
    unavailable:
      "暫無 Token 用量。只有模型成功回傳且供應商提供 usage_metadata 時才會顯示。",
    unavailableShort: "未回傳用量",
    note: "頂部總量優先使用後端持久化的執行緒用量；當目前回覆仍在串流回傳時，還會疊加可見的進行中用量。每輪和除錯用量只來自目前可見訊息，可能與平台帳單頁不完全一致。",
    presets: {
      off: "關閉",
      summary: "總覽",
      perTurn: "每輪",
      debug: "除錯",
    },
    presetDescriptions: {
      off: "隱藏頂部和對話內的 token 顯示。",
      summary: "只在頂部顯示目前對話累計 token。",
      perTurn: "顯示頂部累計，並為每輪 assistant 回覆顯示一條彙總 token。",
      debug: "顯示頂部累計，並展示按步驟歸類的 token 除錯資訊。",
    },
    finalAnswer: "最終回覆",
    stepTotal: "步驟總計",
    sharedAttribution: "該 token 由此步驟中的多個動作共同消耗",
    subagent: (description: string) => `子任務：${description}`,
    startTodo: (content: string) => `開始 To-do：${content}`,
    completeTodo: (content: string) => `完成 To-do：${content}`,
    updateTodo: (content: string) => `更新 To-do：${content}`,
    removeTodo: (content: string) => `移除 To-do：${content}`,
  },

  // Shortcuts
  shortcuts: {
    searchActions: "搜尋操作...",
    noResults: "找不到結果。",
    actions: "操作",
    keyboardShortcuts: "鍵盤快速鍵",
    keyboardShortcutsDescription: "使用鍵盤快速鍵更快地操作 Antler Platform。",
    openCommandPalette: "開啟命令面板",
    toggleSidebar: "切換側邊欄",
  },

  // Settings
  settings: {
    title: "設定",
    description: "根據你的偏好調整 Antler Platform 的介面和行為。",
    sections: {
      account: "帳號",
      appearance: "外觀",
      channels: "管道",
      memory: "記憶",
      tools: "工具",
      skills: "技能",
      notification: "通知",
      about: "關於",
    },
    memory: {
      title: "記憶",
      description:
        "Antler Platform 會在後台不斷從你的對話中自動學習。這些記憶能幫助 Antler Platform 更好地理解你，並提供更個人化的體驗。",
      empty: "暫無可展示的記憶資料。",
      rawJson: "原始 JSON",
      exportButton: "匯出記憶",
      exportSuccess: "記憶已匯出",
      importButton: "匯入記憶",
      importConfirmTitle: "匯入記憶？",
      importConfirmDescription: "這會用選中的 JSON 備份覆蓋目前記憶。",
      importFileLabel: "已選擇檔案",
      importInvalidFile: "讀取記憶檔案失敗，請選擇有效的 JSON 匯出檔案。",
      importSuccess: "記憶已匯入",
      manualFactSource: "手動新增",
      addFact: "新增事實",
      addFactTitle: "新增記憶事實",
      editFactTitle: "編輯記憶事實",
      addFactSuccess: "事實已建立",
      editFactSuccess: "事實已更新",
      clearAll: "清空全部記憶",
      clearAllConfirmTitle: "要清空全部記憶嗎？",
      clearAllConfirmDescription:
        "這會刪除所有已儲存的摘要和事實。此操作無法復原。",
      clearAllSuccess: "已清空全部記憶",
      factDeleteConfirmTitle: "要刪除這條事實嗎？",
      factDeleteConfirmDescription:
        "這條事實會立即從記憶中刪除。此操作無法復原。",
      factDeleteSuccess: "事實已刪除",
      factContentLabel: "內容",
      factCategoryLabel: "類別",
      factConfidenceLabel: "信心度",
      factContentPlaceholder: "描述你想儲存的記憶事實",
      factCategoryPlaceholder: "context",
      factConfidenceHint: "請輸入 0 到 1 之間的數字。",
      factSave: "儲存事實",
      factValidationContent: "事實內容不能為空。",
      factValidationConfidence: "信心度必須是 0 到 1 之間的數字。",
      noFacts: "還沒有儲存的事實。",
      summaryReadOnly:
        "摘要分區目前仍為唯讀。現在你可以清空全部記憶或刪除單條事實。",
      memoryFullyEmpty: "還沒有儲存任何記憶。",
      factPreviewLabel: "即將刪除的事實",
      searchPlaceholder: "搜尋記憶",
      filterAll: "全部",
      filterFacts: "事實",
      filterSummaries: "摘要",
      noMatches: "沒有找到符合的記憶。",
      markdown: {
        overview: "概覽",
        userContext: "使用者上下文",
        work: "工作",
        personal: "個人",
        topOfMind: "近期關注（Top of mind）",
        historyBackground: "歷史背景",
        recentMonths: "近幾個月",
        earlierContext: "更早上下文",
        longTermBackground: "長期背景",
        updatedAt: "更新於",
        facts: "事實",
        empty: "（空）",
        table: {
          category: "類別",
          confidence: "信心度",
          confidenceLevel: {
            veryHigh: "極高",
            high: "較高",
            normal: "一般",
            unknown: "未知",
          },
          content: "內容",
          source: "來源",
          createdAt: "建立時間",
          view: "查看",
        },
      },
    },
    appearance: {
      themeTitle: "主題",
      themeDescription: "跟隨系統或選擇固定的介面模式。",
      system: "系統",
      light: "淺色",
      dark: "深色",
      systemDescription: "自動跟隨系統主題。",
      lightDescription: "更明亮的配色，適合日間使用。",
      darkDescription: "更暗的配色，減少眩光方便專注。",
      languageTitle: "語言",
      languageDescription: "在不同語言之間切換。",
    },
    tools: {
      title: "工具",
      description: "管理 MCP 工具的設定和啟用狀態。",
      adminRequired: "需要管理員權限才能管理 MCP 工具。",
      empty: "暫無 MCP 工具。",
    },
    channels: {
      title: "管道",
      description:
        "連接可在瀏覽器外向 Antler Platform 傳送訊息的即時通訊帳號。",
      disabled:
        "目前伺服器未啟用管道連接。請聯絡管理員開啟 channel_connections。",
    },
    skills: {
      title: "技能",
      description: "管理 Agent Skill 設定和啟用狀態。",
      createSkill: "新增技能",
      emptyTitle: "還沒有技能",
      emptyDescription:
        "將你的 Agent Skill 資料夾放在 Antler Platform 根目錄下的 `/skills/custom` 資料夾中。",
      emptyButton: "建立你的第一個技能",
      adminRequired: "需要管理員權限才能管理 Agent Skill。",
      installAdminRequired: "需要管理員權限才能安裝 Agent Skill。",
    },
    notification: {
      title: "通知",
      description:
        "Antler Platform 只會在視窗不活躍時傳送完成通知，特別適合長時間任務：你可以先去做別的事，完成後會收到提醒。",
      requestPermission: "請求通知權限",
      deniedHint:
        "通知權限已被拒絕。可在瀏覽器的網站設定中重新開啟，以接收完成提醒。",
      testButton: "傳送測試通知",
      testTitle: "Antler Platform",
      testBody: "這是一條測試通知。",
      notSupported: "目前瀏覽器不支援通知功能。",
      disableNotification: "關閉通知",
    },
    account: {
      profileTitle: "個人資訊",
      email: "電子郵件",
      role: "角色",
      ssoProvider: "SSO",
      changePasswordTitle: "修改密碼",
      changePasswordDescription: "更新你的帳號密碼。",
      ssoPasswordDescription: "密碼由你的 SSO 提供商管理。",
      ssoPasswordMessage:
        "此帳號透過 {provider} 登入，Antler Platform 無法在此管理或修改密碼。請前往你的 SSO 提供商帳號設定中進行操作。",
      currentPassword: "目前密碼",
      newPassword: "新密碼",
      confirmNewPassword: "確認新密碼",
      passwordMismatch: "兩次輸入的新密碼不一致",
      passwordTooShort: "密碼長度至少為 8 個字元",
      passwordChangedSuccess: "密碼修改成功",
      networkError: "網路錯誤，請重試。",
      updating: "更新中...",
      updatePassword: "修改密碼",
      signOut: "登出",
    },
    acknowledge: {
      emptyTitle: "致謝",
      emptyDescription: "相關的致謝資訊會展示在這裡。",
    },
  },
  login: {
    signInTitle: "登入你的帳號",
    createAccountTitle: "建立新帳號",
    email: "電子郵件",
    emailPlaceholder: "you@example.com",
    password: "密碼",
    passwordPlaceholder: "•••••••",
    pleaseWait: "請稍候...",
    signIn: "登入",
    createAccount: "建立帳號",
    createAdminAccount: "建立管理員帳號",
    adminSetupRequiredTitle: "需要先完成管理員初始化",
    adminSetupRequiredDescription:
      "Antler Platform 需要先建立管理員帳號，然後才能建立新的一般帳號。",
    orContinueWith: "或使用以下方式登入",
    ssoHint: "如果你的帳號使用單一登入（SSO），請改用下方的選項登入。",
    continueWith: (provider: string) => `使用 ${provider} 登入`,
    noAccountSignUp: "還沒有帳號？立即註冊",
    haveAccountSignIn: "已有帳號？立即登入",
    backToHome: "← 返回首頁",
    networkError: "網路錯誤，請重試。",
    authFailed: "身分驗證失敗。",
    errors: {
      sso_failed: "SSO 登入失敗，請重試或使用電子郵件登入。",
      sso_cancelled: "SSO 登入已取消。",
      sso_account_exists:
        "該電子郵件對應的帳號已存在。請使用密碼登入或聯絡管理員。",
      sso_not_allowed: "你的帳號不允許使用 SSO 登入。請聯絡管理員。",
    },
  },
};
