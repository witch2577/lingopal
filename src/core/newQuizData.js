const NEW_QUIZ_DATA = {
"en": {
    "themes": [
      {
        "id": "basic",
        "name": "基础词汇",
        "color": "#1D4ED8",
        "levels": [
          {
            "levelId": "en-basic-01",
            "title": "问候与礼貌",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [],
            "questions": [
              {
                "id": "en-t-00",
                "type": "translate",
                "question": "你好",
                "options": [
                  "goodbye",
                  "hello",
                  "sorry",
                  "please"
                ],
                "correctAnswer": "hello",
                "difficulty": 1
              },
              {
                "id": "en-t-01",
                "type": "translate",
                "question": "谢谢",
                "options": [
                  "please",
                  "sorry",
                  "thanks",
                  "hello"
                ],
                "correctAnswer": "thanks",
                "difficulty": 1
              },
              {
                "id": "en-t-02",
                "type": "translate",
                "question": "对不起",
                "options": [
                  "welcome",
                  "thanks",
                  "sorry",
                  "goodbye"
                ],
                "correctAnswer": "sorry",
                "difficulty": 1
              },
              {
                "id": "en-f-00",
                "type": "fill-blank",
                "question": "___ afternoon! （下午好）",
                "options": [
                  "Good",
                  "Nice",
                  "Fine",
                  "Well"
                ],
                "correctAnswer": "Good",
                "difficulty": 2
              },
              {
                "id": "en-m-00",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "hello",
                    "你好"
                  ],
                  [
                    "thanks",
                    "谢谢"
                  ],
                  [
                    "sorry",
                    "对不起"
                  ],
                  [
                    "goodbye",
                    "再见"
                  ]
                ]
              },
              {
                "id": "en-d-00",
                "type": "dictation",
                "question": "听写：请",
                "correctAnswer": "please",
                "difficulty": 2,
                "audioWord": "please"
              }
            ]
          },
          {
            "levelId": "en-basic-02",
            "title": "家庭与人物",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "en-basic-01"
            ],
            "questions": [
              {
                "id": "en-t-03",
                "type": "translate",
                "question": "母亲",
                "options": [
                  "mother",
                  "father",
                  "brother",
                  "sister"
                ],
                "correctAnswer": "mother",
                "difficulty": 1
              },
              {
                "id": "en-t-04",
                "type": "translate",
                "question": "儿子",
                "options": [
                  "daughter",
                  "son",
                  "uncle",
                  "aunt"
                ],
                "correctAnswer": "son",
                "difficulty": 1
              },
              {
                "id": "en-t-05",
                "type": "translate",
                "question": "祖父",
                "options": [
                  "grandson",
                  "grandmother",
                  "grandfather",
                  "cousin"
                ],
                "correctAnswer": "grandfather",
                "difficulty": 1
              },
              {
                "id": "en-f-01",
                "type": "fill-blank",
                "question": "She is my ___. （她是我的姐姐）",
                "options": [
                  "sister",
                  "brother",
                  "mother",
                  "daughter"
                ],
                "correctAnswer": "sister",
                "difficulty": 2
              },
              {
                "id": "en-m-01",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "father",
                    "父亲"
                  ],
                  [
                    "mother",
                    "母亲"
                  ],
                  [
                    "brother",
                    "兄弟"
                  ],
                  [
                    "sister",
                    "姐妹"
                  ]
                ]
              },
              {
                "id": "en-d-01",
                "type": "dictation",
                "question": "听写：父亲",
                "correctAnswer": "father",
                "difficulty": 2,
                "audioWord": "father"
              }
            ]
          },
          {
            "levelId": "en-basic-03",
            "title": "数字与颜色",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "en-basic-02"
            ],
            "questions": [
              {
                "id": "en-t-06",
                "type": "translate",
                "question": "三",
                "options": [
                  "two",
                  "three",
                  "ten",
                  "thirteen"
                ],
                "correctAnswer": "three",
                "difficulty": 1
              },
              {
                "id": "en-t-07",
                "type": "translate",
                "question": "绿色",
                "options": [
                  "gray",
                  "green",
                  "great",
                  "grown"
                ],
                "correctAnswer": "green",
                "difficulty": 1
              },
              {
                "id": "en-f-02",
                "type": "fill-blank",
                "question": "I have ___ books. （我有五本书）",
                "options": [
                  "four",
                  "five",
                  "six",
                  "nine"
                ],
                "correctAnswer": "five",
                "difficulty": 2
              },
              {
                "id": "en-m-02",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "one",
                    "一"
                  ],
                  [
                    "red",
                    "红色"
                  ],
                  [
                    "blue",
                    "蓝色"
                  ],
                  [
                    "seven",
                    "七"
                  ]
                ]
              },
              {
                "id": "en-d-02",
                "type": "dictation",
                "question": "听写：八",
                "correctAnswer": "eight",
                "difficulty": 2,
                "audioWord": "eight"
              },
              {
                "id": "en-r-00",
                "type": "repeat",
                "question": "跟读：purple",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "purple"
              }
            ]
          }
        ]
      },
      {
        "id": "daily",
        "name": "日常对话",
        "color": "#60A5FA",
        "levels": [
          {
            "levelId": "en-daily-01",
            "title": "自我介绍",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "en-t-08",
                "type": "translate",
                "question": "我的名字是…",
                "options": [
                  "My name is...",
                  "I am fine",
                  "See you later",
                  "How are you"
                ],
                "correctAnswer": "My name is...",
                "difficulty": 1
              },
              {
                "id": "en-t-09",
                "type": "translate",
                "question": "你多大了？",
                "options": [
                  "How old are you?",
                  "How are you?",
                  "What's your name?",
                  "Where are you from?"
                ],
                "correctAnswer": "How old are you?",
                "difficulty": 1
              },
              {
                "id": "en-f-03",
                "type": "fill-blank",
                "question": "I ___ a student. （我是一名学生）",
                "options": [
                  "am",
                  "is",
                  "are",
                  "be"
                ],
                "correctAnswer": "am",
                "difficulty": 2
              },
              {
                "id": "en-m-03",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "My name is...",
                    "我的名字是…"
                  ],
                  [
                    "I am from...",
                    "我来自…"
                  ],
                  [
                    "Nice to meet you",
                    "很高兴认识你"
                  ],
                  [
                    "Where do you live?",
                    "你住在哪？"
                  ]
                ]
              },
              {
                "id": "en-d-03",
                "type": "dictation",
                "question": "听写：名字",
                "correctAnswer": "name",
                "difficulty": 2,
                "audioWord": "name"
              },
              {
                "id": "en-r-01",
                "type": "repeat",
                "question": "跟读：Nice to meet you",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "Nice to meet you"
              }
            ]
          },
          {
            "levelId": "en-daily-02",
            "title": "购物与消费",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "en-daily-01"
            ],
            "questions": [
              {
                "id": "en-t-10",
                "type": "translate",
                "question": "多少钱？",
                "options": [
                  "How much is it?",
                  "How many is it?",
                  "What time is it?",
                  "Where is it?"
                ],
                "correctAnswer": "How much is it?",
                "difficulty": 1
              },
              {
                "id": "en-t-11",
                "type": "translate",
                "question": "太贵了",
                "options": [
                  "It's too expensive",
                  "It's very cheap",
                  "It's free",
                  "It's on sale"
                ],
                "correctAnswer": "It's too expensive",
                "difficulty": 1
              },
              {
                "id": "en-t-12",
                "type": "translate",
                "question": "我能看看吗？",
                "options": [
                  "May I see it?",
                  "Can I buy it?",
                  "Do you like it?",
                  "Is it new?"
                ],
                "correctAnswer": "May I see it?",
                "difficulty": 1
              },
              {
                "id": "en-f-04",
                "type": "fill-blank",
                "question": "Can you give me a ___? （能便宜一点吗）",
                "options": [
                  "discount",
                  "dollar",
                  "dish",
                  "dress"
                ],
                "correctAnswer": "discount",
                "difficulty": 2
              },
              {
                "id": "en-m-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "price",
                    "价格"
                  ],
                  [
                    "expensive",
                    "贵的"
                  ],
                  [
                    "cheap",
                    "便宜的"
                  ],
                  [
                    "discount",
                    "折扣"
                  ]
                ]
              },
              {
                "id": "en-d-04",
                "type": "dictation",
                "question": "听写：购物",
                "correctAnswer": "shopping",
                "difficulty": 2,
                "audioWord": "shopping"
              }
            ]
          }
        ]
      },
      {
        "id": "scenario",
        "name": "场景实战",
        "color": "#EF4444",
        "levels": [
          {
            "levelId": "en-scenario-01",
            "title": "交通出行",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "en-t-13",
                "type": "translate",
                "question": "地铁站",
                "options": [
                  "subway station",
                  "bus stop",
                  "train ticket",
                  "airport"
                ],
                "correctAnswer": "subway station",
                "difficulty": 1
              },
              {
                "id": "en-t-14",
                "type": "translate",
                "question": "直走",
                "options": [
                  "turn left",
                  "turn right",
                  "go straight",
                  "go back"
                ],
                "correctAnswer": "go straight",
                "difficulty": 1
              },
              {
                "id": "en-f-05",
                "type": "fill-blank",
                "question": "I want to go to the ___. （我想去机场）",
                "options": [
                  "airport",
                  "station",
                  "hospital",
                  "market"
                ],
                "correctAnswer": "airport",
                "difficulty": 2
              },
              {
                "id": "en-m-05",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "left",
                    "左"
                  ],
                  [
                    "right",
                    "右"
                  ],
                  [
                    "bus",
                    "公交车"
                  ],
                  [
                    "taxi",
                    "出租车"
                  ]
                ]
              },
              {
                "id": "en-d-05",
                "type": "dictation",
                "question": "听写：火车",
                "correctAnswer": "train",
                "difficulty": 2,
                "audioWord": "train"
              },
              {
                "id": "en-r-02",
                "type": "repeat",
                "question": "跟读：Where is the bus stop?",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "Where is the bus stop?"
              }
            ]
          },
          {
            "levelId": "en-scenario-02",
            "title": "酒店与应急",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "en-scenario-01"
            ],
            "questions": [
              {
                "id": "en-t-15",
                "type": "translate",
                "question": "我有一个预订",
                "options": [
                  "I have a reservation",
                  "I need a doctor",
                  "I lost my bag",
                  "I want to check out"
                ],
                "correctAnswer": "I have a reservation",
                "difficulty": 1
              },
              {
                "id": "en-t-16",
                "type": "translate",
                "question": "帮助",
                "options": [
                  "help",
                  "hotel",
                  "hope",
                  "home"
                ],
                "correctAnswer": "help",
                "difficulty": 1
              },
              {
                "id": "en-f-06",
                "type": "fill-blank",
                "question": "I want to ___ a room. （我想订一个房间）",
                "options": [
                  "book",
                  "look",
                  "cook",
                  "take"
                ],
                "correctAnswer": "book",
                "difficulty": 2
              },
              {
                "id": "en-m-06",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "check in",
                    "入住"
                  ],
                  [
                    "check out",
                    "退房"
                  ],
                  [
                    "single room",
                    "单人间"
                  ],
                  [
                    "room key",
                    "房间钥匙"
                  ]
                ]
              },
              {
                "id": "en-d-06",
                "type": "dictation",
                "question": "听写：钥匙",
                "correctAnswer": "key",
                "difficulty": 2,
                "audioWord": "key"
              },
              {
                "id": "en-r-03",
                "type": "repeat",
                "question": "跟读：Can you help me?",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "Can you help me?"
              }
            ]
          },
          {
            "levelId": "en-scenario-03",
            "title": "就医买药",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "en-scenario-02"
            ],
            "questions": [
              {
                "id": "en-t-17",
                "type": "translate",
                "question": "我需要看医生",
                "options": [
                  "I need to see a doctor",
                  "I need a room",
                  "I want to eat",
                  "I feel happy"
                ],
                "correctAnswer": "I need to see a doctor",
                "difficulty": 1
              },
              {
                "id": "en-t-18",
                "type": "translate",
                "question": "头痛",
                "options": [
                  "headache",
                  "toothache",
                  "backache",
                  "stomachache"
                ],
                "correctAnswer": "headache",
                "difficulty": 1
              },
              {
                "id": "en-t-19",
                "type": "translate",
                "question": "药",
                "options": [
                  "medicine",
                  "medical",
                  "magazine",
                  "machine"
                ],
                "correctAnswer": "medicine",
                "difficulty": 1
              },
              {
                "id": "en-f-07",
                "type": "fill-blank",
                "question": "My head ___. （我头痛）",
                "options": [
                  "hurts",
                  "hearts",
                  "heads",
                  "helps"
                ],
                "correctAnswer": "hurts",
                "difficulty": 2
              },
              {
                "id": "en-f-08",
                "type": "fill-blank",
                "question": "I have a ___. （我感冒了）",
                "options": [
                  "cold",
                  "fever",
                  "cough",
                  "rest"
                ],
                "correctAnswer": "cold",
                "difficulty": 2
              },
              {
                "id": "en-d-07",
                "type": "dictation",
                "question": "听写：发烧",
                "correctAnswer": "fever",
                "difficulty": 2,
                "audioWord": "fever"
              }
            ]
          }
        ]
      },
      {
        "id": "grammar",
        "name": "语法进阶",
        "color": "#F59E0B",
        "levels": [
          {
            "levelId": "en-grammar-01",
            "title": "动词基础",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "en-t-20",
                "type": "translate",
                "question": "吃",
                "options": [
                  "eat",
                  "ate",
                  "eating",
                  "edible"
                ],
                "correctAnswer": "eat",
                "difficulty": 1
              },
              {
                "id": "en-t-21",
                "type": "translate",
                "question": "去了（过去式）",
                "options": [
                  "go",
                  "goes",
                  "went",
                  "gone"
                ],
                "correctAnswer": "went",
                "difficulty": 1
              },
              {
                "id": "en-f-09",
                "type": "fill-blank",
                "question": "She ___ to school every day. （她每天去上学）",
                "options": [
                  "goes",
                  "go",
                  "went",
                  "going"
                ],
                "correctAnswer": "goes",
                "difficulty": 2
              },
              {
                "id": "en-f-10",
                "type": "fill-blank",
                "question": "I ___ breakfast this morning. （我今天早上吃了早餐）",
                "options": [
                  "ate",
                  "eat",
                  "eats",
                  "eating"
                ],
                "correctAnswer": "ate",
                "difficulty": 2
              },
              {
                "id": "en-m-07",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "go",
                    "去"
                  ],
                  [
                    "eat",
                    "吃"
                  ],
                  [
                    "drink",
                    "喝"
                  ],
                  [
                    "read",
                    "读"
                  ]
                ]
              },
              {
                "id": "en-r-04",
                "type": "repeat",
                "question": "跟读：I drink water every day.",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "I drink water every day."
              }
            ]
          }
        ]
      },
      {
        "id": "culture",
        "name": "文化拓展",
        "color": "#8B5CF6",
        "levels": [
          {
            "levelId": "en-culture-01",
            "title": "节日与传统",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "en-t-22",
                "type": "translate",
                "question": "圣诞节",
                "options": [
                  "Christmas",
                  "Thanksgiving",
                  "Halloween",
                  "Easter"
                ],
                "correctAnswer": "Christmas",
                "difficulty": 1
              },
              {
                "id": "en-t-23",
                "type": "translate",
                "question": "春节",
                "options": [
                  "Spring Festival",
                  "Mid-Autumn Festival",
                  "Dragon Boat Festival",
                  "Lantern Festival"
                ],
                "correctAnswer": "Spring Festival",
                "difficulty": 1
              },
              {
                "id": "en-f-11",
                "type": "fill-blank",
                "question": "Merry ___! （圣诞快乐）",
                "options": [
                  "Christmas",
                  "Birthday",
                  "Halloween",
                  "Easter"
                ],
                "correctAnswer": "Christmas",
                "difficulty": 2
              },
              {
                "id": "en-m-08",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "Christmas",
                    "圣诞节"
                  ],
                  [
                    "Halloween",
                    "万圣节"
                  ],
                  [
                    "Thanksgiving",
                    "感恩节"
                  ],
                  [
                    "New Year",
                    "新年"
                  ]
                ]
              },
              {
                "id": "en-d-08",
                "type": "dictation",
                "question": "听写：节日",
                "correctAnswer": "festival",
                "difficulty": 2,
                "audioWord": "festival"
              },
              {
                "id": "en-r-05",
                "type": "repeat",
                "question": "跟读：Happy New Year!",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "Happy New Year!"
              }
            ]
          }
        ]
      }
    ]
  },
  "ja": {
    "themes": [
      {
        "id": "basic",
        "name": "基础词汇",
        "color": "#1E3A8A",
        "levels": [
          {
            "levelId": "ja-basic-01",
            "title": "问候与礼貌",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [],
            "questions": [
              {
                "id": "ja-t-00",
                "type": "translate",
                "question": "你好（白天见面）",
                "options": [
                  "こんばんは",
                  "おはよう",
                  "こんにちは",
                  "さようなら"
                ],
                "correctAnswer": "こんにちは",
                "difficulty": 1
              },
              {
                "id": "ja-t-01",
                "type": "translate",
                "question": "谢谢",
                "options": [
                  "ありがとう",
                  "すみません",
                  "こんにちは",
                  "さようなら"
                ],
                "correctAnswer": "ありがとう",
                "difficulty": 1
              },
              {
                "id": "ja-t-02",
                "type": "translate",
                "question": "对不起",
                "options": [
                  "すみません",
                  "ありがとう",
                  "おはよう",
                  "ください"
                ],
                "correctAnswer": "すみません",
                "difficulty": 1
              },
              {
                "id": "ja-f-00",
                "type": "fill-blank",
                "question": "おはよう___。（早上好）",
                "options": [
                  "ございます",
                  "ありません",
                  "ください",
                  "します"
                ],
                "correctAnswer": "ございます",
                "difficulty": 2
              },
              {
                "id": "ja-m-00",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "こんにちは",
                    "你好"
                  ],
                  [
                    "ありがとう",
                    "谢谢"
                  ],
                  [
                    "さようなら",
                    "再见"
                  ],
                  [
                    "おやすみ",
                    "晚安"
                  ]
                ]
              },
              {
                "id": "ja-d-00",
                "type": "dictation",
                "question": "听写：请",
                "correctAnswer": "ください",
                "difficulty": 2,
                "audioWord": "kudasai"
              }
            ]
          },
          {
            "levelId": "ja-basic-02",
            "title": "家庭与人物",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "ja-basic-01"
            ],
            "questions": [
              {
                "id": "ja-t-03",
                "type": "translate",
                "question": "母亲",
                "options": [
                  "お母さん",
                  "お父さん",
                  "お兄さん",
                  "お姉さん"
                ],
                "correctAnswer": "お母さん",
                "difficulty": 1
              },
              {
                "id": "ja-t-04",
                "type": "translate",
                "question": "哥哥",
                "options": [
                  "お兄さん",
                  "弟さん",
                  "妹さん",
                  "お父さん"
                ],
                "correctAnswer": "お兄さん",
                "difficulty": 1
              },
              {
                "id": "ja-t-05",
                "type": "translate",
                "question": "老师",
                "options": [
                  "先生",
                  "学生",
                  "医者",
                  "店員"
                ],
                "correctAnswer": "先生",
                "difficulty": 1
              },
              {
                "id": "ja-f-01",
                "type": "fill-blank",
                "question": "私は学生___。（我是学生）",
                "options": [
                  "です",
                  "ます",
                  "ました",
                  "ません"
                ],
                "correctAnswer": "です",
                "difficulty": 2
              },
              {
                "id": "ja-m-01",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "父",
                    "父亲"
                  ],
                  [
                    "母",
                    "母亲"
                  ],
                  [
                    "兄",
                    "哥哥"
                  ],
                  [
                    "姉",
                    "姐姐"
                  ]
                ]
              },
              {
                "id": "ja-d-01",
                "type": "dictation",
                "question": "听写：朋友",
                "correctAnswer": "友達",
                "difficulty": 2,
                "audioWord": "tomodachi"
              }
            ]
          },
          {
            "levelId": "ja-basic-03",
            "title": "数字与颜色",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "ja-basic-02"
            ],
            "questions": [
              {
                "id": "ja-t-06",
                "type": "translate",
                "question": "三个（物品）",
                "options": [
                  "二つ",
                  "三つ",
                  "四つ",
                  "五つ"
                ],
                "correctAnswer": "三つ",
                "difficulty": 1
              },
              {
                "id": "ja-t-07",
                "type": "translate",
                "question": "红色",
                "options": [
                  "赤",
                  "青",
                  "白",
                  "黒"
                ],
                "correctAnswer": "赤",
                "difficulty": 1
              },
              {
                "id": "ja-f-02",
                "type": "fill-blank",
                "question": "りんごを___つください。（请给我三个苹果）",
                "options": [
                  "三",
                  "四",
                  "五",
                  "二"
                ],
                "correctAnswer": "三",
                "difficulty": 2
              },
              {
                "id": "ja-m-02",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "一",
                    "1"
                  ],
                  [
                    "赤",
                    "红色"
                  ],
                  [
                    "青",
                    "蓝色"
                  ],
                  [
                    "白",
                    "白色"
                  ]
                ]
              },
              {
                "id": "ja-d-02",
                "type": "dictation",
                "question": "听写：蓝色",
                "correctAnswer": "あお",
                "difficulty": 2,
                "audioWord": "ao"
              },
              {
                "id": "ja-r-00",
                "type": "repeat",
                "question": "跟读：みどり",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "みどり"
              }
            ]
          }
        ]
      },
      {
        "id": "daily",
        "name": "日常对话",
        "color": "#3B82F6",
        "levels": [
          {
            "levelId": "ja-daily-01",
            "title": "自我介绍",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "ja-t-08",
                "type": "translate",
                "question": "初次见面",
                "options": [
                  "はじめまして",
                  "ありがとう",
                  "さようなら",
                  "おやすみ"
                ],
                "correctAnswer": "はじめまして",
                "difficulty": 1
              },
              {
                "id": "ja-t-09",
                "type": "translate",
                "question": "请多关照",
                "options": [
                  "よろしくお願いします",
                  "はじめまして",
                  "お元気ですか",
                  "すみません"
                ],
                "correctAnswer": "よろしくお願いします",
                "difficulty": 1
              },
              {
                "id": "ja-f-03",
                "type": "fill-blank",
                "question": "私は中国人___。（我是中国人）",
                "options": [
                  "です",
                  "ました",
                  "ません",
                  "でした"
                ],
                "correctAnswer": "です",
                "difficulty": 2
              },
              {
                "id": "ja-m-03",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "はじめまして",
                    "初次见面"
                  ],
                  [
                    "よろしくお願いします",
                    "请多关照"
                  ],
                  [
                    "お名前は？",
                    "您叫什么名字？"
                  ],
                  [
                    "私は…です",
                    "我是…"
                  ]
                ]
              },
              {
                "id": "ja-d-03",
                "type": "dictation",
                "question": "听写：名字",
                "correctAnswer": "なまえ",
                "difficulty": 2,
                "audioWord": "namae"
              },
              {
                "id": "ja-r-01",
                "type": "repeat",
                "question": "跟读：はじめまして、よろしくお願いします",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "はじめまして、よろしくお願いします"
              }
            ]
          },
          {
            "levelId": "ja-daily-02",
            "title": "购物与消费",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "ja-daily-01"
            ],
            "questions": [
              {
                "id": "ja-t-10",
                "type": "translate",
                "question": "多少钱？",
                "options": [
                  "いくらですか",
                  "なんですか",
                  "どこですか",
                  "だれですか"
                ],
                "correctAnswer": "いくらですか",
                "difficulty": 1
              },
              {
                "id": "ja-t-11",
                "type": "translate",
                "question": "太贵了",
                "options": [
                  "高すぎます",
                  "安すぎます",
                  "高くないです",
                  "どうぞ"
                ],
                "correctAnswer": "高すぎます",
                "difficulty": 1
              },
              {
                "id": "ja-t-12",
                "type": "translate",
                "question": "请给我这个",
                "options": [
                  "これをください",
                  "それをください",
                  "あれをください",
                  "ここです"
                ],
                "correctAnswer": "これをください",
                "difficulty": 1
              },
              {
                "id": "ja-f-04",
                "type": "fill-blank",
                "question": "お金を___。（付钱）",
                "options": [
                  "払います",
                  "買います",
                  "売ります",
                  "降ります"
                ],
                "correctAnswer": "払います",
                "difficulty": 2
              },
              {
                "id": "ja-m-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "いくら",
                    "多少钱"
                  ],
                  [
                    "高い",
                    "贵的"
                  ],
                  [
                    "安い",
                    "便宜的"
                  ],
                  [
                    "無料",
                    "免费"
                  ]
                ]
              },
              {
                "id": "ja-d-04",
                "type": "dictation",
                "question": "听写：钱",
                "correctAnswer": "お金",
                "difficulty": 2,
                "audioWord": "okane"
              }
            ]
          }
        ]
      },
      {
        "id": "scenario",
        "name": "场景实战",
        "color": "#EF4444",
        "levels": [
          {
            "levelId": "ja-scenario-01",
            "title": "交通出行",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "ja-t-13",
                "type": "translate",
                "question": "车站",
                "options": [
                  "駅",
                  "空港",
                  "病院",
                  "銀行"
                ],
                "correctAnswer": "駅",
                "difficulty": 1
              },
              {
                "id": "ja-t-14",
                "type": "translate",
                "question": "请直走",
                "options": [
                  "まっすぐ行ってください",
                  "右に曲がってください",
                  "左に曲がってください",
                  "止まってください"
                ],
                "correctAnswer": "まっすぐ行ってください",
                "difficulty": 1
              },
              {
                "id": "ja-f-05",
                "type": "fill-blank",
                "question": "電車に___。（坐电车）",
                "options": [
                  "乗ります",
                  "降ります",
                  "待ちます",
                  "走ります"
                ],
                "correctAnswer": "乗ります",
                "difficulty": 2
              },
              {
                "id": "ja-m-05",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "駅",
                    "车站"
                  ],
                  [
                    "電車",
                    "电车"
                  ],
                  [
                    "バス",
                    "公交车"
                  ],
                  [
                    "飛行機",
                    "飞机"
                  ]
                ]
              },
              {
                "id": "ja-d-05",
                "type": "dictation",
                "question": "听写：车票",
                "correctAnswer": "きっぷ",
                "difficulty": 2,
                "audioWord": "kippu"
              },
              {
                "id": "ja-r-02",
                "type": "repeat",
                "question": "跟读：駅はどこですか",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "駅はどこですか"
              }
            ]
          },
          {
            "levelId": "ja-scenario-02",
            "title": "酒店与应急",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "ja-scenario-01"
            ],
            "questions": [
              {
                "id": "ja-t-15",
                "type": "translate",
                "question": "我有预约",
                "options": [
                  "予約しています",
                  "チェックアウトします",
                  "泊まりません",
                  "予約していません"
                ],
                "correctAnswer": "予約しています",
                "difficulty": 1
              },
              {
                "id": "ja-t-16",
                "type": "translate",
                "question": "帮帮我",
                "options": [
                  "助けて",
                  "待って",
                  "見て",
                  "買って"
                ],
                "correctAnswer": "助けて",
                "difficulty": 1
              },
              {
                "id": "ja-f-06",
                "type": "fill-blank",
                "question": "部屋を___。（订房间）",
                "options": [
                  "予約します",
                  "掃除します",
                  "出ます",
                  "開けます"
                ],
                "correctAnswer": "予約します",
                "difficulty": 2
              },
              {
                "id": "ja-m-06",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "チェックイン",
                    "入住"
                  ],
                  [
                    "チェックアウト",
                    "退房"
                  ],
                  [
                    "シングルルーム",
                    "单人间"
                  ],
                  [
                    "鍵",
                    "钥匙"
                  ]
                ]
              },
              {
                "id": "ja-d-06",
                "type": "dictation",
                "question": "听写：房间",
                "correctAnswer": "部屋",
                "difficulty": 2,
                "audioWord": "heya"
              },
              {
                "id": "ja-r-03",
                "type": "repeat",
                "question": "跟读：助けてください",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "助けてください"
              }
            ]
          },
          {
            "levelId": "ja-scenario-03",
            "title": "就医买药",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "ja-scenario-02"
            ],
            "questions": [
              {
                "id": "ja-t-17",
                "type": "translate",
                "question": "我不舒服",
                "options": [
                  "気分が悪いです",
                  "元気です",
                  "眠いです",
                  "暑いです"
                ],
                "correctAnswer": "気分が悪いです",
                "difficulty": 1
              },
              {
                "id": "ja-t-18",
                "type": "translate",
                "question": "头痛",
                "options": [
                  "頭が痛いです",
                  "お腹が痛いです",
                  "歯が痛いです",
                  "喉が痛いです"
                ],
                "correctAnswer": "頭が痛いです",
                "difficulty": 1
              },
              {
                "id": "ja-t-19",
                "type": "translate",
                "question": "药",
                "options": [
                  "薬",
                  "病院",
                  "医者",
                  "注射"
                ],
                "correctAnswer": "薬",
                "difficulty": 1
              },
              {
                "id": "ja-f-07",
                "type": "fill-blank",
                "question": "医者に___。（看医生）",
                "options": [
                  "見てもらいます",
                  "買います",
                  "飲みます",
                  "します"
                ],
                "correctAnswer": "見てもらいます",
                "difficulty": 2
              },
              {
                "id": "ja-f-08",
                "type": "fill-blank",
                "question": "薬を___。（吃药）",
                "options": [
                  "飲みます",
                  "食べます",
                  "買います",
                  "します"
                ],
                "correctAnswer": "飲みます",
                "difficulty": 2
              },
              {
                "id": "ja-d-07",
                "type": "dictation",
                "question": "听写：医院",
                "correctAnswer": "病院",
                "difficulty": 2,
                "audioWord": "byouin"
              }
            ]
          }
        ]
      },
      {
        "id": "grammar",
        "name": "语法进阶",
        "color": "#F59E0B",
        "levels": [
          {
            "levelId": "ja-grammar-01",
            "title": "动词基础",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "ja-t-20",
                "type": "translate",
                "question": "吃",
                "options": [
                  "食べます",
                  "飲みます",
                  "買います",
                  "行きます"
                ],
                "correctAnswer": "食べます",
                "difficulty": 1
              },
              {
                "id": "ja-t-21",
                "type": "translate",
                "question": "去了（过去式）",
                "options": [
                  "行きます",
                  "行きました",
                  "行きません",
                  "行っています"
                ],
                "correctAnswer": "行きました",
                "difficulty": 1
              },
              {
                "id": "ja-f-09",
                "type": "fill-blank",
                "question": "毎日ご飯を___。（每天吃饭）",
                "options": [
                  "食べます",
                  "食べました",
                  "食べません",
                  "食べています"
                ],
                "correctAnswer": "食べます",
                "difficulty": 2
              },
              {
                "id": "ja-f-10",
                "type": "fill-blank",
                "question": "昨日、映画を___。（昨天看了电影）",
                "options": [
                  "見ました",
                  "見ます",
                  "見ません",
                  "見ています"
                ],
                "correctAnswer": "見ました",
                "difficulty": 2
              },
              {
                "id": "ja-m-07",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "食べます",
                    "吃"
                  ],
                  [
                    "飲みます",
                    "喝"
                  ],
                  [
                    "行きます",
                    "去"
                  ],
                  [
                    "読みます",
                    "读"
                  ]
                ]
              },
              {
                "id": "ja-r-04",
                "type": "repeat",
                "question": "跟读：毎日水を飲みます",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "毎日水を飲みます"
              }
            ]
          }
        ]
      },
      {
        "id": "culture",
        "name": "文化拓展",
        "color": "#8B5CF6",
        "levels": [
          {
            "levelId": "ja-culture-01",
            "title": "节日与传统",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "ja-t-22",
                "type": "translate",
                "question": "新年",
                "options": [
                  "お正月",
                  "お盆",
                  "桜",
                  "花見"
                ],
                "correctAnswer": "お正月",
                "difficulty": 1
              },
              {
                "id": "ja-t-23",
                "type": "translate",
                "question": "赏花",
                "options": [
                  "花見",
                  "月見",
                  "雪見",
                  "星見"
                ],
                "correctAnswer": "花見",
                "difficulty": 1
              },
              {
                "id": "ja-f-11",
                "type": "fill-blank",
                "question": "お正月に雑煮を___。（新年吃杂煮）",
                "options": [
                  "食べます",
                  "飲みます",
                  "買います",
                  "します"
                ],
                "correctAnswer": "食べます",
                "difficulty": 2
              },
              {
                "id": "ja-m-08",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "お正月",
                    "新年"
                  ],
                  [
                    "お盆",
                    "盂兰盆节"
                  ],
                  [
                    "クリスマス",
                    "圣诞节"
                  ],
                  [
                    "花見",
                    "赏花"
                  ]
                ]
              },
              {
                "id": "ja-d-08",
                "type": "dictation",
                "question": "听写：樱花",
                "correctAnswer": "さくら",
                "difficulty": 2,
                "audioWord": "sakura"
              },
              {
                "id": "ja-r-05",
                "type": "repeat",
                "question": "跟读：良いお年を",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "良いお年を"
              }
            ]
          }
        ]
      }
    ]
  },

  "ar": {
    "themes": [
      {
        "id": "basic",
        "name": "基础词汇",
        "color": "#1D4ED8",
        "levels": [
          {
            "levelId": "ar-basic-01",
            "title": "问候与礼貌",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [],
            "questions": [
              {
                "id": "ar-basic-01-01",
                "type": "translate",
                "question": "你好",
                "options": [
                  "مرحبا",
                  "لا",
                  "شكرا",
                  "صباح الخير"
                ],
                "correctAnswer": "مرحبا",
                "difficulty": 1
              },
              {
                "id": "ar-basic-01-02",
                "type": "translate",
                "question": "谢谢",
                "options": [
                  "شكرا",
                  "لا",
                  "من فضلك",
                  "مع السلامة"
                ],
                "correctAnswer": "شكرا",
                "difficulty": 1
              },
              {
                "id": "ar-basic-01-03",
                "type": "translate",
                "question": "再见",
                "options": [
                  "مع السلامة",
                  "شكرا",
                  "صباح الخير",
                  "مرحبا"
                ],
                "correctAnswer": "مع السلامة",
                "difficulty": 1
              },
              {
                "id": "ar-basic-01-04",
                "type": "fill-blank",
                "question": "___ (请)",
                "options": [
                  "من فضلك",
                  "لا",
                  "صباح الخير",
                  "نعم"
                ],
                "correctAnswer": "من فضلك",
                "difficulty": 2
              },
              {
                "id": "ar-basic-01-05",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "مرحبا",
                    "你好"
                  ],
                  [
                    "شكرا",
                    "谢谢"
                  ],
                  [
                    "مع السلامة",
                    "再见"
                  ],
                  [
                    "من فضلك",
                    "请"
                  ]
                ]
              },
              {
                "id": "ar-basic-01-06",
                "type": "dictation",
                "question": "听写：是",
                "correctAnswer": "نعم",
                "difficulty": 2,
                "audioWord": "na'am"
              }
            ]
          },
          {
            "levelId": "ar-basic-02",
            "title": "家庭与人物",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "ar-basic-01"
            ],
            "questions": [
              {
                "id": "ar-basic-02-01",
                "type": "translate",
                "question": "父亲",
                "options": [
                  "أب",
                  "أم",
                  "ابنة",
                  "ابن"
                ],
                "correctAnswer": "أب",
                "difficulty": 1
              },
              {
                "id": "ar-basic-02-02",
                "type": "translate",
                "question": "母亲",
                "options": [
                  "أم",
                  "أب",
                  "جدة",
                  "جد"
                ],
                "correctAnswer": "أم",
                "difficulty": 1
              },
              {
                "id": "ar-basic-02-03",
                "type": "translate",
                "question": "兄弟",
                "options": [
                  "أخ",
                  "أم",
                  "جدة",
                  "ابنة"
                ],
                "correctAnswer": "أخ",
                "difficulty": 1
              },
              {
                "id": "ar-basic-02-04",
                "type": "fill-blank",
                "question": "___ (姐妹)",
                "options": [
                  "أخت",
                  "ابنة",
                  "أب",
                  "جدة"
                ],
                "correctAnswer": "أخت",
                "difficulty": 2
              },
              {
                "id": "ar-basic-02-05",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "أب",
                    "父亲"
                  ],
                  [
                    "أم",
                    "母亲"
                  ],
                  [
                    "أخ",
                    "兄弟"
                  ],
                  [
                    "أخت",
                    "姐妹"
                  ]
                ]
              },
              {
                "id": "ar-basic-02-06",
                "type": "dictation",
                "question": "听写：女儿",
                "correctAnswer": "ابنة",
                "difficulty": 2,
                "audioWord": "ibna"
              }
            ]
          },
          {
            "levelId": "ar-basic-03",
            "title": "数字与颜色",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "ar-basic-02"
            ],
            "questions": [
              {
                "id": "ar-basic-03-01",
                "type": "translate",
                "question": "是",
                "options": [
                  "أخ",
                  "نعم",
                  "أربعة",
                  "لا"
                ],
                "correctAnswer": "نعم",
                "difficulty": 1
              },
              {
                "id": "ar-basic-03-02",
                "type": "fill-blank",
                "question": "___ (不是)",
                "options": [
                  "شكرا",
                  "اثنان",
                  "لا",
                  "أخضر"
                ],
                "correctAnswer": "لا",
                "difficulty": 2
              },
              {
                "id": "ar-basic-03-03",
                "type": "translate",
                "question": "再见",
                "options": [
                  "أسود",
                  "تفاح",
                  "ماء",
                  "مع السلامة"
                ],
                "correctAnswer": "مع السلامة",
                "difficulty": 1
              },
              {
                "id": "ar-basic-03-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "نعم",
                    "是"
                  ],
                  [
                    "لا",
                    "不是"
                  ],
                  [
                    "مع السلامة",
                    "再见"
                  ],
                  [
                    "من فضلك",
                    "请"
                  ]
                ]
              },
              {
                "id": "ar-basic-03-05",
                "type": "dictation",
                "question": "听写：一",
                "correctAnswer": "واحد",
                "difficulty": 2,
                "audioWord": "wahid"
              },
              {
                "id": "ar-basic-03-06",
                "type": "repeat",
                "question": "跟读：اثنان",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "اثنان"
              }
            ]
          }
        ]
      },
      {
        "id": "daily",
        "name": "日常对话",
        "color": "#60A5FA",
        "levels": [
          {
            "levelId": "ar-daily-02",
            "title": "购物与消费",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "ar-daily-02-01",
                "type": "translate",
                "question": "我叫…",
                "options": [
                  "هل يمكن التخفيض؟",
                  "من أين أنت؟",
                  "أريد هذا",
                  "اسمي..."
                ],
                "correctAnswer": "اسمي...",
                "difficulty": 1
              },
              {
                "id": "ar-daily-02-02",
                "type": "fill-blank",
                "question": "___ (很高兴认识你)",
                "options": [
                  "هل يمكن التخفيض؟",
                  "تشرفت بلقائك",
                  "لذيذ جدا",
                  "كم السعر؟"
                ],
                "correctAnswer": "تشرفت بلقائك",
                "difficulty": 2
              },
              {
                "id": "ar-daily-02-03",
                "type": "translate",
                "question": "你好吗？",
                "options": [
                  "تشرفت بلقائك",
                  "غالي جدا",
                  "الحساب من فضلك",
                  "كيف حالك؟"
                ],
                "correctAnswer": "كيف حالك؟",
                "difficulty": 1
              },
              {
                "id": "ar-daily-02-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "اسمي...",
                    "我叫…"
                  ],
                  [
                    "تشرفت بلقائك",
                    "很高兴认识你"
                  ],
                  [
                    "كيف حالك؟",
                    "你好吗？"
                  ],
                  [
                    "من أين أنت؟",
                    "你从哪里来？"
                  ]
                ]
              },
              {
                "id": "ar-daily-02-05",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "كم السعر؟",
                "difficulty": 2,
                "audioWord": "kam as-sa'r"
              },
              {
                "id": "ar-daily-02-06",
                "type": "repeat",
                "question": "跟读：أريد هذا",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "أريد هذا"
              }
            ]
          },
          {
            "levelId": "ar-daily-03",
            "title": "购物与消费",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "ar-daily-02"
            ],
            "questions": [
              {
                "id": "ar-daily-03-01",
                "type": "translate",
                "question": "我叫…",
                "options": [
                  "تشرفت بلقائك",
                  "اسمي...",
                  "غالي جدا",
                  "هل يمكن التخفيض؟"
                ],
                "correctAnswer": "اسمي...",
                "difficulty": 1
              },
              {
                "id": "ar-daily-03-02",
                "type": "fill-blank",
                "question": "___ (很高兴认识你)",
                "options": [
                  "أنا ضائع",
                  "تشرفت بلقائك",
                  "كيف حالك؟",
                  "غالي جدا"
                ],
                "correctAnswer": "تشرفت بلقائك",
                "difficulty": 2
              },
              {
                "id": "ar-daily-03-03",
                "type": "translate",
                "question": "你好吗？",
                "options": [
                  "من أين أنت؟",
                  "غالي جدا",
                  "لذيذ جدا",
                  "كيف حالك؟"
                ],
                "correctAnswer": "كيف حالك؟",
                "difficulty": 1
              },
              {
                "id": "ar-daily-03-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "اسمي...",
                    "我叫…"
                  ],
                  [
                    "تشرفت بلقائك",
                    "很高兴认识你"
                  ],
                  [
                    "كيف حالك؟",
                    "你好吗？"
                  ],
                  [
                    "من أين أنت؟",
                    "你从哪里来？"
                  ]
                ]
              },
              {
                "id": "ar-daily-03-05",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "كم السعر؟",
                "difficulty": 2,
                "audioWord": "kam as-sa'r"
              },
              {
                "id": "ar-daily-03-06",
                "type": "repeat",
                "question": "跟读：أريد هذا",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "أريد هذا"
              }
            ]
          }
        ]
      },
      {
        "id": "scenario",
        "name": "场景实战",
        "color": "#EF4444",
        "levels": [
          {
            "levelId": "ar-scenario-01",
            "title": "交通出行",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "ar-scenario-01-01",
                "type": "translate",
                "question": "地铁站在哪里？",
                "options": [
                  "عفوا",
                  "أين المترو؟",
                  "أشعر بالمرض",
                  "صباح الخير"
                ],
                "correctAnswer": "أين المترو؟",
                "difficulty": 1
              },
              {
                "id": "ar-scenario-01-02",
                "type": "fill-blank",
                "question": "___ (坐出租车)",
                "options": [
                  "أحتاج طبيبا",
                  "صباح الخير",
                  "أشعر بالمرض",
                  "خذ سيارة أجرة"
                ],
                "correctAnswer": "خذ سيارة أجرة",
                "difficulty": 2
              },
              {
                "id": "ar-scenario-01-03",
                "type": "translate",
                "question": "我需要医生",
                "options": [
                  "أحتاج طبيبا",
                  "عفوا",
                  "أين المترو؟",
                  "حجز فندق"
                ],
                "correctAnswer": "أحتاج طبيبا",
                "difficulty": 1
              },
              {
                "id": "ar-scenario-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "أين المترو؟",
                    "地铁站在哪里？"
                  ],
                  [
                    "خذ سيارة أجرة",
                    "坐出租车"
                  ],
                  [
                    "أحتاج طبيبا",
                    "我需要医生"
                  ],
                  [
                    "أشعر بالمرض",
                    "我不舒服"
                  ]
                ]
              },
              {
                "id": "ar-scenario-01-05",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "حجز فندق",
                "difficulty": 2,
                "audioWord": "hajz funduq"
              },
              {
                "id": "ar-scenario-01-06",
                "type": "repeat",
                "question": "跟读：غرفة فردية",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "غرفة فردية"
              }
            ]
          },
          {
            "levelId": "ar-scenario-02",
            "title": "酒店与应急",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "ar-scenario-01"
            ],
            "questions": [
              {
                "id": "ar-scenario-02-01",
                "type": "translate",
                "question": "地铁站在哪里？",
                "options": [
                  "تصبح على خير",
                  "غرفة فردية",
                  "صباح الخير",
                  "أين المترو؟"
                ],
                "correctAnswer": "أين المترو؟",
                "difficulty": 1
              },
              {
                "id": "ar-scenario-02-02",
                "type": "fill-blank",
                "question": "___ (坐出租车)",
                "options": [
                  "أين المترو؟",
                  "خذ سيارة أجرة",
                  "غرفة فردية",
                  "النجدة!"
                ],
                "correctAnswer": "خذ سيارة أجرة",
                "difficulty": 2
              },
              {
                "id": "ar-scenario-02-03",
                "type": "translate",
                "question": "我需要医生",
                "options": [
                  "أحتاج طبيبا",
                  "اتصل بالشرطة",
                  "النجدة!",
                  " إلى اللقاء غدا"
                ],
                "correctAnswer": "أحتاج طبيبا",
                "difficulty": 1
              },
              {
                "id": "ar-scenario-02-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "أين المترو؟",
                    "地铁站在哪里？"
                  ],
                  [
                    "خذ سيارة أجرة",
                    "坐出租车"
                  ],
                  [
                    "أحتاج طبيبا",
                    "我需要医生"
                  ],
                  [
                    "أشعر بالمرض",
                    "我不舒服"
                  ]
                ]
              },
              {
                "id": "ar-scenario-02-05",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "حجز فندق",
                "difficulty": 2,
                "audioWord": "hajz funduq"
              },
              {
                "id": "ar-scenario-02-06",
                "type": "repeat",
                "question": "跟读：غرفة فردية",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "غرفة فردية"
              }
            ]
          },
          {
            "levelId": "ar-scenario-03",
            "title": "就医买药",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "ar-scenario-02"
            ],
            "questions": [
              {
                "id": "ar-scenario-03-01",
                "type": "translate",
                "question": "地铁站在哪里？",
                "options": [
                  "أين المترو؟",
                  "أشعر بالمرض",
                  " إلى اللقاء غدا",
                  "صباح الخير"
                ],
                "correctAnswer": "أين المترو؟",
                "difficulty": 1
              },
              {
                "id": "ar-scenario-03-02",
                "type": "fill-blank",
                "question": "___ (坐出租车)",
                "options": [
                  "أحتاج طبيبا",
                  "خذ سيارة أجرة",
                  "اتصل بالشرطة",
                  "عفوا"
                ],
                "correctAnswer": "خذ سيارة أجرة",
                "difficulty": 2
              },
              {
                "id": "ar-scenario-03-03",
                "type": "translate",
                "question": "我需要医生",
                "options": [
                  "غرفة فردية",
                  "تصبح على خير",
                  "النجدة!",
                  "أحتاج طبيبا"
                ],
                "correctAnswer": "أحتاج طبيبا",
                "difficulty": 1
              },
              {
                "id": "ar-scenario-03-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "أين المترو؟",
                    "地铁站在哪里？"
                  ],
                  [
                    "خذ سيارة أجرة",
                    "坐出租车"
                  ],
                  [
                    "أحتاج طبيبا",
                    "我需要医生"
                  ],
                  [
                    "أشعر بالمرض",
                    "我不舒服"
                  ]
                ]
              },
              {
                "id": "ar-scenario-03-05",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "حجز فندق",
                "difficulty": 2,
                "audioWord": "hajz funduq"
              },
              {
                "id": "ar-scenario-03-06",
                "type": "repeat",
                "question": "跟读：غرفة فردية",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "غرفة فردية"
              }
            ]
          }
        ]
      },
      {
        "id": "grammar",
        "name": "语法进阶",
        "color": "#F59E0B",
        "levels": [
          {
            "levelId": "ar-grammar-01",
            "title": "动词基础",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "ar-grammar-01-01",
                "type": "translate",
                "question": "去（过去式）",
                "options": [
                  "ذهب",
                  "آكل",
                  "كان",
                  "أكل"
                ],
                "correctAnswer": "ذهب",
                "difficulty": 1
              },
              {
                "id": "ar-grammar-01-02",
                "type": "fill-blank",
                "question": "___ (他去)",
                "options": [
                  "يكون",
                  "أذهب",
                  "يذهب",
                  "كان"
                ],
                "correctAnswer": "يذهب",
                "difficulty": 2
              },
              {
                "id": "ar-grammar-01-03",
                "type": "translate",
                "question": "我去",
                "options": [
                  "يكون",
                  "أكل",
                  "كان",
                  "أذهب"
                ],
                "correctAnswer": "أذهب",
                "difficulty": 1
              },
              {
                "id": "ar-grammar-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "ذهب",
                    "去（过去式）"
                  ],
                  [
                    "يذهب",
                    "他去"
                  ],
                  [
                    "أذهب",
                    "我去"
                  ],
                  [
                    "كان",
                    "是（过去式）"
                  ]
                ]
              },
              {
                "id": "ar-grammar-01-05",
                "type": "dictation",
                "question": "听写：是",
                "correctAnswer": "يكون",
                "difficulty": 2,
                "audioWord": "yakun"
              },
              {
                "id": "ar-grammar-01-06",
                "type": "repeat",
                "question": "跟读：أكل",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "أكل"
              }
            ]
          }
        ]
      },
      {
        "id": "culture",
        "name": "文化拓展",
        "color": "#8B5CF6",
        "levels": [
          {
            "levelId": "ar-culture-01",
            "title": "节日与传统",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "ar-culture-01-01",
                "type": "translate",
                "question": "开斋节",
                "options": [
                  "عيد الفطر",
                  "قهوة عربية",
                  "عيد الأضحى",
                  "تمر"
                ],
                "correctAnswer": "عيد الفطر",
                "difficulty": 1
              },
              {
                "id": "ar-culture-01-02",
                "type": "fill-blank",
                "question": "___ (宰牲节)",
                "options": [
                  "عيد الأضحى",
                  "تمر",
                  "قهوة عربية",
                  "عيد الفطر"
                ],
                "correctAnswer": "عيد الأضحى",
                "difficulty": 2
              },
              {
                "id": "ar-culture-01-03",
                "type": "translate",
                "question": "椰枣",
                "options": [
                  "تمر",
                  "عيد الفطر",
                  "قهوة عربية",
                  "عيد الأضحى"
                ],
                "correctAnswer": "تمر",
                "difficulty": 1
              },
              {
                "id": "ar-culture-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "عيد الفطر",
                    "开斋节"
                  ],
                  [
                    "عيد الأضحى",
                    "宰牲节"
                  ],
                  [
                    "تمر",
                    "椰枣"
                  ],
                  [
                    "قهوة عربية",
                    "阿拉伯咖啡"
                  ]
                ]
              },
              {
                "id": "ar-culture-01-05",
                "type": "dictation",
                "question": "听写：开斋节",
                "correctAnswer": "عيد الفطر",
                "difficulty": 2,
                "audioWord": "eid al-fitr"
              },
              {
                "id": "ar-culture-01-06",
                "type": "repeat",
                "question": "跟读：عيد الأضحى",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "عيد الأضحى"
              }
            ]
          }
        ]
      }
    ]
  },
  "de": {
    "themes": [
      {
        "id": "basic",
        "name": "基础词汇",
        "color": "#1D4ED8",
        "levels": [
          {
            "levelId": "de-basic-01",
            "title": "问候与礼貌",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [],
            "questions": [
              {
                "id": "de-basic-01-01",
                "type": "translate",
                "question": "你好",
                "options": [
                  "Hallo",
                  "Auf Wiedersehen",
                  "Nein",
                  "Ja"
                ],
                "correctAnswer": "Hallo",
                "difficulty": 1
              },
              {
                "id": "de-basic-01-02",
                "type": "translate",
                "question": "谢谢",
                "options": [
                  "Danke",
                  "Entschuldigung",
                  "Auf Wiedersehen",
                  "Guten Morgen"
                ],
                "correctAnswer": "Danke",
                "difficulty": 1
              },
              {
                "id": "de-basic-01-03",
                "type": "translate",
                "question": "再见",
                "options": [
                  "Auf Wiedersehen",
                  "Ja",
                  "Bitte",
                  "Hallo"
                ],
                "correctAnswer": "Auf Wiedersehen",
                "difficulty": 1
              },
              {
                "id": "de-basic-01-04",
                "type": "fill-blank",
                "question": "___ (请)",
                "options": [
                  "Bitte",
                  "Guten Morgen",
                  "Danke",
                  "Entschuldigung"
                ],
                "correctAnswer": "Bitte",
                "difficulty": 2
              },
              {
                "id": "de-basic-01-05",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "Hallo",
                    "你好"
                  ],
                  [
                    "Danke",
                    "谢谢"
                  ],
                  [
                    "Auf Wiedersehen",
                    "再见"
                  ],
                  [
                    "Bitte",
                    "请"
                  ]
                ]
              },
              {
                "id": "de-basic-01-06",
                "type": "dictation",
                "question": "听写：是",
                "correctAnswer": "Ja",
                "difficulty": 2,
                "audioWord": "Ja"
              }
            ]
          },
          {
            "levelId": "de-basic-02",
            "title": "家庭与人物",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "de-basic-01"
            ],
            "questions": [
              {
                "id": "de-basic-02-01",
                "type": "translate",
                "question": "妈妈",
                "options": [
                  "Mutter",
                  "爸爸",
                  "哥哥",
                  "姐姐"
                ],
                "correctAnswer": "Mutter",
                "difficulty": 1
              },
              {
                "id": "de-basic-02-02",
                "type": "translate",
                "question": "朋友",
                "options": [
                  "Freund",
                  "敌人",
                  "陌生人",
                  "邻居"
                ],
                "correctAnswer": "Freund",
                "difficulty": 1
              },
              {
                "id": "de-basic-02-03",
                "type": "fill-blank",
                "question": "Wo ist die ___?（妈妈在哪里？）",
                "options": [
                  "Mutter",
                  "Vater",
                  "Schwester",
                  "Bruder"
                ],
                "correctAnswer": "Mutter",
                "difficulty": 2
              },
              {
                "id": "de-basic-02-04",
                "type": "match",
                "question": "亲属配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "Mutter",
                    "妈妈"
                  ],
                  [
                    "爸爸",
                    "爸爸"
                  ],
                  [
                    "哥哥",
                    "哥哥"
                  ],
                  [
                    "姐姐",
                    "姐姐"
                  ]
                ]
              },
              {
                "id": "de-basic-02-05",
                "type": "translate",
                "question": "家人",
                "options": [
                  "Familie",
                  "Freund",
                  "Lehrer",
                  "Klassenkamerad"
                ],
                "correctAnswer": "Familie",
                "difficulty": 1
              },
              {
                "id": "de-basic-02-06",
                "type": "dictation",
                "question": "听写：朋友",
                "correctAnswer": "Freund",
                "difficulty": 2,
                "audioWord": "freund"
              }
            ]
          },
          {
            "levelId": "de-basic-03",
            "title": "数字与颜色",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "de-basic-02"
            ],
            "questions": [
              {
                "id": "de-basic-03-01",
                "type": "translate",
                "question": "一",
                "options": [
                  "eins",
                  "vier",
                  "grün",
                  "drei"
                ],
                "correctAnswer": "eins",
                "difficulty": 1
              },
              {
                "id": "de-basic-03-02",
                "type": "translate",
                "question": "二",
                "options": [
                  "zwei",
                  "drei",
                  "vier",
                  "eins"
                ],
                "correctAnswer": "zwei",
                "difficulty": 1
              },
              {
                "id": "de-basic-03-03",
                "type": "fill-blank",
                "question": "___ (三)",
                "options": [
                  "drei",
                  "eins",
                  "fünf",
                  "grün"
                ],
                "correctAnswer": "drei",
                "difficulty": 2
              },
              {
                "id": "de-basic-03-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "eins",
                    "一"
                  ],
                  [
                    "zwei",
                    "二"
                  ],
                  [
                    "drei",
                    "三"
                  ],
                  [
                    "vier",
                    "四"
                  ]
                ]
              },
              {
                "id": "de-basic-03-05",
                "type": "dictation",
                "question": "听写：五",
                "correctAnswer": "fünf",
                "difficulty": 2,
                "audioWord": "fünf"
              },
              {
                "id": "de-basic-03-06",
                "type": "repeat",
                "question": "跟读：红色",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "rot"
              }
            ]
          }
        ]
      },
      {
        "id": "daily",
        "name": "日常对话",
        "color": "#60A5FA",
        "levels": [
          {
            "levelId": "de-daily-01",
            "title": "自我介绍",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "de-daily-01-01",
                "type": "translate",
                "question": "我的名字是…",
                "options": [
                  "Mein Name ist...",
                  "Freut mich",
                  "Ich bin Student",
                  "Wo wohnst du?"
                ],
                "correctAnswer": "Mein Name ist...",
                "difficulty": 1
              },
              {
                "id": "de-daily-01-02",
                "type": "translate",
                "question": "你多大了？",
                "options": [
                  "Wie alt bist du?",
                  "Freut mich",
                  "Mein Name ist...",
                  "Ich bin Student"
                ],
                "correctAnswer": "Wie alt bist du?",
                "difficulty": 1
              },
              {
                "id": "de-daily-01-03",
                "type": "fill-blank",
                "question": "___ (我来自…)",
                "options": [
                  "Ich komme aus...",
                  "Wo wohnst du?",
                  "Mein Name ist...",
                  "Wie alt bist du?"
                ],
                "correctAnswer": "Ich komme aus...",
                "difficulty": 2
              },
              {
                "id": "de-daily-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "Mein Name ist...",
                    "我的名字是…"
                  ],
                  [
                    "Wie alt bist du?",
                    "你多大了？"
                  ],
                  [
                    "Ich komme aus...",
                    "我来自…"
                  ],
                  [
                    "Freut mich",
                    "很高兴认识你"
                  ]
                ]
              },
              {
                "id": "de-daily-01-05",
                "type": "dictation",
                "question": "听写：你住在哪？",
                "correctAnswer": "Wo wohnst du?",
                "difficulty": 2,
                "audioWord": "Wo wohnst du"
              },
              {
                "id": "de-daily-01-06",
                "type": "repeat",
                "question": "跟读：我是一名学生",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "Ich bin Student"
              }
            ]
          },
          {
            "levelId": "de-daily-02",
            "title": "购物与消费",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "de-daily-01"
            ],
            "questions": [
              {
                "id": "de-daily-02-01",
                "type": "translate",
                "question": "多少钱？",
                "options": [
                  "Wie viel kostet das?",
                  "Das ist zu teuer",
                  "Rabatt",
                  "Preis"
                ],
                "correctAnswer": "Wie viel kostet das?",
                "difficulty": 1
              },
              {
                "id": "de-daily-02-02",
                "type": "translate",
                "question": "太贵了",
                "options": [
                  "Das ist zu teuer",
                  "Kann ich das sehen?",
                  "Rabatt",
                  "Preis"
                ],
                "correctAnswer": "Das ist zu teuer",
                "difficulty": 1
              },
              {
                "id": "de-daily-02-03",
                "type": "translate",
                "question": "便宜的",
                "options": [
                  "billig",
                  "Das ist zu teuer",
                  "Wie viel kostet das?",
                  "Preis"
                ],
                "correctAnswer": "billig",
                "difficulty": 1
              },
              {
                "id": "de-daily-02-04",
                "type": "fill-blank",
                "question": "___ (折扣)",
                "options": [
                  "Rabatt",
                  "Das ist zu teuer",
                  "billig",
                  "Wie viel kostet das?"
                ],
                "correctAnswer": "Rabatt",
                "difficulty": 2
              },
              {
                "id": "de-daily-02-05",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "Wie viel kostet das?",
                    "多少钱？"
                  ],
                  [
                    "Das ist zu teuer",
                    "太贵了"
                  ],
                  [
                    "billig",
                    "便宜的"
                  ],
                  [
                    "Rabatt",
                    "折扣"
                  ]
                ]
              },
              {
                "id": "de-daily-02-06",
                "type": "dictation",
                "question": "听写：我能看看吗？",
                "correctAnswer": "Kann ich das sehen?",
                "difficulty": 2,
                "audioWord": "Kann ich das sehen"
              }
            ]
          }
        ]
      },
      {
        "id": "scenario",
        "name": "场景实战",
        "color": "#EF4444",
        "levels": [
          {
            "levelId": "de-scenario-01",
            "title": "交通出行",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "de-scenario-01-01",
                "type": "translate",
                "question": "地铁站在哪里？",
                "options": [
                  "wo ist die u-bahn?",
                  "ein hotel buchen",
                  "mir ist schlecht",
                  "die polizei rufen"
                ],
                "correctAnswer": "wo ist die u-bahn?",
                "difficulty": 1
              },
              {
                "id": "de-scenario-01-02",
                "type": "fill-blank",
                "question": "___ (坐出租车)",
                "options": [
                  "ein taxi nehmen",
                  "entschuldigung",
                  "einzelzimmer",
                  "gute nacht"
                ],
                "correctAnswer": "ein taxi nehmen",
                "difficulty": 2
              },
              {
                "id": "de-scenario-01-03",
                "type": "translate",
                "question": "我需要医生",
                "options": [
                  "einzelzimmer",
                  "hilfe!",
                  "ich brauche einen arzt",
                  "ein taxi nehmen"
                ],
                "correctAnswer": "ich brauche einen arzt",
                "difficulty": 1
              },
              {
                "id": "de-scenario-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "wo ist die u-bahn?",
                    "地铁站在哪里？"
                  ],
                  [
                    "ein taxi nehmen",
                    "坐出租车"
                  ],
                  [
                    "ich brauche einen arzt",
                    "我需要医生"
                  ],
                  [
                    "mir ist schlecht",
                    "我不舒服"
                  ]
                ]
              },
              {
                "id": "de-scenario-01-05",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "ein hotel buchen",
                "difficulty": 2,
                "audioWord": "ein hotel buchen"
              },
              {
                "id": "de-scenario-01-06",
                "type": "repeat",
                "question": "跟读：einzelzimmer",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "einzelzimmer"
              }
            ]
          },
          {
            "levelId": "de-scenario-02",
            "title": "酒店与应急",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "de-scenario-01"
            ],
            "questions": [
              {
                "id": "de-scenario-02-01",
                "type": "translate",
                "question": "地铁站在哪里？",
                "options": [
                  "gute nacht",
                  "ein hotel buchen",
                  "wo ist die u-bahn?",
                  "die polizei rufen"
                ],
                "correctAnswer": "wo ist die u-bahn?",
                "difficulty": 1
              },
              {
                "id": "de-scenario-02-02",
                "type": "fill-blank",
                "question": "___ (坐出租车)",
                "options": [
                  "gute nacht",
                  "einzelzimmer",
                  "wo ist die u-bahn?",
                  "ein taxi nehmen"
                ],
                "correctAnswer": "ein taxi nehmen",
                "difficulty": 2
              },
              {
                "id": "de-scenario-02-03",
                "type": "translate",
                "question": "我需要医生",
                "options": [
                  "entschuldigung",
                  "die polizei rufen",
                  "ich brauche einen arzt",
                  "einzelzimmer"
                ],
                "correctAnswer": "ich brauche einen arzt",
                "difficulty": 1
              },
              {
                "id": "de-scenario-02-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "wo ist die u-bahn?",
                    "地铁站在哪里？"
                  ],
                  [
                    "ein taxi nehmen",
                    "坐出租车"
                  ],
                  [
                    "ich brauche einen arzt",
                    "我需要医生"
                  ],
                  [
                    "mir ist schlecht",
                    "我不舒服"
                  ]
                ]
              },
              {
                "id": "de-scenario-02-05",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "ein hotel buchen",
                "difficulty": 2,
                "audioWord": "ein hotel buchen"
              },
              {
                "id": "de-scenario-02-06",
                "type": "repeat",
                "question": "跟读：einzelzimmer",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "einzelzimmer"
              }
            ]
          },
          {
            "levelId": "de-scenario-03",
            "title": "就医买药",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "de-scenario-02"
            ],
            "questions": [
              {
                "id": "de-scenario-03-01",
                "type": "translate",
                "question": "地铁站在哪里？",
                "options": [
                  "guten morgen",
                  "wo ist die u-bahn?",
                  "gute nacht",
                  "ein taxi nehmen"
                ],
                "correctAnswer": "wo ist die u-bahn?",
                "difficulty": 1
              },
              {
                "id": "de-scenario-03-02",
                "type": "fill-blank",
                "question": "___ (坐出租车)",
                "options": [
                  "ein taxi nehmen",
                  "entschuldigung",
                  "guten morgen",
                  "ich brauche einen arzt"
                ],
                "correctAnswer": "ein taxi nehmen",
                "difficulty": 2
              },
              {
                "id": "de-scenario-03-03",
                "type": "translate",
                "question": "我需要医生",
                "options": [
                  "wo ist die u-bahn?",
                  "mir ist schlecht",
                  "ein taxi nehmen",
                  "ich brauche einen arzt"
                ],
                "correctAnswer": "ich brauche einen arzt",
                "difficulty": 1
              },
              {
                "id": "de-scenario-03-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "wo ist die u-bahn?",
                    "地铁站在哪里？"
                  ],
                  [
                    "ein taxi nehmen",
                    "坐出租车"
                  ],
                  [
                    "ich brauche einen arzt",
                    "我需要医生"
                  ],
                  [
                    "mir ist schlecht",
                    "我不舒服"
                  ]
                ]
              },
              {
                "id": "de-scenario-03-05",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "ein hotel buchen",
                "difficulty": 2,
                "audioWord": "ein hotel buchen"
              },
              {
                "id": "de-scenario-03-06",
                "type": "repeat",
                "question": "跟读：einzelzimmer",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "einzelzimmer"
              }
            ]
          }
        ]
      },
      {
        "id": "grammar",
        "name": "语法进阶",
        "color": "#F59E0B",
        "levels": [
          {
            "levelId": "de-grammar-01",
            "title": "动词基础",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "de-grammar-01-01",
                "type": "translate",
                "question": "去（原形）",
                "options": [
                  "gehen",
                  "esse",
                  "geht",
                  "gehe"
                ],
                "correctAnswer": "gehen",
                "difficulty": 1
              },
              {
                "id": "de-grammar-01-02",
                "type": "fill-blank",
                "question": "___ (我去)",
                "options": [
                  "essen",
                  "gehe",
                  "bin/ist/sind",
                  "sein"
                ],
                "correctAnswer": "gehe",
                "difficulty": 2
              },
              {
                "id": "de-grammar-01-03",
                "type": "translate",
                "question": "他/她去",
                "options": [
                  "esse",
                  "bin/ist/sind",
                  "geht",
                  "essen"
                ],
                "correctAnswer": "geht",
                "difficulty": 1
              },
              {
                "id": "de-grammar-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "gehen",
                    "去（原形）"
                  ],
                  [
                    "gehe",
                    "我去"
                  ],
                  [
                    "geht",
                    "他/她去"
                  ],
                  [
                    "sein",
                    "是（原形）"
                  ]
                ]
              },
              {
                "id": "de-grammar-01-05",
                "type": "dictation",
                "question": "听写：是",
                "correctAnswer": "bin/ist/sind",
                "difficulty": 2,
                "audioWord": "bin ist sind"
              },
              {
                "id": "de-grammar-01-06",
                "type": "repeat",
                "question": "跟读：essen",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "essen"
              }
            ]
          }
        ]
      },
      {
        "id": "culture",
        "name": "文化拓展",
        "color": "#8B5CF6",
        "levels": [
          {
            "levelId": "de-culture-01",
            "title": "节日与传统",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "de-culture-01-01",
                "type": "translate",
                "question": "慕尼黑啤酒节",
                "options": [
                  "brezel",
                  "oktoberfest",
                  "kuckucksuhr",
                  "weihnachten"
                ],
                "correctAnswer": "oktoberfest",
                "difficulty": 1
              },
              {
                "id": "de-culture-01-02",
                "type": "fill-blank",
                "question": "___ (圣诞节)",
                "options": [
                  "oktoberfest",
                  "brezel",
                  "kuckucksuhr",
                  "weihnachten"
                ],
                "correctAnswer": "weihnachten",
                "difficulty": 2
              },
              {
                "id": "de-culture-01-03",
                "type": "translate",
                "question": "碱水结",
                "options": [
                  "oktoberfest",
                  "weihnachten",
                  "kuckucksuhr",
                  "brezel"
                ],
                "correctAnswer": "brezel",
                "difficulty": 1
              },
              {
                "id": "de-culture-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "oktoberfest",
                    "慕尼黑啤酒节"
                  ],
                  [
                    "weihnachten",
                    "圣诞节"
                  ],
                  [
                    "brezel",
                    "碱水结"
                  ],
                  [
                    "kuckucksuhr",
                    "布谷鸟钟"
                  ]
                ]
              },
              {
                "id": "de-culture-01-05",
                "type": "dictation",
                "question": "听写：慕尼黑啤酒节",
                "correctAnswer": "oktoberfest",
                "difficulty": 2,
                "audioWord": "oktoberfest"
              },
              {
                "id": "de-culture-01-06",
                "type": "repeat",
                "question": "跟读：weihnachten",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "weihnachten"
              }
            ]
          }
        ]
      }
    ]
  },
  "el": {
    "themes": [
      {
        "id": "basic",
        "name": "基础词汇",
        "color": "#1D4ED8",
        "levels": [
          {
            "levelId": "el-basic-01",
            "title": "问候与礼貌",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [],
            "questions": [
              {
                "id": "el-basic-01-01",
                "type": "translate",
                "question": "是",
                "options": [
                  "συγγνώμη",
                  "ναι",
                  "αδελφός",
                  "μπλε"
                ],
                "correctAnswer": "ναι",
                "difficulty": 1
              },
              {
                "id": "el-basic-01-02",
                "type": "fill-blank",
                "question": "___ (不是)",
                "options": [
                  "όχι",
                  "μπλε",
                  "παρακαλώ",
                  "μαμά"
                ],
                "correctAnswer": "όχι",
                "difficulty": 2
              },
              {
                "id": "el-basic-01-03",
                "type": "translate",
                "question": "再见",
                "options": [
                  "μαύρο",
                  "τρία",
                  "όχι",
                  "αντίο"
                ],
                "correctAnswer": "αντίο",
                "difficulty": 1
              },
              {
                "id": "el-basic-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "ναι",
                    "是"
                  ],
                  [
                    "όχι",
                    "不是"
                  ],
                  [
                    "αντίο",
                    "再见"
                  ],
                  [
                    "παρακαλώ",
                    "请"
                  ]
                ]
              },
              {
                "id": "el-basic-01-05",
                "type": "dictation",
                "question": "听写：一",
                "correctAnswer": "ένα",
                "difficulty": 2,
                "audioWord": "ena"
              },
              {
                "id": "el-basic-01-06",
                "type": "repeat",
                "question": "跟读：δύο",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "δύο"
              }
            ]
          },
          {
            "levelId": "el-basic-02",
            "title": "家庭与人物",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "el-basic-01"
            ],
            "questions": [
              {
                "id": "el-basic-02-01",
                "type": "translate",
                "question": "父亲",
                "options": [
                  "πατέρας",
                  "γιαγιά",
                  "αδερφός",
                  "μητέρα"
                ],
                "correctAnswer": "πατέρας",
                "difficulty": 1
              },
              {
                "id": "el-basic-02-02",
                "type": "translate",
                "question": "母亲",
                "options": [
                  "μητέρα",
                  "γιος",
                  "αδερφή",
                  "γιαγιά"
                ],
                "correctAnswer": "μητέρα",
                "difficulty": 1
              },
              {
                "id": "el-basic-02-03",
                "type": "translate",
                "question": "兄弟",
                "options": [
                  "αδερφός",
                  "παππούς",
                  "αδερφή",
                  "μητέρα"
                ],
                "correctAnswer": "αδερφός",
                "difficulty": 1
              },
              {
                "id": "el-basic-02-04",
                "type": "fill-blank",
                "question": "___ (姐妹)",
                "options": [
                  "αδερφή",
                  "αδερφός",
                  "γιαγιά",
                  "μητέρα"
                ],
                "correctAnswer": "αδερφή",
                "difficulty": 2
              },
              {
                "id": "el-basic-02-05",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "πατέρας",
                    "父亲"
                  ],
                  [
                    "μητέρα",
                    "母亲"
                  ],
                  [
                    "αδερφός",
                    "兄弟"
                  ],
                  [
                    "αδερφή",
                    "姐妹"
                  ]
                ]
              },
              {
                "id": "el-basic-02-06",
                "type": "dictation",
                "question": "听写：女儿",
                "correctAnswer": "κόρη",
                "difficulty": 2,
                "audioWord": "kori"
              }
            ]
          },
          {
            "levelId": "el-basic-03",
            "title": "数字与颜色",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "el-basic-02"
            ],
            "questions": [
              {
                "id": "el-basic-03-01",
                "type": "translate",
                "question": "一",
                "options": [
                  "ένα",
                  "μπλε",
                  "τέσσερα",
                  "δύο"
                ],
                "correctAnswer": "ένα",
                "difficulty": 1
              },
              {
                "id": "el-basic-03-02",
                "type": "translate",
                "question": "二",
                "options": [
                  "δύο",
                  "κόκκινο",
                  "μπλε",
                  "τρία"
                ],
                "correctAnswer": "δύο",
                "difficulty": 1
              },
              {
                "id": "el-basic-03-03",
                "type": "fill-blank",
                "question": "___ (三)",
                "options": [
                  "τρία",
                  "κόκκινο",
                  "μπλε",
                  "δύο"
                ],
                "correctAnswer": "τρία",
                "difficulty": 2
              },
              {
                "id": "el-basic-03-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "ένα",
                    "一"
                  ],
                  [
                    "δύο",
                    "二"
                  ],
                  [
                    "τρία",
                    "三"
                  ],
                  [
                    "τέσσερα",
                    "四"
                  ]
                ]
              },
              {
                "id": "el-basic-03-05",
                "type": "dictation",
                "question": "听写：五",
                "correctAnswer": "πέντε",
                "difficulty": 2,
                "audioWord": "pente"
              },
              {
                "id": "el-basic-03-06",
                "type": "repeat",
                "question": "跟读：红色",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "κόκκινο"
              }
            ]
          }
        ]
      },
      {
        "id": "daily",
        "name": "日常对话",
        "color": "#60A5FA",
        "levels": [
          {
            "levelId": "el-daily-02",
            "title": "购物与消费",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "el-daily-02-01",
                "type": "translate",
                "question": "我叫…",
                "options": [
                  "μπορείτε να κάνετε έκπτωση?",
                  "θέλω αυτό",
                  "με λένε...",
                  "χάθηκα"
                ],
                "correctAnswer": "με λένε...",
                "difficulty": 1
              },
              {
                "id": "el-daily-02-02",
                "type": "fill-blank",
                "question": "___ (很高兴认识你)",
                "options": [
                  "πόσο κάνει?",
                  "χάρηκα πολύ",
                  "το μενού παρακαλώ",
                  "θέλω αυτό"
                ],
                "correctAnswer": "χάρηκα πολύ",
                "difficulty": 2
              },
              {
                "id": "el-daily-02-03",
                "type": "translate",
                "question": "你好吗？",
                "options": [
                  "τι κάνεις?",
                  "θέλω αυτό",
                  "από πού είσαι?",
                  "με λένε..."
                ],
                "correctAnswer": "τι κάνεις?",
                "difficulty": 1
              },
              {
                "id": "el-daily-02-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "με λένε...",
                    "我叫…"
                  ],
                  [
                    "χάρηκα πολύ",
                    "很高兴认识你"
                  ],
                  [
                    "τι κάνεις?",
                    "你好吗？"
                  ],
                  [
                    "από πού είσαι?",
                    "你从哪里来？"
                  ]
                ]
              },
              {
                "id": "el-daily-02-05",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "πόσο κάνει?",
                "difficulty": 2,
                "audioWord": "poso kanei"
              },
              {
                "id": "el-daily-02-06",
                "type": "repeat",
                "question": "跟读：θέλω αυτό",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "θέλω αυτό"
              }
            ]
          },
          {
            "levelId": "el-daily-03",
            "title": "购物与消费",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "el-daily-02"
            ],
            "questions": [
              {
                "id": "el-daily-03-01",
                "type": "translate",
                "question": "我叫…",
                "options": [
                  "είναι πολύ ακριβό",
                  "με λένε...",
                  "το μενού παρακαλώ",
                  "χάθηκα"
                ],
                "correctAnswer": "με λένε...",
                "difficulty": 1
              },
              {
                "id": "el-daily-03-02",
                "type": "fill-blank",
                "question": "___ (很高兴认识你)",
                "options": [
                  "είναι πολύ ακριβό",
                  "χάρηκα πολύ",
                  "θέλω αυτό",
                  "πόσο κάνει?"
                ],
                "correctAnswer": "χάρηκα πολύ",
                "difficulty": 2
              },
              {
                "id": "el-daily-03-03",
                "type": "translate",
                "question": "你好吗？",
                "options": [
                  "μπορείτε να κάνετε έκπτωση?",
                  "τι κάνεις?",
                  "είναι πολύ ακριβό",
                  "θέλω αυτό"
                ],
                "correctAnswer": "τι κάνεις?",
                "difficulty": 1
              },
              {
                "id": "el-daily-03-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "με λένε...",
                    "我叫…"
                  ],
                  [
                    "χάρηκα πολύ",
                    "很高兴认识你"
                  ],
                  [
                    "τι κάνεις?",
                    "你好吗？"
                  ],
                  [
                    "από πού είσαι?",
                    "你从哪里来？"
                  ]
                ]
              },
              {
                "id": "el-daily-03-05",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "πόσο κάνει?",
                "difficulty": 2,
                "audioWord": "poso kanei"
              },
              {
                "id": "el-daily-03-06",
                "type": "repeat",
                "question": "跟读：θέλω αυτό",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "θέλω αυτό"
              }
            ]
          }
        ]
      },
      {
        "id": "scenario",
        "name": "场景实战",
        "color": "#EF4444",
        "levels": [
          {
            "levelId": "el-scenario-01",
            "title": "交通出行",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "el-scenario-01-01",
                "type": "translate",
                "question": "地铁站在哪里？",
                "options": [
                  "καλέστε την αστυνομία",
                  "πού είναι το μετρό?",
                  "βοήθεια!",
                  "μονόκλινο δωμάτιο"
                ],
                "correctAnswer": "πού είναι το μετρό?",
                "difficulty": 1
              },
              {
                "id": "el-scenario-01-02",
                "type": "fill-blank",
                "question": "___ (坐出租车)",
                "options": [
                  "καληνύχτα",
                  "να πάρω ταξί",
                  "κράτηση ξενοδοχείου",
                  "τα λέμε αύριο"
                ],
                "correctAnswer": "να πάρω ταξί",
                "difficulty": 2
              },
              {
                "id": "el-scenario-01-03",
                "type": "translate",
                "question": "我需要医生",
                "options": [
                  "καλημέρα",
                  "χρειάζομαι γιατρό",
                  "με συγχωρείτε",
                  "κράτηση ξενοδοχείου"
                ],
                "correctAnswer": "χρειάζομαι γιατρό",
                "difficulty": 1
              },
              {
                "id": "el-scenario-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "πού είναι το μετρό?",
                    "地铁站在哪里？"
                  ],
                  [
                    "να πάρω ταξί",
                    "坐出租车"
                  ],
                  [
                    "χρειάζομαι γιατρό",
                    "我需要医生"
                  ],
                  [
                    "δεν αισθάνομαι καλά",
                    "我不舒服"
                  ]
                ]
              },
              {
                "id": "el-scenario-01-05",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "κράτηση ξενοδοχείου",
                "difficulty": 2,
                "audioWord": "kratisi xenodochiou"
              },
              {
                "id": "el-scenario-01-06",
                "type": "repeat",
                "question": "跟读：μονόκλινο δωμάτιο",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "μονόκλινο δωμάτιο"
              }
            ]
          },
          {
            "levelId": "el-scenario-02",
            "title": "酒店与应急",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "el-scenario-01"
            ],
            "questions": [
              {
                "id": "el-scenario-02-01",
                "type": "translate",
                "question": "地铁站在哪里？",
                "options": [
                  "δεν αισθάνομαι καλά",
                  "καλέστε την αστυνομία",
                  "πού είναι το μετρό?",
                  "καλημέρα"
                ],
                "correctAnswer": "πού είναι το μετρό?",
                "difficulty": 1
              },
              {
                "id": "el-scenario-02-02",
                "type": "fill-blank",
                "question": "___ (坐出租车)",
                "options": [
                  "δεν αισθάνομαι καλά",
                  "με συγχωρείτε",
                  "να πάρω ταξί",
                  "καλέστε την αστυνομία"
                ],
                "correctAnswer": "να πάρω ταξί",
                "difficulty": 2
              },
              {
                "id": "el-scenario-02-03",
                "type": "translate",
                "question": "我需要医生",
                "options": [
                  "τα λέμε αύριο",
                  "χρειάζομαι γιατρό",
                  "καλημέρα",
                  "καλέστε την αστυνομία"
                ],
                "correctAnswer": "χρειάζομαι γιατρό",
                "difficulty": 1
              },
              {
                "id": "el-scenario-02-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "πού είναι το μετρό?",
                    "地铁站在哪里？"
                  ],
                  [
                    "να πάρω ταξί",
                    "坐出租车"
                  ],
                  [
                    "χρειάζομαι γιατρό",
                    "我需要医生"
                  ],
                  [
                    "δεν αισθάνομαι καλά",
                    "我不舒服"
                  ]
                ]
              },
              {
                "id": "el-scenario-02-05",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "κράτηση ξενοδοχείου",
                "difficulty": 2,
                "audioWord": "kratisi xenodochiou"
              },
              {
                "id": "el-scenario-02-06",
                "type": "repeat",
                "question": "跟读：μονόκλινο δωμάτιο",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "μονόκλινο δωμάτιο"
              }
            ]
          },
          {
            "levelId": "el-scenario-03",
            "title": "就医买药",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "el-scenario-02"
            ],
            "questions": [
              {
                "id": "el-scenario-03-01",
                "type": "translate",
                "question": "地铁站在哪里？",
                "options": [
                  "καληνύχτα",
                  "βοήθεια!",
                  "χρειάζομαι γιατρό",
                  "πού είναι το μετρό?"
                ],
                "correctAnswer": "πού είναι το μετρό?",
                "difficulty": 1
              },
              {
                "id": "el-scenario-03-02",
                "type": "fill-blank",
                "question": "___ (坐出租车)",
                "options": [
                  "να πάρω ταξί",
                  "τα λέμε αύριο",
                  "δεν αισθάνομαι καλά",
                  "πού είναι το μετρό?"
                ],
                "correctAnswer": "να πάρω ταξί",
                "difficulty": 2
              },
              {
                "id": "el-scenario-03-03",
                "type": "translate",
                "question": "我需要医生",
                "options": [
                  "να πάρω ταξί",
                  "με συγχωρείτε",
                  "χρειάζομαι γιατρό",
                  "πού είναι το μετρό?"
                ],
                "correctAnswer": "χρειάζομαι γιατρό",
                "difficulty": 1
              },
              {
                "id": "el-scenario-03-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "πού είναι το μετρό?",
                    "地铁站在哪里？"
                  ],
                  [
                    "να πάρω ταξί",
                    "坐出租车"
                  ],
                  [
                    "χρειάζομαι γιατρό",
                    "我需要医生"
                  ],
                  [
                    "δεν αισθάνομαι καλά",
                    "我不舒服"
                  ]
                ]
              },
              {
                "id": "el-scenario-03-05",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "κράτηση ξενοδοχείου",
                "difficulty": 2,
                "audioWord": "kratisi xenodochiou"
              },
              {
                "id": "el-scenario-03-06",
                "type": "repeat",
                "question": "跟读：μονόκλινο δωμάτιο",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "μονόκλινο δωμάτιο"
              }
            ]
          }
        ]
      },
      {
        "id": "grammar",
        "name": "语法进阶",
        "color": "#F59E0B",
        "levels": [
          {
            "levelId": "el-grammar-01",
            "title": "动词基础",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "el-grammar-01-01",
                "type": "translate",
                "question": "去（原形）",
                "options": [
                  "είμαι/είναι",
                  "πάω",
                  "είμαι",
                  "τρώγω"
                ],
                "correctAnswer": "πάω",
                "difficulty": 1
              },
              {
                "id": "el-grammar-01-02",
                "type": "fill-blank",
                "question": "___ (我去)",
                "options": [
                  "είμαι/είναι",
                  "πάω",
                  "είμαι",
                  "πηγαίνω"
                ],
                "correctAnswer": "πηγαίνω",
                "difficulty": 2
              },
              {
                "id": "el-grammar-01-03",
                "type": "translate",
                "question": "他去",
                "options": [
                  "πάει",
                  "πηγαίνω",
                  "πάω",
                  "τρώγω"
                ],
                "correctAnswer": "πάει",
                "difficulty": 1
              },
              {
                "id": "el-grammar-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "πάω",
                    "去（原形）"
                  ],
                  [
                    "πηγαίνω",
                    "我去"
                  ],
                  [
                    "πάει",
                    "他去"
                  ],
                  [
                    "είμαι",
                    "是（原形）"
                  ]
                ]
              },
              {
                "id": "el-grammar-01-05",
                "type": "dictation",
                "question": "听写：是",
                "correctAnswer": "είμαι/είναι",
                "difficulty": 2,
                "audioWord": "eimai einai"
              },
              {
                "id": "el-grammar-01-06",
                "type": "repeat",
                "question": "跟读：τρώω",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "τρώω"
              }
            ]
          }
        ]
      },
      {
        "id": "culture",
        "name": "文化拓展",
        "color": "#8B5CF6",
        "levels": [
          {
            "levelId": "el-culture-01",
            "title": "节日与传统",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "el-culture-01-01",
                "type": "translate",
                "question": "圣诞节",
                "options": [
                  "σουβλάκι",
                  "χριστούγεννα",
                  "μουσακάς",
                  "πάσχα"
                ],
                "correctAnswer": "χριστούγεννα",
                "difficulty": 1
              },
              {
                "id": "el-culture-01-02",
                "type": "fill-blank",
                "question": "___ (复活节)",
                "options": [
                  "σουβλάκι",
                  "χριστούγεννα",
                  "μουσακάς",
                  "πάσχα"
                ],
                "correctAnswer": "πάσχα",
                "difficulty": 2
              },
              {
                "id": "el-culture-01-03",
                "type": "translate",
                "question": "木莎卡",
                "options": [
                  "σουβλάκι",
                  "μουσακάς",
                  "πάσχα",
                  "χριστούγεννα"
                ],
                "correctAnswer": "μουσακάς",
                "difficulty": 1
              },
              {
                "id": "el-culture-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "χριστούγεννα",
                    "圣诞节"
                  ],
                  [
                    "πάσχα",
                    "复活节"
                  ],
                  [
                    "μουσακάς",
                    "木莎卡"
                  ],
                  [
                    "σουβλάκι",
                    "烤肉卷"
                  ]
                ]
              },
              {
                "id": "el-culture-01-05",
                "type": "dictation",
                "question": "听写：圣诞节",
                "correctAnswer": "χριστούγεννα",
                "difficulty": 2,
                "audioWord": "christougenna"
              },
              {
                "id": "el-culture-01-06",
                "type": "repeat",
                "question": "跟读：πάσχα",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "πάσχα"
              }
            ]
          }
        ]
      }
    ]
  },
  "es": {
    "themes": [
      {
        "id": "basic",
        "name": "基础词汇",
        "color": "#1D4ED8",
        "levels": [
          {
            "levelId": "es-basic-03",
            "title": "数字与颜色",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [],
            "questions": [
              {
                "id": "es-basic-03-01",
                "type": "translate",
                "question": "是",
                "options": [
                  "hermana",
                  "no",
                  "sí",
                  "cinco"
                ],
                "correctAnswer": "sí",
                "difficulty": 1
              },
              {
                "id": "es-basic-03-02",
                "type": "fill-blank",
                "question": "___ (不是)",
                "options": [
                  "hermana",
                  "tres",
                  "no",
                  "negro"
                ],
                "correctAnswer": "no",
                "difficulty": 2
              },
              {
                "id": "es-basic-03-03",
                "type": "translate",
                "question": "再见",
                "options": [
                  "dos",
                  "adiós",
                  "rojo",
                  "cuatro"
                ],
                "correctAnswer": "adiós",
                "difficulty": 1
              },
              {
                "id": "es-basic-03-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "sí",
                    "是"
                  ],
                  [
                    "no",
                    "不是"
                  ],
                  [
                    "adiós",
                    "再见"
                  ],
                  [
                    "por favor",
                    "请"
                  ]
                ]
              },
              {
                "id": "es-basic-03-05",
                "type": "dictation",
                "question": "听写：一",
                "correctAnswer": "uno",
                "difficulty": 2,
                "audioWord": "uno"
              },
              {
                "id": "es-basic-03-06",
                "type": "repeat",
                "question": "跟读：dos",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "dos"
              }
            ]
          }
        ]
      },
      {
        "id": "daily",
        "name": "日常对话",
        "color": "#60A5FA",
        "levels": [
          {
            "levelId": "es-daily-02",
            "title": "购物与消费",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "es-daily-02-01",
                "type": "translate",
                "question": "我叫…",
                "options": [
                  "¿De dónde eres?",
                  "La cuenta, por favor",
                  "Quiero esto",
                  "Me llamo..."
                ],
                "correctAnswer": "Me llamo...",
                "difficulty": 1
              },
              {
                "id": "es-daily-02-02",
                "type": "fill-blank",
                "question": "___ (很高兴认识你)",
                "options": [
                  "¿Cómo estás?",
                  "¿De dónde eres?",
                  "El menú, por favor",
                  "Mucho gusto"
                ],
                "correctAnswer": "Mucho gusto",
                "difficulty": 2
              },
              {
                "id": "es-daily-02-03",
                "type": "translate",
                "question": "你好吗？",
                "options": [
                  "El menú, por favor",
                  "Está muy rico",
                  "¿Cómo estás?",
                  "Estoy perdido"
                ],
                "correctAnswer": "¿Cómo estás?",
                "difficulty": 1
              },
              {
                "id": "es-daily-02-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "Me llamo...",
                    "我叫…"
                  ],
                  [
                    "Mucho gusto",
                    "很高兴认识你"
                  ],
                  [
                    "¿Cómo estás?",
                    "你好吗？"
                  ],
                  [
                    "¿De dónde eres?",
                    "你从哪里来？"
                  ]
                ]
              },
              {
                "id": "es-daily-02-05",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "¿Cuánto cuesta?",
                "difficulty": 2,
                "audioWord": "cuánto cuesta"
              },
              {
                "id": "es-daily-02-06",
                "type": "repeat",
                "question": "跟读：Quiero esto",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "Quiero esto"
              }
            ]
          },
          {
            "levelId": "es-daily-03",
            "title": "购物与消费",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "es-daily-02"
            ],
            "questions": [
              {
                "id": "es-daily-03-01",
                "type": "translate",
                "question": "我叫…",
                "options": [
                  "¿Cómo estás?",
                  "El menú, por favor",
                  "Quiero esto",
                  "Me llamo..."
                ],
                "correctAnswer": "Me llamo...",
                "difficulty": 1
              },
              {
                "id": "es-daily-03-02",
                "type": "fill-blank",
                "question": "___ (很高兴认识你)",
                "options": [
                  "Está muy rico",
                  "Me llamo...",
                  "Mucho gusto",
                  "¿Cómo estás?"
                ],
                "correctAnswer": "Mucho gusto",
                "difficulty": 2
              },
              {
                "id": "es-daily-03-03",
                "type": "translate",
                "question": "你好吗？",
                "options": [
                  "Mucho gusto",
                  "¿Cómo estás?",
                  "¿Cuánto cuesta?",
                  "Estoy perdido"
                ],
                "correctAnswer": "¿Cómo estás?",
                "difficulty": 1
              },
              {
                "id": "es-daily-03-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "Me llamo...",
                    "我叫…"
                  ],
                  [
                    "Mucho gusto",
                    "很高兴认识你"
                  ],
                  [
                    "¿Cómo estás?",
                    "你好吗？"
                  ],
                  [
                    "¿De dónde eres?",
                    "你从哪里来？"
                  ]
                ]
              },
              {
                "id": "es-daily-03-05",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "¿Cuánto cuesta?",
                "difficulty": 2,
                "audioWord": "cuánto cuesta"
              },
              {
                "id": "es-daily-03-06",
                "type": "repeat",
                "question": "跟读：Quiero esto",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "Quiero esto"
              }
            ]
          }
        ]
      },
      {
        "id": "scenario",
        "name": "场景实战",
        "color": "#EF4444",
        "levels": [
          {
            "levelId": "es-scenario-01",
            "title": "交通出行",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "es-scenario-01-01",
                "type": "translate",
                "question": "地铁站在哪里？",
                "options": [
                  "¿Dónde está el metro?",
                  "Llamar a la policía",
                  "Buenas noches",
                  "Buenos días"
                ],
                "correctAnswer": "¿Dónde está el metro?",
                "difficulty": 1
              },
              {
                "id": "es-scenario-01-02",
                "type": "fill-blank",
                "question": "___ (坐出租车)",
                "options": [
                  "Habitación individual",
                  "Hasta mañana",
                  "¿Dónde está el metro?",
                  "Tomar un taxi"
                ],
                "correctAnswer": "Tomar un taxi",
                "difficulty": 2
              },
              {
                "id": "es-scenario-01-03",
                "type": "translate",
                "question": "我需要医生",
                "options": [
                  "Me siento mal",
                  "Tomar un taxi",
                  "Necesito un médico",
                  "Habitación individual"
                ],
                "correctAnswer": "Necesito un médico",
                "difficulty": 1
              },
              {
                "id": "es-scenario-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "¿Dónde está el metro?",
                    "地铁站在哪里？"
                  ],
                  [
                    "Tomar un taxi",
                    "坐出租车"
                  ],
                  [
                    "Necesito un médico",
                    "我需要医生"
                  ],
                  [
                    "Me siento mal",
                    "我不舒服"
                  ]
                ]
              },
              {
                "id": "es-scenario-01-05",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "Reservar un hotel",
                "difficulty": 2,
                "audioWord": "reservar un hotel"
              },
              {
                "id": "es-scenario-01-06",
                "type": "repeat",
                "question": "跟读：Habitación individual",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "Habitación individual"
              }
            ]
          },
          {
            "levelId": "es-scenario-02",
            "title": "酒店与应急",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "es-scenario-01"
            ],
            "questions": [
              {
                "id": "es-scenario-02-01",
                "type": "translate",
                "question": "地铁站在哪里？",
                "options": [
                  "¿Dónde está el metro?",
                  "Me siento mal",
                  "Tomar un taxi",
                  "Llamar a la policía"
                ],
                "correctAnswer": "¿Dónde está el metro?",
                "difficulty": 1
              },
              {
                "id": "es-scenario-02-02",
                "type": "fill-blank",
                "question": "___ (坐出租车)",
                "options": [
                  "Tomar un taxi",
                  "Habitación individual",
                  "Reservar un hotel",
                  "¿Dónde está el metro?"
                ],
                "correctAnswer": "Tomar un taxi",
                "difficulty": 2
              },
              {
                "id": "es-scenario-02-03",
                "type": "translate",
                "question": "我需要医生",
                "options": [
                  "Buenos días",
                  "Necesito un médico",
                  "Reservar un hotel",
                  "Tomar un taxi"
                ],
                "correctAnswer": "Necesito un médico",
                "difficulty": 1
              },
              {
                "id": "es-scenario-02-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "¿Dónde está el metro?",
                    "地铁站在哪里？"
                  ],
                  [
                    "Tomar un taxi",
                    "坐出租车"
                  ],
                  [
                    "Necesito un médico",
                    "我需要医生"
                  ],
                  [
                    "Me siento mal",
                    "我不舒服"
                  ]
                ]
              },
              {
                "id": "es-scenario-02-05",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "Reservar un hotel",
                "difficulty": 2,
                "audioWord": "reservar un hotel"
              },
              {
                "id": "es-scenario-02-06",
                "type": "repeat",
                "question": "跟读：Habitación individual",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "Habitación individual"
              }
            ]
          },
          {
            "levelId": "es-scenario-03",
            "title": "就医买药",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "es-scenario-02"
            ],
            "questions": [
              {
                "id": "es-scenario-03-01",
                "type": "translate",
                "question": "地铁站在哪里？",
                "options": [
                  "Buenas noches",
                  "¿Dónde está el metro?",
                  "Necesito un médico",
                  "Llamar a la policía"
                ],
                "correctAnswer": "¿Dónde está el metro?",
                "difficulty": 1
              },
              {
                "id": "es-scenario-03-02",
                "type": "fill-blank",
                "question": "___ (坐出租车)",
                "options": [
                  "Me siento mal",
                  "Habitación individual",
                  "Necesito un médico",
                  "Tomar un taxi"
                ],
                "correctAnswer": "Tomar un taxi",
                "difficulty": 2
              },
              {
                "id": "es-scenario-03-03",
                "type": "translate",
                "question": "我需要医生",
                "options": [
                  "Perdone",
                  "Hasta mañana",
                  "Necesito un médico",
                  "Habitación individual"
                ],
                "correctAnswer": "Necesito un médico",
                "difficulty": 1
              },
              {
                "id": "es-scenario-03-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "¿Dónde está el metro?",
                    "地铁站在哪里？"
                  ],
                  [
                    "Tomar un taxi",
                    "坐出租车"
                  ],
                  [
                    "Necesito un médico",
                    "我需要医生"
                  ],
                  [
                    "Me siento mal",
                    "我不舒服"
                  ]
                ]
              },
              {
                "id": "es-scenario-03-05",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "Reservar un hotel",
                "difficulty": 2,
                "audioWord": "reservar un hotel"
              },
              {
                "id": "es-scenario-03-06",
                "type": "repeat",
                "question": "跟读：Habitación individual",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "Habitación individual"
              }
            ]
          }
        ]
      },
      {
        "id": "grammar",
        "name": "语法进阶",
        "color": "#F59E0B",
        "levels": [
          {
            "levelId": "es-grammar-01",
            "title": "动词基础",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "es-grammar-01-01",
                "type": "translate",
                "question": "吃（原形）",
                "options": [
                  "comer",
                  "voy",
                  "fui",
                  "ser/estar"
                ],
                "correctAnswer": "comer",
                "difficulty": 1
              },
              {
                "id": "es-grammar-01-02",
                "type": "fill-blank",
                "question": "___ (我吃)",
                "options": [
                  "como",
                  "fui",
                  "comer",
                  "ir"
                ],
                "correctAnswer": "como",
                "difficulty": 2
              },
              {
                "id": "es-grammar-01-03",
                "type": "translate",
                "question": "他/她吃",
                "options": [
                  "ir",
                  "ser/estar",
                  "comer",
                  "come"
                ],
                "correctAnswer": "come",
                "difficulty": 1
              },
              {
                "id": "es-grammar-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "comer",
                    "吃（原形）"
                  ],
                  [
                    "como",
                    "我吃"
                  ],
                  [
                    "come",
                    "他/她吃"
                  ],
                  [
                    "ser/estar",
                    "是"
                  ]
                ]
              },
              {
                "id": "es-grammar-01-05",
                "type": "dictation",
                "question": "听写：我是/去（过去式）",
                "correctAnswer": "fui",
                "difficulty": 2,
                "audioWord": "fui"
              },
              {
                "id": "es-grammar-01-06",
                "type": "repeat",
                "question": "跟读：ir",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "ir"
              }
            ]
          },
          {
            "levelId": "es-grammar-02",
            "title": "名词与形容词",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "es-grammar-01"
            ],
            "questions": [
              {
                "id": "es-grammar-02-01",
                "type": "translate",
                "question": "吃（原形）",
                "options": [
                  "comer",
                  "ser/estar",
                  "como",
                  "voy"
                ],
                "correctAnswer": "comer",
                "difficulty": 1
              },
              {
                "id": "es-grammar-02-02",
                "type": "fill-blank",
                "question": "___ (我吃)",
                "options": [
                  "come",
                  "ser/estar",
                  "como",
                  "fui"
                ],
                "correctAnswer": "como",
                "difficulty": 2
              },
              {
                "id": "es-grammar-02-03",
                "type": "translate",
                "question": "他/她吃",
                "options": [
                  "ser/estar",
                  "come",
                  "voy",
                  "fui"
                ],
                "correctAnswer": "come",
                "difficulty": 1
              },
              {
                "id": "es-grammar-02-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "comer",
                    "吃（原形）"
                  ],
                  [
                    "como",
                    "我吃"
                  ],
                  [
                    "come",
                    "他/她吃"
                  ],
                  [
                    "ser/estar",
                    "是"
                  ]
                ]
              },
              {
                "id": "es-grammar-02-05",
                "type": "dictation",
                "question": "听写：我是/去（过去式）",
                "correctAnswer": "fui",
                "difficulty": 2,
                "audioWord": "fui"
              },
              {
                "id": "es-grammar-02-06",
                "type": "repeat",
                "question": "跟读：ir",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "ir"
              }
            ]
          }
        ]
      },
      {
        "id": "culture",
        "name": "文化拓展",
        "color": "#8B5CF6",
        "levels": [
          {
            "levelId": "es-culture-01",
            "title": "节日与传统",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "es-culture-01-01",
                "type": "translate",
                "question": "圣诞节",
                "options": [
                  "Navidad",
                  "Flamenco",
                  "Día de los Muertos",
                  "Siesta"
                ],
                "correctAnswer": "Navidad",
                "difficulty": 1
              },
              {
                "id": "es-culture-01-02",
                "type": "fill-blank",
                "question": "___ (亡灵节)",
                "options": [
                  "Flamenco",
                  "Navidad",
                  "Siesta",
                  "Día de los Muertos"
                ],
                "correctAnswer": "Día de los Muertos",
                "difficulty": 2
              },
              {
                "id": "es-culture-01-03",
                "type": "translate",
                "question": "弗拉门戈",
                "options": [
                  "Siesta",
                  "Día de los Muertos",
                  "Navidad",
                  "Flamenco"
                ],
                "correctAnswer": "Flamenco",
                "difficulty": 1
              },
              {
                "id": "es-culture-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "Navidad",
                    "圣诞节"
                  ],
                  [
                    "Día de los Muertos",
                    "亡灵节"
                  ],
                  [
                    "Flamenco",
                    "弗拉门戈"
                  ],
                  [
                    "Siesta",
                    "午休"
                  ]
                ]
              },
              {
                "id": "es-culture-01-05",
                "type": "dictation",
                "question": "听写：圣诞节",
                "correctAnswer": "Navidad",
                "difficulty": 2,
                "audioWord": "Navidad"
              },
              {
                "id": "es-culture-01-06",
                "type": "repeat",
                "question": "跟读：Día de los Muertos",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "Día de los Muertos"
              }
            ]
          },
          {
            "levelId": "es-culture-02",
            "title": "美食与文化",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "es-culture-01"
            ],
            "questions": [
              {
                "id": "es-culture-02-01",
                "type": "translate",
                "question": "圣诞节",
                "options": [
                  "Navidad",
                  "Flamenco",
                  "Siesta",
                  "Día de los Muertos"
                ],
                "correctAnswer": "Navidad",
                "difficulty": 1
              },
              {
                "id": "es-culture-02-02",
                "type": "fill-blank",
                "question": "___ (亡灵节)",
                "options": [
                  "Flamenco",
                  "Día de los Muertos",
                  "Navidad",
                  "Siesta"
                ],
                "correctAnswer": "Día de los Muertos",
                "difficulty": 2
              },
              {
                "id": "es-culture-02-03",
                "type": "translate",
                "question": "弗拉门戈",
                "options": [
                  "Día de los Muertos",
                  "Siesta",
                  "Navidad",
                  "Flamenco"
                ],
                "correctAnswer": "Flamenco",
                "difficulty": 1
              },
              {
                "id": "es-culture-02-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "Navidad",
                    "圣诞节"
                  ],
                  [
                    "Día de los Muertos",
                    "亡灵节"
                  ],
                  [
                    "Flamenco",
                    "弗拉门戈"
                  ],
                  [
                    "Siesta",
                    "午休"
                  ]
                ]
              },
              {
                "id": "es-culture-02-05",
                "type": "dictation",
                "question": "听写：圣诞节",
                "correctAnswer": "Navidad",
                "difficulty": 2,
                "audioWord": "Navidad"
              },
              {
                "id": "es-culture-02-06",
                "type": "repeat",
                "question": "跟读：Día de los Muertos",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "Día de los Muertos"
              }
            ]
          }
        ]
      }
    ]
  },
  "fr": {
    "themes": [
      {
        "id": "basic",
        "name": "基础词汇",
        "color": "#1D4ED8",
        "levels": [
          {
            "levelId": "fr-basic-01",
            "title": "问候与礼貌",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [],
            "questions": [
              {
                "id": "fr-basic-01-01",
                "type": "translate",
                "question": "是",
                "options": [
                  "eau",
                  "bonjour",
                  "riz",
                  "oui"
                ],
                "correctAnswer": "oui",
                "difficulty": 1
              },
              {
                "id": "fr-basic-01-02",
                "type": "fill-blank",
                "question": "___ (不是)",
                "options": [
                  "pain",
                  "ami",
                  "non",
                  "au revoir"
                ],
                "correctAnswer": "non",
                "difficulty": 2
              },
              {
                "id": "fr-basic-01-03",
                "type": "translate",
                "question": "再见",
                "options": [
                  "pain",
                  "deux",
                  "au revoir",
                  "un"
                ],
                "correctAnswer": "au revoir",
                "difficulty": 1
              },
              {
                "id": "fr-basic-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "oui",
                    "是"
                  ],
                  [
                    "non",
                    "不是"
                  ],
                  [
                    "au revoir",
                    "再见"
                  ],
                  [
                    "s'il vous plaît",
                    "请"
                  ]
                ]
              },
              {
                "id": "fr-basic-01-05",
                "type": "dictation",
                "question": "听写：一",
                "correctAnswer": "un",
                "difficulty": 2,
                "audioWord": "un"
              },
              {
                "id": "fr-basic-01-06",
                "type": "repeat",
                "question": "跟读：deux",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "deux"
              }
            ]
          },
          {
            "levelId": "fr-basic-02",
            "title": "家庭与人物",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "fr-basic-01"
            ],
            "questions": [
              {
                "id": "fr-basic-02-01",
                "type": "translate",
                "question": "父亲",
                "options": [
                  "père",
                  "frère",
                  "fils",
                  "grand-père"
                ],
                "correctAnswer": "père",
                "difficulty": 1
              },
              {
                "id": "fr-basic-02-02",
                "type": "translate",
                "question": "母亲",
                "options": [
                  "mère",
                  "sœur",
                  "grand-père",
                  "fille"
                ],
                "correctAnswer": "mère",
                "difficulty": 1
              },
              {
                "id": "fr-basic-02-03",
                "type": "translate",
                "question": "兄弟",
                "options": [
                  "frère",
                  "mère",
                  "grand-père",
                  "sœur"
                ],
                "correctAnswer": "frère",
                "difficulty": 1
              },
              {
                "id": "fr-basic-02-04",
                "type": "fill-blank",
                "question": "___ (姐妹)",
                "options": [
                  "sœur",
                  "grand-mère",
                  "père",
                  "mère"
                ],
                "correctAnswer": "sœur",
                "difficulty": 2
              },
              {
                "id": "fr-basic-02-05",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "père",
                    "父亲"
                  ],
                  [
                    "mère",
                    "母亲"
                  ],
                  [
                    "frère",
                    "兄弟"
                  ],
                  [
                    "sœur",
                    "姐妹"
                  ]
                ]
              },
              {
                "id": "fr-basic-02-06",
                "type": "dictation",
                "question": "听写：女儿",
                "correctAnswer": "fille",
                "difficulty": 2,
                "audioWord": "fille"
              }
            ]
          },
          {
            "levelId": "fr-basic-03",
            "title": "数字与颜色",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "fr-basic-02"
            ],
            "questions": [
              {
                "id": "fr-basic-03-01",
                "type": "translate",
                "question": "一",
                "options": [
                  "un",
                  "vert",
                  "deux",
                  "quatre"
                ],
                "correctAnswer": "un",
                "difficulty": 1
              },
              {
                "id": "fr-basic-03-02",
                "type": "translate",
                "question": "二",
                "options": [
                  "deux",
                  "cinq",
                  "quatre",
                  "un"
                ],
                "correctAnswer": "deux",
                "difficulty": 1
              },
              {
                "id": "fr-basic-03-03",
                "type": "fill-blank",
                "question": "___ (三)",
                "options": [
                  "trois",
                  "deux",
                  "rouge",
                  "quatre"
                ],
                "correctAnswer": "trois",
                "difficulty": 2
              },
              {
                "id": "fr-basic-03-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "un",
                    "一"
                  ],
                  [
                    "deux",
                    "二"
                  ],
                  [
                    "trois",
                    "三"
                  ],
                  [
                    "quatre",
                    "四"
                  ]
                ]
              },
              {
                "id": "fr-basic-03-05",
                "type": "dictation",
                "question": "听写：五",
                "correctAnswer": "cinq",
                "difficulty": 2,
                "audioWord": "cinq"
              },
              {
                "id": "fr-basic-03-06",
                "type": "repeat",
                "question": "跟读：红色",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "rouge"
              }
            ]
          }
        ]
      },
      {
        "id": "daily",
        "name": "日常对话",
        "color": "#60A5FA",
        "levels": [
          {
            "levelId": "fr-daily-02",
            "title": "购物与消费",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "fr-daily-02-01",
                "type": "translate",
                "question": "我叫…",
                "options": [
                  "je veux ceci",
                  "c'est délicieux",
                  "je m'appelle...",
                  "d'où venez-vous?"
                ],
                "correctAnswer": "je m'appelle...",
                "difficulty": 1
              },
              {
                "id": "fr-daily-02-02",
                "type": "fill-blank",
                "question": "___ (很高兴认识你)",
                "options": [
                  "je m'appelle...",
                  "d'où venez-vous?",
                  "je suis perdu",
                  "enchanté"
                ],
                "correctAnswer": "enchanté",
                "difficulty": 2
              },
              {
                "id": "fr-daily-02-03",
                "type": "translate",
                "question": "您好吗？",
                "options": [
                  "c'est trop cher",
                  "comment allez-vous?",
                  "je m'appelle...",
                  "c'est délicieux"
                ],
                "correctAnswer": "comment allez-vous?",
                "difficulty": 1
              },
              {
                "id": "fr-daily-02-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "je m'appelle...",
                    "我叫…"
                  ],
                  [
                    "enchanté",
                    "很高兴认识你"
                  ],
                  [
                    "comment allez-vous?",
                    "您好吗？"
                  ],
                  [
                    "d'où venez-vous?",
                    "您从哪里来？"
                  ]
                ]
              },
              {
                "id": "fr-daily-02-05",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "combien ça coûte?",
                "difficulty": 2,
                "audioWord": "combien ca coute"
              },
              {
                "id": "fr-daily-02-06",
                "type": "repeat",
                "question": "跟读：je veux ceci",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "je veux ceci"
              }
            ]
          },
          {
            "levelId": "fr-daily-03",
            "title": "购物与消费",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "fr-daily-02"
            ],
            "questions": [
              {
                "id": "fr-daily-03-01",
                "type": "translate",
                "question": "我叫…",
                "options": [
                  "d'où venez-vous?",
                  "l'addition, s'il vous plaît",
                  "pouvez-vous baisser le prix?",
                  "je m'appelle..."
                ],
                "correctAnswer": "je m'appelle...",
                "difficulty": 1
              },
              {
                "id": "fr-daily-03-02",
                "type": "fill-blank",
                "question": "___ (很高兴认识你)",
                "options": [
                  "je suis perdu",
                  "c'est trop cher",
                  "le menu, s'il vous plaît",
                  "enchanté"
                ],
                "correctAnswer": "enchanté",
                "difficulty": 2
              },
              {
                "id": "fr-daily-03-03",
                "type": "translate",
                "question": "您好吗？",
                "options": [
                  "l'addition, s'il vous plaît",
                  "comment allez-vous?",
                  "c'est délicieux",
                  "je m'appelle..."
                ],
                "correctAnswer": "comment allez-vous?",
                "difficulty": 1
              },
              {
                "id": "fr-daily-03-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "je m'appelle...",
                    "我叫…"
                  ],
                  [
                    "enchanté",
                    "很高兴认识你"
                  ],
                  [
                    "comment allez-vous?",
                    "您好吗？"
                  ],
                  [
                    "d'où venez-vous?",
                    "您从哪里来？"
                  ]
                ]
              },
              {
                "id": "fr-daily-03-05",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "combien ça coûte?",
                "difficulty": 2,
                "audioWord": "combien ca coute"
              },
              {
                "id": "fr-daily-03-06",
                "type": "repeat",
                "question": "跟读：je veux ceci",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "je veux ceci"
              }
            ]
          }
        ]
      },
      {
        "id": "scenario",
        "name": "场景实战",
        "color": "#EF4444",
        "levels": [
          {
            "levelId": "fr-scenario-01",
            "title": "交通出行",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "fr-scenario-01-01",
                "type": "translate",
                "question": "地铁站在哪里？",
                "options": [
                  "prendre un taxi",
                  "où est le métro?",
                  "bonjour",
                  "appeler la police"
                ],
                "correctAnswer": "où est le métro?",
                "difficulty": 1
              },
              {
                "id": "fr-scenario-01-02",
                "type": "fill-blank",
                "question": "___ (坐出租车)",
                "options": [
                  "excusez-moi",
                  "j'ai besoin d'un médecin",
                  "bonjour",
                  "prendre un taxi"
                ],
                "correctAnswer": "prendre un taxi",
                "difficulty": 2
              },
              {
                "id": "fr-scenario-01-03",
                "type": "translate",
                "question": "我需要医生",
                "options": [
                  "j'ai besoin d'un médecin",
                  "chambre individuelle",
                  "prendre un taxi",
                  "je ne me sens pas bien"
                ],
                "correctAnswer": "j'ai besoin d'un médecin",
                "difficulty": 1
              },
              {
                "id": "fr-scenario-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "où est le métro?",
                    "地铁站在哪里？"
                  ],
                  [
                    "prendre un taxi",
                    "坐出租车"
                  ],
                  [
                    "j'ai besoin d'un médecin",
                    "我需要医生"
                  ],
                  [
                    "je ne me sens pas bien",
                    "我不舒服"
                  ]
                ]
              },
              {
                "id": "fr-scenario-01-05",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "réserver un hôtel",
                "difficulty": 2,
                "audioWord": "reserver un hotel"
              },
              {
                "id": "fr-scenario-01-06",
                "type": "repeat",
                "question": "跟读：chambre individuelle",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "chambre individuelle"
              }
            ]
          },
          {
            "levelId": "fr-scenario-02",
            "title": "酒店与应急",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "fr-scenario-01"
            ],
            "questions": [
              {
                "id": "fr-scenario-02-01",
                "type": "translate",
                "question": "地铁站在哪里？",
                "options": [
                  "bonjour",
                  "appeler la police",
                  "bonne nuit",
                  "où est le métro?"
                ],
                "correctAnswer": "où est le métro?",
                "difficulty": 1
              },
              {
                "id": "fr-scenario-02-02",
                "type": "fill-blank",
                "question": "___ (坐出租车)",
                "options": [
                  "bonne nuit",
                  "prendre un taxi",
                  "excusez-moi",
                  "réserver un hôtel"
                ],
                "correctAnswer": "prendre un taxi",
                "difficulty": 2
              },
              {
                "id": "fr-scenario-02-03",
                "type": "translate",
                "question": "我需要医生",
                "options": [
                  "à l'aide!",
                  "j'ai besoin d'un médecin",
                  "appeler la police",
                  "bonjour"
                ],
                "correctAnswer": "j'ai besoin d'un médecin",
                "difficulty": 1
              },
              {
                "id": "fr-scenario-02-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "où est le métro?",
                    "地铁站在哪里？"
                  ],
                  [
                    "prendre un taxi",
                    "坐出租车"
                  ],
                  [
                    "j'ai besoin d'un médecin",
                    "我需要医生"
                  ],
                  [
                    "je ne me sens pas bien",
                    "我不舒服"
                  ]
                ]
              },
              {
                "id": "fr-scenario-02-05",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "réserver un hôtel",
                "difficulty": 2,
                "audioWord": "reserver un hotel"
              },
              {
                "id": "fr-scenario-02-06",
                "type": "repeat",
                "question": "跟读：chambre individuelle",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "chambre individuelle"
              }
            ]
          },
          {
            "levelId": "fr-scenario-03",
            "title": "就医买药",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "fr-scenario-02"
            ],
            "questions": [
              {
                "id": "fr-scenario-03-01",
                "type": "translate",
                "question": "地铁站在哪里？",
                "options": [
                  "excusez-moi",
                  "où est le métro?",
                  "à l'aide!",
                  "appeler la police"
                ],
                "correctAnswer": "où est le métro?",
                "difficulty": 1
              },
              {
                "id": "fr-scenario-03-02",
                "type": "fill-blank",
                "question": "___ (坐出租车)",
                "options": [
                  "excusez-moi",
                  "bonjour",
                  "j'ai besoin d'un médecin",
                  "prendre un taxi"
                ],
                "correctAnswer": "prendre un taxi",
                "difficulty": 2
              },
              {
                "id": "fr-scenario-03-03",
                "type": "translate",
                "question": "我需要医生",
                "options": [
                  "à l'aide!",
                  "j'ai besoin d'un médecin",
                  "prendre un taxi",
                  "appeler la police"
                ],
                "correctAnswer": "j'ai besoin d'un médecin",
                "difficulty": 1
              },
              {
                "id": "fr-scenario-03-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "où est le métro?",
                    "地铁站在哪里？"
                  ],
                  [
                    "prendre un taxi",
                    "坐出租车"
                  ],
                  [
                    "j'ai besoin d'un médecin",
                    "我需要医生"
                  ],
                  [
                    "je ne me sens pas bien",
                    "我不舒服"
                  ]
                ]
              },
              {
                "id": "fr-scenario-03-05",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "réserver un hôtel",
                "difficulty": 2,
                "audioWord": "reserver un hotel"
              },
              {
                "id": "fr-scenario-03-06",
                "type": "repeat",
                "question": "跟读：chambre individuelle",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "chambre individuelle"
              }
            ]
          }
        ]
      },
      {
        "id": "grammar",
        "name": "语法进阶",
        "color": "#F59E0B",
        "levels": [
          {
            "levelId": "fr-grammar-01",
            "title": "动词基础",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "fr-grammar-01-01",
                "type": "translate",
                "question": "去（原形）",
                "options": [
                  "être",
                  "je mange",
                  "manger",
                  "aller"
                ],
                "correctAnswer": "aller",
                "difficulty": 1
              },
              {
                "id": "fr-grammar-01-02",
                "type": "fill-blank",
                "question": "___ (我去)",
                "options": [
                  "je vais",
                  "je mange",
                  "aller",
                  "je suis/il est"
                ],
                "correctAnswer": "je vais",
                "difficulty": 2
              },
              {
                "id": "fr-grammar-01-03",
                "type": "translate",
                "question": "他/她去",
                "options": [
                  "il va",
                  "je vais",
                  "aller",
                  "être"
                ],
                "correctAnswer": "il va",
                "difficulty": 1
              },
              {
                "id": "fr-grammar-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "aller",
                    "去（原形）"
                  ],
                  [
                    "je vais",
                    "我去"
                  ],
                  [
                    "il va",
                    "他/她去"
                  ],
                  [
                    "être",
                    "是（原形）"
                  ]
                ]
              },
              {
                "id": "fr-grammar-01-05",
                "type": "dictation",
                "question": "听写：是",
                "correctAnswer": "je suis/il est",
                "difficulty": 2,
                "audioWord": "je suis il est"
              },
              {
                "id": "fr-grammar-01-06",
                "type": "repeat",
                "question": "跟读：manger",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "manger"
              }
            ]
          }
        ]
      },
      {
        "id": "culture",
        "name": "文化拓展",
        "color": "#8B5CF6",
        "levels": [
          {
            "levelId": "fr-culture-01",
            "title": "节日与传统",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "fr-culture-01-01",
                "type": "translate",
                "question": "圣诞节",
                "options": [
                  "croissant",
                  "bastille",
                  "noël",
                  "baguette"
                ],
                "correctAnswer": "noël",
                "difficulty": 1
              },
              {
                "id": "fr-culture-01-02",
                "type": "fill-blank",
                "question": "___ (巴士底日)",
                "options": [
                  "croissant",
                  "baguette",
                  "noël",
                  "bastille"
                ],
                "correctAnswer": "bastille",
                "difficulty": 2
              },
              {
                "id": "fr-culture-01-03",
                "type": "translate",
                "question": "牛角包",
                "options": [
                  "croissant",
                  "bastille",
                  "noël",
                  "baguette"
                ],
                "correctAnswer": "croissant",
                "difficulty": 1
              },
              {
                "id": "fr-culture-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "noël",
                    "圣诞节"
                  ],
                  [
                    "bastille",
                    "巴士底日"
                  ],
                  [
                    "croissant",
                    "牛角包"
                  ],
                  [
                    "baguette",
                    "法棍"
                  ]
                ]
              },
              {
                "id": "fr-culture-01-05",
                "type": "dictation",
                "question": "听写：圣诞节",
                "correctAnswer": "noël",
                "difficulty": 2,
                "audioWord": "noel"
              },
              {
                "id": "fr-culture-01-06",
                "type": "repeat",
                "question": "跟读：bastille",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "bastille"
              }
            ]
          }
        ]
      }
    ]
  },
  "hi": {
    "themes": [
      {
        "id": "basic",
        "name": "基础词汇",
        "color": "#1D4ED8",
        "levels": [
          {
            "levelId": "hi-basic-01",
            "title": "问候与礼貌",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [],
            "questions": [
              {
                "id": "hi-basic-01-01",
                "type": "translate",
                "question": "是",
                "options": [
                  "लाल",
                  "भाई",
                  "पीला",
                  "हाँ"
                ],
                "correctAnswer": "हाँ",
                "difficulty": 1
              },
              {
                "id": "hi-basic-01-02",
                "type": "fill-blank",
                "question": "___ (不是)",
                "options": [
                  "नहीं",
                  "सफ़ेद",
                  "नीला",
                  "लाल"
                ],
                "correctAnswer": "नहीं",
                "difficulty": 2
              },
              {
                "id": "hi-basic-01-03",
                "type": "translate",
                "question": "再见",
                "options": [
                  "अलविदा",
                  "हाँ",
                  "नमस्ते",
                  "दो"
                ],
                "correctAnswer": "अलविदा",
                "difficulty": 1
              },
              {
                "id": "hi-basic-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "हाँ",
                    "是"
                  ],
                  [
                    "नहीं",
                    "不是"
                  ],
                  [
                    "अलविदा",
                    "再见"
                  ],
                  [
                    "कृपया",
                    "请"
                  ]
                ]
              },
              {
                "id": "hi-basic-01-05",
                "type": "dictation",
                "question": "听写：一",
                "correctAnswer": "एक",
                "difficulty": 2,
                "audioWord": "ek"
              },
              {
                "id": "hi-basic-01-06",
                "type": "repeat",
                "question": "跟读：दो",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "दो"
              }
            ]
          },
          {
            "levelId": "hi-basic-02",
            "title": "家庭与人物",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "hi-basic-01"
            ],
            "questions": [
              {
                "id": "hi-basic-02-01",
                "type": "translate",
                "question": "父亲",
                "options": [
                  "पिता",
                  "भाई",
                  "दादा",
                  "बेटा"
                ],
                "correctAnswer": "पिता",
                "difficulty": 1
              },
              {
                "id": "hi-basic-02-02",
                "type": "translate",
                "question": "母亲",
                "options": [
                  "माँ",
                  "बेटा",
                  "दादा",
                  "दादी"
                ],
                "correctAnswer": "माँ",
                "difficulty": 1
              },
              {
                "id": "hi-basic-02-03",
                "type": "translate",
                "question": "兄弟",
                "options": [
                  "भाई",
                  "माँ",
                  "बहन",
                  "दादी"
                ],
                "correctAnswer": "भाई",
                "difficulty": 1
              },
              {
                "id": "hi-basic-02-04",
                "type": "fill-blank",
                "question": "___ (姐妹)",
                "options": [
                  "बहन",
                  "माँ",
                  "दादा",
                  "बेटी"
                ],
                "correctAnswer": "बहन",
                "difficulty": 2
              },
              {
                "id": "hi-basic-02-05",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "पिता",
                    "父亲"
                  ],
                  [
                    "माँ",
                    "母亲"
                  ],
                  [
                    "भाई",
                    "兄弟"
                  ],
                  [
                    "बहन",
                    "姐妹"
                  ]
                ]
              },
              {
                "id": "hi-basic-02-06",
                "type": "dictation",
                "question": "听写：女儿",
                "correctAnswer": "बेटी",
                "difficulty": 2,
                "audioWord": "beti"
              }
            ]
          },
          {
            "levelId": "hi-basic-03",
            "title": "数字与颜色",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "hi-basic-02"
            ],
            "questions": [
              {
                "id": "hi-basic-03-01",
                "type": "translate",
                "question": "一",
                "options": [
                  "एक",
                  "लाल",
                  "चार",
                  "हरा"
                ],
                "correctAnswer": "एक",
                "difficulty": 1
              },
              {
                "id": "hi-basic-03-02",
                "type": "translate",
                "question": "二",
                "options": [
                  "दो",
                  "पाँच",
                  "लाल",
                  "हरा"
                ],
                "correctAnswer": "दो",
                "difficulty": 1
              },
              {
                "id": "hi-basic-03-03",
                "type": "fill-blank",
                "question": "___ (三)",
                "options": [
                  "तीन",
                  "चार",
                  "दो",
                  "नीला"
                ],
                "correctAnswer": "तीन",
                "difficulty": 2
              },
              {
                "id": "hi-basic-03-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "एक",
                    "一"
                  ],
                  [
                    "दो",
                    "二"
                  ],
                  [
                    "तीन",
                    "三"
                  ],
                  [
                    "चार",
                    "四"
                  ]
                ]
              },
              {
                "id": "hi-basic-03-05",
                "type": "dictation",
                "question": "听写：五",
                "correctAnswer": "पाँच",
                "difficulty": 2,
                "audioWord": "paanch"
              },
              {
                "id": "hi-basic-03-06",
                "type": "repeat",
                "question": "跟读：红色",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "लाल"
              }
            ]
          }
        ]
      },
      {
        "id": "daily",
        "name": "日常对话",
        "color": "#60A5FA",
        "levels": [
          {
            "levelId": "hi-daily-02",
            "title": "购物与消费",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "hi-daily-02-01",
                "type": "translate",
                "question": "我叫…",
                "options": [
                  "मेरा नाम...",
                  "बिल दीजिए",
                  "मुझे यह चाहिए",
                  "आप कैसे हैं?"
                ],
                "correctAnswer": "मेरा नाम...",
                "difficulty": 1
              },
              {
                "id": "hi-daily-02-02",
                "type": "fill-blank",
                "question": "___ (很高兴认识你)",
                "options": [
                  "यह कितने का है?",
                  "बहुत स्वादिष्ट",
                  "आपसे मिलकर खुशी हुई",
                  "मुझे यह चाहिए"
                ],
                "correctAnswer": "आपसे मिलकर खुशी हुई",
                "difficulty": 2
              },
              {
                "id": "hi-daily-02-03",
                "type": "translate",
                "question": "您好吗？",
                "options": [
                  "आप कैसे हैं?",
                  "मेन्यू दीजिए",
                  "आपसे मिलकर खुशी हुई",
                  "आप कहाँ से हैं?"
                ],
                "correctAnswer": "आप कैसे हैं?",
                "difficulty": 1
              },
              {
                "id": "hi-daily-02-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "मेरा नाम...",
                    "我叫…"
                  ],
                  [
                    "आपसे मिलकर खुशी हुई",
                    "很高兴认识你"
                  ],
                  [
                    "आप कैसे हैं?",
                    "您好吗？"
                  ],
                  [
                    "आप कहाँ से हैं?",
                    "您从哪里来？"
                  ]
                ]
              },
              {
                "id": "hi-daily-02-05",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "यह कितने का है?",
                "difficulty": 2,
                "audioWord": "yeh kitne ka hai"
              },
              {
                "id": "hi-daily-02-06",
                "type": "repeat",
                "question": "跟读：मुझे यह चाहिए",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "मुझे यह चाहिए"
              }
            ]
          },
          {
            "levelId": "hi-daily-03",
            "title": "购物与消费",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "hi-daily-02"
            ],
            "questions": [
              {
                "id": "hi-daily-03-01",
                "type": "translate",
                "question": "我叫…",
                "options": [
                  "बहुत स्वादिष्ट",
                  "आप कैसे हैं?",
                  "यह बहुत महँगा है",
                  "मेरा नाम..."
                ],
                "correctAnswer": "मेरा नाम...",
                "difficulty": 1
              },
              {
                "id": "hi-daily-03-02",
                "type": "fill-blank",
                "question": "___ (很高兴认识你)",
                "options": [
                  "मुझे यह चाहिए",
                  "आपसे मिलकर खुशी हुई",
                  "बहुत स्वादिष्ट",
                  "आप कहाँ से हैं?"
                ],
                "correctAnswer": "आपसे मिलकर खुशी हुई",
                "difficulty": 2
              },
              {
                "id": "hi-daily-03-03",
                "type": "translate",
                "question": "您好吗？",
                "options": [
                  "यह कितने का है?",
                  "आप कैसे हैं?",
                  "आप कहाँ से हैं?",
                  "आपसे मिलकर खुशी हुई"
                ],
                "correctAnswer": "आप कैसे हैं?",
                "difficulty": 1
              },
              {
                "id": "hi-daily-03-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "मेरा नाम...",
                    "我叫…"
                  ],
                  [
                    "आपसे मिलकर खुशी हुई",
                    "很高兴认识你"
                  ],
                  [
                    "आप कैसे हैं?",
                    "您好吗？"
                  ],
                  [
                    "आप कहाँ से हैं?",
                    "您从哪里来？"
                  ]
                ]
              },
              {
                "id": "hi-daily-03-05",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "यह कितने का है?",
                "difficulty": 2,
                "audioWord": "yeh kitne ka hai"
              },
              {
                "id": "hi-daily-03-06",
                "type": "repeat",
                "question": "跟读：मुझे यह चाहिए",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "मुझे यह चाहिए"
              }
            ]
          }
        ]
      },
      {
        "id": "scenario",
        "name": "场景实战",
        "color": "#EF4444",
        "levels": [
          {
            "levelId": "hi-scenario-01",
            "title": "交通出行",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "hi-scenario-01-01",
                "type": "translate",
                "question": "地铁站在哪里？",
                "options": [
                  "बचाओ!",
                  "मेट्रो कहाँ है?",
                  "शुभ रात्रि",
                  "माफ़ कीजिए"
                ],
                "correctAnswer": "मेट्रो कहाँ है?",
                "difficulty": 1
              },
              {
                "id": "hi-scenario-01-02",
                "type": "fill-blank",
                "question": "___ (坐出租车)",
                "options": [
                  "टैक्सी लें",
                  "माफ़ कीजिए",
                  "कल मिलेंगे",
                  "मुझे डॉक्टर चाहिए"
                ],
                "correctAnswer": "टैक्सी लें",
                "difficulty": 2
              },
              {
                "id": "hi-scenario-01-03",
                "type": "translate",
                "question": "我需要医生",
                "options": [
                  "पुलिस को बुलाओ",
                  "शुभ रात्रि",
                  "कल मिलेंगे",
                  "मुझे डॉक्टर चाहिए"
                ],
                "correctAnswer": "मुझे डॉक्टर चाहिए",
                "difficulty": 1
              },
              {
                "id": "hi-scenario-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "मेट्रो कहाँ है?",
                    "地铁站在哪里？"
                  ],
                  [
                    "टैक्सी लें",
                    "坐出租车"
                  ],
                  [
                    "मुझे डॉक्टर चाहिए",
                    "我需要医生"
                  ],
                  [
                    "मुझे अच्छा नहीं लग रहा",
                    "我不舒服"
                  ]
                ]
              },
              {
                "id": "hi-scenario-01-05",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "होटल बुक करना",
                "difficulty": 2,
                "audioWord": "hotel book karna"
              },
              {
                "id": "hi-scenario-01-06",
                "type": "repeat",
                "question": "跟读：एकल कमरा",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "एकल कमरा"
              }
            ]
          },
          {
            "levelId": "hi-scenario-02",
            "title": "酒店与应急",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "hi-scenario-01"
            ],
            "questions": [
              {
                "id": "hi-scenario-02-01",
                "type": "translate",
                "question": "地铁站在哪里？",
                "options": [
                  "मेट्रो कहाँ है?",
                  "माफ़ कीजिए",
                  "मुझे डॉक्टर चाहिए",
                  "शुभ प्रभात"
                ],
                "correctAnswer": "मेट्रो कहाँ है?",
                "difficulty": 1
              },
              {
                "id": "hi-scenario-02-02",
                "type": "fill-blank",
                "question": "___ (坐出租车)",
                "options": [
                  "शुभ रात्रि",
                  "टैक्सी लें",
                  "माफ़ कीजिए",
                  "मुझे अच्छा नहीं लग रहा"
                ],
                "correctAnswer": "टैक्सी लें",
                "difficulty": 2
              },
              {
                "id": "hi-scenario-02-03",
                "type": "translate",
                "question": "我需要医生",
                "options": [
                  "टैक्सी लें",
                  "मुझे अच्छा नहीं लग रहा",
                  "मुझे डॉक्टर चाहिए",
                  "शुभ रात्रि"
                ],
                "correctAnswer": "मुझे डॉक्टर चाहिए",
                "difficulty": 1
              },
              {
                "id": "hi-scenario-02-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "मेट्रो कहाँ है?",
                    "地铁站在哪里？"
                  ],
                  [
                    "टैक्सी लें",
                    "坐出租车"
                  ],
                  [
                    "मुझे डॉक्टर चाहिए",
                    "我需要医生"
                  ],
                  [
                    "मुझे अच्छा नहीं लग रहा",
                    "我不舒服"
                  ]
                ]
              },
              {
                "id": "hi-scenario-02-05",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "होटल बुक करना",
                "difficulty": 2,
                "audioWord": "hotel book karna"
              },
              {
                "id": "hi-scenario-02-06",
                "type": "repeat",
                "question": "跟读：एकल कमरा",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "एकल कमरा"
              }
            ]
          },
          {
            "levelId": "hi-scenario-03",
            "title": "就医买药",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "hi-scenario-02"
            ],
            "questions": [
              {
                "id": "hi-scenario-03-01",
                "type": "translate",
                "question": "地铁站在哪里？",
                "options": [
                  "माफ़ कीजिए",
                  "बचाओ!",
                  "मेट्रो कहाँ है?",
                  "होटल बुक करना"
                ],
                "correctAnswer": "मेट्रो कहाँ है?",
                "difficulty": 1
              },
              {
                "id": "hi-scenario-03-02",
                "type": "fill-blank",
                "question": "___ (坐出租车)",
                "options": [
                  "टैक्सी लें",
                  "एकल कमरा",
                  "शुभ रात्रि",
                  "होटल बुक करना"
                ],
                "correctAnswer": "टैक्सी लें",
                "difficulty": 2
              },
              {
                "id": "hi-scenario-03-03",
                "type": "translate",
                "question": "我需要医生",
                "options": [
                  "टैक्सी लें",
                  "मुझे डॉक्टर चाहिए",
                  "शुभ रात्रि",
                  "कल मिलेंगे"
                ],
                "correctAnswer": "मुझे डॉक्टर चाहिए",
                "difficulty": 1
              },
              {
                "id": "hi-scenario-03-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "मेट्रो कहाँ है?",
                    "地铁站在哪里？"
                  ],
                  [
                    "टैक्सी लें",
                    "坐出租车"
                  ],
                  [
                    "मुझे डॉक्टर चाहिए",
                    "我需要医生"
                  ],
                  [
                    "मुझे अच्छा नहीं लग रहा",
                    "我不舒服"
                  ]
                ]
              },
              {
                "id": "hi-scenario-03-05",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "होटल बुक करना",
                "difficulty": 2,
                "audioWord": "hotel book karna"
              },
              {
                "id": "hi-scenario-03-06",
                "type": "repeat",
                "question": "跟读：एकल कमरा",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "एकल कमरा"
              }
            ]
          }
        ]
      },
      {
        "id": "grammar",
        "name": "语法进阶",
        "color": "#F59E0B",
        "levels": [
          {
            "levelId": "hi-grammar-01",
            "title": "动词基础",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "hi-grammar-01-01",
                "type": "translate",
                "question": "去（原形）",
                "options": [
                  "जाता है",
                  "खाना",
                  "होना",
                  "जाना"
                ],
                "correctAnswer": "जाना",
                "difficulty": 1
              },
              {
                "id": "hi-grammar-01-02",
                "type": "fill-blank",
                "question": "___ (我去)",
                "options": [
                  "जाता हूँ",
                  "होना",
                  "खाना",
                  "जाना"
                ],
                "correctAnswer": "जाता हूँ",
                "difficulty": 2
              },
              {
                "id": "hi-grammar-01-03",
                "type": "translate",
                "question": "他去",
                "options": [
                  "जाता है",
                  "खाना",
                  "हूँ/है",
                  "जाना"
                ],
                "correctAnswer": "जाता है",
                "difficulty": 1
              },
              {
                "id": "hi-grammar-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "जाना",
                    "去（原形）"
                  ],
                  [
                    "जाता हूँ",
                    "我去"
                  ],
                  [
                    "जाता है",
                    "他去"
                  ],
                  [
                    "होना",
                    "是（原形）"
                  ]
                ]
              },
              {
                "id": "hi-grammar-01-05",
                "type": "dictation",
                "question": "听写：是",
                "correctAnswer": "हूँ/है",
                "difficulty": 2,
                "audioWord": "hoon hai"
              },
              {
                "id": "hi-grammar-01-06",
                "type": "repeat",
                "question": "跟读：खाना",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "खाना"
              }
            ]
          }
        ]
      },
      {
        "id": "culture",
        "name": "文化拓展",
        "color": "#8B5CF6",
        "levels": [
          {
            "levelId": "hi-culture-01",
            "title": "节日与传统",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "hi-culture-01-01",
                "type": "translate",
                "question": "排灯节",
                "options": [
                  "चाय",
                  "दीवाली",
                  "समोसा",
                  "होली"
                ],
                "correctAnswer": "दीवाली",
                "difficulty": 1
              },
              {
                "id": "hi-culture-01-02",
                "type": "fill-blank",
                "question": "___ (洒红节)",
                "options": [
                  "होली",
                  "दीवाली",
                  "चाय",
                  "समोसा"
                ],
                "correctAnswer": "होली",
                "difficulty": 2
              },
              {
                "id": "hi-culture-01-03",
                "type": "translate",
                "question": "咖喱角",
                "options": [
                  "समोसा",
                  "दीवाली",
                  "चाय",
                  "होली"
                ],
                "correctAnswer": "समोसा",
                "difficulty": 1
              },
              {
                "id": "hi-culture-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "दीवाली",
                    "排灯节"
                  ],
                  [
                    "होली",
                    "洒红节"
                  ],
                  [
                    "समोसा",
                    "咖喱角"
                  ],
                  [
                    "चाय",
                    "茶"
                  ]
                ]
              },
              {
                "id": "hi-culture-01-05",
                "type": "dictation",
                "question": "听写：排灯节",
                "correctAnswer": "दीवाली",
                "difficulty": 2,
                "audioWord": "diwali"
              },
              {
                "id": "hi-culture-01-06",
                "type": "repeat",
                "question": "跟读：होली",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "होली"
              }
            ]
          }
        ]
      }
    ]
  },
  "it": {
    "themes": [
      {
        "id": "basic",
        "name": "基础词汇",
        "color": "#1D4ED8",
        "levels": [
          {
            "levelId": "it-basic-01",
            "title": "问候与礼貌",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [],
            "questions": [
              {
                "id": "it-basic-01-01",
                "type": "translate",
                "question": "你好",
                "options": [
                  "Ciao",
                  "Sì",
                  "Scusa",
                  "Grazie"
                ],
                "correctAnswer": "Ciao",
                "difficulty": 1
              },
              {
                "id": "it-basic-01-02",
                "type": "translate",
                "question": "谢谢",
                "options": [
                  "Grazie",
                  "Buongiorno",
                  "Ciao",
                  "No"
                ],
                "correctAnswer": "Grazie",
                "difficulty": 1
              },
              {
                "id": "it-basic-01-03",
                "type": "translate",
                "question": "再见",
                "options": [
                  "Arrivederci",
                  "Grazie",
                  "No",
                  "Buongiorno"
                ],
                "correctAnswer": "Arrivederci",
                "difficulty": 1
              },
              {
                "id": "it-basic-01-04",
                "type": "fill-blank",
                "question": "___ (请)",
                "options": [
                  "Per favore",
                  "Buongiorno",
                  "No",
                  "Scusa"
                ],
                "correctAnswer": "Per favore",
                "difficulty": 2
              },
              {
                "id": "it-basic-01-05",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "Ciao",
                    "你好"
                  ],
                  [
                    "Grazie",
                    "谢谢"
                  ],
                  [
                    "Arrivederci",
                    "再见"
                  ],
                  [
                    "Per favore",
                    "请"
                  ]
                ]
              },
              {
                "id": "it-basic-01-06",
                "type": "dictation",
                "question": "听写：是",
                "correctAnswer": "Sì",
                "difficulty": 2,
                "audioWord": "Sì"
              }
            ]
          },
          {
            "levelId": "it-basic-02",
            "title": "家庭与人物",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "it-basic-01"
            ],
            "questions": [
              {
                "id": "it-basic-02-01",
                "type": "translate",
                "question": "父亲",
                "options": [
                  "padre",
                  "figlia",
                  "madre",
                  "figlio"
                ],
                "correctAnswer": "padre",
                "difficulty": 1
              },
              {
                "id": "it-basic-02-02",
                "type": "translate",
                "question": "母亲",
                "options": [
                  "madre",
                  "figlio",
                  "figlia",
                  "nonna"
                ],
                "correctAnswer": "madre",
                "difficulty": 1
              },
              {
                "id": "it-basic-02-03",
                "type": "translate",
                "question": "兄弟",
                "options": [
                  "fratello",
                  "figlia",
                  "sorella",
                  "nonna"
                ],
                "correctAnswer": "fratello",
                "difficulty": 1
              },
              {
                "id": "it-basic-02-04",
                "type": "fill-blank",
                "question": "___ (姐妹)",
                "options": [
                  "sorella",
                  "nonna",
                  "padre",
                  "nonno"
                ],
                "correctAnswer": "sorella",
                "difficulty": 2
              },
              {
                "id": "it-basic-02-05",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "padre",
                    "父亲"
                  ],
                  [
                    "madre",
                    "母亲"
                  ],
                  [
                    "fratello",
                    "兄弟"
                  ],
                  [
                    "sorella",
                    "姐妹"
                  ]
                ]
              },
              {
                "id": "it-basic-02-06",
                "type": "dictation",
                "question": "听写：女儿",
                "correctAnswer": "figlia",
                "difficulty": 2,
                "audioWord": "figlia"
              }
            ]
          },
          {
            "levelId": "it-basic-03",
            "title": "数字与颜色",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "it-basic-02"
            ],
            "questions": [
              {
                "id": "it-basic-03-01",
                "type": "translate",
                "question": "是",
                "options": [
                  "quattro",
                  "sorella",
                  "cinque",
                  "sì"
                ],
                "correctAnswer": "sì",
                "difficulty": 1
              },
              {
                "id": "it-basic-03-02",
                "type": "fill-blank",
                "question": "___ (不是)",
                "options": [
                  "per favore",
                  "acqua",
                  "fratello",
                  "no"
                ],
                "correctAnswer": "no",
                "difficulty": 2
              },
              {
                "id": "it-basic-03-03",
                "type": "translate",
                "question": "再见",
                "options": [
                  "arrivederci",
                  "giallo",
                  "tre",
                  "madre"
                ],
                "correctAnswer": "arrivederci",
                "difficulty": 1
              },
              {
                "id": "it-basic-03-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "sì",
                    "是"
                  ],
                  [
                    "no",
                    "不是"
                  ],
                  [
                    "arrivederci",
                    "再见"
                  ],
                  [
                    "per favore",
                    "请"
                  ]
                ]
              },
              {
                "id": "it-basic-03-05",
                "type": "dictation",
                "question": "听写：一",
                "correctAnswer": "uno",
                "difficulty": 2,
                "audioWord": "uno"
              },
              {
                "id": "it-basic-03-06",
                "type": "repeat",
                "question": "跟读：due",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "due"
              }
            ]
          }
        ]
      },
      {
        "id": "daily",
        "name": "日常对话",
        "color": "#60A5FA",
        "levels": [
          {
            "levelId": "it-daily-02",
            "title": "购物与消费",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "it-daily-02-01",
                "type": "translate",
                "question": "我叫…",
                "options": [
                  "quanto costa?",
                  "vorrei questo",
                  "può fare uno sconto?",
                  "mi chiamo..."
                ],
                "correctAnswer": "mi chiamo...",
                "difficulty": 1
              },
              {
                "id": "it-daily-02-02",
                "type": "fill-blank",
                "question": "___ (很高兴认识你)",
                "options": [
                  "come stai?",
                  "il menu, per favore",
                  "piacere",
                  "vorrei questo"
                ],
                "correctAnswer": "piacere",
                "difficulty": 2
              },
              {
                "id": "it-daily-02-03",
                "type": "translate",
                "question": "你好吗？",
                "options": [
                  "è delizioso",
                  "può fare uno sconto?",
                  "mi chiamo...",
                  "come stai?"
                ],
                "correctAnswer": "come stai?",
                "difficulty": 1
              },
              {
                "id": "it-daily-02-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "mi chiamo...",
                    "我叫…"
                  ],
                  [
                    "piacere",
                    "很高兴认识你"
                  ],
                  [
                    "come stai?",
                    "你好吗？"
                  ],
                  [
                    "di dove sei?",
                    "你从哪里来？"
                  ]
                ]
              },
              {
                "id": "it-daily-02-05",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "quanto costa?",
                "difficulty": 2,
                "audioWord": "quanto costa"
              },
              {
                "id": "it-daily-02-06",
                "type": "repeat",
                "question": "跟读：vorrei questo",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "vorrei questo"
              }
            ]
          },
          {
            "levelId": "it-daily-03",
            "title": "购物与消费",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "it-daily-02"
            ],
            "questions": [
              {
                "id": "it-daily-03-01",
                "type": "translate",
                "question": "我叫…",
                "options": [
                  "vorrei questo",
                  "mi chiamo...",
                  "quanto costa?",
                  "di dove sei?"
                ],
                "correctAnswer": "mi chiamo...",
                "difficulty": 1
              },
              {
                "id": "it-daily-03-02",
                "type": "fill-blank",
                "question": "___ (很高兴认识你)",
                "options": [
                  "il menu, per favore",
                  "può fare uno sconto?",
                  "piacere",
                  "mi chiamo..."
                ],
                "correctAnswer": "piacere",
                "difficulty": 2
              },
              {
                "id": "it-daily-03-03",
                "type": "translate",
                "question": "你好吗？",
                "options": [
                  "mi sono perso",
                  "il conto, per favore",
                  "come stai?",
                  "quanto costa?"
                ],
                "correctAnswer": "come stai?",
                "difficulty": 1
              },
              {
                "id": "it-daily-03-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "mi chiamo...",
                    "我叫…"
                  ],
                  [
                    "piacere",
                    "很高兴认识你"
                  ],
                  [
                    "come stai?",
                    "你好吗？"
                  ],
                  [
                    "di dove sei?",
                    "你从哪里来？"
                  ]
                ]
              },
              {
                "id": "it-daily-03-05",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "quanto costa?",
                "difficulty": 2,
                "audioWord": "quanto costa"
              },
              {
                "id": "it-daily-03-06",
                "type": "repeat",
                "question": "跟读：vorrei questo",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "vorrei questo"
              }
            ]
          }
        ]
      },
      {
        "id": "scenario",
        "name": "场景实战",
        "color": "#EF4444",
        "levels": [
          {
            "levelId": "it-scenario-01",
            "title": "交通出行",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "it-scenario-01-01",
                "type": "translate",
                "question": "地铁站在哪里？",
                "options": [
                  "chiamare la polizia",
                  "prendere un taxi",
                  "dov'è la metropolitana?",
                  "scusi"
                ],
                "correctAnswer": "dov'è la metropolitana?",
                "difficulty": 1
              },
              {
                "id": "it-scenario-01-02",
                "type": "fill-blank",
                "question": "___ (坐出租车)",
                "options": [
                  "chiamare la polizia",
                  "prendere un taxi",
                  "a domani",
                  "scusi"
                ],
                "correctAnswer": "prendere un taxi",
                "difficulty": 2
              },
              {
                "id": "it-scenario-01-03",
                "type": "translate",
                "question": "我需要医生",
                "options": [
                  "ho bisogno di un dottore",
                  "aiuto!",
                  "dov'è la metropolitana?",
                  "chiamare la polizia"
                ],
                "correctAnswer": "ho bisogno di un dottore",
                "difficulty": 1
              },
              {
                "id": "it-scenario-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "dov'è la metropolitana?",
                    "地铁站在哪里？"
                  ],
                  [
                    "prendere un taxi",
                    "坐出租车"
                  ],
                  [
                    "ho bisogno di un dottore",
                    "我需要医生"
                  ],
                  [
                    "non mi sento bene",
                    "我不舒服"
                  ]
                ]
              },
              {
                "id": "it-scenario-01-05",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "prenotare un albergo",
                "difficulty": 2,
                "audioWord": "prenotare un albergo"
              },
              {
                "id": "it-scenario-01-06",
                "type": "repeat",
                "question": "跟读：camera singola",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "camera singola"
              }
            ]
          },
          {
            "levelId": "it-scenario-02",
            "title": "酒店与应急",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "it-scenario-01"
            ],
            "questions": [
              {
                "id": "it-scenario-02-01",
                "type": "translate",
                "question": "地铁站在哪里？",
                "options": [
                  "ho bisogno di un dottore",
                  "aiuto!",
                  "chiamare la polizia",
                  "dov'è la metropolitana?"
                ],
                "correctAnswer": "dov'è la metropolitana?",
                "difficulty": 1
              },
              {
                "id": "it-scenario-02-02",
                "type": "fill-blank",
                "question": "___ (坐出租车)",
                "options": [
                  "buonanotte",
                  "chiamare la polizia",
                  "a domani",
                  "prendere un taxi"
                ],
                "correctAnswer": "prendere un taxi",
                "difficulty": 2
              },
              {
                "id": "it-scenario-02-03",
                "type": "translate",
                "question": "我需要医生",
                "options": [
                  "scusi",
                  "prenotare un albergo",
                  "ho bisogno di un dottore",
                  "aiuto!"
                ],
                "correctAnswer": "ho bisogno di un dottore",
                "difficulty": 1
              },
              {
                "id": "it-scenario-02-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "dov'è la metropolitana?",
                    "地铁站在哪里？"
                  ],
                  [
                    "prendere un taxi",
                    "坐出租车"
                  ],
                  [
                    "ho bisogno di un dottore",
                    "我需要医生"
                  ],
                  [
                    "non mi sento bene",
                    "我不舒服"
                  ]
                ]
              },
              {
                "id": "it-scenario-02-05",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "prenotare un albergo",
                "difficulty": 2,
                "audioWord": "prenotare un albergo"
              },
              {
                "id": "it-scenario-02-06",
                "type": "repeat",
                "question": "跟读：camera singola",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "camera singola"
              }
            ]
          },
          {
            "levelId": "it-scenario-03",
            "title": "就医买药",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "it-scenario-02"
            ],
            "questions": [
              {
                "id": "it-scenario-03-01",
                "type": "translate",
                "question": "地铁站在哪里？",
                "options": [
                  "prenotare un albergo",
                  "dov'è la metropolitana?",
                  "buonanotte",
                  "scusi"
                ],
                "correctAnswer": "dov'è la metropolitana?",
                "difficulty": 1
              },
              {
                "id": "it-scenario-03-02",
                "type": "fill-blank",
                "question": "___ (坐出租车)",
                "options": [
                  "prenotare un albergo",
                  "non mi sento bene",
                  "prendere un taxi",
                  "ho bisogno di un dottore"
                ],
                "correctAnswer": "prendere un taxi",
                "difficulty": 2
              },
              {
                "id": "it-scenario-03-03",
                "type": "translate",
                "question": "我需要医生",
                "options": [
                  "ho bisogno di un dottore",
                  "prendere un taxi",
                  "non mi sento bene",
                  "a domani"
                ],
                "correctAnswer": "ho bisogno di un dottore",
                "difficulty": 1
              },
              {
                "id": "it-scenario-03-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "dov'è la metropolitana?",
                    "地铁站在哪里？"
                  ],
                  [
                    "prendere un taxi",
                    "坐出租车"
                  ],
                  [
                    "ho bisogno di un dottore",
                    "我需要医生"
                  ],
                  [
                    "non mi sento bene",
                    "我不舒服"
                  ]
                ]
              },
              {
                "id": "it-scenario-03-05",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "prenotare un albergo",
                "difficulty": 2,
                "audioWord": "prenotare un albergo"
              },
              {
                "id": "it-scenario-03-06",
                "type": "repeat",
                "question": "跟读：camera singola",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "camera singola"
              }
            ]
          }
        ]
      },
      {
        "id": "grammar",
        "name": "语法进阶",
        "color": "#F59E0B",
        "levels": [
          {
            "levelId": "it-grammar-01",
            "title": "动词基础",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "it-grammar-01-01",
                "type": "translate",
                "question": "去（原形）",
                "options": [
                  "andare",
                  "sono/è",
                  "mangio",
                  "mangiare"
                ],
                "correctAnswer": "andare",
                "difficulty": 1
              },
              {
                "id": "it-grammar-01-02",
                "type": "fill-blank",
                "question": "___ (我去)",
                "options": [
                  "vado",
                  "sono/è",
                  "va",
                  "andare"
                ],
                "correctAnswer": "vado",
                "difficulty": 2
              },
              {
                "id": "it-grammar-01-03",
                "type": "translate",
                "question": "他/她去",
                "options": [
                  "essere",
                  "va",
                  "andare",
                  "mangiare"
                ],
                "correctAnswer": "va",
                "difficulty": 1
              },
              {
                "id": "it-grammar-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "andare",
                    "去（原形）"
                  ],
                  [
                    "vado",
                    "我去"
                  ],
                  [
                    "va",
                    "他/她去"
                  ],
                  [
                    "essere",
                    "是（原形）"
                  ]
                ]
              },
              {
                "id": "it-grammar-01-05",
                "type": "dictation",
                "question": "听写：是",
                "correctAnswer": "sono/è",
                "difficulty": 2,
                "audioWord": "sono e"
              },
              {
                "id": "it-grammar-01-06",
                "type": "repeat",
                "question": "跟读：mangiare",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "mangiare"
              }
            ]
          }
        ]
      },
      {
        "id": "culture",
        "name": "文化拓展",
        "color": "#8B5CF6",
        "levels": [
          {
            "levelId": "it-culture-01",
            "title": "节日与传统",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "it-culture-01-01",
                "type": "translate",
                "question": "圣诞节",
                "options": [
                  "pasta",
                  "pizza",
                  "carnevale",
                  "natale"
                ],
                "correctAnswer": "natale",
                "difficulty": 1
              },
              {
                "id": "it-culture-01-02",
                "type": "fill-blank",
                "question": "___ (狂欢节)",
                "options": [
                  "natale",
                  "carnevale",
                  "pizza",
                  "pasta"
                ],
                "correctAnswer": "carnevale",
                "difficulty": 2
              },
              {
                "id": "it-culture-01-03",
                "type": "translate",
                "question": "披萨",
                "options": [
                  "carnevale",
                  "pizza",
                  "natale",
                  "pasta"
                ],
                "correctAnswer": "pizza",
                "difficulty": 1
              },
              {
                "id": "it-culture-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "natale",
                    "圣诞节"
                  ],
                  [
                    "carnevale",
                    "狂欢节"
                  ],
                  [
                    "pizza",
                    "披萨"
                  ],
                  [
                    "pasta",
                    "意面"
                  ]
                ]
              },
              {
                "id": "it-culture-01-05",
                "type": "dictation",
                "question": "听写：圣诞节",
                "correctAnswer": "natale",
                "difficulty": 2,
                "audioWord": "natale"
              },
              {
                "id": "it-culture-01-06",
                "type": "repeat",
                "question": "跟读：carnevale",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "carnevale"
              }
            ]
          }
        ]
      }
    ]
  },
  "ko": {
    "themes": [
      {
        "id": "basic",
        "name": "基础词汇",
        "color": "#1D4ED8",
        "levels": [
          {
            "levelId": "ko-basic-01",
            "title": "问候与礼貌",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [],
            "questions": [
              {
                "id": "ko-basic-01-01",
                "type": "translate",
                "question": "你好",
                "options": [
                  "안녕하세요",
                  "아니요",
                  "네",
                  "제발"
                ],
                "correctAnswer": "안녕하세요",
                "difficulty": 1
              },
              {
                "id": "ko-basic-01-02",
                "type": "translate",
                "question": "谢谢",
                "options": [
                  "감사합니다",
                  "좋은 아침",
                  "아니요",
                  "제발"
                ],
                "correctAnswer": "감사합니다",
                "difficulty": 1
              },
              {
                "id": "ko-basic-01-03",
                "type": "translate",
                "question": "再见",
                "options": [
                  "안녕히 가세요",
                  "안녕하세요",
                  "제발",
                  "죄송합니다"
                ],
                "correctAnswer": "안녕히 가세요",
                "difficulty": 1
              },
              {
                "id": "ko-basic-01-04",
                "type": "fill-blank",
                "question": "___ (请)",
                "options": [
                  "제발",
                  "감사합니다",
                  "죄송합니다",
                  "안녕하세요"
                ],
                "correctAnswer": "제발",
                "difficulty": 2
              },
              {
                "id": "ko-basic-01-05",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "안녕하세요",
                    "你好"
                  ],
                  [
                    "감사합니다",
                    "谢谢"
                  ],
                  [
                    "안녕히 가세요",
                    "再见"
                  ],
                  [
                    "제발",
                    "请"
                  ]
                ]
              },
              {
                "id": "ko-basic-01-06",
                "type": "dictation",
                "question": "听写：是",
                "correctAnswer": "네",
                "difficulty": 2,
                "audioWord": "ne"
              }
            ]
          }
        ]
      },
      {
        "id": "daily",
        "name": "日常对话",
        "color": "#60A5FA",
        "levels": [
          {
            "levelId": "ko-daily-03",
            "title": "自我介绍",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "ko-daily-03-01",
                "type": "translate",
                "question": "初次见面",
                "options": [
                  "메뉴판 주세요",
                  "계산서 주세요",
                  "좀 깎아 주세요",
                  "처음 뵙겠습니다"
                ],
                "correctAnswer": "처음 뵙겠습니다",
                "difficulty": 1
              },
              {
                "id": "ko-daily-03-02",
                "type": "fill-blank",
                "question": "___ (我是…)",
                "options": [
                  "맛있어요",
                  "저는…입니다",
                  "좀 깎아 주세요",
                  "처음 뵙겠습니다"
                ],
                "correctAnswer": "저는…입니다",
                "difficulty": 2
              },
              {
                "id": "ko-daily-03-03",
                "type": "translate",
                "question": "您好吗？",
                "options": [
                  "너무 비싸요",
                  "어떻게 지내세요",
                  "이것 주세요",
                  "좀 깎아 주세요"
                ],
                "correctAnswer": "어떻게 지내세요",
                "difficulty": 1
              },
              {
                "id": "ko-daily-03-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "처음 뵙겠습니다",
                    "初次见面"
                  ],
                  [
                    "저는…입니다",
                    "我是…"
                  ],
                  [
                    "어떻게 지내세요",
                    "您好吗？"
                  ],
                  [
                    "어디에서 오셨어요",
                    "您从哪里来？"
                  ]
                ]
              },
              {
                "id": "ko-daily-03-05",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "얼마예요",
                "difficulty": 2,
                "audioWord": "eolmayeyo"
              },
              {
                "id": "ko-daily-03-06",
                "type": "repeat",
                "question": "跟读：이것 주세요",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "이것 주세요"
              }
            ]
          },
          {
            "levelId": "ko-daily-04",
            "title": "购物与消费",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "ko-daily-03"
            ],
            "questions": [
              {
                "id": "ko-daily-04-01",
                "type": "translate",
                "question": "初次见面",
                "options": [
                  "얼마예요",
                  "처음 뵙겠습니다",
                  "메뉴판 주세요",
                  "이것 주세요"
                ],
                "correctAnswer": "처음 뵙겠습니다",
                "difficulty": 1
              },
              {
                "id": "ko-daily-04-02",
                "type": "fill-blank",
                "question": "___ (我是…)",
                "options": [
                  "너무 비싸요",
                  "저는…입니다",
                  "길을 잃었어요",
                  "좀 깎아 주세요"
                ],
                "correctAnswer": "저는…입니다",
                "difficulty": 2
              },
              {
                "id": "ko-daily-04-03",
                "type": "translate",
                "question": "您好吗？",
                "options": [
                  "맛있어요",
                  "어떻게 지내세요",
                  "계산서 주세요",
                  "처음 뵙겠습니다"
                ],
                "correctAnswer": "어떻게 지내세요",
                "difficulty": 1
              },
              {
                "id": "ko-daily-04-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "처음 뵙겠습니다",
                    "初次见面"
                  ],
                  [
                    "저는…입니다",
                    "我是…"
                  ],
                  [
                    "어떻게 지내세요",
                    "您好吗？"
                  ],
                  [
                    "어디에서 오셨어요",
                    "您从哪里来？"
                  ]
                ]
              },
              {
                "id": "ko-daily-04-05",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "얼마예요",
                "difficulty": 2,
                "audioWord": "eolmayeyo"
              },
              {
                "id": "ko-daily-04-06",
                "type": "repeat",
                "question": "跟读：이것 주세요",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "이것 주세요"
              }
            ]
          }
        ]
      },
      {
        "id": "scenario",
        "name": "场景实战",
        "color": "#EF4444",
        "levels": [
          {
            "levelId": "ko-scenario-01",
            "title": "交通出行",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "ko-scenario-01-01",
                "type": "translate",
                "question": "地铁站在哪里？",
                "options": [
                  "의사가 필요해요",
                  "경찰에 신고해요",
                  "지하철역이 어디예요",
                  "몸이 안 좋아요"
                ],
                "correctAnswer": "지하철역이 어디예요",
                "difficulty": 1
              },
              {
                "id": "ko-scenario-01-02",
                "type": "fill-blank",
                "question": "___ (坐出租车)",
                "options": [
                  "택시를 타요",
                  "경찰에 신고해요",
                  "살리해주세요",
                  "싱글룸"
                ],
                "correctAnswer": "택시를 타요",
                "difficulty": 2
              },
              {
                "id": "ko-scenario-01-03",
                "type": "translate",
                "question": "我需要医生",
                "options": [
                  "경찰에 신고해요",
                  "의사가 필요해요",
                  "살리해주세요",
                  "싱글룸"
                ],
                "correctAnswer": "의사가 필요해요",
                "difficulty": 1
              },
              {
                "id": "ko-scenario-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "지하철역이 어디예요",
                    "地铁站在哪里？"
                  ],
                  [
                    "택시를 타요",
                    "坐出租车"
                  ],
                  [
                    "의사가 필요해요",
                    "我需要医生"
                  ],
                  [
                    "몸이 안 좋아요",
                    "我不舒服"
                  ]
                ]
              },
              {
                "id": "ko-scenario-01-05",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "호텔을 예약해요",
                "difficulty": 2,
                "audioWord": "hotereul yeyakaeyo"
              },
              {
                "id": "ko-scenario-01-06",
                "type": "repeat",
                "question": "跟读：싱글룸",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "싱글룸"
              }
            ]
          },
          {
            "levelId": "ko-scenario-02",
            "title": "酒店与应急",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "ko-scenario-01"
            ],
            "questions": [
              {
                "id": "ko-scenario-02-01",
                "type": "translate",
                "question": "地铁站在哪里？",
                "options": [
                  "택시를 타요",
                  "안녕히 주무세요",
                  "좋은 아침이에요",
                  "지하철역이 어디예요"
                ],
                "correctAnswer": "지하철역이 어디예요",
                "difficulty": 1
              },
              {
                "id": "ko-scenario-02-02",
                "type": "fill-blank",
                "question": "___ (坐出租车)",
                "options": [
                  "실례합니다",
                  "의사가 필요해요",
                  "지하철역이 어디예요",
                  "택시를 타요"
                ],
                "correctAnswer": "택시를 타요",
                "difficulty": 2
              },
              {
                "id": "ko-scenario-02-03",
                "type": "translate",
                "question": "我需要医生",
                "options": [
                  "내일 봐요",
                  "몸이 안 좋아요",
                  "의사가 필요해요",
                  "지하철역이 어디예요"
                ],
                "correctAnswer": "의사가 필요해요",
                "difficulty": 1
              },
              {
                "id": "ko-scenario-02-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "지하철역이 어디예요",
                    "地铁站在哪里？"
                  ],
                  [
                    "택시를 타요",
                    "坐出租车"
                  ],
                  [
                    "의사가 필요해요",
                    "我需要医生"
                  ],
                  [
                    "몸이 안 좋아요",
                    "我不舒服"
                  ]
                ]
              },
              {
                "id": "ko-scenario-02-05",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "호텔을 예약해요",
                "difficulty": 2,
                "audioWord": "hotereul yeyakaeyo"
              },
              {
                "id": "ko-scenario-02-06",
                "type": "repeat",
                "question": "跟读：싱글룸",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "싱글룸"
              }
            ]
          },
          {
            "levelId": "ko-scenario-03",
            "title": "就医买药",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "ko-scenario-02"
            ],
            "questions": [
              {
                "id": "ko-scenario-03-01",
                "type": "translate",
                "question": "地铁站在哪里？",
                "options": [
                  "지하철역이 어디예요",
                  "실례합니다",
                  "의사가 필요해요",
                  "호텔을 예약해요"
                ],
                "correctAnswer": "지하철역이 어디예요",
                "difficulty": 1
              },
              {
                "id": "ko-scenario-03-02",
                "type": "fill-blank",
                "question": "___ (坐出租车)",
                "options": [
                  "몸이 안 좋아요",
                  "택시를 타요",
                  "의사가 필요해요",
                  "살리해주세요"
                ],
                "correctAnswer": "택시를 타요",
                "difficulty": 2
              },
              {
                "id": "ko-scenario-03-03",
                "type": "translate",
                "question": "我需要医生",
                "options": [
                  "지하철역이 어디예요",
                  "의사가 필요해요",
                  "내일 봐요",
                  "싱글룸"
                ],
                "correctAnswer": "의사가 필요해요",
                "difficulty": 1
              },
              {
                "id": "ko-scenario-03-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "지하철역이 어디예요",
                    "地铁站在哪里？"
                  ],
                  [
                    "택시를 타요",
                    "坐出租车"
                  ],
                  [
                    "의사가 필요해요",
                    "我需要医生"
                  ],
                  [
                    "몸이 안 좋아요",
                    "我不舒服"
                  ]
                ]
              },
              {
                "id": "ko-scenario-03-05",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "호텔을 예약해요",
                "difficulty": 2,
                "audioWord": "hotereul yeyakaeyo"
              },
              {
                "id": "ko-scenario-03-06",
                "type": "repeat",
                "question": "跟读：싱글룸",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "싱글룸"
              }
            ]
          }
        ]
      },
      {
        "id": "grammar",
        "name": "语法进阶",
        "color": "#F59E0B",
        "levels": [
          {
            "levelId": "ko-grammar-01",
            "title": "动词基础",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "ko-grammar-01-01",
                "type": "translate",
                "question": "吃（非敬语）",
                "options": [
                  "먹었어요",
                  "먹어요",
                  "이었어요/였어요",
                  "가요"
                ],
                "correctAnswer": "먹어요",
                "difficulty": 1
              },
              {
                "id": "ko-grammar-01-02",
                "type": "fill-blank",
                "question": "___ (吃了（过去式）)",
                "options": [
                  "먹었어요",
                  "이었어요/였어요",
                  "먹어요",
                  "가요"
                ],
                "correctAnswer": "먹었어요",
                "difficulty": 2
              },
              {
                "id": "ko-grammar-01-03",
                "type": "translate",
                "question": "去",
                "options": [
                  "갔어요",
                  "가요",
                  "먹어요",
                  "이었어요/였어요"
                ],
                "correctAnswer": "가요",
                "difficulty": 1
              },
              {
                "id": "ko-grammar-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "먹어요",
                    "吃（非敬语）"
                  ],
                  [
                    "먹었어요",
                    "吃了（过去式）"
                  ],
                  [
                    "가요",
                    "去"
                  ],
                  [
                    "갔어요",
                    "去了（过去式）"
                  ]
                ]
              },
              {
                "id": "ko-grammar-01-05",
                "type": "dictation",
                "question": "听写：是",
                "correctAnswer": "이에요/예요",
                "difficulty": 2,
                "audioWord": "ieyo yeyo"
              },
              {
                "id": "ko-grammar-01-06",
                "type": "repeat",
                "question": "跟读：이었어요/였어요",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "이었어요/였어요"
              }
            ]
          },
          {
            "levelId": "ko-grammar-02",
            "title": "名词与形容词",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "ko-grammar-01"
            ],
            "questions": [
              {
                "id": "ko-grammar-02-01",
                "type": "translate",
                "question": "吃（非敬语）",
                "options": [
                  "이에요/예요",
                  "먹어요",
                  "갔어요",
                  "이었어요/였어요"
                ],
                "correctAnswer": "먹어요",
                "difficulty": 1
              },
              {
                "id": "ko-grammar-02-02",
                "type": "fill-blank",
                "question": "___ (吃了（过去式）)",
                "options": [
                  "먹었어요",
                  "이에요/예요",
                  "갔어요",
                  "가요"
                ],
                "correctAnswer": "먹었어요",
                "difficulty": 2
              },
              {
                "id": "ko-grammar-02-03",
                "type": "translate",
                "question": "去",
                "options": [
                  "갔어요",
                  "가요",
                  "이에요/예요",
                  "이었어요/였어요"
                ],
                "correctAnswer": "가요",
                "difficulty": 1
              },
              {
                "id": "ko-grammar-02-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "먹어요",
                    "吃（非敬语）"
                  ],
                  [
                    "먹었어요",
                    "吃了（过去式）"
                  ],
                  [
                    "가요",
                    "去"
                  ],
                  [
                    "갔어요",
                    "去了（过去式）"
                  ]
                ]
              },
              {
                "id": "ko-grammar-02-05",
                "type": "dictation",
                "question": "听写：是",
                "correctAnswer": "이에요/예요",
                "difficulty": 2,
                "audioWord": "ieyo yeyo"
              },
              {
                "id": "ko-grammar-02-06",
                "type": "repeat",
                "question": "跟读：이었어요/였어요",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "이었어요/였어요"
              }
            ]
          }
        ]
      },
      {
        "id": "culture",
        "name": "文化拓展",
        "color": "#8B5CF6",
        "levels": [
          {
            "levelId": "ko-culture-01",
            "title": "节日与传统",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "ko-culture-01-01",
                "type": "translate",
                "question": "春节/新年",
                "options": [
                  "설날",
                  "한복",
                  "김치",
                  "추석"
                ],
                "correctAnswer": "설날",
                "difficulty": 1
              },
              {
                "id": "ko-culture-01-02",
                "type": "fill-blank",
                "question": "___ (中秋节)",
                "options": [
                  "김치",
                  "한복",
                  "추석",
                  "설날"
                ],
                "correctAnswer": "추석",
                "difficulty": 2
              },
              {
                "id": "ko-culture-01-03",
                "type": "translate",
                "question": "韩服",
                "options": [
                  "한복",
                  "김치",
                  "설날",
                  "추석"
                ],
                "correctAnswer": "한복",
                "difficulty": 1
              },
              {
                "id": "ko-culture-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "설날",
                    "春节/新年"
                  ],
                  [
                    "추석",
                    "中秋节"
                  ],
                  [
                    "한복",
                    "韩服"
                  ],
                  [
                    "김치",
                    "泡菜"
                  ]
                ]
              },
              {
                "id": "ko-culture-01-05",
                "type": "dictation",
                "question": "听写：春节/新年",
                "correctAnswer": "설날",
                "difficulty": 2,
                "audioWord": "seollal"
              },
              {
                "id": "ko-culture-01-06",
                "type": "repeat",
                "question": "跟读：추석",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "추석"
              }
            ]
          },
          {
            "levelId": "ko-culture-02",
            "title": "美食与文化",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "ko-culture-01"
            ],
            "questions": [
              {
                "id": "ko-culture-02-01",
                "type": "translate",
                "question": "春节/新年",
                "options": [
                  "추석",
                  "김치",
                  "한복",
                  "설날"
                ],
                "correctAnswer": "설날",
                "difficulty": 1
              },
              {
                "id": "ko-culture-02-02",
                "type": "fill-blank",
                "question": "___ (中秋节)",
                "options": [
                  "설날",
                  "추석",
                  "한복",
                  "김치"
                ],
                "correctAnswer": "추석",
                "difficulty": 2
              },
              {
                "id": "ko-culture-02-03",
                "type": "translate",
                "question": "韩服",
                "options": [
                  "설날",
                  "한복",
                  "추석",
                  "김치"
                ],
                "correctAnswer": "한복",
                "difficulty": 1
              },
              {
                "id": "ko-culture-02-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "설날",
                    "春节/新年"
                  ],
                  [
                    "추석",
                    "中秋节"
                  ],
                  [
                    "한복",
                    "韩服"
                  ],
                  [
                    "김치",
                    "泡菜"
                  ]
                ]
              },
              {
                "id": "ko-culture-02-05",
                "type": "dictation",
                "question": "听写：春节/新年",
                "correctAnswer": "설날",
                "difficulty": 2,
                "audioWord": "seollal"
              },
              {
                "id": "ko-culture-02-06",
                "type": "repeat",
                "question": "跟读：추석",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "추석"
              }
            ]
          }
        ]
      }
    ]
  },
  "nl": {
    "themes": [
      {
        "id": "basic",
        "name": "基础词汇",
        "color": "#1D4ED8",
        "levels": [
          {
            "levelId": "nl-basic-01",
            "title": "问候与礼貌",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [],
            "questions": [
              {
                "id": "nl-basic-01-01",
                "type": "translate",
                "question": "是",
                "options": [
                  "ja",
                  "hallo",
                  "zus",
                  "wit"
                ],
                "correctAnswer": "ja",
                "difficulty": 1
              },
              {
                "id": "nl-basic-01-02",
                "type": "fill-blank",
                "question": "___ (不是)",
                "options": [
                  "hallo",
                  "wit",
                  "nee",
                  "vader"
                ],
                "correctAnswer": "nee",
                "difficulty": 2
              },
              {
                "id": "nl-basic-01-03",
                "type": "translate",
                "question": "再见",
                "options": [
                  "wit",
                  "nee",
                  "tot ziens",
                  "ja"
                ],
                "correctAnswer": "tot ziens",
                "difficulty": 1
              },
              {
                "id": "nl-basic-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "ja",
                    "是"
                  ],
                  [
                    "nee",
                    "不是"
                  ],
                  [
                    "tot ziens",
                    "再见"
                  ],
                  [
                    "alstublieft",
                    "请"
                  ]
                ]
              },
              {
                "id": "nl-basic-01-05",
                "type": "dictation",
                "question": "听写：一",
                "correctAnswer": "een",
                "difficulty": 2,
                "audioWord": "een"
              },
              {
                "id": "nl-basic-01-06",
                "type": "repeat",
                "question": "跟读：twee",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "twee"
              }
            ]
          },
          {
            "levelId": "nl-basic-02",
            "title": "家庭与人物",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "nl-basic-01"
            ],
            "questions": [
              {
                "id": "nl-basic-02-01",
                "type": "translate",
                "question": "父亲",
                "options": [
                  "vader",
                  "opa",
                  "oma",
                  "zus"
                ],
                "correctAnswer": "vader",
                "difficulty": 1
              },
              {
                "id": "nl-basic-02-02",
                "type": "translate",
                "question": "母亲",
                "options": [
                  "moeder",
                  "dochter",
                  "broer",
                  "oma"
                ],
                "correctAnswer": "moeder",
                "difficulty": 1
              },
              {
                "id": "nl-basic-02-03",
                "type": "translate",
                "question": "兄弟",
                "options": [
                  "broer",
                  "vader",
                  "opa",
                  "zus"
                ],
                "correctAnswer": "broer",
                "difficulty": 1
              },
              {
                "id": "nl-basic-02-04",
                "type": "fill-blank",
                "question": "___ (姐妹)",
                "options": [
                  "zus",
                  "oma",
                  "opa",
                  "dochter"
                ],
                "correctAnswer": "zus",
                "difficulty": 2
              },
              {
                "id": "nl-basic-02-05",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "vader",
                    "父亲"
                  ],
                  [
                    "moeder",
                    "母亲"
                  ],
                  [
                    "broer",
                    "兄弟"
                  ],
                  [
                    "zus",
                    "姐妹"
                  ]
                ]
              },
              {
                "id": "nl-basic-02-06",
                "type": "dictation",
                "question": "听写：女儿",
                "correctAnswer": "dochter",
                "difficulty": 2,
                "audioWord": "dochter"
              }
            ]
          },
          {
            "levelId": "nl-basic-03",
            "title": "数字与颜色",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "nl-basic-02"
            ],
            "questions": [
              {
                "id": "nl-basic-03-01",
                "type": "translate",
                "question": "一",
                "options": [
                  "een",
                  "rood",
                  "drie",
                  "blauw"
                ],
                "correctAnswer": "een",
                "difficulty": 1
              },
              {
                "id": "nl-basic-03-02",
                "type": "translate",
                "question": "二",
                "options": [
                  "twee",
                  "vier",
                  "drie",
                  "rood"
                ],
                "correctAnswer": "twee",
                "difficulty": 1
              },
              {
                "id": "nl-basic-03-03",
                "type": "fill-blank",
                "question": "___ (三)",
                "options": [
                  "drie",
                  "groen",
                  "rood",
                  "een"
                ],
                "correctAnswer": "drie",
                "difficulty": 2
              },
              {
                "id": "nl-basic-03-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "een",
                    "一"
                  ],
                  [
                    "twee",
                    "二"
                  ],
                  [
                    "drie",
                    "三"
                  ],
                  [
                    "vier",
                    "四"
                  ]
                ]
              },
              {
                "id": "nl-basic-03-05",
                "type": "dictation",
                "question": "听写：五",
                "correctAnswer": "vijf",
                "difficulty": 2,
                "audioWord": "vijf"
              },
              {
                "id": "nl-basic-03-06",
                "type": "repeat",
                "question": "跟读：红色",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "rood"
              }
            ]
          }
        ]
      },
      {
        "id": "daily",
        "name": "日常对话",
        "color": "#60A5FA",
        "levels": [
          {
            "levelId": "nl-daily-02",
            "title": "购物与消费",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "nl-daily-02-01",
                "type": "translate",
                "question": "我叫…",
                "options": [
                  "kunt u korting geven?",
                  "ik wil dit",
                  "het is te duur",
                  "ik heet..."
                ],
                "correctAnswer": "ik heet...",
                "difficulty": 1
              },
              {
                "id": "nl-daily-02-02",
                "type": "fill-blank",
                "question": "___ (很高兴认识你)",
                "options": [
                  "heel lekker",
                  "aangenaam",
                  "hoeveel kost dit?",
                  "het menu alstublieft"
                ],
                "correctAnswer": "aangenaam",
                "difficulty": 2
              },
              {
                "id": "nl-daily-02-03",
                "type": "translate",
                "question": "你好吗？",
                "options": [
                  "hoe gaat het?",
                  "ik heet...",
                  "ik ben verdwaald",
                  "aangenaam"
                ],
                "correctAnswer": "hoe gaat het?",
                "difficulty": 1
              },
              {
                "id": "nl-daily-02-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "ik heet...",
                    "我叫…"
                  ],
                  [
                    "aangenaam",
                    "很高兴认识你"
                  ],
                  [
                    "hoe gaat het?",
                    "你好吗？"
                  ],
                  [
                    "waar kom je vandaan?",
                    "你从哪里来？"
                  ]
                ]
              },
              {
                "id": "nl-daily-02-05",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "hoeveel kost dit?",
                "difficulty": 2,
                "audioWord": "hoeveel kost dit"
              },
              {
                "id": "nl-daily-02-06",
                "type": "repeat",
                "question": "跟读：ik wil dit",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "ik wil dit"
              }
            ]
          },
          {
            "levelId": "nl-daily-03",
            "title": "购物与消费",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "nl-daily-02"
            ],
            "questions": [
              {
                "id": "nl-daily-03-01",
                "type": "translate",
                "question": "我叫…",
                "options": [
                  "de rekening alstublieft",
                  "aangenaam",
                  "het menu alstublieft",
                  "ik heet..."
                ],
                "correctAnswer": "ik heet...",
                "difficulty": 1
              },
              {
                "id": "nl-daily-03-02",
                "type": "fill-blank",
                "question": "___ (很高兴认识你)",
                "options": [
                  "hoe gaat het?",
                  "aangenaam",
                  "kunt u korting geven?",
                  "het menu alstublieft"
                ],
                "correctAnswer": "aangenaam",
                "difficulty": 2
              },
              {
                "id": "nl-daily-03-03",
                "type": "translate",
                "question": "你好吗？",
                "options": [
                  "hoe gaat het?",
                  "hoeveel kost dit?",
                  "ik heet...",
                  "de rekening alstublieft"
                ],
                "correctAnswer": "hoe gaat het?",
                "difficulty": 1
              },
              {
                "id": "nl-daily-03-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "ik heet...",
                    "我叫…"
                  ],
                  [
                    "aangenaam",
                    "很高兴认识你"
                  ],
                  [
                    "hoe gaat het?",
                    "你好吗？"
                  ],
                  [
                    "waar kom je vandaan?",
                    "你从哪里来？"
                  ]
                ]
              },
              {
                "id": "nl-daily-03-05",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "hoeveel kost dit?",
                "difficulty": 2,
                "audioWord": "hoeveel kost dit"
              },
              {
                "id": "nl-daily-03-06",
                "type": "repeat",
                "question": "跟读：ik wil dit",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "ik wil dit"
              }
            ]
          }
        ]
      },
      {
        "id": "scenario",
        "name": "场景实战",
        "color": "#EF4444",
        "levels": [
          {
            "levelId": "nl-scenario-01",
            "title": "交通出行",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "nl-scenario-01-01",
                "type": "translate",
                "question": "地铁站在哪里？",
                "options": [
                  "eenpersoonskamer",
                  "waar is de metro?",
                  "ik heb een dokter nodig",
                  "een taxi nemen"
                ],
                "correctAnswer": "waar is de metro?",
                "difficulty": 1
              },
              {
                "id": "nl-scenario-01-02",
                "type": "fill-blank",
                "question": "___ (坐出租车)",
                "options": [
                  "waar is de metro?",
                  "een taxi nemen",
                  "help!",
                  "ik voel me niet goed"
                ],
                "correctAnswer": "een taxi nemen",
                "difficulty": 2
              },
              {
                "id": "nl-scenario-01-03",
                "type": "translate",
                "question": "我需要医生",
                "options": [
                  "eenpersoonskamer",
                  "ik heb een dokter nodig",
                  "een taxi nemen",
                  "bel de politie"
                ],
                "correctAnswer": "ik heb een dokter nodig",
                "difficulty": 1
              },
              {
                "id": "nl-scenario-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "waar is de metro?",
                    "地铁站在哪里？"
                  ],
                  [
                    "een taxi nemen",
                    "坐出租车"
                  ],
                  [
                    "ik heb een dokter nodig",
                    "我需要医生"
                  ],
                  [
                    "ik voel me niet goed",
                    "我不舒服"
                  ]
                ]
              },
              {
                "id": "nl-scenario-01-05",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "een hotel boeken",
                "difficulty": 2,
                "audioWord": "een hotel boeken"
              },
              {
                "id": "nl-scenario-01-06",
                "type": "repeat",
                "question": "跟读：eenpersoonskamer",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "eenpersoonskamer"
              }
            ]
          },
          {
            "levelId": "nl-scenario-02",
            "title": "酒店与应急",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "nl-scenario-01"
            ],
            "questions": [
              {
                "id": "nl-scenario-02-01",
                "type": "translate",
                "question": "地铁站在哪里？",
                "options": [
                  "welterusten",
                  "waar is de metro?",
                  "tot morgen",
                  "bel de politie"
                ],
                "correctAnswer": "waar is de metro?",
                "difficulty": 1
              },
              {
                "id": "nl-scenario-02-02",
                "type": "fill-blank",
                "question": "___ (坐出租车)",
                "options": [
                  "welterusten",
                  "ik heb een dokter nodig",
                  "help!",
                  "een taxi nemen"
                ],
                "correctAnswer": "een taxi nemen",
                "difficulty": 2
              },
              {
                "id": "nl-scenario-02-03",
                "type": "translate",
                "question": "我需要医生",
                "options": [
                  "een taxi nemen",
                  "ik heb een dokter nodig",
                  "een hotel boeken",
                  "help!"
                ],
                "correctAnswer": "ik heb een dokter nodig",
                "difficulty": 1
              },
              {
                "id": "nl-scenario-02-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "waar is de metro?",
                    "地铁站在哪里？"
                  ],
                  [
                    "een taxi nemen",
                    "坐出租车"
                  ],
                  [
                    "ik heb een dokter nodig",
                    "我需要医生"
                  ],
                  [
                    "ik voel me niet goed",
                    "我不舒服"
                  ]
                ]
              },
              {
                "id": "nl-scenario-02-05",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "een hotel boeken",
                "difficulty": 2,
                "audioWord": "een hotel boeken"
              },
              {
                "id": "nl-scenario-02-06",
                "type": "repeat",
                "question": "跟读：eenpersoonskamer",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "eenpersoonskamer"
              }
            ]
          },
          {
            "levelId": "nl-scenario-03",
            "title": "就医买药",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "nl-scenario-02"
            ],
            "questions": [
              {
                "id": "nl-scenario-03-01",
                "type": "translate",
                "question": "地铁站在哪里？",
                "options": [
                  "eenpersoonskamer",
                  "pardon",
                  "waar is de metro?",
                  "goedemorgen"
                ],
                "correctAnswer": "waar is de metro?",
                "difficulty": 1
              },
              {
                "id": "nl-scenario-03-02",
                "type": "fill-blank",
                "question": "___ (坐出租车)",
                "options": [
                  "een taxi nemen",
                  "tot morgen",
                  "bel de politie",
                  "welterusten"
                ],
                "correctAnswer": "een taxi nemen",
                "difficulty": 2
              },
              {
                "id": "nl-scenario-03-03",
                "type": "translate",
                "question": "我需要医生",
                "options": [
                  "eenpersoonskamer",
                  "ik heb een dokter nodig",
                  "tot morgen",
                  "een taxi nemen"
                ],
                "correctAnswer": "ik heb een dokter nodig",
                "difficulty": 1
              },
              {
                "id": "nl-scenario-03-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "waar is de metro?",
                    "地铁站在哪里？"
                  ],
                  [
                    "een taxi nemen",
                    "坐出租车"
                  ],
                  [
                    "ik heb een dokter nodig",
                    "我需要医生"
                  ],
                  [
                    "ik voel me niet goed",
                    "我不舒服"
                  ]
                ]
              },
              {
                "id": "nl-scenario-03-05",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "een hotel boeken",
                "difficulty": 2,
                "audioWord": "een hotel boeken"
              },
              {
                "id": "nl-scenario-03-06",
                "type": "repeat",
                "question": "跟读：eenpersoonskamer",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "eenpersoonskamer"
              }
            ]
          }
        ]
      },
      {
        "id": "grammar",
        "name": "语法进阶",
        "color": "#F59E0B",
        "levels": [
          {
            "levelId": "nl-grammar-01",
            "title": "动词基础",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "nl-grammar-01-01",
                "type": "translate",
                "question": "去（原形）",
                "options": [
                  "ik ga",
                  "gaan",
                  "zijn",
                  "hij gaat"
                ],
                "correctAnswer": "gaan",
                "difficulty": 1
              },
              {
                "id": "nl-grammar-01-02",
                "type": "fill-blank",
                "question": "___ (我去)",
                "options": [
                  "ik eet",
                  "zijn",
                  "ik ga",
                  "ben/is/zijn"
                ],
                "correctAnswer": "ik ga",
                "difficulty": 2
              },
              {
                "id": "nl-grammar-01-03",
                "type": "translate",
                "question": "他去",
                "options": [
                  "ben/is/zijn",
                  "hij gaat",
                  "gaan",
                  "zijn"
                ],
                "correctAnswer": "hij gaat",
                "difficulty": 1
              },
              {
                "id": "nl-grammar-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "gaan",
                    "去（原形）"
                  ],
                  [
                    "ik ga",
                    "我去"
                  ],
                  [
                    "hij gaat",
                    "他去"
                  ],
                  [
                    "zijn",
                    "是（原形）"
                  ]
                ]
              },
              {
                "id": "nl-grammar-01-05",
                "type": "dictation",
                "question": "听写：是",
                "correctAnswer": "ben/is/zijn",
                "difficulty": 2,
                "audioWord": "ben is zijn"
              },
              {
                "id": "nl-grammar-01-06",
                "type": "repeat",
                "question": "跟读：eten",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "eten"
              }
            ]
          }
        ]
      },
      {
        "id": "culture",
        "name": "文化拓展",
        "color": "#8B5CF6",
        "levels": [
          {
            "levelId": "nl-culture-01",
            "title": "节日与传统",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "nl-culture-01-01",
                "type": "translate",
                "question": "圣诞节",
                "options": [
                  "kerstmis",
                  "kaas",
                  "koningsdag",
                  "stroopwafel"
                ],
                "correctAnswer": "kerstmis",
                "difficulty": 1
              },
              {
                "id": "nl-culture-01-02",
                "type": "fill-blank",
                "question": "___ (国王节)",
                "options": [
                  "kerstmis",
                  "koningsdag",
                  "stroopwafel",
                  "kaas"
                ],
                "correctAnswer": "koningsdag",
                "difficulty": 2
              },
              {
                "id": "nl-culture-01-03",
                "type": "translate",
                "question": "糖浆华夫饼",
                "options": [
                  "kerstmis",
                  "koningsdag",
                  "kaas",
                  "stroopwafel"
                ],
                "correctAnswer": "stroopwafel",
                "difficulty": 1
              },
              {
                "id": "nl-culture-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "kerstmis",
                    "圣诞节"
                  ],
                  [
                    "koningsdag",
                    "国王节"
                  ],
                  [
                    "stroopwafel",
                    "糖浆华夫饼"
                  ],
                  [
                    "kaas",
                    "奶酪"
                  ]
                ]
              },
              {
                "id": "nl-culture-01-05",
                "type": "dictation",
                "question": "听写：圣诞节",
                "correctAnswer": "kerstmis",
                "difficulty": 2,
                "audioWord": "kerstmis"
              },
              {
                "id": "nl-culture-01-06",
                "type": "repeat",
                "question": "跟读：koningsdag",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "koningsdag"
              }
            ]
          }
        ]
      }
    ]
  },
  "pl": {
    "themes": [
      {
        "id": "basic",
        "name": "基础词汇",
        "color": "#1D4ED8",
        "levels": [
          {
            "levelId": "pl-basic-01",
            "title": "问候与礼貌",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [],
            "questions": [
              {
                "id": "pl-basic-01-01",
                "type": "translate",
                "question": "是",
                "options": [
                  "tak",
                  "jabłko",
                  "dziękuję",
                  "trzy"
                ],
                "correctAnswer": "tak",
                "difficulty": 1
              },
              {
                "id": "pl-basic-01-02",
                "type": "fill-blank",
                "question": "___ (不是)",
                "options": [
                  "nie",
                  "jabłko",
                  "dziękuję",
                  "czarny"
                ],
                "correctAnswer": "nie",
                "difficulty": 2
              },
              {
                "id": "pl-basic-01-03",
                "type": "translate",
                "question": "再见",
                "options": [
                  "biały",
                  "do widzenia",
                  "przyjaciel",
                  "pięć"
                ],
                "correctAnswer": "do widzenia",
                "difficulty": 1
              },
              {
                "id": "pl-basic-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "tak",
                    "是"
                  ],
                  [
                    "nie",
                    "不是"
                  ],
                  [
                    "do widzenia",
                    "再见"
                  ],
                  [
                    "proszę",
                    "请"
                  ]
                ]
              },
              {
                "id": "pl-basic-01-05",
                "type": "dictation",
                "question": "听写：一",
                "correctAnswer": "jeden",
                "difficulty": 2,
                "audioWord": "jeden"
              },
              {
                "id": "pl-basic-01-06",
                "type": "repeat",
                "question": "跟读：dwa",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "dwa"
              }
            ]
          },
          {
            "levelId": "pl-basic-02",
            "title": "家庭与人物",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "pl-basic-01"
            ],
            "questions": [
              {
                "id": "pl-basic-02-01",
                "type": "translate",
                "question": "父亲",
                "options": [
                  "ojciec",
                  "córka",
                  "siostra",
                  "syn"
                ],
                "correctAnswer": "ojciec",
                "difficulty": 1
              },
              {
                "id": "pl-basic-02-02",
                "type": "translate",
                "question": "母亲",
                "options": [
                  "matka",
                  "ojciec",
                  "babcia",
                  "siostra"
                ],
                "correctAnswer": "matka",
                "difficulty": 1
              },
              {
                "id": "pl-basic-02-03",
                "type": "translate",
                "question": "兄弟",
                "options": [
                  "brat",
                  "babcia",
                  "siostra",
                  "matka"
                ],
                "correctAnswer": "brat",
                "difficulty": 1
              },
              {
                "id": "pl-basic-02-04",
                "type": "fill-blank",
                "question": "___ (姐妹)",
                "options": [
                  "siostra",
                  "ojciec",
                  "matka",
                  "córka"
                ],
                "correctAnswer": "siostra",
                "difficulty": 2
              },
              {
                "id": "pl-basic-02-05",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "ojciec",
                    "父亲"
                  ],
                  [
                    "matka",
                    "母亲"
                  ],
                  [
                    "brat",
                    "兄弟"
                  ],
                  [
                    "siostra",
                    "姐妹"
                  ]
                ]
              },
              {
                "id": "pl-basic-02-06",
                "type": "dictation",
                "question": "听写：女儿",
                "correctAnswer": "córka",
                "difficulty": 2,
                "audioWord": "córka"
              }
            ]
          },
          {
            "levelId": "pl-basic-03",
            "title": "数字与颜色",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "pl-basic-02"
            ],
            "questions": [
              {
                "id": "pl-basic-03-01",
                "type": "translate",
                "question": "一",
                "options": [
                  "jeden",
                  "dwa",
                  "zielony",
                  "pięć"
                ],
                "correctAnswer": "jeden",
                "difficulty": 1
              },
              {
                "id": "pl-basic-03-02",
                "type": "translate",
                "question": "二",
                "options": [
                  "dwa",
                  "zielony",
                  "jeden",
                  "czerwony"
                ],
                "correctAnswer": "dwa",
                "difficulty": 1
              },
              {
                "id": "pl-basic-03-03",
                "type": "fill-blank",
                "question": "___ (三)",
                "options": [
                  "trzy",
                  "zielony",
                  "dwa",
                  "niebieski"
                ],
                "correctAnswer": "trzy",
                "difficulty": 2
              },
              {
                "id": "pl-basic-03-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "jeden",
                    "一"
                  ],
                  [
                    "dwa",
                    "二"
                  ],
                  [
                    "trzy",
                    "三"
                  ],
                  [
                    "cztery",
                    "四"
                  ]
                ]
              },
              {
                "id": "pl-basic-03-05",
                "type": "dictation",
                "question": "听写：五",
                "correctAnswer": "pięć",
                "difficulty": 2,
                "audioWord": "piec"
              },
              {
                "id": "pl-basic-03-06",
                "type": "repeat",
                "question": "跟读：红色",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "czerwony"
              }
            ]
          }
        ]
      },
      {
        "id": "daily",
        "name": "日常对话",
        "color": "#60A5FA",
        "levels": [
          {
            "levelId": "pl-daily-02",
            "title": "购物与消费",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "pl-daily-02-01",
                "type": "translate",
                "question": "我叫…",
                "options": [
                  "chcę to",
                  "czy jest zniżka?",
                  "mam na imię...",
                  "skąd jesteś?"
                ],
                "correctAnswer": "mam na imię...",
                "difficulty": 1
              },
              {
                "id": "pl-daily-02-02",
                "type": "fill-blank",
                "question": "___ (很高兴认识你)",
                "options": [
                  "menu proszę",
                  "chcę to",
                  "skąd jesteś?",
                  "miło mi"
                ],
                "correctAnswer": "miło mi",
                "difficulty": 2
              },
              {
                "id": "pl-daily-02-03",
                "type": "translate",
                "question": "你好吗？",
                "options": [
                  "rachunek proszę",
                  "jak się masz?",
                  "bardzo smaczne",
                  "czy jest zniżka?"
                ],
                "correctAnswer": "jak się masz?",
                "difficulty": 1
              },
              {
                "id": "pl-daily-02-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "mam na imię...",
                    "我叫…"
                  ],
                  [
                    "miło mi",
                    "很高兴认识你"
                  ],
                  [
                    "jak się masz?",
                    "你好吗？"
                  ],
                  [
                    "skąd jesteś?",
                    "你从哪里来？"
                  ]
                ]
              },
              {
                "id": "pl-daily-02-05",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "ile to kosztuje?",
                "difficulty": 2,
                "audioWord": "ile to kosztuje"
              },
              {
                "id": "pl-daily-02-06",
                "type": "repeat",
                "question": "跟读：chcę to",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "chcę to"
              }
            ]
          },
          {
            "levelId": "pl-daily-03",
            "title": "购物与消费",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "pl-daily-02"
            ],
            "questions": [
              {
                "id": "pl-daily-03-01",
                "type": "translate",
                "question": "我叫…",
                "options": [
                  "to za drogie",
                  "ile to kosztuje?",
                  "chcę to",
                  "mam na imię..."
                ],
                "correctAnswer": "mam na imię...",
                "difficulty": 1
              },
              {
                "id": "pl-daily-03-02",
                "type": "fill-blank",
                "question": "___ (很高兴认识你)",
                "options": [
                  "ile to kosztuje?",
                  "rachunek proszę",
                  "jak się masz?",
                  "miło mi"
                ],
                "correctAnswer": "miło mi",
                "difficulty": 2
              },
              {
                "id": "pl-daily-03-03",
                "type": "translate",
                "question": "你好吗？",
                "options": [
                  "zgubiłem się",
                  "bardzo smaczne",
                  "mam na imię...",
                  "jak się masz?"
                ],
                "correctAnswer": "jak się masz?",
                "difficulty": 1
              },
              {
                "id": "pl-daily-03-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "mam na imię...",
                    "我叫…"
                  ],
                  [
                    "miło mi",
                    "很高兴认识你"
                  ],
                  [
                    "jak się masz?",
                    "你好吗？"
                  ],
                  [
                    "skąd jesteś?",
                    "你从哪里来？"
                  ]
                ]
              },
              {
                "id": "pl-daily-03-05",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "ile to kosztuje?",
                "difficulty": 2,
                "audioWord": "ile to kosztuje"
              },
              {
                "id": "pl-daily-03-06",
                "type": "repeat",
                "question": "跟读：chcę to",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "chcę to"
              }
            ]
          }
        ]
      },
      {
        "id": "scenario",
        "name": "场景实战",
        "color": "#EF4444",
        "levels": [
          {
            "levelId": "pl-scenario-01",
            "title": "交通出行",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "pl-scenario-01-01",
                "type": "translate",
                "question": "地铁站在哪里？",
                "options": [
                  "dzień dobry",
                  "pomocy!",
                  "gdzie jest metro?",
                  "zarezerwować hotel"
                ],
                "correctAnswer": "gdzie jest metro?",
                "difficulty": 1
              },
              {
                "id": "pl-scenario-01-02",
                "type": "fill-blank",
                "question": "___ (坐出租车)",
                "options": [
                  "dzień dobry",
                  "wziąć taksówkę",
                  "potrzebuję lekarza",
                  "zarezerwować hotel"
                ],
                "correctAnswer": "wziąć taksówkę",
                "difficulty": 2
              },
              {
                "id": "pl-scenario-01-03",
                "type": "translate",
                "question": "我需要医生",
                "options": [
                  "potrzebuję lekarza",
                  "dobranoc",
                  "wezwać policję",
                  "zarezerwować hotel"
                ],
                "correctAnswer": "potrzebuję lekarza",
                "difficulty": 1
              },
              {
                "id": "pl-scenario-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "gdzie jest metro?",
                    "地铁站在哪里？"
                  ],
                  [
                    "wziąć taksówkę",
                    "坐出租车"
                  ],
                  [
                    "potrzebuję lekarza",
                    "我需要医生"
                  ],
                  [
                    "nie czuję się dobrze",
                    "我不舒服"
                  ]
                ]
              },
              {
                "id": "pl-scenario-01-05",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "zarezerwować hotel",
                "difficulty": 2,
                "audioWord": "zarezerwowac hotel"
              },
              {
                "id": "pl-scenario-01-06",
                "type": "repeat",
                "question": "跟读：pokój jednoosobowy",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "pokój jednoosobowy"
              }
            ]
          },
          {
            "levelId": "pl-scenario-02",
            "title": "酒店与应急",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "pl-scenario-01"
            ],
            "questions": [
              {
                "id": "pl-scenario-02-01",
                "type": "translate",
                "question": "地铁站在哪里？",
                "options": [
                  "gdzie jest metro?",
                  "pomocy!",
                  "dzień dobry",
                  "dobranoc"
                ],
                "correctAnswer": "gdzie jest metro?",
                "difficulty": 1
              },
              {
                "id": "pl-scenario-02-02",
                "type": "fill-blank",
                "question": "___ (坐出租车)",
                "options": [
                  "do jutra",
                  "dobranoc",
                  "dzień dobry",
                  "wziąć taksówkę"
                ],
                "correctAnswer": "wziąć taksówkę",
                "difficulty": 2
              },
              {
                "id": "pl-scenario-02-03",
                "type": "translate",
                "question": "我需要医生",
                "options": [
                  "przepraszam",
                  "potrzebuję lekarza",
                  "pomocy!",
                  "zarezerwować hotel"
                ],
                "correctAnswer": "potrzebuję lekarza",
                "difficulty": 1
              },
              {
                "id": "pl-scenario-02-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "gdzie jest metro?",
                    "地铁站在哪里？"
                  ],
                  [
                    "wziąć taksówkę",
                    "坐出租车"
                  ],
                  [
                    "potrzebuję lekarza",
                    "我需要医生"
                  ],
                  [
                    "nie czuję się dobrze",
                    "我不舒服"
                  ]
                ]
              },
              {
                "id": "pl-scenario-02-05",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "zarezerwować hotel",
                "difficulty": 2,
                "audioWord": "zarezerwowac hotel"
              },
              {
                "id": "pl-scenario-02-06",
                "type": "repeat",
                "question": "跟读：pokój jednoosobowy",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "pokój jednoosobowy"
              }
            ]
          },
          {
            "levelId": "pl-scenario-03",
            "title": "就医买药",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "pl-scenario-02"
            ],
            "questions": [
              {
                "id": "pl-scenario-03-01",
                "type": "translate",
                "question": "地铁站在哪里？",
                "options": [
                  "nie czuję się dobrze",
                  "zarezerwować hotel",
                  "do jutra",
                  "gdzie jest metro?"
                ],
                "correctAnswer": "gdzie jest metro?",
                "difficulty": 1
              },
              {
                "id": "pl-scenario-03-02",
                "type": "fill-blank",
                "question": "___ (坐出租车)",
                "options": [
                  "zarezerwować hotel",
                  "pokój jednoosobowy",
                  "wziąć taksówkę",
                  "nie czuję się dobrze"
                ],
                "correctAnswer": "wziąć taksówkę",
                "difficulty": 2
              },
              {
                "id": "pl-scenario-03-03",
                "type": "translate",
                "question": "我需要医生",
                "options": [
                  "potrzebuję lekarza",
                  "dzień dobry",
                  "do jutra",
                  "zarezerwować hotel"
                ],
                "correctAnswer": "potrzebuję lekarza",
                "difficulty": 1
              },
              {
                "id": "pl-scenario-03-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "gdzie jest metro?",
                    "地铁站在哪里？"
                  ],
                  [
                    "wziąć taksówkę",
                    "坐出租车"
                  ],
                  [
                    "potrzebuję lekarza",
                    "我需要医生"
                  ],
                  [
                    "nie czuję się dobrze",
                    "我不舒服"
                  ]
                ]
              },
              {
                "id": "pl-scenario-03-05",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "zarezerwować hotel",
                "difficulty": 2,
                "audioWord": "zarezerwowac hotel"
              },
              {
                "id": "pl-scenario-03-06",
                "type": "repeat",
                "question": "跟读：pokój jednoosobowy",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "pokój jednoosobowy"
              }
            ]
          }
        ]
      },
      {
        "id": "grammar",
        "name": "语法进阶",
        "color": "#F59E0B",
        "levels": [
          {
            "levelId": "pl-grammar-01",
            "title": "动词基础",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "pl-grammar-01-01",
                "type": "translate",
                "question": "去（原形）",
                "options": [
                  "iść",
                  "jeść",
                  "jestem/jest",
                  "jem"
                ],
                "correctAnswer": "iść",
                "difficulty": 1
              },
              {
                "id": "pl-grammar-01-02",
                "type": "fill-blank",
                "question": "___ (我去)",
                "options": [
                  "jestem/jest",
                  "idę",
                  "jem",
                  "idzie"
                ],
                "correctAnswer": "idę",
                "difficulty": 2
              },
              {
                "id": "pl-grammar-01-03",
                "type": "translate",
                "question": "他去",
                "options": [
                  "iść",
                  "jeść",
                  "jem",
                  "idzie"
                ],
                "correctAnswer": "idzie",
                "difficulty": 1
              },
              {
                "id": "pl-grammar-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "iść",
                    "去（原形）"
                  ],
                  [
                    "idę",
                    "我去"
                  ],
                  [
                    "idzie",
                    "他去"
                  ],
                  [
                    "być",
                    "是（原形）"
                  ]
                ]
              },
              {
                "id": "pl-grammar-01-05",
                "type": "dictation",
                "question": "听写：是",
                "correctAnswer": "jestem/jest",
                "difficulty": 2,
                "audioWord": "jestem jest"
              },
              {
                "id": "pl-grammar-01-06",
                "type": "repeat",
                "question": "跟读：jeść",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "jeść"
              }
            ]
          }
        ]
      },
      {
        "id": "culture",
        "name": "文化拓展",
        "color": "#8B5CF6",
        "levels": [
          {
            "levelId": "pl-culture-01",
            "title": "节日与传统",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "pl-culture-01-01",
                "type": "translate",
                "question": "圣诞节",
                "options": [
                  "pierogi",
                  "bigos",
                  "boże narodzenie",
                  "wielkanoc"
                ],
                "correctAnswer": "boże narodzenie",
                "difficulty": 1
              },
              {
                "id": "pl-culture-01-02",
                "type": "fill-blank",
                "question": "___ (复活节)",
                "options": [
                  "boże narodzenie",
                  "bigos",
                  "pierogi",
                  "wielkanoc"
                ],
                "correctAnswer": "wielkanoc",
                "difficulty": 2
              },
              {
                "id": "pl-culture-01-03",
                "type": "translate",
                "question": "波兰饺子",
                "options": [
                  "boże narodzenie",
                  "bigos",
                  "wielkanoc",
                  "pierogi"
                ],
                "correctAnswer": "pierogi",
                "difficulty": 1
              },
              {
                "id": "pl-culture-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "boże narodzenie",
                    "圣诞节"
                  ],
                  [
                    "wielkanoc",
                    "复活节"
                  ],
                  [
                    "pierogi",
                    "波兰饺子"
                  ],
                  [
                    "bigos",
                    "猎人炖肉"
                  ]
                ]
              },
              {
                "id": "pl-culture-01-05",
                "type": "dictation",
                "question": "听写：圣诞节",
                "correctAnswer": "boże narodzenie",
                "difficulty": 2,
                "audioWord": "boze narodzenie"
              },
              {
                "id": "pl-culture-01-06",
                "type": "repeat",
                "question": "跟读：wielkanoc",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "wielkanoc"
              }
            ]
          }
        ]
      }
    ]
  },
  "pt": {
    "themes": [
      {
        "id": "basic",
        "name": "基础词汇",
        "color": "#1D4ED8",
        "levels": [
          {
            "levelId": "pt-basic-01",
            "title": "问候与礼貌",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [],
            "questions": [
              {
                "id": "pt-basic-01-01",
                "type": "translate",
                "question": "是",
                "options": [
                  "obrigado",
                  "sim",
                  "não",
                  "amarelo"
                ],
                "correctAnswer": "sim",
                "difficulty": 1
              },
              {
                "id": "pt-basic-01-02",
                "type": "fill-blank",
                "question": "___ (不是)",
                "options": [
                  "arroz",
                  "branco",
                  "por favor",
                  "não"
                ],
                "correctAnswer": "não",
                "difficulty": 2
              },
              {
                "id": "pt-basic-01-03",
                "type": "translate",
                "question": "再见",
                "options": [
                  "adeus",
                  "branco",
                  "água",
                  "amarelo"
                ],
                "correctAnswer": "adeus",
                "difficulty": 1
              },
              {
                "id": "pt-basic-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "sim",
                    "是"
                  ],
                  [
                    "não",
                    "不是"
                  ],
                  [
                    "adeus",
                    "再见"
                  ],
                  [
                    "por favor",
                    "请"
                  ]
                ]
              },
              {
                "id": "pt-basic-01-05",
                "type": "dictation",
                "question": "听写：一",
                "correctAnswer": "um",
                "difficulty": 2,
                "audioWord": "um"
              },
              {
                "id": "pt-basic-01-06",
                "type": "repeat",
                "question": "跟读：dois",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "dois"
              }
            ]
          },
          {
            "levelId": "pt-basic-02",
            "title": "家庭与人物",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "pt-basic-01"
            ],
            "questions": [
              {
                "id": "pt-basic-02-01",
                "type": "translate",
                "question": "父亲",
                "options": [
                  "pai",
                  "avô",
                  "filho",
                  "filha"
                ],
                "correctAnswer": "pai",
                "difficulty": 1
              },
              {
                "id": "pt-basic-02-02",
                "type": "translate",
                "question": "母亲",
                "options": [
                  "mãe",
                  "irmão",
                  "irmã",
                  "filha"
                ],
                "correctAnswer": "mãe",
                "difficulty": 1
              },
              {
                "id": "pt-basic-02-03",
                "type": "translate",
                "question": "兄弟",
                "options": [
                  "irmão",
                  "avó",
                  "filha",
                  "filho"
                ],
                "correctAnswer": "irmão",
                "difficulty": 1
              },
              {
                "id": "pt-basic-02-04",
                "type": "fill-blank",
                "question": "___ (姐妹)",
                "options": [
                  "irmã",
                  "mãe",
                  "filha",
                  "avó"
                ],
                "correctAnswer": "irmã",
                "difficulty": 2
              },
              {
                "id": "pt-basic-02-05",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "pai",
                    "父亲"
                  ],
                  [
                    "mãe",
                    "母亲"
                  ],
                  [
                    "irmão",
                    "兄弟"
                  ],
                  [
                    "irmã",
                    "姐妹"
                  ]
                ]
              },
              {
                "id": "pt-basic-02-06",
                "type": "dictation",
                "question": "听写：女儿",
                "correctAnswer": "filha",
                "difficulty": 2,
                "audioWord": "filha"
              }
            ]
          },
          {
            "levelId": "pt-basic-03",
            "title": "数字与颜色",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "pt-basic-02"
            ],
            "questions": [
              {
                "id": "pt-basic-03-01",
                "type": "translate",
                "question": "一",
                "options": [
                  "um",
                  "azul",
                  "quatro",
                  "cinco"
                ],
                "correctAnswer": "um",
                "difficulty": 1
              },
              {
                "id": "pt-basic-03-02",
                "type": "translate",
                "question": "二",
                "options": [
                  "dois",
                  "azul",
                  "verde",
                  "quatro"
                ],
                "correctAnswer": "dois",
                "difficulty": 1
              },
              {
                "id": "pt-basic-03-03",
                "type": "fill-blank",
                "question": "___ (三)",
                "options": [
                  "três",
                  "cinco",
                  "vermelho",
                  "verde"
                ],
                "correctAnswer": "três",
                "difficulty": 2
              },
              {
                "id": "pt-basic-03-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "um",
                    "一"
                  ],
                  [
                    "dois",
                    "二"
                  ],
                  [
                    "três",
                    "三"
                  ],
                  [
                    "quatro",
                    "四"
                  ]
                ]
              },
              {
                "id": "pt-basic-03-05",
                "type": "dictation",
                "question": "听写：五",
                "correctAnswer": "cinco",
                "difficulty": 2,
                "audioWord": "cinco"
              },
              {
                "id": "pt-basic-03-06",
                "type": "repeat",
                "question": "跟读：红色",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "vermelho"
              }
            ]
          }
        ]
      },
      {
        "id": "daily",
        "name": "日常对话",
        "color": "#60A5FA",
        "levels": [
          {
            "levelId": "pt-daily-02",
            "title": "购物与消费",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "pt-daily-02-01",
                "type": "translate",
                "question": "我叫…",
                "options": [
                  "eu quero isso",
                  "meu nome é...",
                  "está muito bom",
                  "pode ser mais barato?"
                ],
                "correctAnswer": "meu nome é...",
                "difficulty": 1
              },
              {
                "id": "pt-daily-02-02",
                "type": "fill-blank",
                "question": "___ (很高兴认识你)",
                "options": [
                  "como vai?",
                  "estou perdido",
                  "muito prazer",
                  "é muito caro"
                ],
                "correctAnswer": "muito prazer",
                "difficulty": 2
              },
              {
                "id": "pt-daily-02-03",
                "type": "translate",
                "question": "您好吗？",
                "options": [
                  "eu quero isso",
                  "de onde você é?",
                  "como vai?",
                  "estou perdido"
                ],
                "correctAnswer": "como vai?",
                "difficulty": 1
              },
              {
                "id": "pt-daily-02-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "meu nome é...",
                    "我叫…"
                  ],
                  [
                    "muito prazer",
                    "很高兴认识你"
                  ],
                  [
                    "como vai?",
                    "您好吗？"
                  ],
                  [
                    "de onde você é?",
                    "您从哪里来？"
                  ]
                ]
              },
              {
                "id": "pt-daily-02-05",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "quanto custa?",
                "difficulty": 2,
                "audioWord": "quanto custa"
              },
              {
                "id": "pt-daily-02-06",
                "type": "repeat",
                "question": "跟读：eu quero isso",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "eu quero isso"
              }
            ]
          },
          {
            "levelId": "pt-daily-03",
            "title": "购物与消费",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "pt-daily-02"
            ],
            "questions": [
              {
                "id": "pt-daily-03-01",
                "type": "translate",
                "question": "我叫…",
                "options": [
                  "pode ser mais barato?",
                  "meu nome é...",
                  "eu quero isso",
                  "é muito caro"
                ],
                "correctAnswer": "meu nome é...",
                "difficulty": 1
              },
              {
                "id": "pt-daily-03-02",
                "type": "fill-blank",
                "question": "___ (很高兴认识你)",
                "options": [
                  "eu quero isso",
                  "pode ser mais barato?",
                  "muito prazer",
                  "a conta, por favor"
                ],
                "correctAnswer": "muito prazer",
                "difficulty": 2
              },
              {
                "id": "pt-daily-03-03",
                "type": "translate",
                "question": "您好吗？",
                "options": [
                  "a conta, por favor",
                  "estou perdido",
                  "como vai?",
                  "pode ser mais barato?"
                ],
                "correctAnswer": "como vai?",
                "difficulty": 1
              },
              {
                "id": "pt-daily-03-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "meu nome é...",
                    "我叫…"
                  ],
                  [
                    "muito prazer",
                    "很高兴认识你"
                  ],
                  [
                    "como vai?",
                    "您好吗？"
                  ],
                  [
                    "de onde você é?",
                    "您从哪里来？"
                  ]
                ]
              },
              {
                "id": "pt-daily-03-05",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "quanto custa?",
                "difficulty": 2,
                "audioWord": "quanto custa"
              },
              {
                "id": "pt-daily-03-06",
                "type": "repeat",
                "question": "跟读：eu quero isso",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "eu quero isso"
              }
            ]
          }
        ]
      },
      {
        "id": "scenario",
        "name": "场景实战",
        "color": "#EF4444",
        "levels": [
          {
            "levelId": "pt-scenario-01",
            "title": "交通出行",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "pt-scenario-01-01",
                "type": "translate",
                "question": "地铁站在哪里？",
                "options": [
                  "reservar um hotel",
                  "onde fica o metrô?",
                  "quarto individual",
                  "não me sinto bem"
                ],
                "correctAnswer": "onde fica o metrô?",
                "difficulty": 1
              },
              {
                "id": "pt-scenario-01-02",
                "type": "fill-blank",
                "question": "___ (坐出租车)",
                "options": [
                  "não me sinto bem",
                  "até amanhã",
                  "reservar um hotel",
                  "pegar um táxi"
                ],
                "correctAnswer": "pegar um táxi",
                "difficulty": 2
              },
              {
                "id": "pt-scenario-01-03",
                "type": "translate",
                "question": "我需要医生",
                "options": [
                  "até amanhã",
                  "boa noite",
                  "com licença",
                  "preciso de um médico"
                ],
                "correctAnswer": "preciso de um médico",
                "difficulty": 1
              },
              {
                "id": "pt-scenario-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "onde fica o metrô?",
                    "地铁站在哪里？"
                  ],
                  [
                    "pegar um táxi",
                    "坐出租车"
                  ],
                  [
                    "preciso de um médico",
                    "我需要医生"
                  ],
                  [
                    "não me sinto bem",
                    "我不舒服"
                  ]
                ]
              },
              {
                "id": "pt-scenario-01-05",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "reservar um hotel",
                "difficulty": 2,
                "audioWord": "reservar um hotel"
              },
              {
                "id": "pt-scenario-01-06",
                "type": "repeat",
                "question": "跟读：quarto individual",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "quarto individual"
              }
            ]
          },
          {
            "levelId": "pt-scenario-02",
            "title": "酒店与应急",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "pt-scenario-01"
            ],
            "questions": [
              {
                "id": "pt-scenario-02-01",
                "type": "translate",
                "question": "地铁站在哪里？",
                "options": [
                  "chamar a polícia",
                  "não me sinto bem",
                  "onde fica o metrô?",
                  "até amanhã"
                ],
                "correctAnswer": "onde fica o metrô?",
                "difficulty": 1
              },
              {
                "id": "pt-scenario-02-02",
                "type": "fill-blank",
                "question": "___ (坐出租车)",
                "options": [
                  "bom dia",
                  "não me sinto bem",
                  "até amanhã",
                  "pegar um táxi"
                ],
                "correctAnswer": "pegar um táxi",
                "difficulty": 2
              },
              {
                "id": "pt-scenario-02-03",
                "type": "translate",
                "question": "我需要医生",
                "options": [
                  "preciso de um médico",
                  "com licença",
                  "bom dia",
                  "reservar um hotel"
                ],
                "correctAnswer": "preciso de um médico",
                "difficulty": 1
              },
              {
                "id": "pt-scenario-02-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "onde fica o metrô?",
                    "地铁站在哪里？"
                  ],
                  [
                    "pegar um táxi",
                    "坐出租车"
                  ],
                  [
                    "preciso de um médico",
                    "我需要医生"
                  ],
                  [
                    "não me sinto bem",
                    "我不舒服"
                  ]
                ]
              },
              {
                "id": "pt-scenario-02-05",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "reservar um hotel",
                "difficulty": 2,
                "audioWord": "reservar um hotel"
              },
              {
                "id": "pt-scenario-02-06",
                "type": "repeat",
                "question": "跟读：quarto individual",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "quarto individual"
              }
            ]
          },
          {
            "levelId": "pt-scenario-03",
            "title": "就医买药",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "pt-scenario-02"
            ],
            "questions": [
              {
                "id": "pt-scenario-03-01",
                "type": "translate",
                "question": "地铁站在哪里？",
                "options": [
                  "com licença",
                  "onde fica o metrô?",
                  "reservar um hotel",
                  "boa noite"
                ],
                "correctAnswer": "onde fica o metrô?",
                "difficulty": 1
              },
              {
                "id": "pt-scenario-03-02",
                "type": "fill-blank",
                "question": "___ (坐出租车)",
                "options": [
                  "pegar um táxi",
                  "até amanhã",
                  "socorro!",
                  "bom dia"
                ],
                "correctAnswer": "pegar um táxi",
                "difficulty": 2
              },
              {
                "id": "pt-scenario-03-03",
                "type": "translate",
                "question": "我需要医生",
                "options": [
                  "chamar a polícia",
                  "com licença",
                  "preciso de um médico",
                  "boa noite"
                ],
                "correctAnswer": "preciso de um médico",
                "difficulty": 1
              },
              {
                "id": "pt-scenario-03-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "onde fica o metrô?",
                    "地铁站在哪里？"
                  ],
                  [
                    "pegar um táxi",
                    "坐出租车"
                  ],
                  [
                    "preciso de um médico",
                    "我需要医生"
                  ],
                  [
                    "não me sinto bem",
                    "我不舒服"
                  ]
                ]
              },
              {
                "id": "pt-scenario-03-05",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "reservar um hotel",
                "difficulty": 2,
                "audioWord": "reservar um hotel"
              },
              {
                "id": "pt-scenario-03-06",
                "type": "repeat",
                "question": "跟读：quarto individual",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "quarto individual"
              }
            ]
          }
        ]
      },
      {
        "id": "grammar",
        "name": "语法进阶",
        "color": "#F59E0B",
        "levels": [
          {
            "levelId": "pt-grammar-01",
            "title": "动词基础",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "pt-grammar-01-01",
                "type": "translate",
                "question": "去（原形）",
                "options": [
                  "ser/estar",
                  "ir",
                  "sou/é",
                  "vou"
                ],
                "correctAnswer": "ir",
                "difficulty": 1
              },
              {
                "id": "pt-grammar-01-02",
                "type": "fill-blank",
                "question": "___ (我去)",
                "options": [
                  "como",
                  "ir",
                  "vou",
                  "comer"
                ],
                "correctAnswer": "vou",
                "difficulty": 2
              },
              {
                "id": "pt-grammar-01-03",
                "type": "translate",
                "question": "他/她去",
                "options": [
                  "ser/estar",
                  "sou/é",
                  "vai",
                  "vou"
                ],
                "correctAnswer": "vai",
                "difficulty": 1
              },
              {
                "id": "pt-grammar-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "ir",
                    "去（原形）"
                  ],
                  [
                    "vou",
                    "我去"
                  ],
                  [
                    "vai",
                    "他/她去"
                  ],
                  [
                    "ser/estar",
                    "是"
                  ]
                ]
              },
              {
                "id": "pt-grammar-01-05",
                "type": "dictation",
                "question": "听写：是",
                "correctAnswer": "sou/é",
                "difficulty": 2,
                "audioWord": "sou e"
              },
              {
                "id": "pt-grammar-01-06",
                "type": "repeat",
                "question": "跟读：comer",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "comer"
              }
            ]
          }
        ]
      },
      {
        "id": "culture",
        "name": "文化拓展",
        "color": "#8B5CF6",
        "levels": [
          {
            "levelId": "pt-culture-01",
            "title": "节日与传统",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "pt-culture-01-01",
                "type": "translate",
                "question": "圣诞节",
                "options": [
                  "caipirinha",
                  "pastel",
                  "natal",
                  "carnaval"
                ],
                "correctAnswer": "natal",
                "difficulty": 1
              },
              {
                "id": "pt-culture-01-02",
                "type": "fill-blank",
                "question": "___ (狂欢节)",
                "options": [
                  "pastel",
                  "caipirinha",
                  "carnaval",
                  "natal"
                ],
                "correctAnswer": "carnaval",
                "difficulty": 2
              },
              {
                "id": "pt-culture-01-03",
                "type": "translate",
                "question": "酥饼",
                "options": [
                  "carnaval",
                  "natal",
                  "caipirinha",
                  "pastel"
                ],
                "correctAnswer": "pastel",
                "difficulty": 1
              },
              {
                "id": "pt-culture-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "natal",
                    "圣诞节"
                  ],
                  [
                    "carnaval",
                    "狂欢节"
                  ],
                  [
                    "pastel",
                    "酥饼"
                  ],
                  [
                    "caipirinha",
                    "卡琵莉亚"
                  ]
                ]
              },
              {
                "id": "pt-culture-01-05",
                "type": "dictation",
                "question": "听写：圣诞节",
                "correctAnswer": "natal",
                "difficulty": 2,
                "audioWord": "natal"
              },
              {
                "id": "pt-culture-01-06",
                "type": "repeat",
                "question": "跟读：carnaval",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "carnaval"
              }
            ]
          }
        ]
      }
    ]
  },
  "ru": {
    "themes": [
      {
        "id": "basic",
        "name": "基础词汇",
        "color": "#1D4ED8",
        "levels": [
          {
            "levelId": "ru-basic-01",
            "title": "问候与礼貌",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [],
            "questions": [
              {
                "id": "ru-basic-01-01",
                "type": "translate",
                "question": "是",
                "options": [
                  "четыре",
                  "папа",
                  "пожалуйста",
                  "да"
                ],
                "correctAnswer": "да",
                "difficulty": 1
              },
              {
                "id": "ru-basic-01-02",
                "type": "fill-blank",
                "question": "___ (不是)",
                "options": [
                  "извините",
                  "два",
                  "нет",
                  "да"
                ],
                "correctAnswer": "нет",
                "difficulty": 2
              },
              {
                "id": "ru-basic-01-03",
                "type": "translate",
                "question": "再见",
                "options": [
                  "до свидания",
                  "четыре",
                  "чёрный",
                  "папа"
                ],
                "correctAnswer": "до свидания",
                "difficulty": 1
              },
              {
                "id": "ru-basic-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "да",
                    "是"
                  ],
                  [
                    "нет",
                    "不是"
                  ],
                  [
                    "до свидания",
                    "再见"
                  ],
                  [
                    "пожалуйста",
                    "请"
                  ]
                ]
              },
              {
                "id": "ru-basic-01-05",
                "type": "dictation",
                "question": "听写：一",
                "correctAnswer": "один",
                "difficulty": 2,
                "audioWord": "odin"
              },
              {
                "id": "ru-basic-01-06",
                "type": "repeat",
                "question": "跟读：два",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "два"
              }
            ]
          }
        ]
      },
      {
        "id": "daily",
        "name": "日常对话",
        "color": "#60A5FA",
        "levels": [
          {
            "levelId": "ru-daily-02",
            "title": "购物与消费",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "ru-daily-02-01",
                "type": "translate",
                "question": "我叫…",
                "options": [
                  "Сколько стоит?",
                  "Меня зовут...",
                  "Я заблудился",
                  "Меню, пожалуйста"
                ],
                "correctAnswer": "Меня зовут...",
                "difficulty": 1
              },
              {
                "id": "ru-daily-02-02",
                "type": "fill-blank",
                "question": "___ (很高兴认识你)",
                "options": [
                  "Откуда ты?",
                  "Счёт, пожалуйста",
                  "Очень вкусно",
                  "Очень приятно"
                ],
                "correctAnswer": "Очень приятно",
                "difficulty": 2
              },
              {
                "id": "ru-daily-02-03",
                "type": "translate",
                "question": "你好吗？",
                "options": [
                  "Я хочу это",
                  "Счёт, пожалуйста",
                  "Очень дорого",
                  "Как дела?"
                ],
                "correctAnswer": "Как дела?",
                "difficulty": 1
              },
              {
                "id": "ru-daily-02-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "Меня зовут...",
                    "我叫…"
                  ],
                  [
                    "Очень приятно",
                    "很高兴认识你"
                  ],
                  [
                    "Как дела?",
                    "你好吗？"
                  ],
                  [
                    "Откуда ты?",
                    "你从哪里来？"
                  ]
                ]
              },
              {
                "id": "ru-daily-02-05",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "Сколько стоит?",
                "difficulty": 2,
                "audioWord": "skolko stoit"
              },
              {
                "id": "ru-daily-02-06",
                "type": "repeat",
                "question": "跟读：Я хочу это",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "Я хочу это"
              }
            ]
          },
          {
            "levelId": "ru-daily-03",
            "title": "购物与消费",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "ru-daily-02"
            ],
            "questions": [
              {
                "id": "ru-daily-03-01",
                "type": "translate",
                "question": "我叫…",
                "options": [
                  "Меня зовут...",
                  "Я заблудился",
                  "Меню, пожалуйста",
                  "Очень вкусно"
                ],
                "correctAnswer": "Меня зовут...",
                "difficulty": 1
              },
              {
                "id": "ru-daily-03-02",
                "type": "fill-blank",
                "question": "___ (很高兴认识你)",
                "options": [
                  "Очень приятно",
                  "Я заблудился",
                  "Очень дорого",
                  "Счёт, пожалуйста"
                ],
                "correctAnswer": "Очень приятно",
                "difficulty": 2
              },
              {
                "id": "ru-daily-03-03",
                "type": "translate",
                "question": "你好吗？",
                "options": [
                  "Я заблудился",
                  "Как дела?",
                  "Можно дешевле?",
                  "Сколько стоит?"
                ],
                "correctAnswer": "Как дела?",
                "difficulty": 1
              },
              {
                "id": "ru-daily-03-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "Меня зовут...",
                    "我叫…"
                  ],
                  [
                    "Очень приятно",
                    "很高兴认识你"
                  ],
                  [
                    "Как дела?",
                    "你好吗？"
                  ],
                  [
                    "Откуда ты?",
                    "你从哪里来？"
                  ]
                ]
              },
              {
                "id": "ru-daily-03-05",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "Сколько стоит?",
                "difficulty": 2,
                "audioWord": "skolko stoit"
              },
              {
                "id": "ru-daily-03-06",
                "type": "repeat",
                "question": "跟读：Я хочу это",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "Я хочу это"
              }
            ]
          }
        ]
      },
      {
        "id": "scenario",
        "name": "场景实战",
        "color": "#EF4444",
        "levels": [
          {
            "levelId": "ru-scenario-01",
            "title": "交通出行",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "ru-scenario-01-01",
                "type": "translate",
                "question": "地铁站在哪里？",
                "options": [
                  "Помогите!",
                  "Где метро?",
                  "Доброе утро",
                  "Вызвать полицию"
                ],
                "correctAnswer": "Где метро?",
                "difficulty": 1
              },
              {
                "id": "ru-scenario-01-02",
                "type": "fill-blank",
                "question": "___ (坐出租车)",
                "options": [
                  "Я плохо себя чувствую",
                  "Доброе утро",
                  "Взять такси",
                  "Где метро?"
                ],
                "correctAnswer": "Взять такси",
                "difficulty": 2
              },
              {
                "id": "ru-scenario-01-03",
                "type": "translate",
                "question": "我需要医生",
                "options": [
                  "Взять такси",
                  "Доброе утро",
                  "Спокойной ночи",
                  "Мне нужен врач"
                ],
                "correctAnswer": "Мне нужен врач",
                "difficulty": 1
              },
              {
                "id": "ru-scenario-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "Где метро?",
                    "地铁站在哪里？"
                  ],
                  [
                    "Взять такси",
                    "坐出租车"
                  ],
                  [
                    "Мне нужен врач",
                    "我需要医生"
                  ],
                  [
                    "Я плохо себя чувствую",
                    "我不舒服"
                  ]
                ]
              },
              {
                "id": "ru-scenario-01-05",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "Забронировать отель",
                "difficulty": 2,
                "audioWord": "zabronirovat otyel"
              },
              {
                "id": "ru-scenario-01-06",
                "type": "repeat",
                "question": "跟读：Одноместный номер",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "Одноместный номер"
              }
            ]
          },
          {
            "levelId": "ru-scenario-02",
            "title": "酒店与应急",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "ru-scenario-01"
            ],
            "questions": [
              {
                "id": "ru-scenario-02-01",
                "type": "translate",
                "question": "地铁站在哪里？",
                "options": [
                  "Где метро?",
                  "Я плохо себя чувствую",
                  "Вызвать полицию",
                  "Мне нужен врач"
                ],
                "correctAnswer": "Где метро?",
                "difficulty": 1
              },
              {
                "id": "ru-scenario-02-02",
                "type": "fill-blank",
                "question": "___ (坐出租车)",
                "options": [
                  "Взять такси",
                  "До завтра",
                  "Мне нужен врач",
                  "Вызвать полицию"
                ],
                "correctAnswer": "Взять такси",
                "difficulty": 2
              },
              {
                "id": "ru-scenario-02-03",
                "type": "translate",
                "question": "我需要医生",
                "options": [
                  "Помогите!",
                  "Спокойной ночи",
                  "Доброе утро",
                  "Мне нужен врач"
                ],
                "correctAnswer": "Мне нужен врач",
                "difficulty": 1
              },
              {
                "id": "ru-scenario-02-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "Где метро?",
                    "地铁站在哪里？"
                  ],
                  [
                    "Взять такси",
                    "坐出租车"
                  ],
                  [
                    "Мне нужен врач",
                    "我需要医生"
                  ],
                  [
                    "Я плохо себя чувствую",
                    "我不舒服"
                  ]
                ]
              },
              {
                "id": "ru-scenario-02-05",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "Забронировать отель",
                "difficulty": 2,
                "audioWord": "zabronirovat otyel"
              },
              {
                "id": "ru-scenario-02-06",
                "type": "repeat",
                "question": "跟读：Одноместный номер",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "Одноместный номер"
              }
            ]
          },
          {
            "levelId": "ru-scenario-03",
            "title": "就医买药",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "ru-scenario-02"
            ],
            "questions": [
              {
                "id": "ru-scenario-03-01",
                "type": "translate",
                "question": "地铁站在哪里？",
                "options": [
                  "Одноместный номер",
                  "Извините",
                  "Забронировать отель",
                  "Где метро?"
                ],
                "correctAnswer": "Где метро?",
                "difficulty": 1
              },
              {
                "id": "ru-scenario-03-02",
                "type": "fill-blank",
                "question": "___ (坐出租车)",
                "options": [
                  "Взять такси",
                  "Доброе утро",
                  "Мне нужен врач",
                  "Извините"
                ],
                "correctAnswer": "Взять такси",
                "difficulty": 2
              },
              {
                "id": "ru-scenario-03-03",
                "type": "translate",
                "question": "我需要医生",
                "options": [
                  "Помогите!",
                  "Извините",
                  "Где метро?",
                  "Мне нужен врач"
                ],
                "correctAnswer": "Мне нужен врач",
                "difficulty": 1
              },
              {
                "id": "ru-scenario-03-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "Где метро?",
                    "地铁站在哪里？"
                  ],
                  [
                    "Взять такси",
                    "坐出租车"
                  ],
                  [
                    "Мне нужен врач",
                    "我需要医生"
                  ],
                  [
                    "Я плохо себя чувствую",
                    "我不舒服"
                  ]
                ]
              },
              {
                "id": "ru-scenario-03-05",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "Забронировать отель",
                "difficulty": 2,
                "audioWord": "zabronirovat otyel"
              },
              {
                "id": "ru-scenario-03-06",
                "type": "repeat",
                "question": "跟读：Одноместный номер",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "Одноместный номер"
              }
            ]
          }
        ]
      },
      {
        "id": "grammar",
        "name": "语法进阶",
        "color": "#F59E0B",
        "levels": [
          {
            "levelId": "ru-grammar-01",
            "title": "动词基础",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "ru-grammar-01-01",
                "type": "translate",
                "question": "去（原形）",
                "options": [
                  "идти",
                  "идёт",
                  "есть",
                  "быть"
                ],
                "correctAnswer": "идти",
                "difficulty": 1
              },
              {
                "id": "ru-grammar-01-02",
                "type": "fill-blank",
                "question": "___ (我去)",
                "options": [
                  "идёт",
                  "ем",
                  "иду",
                  "есть"
                ],
                "correctAnswer": "иду",
                "difficulty": 2
              },
              {
                "id": "ru-grammar-01-03",
                "type": "translate",
                "question": "我去",
                "options": [
                  "иду",
                  "есть",
                  "идёт",
                  "идёшь"
                ],
                "correctAnswer": "иду",
                "difficulty": 1
              },
              {
                "id": "ru-grammar-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "идти",
                    "去（原形）"
                  ],
                  [
                    "иду",
                    "我去"
                  ],
                  [
                    "идёт",
                    "他/她去"
                  ],
                  [
                    "быть",
                    "是（原形）"
                  ]
                ]
              },
              {
                "id": "ru-grammar-01-05",
                "type": "dictation",
                "question": "听写：是/有",
                "correctAnswer": "есть",
                "difficulty": 2,
                "audioWord": "yest"
              },
              {
                "id": "ru-grammar-01-06",
                "type": "repeat",
                "question": "跟读：есть",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "есть"
              }
            ]
          },
          {
            "levelId": "ru-grammar-02",
            "title": "名词与形容词",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "ru-grammar-01"
            ],
            "questions": [
              {
                "id": "ru-grammar-02-01",
                "type": "translate",
                "question": "去（原形）",
                "options": [
                  "ем",
                  "идти",
                  "есть",
                  "быть"
                ],
                "correctAnswer": "идти",
                "difficulty": 1
              },
              {
                "id": "ru-grammar-02-02",
                "type": "fill-blank",
                "question": "___ (我去)",
                "options": [
                  "идёт",
                  "быть",
                  "есть",
                  "иду"
                ],
                "correctAnswer": "иду",
                "difficulty": 2
              },
              {
                "id": "ru-grammar-02-03",
                "type": "translate",
                "question": "他/她去",
                "options": [
                  "идёт",
                  "есть",
                  "быть",
                  "идут"
                ],
                "correctAnswer": "идёт",
                "difficulty": 1
              },
              {
                "id": "ru-grammar-02-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "идти",
                    "去（原形）"
                  ],
                  [
                    "иду",
                    "我去"
                  ],
                  [
                    "идёт",
                    "他/她去"
                  ],
                  [
                    "быть",
                    "是（原形）"
                  ]
                ]
              },
              {
                "id": "ru-grammar-02-05",
                "type": "dictation",
                "question": "听写：是/有",
                "correctAnswer": "есть",
                "difficulty": 2,
                "audioWord": "yest"
              },
              {
                "id": "ru-grammar-02-06",
                "type": "repeat",
                "question": "跟读：есть",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "есть"
              }
            ]
          }
        ]
      },
      {
        "id": "culture",
        "name": "文化拓展",
        "color": "#8B5CF6",
        "levels": [
          {
            "levelId": "ru-culture-01",
            "title": "节日与传统",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "ru-culture-01-01",
                "type": "translate",
                "question": "新年",
                "options": [
                  "Балалайка",
                  "Масленица",
                  "Самовар",
                  "Новый год"
                ],
                "correctAnswer": "Новый год",
                "difficulty": 1
              },
              {
                "id": "ru-culture-01-02",
                "type": "fill-blank",
                "question": "___ (谢肉节)",
                "options": [
                  "Новый год",
                  "Самовар",
                  "Масленица",
                  "Балалайка"
                ],
                "correctAnswer": "Масленица",
                "difficulty": 2
              },
              {
                "id": "ru-culture-01-03",
                "type": "translate",
                "question": "巴拉莱卡琴",
                "options": [
                  "Новый год",
                  "Балалайка",
                  "Масленица",
                  "Самовар"
                ],
                "correctAnswer": "Балалайка",
                "difficulty": 1
              },
              {
                "id": "ru-culture-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "Новый год",
                    "新年"
                  ],
                  [
                    "Масленица",
                    "谢肉节"
                  ],
                  [
                    "Балалайка",
                    "巴拉莱卡琴"
                  ],
                  [
                    "Самовар",
                    "茶炊"
                  ]
                ]
              },
              {
                "id": "ru-culture-01-05",
                "type": "dictation",
                "question": "听写：新年",
                "correctAnswer": "Новый год",
                "difficulty": 2,
                "audioWord": "Novyy god"
              },
              {
                "id": "ru-culture-01-06",
                "type": "repeat",
                "question": "跟读：Масленица",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "Масленица"
              }
            ]
          },
          {
            "levelId": "ru-culture-02",
            "title": "美食与文化",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "ru-culture-01"
            ],
            "questions": [
              {
                "id": "ru-culture-02-01",
                "type": "translate",
                "question": "新年",
                "options": [
                  "Новый год",
                  "Масленица",
                  "Балалайка",
                  "Самовар"
                ],
                "correctAnswer": "Новый год",
                "difficulty": 1
              },
              {
                "id": "ru-culture-02-02",
                "type": "fill-blank",
                "question": "___ (谢肉节)",
                "options": [
                  "Балалайка",
                  "Новый год",
                  "Самовар",
                  "Масленица"
                ],
                "correctAnswer": "Масленица",
                "difficulty": 2
              },
              {
                "id": "ru-culture-02-03",
                "type": "translate",
                "question": "巴拉莱卡琴",
                "options": [
                  "Самовар",
                  "Масленица",
                  "Новый год",
                  "Балалайка"
                ],
                "correctAnswer": "Балалайка",
                "difficulty": 1
              },
              {
                "id": "ru-culture-02-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "Новый год",
                    "新年"
                  ],
                  [
                    "Масленица",
                    "谢肉节"
                  ],
                  [
                    "Балалайка",
                    "巴拉莱卡琴"
                  ],
                  [
                    "Самовар",
                    "茶炊"
                  ]
                ]
              },
              {
                "id": "ru-culture-02-05",
                "type": "dictation",
                "question": "听写：新年",
                "correctAnswer": "Новый год",
                "difficulty": 2,
                "audioWord": "Novyy god"
              },
              {
                "id": "ru-culture-02-06",
                "type": "repeat",
                "question": "跟读：Масленица",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "Масленица"
              }
            ]
          }
        ]
      }
    ]
  },
  "th": {
    "themes": [
      {
        "id": "basic",
        "name": "基础词汇",
        "color": "#1D4ED8",
        "levels": [
          {
            "levelId": "th-basic-01",
            "title": "问候与礼貌",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [],
            "questions": [
              {
                "id": "th-basic-01-01",
                "type": "translate",
                "question": "是",
                "options": [
                  "แดง",
                  "ใช่",
                  "น้ำเงิน",
                  "พี่สาว"
                ],
                "correctAnswer": "ใช่",
                "difficulty": 1
              },
              {
                "id": "th-basic-01-02",
                "type": "fill-blank",
                "question": "___ (不是)",
                "options": [
                  "เหลือง",
                  "สอง",
                  "ห้า",
                  "ไม่"
                ],
                "correctAnswer": "ไม่",
                "difficulty": 2
              },
              {
                "id": "th-basic-01-03",
                "type": "translate",
                "question": "再见",
                "options": [
                  "ใช่",
                  "ไม่",
                  "สอง",
                  "ลาก่อน"
                ],
                "correctAnswer": "ลาก่อน",
                "difficulty": 1
              },
              {
                "id": "th-basic-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "ใช่",
                    "是"
                  ],
                  [
                    "ไม่",
                    "不是"
                  ],
                  [
                    "ลาก่อน",
                    "再见"
                  ],
                  [
                    "กรุณา",
                    "请"
                  ]
                ]
              },
              {
                "id": "th-basic-01-05",
                "type": "dictation",
                "question": "听写：一",
                "correctAnswer": "หนึ่ง",
                "difficulty": 2,
                "audioWord": "nueng"
              },
              {
                "id": "th-basic-01-06",
                "type": "repeat",
                "question": "跟读：สอง",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "สอง"
              }
            ]
          },
          {
            "levelId": "th-basic-02",
            "title": "家庭与人物",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "th-basic-01"
            ],
            "questions": [
              {
                "id": "th-basic-02-01",
                "type": "translate",
                "question": "父亲",
                "options": [
                  "พ่อ",
                  "แม่",
                  "พี่ชาย",
                  "ปู่"
                ],
                "correctAnswer": "พ่อ",
                "difficulty": 1
              },
              {
                "id": "th-basic-02-02",
                "type": "translate",
                "question": "母亲",
                "options": [
                  "แม่",
                  "พ่อ",
                  "พี่สาว",
                  "ย่า"
                ],
                "correctAnswer": "แม่",
                "difficulty": 1
              },
              {
                "id": "th-basic-02-03",
                "type": "translate",
                "question": "兄弟",
                "options": [
                  "พี่ชาย",
                  "ลูกสาว",
                  "ย่า",
                  "แม่"
                ],
                "correctAnswer": "พี่ชาย",
                "difficulty": 1
              },
              {
                "id": "th-basic-02-04",
                "type": "fill-blank",
                "question": "___ (姐妹)",
                "options": [
                  "พี่สาว",
                  "ลูกสาว",
                  "แม่",
                  "พ่อ"
                ],
                "correctAnswer": "พี่สาว",
                "difficulty": 2
              },
              {
                "id": "th-basic-02-05",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "พ่อ",
                    "父亲"
                  ],
                  [
                    "แม่",
                    "母亲"
                  ],
                  [
                    "พี่ชาย",
                    "兄弟"
                  ],
                  [
                    "พี่สาว",
                    "姐妹"
                  ]
                ]
              },
              {
                "id": "th-basic-02-06",
                "type": "dictation",
                "question": "听写：女儿",
                "correctAnswer": "ลูกสาว",
                "difficulty": 2,
                "audioWord": "luk sao"
              }
            ]
          },
          {
            "levelId": "th-basic-03",
            "title": "数字与颜色",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "th-basic-02"
            ],
            "questions": [
              {
                "id": "th-basic-03-01",
                "type": "translate",
                "question": "一",
                "options": [
                  "หนึ่ง",
                  "สอง",
                  "สีน้ำเงิน",
                  "สีเขียว"
                ],
                "correctAnswer": "หนึ่ง",
                "difficulty": 1
              },
              {
                "id": "th-basic-03-02",
                "type": "translate",
                "question": "二",
                "options": [
                  "สอง",
                  "สาม",
                  "หนึ่ง",
                  "สีน้ำเงิน"
                ],
                "correctAnswer": "สอง",
                "difficulty": 1
              },
              {
                "id": "th-basic-03-03",
                "type": "fill-blank",
                "question": "___ (三)",
                "options": [
                  "สาม",
                  "สีเขียว",
                  "สี่",
                  "หนึ่ง"
                ],
                "correctAnswer": "สาม",
                "difficulty": 2
              },
              {
                "id": "th-basic-03-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "หนึ่ง",
                    "一"
                  ],
                  [
                    "สอง",
                    "二"
                  ],
                  [
                    "สาม",
                    "三"
                  ],
                  [
                    "สี่",
                    "四"
                  ]
                ]
              },
              {
                "id": "th-basic-03-05",
                "type": "dictation",
                "question": "听写：五",
                "correctAnswer": "ห้า",
                "difficulty": 2,
                "audioWord": "ha"
              },
              {
                "id": "th-basic-03-06",
                "type": "repeat",
                "question": "跟读：红色",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "สีแดง"
              }
            ]
          }
        ]
      },
      {
        "id": "daily",
        "name": "日常对话",
        "color": "#60A5FA",
        "levels": [
          {
            "levelId": "th-daily-02",
            "title": "购物与消费",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "th-daily-02-01",
                "type": "translate",
                "question": "我叫…",
                "options": [
                  "ผมชื่อ...",
                  "ลดได้ไหม",
                  "เท่าไหร่",
                  "อร่อยมาก"
                ],
                "correctAnswer": "ผมชื่อ...",
                "difficulty": 1
              },
              {
                "id": "th-daily-02-02",
                "type": "fill-blank",
                "question": "___ (很高兴认识你)",
                "options": [
                  "ยินดีที่ได้รู้จัก",
                  "มาจากไหน",
                  "เท่าไหร่",
                  "เมนูหน่อย"
                ],
                "correctAnswer": "ยินดีที่ได้รู้จัก",
                "difficulty": 2
              },
              {
                "id": "th-daily-02-03",
                "type": "translate",
                "question": "你好吗？",
                "options": [
                  "สบายดีไหม",
                  "เมนูหน่อย",
                  "ผมชื่อ...",
                  "ยินดีที่ได้รู้จัก"
                ],
                "correctAnswer": "สบายดีไหม",
                "difficulty": 1
              },
              {
                "id": "th-daily-02-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "ผมชื่อ...",
                    "我叫…"
                  ],
                  [
                    "ยินดีที่ได้รู้จัก",
                    "很高兴认识你"
                  ],
                  [
                    "สบายดีไหม",
                    "你好吗？"
                  ],
                  [
                    "มาจากไหน",
                    "你从哪里来？"
                  ]
                ]
              },
              {
                "id": "th-daily-02-05",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "เท่าไหร่",
                "difficulty": 2,
                "audioWord": "thao rai"
              },
              {
                "id": "th-daily-02-06",
                "type": "repeat",
                "question": "跟读：เอาอันนี้",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "เอาอันนี้"
              }
            ]
          },
          {
            "levelId": "th-daily-03",
            "title": "购物与消费",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "th-daily-02"
            ],
            "questions": [
              {
                "id": "th-daily-03-01",
                "type": "translate",
                "question": "我叫…",
                "options": [
                  "หลงทาง",
                  "เท่าไหร่",
                  "แพงมาก",
                  "ผมชื่อ..."
                ],
                "correctAnswer": "ผมชื่อ...",
                "difficulty": 1
              },
              {
                "id": "th-daily-03-02",
                "type": "fill-blank",
                "question": "___ (很高兴认识你)",
                "options": [
                  "เมนูหน่อย",
                  "ยินดีที่ได้รู้จัก",
                  "หลงทาง",
                  "อร่อยมาก"
                ],
                "correctAnswer": "ยินดีที่ได้รู้จัก",
                "difficulty": 2
              },
              {
                "id": "th-daily-03-03",
                "type": "translate",
                "question": "你好吗？",
                "options": [
                  "สบายดีไหม",
                  "ยินดีที่ได้รู้จัก",
                  "มาจากไหน",
                  "ลดได้ไหม"
                ],
                "correctAnswer": "สบายดีไหม",
                "difficulty": 1
              },
              {
                "id": "th-daily-03-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "ผมชื่อ...",
                    "我叫…"
                  ],
                  [
                    "ยินดีที่ได้รู้จัก",
                    "很高兴认识你"
                  ],
                  [
                    "สบายดีไหม",
                    "你好吗？"
                  ],
                  [
                    "มาจากไหน",
                    "你从哪里来？"
                  ]
                ]
              },
              {
                "id": "th-daily-03-05",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "เท่าไหร่",
                "difficulty": 2,
                "audioWord": "thao rai"
              },
              {
                "id": "th-daily-03-06",
                "type": "repeat",
                "question": "跟读：เอาอันนี้",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "เอาอันนี้"
              }
            ]
          }
        ]
      },
      {
        "id": "scenario",
        "name": "场景实战",
        "color": "#EF4444",
        "levels": [
          {
            "levelId": "th-scenario-01",
            "title": "交通出行",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "th-scenario-01-01",
                "type": "translate",
                "question": "地铁站在哪里？",
                "options": [
                  "โทรหาตำรวจ",
                  "ช่วยด้วย!",
                  "รถไฟฟ้าอยู่ไหน",
                  "นั่งแท็กซี่"
                ],
                "correctAnswer": "รถไฟฟ้าอยู่ไหน",
                "difficulty": 1
              },
              {
                "id": "th-scenario-01-02",
                "type": "fill-blank",
                "question": "___ (坐出租车)",
                "options": [
                  "ห้องเดี่ยว",
                  "ราตรีสวัสดิ์",
                  "ช่วยด้วย!",
                  "นั่งแท็กซี่"
                ],
                "correctAnswer": "นั่งแท็กซี่",
                "difficulty": 2
              },
              {
                "id": "th-scenario-01-03",
                "type": "translate",
                "question": "我需要医生",
                "options": [
                  "ห้องเดี่ยว",
                  "นั่งแท็กซี่",
                  "ต้องการหมอ",
                  "ราตรีสวัสดิ์"
                ],
                "correctAnswer": "ต้องการหมอ",
                "difficulty": 1
              },
              {
                "id": "th-scenario-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "รถไฟฟ้าอยู่ไหน",
                    "地铁站在哪里？"
                  ],
                  [
                    "นั่งแท็กซี่",
                    "坐出租车"
                  ],
                  [
                    "ต้องการหมอ",
                    "我需要医生"
                  ],
                  [
                    "ไม่สบาย",
                    "我不舒服"
                  ]
                ]
              },
              {
                "id": "th-scenario-01-05",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "จองโรงแรม",
                "difficulty": 2,
                "audioWord": "jong rong raem"
              },
              {
                "id": "th-scenario-01-06",
                "type": "repeat",
                "question": "跟读：ห้องเดี่ยว",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "ห้องเดี่ยว"
              }
            ]
          },
          {
            "levelId": "th-scenario-02",
            "title": "酒店与应急",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "th-scenario-01"
            ],
            "questions": [
              {
                "id": "th-scenario-02-01",
                "type": "translate",
                "question": "地铁站在哪里？",
                "options": [
                  "ช่วยด้วย!",
                  "ราตรีสวัสดิ์",
                  "รถไฟฟ้าอยู่ไหน",
                  "ขอโทษ"
                ],
                "correctAnswer": "รถไฟฟ้าอยู่ไหน",
                "difficulty": 1
              },
              {
                "id": "th-scenario-02-02",
                "type": "fill-blank",
                "question": "___ (坐出租车)",
                "options": [
                  "พรุ่งนี้เจอกัน",
                  "ราตรีสวัสดิ์",
                  "โทรหาตำรวจ",
                  "นั่งแท็กซี่"
                ],
                "correctAnswer": "นั่งแท็กซี่",
                "difficulty": 2
              },
              {
                "id": "th-scenario-02-03",
                "type": "translate",
                "question": "我需要医生",
                "options": [
                  "ไม่สบาย",
                  "ช่วยด้วย!",
                  "ต้องการหมอ",
                  "สวัสดีตอนเช้า"
                ],
                "correctAnswer": "ต้องการหมอ",
                "difficulty": 1
              },
              {
                "id": "th-scenario-02-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "รถไฟฟ้าอยู่ไหน",
                    "地铁站在哪里？"
                  ],
                  [
                    "นั่งแท็กซี่",
                    "坐出租车"
                  ],
                  [
                    "ต้องการหมอ",
                    "我需要医生"
                  ],
                  [
                    "ไม่สบาย",
                    "我不舒服"
                  ]
                ]
              },
              {
                "id": "th-scenario-02-05",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "จองโรงแรม",
                "difficulty": 2,
                "audioWord": "jong rong raem"
              },
              {
                "id": "th-scenario-02-06",
                "type": "repeat",
                "question": "跟读：ห้องเดี่ยว",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "ห้องเดี่ยว"
              }
            ]
          },
          {
            "levelId": "th-scenario-03",
            "title": "就医买药",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "th-scenario-02"
            ],
            "questions": [
              {
                "id": "th-scenario-03-01",
                "type": "translate",
                "question": "地铁站在哪里？",
                "options": [
                  "รถไฟฟ้าอยู่ไหน",
                  "พรุ่งนี้เจอกัน",
                  "ขอโทษ",
                  "ช่วยด้วย!"
                ],
                "correctAnswer": "รถไฟฟ้าอยู่ไหน",
                "difficulty": 1
              },
              {
                "id": "th-scenario-03-02",
                "type": "fill-blank",
                "question": "___ (坐出租车)",
                "options": [
                  "นั่งแท็กซี่",
                  "พรุ่งนี้เจอกัน",
                  "ช่วยด้วย!",
                  "ราตรีสวัสดิ์"
                ],
                "correctAnswer": "นั่งแท็กซี่",
                "difficulty": 2
              },
              {
                "id": "th-scenario-03-03",
                "type": "translate",
                "question": "我需要医生",
                "options": [
                  "สวัสดีตอนเช้า",
                  "ต้องการหมอ",
                  "ช่วยด้วย!",
                  "รถไฟฟ้าอยู่ไหน"
                ],
                "correctAnswer": "ต้องการหมอ",
                "difficulty": 1
              },
              {
                "id": "th-scenario-03-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "รถไฟฟ้าอยู่ไหน",
                    "地铁站在哪里？"
                  ],
                  [
                    "นั่งแท็กซี่",
                    "坐出租车"
                  ],
                  [
                    "ต้องการหมอ",
                    "我需要医生"
                  ],
                  [
                    "ไม่สบาย",
                    "我不舒服"
                  ]
                ]
              },
              {
                "id": "th-scenario-03-05",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "จองโรงแรม",
                "difficulty": 2,
                "audioWord": "jong rong raem"
              },
              {
                "id": "th-scenario-03-06",
                "type": "repeat",
                "question": "跟读：ห้องเดี่ยว",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "ห้องเดี่ยว"
              }
            ]
          }
        ]
      },
      {
        "id": "grammar",
        "name": "语法进阶",
        "color": "#F59E0B",
        "levels": [
          {
            "levelId": "th-grammar-01",
            "title": "动词基础",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "th-grammar-01-01",
                "type": "translate",
                "question": "去",
                "options": [
                  "อยู่",
                  "มี",
                  "ได้",
                  "ไป"
                ],
                "correctAnswer": "ไป",
                "difficulty": 1
              },
              {
                "id": "th-grammar-01-02",
                "type": "fill-blank",
                "question": "___ (吃)",
                "options": [
                  "เป็น",
                  "อยู่",
                  "ได้",
                  "กิน"
                ],
                "correctAnswer": "กิน",
                "difficulty": 2
              },
              {
                "id": "th-grammar-01-03",
                "type": "translate",
                "question": "是",
                "options": [
                  "มี",
                  "เป็น",
                  "ได้",
                  "กิน"
                ],
                "correctAnswer": "เป็น",
                "difficulty": 1
              },
              {
                "id": "th-grammar-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "ไป",
                    "去"
                  ],
                  [
                    "กิน",
                    "吃"
                  ],
                  [
                    "เป็น",
                    "是"
                  ],
                  [
                    "อยู่",
                    "在"
                  ]
                ]
              },
              {
                "id": "th-grammar-01-05",
                "type": "dictation",
                "question": "听写：有",
                "correctAnswer": "มี",
                "difficulty": 2,
                "audioWord": "mee"
              },
              {
                "id": "th-grammar-01-06",
                "type": "repeat",
                "question": "跟读：ได้",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "ได้"
              }
            ]
          }
        ]
      },
      {
        "id": "culture",
        "name": "文化拓展",
        "color": "#8B5CF6",
        "levels": [
          {
            "levelId": "th-culture-01",
            "title": "节日与传统",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "th-culture-01-01",
                "type": "translate",
                "question": "泼水节",
                "options": [
                  "ต้มยำ",
                  "ผัดไทย",
                  "ลอยกระทง",
                  "สงกรานต์"
                ],
                "correctAnswer": "สงกรานต์",
                "difficulty": 1
              },
              {
                "id": "th-culture-01-02",
                "type": "fill-blank",
                "question": "___ (水灯节)",
                "options": [
                  "ลอยกระทง",
                  "สงกรานต์",
                  "ผัดไทย",
                  "ต้มยำ"
                ],
                "correctAnswer": "ลอยกระทง",
                "difficulty": 2
              },
              {
                "id": "th-culture-01-03",
                "type": "translate",
                "question": "冬阴功",
                "options": [
                  "ต้มยำ",
                  "ลอยกระทง",
                  "สงกรานต์",
                  "ผัดไทย"
                ],
                "correctAnswer": "ต้มยำ",
                "difficulty": 1
              },
              {
                "id": "th-culture-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "สงกรานต์",
                    "泼水节"
                  ],
                  [
                    "ลอยกระทง",
                    "水灯节"
                  ],
                  [
                    "ต้มยำ",
                    "冬阴功"
                  ],
                  [
                    "ผัดไทย",
                    "泰式炒河粉"
                  ]
                ]
              },
              {
                "id": "th-culture-01-05",
                "type": "dictation",
                "question": "听写：泼水节",
                "correctAnswer": "สงกรานต์",
                "difficulty": 2,
                "audioWord": "songkran"
              },
              {
                "id": "th-culture-01-06",
                "type": "repeat",
                "question": "跟读：ลอยกระทง",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "ลอยกระทง"
              }
            ]
          }
        ]
      }
    ]
  },
  "tr": {
    "themes": [
      {
        "id": "basic",
        "name": "基础词汇",
        "color": "#1D4ED8",
        "levels": [
          {
            "levelId": "tr-basic-01",
            "title": "问候与礼貌",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [],
            "questions": [
              {
                "id": "tr-basic-01-01",
                "type": "translate",
                "question": "是",
                "options": [
                  "anne",
                  "evet",
                  "teşekkür ederim",
                  "hayır"
                ],
                "correctAnswer": "evet",
                "difficulty": 1
              },
              {
                "id": "tr-basic-01-02",
                "type": "fill-blank",
                "question": "___ (不是)",
                "options": [
                  "mavi",
                  "hayır",
                  "beyaz",
                  "anne"
                ],
                "correctAnswer": "hayır",
                "difficulty": 2
              },
              {
                "id": "tr-basic-01-03",
                "type": "translate",
                "question": "再见",
                "options": [
                  "kırmızı",
                  "dört",
                  "hoşça kal",
                  "pilav"
                ],
                "correctAnswer": "hoşça kal",
                "difficulty": 1
              },
              {
                "id": "tr-basic-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "evet",
                    "是"
                  ],
                  [
                    "hayır",
                    "不是"
                  ],
                  [
                    "hoşça kal",
                    "再见"
                  ],
                  [
                    "lütfen",
                    "请"
                  ]
                ]
              },
              {
                "id": "tr-basic-01-05",
                "type": "dictation",
                "question": "听写：一",
                "correctAnswer": "bir",
                "difficulty": 2,
                "audioWord": "bir"
              },
              {
                "id": "tr-basic-01-06",
                "type": "repeat",
                "question": "跟读：iki",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "iki"
              }
            ]
          },
          {
            "levelId": "tr-basic-02",
            "title": "家庭与人物",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "tr-basic-01"
            ],
            "questions": [
              {
                "id": "tr-basic-02-01",
                "type": "translate",
                "question": "父亲",
                "options": [
                  "baba",
                  "kız",
                  "erkek kardeş",
                  "kız kardeş"
                ],
                "correctAnswer": "baba",
                "difficulty": 1
              },
              {
                "id": "tr-basic-02-02",
                "type": "translate",
                "question": "母亲",
                "options": [
                  "anne",
                  "dede",
                  "oğul",
                  "erkek kardeş"
                ],
                "correctAnswer": "anne",
                "difficulty": 1
              },
              {
                "id": "tr-basic-02-03",
                "type": "translate",
                "question": "兄弟",
                "options": [
                  "erkek kardeş",
                  "kız",
                  "anne",
                  "nine"
                ],
                "correctAnswer": "erkek kardeş",
                "difficulty": 1
              },
              {
                "id": "tr-basic-02-04",
                "type": "fill-blank",
                "question": "___ (姐妹)",
                "options": [
                  "kız kardeş",
                  "kız",
                  "oğul",
                  "anne"
                ],
                "correctAnswer": "kız kardeş",
                "difficulty": 2
              },
              {
                "id": "tr-basic-02-05",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "baba",
                    "父亲"
                  ],
                  [
                    "anne",
                    "母亲"
                  ],
                  [
                    "erkek kardeş",
                    "兄弟"
                  ],
                  [
                    "kız kardeş",
                    "姐妹"
                  ]
                ]
              },
              {
                "id": "tr-basic-02-06",
                "type": "dictation",
                "question": "听写：女儿",
                "correctAnswer": "kız",
                "difficulty": 2,
                "audioWord": "kiz"
              }
            ]
          },
          {
            "levelId": "tr-basic-03",
            "title": "数字与颜色",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "tr-basic-02"
            ],
            "questions": [
              {
                "id": "tr-basic-03-01",
                "type": "translate",
                "question": "一",
                "options": [
                  "bir",
                  "yeşil",
                  "beş",
                  "mavi"
                ],
                "correctAnswer": "bir",
                "difficulty": 1
              },
              {
                "id": "tr-basic-03-02",
                "type": "translate",
                "question": "二",
                "options": [
                  "iki",
                  "üç",
                  "bir",
                  "mavi"
                ],
                "correctAnswer": "iki",
                "difficulty": 1
              },
              {
                "id": "tr-basic-03-03",
                "type": "fill-blank",
                "question": "___ (三)",
                "options": [
                  "üç",
                  "mavi",
                  "beş",
                  "dört"
                ],
                "correctAnswer": "üç",
                "difficulty": 2
              },
              {
                "id": "tr-basic-03-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "bir",
                    "一"
                  ],
                  [
                    "iki",
                    "二"
                  ],
                  [
                    "üç",
                    "三"
                  ],
                  [
                    "dört",
                    "四"
                  ]
                ]
              },
              {
                "id": "tr-basic-03-05",
                "type": "dictation",
                "question": "听写：五",
                "correctAnswer": "beş",
                "difficulty": 2,
                "audioWord": "bes"
              },
              {
                "id": "tr-basic-03-06",
                "type": "repeat",
                "question": "跟读：红色",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "kırmızı"
              }
            ]
          }
        ]
      },
      {
        "id": "daily",
        "name": "日常对话",
        "color": "#60A5FA",
        "levels": [
          {
            "levelId": "tr-daily-02",
            "title": "购物与消费",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "tr-daily-02-01",
                "type": "translate",
                "question": "我叫…",
                "options": [
                  "benim adım...",
                  "kayboldum",
                  "menü lütfen",
                  "nerelisiniz?"
                ],
                "correctAnswer": "benim adım...",
                "difficulty": 1
              },
              {
                "id": "tr-daily-02-02",
                "type": "fill-blank",
                "question": "___ (很高兴认识你)",
                "options": [
                  "çok lezzetli",
                  "hesap lütfen",
                  "bu ne kadar?",
                  "tanıştığıma memnun oldum"
                ],
                "correctAnswer": "tanıştığıma memnun oldum",
                "difficulty": 2
              },
              {
                "id": "tr-daily-02-03",
                "type": "translate",
                "question": "您好吗？",
                "options": [
                  "hesap lütfen",
                  "çok pahalı",
                  "tanıştığıma memnun oldum",
                  "nasılsınız?"
                ],
                "correctAnswer": "nasılsınız?",
                "difficulty": 1
              },
              {
                "id": "tr-daily-02-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "benim adım...",
                    "我叫…"
                  ],
                  [
                    "tanıştığıma memnun oldum",
                    "很高兴认识你"
                  ],
                  [
                    "nasılsınız?",
                    "您好吗？"
                  ],
                  [
                    "nerelisiniz?",
                    "您从哪里来？"
                  ]
                ]
              },
              {
                "id": "tr-daily-02-05",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "bu ne kadar?",
                "difficulty": 2,
                "audioWord": "bu ne kadar"
              },
              {
                "id": "tr-daily-02-06",
                "type": "repeat",
                "question": "跟读：bunu istiyorum",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "bunu istiyorum"
              }
            ]
          },
          {
            "levelId": "tr-daily-03",
            "title": "购物与消费",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "tr-daily-02"
            ],
            "questions": [
              {
                "id": "tr-daily-03-01",
                "type": "translate",
                "question": "我叫…",
                "options": [
                  "benim adım...",
                  "hesap lütfen",
                  "nerelisiniz?",
                  "çok lezzetli"
                ],
                "correctAnswer": "benim adım...",
                "difficulty": 1
              },
              {
                "id": "tr-daily-03-02",
                "type": "fill-blank",
                "question": "___ (很高兴认识你)",
                "options": [
                  "menü lütfen",
                  "nasılsınız?",
                  "bu ne kadar?",
                  "tanıştığıma memnun oldum"
                ],
                "correctAnswer": "tanıştığıma memnun oldum",
                "difficulty": 2
              },
              {
                "id": "tr-daily-03-03",
                "type": "translate",
                "question": "您好吗？",
                "options": [
                  "menü lütfen",
                  "nasılsınız?",
                  "benim adım...",
                  "nerelisiniz?"
                ],
                "correctAnswer": "nasılsınız?",
                "difficulty": 1
              },
              {
                "id": "tr-daily-03-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "benim adım...",
                    "我叫…"
                  ],
                  [
                    "tanıştığıma memnun oldum",
                    "很高兴认识你"
                  ],
                  [
                    "nasılsınız?",
                    "您好吗？"
                  ],
                  [
                    "nerelisiniz?",
                    "您从哪里来？"
                  ]
                ]
              },
              {
                "id": "tr-daily-03-05",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "bu ne kadar?",
                "difficulty": 2,
                "audioWord": "bu ne kadar"
              },
              {
                "id": "tr-daily-03-06",
                "type": "repeat",
                "question": "跟读：bunu istiyorum",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "bunu istiyorum"
              }
            ]
          }
        ]
      },
      {
        "id": "scenario",
        "name": "场景实战",
        "color": "#EF4444",
        "levels": [
          {
            "levelId": "tr-scenario-01",
            "title": "交通出行",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "tr-scenario-01-01",
                "type": "translate",
                "question": "地铁站在哪里？",
                "options": [
                  "tek kişilik oda",
                  "günaydın",
                  "iyi geceler",
                  "metro nerede?"
                ],
                "correctAnswer": "metro nerede?",
                "difficulty": 1
              },
              {
                "id": "tr-scenario-01-02",
                "type": "fill-blank",
                "question": "___ (坐出租车)",
                "options": [
                  "doktora ihtiyacım var",
                  "otel rezervasyonu",
                  "metro nerede?",
                  "taksi almak"
                ],
                "correctAnswer": "taksi almak",
                "difficulty": 2
              },
              {
                "id": "tr-scenario-01-03",
                "type": "translate",
                "question": "我需要医生",
                "options": [
                  "iyi geceler",
                  "metro nerede?",
                  "taksi almak",
                  "doktora ihtiyacım var"
                ],
                "correctAnswer": "doktora ihtiyacım var",
                "difficulty": 1
              },
              {
                "id": "tr-scenario-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "metro nerede?",
                    "地铁站在哪里？"
                  ],
                  [
                    "taksi almak",
                    "坐出租车"
                  ],
                  [
                    "doktora ihtiyacım var",
                    "我需要医生"
                  ],
                  [
                    "kendimi iyi hissetmiyorum",
                    "我不舒服"
                  ]
                ]
              },
              {
                "id": "tr-scenario-01-05",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "otel rezervasyonu",
                "difficulty": 2,
                "audioWord": "otel rezervasyonu"
              },
              {
                "id": "tr-scenario-01-06",
                "type": "repeat",
                "question": "跟读：tek kişilik oda",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "tek kişilik oda"
              }
            ]
          },
          {
            "levelId": "tr-scenario-02",
            "title": "酒店与应急",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "tr-scenario-01"
            ],
            "questions": [
              {
                "id": "tr-scenario-02-01",
                "type": "translate",
                "question": "地铁站在哪里？",
                "options": [
                  "metro nerede?",
                  "kendimi iyi hissetmiyorum",
                  "polisi aramak",
                  "tek kişilik oda"
                ],
                "correctAnswer": "metro nerede?",
                "difficulty": 1
              },
              {
                "id": "tr-scenario-02-02",
                "type": "fill-blank",
                "question": "___ (坐出租车)",
                "options": [
                  "polisi aramak",
                  "taksi almak",
                  "imdat!",
                  "günaydın"
                ],
                "correctAnswer": "taksi almak",
                "difficulty": 2
              },
              {
                "id": "tr-scenario-02-03",
                "type": "translate",
                "question": "我需要医生",
                "options": [
                  "affedersiniz",
                  "kendimi iyi hissetmiyorum",
                  "doktora ihtiyacım var",
                  "iyi geceler"
                ],
                "correctAnswer": "doktora ihtiyacım var",
                "difficulty": 1
              },
              {
                "id": "tr-scenario-02-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "metro nerede?",
                    "地铁站在哪里？"
                  ],
                  [
                    "taksi almak",
                    "坐出租车"
                  ],
                  [
                    "doktora ihtiyacım var",
                    "我需要医生"
                  ],
                  [
                    "kendimi iyi hissetmiyorum",
                    "我不舒服"
                  ]
                ]
              },
              {
                "id": "tr-scenario-02-05",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "otel rezervasyonu",
                "difficulty": 2,
                "audioWord": "otel rezervasyonu"
              },
              {
                "id": "tr-scenario-02-06",
                "type": "repeat",
                "question": "跟读：tek kişilik oda",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "tek kişilik oda"
              }
            ]
          },
          {
            "levelId": "tr-scenario-03",
            "title": "就医买药",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "tr-scenario-02"
            ],
            "questions": [
              {
                "id": "tr-scenario-03-01",
                "type": "translate",
                "question": "地铁站在哪里？",
                "options": [
                  "affedersiniz",
                  "metro nerede?",
                  "polisi aramak",
                  "iyi geceler"
                ],
                "correctAnswer": "metro nerede?",
                "difficulty": 1
              },
              {
                "id": "tr-scenario-03-02",
                "type": "fill-blank",
                "question": "___ (坐出租车)",
                "options": [
                  "taksi almak",
                  "metro nerede?",
                  "affedersiniz",
                  "tek kişilik oda"
                ],
                "correctAnswer": "taksi almak",
                "difficulty": 2
              },
              {
                "id": "tr-scenario-03-03",
                "type": "translate",
                "question": "我需要医生",
                "options": [
                  "doktora ihtiyacım var",
                  "polisi aramak",
                  "otel rezervasyonu",
                  "iyi geceler"
                ],
                "correctAnswer": "doktora ihtiyacım var",
                "difficulty": 1
              },
              {
                "id": "tr-scenario-03-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "metro nerede?",
                    "地铁站在哪里？"
                  ],
                  [
                    "taksi almak",
                    "坐出租车"
                  ],
                  [
                    "doktora ihtiyacım var",
                    "我需要医生"
                  ],
                  [
                    "kendimi iyi hissetmiyorum",
                    "我不舒服"
                  ]
                ]
              },
              {
                "id": "tr-scenario-03-05",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "otel rezervasyonu",
                "difficulty": 2,
                "audioWord": "otel rezervasyonu"
              },
              {
                "id": "tr-scenario-03-06",
                "type": "repeat",
                "question": "跟读：tek kişilik oda",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "tek kişilik oda"
              }
            ]
          }
        ]
      },
      {
        "id": "grammar",
        "name": "语法进阶",
        "color": "#F59E0B",
        "levels": [
          {
            "levelId": "tr-grammar-01",
            "title": "动词基础",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "tr-grammar-01-01",
                "type": "translate",
                "question": "去（原形）",
                "options": [
                  "olmak",
                  "gidiyor",
                  "yiyorum",
                  "gitmek"
                ],
                "correctAnswer": "gitmek",
                "difficulty": 1
              },
              {
                "id": "tr-grammar-01-02",
                "type": "fill-blank",
                "question": "___ (我去)",
                "options": [
                  "gidiyor",
                  "gitmek",
                  "gidiyorum",
                  "yemek"
                ],
                "correctAnswer": "gidiyorum",
                "difficulty": 2
              },
              {
                "id": "tr-grammar-01-03",
                "type": "translate",
                "question": "他去",
                "options": [
                  "yemek",
                  "gitmek",
                  "im/iz/sin",
                  "gidiyor"
                ],
                "correctAnswer": "gidiyor",
                "difficulty": 1
              },
              {
                "id": "tr-grammar-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "gitmek",
                    "去（原形）"
                  ],
                  [
                    "gidiyorum",
                    "我去"
                  ],
                  [
                    "gidiyor",
                    "他去"
                  ],
                  [
                    "olmak",
                    "是（原形）"
                  ]
                ]
              },
              {
                "id": "tr-grammar-01-05",
                "type": "dictation",
                "question": "听写：是",
                "correctAnswer": "im/iz/sin",
                "difficulty": 2,
                "audioWord": "im iz sin"
              },
              {
                "id": "tr-grammar-01-06",
                "type": "repeat",
                "question": "跟读：yemek",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "yemek"
              }
            ]
          }
        ]
      },
      {
        "id": "culture",
        "name": "文化拓展",
        "color": "#8B5CF6",
        "levels": [
          {
            "levelId": "tr-culture-01",
            "title": "节日与传统",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "tr-culture-01-01",
                "type": "translate",
                "question": "开斋节",
                "options": [
                  "kurban bayramı",
                  "döner kebap",
                  "ramazan bayramı",
                  "baklava"
                ],
                "correctAnswer": "ramazan bayramı",
                "difficulty": 1
              },
              {
                "id": "tr-culture-01-02",
                "type": "fill-blank",
                "question": "___ (宰牲节)",
                "options": [
                  "kurban bayramı",
                  "döner kebap",
                  "ramazan bayramı",
                  "baklava"
                ],
                "correctAnswer": "kurban bayramı",
                "difficulty": 2
              },
              {
                "id": "tr-culture-01-03",
                "type": "translate",
                "question": "巴克拉瓦",
                "options": [
                  "baklava",
                  "kurban bayramı",
                  "döner kebap",
                  "ramazan bayramı"
                ],
                "correctAnswer": "baklava",
                "difficulty": 1
              },
              {
                "id": "tr-culture-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "ramazan bayramı",
                    "开斋节"
                  ],
                  [
                    "kurban bayramı",
                    "宰牲节"
                  ],
                  [
                    "baklava",
                    "巴克拉瓦"
                  ],
                  [
                    "döner kebap",
                    "旋转烤肉"
                  ]
                ]
              },
              {
                "id": "tr-culture-01-05",
                "type": "dictation",
                "question": "听写：开斋节",
                "correctAnswer": "ramazan bayramı",
                "difficulty": 2,
                "audioWord": "ramazan bayrami"
              },
              {
                "id": "tr-culture-01-06",
                "type": "repeat",
                "question": "跟读：kurban bayramı",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "kurban bayramı"
              }
            ]
          }
        ]
      }
    ]
  },
  "vi": {
    "themes": [
      {
        "id": "basic",
        "name": "基础词汇",
        "color": "#1D4ED8",
        "levels": [
          {
            "levelId": "vi-basic-01",
            "title": "问候与礼貌",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [],
            "questions": [
              {
                "id": "vi-basic-01-01",
                "type": "translate",
                "question": "是",
                "options": [
                  "đen",
                  "vâng",
                  "mẹ",
                  "trắng"
                ],
                "correctAnswer": "vâng",
                "difficulty": 1
              },
              {
                "id": "vi-basic-01-02",
                "type": "fill-blank",
                "question": "___ (不是)",
                "options": [
                  "không",
                  "vàng",
                  "năm",
                  "táo"
                ],
                "correctAnswer": "không",
                "difficulty": 2
              },
              {
                "id": "vi-basic-01-03",
                "type": "translate",
                "question": "再见",
                "options": [
                  "tạm biệt",
                  "đen",
                  "một",
                  "nước"
                ],
                "correctAnswer": "tạm biệt",
                "difficulty": 1
              },
              {
                "id": "vi-basic-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "vâng",
                    "是"
                  ],
                  [
                    "không",
                    "不是"
                  ],
                  [
                    "tạm biệt",
                    "再见"
                  ],
                  [
                    "làm ơn",
                    "请"
                  ]
                ]
              },
              {
                "id": "vi-basic-01-05",
                "type": "dictation",
                "question": "听写：一",
                "correctAnswer": "một",
                "difficulty": 2,
                "audioWord": "mot"
              },
              {
                "id": "vi-basic-01-06",
                "type": "repeat",
                "question": "跟读：hai",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "hai"
              }
            ]
          },
          {
            "levelId": "vi-basic-02",
            "title": "家庭与人物",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "vi-basic-01"
            ],
            "questions": [
              {
                "id": "vi-basic-02-01",
                "type": "translate",
                "question": "父亲",
                "options": [
                  "bố",
                  "con trai",
                  "bà",
                  "ông"
                ],
                "correctAnswer": "bố",
                "difficulty": 1
              },
              {
                "id": "vi-basic-02-02",
                "type": "translate",
                "question": "母亲",
                "options": [
                  "mẹ",
                  "bà",
                  "ông",
                  "bố"
                ],
                "correctAnswer": "mẹ",
                "difficulty": 1
              },
              {
                "id": "vi-basic-02-03",
                "type": "translate",
                "question": "兄弟",
                "options": [
                  "anh/em trai",
                  "ông",
                  "bà",
                  "bố"
                ],
                "correctAnswer": "anh/em trai",
                "difficulty": 1
              },
              {
                "id": "vi-basic-02-04",
                "type": "fill-blank",
                "question": "___ (姐妹)",
                "options": [
                  "chị/em gái",
                  "bố",
                  "con trai",
                  "anh/em trai"
                ],
                "correctAnswer": "chị/em gái",
                "difficulty": 2
              },
              {
                "id": "vi-basic-02-05",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "bố",
                    "父亲"
                  ],
                  [
                    "mẹ",
                    "母亲"
                  ],
                  [
                    "anh/em trai",
                    "兄弟"
                  ],
                  [
                    "chị/em gái",
                    "姐妹"
                  ]
                ]
              },
              {
                "id": "vi-basic-02-06",
                "type": "dictation",
                "question": "听写：女儿",
                "correctAnswer": "con gái",
                "difficulty": 2,
                "audioWord": "con gai"
              }
            ]
          },
          {
            "levelId": "vi-basic-03",
            "title": "数字与颜色",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "vi-basic-02"
            ],
            "questions": [
              {
                "id": "vi-basic-03-01",
                "type": "translate",
                "question": "一",
                "options": [
                  "một",
                  "màu xanh lá",
                  "hai",
                  "ba"
                ],
                "correctAnswer": "một",
                "difficulty": 1
              },
              {
                "id": "vi-basic-03-02",
                "type": "translate",
                "question": "二",
                "options": [
                  "hai",
                  "ba",
                  "màu xanh lá",
                  "màu đỏ"
                ],
                "correctAnswer": "hai",
                "difficulty": 1
              },
              {
                "id": "vi-basic-03-03",
                "type": "fill-blank",
                "question": "___ (三)",
                "options": [
                  "ba",
                  "năm",
                  "hai",
                  "màu xanh lá"
                ],
                "correctAnswer": "ba",
                "difficulty": 2
              },
              {
                "id": "vi-basic-03-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "một",
                    "一"
                  ],
                  [
                    "hai",
                    "二"
                  ],
                  [
                    "ba",
                    "三"
                  ],
                  [
                    "bốn",
                    "四"
                  ]
                ]
              },
              {
                "id": "vi-basic-03-05",
                "type": "dictation",
                "question": "听写：五",
                "correctAnswer": "năm",
                "difficulty": 2,
                "audioWord": "nam"
              },
              {
                "id": "vi-basic-03-06",
                "type": "repeat",
                "question": "跟读：红色",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "màu đỏ"
              }
            ]
          }
        ]
      },
      {
        "id": "daily",
        "name": "日常对话",
        "color": "#60A5FA",
        "levels": [
          {
            "levelId": "vi-daily-02",
            "title": "购物与消费",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "vi-daily-02-01",
                "type": "translate",
                "question": "我叫…",
                "options": [
                  "tôi tên là...",
                  "rất ngon",
                  "tôi muốn cái này",
                  "bao nhiêu tiền?"
                ],
                "correctAnswer": "tôi tên là...",
                "difficulty": 1
              },
              {
                "id": "vi-daily-02-02",
                "type": "fill-blank",
                "question": "___ (很高兴认识你)",
                "options": [
                  "tôi bị lạc",
                  "rất vui được gặp bạn",
                  "đắt quá",
                  "cho tôi xem menu"
                ],
                "correctAnswer": "rất vui được gặp bạn",
                "difficulty": 2
              },
              {
                "id": "vi-daily-02-03",
                "type": "translate",
                "question": "你好吗？",
                "options": [
                  "tính tiền",
                  "bạn khỏe không?",
                  "rất ngon",
                  "có giảm giá không?"
                ],
                "correctAnswer": "bạn khỏe không?",
                "difficulty": 1
              },
              {
                "id": "vi-daily-02-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "tôi tên là...",
                    "我叫…"
                  ],
                  [
                    "rất vui được gặp bạn",
                    "很高兴认识你"
                  ],
                  [
                    "bạn khỏe không?",
                    "你好吗？"
                  ],
                  [
                    "bạn đến từ đâu?",
                    "你从哪里来？"
                  ]
                ]
              },
              {
                "id": "vi-daily-02-05",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "bao nhiêu tiền?",
                "difficulty": 2,
                "audioWord": "bao nhieu tien"
              },
              {
                "id": "vi-daily-02-06",
                "type": "repeat",
                "question": "跟读：tôi muốn cái này",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "tôi muốn cái này"
              }
            ]
          },
          {
            "levelId": "vi-daily-03",
            "title": "购物与消费",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "vi-daily-02"
            ],
            "questions": [
              {
                "id": "vi-daily-03-01",
                "type": "translate",
                "question": "我叫…",
                "options": [
                  "tôi bị lạc",
                  "rất vui được gặp bạn",
                  "tôi muốn cái này",
                  "tôi tên là..."
                ],
                "correctAnswer": "tôi tên là...",
                "difficulty": 1
              },
              {
                "id": "vi-daily-03-02",
                "type": "fill-blank",
                "question": "___ (很高兴认识你)",
                "options": [
                  "tôi muốn cái này",
                  "cho tôi xem menu",
                  "rất vui được gặp bạn",
                  "tôi bị lạc"
                ],
                "correctAnswer": "rất vui được gặp bạn",
                "difficulty": 2
              },
              {
                "id": "vi-daily-03-03",
                "type": "translate",
                "question": "你好吗？",
                "options": [
                  "tính tiền",
                  "bạn đến từ đâu?",
                  "tôi muốn cái này",
                  "bạn khỏe không?"
                ],
                "correctAnswer": "bạn khỏe không?",
                "difficulty": 1
              },
              {
                "id": "vi-daily-03-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "tôi tên là...",
                    "我叫…"
                  ],
                  [
                    "rất vui được gặp bạn",
                    "很高兴认识你"
                  ],
                  [
                    "bạn khỏe không?",
                    "你好吗？"
                  ],
                  [
                    "bạn đến từ đâu?",
                    "你从哪里来？"
                  ]
                ]
              },
              {
                "id": "vi-daily-03-05",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "bao nhiêu tiền?",
                "difficulty": 2,
                "audioWord": "bao nhieu tien"
              },
              {
                "id": "vi-daily-03-06",
                "type": "repeat",
                "question": "跟读：tôi muốn cái này",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "tôi muốn cái này"
              }
            ]
          }
        ]
      },
      {
        "id": "scenario",
        "name": "场景实战",
        "color": "#EF4444",
        "levels": [
          {
            "levelId": "vi-scenario-01",
            "title": "交通出行",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "vi-scenario-01-01",
                "type": "translate",
                "question": "地铁站在哪里？",
                "options": [
                  "chúc ngủ ngon",
                  "nhà ga metro ở đâu",
                  "đi taxi",
                  "đặt phòng khách sạn"
                ],
                "correctAnswer": "nhà ga metro ở đâu",
                "difficulty": 1
              },
              {
                "id": "vi-scenario-01-02",
                "type": "fill-blank",
                "question": "___ (坐出租车)",
                "options": [
                  "đi taxi",
                  "nhà ga metro ở đâu",
                  "gọi cảnh sát",
                  "tôi cần bác sĩ"
                ],
                "correctAnswer": "đi taxi",
                "difficulty": 2
              },
              {
                "id": "vi-scenario-01-03",
                "type": "translate",
                "question": "我需要医生",
                "options": [
                  "tôi cần bác sĩ",
                  "tôi không khỏe",
                  "nhà ga metro ở đâu",
                  "đi taxi"
                ],
                "correctAnswer": "tôi cần bác sĩ",
                "difficulty": 1
              },
              {
                "id": "vi-scenario-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "nhà ga metro ở đâu",
                    "地铁站在哪里？"
                  ],
                  [
                    "đi taxi",
                    "坐出租车"
                  ],
                  [
                    "tôi cần bác sĩ",
                    "我需要医生"
                  ],
                  [
                    "tôi không khỏe",
                    "我不舒服"
                  ]
                ]
              },
              {
                "id": "vi-scenario-01-05",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "đặt phòng khách sạn",
                "difficulty": 2,
                "audioWord": "dat phong khach san"
              },
              {
                "id": "vi-scenario-01-06",
                "type": "repeat",
                "question": "跟读：phòng đơn",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "phòng đơn"
              }
            ]
          },
          {
            "levelId": "vi-scenario-02",
            "title": "酒店与应急",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "vi-scenario-01"
            ],
            "questions": [
              {
                "id": "vi-scenario-02-01",
                "type": "translate",
                "question": "地铁站在哪里？",
                "options": [
                  "phòng đơn",
                  "nhà ga metro ở đâu",
                  "chào buổi sáng",
                  "đặt phòng khách sạn"
                ],
                "correctAnswer": "nhà ga metro ở đâu",
                "difficulty": 1
              },
              {
                "id": "vi-scenario-02-02",
                "type": "fill-blank",
                "question": "___ (坐出租车)",
                "options": [
                  "hẹn gặp ngày mai",
                  "tôi cần bác sĩ",
                  "đặt phòng khách sạn",
                  "đi taxi"
                ],
                "correctAnswer": "đi taxi",
                "difficulty": 2
              },
              {
                "id": "vi-scenario-02-03",
                "type": "translate",
                "question": "我需要医生",
                "options": [
                  "nhà ga metro ở đâu",
                  "tôi không khỏe",
                  "tôi cần bác sĩ",
                  "gọi cảnh sát"
                ],
                "correctAnswer": "tôi cần bác sĩ",
                "difficulty": 1
              },
              {
                "id": "vi-scenario-02-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "nhà ga metro ở đâu",
                    "地铁站在哪里？"
                  ],
                  [
                    "đi taxi",
                    "坐出租车"
                  ],
                  [
                    "tôi cần bác sĩ",
                    "我需要医生"
                  ],
                  [
                    "tôi không khỏe",
                    "我不舒服"
                  ]
                ]
              },
              {
                "id": "vi-scenario-02-05",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "đặt phòng khách sạn",
                "difficulty": 2,
                "audioWord": "dat phong khach san"
              },
              {
                "id": "vi-scenario-02-06",
                "type": "repeat",
                "question": "跟读：phòng đơn",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "phòng đơn"
              }
            ]
          },
          {
            "levelId": "vi-scenario-03",
            "title": "就医买药",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "vi-scenario-02"
            ],
            "questions": [
              {
                "id": "vi-scenario-03-01",
                "type": "translate",
                "question": "地铁站在哪里？",
                "options": [
                  "phòng đơn",
                  "xin lỗi",
                  "đi taxi",
                  "nhà ga metro ở đâu"
                ],
                "correctAnswer": "nhà ga metro ở đâu",
                "difficulty": 1
              },
              {
                "id": "vi-scenario-03-02",
                "type": "fill-blank",
                "question": "___ (坐出租车)",
                "options": [
                  "chúc ngủ ngon",
                  "chào buổi sáng",
                  "đi taxi",
                  "hẹn gặp ngày mai"
                ],
                "correctAnswer": "đi taxi",
                "difficulty": 2
              },
              {
                "id": "vi-scenario-03-03",
                "type": "translate",
                "question": "我需要医生",
                "options": [
                  "đi taxi",
                  "phòng đơn",
                  "tôi cần bác sĩ",
                  "đặt phòng khách sạn"
                ],
                "correctAnswer": "tôi cần bác sĩ",
                "difficulty": 1
              },
              {
                "id": "vi-scenario-03-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "nhà ga metro ở đâu",
                    "地铁站在哪里？"
                  ],
                  [
                    "đi taxi",
                    "坐出租车"
                  ],
                  [
                    "tôi cần bác sĩ",
                    "我需要医生"
                  ],
                  [
                    "tôi không khỏe",
                    "我不舒服"
                  ]
                ]
              },
              {
                "id": "vi-scenario-03-05",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "đặt phòng khách sạn",
                "difficulty": 2,
                "audioWord": "dat phong khach san"
              },
              {
                "id": "vi-scenario-03-06",
                "type": "repeat",
                "question": "跟读：phòng đơn",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "phòng đơn"
              }
            ]
          }
        ]
      },
      {
        "id": "grammar",
        "name": "语法进阶",
        "color": "#F59E0B",
        "levels": [
          {
            "levelId": "vi-grammar-01",
            "title": "动词基础",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "vi-grammar-01-01",
                "type": "translate",
                "question": "去",
                "options": [
                  "là",
                  "tốt",
                  "có",
                  "đi"
                ],
                "correctAnswer": "đi",
                "difficulty": 1
              },
              {
                "id": "vi-grammar-01-02",
                "type": "fill-blank",
                "question": "___ (吃)",
                "options": [
                  "ăn",
                  "là",
                  "được",
                  "có"
                ],
                "correctAnswer": "ăn",
                "difficulty": 2
              },
              {
                "id": "vi-grammar-01-03",
                "type": "translate",
                "question": "是",
                "options": [
                  "được",
                  "có",
                  "ở",
                  "là"
                ],
                "correctAnswer": "là",
                "difficulty": 1
              },
              {
                "id": "vi-grammar-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "đi",
                    "去"
                  ],
                  [
                    "ăn",
                    "吃"
                  ],
                  [
                    "là",
                    "是"
                  ],
                  [
                    "có",
                    "有"
                  ]
                ]
              },
              {
                "id": "vi-grammar-01-05",
                "type": "dictation",
                "question": "听写：在",
                "correctAnswer": "ở",
                "difficulty": 2,
                "audioWord": "o"
              },
              {
                "id": "vi-grammar-01-06",
                "type": "repeat",
                "question": "跟读：được",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "được"
              }
            ]
          }
        ]
      },
      {
        "id": "culture",
        "name": "文化拓展",
        "color": "#8B5CF6",
        "levels": [
          {
            "levelId": "vi-culture-01",
            "title": "节日与传统",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "vi-culture-01-01",
                "type": "translate",
                "question": "春节",
                "options": [
                  "trung thu",
                  "phở",
                  "tết",
                  "bánh chưng"
                ],
                "correctAnswer": "tết",
                "difficulty": 1
              },
              {
                "id": "vi-culture-01-02",
                "type": "fill-blank",
                "question": "___ (中秋节)",
                "options": [
                  "trung thu",
                  "bánh chưng",
                  "phở",
                  "tết"
                ],
                "correctAnswer": "trung thu",
                "difficulty": 2
              },
              {
                "id": "vi-culture-01-03",
                "type": "translate",
                "question": "河粉",
                "options": [
                  "trung thu",
                  "phở",
                  "bánh chưng",
                  "tết"
                ],
                "correctAnswer": "phở",
                "difficulty": 1
              },
              {
                "id": "vi-culture-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "tết",
                    "春节"
                  ],
                  [
                    "trung thu",
                    "中秋节"
                  ],
                  [
                    "phở",
                    "河粉"
                  ],
                  [
                    "bánh chưng",
                    "粽子"
                  ]
                ]
              },
              {
                "id": "vi-culture-01-05",
                "type": "dictation",
                "question": "听写：春节",
                "correctAnswer": "tết",
                "difficulty": 2,
                "audioWord": "tet"
              },
              {
                "id": "vi-culture-01-06",
                "type": "repeat",
                "question": "跟读：trung thu",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "trung thu"
              }
            ]
          }
        ]
      }
    ]
  },
  "yue": {
    "themes": [
      {
        "id": "basic",
        "name": "基础词汇",
        "color": "#10B981",
        "levels": [
          {
            "levelId": "yue-basic-04",
            "title": "问候与礼貌",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [],
            "questions": [
              {
                "id": "yue-basic-04-01",
                "type": "translate",
                "question": "是",
                "options": [
                  "请",
                  "系",
                  "朋友",
                  "妈妈"
                ],
                "correctAnswer": "系",
                "difficulty": 1
              },
              {
                "id": "yue-basic-04-02",
                "type": "fill-blank",
                "question": "___ (不是)",
                "options": [
                  "请",
                  "唔系",
                  "苹果",
                  "五"
                ],
                "correctAnswer": "唔系",
                "difficulty": 2
              },
              {
                "id": "yue-basic-04-03",
                "type": "translate",
                "question": "晚安",
                "options": [
                  "蓝色",
                  "饭",
                  "早唞",
                  "朋友"
                ],
                "correctAnswer": "早唞",
                "difficulty": 1
              },
              {
                "id": "yue-basic-04-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "系",
                    "是"
                  ],
                  [
                    "唔系",
                    "不是"
                  ],
                  [
                    "早唞",
                    "晚安"
                  ],
                  [
                    "请",
                    "请"
                  ]
                ]
              },
              {
                "id": "yue-basic-04-05",
                "type": "dictation",
                "question": "听写：一",
                "correctAnswer": "一",
                "difficulty": 2,
                "audioWord": "jat1"
              },
              {
                "id": "yue-basic-04-06",
                "type": "repeat",
                "question": "跟读：二",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "二"
              }
            ]
          },
          {
            "levelId": "yue-basic-05",
            "title": "颜色与形状",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "yue-basic-04"
            ],
            "questions": [
              {
                "id": "yue-basic-05-01",
                "type": "translate",
                "question": "红色",
                "options": [
                  "红色",
                  "蓝色",
                  "绿色",
                  "黄色"
                ],
                "correctAnswer": "红色",
                "difficulty": 1
              },
              {
                "id": "yue-basic-05-02",
                "type": "fill-blank",
                "question": "___ (蓝色)",
                "options": [
                  "红色",
                  "蓝色",
                  "绿色",
                  "黄色"
                ],
                "correctAnswer": "蓝色",
                "difficulty": 2
              },
              {
                "id": "yue-basic-05-03",
                "type": "translate",
                "question": "圆形",
                "options": [
                  "圆形",
                  "方形",
                  "三角形",
                  "长方形"
                ],
                "correctAnswer": "圆形",
                "difficulty": 1
              },
              {
                "id": "yue-basic-05-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "红色",
                    "红色"
                  ],
                  [
                    "蓝色",
                    "蓝色"
                  ],
                  [
                    "圆形",
                    "圆形"
                  ],
                  [
                    "方形",
                    "方形"
                  ]
                ]
              },
              {
                "id": "yue-basic-05-05",
                "type": "dictation",
                "question": "听写：绿色",
                "correctAnswer": "绿色",
                "difficulty": 2,
                "audioWord": "luk6 sik1"
              },
              {
                "id": "yue-basic-05-06",
                "type": "repeat",
                "question": "跟读：黄色",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "黄色"
              }
            ]
          }
        ]
      },
      {
        "id": "daily",
        "name": "日常对话",
        "color": "#6366F1",
        "levels": [
          {
            "levelId": "yue-daily-02",
            "title": "自我介绍",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "yue-daily-02-01",
                "type": "translate",
                "question": "我叫…",
                "options": [
                  "我叫做...",
                  "平啲得唔得呀？",
                  "好高兴认识你",
                  "几钱呀？"
                ],
                "correctAnswer": "我叫做...",
                "difficulty": 1
              },
              {
                "id": "yue-daily-02-02",
                "type": "fill-blank",
                "question": "___ (很高兴认识你)",
                "options": [
                  "我叫做...",
                  "好高兴认识你",
                  "几钱呀？",
                  "平啲得唔得呀？"
                ],
                "correctAnswer": "好高兴认识你",
                "difficulty": 2
              },
              {
                "id": "yue-daily-02-03",
                "type": "translate",
                "question": "你好吗？",
                "options": [
                  "你好吗？",
                  "好高兴认识你",
                  "埋单",
                  "好好食"
                ],
                "correctAnswer": "你好吗？",
                "difficulty": 1
              },
              {
                "id": "yue-daily-02-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "我叫做...",
                    "我叫…"
                  ],
                  [
                    "好高兴认识你",
                    "很高兴认识你"
                  ],
                  [
                    "你好吗？",
                    "你好吗？"
                  ],
                  [
                    "你系边度嚟㗎？",
                    "你从哪里来？"
                  ]
                ]
              },
              {
                "id": "yue-daily-02-05",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "几钱呀？",
                "difficulty": 2,
                "audioWord": "gei2 cin2 aa3"
              },
              {
                "id": "yue-daily-02-06",
                "type": "repeat",
                "question": "跟读：我要呢个",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "我要呢个"
              }
            ]
          },
          {
            "levelId": "yue-daily-03",
            "title": "购物与消费",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "yue-daily-02"
            ],
            "questions": [
              {
                "id": "yue-daily-03-01",
                "type": "translate",
                "question": "我叫…",
                "options": [
                  "我叫做...",
                  "几钱呀？",
                  "你好吗？",
                  "俾张餐牌我"
                ],
                "correctAnswer": "我叫做...",
                "difficulty": 1
              },
              {
                "id": "yue-daily-03-02",
                "type": "fill-blank",
                "question": "___ (很高兴认识你)",
                "options": [
                  "埋单",
                  "好高兴认识你",
                  "太贵喇",
                  "平啲得唔得呀？"
                ],
                "correctAnswer": "好高兴认识你",
                "difficulty": 2
              },
              {
                "id": "yue-daily-03-03",
                "type": "translate",
                "question": "你好吗？",
                "options": [
                  "你好吗？",
                  "俾张餐牌我",
                  "我荡失路喇",
                  "太贵喇"
                ],
                "correctAnswer": "你好吗？",
                "difficulty": 1
              },
              {
                "id": "yue-daily-03-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "我叫做...",
                    "我叫…"
                  ],
                  [
                    "好高兴认识你",
                    "很高兴认识你"
                  ],
                  [
                    "你好吗？",
                    "你好吗？"
                  ],
                  [
                    "你系边度嚟㗎？",
                    "你从哪里来？"
                  ]
                ]
              },
              {
                "id": "yue-daily-03-05",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "几钱呀？",
                "difficulty": 2,
                "audioWord": "gei2 cin2 aa3"
              },
              {
                "id": "yue-daily-03-06",
                "type": "repeat",
                "question": "跟读：我要呢个",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "我要呢个"
              }
            ]
          },
          {
            "levelId": "yue-daily-04",
            "title": "餐厅与点餐",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "yue-daily-03"
            ],
            "questions": [
              {
                "id": "yue-daily-04-01",
                "type": "translate",
                "question": "俾张餐牌我",
                "options": [
                  "俾张餐牌我",
                  "埋单",
                  "几钱呀？",
                  "我叫做..."
                ],
                "correctAnswer": "俾张餐牌我",
                "difficulty": 1
              },
              {
                "id": "yue-daily-04-02",
                "type": "fill-blank",
                "question": "___ (埋单)",
                "options": [
                  "俾张餐牌我",
                  "埋单",
                  "几钱呀？",
                  "平啲得唔得呀？"
                ],
                "correctAnswer": "埋单",
                "difficulty": 2
              },
              {
                "id": "yue-daily-04-03",
                "type": "translate",
                "question": "太好食喇",
                "options": [
                  "太好食喇",
                  "我荡失路喇",
                  "太贵喇",
                  "平啲得唔得呀？"
                ],
                "correctAnswer": "太好食喇",
                "difficulty": 1
              },
              {
                "id": "yue-daily-04-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "俾张餐牌我",
                    "给我菜单"
                  ],
                  [
                    "埋单",
                    "结账"
                  ],
                  [
                    "太好食喇",
                    "太好吃了"
                  ],
                  [
                    "平啲得唔得呀？",
                    "能便宜点吗？"
                  ]
                ]
              },
              {
                "id": "yue-daily-04-05",
                "type": "dictation",
                "question": "听写：我唔要辣",
                "correctAnswer": "我唔要辣",
                "difficulty": 2,
                "audioWord": "ngo5 m4 jiu3 laat6"
              },
              {
                "id": "yue-daily-04-06",
                "type": "repeat",
                "question": "跟读：一杯冻柠茶",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "一杯冻柠茶"
              }
            ]
          }
        ]
      },
      {
        "id": "scenario",
        "name": "场景实战",
        "color": "#EF4444",
        "levels": [
          {
            "levelId": "yue-scenario-01",
            "title": "交通出行",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "yue-scenario-01-01",
                "type": "translate",
                "question": "地铁站在哪里？",
                "options": [
                  "唔该借借",
                  "地铁站喺边呀？",
                  "我要睇医生",
                  "听日见"
                ],
                "correctAnswer": "地铁站喺边呀？",
                "difficulty": 1
              },
              {
                "id": "yue-scenario-01-02",
                "type": "fill-blank",
                "question": "___ (坐出租车)",
                "options": [
                  "单人房",
                  "搭的士",
                  "我要睇医生",
                  "订酒店"
                ],
                "correctAnswer": "搭的士",
                "difficulty": 2
              },
              {
                "id": "yue-scenario-01-03",
                "type": "translate",
                "question": "我需要医生",
                "options": [
                  "我要睇医生",
                  "听日见",
                  "报警",
                  "早唞"
                ],
                "correctAnswer": "我要睇医生",
                "difficulty": 1
              },
              {
                "id": "yue-scenario-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "地铁站喺边呀？",
                    "地铁站在哪里？"
                  ],
                  [
                    "搭的士",
                    "坐出租车"
                  ],
                  [
                    "我要睇医生",
                    "我需要医生"
                  ],
                  [
                    "我唔舒服",
                    "我不舒服"
                  ]
                ]
              },
              {
                "id": "yue-scenario-01-05",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "订酒店",
                "difficulty": 2,
                "audioWord": "deng6 zau2 dim3"
              },
              {
                "id": "yue-scenario-01-06",
                "type": "repeat",
                "question": "跟读：单人房",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "单人房"
              }
            ]
          },
          {
            "levelId": "yue-scenario-02",
            "title": "酒店与应急",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "yue-scenario-01"
            ],
            "questions": [
              {
                "id": "yue-scenario-02-01",
                "type": "translate",
                "question": "地铁站在哪里？",
                "options": [
                  "早晨",
                  "地铁站喺边呀？",
                  "我唔舒服",
                  "报警"
                ],
                "correctAnswer": "地铁站喺边呀？",
                "difficulty": 1
              },
              {
                "id": "yue-scenario-02-02",
                "type": "fill-blank",
                "question": "___ (坐出租车)",
                "options": [
                  "搭的士",
                  "单人房",
                  "我唔舒服",
                  "早晨"
                ],
                "correctAnswer": "搭的士",
                "difficulty": 2
              },
              {
                "id": "yue-scenario-02-03",
                "type": "translate",
                "question": "我需要医生",
                "options": [
                  "地铁站喺边呀？",
                  "救命呀！",
                  "听日见",
                  "我要睇医生"
                ],
                "correctAnswer": "我要睇医生",
                "difficulty": 1
              },
              {
                "id": "yue-scenario-02-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "地铁站喺边呀？",
                    "地铁站在哪里？"
                  ],
                  [
                    "搭的士",
                    "坐出租车"
                  ],
                  [
                    "我要睇医生",
                    "我需要医生"
                  ],
                  [
                    "我唔舒服",
                    "我不舒服"
                  ]
                ]
              },
              {
                "id": "yue-scenario-02-05",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "订酒店",
                "difficulty": 2,
                "audioWord": "deng6 zau2 dim3"
              },
              {
                "id": "yue-scenario-02-06",
                "type": "repeat",
                "question": "跟读：单人房",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "单人房"
              }
            ]
          },
          {
            "levelId": "yue-scenario-03",
            "title": "就医买药",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "yue-scenario-02"
            ],
            "questions": [
              {
                "id": "yue-scenario-03-01",
                "type": "translate",
                "question": "地铁站在哪里？",
                "options": [
                  "地铁站喺边呀？",
                  "报警",
                  "订酒店",
                  "早唞"
                ],
                "correctAnswer": "地铁站喺边呀？",
                "difficulty": 1
              },
              {
                "id": "yue-scenario-03-02",
                "type": "fill-blank",
                "question": "___ (坐出租车)",
                "options": [
                  "听日见",
                  "早晨",
                  "搭的士",
                  "报警"
                ],
                "correctAnswer": "搭的士",
                "difficulty": 2
              },
              {
                "id": "yue-scenario-03-03",
                "type": "translate",
                "question": "我需要医生",
                "options": [
                  "地铁站喺边呀？",
                  "订酒店",
                  "我要睇医生",
                  "单人房"
                ],
                "correctAnswer": "我要睇医生",
                "difficulty": 1
              },
              {
                "id": "yue-scenario-03-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "地铁站喺边呀？",
                    "地铁站在哪里？"
                  ],
                  [
                    "搭的士",
                    "坐出租车"
                  ],
                  [
                    "我要睇医生",
                    "我需要医生"
                  ],
                  [
                    "我唔舒服",
                    "我不舒服"
                  ]
                ]
              },
              {
                "id": "yue-scenario-03-05",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "订酒店",
                "difficulty": 2,
                "audioWord": "deng6 zau2 dim3"
              },
              {
                "id": "yue-scenario-03-06",
                "type": "repeat",
                "question": "跟读：单人房",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "单人房"
              }
            ]
          }
        ]
      },
      {
        "id": "grammar",
        "name": "语法进阶",
        "color": "#F59E0B",
        "levels": [
          {
            "levelId": "yue-grammar-01",
            "title": "动词基础",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "yue-grammar-01-01",
                "type": "translate",
                "question": "去",
                "options": [
                  "系",
                  "得",
                  "冇",
                  "去"
                ],
                "correctAnswer": "去",
                "difficulty": 1
              },
              {
                "id": "yue-grammar-01-02",
                "type": "fill-blank",
                "question": "___ (吃)",
                "options": [
                  "唔得",
                  "有",
                  "得",
                  "食"
                ],
                "correctAnswer": "食",
                "difficulty": 2
              },
              {
                "id": "yue-grammar-01-03",
                "type": "translate",
                "question": "是",
                "options": [
                  "得",
                  "冇",
                  "食",
                  "系"
                ],
                "correctAnswer": "系",
                "difficulty": 1
              },
              {
                "id": "yue-grammar-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "去",
                    "去"
                  ],
                  [
                    "食",
                    "吃"
                  ],
                  [
                    "系",
                    "是"
                  ],
                  [
                    "有",
                    "有"
                  ]
                ]
              },
              {
                "id": "yue-grammar-01-05",
                "type": "dictation",
                "question": "听写：没有",
                "correctAnswer": "冇",
                "difficulty": 2,
                "audioWord": "mou5"
              },
              {
                "id": "yue-grammar-01-06",
                "type": "repeat",
                "question": "跟读：得",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "得"
              }
            ]
          }
        ]
      },
      {
        "id": "culture",
        "name": "文化拓展",
        "color": "#8B5CF6",
        "levels": [
          {
            "levelId": "yue-culture-01",
            "title": "节日与传统",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "yue-culture-01-01",
                "type": "translate",
                "question": "农历新年",
                "options": [
                  "奶茶",
                  "农历新年",
                  "点心",
                  "中秋"
                ],
                "correctAnswer": "农历新年",
                "difficulty": 1
              },
              {
                "id": "yue-culture-01-02",
                "type": "fill-blank",
                "question": "___ (中秋节)",
                "options": [
                  "中秋",
                  "奶茶",
                  "农历新年",
                  "点心"
                ],
                "correctAnswer": "中秋",
                "difficulty": 2
              },
              {
                "id": "yue-culture-01-03",
                "type": "translate",
                "question": "点心",
                "options": [
                  "农历新年",
                  "中秋",
                  "点心",
                  "奶茶"
                ],
                "correctAnswer": "点心",
                "difficulty": 1
              },
              {
                "id": "yue-culture-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "农历新年",
                    "农历新年"
                  ],
                  [
                    "中秋",
                    "中秋节"
                  ],
                  [
                    "点心",
                    "点心"
                  ],
                  [
                    "奶茶",
                    "奶茶"
                  ]
                ]
              },
              {
                "id": "yue-culture-01-05",
                "type": "dictation",
                "question": "听写：农历新年",
                "correctAnswer": "农历新年",
                "difficulty": 2,
                "audioWord": "nung4 lik3 san1 nin4"
              },
              {
                "id": "yue-culture-01-06",
                "type": "repeat",
                "question": "跟读：中秋",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "中秋"
              }
            ]
          }
        ]
      }
    ]
  },
  "zh-CN": {
    "themes": [
      {
        "id": "basic",
        "name": "基础词汇",
        "color": "#10B981",
        "levels": [
          {
            "levelId": "zh-CN-basic-01",
            "title": "问候与礼貌",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [],
            "questions": [
              {
                "id": "zh-CN-basic-01-01",
                "type": "translate",
                "question": "Please",
                "options": [
                  "米饭",
                  "你好",
                  "请",
                  "是"
                ],
                "correctAnswer": "请",
                "difficulty": 1
              },
              {
                "id": "zh-CN-basic-01-02",
                "type": "fill-blank",
                "question": "___ (One)",
                "options": [
                  "是",
                  "不是",
                  "姐姐",
                  "一"
                ],
                "correctAnswer": "一",
                "difficulty": 2
              },
              {
                "id": "zh-CN-basic-01-03",
                "type": "translate",
                "question": "Two",
                "options": [
                  "对不起",
                  "你好",
                  "二",
                  "谢谢"
                ],
                "correctAnswer": "二",
                "difficulty": 1
              },
              {
                "id": "zh-CN-basic-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "请",
                    "Please"
                  ],
                  [
                    "一",
                    "One"
                  ],
                  [
                    "二",
                    "Two"
                  ],
                  [
                    "三",
                    "Three"
                  ]
                ]
              },
              {
                "id": "zh-CN-basic-01-05",
                "type": "dictation",
                "question": "听写：Four",
                "correctAnswer": "四",
                "difficulty": 2,
                "audioWord": "sì"
              },
              {
                "id": "zh-CN-basic-01-06",
                "type": "repeat",
                "question": "跟读：五",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "五"
              }
            ]
          },
          {
            "levelId": "zh-CN-basic-02",
            "title": "数字与颜色",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "zh-CN-basic-01"
            ],
            "questions": [
              {
                "id": "zh-CN-basic-02-01",
                "type": "translate",
                "question": "Red",
                "options": [
                  "请",
                  "苹果",
                  "红色",
                  "爸爸"
                ],
                "correctAnswer": "红色",
                "difficulty": 1
              },
              {
                "id": "zh-CN-basic-02-02",
                "type": "fill-blank",
                "question": "___ (Blue)",
                "options": [
                  "二",
                  "面包",
                  "朋友",
                  "蓝色"
                ],
                "correctAnswer": "蓝色",
                "difficulty": 2
              },
              {
                "id": "zh-CN-basic-02-03",
                "type": "translate",
                "question": "Green",
                "options": [
                  "二",
                  "绿色",
                  "不是",
                  "四"
                ],
                "correctAnswer": "绿色",
                "difficulty": 1
              },
              {
                "id": "zh-CN-basic-02-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "红色",
                    "Red"
                  ],
                  [
                    "蓝色",
                    "Blue"
                  ],
                  [
                    "绿色",
                    "Green"
                  ],
                  [
                    "黄色",
                    "Yellow"
                  ]
                ]
              },
              {
                "id": "zh-CN-basic-02-05",
                "type": "dictation",
                "question": "听写：Black",
                "correctAnswer": "黑色",
                "difficulty": 2,
                "audioWord": "hēisè"
              },
              {
                "id": "zh-CN-basic-02-06",
                "type": "repeat",
                "question": "跟读：白色",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "白色"
              }
            ]
          },
          {
            "levelId": "zh-CN-basic-03",
            "title": "家庭与人物",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "zh-CN-basic-02"
            ],
            "questions": [
              {
                "id": "zh-CN-basic-03-01",
                "type": "translate",
                "question": "Apple",
                "options": [
                  "苹果",
                  "是",
                  "对不起",
                  "红色"
                ],
                "correctAnswer": "苹果",
                "difficulty": 1
              },
              {
                "id": "zh-CN-basic-03-02",
                "type": "fill-blank",
                "question": "___ (Bread)",
                "options": [
                  "朋友",
                  "面包",
                  "谢谢",
                  "姐姐"
                ],
                "correctAnswer": "面包",
                "difficulty": 2
              },
              {
                "id": "zh-CN-basic-03-03",
                "type": "translate",
                "question": "Water",
                "options": [
                  "水",
                  "红色",
                  "白色",
                  "对不起"
                ],
                "correctAnswer": "水",
                "difficulty": 1
              },
              {
                "id": "zh-CN-basic-03-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "苹果",
                    "Apple"
                  ],
                  [
                    "面包",
                    "Bread"
                  ],
                  [
                    "水",
                    "Water"
                  ],
                  [
                    "米饭",
                    "Rice"
                  ]
                ]
              },
              {
                "id": "zh-CN-basic-03-05",
                "type": "dictation",
                "question": "听写：Mother",
                "correctAnswer": "妈妈",
                "difficulty": 2,
                "audioWord": "māma"
              },
              {
                "id": "zh-CN-basic-03-06",
                "type": "repeat",
                "question": "跟读：爸爸",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "爸爸"
              }
            ]
          },
          {
            "levelId": "zh-CN-basic-04",
            "title": "食物与饮料",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "zh-CN-basic-03"
            ],
            "questions": [
              {
                "id": "zh-CN-basic-04-01",
                "type": "translate",
                "question": "Yes",
                "options": [
                  "面包",
                  "一",
                  "爸爸",
                  "是"
                ],
                "correctAnswer": "是",
                "difficulty": 1
              },
              {
                "id": "zh-CN-basic-04-02",
                "type": "fill-blank",
                "question": "___ (No)",
                "options": [
                  "四",
                  "对不起",
                  "不是",
                  "哥哥"
                ],
                "correctAnswer": "不是",
                "difficulty": 2
              },
              {
                "id": "zh-CN-basic-04-03",
                "type": "translate",
                "question": "Goodbye",
                "options": [
                  "米饭",
                  "三",
                  "再见",
                  "黄色"
                ],
                "correctAnswer": "再见",
                "difficulty": 1
              },
              {
                "id": "zh-CN-basic-04-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "是",
                    "Yes"
                  ],
                  [
                    "不是",
                    "No"
                  ],
                  [
                    "再见",
                    "Goodbye"
                  ],
                  [
                    "请",
                    "Please"
                  ]
                ]
              },
              {
                "id": "zh-CN-basic-04-05",
                "type": "dictation",
                "question": "听写：One",
                "correctAnswer": "一",
                "difficulty": 2,
                "audioWord": "yī"
              },
              {
                "id": "zh-CN-basic-04-06",
                "type": "repeat",
                "question": "跟读：二",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "二"
              }
            ]
          }
        ]
      },
      {
        "id": "daily",
        "name": "日常对话",
        "color": "#6366F1",
        "levels": [
          {
            "levelId": "zh-CN-daily-01",
            "title": "自我介绍",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "zh-CN-daily-01-01",
                "type": "translate",
                "question": "My name is...",
                "options": [
                  "太贵了",
                  "我要这个",
                  "这个多少钱？",
                  "我叫..."
                ],
                "correctAnswer": "我叫...",
                "difficulty": 1
              },
              {
                "id": "zh-CN-daily-01-02",
                "type": "fill-blank",
                "question": "___ (Nice to meet you)",
                "options": [
                  "很高兴认识你",
                  "这个多少钱？",
                  "请结账",
                  "你从哪里来？"
                ],
                "correctAnswer": "很高兴认识你",
                "difficulty": 2
              },
              {
                "id": "zh-CN-daily-01-03",
                "type": "translate",
                "question": "How are you?",
                "options": [
                  "我迷路了",
                  "这个多少钱？",
                  "你好吗？",
                  "请结账"
                ],
                "correctAnswer": "你好吗？",
                "difficulty": 1
              },
              {
                "id": "zh-CN-daily-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "我叫...",
                    "My name is..."
                  ],
                  [
                    "很高兴认识你",
                    "Nice to meet you"
                  ],
                  [
                    "你好吗？",
                    "How are you?"
                  ],
                  [
                    "你从哪里来？",
                    "Where are you from?"
                  ]
                ]
              },
              {
                "id": "zh-CN-daily-01-05",
                "type": "dictation",
                "question": "听写：How much is this?",
                "correctAnswer": "这个多少钱？",
                "difficulty": 2,
                "audioWord": "zhège duōshao qián"
              },
              {
                "id": "zh-CN-daily-01-06",
                "type": "repeat",
                "question": "跟读：我要这个",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "我要这个"
              }
            ]
          },
          {
            "levelId": "zh-CN-daily-02",
            "title": "购物与消费",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "zh-CN-daily-01"
            ],
            "questions": [
              {
                "id": "zh-CN-daily-02-01",
                "type": "translate",
                "question": "My name is...",
                "options": [
                  "很高兴认识你",
                  "能便宜点吗？",
                  "我叫...",
                  "太贵了"
                ],
                "correctAnswer": "我叫...",
                "difficulty": 1
              },
              {
                "id": "zh-CN-daily-02-02",
                "type": "fill-blank",
                "question": "___ (Nice to meet you)",
                "options": [
                  "很高兴认识你",
                  "太贵了",
                  "很好吃",
                  "这个多少钱？"
                ],
                "correctAnswer": "很高兴认识你",
                "difficulty": 2
              },
              {
                "id": "zh-CN-daily-02-03",
                "type": "translate",
                "question": "How are you?",
                "options": [
                  "你好吗？",
                  "我迷路了",
                  "我要这个",
                  "你从哪里来？"
                ],
                "correctAnswer": "你好吗？",
                "difficulty": 1
              },
              {
                "id": "zh-CN-daily-02-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "我叫...",
                    "My name is..."
                  ],
                  [
                    "很高兴认识你",
                    "Nice to meet you"
                  ],
                  [
                    "你好吗？",
                    "How are you?"
                  ],
                  [
                    "你从哪里来？",
                    "Where are you from?"
                  ]
                ]
              },
              {
                "id": "zh-CN-daily-02-05",
                "type": "dictation",
                "question": "听写：How much is this?",
                "correctAnswer": "这个多少钱？",
                "difficulty": 2,
                "audioWord": "zhège duōshao qián"
              },
              {
                "id": "zh-CN-daily-02-06",
                "type": "repeat",
                "question": "跟读：我要这个",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "我要这个"
              }
            ]
          },
          {
            "levelId": "zh-CN-daily-03",
            "title": "餐厅与点餐",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "zh-CN-daily-02"
            ],
            "questions": [
              {
                "id": "zh-CN-daily-03-01",
                "type": "translate",
                "question": "My name is...",
                "options": [
                  "很好吃",
                  "我迷路了",
                  "我叫...",
                  "能便宜点吗？"
                ],
                "correctAnswer": "我叫...",
                "difficulty": 1
              },
              {
                "id": "zh-CN-daily-03-02",
                "type": "fill-blank",
                "question": "___ (Nice to meet you)",
                "options": [
                  "请结账",
                  "请给我菜单",
                  "你好吗？",
                  "很高兴认识你"
                ],
                "correctAnswer": "很高兴认识你",
                "difficulty": 2
              },
              {
                "id": "zh-CN-daily-03-03",
                "type": "translate",
                "question": "How are you?",
                "options": [
                  "能便宜点吗？",
                  "你从哪里来？",
                  "我迷路了",
                  "你好吗？"
                ],
                "correctAnswer": "你好吗？",
                "difficulty": 1
              },
              {
                "id": "zh-CN-daily-03-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "我叫...",
                    "My name is..."
                  ],
                  [
                    "很高兴认识你",
                    "Nice to meet you"
                  ],
                  [
                    "你好吗？",
                    "How are you?"
                  ],
                  [
                    "你从哪里来？",
                    "Where are you from?"
                  ]
                ]
              },
              {
                "id": "zh-CN-daily-03-05",
                "type": "dictation",
                "question": "听写：How much is this?",
                "correctAnswer": "这个多少钱？",
                "difficulty": 2,
                "audioWord": "zhège duōshao qián"
              },
              {
                "id": "zh-CN-daily-03-06",
                "type": "repeat",
                "question": "跟读：我要这个",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "我要这个"
              }
            ]
          }
        ]
      },
      {
        "id": "scenario",
        "name": "场景实战",
        "color": "#EF4444",
        "levels": [
          {
            "levelId": "zh-CN-scenario-01",
            "title": "交通出行",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "zh-CN-scenario-01-01",
                "type": "translate",
                "question": "Where is the subway?",
                "options": [
                  "明天见",
                  "地铁站在哪里？",
                  "晚安",
                  "早上好"
                ],
                "correctAnswer": "地铁站在哪里？",
                "difficulty": 1
              },
              {
                "id": "zh-CN-scenario-01-02",
                "type": "fill-blank",
                "question": "___ (Take a taxi)",
                "options": [
                  "坐出租车",
                  "打扰一下",
                  "晚安",
                  "我需要医生"
                ],
                "correctAnswer": "坐出租车",
                "difficulty": 2
              },
              {
                "id": "zh-CN-scenario-01-03",
                "type": "translate",
                "question": "I need a doctor",
                "options": [
                  "单人间",
                  "我需要医生",
                  "报警",
                  "坐出租车"
                ],
                "correctAnswer": "我需要医生",
                "difficulty": 1
              },
              {
                "id": "zh-CN-scenario-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "地铁站在哪里？",
                    "Where is the subway?"
                  ],
                  [
                    "坐出租车",
                    "Take a taxi"
                  ],
                  [
                    "我需要医生",
                    "I need a doctor"
                  ],
                  [
                    "我不舒服",
                    "I feel sick"
                  ]
                ]
              },
              {
                "id": "zh-CN-scenario-01-05",
                "type": "dictation",
                "question": "听写：Hotel reservation",
                "correctAnswer": "预订酒店",
                "difficulty": 2,
                "audioWord": "yùdìng jiǔdiàn"
              },
              {
                "id": "zh-CN-scenario-01-06",
                "type": "repeat",
                "question": "跟读：单人间",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "单人间"
              }
            ]
          },
          {
            "levelId": "zh-CN-scenario-02",
            "title": "酒店与应急",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "zh-CN-scenario-01"
            ],
            "questions": [
              {
                "id": "zh-CN-scenario-02-01",
                "type": "translate",
                "question": "Where is the subway?",
                "options": [
                  "我不舒服",
                  "单人间",
                  "晚安",
                  "地铁站在哪里？"
                ],
                "correctAnswer": "地铁站在哪里？",
                "difficulty": 1
              },
              {
                "id": "zh-CN-scenario-02-02",
                "type": "fill-blank",
                "question": "___ (Take a taxi)",
                "options": [
                  "晚安",
                  "坐出租车",
                  "预订酒店",
                  "打扰一下"
                ],
                "correctAnswer": "坐出租车",
                "difficulty": 2
              },
              {
                "id": "zh-CN-scenario-02-03",
                "type": "translate",
                "question": "I need a doctor",
                "options": [
                  "地铁站在哪里？",
                  "我需要医生",
                  "晚安",
                  "打扰一下"
                ],
                "correctAnswer": "我需要医生",
                "difficulty": 1
              },
              {
                "id": "zh-CN-scenario-02-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "地铁站在哪里？",
                    "Where is the subway?"
                  ],
                  [
                    "坐出租车",
                    "Take a taxi"
                  ],
                  [
                    "我需要医生",
                    "I need a doctor"
                  ],
                  [
                    "我不舒服",
                    "I feel sick"
                  ]
                ]
              },
              {
                "id": "zh-CN-scenario-02-05",
                "type": "dictation",
                "question": "听写：Hotel reservation",
                "correctAnswer": "预订酒店",
                "difficulty": 2,
                "audioWord": "yùdìng jiǔdiàn"
              },
              {
                "id": "zh-CN-scenario-02-06",
                "type": "repeat",
                "question": "跟读：单人间",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "单人间"
              }
            ]
          },
          {
            "levelId": "zh-CN-scenario-03",
            "title": "就医买药",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "zh-CN-scenario-02"
            ],
            "questions": [
              {
                "id": "zh-CN-scenario-03-01",
                "type": "translate",
                "question": "Where is the subway?",
                "options": [
                  "单人间",
                  "救命！",
                  "地铁站在哪里？",
                  "我需要医生"
                ],
                "correctAnswer": "地铁站在哪里？",
                "difficulty": 1
              },
              {
                "id": "zh-CN-scenario-03-02",
                "type": "fill-blank",
                "question": "___ (Take a taxi)",
                "options": [
                  "明天见",
                  "我需要医生",
                  "坐出租车",
                  "打扰一下"
                ],
                "correctAnswer": "坐出租车",
                "difficulty": 2
              },
              {
                "id": "zh-CN-scenario-03-03",
                "type": "translate",
                "question": "I need a doctor",
                "options": [
                  "我需要医生",
                  "早上好",
                  "晚安",
                  "我不舒服"
                ],
                "correctAnswer": "我需要医生",
                "difficulty": 1
              },
              {
                "id": "zh-CN-scenario-03-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "地铁站在哪里？",
                    "Where is the subway?"
                  ],
                  [
                    "坐出租车",
                    "Take a taxi"
                  ],
                  [
                    "我需要医生",
                    "I need a doctor"
                  ],
                  [
                    "我不舒服",
                    "I feel sick"
                  ]
                ]
              },
              {
                "id": "zh-CN-scenario-03-05",
                "type": "dictation",
                "question": "听写：Hotel reservation",
                "correctAnswer": "预订酒店",
                "difficulty": 2,
                "audioWord": "yùdìng jiǔdiàn"
              },
              {
                "id": "zh-CN-scenario-03-06",
                "type": "repeat",
                "question": "跟读：单人间",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "单人间"
              }
            ]
          }
        ]
      },
      {
        "id": "grammar",
        "name": "语法进阶",
        "color": "#F59E0B",
        "levels": [
          {
            "levelId": "zh-CN-grammar-01",
            "title": "动词基础",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "zh-CN-grammar-01-01",
                "type": "translate",
                "question": "be (am/is/are)",
                "options": [
                  "是",
                  "了",
                  "有",
                  "呢"
                ],
                "correctAnswer": "是",
                "difficulty": 1
              },
              {
                "id": "zh-CN-grammar-01-02",
                "type": "fill-blank",
                "question": "___ (at/in)",
                "options": [
                  "是",
                  "呢",
                  "在",
                  "吗"
                ],
                "correctAnswer": "在",
                "difficulty": 2
              },
              {
                "id": "zh-CN-grammar-01-03",
                "type": "translate",
                "question": "have",
                "options": [
                  "呢",
                  "有",
                  "是",
                  "了"
                ],
                "correctAnswer": "有",
                "difficulty": 1
              },
              {
                "id": "zh-CN-grammar-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "是",
                    "be (am/is/are)"
                  ],
                  [
                    "在",
                    "at/in"
                  ],
                  [
                    "有",
                    "have"
                  ],
                  [
                    "了",
                    "past tense marker"
                  ]
                ]
              },
              {
                "id": "zh-CN-grammar-01-05",
                "type": "dictation",
                "question": "听写：question particle",
                "correctAnswer": "吗",
                "difficulty": 2,
                "audioWord": "ma"
              },
              {
                "id": "zh-CN-grammar-01-06",
                "type": "repeat",
                "question": "跟读：呢",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "呢"
              }
            ]
          },
          {
            "levelId": "zh-CN-grammar-02",
            "title": "名词与形容词",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "zh-CN-grammar-01"
            ],
            "questions": [
              {
                "id": "zh-CN-grammar-02-01",
                "type": "translate",
                "question": "be (am/is/are)",
                "options": [
                  "在",
                  "呢",
                  "了",
                  "是"
                ],
                "correctAnswer": "是",
                "difficulty": 1
              },
              {
                "id": "zh-CN-grammar-02-02",
                "type": "fill-blank",
                "question": "___ (at/in)",
                "options": [
                  "在",
                  "了",
                  "呢",
                  "是"
                ],
                "correctAnswer": "在",
                "difficulty": 2
              },
              {
                "id": "zh-CN-grammar-02-03",
                "type": "translate",
                "question": "have",
                "options": [
                  "呢",
                  "在",
                  "有",
                  "了"
                ],
                "correctAnswer": "有",
                "difficulty": 1
              },
              {
                "id": "zh-CN-grammar-02-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "是",
                    "be (am/is/are)"
                  ],
                  [
                    "在",
                    "at/in"
                  ],
                  [
                    "有",
                    "have"
                  ],
                  [
                    "了",
                    "past tense marker"
                  ]
                ]
              },
              {
                "id": "zh-CN-grammar-02-05",
                "type": "dictation",
                "question": "听写：question particle",
                "correctAnswer": "吗",
                "difficulty": 2,
                "audioWord": "ma"
              },
              {
                "id": "zh-CN-grammar-02-06",
                "type": "repeat",
                "question": "跟读：呢",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "呢"
              }
            ]
          }
        ]
      },
      {
        "id": "culture",
        "name": "文化拓展",
        "color": "#8B5CF6",
        "levels": [
          {
            "levelId": "zh-CN-culture-01",
            "title": "节日与传统",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "zh-CN-culture-01-01",
                "type": "translate",
                "question": "Spring Festival",
                "options": [
                  "茶",
                  "饺子",
                  "中秋节",
                  "春节"
                ],
                "correctAnswer": "春节",
                "difficulty": 1
              },
              {
                "id": "zh-CN-culture-01-02",
                "type": "fill-blank",
                "question": "___ (Mid-Autumn Festival)",
                "options": [
                  "饺子",
                  "中秋节",
                  "茶",
                  "春节"
                ],
                "correctAnswer": "中秋节",
                "difficulty": 2
              },
              {
                "id": "zh-CN-culture-01-03",
                "type": "translate",
                "question": "Dumplings",
                "options": [
                  "饺子",
                  "茶",
                  "春节",
                  "中秋节"
                ],
                "correctAnswer": "饺子",
                "difficulty": 1
              },
              {
                "id": "zh-CN-culture-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "春节",
                    "Spring Festival"
                  ],
                  [
                    "中秋节",
                    "Mid-Autumn Festival"
                  ],
                  [
                    "饺子",
                    "Dumplings"
                  ],
                  [
                    "茶",
                    "Tea"
                  ]
                ]
              },
              {
                "id": "zh-CN-culture-01-05",
                "type": "dictation",
                "question": "听写：Spring Festival",
                "correctAnswer": "春节",
                "difficulty": 2,
                "audioWord": "Chūnjié"
              },
              {
                "id": "zh-CN-culture-01-06",
                "type": "repeat",
                "question": "跟读：中秋节",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "中秋节"
              }
            ]
          },
          {
            "levelId": "zh-CN-culture-02",
            "title": "美食与文化",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "zh-CN-culture-01"
            ],
            "questions": [
              {
                "id": "zh-CN-culture-02-01",
                "type": "translate",
                "question": "Spring Festival",
                "options": [
                  "春节",
                  "饺子",
                  "茶",
                  "中秋节"
                ],
                "correctAnswer": "春节",
                "difficulty": 1
              },
              {
                "id": "zh-CN-culture-02-02",
                "type": "fill-blank",
                "question": "___ (Mid-Autumn Festival)",
                "options": [
                  "茶",
                  "中秋节",
                  "春节",
                  "饺子"
                ],
                "correctAnswer": "中秋节",
                "difficulty": 2
              },
              {
                "id": "zh-CN-culture-02-03",
                "type": "translate",
                "question": "Dumplings",
                "options": [
                  "春节",
                  "茶",
                  "中秋节",
                  "饺子"
                ],
                "correctAnswer": "饺子",
                "difficulty": 1
              },
              {
                "id": "zh-CN-culture-02-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "春节",
                    "Spring Festival"
                  ],
                  [
                    "中秋节",
                    "Mid-Autumn Festival"
                  ],
                  [
                    "饺子",
                    "Dumplings"
                  ],
                  [
                    "茶",
                    "Tea"
                  ]
                ]
              },
              {
                "id": "zh-CN-culture-02-05",
                "type": "dictation",
                "question": "听写：Spring Festival",
                "correctAnswer": "春节",
                "difficulty": 2,
                "audioWord": "Chūnjié"
              },
              {
                "id": "zh-CN-culture-02-06",
                "type": "repeat",
                "question": "跟读：中秋节",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "中秋节"
              }
            ]
          }
        ]
      }
    ]
  },
  "zh-DB": {
    "themes": [
      {
        "id": "daily",
        "name": "日常对话",
        "color": "#6366F1",
        "levels": [
          {
            "levelId": "zh-DB-daily-01",
            "title": "自我介绍",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "zh-DB-daily-01-01",
                "type": "translate",
                "question": "我叫…",
                "options": [
                  "我叫...",
                  "老高兴了认识你",
                  "咋样啊？",
                  "我要这个"
                ],
                "correctAnswer": "我叫...",
                "difficulty": 1
              },
              {
                "id": "zh-DB-daily-01-02",
                "type": "fill-blank",
                "question": "___ (很高兴认识你)",
                "options": [
                  "老贵了",
                  "咋样啊？",
                  "拿菜单来",
                  "老高兴了认识你"
                ],
                "correctAnswer": "老高兴了认识你",
                "difficulty": 2
              },
              {
                "id": "zh-DB-daily-01-03",
                "type": "translate",
                "question": "你好吗？",
                "options": [
                  "便宜点呗",
                  "老高兴了认识你",
                  "我蒙圈了",
                  "咋样啊？"
                ],
                "correctAnswer": "咋样啊？",
                "difficulty": 1
              },
              {
                "id": "zh-DB-daily-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "我叫...",
                    "我叫…"
                  ],
                  [
                    "老高兴了认识你",
                    "很高兴认识你"
                  ],
                  [
                    "咋样啊？",
                    "你好吗？"
                  ],
                  [
                    "你从哪旮旯来？",
                    "你从哪里来？"
                  ]
                ]
              },
              {
                "id": "zh-DB-daily-01-05",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "多钱儿？",
                "difficulty": 2,
                "audioWord": "duo1 qian2 er5"
              },
              {
                "id": "zh-DB-daily-01-06",
                "type": "repeat",
                "question": "跟读：我要这个",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "我要这个"
              }
            ]
          },
          {
            "levelId": "zh-DB-daily-02",
            "title": "购物与消费",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "zh-DB-daily-01"
            ],
            "questions": [
              {
                "id": "zh-DB-daily-02-01",
                "type": "translate",
                "question": "我叫…",
                "options": [
                  "我叫...",
                  "贼好吃",
                  "多钱儿？",
                  "我要这个"
                ],
                "correctAnswer": "我叫...",
                "difficulty": 1
              },
              {
                "id": "zh-DB-daily-02-02",
                "type": "fill-blank",
                "question": "___ (很高兴认识你)",
                "options": [
                  "我要这个",
                  "拿菜单来",
                  "老高兴了认识你",
                  "老贵了"
                ],
                "correctAnswer": "老高兴了认识你",
                "difficulty": 2
              },
              {
                "id": "zh-DB-daily-02-03",
                "type": "translate",
                "question": "你好吗？",
                "options": [
                  "老高兴了认识你",
                  "贼好吃",
                  "咋样啊？",
                  "你从哪旮旯来？"
                ],
                "correctAnswer": "咋样啊？",
                "difficulty": 1
              },
              {
                "id": "zh-DB-daily-02-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "我叫...",
                    "我叫…"
                  ],
                  [
                    "老高兴了认识你",
                    "很高兴认识你"
                  ],
                  [
                    "咋样啊？",
                    "你好吗？"
                  ],
                  [
                    "你从哪旮旯来？",
                    "你从哪里来？"
                  ]
                ]
              },
              {
                "id": "zh-DB-daily-02-05",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "多钱儿？",
                "difficulty": 2,
                "audioWord": "duo1 qian2 er5"
              },
              {
                "id": "zh-DB-daily-02-06",
                "type": "repeat",
                "question": "跟读：我要这个",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "我要这个"
              }
            ]
          },
          {
            "levelId": "zh-DB-daily-03",
            "title": "餐厅与点餐",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "zh-DB-daily-02"
            ],
            "questions": [
              {
                "id": "zh-DB-daily-03-01",
                "type": "translate",
                "question": "我叫…",
                "options": [
                  "我蒙圈了",
                  "拿菜单来",
                  "我叫...",
                  "老贵了"
                ],
                "correctAnswer": "我叫...",
                "difficulty": 1
              },
              {
                "id": "zh-DB-daily-03-02",
                "type": "fill-blank",
                "question": "___ (很高兴认识你)",
                "options": [
                  "拿菜单来",
                  "老高兴了认识你",
                  "多钱儿？",
                  "我要这个"
                ],
                "correctAnswer": "老高兴了认识你",
                "difficulty": 2
              },
              {
                "id": "zh-DB-daily-03-03",
                "type": "translate",
                "question": "你好吗？",
                "options": [
                  "你从哪旮旯来？",
                  "老高兴了认识你",
                  "我要这个",
                  "咋样啊？"
                ],
                "correctAnswer": "咋样啊？",
                "difficulty": 1
              },
              {
                "id": "zh-DB-daily-03-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "我叫...",
                    "我叫…"
                  ],
                  [
                    "老高兴了认识你",
                    "很高兴认识你"
                  ],
                  [
                    "咋样啊？",
                    "你好吗？"
                  ],
                  [
                    "你从哪旮旯来？",
                    "你从哪里来？"
                  ]
                ]
              },
              {
                "id": "zh-DB-daily-03-05",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "多钱儿？",
                "difficulty": 2,
                "audioWord": "duo1 qian2 er5"
              },
              {
                "id": "zh-DB-daily-03-06",
                "type": "repeat",
                "question": "跟读：我要这个",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "我要这个"
              }
            ]
          },
          {
            "levelId": "zh-DB-daily-04",
            "title": "餐厅与点餐",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "zh-DB-daily-03"
            ],
            "questions": [
              {
                "id": "zh-DB-daily-04-01",
                "type": "translate",
                "question": "给我菜单",
                "options": [
                  "给我菜单",
                  "买单",
                  "多少钱？",
                  "我叫做..."
                ],
                "correctAnswer": "给我菜单",
                "difficulty": 1
              },
              {
                "id": "zh-DB-daily-04-02",
                "type": "fill-blank",
                "question": "___ (买单)",
                "options": [
                  "给我菜单",
                  "买单",
                  "多少钱？",
                  "便宜点行不？"
                ],
                "correctAnswer": "买单",
                "difficulty": 2
              },
              {
                "id": "zh-DB-daily-04-03",
                "type": "translate",
                "question": "太好吃了",
                "options": [
                  "太好吃了",
                  "我迷路了",
                  "太贵了",
                  "便宜点行不？"
                ],
                "correctAnswer": "太好吃了",
                "difficulty": 1
              },
              {
                "id": "zh-DB-daily-04-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "给我菜单",
                    "给我菜单"
                  ],
                  [
                    "买单",
                    "买单"
                  ],
                  [
                    "太好吃了",
                    "太好吃了"
                  ],
                  [
                    "便宜点行不？",
                    "能便宜点吗？"
                  ]
                ]
              },
              {
                "id": "zh-DB-daily-04-05",
                "type": "dictation",
                "question": "听写：我不要辣的",
                "correctAnswer": "我不要辣的",
                "difficulty": 2,
                "audioWord": "wo bu yao la de"
              },
              {
                "id": "zh-DB-daily-04-06",
                "type": "repeat",
                "question": "跟读：来碗大碴子粥",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "来碗大碴子粥"
              }
            ]
          }
        ]
      },
      {
        "id": "scenario",
        "name": "场景实战",
        "color": "#EF4444",
        "levels": [
          {
            "levelId": "zh-DB-scenario-01",
            "title": "交通出行",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "zh-DB-scenario-01-01",
                "type": "translate",
                "question": "地铁站在哪里？",
                "options": [
                  "订宾馆",
                  "地铁站在哪旮旯？",
                  "我不得劲儿",
                  "我得看大夫"
                ],
                "correctAnswer": "地铁站在哪旮旯？",
                "difficulty": 1
              },
              {
                "id": "zh-DB-scenario-01-02",
                "type": "fill-blank",
                "question": "___ (坐出租车)",
                "options": [
                  "单人间",
                  "明儿见",
                  "打出租车",
                  "借光"
                ],
                "correctAnswer": "打出租车",
                "difficulty": 2
              },
              {
                "id": "zh-DB-scenario-01-03",
                "type": "translate",
                "question": "我需要医生",
                "options": [
                  "晚安",
                  "明儿见",
                  "我得看大夫",
                  "早上好"
                ],
                "correctAnswer": "我得看大夫",
                "difficulty": 1
              },
              {
                "id": "zh-DB-scenario-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "地铁站在哪旮旯？",
                    "地铁站在哪里？"
                  ],
                  [
                    "打出租车",
                    "坐出租车"
                  ],
                  [
                    "我得看大夫",
                    "我需要医生"
                  ],
                  [
                    "我不得劲儿",
                    "我不舒服"
                  ]
                ]
              },
              {
                "id": "zh-DB-scenario-01-05",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "订宾馆",
                "difficulty": 2,
                "audioWord": "ding4 bin1 guan3"
              },
              {
                "id": "zh-DB-scenario-01-06",
                "type": "repeat",
                "question": "跟读：单人间",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "单人间"
              }
            ]
          },
          {
            "levelId": "zh-DB-scenario-02",
            "title": "酒店与应急",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "zh-DB-scenario-01"
            ],
            "questions": [
              {
                "id": "zh-DB-scenario-02-01",
                "type": "translate",
                "question": "地铁站在哪里？",
                "options": [
                  "我得看大夫",
                  "我不得劲儿",
                  "借光",
                  "地铁站在哪旮旯？"
                ],
                "correctAnswer": "地铁站在哪旮旯？",
                "difficulty": 1
              },
              {
                "id": "zh-DB-scenario-02-02",
                "type": "fill-blank",
                "question": "___ (坐出租车)",
                "options": [
                  "我不得劲儿",
                  "打出租车",
                  "报警",
                  "订宾馆"
                ],
                "correctAnswer": "打出租车",
                "difficulty": 2
              },
              {
                "id": "zh-DB-scenario-02-03",
                "type": "translate",
                "question": "我需要医生",
                "options": [
                  "明儿见",
                  "借光",
                  "单人间",
                  "我得看大夫"
                ],
                "correctAnswer": "我得看大夫",
                "difficulty": 1
              },
              {
                "id": "zh-DB-scenario-02-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "地铁站在哪旮旯？",
                    "地铁站在哪里？"
                  ],
                  [
                    "打出租车",
                    "坐出租车"
                  ],
                  [
                    "我得看大夫",
                    "我需要医生"
                  ],
                  [
                    "我不得劲儿",
                    "我不舒服"
                  ]
                ]
              },
              {
                "id": "zh-DB-scenario-02-05",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "订宾馆",
                "difficulty": 2,
                "audioWord": "ding4 bin1 guan3"
              },
              {
                "id": "zh-DB-scenario-02-06",
                "type": "repeat",
                "question": "跟读：单人间",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "单人间"
              }
            ]
          },
          {
            "levelId": "zh-DB-scenario-03",
            "title": "就医买药",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "zh-DB-scenario-02"
            ],
            "questions": [
              {
                "id": "zh-DB-scenario-03-01",
                "type": "translate",
                "question": "地铁站在哪里？",
                "options": [
                  "早上好",
                  "我不得劲儿",
                  "订宾馆",
                  "地铁站在哪旮旯？"
                ],
                "correctAnswer": "地铁站在哪旮旯？",
                "difficulty": 1
              },
              {
                "id": "zh-DB-scenario-03-02",
                "type": "fill-blank",
                "question": "___ (坐出租车)",
                "options": [
                  "打出租车",
                  "借光",
                  "早上好",
                  "地铁站在哪旮旯？"
                ],
                "correctAnswer": "打出租车",
                "difficulty": 2
              },
              {
                "id": "zh-DB-scenario-03-03",
                "type": "translate",
                "question": "我需要医生",
                "options": [
                  "我得看大夫",
                  "报警",
                  "早上好",
                  "地铁站在哪旮旯？"
                ],
                "correctAnswer": "我得看大夫",
                "difficulty": 1
              },
              {
                "id": "zh-DB-scenario-03-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "地铁站在哪旮旯？",
                    "地铁站在哪里？"
                  ],
                  [
                    "打出租车",
                    "坐出租车"
                  ],
                  [
                    "我得看大夫",
                    "我需要医生"
                  ],
                  [
                    "我不得劲儿",
                    "我不舒服"
                  ]
                ]
              },
              {
                "id": "zh-DB-scenario-03-05",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "订宾馆",
                "difficulty": 2,
                "audioWord": "ding4 bin1 guan3"
              },
              {
                "id": "zh-DB-scenario-03-06",
                "type": "repeat",
                "question": "跟读：单人间",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "单人间"
              }
            ]
          }
        ]
      },
      {
        "id": "grammar",
        "name": "语法进阶",
        "color": "#F59E0B",
        "levels": [
          {
            "levelId": "zh-DB-grammar-01",
            "title": "动词基础",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "zh-DB-grammar-01-01",
                "type": "translate",
                "question": "去",
                "options": [
                  "去",
                  "在",
                  "不行",
                  "是"
                ],
                "correctAnswer": "去",
                "difficulty": 1
              },
              {
                "id": "zh-DB-grammar-01-02",
                "type": "fill-blank",
                "question": "___ (吃)",
                "options": [
                  "吃",
                  "去",
                  "是",
                  "有"
                ],
                "correctAnswer": "吃",
                "difficulty": 2
              },
              {
                "id": "zh-DB-grammar-01-03",
                "type": "translate",
                "question": "是",
                "options": [
                  "不行",
                  "有",
                  "行",
                  "是"
                ],
                "correctAnswer": "是",
                "difficulty": 1
              },
              {
                "id": "zh-DB-grammar-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "去",
                    "去"
                  ],
                  [
                    "吃",
                    "吃"
                  ],
                  [
                    "是",
                    "是"
                  ],
                  [
                    "在",
                    "在"
                  ]
                ]
              },
              {
                "id": "zh-DB-grammar-01-05",
                "type": "dictation",
                "question": "听写：有",
                "correctAnswer": "有",
                "difficulty": 2,
                "audioWord": "you3"
              },
              {
                "id": "zh-DB-grammar-01-06",
                "type": "repeat",
                "question": "跟读：行",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "行"
              }
            ]
          },
          {
            "levelId": "zh-DB-grammar-02",
            "title": "形容词与副词",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "zh-DB-grammar-01"
            ],
            "questions": [
              {
                "id": "zh-DB-grammar-02-01",
                "type": "translate",
                "question": "大的",
                "options": [
                  "大的",
                  "小的",
                  "好的",
                  "坏的"
                ],
                "correctAnswer": "大的",
                "difficulty": 1
              },
              {
                "id": "zh-DB-grammar-02-02",
                "type": "fill-blank",
                "question": "___ (小的)",
                "options": [
                  "大的",
                  "小的",
                  "好的",
                  "坏的"
                ],
                "correctAnswer": "小的",
                "difficulty": 2
              },
              {
                "id": "zh-DB-grammar-02-03",
                "type": "translate",
                "question": "很",
                "options": [
                  "很",
                  "不",
                  "也",
                  "都"
                ],
                "correctAnswer": "很",
                "difficulty": 1
              },
              {
                "id": "zh-DB-grammar-02-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "大的",
                    "大的"
                  ],
                  [
                    "小的",
                    "小的"
                  ],
                  [
                    "很",
                    "很"
                  ],
                  [
                    "不",
                    "不"
                  ]
                ]
              },
              {
                "id": "zh-DB-grammar-02-05",
                "type": "dictation",
                "question": "听写：好的",
                "correctAnswer": "好的",
                "difficulty": 2,
                "audioWord": "hao de"
              },
              {
                "id": "zh-DB-grammar-02-06",
                "type": "repeat",
                "question": "跟读：不行",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "不行"
              }
            ]
          }
        ]
      },
      {
        "id": "culture",
        "name": "文化拓展",
        "color": "#8B5CF6",
        "levels": [
          {
            "levelId": "zh-DB-culture-01",
            "title": "节日与传统",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "zh-DB-culture-01-01",
                "type": "translate",
                "question": "过年",
                "options": [
                  "茶",
                  "过年",
                  "中秋",
                  "饺子"
                ],
                "correctAnswer": "过年",
                "difficulty": 1
              },
              {
                "id": "zh-DB-culture-01-02",
                "type": "fill-blank",
                "question": "___ (中秋节)",
                "options": [
                  "中秋",
                  "饺子",
                  "茶",
                  "过年"
                ],
                "correctAnswer": "中秋",
                "difficulty": 2
              },
              {
                "id": "zh-DB-culture-01-03",
                "type": "translate",
                "question": "饺子",
                "options": [
                  "中秋",
                  "过年",
                  "饺子",
                  "茶"
                ],
                "correctAnswer": "饺子",
                "difficulty": 1
              },
              {
                "id": "zh-DB-culture-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "过年",
                    "过年"
                  ],
                  [
                    "中秋",
                    "中秋节"
                  ],
                  [
                    "饺子",
                    "饺子"
                  ],
                  [
                    "茶",
                    "茶"
                  ]
                ]
              },
              {
                "id": "zh-DB-culture-01-05",
                "type": "dictation",
                "question": "听写：过年",
                "correctAnswer": "过年",
                "difficulty": 2,
                "audioWord": "guo4 nian2"
              },
              {
                "id": "zh-DB-culture-01-06",
                "type": "repeat",
                "question": "跟读：中秋",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "中秋"
              }
            ]
          }
        ]
      }
    ]
  },
  "zh-SC": {
    "themes": [
      {
        "id": "daily",
        "name": "日常对话",
        "color": "#6366F1",
        "levels": [
          {
            "levelId": "zh-SC-daily-01",
            "title": "自我介绍",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "zh-SC-daily-01-01",
                "type": "translate",
                "question": "我叫…",
                "options": [
                  "我叫...",
                  "我迷路了",
                  "算账",
                  "相因点嘛"
                ],
                "correctAnswer": "我叫...",
                "difficulty": 1
              },
              {
                "id": "zh-SC-daily-01-02",
                "type": "fill-blank",
                "question": "___ (很高兴认识你)",
                "options": [
                  "算账",
                  "好高兴认识你",
                  "巴适得板",
                  "你咋样？"
                ],
                "correctAnswer": "好高兴认识你",
                "difficulty": 2
              },
              {
                "id": "zh-SC-daily-01-03",
                "type": "translate",
                "question": "你好吗？",
                "options": [
                  "好高兴认识你",
                  "算账",
                  "你咋样？",
                  "我要这个"
                ],
                "correctAnswer": "你咋样？",
                "difficulty": 1
              },
              {
                "id": "zh-SC-daily-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "我叫...",
                    "我叫…"
                  ],
                  [
                    "好高兴认识你",
                    "很高兴认识你"
                  ],
                  [
                    "你咋样？",
                    "你好吗？"
                  ],
                  [
                    "你从哪儿来？",
                    "你从哪里来？"
                  ]
                ]
              },
              {
                "id": "zh-SC-daily-01-05",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "好多钱？",
                "difficulty": 2,
                "audioWord": "hao3 duo1 qian2"
              },
              {
                "id": "zh-SC-daily-01-06",
                "type": "repeat",
                "question": "跟读：我要这个",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "我要这个"
              }
            ]
          },
          {
            "levelId": "zh-SC-daily-02",
            "title": "购物与消费",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "zh-SC-daily-01"
            ],
            "questions": [
              {
                "id": "zh-SC-daily-02-01",
                "type": "translate",
                "question": "我叫…",
                "options": [
                  "我叫...",
                  "相因点嘛",
                  "你咋样？",
                  "巴适得板"
                ],
                "correctAnswer": "我叫...",
                "difficulty": 1
              },
              {
                "id": "zh-SC-daily-02-02",
                "type": "fill-blank",
                "question": "___ (很高兴认识你)",
                "options": [
                  "我叫...",
                  "我迷路了",
                  "好多钱？",
                  "好高兴认识你"
                ],
                "correctAnswer": "好高兴认识你",
                "difficulty": 2
              },
              {
                "id": "zh-SC-daily-02-03",
                "type": "translate",
                "question": "你好吗？",
                "options": [
                  "拿菜单来",
                  "你咋样？",
                  "我叫...",
                  "巴适得板"
                ],
                "correctAnswer": "你咋样？",
                "difficulty": 1
              },
              {
                "id": "zh-SC-daily-02-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "我叫...",
                    "我叫…"
                  ],
                  [
                    "好高兴认识你",
                    "很高兴认识你"
                  ],
                  [
                    "你咋样？",
                    "你好吗？"
                  ],
                  [
                    "你从哪儿来？",
                    "你从哪里来？"
                  ]
                ]
              },
              {
                "id": "zh-SC-daily-02-05",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "好多钱？",
                "difficulty": 2,
                "audioWord": "hao3 duo1 qian2"
              },
              {
                "id": "zh-SC-daily-02-06",
                "type": "repeat",
                "question": "跟读：我要这个",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "我要这个"
              }
            ]
          },
          {
            "levelId": "zh-SC-daily-03",
            "title": "餐厅与点餐",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "zh-SC-daily-02"
            ],
            "questions": [
              {
                "id": "zh-SC-daily-03-01",
                "type": "translate",
                "question": "我叫…",
                "options": [
                  "好高兴认识你",
                  "你咋样？",
                  "你从哪儿来？",
                  "我叫..."
                ],
                "correctAnswer": "我叫...",
                "difficulty": 1
              },
              {
                "id": "zh-SC-daily-03-02",
                "type": "fill-blank",
                "question": "___ (很高兴认识你)",
                "options": [
                  "巴适得板",
                  "太贵了",
                  "好高兴认识你",
                  "算账"
                ],
                "correctAnswer": "好高兴认识你",
                "difficulty": 2
              },
              {
                "id": "zh-SC-daily-03-03",
                "type": "translate",
                "question": "你好吗？",
                "options": [
                  "好高兴认识你",
                  "我要这个",
                  "你从哪儿来？",
                  "你咋样？"
                ],
                "correctAnswer": "你咋样？",
                "difficulty": 1
              },
              {
                "id": "zh-SC-daily-03-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "我叫...",
                    "我叫…"
                  ],
                  [
                    "好高兴认识你",
                    "很高兴认识你"
                  ],
                  [
                    "你咋样？",
                    "你好吗？"
                  ],
                  [
                    "你从哪儿来？",
                    "你从哪里来？"
                  ]
                ]
              },
              {
                "id": "zh-SC-daily-03-05",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "好多钱？",
                "difficulty": 2,
                "audioWord": "hao3 duo1 qian2"
              },
              {
                "id": "zh-SC-daily-03-06",
                "type": "repeat",
                "question": "跟读：我要这个",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "我要这个"
              }
            ]
          },
          {
            "levelId": "zh-SC-daily-04",
            "title": "餐厅与点餐",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "zh-SC-daily-03"
            ],
            "questions": [
              {
                "id": "zh-SC-daily-04-01",
                "type": "translate",
                "question": "把菜单给我",
                "options": [
                  "把菜单给我",
                  "结账",
                  "好多钱？",
                  "我叫..."
                ],
                "correctAnswer": "把菜单给我",
                "difficulty": 1
              },
              {
                "id": "zh-SC-daily-04-02",
                "type": "fill-blank",
                "question": "___ (结账)",
                "options": [
                  "把菜单给我",
                  "结账",
                  "好多钱？",
                  "相因点嘛"
                ],
                "correctAnswer": "结账",
                "difficulty": 2
              },
              {
                "id": "zh-SC-daily-04-03",
                "type": "translate",
                "question": "太好吃了",
                "options": [
                  "太好吃了",
                  "我搞不醒豁了",
                  "太贵了",
                  "相因点嘛"
                ],
                "correctAnswer": "太好吃了",
                "difficulty": 1
              },
              {
                "id": "zh-SC-daily-04-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "把菜单给我",
                    "给我菜单"
                  ],
                  [
                    "结账",
                    "买单"
                  ],
                  [
                    "太好吃了",
                    "太好吃了"
                  ],
                  [
                    "相因点嘛",
                    "便宜点好吗"
                  ]
                ]
              },
              {
                "id": "zh-SC-daily-04-05",
                "type": "dictation",
                "question": "听写：我不要海椒",
                "correctAnswer": "我不要海椒",
                "difficulty": 2,
                "audioWord": "wo bu yao hai jiao"
              },
              {
                "id": "zh-SC-daily-04-06",
                "type": "repeat",
                "question": "跟读：来碗抄手",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "来碗抄手"
              }
            ]
          }
        ]
      },
      {
        "id": "scenario",
        "name": "场景实战",
        "color": "#EF4444",
        "levels": [
          {
            "levelId": "zh-SC-scenario-01",
            "title": "交通出行",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "zh-SC-scenario-01-01",
                "type": "translate",
                "question": "地铁站在哪里？",
                "options": [
                  "单人间",
                  "地铁站在哪儿？",
                  "我要看医生",
                  "睡瞌睡"
                ],
                "correctAnswer": "地铁站在哪儿？",
                "difficulty": 1
              },
              {
                "id": "zh-SC-scenario-01-02",
                "type": "fill-blank",
                "question": "___ (坐出租车)",
                "options": [
                  "睡瞌睡",
                  "早上好",
                  "赶出租车",
                  "借过"
                ],
                "correctAnswer": "赶出租车",
                "difficulty": 2
              },
              {
                "id": "zh-SC-scenario-01-03",
                "type": "translate",
                "question": "我需要医生",
                "options": [
                  "我不安逸",
                  "我要看医生",
                  "救命！",
                  "明天见"
                ],
                "correctAnswer": "我要看医生",
                "difficulty": 1
              },
              {
                "id": "zh-SC-scenario-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "地铁站在哪儿？",
                    "地铁站在哪里？"
                  ],
                  [
                    "赶出租车",
                    "坐出租车"
                  ],
                  [
                    "我要看医生",
                    "我需要医生"
                  ],
                  [
                    "我不安逸",
                    "我不舒服"
                  ]
                ]
              },
              {
                "id": "zh-SC-scenario-01-05",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "订酒店",
                "difficulty": 2,
                "audioWord": "ding4 jiu3 dian4"
              },
              {
                "id": "zh-SC-scenario-01-06",
                "type": "repeat",
                "question": "跟读：单人间",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "单人间"
              }
            ]
          },
          {
            "levelId": "zh-SC-scenario-02",
            "title": "酒店与应急",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "zh-SC-scenario-01"
            ],
            "questions": [
              {
                "id": "zh-SC-scenario-02-01",
                "type": "translate",
                "question": "地铁站在哪里？",
                "options": [
                  "明天见",
                  "我要看医生",
                  "订酒店",
                  "地铁站在哪儿？"
                ],
                "correctAnswer": "地铁站在哪儿？",
                "difficulty": 1
              },
              {
                "id": "zh-SC-scenario-02-02",
                "type": "fill-blank",
                "question": "___ (坐出租车)",
                "options": [
                  "早上好",
                  "赶出租车",
                  "订酒店",
                  "地铁站在哪儿？"
                ],
                "correctAnswer": "赶出租车",
                "difficulty": 2
              },
              {
                "id": "zh-SC-scenario-02-03",
                "type": "translate",
                "question": "我需要医生",
                "options": [
                  "地铁站在哪儿？",
                  "我不安逸",
                  "我要看医生",
                  "睡瞌睡"
                ],
                "correctAnswer": "我要看医生",
                "difficulty": 1
              },
              {
                "id": "zh-SC-scenario-02-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "地铁站在哪儿？",
                    "地铁站在哪里？"
                  ],
                  [
                    "赶出租车",
                    "坐出租车"
                  ],
                  [
                    "我要看医生",
                    "我需要医生"
                  ],
                  [
                    "我不安逸",
                    "我不舒服"
                  ]
                ]
              },
              {
                "id": "zh-SC-scenario-02-05",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "订酒店",
                "difficulty": 2,
                "audioWord": "ding4 jiu3 dian4"
              },
              {
                "id": "zh-SC-scenario-02-06",
                "type": "repeat",
                "question": "跟读：单人间",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "单人间"
              }
            ]
          },
          {
            "levelId": "zh-SC-scenario-03",
            "title": "就医买药",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "zh-SC-scenario-02"
            ],
            "questions": [
              {
                "id": "zh-SC-scenario-03-01",
                "type": "translate",
                "question": "地铁站在哪里？",
                "options": [
                  "救命！",
                  "订酒店",
                  "地铁站在哪儿？",
                  "报警"
                ],
                "correctAnswer": "地铁站在哪儿？",
                "difficulty": 1
              },
              {
                "id": "zh-SC-scenario-03-02",
                "type": "fill-blank",
                "question": "___ (坐出租车)",
                "options": [
                  "地铁站在哪儿？",
                  "睡瞌睡",
                  "赶出租车",
                  "我要看医生"
                ],
                "correctAnswer": "赶出租车",
                "difficulty": 2
              },
              {
                "id": "zh-SC-scenario-03-03",
                "type": "translate",
                "question": "我需要医生",
                "options": [
                  "我要看医生",
                  "早上好",
                  "报警",
                  "赶出租车"
                ],
                "correctAnswer": "我要看医生",
                "difficulty": 1
              },
              {
                "id": "zh-SC-scenario-03-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "地铁站在哪儿？",
                    "地铁站在哪里？"
                  ],
                  [
                    "赶出租车",
                    "坐出租车"
                  ],
                  [
                    "我要看医生",
                    "我需要医生"
                  ],
                  [
                    "我不安逸",
                    "我不舒服"
                  ]
                ]
              },
              {
                "id": "zh-SC-scenario-03-05",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "订酒店",
                "difficulty": 2,
                "audioWord": "ding4 jiu3 dian4"
              },
              {
                "id": "zh-SC-scenario-03-06",
                "type": "repeat",
                "question": "跟读：单人间",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "单人间"
              }
            ]
          }
        ]
      },
      {
        "id": "grammar",
        "name": "语法进阶",
        "color": "#F59E0B",
        "levels": [
          {
            "levelId": "zh-SC-grammar-01",
            "title": "动词基础",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "zh-SC-grammar-01-01",
                "type": "translate",
                "question": "去",
                "options": [
                  "要得",
                  "有",
                  "吃",
                  "去"
                ],
                "correctAnswer": "去",
                "difficulty": 1
              },
              {
                "id": "zh-SC-grammar-01-02",
                "type": "fill-blank",
                "question": "___ (吃)",
                "options": [
                  "吃",
                  "要得",
                  "不得行",
                  "在"
                ],
                "correctAnswer": "吃",
                "difficulty": 2
              },
              {
                "id": "zh-SC-grammar-01-03",
                "type": "translate",
                "question": "是",
                "options": [
                  "吃",
                  "有",
                  "是",
                  "要得"
                ],
                "correctAnswer": "是",
                "difficulty": 1
              },
              {
                "id": "zh-SC-grammar-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "去",
                    "去"
                  ],
                  [
                    "吃",
                    "吃"
                  ],
                  [
                    "是",
                    "是"
                  ],
                  [
                    "在",
                    "在"
                  ]
                ]
              },
              {
                "id": "zh-SC-grammar-01-05",
                "type": "dictation",
                "question": "听写：有",
                "correctAnswer": "有",
                "difficulty": 2,
                "audioWord": "you3"
              },
              {
                "id": "zh-SC-grammar-01-06",
                "type": "repeat",
                "question": "跟读：要得",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "要得"
              }
            ]
          },
          {
            "levelId": "zh-SC-grammar-02",
            "title": "形容词与副词",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "zh-SC-grammar-01"
            ],
            "questions": [
              {
                "id": "zh-SC-grammar-02-01",
                "type": "translate",
                "question": "大的",
                "options": [
                  "大的",
                  "小的",
                  "好的",
                  "坏的"
                ],
                "correctAnswer": "大的",
                "difficulty": 1
              },
              {
                "id": "zh-SC-grammar-02-02",
                "type": "fill-blank",
                "question": "___ (小的)",
                "options": [
                  "大的",
                  "小的",
                  "好的",
                  "坏的"
                ],
                "correctAnswer": "小的",
                "difficulty": 2
              },
              {
                "id": "zh-SC-grammar-02-03",
                "type": "translate",
                "question": "很",
                "options": [
                  "很",
                  "不",
                  "也",
                  "都"
                ],
                "correctAnswer": "很",
                "difficulty": 1
              },
              {
                "id": "zh-SC-grammar-02-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "大的",
                    "大的"
                  ],
                  [
                    "小的",
                    "小的"
                  ],
                  [
                    "很",
                    "很"
                  ],
                  [
                    "不",
                    "不"
                  ]
                ]
              },
              {
                "id": "zh-SC-grammar-02-05",
                "type": "dictation",
                "question": "听写：好的",
                "correctAnswer": "好的",
                "difficulty": 2,
                "audioWord": "hao de"
              },
              {
                "id": "zh-SC-grammar-02-06",
                "type": "repeat",
                "question": "跟读：要得",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "要得"
              }
            ]
          }
        ]
      },
      {
        "id": "culture",
        "name": "文化拓展",
        "color": "#8B5CF6",
        "levels": [
          {
            "levelId": "zh-SC-culture-01",
            "title": "节日与传统",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "zh-SC-culture-01-01",
                "type": "translate",
                "question": "过年",
                "options": [
                  "火锅",
                  "过年",
                  "茶",
                  "中秋"
                ],
                "correctAnswer": "过年",
                "difficulty": 1
              },
              {
                "id": "zh-SC-culture-01-02",
                "type": "fill-blank",
                "question": "___ (中秋节)",
                "options": [
                  "火锅",
                  "茶",
                  "中秋",
                  "过年"
                ],
                "correctAnswer": "中秋",
                "difficulty": 2
              },
              {
                "id": "zh-SC-culture-01-03",
                "type": "translate",
                "question": "火锅",
                "options": [
                  "茶",
                  "过年",
                  "火锅",
                  "中秋"
                ],
                "correctAnswer": "火锅",
                "difficulty": 1
              },
              {
                "id": "zh-SC-culture-01-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "过年",
                    "过年"
                  ],
                  [
                    "中秋",
                    "中秋节"
                  ],
                  [
                    "火锅",
                    "火锅"
                  ],
                  [
                    "茶",
                    "茶"
                  ]
                ]
              },
              {
                "id": "zh-SC-culture-01-05",
                "type": "dictation",
                "question": "听写：过年",
                "correctAnswer": "过年",
                "difficulty": 2,
                "audioWord": "guo4 nian2"
              },
              {
                "id": "zh-SC-culture-01-06",
                "type": "repeat",
                "question": "跟读：中秋",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "中秋"
              }
            ]
          }
        ]
      }
    ]
  }
};
Object.assign(window, { NEW_QUIZ_DATA });
