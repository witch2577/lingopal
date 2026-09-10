// ========== Written Module Demo Data ==========
// NOTE: All data below is marked as demo/placeholder data in UI

const SPELLING_WORDS = {
  en: {
    beginner: [
      { word: 'hello', meaning: '你好', hint: 'h-llo' },
      { word: 'apple', meaning: '苹果', hint: 'a-ple' },
      { word: 'water', meaning: '水', hint: 'w-ter' },
      { word: 'bread', meaning: '面包', hint: 'br-ad' },
      { word: 'friend', meaning: '朋友', hint: 'fr-end' },
      { word: 'school', meaning: '学校', hint: 'sch-ol' },
      { word: 'family', meaning: '家庭', hint: 'f-mily' },
      { word: 'happy', meaning: '快乐', hint: 'h-ppy' },
      { word: 'green', meaning: '绿色', hint: 'gr-n' },
      { word: 'table', meaning: '桌子', hint: 't-ble' },
    ],
    intermediate: [
      { word: 'beautiful', meaning: '美丽的', hint: 'be-utiful' },
      { word: 'restaurant', meaning: '餐厅', hint: 'rest-urant' },
      { word: 'tomorrow', meaning: '明天', hint: 'tom-rrow' },
      { word: 'practice', meaning: '练习', hint: 'pr-ctice' },
      { word: 'language', meaning: '语言', hint: 'l-nguage' },
      { word: 'travel', meaning: '旅行', hint: 'tr-vel' },
      { word: 'weather', meaning: '天气', hint: 'we-ther' },
      { word: 'country', meaning: '国家', hint: 'c-untry' },
      { word: 'morning', meaning: '早上', hint: 'm-rning' },
      { word: 'evening', meaning: '晚上', hint: 'ev-ning' },
    ],
    advanced: [
      { word: 'pronunciation', meaning: '发音', hint: 'pron-nciation' },
      { word: 'accommodation', meaning: '住宿', hint: 'accomm-dation' },
      { word: 'responsibility', meaning: '责任', hint: 'resp-nsibility' },
      { word: 'environment', meaning: '环境', hint: 'env-ronment' },
      { word: 'opportunity', meaning: '机会', hint: 'opport-nity' },
      { word: 'communication', meaning: '沟通', hint: 'comm-nication' },
      { word: 'international', meaning: '国际的', hint: 'intern-tional' },
      { word: 'development', meaning: '发展', hint: 'devel-pment' },
    ],
  },
  ja: {
    beginner: [
      { word: 'こんにちは', meaning: '你好', hint: 'こん-ちは' },
      { word: 'ありがとう', meaning: '谢谢', hint: 'あり-とう' },
      { word: 'さようなら', meaning: '再见', hint: 'さよ-なら' },
      { word: 'おはよう', meaning: '早上好', hint: 'おは-う' },
      { word: 'すみません', meaning: '对不起', hint: 'すみ-せん' },
    ],
    intermediate: [
      { word: 'たのしい', meaning: '开心', hint: 'たの-い' },
      { word: 'べんきょう', meaning: '学习', hint: 'べん-ょう' },
      { word: 'りょこう', meaning: '旅行', hint: 'りょ-う' },
    ],
  },
  "ko": {
      beginner: [
        {
          word: "안녕하세요",
          meaning: "你好",
          hint: "안녕-세요"
        },
        {
          word: "감사합니다",
          meaning: "谢谢",
          hint: "감사-합니다"
        },
        {
          word: "사랑해요",
          meaning: "我爱你",
          hint: "사랑-해요"
        },
        {
          word: "친구",
          meaning: "朋友",
          hint: "친-구"
        },
        {
          word: "물",
          meaning: "水",
          hint: "물"
        }
      ],
      intermediate: [
        {
          word: "학교",
          meaning: "学校",
          hint: "학-교"
        },
        {
          word: "커피",
          meaning: "咖啡",
          hint: "커-피"
        },
        {
          word: "여행",
          meaning: "旅行",
          hint: "여-행"
        }
      ]
    },
  "es": {
      beginner: [
        {
          word: "hola",
          meaning: "你好",
          hint: "h-la"
        },
        {
          word: "gracias",
          meaning: "谢谢",
          hint: "gra-cias"
        },
        {
          word: "amigo",
          meaning: "朋友",
          hint: "a-igo"
        },
        {
          word: "agua",
          meaning: "水",
          hint: "a-gua"
        },
        {
          word: "casa",
          meaning: "房子",
          hint: "ca-sa"
        }
      ],
      intermediate: [
        {
          word: "restaurante",
          meaning: "餐厅",
          hint: "restau-ante"
        },
        {
          word: "biblioteca",
          meaning: "图书馆",
          hint: "biblio-eca"
        },
        {
          word: "hospital",
          meaning: "医院",
          hint: "hospi-al"
        }
      ]
    },
  "ru": {
      beginner: [
        {
          word: "привет",
          meaning: "你好",
          hint: "при-ет"
        },
        {
          word: "спасибо",
          meaning: "谢谢",
          hint: "спа-сибо"
        },
        {
          word: "друг",
          meaning: "朋友",
          hint: "друг"
        },
        {
          word: "вода",
          meaning: "水",
          hint: "во-да"
        },
        {
          word: "дом",
          meaning: "房子",
          hint: "дом"
        }
      ],
      intermediate: [
        {
          word: "ресторан",
          meaning: "餐厅",
          hint: "ресто-ан"
        },
        {
          word: "библиотека",
          meaning: "图书馆",
          hint: "библио-ека"
        },
        {
          word: "больница",
          meaning: "医院",
          hint: "боль-ица"
        }
      ]
    },
  "de": {
      beginner: [
        {
          word: "hallo",
          meaning: "你好",
          hint: "ha-lo"
        },
        {
          word: "danke",
          meaning: "谢谢",
          hint: "da-ke"
        },
        {
          word: "freund",
          meaning: "朋友",
          hint: "fre-nd"
        },
        {
          word: "wasser",
          meaning: "水",
          hint: "wa-ser"
        },
        {
          word: "haus",
          meaning: "房子",
          hint: "h-aus"
        }
      ],
      intermediate: [
        {
          word: "restaurant",
          meaning: "餐厅",
          hint: "restau-ant"
        },
        {
          word: "bibliothek",
          meaning: "图书馆",
          hint: "biblio-thek"
        },
        {
          word: "krankenhaus",
          meaning: "医院",
          hint: "kran-ken-haus"
        }
      ]
    },
  "fr": {
      beginner: [
        {
          word: "bonjour",
          meaning: "你好",
          hint: "bon-our"
        },
        {
          word: "merci",
          meaning: "谢谢",
          hint: "mer-i"
        },
        {
          word: "ami",
          meaning: "朋友",
          hint: "a-i"
        },
        {
          word: "eau",
          meaning: "水",
          hint: "eau"
        },
        {
          word: "maison",
          meaning: "房子",
          hint: "mai-son"
        }
      ],
      intermediate: [
        {
          word: "restaurant",
          meaning: "餐厅",
          hint: "restau-ant"
        },
        {
          word: "bibliothèque",
          meaning: "图书馆",
          hint: "biblio-thèque"
        },
        {
          word: "hôpital",
          meaning: "医院",
          hint: "hôpi-al"
        }
      ]
    },
  "it": {
      beginner: [
        {
          word: "ciao",
          meaning: "你好",
          hint: "ci-o"
        },
        {
          word: "grazie",
          meaning: "谢谢",
          hint: "gra-zie"
        },
        {
          word: "amico",
          meaning: "朋友",
          hint: "a-ico"
        },
        {
          word: "acqua",
          meaning: "水",
          hint: "ac-qua"
        },
        {
          word: "casa",
          meaning: "房子",
          hint: "ca-sa"
        }
      ],
      intermediate: [
        {
          word: "ristorante",
          meaning: "餐厅",
          hint: "risto-ante"
        },
        {
          word: "biblioteca",
          meaning: "图书馆",
          hint: "biblio-eca"
        },
        {
          word: "ospedale",
          meaning: "医院",
          hint: "ospe-ale"
        }
      ]
    },
  "pt": {
      beginner: [
        {
          word: "olá",
          meaning: "你好",
          hint: "o-á"
        },
        {
          word: "obrigado",
          meaning: "谢谢",
          hint: "obri-ado"
        },
        {
          word: "amigo",
          meaning: "朋友",
          hint: "a-igo"
        },
        {
          word: "água",
          meaning: "水",
          hint: "á-gua"
        },
        {
          word: "casa",
          meaning: "房子",
          hint: "ca-sa"
        }
      ],
      intermediate: [
        {
          word: "restaurante",
          meaning: "餐厅",
          hint: "restau-ante"
        },
        {
          word: "biblioteca",
          meaning: "图书馆",
          hint: "biblio-eca"
        },
        {
          word: "hospital",
          meaning: "医院",
          hint: "hospi-al"
        }
      ]
    },
  },
};

const SENTENCE_SELECTION_DATA = {
  en: {
    beginner: [
      { sentence: '___ morning! 早上好！', options: ['Good', 'Nice', 'Fine', 'Well'], correct: 'Good', meaning: '早上好！' },
      { sentence: 'Thank ___ very much. 非常感谢你。', options: ['your', 'you', 'yours', 'yourself'], correct: 'you', meaning: '非常感谢你。' },
      { sentence: 'I ___ a student. 我是一名学生。', options: ['am', 'is', 'are', 'be'], correct: 'am', meaning: '我是一名学生。' },
      { sentence: 'This is ___ book. 这是一本书。', options: ['a', 'an', 'the', '/'], correct: 'a', meaning: '这是一本书。' },
      { sentence: 'She ___ to school every day. 她每天上学。', options: ['go', 'goes', 'going', 'went'], correct: 'goes', meaning: '她每天上学。' },
    ],
    intermediate: [
      { sentence: 'Could you ___ me a favor? 你能帮我个忙吗？', options: ['do', 'make', 'give', 'take'], correct: 'do', meaning: '你能帮我个忙吗？' },
      { sentence: 'I am looking forward to ___ you. 期待见到你。', options: ['see', 'seeing', 'saw', 'seen'], correct: 'seeing', meaning: '期待见到你。' },
      { sentence: 'If I ___ you, I would accept the offer. 如果我是你，我会接受这个提议。', options: ['am', 'was', 'were', 'be'], correct: 'were', meaning: '如果我是你，我会接受这个提议。' },
      { sentence: 'The meeting has been ___ to next Monday. 会议被推迟到下周一。', options: ['put off', 'put on', 'put up', 'put down'], correct: 'put off', meaning: '会议被推迟到下周一。' },
    ],
    advanced: [
      { sentence: 'Not only ___ speak French, but he also speaks German. 他不仅讲法语，还讲德语。', options: ['does he', 'he does', 'he can', 'can he'], correct: 'does he', meaning: '他不仅讲法语，还讲德语。' },
      { sentence: 'Had I known the truth, I ___ have told you. 如果我知道真相，我早就告诉你了。', options: ['would', 'will', 'should', 'shall'], correct: 'would', meaning: '如果我知道真相，我早就告诉你了。' },
    ],
  },
  ja: {
    beginner: [
      { sentence: '___は学生です。（我是学生）', options: ['私', '僕', 'あなた', '彼'], correct: '私', meaning: '我是学生。' },
      { sentence: 'これ___ペンです。（这是笔）', options: ['は', 'が', 'を', 'に'], correct: 'は', meaning: '这是笔。' },
      { sentence: 'りんご___食べます。（吃苹果）', options: ['を', 'は', 'が', 'に'], correct: 'を', meaning: '吃苹果。' },
    ],
    intermediate: [
      { sentence: '雨___降っています。（正在下雨）', options: ['が', 'は', 'を', 'に'], correct: 'が', meaning: '正在下雨。' },
      { sentence: '駅___行きます。（去车站）', options: ['へ', 'は', 'が', 'を'], correct: 'へ', meaning: '去车站。' },
    ],
  },
  "ko": {
      beginner: [
        {
          sentence: "___학생입니다。（我是学生）",
          options: ["제", "너", "그", "그녀"],
          correct: "제",
          meaning: "我是学生。"
        },
        {
          sentence: "이것___책입니다。（这是书）",
          options: ["은", "이", "를", "에"],
          correct: "은",
          meaning: "这是书。"
        },
        {
          sentence: "사과를___。（吃苹果）",
          options: ["먹다", "마시다", "보다", "듣다"],
          correct: "먹다",
          meaning: "吃苹果。"
        }
      ],
      intermediate: [
        {
          sentence: "비가___。（正在下雨）",
          options: ["와요", "가요", "와서", "오고"],
          correct: "와요",
          meaning: "正在下雨。"
        },
        {
          sentence: "학교___가요。（去学校）",
          options: ["에", "에서", "을", "와"],
          correct: "에",
          meaning: "去学校。"
        }
      ]
    },
  "es": {
      beginner: [
        {
          sentence: "___días!（早上好）",
          options: ["Buenos", "Buenas", "Buen", "Bue"],
          correct: "Buenos",
          meaning: "早上好！"
        },
        {
          sentence: "Yo ___ estudiante.（我是学生）",
          options: ["soy", "es", "eres", "son"],
          correct: "soy",
          meaning: "我是学生。"
        },
        {
          sentence: "Este es ___ libro.（这是一本书）",
          options: ["un", "una", "el", "la"],
          correct: "un",
          meaning: "这是一本书。"
        }
      ],
      intermediate: [
        {
          sentence: "¿___ está el baño?（洗手间在哪里？）",
          options: ["Dónde", "Qué", "Quién", "Cuándo"],
          correct: "Dónde",
          meaning: "洗手间在哪里？"
        },
        {
          sentence: "Me gustaría ___ café.（我想要咖啡）",
          options: ["un", "una", "unos", "unas"],
          correct: "un",
          meaning: "我想要咖啡。"
        }
      ]
    },
  "ru": {
      beginner: [
        {
          sentence: "___ утро!（早上好）",
          options: ["Доброе", "Добрый", "Добрая", "Добрые"],
          correct: "Доброе",
          meaning: "早上好！"
        },
        {
          sentence: "Я ___ студент.（我是学生）",
          options: ["-", "есть", "это", "быть"],
          correct: "-",
          meaning: "我是学生。"
        },
        {
          sentence: "Это ___ книга.（这是一本书）",
          options: ["-", "один", "одна", "одно"],
          correct: "-",
          meaning: "这是一本书。"
        }
      ],
      intermediate: [
        {
          sentence: "___ туалет?（洗手间在哪里？）",
          options: ["Где", "Кто", "Что", "Когда"],
          correct: "Где",
          meaning: "洗手间在哪里？"
        },
        {
          sentence: "Я хочу ___ кофе.（我想要咖啡）",
          options: ["-", "один", "одну", "одного"],
          correct: "-",
          meaning: "我想要咖啡。"
        }
      ]
    },
  "de": {
      beginner: [
        {
          sentence: "___ Morgen!（早上好）",
          options: ["Guten", "Gute", "Gut", "Guter"],
          correct: "Guten",
          meaning: "早上好！"
        },
        {
          sentence: "Ich ___ Student.（我是学生）",
          options: ["bin", "ist", "sind", "bist"],
          correct: "bin",
          meaning: "我是学生。"
        },
        {
          sentence: "Das ist ___ Buch.（这是一本书）",
          options: ["ein", "eine", "einer", "einen"],
          correct: "ein",
          meaning: "这是一本书。"
        }
      ],
      intermediate: [
        {
          sentence: "___ ist die Toilette?（洗手间在哪里？）",
          options: ["Wo", "Was", "Wer", "Wann"],
          correct: "Wo",
          meaning: "洗手间在哪里？"
        },
        {
          sentence: "Ich möchte ___ Kaffee.（我想要咖啡）",
          options: ["einen", "eine", "ein", "einer"],
          correct: "einen",
          meaning: "我想要咖啡。"
        }
      ]
    },
  "fr": {
      beginner: [
        {
          sentence: "___ jour!（早上好）",
          options: ["Bon", "Bonne", "Beau", "Bons"],
          correct: "Bon",
          meaning: "早上好！"
        },
        {
          sentence: "Je ___ étudiant.（我是学生）",
          options: ["suis", "es", "est", "sommes"],
          correct: "suis",
          meaning: "我是学生。"
        },
        {
          sentence: "C'est ___ livre.（这是一本书）",
          options: ["un", "une", "le", "la"],
          correct: "un",
          meaning: "这是一本书。"
        }
      ],
      intermediate: [
        {
          sentence: "___ sont les toilettes?（洗手间在哪里？）",
          options: ["Où", "Qu'est-ce que", "Qui", "Quand"],
          correct: "Où",
          meaning: "洗手间在哪里？"
        },
        {
          sentence: "Je voudrais ___ café.（我想要咖啡）",
          options: ["un", "une", "du", "de la"],
          correct: "un",
          meaning: "我想要咖啡。"
        }
      ]
    },
  "it": {
      beginner: [
        {
          sentence: "___ giorno!（早上好）",
          options: ["Buon", "Buona", "Bella", "Bel"],
          correct: "Buon",
          meaning: "早上好！"
        },
        {
          sentence: "Io ___ studente.（我是学生）",
          options: ["sono", "è", "sei", "siamo"],
          correct: "sono",
          meaning: "我是学生。"
        },
        {
          sentence: "Questo è ___ libro.（这是一本书）",
          options: ["un", "una", "uno", "un'"],
          correct: "un",
          meaning: "这是一本书。"
        }
      ],
      intermediate: [
        {
          sentence: "___ è il bagno?（洗手间在哪里？）",
          options: ["Dov'è", "Che", "Chi", "Quando"],
          correct: "Dov'è",
          meaning: "洗手间在哪里？"
        },
        {
          sentence: "Vorrei ___ caffè.（我想要咖啡）",
          options: ["un", "una", "uno", "un'"],
          correct: "un",
          meaning: "我想要咖啡。"
        }
      ]
    },
  "pt": {
      beginner: [
        {
          sentence: "___ dia!（早上好）",
          options: ["Bom", "Boa", "Bons", "Boas"],
          correct: "Bom",
          meaning: "早上好！"
        },
        {
          sentence: "Eu ___ estudante.（我是学生）",
          options: ["sou", "é", "és", "somos"],
          correct: "sou",
          meaning: "我是学生。"
        },
        {
          sentence: "Este é ___ livro.（这是一本书）",
          options: ["um", "uma", "uns", "umas"],
          correct: "um",
          meaning: "这是一本书。"
        }
      ],
      intermediate: [
        {
          sentence: "___ fica o banheiro?（洗手间在哪里？）",
          options: ["Onde", "O que", "Quem", "Quando"],
          correct: "Onde",
          meaning: "洗手间在哪里？"
        },
        {
          sentence: "Eu gostaria de ___ café.（我想要咖啡）",
          options: ["um", "uma", "uns", "umas"],
          correct: "um",
          meaning: "我想要咖啡。"
        }
      ]
    },
  },
};

// Text dialogue scenarios for written practice
const TEXT_DIALOGUE_SCENARIOS = {
  travel: {
    name: '旅行计划',
    description: '你正在和朋友计划一次旅行。',
    turns: [
      { speaker: 'friend', text: '下个月有假期，我们一起去旅行吧！你想去哪里？' },
      { speaker: 'user', text: '选择你的回答', options: ['海边', '山里', '城市'], correct: '海边', correctResponse: '太棒了！海边确实很适合放松。你想去哪个城市？' },
      { speaker: 'friend', text: '我推荐三亚或者厦门，都是不错的海边城市。' },
      { speaker: 'user', text: '选择你的回答', options: ['三亚', '厦门', '其他'], correct: '三亚', correctResponse: '好的，那我们就去三亚！我来查一下机票和酒店。' },
    ],
  },
  business: {
    name: '商务邮件',
    description: '你需要回复一封商务邮件。',
    turns: [
      { speaker: 'client', text: '您好，我们对贵公司的产品很感兴趣，希望能安排一次会议讨论合作细节。' },
      { speaker: 'user', text: '选择你的回答', options: ['感谢', '不方便', '不适合'], correct: '感谢', correctResponse: '太好了！请问您下周二下午方便吗？我们可以视频会面。' },
      { speaker: 'client', text: '下周二下午2点可以吗？请发送会议链接。' },
      { speaker: 'user', text: '选择你的回答', options: ['没问题', '没空', '不知道'], correct: '没问题', correctResponse: '好的，会议链接已发送至您的邮箱。期待与您的会面！' },
    ],
  },
  daily: {
    name: '日常交流',
    description: '你在餐厅和朋友聊天。',
    turns: [
      { speaker: 'friend', text: '你尝尝这个，是新出的招牌菜。' },
      { speaker: 'user', text: '选择你的回答', options: ['好吃', '不喜欢', '不饿'], correct: '好吃', correctResponse: '对吧！我也觉得味道很棒。下次我们还可以再来。' },
      { speaker: 'friend', text: '吃完饭我们去附近的咖啡馆坐坐吧？' },
      { speaker: 'user', text: '选择你的回答', options: ['请客', '回家', '不喜欢'], correct: '请客', correctResponse: '那怎么好意思呢！下次我请你。走吧！' },
    ],
  },
};

Object.assign(window, { SPELLING_WORDS, SENTENCE_SELECTION_DATA, TEXT_DIALOGUE_SCENARIOS });
