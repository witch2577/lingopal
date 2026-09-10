// ========== Music / Song Data ==========
// Pre-built AI-original songs and lyrics for language learning

const SONG_LIBRARY = {
  en: [
    {
      id: 'en-song-1',
      title: 'Sunny Day Greeting',
      titleCn: '晴天问候',
      type: 'children',
      difficulty: 'beginner',
      description: 'A cheerful morning greeting song to start your day.',
      cover: '☀️',
      lyrics: [
        { text: 'Good morning, good morning, the sun is shining bright', highlight: [] },
        { text: 'Good morning, good morning, everything feels right', highlight: [] },
        { text: 'I say hello to the sky so blue', highlight: ['hello'] },
        { text: 'And wave to friends both old and new', highlight: ['friends'] },
        { text: 'Good morning, good morning, let\'s learn something new today', highlight: ['learn', 'new'] },
      ],
      fillBlanks: [
        { lineIndex: 2, blankIndex: 0, answer: 'hello', hint: 'h_llo' },
        { lineIndex: 3, blankIndex: 0, answer: 'friends', hint: 'fr__nds' },
        { lineIndex: 4, blankIndex: 0, answer: 'learn', hint: 'l__rn' },
      ],
      liaisons: [
        { lineIndex: 0, positions: [[10, 18]], note: 'good morning → goo(d) morning' },
        { lineIndex: 2, positions: [[5, 9]], note: 'say hello → say(y) hello' },
      ],
    },
    {
      id: 'en-song-2',
      title: 'Travel Song',
      titleCn: '旅行之歌',
      type: 'pop',
      difficulty: 'intermediate',
      description: 'A song about traveling and exploring new places.',
      cover: '🌍',
      lyrics: [
        { text: 'Pack your bags and grab your map', highlight: [] },
        { text: 'We\'re going on a trip, no time for a nap', highlight: [] },
        { text: 'The train is leaving at half past nine', highlight: ['train', 'leaving'] },
        { text: 'Adventure calls and the stars align', highlight: ['Adventure'] },
        { text: 'Every city has a story to tell', highlight: ['city', 'story'] },
        { text: 'With every hello, we break the shell', highlight: ['hello'] },
      ],
      fillBlanks: [
        { lineIndex: 2, blankIndex: 0, answer: 'train', hint: 'tr__n' },
        { lineIndex: 2, blankIndex: 1, answer: 'leaving', hint: 'l__ving' },
        { lineIndex: 4, blankIndex: 0, answer: 'city', hint: 'c_ty' },
      ],
      liaisons: [
        { lineIndex: 0, positions: [[0, 4]], note: 'pack your → pa(k) your' },
        { lineIndex: 5, positions: [[10, 15]], note: 'every hello → every(y) hello' },
      ],
    },
    {
      id: 'en-song-3',
      title: 'Daily Routine',
      titleCn: '日常 routine',
      type: 'children',
      difficulty: 'beginner',
      description: 'Learn daily activities with this catchy tune.',
      cover: '⏰',
      lyrics: [
        { text: 'Wake up, wake up, it\'s time to start the day', highlight: [] },
        { text: 'Brush your teeth and wash your face', highlight: ['Brush', 'teeth'] },
        { text: 'Eat your breakfast, don\'t be late', highlight: ['breakfast'] },
        { text: 'Off to school or work we go', highlight: ['school', 'work'] },
        { text: 'Learning, working, growing so', highlight: ['Learning', 'growing'] },
      ],
      fillBlanks: [
        { lineIndex: 1, blankIndex: 0, answer: 'Brush', hint: 'Br_sh' },
        { lineIndex: 1, blankIndex: 1, answer: 'teeth', hint: 't__th' },
        { lineIndex: 2, blankIndex: 0, answer: 'breakfast', hint: 'br__kf_st' },
      ],
      liaisons: [
        { lineIndex: 1, positions: [[5, 10]], note: 'brush your → brus(h) your' },
        { lineIndex: 2, positions: [[3, 7]], note: 'eat your → ea(t) your' },
      ],
    },
  ],
  ja: [
    {
      id: 'ja-song-1',
      title: 'あさのうた',
      titleCn: '早晨之歌',
      type: 'children',
      difficulty: 'beginner',
      description: 'A simple Japanese morning song for beginners.',
      cover: '🌸',
      lyrics: [
        { text: 'おはよう　おはよう　あさがきたよ', highlight: [] },
        { text: 'とりたち　さえずり　そらがあおい', highlight: ['とりたち'] },
        { text: 'あたまを　あらって　はをみがこう', highlight: ['あたま', 'は'] },
        { text: 'あさごはん　たべて　がっこうへゆこう', highlight: ['あさごはん', 'がっこう'] },
      ],
      fillBlanks: [
        { lineIndex: 1, blankIndex: 0, answer: 'とりたち', hint: 'とり_ _' },
        { lineIndex: 2, blankIndex: 0, answer: 'あたま', hint: 'あ_ま' },
      ],
      liaisons: [],
    },
  ],
  zh: [
    {
      id: 'zh-song-1',
      title: '春天来了',
      titleCn: 'Spring is Coming',
      type: 'children',
      difficulty: 'beginner',
      description: 'A cheerful song about spring and nature.',
      cover: '🌿',
      lyrics: [
        { text: '春天来了，花儿开了', highlight: ['春天', '花儿'] },
        { text: '小鸟唱歌，柳树摇啊摇', highlight: ['小鸟', '柳树'] },
        { text: '小朋友们，快出来玩', highlight: ['小朋友'] },
        { text: '阳光暖暖，心情真好', highlight: ['阳光', '心情'] },
      ],
      fillBlanks: [
        { lineIndex: 0, blankIndex: 0, answer: '春天', hint: '春_' },
        { lineIndex: 1, blankIndex: 0, answer: '小鸟', hint: '小_' },
      ],
      liaisons: [],
    },
  ],
};

function getSongs(language) {
  return SONG_LIBRARY[language] || SONG_LIBRARY['en'] || [];
}

Object.assign(window, { SONG_LIBRARY, getSongs });
