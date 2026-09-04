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
