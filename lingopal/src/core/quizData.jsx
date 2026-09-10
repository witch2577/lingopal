// ========== Quiz / Level Data ==========
// Structured by language -> theme -> levels
// Each level has 5-8 questions of mixed types

const QUIZ_DATA = {
  en: {
    themes: [
      {
        id: 'basic',
        name: '基础词汇',
        color: '#10B981',
        levels: [
          {
            levelId: 'en-basic-01',
            title: '问候与礼貌',
            timeLimit: 120,
            minScoreFor1Star: 30,
            minScoreFor2Star: 50,
            minScoreFor3Star: 70,
            prerequisites: [],
            questions: [
              { id: 'en-b-01-1', type: 'translate', question: '你好', options: ['hello', 'goodbye', 'thanks', 'sorry'], correctAnswer: 'hello', difficulty: 1 },
              { id: 'en-b-01-2', type: 'translate', question: '谢谢', options: ['please', 'thanks', 'sorry', 'hello'], correctAnswer: 'thanks', difficulty: 1 },
              { id: 'en-b-01-3', type: 'fill-blank', question: '___ morning! 早上好！', options: ['Good', 'Nice', 'Fine', 'Well'], correctAnswer: 'Good', difficulty: 1 },
              { id: 'en-b-01-4', type: 'match', question: '将单词与意思配对', pairs: [['hello', '你好'], ['thanks', '谢谢'], ['sorry', '对不起'], ['please', '请']], correctAnswer: 'match', difficulty: 2 },
              { id: 'en-b-01-5', type: 'dictation', question: '听写：你好', audioWord: 'hello', correctAnswer: 'hello', difficulty: 2 },
              { id: 'en-b-01-6', type: 'translate', question: '对不起', options: ['thank you', 'sorry', 'please', 'hello'], correctAnswer: 'sorry', difficulty: 1 },
            ],
          },
          {
            levelId: 'en-basic-02',
            title: '数字与颜色',
            timeLimit: 120,
            minScoreFor1Star: 30,
            minScoreFor2Star: 50,
            minScoreFor3Star: 70,
            prerequisites: ['en-basic-01'],
            questions: [
              { id: 'en-b-02-1', type: 'translate', question: '红色', options: ['blue', 'green', 'red', 'yellow'], correctAnswer: 'red', difficulty: 1 },
              { id: 'en-b-02-2', type: 'translate', question: '三', options: ['one', 'two', 'three', 'four'], correctAnswer: 'three', difficulty: 1 },
              { id: 'en-b-02-3', type: 'fill-blank', question: 'The sky is ___. 天空是蓝色的。', options: ['red', 'blue', 'green', 'white'], correctAnswer: 'blue', difficulty: 1 },
              { id: 'en-b-02-4', type: 'match', question: '数字配对', pairs: [['one', '一'], ['five', '五'], ['ten', '十'], ['seven', '七']], correctAnswer: 'match', difficulty: 2 },
              { id: 'en-b-02-5', type: 'translate', question: '绿色', options: ['red', 'blue', 'green', 'black'], correctAnswer: 'green', difficulty: 1 },
              { id: 'en-b-02-6', type: 'dictation', question: '听写：苹果', audioWord: 'apple', correctAnswer: 'apple', difficulty: 2 },
            ],
          },
          {
            levelId: 'en-basic-03',
            title: '食物与饮料',
            timeLimit: 120,
            minScoreFor1Star: 35,
            minScoreFor2Star: 55,
            minScoreFor3Star: 75,
            prerequisites: ['en-basic-02'],
            questions: [
              { id: 'en-b-03-1', type: 'translate', question: '苹果', options: ['banana', 'apple', 'bread', 'rice'], correctAnswer: 'apple', difficulty: 1 },
              { id: 'en-b-03-2', type: 'translate', question: '咖啡', options: ['tea', 'milk', 'water', 'coffee'], correctAnswer: 'coffee', difficulty: 1 },
              { id: 'en-b-03-3', type: 'fill-blank', question: 'I want some ___. 我想要一些水。', options: ['bread', 'water', 'tea', 'rice'], correctAnswer: 'water', difficulty: 1 },
              { id: 'en-b-03-4', type: 'match', question: '食物配对', pairs: [['bread', '面包'], ['rice', '米饭'], ['tea', '茶'], ['milk', '牛奶']], correctAnswer: 'match', difficulty: 2 },
              { id: 'en-b-03-5', type: 'listen-pic', question: '听词选图：banana', correctAnswer: 'banana', options: ['🍎', '🍌', '🍞', '☕'], difficulty: 2 },
              { id: 'en-b-03-6', type: 'repeat', question: '跟读：Hello, how are you?', sentence: 'Hello, how are you?', correctAnswer: 'repeat', difficulty: 2 },
            ],
          },
        ],
      },
      {
        id: 'daily',
        name: '日常对话',
        color: '#6366F1',
        levels: [
          {
            levelId: 'en-daily-01',
            title: '自我介绍',
            timeLimit: 150,
            minScoreFor1Star: 40,
            minScoreFor2Star: 60,
            minScoreFor3Star: 80,
            prerequisites: [],
            questions: [
              { id: 'en-d-01-1', type: 'translate', question: '我的名字是…', options: ['My name is…', 'I am fine', 'How are you', 'Nice to meet'], correctAnswer: 'My name is…', difficulty: 2 },
              { id: 'en-d-01-2', type: 'fill-blank', question: 'Nice to ___ you. 很高兴认识你。', options: ['meet', 'see', 'help', 'ask'], correctAnswer: 'meet', difficulty: 2 },
              { id: 'en-d-01-3', type: 'translate', question: '你从哪里来？', options: ['Where are you from?', 'What is your name?', 'How old are you?', 'Where do you go?'], correctAnswer: 'Where are you from?', difficulty: 2 },
              { id: 'en-d-01-4', type: 'repeat', question: '跟读：My name is Tom.', sentence: 'My name is Tom.', correctAnswer: 'repeat', difficulty: 2 },
              { id: 'en-d-01-5', type: 'dictation', question: '听写：朋友', audioWord: 'friend', correctAnswer: 'friend', difficulty: 2 },
              { id: 'en-d-01-6', type: 'match', question: '对话配对', pairs: [['Good morning', '早上好'], ['See you', '再见'], ['Thank you', '谢谢'], ['Sorry', '对不起']], correctAnswer: 'match', difficulty: 2 },
            ],
          },
          {
            levelId: 'en-daily-02',
            title: '问路与出行',
            timeLimit: 150,
            minScoreFor1Star: 40,
            minScoreFor2Star: 60,
            minScoreFor3Star: 80,
            prerequisites: ['en-daily-01'],
            questions: [
              { id: 'en-d-02-1', type: 'translate', question: '地铁站在哪里？', options: ['Where is the subway?', 'How much is it?', 'What time is it?', 'Where do you live?'], correctAnswer: 'Where is the subway?', difficulty: 2 },
              { id: 'en-d-02-2', type: 'fill-blank', question: 'Take the ___ to the airport. 坐出租车去机场。', options: ['bus', 'taxi', 'train', 'plane'], correctAnswer: 'taxi', difficulty: 2 },
              { id: 'en-d-02-3', type: 'translate', question: '多少钱？', options: ['How many?', 'How much?', 'How long?', 'How far?'], correctAnswer: 'How much?', difficulty: 2 },
              { id: 'en-d-02-4', type: 'listen-pic', question: '听词选图：airport', correctAnswer: 'airport', options: ['✈️', '🚂', '🚕', '🚌'], difficulty: 2 },
              { id: 'en-d-02-5', type: 'match', question: '出行配对', pairs: [['airport', '机场'], ['hotel', '酒店'], ['restaurant', '餐厅'], ['station', '车站']], correctAnswer: 'match', difficulty: 2 },
              { id: 'en-d-02-6', type: 'repeat', question: '跟读：How much is this?', sentence: 'How much is this?', correctAnswer: 'repeat', difficulty: 2 },
            ],
          },
        ],
      },
      {
        id: 'grammar',
        name: '语法进阶',
        color: '#F59E0B',
        levels: [
          {
            levelId: 'en-grammar-01',
            title: '一般现在时',
            timeLimit: 150,
            minScoreFor1Star: 40,
            minScoreFor2Star: 60,
            minScoreFor3Star: 80,
            prerequisites: [],
            questions: [
              { id: 'en-g-01-1', type: 'fill-blank', question: 'She ___ to school every day. 她每天上学。', options: ['go', 'goes', 'going', 'went'], correctAnswer: 'goes', difficulty: 2 },
              { id: 'en-g-01-2', type: 'fill-blank', question: 'I ___ coffee in the morning. 我早上喝咖啡。', options: ['drink', 'drinks', 'drinking', 'drank'], correctAnswer: 'drink', difficulty: 2 },
              { id: 'en-g-01-3', type: 'translate', question: '他喜欢音乐。', options: ['He like music', 'He likes music', 'He liking music', 'He liked music'], correctAnswer: 'He likes music', difficulty: 2 },
              { id: 'en-g-01-4', type: 'dictation', question: '听写：工作', audioWord: 'work', correctAnswer: 'work', difficulty: 2 },
              { id: 'en-g-01-5', type: 'match', question: '主谓一致配对', pairs: [['I/you/we/they', '动词原形'], ['he/she/it', '动词+s'], ['do/does', '助动词'], ['have/has', '有']], correctAnswer: 'match', difficulty: 3 },
              { id: 'en-g-01-6', type: 'repeat', question: '跟读：I work in a school.', sentence: 'I work in a school.', correctAnswer: 'repeat', difficulty: 2 },
            ],
          },
        ],
      },
    ],
  },
  ja: {
    themes: [
      {
        id: 'basic',
        name: '基础词汇',
        color: '#EF4444',
        levels: [
          {
            levelId: 'ja-basic-01',
            title: '问候五十音',
            timeLimit: 120,
            minScoreFor1Star: 30,
            minScoreFor2Star: 50,
            minScoreFor3Star: 70,
            prerequisites: [],
            questions: [
              { id: 'ja-b-01-1', type: 'translate', question: '你好', options: ['こんにちは', 'ありがとう', 'すみません', 'おはよう'], correctAnswer: 'こんにちは', difficulty: 1 },
              { id: 'ja-b-01-2', type: 'translate', question: '谢谢', options: ['こんにちは', 'ありがとう', 'さようなら', 'はい'], correctAnswer: 'ありがとう', difficulty: 1 },
              { id: 'ja-b-01-3', type: 'fill-blank', question: '___、ございます。（早上好）', options: ['おはよう', 'こんばんは', 'おやすみ', 'ただいま'], correctAnswer: 'おはよう', difficulty: 1 },
              { id: 'ja-b-01-4', type: 'match', question: '假名配对', pairs: [['あ', 'a'], ['い', 'i'], ['う', 'u'], ['え', 'e']], correctAnswer: 'match', difficulty: 2 },
              { id: 'ja-b-01-5', type: 'dictation', question: '听写：爱', audioWord: 'ai', correctAnswer: '愛', difficulty: 2 },
              { id: 'ja-b-01-6', type: 'translate', question: '对不起', options: ['ありがとう', 'すみません', 'こんにちは', 'はい'], correctAnswer: 'すみません', difficulty: 1 },
            ],
          },
          {
            levelId: 'ja-basic-02',
            title: '数字与时间',
            timeLimit: 120,
            minScoreFor1Star: 30,
            minScoreFor2Star: 50,
            minScoreFor3Star: 70,
            prerequisites: ['ja-basic-01'],
            questions: [
              { id: 'ja-b-02-1', type: 'translate', question: '一', options: ['に', 'さん', 'いち', 'よん'], correctAnswer: 'いち', difficulty: 1 },
              { id: 'ja-b-02-2', type: 'translate', question: '今天', options: ['明日', '今日', '昨日', '毎日'], correctAnswer: '今日', difficulty: 1 },
              { id: 'ja-b-02-3', type: 'fill-blank', question: '今、何___ですか。（现在几点）', options: ['時', '分', '日', '月'], correctAnswer: '時', difficulty: 2 },
              { id: 'ja-b-02-4', type: 'match', question: '数字配对', pairs: [['いち', '一'], ['に', '二'], ['さん', '三'], ['よん', '四']], correctAnswer: 'match', difficulty: 2 },
              { id: 'ja-b-02-5', type: 'dictation', question: '听写：朋友', audioWord: 'tomodachi', correctAnswer: '友達', difficulty: 2 },
              { id: 'ja-b-02-6', type: 'translate', question: '学校', options: ['学校', '先生', '学生', '駅'], correctAnswer: '学校', difficulty: 1 },
            ],
          },
        ],
      },
    ],
  },
  yue: {
    themes: [
      {
        id: 'basic',
        name: '基础词汇',
        color: '#10B981',
        levels: [
          {
            levelId: 'yue-basic-01',
            title: '问候与礼貌',
            timeLimit: 120,
            minScoreFor1Star: 30,
            minScoreFor2Star: 50,
            minScoreFor3Star: 70,
            prerequisites: [],
            questions: [
              { id: 'yue-b-01-1', type: 'translate', question: '你好', options: ['唔该', '你好', '早晨', '早唞'], correctAnswer: '你好', difficulty: 1 },
              { id: 'yue-b-01-2', type: 'translate', question: '谢谢', options: ['唔该/多谢', '对唔住', '早晨', '系'], correctAnswer: '唔该/多谢', difficulty: 1 },
              { id: 'yue-b-01-3', type: 'fill-blank', question: '早晨，___！（早上好，老师！）', options: ['老师', '学生', '朋友', '屋企'], correctAnswer: '老师', difficulty: 1 },
              { id: 'yue-b-01-4', type: 'match', question: '粤语配对', pairs: [['早晨', '早上好'], ['早唞', '晚安'], ['多谢', '谢谢'], ['对唔住', '对不起']], correctAnswer: 'match', difficulty: 2 },
              { id: 'yue-b-01-5', type: 'translate', question: '家', options: ['屋企', '学校', '餐厅', '酒店'], correctAnswer: '屋企', difficulty: 1 },
              { id: 'yue-b-01-6', type: 'dictation', question: '听写：朋友', audioWord: '朋友', correctAnswer: '朋友', difficulty: 2 },
            ],
          },
          {
            levelId: 'yue-basic-02',
            title: '饮食与生活',
            timeLimit: 120,
            minScoreFor1Star: 30,
            minScoreFor2Star: 50,
            minScoreFor3Star: 70,
            prerequisites: ['yue-basic-01'],
            questions: [
              { id: 'yue-b-02-1', type: 'translate', question: '吃饭', options: ['食饭', '饮茶', '食嘢', '饮水'], correctAnswer: '食饭', difficulty: 1 },
              { id: 'yue-b-02-2', type: 'translate', question: '喝茶', options: ['饮水', '饮茶', '食茶', '咖啡'], correctAnswer: '饮茶', difficulty: 1 },
              { id: 'yue-b-02-3', type: 'fill-blank', question: '食咗___未？（吃饭了吗）', options: ['饭', '茶', '水', '嘢'], correctAnswer: '饭', difficulty: 2 },
              { id: 'yue-b-02-4', type: 'match', question: '饮食配对', pairs: [['食饭', '吃饭'], ['饮茶', '喝茶'], ['几多钱', '多少钱'], ['唔该晒', '非常感谢']], correctAnswer: 'match', difficulty: 2 },
              { id: 'yue-b-02-5', type: 'translate', question: '好漂亮', options: ['好靓', '好丑', '好高', '好矮'], correctAnswer: '好靓', difficulty: 1 },
              { id: 'yue-b-02-6', type: 'translate', question: '去哪里', options: ['去边度', '做乜嘢', '点解', '几时'], correctAnswer: '去边度', difficulty: 2 },
            ],
          },
        ],
      },
    ],
  },
  ko: {
    themes: [
      {
        id: 'basic',
        name: '基础词汇',
        color: '#8B5CF6',
        levels: [
          {
            levelId: 'ko-basic-01',
            title: '问候入门',
            timeLimit: 120,
            minScoreFor1Star: 30,
            minScoreFor2Star: 50,
            minScoreFor3Star: 70,
            prerequisites: [],
            questions: [
              { id: 'ko-b-01-1', type: 'translate', question: '你好', options: ['안녕하세요', '감사합니다', '미안해요', '안녕히'], correctAnswer: '안녕하세요', difficulty: 1 },
              { id: 'ko-b-01-2', type: 'translate', question: '谢谢', options: ['감사합니다', '안녕하세요', '아니요', '네'], correctAnswer: '감사합니다', difficulty: 1 },
              { id: 'ko-b-01-3', type: 'fill-blank', question: '만나서 ___습니다.（很高兴认识你）', options: ['반갑', '감사', '미안', '안녕'], correctAnswer: '반갑', difficulty: 2 },
              { id: 'ko-b-01-4', type: 'match', question: '韩语配对', pairs: [['네', '是'], ['아니요', '不是'], ['사랑', '爱'], ['친구', '朋友']], correctAnswer: 'match', difficulty: 2 },
              { id: 'ko-b-01-5', type: 'translate', question: '我爱你', options: ['사랑해요', '감사해요', '미안해요', '안녕해요'], correctAnswer: '사랑해요', difficulty: 2 },
              { id: 'ko-b-01-6', type: 'dictation', question: '听写：水', audioWord: '물', correctAnswer: '물', difficulty: 2 },
            ],
          },
        ],
      },
    ],
  },
  es: {
    themes: [
      {
        id: 'basic',
        name: '基础词汇',
        color: '#F59E0B',
        levels: [
          {
            levelId: 'es-basic-01',
            title: '问候入门',
            timeLimit: 120,
            minScoreFor1Star: 30,
            minScoreFor2Star: 50,
            minScoreFor3Star: 70,
            prerequisites: [],
            questions: [
              { id: 'es-b-01-1', type: 'translate', question: '你好', options: ['hola', 'gracias', 'adiós', 'buenos'], correctAnswer: 'hola', difficulty: 1 },
              { id: 'es-b-01-2', type: 'translate', question: '谢谢', options: ['hola', 'gracias', 'sí', 'no'], correctAnswer: 'gracias', difficulty: 1 },
              { id: 'es-b-01-3', type: 'fill-blank', question: '___ días.（早上好）', options: ['Buenos', 'Buenas', 'Buen', 'Muy'], correctAnswer: 'Buenos', difficulty: 1 },
              { id: 'es-b-01-4', type: 'match', question: '西语配对', pairs: [['hola', '你好'], ['gracias', '谢谢'], ['amor', '爱'], ['amigo', '朋友']], correctAnswer: 'match', difficulty: 2 },
              { id: 'es-b-01-5', type: 'translate', question: '我爱你', options: ['te amo', 'te quiero', 'me gusta', 'lo siento'], correctAnswer: 'te amo', difficulty: 2 },
              { id: 'es-b-01-6', type: 'dictation', question: '听写：水', audioWord: 'agua', correctAnswer: 'agua', difficulty: 2 },
            ],
          },
        ],
      },
    ],
  },
  ru: {
    themes: [
      {
        id: 'basic',
        name: '基础词汇',
        color: '#6366F1',
        levels: [
          {
            levelId: 'ru-basic-01',
            title: '问候入门',
            timeLimit: 120,
            minScoreFor1Star: 30,
            minScoreFor2Star: 50,
            minScoreFor3Star: 70,
            prerequisites: [],
            questions: [
              { id: 'ru-b-01-1', type: 'translate', question: '你好', options: ['привет', 'спасибо', 'да', 'нет'], correctAnswer: 'привет', difficulty: 1 },
              { id: 'ru-b-01-2', type: 'translate', question: '谢谢', options: ['привет', 'спасибо', 'извините', 'пока'], correctAnswer: 'спасибо', difficulty: 1 },
              { id: 'ru-b-01-3', type: 'fill-blank', question: 'Доброе ___.（早上好）', options: ['утро', 'ночи', 'день', 'вечер'], correctAnswer: 'утро', difficulty: 2 },
              { id: 'ru-b-01-4', type: 'match', question: '俄语配对', pairs: [['да', '是'], ['нет', '不是'], ['друг', '朋友'], ['семья', '家人']], correctAnswer: 'match', difficulty: 2 },
              { id: 'ru-b-01-5', type: 'translate', question: '我爱你', options: ['я люблю тебя', 'спасибо тебе', 'извините меня', 'привет тебе'], correctAnswer: 'я люблю тебя', difficulty: 2 },
              { id: 'ru-b-01-6', type: 'dictation', question: '听写：水', audioWord: 'вода', correctAnswer: 'вода', difficulty: 2 },
            ],
          },
        ],
      },
    ],
  },
  nan: {
    themes: [
      {
        id: 'basic',
        name: '基础词汇',
        color: '#F59E0B',
        levels: [
          {
            levelId: 'nan-basic-01',
            title: '问候入门',
            timeLimit: 120,
            minScoreFor1Star: 30,
            minScoreFor2Star: 50,
            minScoreFor3Star: 70,
            prerequisites: [],
            questions: [
              { id: 'nan-b-01-1', type: 'translate', question: '你好', options: ['你好', '多谢', '失礼', '早'], correctAnswer: '你好', difficulty: 1 },
              { id: 'nan-b-01-2', type: 'translate', question: '谢谢', options: ['多谢', '失礼', '感恩', '你好'], correctAnswer: '多谢', difficulty: 1 },
              { id: 'nan-b-01-3', type: 'fill-blank', question: '今___日。（今天）', options: ['仔', '明', '昨', '暗'], correctAnswer: '仔', difficulty: 2 },
              { id: 'nan-b-01-4', type: 'match', question: '闽南语配对', pairs: [['厝', '家'], ['食饭', '吃饭'], ['明仔载', '明天'], ['偌济钱', '多少钱']], correctAnswer: 'match', difficulty: 2 },
              { id: 'nan-b-01-5', type: 'translate', question: '家/房子', options: ['厝', '学校', '餐厅', '酒店'], correctAnswer: '厝', difficulty: 1 },
              { id: 'nan-b-01-6', type: 'translate', question: '真漂亮', options: ['真水', '真好', '真古锥', '真大'], correctAnswer: '真水', difficulty: 2 },
            ],
          },
        ],
      },
    ],
  },
};

// Helper: get all levels for a language
function getAllLevels(language) {
  const langData = QUIZ_DATA[language];
  if (!langData) return [];
  const levels = [];
  langData.themes.forEach(t => {
    t.levels.forEach(l => levels.push({ ...l, theme: t.id, themeName: t.name, themeColor: t.color }));
  });
  return levels;
}

// Helper: get level by id
function getLevel(language, levelId) {
  const levels = getAllLevels(language);
  return levels.find(l => l.levelId === levelId);
}

// Helper: get themes for a language
function getThemes(language) {
  const langData = QUIZ_DATA[language];
  return langData ? langData.themes : [];
}

// Merge new language quiz data
if (typeof NEW_QUIZ_DATA !== 'undefined') {
  for (const [lang, data] of Object.entries(NEW_QUIZ_DATA)) {
    QUIZ_DATA[lang] = data;
  }
}

// ========== Weekly Content Pool (4-week rotation) ==========
const WEEKLY_QUIZ_POOL = {
  0: {
    en: {
      themes: [
        {
          id: 'weekly-shop',
          name: '本周·购物与消费',
          color: '#EC4899',
          isWeekly: true,
          levels: [
            {
              levelId: 'en-shop-01',
              title: '超市购物',
              timeLimit: 120,
              minScoreFor1Star: 30, minScoreFor2Star: 50, minScoreFor3Star: 70,
              prerequisites: [],
              questions: [
                { id: 'en-s01-1', type: 'translate', question: '多少钱', options: ['How much', 'How many', 'What price', 'Which cost'], correctAnswer: 'How much', difficulty: 1 },
                { id: 'en-s01-2', type: 'translate', question: '太贵了', options: ['Too cheap', 'Too expensive', 'Very good', 'Not bad'], correctAnswer: 'Too expensive', difficulty: 1 },
                { id: 'en-s01-3', type: 'fill-blank', question: 'I want to buy some ___. 我想买一些水果。', options: ['meat', 'fruit', 'bread', 'milk'], correctAnswer: 'fruit', difficulty: 1 },
                { id: 'en-s01-4', type: 'match', question: '购物配对', pairs: [['discount', '折扣'], ['receipt', '收据'], ['cashier', '收银员'], ['change', '零钱']], correctAnswer: 'match', difficulty: 2 },
                { id: 'en-s01-5', type: 'translate', question: '可以刷卡吗', options: ['Can I pay by card?', 'Can I use cash?', 'Do you have change?', 'Is it free?'], correctAnswer: 'Can I pay by card?', difficulty: 2 },
              ],
            },
            {
              levelId: 'en-shop-02',
              title: '讨价还价',
              timeLimit: 150,
              minScoreFor1Star: 35, minScoreFor2Star: 55, minScoreFor3Star: 75,
              prerequisites: ['en-shop-01'],
              questions: [
                { id: 'en-s02-1', type: 'translate', question: '能便宜点吗', options: ['Can it be cheaper?', 'Is it expensive?', 'I like it', 'I will buy it'], correctAnswer: 'Can it be cheaper?', difficulty: 2 },
                { id: 'en-s02-2', type: 'fill-blank', question: 'Do you have any ___? 你们有打折吗？', options: ['sale', 'discount', 'offer', 'deal'], correctAnswer: 'discount', difficulty: 2 },
                { id: 'en-s02-3', type: 'translate', question: '我要这个', options: ['I want this one', 'I do not want it', 'How much is it?', 'Where is it?'], correctAnswer: 'I want this one', difficulty: 1 },
                { id: 'en-s02-4', type: 'match', question: '价格配对', pairs: [['buy one get one', '买一送一'], ['50% off', '五折'], ['out of stock', '缺货'], ['on sale', '促销']], correctAnswer: 'match', difficulty: 2 },
              ],
            },
          ],
        },
      ],
    },
    ja: {
      themes: [
        {
          id: 'weekly-verb',
          name: '本周·动词基础',
          color: '#EC4899',
          isWeekly: true,
          levels: [
            {
              levelId: 'ja-verb-01',
              title: '動詞の基本',
              timeLimit: 120,
              minScoreFor1Star: 30, minScoreFor2Star: 50, minScoreFor3Star: 70,
              prerequisites: [],
              questions: [
                { id: 'ja-v01-1', type: 'translate', question: '食べる', options: ['吃', '喝', '走', '说'], correctAnswer: '吃', difficulty: 1 },
                { id: 'ja-v01-2', type: 'translate', question: '行く', options: ['来', '去', '回', '停'], correctAnswer: '去', difficulty: 1 },
                { id: 'ja-v01-3', type: 'fill-blank', question: '本を___。（读书）', options: ['読む', '書く', '買う', '食べる'], correctAnswer: '読む', difficulty: 2 },
                { id: 'ja-v01-4', type: 'match', question: '动词配对', pairs: [['食べる', '吃'], ['飲む', '喝'], ['見る', '看'], ['聞く', '听']], correctAnswer: 'match', difficulty: 2 },
              ],
            },
            {
              levelId: 'ja-verb-02',
              title: '動詞の活用',
              timeLimit: 150,
              minScoreFor1Star: 35, minScoreFor2Star: 55, minScoreFor3Star: 75,
              prerequisites: ['ja-verb-01'],
              questions: [
                { id: 'ja-v02-1', type: 'translate', question: '食べました', options: ['吃了', '要吃', '不吃', '吃吧'], correctAnswer: '吃了', difficulty: 2 },
                { id: 'ja-v02-2', type: 'fill-blank', question: '昨日、映画を___。（昨天看了电影）', options: ['見る', '見た', '見ている', '見よう'], correctAnswer: '見た', difficulty: 2 },
                { id: 'ja-v02-3', type: 'translate', question: '行きません', options: ['不去', '去了', '去吧', '想去'], correctAnswer: '不去', difficulty: 2 },
              ],
            },
          ],
        },
      ],
    },
  },
  1: {
    en: {
      themes: [
        {
          id: 'weekly-travel',
          name: '本周·旅行用语',
          color: '#06B6D4',
          isWeekly: true,
          levels: [
            {
              levelId: 'en-travel-01',
              title: '机场与交通',
              timeLimit: 120,
              minScoreFor1Star: 30, minScoreFor2Star: 50, minScoreFor3Star: 70,
              prerequisites: [],
              questions: [
                { id: 'en-t01-1', type: 'translate', question: '登机牌', options: ['boarding pass', 'ticket', 'passport', 'visa'], correctAnswer: 'boarding pass', difficulty: 1 },
                { id: 'en-t01-2', type: 'translate', question: '行李托运', options: ['check-in luggage', 'hand luggage', 'lost luggage', 'excess baggage'], correctAnswer: 'check-in luggage', difficulty: 2 },
                { id: 'en-t01-3', type: 'fill-blank', question: 'Where is the ___? 登机口在哪里？', options: ['gate', 'door', 'window', 'exit'], correctAnswer: 'gate', difficulty: 1 },
                { id: 'en-t01-4', type: 'match', question: '机场配对', pairs: [['departure', '出发'], ['arrival', '到达'], ['terminal', '航站楼'], ['customs', '海关']], correctAnswer: 'match', difficulty: 2 },
              ],
            },
            {
              levelId: 'en-travel-02',
              title: '酒店入住',
              timeLimit: 150,
              minScoreFor1Star: 35, minScoreFor2Star: 55, minScoreFor3Star: 75,
              prerequisites: ['en-travel-01'],
              questions: [
                { id: 'en-t02-1', type: 'translate', question: '我要办理入住', options: ['I want to check in', 'I want to check out', 'I have a reservation', 'I need a room'], correctAnswer: 'I want to check in', difficulty: 1 },
                { id: 'en-t02-2', type: 'fill-blank', question: 'I have a ___. 我有预订。', options: ['reservation', 'ticket', 'passport', 'key'], correctAnswer: 'reservation', difficulty: 1 },
                { id: 'en-t02-3', type: 'translate', question: '有WiFi吗', options: ['Is there WiFi?', 'Is there TV?', 'Is there AC?', 'Is there hot water?'], correctAnswer: 'Is there WiFi?', difficulty: 1 },
                { id: 'en-t02-4', type: 'match', question: '酒店配对', pairs: [['single room', '单人间'], ['double room', '双人间'], ['room service', '客房服务'], ['wake-up call', '叫醒服务']], correctAnswer: 'match', difficulty: 2 },
              ],
            },
          ],
        },
      ],
    },
    ja: {
      themes: [
        {
          id: 'weekly-adj',
          name: '本周·形容词',
          color: '#06B6D4',
          isWeekly: true,
          levels: [
            {
              levelId: 'ja-adj-01',
              title: 'い形容詞',
              timeLimit: 120,
              minScoreFor1Star: 30, minScoreFor2Star: 50, minScoreFor3Star: 70,
              prerequisites: [],
              questions: [
                { id: 'ja-a01-1', type: 'translate', question: '大きい', options: ['大的', '小的', '新的', '旧的'], correctAnswer: '大的', difficulty: 1 },
                { id: 'ja-a01-2', type: 'translate', question: '高い', options: ['高的', '矮的', '长的', '短的'], correctAnswer: '高的', difficulty: 1 },
                { id: 'ja-a01-3', type: 'fill-blank', question: 'このケーキは___。（这个蛋糕很好吃）', options: ['おいしい', 'まずい', '高い', '大きい'], correctAnswer: 'おいしい', difficulty: 2 },
                { id: 'ja-a01-4', type: 'match', question: '形容词配对', pairs: [['高い', '高的'], ['低い', '矮的'], ['新しい', '新的'], ['古い', '旧的']], correctAnswer: 'match', difficulty: 2 },
              ],
            },
            {
              levelId: 'ja-adj-02',
              title: 'な形容詞',
              timeLimit: 150,
              minScoreFor1Star: 35, minScoreFor2Star: 55, minScoreFor3Star: 75,
              prerequisites: ['ja-adj-01'],
              questions: [
                { id: 'ja-a02-1', type: 'translate', question: 'きれい', options: ['漂亮', '丑陋', '干净', '脏'], correctAnswer: '漂亮', difficulty: 1 },
                { id: 'ja-a02-2', type: 'translate', question: '便利', options: ['方便', '麻烦', '困难', '简单'], correctAnswer: '方便', difficulty: 1 },
                { id: 'ja-a02-3', type: 'fill-blank', question: 'この町は___です。（这座城市很安静）', options: ['静か', '便利', 'きれい', '元気'], correctAnswer: '静か', difficulty: 2 },
              ],
            },
          ],
        },
      ],
    },
  },
  2: {
    en: {
      themes: [
        {
          id: 'weekly-restaurant',
          name: '本周·餐厅点餐',
          color: '#F97316',
          isWeekly: true,
          levels: [
            {
              levelId: 'en-rest-01',
              title: '点餐基础',
              timeLimit: 120,
              minScoreFor1Star: 30, minScoreFor2Star: 50, minScoreFor3Star: 70,
              prerequisites: [],
              questions: [
                { id: 'en-r01-1', type: 'translate', question: '我要点菜', options: ['I would like to order', 'I want to pay', 'I need a menu', 'Where is the restroom?'], correctAnswer: 'I would like to order', difficulty: 1 },
                { id: 'en-r01-2', type: 'translate', question: '有什么推荐', options: ['What do you recommend?', 'How much is it?', 'Is it spicy?', 'I am allergic to nuts'], correctAnswer: 'What do you recommend?', difficulty: 2 },
                { id: 'en-r01-3', type: 'fill-blank', question: 'Could I see the ___? 我能看一下菜单吗？', options: ['menu', 'bill', 'wine', 'dessert'], correctAnswer: 'menu', difficulty: 1 },
                { id: 'en-r01-4', type: 'match', question: '餐厅配对', pairs: [['appetizer', '开胃菜'], ['main course', '主菜'], ['dessert', '甜点'], ['beverage', '饮料']], correctAnswer: 'match', difficulty: 2 },
              ],
            },
            {
              levelId: 'en-rest-02',
              title: '特殊需求',
              timeLimit: 150,
              minScoreFor1Star: 35, minScoreFor2Star: 55, minScoreFor3Star: 75,
              prerequisites: ['en-rest-01'],
              questions: [
                { id: 'en-r02-1', type: 'translate', question: '我对坚果过敏', options: ['I am allergic to nuts', 'I like nuts', 'I do not like nuts', 'No nuts please'], correctAnswer: 'I am allergic to nuts', difficulty: 2 },
                { id: 'en-r02-2', type: 'fill-blank', question: 'I am ___. 我是素食者。', options: ['vegetarian', 'vegan', 'allergic', 'hungry'], correctAnswer: 'vegetarian', difficulty: 2 },
                { id: 'en-r02-3', type: 'translate', question: '请少放点辣', options: ['Less spicy, please', 'More spicy, please', 'No spice at all', 'Is this spicy?'], correctAnswer: 'Less spicy, please', difficulty: 2 },
              ],
            },
          ],
        },
      ],
    },
    ko: {
      themes: [
        {
          id: 'weekly-numtime',
          name: '本周·数字与时间',
          color: '#F97316',
          isWeekly: true,
          levels: [
            {
              levelId: 'ko-num-01',
              title: '숫자 (数字)',
              timeLimit: 120,
              minScoreFor1Star: 30, minScoreFor2Star: 50, minScoreFor3Star: 70,
              prerequisites: [],
              questions: [
                { id: 'ko-n01-1', type: 'translate', question: '하나', options: ['一', '二', '三', '四'], correctAnswer: '一', difficulty: 1 },
                { id: 'ko-n01-2', type: 'translate', question: '열', options: ['五', '十', '百', '千'], correctAnswer: '十', difficulty: 1 },
                { id: 'ko-n01-3', type: 'fill-blank', question: '___시예요.（两点）', options: ['한', '두', '세', '네'], correctAnswer: '두', difficulty: 2 },
                { id: 'ko-n01-4', type: 'match', question: '数字配对', pairs: [['하나', '一'], ['둘', '二'], ['셋', '三'], ['넷', '四']], correctAnswer: 'match', difficulty: 2 },
              ],
            },
            {
              levelId: 'ko-time-02',
              title: '시간 (时间)',
              timeLimit: 150,
              minScoreFor1Star: 35, minScoreFor2Star: 55, minScoreFor3Star: 75,
              prerequisites: ['ko-num-01'],
              questions: [
                { id: 'ko-t02-1', type: 'translate', question: '오늘', options: ['今天', '明天', '昨天', '每天'], correctAnswer: '今天', difficulty: 1 },
                { id: 'ko-t02-2', type: 'translate', question: '아침', options: ['早上', '中午', '晚上', '深夜'], correctAnswer: '早上', difficulty: 1 },
                { id: 'ko-t02-3', type: 'fill-blank', question: '___에 만나요.（下午见面）', options: ['아침', '점심', '저녁', '밤'], correctAnswer: '저녁', difficulty: 2 },
              ],
            },
          ],
        },
      ],
    },
  },
  3: {
    en: {
      themes: [
        {
          id: 'weekly-time',
          name: '本周·时间表达',
          color: '#8B5CF6',
          isWeekly: true,
          levels: [
            {
              levelId: 'en-time-01',
              title: '时间询问',
              timeLimit: 120,
              minScoreFor1Star: 30, minScoreFor2Star: 50, minScoreFor3Star: 70,
              prerequisites: [],
              questions: [
                { id: 'en-tm01-1', type: 'translate', question: '现在几点', options: ['What time is it?', 'What day is it?', 'What month is it?', 'What year is it?'], correctAnswer: 'What time is it?', difficulty: 1 },
                { id: 'en-tm01-2', type: 'translate', question: '今天星期几', options: ['What day is it today?', 'What is the date?', 'What time is it?', 'How is the weather?'], correctAnswer: 'What day is it today?', difficulty: 1 },
                { id: 'en-tm01-3', type: 'fill-blank', question: 'It is ___ o clock. 三点了。', options: ['three', 'four', 'five', 'six'], correctAnswer: 'three', difficulty: 1 },
                { id: 'en-tm01-4', type: 'match', question: '时间配对', pairs: [['morning', '早上'], ['afternoon', '下午'], ['evening', '晚上'], ['midnight', '午夜']], correctAnswer: 'match', difficulty: 2 },
              ],
            },
            {
              levelId: 'en-time-02',
              title: '预约与计划',
              timeLimit: 150,
              minScoreFor1Star: 35, minScoreFor2Star: 55, minScoreFor3Star: 75,
              prerequisites: ['en-time-01'],
              questions: [
                { id: 'en-tm02-1', type: 'translate', question: '你什么时候有空', options: ['When are you free?', 'Where are you?', 'Who are you?', 'Why are you late?'], correctAnswer: 'When are you free?', difficulty: 2 },
                { id: 'en-tm02-2', type: 'fill-blank', question: 'Let us meet at ___ . 我们六点见。', options: ['6 o clock', '6th', 'June', 'Saturday'], correctAnswer: '6 o clock', difficulty: 1 },
                { id: 'en-tm02-3', type: 'translate', question: '我迟到了', options: ['I am late', 'I am early', 'I am on time', 'I am busy'], correctAnswer: 'I am late', difficulty: 1 },
              ],
            },
          ],
        },
      ],
    },
    es: {
      themes: [
        {
          id: 'weekly-basic',
          name: '本周·基础对话',
          color: '#8B5CF6',
          isWeekly: true,
          levels: [
            {
              levelId: 'es-basic-02',
              title: 'Presentarse (自我介绍)',
              timeLimit: 120,
              minScoreFor1Star: 30, minScoreFor2Star: 50, minScoreFor3Star: 70,
              prerequisites: [],
              questions: [
                { id: 'es-b02-1', type: 'translate', question: '很高兴认识你', options: ['Mucho gusto', 'Lo siento', 'Gracias', 'Adiós'], correctAnswer: 'Mucho gusto', difficulty: 1 },
                { id: 'es-b02-2', type: 'fill-blank', question: '___ años tengo.（我25岁）', options: ['Veinticinco', 'Treinta', 'Cuarenta', 'Cincuenta'], correctAnswer: 'Veinticinco', difficulty: 2 },
                { id: 'es-b02-3', type: 'translate', question: '你叫什么名字', options: ['¿Cómo te llamas?', '¿De dónde eres?', '¿Qué tal?', '¿Por qué?'], correctAnswer: '¿Cómo te llamas?', difficulty: 1 },
                { id: 'es-b02-4', type: 'match', question: '对话配对', pairs: [['Soy de China', '我来自中国'], ['Mucho gusto', '很高兴认识你'], ['Encantado', '荣幸'], ['Hasta luego', '再见']], correctAnswer: 'match', difficulty: 2 },
              ],
            },
            {
              levelId: 'es-basic-03',
              title: 'Números (数字)',
              timeLimit: 150,
              minScoreFor1Star: 35, minScoreFor2Star: 55, minScoreFor3Star: 75,
              prerequisites: ['es-basic-02'],
              questions: [
                { id: 'es-b03-1', type: 'translate', question: 'uno', options: ['一', '二', '三', '四'], correctAnswer: '一', difficulty: 1 },
                { id: 'es-b03-2', type: 'translate', question: 'diez', options: ['五', '十', '百', '千'], correctAnswer: '十', difficulty: 1 },
                { id: 'es-b03-3', type: 'fill-blank', question: 'Son ___ euros.（十二欧元）', options: ['doce', 'dos', 'diez', 'veinte'], correctAnswer: 'doce', difficulty: 2 },
              ],
            },
          ],
        },
      ],
    },
  },
};

// Merge weekly content into base data dynamically
const _originalGetAllLevels = getAllLevels;
const _originalGetLevel = getLevel;
const _originalGetThemes = getThemes;

window.getAllLevels = function(language, weekIndex) {
  const activeWeek = weekIndex !== undefined ? weekIndex : getActiveWeek();
  const baseLevels = _originalGetAllLevels(language);
  const weeklyData = WEEKLY_QUIZ_POOL[activeWeek];
  if (!weeklyData || !weeklyData[language]) return baseLevels;
  const weeklyLevels = [];
  weeklyData[language].themes.forEach(t => {
    t.levels.forEach(l => {
      weeklyLevels.push({ ...l, theme: t.id, themeName: t.name, themeColor: t.color, isWeekly: true, weekIndex: activeWeek });
    });
  });
  return [...baseLevels, ...weeklyLevels];
};

window.getLevel = function(language, levelId) {
  const activeWeek = getActiveWeek();
  const weeklyData = WEEKLY_QUIZ_POOL[activeWeek];
  if (weeklyData && weeklyData[language]) {
    for (const theme of weeklyData[language].themes) {
      for (const level of theme.levels) {
        if (level.levelId === levelId) {
          return { ...level, theme: theme.id, themeName: theme.name, themeColor: theme.color, isWeekly: true, weekIndex: activeWeek };
        }
      }
    }
  }
  return _originalGetLevel(language, levelId);
};

window.getThemes = function(language) {
  const activeWeek = getActiveWeek();
  const baseThemes = _originalGetThemes(language);
  const weeklyData = WEEKLY_QUIZ_POOL[activeWeek];
  if (!weeklyData || !weeklyData[language]) return baseThemes;
  const weeklyThemes = weeklyData[language].themes.map(t => ({
    ...t,
    levels: t.levels.map(l => ({ ...l, isWeekly: true, weekIndex: activeWeek })),
  }));
  return [...baseThemes, ...weeklyThemes];
};

Object.assign(window, { QUIZ_DATA, getAllLevels, getLevel, getThemes, WEEKLY_QUIZ_POOL });
