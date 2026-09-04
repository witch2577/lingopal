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
