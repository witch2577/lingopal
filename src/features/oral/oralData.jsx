// ========== Oral Module Demo Data ==========
// NOTE: All data below is marked as demo/placeholder data in UI

const ORAL_PRACTICE_DATA = {
  en: {
    beginner: [
      { text: 'Hello, how are you?', phonetic: '/həˈloʊ haʊ ɑːr juː/', meaning: '你好，你好吗？', tip: '注意 /h/ 要轻读，are 弱读为 /ɑːr/' },
      { text: 'Nice to meet you.', phonetic: '/naɪs tuː miːt juː/', meaning: '很高兴认识你。', tip: 'Nice 尾音 /s/ 要清晰，to 弱读' },
      { text: 'Thank you very much.', phonetic: '/ˈθæŋk juː ˈveri mʌtʃ/', meaning: '非常感谢。', tip: 'th 咬舌音 /θ/，very 重音在第一音节' },
      { text: 'Where is the bathroom?', phonetic: '/wer ɪz ðə ˈbæθruːm/', meaning: '洗手间在哪里？', tip: 'Where 升调，bathroom 重音在第一音节' },
      { text: 'I would like a cup of coffee.', phonetic: '/aɪ wʊd laɪk ə kʌp əv ˈkɔːfi/', meaning: '我想要一杯咖啡。', tip: 'would 弱读为 /wʊd/，of 弱读为 /əv/' },
    ],
    intermediate: [
      { text: 'Could you please recommend a local restaurant?', phonetic: '/kʊd juː pliːz ˌrekəˈmend ə ˈloʊkl ˈrestərɑːnt/', meaning: '你能推荐一家本地餐厅吗？', tip: 'recommend 重音在第三音节，restaurant 尾音轻读' },
      { text: 'I am looking for the nearest subway station.', phonetic: '/aɪ æm ˈlʊkɪŋ fɔːr ðə ˈnɪrɪst ˈsʌbweɪ ˈsteɪʃn/', meaning: '我在找最近的地铁站。', tip: 'looking for 连读，nearest 注意 /ɪr/ 音' },
      { text: 'How much does this cost?', phonetic: '/haʊ mʌtʃ dʌz ðɪs kɔːst/', meaning: '这个多少钱？', tip: 'does 弱读为 /dʌz/，this 的 /ð/ 要清晰' },
      { text: 'I would like to check in, please.', phonetic: '/aɪ wʊd laɪk tuː tʃek ɪn pliːz/', meaning: '我想办理入住。', tip: 'check in 连读，please 降调' },
    ],
    advanced: [
      { text: 'I would like to schedule a meeting for next Tuesday.', phonetic: '/aɪ wʊd laɪk tuː ˈskedʒuːl ə ˈmiːtɪŋ fɔːr nekst ˈtuːzdeɪ/', meaning: '我想安排下周二开个会。', tip: 'schedule 美音 /ˈskedʒuːl/' },
      { text: 'Could we discuss the terms of the contract?', phonetic: '/kʊd wiː dɪˈskʌs ðə tɜːrmz əv ðə ˈkɑːntrækt/', meaning: '我们能讨论一下合同条款吗？', tip: 'discuss 重音在第二音节' },
      { text: 'What are your thoughts on this proposal?', phonetic: '/wɑːt ɑːr jɔːr θɔːts ɑːn ðɪs prəˈpoʊzl/', meaning: '你对这个提案有什么看法？', tip: 'thoughts 的 /θ/ 咬舌' },
    ],
  },
  ja: {
    beginner: [
      { text: 'こんにちは。', phonetic: 'kon-ni-chi-wa', meaning: '你好。', tip: 'に 轻读，は 在这里读 wa' },
      { text: 'ありがとうございます。', phonetic: 'a-ri-ga-to-u go-za-i-ma-su', meaning: '谢谢。', tip: 'ございます 的 す 要轻' },
      { text: 'すみません。', phonetic: 'su-mi-ma-se-n', meaning: '对不起 / 打扰一下。', tip: 'せ 要清晰，ん 鼻音' },
      { text: 'お名前は何ですか。', phonetic: 'o-na-ma-e-wa na-n de-su ka', meaning: '你叫什么名字？', tip: '名前 读 na-ma-e' },
    ],
    intermediate: [
      { text: '駅はどこですか。', phonetic: 'e-ki-wa do-ko de-su ka', meaning: '车站在哪里？', tip: '駅 读 e-ki，どこ 降调' },
      { text: 'これはいくらですか。', phonetic: 'ko-re-wa i-ku-ra de-su ka', meaning: '这个多少钱？', tip: 'いくら 重音在 ku' },
      { text: '予約をしたいです。', phonetic: 'yo-ya-ku-o shi-ta-i de-su', meaning: '我想预约。', tip: '予約 读 yo-ya-ku' },
    ],
    advanced: [
      { text: '会議の日程を調整したいのですが。', phonetic: 'ka-i-gi no ni-tte-i wo cho-u-se-i shi-ta-i no de-su ga', meaning: '我想调整一下会议日程。', tip: '日程 读 ni-tte-i' },
    ],
  },
  'zh-CN': {
    beginner: [
      { text: '你好，很高兴认识你。', phonetic: 'nǐ hǎo，hěn gāo xìng rèn shi nǐ', meaning: '你好，很高兴认识你。', tip: '你 nǐ 第三声，好 hǎo 第三声' },
      { text: '请问洗手间在哪里？', phonetic: 'qǐng wèn xǐ shǒu jiān zài nǎ lǐ', meaning: '请问洗手间在哪里？', tip: '问 wèn 第四声' },
      { text: '我想要一杯水。', phonetic: 'wǒ xiǎng yào yì bēi shuǐ', meaning: '我想要一杯水。', tip: '想 xiǎng 第三声' },
    ],
    intermediate: [
      { text: '你能推荐一家好吃的餐厅吗？', phonetic: 'nǐ néng tuī jiàn yì jiā hǎo chī de cān tīng ma', meaning: '你能推荐一家好吃的餐厅吗？', tip: '推荐 tuī jiàn' },
    ],
    advanced: [
      { text: '关于这个方案，我想补充几点意见。', phonetic: 'guān yú zhè ge fāng àn，wǒ xiǎng bǔ chōng jǐ diǎn yì jiàn', meaning: '关于这个方案，我想补充几点意见。', tip: '补充 bǔ chōng' },
    ],
  },
  "ko": {
    beginner: [
      {
        text: "안녕하세요.",
        phonetic: "an-nyeong-ha-se-yo",
        meaning: "你好。",
        tip: "안녕 连读，하세요 降调"
      },
      {
        text: "감사합니다.",
        phonetic: "gam-sa-ham-ni-da",
        meaning: "谢谢。",
        tip: "감사 重音在 gam"
      },
      {
        text: "미안합니다.",
        phonetic: "mi-an-ham-ni-da",
        meaning: "对不起。",
        tip: "미안 读 mi-an"
      },
      {
        text: "제 이름은 토마스입니다.",
        phonetic: "je i-reum-eun to-ma-seu-im-ni-da",
        meaning: "我的名字是托马斯。",
        tip: "이름 读 i-reum"
      },
      {
        text: "물 주세요.",
        phonetic: "mul ju-se-yo",
        meaning: "请给我水。",
        tip: "주세요 读 ju-se-yo"
      }
    ],
    intermediate: [
      {
        text: "역은 어디에 있어요?",
        phonetic: "yeog-eun eo-di-e i-sseo-yo",
        meaning: "车站在哪里？",
        tip: "있어요 读 i-sseo-yo"
      },
      {
        text: "이것은 얼마예요?",
        phonetic: "i-geo-seun eol-ma-ye-yo",
        meaning: "这个多少钱？",
        tip: "얼마예요 升调"
      },
      {
        text: "예약을 하고 싶어요.",
        phonetic: "ye-yag-eul ha-go si-peo-yo",
        meaning: "我想预约。",
        tip: "예약 读 ye-yak"
      }
    ],
    advanced: [
      {
        text: "회의 일정을 조정하고 싶은데요.",
        phonetic: "hoe-ui il-jeong-eul jo-jeong-ha-go si-peun-de-yo",
        meaning: "我想调整一下会议日程。",
        tip: "조정 读 jo-jeong"
      }
    ]
  },
  "es": {
    beginner: [
      {
        text: "Hola, ¿cómo estás?",
        phonetic: "o-la, ko-mo es-tas",
        meaning: "你好，你好吗？",
        tip: "H 不发音，estás 重音在 tas"
      },
      {
        text: "Muchas gracias.",
        phonetic: "mu-chas gra-thias",
        meaning: "非常感谢。",
        tip: "gracias 的 c 在 i 前读 th"
      },
      {
        text: "Lo siento.",
        phonetic: "lo sien-to",
        meaning: "对不起。",
        tip: "siento 重音在 sen"
      },
      {
        text: "¿Dónde está el baño?",
        phonetic: "don-de es-ta el ba-nyo",
        meaning: "洗手间在哪里？",
        tip: "baño 的 ñ 鼻音"
      },
      {
        text: "Me gustaría un café.",
        phonetic: "me gus-ta-ri-a un ka-fe",
        meaning: "我想要一杯咖啡。",
        tip: "gustaría 重音在 ri"
      }
    ],
    intermediate: [
      {
        text: "¿Podría recomendarme un restaurante local?",
        phonetic: "po-dri-a re-ko-men-dar-me un res-tau-ran-te lo-kal",
        meaning: "你能推荐一家本地餐厅吗？",
        tip: "recomendarme 连读"
      },
      {
        text: "Busco la estación de metro más cercana.",
        phonetic: "bus-ko la es-ta-thion de me-tro mas ser-ka-na",
        meaning: "我在找最近的地铁站。",
        tip: "cercana 重音在 ser"
      },
      {
        text: "¿Cuánto cuesta esto?",
        phonetic: "kuan-to kues-ta es-to",
        meaning: "这个多少钱？",
        tip: "cuánto 重音在 kuan"
      }
    ],
    advanced: [
      {
        text: "Me gustaría programar una reunión para el martes que viene.",
        phonetic: "me gus-ta-ri-a pro-gra-mar u-na re-u-nion pa-ra el mar-tes ke vie-ne",
        meaning: "我想安排下周二开个会。",
        tip: "reunión 重音在 ni"
      }
    ]
  },
  "ru": {
    beginner: [
      {
        text: "Привет, как дела?",
        phonetic: "pri-vyet, kak de-la",
        meaning: "你好，你好吗？",
        tip: "Привет 非正式问候"
      },
      {
        text: "Спасибо большое.",
        phonetic: "spa-si-bo bol-sho-ye",
        meaning: "非常感谢。",
        tip: "бо 重读"
      },
      {
        text: "Извините.",
        phonetic: "iz-vi-ni-te",
        meaning: "对不起。",
        tip: "ви 重读"
      },
      {
        text: "Где туалет?",
        phonetic: "gdye tu-a-lyet",
        meaning: "洗手间在哪里？",
        tip: "где 重读"
      },
      {
        text: "Я хотел бы чашку кофе.",
        phonetic: "ya kho-tyel by cha-shku ko-fye",
        meaning: "我想要一杯咖啡。",
        tip: "бы 弱读"
      }
    ],
    intermediate: [
      {
        text: "Не могли бы вы порекомендовать местный ресторан?",
        phonetic: "nye mo-gli by vy po-rye-ko-myen-do-vat myest-ny rye-sto-ran",
        meaning: "你能推荐一家本地餐厅吗？",
        tip: "ресторан 重音在 ran"
      },
      {
        text: "Я ищу ближайшую станцию метро.",
        phonetic: "ya i-shchu bli-zhey-shu-yu sta-ntsi-yu mye-tro",
        meaning: "我在找最近的地铁站。",
        tip: "ищу 重读"
      },
      {
        text: "Сколько это стоит?",
        phonetic: "skol-ko e-ta sto-it",
        meaning: "这个多少钱？",
        tip: "ско 重读"
      }
    ],
    advanced: [
      {
        text: "Я хотел бы назначить встречу на следующий вторник.",
        phonetic: "ya kho-tyel by naz-na-chit vstryechu na slye-du-yush-chiy vtor-nik",
        meaning: "我想安排下周二开个会。",
        tip: "встречу 重音在 встре"
      }
    ]
  },
  "de": {
    beginner: [
      {
        text: "Hallo, wie geht es dir?",
        phonetic: "ha-lo, vee gayt es deer",
        meaning: "你好，你好吗？",
        tip: "geht 的 ch 轻读"
      },
      {
        text: "Danke schön.",
        phonetic: "dan-ke shön",
        meaning: "非常感谢。",
        tip: "ö 圆唇音"
      },
      {
        text: "Es tut mir leid.",
        phonetic: "es toot meer lait",
        meaning: "对不起。",
        tip: "leid 的 ei 读 ai"
      },
      {
        text: "Wo ist die Toilette?",
        phonetic: "vo ist dee to-i-le-te",
        meaning: "洗手间在哪里？",
        tip: "Wo 重读"
      },
      {
        text: "Ich möchte eine Tasse Kaffee.",
        phonetic: "ish möch-te ai-ne ta-se ka-fay",
        meaning: "我想要一杯咖啡。",
        tip: "ch 清音"
      }
    ],
    intermediate: [
      {
        text: "Könnten Sie mir ein lokales Restaurant empfehlen?",
        phonetic: "könn-ten zee meer ain lo-ka-les res-tau-rant emp-fay-len",
        meaning: "你能推荐一家本地餐厅吗？",
        tip: "ö 圆唇，ch 清音"
      },
      {
        text: "Ich suche die nächste U-Bahn-Station.",
        phonetic: "ish zu-she dee naych-ste oo-bahn-shta-tion",
        meaning: "我在找最近的地铁站。",
        tip: "ch 清音"
      },
      {
        text: "Wie viel kostet das?",
        phonetic: "vee feel kos-tet das",
        meaning: "这个多少钱？",
        tip: "viel 的 ie 读 i"
      }
    ],
    advanced: [
      {
        text: "Ich möchte gerne ein Meeting für nächsten Dienstag vereinbaren.",
        phonetic: "ish möch-te ger-ne ain mi-ting für naych-sten dien-stag fer-ain-ba-ren",
        meaning: "我想安排下周二开个会。",
        tip: "ei 读 ai，ie 读 i"
      }
    ]
  },
  "fr": {
    beginner: [
      {
        text: "Bonjour, comment allez-vous?",
        phonetic: "bon-zhur, ko-mon ta-lay-vu",
        meaning: "你好，您好吗？",
        tip: "on 鼻音，ez 读 ay"
      },
      {
        text: "Merci beaucoup.",
        phonetic: "mer-see bo-ku",
        meaning: "非常感谢。",
        tip: "eu 圆唇音"
      },
      {
        text: "Pardon.",
        phonetic: "par-don",
        meaning: "对不起。",
        tip: "on 鼻音"
      },
      {
        text: "Où sont les toilettes?",
        phonetic: "u son lay twa-let",
        meaning: "洗手间在哪里？",
        tip: "Où 读 u"
      },
      {
        text: "Je voudrais une tasse de café.",
        phonetic: "zhe voo-dray un tas de ka-fay",
        meaning: "我想要一杯咖啡。",
        tip: "ai 读 ay"
      }
    ],
    intermediate: [
      {
        text: "Pourriez-vous me recommander un restaurant local?",
        phonetic: "pu-riay-vu me re-ko-mon-day un res-tau-ran lo-kal",
        meaning: "你能推荐一家本地餐厅吗？",
        tip: "eu 圆唇，on 鼻音"
      },
      {
        text: "Je cherche la station de métro la plus proche.",
        phonetic: "zhe kersh la sta-sion de may-tro la plü prosh",
        meaning: "我在找最近的地铁站。",
        tip: "ch 读 sh"
      },
      {
        text: "Combien ça coûte?",
        phonetic: "kon-bien sa kut",
        meaning: "这个多少钱？",
        tip: "ien 读 yen"
      }
    ],
    advanced: [
      {
        text: "J'aimerais programmer une réunion pour mardi prochain.",
        phonetic: "zhe-mer-ray pro-gra-may un ray-un-yon pour mar-di pro-shen",
        meaning: "我想安排下周二开个会。",
        tip: "in 鼻音，on 鼻音"
      }
    ]
  },
  "it": {
    beginner: [
      {
        text: "Ciao, come stai?",
        phonetic: "cha-o, ko-may stai",
        meaning: "你好，你好吗？",
        tip: "cia 读 cha"
      },
      {
        text: "Grazie mille.",
        phonetic: "gra-tsie mil-le",
        meaning: "非常感谢。",
        tip: "zie 读 tsie"
      },
      {
        text: "Mi scusi.",
        phonetic: "mi sku-zi",
        meaning: "对不起。",
        tip: "sc 在 i 前读 sh"
      },
      {
        text: "Dov'è il bagno?",
        phonetic: "do-vay il ba-nyo",
        meaning: "洗手间在哪里？",
        tip: "gn 读 ny"
      },
      {
        text: "Vorrei una tazza di caffè.",
        phonetic: "vor-ray u-na tat-sa di kaf-fay",
        meaning: "我想要一杯咖啡。",
        tip: "zz 读 ts"
      }
    ],
    intermediate: [
      {
        text: "Potrebbe consigliarmi un ristorante locale?",
        phonetic: "po-tre-be kon-si-lyar-mi un ris-to-ran-te lo-ka-le",
        meaning: "你能推荐一家本地餐厅吗？",
        tip: "gl 读 ly"
      },
      {
        text: "Cerco la stazione della metropolitana più vicina.",
        phonetic: "cher-ko la sta-tsio-ne del-la may-tro-po-li-ta-na piu vi-chi-na",
        meaning: "我在找最近的地铁站。",
        tip: "ce 读 che"
      },
      {
        text: "Quanto costa?",
        phonetic: "kwan-to kos-ta",
        meaning: "这个多少钱？",
        tip: "qu 读 kw"
      }
    ],
    advanced: [
      {
        text: "Vorrei organizzare una riunione per martedì prossimo.",
        phonetic: "vor-ray or-ga-nit-tsa-re u-na riu-nio-ne per mar-te-di pros-si-mo",
        meaning: "我想安排下周二开个会。",
        tip: "zz 读 ts"
      }
    ]
  },
  "pt": {
    beginner: [
      {
        text: "Olá, como vai?",
        phonetic: "o-la, ko-mo vai",
        meaning: "你好，你好吗？",
        tip: "Olá 重音在 la"
      },
      {
        text: "Muito obrigado.",
        phonetic: "mu-in-to o-bri-ga-do",
        meaning: "非常感谢。",
        tip: "g 读 g"
      },
      {
        text: "Desculpe.",
        phonetic: "des-kul-pe",
        meaning: "对不起。",
        tip: "cu 重读"
      },
      {
        text: "Onde fica o banheiro?",
        phonetic: "on-de fi-ka o ba-nyei-ro",
        meaning: "洗手间在哪里？",
        tip: "nh 读 ny"
      },
      {
        text: "Eu gostaria de uma xícara de café.",
        phonetic: "eu gos-ta-ri-a de u-ma shi-ka-ra de ka-fe",
        meaning: "我想要一杯咖啡。",
        tip: "x 在 i 前读 sh"
      }
    ],
    intermediate: [
      {
        text: "Você poderia me recomendar um restaurante local?",
        phonetic: "vo-se po-de-ri-a me re-ko-men-dar un res-tau-ran-te lo-kal",
        meaning: "你能推荐一家本地餐厅吗？",
        tip: "r 颤音"
      },
      {
        text: "Estou procurando a estação de metrô mais próxima.",
        phonetic: "es-tau pro-ku-ran-do a es-ta-sion de me-tro mais pro-si-ma",
        meaning: "我在找最近的地铁站。",
        tip: "ô 闭口音"
      },
      {
        text: "Quanto custa isso?",
        phonetic: "kwan-to kus-ta i-so",
        meaning: "这个多少钱？",
        tip: "Qu 读 Kw"
      }
    ],
    advanced: [
      {
        text: "Eu gostaria de marcar uma reunião para a próxima terça-feira.",
        phonetic: "eu gos-ta-ri-a de mar-kar u-ma re-u-ni-on pa-ra a pro-si-ma ter-sa-fei-ra",
        meaning: "我想安排下周二开个会。",
        tip: "ão 鼻化元音"
      }
    ]
  },
  "yue": {
    beginner: [
      {
        text: "你好，食咗饭未呀？",
        phonetic: "nei5 hou2, sik6 zo2 faan6 mei6 aa3",
        meaning: "你好，吃饭了吗？",
        tip: "未 mei6 降调"
      },
      {
        text: "唔该晒。",
        phonetic: "m4 goi1 saai3",
        meaning: "非常感谢。",
        tip: "唔 m4 闭口"
      },
      {
        text: "对唔住。",
        phonetic: "deoi3 m4 zyu6",
        meaning: "对不起。",
        tip: "住 zyu6"
      },
      {
        text: "洗手间喺边度呀？",
        phonetic: "sai2 sau2 gaan1 hai2 bin1 dou6 aa3",
        meaning: "洗手间在哪里？",
        tip: "边度 bin1 dou6"
      },
      {
        text: "我想要一杯咖啡。",
        phonetic: "ngo5 soeng2 jiu3 jat1 bui1 gaa3 fe1",
        meaning: "我想要一杯咖啡。",
        tip: "咖 fe1 阴平"
      }
    ],
    intermediate: [
      {
        text: "你可唔可以介绍一间本地餐厅俾我呀？",
        phonetic: "nei5 ho2 m4 ho2 ji5 gaai3 siu3 jat1 gaan3 bun2 dei6 caan1 teng1 bei2 ngo5 aa3",
        meaning: "你能推荐一家本地餐厅吗？",
        tip: "俾 bei2 给"
      },
      {
        text: "我揾紧最近嘅地铁站。",
        phonetic: "ngo5 wan2 gan2 zeoi3 gan6 ge3 dei6 tit3 zaam6",
        meaning: "我在找最近的地铁站。",
        tip: "揾 wan2 找"
      },
      {
        text: "呢个几钱呀？",
        phonetic: "ni1 go3 gei2 cin2 aa3",
        meaning: "这个多少钱？",
        tip: "呢 ni1 这"
      }
    ],
    advanced: [
      {
        text: "我想安排下个礼拜二开次会议，得唔得呀？",
        phonetic: "ngo5 soeng2 on1 paai4 haa6 go3 lai1 baai3 ji6 hoi1 ci3 wui6 ji5, dak1 m4 dak1 aa3",
        meaning: "我想安排下周二开个会，可以吗？",
        tip: "礼拜 lai1 baai3 星期"
      }
    ]
  },
};

// Dialogue scenarios with rule-based conversation trees
const DIALOGUE_SCENARIOS = {
  restaurant: {
    name: '餐厅点餐',
    opening: '欢迎光临！请问几位用餐？',
    turns: [
      {
        userPrompt: '请回答服务员的问候',
        expectedKeywords: ['两位', '三位', '一位', '2', '3', '1'],
        aiResponse: (input) => {
          if (/两位|2/.test(input)) return '好的，这边请。这是菜单，请问需要推荐吗？';
          if (/三位|3/.test(input)) return '好的，这边请。这是菜单，请问需要推荐吗？';
          return '好的，这边请。这是菜单，请问需要推荐吗？';
        },
        nextOptions: ['请推荐特色菜', '我自己看看', '有素食吗'],
      },
      {
        userPrompt: '你想如何回应？',
        expectedKeywords: ['推荐', '看看', '素食'],
        aiResponse: (input) => {
          if (/推荐/.test(input)) return '今天的特色菜是香煎三文鱼和松露意面，都很受欢迎。';
          if (/素食/.test(input)) return '我们有地中海蔬菜沙拉和素食意面，都很新鲜。';
          return '好的，您慢慢看，决定好了叫我。';
        },
        nextOptions: ['我要香煎三文鱼', '我要沙拉', '再来一杯红酒'],
      },
      {
        userPrompt: '你想点什么？',
        expectedKeywords: ['三文鱼', '沙拉', '红酒', '牛排'],
        aiResponse: (input) => {
          if (/三文鱼/.test(input)) return '好的，香煎三文鱼一份。请问需要配什么饮料？';
          if (/沙拉/.test(input)) return '好的，沙拉一份。请问需要配什么饮料？';
          if (/红酒/.test(input)) return '好的，我们有一款不错的赤霞珠，推荐给您。';
          return '好的，我记下了。请问还需要别的吗？';
        },
        nextOptions: ['就这些，谢谢', '再来一份甜点', '买单'],
      },
    ],
  },
  directions: {
    name: '问路导航',
    opening: '您好，请问有什么可以帮您的？',
    turns: [
      {
        userPrompt: '你想去哪里？',
        expectedKeywords: ['地铁', '车站', '机场', '酒店'],
        aiResponse: (input) => {
          if (/地铁/.test(input)) return '最近的地铁站在前面右转，步行大约5分钟。';
          if (/机场/.test(input)) return '您可以乘坐机场快线，从前面左转的车站出发。';
          if (/酒店/.test(input)) return '您订的是哪家酒店？我可以帮您查路线。';
          return '好的，请问您要去哪里？';
        },
        nextOptions: ['请问怎么走', '有出租车吗', '走路要多久'],
      },
      {
        userPrompt: '你如何继续询问？',
        expectedKeywords: ['走', '出租车', '多久'],
        aiResponse: (input) => {
          if (/出租车/.test(input)) return '前面路口有出租车停靠点，大约等5分钟。';
          if (/多久/.test(input)) return '步行大约10分钟，或者可以骑自行车，3分钟就到。';
          return '沿着这条路直走，看到红绿灯左转就到了。';
        },
        nextOptions: ['谢谢，我知道了', '还有别的路吗'],
      },
    ],
  },
  hotel: {
    name: '酒店入住',
    opening: '欢迎光临，请问有预订吗？',
    turns: [
      {
        userPrompt: '你是否有预订？',
        expectedKeywords: ['有', '预订', '没有'],
        aiResponse: (input) => {
          if (/有|预订/.test(input)) return '好的，请出示您的身份证件，我帮您办理入住。';
          return '没关系，请问您需要什么房型？我们有大床房和双床房。';
        },
        nextOptions: ['我要大床房', '我要双床房', '能看到海景吗'],
      },
      {
        userPrompt: '你想选择什么房型？',
        expectedKeywords: ['大床', '双床', '海景'],
        aiResponse: (input) => {
          if (/海景/.test(input)) return '海景房在12楼以上，每晚加收200元，您看可以吗？';
          return '好的，房间在8楼，含早餐。这是您的房卡。';
        },
        nextOptions: ['可以', '有没有更便宜的', '早餐几点开始'],
      },
    ],
  },
  business: {
    name: '商务会谈',
    opening: '感谢您抽时间见面，我们开始吧。',
    turns: [
      {
        userPrompt: '如何开场？',
        expectedKeywords: ['感谢', '合作', '开始'],
        aiResponse: (input) => {
          if (/合作/.test(input)) return '我也非常期待这次合作。请先介绍一下贵公司的方案。';
          return '不客气。那我们先听听您的想法。';
        },
        nextOptions: ['我来介绍一下', '先看数据吧', '您的预算范围是'],
      },
      {
        userPrompt: '你如何推进会议？',
        expectedKeywords: ['介绍', '数据', '预算'],
        aiResponse: (input) => {
          if (/预算/.test(input)) return '我们的预算在50万到80万之间，具体看方案内容。';
          if (/数据/.test(input)) return '好的，数据分析很重要。请展示一下关键指标。';
          return '请说，我在听。';
        },
        nextOptions: ['这是我们的方案', '下周可以签约吗', '需要修改哪里'],
      },
    ],
  },
  shopping: {
    name: '购物消费',
    opening: '欢迎光临，请问您在找什么？',
    turns: [
      {
        userPrompt: '你想买什么？',
        expectedKeywords: ['衣服', '鞋子', '包', '礼品'],
        aiResponse: (input) => {
          if (/衣服/.test(input)) return '男装在二楼，女装在三楼，当季新品在入口处。';
          if (/鞋子/.test(input)) return '运动鞋在一楼，皮鞋在二楼。';
          if (/礼品/.test(input)) return '礼品区在地下一层，有本地特色商品。';
          return '好的，请随便看看。';
        },
        nextOptions: ['这件多少钱', '可以试穿吗', '有折扣吗'],
      },
      {
        userPrompt: '你想问什么？',
        expectedKeywords: ['多少钱', '试穿', '折扣'],
        aiResponse: (input) => {
          if (/多少钱/.test(input)) return '这件原价599，现在打8折，479元。';
          if (/试穿/.test(input)) return '当然可以，试衣间在那边。';
          if (/折扣/.test(input)) return '今天全场8折，会员再享9折。';
          return '好的，还需要别的吗？';
        },
        nextOptions: ['我要这件', '我再看看', '可以退货吗'],
      },
    ],
  },
  airport: {
    name: '机场出行',
    opening: '您好，请问有什么可以帮您？',
    turns: [
      {
        userPrompt: '你需要什么帮助？',
        expectedKeywords: ['值机', '登机', '行李'],
        aiResponse: (input) => {
          if (/值机/.test(input)) return '值机柜台在A区，请出示护照和机票。';
          if (/登机/.test(input)) return '您的航班在C23登机口，请提前40分钟到达。';
          if (/行李/.test(input)) return '行李托运在B区，超重每公斤收费100元。';
          return '好的，请问还有什么需要？';
        },
        nextOptions: ['我的航班几点起飞', '安检在哪里', '有免税店吗'],
      },
      {
        userPrompt: '你还想问什么？',
        expectedKeywords: ['起飞', '安检', '免税店'],
        aiResponse: (input) => {
          if (/起飞/.test(input)) return '您的航班预计14:30起飞，目前准点。';
          if (/安检/.test(input)) return '安检在二楼，请提前准备好液体物品。';
          if (/免税店/.test(input)) return '免税店在过安检后，国际出发区域。';
          return '祝您旅途愉快！';
        },
        nextOptions: ['谢谢', '再见'],
      },
    ],
  },
};

Object.assign(window, { ORAL_PRACTICE_DATA, DIALOGUE_SCENARIOS });
