// ========== Listening Practice Data ==========
// 30 questions total: en 10 + ja 10 + ko 10
// Types: listen-meaning (hear word, pick meaning) + listen-word (hear word, pick spelling)
// All distractors are real vocabulary from the same language

const LISTENING_DATA = {
  en: {
    meaning: [
      {
        id: 'en-lm-01',
        audioText: 'Hello',
        question: '听到的词是什么意思？',
        options: ['你好', '再见', '谢谢', '对不起'],
        correctAnswer: '你好',
        difficulty: 1,
      },
      {
        id: 'en-lm-02',
        audioText: 'Apple',
        question: '听到的词是什么意思？',
        options: ['苹果', '香蕉', '橙子', '葡萄'],
        correctAnswer: '苹果',
        difficulty: 1,
      },
      {
        id: 'en-lm-03',
        audioText: 'Water',
        question: '听到的词是什么意思？',
        options: ['水', '茶', '咖啡', '牛奶'],
        correctAnswer: '水',
        difficulty: 1,
      },
      {
        id: 'en-lm-04',
        audioText: 'Thank you',
        question: '听到的短语是什么意思？',
        options: ['谢谢', '对不起', '请', '你好'],
        correctAnswer: '谢谢',
        difficulty: 1,
      },
      {
        id: 'en-lm-05',
        audioText: 'Friend',
        question: '听到的词是什么意思？',
        options: ['朋友', '家人', '同事', '老师'],
        correctAnswer: '朋友',
        difficulty: 2,
      },
    ],
    word: [
      {
        id: 'en-lw-01',
        audioText: 'Hello',
        question: '听到的词是哪个？',
        options: ['Hello', 'Hallo', 'Hollow', 'Yellow'],
        correctAnswer: 'Hello',
        difficulty: 1,
      },
      {
        id: 'en-lw-02',
        audioText: 'Apple',
        question: '听到的词是哪个？',
        options: ['Apple', 'Apply', 'Appeal', 'Ample'],
        correctAnswer: 'Apple',
        difficulty: 1,
      },
      {
        id: 'en-lw-03',
        audioText: 'Water',
        question: '听到的词是哪个？',
        options: ['Water', 'Waiter', 'Weather', 'Winter'],
        correctAnswer: 'Water',
        difficulty: 2,
      },
      {
        id: 'en-lw-04',
        audioText: 'Friend',
        question: '听到的词是哪个？',
        options: ['Friend', 'Fiend', 'Fried', 'Found'],
        correctAnswer: 'Friend',
        difficulty: 2,
      },
      {
        id: 'en-lw-05',
        audioText: 'Beautiful',
        question: '听到的词是哪个？',
        options: ['Beautiful', 'Beautifully', 'Beauty', 'Beatiful'],
        correctAnswer: 'Beautiful',
        difficulty: 3,
      },
    ],
  },
  ja: {
    meaning: [
      {
        id: 'ja-lm-01',
        audioText: 'こんにちは',
        question: '听到的词是什么意思？',
        options: ['你好', '再见', '谢谢', '对不起'],
        correctAnswer: '你好',
        difficulty: 1,
      },
      {
        id: 'ja-lm-02',
        audioText: 'ありがとう',
        question: '听到的词是什么意思？',
        options: ['谢谢', '对不起', '你好', '再见'],
        correctAnswer: '谢谢',
        difficulty: 1,
      },
      {
        id: 'ja-lm-03',
        audioText: 'さようなら',
        question: '听到的词是什么意思？',
        options: ['再见', '你好', '谢谢', '早上好'],
        correctAnswer: '再见',
        difficulty: 1,
      },
      {
        id: 'ja-lm-04',
        audioText: 'りんご',
        question: '听到的词是什么意思？',
        options: ['苹果', '香蕉', '橙子', '葡萄'],
        correctAnswer: '苹果',
        difficulty: 1,
      },
      {
        id: 'ja-lm-05',
        audioText: 'おはよう',
        question: '听到的词是什么意思？',
        options: ['早上好', '晚上好', '你好', '再见'],
        correctAnswer: '早上好',
        difficulty: 2,
      },
    ],
    word: [
      {
        id: 'ja-lw-01',
        audioText: 'こんにちは',
        question: '听到的词是哪个？',
        options: ['こんにちは', 'こんばんは', 'おはよう', 'さようなら'],
        correctAnswer: 'こんにちは',
        difficulty: 1,
      },
      {
        id: 'ja-lw-02',
        audioText: 'ありがとう',
        question: '听到的词是哪个？',
        options: ['ありがとう', 'すみません', 'お願い', 'どういたしまして'],
        correctAnswer: 'ありがとう',
        difficulty: 1,
      },
      {
        id: 'ja-lw-03',
        audioText: 'りんご',
        question: '听到的词是哪个？',
        options: ['りんご', 'みかん', 'ばなな', 'ぶどう'],
        correctAnswer: 'りんご',
        difficulty: 1,
      },
      {
        id: 'ja-lw-04',
        audioText: 'すみません',
        question: '听到的词是哪个？',
        options: ['すみません', 'ありがとう', 'おはよう', 'こんにちは'],
        correctAnswer: 'すみません',
        difficulty: 2,
      },
      {
        id: 'ja-lw-05',
        audioText: 'お名前は何ですか',
        question: '听到的句子是哪个？',
        options: ['お名前は何ですか', 'お元気ですか', '何時ですか', 'どこですか'],
        correctAnswer: 'お名前は何ですか',
        difficulty: 3,
      },
    ],
  },
  ko: {
    meaning: [
      {
        id: 'ko-lm-01',
        audioText: '안녕하세요',
        question: '听到的词是什么意思？',
        options: ['你好', '再见', '谢谢', '对不起'],
        correctAnswer: '你好',
        difficulty: 1,
      },
      {
        id: 'ko-lm-02',
        audioText: '감사합니다',
        question: '听到的词是什么意思？',
        options: ['谢谢', '对不起', '你好', '再见'],
        correctAnswer: '谢谢',
        difficulty: 1,
      },
      {
        id: 'ko-lm-03',
        audioText: '미안합니다',
        question: '听到的词是什么意思？',
        options: ['对不起', '谢谢', '你好', '再见'],
        correctAnswer: '对不起',
        difficulty: 1,
      },
      {
        id: 'ko-lm-04',
        audioText: '사과',
        question: '听到的词是什么意思？',
        options: ['苹果', '香蕉', '橙子', '葡萄'],
        correctAnswer: '苹果',
        difficulty: 1,
      },
      {
        id: 'ko-lm-05',
        audioText: '물',
        question: '听到的词是什么意思？',
        options: ['水', '茶', '咖啡', '牛奶'],
        correctAnswer: '水',
        difficulty: 1,
      },
    ],
    word: [
      {
        id: 'ko-lw-01',
        audioText: '안녕하세요',
        question: '听到的词是哪个？',
        options: ['안녕하세요', '감사합니다', '미안합니다', '잘 가요'],
        correctAnswer: '안녕하세요',
        difficulty: 1,
      },
      {
        id: 'ko-lw-02',
        audioText: '감사합니다',
        question: '听到的词是哪个？',
        options: ['감사합니다', '안녕하세요', '미안합니다', '사랑해요'],
        correctAnswer: '감사합니다',
        difficulty: 1,
      },
      {
        id: 'ko-lw-03',
        audioText: '사과',
        question: '听到的词是哪个？',
        options: ['사과', '바나나', '오렌지', '포도'],
        correctAnswer: '사과',
        difficulty: 1,
      },
      {
        id: 'ko-lw-04',
        audioText: '화장실',
        question: '听到的词是哪个？',
        options: ['화장실', '학교', '병원', '식당'],
        correctAnswer: '화장실',
        difficulty: 2,
      },
      {
        id: 'ko-lw-05',
        audioText: '맛있어요',
        question: '听到的词是哪个？',
        options: ['맛있어요', '예뻐요', '커요', '작아요'],
        correctAnswer: '맛있어요',
        difficulty: 3,
      },
    ],
  },
};

// Helper: get shuffled questions for a language
function getListeningQuestions(lang, type) {
  const data = LISTENING_DATA[lang];
  if (!data) return [];
  if (type === 'all') {
    const all = [...(data.meaning || []), ...(data.word || [])];
    return all.sort(() => Math.random() - 0.5);
  }
  return (data[type] || []).sort(() => Math.random() - 0.5);
}

Object.assign(window, { LISTENING_DATA, getListeningQuestions });
