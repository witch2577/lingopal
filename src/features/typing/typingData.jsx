// ========== Typing Practice Data ==========
// 24 languages coverage: 18 general + 6 dialects
// Latin-script langs: direct input
// Non-Latin langs: romaji/pinyin input
// Dialects: romanization per linguistic standards

const TYPING_PRACTICE_DATA = {
  'en': {
    name: '英语',
    flag: '🇺🇸',
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
      { id: 'en-t-11', target: 'hotel', meaning: '酒店', hint: 'h-o-t-e-l' },
      { id: 'en-t-12', target: 'thanks', meaning: '谢谢', hint: 't-h-a-n-k-s' },
    ],
  },
  'es': {
    name: '西班牙语',
    flag: '🇪🇸',
    description: '西班牙语单词打字练习',
    inputMode: 'direct',
    items: [
      { id: 'es-t-01', target: 'hola', meaning: '你好', hint: 'h-o-l-a' },
      { id: 'es-t-02', target: 'gracias', meaning: '谢谢', hint: 'g-r-a-c-i-a-s' },
      { id: 'es-t-03', target: 'agua', meaning: '水', hint: 'a-g-u-a' },
      { id: 'es-t-04', target: 'casa', meaning: '房子', hint: 'c-a-s-a' },
      { id: 'es-t-05', target: 'amigo', meaning: '朋友', hint: 'a-m-i-g-o' },
      { id: 'es-t-06', target: 'comida', meaning: '食物', hint: 'c-o-m-i-d-a' },
      { id: 'es-t-07', target: 'libro', meaning: '书', hint: 'l-i-b-r-o' },
      { id: 'es-t-08', target: 'tiempo', meaning: '时间', hint: 't-i-e-m-p-o' },
      { id: 'es-t-09', target: 'buenos dias', meaning: '早上好', hint: 'b-u-e-n-o-s  d-i-a-s' },
      { id: 'es-t-10', target: 'por favor', meaning: '请', hint: 'p-o-r  f-a-v-o-r' },
      { id: 'es-t-11', target: 'adios', meaning: '再见', hint: 'a-d-i-o-s' },
      { id: 'es-t-12', target: 'donde esta', meaning: '在哪里', hint: 'd-o-n-d-e  e-s-t-a' },
    ],
  },
  'de': {
    name: '德语',
    flag: '🇩🇪',
    description: '德语单词打字练习',
    inputMode: 'direct',
    items: [
      { id: 'de-t-01', target: 'Hallo', meaning: '你好', hint: 'H-a-l-l-o' },
      { id: 'de-t-02', target: 'Danke', meaning: '谢谢', hint: 'D-a-n-k-e' },
      { id: 'de-t-03', target: 'Wasser', meaning: '水', hint: 'W-a-s-s-e-r' },
      { id: 'de-t-04', target: 'Haus', meaning: '房子', hint: 'H-a-u-s' },
      { id: 'de-t-05', target: 'Freund', meaning: '朋友', hint: 'F-r-e-u-n-d' },
      { id: 'de-t-06', target: 'Essen', meaning: '食物', hint: 'E-s-s-e-n' },
      { id: 'de-t-07', target: 'Buch', meaning: '书', hint: 'B-u-c-h' },
      { id: 'de-t-08', target: 'Zeit', meaning: '时间', hint: 'Z-e-i-t' },
      { id: 'de-t-09', target: 'Guten Morgen', meaning: '早上好', hint: 'G-u-t-e-n  M-o-r-g-e-n' },
      { id: 'de-t-10', target: 'Auf Wiedersehen', meaning: '再见', hint: 'A-u-f  W-i-e-d-e-r-s-e-h-e-n' },
      { id: 'de-t-11', target: 'Entschuldigung', meaning: '对不起', hint: 'E-n-t-s-c-h-u-l-d-i-g-u-n-g' },
      { id: 'de-t-12', target: 'Wo ist', meaning: '在哪里', hint: 'W-o  i-s-t' },
    ],
  },
  'fr': {
    name: '法语',
    flag: '🇫🇷',
    description: '法语单词打字练习',
    inputMode: 'direct',
    items: [
      { id: 'fr-t-01', target: 'Bonjour', meaning: '你好', hint: 'B-o-n-j-o-u-r' },
      { id: 'fr-t-02', target: 'Merci', meaning: '谢谢', hint: 'M-e-r-c-i' },
      { id: 'fr-t-03', target: 'eau', meaning: '水', hint: 'e-a-u' },
      { id: 'fr-t-04', target: 'maison', meaning: '房子', hint: 'm-a-i-s-o-n' },
      { id: 'fr-t-05', target: 'ami', meaning: '朋友', hint: 'a-m-i' },
      { id: 'fr-t-06', target: 'nourriture', meaning: '食物', hint: 'n-o-u-r-r-i-t-u-r-e' },
      { id: 'fr-t-07', target: 'livre', meaning: '书', hint: 'l-i-v-r-e' },
      { id: 'fr-t-08', target: 'temps', meaning: '时间', hint: 't-e-m-p-s' },
      { id: 'fr-t-09', target: 'Bonsoir', meaning: '晚上好', hint: 'B-o-n-s-o-i-r' },
      { id: 'fr-t-10', target: 'Au revoir', meaning: '再见', hint: 'A-u  r-e-v-o-i-r' },
      { id: 'fr-t-11', target: 'Excusez-moi', meaning: '对不起', hint: 'E-x-c-u-s-e-z-m-o-i' },
      { id: 'fr-t-12', target: 'Ou est', meaning: '在哪里', hint: 'O-u  e-s-t' },
    ],
  },
  'it': {
    name: '意大利语',
    flag: '🇮🇹',
    description: '意大利语单词打字练习',
    inputMode: 'direct',
    items: [
      { id: 'it-t-01', target: 'Ciao', meaning: '你好/再见', hint: 'C-i-a-o' },
      { id: 'it-t-02', target: 'Grazie', meaning: '谢谢', hint: 'G-r-a-z-i-e' },
      { id: 'it-t-03', target: 'acqua', meaning: '水', hint: 'a-c-c-u-a' },
      { id: 'it-t-04', target: 'casa', meaning: '房子', hint: 'c-a-s-a' },
      { id: 'it-t-05', target: 'amico', meaning: '朋友', hint: 'a-m-i-c-o' },
      { id: 'it-t-06', target: 'cibo', meaning: '食物', hint: 'c-i-b-o' },
      { id: 'it-t-07', target: 'libro', meaning: '书', hint: 'l-i-b-r-o' },
      { id: 'it-t-08', target: 'tempo', meaning: '时间', hint: 't-e-m-p-o' },
      { id: 'it-t-09', target: 'Buongiorno', meaning: '早上好', hint: 'B-u-o-n-g-i-o-r-n-o' },
      { id: 'it-t-10', target: 'Arrivederci', meaning: '再见', hint: 'A-r-r-i-v-e-d-e-r-c-i' },
      { id: 'it-t-11', target: 'Scusi', meaning: '对不起', hint: 'S-c-u-s-i' },
      { id: 'it-t-12', target: 'Dove e', meaning: '在哪里', hint: 'D-o-v-e  e' },
    ],
  },
  'pt': {
    name: '葡萄牙语',
    flag: '🇵🇹',
    description: '葡萄牙语单词打字练习',
    inputMode: 'direct',
    items: [
      { id: 'pt-t-01', target: 'Ola', meaning: '你好', hint: 'O-l-a' },
      { id: 'pt-t-02', target: 'Obrigado', meaning: '谢谢', hint: 'O-b-r-i-g-a-d-o' },
      { id: 'pt-t-03', target: 'agua', meaning: '水', hint: 'a-g-u-a' },
      { id: 'pt-t-04', target: 'casa', meaning: '房子', hint: 'c-a-s-a' },
      { id: 'pt-t-05', target: 'amigo', meaning: '朋友', hint: 'a-m-i-g-o' },
      { id: 'pt-t-06', target: 'comida', meaning: '食物', hint: 'c-o-m-i-d-a' },
      { id: 'pt-t-07', target: 'livro', meaning: '书', hint: 'l-i-v-r-o' },
      { id: 'pt-t-08', target: 'tempo', meaning: '时间', hint: 't-e-m-p-o' },
      { id: 'pt-t-09', target: 'Bom dia', meaning: '早上好', hint: 'B-o-m  d-i-a' },
      { id: 'pt-t-10', target: 'Adeus', meaning: '再见', hint: 'A-d-e-u-s' },
      { id: 'pt-t-11', target: 'Desculpe', meaning: '对不起', hint: 'D-e-s-c-u-l-p-e' },
      { id: 'pt-t-12', target: 'Onde esta', meaning: '在哪里', hint: 'O-n-d-e  e-s-t-a' },
    ],
  },
  'nl': {
    name: '荷兰语',
    flag: '🇳🇱',
    description: '荷兰语单词打字练习',
    inputMode: 'direct',
    items: [
      { id: 'nl-t-01', target: 'Hallo', meaning: '你好', hint: 'H-a-l-l-o' },
      { id: 'nl-t-02', target: 'Dank je', meaning: '谢谢', hint: 'D-a-n-k  j-e' },
      { id: 'nl-t-03', target: 'water', meaning: '水', hint: 'w-a-t-e-r' },
      { id: 'nl-t-04', target: 'huis', meaning: '房子', hint: 'h-u-i-s' },
      { id: 'nl-t-05', target: 'vriend', meaning: '朋友', hint: 'v-r-i-e-n-d' },
      { id: 'nl-t-06', target: 'eten', meaning: '食物', hint: 'e-t-e-n' },
      { id: 'nl-t-07', target: 'boek', meaning: '书', hint: 'b-o-e-k' },
      { id: 'nl-t-08', target: 'tijd', meaning: '时间', hint: 't-i-j-d' },
      { id: 'nl-t-09', target: 'Goedemorgen', meaning: '早上好', hint: 'G-o-e-d-e-m-o-r-g-e-n' },
      { id: 'nl-t-10', target: 'Tot ziens', meaning: '再见', hint: 'T-o-t  z-i-e-n-s' },
      { id: 'nl-t-11', target: 'Sorry', meaning: '对不起', hint: 'S-o-r-r-y' },
      { id: 'nl-t-12', target: 'Waar is', meaning: '在哪里', hint: 'W-a-a-r  i-s' },
    ],
  },
  'pl': {
    name: '波兰语',
    flag: '🇵🇱',
    description: '波兰语单词打字练习',
    inputMode: 'direct',
    items: [
      { id: 'pl-t-01', target: 'Czesc', meaning: '你好', hint: 'C-z-e-s-c' },
      { id: 'pl-t-02', target: 'Dziekuje', meaning: '谢谢', hint: 'D-z-i-e-k-u-j-e' },
      { id: 'pl-t-03', target: 'woda', meaning: '水', hint: 'w-o-d-a' },
      { id: 'pl-t-04', target: 'dom', meaning: '房子', hint: 'd-o-m' },
      { id: 'pl-t-05', target: 'przyjaciel', meaning: '朋友', hint: 'p-r-z-y-j-a-c-i-e-l' },
      { id: 'pl-t-06', target: 'jedzenie', meaning: '食物', hint: 'j-e-d-z-e-n-i-e' },
      { id: 'pl-t-07', target: 'ksiazka', meaning: '书', hint: 'k-s-i-a-z-k-a' },
      { id: 'pl-t-08', target: 'czas', meaning: '时间', hint: 'c-z-a-s' },
      { id: 'pl-t-09', target: 'Dzien dobry', meaning: '早上好', hint: 'D-z-i-e-n  d-o-b-r-y' },
      { id: 'pl-t-10', target: 'Do widzenia', meaning: '再见', hint: 'D-o  w-i-d-z-e-n-i-a' },
      { id: 'pl-t-11', target: 'Przepraszam', meaning: '对不起', hint: 'P-r-z-e-p-r-a-s-z-a-m' },
      { id: 'pl-t-12', target: 'Gdzie jest', meaning: '在哪里', hint: 'G-d-z-i-e  j-e-s-t' },
    ],
  },
  'tr': {
    name: '土耳其语',
    flag: '🇹🇷',
    description: '土耳其语单词打字练习',
    inputMode: 'direct',
    items: [
      { id: 'tr-t-01', target: 'Merhaba', meaning: '你好', hint: 'M-e-r-h-a-b-a' },
      { id: 'tr-t-02', target: 'Tesekkurler', meaning: '谢谢', hint: 'T-e-s-e-k-k-u-r-l-e-r' },
      { id: 'tr-t-03', target: 'su', meaning: '水', hint: 's-u' },
      { id: 'tr-t-04', target: 'ev', meaning: '房子', hint: 'e-v' },
      { id: 'tr-t-05', target: 'arkadas', meaning: '朋友', hint: 'a-r-k-a-d-a-s' },
      { id: 'tr-t-06', target: 'yemek', meaning: '食物', hint: 'y-e-m-e-k' },
      { id: 'tr-t-07', target: 'kitap', meaning: '书', hint: 'k-i-t-a-p' },
      { id: 'tr-t-08', target: 'zaman', meaning: '时间', hint: 'z-a-m-a-n' },
      { id: 'tr-t-09', target: 'Gunaydin', meaning: '早上好', hint: 'G-u-n-a-y-d-i-n' },
      { id: 'tr-t-10', target: 'Hoscakal', meaning: '再见', hint: 'H-o-s-c-a-k-a-l' },
      { id: 'tr-t-11', target: 'Ozur dilerim', meaning: '对不起', hint: 'O-z-u-r  d-i-l-e-r-i-m' },
      { id: 'tr-t-12', target: 'Nerede', meaning: '在哪里', hint: 'N-e-r-e-d-e' },
    ],
  },
  'vi': {
    name: '越南语',
    flag: '🇻🇳',
    description: '越南语单词打字练习',
    inputMode: 'direct',
    items: [
      { id: 'vi-t-01', target: 'Xin chao', meaning: '你好', hint: 'X-i-n  c-h-a-o' },
      { id: 'vi-t-02', target: 'Cam on', meaning: '谢谢', hint: 'C-a-m  o-n' },
      { id: 'vi-t-03', target: 'nuoc', meaning: '水', hint: 'n-u-o-c' },
      { id: 'vi-t-04', target: 'nha', meaning: '房子', hint: 'n-h-a' },
      { id: 'vi-t-05', target: 'ban', meaning: '朋友', hint: 'b-a-n' },
      { id: 'vi-t-06', target: 'do an', meaning: '食物', hint: 'd-o  a-n' },
      { id: 'vi-t-07', target: 'sach', meaning: '书', hint: 's-a-c-h' },
      { id: 'vi-t-08', target: 'thoi gian', meaning: '时间', hint: 't-h-o-i  g-i-a-n' },
      { id: 'vi-t-09', target: 'Chao buoi sang', meaning: '早上好', hint: 'C-h-a-o  b-u-o-i  s-a-n-g' },
      { id: 'vi-t-10', target: 'Tam biet', meaning: '再见', hint: 'T-a-m  b-i-e-t' },
      { id: 'vi-t-11', target: 'Xin loi', meaning: '对不起', hint: 'X-i-n  l-o-i' },
      { id: 'vi-t-12', target: 'O dau', meaning: '在哪里', hint: 'O  d-a-u' },
    ],
  },
  'ja': {
    name: '日语',
    flag: '🇯🇵',
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
      { id: 'ja-t-11', target: 'こんにちは', meaning: '你好', romaji: 'konnichiwa', hint: 'k-o-n-n-i-c-h-i-w-a' },
      { id: 'ja-t-12', target: 'ありがとう', meaning: '谢谢', romaji: 'arigatou', hint: 'a-r-i-g-a-t-o-u' },
    ],
  },
  'ko': {
    name: '韩语',
    flag: '🇰🇷',
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
      { id: 'ko-t-11', target: '사랑', meaning: '爱', romaji: 'sarang', hint: 's-a-r-a-n-g' },
      { id: 'ko-t-12', target: '친구', meaning: '朋友', romaji: 'chin-gu', hint: 'c-h-i-n-g-u' },
    ],
  },
  'ru': {
    name: '俄语',
    flag: '🇷🇺',
    description: '俄语罗马音输入练习（BGN/PCGN 简化罗马化）',
    inputMode: 'romaji',
    items: [
      { id: 'ru-t-01', target: 'привет', meaning: '你好', romaji: 'privet', hint: 'p-r-i-v-e-t' },
      { id: 'ru-t-02', target: 'спасибо', meaning: '谢谢', romaji: 'spasibo', hint: 's-p-a-s-i-b-o' },
      { id: 'ru-t-03', target: 'вода', meaning: '水', romaji: 'voda', hint: 'v-o-d-a' },
      { id: 'ru-t-04', target: 'дом', meaning: '房子', romaji: 'dom', hint: 'd-o-m' },
      { id: 'ru-t-05', target: 'друг', meaning: '朋友', romaji: 'drug', hint: 'd-r-u-g' },
      { id: 'ru-t-06', target: 'еда', meaning: '食物', romaji: 'yeda', hint: 'y-e-d-a' },
      { id: 'ru-t-07', target: 'книга', meaning: '书', romaji: 'kniga', hint: 'k-n-i-g-a' },
      { id: 'ru-t-08', target: 'время', meaning: '时间', romaji: 'vremya', hint: 'v-r-e-m-y-a' },
      { id: 'ru-t-09', target: 'доброе утро', meaning: '早上好', romaji: 'dobroye utro', hint: 'd-o-b-r-o-y-e  u-t-r-o' },
      { id: 'ru-t-10', target: 'до свидания', meaning: '再见', romaji: 'do svidaniya', hint: 'd-o  s-v-i-d-a-n-i-y-a' },
      { id: 'ru-t-11', target: 'извините', meaning: '对不起', romaji: 'izvinite', hint: 'i-z-v-i-n-i-t-e' },
      { id: 'ru-t-12', target: 'где', meaning: '在哪里', romaji: 'gde', hint: 'g-d-e' },
    ],
  },
  'ar': {
    name: '阿拉伯语',
    flag: '🇸🇦',
    description: '阿拉伯语罗马音输入练习（ALA-LC 简化罗马化）',
    inputMode: 'romaji',
    items: [
      { id: 'ar-t-01', target: 'مرحبا', meaning: '你好', romaji: 'marhaban', hint: 'm-a-r-h-a-b-a-n' },
      { id: 'ar-t-02', target: 'شكرا', meaning: '谢谢', romaji: 'shukran', hint: 's-h-u-k-r-a-n' },
      { id: 'ar-t-03', target: 'ماء', meaning: '水', romaji: 'maa', hint: 'm-a-a' },
      { id: 'ar-t-04', target: 'بيت', meaning: '房子', romaji: 'bayt', hint: 'b-a-y-t' },
      { id: 'ar-t-05', target: 'صديق', meaning: '朋友', romaji: 'sadiq', hint: 's-a-d-i-q' },
      { id: 'ar-t-06', target: 'طعام', meaning: '食物', romaji: 'taam', hint: 't-a-a-m' },
      { id: 'ar-t-07', target: 'كتاب', meaning: '书', romaji: 'kitab', hint: 'k-i-t-a-b' },
      { id: 'ar-t-08', target: 'وقت', meaning: '时间', romaji: 'waqt', hint: 'w-a-q-t' },
      { id: 'ar-t-09', target: 'صباح الخير', meaning: '早上好', romaji: 'sabah al-khayr', hint: 's-a-b-a-h  a-l-k-h-a-y-r' },
      { id: 'ar-t-10', target: 'مع السلامة', meaning: '再见', romaji: 'ma assalama', hint: 'm-a  a-s-s-a-l-a-m-a' },
      { id: 'ar-t-11', target: 'آسف', meaning: '对不起', romaji: 'asif', hint: 'a-s-i-f' },
      { id: 'ar-t-12', target: 'أين', meaning: '在哪里', romaji: 'ayn', hint: 'a-y-n' },
    ],
  },
  'hi': {
    name: '印地语',
    flag: '🇮🇳',
    description: '印地语罗马音输入练习（IAST 简化罗马化）',
    inputMode: 'romaji',
    items: [
      { id: 'hi-t-01', target: 'नमस्ते', meaning: '你好', romaji: 'namaste', hint: 'n-a-m-a-s-t-e' },
      { id: 'hi-t-02', target: 'धन्यवाद', meaning: '谢谢', romaji: 'dhanyavad', hint: 'd-h-a-n-y-a-v-a-d' },
      { id: 'hi-t-03', target: 'पानी', meaning: '水', romaji: 'pani', hint: 'p-a-n-i' },
      { id: 'hi-t-04', target: 'घर', meaning: '房子', romaji: 'ghar', hint: 'g-h-a-r' },
      { id: 'hi-t-05', target: 'दोस्त', meaning: '朋友', romaji: 'dost', hint: 'd-o-s-t' },
      { id: 'hi-t-06', target: 'खाना', meaning: '食物', romaji: 'khana', hint: 'k-h-a-n-a' },
      { id: 'hi-t-07', target: 'किताब', meaning: '书', romaji: 'kitab', hint: 'k-i-t-a-b' },
      { id: 'hi-t-08', target: 'समय', meaning: '时间', romaji: 'samay', hint: 's-a-m-a-y' },
      { id: 'hi-t-09', target: 'सुप्रभात', meaning: '早上好', romaji: 'suprabhat', hint: 's-u-p-r-a-b-h-a-t' },
      { id: 'hi-t-10', target: 'अलविदा', meaning: '再见', romaji: 'alvida', hint: 'a-l-v-i-d-a' },
      { id: 'hi-t-11', target: 'माफ़ करना', meaning: '对不起', romaji: 'maaf karna', hint: 'm-a-a-f  k-a-r-n-a' },
      { id: 'hi-t-12', target: 'कहाँ', meaning: '在哪里', romaji: 'kahan', hint: 'k-a-h-a-n' },
    ],
  },
  'th': {
    name: '泰语',
    flag: '🇹🇭',
    description: '泰语罗马音输入练习（RTGS 皇家转写通用系统）',
    inputMode: 'romaji',
    items: [
      { id: 'th-t-01', target: 'สวัสดี', meaning: '你好', romaji: 'sawatdi', hint: 's-a-w-a-t-d-i' },
      { id: 'th-t-02', target: 'ขอบคุณ', meaning: '谢谢', romaji: 'khobkhun', hint: 'kh-o-p-kh-u-n' },
      { id: 'th-t-03', target: 'น้ำ', meaning: '水', romaji: 'nam', hint: 'n-a-m' },
      { id: 'th-t-04', target: 'บ้าน', meaning: '房子', romaji: 'ban', hint: 'b-a-n' },
      { id: 'th-t-05', target: 'เพื่อน', meaning: '朋友', romaji: 'phuean', hint: 'ph-u-e-a-n' },
      { id: 'th-t-06', target: 'อาหาร', meaning: '食物', romaji: 'ahan', hint: 'a-h-a-n' },
      { id: 'th-t-07', target: 'หนังสือ', meaning: '书', romaji: 'nangsu', hint: 'n-a-n-g-s-u-e' },
      { id: 'th-t-08', target: 'เวลา', meaning: '时间', romaji: 'wela', hint: 'w-e-l-a' },
      { id: 'th-t-09', target: 'สวัสดีตอนเช้า', meaning: '早上好', romaji: 'sawatdi ton chao', hint: 's-a-w-a-t-d-i  t-o-n  ch-a-o' },
      { id: 'th-t-10', target: 'ลาก่อน', meaning: '再见', romaji: 'la khon', hint: 'l-a  kh-o-n' },
      { id: 'th-t-11', target: 'ขอโทษ', meaning: '对不起', romaji: 'khotthot', hint: 'kh-o-t-th-o-t' },
      { id: 'th-t-12', target: 'อยู่ที่ไหน', meaning: '在哪里', romaji: 'yu thi nai', hint: 'y-u  th-i  n-a-i' },
    ],
  },
  'el': {
    name: '希腊语',
    flag: '🇬🇷',
    description: '希腊语罗马音输入练习（现代希腊语 ELOT 743 罗马化）',
    inputMode: 'romaji',
    items: [
      { id: 'el-t-01', target: 'γεια σου', meaning: '你好', romaji: 'gia sou', hint: 'g-i-a  s-o-u' },
      { id: 'el-t-02', target: 'ευχαριστώ', meaning: '谢谢', romaji: 'efcharisto', hint: 'e-f-ch-a-r-i-s-t-o' },
      { id: 'el-t-03', target: 'νερό', meaning: '水', romaji: 'nero', hint: 'n-e-r-o' },
      { id: 'el-t-04', target: 'σπίτι', meaning: '房子', romaji: 'spiti', hint: 's-p-i-t-i' },
      { id: 'el-t-05', target: 'φίλος', meaning: '朋友', romaji: 'filos', hint: 'f-i-l-o-s' },
      { id: 'el-t-06', target: 'φαγητό', meaning: '食物', romaji: 'fagito', hint: 'f-a-g-i-t-o' },
      { id: 'el-t-07', target: 'βιβλίο', meaning: '书', romaji: 'vivlio', hint: 'v-i-v-l-i-o' },
      { id: 'el-t-08', target: 'ώρα', meaning: '时间', romaji: 'ora', hint: 'o-r-a' },
      { id: 'el-t-09', target: 'καλημέρα', meaning: '早上好', romaji: 'kalimera', hint: 'k-a-l-i-m-e-r-a' },
      { id: 'el-t-10', target: 'αντίο', meaning: '再见', romaji: 'antio', hint: 'a-n-t-i-o' },
      { id: 'el-t-11', target: 'συγγνώμη', meaning: '对不起', romaji: 'syngnomi', hint: 's-y-n-g-n-o-m-i' },
      { id: 'el-t-12', target: 'πού είναι', meaning: '在哪里', romaji: 'pou ine', hint: 'p-o-u  i-n-e' },
    ],
  },
  'zh-CN': {
    name: '中文',
    flag: '🇨🇳',
    description: '中文拼音打字练习（汉语拼音）',
    inputMode: 'romaji',
    items: [
      { id: 'zh-t-01', target: '你好', meaning: 'hello', romaji: 'nihao', hint: 'n-i-h-a-o' },
      { id: 'zh-t-02', target: '谢谢', meaning: 'thanks', romaji: 'xiexie', hint: 'x-i-e-x-i-e' },
      { id: 'zh-t-03', target: '水', meaning: 'water', romaji: 'shui', hint: 's-h-u-i' },
      { id: 'zh-t-04', target: '房子', meaning: 'house', romaji: 'fangzi', hint: 'f-a-n-g-z-i' },
      { id: 'zh-t-05', target: '朋友', meaning: 'friend', romaji: 'pengyou', hint: 'p-e-n-g-y-o-u' },
      { id: 'zh-t-06', target: '食物', meaning: 'food', romaji: 'shiwu', hint: 's-h-i-w-u' },
      { id: 'zh-t-07', target: '书', meaning: 'book', romaji: 'shu', hint: 's-h-u' },
      { id: 'zh-t-08', target: '时间', meaning: 'time', romaji: 'shijian', hint: 's-h-i-j-i-a-n' },
      { id: 'zh-t-09', target: '早上好', meaning: 'good morning', romaji: 'zaoshanghao', hint: 'z-a-o-s-h-a-n-g-h-a-o' },
      { id: 'zh-t-10', target: '再见', meaning: 'goodbye', romaji: 'zaijian', hint: 'z-a-i-j-i-a-n' },
      { id: 'zh-t-11', target: '对不起', meaning: 'sorry', romaji: 'duibuqi', hint: 'd-u-i-b-u-q-i' },
      { id: 'zh-t-12', target: '在哪里', meaning: 'where', romaji: 'zainali', hint: 'z-a-i-n-a-l-i' },
    ],
  },
  'yue': {
    name: '粤语',
    flag: '🟢',
    description: '粤语拼音打字练习（粤拼 Jyutping）',
    inputMode: 'romaji',
    items: [
      { id: 'yue-t-01', target: '你好', meaning: '你好', romaji: 'nei5 hou2', hint: 'n-e-i-5  h-o-u-2' },
      { id: 'yue-t-02', target: '多谢', meaning: '谢谢', romaji: 'do1 ze6', hint: 'd-o-1  z-e-6' },
      { id: 'yue-t-03', target: '水', meaning: '水', romaji: 'seoi2', hint: 's-e-o-i-2' },
      { id: 'yue-t-04', target: '屋企', meaning: '家/房子', romaji: 'uk1 kei2', hint: 'u-k-1  k-e-i-2' },
      { id: 'yue-t-05', target: '朋友', meaning: '朋友', romaji: 'pang4 jau5', hint: 'p-a-n-g-4  j-a-u-5' },
      { id: 'yue-t-06', target: '食嘢', meaning: '吃东西', romaji: 'sik6 je5', hint: 's-i-k-6  j-e-5' },
      { id: 'yue-t-07', target: '书', meaning: '书', romaji: 'syu1', hint: 's-y-u-1' },
      { id: 'yue-t-08', target: '时间', meaning: '时间', romaji: 'si4 gaan3', hint: 's-i-4  g-a-a-n-3' },
      { id: 'yue-t-09', target: '早晨', meaning: '早上好', romaji: 'zou2 san4', hint: 'z-o-u-2  s-a-n-4' },
      { id: 'yue-t-10', target: '再见', meaning: '再见', romaji: 'zoi3 gin3', hint: 'z-o-i-3  g-i-n-3' },
      { id: 'yue-t-11', target: '对唔住', meaning: '对不起', romaji: 'deoi3 m4 zyu6', hint: 'd-e-o-i-3  m-4  z-y-u-6' },
      { id: 'yue-t-12', target: '喺边度', meaning: '在哪里', romaji: 'hai2 bin1 dou6', hint: 'h-a-i-2  b-i-n-1  d-o-u-6' },
    ],
  },
  'nan': {
    name: '闽南语',
    flag: '🟠',
    description: '闽南语拼音打字练习（台罗拼音 Tâi-lô）',
    inputMode: 'romaji',
    items: [
      { id: 'nan-t-01', target: '你好', meaning: '你好', romaji: 'lí-hó', hint: 'l-í-h-ó' },
      { id: 'nan-t-02', target: '多谢', meaning: '谢谢', romaji: 'tō-siā', hint: 't-ō-s-i-ā' },
      { id: 'nan-t-03', target: '水', meaning: '水', romaji: 'tsuí', hint: 't-s-u-í' },
      { id: 'nan-t-04', target: '厝', meaning: '房子', romaji: 'tshù', hint: 't-s-h-ù' },
      { id: 'nan-t-05', target: '朋友', meaning: '朋友', romaji: 'pîng-iú', hint: 'p-î-n-g-i-ú' },
      { id: 'nan-t-06', target: '食饭', meaning: '吃饭', romaji: 'tsia̍h-pn̄g', hint: 't-s-i-a̍-h-p-n̄-g' },
      { id: 'nan-t-07', target: '册', meaning: '书', romaji: 'tsheh', hint: 't-s-h-e-h' },
      { id: 'nan-t-08', target: '时间', meaning: '时间', romaji: 'sî-kan', hint: 's-î-k-a-n' },
      { id: 'nan-t-09', target: '早安', meaning: '早上好', romaji: 'tsá-an', hint: 't-s-á-a-n' },
      { id: 'nan-t-10', target: '再会', meaning: '再见', romaji: 'tsài-huē', hint: 't-s-à-i-h-u-ē' },
      { id: 'nan-t-11', target: '歹势', meaning: '对不起', romaji: 'phái-sè', hint: 'p-h-á-i-s-è' },
      { id: 'nan-t-12', target: '叨位', meaning: '在哪里', romaji: 'tó-uī', hint: 't-ó-u-ī' },
    ],
  },
  'zh-SC': {
    name: '四川话',
    flag: '🔴',
    description: '四川话拼音打字练习（四川话拼音方案）',
    inputMode: 'romaji',
    items: [
      { id: 'zhsc-t-01', target: '你好', meaning: '你好', romaji: 'nihao', hint: 'n-i-h-a-o' },
      { id: 'zhsc-t-02', target: '谢谢', meaning: '谢谢', romaji: 'xiexie', hint: 'x-i-e-x-i-e' },
      { id: 'zhsc-t-03', target: '水', meaning: '水', romaji: 'shui', hint: 's-h-u-i' },
      { id: 'zhsc-t-04', target: '屋头', meaning: '家/房子', romaji: 'wutou', hint: 'w-u-t-o-u' },
      { id: 'zhsc-t-05', target: '朋友', meaning: '朋友', romaji: 'pengyou', hint: 'p-e-n-g-y-o-u' },
      { id: 'zhsc-t-06', target: '吃饭', meaning: '吃饭', romaji: 'qifan', hint: 'q-i-f-a-n' },
      { id: 'zhsc-t-07', target: '书', meaning: '书', romaji: 'shu', hint: 's-h-u' },
      { id: 'zhsc-t-08', target: '时间', meaning: '时间', romaji: 'sijian', hint: 's-i-j-i-a-n' },
      { id: 'zhsc-t-09', target: '早上好', meaning: '早上好', romaji: 'zaoshanghao', hint: 'z-a-o-s-h-a-n-g-h-a-o' },
      { id: 'zhsc-t-10', target: '再见', meaning: '再见', romaji: 'zaijian', hint: 'z-a-i-j-i-a-n' },
      { id: 'zhsc-t-11', target: '对不起', meaning: '对不起', romaji: 'duibuqi', hint: 'd-u-i-b-u-q-i' },
      { id: 'zhsc-t-12', target: '在哪儿', meaning: '在哪里', romaji: 'zainar', hint: 'z-a-i-n-a-r' },
    ],
  },
  'zh-DB': {
    name: '东北话',
    flag: '🟡',
    description: '东北话拼音打字练习（东北话拼音，儿化音用 -r 标注）',
    inputMode: 'romaji',
    items: [
      { id: 'zhdb-t-01', target: '你好', meaning: '你好', romaji: 'nihao', hint: 'n-i-h-a-o' },
      { id: 'zhdb-t-02', target: '谢谢', meaning: '谢谢', romaji: 'xiexie', hint: 'x-i-e-x-i-e' },
      { id: 'zhdb-t-03', target: '水', meaning: '水', romaji: 'shui', hint: 's-h-u-i' },
      { id: 'zhdb-t-04', target: '家', meaning: '家/房子', romaji: 'jia', hint: 'j-i-a' },
      { id: 'zhdb-t-05', target: '哥们儿', meaning: '朋友/兄弟', romaji: 'gemenr', hint: 'g-e-m-e-n-r' },
      { id: 'zhdb-t-06', target: '吃饭', meaning: '吃饭', romaji: 'chifan', hint: 'c-h-i-f-a-n' },
      { id: 'zhdb-t-07', target: '书', meaning: '书', romaji: 'shu', hint: 's-h-u' },
      { id: 'zhdb-t-08', target: '时间', meaning: '时间', romaji: 'shijian', hint: 's-h-i-j-i-a-n' },
      { id: 'zhdb-t-09', target: '早上好', meaning: '早上好', romaji: 'zaoshanghao', hint: 'z-a-o-s-h-a-n-g-h-a-o' },
      { id: 'zhdb-t-10', target: '再见', meaning: '再见', romaji: 'zaijian', hint: 'z-a-i-j-i-a-n' },
      { id: 'zhdb-t-11', target: '对不住', meaning: '对不起', romaji: 'duibuzhu', hint: 'd-u-i-b-u-z-h-u' },
      { id: 'zhdb-t-12', target: '哪儿', meaning: '在哪里', romaji: 'nar', hint: 'n-a-r' },
    ],
  },
  'sh': {
    name: '上海话',
    flag: '🏙️',
    description: '上海话拼音打字练习（吴语协会拼音方案）',
    inputMode: 'romaji',
    items: [
      { id: 'sh-t-01', target: '侬好', meaning: '你好', romaji: 'nong hao', hint: 'n-o-n-g  h-a-o' },
      { id: 'sh-t-02', target: '谢谢', meaning: '谢谢', romaji: 'zia zia', hint: 'x-i-a-x-i-a' },
      { id: 'sh-t-03', target: '水', meaning: '水', romaji: 'sy', hint: 's-y' },
      { id: 'sh-t-04', target: '屋里', meaning: '家/房子', romaji: 'oli', hint: 'o-l-i' },
      { id: 'sh-t-05', target: '朋友', meaning: '朋友', romaji: 'bang you', hint: 'b-a-n-g  y-o-u' },
      { id: 'sh-t-06', target: '吃饭', meaning: '吃饭', romaji: 'qik ve', hint: 'q-i-k  v-e' },
      { id: 'sh-t-07', target: '书', meaning: '书', romaji: 'sy', hint: 's-y' },
      { id: 'sh-t-08', target: '辰光', meaning: '时间', romaji: 'zen kuan', hint: 'z-e-n  k-u-a-n' },
      { id: 'sh-t-09', target: '早安', meaning: '早上好', romaji: 'zao e', hint: 'z-a-o  e' },
      { id: 'sh-t-10', target: '再会', meaning: '再见', romaji: 'ze we', hint: 'z-e  w-e' },
      { id: 'sh-t-11', target: '对勿起', meaning: '对不起', romaji: 'de vet qi', hint: 'd-e  v-e-t  q-i' },
      { id: 'sh-t-12', target: '勒何里', meaning: '在哪里', romaji: 'leheli', hint: 'l-e-h-e-l-i' },
    ],
  },
  'hak': {
    name: '客家话',
    flag: '🌄',
    description: '客家话拼音打字练习（教育部台湾客家话拼音方案）',
    inputMode: 'romaji',
    items: [
      { id: 'hak-t-01', target: '你好', meaning: '你好', romaji: 'ngi ho', hint: 'n-g-i  h-o' },
      { id: 'hak-t-02', target: '多谢', meaning: '谢谢', romaji: 'do qia', hint: 'd-o  q-i-a' },
      { id: 'hak-t-03', target: '水', meaning: '水', romaji: 'sui', hint: 's-u-i' },
      { id: 'hak-t-04', target: '屋下', meaning: '家/房子', romaji: 'vuk ha', hint: 'v-u-k  h-a' },
      { id: 'hak-t-05', target: '朋友', meaning: '朋友', romaji: 'pen yiu', hint: 'p-e-n  y-i-u' },
      { id: 'hak-t-06', target: '食饭', meaning: '吃饭', romaji: 'sit fan', hint: 's-i-t  f-a-n' },
      { id: 'hak-t-07', target: '书', meaning: '书', romaji: 'su', hint: 's-u' },
      { id: 'hak-t-08', target: '时间', meaning: '时间', romaji: 'si gien', hint: 's-i  g-i-e-n' },
      { id: 'hak-t-09', target: '早安', meaning: '早上好', romaji: 'zo on', hint: 'z-o  o-n' },
      { id: 'hak-t-10', target: '再会', meaning: '再见', romaji: 'zai fi', hint: 'z-a-i  f-i' },
      { id: 'hak-t-11', target: '对毋住', meaning: '对不起', romaji: 'dui m chu', hint: 'd-u-i  m  ch-u' },
      { id: 'hak-t-12', target: '在哪', meaning: '在哪里', romaji: 'di nai', hint: 'd-i  n-a-i' },
    ],
  }
};

// Hepburn romaji mapping for Japanese hiragana validation
const HEPBURN_ROMAJI_MAP = {
    'あ': 'a',
    'い': 'i',
    'う': 'u',
    'え': 'e',
    'お': 'o',
    'か': 'ka',
    'き': 'ki',
    'く': 'ku',
    'け': 'ke',
    'こ': 'ko',
    'さ': 'sa',
    'し': 'shi',
    'す': 'su',
    'せ': 'se',
    'そ': 'so',
    'た': 'ta',
    'ち': 'chi',
    'つ': 'tsu',
    'て': 'te',
    'と': 'to',
    'な': 'na',
    'に': 'ni',
    'ぬ': 'nu',
    'ね': 'ne',
    'の': 'no',
    'は': 'ha',
    'ひ': 'hi',
    'ふ': 'fu',
    'へ': 'he',
    'ほ': 'ho',
    'ま': 'ma',
    'み': 'mi',
    'む': 'mu',
    'め': 'me',
    'も': 'mo',
    'や': 'ya',
    'ゆ': 'yu',
    'よ': 'yo',
    'ら': 'ra',
    'り': 'ri',
    'る': 'ru',
    'れ': 're',
    'ろ': 'ro',
    'わ': 'wa',
    'を': 'wo',
    'ん': 'n',
    'が': 'ga',
    'ぎ': 'gi',
    'ぐ': 'gu',
    'げ': 'ge',
    'ご': 'go',
    'ざ': 'za',
    'じ': 'ji',
    'ず': 'zu',
    'ぜ': 'ze',
    'ぞ': 'zo',
    'だ': 'da',
    'ぢ': 'ji',
    'づ': 'zu',
    'で': 'de',
    'ど': 'do',
    'ば': 'ba',
    'び': 'bi',
    'ぶ': 'bu',
    'べ': 'be',
    'ぼ': 'bo',
    'ぱ': 'pa',
    'ぴ': 'pi',
    'ぷ': 'pu',
    'ぺ': 'pe',
    'ぽ': 'po',
    'きゃ': 'kya',
    'きゅ': 'kyu',
    'きょ': 'kyo',
    'しゃ': 'sha',
    'しゅ': 'shu',
    'しょ': 'sho',
    'ちゃ': 'cha',
    'ちゅ': 'chu',
    'ちょ': 'cho',
    'にゃ': 'nya',
    'にゅ': 'nyu',
    'にょ': 'nyo',
    'ひゃ': 'hya',
    'ひゅ': 'hyu',
    'ひょ': 'hyo',
    'みゃ': 'mya',
    'みゅ': 'myu',
    'みょ': 'myo',
    'りゃ': 'rya',
    'りゅ': 'ryu',
    'りょ': 'ryo',
    'ぎゃ': 'gya',
    'ぎゅ': 'gyu',
    'ぎょ': 'gyo',
    'じゃ': 'ja',
    'じゅ': 'ju',
    'じょ': 'jo',
    'びゃ': 'bya',
    'びゅ': 'byu',
    'びょ': 'byo',
    'ぴゃ': 'pya',
    'ぴゅ': 'pyu',
    'ぴょ': 'pyo',
    'こんにちは': 'konnichiwa',
    'ありがとう': 'arigatou',
};

// Korean Revised Romanization mapping for common syllables
const KOREAN_ROMAJI_MAP = {
    '안': 'an',
    '녕': 'nyeong',
    '하': 'ha',
    '세': 'se',
    '요': 'yo',
    '감': 'gam',
    '사': 'sa',
    '합': 'hap',
    '니': 'ni',
    '다': 'da',
    '사랑': 'sarang',
    '친구': 'chin-gu',
    '물': 'mul',
    '학교': 'hak-gyo',
    '커피': 'keopi',
    '여행': 'yeohaeng',
    '한국': 'han-guk',
    '영어': 'yeong-eo',
    '일본': 'il-bon',
    '중국': 'jung-guk',
    '음식': 'eumsik',
    '책': 'chaek',
};

// Russian BGN/PCGN simplified romanization mapping
const RUSSIAN_ROMAJI_MAP = {
    'привет': 'privet',
    'спасибо': 'spasibo',
    'вода': 'voda',
    'дом': 'dom',
    'друг': 'drug',
    'еда': 'yeda',
    'книга': 'kniga',
    'время': 'vremya',
    'доброе утро': 'dobroye utro',
    'до свидания': 'do svidaniya',
    'извините': 'izvinite',
    'где': 'gde',
};

// Arabic ALA-LC simplified romanization mapping
const ARABIC_ROMAJI_MAP = {
    'مرحبا': 'marhaban',
    'شكرا': 'shukran',
    'ماء': 'maa',
    'بيت': 'bayt',
    'صديق': 'sadiq',
    'طعام': 'taam',
    'كتاب': 'kitab',
    'وقت': 'waqt',
    'صباح الخير': 'sabah al-khayr',
    'مع السلامة': 'ma assalama',
    'آسف': 'asif',
    'أين': 'ayn',
};

// Hindi IAST simplified romanization mapping
const HINDI_ROMAJI_MAP = {
    'नमस्ते': 'namaste',
    'धन्यवाद': 'dhanyavad',
    'पानी': 'pani',
    'घर': 'ghar',
    'दोस्त': 'dost',
    'खाना': 'khana',
    'किताब': 'kitab',
    'समय': 'samay',
    'सुप्रभात': 'suprabhat',
    'अलविदा': 'alvida',
    'माफ़ करना': 'maaf karna',
    'कहाँ': 'kahan',
};

// Thai RTGS romanization mapping
const THAI_ROMAJI_MAP = {
    'สวัสดี': 'sawatdi',
    'ขอบคุณ': 'khobkhun',
    'น้ำ': 'nam',
    'บ้าน': 'ban',
    'เพื่อน': 'phuean',
    'อาหาร': 'ahan',
    'หนังสือ': 'nangsu',
    'เวลา': 'wela',
    'สวัสดีตอนเช้า': 'sawatdi ton chao',
    'ลาก่อน': 'la khon',
    'ขอโทษ': 'khotthot',
    'อยู่ที่ไหน': 'yu thi nai',
};

// Greek ELOT 743 romanization mapping
const GREEK_ROMAJI_MAP = {
    'γεια σου': 'gia sou',
    'ευχαριστώ': 'efcharisto',
    'νερό': 'nero',
    'σπίτι': 'spiti',
    'φίλος': 'filos',
    'φαγητό': 'fagito',
    'βιβλίο': 'vivlio',
    'ώρα': 'ora',
    'καλημέρα': 'kalimera',
    'αντίο': 'antio',
    'συγγνώμη': 'syngnomi',
    'πού είναι': 'pou ine',
};

// Chinese Pinyin mapping
const CHINESE_PINYIN_MAP = {
    '你好': 'nihao',
    '谢谢': 'xiexie',
    '水': 'sui',
    '房子': 'fangzi',
    '朋友': 'pengyou',
    '食物': 'shiwu',
    '书': 'shu',
    '时间': 'shijian',
    '早上好': 'zaoshanghao',
    '再见': 'zaijian',
    '对不起': 'duibuqi',
    '在哪里': 'zainali',
};

// Cantonese Jyutping mapping
const CANTONESE_JYUTPING_MAP = {
    '你好': 'nei5 hou2',
    '多谢': 'do1 ze6',
    '水': 'seoi2',
    '屋企': 'uk1 kei2',
    '朋友': 'pang4 jau5',
    '食嘢': 'sik6 je5',
    '书': 'syu1',
    '时间': 'si4 gaan3',
    '早晨': 'zou2 san4',
    '再见': 'zoi3 gin3',
    '对唔住': 'deoi3 m4 zyu6',
    '喺边度': 'hai2 bin1 dou6',
};

// Hokkien Tai-lo romanization mapping
const HOKKIEN_TAILO_MAP = {
    '你好': 'lí-hó',
    '多谢': 'tō-siā',
    '水': 'tsuí',
    '厝': 'tshù',
    '朋友': 'pîng-iú',
    '食饭': 'tsia̍h-pn̄g',
    '册': 'tsheh',
    '时间': 'sî-kan',
    '早安': 'tsá-an',
    '再会': 'tsài-huē',
    '歹势': 'phái-sè',
    '叨位': 'tó-uī',
};

// Sichuanese Pinyin mapping
const SICHUANESE_PINYIN_MAP = {
    '你好': 'nihao',
    '谢谢': 'xiexie',
    '水': 'sui',
    '屋头': 'wutou',
    '朋友': 'pengyou',
    '吃饭': 'qifan',
    '书': 'shu',
    '时间': 'sijian',
    '早上好': 'zaoshanghao',
    '再见': 'zaijian',
    '对不起': 'duibuqi',
    '在哪儿': 'zainar',
};

// Northeastern Mandarin Pinyin mapping
const NORTHEASTERN_PINYIN_MAP = {
    '你好': 'nihao',
    '谢谢': 'xiexie',
    '水': 'sui',
    '家': 'jia',
    '哥们儿': 'gemenr',
    '吃饭': 'chifan',
    '书': 'shu',
    '时间': 'shijian',
    '早上好': 'zaoshanghao',
    '再见': 'zaijian',
    '对不住': 'duibuzhu',
    '哪儿': 'nar',
};

// Shanghainese Wu Association Pinyin mapping
const SHANGHAINESE_WU_PINYIN_MAP = {
    '侬好': 'nong hao',
    '谢谢': 'zia zia',
    '水': 'sy',
    '屋里': 'oli',
    '朋友': 'bang you',
    '吃饭': 'qik ve',
    '书': 'sy',
    '辰光': 'zen kuan',
    '早安': 'zao e',
    '再会': 'ze we',
    '对勿起': 'de vet qi',
    '勒何里': 'leheli',
};

// Hakka MOE Taiwan Pinyin mapping
const HAKKA_PINYIN_MAP = {
    '你好': 'ngi ho',
    '多谢': 'do qia',
    '水': 'sui',
    '屋下': 'vuk ha',
    '朋友': 'pen yiu',
    '食饭': 'sit fan',
    '书': 'su',
    '时间': 'si gien',
    '早安': 'zo on',
    '再会': 'zai fi',
    '对毋住': 'dui m chu',
    '在哪': 'di nai',
};

// Validate user input against expected answer
function validateTypingAnswer(item, userInput, language) {
  const input = (userInput || '').trim().toLowerCase();
  if (!input) return { correct: false, exact: false, message: '请输入内容' };

  // Latin-script languages: direct input
  if (language === 'en') {
    const expected = item.target.toLowerCase();
    const exact = input === expected;
    const correct = exact;
    return { correct, exact, message: correct ? '正确！' : `正确写法：${item.target}` };
  }
  if (language === 'es') {
    const expected = item.target.toLowerCase();
    const exact = input === expected;
    const correct = exact;
    return { correct, exact, message: correct ? '正确！' : `正确写法：${item.target}` };
  }
  if (language === 'de') {
    const expected = item.target.toLowerCase();
    const exact = input === expected;
    const correct = exact;
    return { correct, exact, message: correct ? '正确！' : `正确写法：${item.target}` };
  }
  if (language === 'fr') {
    const expected = item.target.toLowerCase();
    const exact = input === expected;
    const correct = exact;
    return { correct, exact, message: correct ? '正确！' : `正确写法：${item.target}` };
  }
  if (language === 'it') {
    const expected = item.target.toLowerCase();
    const exact = input === expected;
    const correct = exact;
    return { correct, exact, message: correct ? '正确！' : `正确写法：${item.target}` };
  }
  if (language === 'pt') {
    const expected = item.target.toLowerCase();
    const exact = input === expected;
    const correct = exact;
    return { correct, exact, message: correct ? '正确！' : `正确写法：${item.target}` };
  }
  if (language === 'nl') {
    const expected = item.target.toLowerCase();
    const exact = input === expected;
    const correct = exact;
    return { correct, exact, message: correct ? '正确！' : `正确写法：${item.target}` };
  }
  if (language === 'pl') {
    const expected = item.target.toLowerCase();
    const exact = input === expected;
    const correct = exact;
    return { correct, exact, message: correct ? '正确！' : `正确写法：${item.target}` };
  }
  if (language === 'tr') {
    const expected = item.target.toLowerCase();
    const exact = input === expected;
    const correct = exact;
    return { correct, exact, message: correct ? '正确！' : `正确写法：${item.target}` };
  }
  if (language === 'vi') {
    const expected = item.target.toLowerCase();
    const exact = input === expected;
    const correct = exact;
    return { correct, exact, message: correct ? '正确！' : `正确写法：${item.target}` };
  }

  // Non-Latin languages: romaji/pinyin input
  if (language === 'ja') {
    const expected = (item.romaji || HEPBURN_ROMAJI_MAP[item.target] || item.target).toLowerCase();
    const exact = input === expected;
    const normalizedInput = input.replace(/-/g, ' ').replace(/\s+/g, ' ').trim();
    const normalizedExpected = expected.replace(/-/g, ' ').replace(/\s+/g, ' ').trim();
    const correct = exact || normalizedInput === normalizedExpected;
    return { correct, exact, message: correct ? '正确！' : `正确罗马音：${expected}` };
  }
  if (language === 'ko') {
    const expected = (item.romaji || KOREAN_ROMAJI_MAP[item.target] || item.target).toLowerCase();
    const exact = input === expected;
    const normalizedInput = input.replace(/-/g, ' ').replace(/\s+/g, ' ').trim();
    const normalizedExpected = expected.replace(/-/g, ' ').replace(/\s+/g, ' ').trim();
    const correct = exact || normalizedInput === normalizedExpected;
    return { correct, exact, message: correct ? '正确！' : `正确罗马音：${expected}` };
  }
  if (language === 'ru') {
    const expected = (item.romaji || RUSSIAN_ROMAJI_MAP[item.target] || item.target).toLowerCase();
    const exact = input === expected;
    const normalizedInput = input.replace(/-/g, ' ').replace(/\s+/g, ' ').trim();
    const normalizedExpected = expected.replace(/-/g, ' ').replace(/\s+/g, ' ').trim();
    const correct = exact || normalizedInput === normalizedExpected;
    return { correct, exact, message: correct ? '正确！' : `正确罗马音：${expected}` };
  }
  if (language === 'ar') {
    const expected = (item.romaji || ARABIC_ROMAJI_MAP[item.target] || item.target).toLowerCase();
    const exact = input === expected;
    const normalizedInput = input.replace(/-/g, ' ').replace(/\s+/g, ' ').trim();
    const normalizedExpected = expected.replace(/-/g, ' ').replace(/\s+/g, ' ').trim();
    const correct = exact || normalizedInput === normalizedExpected;
    return { correct, exact, message: correct ? '正确！' : `正确罗马音：${expected}` };
  }
  if (language === 'hi') {
    const expected = (item.romaji || HINDI_ROMAJI_MAP[item.target] || item.target).toLowerCase();
    const exact = input === expected;
    const normalizedInput = input.replace(/-/g, ' ').replace(/\s+/g, ' ').trim();
    const normalizedExpected = expected.replace(/-/g, ' ').replace(/\s+/g, ' ').trim();
    const correct = exact || normalizedInput === normalizedExpected;
    return { correct, exact, message: correct ? '正确！' : `正确罗马音：${expected}` };
  }
  if (language === 'th') {
    const expected = (item.romaji || THAI_ROMAJI_MAP[item.target] || item.target).toLowerCase();
    const exact = input === expected;
    const normalizedInput = input.replace(/-/g, ' ').replace(/\s+/g, ' ').trim();
    const normalizedExpected = expected.replace(/-/g, ' ').replace(/\s+/g, ' ').trim();
    const correct = exact || normalizedInput === normalizedExpected;
    return { correct, exact, message: correct ? '正确！' : `正确罗马音：${expected}` };
  }
  if (language === 'el') {
    const expected = (item.romaji || GREEK_ROMAJI_MAP[item.target] || item.target).toLowerCase();
    const exact = input === expected;
    const normalizedInput = input.replace(/-/g, ' ').replace(/\s+/g, ' ').trim();
    const normalizedExpected = expected.replace(/-/g, ' ').replace(/\s+/g, ' ').trim();
    const correct = exact || normalizedInput === normalizedExpected;
    return { correct, exact, message: correct ? '正确！' : `正确罗马音：${expected}` };
  }
  if (language === 'zh-CN') {
    const expected = (item.romaji || CHINESE_PINYIN_MAP[item.target] || item.target).toLowerCase();
    const exact = input === expected;
    const normalizedInput = input.replace(/-/g, ' ').replace(/\s+/g, ' ').trim();
    const normalizedExpected = expected.replace(/-/g, ' ').replace(/\s+/g, ' ').trim();
    const correct = exact || normalizedInput === normalizedExpected;
    return { correct, exact, message: correct ? '正确！' : `正确拼音：${expected}` };
  }
  if (language === 'yue') {
    const expected = (item.romaji || CANTONESE_JYUTPING_MAP[item.target] || item.target).toLowerCase();
    const exact = input === expected;
    const normalizedInput = input.replace(/-/g, ' ').replace(/\s+/g, ' ').trim();
    const normalizedExpected = expected.replace(/-/g, ' ').replace(/\s+/g, ' ').trim();
    const correct = exact || normalizedInput === normalizedExpected;
    return { correct, exact, message: correct ? '正确！' : `正确粤拼：${expected}` };
  }
  if (language === 'nan') {
    const expected = (item.romaji || HOKKIEN_TAILO_MAP[item.target] || item.target).toLowerCase();
    const exact = input === expected;
    const normalizedInput = input.replace(/-/g, ' ').replace(/\s+/g, ' ').trim();
    const normalizedExpected = expected.replace(/-/g, ' ').replace(/\s+/g, ' ').trim();
    const correct = exact || normalizedInput === normalizedExpected;
    return { correct, exact, message: correct ? '正确！' : `正确台罗拼音：${expected}` };
  }
  if (language === 'zh-SC') {
    const expected = (item.romaji || SICHUANESE_PINYIN_MAP[item.target] || item.target).toLowerCase();
    const exact = input === expected;
    const normalizedInput = input.replace(/-/g, ' ').replace(/\s+/g, ' ').trim();
    const normalizedExpected = expected.replace(/-/g, ' ').replace(/\s+/g, ' ').trim();
    const correct = exact || normalizedInput === normalizedExpected;
    return { correct, exact, message: correct ? '正确！' : `正确拼音：${expected}` };
  }
  if (language === 'zh-DB') {
    const expected = (item.romaji || NORTHEASTERN_PINYIN_MAP[item.target] || item.target).toLowerCase();
    const exact = input === expected;
    const normalizedInput = input.replace(/-/g, ' ').replace(/\s+/g, ' ').trim();
    const normalizedExpected = expected.replace(/-/g, ' ').replace(/\s+/g, ' ').trim();
    const correct = exact || normalizedInput === normalizedExpected;
    return { correct, exact, message: correct ? '正确！' : `正确拼音：${expected}` };
  }
  if (language === 'sh') {
    const expected = (item.romaji || SHANGHAINESE_WU_PINYIN_MAP[item.target] || item.target).toLowerCase();
    const exact = input === expected;
    const normalizedInput = input.replace(/-/g, ' ').replace(/\s+/g, ' ').trim();
    const normalizedExpected = expected.replace(/-/g, ' ').replace(/\s+/g, ' ').trim();
    const correct = exact || normalizedInput === normalizedExpected;
    return { correct, exact, message: correct ? '正确！' : `正确拼音：${expected}` };
  }
  if (language === 'hak') {
    const expected = (item.romaji || HAKKA_PINYIN_MAP[item.target] || item.target).toLowerCase();
    const exact = input === expected;
    const normalizedInput = input.replace(/-/g, ' ').replace(/\s+/g, ' ').trim();
    const normalizedExpected = expected.replace(/-/g, ' ').replace(/\s+/g, ' ').trim();
    const correct = exact || normalizedInput === normalizedExpected;
    return { correct, exact, message: correct ? '正确！' : `正确拼音：${expected}` };
  }

  return { correct: false, exact: false, message: '未知语言' };
}

Object.assign(window, {
  TYPING_PRACTICE_DATA,
  HEPBURN_ROMAJI_MAP,
  KOREAN_ROMAJI_MAP,
  RUSSIAN_ROMAJI_MAP,
  ARABIC_ROMAJI_MAP,
  HINDI_ROMAJI_MAP,
  THAI_ROMAJI_MAP,
  GREEK_ROMAJI_MAP,
  CHINESE_PINYIN_MAP,
  CANTONESE_JYUTPING_MAP,
  HOKKIEN_TAILO_MAP,
  SICHUANESE_PINYIN_MAP,
  NORTHEASTERN_PINYIN_MAP,
  SHANGHAINESE_WU_PINYIN_MAP,
  HAKKA_PINYIN_MAP,
  validateTypingAnswer,
});
