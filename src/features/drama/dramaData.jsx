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
            {role: 'Barista', color: '#6366F1', text: 'Good morning! Welcome to Brew Haven. What can I get for you today?'},
            {role: 'Customer', color: '#10B981', text: 'Good morning! I\'d like a medium latte, please. With oat milk if you have it.'},
            {role: 'Barista', color: '#6366F1', text: 'Absolutely! We have oat milk. Would you like any syrup in that?'},
            {role: 'Customer', color: '#10B981', text: 'Vanilla would be great, thank you. And could I also get a blueberry muffin?'},
            {role: 'Barista', color: '#6366F1', text: 'Of course! That\'ll be $8.50. Your name for the cup?'},
            {role: 'Customer', color: '#10B981', text: 'It\'s Alex. Thanks so much!'},
          ],
        },
        {
          id: 'scene-2',
          title: 'Small Talk',
          lines: [
            {role: 'Barista', color: '#6366F1', text: 'Here you go, Alex! One vanilla oat milk latte and a blueberry muffin.'},
            {role: 'Customer', color: '#10B981', text: 'This looks amazing. Is this your usual shift?'},
            {role: 'Barista', color: '#6366F1', text: 'Yes, I work mornings mostly. Are you from around here?'},
            {role: 'Customer', color: '#10B981', text: 'I just moved to the neighborhood last week. Still exploring the area.'},
            {role: 'Barista', color: '#6366F1', text: 'Well, welcome! There\'s a lovely park two blocks down. Perfect for a morning walk.'},
          ],
        },
      ],
      quiz: [
        {question: 'What drink did the customer order?', options: [
  'Cappuccino',
  'Medium latte',
  'Espresso',
  'Tea'
], correct: 1},
        {question: 'What kind of milk did the customer request?', options: [
  'Soy milk',
  'Almond milk',
  'Oat milk',
  'Whole milk'
], correct: 2},
        {question: 'What did the customer order besides the drink?', options: [
  'Croissant',
  'Blueberry muffin',
  'Bagel',
  'Cookie'
], correct: 1},
        {question: 'How much was the total order?', options: [
  '$6.50',
  '$7.50',
  '$8.50',
  '$9.50'
], correct: 2},
        {question: 'What did the barista recommend at the end?', options: [
  'A museum',
  'A restaurant',
  'A park',
  'A bookstore'
], correct: 2},
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
            {role: 'Interviewer', color: '#8B5CF6', text: 'Thank you for coming in today, Sarah. Please have a seat.'},
            {role: 'Sarah', color: '#F59E0B', text: 'Thank you for having me. I\'m really excited about this opportunity.'},
            {role: 'Interviewer', color: '#8B5CF6', text: 'Let\'s start with your background. Could you walk me through your experience in marketing?'},
            {role: 'Sarah', color: '#F59E0B', text: 'Certainly. I\'ve spent three years at Digital First, where I managed social media campaigns for tech clients.'},
            {role: 'Interviewer', color: '#8B5CF6', text: 'Impressive. What would you say was your most successful campaign?'},
            {role: 'Sarah', color: '#F59E0B', text: 'Last year, I led a campaign that increased engagement by 200% in just two months.'},
          ],
        },
      ],
      quiz: [
        {question: 'What field does Sarah have experience in?', options: [
  'Finance',
  'Marketing',
  'Engineering',
  'Design'
], correct: 1},
        {question: 'How long did Sarah work at Digital First?', options: [
  'One year',
  'Two years',
  'Three years',
  'Four years'
], correct: 2},
        {question: 'What was the result of Sarah\'s most successful campaign?', options: [
  'Doubled sales',
  'Increased engagement by 200%',
  'Reduced costs',
  'Hired 50 people'
], correct: 1},
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
            {role: 'Agent', color: '#3B82F6', text: 'Next in line, please. May I see your passport and ticket?'},
            {role: 'Traveler', color: '#EF4444', text: 'Here you go. I\'m flying to Tokyo, flight BA284.'},
            {role: 'Agent', color: '#3B82F6', text: 'Thank you. Are you checking any bags today?'},
            {role: 'Traveler', color: '#EF4444', text: 'Yes, just one suitcase. And I have a carry-on backpack.'},
            {role: 'Agent', color: '#3B82F6', text: 'Please place your suitcase on the scale. Your carry-on looks fine.'},
            {role: 'Traveler', color: '#EF4444', text: 'Thank you. What gate does the flight depart from?'},
            {role: 'Agent', color: '#3B82F6', text: 'Gate 42, Terminal 3. Boarding starts at 10:30 AM.'},
          ],
        },
      ],
      quiz: [
        {question: 'Where is the traveler flying to?', options: [
  'Seoul',
  'Beijing',
  'Tokyo',
  'Bangkok'
], correct: 2},
        {question: 'How many checked bags does the traveler have?', options: [
  'None',
  'One',
  'Two',
  'Three'
], correct: 1},
        {question: 'What gate does the flight depart from?', options: [
  'Gate 12',
  'Gate 22',
  'Gate 32',
  'Gate 42'
], correct: 3},
      ],
    },
    {
      id: 'en-drama-4',
      title: 'Hotel Check-in',
      titleCn: '酒店入住',
      difficulty: 'beginner',
      description: 'Checking into a hotel and asking about amenities. Great for travel and accommodation vocabulary.',
      cover: '🏨',
      scenes: [
        {
          id: 'scene-1',
          title: 'Front Desk',
          lines: [
            {role: 'Receptionist', color: '#6366F1', text: 'Good evening! Welcome to Grand Plaza Hotel. Do you have a reservation?'},
            {role: 'Guest', color: '#10B981', text: 'Yes, I do. The name is Lisa Chen. I booked a double room for two nights.'},
            {role: 'Receptionist', color: '#6366F1', text: 'Let me check... Yes, here it is. Room 305 on the third floor. May I see your passport?'},
            {role: 'Guest', color: '#10B981', text: 'Of course. Here you go. Does the room have free Wi-Fi?'},
            {role: 'Receptionist', color: '#6366F1', text: 'Yes, all rooms have complimentary Wi-Fi. The password is in the room guide.'},
            {role: 'Guest', color: '#10B981', text: 'Great. What time is breakfast served?'},
            {role: 'Receptionist', color: '#6366F1', text: 'Breakfast is from 7:00 AM to 10:00 AM in the restaurant on the ground floor.'},
            {role: 'Guest', color: '#10B981', text: 'Perfect. Thank you very much!'},
          ],
        },
      ],
      quiz: [
        {question: 'What is the guest\'s name?', options: [
  'Lisa Chen',
  'Sarah Kim',
  'Emma Wu',
  'Anna Li'
], correct: 0},
        {question: 'Which room is the guest staying in?', options: [
  'Room 205',
  'Room 305',
  'Room 405',
  'Room 505'
], correct: 1},
        {question: 'How many nights did the guest book?', options: [
  'One night',
  'Two nights',
  'Three nights',
  'Four nights'
], correct: 1},
        {question: 'What time does breakfast start?', options: [
  '6:00 AM',
  '7:00 AM',
  '8:00 AM',
  '9:00 AM'
], correct: 1},
      ],
    },
    {
      id: 'en-drama-5',
      title: 'At the Doctor\'s Office',
      titleCn: '诊所看病',
      difficulty: 'intermediate',
      description: 'A visit to the doctor describing symptoms and getting advice. Useful for health-related vocabulary.',
      cover: '🩺',
      scenes: [
        {
          id: 'scene-1',
          title: 'Consultation',
          lines: [
            {role: 'Doctor', color: '#8B5CF6', text: 'Good morning. Please come in and have a seat. What brings you in today?'},
            {role: 'Patient', color: '#F59E0B', text: 'I\'ve had a sore throat and a headache for the past three days.'},
            {role: 'Doctor', color: '#8B5CF6', text: 'I see. Do you have a fever or any other symptoms?'},
            {role: 'Patient', color: '#F59E0B', text: 'I had a slight fever yesterday evening, but it\'s gone now. I feel a bit tired too.'},
            {role: 'Doctor', color: '#8B5CF6', text: 'Let me take your temperature and check your throat. Open wide and say "ahh".'},
            {role: 'Patient', color: '#F59E0B', text: 'Ahh...'},
            {role: 'Doctor', color: '#8B5CF6', text: 'Your throat is a bit red. It looks like a mild infection. I\'ll prescribe some medicine.'},
            {role: 'Patient', color: '#F59E0B', text: 'Thank you, doctor. Should I rest at home?'},
            {role: 'Doctor', color: '#8B5CF6', text: 'Yes, drink plenty of water and get lots of rest. You should feel better in a few days.'},
          ],
        },
      ],
      quiz: [
        {question: 'What are the patient\'s main symptoms?', options: [
  'Stomach pain',
  'Sore throat and headache',
  'Back pain',
  'Cough'
], correct: 1},
        {question: 'How long has the patient been feeling unwell?', options: [
  'One day',
  'Two days',
  'Three days',
  'A week'
], correct: 2},
        {question: 'Did the patient have a fever?', options: [
  'Yes, a high fever',
  'Yes, a slight fever yesterday',
  'No fever at all',
  'Fever all the time'
], correct: 1},
        {question: 'What does the doctor prescribe?', options: [
  'Surgery',
  'Some medicine',
  'Physical therapy',
  'A vaccine'
], correct: 1},
      ],
    },
    {
      id: 'en-drama-6',
      title: 'Talking About the Weather',
      titleCn: '谈论天气',
      difficulty: 'beginner',
      description: 'A casual conversation about weather plans. Perfect for practicing small talk and weather vocabulary.',
      cover: '🌤️',
      scenes: [
        {
          id: 'scene-1',
          title: 'Bus Stop Chat',
          lines: [
            {role: 'Woman', color: '#EC4899', text: 'It\'s such a beautiful day today, isn\'t it?'},
            {role: 'Man', color: '#3B82F6', text: 'Absolutely! The sun is shining and there\'s a nice breeze. Perfect weather for a picnic.'},
            {role: 'Woman', color: '#EC4899', text: 'I was thinking of going to the park this afternoon. Would you like to join?'},
            {role: 'Man', color: '#3B82F6', text: 'I\'d love to, but the weather forecast says it might rain later.'},
            {role: 'Woman', color: '#EC4899', text: 'Really? I checked this morning and it said cloudy but no rain.'},
            {role: 'Man', color: '#3B82F6', text: 'Well, let\'s hope it stays dry. I brought an umbrella just in case.'},
            {role: 'Woman', color: '#EC4899', text: 'Good thinking! Rain or shine, I\'m sure we\'ll have a good time.'},
          ],
        },
      ],
      quiz: [
        {question: 'What is the weather like today?', options: [
  'Rainy',
  'Sunny with a breeze',
  'Snowy',
  'Foggy'
], correct: 1},
        {question: 'Where does the woman want to go?', options: [
  'The cinema',
  'The park',
  'The mall',
  'The beach'
], correct: 1},
        {question: 'What does the weather forecast say?', options: [
  'It will snow',
  'It might rain later',
  'It will be sunny all day',
  'A storm is coming'
], correct: 1},
        {question: 'What did the man bring?', options: [
  'A jacket',
  'An umbrella',
  'A hat',
  'Sunglasses'
], correct: 1},
      ],
    },
    {
      id: 'en-drama-7',
      title: 'Making Friends at the Gym',
      titleCn: '健身房交友',
      difficulty: 'beginner',
      description: 'Starting a conversation at the gym. Good for fitness vocabulary and making new friends.',
      cover: '🏋️',
      scenes: [
        {
          id: 'scene-1',
          title: 'First Meeting',
          lines: [
            {role: 'Tom', color: '#10B981', text: 'Hi there! Are you using this bench, or is it free?'},
            {role: 'Anna', color: '#EC4899', text: 'Oh, I\'m done with it. Go ahead! I\'m Anna, by the way. I\'ve seen you here a few times.'},
            {role: 'Tom', color: '#10B981', text: 'Nice to meet you, Anna. I\'m Tom. I usually come here after work around six.'},
            {role: 'Anna', color: '#EC4899', text: 'Same here! What kind of workouts do you usually do?'},
            {role: 'Tom', color: '#10B981', text: 'I focus on cardio and some light weight training. How about you?'},
            {role: 'Anna', color: '#EC4899', text: 'I love yoga and swimming. The pool here is really nice.'},
            {role: 'Tom', color: '#10B981', text: 'I haven\'t tried the pool yet. Maybe we can swim together sometime?'},
            {role: 'Anna', color: '#EC4899', text: 'That sounds fun! Let\'s exchange numbers and plan for next week.'},
          ],
        },
      ],
      quiz: [
        {question: 'What is the woman\'s name?', options: [
  'Sarah',
  'Anna',
  'Lisa',
  'Emma'
], correct: 1},
        {question: 'What time does Tom usually come to the gym?', options: [
  'Morning',
  'After work around six',
  'Lunchtime',
  'Late at night'
], correct: 1},
        {question: 'What does Tom focus on?', options: [
  'Yoga',
  'Cardio and light weights',
  'Swimming only',
  'Basketball'
], correct: 1},
        {question: 'What does Anna suggest they do together?', options: [
  'Run together',
  'Swim together',
  'Play tennis',
  'Take a yoga class'
], correct: 1},
      ],
    },
    {
      id: 'en-drama-8',
      title: 'At the Bank',
      titleCn: '在银行',
      difficulty: 'intermediate',
      description: 'Opening an account and asking about services at a bank. Useful for financial vocabulary.',
      cover: '🏦',
      scenes: [
        {
          id: 'scene-1',
          title: 'Opening an Account',
          lines: [
            {role: 'Clerk', color: '#6366F1', text: 'Good afternoon. How may I assist you today?'},
            {role: 'Customer', color: '#10B981', text: 'I\'d like to open a savings account, please.'},
            {role: 'Clerk', color: '#6366F1', text: 'Certainly. Do you have a valid ID and proof of address with you?'},
            {role: 'Customer', color: '#10B981', text: 'Yes, here is my passport and a utility bill from last month.'},
            {role: 'Clerk', color: '#6366F1', text: 'Thank you. The minimum deposit is fifty dollars. How much would you like to deposit?'},
            {role: 'Customer', color: '#10B981', text: 'I\'ll deposit two hundred dollars today.'},
            {role: 'Clerk', color: '#6366F1', text: 'Perfect. Your account will be active within twenty-four hours. Here is your temporary card.'},
            {role: 'Customer', color: '#10B981', text: 'Thank you very much for your help.'},
          ],
        },
      ],
      quiz: [
        {question: 'What kind of account does the customer want to open?', options: [
  'Checking account',
  'Savings account',
  'Credit card',
  'Loan'
], correct: 1},
        {question: 'What documents does the customer provide?', options: [
  'Driver\'s license',
  'Passport and utility bill',
  'Birth certificate',
  'Student ID'
], correct: 1},
        {question: 'What is the minimum deposit?', options: [
  '$25',
  '$50',
  '$100',
  '$200'
], correct: 1},
        {question: 'How much does the customer deposit?', options: [
  '$50',
  '$100',
  '$150',
  '$200'
], correct: 3},
      ],
    },
    {
      id: 'en-drama-9',
      title: 'Phone Call to a Friend',
      titleCn: '给朋友打电话',
      difficulty: 'beginner',
      description: 'Making a phone call to invite a friend to dinner. Practice phone conversation vocabulary.',
      cover: '📞',
      scenes: [
        {
          id: 'scene-1',
          title: 'The Call',
          lines: [
            {role: 'Mike', color: '#3B82F6', text: 'Hey Lisa, it\'s Mike. How are you doing?'},
            {role: 'Lisa', color: '#EC4899', text: 'Hi Mike! I\'m doing great. What\'s up?'},
            {role: 'Mike', color: '#3B82F6', text: 'I was wondering if you\'re free this Saturday evening. I\'m making dinner at my place.'},
            {role: 'Lisa', color: '#EC4899', text: 'That sounds lovely! What time should I come?'},
            {role: 'Mike', color: '#3B82F6', text: 'How about seven? I\'m planning to make pasta and salad.'},
            {role: 'Lisa', color: '#EC4899', text: 'Perfect. Should I bring anything? Maybe a dessert?'},
            {role: 'Mike', color: '#3B82F6', text: 'That would be amazing. See you on Saturday at seven!'},
            {role: 'Lisa', color: '#EC4899', text: 'Can\'t wait. Thanks for inviting me!'},
          ],
        },
      ],
      quiz: [
        {question: 'Who is making the phone call?', options: [
  'Lisa',
  'Mike',
  'Tom',
  'Anna'
], correct: 1},
        {question: 'When is the dinner?', options: [
  'Friday evening',
  'Saturday evening',
  'Sunday afternoon',
  'Monday night'
], correct: 1},
        {question: 'What is Mike making for dinner?', options: [
  'Pizza',
  'Pasta and salad',
  'Burgers',
  'Sushi'
], correct: 1},
        {question: 'What does Lisa offer to bring?', options: [
  'Wine',
  'A dessert',
  'Bread',
  'Flowers'
], correct: 1},
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
            {role: '店員', color: '#6366F1', text: 'いらっしゃいませ。何名様ですか。'},
            {role: '客', color: '#10B981', text: '一人です。窓際の席はありますか。'},
            {role: '店員', color: '#6366F1', text: 'はい、こちらへどうぞ。お飲み物は何になさいますか。'},
            {role: '客', color: '#10B981', text: '生ビールをお願いします。おすすめの料理は何ですか。'},
            {role: '店員', color: '#6366F1', text: '今日のおすすめは刺身の盛り合わせです。とても新鮮ですよ。'},
            {role: '客', color: '#10B981', text: 'じゃあ、それと天ぷらをお願いします。'},
          ],
        },
      ],
      quiz: [
        {question: '客は何人ですか。', options: [
  '一人',
  '二人',
  '三人',
  '四人'
], correct: 0},
        {question: '客はどんな席を希望しましたか。', options: [
  '禁煙席',
  '窓際の席',
  '個室',
  'カウンター'
], correct: 1},
        {question: 'おすすめの料理は何ですか。', options: [
  '寿司',
  '刺身の盛り合わせ',
  '天ぷら',
  'うどん'
], correct: 1},
      ],
    },
    {
      id: 'ja-drama-2',
      title: 'デパートで買い物',
      titleCn: '百货商店购物',
      difficulty: 'beginner',
      description: 'Shopping for clothes and asking about sizes and prices in a Japanese department store.',
      cover: '🛍️',
      scenes: [
        {
          id: 'scene-1',
          title: '試着',
          lines: [
            {role: '店員', color: '#6366F1', text: 'いらっしゃいませ。何かお探しですか。'},
            {role: '客', color: '#10B981', text: 'このシャツを見せていただけますか。'},
            {role: '店員', color: '#6366F1', text: 'かしこまりました。Mサイズですね。試着室はあちらです。'},
            {role: '客', color: '#10B981', text: 'ありがとうございます。少し大きいです。Sサイズはありますか。'},
            {role: '店員', color: '#6366F1', text: 'はい、お持ちします。こちらのSサイズはいかがでしょうか。'},
            {role: '客', color: '#10B981', text: 'ぴったりです。いくらですか。'},
            {role: '店員', color: '#6366F1', text: '税込みで三千五百円です。'},
            {role: '客', color: '#10B981', text: 'じゃあ、これにします。'},
          ],
        },
      ],
      quiz: [
        {question: '客は何を探していますか。', options: [
  'パンツ',
  'シャツ',
  'コート',
  '靴'
], correct: 1},
        {question: '最初のサイズはどうでしたか。', options: [
  '小さい',
  '大きい',
  'ぴったり',
  'わからない'
], correct: 1},
        {question: 'シャツはいくらですか。', options: [
  '三千円',
  '三千五百円',
  '四千円',
  '五千円'
], correct: 1},
      ],
    },
    {
      id: 'ja-drama-3',
      title: '道を尋ねる',
      titleCn: '问路',
      difficulty: 'beginner',
      description: 'Asking for directions to a train station in Japan. Practice location and direction vocabulary.',
      cover: '🚉',
      scenes: [
        {
          id: 'scene-1',
          title: '駅へ',
          lines: [
            {role: '旅行者', color: '#EF4444', text: 'すみません。新宿駅はどこですか。'},
            {role: '通行人', color: '#3B82F6', text: '新宿駅ですか。まっすぐ行って、二つ目の交差点を右に曲がってください。'},
            {role: '旅行者', color: '#EF4444', text: '二つ目の交差点ですね。どのくらいかかりますか。'},
            {role: '通行人', color: '#3B82F6', text: '歩いて五分くらいです。駅の入り口が見えますよ。'},
            {role: '旅行者', color: '#EF4444', text: 'わかりました。ありがとうございます。'},
            {role: '通行人', color: '#3B82F6', text: 'どういたしまして。気をつけて行ってください。'},
          ],
        },
      ],
      quiz: [
        {question: '旅行者はどこへ行きたいですか。', options: [
  '渋谷駅',
  '新宿駅',
  '東京駅',
  '上野駅'
], correct: 1},
        {question: 'どこを曲がればいいですか。', options: [
  '左',
  '右',
  'まっすぐ',
  'Uターン'
], correct: 1},
        {question: '歩いてどのくらいかかりますか。', options: [
  '三分',
  '五分',
  '十分',
  '十五分'
], correct: 1},
      ],
    },
    {
      id: 'ja-drama-4',
      title: '郵便局で',
      titleCn: '在邮局',
      difficulty: 'intermediate',
      description: 'Sending a package at the post office. Practice formal Japanese and postal vocabulary.',
      cover: '📮',
      scenes: [
        {
          id: 'scene-1',
          title: '荷物を送る',
          lines: [
            {role: '局員', color: '#6366F1', text: 'いらっしゃいませ。何かお手伝いできることはありますか。'},
            {role: '客', color: '#10B981', text: 'この荷物をアメリカに送りたいのですが。'},
            {role: '局員', color: '#6366F1', text: 'かしこまりました。中身は何ですか。'},
            {role: '客', color: '#10B981', text: '本とお菓子です。'},
            {role: '局員', color: '#6366F1', text: 'お菓子はありますね。航空便と船便がありますが、どちらになさいますか。'},
            {role: '客', color: '#10B981', text: '航空便でお願いします。いくらですか。'},
            {role: '局員', color: '#6366F1', text: '二千円になります。こちらの用紙に住所を書いてください。'},
            {role: '客', color: '#10B981', text: 'はい、わかりました。何日くらいかかりますか。'},
            {role: '局員', color: '#6366F1', text: '一週間くらいで届きます。'},
          ],
        },
      ],
      quiz: [
        {question: '荷物はどこへ送りますか。', options: [
  'イギリス',
  'アメリカ',
  '中国',
  '韓国'
], correct: 1},
        {question: '中身は何ですか。', options: [
  '本とお菓子',
  '服と靴',
  'おもちゃ',
  '電子機器'
], correct: 0},
        {question: 'どの方法で送りますか。', options: [
  '船便',
  '航空便',
  'EMS',
  '宅配便'
], correct: 1},
        {question: '送料はいくらですか。', options: [
  '千円',
  '二千円',
  '三千円',
  '五千円'
], correct: 1},
      ],
    },
    {
      id: 'ja-drama-5',
      title: 'コンビニで',
      titleCn: '在便利店',
      difficulty: 'beginner',
      description: 'Buying snacks and asking about services at a convenience store.',
      cover: '🏪',
      scenes: [
        {
          id: 'scene-1',
          title: '買い物',
          lines: [
            {role: '店員', color: '#6366F1', text: 'いらっしゃいませ。'},
            {role: '客', color: '#10B981', text: 'すみません、このおにぎりはいくらですか。'},
            {role: '店員', color: '#6366F1', text: '一百二十円です。お弁当も一緒にいかがですか。'},
            {role: '客', color: '#10B981', text: 'じゃあ、このおにぎりとお茶をください。お弁当はまた今度。'},
            {role: '店員', color: '#6366F1', text: 'かしこまりました。お弁当は電子レンジで温められますよ。'},
            {role: '客', color: '#10B981', text: 'ありがとうございます。レシートをください。'},
          ],
        },
      ],
      quiz: [
        {question: '客は何を買いましたか。', options: [
  'お弁当',
  'おにぎりとお茶',
  'パン',
  'ジュース'
], correct: 1},
        {question: 'おにぎりはいくらですか。', options: [
  '百円',
  '一百二十円',
  '百五十円',
  '二百円'
], correct: 1},
        {question: 'お弁当はどうやって温められますか。', options: [
  'フライパン',
  '電子レンジ',
  'オーブン',
  '火'
], correct: 1},
      ],
    },
  ],
  ko: [
    {
      id: 'ko-drama-1',
      title: '카페에서',
      titleCn: '在咖啡馆',
      difficulty: 'beginner',
      description: 'Ordering coffee at a cafe in Korean. Practice basic Korean greetings and ordering expressions.',
      cover: '☕',
      scenes: [
        {
          id: 'scene-1',
          title: '주문하기',
          lines: [
            {role: '바리스타', color: '#6366F1', text: '어서 오세요. 무엇을 도와드릴까요? (eoseo oseyo. mueoseul dowadeurilkkayo?)'},
            {role: '손님', color: '#10B981', text: '안녕하세요. 아메리카노 한 잔 주세요. (annyeonghaseyo. amerikano han jan juseyo.)'},
            {role: '바리스타', color: '#6366F1', text: '따뜻하게 드릴까요? 차갑게 드릴까요? (ttatteuthage deurilkkayo? chagapge deurilkkayo?)'},
            {role: '손님', color: '#10B981', text: '따뜻하게 해 주세요. 얼음은 넣지 마세요. (ttatteuthage hae juseyo. eoreumeun neochi maseyo.)'},
            {role: '바리스타', color: '#6366F1', text: '네, 알겠습니다. 잠시만 기다려 주세요. (ne, algesseumnida. jamsiman gidaryeo juseyo.)'},
            {role: '손님', color: '#10B981', text: '감사합니다. (gamsahamnida.)'},
          ],
        },
      ],
      quiz: [
        {question: '손님은 무엇을 주문했나요?', options: [
  '라떼',
  '아메리카노',
  '카푸치노',
  '에스프레소'
], correct: 1},
        {question: '손님은 어떻게 마시고 싶어하나요?', options: [
  '차갑게',
  '따뜻하게',
  '얼음 많이',
  '우유 추가'
], correct: 1},
        {question: '손님은 얼음을 어떻게 했나요?', options: [
  '많이 넣어 달라고 함',
  '넣지 말라고 함',
  '조금 넣어 달라고 함',
  '상관없음'
], correct: 1},
      ],
    },
    {
      id: 'ko-drama-2',
      title: '처음 만남',
      titleCn: '初次见面',
      difficulty: 'beginner',
      description: 'A self-introduction and greeting conversation in Korean. Essential for meeting new people.',
      cover: '👋',
      scenes: [
        {
          id: 'scene-1',
          title: '자기소개',
          lines: [
            {role: '민수', color: '#3B82F6', text: '안녕하세요. 저는 민수예요. 처음 뵙겠습니다. (annyeonghaseyo. jeoneun minusuyeo. cheoeum boepgesseumnida.)'},
            {role: '지영', color: '#EC4899', text: '안녕하세요. 저는 지영이에요. 만나서 반가워요. (annyeonghaseyo. jeoneun jiyeong-ieyo. mannaseo bangawoyo.)'},
            {role: '민수', color: '#3B82F6', text: '지영 씨는 어디에서 왔어요? (jiyeong ssineun eodieseo wasseoyo?)'},
            {role: '지영', color: '#EC4899', text: '저는 서울에서 왔어요. 민수 씨는요? (jeoneun seoureseo wasseoyo. minsu ssineunyo?)'},
            {role: '민수', color: '#3B82F6', text: '저는 부산에서 왔어요. 서울에 온 지 얼마나 됐어요? (jeoneun busaneseo wasseoyo. seoure onji eolmana dwaesseoyo?)'},
            {role: '지영', color: '#EC4899', text: '한 달 됐어요. 아직 친구가 별로 없어서 외로워요. (han dal dwaesseoyo. ajik chinguga byeollo eopseoseo oerowoyo.)'},
            {role: '민수', color: '#3B82F6', text: '그럼 저랑 친구 할래요? 같이 한국어 공부해요. (geureom jeorang chingu hallyeoyo? gachi hangugeo gongbuhaeyo.)'},
            {role: '지영', color: '#EC4899', text: '정말요? 좋아요! 감사합니다. (jeongmalyo? joayo! gamsahamnida.)'},
          ],
        },
      ],
      quiz: [
        {question: '민수 씨는 어디에서 왔나요?', options: [
  '서울',
  '부산',
  '대구',
  '인천'
], correct: 1},
        {question: '지영 씨는 서울에 온 지 얼마나 됐나요?', options: [
  '일주일',
  '한 달',
  '일 년',
  '삼 개월'
], correct: 1},
        {question: '지영 씨는 왜 외로워하나요?', options: [
  '일이 어려워서',
  '친구가 별로 없어서',
  '집이 멀어서',
  '배가 고파서'
], correct: 1},
        {question: '둘은 무엇을 같이 하기로 했나요?', options: [
  '울동',
  '한국어 공부',
  '쇼핑',
  '영화 보기'
], correct: 1},
      ],
    },
    {
      id: 'ko-drama-3',
      title: '옷가게에서',
      titleCn: '在服装店',
      difficulty: 'beginner',
      description: 'Shopping for clothes in Korean. Practice size, color, and price vocabulary.',
      cover: '👕',
      scenes: [
        {
          id: 'scene-1',
          title: '옷 고르기',
          lines: [
            {role: '점원', color: '#6366F1', text: '어서 오세요. 어떤 옷을 찾으세요? (eoseo oseyo. eotteon oseul chajeuseyo?)'},
            {role: '손님', color: '#10B981', text: '청바지를 보고 싶어요. (cheongbajireul bogo sipeoyo.)'},
            {role: '점원', color: '#6366F1', text: '사이즈가 어떻게 되세요? (saijeuga eotteoke doeseyo?)'},
            {role: '손님', color: '#10B981', text: '보통 30사이즈를 입어요. 파란색 있어요? (botong 30saijeureul ibeoyo. paransaek isseoyo?)'},
            {role: '점원', color: '#6366F1', text: '네, 이쪽에 있어요. 피팅룸은 저기입니다. (ne, ijjeoge isseoyo. pitingnimeun jeogiimnida.)'},
            {role: '손님', color: '#10B981', text: '감사합니다. 입어보고 올게요. (gamsahamnida. ibeobogo olgeyo.)'},
          ],
        },
      ],
      quiz: [
        {question: '손님은 무엇을 찾나요?', options: [
  '셔츠',
  '청바지',
  '코트',
  '모자'
], correct: 1},
        {question: '손님의 사이즈는?', options: [
  '28',
  '29',
  '30',
  '31'
], correct: 2},
        {question: '손님은 어떤 색을 원하나요?', options: [
  '빨간색',
  '검은색',
  '파란색',
  '흰색'
], correct: 2},
      ],
    },
    {
      id: 'ko-drama-4',
      title: '약국에서',
      titleCn: '在药店',
      difficulty: 'beginner',
      description: 'Buying medicine at a Korean pharmacy. Practice health vocabulary with romanization.',
      cover: '💊',
      scenes: [
        {
          id: 'scene-1',
          title: '약 사기',
          lines: [
            {role: '약사', color: '#6366F1', text: '어서 오세요. 어디 아프세요? (eoseo oseyo. eodi apuseyo?)'},
            {role: '손님', color: '#10B981', text: '목이 아프고 기침이 나요. (mogi apeugo gichimi nayo.)'},
            {role: '약사', color: '#6366F1', text: '감기 증상이네요. 이 약을 하루 세 번 드세요. (gamgi jungsangineyo. i yageul haru se beon deuseyo.)'},
            {role: '손님', color: '#10B981', text: '얼마예요? (eolmayeyo?)'},
            {role: '약사', color: '#6366F1', text: '삼천 원입니다. (samcheon wonimnida.)'},
            {role: '손님', color: '#10B981', text: '여기 있어요. 감사합니다. (yeogi isseoyo. gamsahamnida.)'},
          ],
        },
      ],
      quiz: [
        {question: '손님은 어디가 아파요?', options: ['머리', '목', '배', '다리'], correct: 1},
        {question: '약은 하루 몇 번?', options: ['한 번', '두 번', '세 번', '네 번'], correct: 2},
        {question: '약값은 얼마예요?', options: ['이천 원', '삼천 원', '사천 원', '오천 원'], correct: 1},
      ],
    },

  ],
  "zh-CN": [
    {
      id: 'zh-CN-drama-1',
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
            {role: '顾客', color: '#10B981', text: '不好意思，请问牛奶在哪个货架？'},
            {role: '店员', color: '#6366F1', text: '牛奶在冷藏区，沿着这条路走到尽头左转就是。'},
            {role: '顾客', color: '#10B981', text: '谢谢！请问今天有打折活动吗？'},
            {role: '店员', color: '#6366F1', text: '有的，水果区今天全场八折。'},
            {role: '顾客', color: '#10B981', text: '太好了，我正好想买些水果。谢谢！'},
          ],
        },
      ],
      quiz: [
        {question: '顾客在找什么商品？', options: [
  '面包',
  '牛奶',
  '水果',
  '鸡蛋'
], correct: 1},
        {question: '牛奶在哪里？', options: [
  '入口处',
  '收银台旁',
  '冷藏区',
  '二楼'
], correct: 2},
        {question: '今天哪里打折？', options: [
  '蔬菜区',
  '水果区',
  '肉类区',
  '饮料区'
], correct: 1},
      ],
    },
    {
      id: 'zh-CN-drama-2',
      title: '餐厅点餐',
      titleCn: 'Ordering at a Restaurant',
      difficulty: 'beginner',
      description: 'A dining scenario at a Chinese restaurant. Practice food ordering and polite expressions.',
      cover: '🥢',
      scenes: [
        {
          id: 'scene-1',
          title: '点菜',
          lines: [
            {role: '服务员', color: '#6366F1', text: '欢迎光临！几位用餐？'},
            {role: '顾客', color: '#10B981', text: '两位。请问有靠窗的位置吗？'},
            {role: '服务员', color: '#6366F1', text: '有的，请跟我来。这是菜单，请看。'},
            {role: '顾客', color: '#10B981', text: '谢谢。你们这儿的招牌菜是什么？'},
            {role: '服务员', color: '#6366F1', text: '推荐宫保鸡丁和麻婆豆腐，很多客人都喜欢。'},
            {role: '顾客', color: '#10B981', text: '那来一份宫保鸡丁和一份西红柿炒鸡蛋。'},
            {role: '服务员', color: '#6366F1', text: '好的。需要米饭吗？'},
            {role: '顾客', color: '#10B981', text: '要两碗米饭。谢谢！'},
          ],
        },
      ],
      quiz: [
        {question: '几位顾客用餐？', options: [
  '一位',
  '两位',
  '三位',
  '四位'
], correct: 1},
        {question: '顾客想要什么位置？', options: [
  '包厢',
  '靠窗',
  '门口',
  '角落'
], correct: 1},
        {question: '顾客点了什么菜？', options: [
  '宫保鸡丁和麻婆豆腐',
  '宫保鸡丁和西红柿炒鸡蛋',
  '麻婆豆腐和鱼香肉丝',
  '红烧肉和青菜'
], correct: 1},
        {question: '顾客要了几碗米饭？', options: [
  '一碗',
  '两碗',
  '三碗',
  '四碗'
], correct: 1},
      ],
    },
    {
      id: 'zh-CN-drama-3',
      title: '问路去图书馆',
      titleCn: 'Asking Directions to the Library',
      difficulty: 'beginner',
      description: 'Asking for directions to the library in Chinese. Practice location and direction vocabulary.',
      cover: '📚',
      scenes: [
        {
          id: 'scene-1',
          title: '问路',
          lines: [
            {role: '行人', color: '#10B981', text: '不好意思，请问图书馆怎么走？'},
            {role: '路人', color: '#6366F1', text: '图书馆啊，你一直往前走，过两个红绿灯，右转就到了。'},
            {role: '行人', color: '#10B981', text: '大概要走多久呢？'},
            {role: '路人', color: '#6366F1', text: '大概十分钟吧。图书馆门口有一个大喷泉，很容易认的。'},
            {role: '行人', color: '#10B981', text: '太感谢了！'},
            {role: '路人', color: '#6366F1', text: '不客气，祝你学习愉快！'},
          ],
        },
      ],
      quiz: [
        {question: '行人要去哪里？', options: [
  '超市',
  '图书馆',
  '医院',
  '学校'
], correct: 1},
        {question: '图书馆门口有什么？', options: [
  '大树',
  '大喷泉',
  '雕塑',
  '花坛'
], correct: 1},
        {question: '大概要走多久？', options: [
  '五分钟',
  '十分钟',
  '十五分钟',
  '二十分钟'
], correct: 1},
      ],
    },
  ],
  es: [
    {
      id: 'es-drama-1',
      title: 'En el Mercado',
      titleCn: '在市场',
      difficulty: 'beginner',
      description: 'Buying fresh fruits at a Spanish market. Practice numbers, prices, and food vocabulary in Spanish.',
      cover: '🍅',
      scenes: [
        {
          id: 'scene-1',
          title: 'Comprando Frutas',
          lines: [
            {role: 'Vendedor', color: '#6366F1', text: '¡Buenos días! ¿Qué le pongo? Tenemos fruta muy fresca hoy.'},
            {role: 'Cliente', color: '#10B981', text: 'Buenos días. ¿Cuánto cuestan las manzanas?'},
            {role: 'Vendedor', color: '#6366F1', text: 'Dos euros el kilo. Las naranjas están en oferta a un euro cincuenta.'},
            {role: 'Cliente', color: '#10B981', text: 'Me llevo un kilo de manzanas y dos kilos de naranjas, por favor.'},
            {role: 'Vendedor', color: '#6366F1', text: 'Muy bien. Son cinco euros en total. ¿Algo más?'},
            {role: 'Cliente', color: '#10B981', text: 'Sí, un racimo de uvas. ¿Cuánto vale?'},
            {role: 'Vendedor', color: '#6366F1', text: 'Tres euros. En total son ocho euros.'},
            {role: 'Cliente', color: '#10B981', text: 'Aquí tiene. Muchas gracias.'},
          ],
        },
      ],
      quiz: [
        {question: '¿Cuánto cuestan las manzanas?', options: [
  'Un euro',
  'Dos euros el kilo',
  'Tres euros',
  'Cinco euros'
], correct: 1},
        {question: '¿Cuántos kilos de naranjas compra el cliente?', options: [
  'Un kilo',
  'Dos kilos',
  'Tres kilos',
  'Medio kilo'
], correct: 1},
        {question: '¿Cuánto cuestan las uvas?', options: [
  'Un euro',
  'Dos euros',
  'Tres euros',
  'Cinco euros'
], correct: 2},
        {question: '¿Cuánto paga el cliente en total?', options: [
  'Cinco euros',
  'Seis euros',
  'Siete euros',
  'Ocho euros'
], correct: 3},
      ],
    },
    {
      id: 'es-drama-2',
      title: 'En la Farmacia',
      titleCn: '在药店',
      difficulty: 'beginner',
      description: 'Buying medicine at a Spanish pharmacy. Practice health vocabulary.',
      cover: '💊',
      scenes: [
        {
          id: 'scene-1',
          title: 'Medicamentos',
          lines: [
            {role: 'Farmacéutico', color: '#6366F1', text: 'Buenos días. ¿En qué puedo ayudarle?'},
            {role: 'Cliente', color: '#10B981', text: 'Buenos días. Tengo dolor de cabeza y fiebre.'},
            {role: 'Farmacéutico', color: '#6366F1', text: '¿Desde cuándo?'},
            {role: 'Cliente', color: '#10B981', text: 'Desde anoche.'},
            {role: 'Farmacéutico', color: '#6366F1', text: 'Tome estos comprimidos. Tres veces al día después de comer.'},
            {role: 'Cliente', color: '#10B981', text: 'De acuerdo. Muchas gracias.'},
          ],
        },
      ],
      quiz: [
        {question: '¿Qué tiene el cliente?', options: ['Dolor de estómago', 'Dolor de cabeza', 'Dolor de espalda', 'Dolor de muelas'], correct: 1},
        {question: '¿Desde cuándo?', options: ['Esta mañana', 'Anoche', 'Dos días', 'Una semana'], correct: 1},
        {question: '¿Cuántas veces al día?', options: ['Una', 'Dos', 'Tres', 'Cuatro'], correct: 2},
      ],
    },

  ],
  ru: [
    {
      id: 'ru-drama-1',
      title: 'В Книжном Магазине',
      titleCn: '在书店',
      difficulty: 'beginner',
      description: 'Buying a book at a Russian bookstore. Practice polite Russian and shopping vocabulary with romanization.',
      cover: '📚',
      scenes: [
        {
          id: 'scene-1',
          title: 'Покупка Книги',
          lines: [
            {role: 'Продавец', color: '#6366F1', text: 'Здравствуйте! Чем могу помочь? (Zdravstvuyte! Chem mogu pomoch?)'},
            {role: 'Покупатель', color: '#10B981', text: 'У вас есть учебники русского языка? (U vas yest uchebniki russkogo yazyka?)'},
            {role: 'Продавец', color: '#6366F1', text: 'Да, конечно. Вот этот учебник для начинающих очень хороший. (Da, konechno. Vot etot uchebnik dlya nachinayushchikh ochen khoroshiy.)'},
            {role: 'Покупатель', color: '#10B981', text: 'Сколько он стоит? (Skolko on stoit?)'},
            {role: 'Продавец', color: '#6366F1', text: 'Пятьсот пятьдесят рублей. (Pyatsot pyatdesyat rubley.)'},
            {role: 'Покупатель', color: '#10B981', text: 'Хорошо, я возьму его. Вы принимаете карту? (Khorosho, ya vozmu ego. Vy prinimayete kartu?)'},
            {role: 'Продавец', color: '#6366F1', text: 'Да, принимаем. Вот ваш чек и книга. Спасибо за покупку! (Da, prinimayem. Vot vashe chek i kniga. Spasibo za pokupku!)'},
          ],
        },
      ],
      quiz: [
        {question: 'Что хочет купить покупатель? (What does the buyer want to buy?)', options: [
  'Роман',
  'Учебник русского языка',
  'Словарь',
  'Журнал'
], correct: 1},
        {question: 'Сколько стоит учебник? (How much does the textbook cost?)', options: [
  '450 рублей',
  '550 рублей',
  '650 рублей',
  '750 рублей'
], correct: 1},
        {question: 'Как покупатель хочет платить? (How does the buyer want to pay?)', options: [
  'Наличными',
  'Картой',
  'Чеком',
  'Онлайн'
], correct: 1},
      ],
    },
    {
      id: 'ru-drama-2',
      title: 'В Кафе',
      titleCn: '在咖啡馆',
      difficulty: 'beginner',
      description: 'Ordering at a Russian cafe. Practice basic phrases with romanization.',
      cover: '☕',
      scenes: [
        {
          id: 'scene-1',
          title: 'Заказ',
          lines: [
            {role: 'Официант', color: '#6366F1', text: 'Доброе утро! Что будете заказывать? (Dobroye utro! Chto budete zakazyvat?)'},
            {role: 'Клиент', color: '#10B981', text: 'Доброе утро. Капучино, пожалуйста. (Dobroye utro. Kapuchino, pozhaluysta.)'},
            {role: 'Официант', color: '#6366F1', text: 'С сахаром? (S sakharam?)'},
            {role: 'Клиент', color: '#10B981', text: 'Да, и круассан, пожалуйста. (Da, i kruassan, pozhaluysta.)'},
            {role: 'Официант', color: '#6366F1', text: 'Хорошо. С вас 350 рублей. (Khorosho. S vas 350 rubley.)'},
            {role: 'Клиент', color: '#10B981', text: 'Вот. Спасибо! (Vot. Spasibo!)'},
          ],
        },
      ],
      quiz: [
        {question: 'Что заказывает клиент?', options: ['Чай', 'Капучино', 'Вода', 'Сок'], correct: 1},
        {question: 'Что ещё он хочет?', options: ['Пирог', 'Круассан', 'Торт', 'Печенье'], correct: 1},
        {question: 'Сколько стоит?', options: ['300', '350', '400', '250'], correct: 1},
      ],
    },

  ],
  yue: [
    {
      id: 'yue-drama-1',
      title: '飲茶',
      titleCn: '喝早茶',
      difficulty: 'beginner',
      description: 'Ordering dim sum at a Cantonese tea house. Practice Cantonese dining vocabulary with romanization.',
      cover: '🥟',
      scenes: [
        {
          id: 'scene-1',
          title: '點心',
          lines: [
            {role: '侍應', color: '#6366F1', text: '早晨！幾位呀？飲咩茶呀？ (zou2 san4! gei2 wai2 aa3? jam2 me1 caa4 aa3?)'},
            {role: '食客', color: '#10B981', text: '兩位。飲普洱，唔該。 (loeng5 wai2. jam2 pou2 nei2, m4 goi1.)'},
            {role: '侍應', color: '#6366F1', text: '好嘅。呢度有點心紙，慢慢揀。 (hou2 ge3. ni1 dou6 jau5 dim2 sam1 zi2, maan6 maan6 gaan2.)'},
            {role: '食客', color: '#10B981', text: '我想要蝦餃同燒賣，仲有一盅皮蛋瘦肉粥。 (ngo5 soeng2 jiu3 haa1 gaau2 tung4 siu1 maai6, zung6 jau5 jat1 zung1 pei4 daan2 sau3 juk6 zuk1.)'},
            {role: '侍應', color: '#6366F1', text: '好，即刻幫你落單。仲有冇嘢要加？ (hou2, zik1 haak1 bong1 nei5 lok6 daan1. zung6 jau5 mou5 je5 jiu3 gaa1?)'},
            {role: '食客', color: '#10B981', text: '暫時夠啦，多謝。 (zaam6 si4 gau3 laa1, do1 ze6.)'},
          ],
        },
      ],
      quiz: [
        {question: '幾位食客？', options: [
  '一位',
  '兩位',
  '三位',
  '四位'
], correct: 1},
        {question: '飲咩茶？', options: [
  '鐵觀音',
  '普洱',
  '龍井',
  '菊花'
], correct: 1},
        {question: '點咗咩點心？', options: [
  '蝦餃同燒賣',
  '叉燒包',
  '蛋撻',
  '春卷'
], correct: 0},
      ],
    },
    {
      id: 'yue-drama-2',
      title: '買餸',
      titleCn: '买菜',
      difficulty: 'beginner',
      description: 'Shopping at a Cantonese wet market. Practice food vocabulary and bargaining with romanization.',
      cover: '🥬',
      scenes: [
        {
          id: 'scene-1',
          title: '街市',
          lines: [
            {role: '菜販', color: '#6366F1', text: '靚姐，今日啲菜好新鮮，睇下啦！(leng3 ze2, gam1 jat6 di1 coi3 hou2 san1 sin1, tai2 haa5 laa1!)'},
            {role: '顧客', color: '#10B981', text: '呢個菜心幾錢一斤呀？(ni1 go3 coi3 sam1 gei2 cin2 jat1 gan1 aa3?)'},
            {role: '菜販', color: '#6366F1', text: '平啲俾你，八蚊一斤。(peng4 di1 bei2 nei5, baat3 man1 jat1 gan1.)'},
            {role: '顧客', color: '#10B981', text: '貴咗喎，七蚊半賣唔賣呀？(gwai3 zo2 wo3, cat1 man1 bun3 maai6 m4 maai6 aa3?)'},
            {role: '菜販', color: '#6366F1', text: '好啦好啦，開張價俾你，七蚊半。(hou2 laa1 hou2 laa1, hoi1 zoeng1 gaa3 bei2 nei5, cat1 man1 bun3.)'},
            {role: '顧客', color: '#10B981', text: '幫我揀兩斤，唔該晒。(bong1 ngo5 gaan2 loeng5 gan1, m4 goi1 saai3.)'},
          ],
        },
      ],
      quiz: [
        {question: '菜心幾錢一斤？', options: ['六蚊', '七蚊', '八蚊', '九蚊'], correct: 2},
        {question: '顧客還價幾多？', options: ['六蚊半', '七蚊', '七蚊半', '八蚊'], correct: 2},
        {question: '買咗幾斤？', options: ['一斤', '兩斤', '三斤', '四斤'], correct: 1},
      ],
    },

  ],
  fr: [
    {
      id: 'fr-drama-1',
      title: 'À la Boulangerie',
      titleCn: '在面包店',
      difficulty: 'beginner',
      description: 'Buying bread at a French bakery. Practice basic French greetings, numbers, and food vocabulary.',
      cover: '🥖',
      scenes: [
        {
          id: 'scene-1',
          title: 'Acheter du Pain',
          lines: [
            {role: 'Boulanger', color: '#6366F1', text: 'Bonjour madame! Que désirez-vous aujourd\'hui?'},
            {role: 'Cliente', color: '#10B981', text: 'Bonjour. Je voudrais une baguette tradition, s\'il vous plaît.'},
            {role: 'Boulanger', color: '#6366F1', text: 'Avec plaisir. Voulez-vous quelque chose d\'autre? Nous avons des croissants frais.'},
            {role: 'Cliente', color: '#10B981', text: 'Oui, deux croissants aussi. Et une tarte aux pommes?'},
            {role: 'Boulanger', color: '#6366F1', text: 'Bien sûr. La tarte aux pommes est quatre euros cinquante.'},
            {role: 'Cliente', color: '#10B981', text: 'C\'est parfait. Combien ça fait en tout?'},
            {role: 'Boulanger', color: '#6366F1', text: 'Ça fait sept euros vingt. Merci beaucoup et bonne journée!'},
            {role: 'Cliente', color: '#10B981', text: 'Merci à vous aussi. Au revoir!'},
          ],
        },
      ],
      quiz: [
        {question: 'Qu\'est-ce que la cliente achète en premier?', options: [
  'Un croissant',
  'Une baguette tradition',
  'Une tarte',
  'Un pain au chocolat'
], correct: 1},
        {question: 'Combien de croissants veut-elle?', options: [
  'Un',
  'Deux',
  'Trois',
  'Quatre'
], correct: 1},
        {question: 'Combien coûte la tarte aux pommes?', options: [
  '3,50 €',
  '4,50 €',
  '5,50 €',
  '6,50 €'
], correct: 1},
        {question: 'Combien est le total?', options: [
  '6,20 €',
  '7,20 €',
  '8,20 €',
  '9,20 €'
], correct: 1},
      ],
    },
    {
      id: 'fr-drama-2',
      title: 'Au Restaurant',
      titleCn: '在餐厅',
      difficulty: 'beginner',
      description: 'Dining at a French restaurant. Practice food ordering and polite expressions.',
      cover: '🍽️',
      scenes: [
        {
          id: 'scene-1',
          title: 'Dîner',
          lines: [
            {role: 'Serveur', color: '#6366F1', text: 'Bonsoir madame, bienvenue. La table pour combien?'},
            {role: 'Cliente', color: '#10B981', text: 'Bonsoir. Pour deux personnes, s\'il vous plaît.'},
            {role: 'Serveur', color: '#6366F1', text: 'Par ici. Voici la carte. Quel plat vous recommandez?'},
            {role: 'Cliente', color: '#10B981', text: 'Quel est le plat du jour?'},
            {role: 'Serveur', color: '#6366F1', text: 'Aujourd\'hui, c\'est le coq au vin. C\'est délicieux.'},
            {role: 'Cliente', color: '#10B981', text: 'Parfait, je vais prendre ça. Et un verre de vin rouge.'},
            {role: 'Serveur', color: '#6366F1', text: 'Très bon choix. Je reviens tout de suite.'},
          ],
        },
      ],
      quiz: [
        {question: 'Pour combien de personnes?', options: ['Une', 'Deux', 'Trois', 'Quatre'], correct: 1},
        {question: 'Quel est le plat du jour?', options: ['Soupe', 'Coq au vin', 'Salade', 'Poisson'], correct: 1},
        {question: 'Que boit la cliente?', options: ['Eau', 'Vin rouge', 'Bière', 'Café'], correct: 1},
      ],
    },

  ],
  th: [
    {
      id: 'th-drama-1',
      title: 'สั่งอาหาร',
      titleCn: '点餐',
      difficulty: 'beginner',
      description: 'Ordering Thai food at a restaurant. Practice basic Thai with romanization for pronunciation.',
      cover: '🍜',
      scenes: [
        {
          id: 'scene-1',
          title: 'ร้านอาหารไทย',
          lines: [
            {role: 'พนักงาน', color: '#6366F1', text: 'สวัสดีค่ะ กี่ท่านคะ? (sawatdee kha, gee than kha?)'},
            {role: 'ลูกค้า', color: '#10B981', text: 'สวัสดีครับ สองคนครับ (sawatdee khrap, song khon khrap)'},
            {role: 'พนักงาน', color: '#6366F1', text: 'เชิญนั่งตรงนี้ค่ะ นี่เมนูค่ะ (chern nang trong nee kha, nee menu kha)'},
            {role: 'ลูกค้า', color: '#10B981', text: 'ขอผัดไทยหนึ่งจาน กับต้มยำกุ้งหนึ่งถ้วยครับ (khor pad thai neung jan, kap tom yum kung neung thuay khrap)'},
            {role: 'พนักงาน', color: '#6366F1', text: 'เผ็ดมากไหมคะ? (phet mai kha?)'},
            {role: 'ลูกค้า', color: '#10B981', text: 'เผ็ดน้อยครับ แล้วก็ข้าวสวยสองจานครับ (phet noi khrap, laew ko khao suay song jan khrap)'},
            {role: 'พนักงาน', color: '#6366F1', text: 'ได้ค่ะ รอสักครู่นะคะ (dai kha, ro sak kru na kha)'},
          ],
        },
      ],
      quiz: [
        {question: 'กี่คน?', options: [
  'หนึ่ง',
  'สอง',
  'สาม',
  'สี่'
], correct: 1},
        {question: 'ลูกค้าสั่งอะไร?', options: [
  'ผัดไทยและต้มยำกุ้ง',
  'ข้าวผัด',
  'ต้มข่าไก่',
  'แกงเขียวหวาน'
], correct: 0},
        {question: 'เผ็ดมากไหม?', options: [
  'เผ็ดมาก',
  'เผ็ดน้อย',
  'ไม่เผ็ด',
  'ปานกลาง'
], correct: 1},
      ],
    },
    {
      id: 'th-drama-2',
      title: 'ซื้อผลไม้',
      titleCn: '买水果',
      difficulty: 'beginner',
      description: 'Buying fruit in Thai. Practice numbers and polite expressions with romanization.',
      cover: '🥭',
      scenes: [
        {
          id: 'scene-1',
          title: 'ซื้อมะม่วง',
          lines: [
            {role: 'พ่อค้า', color: '#6366F1', text: 'สวัสดีค่ะ มะม่วงหวานมากวันนี้ (sawatdee kha, mamuang wan mak wan ni)'},
            {role: 'ลูกค้า', color: '#10B981', text: 'สวัสดีค่ะ กิโลกรัมเท่าไหร่คะ (sawatdee kha, kilogram thaorai kha)'},
            {role: 'พ่อค้า', color: '#6366F1', text: 'กิโลละ 60 บาทค่ะ (kilo la 60 baht kha)'},
            {role: 'ลูกค้า', color: '#10B981', text: 'เอา 2 กิโลค่ะ (ao 2 kilo kha)'},
            {role: 'พ่อค้า', color: '#6366F1', text: 'ได้ค่ะ 120 บาทค่ะ (dai kha, 120 baht kha)'},
            {role: 'ลูกค้า', color: '#10B981', text: 'นี่ค่ะ ขอบคุณค่ะ (ni kha, khop khun kha)'},
          ],
        },
      ],
      quiz: [
        {question: 'ผลไม้อะไร?', options: ['ส้ม', 'มะม่วง', 'แอปเปิ้ล', 'องุ่น'], correct: 1},
        {question: 'ราคากิโลเท่าไหร่?', options: ['50', '60', '70', '40'], correct: 1},
        {question: 'ซื้อกี่กิโล?', options: ['1', '2', '3', '4'], correct: 1},
      ],
    },

  ],
  de: [
    {
      id: 'de-drama-1',
      title: 'Im Café',
      titleCn: '在咖啡馆',
      difficulty: 'beginner',
      description: 'Ordering coffee in German. Practice basic greetings and polite expressions.',
      cover: '☕',
      scenes: [
        {
          id: 'scene-1',
          title: 'Bestellen',
          lines: [
            {role: 'Barista', color: '#6366F1', text: 'Guten Morgen! Was darf ich Ihnen bringen?'},
            {role: 'Kunde', color: '#10B981', text: 'Guten Morgen. Ich hätte gerne einen Cappuccino, bitte.'},
            {role: 'Barista', color: '#6366F1', text: 'Mit Milch oder Hafermilch?'},
            {role: 'Kunde', color: '#10B981', text: 'Mit Hafermilch, bitte. Und ein Croissant dazu.'},
            {role: 'Barista', color: '#6366F1', text: 'Alles klar. Das macht dann 6,50 Euro.'},
            {role: 'Kunde', color: '#10B981', text: 'Bitte schön. Danke schön!'},
          ],
        },
      ],
      quiz: [
        {question: 'Was bestellt der Kunde?', options: ['Tee', 'Cappuccino', 'Espresso', 'Wasser'], correct: 1},
        {question: 'Was für Milch möchte er?', options: ['Kuhmilch', 'Hafermilch', 'Sojamilch', 'Mandelmilch'], correct: 1},
        {question: 'Wie viel kostet das?', options: ['5,50', '6,50', '7,50', '8,50'], correct: 1},
      ],
    },
    {
      id: 'de-drama-2',
      title: 'Im Supermarkt',
      titleCn: '在超市',
      difficulty: 'beginner',
      description: 'Shopping for groceries in German. Practice food vocabulary and numbers.',
      cover: '🛒',
      scenes: [
        {
          id: 'scene-1',
          title: 'Einkaufen',
          lines: [
            {role: 'Kassierer', color: '#6366F1', text: 'Guten Tag. Haben Sie eine Payback-Karte?'},
            {role: 'Kunde', color: '#10B981', text: 'Nein, leider nicht. Ich habe nur diese Einkäufe.'},
            {role: 'Kassierer', color: '#6366F1', text: 'Das macht 23,80 Euro. Bar oder Karte?'},
            {role: 'Kunde', color: '#10B981', text: 'Mit Karte, bitte. Kann ich eine Tüte bekommen?'},
            {role: 'Kassierer', color: '#6366F1', text: 'Natürlich. Das sind 10 Cent extra.'},
            {role: 'Kunde', color: '#10B981', text: 'Kein Problem. Vielen Dank und auf Wiedersehen!'},
          ],
        },
      ],
      quiz: [
        {question: 'Was hat der Kunde nicht?', options: ['Einkäufe', 'Payback-Karte', 'Geld', 'Tüte'], correct: 1},
        {question: 'Wie bezahlt er?', options: ['Bar', 'Mit Karte', 'Mit Handy', 'Mit Scheck'], correct: 1},
        {question: 'Wie viel kostet die Tüte?', options: ['5 Cent', '10 Cent', '20 Cent', 'Kostenlos'], correct: 1},
      ],
    },
  ],
  it: [
    {
      id: 'it-drama-1',
      title: 'Al Ristorante',
      titleCn: '在餐厅',
      difficulty: 'beginner',
      description: 'Ordering food at an Italian restaurant. Practice dining vocabulary.',
      cover: '🍝',
      scenes: [
        {
          id: 'scene-1',
          title: 'Ordinare',
          lines: [
            {role: 'Cameriere', color: '#6366F1', text: 'Buonasera! Benvenuti al nostro ristorante.'},
            {role: 'Cliente', color: '#10B981', text: 'Buonasera. Un tavolo per tre, per favore.'},
            {role: 'Cameriere', color: '#6366F1', text: 'Certo. Ecco il menù. Cosa desidera ordinare?'},
            {role: 'Cliente', color: '#10B981', text: 'Vorrei gli spaghetti alla carbonara e un\'acqua minerale.'},
            {role: 'Cameriere', color: '#6366F1', text: 'Ottima scelta. Desidera anche il dolce?'},
            {role: 'Cliente', color: '#10B981', text: 'Sì, un tiramisù, grazie.'},
          ],
        },
      ],
      quiz: [
        {question: 'Per quante persone?', options: ['Due', 'Tre', 'Quattro', 'Cinque'], correct: 1},
        {question: 'Cosa ordina il cliente?', options: ['Pizza', 'Spaghetti', 'Risotto', 'Lasagna'], correct: 1},
        {question: 'Che dolce vuole?', options: ['Gelato', 'Tiramisù', 'Cannoli', 'Torta'], correct: 1},
      ],
    },
    {
      id: 'it-drama-2',
      title: 'Al Mercato',
      titleCn: '在市场',
      difficulty: 'beginner',
      description: 'Shopping at an Italian market. Practice food and price vocabulary.',
      cover: '🍅',
      scenes: [
        {
          id: 'scene-1',
          title: 'Spesa',
          lines: [
            {role: 'Venditore', color: '#6366F1', text: 'Buongiorno signora! I pomodori sono freschissimi oggi.'},
            {role: 'Cliente', color: '#10B981', text: 'Buongiorno. Quanto costano al chilo?'},
            {role: 'Venditore', color: '#6366F1', text: 'Due euro e cinquanta al chilo.'},
            {role: 'Cliente', color: '#10B981', text: 'Ne prendo un chilo e mezzo. E queste olive?'},
            {role: 'Venditore', color: '#6366F1', text: 'Le olive sono quattro euro. In tutto sei euro e cinquanta.'},
            {role: 'Cliente', color: '#10B981', text: 'Ecco a lei. Arrivederci!'},
          ],
        },
      ],
      quiz: [
        {question: 'Quanto costano i pomodori?', options: ['1,50', '2,50', '3,50', '4,50'], correct: 1},
        {question: 'Quanti chili prende la cliente?', options: ['Uno', 'Uno e mezzo', 'Due', 'Mezzo'], correct: 1},
        {question: 'Quanto paga in totale?', options: ['5,50', '6,50', '7,50', '8,50'], correct: 1},
      ],
    },
  ],
  pt: [
    {
      id: 'pt-drama-1',
      title: 'No Café',
      titleCn: '在咖啡馆',
      difficulty: 'beginner',
      description: 'Ordering at a Brazilian cafe. Practice Portuguese greetings and food vocabulary.',
      cover: '☕',
      scenes: [
        {
          id: 'scene-1',
          title: 'Pedir',
          lines: [
            {role: 'Garçom', color: '#6366F1', text: 'Bom dia! Bem-vindo ao nosso café.'},
            {role: 'Cliente', color: '#10B981', text: 'Bom dia! Eu gostaria de um café com leite, por favor.'},
            {role: 'Garçom', color: '#6366F1', text: 'Claro. Quer açúcar?'},
            {role: 'Cliente', color: '#10B981', text: 'Sim, um pouco. E também um pão de queijo.'},
            {role: 'Garçom', color: '#6366F1', text: 'Perfeito. Vai ser 12 reais.'},
            {role: 'Cliente', color: '#10B981', text: 'Aqui está. Obrigado!'},
          ],
        },
      ],
      quiz: [
        {question: 'O que o cliente quer beber?', options: ['Chá', 'Café com leite', 'Suco', 'Água'], correct: 1},
        {question: 'O que ele quer comer?', options: ['Pão', 'Pão de queijo', 'Bolo', 'Tapioca'], correct: 1},
        {question: 'Quanto custa?', options: ['10', '12', '15', '8'], correct: 1},
      ],
    },
    {
      id: 'pt-drama-2',
      title: 'Na Farmácia',
      titleCn: '在药店',
      difficulty: 'beginner',
      description: 'Buying medicine at a Portuguese pharmacy. Practice health vocabulary.',
      cover: '💊',
      scenes: [
        {
          id: 'scene-1',
          title: 'Remédio',
          lines: [
            {role: 'Farmacêutico', color: '#6366F1', text: 'Boa tarde. Em que posso ajudar?'},
            {role: 'Cliente', color: '#10B981', text: 'Boa tarde. Estou com dor de garganta.'},
            {role: 'Farmacêutico', color: '#6366F1', text: 'Entendo. Tem febre?'},
            {role: 'Cliente', color: '#10B981', text: 'Um pouco. Ontem à noite.'},
            {role: 'Farmacêutico', color: '#6366F1', text: 'Tome este xarope três vezes ao dia.'},
            {role: 'Cliente', color: '#10B981', text: 'Obrigado. Vou seguir as instruções.'},
          ],
        },
      ],
      quiz: [
        {question: 'O que o cliente sente?', options: ['Dor de cabeça', 'Dor de garganta', 'Dor nas costas', 'Dor de dente'], correct: 1},
        {question: 'Quando teve febre?', options: ['Hoje', 'Ontem à noite', 'Dois dias', 'Semana passada'], correct: 1},
        {question: 'Quantas vezes ao dia?', options: ['Duas', 'Três', 'Quatro', 'Uma'], correct: 1},
      ],
    },
  ],
  ar: [
    {
      id: 'ar-drama-1',
      title: 'في المطعم',
      titleCn: '在餐厅',
      difficulty: 'beginner',
      description: 'Ordering food at an Arabic restaurant. Practice basic Arabic dining phrases with romanization.',
      cover: '🍽️',
      scenes: [
        {
          id: 'scene-1',
          title: 'طلب الطعام',
          lines: [
            {role: 'النادل', color: '#6366F1', text: 'أهلاً وسهلاً! كم شخص؟ (Ahlan wa sahlan! Kam shakhs?)'},
            {role: 'الزبون', color: '#10B981', text: 'شخصان، من فضلك. (Shakhsan, min fadlak.)'},
            {role: 'النادل', color: '#6366F1', text: 'تفضلا. إليك قائمة الطعام. (Tafaddala. Ilayka qaimat al-taam.)'},
            {role: 'الزبون', color: '#10B981', text: 'أريد كباب وسلطة، من فضلك. (Urid kabab wa salata, min fadlak.)'},
            {role: 'النادل', color: '#6366F1', text: 'ممتاز. هل تريد شيئاً آخر؟ (Mumtaz. Hal turid shayan akhar?)'},
            {role: 'الزبون', color: '#10B981', text: 'نعم، عصير برتقال. شكراً جزيلاً. (Naam, asir burtuqal. Shukran jazilan.)'},
          ],
        },
      ],
      quiz: [
        {question: 'كم شخص؟', options: ['واحد', 'اثنان', 'ثلاثة', 'أربعة'], correct: 1},
        {question: 'ماذا يريد الزبون?', options: ['دجاج', 'كباب', 'سمك', 'أرز'], correct: 1},
        {question: 'ماذا يشرب?', options: ['ماء', 'عصير برتقال', 'شاي', 'قهوة'], correct: 1},
      ],
    },
    {
      id: 'ar-drama-2',
      title: 'في السوق',
      titleCn: '在市场',
      difficulty: 'beginner',
      description: 'Shopping at an Arabic market. Practice bargaining and numbers with romanization.',
      cover: '🛒',
      scenes: [
        {
          id: 'scene-1',
          title: 'التسوق',
          lines: [
            {role: 'البائع', color: '#6366F1', text: 'مرحباً! التفاح طازج اليوم. (Marhaban! Al-tuffah tazij al-yawm.)'},
            {role: 'الزبونة', color: '#10B981', text: 'كم سعر الكيلو? (Kam siar al-kilo?)'},
            {role: 'البائع', color: '#6366F1', text: 'خمسة دنانير للكيلو. (Khamsa dananir lil-kilo.)'},
            {role: 'الزبونة', color: '#10B981', text: 'غالٍ. أربعة دنانير؟ (Ghalin. Arbaa dananir?)'},
            {role: 'البائع', color: '#6366F1', text: 'حسناً، أربعة ونصف. (Hasanan, arbaa wa nisf.)'},
            {role: 'الزبونة', color: '#10B981', text: 'ممتاز. أريد كيلو. شكراً. (Mumtaz. Urid kilo. Shukran.)'},
          ],
        },
      ],
      quiz: [
        {question: 'كم كان السعر الأول?', options: ['ثلاثة', 'خمسة', 'أربعة', 'ستة'], correct: 1},
        {question: 'كم دفعت في النهاية?', options: ['أربعة', 'أربعة ونصف', 'خمسة', 'ثلاثة ونصف'], correct: 1},
        {question: 'ماذا اشترت?', options: ['برتقال', 'تفاح', 'موز', 'عنب'], correct: 1},
      ],
    },
  ],
  hi: [
    {
      id: 'hi-drama-1',
      title: 'रसोईघर में',
      titleCn: '在厨房',
      difficulty: 'beginner',
      description: 'Cooking conversation in Hindi. Practice food vocabulary with romanization.',
      cover: '🍛',
      scenes: [
        {
          id: 'scene-1',
          title: 'खाना बनाना',
          lines: [
            {role: 'माँ', color: '#6366F1', text: 'बेटा, क्या तुम मेरी मदद करोगे? (Beta, kya tum meri madad karoge?)'},
            {role: 'बेटा', color: '#10B981', text: 'जी माँ, बताइए क्या करना है? (Ji maa, bataiye kya karna hai?)'},
            {role: 'माँ', color: '#6366F1', text: 'प्याज काटो और टमाटर लाओ। (Pyaz kaato aur tamatar lao.)'},
            {role: 'बेटा', color: '#10B981', text: 'ठीक है, अभी लाता हूँ। (Theek hai, abhi laata hoon.)'},
            {role: 'माँ', color: '#6366F1', text: 'धन्यवाद। आज हम दाल बनाएँगे। (Dhanyavaad. Aaj hum daal banaayenge.)'},
            {role: 'बेटा', color: '#10B981', text: 'बहुत अच्छा, मुझे दाल पसंद है। (Bahut achha, mujhe daal pasand hai.)'},
          ],
        },
      ],
      quiz: [
        {question: 'बेटा किसकी मदद कर रहा है?', options: ['पापा', 'माँ', 'दादी', 'बहन'], correct: 1},
        {question: 'क्या काटना है?', options: ['टमाटर', 'प्याज', 'आलू', 'गाजर'], correct: 1},
        {question: 'आज क्या बनेगा?', options: ['चावल', 'दाल', 'रोटी', 'सब्जी'], correct: 1},
      ],
    },
    {
      id: 'hi-drama-2',
      title: 'दुकान पर',
      titleCn: '在商店',
      difficulty: 'beginner',
      description: 'Shopping in Hindi. Practice numbers and polite expressions with romanization.',
      cover: '🛍️',
      scenes: [
        {
          id: 'scene-1',
          title: 'खरीदारी',
          lines: [
            {role: 'दुकानदार', color: '#6366F1', text: 'नमस्ते! आपको क्या चाहिए? (Namaste! Aapko kya chahiye?)'},
            {role: 'ग्राहक', color: '#10B981', text: 'नमस्ते। क्या आपके पास दूध है? (Namaste. Kya aapke paas doodh hai?)'},
            {role: 'दुकानदार', color: '#6366F1', text: 'हाँ, कितना चाहिए? (Haan, kitna chahiye?)'},
            {role: 'ग्राहक', color: '#10B981', text: 'एक लीटर, और कुछ सब्जियाँ भी। (Ek litre, aur kuch sabziyaan bhi.)'},
            {role: 'दुकानदार', color: '#6366F1', text: 'यह लीजिए। कुल मिलाकर 200 रुपये। (Yeh lijiye. Kul milaakar 200 rupaye.)'},
            {role: 'ग्राहक', color: '#10B981', text: 'यह रहे पैसे। धन्यवाद। (Yeh rahe paise. Dhanyavaad.)'},
          ],
        },
      ],
      quiz: [
        {question: 'ग्राहक को क्या चाहिए?', options: ['रोटी', 'दूध', 'चाय', 'चावल'], correct: 1},
        {question: 'कितना दूध?', options: ['आधा लीटर', 'एक लीटर', 'दो लीटर', 'तीन लीटर'], correct: 1},
        {question: 'कुल कितने रुपये?', options: ['150', '200', '250', '100'], correct: 1},
      ],
    },
  ],
  vi: [
    {
      id: 'vi-drama-1',
      title: 'Ở Quán Cà Phê',
      titleCn: '在咖啡馆',
      difficulty: 'beginner',
      description: 'Ordering coffee in Vietnamese. Practice polite expressions and food vocabulary.',
      cover: '☕',
      scenes: [
        {
          id: 'scene-1',
          title: 'Gọi đồ uống',
          lines: [
            {role: 'Nhân viên', color: '#6366F1', text: 'Chào anh! Anh muốn uống gì ạ?'},
            {role: 'Khách', color: '#10B981', text: 'Chào em. Cho anh một ly cà phê sữa đá.'},
            {role: 'Nhân viên', color: '#6366F1', text: 'Dạ, anh có muốn thêm bánh mì không ạ?'},
            {role: 'Khách', color: '#10B981', text: 'Có, cho anh một ổ bánh mì thịt.'},
            {role: 'Nhân viên', color: '#6366F1', text: 'Dạ vâng. Tổng cộng 45 nghìn đồng ạ.'},
            {role: 'Khách', color: '#10B981', text: 'Đây em. Cảm ơn em nhé!'},
          ],
        },
      ],
      quiz: [
        {question: 'Khách muốn uống gì?', options: ['Trà', 'Cà phê sữa đá', 'Nước cam', 'Sinh tố'], correct: 1},
        {question: 'Khách ăn gì?', options: ['Phở', 'Bánh mì thịt', 'Cơm', 'Bún'], correct: 1},
        {question: 'Tổng bao nhiêu tiền?', options: ['35 nghìn', '45 nghìn', '55 nghìn', '25 nghìn'], correct: 1},
      ],
    },
    {
      id: 'vi-drama-2',
      title: 'Đi Chợ',
      titleCn: '去市场',
      difficulty: 'beginner',
      description: 'Shopping at a Vietnamese market. Practice numbers and bargaining.',
      cover: '🥬',
      scenes: [
        {
          id: 'scene-1',
          title: 'Mua rau',
          lines: [
            {role: 'Người bán', color: '#6366F1', text: 'Chị ơi, rau muống tươi lắm!'},
            {role: 'Khách', color: '#10B981', text: 'Bao nhiêu tiền một bó?'},
            {role: 'Người bán', color: '#6366F1', text: '10 nghìn một bó chị ạ.'},
            {role: 'Khách', color: '#10B981', text: 'Đắt quá. 8 nghìn được không?'},
            {role: 'Người bán', color: '#6366F1', text: 'Thôi được, lấy 9 nghìn đi chị.'},
            {role: 'Khách', color: '#10B981', text: 'Ok em. Cho chị hai bó nhé. Cảm ơn em!'},
          ],
        },
      ],
      quiz: [
        {question: 'Giá ban đầu là bao nhiêu?', options: ['8 nghìn', '10 nghìn', '9 nghìn', '12 nghìn'], correct: 1},
        {question: 'Giá cuối cùng?', options: ['8 nghìn', '9 nghìn', '10 nghìn', '7 nghìn'], correct: 1},
        {question: 'Khách mua bao nhiêu bó?', options: ['Một', 'Hai', 'Ba', 'Bốn'], correct: 1},
      ],
    },
  ],
  tr: [
    {
      id: 'tr-drama-1',
      title: 'Kafede',
      titleCn: '在咖啡馆',
      difficulty: 'beginner',
      description: 'Ordering at a Turkish cafe. Practice basic Turkish phrases.',
      cover: '☕',
      scenes: [
        {
          id: 'scene-1',
          title: 'Sipariş',
          lines: [
            {role: 'Garson', color: '#6366F1', text: 'Merhaba! Hoş geldiniz. Ne içersiniz?'},
            {role: 'Müşteri', color: '#10B981', text: 'Merhaba. Bir Türk kahvesi, lütfen.'},
            {role: 'Garson', color: '#6366F1', text: 'Peki. Şekerli mi, şekersiz mi?'},
            {role: 'Müşteri', color: '#10B981', text: 'Orta şekerli. Ve bir dilim baklava.'},
            {role: 'Garson', color: '#6366F1', text: 'Tabii. Toplam 85 lira.'},
            {role: 'Müşteri', color: '#10B981', text: 'Buyrun. Teşekkür ederim.'},
          ],
        },
      ],
      quiz: [
        {question: 'Müşteri ne içiyor?', options: ['Çay', 'Türk kahvesi', 'Suyu', 'Limonata'], correct: 1},
        {question: 'Tatlı ne istiyor?', options: ['Künefe', 'Baklava', 'Sütlaç', 'Dondurma'], correct: 1},
        {question: 'Toplam ne kadar?', options: ['75', '85', '95', '65'], correct: 1},
      ],
    },
    {
      id: 'tr-drama-2',
      title: 'Pazarda',
      titleCn: '在市场',
      difficulty: 'beginner',
      description: 'Shopping at a Turkish market. Practice numbers and bargaining.',
      cover: '🍅',
      scenes: [
        {
          id: 'scene-1',
          title: 'Pazarlık',
          lines: [
            {role: 'Satıcı', color: '#6366F1', text: 'Buyrun! Domatesler çok taze bugün.'},
            {role: 'Müşteri', color: '#10B981', text: 'Merhaba. Kilo ne kadar?'},
            {role: 'Satıcı', color: '#6366F1', text: '15 lira kilosu.'},
            {role: 'Müşteri', color: '#10B981', text: 'Pahalı. 12 lira olur mu?'},
            {role: 'Satıcı', color: '#6366F1', text: 'Olur, 13 lira yapalım.'},
            {role: 'Müşteri', color: '#10B981', text: 'Tamam. Yarım kilo alayım. Teşekkürler.'},
          ],
        },
      ],
      quiz: [
        {question: 'İlk fiyat neydi?', options: ['12', '15', '13', '10'], correct: 1},
        {question: 'Son fiyat ne oldu?', options: ['12', '13', '15', '14'], correct: 1},
        {question: 'Ne kadar aldı?', options: ['Bir kilo', 'Yarım kilo', 'İki kilo', 'Bir buçuk kilo'], correct: 1},
      ],
    },
  ],
  pl: [
    {
      id: 'pl-drama-1',
      title: 'W Kawiarni',
      titleCn: '在咖啡馆',
      difficulty: 'beginner',
      description: 'Ordering at a Polish cafe. Practice basic Polish phrases.',
      cover: '☕',
      scenes: [
        {
          id: 'scene-1',
          title: 'Zamówienie',
          lines: [
            {role: 'Kelner', color: '#6366F1', text: 'Dzień dobry! Co podać?'},
            {role: 'Klient', color: '#10B981', text: 'Dzień dobry. Proszę kawę z mlekiem.'},
            {role: 'Kelner', color: '#6366F1', text: 'Z cukrem czy bez?'},
            {role: 'Klient', color: '#10B981', text: 'Z cukrem. I jeszcze drożdżówkę.'},
            {role: 'Kelner', color: '#6366F1', text: 'Oczywiście. To będzie 18 złotych.'},
            {role: 'Klient', color: '#10B981', text: 'Proszę. Dziękuję!'},
          ],
        },
      ],
      quiz: [
        {question: 'Co zamawia klient?', options: ['Herbatę', 'Kawę z mlekiem', 'Sok', 'Wodę'], correct: 1},
        {question: 'Co jeszcze chce?', options: ['Ciasto', 'Drożdżówkę', 'Bułkę', 'Rogal'], correct: 1},
        {question: 'Ile płaci?', options: ['15', '18', '20', '12'], correct: 1},
      ],
    },
    {
      id: 'pl-drama-2',
      title: 'W Sklepie',
      titleCn: '在商店',
      difficulty: 'beginner',
      description: 'Shopping in Polish. Practice numbers and polite expressions.',
      cover: '🛒',
      scenes: [
        {
          id: 'scene-1',
          title: 'Zakupy',
          lines: [
            {role: 'Sprzedawca', color: '#6366F1', text: 'Dzień dobry! W czym mogę pomóc?'},
            {role: 'Klient', color: '#10B981', text: 'Dzień dobry. Szukam mleka i chleba.'},
            {role: 'Sprzedawca', color: '#6366F1', text: 'Mleko jest w lodówce, chleb na półce drugiej.'},
            {role: 'Klient', color: '#10B981', text: 'Dziękuję. Ile to będzie?'},
            {role: 'Sprzedawca', color: '#6366F1', text: 'Razem 14 złotych.'},
            {role: 'Klient', color: '#10B981', text: 'Proszę. Do widzenia!'},
          ],
        },
      ],
      quiz: [
        {question: 'Czego szuka klient?', options: ['Masło', 'Mleko i chleb', 'Ser', 'Jajka'], correct: 1},
        {question: 'Gdzie jest chleb?', options: ['W lodówce', 'Na półce drugiej', 'Przy kasie', 'Na stoliku'], correct: 1},
        {question: 'Ile płaci?', options: ['12', '14', '16', '10'], correct: 1},
      ],
    },
  ],
  nl: [
    {
      id: 'nl-drama-1',
      title: 'In het Café',
      titleCn: '在咖啡馆',
      difficulty: 'beginner',
      description: 'Ordering at a Dutch cafe. Practice basic Dutch phrases.',
      cover: '☕',
      scenes: [
        {
          id: 'scene-1',
          title: 'Bestellen',
          lines: [
            {role: 'Ober', color: '#6366F1', text: 'Goedemorgen! Wat mag het zijn?'},
            {role: 'Klant', color: '#10B981', text: 'Goedemorgen. Een koffie met melk, alstublieft.'},
            {role: 'Ober', color: '#6366F1', text: 'Met suiker?'},
            {role: 'Klant', color: '#10B981', text: 'Ja, graag. En een croissant erbij.'},
            {role: 'Ober', color: '#6366F1', text: 'Prima. Dat is 7,50 euro.'},
            {role: 'Klant', color: '#10B981', text: 'Alstublieft. Dank u wel!'},
          ],
        },
      ],
      quiz: [
        {question: 'Wat drinkt de klant?', options: ['Thee', 'Koffie met melk', 'Sap', 'Water'], correct: 1},
        {question: 'Wat eet de klant?', options: ['Brood', 'Croissant', 'Koek', 'Taart'], correct: 1},
        {question: 'Hoeveel kost het?', options: ['6,50', '7,50', '8,50', '5,50'], correct: 1},
      ],
    },
    {
      id: 'nl-drama-2',
      title: 'In de Winkel',
      titleCn: '在商店',
      difficulty: 'beginner',
      description: 'Shopping in Dutch. Practice food vocabulary and numbers.',
      cover: '🛒',
      scenes: [
        {
          id: 'scene-1',
          title: 'Winkelen',
          lines: [
            {role: 'Verkoper', color: '#6366F1', text: 'Goedendag! Kan ik u helpen?'},
            {role: 'Klant', color: '#10B981', text: 'Goedendag. Ik zoek appels en bananen.'},
            {role: 'Verkoper', color: '#6366F1', text: 'De appels zijn 2 euro per kilo, de bananen 1,80.'},
            {role: 'Klant', color: '#10B981', text: 'Dan neem ik een kilo appels en een kilo bananen.'},
            {role: 'Verkoper', color: '#6366F1', text: 'Goed. Samen 3,80 euro.'},
            {role: 'Klant', color: '#10B981', text: 'Alstublieft. Tot ziens!'},
          ],
        },
      ],
      quiz: [
        {question: 'Wat zoekt de klant?', options: ['Peren', 'Appels en bananen', 'Druiven', 'Sinaasappels'], correct: 1},
        {question: 'Hoeveel kosten de appels?', options: ['1,80', '2,00', '2,50', '1,50'], correct: 1},
        {question: 'Wat is het totaal?', options: ['3,80', '4,80', '2,80', '5,80'], correct: 0},
      ],
    },
  ],
  el: [
    {
      id: 'el-drama-1',
      title: 'Στο Καφενείο',
      titleCn: '在咖啡馆',
      difficulty: 'beginner',
      description: 'Ordering at a Greek cafe. Practice basic Greek with romanization.',
      cover: '☕',
      scenes: [
        {
          id: 'scene-1',
          title: 'Παραγγελία',
          lines: [
            {role: 'Σερβιτόρος', color: '#6366F1', text: 'Καλημέρα! Τι θα πάρετε? (Kalimera! Ti tha parete?)'},
            {role: 'Πελάτης', color: '#10B981', text: 'Καλημέρα. Έναν φραπέ, παρακαλώ. (Kalimera. Enan frape, parakalo.)'},
            {role: 'Σερβιτόρος', color: '#6366F1', text: 'Με γάλα ή σκέτο? (Me gala i sketo?)'},
            {role: 'Πελάτης', color: '#10B981', text: 'Με λίγο γάλα. Και μια τυρόπιτα. (Me ligo gala. Kai mia tiropita.)'},
            {role: 'Σερβιτόρος', color: '#6366F1', text: 'Έγινε. 6 ευρώ. (Egine. 6 evro.)'},
            {role: 'Πελάτης', color: '#10B981', text: 'Ορίστε. Ευχαριστώ! (Oriste. Efharisto!)'},
          ],
        },
      ],
      quiz: [
        {question: 'Τι πίνει ο πελάτης?', options: ['Τσάι', 'Φραπέ', 'Χυμό', 'Νερό'], correct: 1},
        {question: 'Τι τρώει?', options: ['Σπανακόπιτα', 'Τυρόπιτα', 'Μπουγάτσα', 'Κέικ'], correct: 1},
        {question: 'Πόσο κοστίζει?', options: ['5', '6', '7', '4'], correct: 1},
      ],
    },
    {
      id: 'el-drama-2',
      title: 'Στο Μαγαζί',
      titleCn: '在商店',
      difficulty: 'beginner',
      description: 'Shopping in Greek. Practice numbers and polite expressions with romanization.',
      cover: '🛒',
      scenes: [
        {
          id: 'scene-1',
          title: 'Ψώνια',
          lines: [
            {role: 'Πωλητής', color: '#6366F1', text: 'Καλησπέρα! Μπορώ να βοηθήσω? (Kalispera! Boro na voithiso?)'},
            {role: 'Πελάτης', color: '#10B981', text: 'Καλησπέρα. Ψάχνω για ψωμί και γάλα. (Kalispera. Psachno gia psomi kai gala.)'},
            {role: 'Πωλητής', color: '#6366F1', text: 'Το ψωμί είναι εκεί, το γάλα στο ψυγείο. (To psomi einai eki, to gala sto psigio.)'},
            {role: 'Πελάτης', color: '#10B981', text: 'Ευχαριστώ. Πόσο κάνει? (Efharisto. Poso kani?)'},
            {role: 'Πωλητής', color: '#6366F1', text: '5 ευρώ συνολικά. (5 evro sinolika.)'},
            {role: 'Πελάτης', color: '#10B981', text: 'Ορίστε. Γεια σας! (Oriste. Ya sas!)'},
          ],
        },
      ],
      quiz: [
        {question: 'Τι ψάχνει ο πελάτης?', options: ['Τυρί', 'Ψωμί και γάλα', 'Κρέας', 'Φρούτα'], correct: 1},
        {question: 'Πού είναι το γάλα?', options: ['Στο ράφι', 'Στο ψυγείο', 'Στον πάγκο', 'Στην πόρτα'], correct: 1},
        {question: 'Πόσο πληρώνει?', options: ['4', '5', '6', '3'], correct: 1},
      ],
    },
  ],
  nan: [
    {
      id: 'nan-drama-1',
      title: '佇咖啡店',
      titleCn: '在咖啡店',
      difficulty: 'beginner',
      description: 'Ordering at a Taiwanese coffee shop. Practice Hokkien with romanization.',
      cover: '☕',
      scenes: [
        {
          id: 'scene-1',
          title: '點咖啡',
          lines: [
            {role: '店員', color: '#6366F1', text: '你好！欲啉啥物？ (li-ho! beh lim siann-mih?)'},
            {role: '客人', color: '#10B981', text: '你好！一杯咖啡加奶，多謝。 (li-ho! tsit pue ka-pi ka ling, to-sia.)'},
            {role: '店員', color: '#6366F1', text: '欲加糖無？ (beh ka thnng bo?)'},
            {role: '客人', color: '#10B981', text: '少寡糖。閣加一个可頌。 (tsió kuá thnng. koh ka tsit ê khó-sóng.)'},
            {role: '店員', color: '#6366F1', text: '好，總共兩百箍。 (ho, tsóng-kiōnn nn̄g-pah khoo.)'},
            {role: '客人', color: '#10B981', text: '這啦，多謝！ (tsit la, to-sia!)'},
          ],
        },
      ],
      quiz: [
        {question: '客人欲啉啥？', options: ['茶', '咖啡', '水', '果汁'], correct: 1},
        {question: '欲加啥甜頭？', options: ['多糖', '少寡糖', '無糖', '蜂蜜'], correct: 1},
        {question: '總共幾箍？', options: ['一百', '兩百', '三百', '四百'], correct: 1},
      ],
    },
    {
      id: 'nan-drama-2',
      title: '佇菜市仔',
      titleCn: '在菜市场',
      difficulty: 'beginner',
      description: 'Shopping at a Hokkien market. Practice numbers and bargaining.',
      cover: '🥬',
      scenes: [
        {
          id: 'scene-1',
          title: '買菜',
          lines: [
            {role: '菜販', color: '#6366F1', text: '來喔！青菜誠新鮮！ (lâi oh! tshenn-tshai tsiânn sin-tshinn!)'},
            {role: '客人', color: '#10B981', text: '這个一斤幾箍？ (tsit ê tsi̍t kin kuí khoo?)'},
            {role: '菜販', color: '#6366F1', text: '一斤三十箍。 (tsi̍t kin sann-tsa̍p khoo.)'},
            {role: '客人', color: '#10B981', text: '傷貴啦，二十五好無？ (siunn kuì la, jī-tsa̍p-gōo hó--bô?)'},
            {role: '菜販', color: '#6366F1', text: '好啦，賣你啦。 (hó--ah, bē lí la.)'},
            {role: '客人', color: '#10B981', text: '多謝！買兩斤。 (to-sia! bé nn̄g kin.)'},
          ],
        },
      ],
      quiz: [
        {question: '青菜一斤幾箍？', options: ['二十', '三十', '四十', '五十'], correct: 1},
        {question: '最後一斤賣幾箍？', options: ['二十', '二十五', '三十', '三十五'], correct: 1},
        {question: '客人買幾斤？', options: ['一斤', '兩斤', '三斤', '四斤'], correct: 1},
      ],
    },
  ],
  "zh-SC": [
    {
      id: 'zh-SC-drama-1',
      title: '茶馆头',
      titleCn: '在茶馆',
      difficulty: 'beginner',
      description: 'Ordering tea in Sichuan dialect. Practice local expressions.',
      cover: '🍵',
      scenes: [
        {
          id: 'scene-1',
          title: '泡茶',
          lines: [
            {role: '老板', color: '#6366F1', text: '欢迎光临！想喝点啥子茶？'},
            {role: '客人', color: '#10B981', text: '来杯盖碗茶，少放点茶叶。'},
            {role: '老板', color: '#6366F1', text: '要得。要不要来点瓜子？'},
            {role: '客人', color: '#10B981', text: '要得，再来碗担担面。'},
            {role: '老板', color: '#6366F1', text: '好嘞，一共二十五块。'},
            {role: '客人', color: '#10B981', text: '给你钱，谢谢哈！'},
          ],
        },
      ],
      quiz: [
        {question: '客人想喝啥子？', options: ['咖啡', '盖碗茶', '可乐', '果汁'], correct: 1},
        {question: '还要了啥子？', options: ['瓜子', '担担面', '花生', '豆花'], correct: 1},
        {question: '一共好多钱？', options: ['二十', '二十五', '三十', '三十五'], correct: 1},
      ],
    },
    {
      id: 'zh-SC-drama-2',
      title: '菜市场',
      titleCn: '菜市场',
      difficulty: 'beginner',
      description: 'Shopping at a Sichuan market. Practice bargaining in dialect.',
      cover: '🌶️',
      scenes: [
        {
          id: 'scene-1',
          title: '买菜',
          lines: [
            {role: '菜贩', color: '#6366F1', text: '来嘛来嘛，海椒新鲜得很！'},
            {role: '顾客', color: '#10B981', text: '这个海椒咋个卖？'},
            {role: '菜贩', color: '#6366F1', text: '八块钱一斤，安逸得很。'},
            {role: '顾客', color: '#10B981', text: '贵了点，七块五卖不卖？'},
            {role: '菜贩', color: '#6366F1', text: '好嘛好嘛，拿给你。'},
            {role: '顾客', color: '#10B981', text: '要得，给我称两斤。'},
          ],
        },
      ],
      quiz: [
        {question: '海椒好多钱一斤？', options: ['七块', '八块', '九块', '十块'], correct: 1},
        {question: '最后好多钱一斤？', options: ['七块', '七块五', '八块', '六块'], correct: 1},
        {question: '顾客买了几斤？', options: ['一斤', '两斤', '三斤', '四斤'], correct: 1},
      ],
    },
  ],
  "zh-DB": [
    {
      id: 'zh-DB-drama-1',
      title: '烧烤摊',
      titleCn: '烧烤摊',
      difficulty: 'beginner',
      description: 'Ordering at a Northeast BBQ stall. Practice local dialect.',
      cover: '🍢',
      scenes: [
        {
          id: 'scene-1',
          title: '点串',
          lines: [
            {role: '老板', color: '#6366F1', text: '来啦老弟！整点啥？'},
            {role: '客人', color: '#10B981', text: '哥，来十个羊肉串，再来瓶啤酒。'},
            {role: '老板', color: '#6366F1', text: '得嘞！要不要整个烤茄子？'},
            {role: '客人', color: '#10B981', text: '整一个，多搁点蒜。'},
            {role: '老板', color: '#6366F1', text: '好嘞，一共四十五。'},
            {role: '客人', color: '#10B981', text: '给你钱，谢了啊！'},
          ],
        },
      ],
      quiz: [
        {question: '客人点了啥？', options: ['羊肉串', '牛肉串', '鸡翅', '鱼'], correct: 0},
        {question: '还喝了啥？', options: ['白酒', '啤酒', '可乐', '果汁'], correct: 1},
        {question: '一共多少钱？', options: ['四十', '四十五', '五十', '三十五'], correct: 1},
      ],
    },
    {
      id: 'zh-DB-drama-2',
      title: '早市',
      titleCn: '早市',
      difficulty: 'beginner',
      description: 'Shopping at a Northeast morning market. Practice bargaining.',
      cover: '🥟',
      scenes: [
        {
          id: 'scene-1',
          title: '逛早市',
          lines: [
            {role: '摊贩', color: '#6366F1', text: '快来快来，白菜老好了！'},
            {role: '顾客', color: '#10B981', text: '这白菜咋卖的？'},
            {role: '摊贩', color: '#6366F1', text: '一块五一斤，嘎嘎新鲜。'},
            {role: '顾客', color: '#10B981', text: '便宜点呗，我买两棵。'},
            {role: '摊贩', color: '#6366F1', text: '行，按一块二给你。'},
            {role: '顾客', color: '#10B981', text: '好嘞，来两棵，谢谢啊！'},
          ],
        },
      ],
      quiz: [
        {question: '白菜原价多少？', options: ['一块', '一块二', '一块五', '两块'], correct: 2},
        {question: '最后多少钱一斤？', options: ['一块', '一块二', '一块五', '八毛'], correct: 1},
        {question: '顾客买了几棵？', options: ['一棵', '两棵', '三棵', '四棵'], correct: 1},
      ],
    },
  ],
  sh: [
    {
      id: 'sh-drama-1',
      title: '喫茶店',
      titleCn: '在茶馆',
      difficulty: 'beginner',
      description: 'Ordering tea in Shanghai dialect. Practice local Wu expressions.',
      cover: '🍵',
      scenes: [
        {
          id: 'scene-1',
          title: '泡茶',
          lines: [
            {role: '老板', color: '#6366F1', text: '侬好！想喫啥个茶？'},
            {role: '客人', color: '#10B981', text: '侬好！来杯龙井茶。'},
            {role: '老板', color: '#6366F1', text: '要得。要勿要配眼小点心？'},
            {role: '客人', color: '#10B981', text: '好个，再来只生煎馒头。'},
            {role: '老板', color: '#6366F1', text: '好个，一共廿块。'},
            {role: '客人', color: '#10B981', text: '侬好，钞票拨侬，谢谢！'},
          ],
        },
      ],
      quiz: [
        {question: '客人想喫啥茶？', options: ['普洱', '龙井', '铁观音', '菊花'], correct: 1},
        {question: '还要了啥？', options: ['小笼', '生煎', '馄饨', '汤圆'], correct: 1},
        {question: '一共几钿？', options: ['十五', '廿', '廿五', '三十'], correct: 1},
      ],
    },
    {
      id: 'sh-drama-2',
      title: '小菜场',
      titleCn: '小菜场',
      difficulty: 'beginner',
      description: 'Shopping at a Shanghai market. Practice Wu dialect bargaining.',
      cover: '🥬',
      scenes: [
        {
          id: 'scene-1',
          title: '买菜',
          lines: [
            {role: '摊贩', color: '#6366F1', text: '来呀来呀，青菜老新鲜个！'},
            {role: '顾客', color: '#10B981', text: '搿个青菜哪能卖法？'},
            {role: '摊贩', color: '#6366F1', text: '三块一斤，便宜来西。'},
            {role: '顾客', color: '#10B981', text: '便宜眼好伐？我买两斤。'},
            {role: '摊贩', color: '#6366F1', text: '好个好个，两块八拨侬。'},
            {role: '顾客', color: '#10B981', text: '要得，称两斤，谢谢！'},
          ],
        },
      ],
      quiz: [
        {question: '青菜原价几块？', options: ['两', '三', '四', '五'], correct: 1},
        {question: '最后几块一斤？', options: ['两块五', '两块八', '三块', '两块'], correct: 1},
        {question: '顾客买了几斤？', options: ['一斤', '两斤', '三斤', '四斤'], correct: 1},
      ],
    },
  ],
  hak: [
    {
      id: 'hak-drama-1',
      title: '茶館肚',
      titleCn: '在茶馆',
      difficulty: 'beginner',
      description: 'Ordering tea in Hakka. Practice Hakka expressions with romanization.',
      cover: '🍵',
      scenes: [
        {
          id: 'scene-1',
          title: '泡茶',
          lines: [
            {role: '店員', color: '#6366F1', text: '你好！愛食麼個茶？ (ngi ho! oi sit mak kai cha?)'},
            {role: '客人', color: '#10B981', text: '你好！一杯綠茶，多謝。 (ngi ho! yit pui luk cha, to sia.)'},
            {role: '店員', color: '#6366F1', text: '愛加糖無？ (oi ka thong mo?)'},
            {role: '客人', color: '#10B981', text: '少少糖。還愛一個蘿蔔粄。 (sau sau thong. han oi yit kai lo pet pan.)'},
            {role: '店員', color: '#6366F1', text: '好，總共十五塊錢。 (ho, chung kiung sip ng kwai chhien.)'},
            {role: '客人', color: '#10B981', text: '這兜錢，多謝！ (lia teu chhien, to sia!)'},
          ],
        },
      ],
      quiz: [
        {question: '客人愛食麼茶？', options: ['紅茶', '綠茶', '烏龍', '普洱'], correct: 1},
        {question: '還愛麼个？', options: ['蘿蔔粄', '菜包', '粽子', '年糕'], correct: 0},
        {question: '總共幾多錢？', options: ['十塊', '十五塊', '二十塊', '二十五塊'], correct: 1},
      ],
    },
    {
      id: 'hak-drama-2',
      title: '菜市場',
      titleCn: '菜市场',
      difficulty: 'beginner',
      description: 'Shopping at a Hakka market. Practice numbers and bargaining.',
      cover: '🥬',
      scenes: [
        {
          id: 'scene-1',
          title: '買菜',
          lines: [
            {role: '菜販', color: '#6366F1', text: '來啊來啊，青菜當靚！ (loi a loi a, chin chhong tong liang!)'},
            {role: '顧客', color: '#10B981', text: '這個幾多錢一斤？ (chia kai ki to chhien yit kin?)'},
            {role: '菜販', color: '#6366F1', text: '五塊錢一斤，靚到不得了。 (ng kwai chhien yit kin, liang to pet tet lieu.)'},
            {role: '顧客', color: '#10B981', text: '貴了滴，四五賣無？ (kui lieu ti, si ng mai mo?)'},
            {role: '菜販', color: '#6366F1', text: '好，賣你咧。 (ho, mai ngi le.)'},
            {role: '顧客', color: '#10B981', text: '多謝，買兩斤。 (to sia, mai liong kin.)'},
          ],
        },
      ],
      quiz: [
        {question: '青菜一斤幾多錢？', options: ['四塊', '五塊', '六塊', '七塊'], correct: 1},
        {question: '最後幾多錢一斤？', options: ['四塊', '四塊五', '五塊', '三塊五'], correct: 1},
        {question: '顧客買幾斤？', options: ['一斤', '兩斤', '三斤', '四斤'], correct: 1},
      ],
    },
  ],
};

// Fallback for languages without pre-built scripts
function getDramaScripts(language) {
  return DRAMA_SCRIPTS[language] || DRAMA_SCRIPTS['en'] || [];
}

Object.assign(window, { DRAMA_SCRIPTS, getDramaScripts });