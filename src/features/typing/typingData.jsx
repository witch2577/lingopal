// ========== Typing Practice Data ==========
// English: high-frequency words (course vocabulary)
// Japanese: hiragana -> Hepburn romaji (IME romaji input habit)
// Korean: hangul -> Revised Romanization (standard romanization marking)

const TYPING_PRACTICE_DATA = {
  en: {
    name: '英语',
    flag: '\uD83C\uDDFA\uD83C\uDDF8',
    description: '高频单词打字练习',
    inputMode: 'direct',
    items: [
      { id: 'en-t-01', target: 'hello', meaning: '你好', hint: 'h-e-l-l-o' },
      { id: 'en-t-02', target: 'world', meaning: '世界', hint: 'w-o-r-l-d' },
      { id: 'en-t-03', target: 'apple', meaning: '苹果', hint: 'a-p-p-l-e' },
      { id: 'en-t-04', target: 'water', meaning: '水', hint: 'w-a-t-e-r' },
      { id: 'en-t-05', target: 'bread', meaning: '面包', hint: 'b-r-e-a-d' },
      { id: 'en-t-06', target: 'friend', meaning: '朋友', hint: 'f-r-i-e-n-d' },
      { id: 'en-t-07', target: 'family', meaning: '家庭', hint: 'f-a-m-i-l-y' },
      { id: 'en-t-08', target: 'happy', meaning: '快乐', hint: 'h-a-p-p-y' },
      { id: 'en-t-09', target: 'school', meaning: '学校', hint: 's-c-h-o-o-l' },
      { id: 'en-t-10', target: 'travel', meaning: '旅行', hint: 't-r-a-v-e-l' },
    ],
  },
  ja: {
    name: '日语',
    flag: '\uD83C\uDDEF\uD83C\uDDF5',
    description: '平假名罗马音输入练习（Hepburn 式）',
    inputMode: 'romaji',
    items: [
      { id: 'ja-t-01', target: 'あ', meaning: 'a（元音）', romaji: 'a', hint: 'a' },
      { id: 'ja-t-02', target: 'い', meaning: 'i（元音）', romaji: 'i', hint: 'i' },
      { id: 'ja-t-03', target: 'か', meaning: 'ka', romaji: 'ka', hint: 'k-a' },
      { id: 'ja-t-04', target: 'さ', meaning: 'sa', romaji: 'sa', hint: 's-a' },
      { id: 'ja-t-05', target: 'た', meaning: 'ta', romaji: 'ta', hint: 't-a' },
      { id: 'ja-t-06', target: 'な', meaning: 'na', romaji: 'na', hint: 'n-a' },
      { id: 'ja-t-07', target: 'は', meaning: 'ha', romaji: 'ha', hint: 'h-a' },
      { id: 'ja-t-08', target: 'ま', meaning: 'ma', romaji: 'ma', hint: 'm-a' },
      { id: 'ja-t-09', target: 'や', meaning: 'ya', romaji: 'ya', hint: 'y-a' },
      { id: 'ja-t-10', target: 'きょ', meaning: 'kyo（拗音）', romaji: 'kyo', hint: 'k-y-o' },
    ],
  },
  ko: {
    name: '韩语',
    flag: '\uD83C\uDDF0\uD83C\uDDF7',
    description: '谚文罗马音输入练习（Revised Romanization）',
    inputMode: 'romaji',
    items: [
      { id: 'ko-t-01', target: '안', meaning: 'an（里面）', romaji: 'an', hint: 'a-n' },
      { id: 'ko-t-02', target: '녕', meaning: 'nyeong（宁）', romaji: 'nyeong', hint: 'n-y-e-o-n-g' },
      { id: 'ko-t-03', target: '하', meaning: 'ha（下）', romaji: 'ha', hint: 'h-a' },
      { id: 'ko-t-04', target: '세', meaning: 'se（世）', romaji: 'se', hint: 's-e' },
      { id: 'ko-t-05', target: '요', meaning: 'yo（ 요 ）', romaji: 'yo', hint: 'y-o' },
      { id: 'ko-t-06', target: '감', meaning: 'gam（感）', romaji: 'gam', hint: 'g-a-m' },
      { id: 'ko-t-07', target: '사', meaning: 'sa（谢/四）', romaji: 'sa', hint: 's-a' },
      { id: 'ko-t-08', target: '합', meaning: 'hap（合）', romaji: 'hap', hint: 'h-a-p' },
      { id: 'ko-t-09', target: '니', meaning: 'ni（你/ni）', romaji: 'ni', hint: 'n-i' },
      { id: 'ko-t-10', target: '다', meaning: 'da（多）', romaji: 'da', hint: 'd-a' },
    ],
  },
};

// Hepburn romaji mapping for Japanese hiragana validation
const HEPBURN_ROMAJI_MAP = {
  'あ': 'a', 'い': 'i', 'う': 'u', 'え': 'e', 'お': 'o',
  'か': 'ka', 'き': 'ki', 'く': 'ku', 'け': 'ke', 'こ': 'ko',
  'さ': 'sa', 'し': 'shi', 'す': 'su', 'せ': 'se', 'そ': 'so',
  'た': 'ta', 'ち': 'chi', 'つ': 'tsu', 'て': 'te', 'と': 'to',
  'な': 'na', 'に': 'ni', 'ぬ': 'nu', 'ね': 'ne', 'の': 'no',
  'は': 'ha', 'ひ': 'hi', 'ふ': 'fu', 'へ': 'he', 'ほ': 'ho',
  'ま': 'ma', 'み': 'mi', 'む': 'mu', 'め': 'me', 'も': 'mo',
  'や': 'ya', 'ゆ': 'yu', 'よ': 'yo',
  'ら': 'ra', 'り': 'ri', 'る': 'ru', 'れ': 're', 'ろ': 'ro',
  'わ': 'wa', 'を': 'wo', 'ん': 'n',
  'が': 'ga', 'ぎ': 'gi', 'ぐ': 'gu', 'げ': 'ge', 'ご': 'go',
  'ざ': 'za', 'じ': 'ji', 'ず': 'zu', 'ぜ': 'ze', 'ぞ': 'zo',
  'だ': 'da', 'ぢ': 'ji', 'づ': 'zu', 'で': 'de', 'ど': 'do',
  'ば': 'ba', 'び': 'bi', 'ぶ': 'bu', 'べ': 'be', 'ぼ': 'bo',
  'ぱ': 'pa', 'ぴ': 'pi', 'ぷ': 'pu', 'ぺ': 'pe', 'ぽ': 'po',
  'きゃ': 'kya', 'きゅ': 'kyu', 'きょ': 'kyo',
  'しゃ': 'sha', 'しゅ': 'shu', 'しょ': 'sho',
  'ちゃ': 'cha', 'ちゅ': 'chu', 'ちょ': 'cho',
  'にゃ': 'nya', 'にゅ': 'nyu', 'にょ': 'nyo',
  'ひゃ': 'hya', 'ひゅ': 'hyu', 'ひょ': 'hyo',
  'みゃ': 'mya', 'みゅ': 'myu', 'みょ': 'myo',
  'りゃ': 'rya', 'りゅ': 'ryu', 'りょ': 'ryo',
  'ぎゃ': 'gya', 'ぎゅ': 'gyu', 'ぎょ': 'gyo',
  'じゃ': 'ja', 'じゅ': 'ju', 'じょ': 'jo',
  'びゃ': 'bya', 'びゅ': 'byu', 'びょ': 'byo',
  'ぴゃ': 'pya', 'ぴゅ': 'pyu', 'ぴょ': 'pyo',
};

// Korean Revised Romanization mapping for common syllables
const KOREAN_ROMAJI_MAP = {
  '안': 'an', '녕': 'nyeong', '하': 'ha', '세': 'se', '요': 'yo',
  '감': 'gam', '사': 'sa', '합': 'hap', '니': 'ni', '다': 'da',
  '사랑': 'sarang', '친구': 'chin-gu', '물': 'mul', '학교': 'hak-gyo',
  '커피': 'keopi', '여행': 'yeohaeng', '한국': 'han-guk', '영어': 'yeong-eo',
  '일본': 'il-bon', '중국': 'jung-guk', '음식': 'eumsik', '책': 'chaek',
};

// Validate user input against expected answer
function validateTypingAnswer(item, userInput, language) {
  const input = (userInput || '').trim().toLowerCase();
  if (!input) return { correct: false, exact: false, message: '请输入内容' };

  if (language === 'en') {
    const expected = item.target.toLowerCase();
    const exact = input === expected;
    const correct = exact;
    return { correct, exact, message: correct ? '正确！' : `正确写法：${item.target}` };
  }

  if (language === 'ja') {
    const expected = (item.romaji || HEPBURN_ROMAJI_MAP[item.target] || item.target).toLowerCase();
    const exact = input === expected;
    // Also accept without hyphens if user types naturally
    const normalizedInput = input.replace(/-/g, '');
    const normalizedExpected = expected.replace(/-/g, '');
    const correct = exact || normalizedInput === normalizedExpected;
    return { correct, exact, message: correct ? '正确！' : `正确罗马音：${expected}` };
  }

  if (language === 'ko') {
    const expected = (item.romaji || KOREAN_ROMAJI_MAP[item.target] || item.target).toLowerCase();
    const exact = input === expected;
    const normalizedInput = input.replace(/-/g, '');
    const normalizedExpected = expected.replace(/-/g, '');
    const correct = exact || normalizedInput === normalizedExpected;
    return { correct, exact, message: correct ? '正确！' : `正确罗马音：${expected}` };
  }

  return { correct: false, exact: false, message: '未知语言' };
}

Object.assign(window, {
  TYPING_PRACTICE_DATA,
  HEPBURN_ROMAJI_MAP,
  KOREAN_ROMAJI_MAP,
  validateTypingAnswer,
});
