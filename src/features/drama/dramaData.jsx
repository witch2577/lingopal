// ========== Drama / Short Script Data ==========
// Pre-built AI-original short drama scripts for language learning

const DRAMA_SCRIPTS = {
  en: [
    {
      id: 'en-drama-1',
      title: 'Coffee Shop Encounter',
      titleCn: '咖啡店邂逅',
      difficulty: 'beginner',
      description: 'A friendly conversation at a local coffee shop. Great for practicing daily greetings and orders.',
      cover: '🍵',
      scenes: [
        {
          id: 'scene-1',
          title: 'Ordering Coffee',
          lines: [
            { role: 'Barista', color: '#6366F1', text: 'Good morning! Welcome to Brew Haven. What can I get for you today?' },
            { role: 'Customer', color: '#10B981', text: 'Good morning! I\'d like a medium latte, please. With oat milk if you have it.' },
            { role: 'Barista', color: '#6366F1', text: 'Absolutely! We have oat milk. Would you like any syrup in that?' },
            { role: 'Customer', color: '#10B981', text: 'Vanilla would be great, thank you. And could I also get a blueberry muffin?' },
            { role: 'Barista', color: '#6366F1', text: 'Of course! That\'ll be $8.50. Your name for the cup?' },
            { role: 'Customer', color: '#10B981', text: 'It\'s Alex. Thanks so much!' },
          ],
        },
        {
          id: 'scene-2',
          title: 'Small Talk',
          lines: [
            { role: 'Barista', color: '#6366F1', text: 'Here you go, Alex! One vanilla oat milk latte and a blueberry muffin.' },
            { role: 'Customer', color: '#10B981', text: 'This looks amazing. Is this your usual shift?' },
            { role: 'Barista', color: '#6366F1', text: 'Yes, I work mornings mostly. Are you from around here?' },
            { role: 'Customer', color: '#10B981', text: 'I just moved to the neighborhood last week. Still exploring the area.' },
            { role: 'Barista', color: '#6366F1', text: 'Well, welcome! There\'s a lovely park two blocks down. Perfect for a morning walk.' },
          ],
        },
      ],
      quiz: [
        { question: 'What drink did the customer order?', options: ['Cappuccino', 'Medium latte', 'Espresso', 'Tea'], correct: 1 },
        { question: 'What kind of milk did the customer request?', options: ['Soy milk', 'Almond milk', 'Oat milk', 'Whole milk'], correct: 2 },
        { question: 'What did the customer order besides the drink?', options: ['Croissant', 'Blueberry muffin', 'Bagel', 'Cookie'], correct: 1 },
        { question: 'How much was the total order?', options: ['$6.50', '$7.50', '$8.50', '$9.50'], correct: 2 },
        { question: 'What did the barista recommend at the end?', options: ['A museum', 'A restaurant', 'A park', 'A bookstore'], correct: 2 },
      ],
    },
    {
      id: 'en-drama-2',
      title: 'Job Interview',
      titleCn: '求职面试',
      difficulty: 'intermediate',
      description: 'A job interview scenario covering professional vocabulary and formal expressions.',
      cover: '💼',
      scenes: [
        {
          id: 'scene-1',
          title: 'The Interview',
          lines: [
            { role: 'Interviewer', color: '#8B5CF6', text: 'Thank you for coming in today, Sarah. Please have a seat.' },
            { role: 'Sarah', color: '#F59E0B', text: 'Thank you for having me. I\'m really excited about this opportunity.' },
            { role: 'Interviewer', color: '#8B5CF6', text: 'Let\'s start with your background. Could you walk me through your experience in marketing?' },
            { role: 'Sarah', color: '#F59E0B', text: 'Certainly. I\'ve spent three years at Digital First, where I managed social media campaigns for tech clients.' },
            { role: 'Interviewer', color: '#8B5CF6', text: 'Impressive. What would you say was your most successful campaign?' },
            { role: 'Sarah', color: '#F59E0B', text: 'Last year, I led a campaign that increased engagement by 200% in just two months.' },
          ],
        },
      ],
      quiz: [
        { question: 'What field does Sarah have experience in?', options: ['Finance', 'Marketing', 'Engineering', 'Design'], correct: 1 },
        { question: 'How long did Sarah work at Digital First?', options: ['One year', 'Two years', 'Three years', 'Four years'], correct: 2 },
        { question: 'What was the result of Sarah\'s most successful campaign?', options: ['Doubled sales', 'Increased engagement by 200%', 'Reduced costs', 'Hired 50 people'], correct: 1 },
      ],
    },
    {
      id: 'en-drama-3',
      title: 'At the Airport',
      titleCn: '机场出行',
      difficulty: 'beginner',
      description: 'Navigating check-in and security at the airport. Essential travel vocabulary.',
      cover: '✈️',
      scenes: [
        {
          id: 'scene-1',
          title: 'Check-in',
          lines: [
            { role: 'Agent', color: '#3B82F6', text: 'Next in line, please. May I see your passport and ticket?' },
            { role: 'Traveler', color: '#EF4444', text: 'Here you go. I\'m flying to Tokyo, flight BA284.' },
            { role: 'Agent', color: '#3B82F6', text: 'Thank you. Are you checking any bags today?' },
            { role: 'Traveler', color: '#EF4444', text: 'Yes, just one suitcase. And I have a carry-on backpack.' },
            { role: 'Agent', color: '#3B82F6', text: 'Please place your suitcase on the scale. Your carry-on looks fine.' },
            { role: 'Traveler', color: '#EF4444', text: 'Thank you. What gate does the flight depart from?' },
            { role: 'Agent', color: '#3B82F6', text: 'Gate 42, Terminal 3. Boarding starts at 10:30 AM.' },
          ],
        },
      ],
      quiz: [
        { question: 'Where is the traveler flying to?', options: ['Seoul', 'Beijing', 'Tokyo', 'Bangkok'], correct: 2 },
        { question: 'How many checked bags does the traveler have?', options: ['None', 'One', 'Two', 'Three'], correct: 1 },
        { question: 'What gate does the flight depart from?', options: ['Gate 12', 'Gate 22', 'Gate 32', 'Gate 42'], correct: 3 },
      ],
    },
  ],
  ja: [
    {
      id: 'ja-drama-1',
      title: 'レストランで',
      titleCn: '在餐厅',
      difficulty: 'beginner',
      description: 'Ordering food at a Japanese restaurant. Practice polite expressions and food vocabulary.',
      cover: '🍣',
      scenes: [
        {
          id: 'scene-1',
          title: 'Ordering',
          lines: [
            { role: '店員', color: '#6366F1', text: 'いらっしゃいませ。何名様ですか。' },
            { role: '客', color: '#10B981', text: '一人です。窓際の席はありますか。' },
            { role: '店員', color: '#6366F1', text: 'はい、こちらへどうぞ。お飲み物は何になさいますか。' },
            { role: '客', color: '#10B981', text: '生ビールをお願いします。おすすめの料理は何ですか。' },
            { role: '店員', color: '#6366F1', text: '今日のおすすめは刺身の盛り合わせです。とても新鮮ですよ。' },
            { role: '客', color: '#10B981', text: 'じゃあ、それと天ぷらをお願いします。' },
          ],
        },
      ],
      quiz: [
        { question: '客は何人ですか。', options: ['一人', '二人', '三人', '四人'], correct: 0 },
        { question: '客はどんな席を希望しましたか。', options: ['禁煙席', '窓際の席', '個室', 'カウンター'], correct: 1 },
        { question: 'おすすめの料理は何ですか。', options: ['寿司', '刺身の盛り合わせ', '天ぷら', 'うどん'], correct: 1 },
      ],
    },
  ],
  zh: [
    {
      id: 'zh-drama-1',
      title: '超市购物',
      titleCn: 'Supermarket Shopping',
      difficulty: 'beginner',
      description: 'A simple shopping dialogue at a supermarket.',
      cover: '🛒',
      scenes: [
        {
          id: 'scene-1',
          title: '问路找商品',
          lines: [
            { role: '顾客', color: '#10B981', text: '不好意思，请问牛奶在哪个货架？' },
            { role: '店员', color: '#6366F1', text: '牛奶在冷藏区，沿着这条路走到尽头左转就是。' },
            { role: '顾客', color: '#10B981', text: '谢谢！请问今天有打折活动吗？' },
            { role: '店员', color: '#6366F1', text: '有的，水果区今天全场八折。' },
            { role: '顾客', color: '#10B981', text: '太好了，我正好想买些水果。谢谢！' },
          ],
        },
      ],
      quiz: [
        { question: '顾客在找什么商品？', options: ['面包', '牛奶', '水果', '鸡蛋'], correct: 1 },
        { question: '牛奶在哪里？', options: ['入口处', '收银台旁', '冷藏区', '二楼'], correct: 2 },
        { question: '今天哪里打折？', options: ['蔬菜区', '水果区', '肉类区', '饮料区'], correct: 1 },
      ],
    },
  ],
};

// Fallback for languages without pre-built scripts
function getDramaScripts(language) {
  return DRAMA_SCRIPTS[language] || DRAMA_SCRIPTS['en'] || [];
}

Object.assign(window, { DRAMA_SCRIPTS, getDramaScripts });
