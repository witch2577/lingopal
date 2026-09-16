// ========== Quiz / Level Data ==========
// Structured by language -> theme -> levels
// Each level has 5-8 questions of mixed types

const QUIZ_DATA = {
  "en": {
    "themes": [
      {
        "id": "basic",
        "name": "基础词汇",
        "color": "#10B981",
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
                "id": "en-b-01-1",
                "type": "translate",
                "question": "你好",
                "options": [
                  "hello",
                  "goodbye",
                  "thanks",
                  "sorry"
                ],
                "correctAnswer": "hello",
                "difficulty": 1
              },
              {
                "id": "en-b-01-2",
                "type": "translate",
                "question": "谢谢",
                "options": [
                  "please",
                  "thanks",
                  "sorry",
                  "hello"
                ],
                "correctAnswer": "thanks",
                "difficulty": 1
              },
              {
                "id": "en-b-01-3",
                "type": "fill-blank",
                "question": "___ morning! 早上好！",
                "options": [
                  "Good",
                  "Nice",
                  "Fine",
                  "Well"
                ],
                "correctAnswer": "Good",
                "difficulty": 1
              },
              {
                "id": "en-b-01-4",
                "type": "match",
                "question": "将单词与意思配对",
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
                    "please",
                    "请"
                  ]
                ]
              },
              {
                "id": "en-b-01-5",
                "type": "dictation",
                "question": "听写：你好",
                "correctAnswer": "hello",
                "difficulty": 2,
                "audioWord": "hello"
              },
              {
                "id": "en-b-01-6",
                "type": "translate",
                "question": "对不起",
                "options": [
                  "thank you",
                  "sorry",
                  "please",
                  "hello"
                ],
                "correctAnswer": "sorry",
                "difficulty": 1
              }
            ]
          },
          {
            "levelId": "en-basic-02",
            "title": "数字与颜色",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "en-basic-01"
            ],
            "questions": [
              {
                "id": "en-b-02-1",
                "type": "translate",
                "question": "红色",
                "options": [
                  "blue",
                  "green",
                  "red",
                  "yellow"
                ],
                "correctAnswer": "red",
                "difficulty": 1
              },
              {
                "id": "en-b-02-2",
                "type": "translate",
                "question": "三",
                "options": [
                  "one",
                  "two",
                  "three",
                  "four"
                ],
                "correctAnswer": "three",
                "difficulty": 1
              },
              {
                "id": "en-b-02-3",
                "type": "fill-blank",
                "question": "The sky is ___. 天空是蓝色的。",
                "options": [
                  "red",
                  "blue",
                  "green",
                  "white"
                ],
                "correctAnswer": "blue",
                "difficulty": 1
              },
              {
                "id": "en-b-02-4",
                "type": "match",
                "question": "数字配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "one",
                    "一"
                  ],
                  [
                    "five",
                    "五"
                  ],
                  [
                    "ten",
                    "十"
                  ],
                  [
                    "seven",
                    "七"
                  ]
                ]
              },
              {
                "id": "en-b-02-5",
                "type": "translate",
                "question": "绿色",
                "options": [
                  "red",
                  "blue",
                  "green",
                  "black"
                ],
                "correctAnswer": "green",
                "difficulty": 1
              },
              {
                "id": "en-b-02-6",
                "type": "dictation",
                "question": "听写：苹果",
                "correctAnswer": "apple",
                "difficulty": 2,
                "audioWord": "apple"
              }
            ]
          },
          {
            "levelId": "en-basic-03",
            "title": "食物与饮料",
            "timeLimit": 120,
            "minScoreFor1Star": 35,
            "minScoreFor2Star": 55,
            "minScoreFor3Star": 75,
            "prerequisites": [
              "en-basic-02"
            ],
            "questions": [
              {
                "id": "en-b-03-1",
                "type": "translate",
                "question": "苹果",
                "options": [
                  "banana",
                  "apple",
                  "bread",
                  "rice"
                ],
                "correctAnswer": "apple",
                "difficulty": 1
              },
              {
                "id": "en-b-03-2",
                "type": "translate",
                "question": "咖啡",
                "options": [
                  "tea",
                  "milk",
                  "water",
                  "coffee"
                ],
                "correctAnswer": "coffee",
                "difficulty": 1
              },
              {
                "id": "en-b-03-3",
                "type": "fill-blank",
                "question": "I want some ___. 我想要一些水。",
                "options": [
                  "bread",
                  "water",
                  "tea",
                  "rice"
                ],
                "correctAnswer": "water",
                "difficulty": 1
              },
              {
                "id": "en-b-03-4",
                "type": "match",
                "question": "食物配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "bread",
                    "面包"
                  ],
                  [
                    "rice",
                    "米饭"
                  ],
                  [
                    "tea",
                    "茶"
                  ],
                  [
                    "milk",
                    "牛奶"
                  ]
                ]
              },
              {
                "id": "en-b-03-5",
                "type": "listen-pic",
                "question": "听词选图：banana",
                "options": [
                  "🍎",
                  "🍌",
                  "🍞",
                  "☕"
                ],
                "correctAnswer": "banana",
                "difficulty": 2
              },
              {
                "id": "en-b-03-6",
                "type": "repeat",
                "question": "跟读：Hello, how are you?",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "Hello, how are you?"
              }
            ]
          },
          {
            "levelId": "en-basic-04",
            "title": "问候与礼貌",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [],
            "questions": [
              {
                "id": "en-t-03",
                "type": "translate",
                "question": "对不起",
                "options": [
                  "sorry",
                  "brother",
                  "two",
                  "thanks"
                ],
                "correctAnswer": "sorry",
                "difficulty": 1
              },
              {
                "id": "en-f-04",
                "type": "fill-blank",
                "question": "___ (请)",
                "options": [
                  "one",
                  "black",
                  "blue",
                  "please"
                ],
                "correctAnswer": "please",
                "difficulty": 2
              },
              {
                "id": "en-t-05",
                "type": "translate",
                "question": "是",
                "options": [
                  "yes",
                  "blue",
                  "hello",
                  "three"
                ],
                "correctAnswer": "yes",
                "difficulty": 1
              },
              {
                "id": "en-m-03",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "sorry",
                    "对不起"
                  ],
                  [
                    "please",
                    "请"
                  ],
                  [
                    "yes",
                    "是"
                  ],
                  [
                    "no",
                    "不是"
                  ]
                ]
              },
              {
                "id": "en-d-07",
                "type": "dictation",
                "question": "听写：一",
                "correctAnswer": "one",
                "difficulty": 2,
                "audioWord": "one"
              },
              {
                "id": "en-r-08",
                "type": "repeat",
                "question": "跟读：two",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "two"
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
            "levelId": "en-daily-01",
            "title": "自我介绍",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "en-d-01-1",
                "type": "translate",
                "question": "我的名字是…",
                "options": [
                  "My name is…",
                  "I am fine",
                  "How are you",
                  "Nice to meet"
                ],
                "correctAnswer": "My name is…",
                "difficulty": 2
              },
              {
                "id": "en-d-01-2",
                "type": "fill-blank",
                "question": "Nice to ___ you. 很高兴认识你。",
                "options": [
                  "meet",
                  "see",
                  "help",
                  "ask"
                ],
                "correctAnswer": "meet",
                "difficulty": 2
              },
              {
                "id": "en-d-01-3",
                "type": "translate",
                "question": "你从哪里来？",
                "options": [
                  "Where are you from?",
                  "What is your name?",
                  "How old are you?",
                  "Where do you go?"
                ],
                "correctAnswer": "Where are you from?",
                "difficulty": 2
              },
              {
                "id": "en-d-01-4",
                "type": "repeat",
                "question": "跟读：My name is Tom.",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "My name is Tom."
              },
              {
                "id": "en-d-01-5",
                "type": "dictation",
                "question": "听写：朋友",
                "correctAnswer": "friend",
                "difficulty": 2,
                "audioWord": "friend"
              },
              {
                "id": "en-d-01-6",
                "type": "match",
                "question": "对话配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "Good morning",
                    "早上好"
                  ],
                  [
                    "See you",
                    "再见"
                  ],
                  [
                    "Thank you",
                    "谢谢"
                  ],
                  [
                    "Sorry",
                    "对不起"
                  ]
                ]
              }
            ]
          },
          {
            "levelId": "en-daily-02",
            "title": "问路与出行",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "en-daily-01"
            ],
            "questions": [
              {
                "id": "en-d-02-1",
                "type": "translate",
                "question": "地铁站在哪里？",
                "options": [
                  "Where is the subway?",
                  "How much is it?",
                  "What time is it?",
                  "Where do you live?"
                ],
                "correctAnswer": "Where is the subway?",
                "difficulty": 2
              },
              {
                "id": "en-d-02-2",
                "type": "fill-blank",
                "question": "Take the ___ to the airport. 坐出租车去机场。",
                "options": [
                  "bus",
                  "taxi",
                  "train",
                  "plane"
                ],
                "correctAnswer": "taxi",
                "difficulty": 2
              },
              {
                "id": "en-d-02-3",
                "type": "translate",
                "question": "多少钱？",
                "options": [
                  "How many?",
                  "How much?",
                  "How long?",
                  "How far?"
                ],
                "correctAnswer": "How much?",
                "difficulty": 2
              },
              {
                "id": "en-d-02-4",
                "type": "listen-pic",
                "question": "听词选图：airport",
                "options": [
                  "✈️",
                  "🚂",
                  "🚕",
                  "🚌"
                ],
                "correctAnswer": "airport",
                "difficulty": 2
              },
              {
                "id": "en-d-02-5",
                "type": "match",
                "question": "出行配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "airport",
                    "机场"
                  ],
                  [
                    "hotel",
                    "酒店"
                  ],
                  [
                    "restaurant",
                    "餐厅"
                  ],
                  [
                    "station",
                    "车站"
                  ]
                ]
              },
              {
                "id": "en-d-02-6",
                "type": "repeat",
                "question": "跟读：How much is this?",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "How much is this?"
              }
            ]
          },
          {
            "levelId": "en-daily-03",
            "title": "餐厅与点餐",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "en-daily-02"
            ],
            "questions": [
              {
                "id": "en-d-03-1",
                "type": "translate",
                "question": "我要这个",
                "options": [
                  "I want this",
                  "I want that",
                  "I don't want",
                  "Thank you"
                ],
                "correctAnswer": "I want this",
                "difficulty": 2
              },
              {
                "id": "en-d-03-2",
                "type": "fill-blank",
                "question": "I would like to ___ the bill.（我要结账）",
                "options": [
                  "pay",
                  "eat",
                  "drink",
                  "cook"
                ],
                "correctAnswer": "pay",
                "difficulty": 2
              },
              {
                "id": "en-d-03-3",
                "type": "translate",
                "question": "请给我菜单",
                "options": [
                  "Please give me the menu",
                  "Please give me water",
                  "Please give me the bill",
                  "Please give me chopsticks"
                ],
                "correctAnswer": "Please give me the menu",
                "difficulty": 2
              },
              {
                "id": "en-d-03-4",
                "type": "match",
                "question": "餐厅用语配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "菜单",
                    "菜单"
                  ],
                  [
                    "账单",
                    "账单"
                  ],
                  [
                    "服务员",
                    "服务员"
                  ],
                  [
                    "小费",
                    "小费"
                  ]
                ]
              },
              {
                "id": "en-d-03-5",
                "type": "translate",
                "question": "很好吃",
                "options": [
                  "Very delicious",
                  "Very terrible",
                  "Very expensive",
                  "Very cheap"
                ],
                "correctAnswer": "Very delicious",
                "difficulty": 2
              },
              {
                "id": "en-d-03-6",
                "type": "listen-pic",
                "question": "听词选图：咖啡",
                "options": [
                  "🍵",
                  "☕",
                  "🥤",
                  "🍺"
                ],
                "correctAnswer": "☕",
                "difficulty": 2
              }
            ]
          },
          {
            "levelId": "en-daily-04",
            "title": "购物与消费",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "en-daily-03"
            ],
            "questions": [
              {
                "id": "en-d-04-1",
                "type": "translate",
                "question": "多少钱",
                "options": [
                  "How much",
                  "How old",
                  "How heavy",
                  "How far"
                ],
                "correctAnswer": "How much",
                "difficulty": 2
              },
              {
                "id": "en-d-04-2",
                "type": "fill-blank",
                "question": "How much is ___?（这个多少钱？）",
                "options": [
                  "this",
                  "that",
                  "he",
                  "she"
                ],
                "correctAnswer": "this",
                "difficulty": 2
              },
              {
                "id": "en-d-04-3",
                "type": "translate",
                "question": "太贵了",
                "options": [
                  "Too expensive",
                  "Too cheap",
                  "Too big",
                  "Too small"
                ],
                "correctAnswer": "Too expensive",
                "difficulty": 2
              },
              {
                "id": "en-d-04-4",
                "type": "match",
                "question": "购物配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "贵",
                    "贵"
                  ],
                  [
                    "便宜",
                    "便宜"
                  ],
                  [
                    "买",
                    "买"
                  ],
                  [
                    "卖",
                    "卖"
                  ]
                ]
              },
              {
                "id": "en-d-04-5",
                "type": "translate",
                "question": "我要买这个",
                "options": [
                  "I want to buy this",
                  "I want to sell this",
                  "I want to eat this",
                  "I want to drink this"
                ],
                "correctAnswer": "I want to buy this",
                "difficulty": 2
              },
              {
                "id": "en-d-04-6",
                "type": "dictation",
                "question": "听写：便宜",
                "correctAnswer": "便宜",
                "difficulty": 2,
                "audioWord": "cheap"
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
            "title": "一般现在时",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "en-g-01-1",
                "type": "fill-blank",
                "question": "She ___ to school every day. 她每天上学。",
                "options": [
                  "go",
                  "goes",
                  "going",
                  "went"
                ],
                "correctAnswer": "goes",
                "difficulty": 2
              },
              {
                "id": "en-g-01-2",
                "type": "fill-blank",
                "question": "I ___ coffee in the morning. 我早上喝咖啡。",
                "options": [
                  "drink",
                  "drinks",
                  "drinking",
                  "drank"
                ],
                "correctAnswer": "drink",
                "difficulty": 2
              },
              {
                "id": "en-g-01-3",
                "type": "translate",
                "question": "他喜欢音乐。",
                "options": [
                  "He like music",
                  "He likes music",
                  "He liking music",
                  "He liked music"
                ],
                "correctAnswer": "He likes music",
                "difficulty": 2
              },
              {
                "id": "en-g-01-4",
                "type": "dictation",
                "question": "听写：工作",
                "correctAnswer": "work",
                "difficulty": 2,
                "audioWord": "work"
              },
              {
                "id": "en-g-01-5",
                "type": "match",
                "question": "主谓一致配对",
                "correctAnswer": "match",
                "difficulty": 3,
                "pairs": [
                  [
                    "I/you/we/they",
                    "动词原形"
                  ],
                  [
                    "he/she/it",
                    "动词+s"
                  ],
                  [
                    "do/does",
                    "助动词"
                  ],
                  [
                    "have/has",
                    "有"
                  ]
                ]
              },
              {
                "id": "en-g-01-6",
                "type": "repeat",
                "question": "跟读：I work in a school.",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "I work in a school."
              }
            ]
          },
          {
            "levelId": "en-grammar-02",
            "title": "动词基础",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "en-t-00",
                "type": "translate",
                "question": "去（原形）",
                "options": [
                  "go",
                  "am/is/are",
                  "ate",
                  "went"
                ],
                "correctAnswer": "go",
                "difficulty": 1
              },
              {
                "id": "en-f-01",
                "type": "fill-blank",
                "question": "___ (去（三单）)",
                "options": [
                  "eat",
                  "goes",
                  "go",
                  "ate"
                ],
                "correctAnswer": "goes",
                "difficulty": 2
              },
              {
                "id": "en-t-02",
                "type": "translate",
                "question": "去（过去式）",
                "options": [
                  "goes",
                  "go",
                  "am/is/are",
                  "went"
                ],
                "correctAnswer": "went",
                "difficulty": 1
              },
              {
                "id": "en-m-00",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "go",
                    "去（原形）"
                  ],
                  [
                    "goes",
                    "去（三单）"
                  ],
                  [
                    "went",
                    "去（过去式）"
                  ],
                  [
                    "am/is/are",
                    "是（be动词）"
                  ]
                ]
              },
              {
                "id": "en-d-04",
                "type": "dictation",
                "question": "听写：是（过去式）",
                "correctAnswer": "was/were",
                "difficulty": 2,
                "audioWord": "was were"
              },
              {
                "id": "en-r-05",
                "type": "repeat",
                "question": "跟读：eat",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "eat"
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
                "id": "en-t-00",
                "type": "translate",
                "question": "地铁站在哪里？",
                "options": [
                  "Good morning",
                  "Where is the subway?",
                  "I feel sick",
                  "Good night"
                ],
                "correctAnswer": "Where is the subway?",
                "difficulty": 1
              },
              {
                "id": "en-f-01",
                "type": "fill-blank",
                "question": "___ (坐出租车)",
                "options": [
                  "Good night",
                  "Where is the subway?",
                  "See you tomorrow",
                  "Take a taxi"
                ],
                "correctAnswer": "Take a taxi",
                "difficulty": 2
              },
              {
                "id": "en-t-02",
                "type": "translate",
                "question": "我需要医生",
                "options": [
                  "Good morning",
                  "Excuse me",
                  "I need a doctor",
                  "Where is the subway?"
                ],
                "correctAnswer": "I need a doctor",
                "difficulty": 1
              },
              {
                "id": "en-m-00",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "Where is the subway?",
                    "地铁站在哪里？"
                  ],
                  [
                    "Take a taxi",
                    "坐出租车"
                  ],
                  [
                    "I need a doctor",
                    "我需要医生"
                  ],
                  [
                    "I feel sick",
                    "我不舒服"
                  ]
                ]
              },
              {
                "id": "en-d-04",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "Hotel reservation",
                "difficulty": 2,
                "audioWord": "Hotel reservation"
              },
              {
                "id": "en-r-05",
                "type": "repeat",
                "question": "跟读：Single room",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "Single room"
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
                "id": "en-t-00",
                "type": "translate",
                "question": "地铁站在哪里？",
                "options": [
                  "I need a doctor",
                  "Where is the subway?",
                  "See you tomorrow",
                  "I feel sick"
                ],
                "correctAnswer": "Where is the subway?",
                "difficulty": 1
              },
              {
                "id": "en-f-01",
                "type": "fill-blank",
                "question": "___ (坐出租车)",
                "options": [
                  "Where is the subway?",
                  "Hotel reservation",
                  "See you tomorrow",
                  "Take a taxi"
                ],
                "correctAnswer": "Take a taxi",
                "difficulty": 2
              },
              {
                "id": "en-t-02",
                "type": "translate",
                "question": "我需要医生",
                "options": [
                  "I need a doctor",
                  "Hotel reservation",
                  "Help!",
                  "Single room"
                ],
                "correctAnswer": "I need a doctor",
                "difficulty": 1
              },
              {
                "id": "en-m-00",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "Where is the subway?",
                    "地铁站在哪里？"
                  ],
                  [
                    "Take a taxi",
                    "坐出租车"
                  ],
                  [
                    "I need a doctor",
                    "我需要医生"
                  ],
                  [
                    "I feel sick",
                    "我不舒服"
                  ]
                ]
              },
              {
                "id": "en-d-04",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "Hotel reservation",
                "difficulty": 2,
                "audioWord": "Hotel reservation"
              },
              {
                "id": "en-r-05",
                "type": "repeat",
                "question": "跟读：Single room",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "Single room"
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
                "id": "en-t-00",
                "type": "translate",
                "question": "地铁站在哪里？",
                "options": [
                  "I feel sick",
                  "Good morning",
                  "Where is the subway?",
                  "Single room"
                ],
                "correctAnswer": "Where is the subway?",
                "difficulty": 1
              },
              {
                "id": "en-f-01",
                "type": "fill-blank",
                "question": "___ (坐出租车)",
                "options": [
                  "Good morning",
                  "I need a doctor",
                  "See you tomorrow",
                  "Take a taxi"
                ],
                "correctAnswer": "Take a taxi",
                "difficulty": 2
              },
              {
                "id": "en-t-02",
                "type": "translate",
                "question": "我需要医生",
                "options": [
                  "Good night",
                  "I feel sick",
                  "I need a doctor",
                  "Single room"
                ],
                "correctAnswer": "I need a doctor",
                "difficulty": 1
              },
              {
                "id": "en-m-00",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "Where is the subway?",
                    "地铁站在哪里？"
                  ],
                  [
                    "Take a taxi",
                    "坐出租车"
                  ],
                  [
                    "I need a doctor",
                    "我需要医生"
                  ],
                  [
                    "I feel sick",
                    "我不舒服"
                  ]
                ]
              },
              {
                "id": "en-d-04",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "Hotel reservation",
                "difficulty": 2,
                "audioWord": "Hotel reservation"
              },
              {
                "id": "en-r-05",
                "type": "repeat",
                "question": "跟读：Single room",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "Single room"
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
                "id": "en-t-00",
                "type": "translate",
                "question": "感恩节",
                "options": [
                  "Christmas",
                  "Halloween",
                  "Thanksgiving",
                  "Easter"
                ],
                "correctAnswer": "Thanksgiving",
                "difficulty": 1
              },
              {
                "id": "en-f-01",
                "type": "fill-blank",
                "question": "___ (圣诞节)",
                "options": [
                  "Halloween",
                  "Easter",
                  "Thanksgiving",
                  "Christmas"
                ],
                "correctAnswer": "Christmas",
                "difficulty": 2
              },
              {
                "id": "en-t-02",
                "type": "translate",
                "question": "万圣节",
                "options": [
                  "Easter",
                  "Christmas",
                  "Halloween",
                  "Thanksgiving"
                ],
                "correctAnswer": "Halloween",
                "difficulty": 1
              },
              {
                "id": "en-m-00",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "Thanksgiving",
                    "感恩节"
                  ],
                  [
                    "Christmas",
                    "圣诞节"
                  ],
                  [
                    "Halloween",
                    "万圣节"
                  ],
                  [
                    "Easter",
                    "复活节"
                  ]
                ]
              },
              {
                "id": "en-d-00",
                "type": "dictation",
                "question": "听写：感恩节",
                "correctAnswer": "Thanksgiving",
                "difficulty": 2,
                "audioWord": "Thanksgiving"
              },
              {
                "id": "en-r-01",
                "type": "repeat",
                "question": "跟读：Christmas",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "Christmas"
              }
            ]
          },
          {
            "levelId": "en-culture-02",
            "title": "美食与文化",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "en-culture-01"
            ],
            "questions": [
              {
                "id": "en-t-00",
                "type": "translate",
                "question": "感恩节",
                "options": [
                  "Christmas",
                  "Halloween",
                  "Easter",
                  "Thanksgiving"
                ],
                "correctAnswer": "Thanksgiving",
                "difficulty": 1
              },
              {
                "id": "en-f-01",
                "type": "fill-blank",
                "question": "___ (圣诞节)",
                "options": [
                  "Easter",
                  "Christmas",
                  "Halloween",
                  "Thanksgiving"
                ],
                "correctAnswer": "Christmas",
                "difficulty": 2
              },
              {
                "id": "en-t-02",
                "type": "translate",
                "question": "万圣节",
                "options": [
                  "Easter",
                  "Halloween",
                  "Christmas",
                  "Thanksgiving"
                ],
                "correctAnswer": "Halloween",
                "difficulty": 1
              },
              {
                "id": "en-m-00",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "Thanksgiving",
                    "感恩节"
                  ],
                  [
                    "Christmas",
                    "圣诞节"
                  ],
                  [
                    "Halloween",
                    "万圣节"
                  ],
                  [
                    "Easter",
                    "复活节"
                  ]
                ]
              },
              {
                "id": "en-d-00",
                "type": "dictation",
                "question": "听写：感恩节",
                "correctAnswer": "Thanksgiving",
                "difficulty": 2,
                "audioWord": "Thanksgiving"
              },
              {
                "id": "en-r-01",
                "type": "repeat",
                "question": "跟读：Christmas",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "Christmas"
              }
            ]
          }
        ]
      }
    ,
      {
        "id": "restaurant",
        "name": "餐厅点餐",
        "color": "#F59E0B",
        "levels": [
{
            "levelId": "en-rest-01",
            "title": "\u70b9\u9910\u57fa\u7840",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [],
            "questions": [
              {
                "id": "en-r01-1",
                "type": "translate",
                "question": "\u6211\u8981\u70b9\u83dc",
                "options": [
                  "I would like to order",
                  "I want to pay",
                  "I need a menu",
                  "Where is the restroom?"
                ],
                "correctAnswer": "I would like to order",
                "difficulty": 1
              },
              {
                "id": "en-r01-2",
                "type": "translate",
                "question": "\u6709\u4ec0\u4e48\u63a8\u8350",
                "options": [
                  "What do you recommend?",
                  "How much is it?",
                  "Is it spicy?",
                  "I am allergic to nuts"
                ],
                "correctAnswer": "What do you recommend?",
                "difficulty": 2
              },
              {
                "id": "en-r01-3",
                "type": "fill-blank",
                "question": "Could I see the ___? \u6211\u80fd\u770b\u4e00\u4e0b\u83dc\u5355\u5417\uff1f",
                "options": [
                  "menu",
                  "bill",
                  "wine",
                  "dessert"
                ],
                "correctAnswer": "menu",
                "difficulty": 1
              },
              {
                "id": "en-r01-4",
                "type": "match",
                "question": "\u9910\u5385\u914d\u5bf9",
                "pairs": [
                  ["appetizer", "\u5f00\u80c3\u83dc"],
                  ["main course", "\u4e3b\u83dc"],
                  ["dessert", "\u751c\u70b9"],
                  ["beverage", "\u996e\u6599"]
                ],
                "correctAnswer": "match",
                "difficulty": 2
              }
            ]
          },
{
            "levelId": "en-rest-02",
            "title": "\u7279\u6b8a\u9700\u6c42",
            "timeLimit": 150,
            "minScoreFor1Star": 35,
            "minScoreFor2Star": 55,
            "minScoreFor3Star": 75,
            "prerequisites": ["en-rest-01"],
            "questions": [
              {
                "id": "en-r02-1",
                "type": "translate",
                "question": "\u6211\u5bf9\u575a\u679c\u8fc7\u654f",
                "options": [
                  "I am allergic to nuts",
                  "I like nuts",
                  "I do not like nuts",
                  "No nuts please"
                ],
                "correctAnswer": "I am allergic to nuts",
                "difficulty": 2
              },
              {
                "id": "en-r02-2",
                "type": "fill-blank",
                "question": "I am ___. \u6211\u662f\u7d20\u98df\u8005\u3002",
                "options": [
                  "vegetarian",
                  "vegan",
                  "allergic",
                  "hungry"
                ],
                "correctAnswer": "vegetarian",
                "difficulty": 2
              },
              {
                "id": "en-r02-3",
                "type": "translate",
                "question": "\u8bf7\u5c11\u653e\u70b9\u8fa3",
                "options": [
                  "Less spicy, please",
                  "More spicy, please",
                  "No spice at all",
                  "Is this spicy?"
                ],
                "correctAnswer": "Less spicy, please",
                "difficulty": 2
              }
            ]
          }
        ]
      },
      {
        "id": "shopping",
        "name": "购物消费",
        "color": "#EC4899",
        "levels": [
{
            "levelId": "en-shop-01",
            "title": "\u8d85\u5e02\u8d2d\u7269",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [],
            "questions": [
              {
                "id": "en-s01-1",
                "type": "translate",
                "question": "\u591a\u5c11\u94b1",
                "options": [
                  "How much",
                  "How many",
                  "What price",
                  "Which cost"
                ],
                "correctAnswer": "How much",
                "difficulty": 1
              },
              {
                "id": "en-s01-2",
                "type": "translate",
                "question": "\u592a\u8d35\u4e86",
                "options": [
                  "Too cheap",
                  "Too expensive",
                  "Very good",
                  "Not bad"
                ],
                "correctAnswer": "Too expensive",
                "difficulty": 1
              },
              {
                "id": "en-s01-3",
                "type": "fill-blank",
                "question": "I want to buy some ___. \u6211\u60f3\u4e70\u4e00\u4e9b\u6c34\u679c\u3002",
                "options": [
                  "meat",
                  "fruit",
                  "bread",
                  "milk"
                ],
                "correctAnswer": "fruit",
                "difficulty": 1
              },
              {
                "id": "en-s01-4",
                "type": "match",
                "question": "\u8d2d\u7269\u914d\u5bf9",
                "pairs": [
                  ["discount", "\u6298\u6263"],
                  ["receipt", "\u6536\u636e"],
                  ["cashier", "\u6536\u94f6\u5458"],
                  ["change", "\u96f6\u94b1"]
                ],
                "correctAnswer": "match",
                "difficulty": 2
              },
              {
                "id": "en-s01-5",
                "type": "translate",
                "question": "\u53ef\u4ee5\u5237\u5361\u5417",
                "options": [
                  "Can I pay by card?",
                  "Can I use cash?",
                  "Do you have change?",
                  "Is it free?"
                ],
                "correctAnswer": "Can I pay by card?",
                "difficulty": 2
              }
            ]
          },
{
            "levelId": "en-shop-02",
            "title": "\u8ba8\u4ef7\u8fd8\u4ef7",
            "timeLimit": 150,
            "minScoreFor1Star": 35,
            "minScoreFor2Star": 55,
            "minScoreFor3Star": 75,
            "prerequisites": ["en-shop-01"],
            "questions": [
              {
                "id": "en-s02-1",
                "type": "translate",
                "question": "\u80fd\u4fbf\u5b9c\u70b9\u5417",
                "options": [
                  "Can it be cheaper?",
                  "Is it expensive?",
                  "I like it",
                  "I will buy it"
                ],
                "correctAnswer": "Can it be cheaper?",
                "difficulty": 2
              },
              {
                "id": "en-s02-2",
                "type": "fill-blank",
                "question": "Do you have any ___? \u4f60\u4eec\u6709\u6253\u6298\u5417\uff1f",
                "options": [
                  "sale",
                  "discount",
                  "offer",
                  "deal"
                ],
                "correctAnswer": "discount",
                "difficulty": 2
              },
              {
                "id": "en-s02-3",
                "type": "translate",
                "question": "\u6211\u8981\u8fd9\u4e2a",
                "options": [
                  "I want this one",
                  "I do not want it",
                  "How much is it?",
                  "Where is it?"
                ],
                "correctAnswer": "I want this one",
                "difficulty": 1
              },
              {
                "id": "en-s02-4",
                "type": "match",
                "question": "\u4ef7\u683c\u914d\u5bf9",
                "pairs": [
                  ["buy one get one", "\u4e70\u4e00\u9001\u4e00"],
                  ["50% off", "\u4e94\u6298"],
                  ["out of stock", "\u7f3a\u8d27"],
                  ["on sale", "\u4fc3\u9500"]
                ],
                "correctAnswer": "match",
                "difficulty": 2
              }
            ]
          }
        ]
      },
      {
        "id": "time",
        "name": "时间表达",
        "color": "#8B5CF6",
        "levels": [
{
            "levelId": "en-time-01",
            "title": "\u65f6\u95f4\u8be2\u95ee",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [],
            "questions": [
              {
                "id": "en-tm01-1",
                "type": "translate",
                "question": "\u73b0\u5728\u51e0\u70b9",
                "options": [
                  "What time is it?",
                  "What day is it?",
                  "What month is it?",
                  "What year is it?"
                ],
                "correctAnswer": "What time is it?",
                "difficulty": 1
              },
              {
                "id": "en-tm01-2",
                "type": "translate",
                "question": "\u4eca\u5929\u661f\u671f\u51e0",
                "options": [
                  "What day is it today?",
                  "What is the date?",
                  "What time is it?",
                  "How is the weather?"
                ],
                "correctAnswer": "What day is it today?",
                "difficulty": 1
              },
              {
                "id": "en-tm01-3",
                "type": "fill-blank",
                "question": "It is ___ o clock. \u4e09\u70b9\u4e86\u3002",
                "options": [
                  "three",
                  "four",
                  "five",
                  "six"
                ],
                "correctAnswer": "three",
                "difficulty": 1
              },
              {
                "id": "en-tm01-4",
                "type": "match",
                "question": "\u65f6\u95f4\u914d\u5bf9",
                "pairs": [
                  ["morning", "\u65e9\u4e0a"],
                  ["afternoon", "\u4e0b\u5348"],
                  ["evening", "\u665a\u4e0a"],
                  ["midnight", "\u5348\u591c"]
                ],
                "correctAnswer": "match",
                "difficulty": 2
              }
            ]
          },
{
            "levelId": "en-time-02",
            "title": "\u9884\u7ea6\u4e0e\u8ba1\u5212",
            "timeLimit": 150,
            "minScoreFor1Star": 35,
            "minScoreFor2Star": 55,
            "minScoreFor3Star": 75,
            "prerequisites": ["en-time-01"],
            "questions": [
              {
                "id": "en-tm02-1",
                "type": "translate",
                "question": "\u4f60\u4ec0\u4e48\u65f6\u5019\u6709\u7a7a",
                "options": [
                  "When are you free?",
                  "Where are you?",
                  "Who are you?",
                  "Why are you late?"
                ],
                "correctAnswer": "When are you free?",
                "difficulty": 2
              },
              {
                "id": "en-tm02-2",
                "type": "fill-blank",
                "question": "Let us meet at ___ . \u6211\u4eec\u516d\u70b9\u89c1\u3002",
                "options": [
                  "6 o clock",
                  "6th",
                  "June",
                  "Saturday"
                ],
                "correctAnswer": "6 o clock",
                "difficulty": 1
              },
              {
                "id": "en-tm02-3",
                "type": "translate",
                "question": "\u6211\u8fdf\u5230\u4e86",
                "options": [
                  "I am late",
                  "I am early",
                  "I am on time",
                  "I am busy"
                ],
                "correctAnswer": "I am late",
                "difficulty": 1
              }
            ]
          }
        ]
      },
      {
        "id": "travel",
        "name": "旅行出行",
        "color": "#10B981",
        "levels": [
{
            "levelId": "en-travel-01",
            "title": "\u673a\u573a\u4e0e\u4ea4\u901a",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [],
            "questions": [
              {
                "id": "en-t01-1",
                "type": "translate",
                "question": "\u767b\u673a\u724c",
                "options": [
                  "boarding pass",
                  "ticket",
                  "passport",
                  "visa"
                ],
                "correctAnswer": "boarding pass",
                "difficulty": 1
              },
              {
                "id": "en-t01-2",
                "type": "translate",
                "question": "\u884c\u674e\u6258\u8fd0",
                "options": [
                  "check-in luggage",
                  "hand luggage",
                  "lost luggage",
                  "excess baggage"
                ],
                "correctAnswer": "check-in luggage",
                "difficulty": 2
              },
              {
                "id": "en-t01-3",
                "type": "fill-blank",
                "question": "Where is the ___? \u767b\u673a\u53e3\u5728\u54ea\u91cc\uff1f",
                "options": [
                  "gate",
                  "door",
                  "window",
                  "exit"
                ],
                "correctAnswer": "gate",
                "difficulty": 1
              },
              {
                "id": "en-t01-4",
                "type": "match",
                "question": "\u673a\u573a\u914d\u5bf9",
                "pairs": [
                  ["departure", "\u51fa\u53d1"],
                  ["arrival", "\u5230\u8fbe"],
                  ["terminal", "\u822a\u7ad9\u697c"],
                  ["customs", "\u6d77\u5173"]
                ],
                "correctAnswer": "match",
                "difficulty": 2
              }
            ]
          },
{
            "levelId": "en-travel-02",
            "title": "\u9152\u5e97\u5165\u4f4f",
            "timeLimit": 150,
            "minScoreFor1Star": 35,
            "minScoreFor2Star": 55,
            "minScoreFor3Star": 75,
            "prerequisites": ["en-travel-01"],
            "questions": [
              {
                "id": "en-t02-1",
                "type": "translate",
                "question": "\u6211\u8981\u529e\u7406\u5165\u4f4f",
                "options": [
                  "I want to check in",
                  "I want to check out",
                  "I have a reservation",
                  "I need a room"
                ],
                "correctAnswer": "I want to check in",
                "difficulty": 1
              },
              {
                "id": "en-t02-2",
                "type": "fill-blank",
                "question": "I have a ___. \u6211\u6709\u9884\u8ba2\u3002",
                "options": [
                  "reservation",
                  "ticket",
                  "passport",
                  "key"
                ],
                "correctAnswer": "reservation",
                "difficulty": 1
              },
              {
                "id": "en-t02-3",
                "type": "translate",
                "question": "\u6709WiFi\u5417",
                "options": [
                  "Is there WiFi?",
                  "Is there TV?",
                  "Is there AC?",
                  "Is there hot water?"
                ],
                "correctAnswer": "Is there WiFi?",
                "difficulty": 1
              },
              {
                "id": "en-t02-4",
                "type": "match",
                "question": "\u9152\u5e97\u914d\u5bf9",
                "pairs": [
                  ["single room", "\u5355\u4eba\u95f4"],
                  ["double room", "\u53cc\u4eba\u95f4"],
                  ["room service", "\u5ba2\u623f\u670d\u52a1"],
                  ["wake-up call", "\u53eb\u9192\u670d\u52a1"]
                ],
                "correctAnswer": "match",
                "difficulty": 2
              }
            ]
          }
        ]
      }]
  },
  "ja": {
    "themes": [
      {
        "id": "basic",
        "name": "基础词汇",
        "color": "#EF4444",
        "levels": [
          {
            "levelId": "ja-basic-01",
            "title": "问候五十音",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [],
            "questions": [
              {
                "id": "ja-b-01-1",
                "type": "translate",
                "question": "你好",
                "options": [
                  "こんにちは",
                  "ありがとう",
                  "すみません",
                  "おはよう"
                ],
                "correctAnswer": "こんにちは",
                "difficulty": 1
              },
              {
                "id": "ja-b-01-2",
                "type": "translate",
                "question": "谢谢",
                "options": [
                  "こんにちは",
                  "ありがとう",
                  "さようなら",
                  "はい"
                ],
                "correctAnswer": "ありがとう",
                "difficulty": 1
              },
              {
                "id": "ja-b-01-3",
                "type": "fill-blank",
                "question": "___、ございます。（早上好）",
                "options": [
                  "おはよう",
                  "こんばんは",
                  "おやすみ",
                  "ただいま"
                ],
                "correctAnswer": "おはよう",
                "difficulty": 1
              },
              {
                "id": "ja-b-01-4",
                "type": "match",
                "question": "假名配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "あ",
                    "a"
                  ],
                  [
                    "い",
                    "i"
                  ],
                  [
                    "う",
                    "u"
                  ],
                  [
                    "え",
                    "e"
                  ]
                ]
              },
              {
                "id": "ja-b-01-5",
                "type": "dictation",
                "question": "听写：爱",
                "correctAnswer": "愛",
                "difficulty": 2,
                "audioWord": "ai"
              },
              {
                "id": "ja-b-01-6",
                "type": "translate",
                "question": "对不起",
                "options": [
                  "ありがとう",
                  "すみません",
                  "こんにちは",
                  "はい"
                ],
                "correctAnswer": "すみません",
                "difficulty": 1
              }
            ]
          },
          {
            "levelId": "ja-basic-02",
            "title": "数字与时间",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "ja-basic-01"
            ],
            "questions": [
              {
                "id": "ja-b-02-1",
                "type": "translate",
                "question": "一",
                "options": [
                  "に",
                  "さん",
                  "いち",
                  "よん"
                ],
                "correctAnswer": "いち",
                "difficulty": 1
              },
              {
                "id": "ja-b-02-2",
                "type": "translate",
                "question": "今天",
                "options": [
                  "今日",
                  "明日",
                  "昨日",
                  "毎日"
                ],
                "correctAnswer": "今日",
                "difficulty": 1
              },
              {
                "id": "ja-b-02-3",
                "type": "fill-blank",
                "question": "今、何___ですか。（现在几点）",
                "options": [
                  "時",
                  "分",
                  "日",
                  "月"
                ],
                "correctAnswer": "時",
                "difficulty": 2
              },
              {
                "id": "ja-b-02-4",
                "type": "match",
                "question": "数字配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "いち",
                    "一"
                  ],
                  [
                    "に",
                    "二"
                  ],
                  [
                    "さん",
                    "三"
                  ],
                  [
                    "よん",
                    "四"
                  ]
                ]
              },
              {
                "id": "ja-b-02-5",
                "type": "dictation",
                "question": "听写：朋友",
                "correctAnswer": "友達",
                "difficulty": 2,
                "audioWord": "tomodachi"
              },
              {
                "id": "ja-b-02-6",
                "type": "translate",
                "question": "学校",
                "options": [
                  "学校",
                  "先生",
                  "学生",
                  "駅"
                ],
                "correctAnswer": "学校",
                "difficulty": 1
              }
            ]
          },
          {
            "levelId": "ja-basic-03",
            "title": "饮食与生活",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "ja-basic-02"
            ],
            "questions": [
              {
                "id": "ja-b-03-1",
                "type": "translate",
                "question": "水",
                "options": [
                  "水",
                  "茶",
                  "コーヒー",
                  "ジュース"
                ],
                "correctAnswer": "水",
                "difficulty": 1
              },
              {
                "id": "ja-b-03-2",
                "type": "translate",
                "question": "米饭",
                "options": [
                  "ご飯",
                  "パン",
                  "麺",
                  "餃子"
                ],
                "correctAnswer": "ご飯",
                "difficulty": 1
              },
              {
                "id": "ja-b-03-3",
                "type": "fill-blank",
                "question": "お___をください。（请给我水）",
                "options": [
                  "水",
                  "茶",
                  "酒",
                  "汁"
                ],
                "correctAnswer": "水",
                "difficulty": 2
              },
              {
                "id": "ja-b-03-4",
                "type": "match",
                "question": "食物配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "水",
                    "水"
                  ],
                  [
                    "茶",
                    "茶"
                  ],
                  [
                    "米饭",
                    "米饭"
                  ],
                  [
                    "面包",
                    "面包"
                  ]
                ]
              },
              {
                "id": "ja-b-03-5",
                "type": "translate",
                "question": "好吃",
                "options": [
                  "おいしい",
                  "まずい",
                  "きれい",
                  "臭い"
                ],
                "correctAnswer": "おいしい",
                "difficulty": 1
              },
              {
                "id": "ja-b-03-6",
                "type": "dictation",
                "question": "听写：茶",
                "correctAnswer": "茶",
                "difficulty": 2,
                "audioWord": "ocha"
              }
            ]
          },
          {
            "levelId": "ja-basic-04",
            "title": "家庭与人物",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "ja-basic-03"
            ],
            "questions": [
              {
                "id": "ja-b-04-1",
                "type": "translate",
                "question": "妈妈",
                "options": [
                  "母",
                  "父",
                  "兄",
                  "姉"
                ],
                "correctAnswer": "母",
                "difficulty": 1
              },
              {
                "id": "ja-b-04-2",
                "type": "translate",
                "question": "家人",
                "options": [
                  "家族",
                  "友達",
                  "先生",
                  "同級生"
                ],
                "correctAnswer": "家族",
                "difficulty": 1
              },
              {
                "id": "ja-b-04-3",
                "type": "fill-blank",
                "question": "___は誰ですか。（那是谁？）",
                "options": [
                  "あれ",
                  "これ",
                  "それ",
                  "どれ"
                ],
                "correctAnswer": "あれ",
                "difficulty": 2
              },
              {
                "id": "ja-b-04-4",
                "type": "match",
                "question": "亲属配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "妈妈",
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
                "id": "ja-b-04-5",
                "type": "translate",
                "question": "朋友",
                "options": [
                  "友達",
                  "敵",
                  "知らない人",
                  "隣人"
                ],
                "correctAnswer": "友達",
                "difficulty": 1
              },
              {
                "id": "ja-b-04-6",
                "type": "repeat",
                "question": "跟读：お母さん、ありがとう。",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "お母さん、ありがとう。"
              }
            ]
          },
          {
            "levelId": "ja-daily-01",
            "title": "自我介绍",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "ja-basic-04"
            ],
            "questions": [
              {
                "id": "ja-d-01-1",
                "type": "translate",
                "question": "我叫...",
                "options": [
                  "私の名前は...",
                  "あなたは...",
                  "彼は...",
                  "彼女は..."
                ],
                "correctAnswer": "私の名前は...",
                "difficulty": 2
              },
              {
                "id": "ja-d-01-2",
                "type": "fill-blank",
                "question": "___です。（我是学生）",
                "options": [
                  "学生",
                  "先生",
                  "医者",
                  "会社員"
                ],
                "correctAnswer": "学生",
                "difficulty": 2
              },
              {
                "id": "ja-d-01-3",
                "type": "translate",
                "question": "请多关照",
                "options": [
                  "よろしくお願いします",
                  "さようなら",
                  "こんにちは",
                  "ありがとう"
                ],
                "correctAnswer": "よろしくお願いします",
                "difficulty": 2
              },
              {
                "id": "ja-d-01-4",
                "type": "match",
                "question": "自我介绍配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "我叫",
                    "我叫"
                  ],
                  [
                    "请多关照",
                    "请多关照"
                  ],
                  [
                    "谢谢",
                    "谢谢"
                  ],
                  [
                    "对不起",
                    "对不起"
                  ]
                ]
              },
              {
                "id": "ja-d-01-5",
                "type": "translate",
                "question": "我是日本人",
                "options": [
                  "私は日本人です",
                  "私は中国人です",
                  "私はアメリカ人です",
                  "私は韓国人です"
                ],
                "correctAnswer": "私は日本人です",
                "difficulty": 2
              },
              {
                "id": "ja-d-01-6",
                "type": "repeat",
                "question": "跟读：はじめまして、田中です。",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "はじめまして、田中です。"
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
            "levelId": "ja-daily-02",
            "title": "自我介绍",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "ja-t-00",
                "type": "translate",
                "question": "初次见面",
                "options": [
                  "おいしいです",
                  "いくらですか",
                  "たかすぎます",
                  "はじめまして"
                ],
                "correctAnswer": "はじめまして",
                "difficulty": 1
              },
              {
                "id": "ja-f-01",
                "type": "fill-blank",
                "question": "___ (我是…)",
                "options": [
                  "どこからきましたか",
                  "いくらですか",
                  "わたしは…です",
                  "おいしいです"
                ],
                "correctAnswer": "わたしは…です",
                "difficulty": 2
              },
              {
                "id": "ja-t-02",
                "type": "translate",
                "question": "您好吗？",
                "options": [
                  "はじめまして",
                  "おげんきですか",
                  "どこからきましたか",
                  "たかすぎます"
                ],
                "correctAnswer": "おげんきですか",
                "difficulty": 1
              },
              {
                "id": "ja-m-00",
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
                    "わたしは…です",
                    "我是…"
                  ],
                  [
                    "おげんきですか",
                    "您好吗？"
                  ],
                  [
                    "どこからきましたか",
                    "你从哪里来？"
                  ]
                ]
              },
              {
                "id": "ja-d-04",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "いくらですか",
                "difficulty": 2,
                "audioWord": "ikura desu ka"
              },
              {
                "id": "ja-r-05",
                "type": "repeat",
                "question": "跟读：これをください",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "これをください"
              }
            ]
          },
          {
            "levelId": "ja-daily-03",
            "title": "购物与消费",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "ja-daily-02"
            ],
            "questions": [
              {
                "id": "ja-t-00",
                "type": "translate",
                "question": "初次见面",
                "options": [
                  "どこからきましたか",
                  "これをください",
                  "はじめまして",
                  "おげんきですか"
                ],
                "correctAnswer": "はじめまして",
                "difficulty": 1
              },
              {
                "id": "ja-f-01",
                "type": "fill-blank",
                "question": "___ (我是…)",
                "options": [
                  "メニューをください",
                  "わたしは…です",
                  "いくらですか",
                  "みちにまよいました"
                ],
                "correctAnswer": "わたしは…です",
                "difficulty": 2
              },
              {
                "id": "ja-t-02",
                "type": "translate",
                "question": "您好吗？",
                "options": [
                  "おげんきですか",
                  "はじめまして",
                  "いくらですか",
                  "みちにまよいました"
                ],
                "correctAnswer": "おげんきですか",
                "difficulty": 1
              },
              {
                "id": "ja-m-00",
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
                    "わたしは…です",
                    "我是…"
                  ],
                  [
                    "おげんきですか",
                    "您好吗？"
                  ],
                  [
                    "どこからきましたか",
                    "你从哪里来？"
                  ]
                ]
              },
              {
                "id": "ja-d-04",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "いくらですか",
                "difficulty": 2,
                "audioWord": "ikura desu ka"
              },
              {
                "id": "ja-r-05",
                "type": "repeat",
                "question": "跟读：これをください",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "これをください"
              }
            ]
          },
          {
            "levelId": "ja-daily-04",
            "title": "餐厅与点餐",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "ja-daily-03"
            ],
            "questions": [
              {
                "id": "ja-t-00",
                "type": "translate",
                "question": "初次见面",
                "options": [
                  "はじめまして",
                  "おげんきですか",
                  "これをください",
                  "たかすぎます"
                ],
                "correctAnswer": "はじめまして",
                "difficulty": 1
              },
              {
                "id": "ja-f-01",
                "type": "fill-blank",
                "question": "___ (我是…)",
                "options": [
                  "わたしは…です",
                  "これをください",
                  "おげんきですか",
                  "はじめまして"
                ],
                "correctAnswer": "わたしは…です",
                "difficulty": 2
              },
              {
                "id": "ja-t-02",
                "type": "translate",
                "question": "您好吗？",
                "options": [
                  "おげんきですか",
                  "はじめまして",
                  "やすくなりませんか",
                  "わたしは…です"
                ],
                "correctAnswer": "おげんきですか",
                "difficulty": 1
              },
              {
                "id": "ja-m-00",
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
                    "わたしは…です",
                    "我是…"
                  ],
                  [
                    "おげんきですか",
                    "您好吗？"
                  ],
                  [
                    "どこからきましたか",
                    "你从哪里来？"
                  ]
                ]
              },
              {
                "id": "ja-d-04",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "いくらですか",
                "difficulty": 2,
                "audioWord": "ikura desu ka"
              },
              {
                "id": "ja-r-05",
                "type": "repeat",
                "question": "跟读：これをください",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "これをください"
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
                "id": "ja-t-00",
                "type": "translate",
                "question": "地铁站在哪里？",
                "options": [
                  "またあした",
                  "おやすみなさい",
                  "けいさつをよんでください",
                  "ちかてつはどこですか"
                ],
                "correctAnswer": "ちかてつはどこですか",
                "difficulty": 1
              },
              {
                "id": "ja-f-01",
                "type": "fill-blank",
                "question": "___ (坐出租车)",
                "options": [
                  "シングルルーム",
                  "けいさつをよんでください",
                  "ちかてつはどこですか",
                  "タクシーにのります"
                ],
                "correctAnswer": "タクシーにのります",
                "difficulty": 2
              },
              {
                "id": "ja-t-02",
                "type": "translate",
                "question": "我需要医生",
                "options": [
                  "いしゃがひつようです",
                  "たすけて",
                  "タクシーにのります",
                  "けいさつをよんでください"
                ],
                "correctAnswer": "いしゃがひつようです",
                "difficulty": 1
              },
              {
                "id": "ja-m-00",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "ちかてつはどこですか",
                    "地铁站在哪里？"
                  ],
                  [
                    "タクシーにのります",
                    "坐出租车"
                  ],
                  [
                    "いしゃがひつようです",
                    "我需要医生"
                  ],
                  [
                    "きぶんがわるいです",
                    "我不舒服"
                  ]
                ]
              },
              {
                "id": "ja-d-04",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "ホテルをよやくします",
                "difficulty": 2,
                "audioWord": "hoteru wo yoyaku shimasu"
              },
              {
                "id": "ja-r-05",
                "type": "repeat",
                "question": "跟读：シングルルーム",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "シングルルーム"
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
                "id": "ja-t-00",
                "type": "translate",
                "question": "地铁站在哪里？",
                "options": [
                  "ちかてつはどこですか",
                  "しつれいします",
                  "シングルルーム",
                  "いしゃがひつようです"
                ],
                "correctAnswer": "ちかてつはどこですか",
                "difficulty": 1
              },
              {
                "id": "ja-f-01",
                "type": "fill-blank",
                "question": "___ (坐出租车)",
                "options": [
                  "けいさつをよんでください",
                  "シングルルーム",
                  "タクシーにのります",
                  "たすけて"
                ],
                "correctAnswer": "タクシーにのります",
                "difficulty": 2
              },
              {
                "id": "ja-t-02",
                "type": "translate",
                "question": "我需要医生",
                "options": [
                  "きぶんがわるいです",
                  "いしゃがひつようです",
                  "しつれいします",
                  "けいさつをよんでください"
                ],
                "correctAnswer": "いしゃがひつようです",
                "difficulty": 1
              },
              {
                "id": "ja-m-00",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "ちかてつはどこですか",
                    "地铁站在哪里？"
                  ],
                  [
                    "タクシーにのります",
                    "坐出租车"
                  ],
                  [
                    "いしゃがひつようです",
                    "我需要医生"
                  ],
                  [
                    "きぶんがわるいです",
                    "我不舒服"
                  ]
                ]
              },
              {
                "id": "ja-d-04",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "ホテルをよやくします",
                "difficulty": 2,
                "audioWord": "hoteru wo yoyaku shimasu"
              },
              {
                "id": "ja-r-05",
                "type": "repeat",
                "question": "跟读：シングルルーム",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "シングルルーム"
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
                "id": "ja-t-00",
                "type": "translate",
                "question": "地铁站在哪里？",
                "options": [
                  "ちかてつはどこですか",
                  "シングルルーム",
                  "しつれいします",
                  "ホテルをよやくします"
                ],
                "correctAnswer": "ちかてつはどこですか",
                "difficulty": 1
              },
              {
                "id": "ja-f-01",
                "type": "fill-blank",
                "question": "___ (坐出租车)",
                "options": [
                  "タクシーにのります",
                  "またあした",
                  "しつれいします",
                  "おはようございます"
                ],
                "correctAnswer": "タクシーにのります",
                "difficulty": 2
              },
              {
                "id": "ja-t-02",
                "type": "translate",
                "question": "我需要医生",
                "options": [
                  "きぶんがわるいです",
                  "シングルルーム",
                  "いしゃがひつようです",
                  "タクシーにのります"
                ],
                "correctAnswer": "いしゃがひつようです",
                "difficulty": 1
              },
              {
                "id": "ja-m-00",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "ちかてつはどこですか",
                    "地铁站在哪里？"
                  ],
                  [
                    "タクシーにのります",
                    "坐出租车"
                  ],
                  [
                    "いしゃがひつようです",
                    "我需要医生"
                  ],
                  [
                    "きぶんがわるいです",
                    "我不舒服"
                  ]
                ]
              },
              {
                "id": "ja-d-04",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "ホテルをよやくします",
                "difficulty": 2,
                "audioWord": "hoteru wo yoyaku shimasu"
              },
              {
                "id": "ja-r-05",
                "type": "repeat",
                "question": "跟读：シングルルーム",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "シングルルーム"
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
                "id": "ja-t-00",
                "type": "translate",
                "question": "吃（礼貌形）",
                "options": [
                  "たべました",
                  "いきます",
                  "たべます",
                  "いきました"
                ],
                "correctAnswer": "たべます",
                "difficulty": 1
              },
              {
                "id": "ja-f-01",
                "type": "fill-blank",
                "question": "___ (吃了（过去式）)",
                "options": [
                  "いきました",
                  "です",
                  "いきます",
                  "たべました"
                ],
                "correctAnswer": "たべました",
                "difficulty": 2
              },
              {
                "id": "ja-t-02",
                "type": "translate",
                "question": "去（礼貌形）",
                "options": [
                  "いきます",
                  "たべました",
                  "でした",
                  "いきました"
                ],
                "correctAnswer": "いきます",
                "difficulty": 1
              },
              {
                "id": "ja-m-00",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "たべます",
                    "吃（礼貌形）"
                  ],
                  [
                    "たべました",
                    "吃了（过去式）"
                  ],
                  [
                    "いきます",
                    "去（礼貌形）"
                  ],
                  [
                    "いきました",
                    "去了（过去式）"
                  ]
                ]
              },
              {
                "id": "ja-d-04",
                "type": "dictation",
                "question": "听写：是（判断助动词）",
                "correctAnswer": "です",
                "difficulty": 2,
                "audioWord": "desu"
              },
              {
                "id": "ja-r-05",
                "type": "repeat",
                "question": "跟读：でした",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "でした"
              }
            ]
          },
          {
            "levelId": "ja-grammar-02",
            "title": "名词与形容词",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "ja-grammar-01"
            ],
            "questions": [
              {
                "id": "ja-t-00",
                "type": "translate",
                "question": "吃（礼貌形）",
                "options": [
                  "でした",
                  "いきます",
                  "いきました",
                  "たべます"
                ],
                "correctAnswer": "たべます",
                "difficulty": 1
              },
              {
                "id": "ja-f-01",
                "type": "fill-blank",
                "question": "___ (吃了（过去式）)",
                "options": [
                  "いきます",
                  "でした",
                  "たべました",
                  "いきました"
                ],
                "correctAnswer": "たべました",
                "difficulty": 2
              },
              {
                "id": "ja-t-02",
                "type": "translate",
                "question": "去（礼貌形）",
                "options": [
                  "いきます",
                  "たべます",
                  "です",
                  "でした"
                ],
                "correctAnswer": "いきます",
                "difficulty": 1
              },
              {
                "id": "ja-m-00",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "たべます",
                    "吃（礼貌形）"
                  ],
                  [
                    "たべました",
                    "吃了（过去式）"
                  ],
                  [
                    "いきます",
                    "去（礼貌形）"
                  ],
                  [
                    "いきました",
                    "去了（过去式）"
                  ]
                ]
              },
              {
                "id": "ja-d-04",
                "type": "dictation",
                "question": "听写：是（判断助动词）",
                "correctAnswer": "です",
                "difficulty": 2,
                "audioWord": "desu"
              },
              {
                "id": "ja-r-05",
                "type": "repeat",
                "question": "跟读：でした",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "でした"
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
                "id": "ja-t-00",
                "type": "translate",
                "question": "正月/新年",
                "options": [
                  "おしょうがつ",
                  "おはなみ",
                  "おぼん",
                  "こいのぼり"
                ],
                "correctAnswer": "おしょうがつ",
                "difficulty": 1
              },
              {
                "id": "ja-f-01",
                "type": "fill-blank",
                "question": "___ (赏花)",
                "options": [
                  "おはなみ",
                  "こいのぼり",
                  "おしょうがつ",
                  "おぼん"
                ],
                "correctAnswer": "おはなみ",
                "difficulty": 2
              },
              {
                "id": "ja-t-02",
                "type": "translate",
                "question": "鲤鱼旗",
                "options": [
                  "おしょうがつ",
                  "おぼん",
                  "こいのぼり",
                  "おはなみ"
                ],
                "correctAnswer": "こいのぼり",
                "difficulty": 1
              },
              {
                "id": "ja-m-00",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "おしょうがつ",
                    "正月/新年"
                  ],
                  [
                    "おはなみ",
                    "赏花"
                  ],
                  [
                    "こいのぼり",
                    "鲤鱼旗"
                  ],
                  [
                    "おぼん",
                    "盂兰盆节"
                  ]
                ]
              },
              {
                "id": "ja-d-00",
                "type": "dictation",
                "question": "听写：正月/新年",
                "correctAnswer": "おしょうがつ",
                "difficulty": 2,
                "audioWord": "oshougatsu"
              },
              {
                "id": "ja-r-01",
                "type": "repeat",
                "question": "跟读：おはなみ",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "おはなみ"
              }
            ]
          },
          {
            "levelId": "ja-culture-02",
            "title": "美食与文化",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "ja-culture-01"
            ],
            "questions": [
              {
                "id": "ja-t-00",
                "type": "translate",
                "question": "正月/新年",
                "options": [
                  "おはなみ",
                  "おしょうがつ",
                  "おぼん",
                  "こいのぼり"
                ],
                "correctAnswer": "おしょうがつ",
                "difficulty": 1
              },
              {
                "id": "ja-f-01",
                "type": "fill-blank",
                "question": "___ (赏花)",
                "options": [
                  "おしょうがつ",
                  "おはなみ",
                  "おぼん",
                  "こいのぼり"
                ],
                "correctAnswer": "おはなみ",
                "difficulty": 2
              },
              {
                "id": "ja-t-02",
                "type": "translate",
                "question": "鲤鱼旗",
                "options": [
                  "こいのぼり",
                  "おしょうがつ",
                  "おぼん",
                  "おはなみ"
                ],
                "correctAnswer": "こいのぼり",
                "difficulty": 1
              },
              {
                "id": "ja-m-00",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "おしょうがつ",
                    "正月/新年"
                  ],
                  [
                    "おはなみ",
                    "赏花"
                  ],
                  [
                    "こいのぼり",
                    "鲤鱼旗"
                  ],
                  [
                    "おぼん",
                    "盂兰盆节"
                  ]
                ]
              },
              {
                "id": "ja-d-00",
                "type": "dictation",
                "question": "听写：正月/新年",
                "correctAnswer": "おしょうがつ",
                "difficulty": 2,
                "audioWord": "oshougatsu"
              },
              {
                "id": "ja-r-01",
                "type": "repeat",
                "question": "跟读：おはなみ",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "おはなみ"
              }
            ]
          }
        ]
      }
    ,
      {
        "id": "adjective",
        "name": "形容詞",
        "color": "#F59E0B",
        "levels": [
{
            "levelId": "ja-adj-01",
            "title": "\u3044\u5f62\u5bb9\u8a5e",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [],
            "questions": [
              {
                "id": "ja-a01-1",
                "type": "translate",
                "question": "\u5927\u304d\u3044",
                "options": [
                  "\u5927\u7684",
                  "\u5c0f\u7684",
                  "\u65b0\u7684",
                  "\u65e7\u7684"
                ],
                "correctAnswer": "\u5927\u7684",
                "difficulty": 1
              },
              {
                "id": "ja-a01-2",
                "type": "translate",
                "question": "\u9ad8\u3044",
                "options": [
                  "\u9ad8\u7684",
                  "\u77ee\u7684",
                  "\u957f\u7684",
                  "\u77ed\u7684"
                ],
                "correctAnswer": "\u9ad8\u7684",
                "difficulty": 1
              },
              {
                "id": "ja-a01-3",
                "type": "fill-blank",
                "question": "\u3053\u306e\u30b1\u30fc\u30ad\u306f___\u3002\uff08\u8fd9\u4e2a\u86cb\u7cd5\u5f88\u597d\u5403\uff09",
                "options": [
                  "\u304a\u3044\u3057\u3044",
                  "\u307e\u305a\u3044",
                  "\u9ad8\u3044",
                  "\u5927\u304d\u3044"
                ],
                "correctAnswer": "\u304a\u3044\u3057\u3044",
                "difficulty": 2
              },
              {
                "id": "ja-a01-4",
                "type": "match",
                "question": "\u5f62\u5bb9\u8bcd\u914d\u5bf9",
                "pairs": [
                  ["\u9ad8\u3044", "\u9ad8\u7684"],
                  ["\u4f4e\u3044", "\u77ee\u7684"],
                  ["\u65b0\u3057\u3044", "\u65b0\u7684"],
                  ["\u53e4\u3044", "\u65e7\u7684"]
                ],
                "correctAnswer": "match",
                "difficulty": 2
              }
            ]
          },
{
            "levelId": "ja-adj-02",
            "title": "\u306a\u5f62\u5bb9\u8a5e",
            "timeLimit": 150,
            "minScoreFor1Star": 35,
            "minScoreFor2Star": 55,
            "minScoreFor3Star": 75,
            "prerequisites": ["ja-adj-01"],
            "questions": [
              {
                "id": "ja-a02-1",
                "type": "translate",
                "question": "\u304d\u308c\u3044",
                "options": [
                  "\u6f02\u4eae",
                  "\u4e11\u964b",
                  "\u5e72\u51c0",
                  "\u810f"
                ],
                "correctAnswer": "\u6f02\u4eae",
                "difficulty": 1
              },
              {
                "id": "ja-a02-2",
                "type": "translate",
                "question": "\u4fbf\u5229",
                "options": [
                  "\u65b9\u4fbf",
                  "\u9ebb\u70e6",
                  "\u56f0\u96be",
                  "\u7b80\u5355"
                ],
                "correctAnswer": "\u65b9\u4fbf",
                "difficulty": 1
              },
              {
                "id": "ja-a02-3",
                "type": "fill-blank",
                "question": "\u3053\u306e\u753a\u306f___\u3067\u3059\u3002\uff08\u8fd9\u5ea7\u57ce\u5e02\u5f88\u5b89\u9759\uff09",
                "options": [
                  "\u9759\u304b",
                  "\u4fbf\u5229",
                  "\u304d\u308c\u3044",
                  "\u5143\u6c17"
                ],
                "correctAnswer": "\u9759\u304b",
                "difficulty": 2
              }
            ]
          }
        ]
      },
      {
        "id": "verb",
        "name": "動詞",
        "color": "#EC4899",
        "levels": [
{
            "levelId": "ja-verb-01",
            "title": "\u52d5\u8a5e\u306e\u57fa\u672c",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [],
            "questions": [
              {
                "id": "ja-v01-1",
                "type": "translate",
                "question": "\u98df\u3079\u308b",
                "options": [
                  "\u5403",
                  "\u559d",
                  "\u8d70",
                  "\u8bf4"
                ],
                "correctAnswer": "\u5403",
                "difficulty": 1
              },
              {
                "id": "ja-v01-2",
                "type": "translate",
                "question": "\u884c\u304f",
                "options": [
                  "\u6765",
                  "\u53bb",
                  "\u56de",
                  "\u505c"
                ],
                "correctAnswer": "\u53bb",
                "difficulty": 1
              },
              {
                "id": "ja-v01-3",
                "type": "fill-blank",
                "question": "\u672c\u3092___\u3002\uff08\u8bfb\u4e66\uff09",
                "options": [
                  "\u8aad\u3080",
                  "\u66f8\u304f",
                  "\u8cb7\u3046",
                  "\u98df\u3079\u308b"
                ],
                "correctAnswer": "\u8aad\u3080",
                "difficulty": 2
              },
              {
                "id": "ja-v01-4",
                "type": "match",
                "question": "\u52a8\u8bcd\u914d\u5bf9",
                "pairs": [
                  ["\u98df\u3079\u308b", "\u5403"],
                  ["\u98f2\u3080", "\u559d"],
                  ["\u898b\u308b", "\u770b"],
                  ["\u805e\u304f", "\u542c"]
                ],
                "correctAnswer": "match",
                "difficulty": 2
              }
            ]
          },
{
            "levelId": "ja-verb-02",
            "title": "\u52d5\u8a5e\u306e\u6d3b\u7528",
            "timeLimit": 150,
            "minScoreFor1Star": 35,
            "minScoreFor2Star": 55,
            "minScoreFor3Star": 75,
            "prerequisites": ["ja-verb-01"],
            "questions": [
              {
                "id": "ja-v02-1",
                "type": "translate",
                "question": "\u98df\u3079\u307e\u3057\u305f",
                "options": [
                  "\u5403\u4e86",
                  "\u8981\u5403",
                  "\u4e0d\u5403",
                  "\u5403\u5427"
                ],
                "correctAnswer": "\u5403\u4e86",
                "difficulty": 2
              },
              {
                "id": "ja-v02-2",
                "type": "fill-blank",
                "question": "\u6628\u65e5\u3001\u6620\u753b\u3092___\u3002\uff08\u6628\u5929\u770b\u4e86\u7535\u5f71\uff09",
                "options": [
                  "\u898b\u308b",
                  "\u898b\u305f",
                  "\u898b\u3066\u3044\u308b",
                  "\u898b\u3088\u3046"
                ],
                "correctAnswer": "\u898b\u305f",
                "difficulty": 2
              },
              {
                "id": "ja-v02-3",
                "type": "translate",
                "question": "\u884c\u304d\u307e\u305b\u3093",
                "options": [
                  "\u4e0d\u53bb",
                  "\u53bb\u4e86",
                  "\u53bb\u5427",
                  "\u60f3\u53bb"
                ],
                "correctAnswer": "\u4e0d\u53bb",
                "difficulty": 2
              }
            ]
          }
        ]
      }]
  },
  "yue": {
    "themes": [
      {
        "id": "basic",
        "name": "基础词汇",
        "color": "#10B981",
        "levels": [
          {
            "levelId": "yue-basic-01",
            "title": "问候与礼貌",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [],
            "questions": [
              {
                "id": "yue-b-01-1",
                "type": "translate",
                "question": "你好",
                "options": [
                  "唔该",
                  "你好",
                  "早晨",
                  "早唞"
                ],
                "correctAnswer": "你好",
                "difficulty": 1
              },
              {
                "id": "yue-b-01-2",
                "type": "translate",
                "question": "谢谢",
                "options": [
                  "唔该/多谢",
                  "对唔住",
                  "早晨",
                  "系"
                ],
                "correctAnswer": "唔该/多谢",
                "difficulty": 1
              },
              {
                "id": "yue-b-01-3",
                "type": "fill-blank",
                "question": "早晨，___！（早上好，老师！）",
                "options": [
                  "老师",
                  "学生",
                  "朋友",
                  "屋企"
                ],
                "correctAnswer": "老师",
                "difficulty": 1
              },
              {
                "id": "yue-b-01-4",
                "type": "match",
                "question": "粤语配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "早晨",
                    "早上好"
                  ],
                  [
                    "早唞",
                    "晚安"
                  ],
                  [
                    "多谢",
                    "谢谢"
                  ],
                  [
                    "对唔住",
                    "对不起"
                  ]
                ]
              },
              {
                "id": "yue-b-01-5",
                "type": "translate",
                "question": "家",
                "options": [
                  "屋企",
                  "学校",
                  "餐厅",
                  "酒店"
                ],
                "correctAnswer": "屋企",
                "difficulty": 1
              },
              {
                "id": "yue-b-01-6",
                "type": "dictation",
                "question": "听写：朋友",
                "correctAnswer": "朋友",
                "difficulty": 2,
                "audioWord": "朋友"
              }
            ]
          },
          {
            "levelId": "yue-basic-02",
            "title": "饮食与生活",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "yue-basic-01"
            ],
            "questions": [
              {
                "id": "yue-b-02-1",
                "type": "translate",
                "question": "吃饭",
                "options": [
                  "食饭",
                  "饮茶",
                  "食嘢",
                  "饮水"
                ],
                "correctAnswer": "食饭",
                "difficulty": 1
              },
              {
                "id": "yue-b-02-2",
                "type": "translate",
                "question": "喝茶",
                "options": [
                  "饮水",
                  "饮茶",
                  "食茶",
                  "咖啡"
                ],
                "correctAnswer": "饮茶",
                "difficulty": 1
              },
              {
                "id": "yue-b-02-3",
                "type": "fill-blank",
                "question": "食咗___未？（吃饭了吗）",
                "options": [
                  "饭",
                  "茶",
                  "水",
                  "嘢"
                ],
                "correctAnswer": "饭",
                "difficulty": 2
              },
              {
                "id": "yue-b-02-4",
                "type": "match",
                "question": "饮食配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "食饭",
                    "吃饭"
                  ],
                  [
                    "饮茶",
                    "喝茶"
                  ],
                  [
                    "几多钱",
                    "多少钱"
                  ],
                  [
                    "唔该晒",
                    "非常感谢"
                  ]
                ]
              },
              {
                "id": "yue-b-02-5",
                "type": "translate",
                "question": "好漂亮",
                "options": [
                  "好靓",
                  "好丑",
                  "好高",
                  "好矮"
                ],
                "correctAnswer": "好靓",
                "difficulty": 1
              },
              {
                "id": "yue-b-02-6",
                "type": "translate",
                "question": "去哪里",
                "options": [
                  "去边度",
                  "做乜嘢",
                  "点解",
                  "几时"
                ],
                "correctAnswer": "去边度",
                "difficulty": 2
              }
            ]
          },
          {
            "levelId": "yue-basic-03",
            "title": "家庭与人物",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "yue-basic-02"
            ],
            "questions": [
              {
                "id": "yue-b-03-1",
                "type": "translate",
                "question": "妈妈",
                "options": [
                  "妈妈",
                  "爸爸",
                  "哥哥",
                  "姐姐"
                ],
                "correctAnswer": "妈妈",
                "difficulty": 1
              },
              {
                "id": "yue-b-03-2",
                "type": "translate",
                "question": "爸爸",
                "options": [
                  "爸爸",
                  "妈妈",
                  "哥哥",
                  "姐姐"
                ],
                "correctAnswer": "爸爸",
                "difficulty": 1
              },
              {
                "id": "yue-b-03-3",
                "type": "fill-blank",
                "question": "___係边个？（那是谁？）",
                "options": [
                  "嗰个",
                  "呢个",
                  "边个",
                  "呢度"
                ],
                "correctAnswer": "嗰个",
                "difficulty": 2
              },
              {
                "id": "yue-b-03-4",
                "type": "match",
                "question": "亲属配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "妈妈",
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
                "id": "yue-b-03-5",
                "type": "translate",
                "question": "朋友",
                "options": [
                  "朋友",
                  "敌人",
                  "陌生人",
                  "邻居"
                ],
                "correctAnswer": "朋友",
                "difficulty": 1
              },
              {
                "id": "yue-b-03-6",
                "type": "repeat",
                "question": "跟读：我妈妈好靓。",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "我妈妈好靓。"
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
            "levelId": "yue-daily-01",
            "title": "问路与出行",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "yue-d-01-1",
                "type": "translate",
                "question": "地铁站在哪里？",
                "options": [
                  "地铁站喺边度？",
                  "几钱？",
                  "而家几点？",
                  "你住喺边？"
                ],
                "correctAnswer": "地铁站喺边度？",
                "difficulty": 2
              },
              {
                "id": "yue-d-01-2",
                "type": "fill-blank",
                "question": "搭___去机场。（坐出租车去机场）",
                "options": [
                  "巴士",
                  "地铁",
                  "的士",
                  "飞机"
                ],
                "correctAnswer": "的士",
                "difficulty": 2
              },
              {
                "id": "yue-d-01-3",
                "type": "translate",
                "question": "多少钱？",
                "options": [
                  "几多？",
                  "几钱？",
                  "几耐？",
                  "几远？"
                ],
                "correctAnswer": "几钱？",
                "difficulty": 2
              },
              {
                "id": "yue-d-01-4",
                "type": "match",
                "question": "出行配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "机场",
                    "机场"
                  ],
                  [
                    "酒店",
                    "酒店"
                  ],
                  [
                    "餐厅",
                    "餐厅"
                  ],
                  [
                    "车站",
                    "车站"
                  ]
                ]
              },
              {
                "id": "yue-d-01-5",
                "type": "translate",
                "question": "我迷路了",
                "options": [
                  "我荡失路",
                  "我攰",
                  "我饿",
                  "我病"
                ],
                "correctAnswer": "我荡失路",
                "difficulty": 2
              },
              {
                "id": "yue-d-01-6",
                "type": "dictation",
                "question": "听写：餐厅",
                "correctAnswer": "餐厅",
                "difficulty": 2,
                "audioWord": "餐厅"
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
        "color": "#8B5CF6",
        "levels": [
          {
            "levelId": "ko-basic-01",
            "title": "问候入门",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [],
            "questions": [
              {
                "id": "ko-b-01-1",
                "type": "translate",
                "question": "你好",
                "options": [
                  "안녕하세요",
                  "감사합니다",
                  "미안해요",
                  "안녕히"
                ],
                "correctAnswer": "안녕하세요",
                "difficulty": 1
              },
              {
                "id": "ko-b-01-2",
                "type": "translate",
                "question": "谢谢",
                "options": [
                  "감사합니다",
                  "안녕하세요",
                  "아니요",
                  "네"
                ],
                "correctAnswer": "감사합니다",
                "difficulty": 1
              },
              {
                "id": "ko-b-01-3",
                "type": "fill-blank",
                "question": "만나서 ___습니다.（很高兴认识你）",
                "options": [
                  "반갑",
                  "감사",
                  "미안",
                  "안녕"
                ],
                "correctAnswer": "반갑",
                "difficulty": 2
              },
              {
                "id": "ko-b-01-4",
                "type": "match",
                "question": "韩语配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "네",
                    "是"
                  ],
                  [
                    "아니요",
                    "不是"
                  ],
                  [
                    "사랑",
                    "爱"
                  ],
                  [
                    "친구",
                    "朋友"
                  ]
                ]
              },
              {
                "id": "ko-b-01-5",
                "type": "translate",
                "question": "我爱你",
                "options": [
                  "사랑해요",
                  "감사해요",
                  "미안해요",
                  "안녕해요"
                ],
                "correctAnswer": "사랑해요",
                "difficulty": 2
              },
              {
                "id": "ko-b-01-6",
                "type": "dictation",
                "question": "听写：水",
                "correctAnswer": "물",
                "difficulty": 2,
                "audioWord": "물"
              }
            ]
          },
          {
            "levelId": "ko-basic-02",
            "title": "数字与颜色",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "ko-basic-01"
            ],
            "questions": [
              {
                "id": "ko-b-02-1",
                "type": "translate",
                "question": "红色",
                "options": [
                  "빨간색",
                  "파란색",
                  "노란색",
                  "초록색"
                ],
                "correctAnswer": "빨간색",
                "difficulty": 1
              },
              {
                "id": "ko-b-02-2",
                "type": "translate",
                "question": "三",
                "options": [
                  "하나",
                  "둘",
                  "셋",
                  "넷"
                ],
                "correctAnswer": "셋",
                "difficulty": 1
              },
              {
                "id": "ko-b-02-3",
                "type": "fill-blank",
                "question": "하늘은 ___색이다.（天空是蓝色的）",
                "options": [
                  "빨간",
                  "파란",
                  "초록",
                  "하얀"
                ],
                "correctAnswer": "파란",
                "difficulty": 1
              },
              {
                "id": "ko-b-02-4",
                "type": "match",
                "question": "数字配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "하나",
                    "一"
                  ],
                  [
                    "둘",
                    "二"
                  ],
                  [
                    "셋",
                    "三"
                  ],
                  [
                    "넷",
                    "四"
                  ]
                ]
              },
              {
                "id": "ko-b-02-5",
                "type": "translate",
                "question": "绿色",
                "options": [
                  "빨간색",
                  "파란색",
                  "초록색",
                  "검은색"
                ],
                "correctAnswer": "초록색",
                "difficulty": 1
              },
              {
                "id": "ko-b-02-6",
                "type": "dictation",
                "question": "听写：苹果",
                "correctAnswer": "사과",
                "difficulty": 2,
                "audioWord": "sagwa"
              }
            ]
          },
          {
            "levelId": "ko-basic-03",
            "title": "家庭与人物",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "ko-basic-02"
            ],
            "questions": [
              {
                "id": "ko-b-03-1",
                "type": "translate",
                "question": "妈妈",
                "options": [
                  "엄마",
                  "아빠",
                  "오빠",
                  "언니"
                ],
                "correctAnswer": "엄마",
                "difficulty": 1
              },
              {
                "id": "ko-b-03-2",
                "type": "translate",
                "question": "朋友",
                "options": [
                  "친구",
                  "적",
                  "낯선 사람",
                  "이웃"
                ],
                "correctAnswer": "친구",
                "difficulty": 1
              },
              {
                "id": "ko-b-03-3",
                "type": "fill-blank",
                "question": "___는 누구예요?（那是谁？）",
                "options": [
                  "저",
                  "이",
                  "그",
                  "저"
                ],
                "correctAnswer": "저",
                "difficulty": 2
              },
              {
                "id": "ko-b-03-4",
                "type": "match",
                "question": "亲属配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "妈妈",
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
                "id": "ko-b-03-5",
                "type": "translate",
                "question": "家人",
                "options": [
                  "가족",
                  "친구",
                  "선생님",
                  "동창"
                ],
                "correctAnswer": "가족",
                "difficulty": 1
              },
              {
                "id": "ko-b-03-6",
                "type": "dictation",
                "question": "听写：妈妈",
                "correctAnswer": "妈妈",
                "difficulty": 2,
                "audioWord": "eomma"
              }
            ]
          },
          {
            "levelId": "ko-daily-02",
            "title": "餐厅与点餐",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "ko-daily-01"
            ],
            "questions": [
              {
                "id": "ko-d-02-1",
                "type": "translate",
                "question": "我要这个",
                "options": [
                  "이거 주세요",
                  "저거 주세요",
                  "싫어요",
                  "감사합니다"
                ],
                "correctAnswer": "이거 주세요",
                "difficulty": 2
              },
              {
                "id": "ko-d-02-2",
                "type": "fill-blank",
                "question": "___ 주세요.（请给我水）",
                "options": [
                  "물",
                  "밥",
                  "차",
                  "커피"
                ],
                "correctAnswer": "물",
                "difficulty": 2
              },
              {
                "id": "ko-d-02-3",
                "type": "translate",
                "question": "请给我菜单",
                "options": [
                  "메뉴판 주세요",
                  "물 주세요",
                  "계산서 주세요",
                  "젓가락 주세요"
                ],
                "correctAnswer": "메뉴판 주세요",
                "difficulty": 2
              },
              {
                "id": "ko-d-02-4",
                "type": "match",
                "question": "餐厅用语配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "菜单",
                    "菜单"
                  ],
                  [
                    "账单",
                    "账单"
                  ],
                  [
                    "服务员",
                    "服务员"
                  ],
                  [
                    "水",
                    "水"
                  ]
                ]
              },
              {
                "id": "ko-d-02-5",
                "type": "translate",
                "question": "很好吃",
                "options": [
                  "맛있어요",
                  "맛없어요",
                  "비싸요",
                  "싸요"
                ],
                "correctAnswer": "맛있어요",
                "difficulty": 2
              },
              {
                "id": "ko-d-02-6",
                "type": "repeat",
                "question": "跟读：맛있어요!",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "맛있어요!"
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
            "levelId": "ko-daily-01",
            "title": "自我介绍",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "ko-d-01-1",
                "type": "translate",
                "question": "我的名字是…",
                "options": [
                  "제 이름은…",
                  "저는 학생입니다",
                  "만나서 반갑습니다",
                  "안녕하세요"
                ],
                "correctAnswer": "제 이름은…",
                "difficulty": 2
              },
              {
                "id": "ko-d-01-2",
                "type": "fill-blank",
                "question": "만나서 ___습니다.（很高兴认识你）",
                "options": [
                  "반갑",
                  "감사",
                  "미안",
                  "안녕"
                ],
                "correctAnswer": "반갑",
                "difficulty": 2
              },
              {
                "id": "ko-d-01-3",
                "type": "translate",
                "question": "你从哪里来？",
                "options": [
                  "어디에서 왔어요?",
                  "이름이 뭐예요?",
                  "몇 살이에요?",
                  "어디 가요?"
                ],
                "correctAnswer": "어디에서 왔어요?",
                "difficulty": 2
              },
              {
                "id": "ko-d-01-4",
                "type": "repeat",
                "question": "跟读：제 이름은 토마스입니다.",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "제 이름은 토마스입니다."
              },
              {
                "id": "ko-d-01-5",
                "type": "dictation",
                "question": "听写：朋友",
                "correctAnswer": "친구",
                "difficulty": 2,
                "audioWord": "chingu"
              },
              {
                "id": "ko-d-01-6",
                "type": "match",
                "question": "对话配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "안녕하세요",
                    "你好"
                  ],
                  [
                    "안녕히 가세요",
                    "再见"
                  ],
                  [
                    "감사합니다",
                    "谢谢"
                  ],
                  [
                    "미안합니다",
                    "对不起"
                  ]
                ]
              }
            ]
          }
        ]
      }
    ,
      {
        "id": "number",
        "name": "숫자",
        "color": "#F59E0B",
        "levels": [
{
            "levelId": "ko-num-01",
            "title": "\uc22b\uc790 (\u6570\u5b57)",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [],
            "questions": [
              {
                "id": "ko-n01-1",
                "type": "translate",
                "question": "\ud558\ub098",
                "options": [
                  "\u4e00",
                  "\u4e8c",
                  "\u4e09",
                  "\u56db"
                ],
                "correctAnswer": "\u4e00",
                "difficulty": 1
              },
              {
                "id": "ko-n01-2",
                "type": "translate",
                "question": "\uc5f4",
                "options": [
                  "\u4e94",
                  "\u5341",
                  "\u767e",
                  "\u5343"
                ],
                "correctAnswer": "\u5341",
                "difficulty": 1
              },
              {
                "id": "ko-n01-3",
                "type": "fill-blank",
                "question": "___\uc2dc\uc608\uc694.\uff08\u4e24\u70b9\uff09",
                "options": [
                  "\ud55c",
                  "\ub450",
                  "\uc138",
                  "\ub124"
                ],
                "correctAnswer": "\ub450",
                "difficulty": 2
              },
              {
                "id": "ko-n01-4",
                "type": "match",
                "question": "\u6570\u5b57\u914d\u5bf9",
                "pairs": [
                  ["\ud558\ub098", "\u4e00"],
                  ["\ub458", "\u4e8c"],
                  ["\uc14b", "\u4e09"],
                  ["\ub137", "\u56db"]
                ],
                "correctAnswer": "match",
                "difficulty": 2
              }
            ]
          }
        ]
      },
      {
        "id": "time",
        "name": "시간",
        "color": "#8B5CF6",
        "levels": [
{
            "levelId": "ko-time-02",
            "title": "\uc2dc\uac04 (\u65f6\u95f4)",
            "timeLimit": 150,
            "minScoreFor1Star": 35,
            "minScoreFor2Star": 55,
            "minScoreFor3Star": 75,
            "prerequisites": ["ko-num-01"],
            "questions": [
              {
                "id": "ko-t02-1",
                "type": "translate",
                "question": "\uc624\ub298",
                "options": [
                  "\u4eca\u5929",
                  "\u660e\u5929",
                  "\u6628\u5929",
                  "\u6bcf\u5929"
                ],
                "correctAnswer": "\u4eca\u5929",
                "difficulty": 1
              },
              {
                "id": "ko-t02-2",
                "type": "translate",
                "question": "\uc544\uce68",
                "options": [
                  "\u65e9\u4e0a",
                  "\u4e2d\u5348",
                  "\u665a\u4e0a",
                  "\u6df1\u591c"
                ],
                "correctAnswer": "\u65e9\u4e0a",
                "difficulty": 1
              },
              {
                "id": "ko-t02-3",
                "type": "fill-blank",
                "question": "___\uc5d0 \ub9cc\ub098\uc694.\uff08\u4e0b\u5348\u89c1\u9762\uff09",
                "options": [
                  "\uc544\uce68",
                  "\uc810\uc2ec",
                  "\uc800\ub141",
                  "\ubc24"
                ],
                "correctAnswer": "\uc800\ub141",
                "difficulty": 2
              }
            ]
          }
        ]
      }]
  },
  "es": {
    "themes": [
      {
        "id": "basic",
        "name": "基础词汇",
        "color": "#F59E0B",
        "levels": [
          {
            "levelId": "es-basic-01",
            "title": "问候入门",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [],
            "questions": [
              {
                "id": "es-b-01-1",
                "type": "translate",
                "question": "你好",
                "options": [
                  "hola",
                  "gracias",
                  "adiós",
                  "buenos"
                ],
                "correctAnswer": "hola",
                "difficulty": 1
              },
              {
                "id": "es-b-01-2",
                "type": "translate",
                "question": "谢谢",
                "options": [
                  "hola",
                  "gracias",
                  "sí",
                  "no"
                ],
                "correctAnswer": "gracias",
                "difficulty": 1
              },
              {
                "id": "es-b-01-3",
                "type": "fill-blank",
                "question": "___ días.（早上好）",
                "options": [
                  "Buenos",
                  "Buenas",
                  "Buen",
                  "Muy"
                ],
                "correctAnswer": "Buenos",
                "difficulty": 1
              },
              {
                "id": "es-b-01-4",
                "type": "match",
                "question": "西语配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "hola",
                    "你好"
                  ],
                  [
                    "gracias",
                    "谢谢"
                  ],
                  [
                    "amor",
                    "爱"
                  ],
                  [
                    "amigo",
                    "朋友"
                  ]
                ]
              },
              {
                "id": "es-b-01-5",
                "type": "translate",
                "question": "我爱你",
                "options": [
                  "te amo",
                  "te quiero",
                  "me gusta",
                  "lo siento"
                ],
                "correctAnswer": "te amo",
                "difficulty": 2
              },
              {
                "id": "es-b-01-6",
                "type": "dictation",
                "question": "听写：水",
                "correctAnswer": "agua",
                "difficulty": 2,
                "audioWord": "agua"
              }
            ]
          },
          {
            "levelId": "es-basic-02",
            "title": "数字与颜色",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "es-basic-01"
            ],
            "questions": [
              {
                "id": "es-b-02-1",
                "type": "translate",
                "question": "红色",
                "options": [
                  "rojo",
                  "azul",
                  "verde",
                  "amarillo"
                ],
                "correctAnswer": "rojo",
                "difficulty": 1
              },
              {
                "id": "es-b-02-2",
                "type": "translate",
                "question": "三",
                "options": [
                  "uno",
                  "dos",
                  "tres",
                  "cuatro"
                ],
                "correctAnswer": "tres",
                "difficulty": 1
              },
              {
                "id": "es-b-02-3",
                "type": "fill-blank",
                "question": "El cielo es ___.（天空是蓝色的）",
                "options": [
                  "rojo",
                  "azul",
                  "verde",
                  "blanco"
                ],
                "correctAnswer": "azul",
                "difficulty": 1
              },
              {
                "id": "es-b-02-4",
                "type": "match",
                "question": "数字配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "uno",
                    "一"
                  ],
                  [
                    "dos",
                    "二"
                  ],
                  [
                    "tres",
                    "三"
                  ],
                  [
                    "cuatro",
                    "四"
                  ]
                ]
              },
              {
                "id": "es-b-02-5",
                "type": "translate",
                "question": "绿色",
                "options": [
                  "rojo",
                  "azul",
                  "verde",
                  "negro"
                ],
                "correctAnswer": "verde",
                "difficulty": 1
              },
              {
                "id": "es-b-02-6",
                "type": "dictation",
                "question": "听写：苹果",
                "correctAnswer": "manzana",
                "difficulty": 2,
                "audioWord": "manzana"
              }
            ]
          },
          {
            "levelId": "es-basic-03",
            "title": "家庭与人物",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "es-basic-02"
            ],
            "questions": [
              {
                "id": "es-b-03-1",
                "type": "translate",
                "question": "妈妈",
                "options": [
                  "Mama",
                  "Papa",
                  "Bruder",
                  "Schwester"
                ],
                "correctAnswer": "Mama",
                "difficulty": 1
              },
              {
                "id": "es-b-03-2",
                "type": "translate",
                "question": "朋友",
                "options": [
                  "Freund",
                  "Feind",
                  "Fremder",
                  "Nachbar"
                ],
                "correctAnswer": "Freund",
                "difficulty": 1
              },
              {
                "id": "es-b-03-3",
                "type": "fill-blank",
                "question": "¿___ es tu madre?（你妈妈在哪里？）",
                "options": [
                  "Dónde",
                  "Quién",
                  "Qué",
                  "Cuándo"
                ],
                "correctAnswer": "Dónde",
                "difficulty": 2
              },
              {
                "id": "es-b-03-4",
                "type": "match",
                "question": "亲属配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "妈妈",
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
                "id": "es-b-03-5",
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
                "id": "es-b-03-6",
                "type": "dictation",
                "question": "听写：朋友",
                "correctAnswer": "朋友",
                "difficulty": 2,
                "audioWord": "amigo"
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
            "levelId": "es-daily-01",
            "title": "出行与问路",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "es-d-01-1",
                "type": "translate",
                "question": "洗手间在哪里？",
                "options": [
                  "¿Dónde está el baño?",
                  "¿Cuánto cuesta?",
                  "¿Qué hora es?",
                  "¿Dónde vives?"
                ],
                "correctAnswer": "¿Dónde está el baño?",
                "difficulty": 2
              },
              {
                "id": "es-d-01-2",
                "type": "fill-blank",
                "question": "Toma el ___ al aeropuerto.（坐出租车去机场）",
                "options": [
                  "autobús",
                  "tren",
                  "taxi",
                  "avión"
                ],
                "correctAnswer": "taxi",
                "difficulty": 2
              },
              {
                "id": "es-d-01-3",
                "type": "translate",
                "question": "多少钱？",
                "options": [
                  "¿Cuántos?",
                  "¿Cuánto cuesta?",
                  "¿Cuándo?",
                  "¿Dónde?"
                ],
                "correctAnswer": "¿Cuánto cuesta?",
                "difficulty": 2
              },
              {
                "id": "es-d-01-4",
                "type": "match",
                "question": "出行配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "estación",
                    "火车站"
                  ],
                  [
                    "hotel",
                    "酒店"
                  ],
                  [
                    "restaurante",
                    "餐厅"
                  ],
                  [
                    "aeropuerto",
                    "机场"
                  ]
                ]
              },
              {
                "id": "es-d-01-5",
                "type": "translate",
                "question": "我迷路了",
                "options": [
                  "Estoy perdido",
                  "Estoy cansado",
                  "Tengo hambre",
                  "Estoy enfermo"
                ],
                "correctAnswer": "Estoy perdido",
                "difficulty": 2
              },
              {
                "id": "es-d-01-6",
                "type": "dictation",
                "question": "听写：餐厅",
                "correctAnswer": "restaurante",
                "difficulty": 2,
                "audioWord": "restaurante"
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
        "color": "#6366F1",
        "levels": [
          {
            "levelId": "ru-basic-01",
            "title": "问候入门",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [],
            "questions": [
              {
                "id": "ru-b-01-1",
                "type": "translate",
                "question": "你好",
                "options": [
                  "привет",
                  "спасибо",
                  "да",
                  "нет"
                ],
                "correctAnswer": "привет",
                "difficulty": 1
              },
              {
                "id": "ru-b-01-2",
                "type": "translate",
                "question": "谢谢",
                "options": [
                  "привет",
                  "спасибо",
                  "извините",
                  "пока"
                ],
                "correctAnswer": "спасибо",
                "difficulty": 1
              },
              {
                "id": "ru-b-01-3",
                "type": "fill-blank",
                "question": "Доброе ___.（早上好）",
                "options": [
                  "утро",
                  "ночи",
                  "день",
                  "вечер"
                ],
                "correctAnswer": "утро",
                "difficulty": 2
              },
              {
                "id": "ru-b-01-4",
                "type": "match",
                "question": "俄语配对",
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
                    "друг",
                    "朋友"
                  ],
                  [
                    "семья",
                    "家人"
                  ]
                ]
              },
              {
                "id": "ru-b-01-5",
                "type": "translate",
                "question": "我爱你",
                "options": [
                  "я люблю тебя",
                  "спасибо тебе",
                  "извините меня",
                  "привет тебе"
                ],
                "correctAnswer": "я люблю тебя",
                "difficulty": 2
              },
              {
                "id": "ru-b-01-6",
                "type": "dictation",
                "question": "听写：水",
                "correctAnswer": "вода",
                "difficulty": 2,
                "audioWord": "voda"
              }
            ]
          },
          {
            "levelId": "ru-basic-02",
            "title": "数字与颜色",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "ru-basic-01"
            ],
            "questions": [
              {
                "id": "ru-b-02-1",
                "type": "translate",
                "question": "红色",
                "options": [
                  "красный",
                  "синий",
                  "зелёный",
                  "жёлтый"
                ],
                "correctAnswer": "красный",
                "difficulty": 1
              },
              {
                "id": "ru-b-02-2",
                "type": "translate",
                "question": "三",
                "options": [
                  "один",
                  "два",
                  "три",
                  "четыре"
                ],
                "correctAnswer": "три",
                "difficulty": 1
              },
              {
                "id": "ru-b-02-3",
                "type": "fill-blank",
                "question": "Небо ___.（天空是蓝色的）",
                "options": [
                  "красное",
                  "синее",
                  "зелёное",
                  "белое"
                ],
                "correctAnswer": "синее",
                "difficulty": 1
              },
              {
                "id": "ru-b-02-4",
                "type": "match",
                "question": "数字配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "один",
                    "一"
                  ],
                  [
                    "два",
                    "二"
                  ],
                  [
                    "три",
                    "三"
                  ],
                  [
                    "четыре",
                    "四"
                  ]
                ]
              },
              {
                "id": "ru-b-02-5",
                "type": "translate",
                "question": "绿色",
                "options": [
                  "красный",
                  "синий",
                  "зелёный",
                  "чёрный"
                ],
                "correctAnswer": "зелёный",
                "difficulty": 1
              },
              {
                "id": "ru-b-02-6",
                "type": "dictation",
                "question": "听写：苹果",
                "correctAnswer": "яблоко",
                "difficulty": 2,
                "audioWord": "yabloko"
              }
            ]
          },
          {
            "levelId": "ru-basic-03",
            "title": "家庭与人物",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "ru-basic-02"
            ],
            "questions": [
              {
                "id": "ru-b-03-1",
                "type": "translate",
                "question": "妈妈",
                "options": [
                  "мама",
                  "папа",
                  "брат",
                  "сестра"
                ],
                "correctAnswer": "мама",
                "difficulty": 1
              },
              {
                "id": "ru-b-03-2",
                "type": "translate",
                "question": "朋友",
                "options": [
                  "друг",
                  "враг",
                  "незнакомец",
                  "сосед"
                ],
                "correctAnswer": "друг",
                "difficulty": 1
              },
              {
                "id": "ru-b-03-3",
                "type": "fill-blank",
                "question": "Где твоя ___?（你妈妈在哪里？）",
                "options": [
                  "мама",
                  "папа",
                  "сестра",
                  "брат"
                ],
                "correctAnswer": "мама",
                "difficulty": 2
              },
              {
                "id": "ru-b-03-4",
                "type": "match",
                "question": "亲属配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "妈妈",
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
                "id": "ru-b-03-5",
                "type": "translate",
                "question": "家人",
                "options": [
                  "семья",
                  "друг",
                  "учитель",
                  "одноклассник"
                ],
                "correctAnswer": "семья",
                "difficulty": 1
              },
              {
                "id": "ru-b-03-6",
                "type": "dictation",
                "question": "听写：朋友",
                "correctAnswer": "朋友",
                "difficulty": 2,
                "audioWord": "drug"
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
            "levelId": "ru-daily-01",
            "title": "出行与问路",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "ru-d-01-1",
                "type": "translate",
                "question": "洗手间在哪里？",
                "options": [
                  "Где туалет?",
                  "Сколько стоит?",
                  "Который час?",
                  "Где вы живёте?"
                ],
                "correctAnswer": "Где туалет?",
                "difficulty": 2
              },
              {
                "id": "ru-d-01-2",
                "type": "fill-blank",
                "question": "___ до аэропорта.（坐出租车去机场）",
                "options": [
                  "Автобус",
                  "Поезд",
                  "Такси",
                  "Самолёт"
                ],
                "correctAnswer": "Такси",
                "difficulty": 2
              },
              {
                "id": "ru-d-01-3",
                "type": "translate",
                "question": "多少钱？",
                "options": [
                  "Сколько?",
                  "Сколько стоит?",
                  "Когда?",
                  "Где?"
                ],
                "correctAnswer": "Сколько стоит?",
                "difficulty": 2
              },
              {
                "id": "ru-d-01-4",
                "type": "match",
                "question": "出行配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "вокзал",
                    "火车站"
                  ],
                  [
                    "отель",
                    "酒店"
                  ],
                  [
                    "ресторан",
                    "餐厅"
                  ],
                  [
                    "аэропорт",
                    "机场"
                  ]
                ]
              },
              {
                "id": "ru-d-01-5",
                "type": "translate",
                "question": "我迷路了",
                "options": [
                  "Я заблудился",
                  "Я устал",
                  "Я голоден",
                  "Я болен"
                ],
                "correctAnswer": "Я заблудился",
                "difficulty": 2
              },
              {
                "id": "ru-d-01-6",
                "type": "dictation",
                "question": "听写：餐厅",
                "correctAnswer": "ресторан",
                "difficulty": 2,
                "audioWord": "restoran"
              }
            ]
          }
        ]
      }
    ]
  },
  "nan": {
    "themes": [
      {
        "id": "basic",
        "name": "基础词汇",
        "color": "#F59E0B",
        "levels": [
          {
            "levelId": "nan-basic-01",
            "title": "问候入门",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [],
            "questions": [
              {
                "id": "nan-b-01-1",
                "type": "translate",
                "question": "你好",
                "options": [
                  "你好",
                  "多谢",
                  "失礼",
                  "早"
                ],
                "correctAnswer": "你好",
                "difficulty": 1
              },
              {
                "id": "nan-b-01-2",
                "type": "translate",
                "question": "谢谢",
                "options": [
                  "多谢",
                  "失礼",
                  "感恩",
                  "你好"
                ],
                "correctAnswer": "多谢",
                "difficulty": 1
              },
              {
                "id": "nan-b-01-3",
                "type": "fill-blank",
                "question": "今___日。（今天）",
                "options": [
                  "仔",
                  "明",
                  "昨",
                  "暗"
                ],
                "correctAnswer": "仔",
                "difficulty": 2
              },
              {
                "id": "nan-b-01-4",
                "type": "match",
                "question": "闽南语配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "厝",
                    "家"
                  ],
                  [
                    "食饭",
                    "吃饭"
                  ],
                  [
                    "明仔载",
                    "明天"
                  ],
                  [
                    "偌济钱",
                    "多少钱"
                  ]
                ]
              },
              {
                "id": "nan-b-01-5",
                "type": "translate",
                "question": "家/房子",
                "options": [
                  "厝",
                  "学校",
                  "餐厅",
                  "酒店"
                ],
                "correctAnswer": "厝",
                "difficulty": 1
              },
              {
                "id": "nan-b-01-6",
                "type": "translate",
                "question": "真漂亮",
                "options": [
                  "真水",
                  "真好",
                  "真古锥",
                  "真大"
                ],
                "correctAnswer": "真水",
                "difficulty": 2
              }
            ]
          },
          {
            "levelId": "nan-basic-02",
            "title": "问候与礼貌",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [],
            "questions": [
              {
                "id": "nan-t-12",
                "type": "translate",
                "question": "红色",
                "options": [
                  "多谢",
                  "红",
                  "五",
                  "水"
                ],
                "correctAnswer": "红",
                "difficulty": 1
              },
              {
                "id": "nan-f-13",
                "type": "fill-blank",
                "question": "___ (蓝色/绿色)",
                "options": [
                  "青",
                  "四",
                  "三",
                  "阿姊"
                ],
                "correctAnswer": "青",
                "difficulty": 2
              },
              {
                "id": "nan-t-14",
                "type": "translate",
                "question": "黄色",
                "options": [
                  "阿爸",
                  "黄",
                  "是",
                  "苹果"
                ],
                "correctAnswer": "黄",
                "difficulty": 1
              },
              {
                "id": "nan-m-12",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "红",
                    "红色"
                  ],
                  [
                    "青",
                    "蓝色/绿色"
                  ],
                  [
                    "黄",
                    "黄色"
                  ],
                  [
                    "乌",
                    "黑色"
                  ]
                ]
              },
              {
                "id": "nan-d-16",
                "type": "dictation",
                "question": "听写：白色",
                "correctAnswer": "白",
                "difficulty": 2,
                "audioWord": "peh8"
              },
              {
                "id": "nan-r-17",
                "type": "repeat",
                "question": "跟读：苹果",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "苹果"
              }
            ]
          },
          {
            "levelId": "nan-basic-03",
            "title": "数字与颜色",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "nan-basic-02"
            ],
            "questions": [
              {
                "id": "nan-t-18",
                "type": "translate",
                "question": "面包",
                "options": [
                  "毋是",
                  "阿母",
                  "面包",
                  "二"
                ],
                "correctAnswer": "面包",
                "difficulty": 1
              },
              {
                "id": "nan-f-19",
                "type": "fill-blank",
                "question": "___ (水)",
                "options": [
                  "四",
                  "水",
                  "阿姊",
                  "一"
                ],
                "correctAnswer": "水",
                "difficulty": 2
              },
              {
                "id": "nan-t-20",
                "type": "translate",
                "question": "米饭",
                "options": [
                  "饭",
                  "阿母",
                  "面包",
                  "二"
                ],
                "correctAnswer": "饭",
                "difficulty": 1
              },
              {
                "id": "nan-m-18",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "面包",
                    "面包"
                  ],
                  [
                    "水",
                    "水"
                  ],
                  [
                    "饭",
                    "米饭"
                  ],
                  [
                    "阿母",
                    "妈妈"
                  ]
                ]
              },
              {
                "id": "nan-d-22",
                "type": "dictation",
                "question": "听写：爸爸",
                "correctAnswer": "阿爸",
                "difficulty": 2,
                "audioWord": "a1 pa3"
              },
              {
                "id": "nan-r-23",
                "type": "repeat",
                "question": "跟读：阿姊",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "阿姊"
              }
            ]
          },
          {
            "levelId": "nan-basic-04",
            "title": "家庭与人物",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "nan-basic-03"
            ],
            "questions": [
              {
                "id": "nan-t-04",
                "type": "translate",
                "question": "不是",
                "options": [
                  "朋友",
                  "阿母",
                  "失礼",
                  "毋是"
                ],
                "correctAnswer": "毋是",
                "difficulty": 1
              },
              {
                "id": "nan-f-05",
                "type": "fill-blank",
                "question": "___ (再见)",
                "options": [
                  "红",
                  "再会",
                  "阿姊",
                  "乌"
                ],
                "correctAnswer": "再会",
                "difficulty": 2
              },
              {
                "id": "nan-t-06",
                "type": "translate",
                "question": "请",
                "options": [
                  "请",
                  "朋友",
                  "阿兄",
                  "失礼"
                ],
                "correctAnswer": "请",
                "difficulty": 1
              },
              {
                "id": "nan-m-04",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "毋是",
                    "不是"
                  ],
                  [
                    "再会",
                    "再见"
                  ],
                  [
                    "请",
                    "请"
                  ],
                  [
                    "一",
                    "一"
                  ]
                ]
              },
              {
                "id": "nan-d-08",
                "type": "dictation",
                "question": "听写：二",
                "correctAnswer": "二",
                "difficulty": 2,
                "audioWord": "ji7"
              },
              {
                "id": "nan-r-09",
                "type": "repeat",
                "question": "跟读：三",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "三"
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
            "levelId": "nan-daily-01",
            "title": "自我介绍",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "nan-t-00",
                "type": "translate",
                "question": "我叫…",
                "options": [
                  "算账",
                  "我号做...",
                  "会当俗仔无？",
                  "你好吗？"
                ],
                "correctAnswer": "我号做...",
                "difficulty": 1
              },
              {
                "id": "nan-f-01",
                "type": "fill-blank",
                "question": "___ (很高兴认识你)",
                "options": [
                  "伤贵",
                  "真欢喜认识你",
                  "菜单请予我",
                  "我要这个"
                ],
                "correctAnswer": "真欢喜认识你",
                "difficulty": 2
              },
              {
                "id": "nan-t-02",
                "type": "translate",
                "question": "你好吗？",
                "options": [
                  "真好食",
                  "菜单请予我",
                  "伤贵",
                  "你好吗？"
                ],
                "correctAnswer": "你好吗？",
                "difficulty": 1
              },
              {
                "id": "nan-m-00",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "我号做...",
                    "我叫…"
                  ],
                  [
                    "真欢喜认识你",
                    "很高兴认识你"
                  ],
                  [
                    "你好吗？",
                    "你好吗？"
                  ],
                  [
                    "你叨位来？",
                    "你从哪里来？"
                  ]
                ]
              },
              {
                "id": "nan-d-04",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "偌济钱？",
                "difficulty": 2,
                "audioWord": "gua7 ze3 zi5"
              },
              {
                "id": "nan-r-05",
                "type": "repeat",
                "question": "跟读：我要这个",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "我要这个"
              }
            ]
          },
          {
            "levelId": "nan-daily-02",
            "title": "购物与消费",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "nan-daily-01"
            ],
            "questions": [
              {
                "id": "nan-t-00",
                "type": "translate",
                "question": "我叫…",
                "options": [
                  "菜单请予我",
                  "我跋倒路",
                  "真欢喜认识你",
                  "我号做..."
                ],
                "correctAnswer": "我号做...",
                "difficulty": 1
              },
              {
                "id": "nan-f-01",
                "type": "fill-blank",
                "question": "___ (很高兴认识你)",
                "options": [
                  "会当俗仔无？",
                  "真欢喜认识你",
                  "我号做...",
                  "菜单请予我"
                ],
                "correctAnswer": "真欢喜认识你",
                "difficulty": 2
              },
              {
                "id": "nan-t-02",
                "type": "translate",
                "question": "你好吗？",
                "options": [
                  "你叨位来？",
                  "我跋倒路",
                  "你好吗？",
                  "我要这个"
                ],
                "correctAnswer": "你好吗？",
                "difficulty": 1
              },
              {
                "id": "nan-m-00",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "我号做...",
                    "我叫…"
                  ],
                  [
                    "真欢喜认识你",
                    "很高兴认识你"
                  ],
                  [
                    "你好吗？",
                    "你好吗？"
                  ],
                  [
                    "你叨位来？",
                    "你从哪里来？"
                  ]
                ]
              },
              {
                "id": "nan-d-04",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "偌济钱？",
                "difficulty": 2,
                "audioWord": "gua7 ze3 zi5"
              },
              {
                "id": "nan-r-05",
                "type": "repeat",
                "question": "跟读：我要这个",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "我要这个"
              }
            ]
          },
          {
            "levelId": "nan-daily-03",
            "title": "餐厅与点餐",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "nan-daily-02"
            ],
            "questions": [
              {
                "id": "nan-t-00",
                "type": "translate",
                "question": "我叫…",
                "options": [
                  "你好吗？",
                  "伤贵",
                  "我号做...",
                  "我要这个"
                ],
                "correctAnswer": "我号做...",
                "difficulty": 1
              },
              {
                "id": "nan-f-01",
                "type": "fill-blank",
                "question": "___ (很高兴认识你)",
                "options": [
                  "我跋倒路",
                  "真欢喜认识你",
                  "我要这个",
                  "偌济钱？"
                ],
                "correctAnswer": "真欢喜认识你",
                "difficulty": 2
              },
              {
                "id": "nan-t-02",
                "type": "translate",
                "question": "你好吗？",
                "options": [
                  "真欢喜认识你",
                  "我号做...",
                  "你好吗？",
                  "偌济钱？"
                ],
                "correctAnswer": "你好吗？",
                "difficulty": 1
              },
              {
                "id": "nan-m-00",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "我号做...",
                    "我叫…"
                  ],
                  [
                    "真欢喜认识你",
                    "很高兴认识你"
                  ],
                  [
                    "你好吗？",
                    "你好吗？"
                  ],
                  [
                    "你叨位来？",
                    "你从哪里来？"
                  ]
                ]
              },
              {
                "id": "nan-d-04",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "偌济钱？",
                "difficulty": 2,
                "audioWord": "gua7 ze3 zi5"
              },
              {
                "id": "nan-r-05",
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
            "levelId": "nan-scenario-01",
            "title": "交通出行",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "nan-t-00",
                "type": "translate",
                "question": "地铁站在哪里？",
                "options": [
                  "明仔载见",
                  "定饭店",
                  "捷运伫叨？",
                  "晚安"
                ],
                "correctAnswer": "捷运伫叨？",
                "difficulty": 1
              },
              {
                "id": "nan-f-01",
                "type": "fill-blank",
                "question": "___ (坐出租车)",
                "options": [
                  "我欲看医生",
                  "坐出租车",
                  "报警察",
                  "救命！"
                ],
                "correctAnswer": "坐出租车",
                "difficulty": 2
              },
              {
                "id": "nan-t-02",
                "type": "translate",
                "question": "我需要医生",
                "options": [
                  "报警察",
                  "定饭店",
                  "坐出租车",
                  "我欲看医生"
                ],
                "correctAnswer": "我欲看医生",
                "difficulty": 1
              },
              {
                "id": "nan-m-00",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "捷运伫叨？",
                    "地铁站在哪里？"
                  ],
                  [
                    "坐出租车",
                    "坐出租车"
                  ],
                  [
                    "我欲看医生",
                    "我需要医生"
                  ],
                  [
                    "我袂爽",
                    "我不舒服"
                  ]
                ]
              },
              {
                "id": "nan-d-04",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "定饭店",
                "difficulty": 2,
                "audioWord": "tiann7 huan3 diam3"
              },
              {
                "id": "nan-r-05",
                "type": "repeat",
                "question": "跟读：单人间",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "单人间"
              }
            ]
          },
          {
            "levelId": "nan-scenario-02",
            "title": "酒店与应急",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "nan-scenario-01"
            ],
            "questions": [
              {
                "id": "nan-t-00",
                "type": "translate",
                "question": "地铁站在哪里？",
                "options": [
                  "救命！",
                  "单人间",
                  "捷运伫叨？",
                  "我袂爽"
                ],
                "correctAnswer": "捷运伫叨？",
                "difficulty": 1
              },
              {
                "id": "nan-f-01",
                "type": "fill-blank",
                "question": "___ (坐出租车)",
                "options": [
                  "坐出租车",
                  "晚安",
                  "捷运伫叨？",
                  "我欲看医生"
                ],
                "correctAnswer": "坐出租车",
                "difficulty": 2
              },
              {
                "id": "nan-t-02",
                "type": "translate",
                "question": "我需要医生",
                "options": [
                  "定饭店",
                  "我袂爽",
                  "我欲看医生",
                  "报警察"
                ],
                "correctAnswer": "我欲看医生",
                "difficulty": 1
              },
              {
                "id": "nan-m-00",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "捷运伫叨？",
                    "地铁站在哪里？"
                  ],
                  [
                    "坐出租车",
                    "坐出租车"
                  ],
                  [
                    "我欲看医生",
                    "我需要医生"
                  ],
                  [
                    "我袂爽",
                    "我不舒服"
                  ]
                ]
              },
              {
                "id": "nan-d-04",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "定饭店",
                "difficulty": 2,
                "audioWord": "tiann7 huan3 diam3"
              },
              {
                "id": "nan-r-05",
                "type": "repeat",
                "question": "跟读：单人间",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "单人间"
              }
            ]
          },
          {
            "levelId": "nan-scenario-03",
            "title": "就医买药",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "nan-scenario-02"
            ],
            "questions": [
              {
                "id": "nan-t-00",
                "type": "translate",
                "question": "地铁站在哪里？",
                "options": [
                  "捷运伫叨？",
                  "我袂爽",
                  "我欲看医生",
                  "歹势"
                ],
                "correctAnswer": "捷运伫叨？",
                "difficulty": 1
              },
              {
                "id": "nan-f-01",
                "type": "fill-blank",
                "question": "___ (坐出租车)",
                "options": [
                  "救命！",
                  "坐出租车",
                  "定饭店",
                  "我袂爽"
                ],
                "correctAnswer": "坐出租车",
                "difficulty": 2
              },
              {
                "id": "nan-t-02",
                "type": "translate",
                "question": "我需要医生",
                "options": [
                  "单人间",
                  "定饭店",
                  "晚安",
                  "我欲看医生"
                ],
                "correctAnswer": "我欲看医生",
                "difficulty": 1
              },
              {
                "id": "nan-m-00",
                "type": "match",
                "question": "词汇配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "捷运伫叨？",
                    "地铁站在哪里？"
                  ],
                  [
                    "坐出租车",
                    "坐出租车"
                  ],
                  [
                    "我欲看医生",
                    "我需要医生"
                  ],
                  [
                    "我袂爽",
                    "我不舒服"
                  ]
                ]
              },
              {
                "id": "nan-d-04",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "定饭店",
                "difficulty": 2,
                "audioWord": "tiann7 huan3 diam3"
              },
              {
                "id": "nan-r-05",
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
            "levelId": "nan-grammar-01",
            "title": "动词基础",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "nan-t-00",
                "type": "translate",
                "question": "去",
                "options": [
                  "会",
                  "去",
                  "是",
                  "袂"
                ],
                "correctAnswer": "去",
                "difficulty": 1
              },
              {
                "id": "nan-f-01",
                "type": "fill-blank",
                "question": "___ (吃)",
                "options": [
                  "无",
                  "是",
                  "会",
                  "食"
                ],
                "correctAnswer": "食",
                "difficulty": 2
              },
              {
                "id": "nan-t-02",
                "type": "translate",
                "question": "是",
                "options": [
                  "去",
                  "会",
                  "袂",
                  "是"
                ],
                "correctAnswer": "是",
                "difficulty": 1
              },
              {
                "id": "nan-m-00",
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
                    "是",
                    "是"
                  ],
                  [
                    "有",
                    "有"
                  ]
                ]
              },
              {
                "id": "nan-d-04",
                "type": "dictation",
                "question": "听写：没有",
                "correctAnswer": "无",
                "difficulty": 2,
                "audioWord": "bo5"
              },
              {
                "id": "nan-r-05",
                "type": "repeat",
                "question": "跟读：会",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "会"
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
            "levelId": "nan-culture-01",
            "title": "节日与传统",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "nan-t-00",
                "type": "translate",
                "question": "过年",
                "options": [
                  "中秋",
                  "过年",
                  "珍珠奶茶",
                  "蚵仔煎"
                ],
                "correctAnswer": "过年",
                "difficulty": 1
              },
              {
                "id": "nan-f-01",
                "type": "fill-blank",
                "question": "___ (中秋节)",
                "options": [
                  "过年",
                  "蚵仔煎",
                  "珍珠奶茶",
                  "中秋"
                ],
                "correctAnswer": "中秋",
                "difficulty": 2
              },
              {
                "id": "nan-t-02",
                "type": "translate",
                "question": "蚵仔煎",
                "options": [
                  "蚵仔煎",
                  "过年",
                  "珍珠奶茶",
                  "中秋"
                ],
                "correctAnswer": "蚵仔煎",
                "difficulty": 1
              },
              {
                "id": "nan-m-00",
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
                    "蚵仔煎",
                    "蚵仔煎"
                  ],
                  [
                    "珍珠奶茶",
                    "珍珠奶茶"
                  ]
                ]
              },
              {
                "id": "nan-d-00",
                "type": "dictation",
                "question": "听写：过年",
                "correctAnswer": "过年",
                "difficulty": 2,
                "audioWord": "gue3 ni5"
              },
              {
                "id": "nan-r-01",
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
  "de": {
    "themes": [
      {
        "id": "basic",
        "name": "基础词汇",
        "color": "#1E3A8A",
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
                "id": "de-b-01-1",
                "type": "translate",
                "question": "你好",
                "options": [
                  "hallo",
                  "danke",
                  "ja",
                  "nein"
                ],
                "correctAnswer": "hallo",
                "difficulty": 1
              },
              {
                "id": "de-b-01-2",
                "type": "translate",
                "question": "谢谢",
                "options": [
                  "danke",
                  "bitte",
                  "ja",
                  "hallo"
                ],
                "correctAnswer": "danke",
                "difficulty": 1
              },
              {
                "id": "de-b-01-3",
                "type": "fill-blank",
                "question": "___ Morgen!（早上好）",
                "options": [
                  "Guten",
                  "Gute",
                  "Gut",
                  "Guter"
                ],
                "correctAnswer": "Guten",
                "difficulty": 2
              },
              {
                "id": "de-b-01-4",
                "type": "match",
                "question": "德语配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "hallo",
                    "你好"
                  ],
                  [
                    "danke",
                    "谢谢"
                  ],
                  [
                    "ja",
                    "是"
                  ],
                  [
                    "nein",
                    "不是"
                  ]
                ]
              },
              {
                "id": "de-b-01-5",
                "type": "translate",
                "question": "我爱你",
                "options": [
                  "ich liebe dich",
                  "danke schön",
                  "guten tag",
                  "auf wiedersehen"
                ],
                "correctAnswer": "ich liebe dich",
                "difficulty": 2
              },
              {
                "id": "de-b-01-6",
                "type": "dictation",
                "question": "听写：水",
                "correctAnswer": "wasser",
                "difficulty": 2,
                "audioWord": "wasser"
              }
            ]
          },
          {
            "levelId": "de-basic-02",
            "title": "数字与颜色",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "de-basic-01"
            ],
            "questions": [
              {
                "id": "de-b-02-1",
                "type": "translate",
                "question": "红色",
                "options": [
                  "rot",
                  "blau",
                  "grün",
                  "gelb"
                ],
                "correctAnswer": "rot",
                "difficulty": 1
              },
              {
                "id": "de-b-02-2",
                "type": "translate",
                "question": "三",
                "options": [
                  "eins",
                  "zwei",
                  "drei",
                  "vier"
                ],
                "correctAnswer": "drei",
                "difficulty": 1
              },
              {
                "id": "de-b-02-3",
                "type": "fill-blank",
                "question": "Das ist ___.（这是蓝色的）",
                "options": [
                  "rot",
                  "blau",
                  "grün",
                  "gelb"
                ],
                "correctAnswer": "blau",
                "difficulty": 1
              },
              {
                "id": "de-b-02-4",
                "type": "match",
                "question": "数字配对",
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
                "id": "de-b-02-5",
                "type": "translate",
                "question": "绿色",
                "options": [
                  "rot",
                  "blau",
                  "grün",
                  "schwarz"
                ],
                "correctAnswer": "grün",
                "difficulty": 1
              },
              {
                "id": "de-b-02-6",
                "type": "dictation",
                "question": "听写：苹果",
                "correctAnswer": "apfel",
                "difficulty": 2,
                "audioWord": "apfel"
              }
            ]
          },
          {
            "levelId": "de-basic-03",
            "title": "家庭与人物",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "de-basic-02"
            ],
            "questions": [
              {
                "id": "de-b-03-1",
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
                "id": "de-b-03-2",
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
                "id": "de-b-03-3",
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
                "id": "de-b-03-4",
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
                "id": "de-b-03-5",
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
                "id": "de-b-03-6",
                "type": "dictation",
                "question": "听写：朋友",
                "correctAnswer": "Freund",
                "difficulty": 2,
                "audioWord": "freund"
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
            "levelId": "de-daily-01",
            "title": "出行与问路",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "de-d-01-1",
                "type": "translate",
                "question": "洗手间在哪里？",
                "options": [
                  "Wo ist die Toilette?",
                  "Wie viel kostet das?",
                  "Wie spät ist es?",
                  "Wo wohnen Sie?"
                ],
                "correctAnswer": "Wo ist die Toilette?",
                "difficulty": 2
              },
              {
                "id": "de-d-01-2",
                "type": "fill-blank",
                "question": "Nehmen Sie den ___ zum Bahnhof.（坐出租车去火车站）",
                "options": [
                  "Bus",
                  "Zug",
                  "Taxi",
                  "Flugzeug"
                ],
                "correctAnswer": "Taxi",
                "difficulty": 2
              },
              {
                "id": "de-d-01-3",
                "type": "translate",
                "question": "多少钱？",
                "options": [
                  "Wie viele?",
                  "Wie viel?",
                  "Wie lange?",
                  "Wie weit?"
                ],
                "correctAnswer": "Wie viel?",
                "difficulty": 2
              },
              {
                "id": "de-d-01-4",
                "type": "match",
                "question": "出行配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "Bahnhof",
                    "火车站"
                  ],
                  [
                    "Hotel",
                    "酒店"
                  ],
                  [
                    "Restaurant",
                    "餐厅"
                  ],
                  [
                    "Flughafen",
                    "机场"
                  ]
                ]
              },
              {
                "id": "de-d-01-5",
                "type": "translate",
                "question": "我迷路了",
                "options": [
                  "Ich habe mich verlaufen",
                  "Ich bin müde",
                  "Ich habe Hunger",
                  "Ich bin krank"
                ],
                "correctAnswer": "Ich habe mich verlaufen",
                "difficulty": 2
              },
              {
                "id": "de-d-01-6",
                "type": "dictation",
                "question": "听写：餐厅",
                "correctAnswer": "restaurant",
                "difficulty": 2,
                "audioWord": "restaurant"
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
                "id": "fr-b-01-1",
                "type": "translate",
                "question": "你好",
                "options": [
                  "bonjour",
                  "merci",
                  "oui",
                  "non"
                ],
                "correctAnswer": "bonjour",
                "difficulty": 1
              },
              {
                "id": "fr-b-01-2",
                "type": "translate",
                "question": "谢谢",
                "options": [
                  "merci",
                  "s'il vous plaît",
                  "oui",
                  "bonjour"
                ],
                "correctAnswer": "merci",
                "difficulty": 1
              },
              {
                "id": "fr-b-01-3",
                "type": "fill-blank",
                "question": "___ matin!（早上好）",
                "options": [
                  "Bon",
                  "Bonne",
                  "Beau",
                  "Bons"
                ],
                "correctAnswer": "Bon",
                "difficulty": 2
              },
              {
                "id": "fr-b-01-4",
                "type": "match",
                "question": "法语配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "bonjour",
                    "你好"
                  ],
                  [
                    "merci",
                    "谢谢"
                  ],
                  [
                    "oui",
                    "是"
                  ],
                  [
                    "non",
                    "不是"
                  ]
                ]
              },
              {
                "id": "fr-b-01-5",
                "type": "translate",
                "question": "我爱你",
                "options": [
                  "je t'aime",
                  "merci beaucoup",
                  "bonjour",
                  "au revoir"
                ],
                "correctAnswer": "je t'aime",
                "difficulty": 2
              },
              {
                "id": "fr-b-01-6",
                "type": "dictation",
                "question": "听写：水",
                "correctAnswer": "eau",
                "difficulty": 2,
                "audioWord": "eau"
              }
            ]
          },
          {
            "levelId": "fr-basic-02",
            "title": "数字与颜色",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "fr-basic-01"
            ],
            "questions": [
              {
                "id": "fr-b-02-1",
                "type": "translate",
                "question": "红色",
                "options": [
                  "rouge",
                  "bleu",
                  "vert",
                  "jaune"
                ],
                "correctAnswer": "rouge",
                "difficulty": 1
              },
              {
                "id": "fr-b-02-2",
                "type": "translate",
                "question": "三",
                "options": [
                  "un",
                  "deux",
                  "trois",
                  "quatre"
                ],
                "correctAnswer": "trois",
                "difficulty": 1
              },
              {
                "id": "fr-b-02-3",
                "type": "fill-blank",
                "question": "Le ciel est ___.（天空是蓝色的）",
                "options": [
                  "rouge",
                  "bleu",
                  "vert",
                  "blanc"
                ],
                "correctAnswer": "bleu",
                "difficulty": 1
              },
              {
                "id": "fr-b-02-4",
                "type": "match",
                "question": "数字配对",
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
                "id": "fr-b-02-5",
                "type": "translate",
                "question": "绿色",
                "options": [
                  "rouge",
                  "bleu",
                  "vert",
                  "noir"
                ],
                "correctAnswer": "vert",
                "difficulty": 1
              },
              {
                "id": "fr-b-02-6",
                "type": "dictation",
                "question": "听写：苹果",
                "correctAnswer": "pomme",
                "difficulty": 2,
                "audioWord": "pomme"
              }
            ]
          },
          {
            "levelId": "fr-basic-03",
            "title": "家庭与人物",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "fr-basic-02"
            ],
            "questions": [
              {
                "id": "fr-b-03-1",
                "type": "translate",
                "question": "妈妈",
                "options": [
                  "maman",
                  "爸爸",
                  "哥哥",
                  "姐姐"
                ],
                "correctAnswer": "maman",
                "difficulty": 1
              },
              {
                "id": "fr-b-03-2",
                "type": "translate",
                "question": "朋友",
                "options": [
                  "ami",
                  "敌人",
                  "陌生人",
                  "邻居"
                ],
                "correctAnswer": "ami",
                "difficulty": 1
              },
              {
                "id": "fr-b-03-3",
                "type": "fill-blank",
                "question": "Où est la ___?（妈妈在哪里？）",
                "options": [
                  "maman",
                  "papa",
                  "sœur",
                  "frère"
                ],
                "correctAnswer": "maman",
                "difficulty": 2
              },
              {
                "id": "fr-b-03-4",
                "type": "match",
                "question": "亲属配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "maman",
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
                "id": "fr-b-03-5",
                "type": "translate",
                "question": "家人",
                "options": [
                  "famille",
                  "ami",
                  "professeur",
                  "camarade"
                ],
                "correctAnswer": "famille",
                "difficulty": 1
              },
              {
                "id": "fr-b-03-6",
                "type": "dictation",
                "question": "听写：朋友",
                "correctAnswer": "ami",
                "difficulty": 2,
                "audioWord": "ami"
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
            "levelId": "fr-daily-01",
            "title": "出行与问路",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "fr-d-01-1",
                "type": "translate",
                "question": "洗手间在哪里？",
                "options": [
                  "Où sont les toilettes?",
                  "Combien ça coûte?",
                  "Quelle heure est-il?",
                  "Où habitez-vous?"
                ],
                "correctAnswer": "Où sont les toilettes?",
                "difficulty": 2
              },
              {
                "id": "fr-d-01-2",
                "type": "fill-blank",
                "question": "Prenez le ___ pour l'aéroport.（坐出租车去机场）",
                "options": [
                  "bus",
                  "train",
                  "taxi",
                  "avion"
                ],
                "correctAnswer": "taxi",
                "difficulty": 2
              },
              {
                "id": "fr-d-01-3",
                "type": "translate",
                "question": "多少钱？",
                "options": [
                  "Combien?",
                  "Combien ça coûte?",
                  "Quand?",
                  "Où?"
                ],
                "correctAnswer": "Combien ça coûte?",
                "difficulty": 2
              },
              {
                "id": "fr-d-01-4",
                "type": "match",
                "question": "出行配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "gare",
                    "火车站"
                  ],
                  [
                    "hôtel",
                    "酒店"
                  ],
                  [
                    "restaurant",
                    "餐厅"
                  ],
                  [
                    "aéroport",
                    "机场"
                  ]
                ]
              },
              {
                "id": "fr-d-01-5",
                "type": "translate",
                "question": "我迷路了",
                "options": [
                  "Je suis perdu",
                  "Je suis fatigué",
                  "J'ai faim",
                  "Je suis malade"
                ],
                "correctAnswer": "Je suis perdu",
                "difficulty": 2
              },
              {
                "id": "fr-d-01-6",
                "type": "dictation",
                "question": "听写：餐厅",
                "correctAnswer": "restaurant",
                "difficulty": 2,
                "audioWord": "restaurant"
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
        "color": "#047857",
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
                "id": "it-b-01-1",
                "type": "translate",
                "question": "你好",
                "options": [
                  "ciao",
                  "grazie",
                  "sì",
                  "no"
                ],
                "correctAnswer": "ciao",
                "difficulty": 1
              },
              {
                "id": "it-b-01-2",
                "type": "translate",
                "question": "谢谢",
                "options": [
                  "grazie",
                  "per favore",
                  "sì",
                  "ciao"
                ],
                "correctAnswer": "grazie",
                "difficulty": 1
              },
              {
                "id": "it-b-01-3",
                "type": "fill-blank",
                "question": "___ giorno!（早上好）",
                "options": [
                  "Buon",
                  "Buona",
                  "Bella",
                  "Bel"
                ],
                "correctAnswer": "Buon",
                "difficulty": 2
              },
              {
                "id": "it-b-01-4",
                "type": "match",
                "question": "意大利语配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "ciao",
                    "你好"
                  ],
                  [
                    "grazie",
                    "谢谢"
                  ],
                  [
                    "sì",
                    "是"
                  ],
                  [
                    "no",
                    "不是"
                  ]
                ]
              },
              {
                "id": "it-b-01-5",
                "type": "translate",
                "question": "我爱你",
                "options": [
                  "ti amo",
                  "grazie mille",
                  "ciao",
                  "arrivederci"
                ],
                "correctAnswer": "ti amo",
                "difficulty": 2
              },
              {
                "id": "it-b-01-6",
                "type": "dictation",
                "question": "听写：水",
                "correctAnswer": "acqua",
                "difficulty": 2,
                "audioWord": "acqua"
              }
            ]
          },
          {
            "levelId": "it-basic-02",
            "title": "数字与颜色",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "it-basic-01"
            ],
            "questions": [
              {
                "id": "it-b-02-1",
                "type": "translate",
                "question": "红色",
                "options": [
                  "rosso",
                  "blu",
                  "verde",
                  "giallo"
                ],
                "correctAnswer": "rosso",
                "difficulty": 1
              },
              {
                "id": "it-b-02-2",
                "type": "translate",
                "question": "三",
                "options": [
                  "uno",
                  "due",
                  "tre",
                  "quattro"
                ],
                "correctAnswer": "tre",
                "difficulty": 1
              },
              {
                "id": "it-b-02-3",
                "type": "fill-blank",
                "question": "Il cielo è ___.（天空是蓝色的）",
                "options": [
                  "rosso",
                  "blu",
                  "verde",
                  "bianco"
                ],
                "correctAnswer": "blu",
                "difficulty": 1
              },
              {
                "id": "it-b-02-4",
                "type": "match",
                "question": "数字配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "uno",
                    "一"
                  ],
                  [
                    "due",
                    "二"
                  ],
                  [
                    "tre",
                    "三"
                  ],
                  [
                    "quattro",
                    "四"
                  ]
                ]
              },
              {
                "id": "it-b-02-5",
                "type": "translate",
                "question": "绿色",
                "options": [
                  "rosso",
                  "blu",
                  "verde",
                  "nero"
                ],
                "correctAnswer": "verde",
                "difficulty": 1
              },
              {
                "id": "it-b-02-6",
                "type": "dictation",
                "question": "听写：苹果",
                "correctAnswer": "mela",
                "difficulty": 2,
                "audioWord": "mela"
              }
            ]
          }
        ]
      },
      {
        "id": "daily",
        "name": "日常对话",
        "color": "#34D399",
        "levels": [
          {
            "levelId": "it-daily-01",
            "title": "出行与问路",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "it-d-01-1",
                "type": "translate",
                "question": "洗手间在哪里？",
                "options": [
                  "Dove è il bagno?",
                  "Quanto costa?",
                  "Che ore sono?",
                  "Dove abiti?"
                ],
                "correctAnswer": "Dove è il bagno?",
                "difficulty": 2
              },
              {
                "id": "it-d-01-2",
                "type": "fill-blank",
                "question": "Prendi il ___ per l'aeroporto.（坐出租车去机场）",
                "options": [
                  "bus",
                  "treno",
                  "taxi",
                  "aereo"
                ],
                "correctAnswer": "taxi",
                "difficulty": 2
              },
              {
                "id": "it-d-01-3",
                "type": "translate",
                "question": "多少钱？",
                "options": [
                  "Quanti?",
                  "Quanto costa?",
                  "Quando?",
                  "Dove?"
                ],
                "correctAnswer": "Quanto costa?",
                "difficulty": 2
              },
              {
                "id": "it-d-01-4",
                "type": "match",
                "question": "出行配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "stazione",
                    "火车站"
                  ],
                  [
                    "albergo",
                    "酒店"
                  ],
                  [
                    "ristorante",
                    "餐厅"
                  ],
                  [
                    "aeroporto",
                    "机场"
                  ]
                ]
              },
              {
                "id": "it-d-01-5",
                "type": "translate",
                "question": "我迷路了",
                "options": [
                  "Mi sono perso",
                  "Sono stanco",
                  "Ho fame",
                  "Sono malato"
                ],
                "correctAnswer": "Mi sono perso",
                "difficulty": 2
              },
              {
                "id": "it-d-01-6",
                "type": "dictation",
                "question": "听写：餐厅",
                "correctAnswer": "ristorante",
                "difficulty": 2,
                "audioWord": "ristorante"
              }
            ]
          },
          {
            "levelId": "it-basic-03",
            "title": "家庭与人物",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "it-basic-02"
            ],
            "questions": [
              {
                "id": "it-b-03-1",
                "type": "translate",
                "question": "妈妈",
                "options": [
                  "mamma",
                  "爸爸",
                  "哥哥",
                  "姐姐"
                ],
                "correctAnswer": "mamma",
                "difficulty": 1
              },
              {
                "id": "it-b-03-2",
                "type": "translate",
                "question": "朋友",
                "options": [
                  "amico",
                  "敌人",
                  "陌生人",
                  "邻居"
                ],
                "correctAnswer": "amico",
                "difficulty": 1
              },
              {
                "id": "it-b-03-3",
                "type": "fill-blank",
                "question": "Dov'è la ___?（妈妈在哪里？）",
                "options": [
                  "mamma",
                  "papà",
                  "sorella",
                  "fratello"
                ],
                "correctAnswer": "mamma",
                "difficulty": 2
              },
              {
                "id": "it-b-03-4",
                "type": "match",
                "question": "亲属配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "mamma",
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
                "id": "it-b-03-5",
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
                "id": "it-b-03-6",
                "type": "dictation",
                "question": "听写：朋友",
                "correctAnswer": "amico",
                "difficulty": 2,
                "audioWord": "amico"
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
        "color": "#B45309",
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
                "id": "pt-b-01-1",
                "type": "translate",
                "question": "你好",
                "options": [
                  "olá",
                  "obrigado",
                  "sim",
                  "não"
                ],
                "correctAnswer": "olá",
                "difficulty": 1
              },
              {
                "id": "pt-b-01-2",
                "type": "translate",
                "question": "谢谢",
                "options": [
                  "obrigado",
                  "por favor",
                  "sim",
                  "olá"
                ],
                "correctAnswer": "obrigado",
                "difficulty": 1
              },
              {
                "id": "pt-b-01-3",
                "type": "fill-blank",
                "question": "___ dia!（早上好）",
                "options": [
                  "Bom",
                  "Boa",
                  "Bons",
                  "Boas"
                ],
                "correctAnswer": "Bom",
                "difficulty": 2
              },
              {
                "id": "pt-b-01-4",
                "type": "match",
                "question": "葡萄牙语配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "olá",
                    "你好"
                  ],
                  [
                    "obrigado",
                    "谢谢"
                  ],
                  [
                    "sim",
                    "是"
                  ],
                  [
                    "não",
                    "不是"
                  ]
                ]
              },
              {
                "id": "pt-b-01-5",
                "type": "translate",
                "question": "我爱你",
                "options": [
                  "eu te amo",
                  "muito obrigado",
                  "olá",
                  "adeus"
                ],
                "correctAnswer": "eu te amo",
                "difficulty": 2
              },
              {
                "id": "pt-b-01-6",
                "type": "dictation",
                "question": "听写：水",
                "correctAnswer": "água",
                "difficulty": 2,
                "audioWord": "água"
              }
            ]
          },
          {
            "levelId": "pt-basic-02",
            "title": "数字与颜色",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "pt-basic-01"
            ],
            "questions": [
              {
                "id": "pt-b-02-1",
                "type": "translate",
                "question": "红色",
                "options": [
                  "vermelho",
                  "azul",
                  "verde",
                  "amarelo"
                ],
                "correctAnswer": "vermelho",
                "difficulty": 1
              },
              {
                "id": "pt-b-02-2",
                "type": "translate",
                "question": "三",
                "options": [
                  "um",
                  "dois",
                  "três",
                  "quatro"
                ],
                "correctAnswer": "três",
                "difficulty": 1
              },
              {
                "id": "pt-b-02-3",
                "type": "fill-blank",
                "question": "O céu é ___.（天空是蓝色的）",
                "options": [
                  "vermelho",
                  "azul",
                  "verde",
                  "branco"
                ],
                "correctAnswer": "azul",
                "difficulty": 1
              },
              {
                "id": "pt-b-02-4",
                "type": "match",
                "question": "数字配对",
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
                "id": "pt-b-02-5",
                "type": "translate",
                "question": "绿色",
                "options": [
                  "vermelho",
                  "azul",
                  "verde",
                  "preto"
                ],
                "correctAnswer": "verde",
                "difficulty": 1
              },
              {
                "id": "pt-b-02-6",
                "type": "dictation",
                "question": "听写：苹果",
                "correctAnswer": "maçã",
                "difficulty": 2,
                "audioWord": "maçã"
              }
            ]
          },
          {
            "levelId": "pt-basic-03",
            "title": "家庭与人物",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "pt-basic-02"
            ],
            "questions": [
              {
                "id": "pt-b-03-1",
                "type": "translate",
                "question": "妈妈",
                "options": [
                  "mãe",
                  "爸爸",
                  "哥哥",
                  "姐姐"
                ],
                "correctAnswer": "mãe",
                "difficulty": 1
              },
              {
                "id": "pt-b-03-2",
                "type": "translate",
                "question": "朋友",
                "options": [
                  "amigo",
                  "敌人",
                  "陌生人",
                  "邻居"
                ],
                "correctAnswer": "amigo",
                "difficulty": 1
              },
              {
                "id": "pt-b-03-3",
                "type": "fill-blank",
                "question": "Onde está a ___?（妈妈在哪里？）",
                "options": [
                  "mãe",
                  "pai",
                  "irmã",
                  "irmão"
                ],
                "correctAnswer": "mãe",
                "difficulty": 2
              },
              {
                "id": "pt-b-03-4",
                "type": "match",
                "question": "亲属配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "mãe",
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
                "id": "pt-b-03-5",
                "type": "translate",
                "question": "家人",
                "options": [
                  "família",
                  "amigo",
                  "professor",
                  "colega"
                ],
                "correctAnswer": "família",
                "difficulty": 1
              },
              {
                "id": "pt-b-03-6",
                "type": "dictation",
                "question": "听写：朋友",
                "correctAnswer": "amigo",
                "difficulty": 2,
                "audioWord": "amigo"
              }
            ]
          }
        ]
      },
      {
        "id": "daily",
        "name": "日常对话",
        "color": "#F59E0B",
        "levels": [
          {
            "levelId": "pt-daily-01",
            "title": "出行与问路",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "pt-d-01-1",
                "type": "translate",
                "question": "洗手间在哪里？",
                "options": [
                  "Onde fica o banheiro?",
                  "Quanto custa isso?",
                  "Que horas são?",
                  "Onde você mora?"
                ],
                "correctAnswer": "Onde fica o banheiro?",
                "difficulty": 2
              },
              {
                "id": "pt-d-01-2",
                "type": "fill-blank",
                "question": "Pegue o ___ para o aeroporto.（坐出租车去机场）",
                "options": [
                  "ônibus",
                  "trem",
                  "táxi",
                  "avião"
                ],
                "correctAnswer": "táxi",
                "difficulty": 2
              },
              {
                "id": "pt-d-01-3",
                "type": "translate",
                "question": "多少钱？",
                "options": [
                  "Quantos?",
                  "Quanto custa?",
                  "Quando?",
                  "Onde?"
                ],
                "correctAnswer": "Quanto custa?",
                "difficulty": 2
              },
              {
                "id": "pt-d-01-4",
                "type": "match",
                "question": "出行配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "estação",
                    "火车站"
                  ],
                  [
                    "hotel",
                    "酒店"
                  ],
                  [
                    "restaurante",
                    "餐厅"
                  ],
                  [
                    "aeroporto",
                    "机场"
                  ]
                ]
              },
              {
                "id": "pt-d-01-5",
                "type": "translate",
                "question": "我迷路了",
                "options": [
                  "Estou perdido",
                  "Estou cansado",
                  "Estou com fome",
                  "Estou doente"
                ],
                "correctAnswer": "Estou perdido",
                "difficulty": 2
              },
              {
                "id": "pt-d-01-6",
                "type": "dictation",
                "question": "听写：餐厅",
                "correctAnswer": "restaurante",
                "difficulty": 2,
                "audioWord": "restaurante"
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
        "color": "#065F46",
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
                "id": "ar-b-01-1",
                "type": "translate",
                "question": "你好",
                "options": [
                  "مرحبا",
                  "شكرا",
                  "نعم",
                  "لا"
                ],
                "correctAnswer": "مرحبا",
                "difficulty": 1
              },
              {
                "id": "ar-b-01-2",
                "type": "translate",
                "question": "谢谢",
                "options": [
                  "شكرا",
                  "من فضلك",
                  "نعم",
                  "مرحبا"
                ],
                "correctAnswer": "شكرا",
                "difficulty": 1
              },
              {
                "id": "ar-b-01-3",
                "type": "fill-blank",
                "question": "___ الخير（早上好）",
                "options": [
                  "صباح",
                  "مساء",
                  "ليلة",
                  "يوم"
                ],
                "correctAnswer": "صباح",
                "difficulty": 2
              },
              {
                "id": "ar-b-01-4",
                "type": "match",
                "question": "阿拉伯语配对",
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
                    "نعم",
                    "是"
                  ],
                  [
                    "لا",
                    "不是"
                  ]
                ]
              },
              {
                "id": "ar-b-01-5",
                "type": "translate",
                "question": "我爱你",
                "options": [
                  "أحبك",
                  "شكرا جزيلا",
                  "مرحبا",
                  "مع السلامة"
                ],
                "correctAnswer": "أحبك",
                "difficulty": 2
              },
              {
                "id": "ar-b-01-6",
                "type": "dictation",
                "question": "听写：水",
                "correctAnswer": "ماء",
                "difficulty": 2,
                "audioWord": "ماء"
              }
            ]
          },
          {
            "levelId": "ar-basic-02",
            "title": "数字与颜色",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "ar-basic-01"
            ],
            "questions": [
              {
                "id": "ar-b-02-1",
                "type": "translate",
                "question": "红色",
                "options": [
                  "أحمر",
                  "أزرق",
                  "أخضر",
                  "أصفر"
                ],
                "correctAnswer": "أحمر",
                "difficulty": 1
              },
              {
                "id": "ar-b-02-2",
                "type": "translate",
                "question": "三",
                "options": [
                  "واحد",
                  "اثنان",
                  "ثلاثة",
                  "أربعة"
                ],
                "correctAnswer": "ثلاثة",
                "difficulty": 1
              },
              {
                "id": "ar-b-02-3",
                "type": "fill-blank",
                "question": "السماء ___.（天空是蓝色的）",
                "options": [
                  "حمراء",
                  "زرقاء",
                  "خضراء",
                  "بيضاء"
                ],
                "correctAnswer": "زرقاء",
                "difficulty": 1
              },
              {
                "id": "ar-b-02-4",
                "type": "match",
                "question": "数字配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "واحد",
                    "一"
                  ],
                  [
                    "اثنان",
                    "二"
                  ],
                  [
                    "ثلاثة",
                    "三"
                  ],
                  [
                    "أربعة",
                    "四"
                  ]
                ]
              },
              {
                "id": "ar-b-02-5",
                "type": "translate",
                "question": "绿色",
                "options": [
                  "أحمر",
                  "أزرق",
                  "أخضر",
                  "أسود"
                ],
                "correctAnswer": "أخضر",
                "difficulty": 1
              },
              {
                "id": "ar-b-02-6",
                "type": "dictation",
                "question": "听写：苹果",
                "correctAnswer": "تفاح",
                "difficulty": 2,
                "audioWord": "تفاح"
              }
            ]
          }
        ]
      },
      {
        "id": "daily",
        "name": "日常对话",
        "color": "#10B981",
        "levels": [
          {
            "levelId": "ar-daily-01",
            "title": "出行与问路",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "ar-d-01-1",
                "type": "translate",
                "question": "洗手间在哪里？",
                "options": [
                  "أين الحمام؟",
                  "كم سعر هذا؟",
                  "كم الساعة؟",
                  "أين تسكن؟"
                ],
                "correctAnswer": "أين الحمام؟",
                "difficulty": 2
              },
              {
                "id": "ar-d-01-2",
                "type": "fill-blank",
                "question": "خذ ال___ إلى المطار.（坐出租车去机场）",
                "options": [
                  "حافلة",
                  "قطار",
                  "تاكسي",
                  "طائرة"
                ],
                "correctAnswer": "تاكسي",
                "difficulty": 2
              },
              {
                "id": "ar-d-01-3",
                "type": "translate",
                "question": "多少钱？",
                "options": [
                  "كم عدد؟",
                  "كم السعر؟",
                  "متى؟",
                  "أين؟"
                ],
                "correctAnswer": "كم السعر؟",
                "difficulty": 2
              },
              {
                "id": "ar-d-01-4",
                "type": "match",
                "question": "出行配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "محطة",
                    "火车站"
                  ],
                  [
                    "فندق",
                    "酒店"
                  ],
                  [
                    "مطعم",
                    "餐厅"
                  ],
                  [
                    "مطار",
                    "机场"
                  ]
                ]
              },
              {
                "id": "ar-d-01-5",
                "type": "translate",
                "question": "我迷路了",
                "options": [
                  "أنا ضائع",
                  "أنا متعب",
                  "أنا جائع",
                  "أنا مريض"
                ],
                "correctAnswer": "أنا ضائع",
                "difficulty": 2
              },
              {
                "id": "ar-d-01-6",
                "type": "dictation",
                "question": "听写：餐厅",
                "correctAnswer": "مطعم",
                "difficulty": 2,
                "audioWord": "مطعم"
              }
            ]
          },
          {
            "levelId": "ar-basic-03",
            "title": "家庭与人物",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "ar-basic-02"
            ],
            "questions": [
              {
                "id": "ar-b-03-1",
                "type": "translate",
                "question": "妈妈",
                "options": [
                  "أم",
                  "أب",
                  "أخ",
                  "أخت"
                ],
                "correctAnswer": "أم",
                "difficulty": 1
              },
              {
                "id": "ar-b-03-2",
                "type": "translate",
                "question": "朋友",
                "options": [
                  "صديق",
                  "عدو",
                  "غريب",
                  "جار"
                ],
                "correctAnswer": "صديق",
                "difficulty": 1
              },
              {
                "id": "ar-b-03-3",
                "type": "fill-blank",
                "question": "أين ___؟（你妈妈在哪里？）",
                "options": [
                  "أمك",
                  "أبك",
                  "أختك",
                  "أخوك"
                ],
                "correctAnswer": "أمك",
                "difficulty": 2
              },
              {
                "id": "ar-b-03-4",
                "type": "match",
                "question": "亲属配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "أم",
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
                "id": "ar-b-03-5",
                "type": "translate",
                "question": "家人",
                "options": [
                  "عائلة",
                  "صديق",
                  "معلم",
                  "زميل"
                ],
                "correctAnswer": "عائلة",
                "difficulty": 1
              },
              {
                "id": "ar-b-03-6",
                "type": "dictation",
                "question": "听写：朋友",
                "correctAnswer": "صديق",
                "difficulty": 2,
                "audioWord": "sadiq"
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
        "color": "#7C3AED",
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
                "id": "hi-b-01-1",
                "type": "translate",
                "question": "你好",
                "options": [
                  "नमस्ते",
                  "धन्यवाद",
                  "हाँ",
                  "नहीं"
                ],
                "correctAnswer": "नमस्ते",
                "difficulty": 1
              },
              {
                "id": "hi-b-01-2",
                "type": "translate",
                "question": "谢谢",
                "options": [
                  "धन्यवाद",
                  "कृपया",
                  "हाँ",
                  "नमस्ते"
                ],
                "correctAnswer": "धन्यवाद",
                "difficulty": 1
              },
              {
                "id": "hi-b-01-3",
                "type": "fill-blank",
                "question": "___ प्रभात（早上好）",
                "options": [
                  "शुभ",
                  "सुप्रभात",
                  "शुभ",
                  "सुबह"
                ],
                "correctAnswer": "शुभ",
                "difficulty": 2
              },
              {
                "id": "hi-b-01-4",
                "type": "match",
                "question": "印地语配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "नमस्ते",
                    "你好"
                  ],
                  [
                    "धन्यवाद",
                    "谢谢"
                  ],
                  [
                    "हाँ",
                    "是"
                  ],
                  [
                    "नहीं",
                    "不是"
                  ]
                ]
              },
              {
                "id": "hi-b-01-5",
                "type": "translate",
                "question": "我爱你",
                "options": [
                  "मैं तुमसे प्यार करता हूँ",
                  "बहुत धन्यवाद",
                  "नमस्ते",
                  "अलविदा"
                ],
                "correctAnswer": "मैं तुमसे प्यार करता हूँ",
                "difficulty": 2
              },
              {
                "id": "hi-b-01-6",
                "type": "dictation",
                "question": "听写：水",
                "correctAnswer": "पानी",
                "difficulty": 2,
                "audioWord": "पानी"
              }
            ]
          },
          {
            "levelId": "hi-basic-02",
            "title": "数字与颜色",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "hi-basic-01"
            ],
            "questions": [
              {
                "id": "hi-b-02-1",
                "type": "translate",
                "question": "红色",
                "options": [
                  "लाल",
                  "नीला",
                  "हरा",
                  "पीला"
                ],
                "correctAnswer": "लाल",
                "difficulty": 1
              },
              {
                "id": "hi-b-02-2",
                "type": "translate",
                "question": "三",
                "options": [
                  "एक",
                  "दो",
                  "तीन",
                  "चार"
                ],
                "correctAnswer": "तीन",
                "difficulty": 1
              },
              {
                "id": "hi-b-02-3",
                "type": "fill-blank",
                "question": "आसमान ___ है।（天空是蓝色的）",
                "options": [
                  "लाल",
                  "नीला",
                  "हरा",
                  "सफ़ेद"
                ],
                "correctAnswer": "नीला",
                "difficulty": 1
              },
              {
                "id": "hi-b-02-4",
                "type": "match",
                "question": "数字配对",
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
                "id": "hi-b-02-5",
                "type": "translate",
                "question": "绿色",
                "options": [
                  "लाल",
                  "नीला",
                  "हरा",
                  "काला"
                ],
                "correctAnswer": "हरा",
                "difficulty": 1
              },
              {
                "id": "hi-b-02-6",
                "type": "dictation",
                "question": "听写：苹果",
                "correctAnswer": "सेब",
                "difficulty": 2,
                "audioWord": "सेब"
              }
            ]
          },
          {
            "levelId": "hi-basic-03",
            "title": "家庭与人物",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "hi-basic-02"
            ],
            "questions": [
              {
                "id": "hi-b-03-1",
                "type": "translate",
                "question": "妈妈",
                "options": [
                  "माँ",
                  "पिता",
                  "भाई",
                  "बहन"
                ],
                "correctAnswer": "माँ",
                "difficulty": 1
              },
              {
                "id": "hi-b-03-2",
                "type": "translate",
                "question": "朋友",
                "options": [
                  "दोस्त",
                  "दुश्मन",
                  "अजनबी",
                  "पड़ोसी"
                ],
                "correctAnswer": "दोस्त",
                "difficulty": 1
              },
              {
                "id": "hi-b-03-3",
                "type": "fill-blank",
                "question": "___ कहाँ है?（你妈妈在哪里？）",
                "options": [
                  "माँ",
                  "पिता",
                  "बहन",
                  "भाई"
                ],
                "correctAnswer": "माँ",
                "difficulty": 2
              },
              {
                "id": "hi-b-03-4",
                "type": "match",
                "question": "亲属配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "माँ",
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
                "id": "hi-b-03-5",
                "type": "translate",
                "question": "家人",
                "options": [
                  "परिवार",
                  "दोस्त",
                  "अध्यापक",
                  "सहपाठी"
                ],
                "correctAnswer": "परिवार",
                "difficulty": 1
              },
              {
                "id": "hi-b-03-6",
                "type": "dictation",
                "question": "听写：朋友",
                "correctAnswer": "दोस्त",
                "difficulty": 2,
                "audioWord": "dost"
              }
            ]
          }
        ]
      },
      {
        "id": "daily",
        "name": "日常对话",
        "color": "#A78BFA",
        "levels": [
          {
            "levelId": "hi-daily-01",
            "title": "出行与问路",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "hi-d-01-1",
                "type": "translate",
                "question": "洗手间在哪里？",
                "options": [
                  "शौचालय कहाँ है?",
                  "इसकी कीमत क्या है?",
                  "कितना बजा है?",
                  "आप कहाँ रहते हैं?"
                ],
                "correctAnswer": "शौचालय कहाँ है?",
                "difficulty": 2
              },
              {
                "id": "hi-d-01-2",
                "type": "fill-blank",
                "question": "हवाई अड्डे के लिए ___ लें।（坐出租车去机场）",
                "options": [
                  "बस",
                  "ट्रेन",
                  "टैक्सी",
                  "हवाई जहाज़"
                ],
                "correctAnswer": "टैक्सी",
                "difficulty": 2
              },
              {
                "id": "hi-d-01-3",
                "type": "translate",
                "question": "多少钱？",
                "options": [
                  "कितने?",
                  "कीमत क्या है?",
                  "कब?",
                  "कहाँ?"
                ],
                "correctAnswer": "कीमत क्या है?",
                "difficulty": 2
              },
              {
                "id": "hi-d-01-4",
                "type": "match",
                "question": "出行配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "स्टेशन",
                    "火车站"
                  ],
                  [
                    "होटल",
                    "酒店"
                  ],
                  [
                    "रेस्टोरेंट",
                    "餐厅"
                  ],
                  [
                    "हवाई अड्डा",
                    "机场"
                  ]
                ]
              },
              {
                "id": "hi-d-01-5",
                "type": "translate",
                "question": "我迷路了",
                "options": [
                  "मैं रास्ता भूल गया",
                  "मैं थका हुआ हूँ",
                  "मुझे भूख लगी है",
                  "मैं बीमार हूँ"
                ],
                "correctAnswer": "मैं रास्ता भूल गया",
                "difficulty": 2
              },
              {
                "id": "hi-d-01-6",
                "type": "dictation",
                "question": "听写：餐厅",
                "correctAnswer": "रेस्टोरेंट",
                "difficulty": 2,
                "audioWord": "रेस्टोरेंट"
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
        "name": "泰语基础词汇",
        "color": "#1E3A8A",
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
                "id": "th-b-01-1",
                "type": "translate",
                "question": "你好",
                "options": [
                  "สวัสดี",
                  "ขอบคุณ",
                  "ขอโทษ",
                  "สวัสดีตอนเช้า"
                ],
                "correctAnswer": "สวัสดี",
                "difficulty": 1
              },
              {
                "id": "th-b-01-2",
                "type": "translate",
                "question": "谢谢",
                "options": [
                  "ขอบคุณ",
                  "สวัสดี",
                  "ขอโทษ",
                  "สวัสดีตอนเช้า"
                ],
                "correctAnswer": "ขอบคุณ",
                "difficulty": 1
              },
              {
                "id": "th-b-01-3",
                "type": "fill-blank",
                "question": "___ ตอนเช้า!（早上好）",
                "options": [
                  "สวัสดี",
                  "ราตรีสวัสดิ์",
                  "ขอบคุณ",
                  "ลาก่อน"
                ],
                "correctAnswer": "สวัสดี",
                "difficulty": 2
              },
              {
                "id": "th-b-01-4",
                "type": "match",
                "question": "泰语配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "สวัสดี",
                    "你好"
                  ],
                  [
                    "ขอบคุณ",
                    "谢谢"
                  ],
                  [
                    "ขอโทษ",
                    "对不起"
                  ],
                  [
                    "สวัสดีตอนเช้า",
                    "早上好"
                  ]
                ]
              },
              {
                "id": "th-b-01-5",
                "type": "translate",
                "question": "晚安",
                "options": [
                  "ราตรีสวัสดิ์",
                  "สวัสดี",
                  "ขอบคุณ",
                  "ขอโทษ"
                ],
                "correctAnswer": "ราตรีสวัสดิ์",
                "difficulty": 2
              },
              {
                "id": "th-b-01-6",
                "type": "dictation",
                "question": "听写：水",
                "correctAnswer": "น้ำ",
                "difficulty": 2,
                "audioWord": "น้ำ"
              }
            ]
          },
          {
            "levelId": "th-basic-02",
            "title": "数字与颜色",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "th-basic-01"
            ],
            "questions": [
              {
                "id": "th-b-02-1",
                "type": "translate",
                "question": "红色",
                "options": [
                  "แดง",
                  "น้ำเงิน",
                  "เขียว",
                  "เหลือง"
                ],
                "correctAnswer": "แดง",
                "difficulty": 1
              },
              {
                "id": "th-b-02-2",
                "type": "translate",
                "question": "三",
                "options": [
                  "สาม",
                  "หนึ่ง",
                  "สอง",
                  "สี่"
                ],
                "correctAnswer": "สาม",
                "difficulty": 1
              },
              {
                "id": "th-b-02-3",
                "type": "fill-blank",
                "question": "นี่คือสี ___（这是红色的）",
                "options": [
                  "แดง",
                  "น้ำเงิน",
                  "เขียว",
                  "เหลือง"
                ],
                "correctAnswer": "แดง",
                "difficulty": 1
              },
              {
                "id": "th-b-02-4",
                "type": "match",
                "question": "数字配对",
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
                "id": "th-b-02-5",
                "type": "translate",
                "question": "绿色",
                "options": [
                  "เขียว",
                  "แดง",
                  "น้ำเงิน",
                  "เหลือง"
                ],
                "correctAnswer": "เขียว",
                "difficulty": 1
              },
              {
                "id": "th-b-02-6",
                "type": "dictation",
                "question": "听写：米饭",
                "correctAnswer": "ข้าว",
                "difficulty": 2,
                "audioWord": "ข้าว"
              }
            ]
          },
          {
            "levelId": "th-basic-03",
            "title": "家庭与人物",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "th-basic-02"
            ],
            "questions": [
              {
                "id": "th-b-03-1",
                "type": "translate",
                "question": "妈妈",
                "options": [
                  "แม่",
                  "爸爸",
                  "哥哥",
                  "姐姐"
                ],
                "correctAnswer": "แม่",
                "difficulty": 1
              },
              {
                "id": "th-b-03-2",
                "type": "translate",
                "question": "朋友",
                "options": [
                  "เพื่อน",
                  "敌人",
                  "陌生人",
                  "邻居"
                ],
                "correctAnswer": "เพื่อน",
                "difficulty": 1
              },
              {
                "id": "th-b-03-3",
                "type": "fill-blank",
                "question": "___ อยู่ที่ไหน?（妈妈在哪里？）",
                "options": [
                  "แม่",
                  "พ่อ",
                  "พี่สาว",
                  "พี่ชาย"
                ],
                "correctAnswer": "แม่",
                "difficulty": 2
              },
              {
                "id": "th-b-03-4",
                "type": "match",
                "question": "亲属配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "แม่",
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
                "id": "th-b-03-5",
                "type": "translate",
                "question": "家人",
                "options": [
                  "ครอบครัว",
                  "เพื่อน",
                  "ครู",
                  "เพื่อนร่วมชั้น"
                ],
                "correctAnswer": "ครอบครัว",
                "difficulty": 1
              },
              {
                "id": "th-b-03-6",
                "type": "dictation",
                "question": "听写：朋友",
                "correctAnswer": "เพื่อน",
                "difficulty": 2,
                "audioWord": "phuean"
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
            "levelId": "th-daily-01",
            "title": "出行与问路",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "th-d-01-1",
                "type": "translate",
                "question": "洗手间在哪里？",
                "options": [
                  "ห้องน้ำอยู่ที่ไหน",
                  "อันนี้เท่าไหร่",
                  "ฉันหลงทาง",
                  "ฉันต้องการหมอ"
                ],
                "correctAnswer": "ห้องน้ำอยู่ที่ไหน",
                "difficulty": 2
              },
              {
                "id": "th-d-01-2",
                "type": "translate",
                "question": "这个多少钱？",
                "options": [
                  "อันนี้เท่าไหร่",
                  "ห้องน้ำอยู่ที่ไหน",
                  "ฉันหลงทาง",
                  "ฉันต้องการหมอ"
                ],
                "correctAnswer": "อันนี้เท่าไหร่",
                "difficulty": 2
              },
              {
                "id": "th-d-01-3",
                "type": "translate",
                "question": "我迷路了？",
                "options": [
                  "ฉันหลงทาง",
                  "ห้องน้ำอยู่ที่ไหน",
                  "อันนี้เท่าไหร่",
                  "ฉันต้องการหมอ"
                ],
                "correctAnswer": "ฉันหลงทาง",
                "difficulty": 2
              },
              {
                "id": "th-d-01-4",
                "type": "translate",
                "question": "我需要医生？",
                "options": [
                  "ฉันต้องการหมอ",
                  "ห้องน้ำอยู่ที่ไหน",
                  "อันนี้เท่าไหร่",
                  "ฉันหลงทาง"
                ],
                "correctAnswer": "ฉันต้องการหมอ",
                "difficulty": 2
              },
              {
                "id": "th-d-01-5",
                "type": "match",
                "question": "出行配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "รถไฟ",
                    "火车"
                  ],
                  [
                    "โรงพยาบาล",
                    "医院"
                  ],
                  [
                    "โรงเรียน",
                    "学校"
                  ],
                  [
                    "เครื่องบิน",
                    "飞机"
                  ]
                ]
              },
              {
                "id": "th-d-01-6",
                "type": "fill-blank",
                "question": "___ ให้หน่อย（请结账）",
                "options": [
                  "เช็คบิล",
                  "ขอบคุณ",
                  "สวัสดี",
                  "ลาก่อน"
                ],
                "correctAnswer": "เช็คบิล",
                "difficulty": 2
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
        "name": "越南语基础词汇",
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
                "id": "vi-b-01-1",
                "type": "translate",
                "question": "你好",
                "options": [
                  "xin chào",
                  "cảm ơn",
                  "xin lỗi",
                  "chào buổi sáng"
                ],
                "correctAnswer": "xin chào",
                "difficulty": 1
              },
              {
                "id": "vi-b-01-2",
                "type": "translate",
                "question": "谢谢",
                "options": [
                  "cảm ơn",
                  "xin chào",
                  "xin lỗi",
                  "chào buổi sáng"
                ],
                "correctAnswer": "cảm ơn",
                "difficulty": 1
              },
              {
                "id": "vi-b-01-3",
                "type": "fill-blank",
                "question": "___ buổi sáng!（早上好）",
                "options": [
                  "Chào",
                  "Cảm ơn",
                  "Xin lỗi",
                  "Tạm biệt"
                ],
                "correctAnswer": "Chào",
                "difficulty": 2
              },
              {
                "id": "vi-b-01-4",
                "type": "match",
                "question": "越南语配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "xin chào",
                    "你好"
                  ],
                  [
                    "cảm ơn",
                    "谢谢"
                  ],
                  [
                    "xin lỗi",
                    "对不起"
                  ],
                  [
                    "chào buổi sáng",
                    "早上好"
                  ]
                ]
              },
              {
                "id": "vi-b-01-5",
                "type": "translate",
                "question": "晚安",
                "options": [
                  "chúc ngủ ngon",
                  "xin chào",
                  "cảm ơn",
                  "xin lỗi"
                ],
                "correctAnswer": "chúc ngủ ngon",
                "difficulty": 2
              },
              {
                "id": "vi-b-01-6",
                "type": "dictation",
                "question": "听写：水",
                "correctAnswer": "nước",
                "difficulty": 2,
                "audioWord": "nước"
              }
            ]
          },
          {
            "levelId": "vi-basic-02",
            "title": "数字与颜色",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "vi-basic-01"
            ],
            "questions": [
              {
                "id": "vi-b-02-1",
                "type": "translate",
                "question": "红色",
                "options": [
                  "đỏ",
                  "xanh dương",
                  "xanh lá",
                  "vàng"
                ],
                "correctAnswer": "đỏ",
                "difficulty": 1
              },
              {
                "id": "vi-b-02-2",
                "type": "translate",
                "question": "三",
                "options": [
                  "ba",
                  "một",
                  "hai",
                  "bốn"
                ],
                "correctAnswer": "ba",
                "difficulty": 1
              },
              {
                "id": "vi-b-02-3",
                "type": "fill-blank",
                "question": "Đây là màu ___（这是红色的）",
                "options": [
                  "đỏ",
                  "xanh dương",
                  "xanh lá",
                  "vàng"
                ],
                "correctAnswer": "đỏ",
                "difficulty": 1
              },
              {
                "id": "vi-b-02-4",
                "type": "match",
                "question": "数字配对",
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
                "id": "vi-b-02-5",
                "type": "translate",
                "question": "绿色",
                "options": [
                  "xanh lá",
                  "đỏ",
                  "xanh dương",
                  "vàng"
                ],
                "correctAnswer": "xanh lá",
                "difficulty": 1
              },
              {
                "id": "vi-b-02-6",
                "type": "dictation",
                "question": "听写：米饭",
                "correctAnswer": "cơm",
                "difficulty": 2,
                "audioWord": "cơm"
              }
            ]
          },
          {
            "levelId": "vi-basic-03",
            "title": "家庭与人物",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "vi-basic-02"
            ],
            "questions": [
              {
                "id": "vi-b-03-1",
                "type": "translate",
                "question": "妈妈",
                "options": [
                  "mẹ",
                  "爸爸",
                  "哥哥",
                  "姐姐"
                ],
                "correctAnswer": "mẹ",
                "difficulty": 1
              },
              {
                "id": "vi-b-03-2",
                "type": "translate",
                "question": "朋友",
                "options": [
                  "bạn",
                  "敌人",
                  "陌生人",
                  "邻居"
                ],
                "correctAnswer": "bạn",
                "difficulty": 1
              },
              {
                "id": "vi-b-03-3",
                "type": "fill-blank",
                "question": "___ ở đâu?（妈妈在哪里？）",
                "options": [
                  "mẹ",
                  "bố",
                  "chị",
                  "anh"
                ],
                "correctAnswer": "mẹ",
                "difficulty": 2
              },
              {
                "id": "vi-b-03-4",
                "type": "match",
                "question": "亲属配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "mẹ",
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
                "id": "vi-b-03-5",
                "type": "translate",
                "question": "家人",
                "options": [
                  "gia đình",
                  "bạn",
                  "giáo viên",
                  "bạn cùng lớp"
                ],
                "correctAnswer": "gia đình",
                "difficulty": 1
              },
              {
                "id": "vi-b-03-6",
                "type": "dictation",
                "question": "听写：朋友",
                "correctAnswer": "bạn",
                "difficulty": 2,
                "audioWord": "ban"
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
            "levelId": "vi-daily-01",
            "title": "出行与问路",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "vi-d-01-1",
                "type": "translate",
                "question": "洗手间在哪里？",
                "options": [
                  "nhà vệ sinh ở đâu",
                  "cái này bao nhiêu tiền",
                  "tôi bị lạc",
                  "tôi cần bác sĩ"
                ],
                "correctAnswer": "nhà vệ sinh ở đâu",
                "difficulty": 2
              },
              {
                "id": "vi-d-01-2",
                "type": "translate",
                "question": "这个多少钱？",
                "options": [
                  "cái này bao nhiêu tiền",
                  "nhà vệ sinh ở đâu",
                  "tôi bị lạc",
                  "tôi cần bác sĩ"
                ],
                "correctAnswer": "cái này bao nhiêu tiền",
                "difficulty": 2
              },
              {
                "id": "vi-d-01-3",
                "type": "translate",
                "question": "我迷路了？",
                "options": [
                  "tôi bị lạc",
                  "nhà vệ sinh ở đâu",
                  "cái này bao nhiêu tiền",
                  "tôi cần bác sĩ"
                ],
                "correctAnswer": "tôi bị lạc",
                "difficulty": 2
              },
              {
                "id": "vi-d-01-4",
                "type": "translate",
                "question": "我需要医生？",
                "options": [
                  "tôi cần bác sĩ",
                  "nhà vệ sinh ở đâu",
                  "cái này bao nhiêu tiền",
                  "tôi bị lạc"
                ],
                "correctAnswer": "tôi cần bác sĩ",
                "difficulty": 2
              },
              {
                "id": "vi-d-01-5",
                "type": "match",
                "question": "出行配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "xe lửa",
                    "火车"
                  ],
                  [
                    "bệnh viện",
                    "医院"
                  ],
                  [
                    "trường học",
                    "学校"
                  ],
                  [
                    "máy bay",
                    "飞机"
                  ]
                ]
              },
              {
                "id": "vi-d-01-6",
                "type": "fill-blank",
                "question": "___ tiền giúp tôi（请结账）",
                "options": [
                  "Tính",
                  "Cảm ơn",
                  "Xin chào",
                  "Tạm biệt"
                ],
                "correctAnswer": "Tính",
                "difficulty": 2
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
        "name": "土耳其语基础词汇",
        "color": "#7C3AED",
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
                "id": "tr-b-01-1",
                "type": "translate",
                "question": "你好",
                "options": [
                  "merhaba",
                  "teşekkür ederim",
                  "özür dilerim",
                  "günaydın"
                ],
                "correctAnswer": "merhaba",
                "difficulty": 1
              },
              {
                "id": "tr-b-01-2",
                "type": "translate",
                "question": "谢谢",
                "options": [
                  "teşekkür ederim",
                  "merhaba",
                  "özür dilerim",
                  "günaydın"
                ],
                "correctAnswer": "teşekkür ederim",
                "difficulty": 1
              },
              {
                "id": "tr-b-01-3",
                "type": "fill-blank",
                "question": "___ ederim!（谢谢）",
                "options": [
                  "Teşekkür",
                  "Özür",
                  "Merhaba",
                  "Hoşça"
                ],
                "correctAnswer": "Teşekkür",
                "difficulty": 2
              },
              {
                "id": "tr-b-01-4",
                "type": "match",
                "question": "土耳其语配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "merhaba",
                    "你好"
                  ],
                  [
                    "teşekkür ederim",
                    "谢谢"
                  ],
                  [
                    "özür dilerim",
                    "对不起"
                  ],
                  [
                    "günaydın",
                    "早上好"
                  ]
                ]
              },
              {
                "id": "tr-b-01-5",
                "type": "translate",
                "question": "晚安",
                "options": [
                  "iyi geceler",
                  "merhaba",
                  "teşekkür ederim",
                  "özür dilerim"
                ],
                "correctAnswer": "iyi geceler",
                "difficulty": 2
              },
              {
                "id": "tr-b-01-6",
                "type": "dictation",
                "question": "听写：水",
                "correctAnswer": "su",
                "difficulty": 2,
                "audioWord": "su"
              }
            ]
          },
          {
            "levelId": "tr-basic-02",
            "title": "数字与颜色",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "tr-basic-01"
            ],
            "questions": [
              {
                "id": "tr-b-02-1",
                "type": "translate",
                "question": "红色",
                "options": [
                  "kırmızı",
                  "mavi",
                  "yeşil",
                  "sarı"
                ],
                "correctAnswer": "kırmızı",
                "difficulty": 1
              },
              {
                "id": "tr-b-02-2",
                "type": "translate",
                "question": "三",
                "options": [
                  "üç",
                  "bir",
                  "iki",
                  "dört"
                ],
                "correctAnswer": "üç",
                "difficulty": 1
              },
              {
                "id": "tr-b-02-3",
                "type": "fill-blank",
                "question": "Bu ___ renk（这是红色的）",
                "options": [
                  "kırmızı",
                  "mavi",
                  "yeşil",
                  "sarı"
                ],
                "correctAnswer": "kırmızı",
                "difficulty": 1
              },
              {
                "id": "tr-b-02-4",
                "type": "match",
                "question": "数字配对",
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
                "id": "tr-b-02-5",
                "type": "translate",
                "question": "绿色",
                "options": [
                  "yeşil",
                  "kırmızı",
                  "mavi",
                  "sarı"
                ],
                "correctAnswer": "yeşil",
                "difficulty": 1
              },
              {
                "id": "tr-b-02-6",
                "type": "dictation",
                "question": "听写：米饭",
                "correctAnswer": "pilav",
                "difficulty": 2,
                "audioWord": "pilav"
              }
            ]
          },
          {
            "levelId": "tr-basic-03",
            "title": "家庭与人物",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "tr-basic-02"
            ],
            "questions": [
              {
                "id": "tr-b-03-1",
                "type": "translate",
                "question": "妈妈",
                "options": [
                  "anne",
                  "爸爸",
                  "哥哥",
                  "姐姐"
                ],
                "correctAnswer": "anne",
                "difficulty": 1
              },
              {
                "id": "tr-b-03-2",
                "type": "translate",
                "question": "朋友",
                "options": [
                  "arkadaş",
                  "敌人",
                  "陌生人",
                  "邻居"
                ],
                "correctAnswer": "arkadaş",
                "difficulty": 1
              },
              {
                "id": "tr-b-03-3",
                "type": "fill-blank",
                "question": "___ nerede?（妈妈在哪里？）",
                "options": [
                  "anne",
                  "baba",
                  "abla",
                  "abi"
                ],
                "correctAnswer": "anne",
                "difficulty": 2
              },
              {
                "id": "tr-b-03-4",
                "type": "match",
                "question": "亲属配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "anne",
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
                "id": "tr-b-03-5",
                "type": "translate",
                "question": "家人",
                "options": [
                  "aile",
                  "arkadaş",
                  "öğretmen",
                  "sınıf arkadaşı"
                ],
                "correctAnswer": "aile",
                "difficulty": 1
              },
              {
                "id": "tr-b-03-6",
                "type": "dictation",
                "question": "听写：朋友",
                "correctAnswer": "arkadaş",
                "difficulty": 2,
                "audioWord": "arkadas"
              }
            ]
          }
        ]
      },
      {
        "id": "daily",
        "name": "日常对话",
        "color": "#8B5CF6",
        "levels": [
          {
            "levelId": "tr-daily-01",
            "title": "出行与问路",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "tr-d-01-1",
                "type": "translate",
                "question": "洗手间在哪里？",
                "options": [
                  "tuvalet nerede",
                  "bu ne kadar",
                  "kayboldum",
                  "doktora ihtiyacım var"
                ],
                "correctAnswer": "tuvalet nerede",
                "difficulty": 2
              },
              {
                "id": "tr-d-01-2",
                "type": "translate",
                "question": "这个多少钱？",
                "options": [
                  "bu ne kadar",
                  "tuvalet nerede",
                  "kayboldum",
                  "doktora ihtiyacım var"
                ],
                "correctAnswer": "bu ne kadar",
                "difficulty": 2
              },
              {
                "id": "tr-d-01-3",
                "type": "translate",
                "question": "我迷路了？",
                "options": [
                  "kayboldum",
                  "tuvalet nerede",
                  "bu ne kadar",
                  "doktora ihtiyacım var"
                ],
                "correctAnswer": "kayboldum",
                "difficulty": 2
              },
              {
                "id": "tr-d-01-4",
                "type": "translate",
                "question": "我需要医生？",
                "options": [
                  "doktora ihtiyacım var",
                  "tuvalet nerede",
                  "bu ne kadar",
                  "kayboldum"
                ],
                "correctAnswer": "doktora ihtiyacım var",
                "difficulty": 2
              },
              {
                "id": "tr-d-01-5",
                "type": "match",
                "question": "出行配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "tren",
                    "火车"
                  ],
                  [
                    "hastane",
                    "医院"
                  ],
                  [
                    "okul",
                    "学校"
                  ],
                  [
                    "uçak",
                    "飞机"
                  ]
                ]
              },
              {
                "id": "tr-d-01-6",
                "type": "fill-blank",
                "question": "___ lütfen（请结账）",
                "options": [
                  "Hesap",
                  "Teşekkür",
                  "Merhaba",
                  "Hoşça"
                ],
                "correctAnswer": "Hesap",
                "difficulty": 2
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
        "name": "波兰语基础词汇",
        "color": "#DC2626",
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
                "id": "pl-b-01-1",
                "type": "translate",
                "question": "你好",
                "options": [
                  "cześć",
                  "dziękuję",
                  "przepraszam",
                  "dzień dobry"
                ],
                "correctAnswer": "cześć",
                "difficulty": 1
              },
              {
                "id": "pl-b-01-2",
                "type": "translate",
                "question": "谢谢",
                "options": [
                  "dziękuję",
                  "cześć",
                  "przepraszam",
                  "dzień dobry"
                ],
                "correctAnswer": "dziękuję",
                "difficulty": 1
              },
              {
                "id": "pl-b-01-3",
                "type": "fill-blank",
                "question": "___ dobry!（早上好）",
                "options": [
                  "Dzień",
                  "Dobranoc",
                  "Cześć",
                  "Do widzenia"
                ],
                "correctAnswer": "Dzień",
                "difficulty": 2
              },
              {
                "id": "pl-b-01-4",
                "type": "match",
                "question": "波兰语配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "cześć",
                    "你好"
                  ],
                  [
                    "dziękuję",
                    "谢谢"
                  ],
                  [
                    "przepraszam",
                    "对不起"
                  ],
                  [
                    "dzień dobry",
                    "早上好"
                  ]
                ]
              },
              {
                "id": "pl-b-01-5",
                "type": "translate",
                "question": "晚安",
                "options": [
                  "dobranoc",
                  "cześć",
                  "dziękuję",
                  "przepraszam"
                ],
                "correctAnswer": "dobranoc",
                "difficulty": 2
              },
              {
                "id": "pl-b-01-6",
                "type": "dictation",
                "question": "听写：水",
                "correctAnswer": "woda",
                "difficulty": 2,
                "audioWord": "woda"
              }
            ]
          },
          {
            "levelId": "pl-basic-02",
            "title": "数字与颜色",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "pl-basic-01"
            ],
            "questions": [
              {
                "id": "pl-b-02-1",
                "type": "translate",
                "question": "红色",
                "options": [
                  "czerwony",
                  "niebieski",
                  "zielony",
                  "żółty"
                ],
                "correctAnswer": "czerwony",
                "difficulty": 1
              },
              {
                "id": "pl-b-02-2",
                "type": "translate",
                "question": "三",
                "options": [
                  "trzy",
                  "jeden",
                  "dwa",
                  "cztery"
                ],
                "correctAnswer": "trzy",
                "difficulty": 1
              },
              {
                "id": "pl-b-02-3",
                "type": "fill-blank",
                "question": "To jest ___（这是红色的）",
                "options": [
                  "czerwony",
                  "niebieski",
                  "zielony",
                  "żółty"
                ],
                "correctAnswer": "czerwony",
                "difficulty": 1
              },
              {
                "id": "pl-b-02-4",
                "type": "match",
                "question": "数字配对",
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
                "id": "pl-b-02-5",
                "type": "translate",
                "question": "绿色",
                "options": [
                  "zielony",
                  "czerwony",
                  "niebieski",
                  "żółty"
                ],
                "correctAnswer": "zielony",
                "difficulty": 1
              },
              {
                "id": "pl-b-02-6",
                "type": "dictation",
                "question": "听写：米饭",
                "correctAnswer": "ryż",
                "difficulty": 2,
                "audioWord": "ryż"
              }
            ]
          },
          {
            "levelId": "pl-basic-03",
            "title": "家庭与人物",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "pl-basic-02"
            ],
            "questions": [
              {
                "id": "pl-b-03-1",
                "type": "translate",
                "question": "妈妈",
                "options": [
                  "mama",
                  "爸爸",
                  "哥哥",
                  "姐姐"
                ],
                "correctAnswer": "mama",
                "difficulty": 1
              },
              {
                "id": "pl-b-03-2",
                "type": "translate",
                "question": "朋友",
                "options": [
                  "przyjaciel",
                  "敌人",
                  "陌生人",
                  "邻居"
                ],
                "correctAnswer": "przyjaciel",
                "difficulty": 1
              },
              {
                "id": "pl-b-03-3",
                "type": "fill-blank",
                "question": "Gdzie jest ___?（妈妈在哪里？）",
                "options": [
                  "mama",
                  "tata",
                  "siostra",
                  "brat"
                ],
                "correctAnswer": "mama",
                "difficulty": 2
              },
              {
                "id": "pl-b-03-4",
                "type": "match",
                "question": "亲属配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "mama",
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
                "id": "pl-b-03-5",
                "type": "translate",
                "question": "家人",
                "options": [
                  "rodzina",
                  "przyjaciel",
                  "nauczyciel",
                  "kolega"
                ],
                "correctAnswer": "rodzina",
                "difficulty": 1
              },
              {
                "id": "pl-b-03-6",
                "type": "dictation",
                "question": "听写：朋友",
                "correctAnswer": "przyjaciel",
                "difficulty": 2,
                "audioWord": "przyjaciel"
              }
            ]
          }
        ]
      },
      {
        "id": "daily",
        "name": "日常对话",
        "color": "#EF4444",
        "levels": [
          {
            "levelId": "pl-daily-01",
            "title": "出行与问路",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "pl-d-01-1",
                "type": "translate",
                "question": "洗手间在哪里？",
                "options": [
                  "gdzie jest toaleta",
                  "ile to kosztuje",
                  "zgubiłem się",
                  "potrzebuję lekarza"
                ],
                "correctAnswer": "gdzie jest toaleta",
                "difficulty": 2
              },
              {
                "id": "pl-d-01-2",
                "type": "translate",
                "question": "这个多少钱？",
                "options": [
                  "ile to kosztuje",
                  "gdzie jest toaleta",
                  "zgubiłem się",
                  "potrzebuję lekarza"
                ],
                "correctAnswer": "ile to kosztuje",
                "difficulty": 2
              },
              {
                "id": "pl-d-01-3",
                "type": "translate",
                "question": "我迷路了？",
                "options": [
                  "zgubiłem się",
                  "gdzie jest toaleta",
                  "ile to kosztuje",
                  "potrzebuję lekarza"
                ],
                "correctAnswer": "zgubiłem się",
                "difficulty": 2
              },
              {
                "id": "pl-d-01-4",
                "type": "translate",
                "question": "我需要医生？",
                "options": [
                  "potrzebuję lekarza",
                  "gdzie jest toaleta",
                  "ile to kosztuje",
                  "zgubiłem się"
                ],
                "correctAnswer": "potrzebuję lekarza",
                "difficulty": 2
              },
              {
                "id": "pl-d-01-5",
                "type": "match",
                "question": "出行配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "pociąg",
                    "火车"
                  ],
                  [
                    "szpital",
                    "医院"
                  ],
                  [
                    "szkoła",
                    "学校"
                  ],
                  [
                    "samolot",
                    "飞机"
                  ]
                ]
              },
              {
                "id": "pl-d-01-6",
                "type": "fill-blank",
                "question": "___ rachunek（请结账）",
                "options": [
                  "Proszę",
                  "Dziękuję",
                  "Cześć",
                  "Do widzenia"
                ],
                "correctAnswer": "Proszę",
                "difficulty": 2
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
        "name": "荷兰语基础词汇",
        "color": "#F59E0B",
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
                "id": "nl-b-01-1",
                "type": "translate",
                "question": "你好",
                "options": [
                  "hallo",
                  "bedankt",
                  "sorry",
                  "goedemorgen"
                ],
                "correctAnswer": "hallo",
                "difficulty": 1
              },
              {
                "id": "nl-b-01-2",
                "type": "translate",
                "question": "谢谢",
                "options": [
                  "bedankt",
                  "hallo",
                  "sorry",
                  "goedemorgen"
                ],
                "correctAnswer": "bedankt",
                "difficulty": 1
              },
              {
                "id": "nl-b-01-3",
                "type": "fill-blank",
                "question": "___ morgen!（早上好）",
                "options": [
                  "Goede",
                  "Welterusten",
                  "Hallo",
                  "Tot ziens"
                ],
                "correctAnswer": "Goede",
                "difficulty": 2
              },
              {
                "id": "nl-b-01-4",
                "type": "match",
                "question": "荷兰语配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "hallo",
                    "你好"
                  ],
                  [
                    "bedankt",
                    "谢谢"
                  ],
                  [
                    "sorry",
                    "对不起"
                  ],
                  [
                    "goedemorgen",
                    "早上好"
                  ]
                ]
              },
              {
                "id": "nl-b-01-5",
                "type": "translate",
                "question": "晚安",
                "options": [
                  "welterusten",
                  "hallo",
                  "bedankt",
                  "sorry"
                ],
                "correctAnswer": "welterusten",
                "difficulty": 2
              },
              {
                "id": "nl-b-01-6",
                "type": "dictation",
                "question": "听写：水",
                "correctAnswer": "water",
                "difficulty": 2,
                "audioWord": "water"
              }
            ]
          },
          {
            "levelId": "nl-basic-02",
            "title": "数字与颜色",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "nl-basic-01"
            ],
            "questions": [
              {
                "id": "nl-b-02-1",
                "type": "translate",
                "question": "红色",
                "options": [
                  "rood",
                  "blauw",
                  "groen",
                  "geel"
                ],
                "correctAnswer": "rood",
                "difficulty": 1
              },
              {
                "id": "nl-b-02-2",
                "type": "translate",
                "question": "三",
                "options": [
                  "drie",
                  "een",
                  "twee",
                  "vier"
                ],
                "correctAnswer": "drie",
                "difficulty": 1
              },
              {
                "id": "nl-b-02-3",
                "type": "fill-blank",
                "question": "Dit is ___（这是红色的）",
                "options": [
                  "rood",
                  "blauw",
                  "groen",
                  "geel"
                ],
                "correctAnswer": "rood",
                "difficulty": 1
              },
              {
                "id": "nl-b-02-4",
                "type": "match",
                "question": "数字配对",
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
                "id": "nl-b-02-5",
                "type": "translate",
                "question": "绿色",
                "options": [
                  "groen",
                  "rood",
                  "blauw",
                  "geel"
                ],
                "correctAnswer": "groen",
                "difficulty": 1
              },
              {
                "id": "nl-b-02-6",
                "type": "dictation",
                "question": "听写：米饭",
                "correctAnswer": "rijst",
                "difficulty": 2,
                "audioWord": "rijst"
              }
            ]
          },
          {
            "levelId": "nl-basic-03",
            "title": "家庭与人物",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "nl-basic-02"
            ],
            "questions": [
              {
                "id": "nl-b-03-1",
                "type": "translate",
                "question": "妈妈",
                "options": [
                  "moeder",
                  "爸爸",
                  "哥哥",
                  "姐姐"
                ],
                "correctAnswer": "moeder",
                "difficulty": 1
              },
              {
                "id": "nl-b-03-2",
                "type": "translate",
                "question": "朋友",
                "options": [
                  "vriend",
                  "敌人",
                  "陌生人",
                  "邻居"
                ],
                "correctAnswer": "vriend",
                "difficulty": 1
              },
              {
                "id": "nl-b-03-3",
                "type": "fill-blank",
                "question": "Waar is ___?（妈妈在哪里？）",
                "options": [
                  "moeder",
                  "vader",
                  "zus",
                  "broer"
                ],
                "correctAnswer": "moeder",
                "difficulty": 2
              },
              {
                "id": "nl-b-03-4",
                "type": "match",
                "question": "亲属配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "moeder",
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
                "id": "nl-b-03-5",
                "type": "translate",
                "question": "家人",
                "options": [
                  "familie",
                  "vriend",
                  "leraar",
                  "klasgenoot"
                ],
                "correctAnswer": "familie",
                "difficulty": 1
              },
              {
                "id": "nl-b-03-6",
                "type": "dictation",
                "question": "听写：朋友",
                "correctAnswer": "vriend",
                "difficulty": 2,
                "audioWord": "vriend"
              }
            ]
          }
        ]
      },
      {
        "id": "daily",
        "name": "日常对话",
        "color": "#FBBF24",
        "levels": [
          {
            "levelId": "nl-daily-01",
            "title": "出行与问路",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "nl-d-01-1",
                "type": "translate",
                "question": "洗手间在哪里？",
                "options": [
                  "waar is het toilet",
                  "hoeveel kost dit",
                  "ik ben verdwaald",
                  "ik heb een dokter nodig"
                ],
                "correctAnswer": "waar is het toilet",
                "difficulty": 2
              },
              {
                "id": "nl-d-01-2",
                "type": "translate",
                "question": "这个多少钱？",
                "options": [
                  "hoeveel kost dit",
                  "waar is het toilet",
                  "ik ben verdwaald",
                  "ik heb een dokter nodig"
                ],
                "correctAnswer": "hoeveel kost dit",
                "difficulty": 2
              },
              {
                "id": "nl-d-01-3",
                "type": "translate",
                "question": "我迷路了？",
                "options": [
                  "ik ben verdwaald",
                  "waar is het toilet",
                  "hoeveel kost dit",
                  "ik heb een dokter nodig"
                ],
                "correctAnswer": "ik ben verdwaald",
                "difficulty": 2
              },
              {
                "id": "nl-d-01-4",
                "type": "translate",
                "question": "我需要医生？",
                "options": [
                  "ik heb een dokter nodig",
                  "waar is het toilet",
                  "hoeveel kost dit",
                  "ik ben verdwaald"
                ],
                "correctAnswer": "ik heb een dokter nodig",
                "difficulty": 2
              },
              {
                "id": "nl-d-01-5",
                "type": "match",
                "question": "出行配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "trein",
                    "火车"
                  ],
                  [
                    "ziekenhuis",
                    "医院"
                  ],
                  [
                    "school",
                    "学校"
                  ],
                  [
                    "vliegtuig",
                    "飞机"
                  ]
                ]
              },
              {
                "id": "nl-d-01-6",
                "type": "fill-blank",
                "question": "___ ik de rekening（请结账）",
                "options": [
                  "Mag",
                  "Bedankt",
                  "Hallo",
                  "Tot ziens"
                ],
                "correctAnswer": "Mag",
                "difficulty": 2
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
        "name": "希腊语基础词汇",
        "color": "#0891B2",
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
                "id": "el-b-01-1",
                "type": "translate",
                "question": "你好",
                "options": [
                  "γειά σου",
                  "ευχαριστώ",
                  "συγγνώμη",
                  "καλημέρα"
                ],
                "correctAnswer": "γειά σου",
                "difficulty": 1
              },
              {
                "id": "el-b-01-2",
                "type": "translate",
                "question": "谢谢",
                "options": [
                  "ευχαριστώ",
                  "γειά σου",
                  "συγγνώμη",
                  "καλημέρα"
                ],
                "correctAnswer": "ευχαριστώ",
                "difficulty": 1
              },
              {
                "id": "el-b-01-3",
                "type": "fill-blank",
                "question": "___ μέρα!（早上好）",
                "options": [
                  "Καλη",
                  "Ευχαριστώ",
                  "Γειά",
                  "Αντίο"
                ],
                "correctAnswer": "Καλη",
                "difficulty": 2
              },
              {
                "id": "el-b-01-4",
                "type": "match",
                "question": "希腊语配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "γειά σου",
                    "你好"
                  ],
                  [
                    "ευχαριστώ",
                    "谢谢"
                  ],
                  [
                    "συγγνώμη",
                    "对不起"
                  ],
                  [
                    "καλημέρα",
                    "早上好"
                  ]
                ]
              },
              {
                "id": "el-b-01-5",
                "type": "translate",
                "question": "晚安",
                "options": [
                  "καληνύχτα",
                  "γειά σου",
                  "ευχαριστώ",
                  "συγγνώμη"
                ],
                "correctAnswer": "καληνύχτα",
                "difficulty": 2
              },
              {
                "id": "el-b-01-6",
                "type": "dictation",
                "question": "听写：水",
                "correctAnswer": "νερό",
                "difficulty": 2,
                "audioWord": "νερό"
              }
            ]
          },
          {
            "levelId": "el-basic-02",
            "title": "数字与颜色",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "el-basic-01"
            ],
            "questions": [
              {
                "id": "el-b-02-1",
                "type": "translate",
                "question": "红色",
                "options": [
                  "κόκκινο",
                  "μπλε",
                  "πράσινο",
                  "κίτρινο"
                ],
                "correctAnswer": "κόκκινο",
                "difficulty": 1
              },
              {
                "id": "el-b-02-2",
                "type": "translate",
                "question": "三",
                "options": [
                  "τρία",
                  "ένα",
                  "δύο",
                  "τέσσερα"
                ],
                "correctAnswer": "τρία",
                "difficulty": 1
              },
              {
                "id": "el-b-02-3",
                "type": "fill-blank",
                "question": "Αυτό είναι ___（这是红色的）",
                "options": [
                  "κόκκινο",
                  "μπλε",
                  "πράσινο",
                  "κίτρινο"
                ],
                "correctAnswer": "κόκκινο",
                "difficulty": 1
              },
              {
                "id": "el-b-02-4",
                "type": "match",
                "question": "数字配对",
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
                "id": "el-b-02-5",
                "type": "translate",
                "question": "绿色",
                "options": [
                  "πράσινο",
                  "κόκκινο",
                  "μπλε",
                  "κίτρινο"
                ],
                "correctAnswer": "πράσινο",
                "difficulty": 1
              },
              {
                "id": "el-b-02-6",
                "type": "dictation",
                "question": "听写：米饭",
                "correctAnswer": "ρύζι",
                "difficulty": 2,
                "audioWord": "ρύζι"
              }
            ]
          },
          {
            "levelId": "el-basic-03",
            "title": "家庭与人物",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "el-basic-02"
            ],
            "questions": [
              {
                "id": "el-b-03-1",
                "type": "translate",
                "question": "妈妈",
                "options": [
                  "μαμά",
                  "爸爸",
                  "哥哥",
                  "姐姐"
                ],
                "correctAnswer": "μαμά",
                "difficulty": 1
              },
              {
                "id": "el-b-03-2",
                "type": "translate",
                "question": "朋友",
                "options": [
                  "φίλος",
                  "敌人",
                  "陌生人",
                  "邻居"
                ],
                "correctAnswer": "φίλος",
                "difficulty": 1
              },
              {
                "id": "el-b-03-3",
                "type": "fill-blank",
                "question": "Πού είναι η ___?（妈妈在哪里？）",
                "options": [
                  "μαμά",
                  "μπαμπάς",
                  "αδελφή",
                  "αδελφός"
                ],
                "correctAnswer": "μαμά",
                "difficulty": 2
              },
              {
                "id": "el-b-03-4",
                "type": "match",
                "question": "亲属配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "μαμά",
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
                "id": "el-b-03-5",
                "type": "translate",
                "question": "家人",
                "options": [
                  "οικογένεια",
                  "φίλος",
                  "δάσκαλος",
                  "συμμαθητής"
                ],
                "correctAnswer": "οικογένεια",
                "difficulty": 1
              },
              {
                "id": "el-b-03-6",
                "type": "dictation",
                "question": "听写：朋友",
                "correctAnswer": "φίλος",
                "difficulty": 2,
                "audioWord": "filos"
              }
            ]
          }
        ]
      },
      {
        "id": "daily",
        "name": "日常对话",
        "color": "#06B6D4",
        "levels": [
          {
            "levelId": "el-daily-01",
            "title": "出行与问路",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "el-d-01-1",
                "type": "translate",
                "question": "洗手间在哪里？",
                "options": [
                  "πού είναι η τουαλέτα",
                  "πόσο κοστίζει αυτό",
                  "χάθηκα",
                  "χρειάζομαι γιατρό"
                ],
                "correctAnswer": "πού είναι η τουαλέτα",
                "difficulty": 2
              },
              {
                "id": "el-d-01-2",
                "type": "translate",
                "question": "这个多少钱？",
                "options": [
                  "πόσο κοστίζει αυτό",
                  "πού είναι η τουαλέτα",
                  "χάθηκα",
                  "χρειάζομαι γιατρό"
                ],
                "correctAnswer": "πόσο κοστίζει αυτό",
                "difficulty": 2
              },
              {
                "id": "el-d-01-3",
                "type": "translate",
                "question": "我迷路了？",
                "options": [
                  "χάθηκα",
                  "πού είναι η τουαλέτα",
                  "πόσο κοστίζει αυτό",
                  "χρειάζομαι γιατρό"
                ],
                "correctAnswer": "χάθηκα",
                "difficulty": 2
              },
              {
                "id": "el-d-01-4",
                "type": "translate",
                "question": "我需要医生？",
                "options": [
                  "χρειάζομαι γιατρό",
                  "πού είναι η τουαλέτα",
                  "πόσο κοστίζει αυτό",
                  "χάθηκα"
                ],
                "correctAnswer": "χρειάζομαι γιατρό",
                "difficulty": 2
              },
              {
                "id": "el-d-01-5",
                "type": "match",
                "question": "出行配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "τρένο",
                    "火车"
                  ],
                  [
                    "νοσοκομείο",
                    "医院"
                  ],
                  [
                    "σχολείο",
                    "学校"
                  ],
                  [
                    "αεροπλάνο",
                    "飞机"
                  ]
                ]
              },
              {
                "id": "el-d-01-6",
                "type": "fill-blank",
                "question": "Το ___ παρακαλώ（请结账）",
                "options": [
                  "λογαριασμό",
                  "ευχαριστώ",
                  "γειά",
                  "αντίο"
                ],
                "correctAnswer": "λογαριασμό",
                "difficulty": 2
              }
            ]
          }
        ]
      }
    ]
  },
  "sh": {
    "themes": [
      {
        "id": "basic",
        "name": "基础词汇",
        "color": "#DC2626",
        "levels": [
          {
            "levelId": "sh-basic-01",
            "title": "问候与礼貌",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [],
            "questions": [
              {
                "id": "sh-b-01-1",
                "type": "translate",
                "question": "你好",
                "options": [
                  "侬好",
                  "谢谢",
                  "再见",
                  "对不起"
                ],
                "correctAnswer": "侬好",
                "difficulty": 1
              },
              {
                "id": "sh-b-01-2",
                "type": "translate",
                "question": "谢谢",
                "options": [
                  "谢谢/多谢",
                  "对不起",
                  "你好",
                  "再见"
                ],
                "correctAnswer": "谢谢/多谢",
                "difficulty": 1
              },
              {
                "id": "sh-b-01-3",
                "type": "fill-blank",
                "question": "___早！（早上好！）",
                "options": [
                  "侬",
                  "阿拉",
                  "伊",
                  "伊拉"
                ],
                "correctAnswer": "侬",
                "difficulty": 2
              },
              {
                "id": "sh-b-01-4",
                "type": "match",
                "question": "上海话问候配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "侬好",
                    "你好"
                  ],
                  [
                    "谢谢",
                    "谢谢"
                  ],
                  [
                    "对勿住",
                    "对不起"
                  ],
                  [
                    "明朝见",
                    "明天见"
                  ]
                ]
              },
              {
                "id": "sh-b-01-5",
                "type": "translate",
                "question": "再见",
                "options": [
                  "明朝见",
                  "侬好",
                  "谢谢",
                  "对勿住"
                ],
                "correctAnswer": "明朝见",
                "difficulty": 1
              },
              {
                "id": "sh-b-01-6",
                "type": "dictation",
                "question": "听写：朋友",
                "correctAnswer": "朋友",
                "difficulty": 2,
                "audioWord": "朋友"
              }
            ]
          },
          {
            "levelId": "sh-basic-02",
            "title": "代词与称呼",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "sh-basic-01"
            ],
            "questions": [
              {
                "id": "sh-b-02-1",
                "type": "translate",
                "question": "我",
                "options": [
                  "阿拉",
                  "侬",
                  "伊",
                  "伊拉"
                ],
                "correctAnswer": "阿拉",
                "difficulty": 1
              },
              {
                "id": "sh-b-02-2",
                "type": "translate",
                "question": "你",
                "options": [
                  "侬",
                  "阿拉",
                  "伊",
                  "伊拉"
                ],
                "correctAnswer": "侬",
                "difficulty": 1
              },
              {
                "id": "sh-b-02-3",
                "type": "fill-blank",
                "question": "___是啥人？（他是谁？）",
                "options": [
                  "伊",
                  "阿拉",
                  "侬",
                  "伊拉"
                ],
                "correctAnswer": "伊",
                "difficulty": 2
              },
              {
                "id": "sh-b-02-4",
                "type": "match",
                "question": "代词配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "阿拉",
                    "我/我们"
                  ],
                  [
                    "侬",
                    "你"
                  ],
                  [
                    "伊",
                    "他/她"
                  ],
                  [
                    "伊拉",
                    "他们"
                  ]
                ]
              },
              {
                "id": "sh-b-02-5",
                "type": "translate",
                "question": "我们",
                "options": [
                  "阿拉",
                  "侬",
                  "伊",
                  "伊拉"
                ],
                "correctAnswer": "阿拉",
                "difficulty": 1
              },
              {
                "id": "sh-b-02-6",
                "type": "translate",
                "question": "他们",
                "options": [
                  "伊拉",
                  "阿拉",
                  "侬",
                  "伊"
                ],
                "correctAnswer": "伊拉",
                "difficulty": 1
              }
            ]
          },
          {
            "levelId": "sh-basic-03",
            "title": "数字与时间",
            "timeLimit": 120,
            "minScoreFor1Star": 35,
            "minScoreFor2Star": 55,
            "minScoreFor3Star": 75,
            "prerequisites": [
              "sh-basic-02"
            ],
            "questions": [
              {
                "id": "sh-b-03-1",
                "type": "translate",
                "question": "一",
                "options": [
                  "一",
                  "两",
                  "三",
                  "四"
                ],
                "correctAnswer": "一",
                "difficulty": 1
              },
              {
                "id": "sh-b-03-2",
                "type": "translate",
                "question": "今天",
                "options": [
                  "今朝",
                  "明朝",
                  "昨日",
                  "后日"
                ],
                "correctAnswer": "今朝",
                "difficulty": 1
              },
              {
                "id": "sh-b-03-3",
                "type": "fill-blank",
                "question": "明朝___（明天）",
                "options": [
                  "明朝",
                  "今朝",
                  "昨日",
                  "后日"
                ],
                "correctAnswer": "明朝",
                "difficulty": 2
              },
              {
                "id": "sh-b-03-4",
                "type": "match",
                "question": "时间配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "今朝",
                    "今天"
                  ],
                  [
                    "明朝",
                    "明天"
                  ],
                  [
                    "昨日",
                    "昨天"
                  ],
                  [
                    "后日",
                    "后天"
                  ]
                ]
              },
              {
                "id": "sh-b-03-5",
                "type": "translate",
                "question": "昨天",
                "options": [
                  "昨日",
                  "今朝",
                  "明朝",
                  "后日"
                ],
                "correctAnswer": "昨日",
                "difficulty": 1
              },
              {
                "id": "sh-b-03-6",
                "type": "dictation",
                "question": "听写：吃饭",
                "correctAnswer": "吃饭",
                "difficulty": 2,
                "audioWord": "吃饭"
              }
            ]
          },
          {
            "levelId": "sh-basic-04",
            "title": "时间与天气",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "sh-basic-03"
            ],
            "questions": [
              {
                "id": "sh-b-04-1",
                "type": "translate",
                "question": "今天",
                "options": [
                  "今朝",
                  "昨日",
                  "明朝",
                  "前日"
                ],
                "correctAnswer": "今朝",
                "difficulty": 1
              },
              {
                "id": "sh-b-04-2",
                "type": "translate",
                "question": "下雨",
                "options": [
                  "落雨",
                  "出太阳",
                  "刮风",
                  "落雪"
                ],
                "correctAnswer": "落雨",
                "difficulty": 1
              },
              {
                "id": "sh-b-04-3",
                "type": "fill-blank",
                "question": "今朝___老热个。（今天好热）",
                "options": [
                  "邪气",
                  "蛮",
                  "老",
                  "交关"
                ],
                "correctAnswer": "邪气",
                "difficulty": 2
              },
              {
                "id": "sh-b-04-4",
                "type": "match",
                "question": "时间配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "今朝",
                    "今天"
                  ],
                  [
                    "昨日",
                    "昨天"
                  ],
                  [
                    "明朝",
                    "明天"
                  ],
                  [
                    "几时",
                    "什么时候"
                  ]
                ]
              },
              {
                "id": "sh-b-04-5",
                "type": "translate",
                "question": "冷",
                "options": [
                  "冷",
                  "热",
                  "暖",
                  "凉"
                ],
                "correctAnswer": "冷",
                "difficulty": 1
              },
              {
                "id": "sh-b-04-6",
                "type": "repeat",
                "question": "跟读：今朝天气邪气好。",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "今朝天气邪气好。"
              }
            ]
          }
        ]
      },
      {
        "id": "daily",
        "name": "日常对话",
        "color": "#7C3AED",
        "levels": [
          {
            "levelId": "sh-daily-01",
            "title": "饮食与生活",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "sh-d-01-1",
                "type": "translate",
                "question": "吃饭",
                "options": [
                  "吃饭",
                  "吃酒",
                  "吃茶",
                  "吃水"
                ],
                "correctAnswer": "吃饭",
                "difficulty": 1
              },
              {
                "id": "sh-d-01-2",
                "type": "translate",
                "question": "喝水",
                "options": [
                  "吃水",
                  "吃饭",
                  "吃茶",
                  "吃酒"
                ],
                "correctAnswer": "吃水",
                "difficulty": 1
              },
              {
                "id": "sh-d-01-3",
                "type": "fill-blank",
                "question": "饭___了（吃好了）",
                "options": [
                  "吃过",
                  "吃饭",
                  "吃水",
                  "吃茶"
                ],
                "correctAnswer": "吃过",
                "difficulty": 2
              },
              {
                "id": "sh-d-01-4",
                "type": "match",
                "question": "饮食配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "吃饭",
                    "吃饭"
                  ],
                  [
                    "吃水",
                    "喝水"
                  ],
                  [
                    "吃茶",
                    "喝茶"
                  ],
                  [
                    "吃酒",
                    "喝酒"
                  ]
                ]
              },
              {
                "id": "sh-d-01-5",
                "type": "translate",
                "question": "多少钱",
                "options": [
                  "几钿",
                  "几岁",
                  "几人",
                  "几点"
                ],
                "correctAnswer": "几钿",
                "difficulty": 2
              },
              {
                "id": "sh-d-01-6",
                "type": "repeat",
                "question": "跟读：侬饭吃过𠲎？",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "侬饭吃过𠲎？"
              }
            ]
          },
          {
            "levelId": "sh-daily-02",
            "title": "出行与问路",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "sh-daily-01"
            ],
            "questions": [
              {
                "id": "sh-d-02-1",
                "type": "translate",
                "question": "去哪里",
                "options": [
                  "到啥地方去",
                  "做啥事体",
                  "为啥",
                  "几时"
                ],
                "correctAnswer": "到啥地方去",
                "difficulty": 2
              },
              {
                "id": "sh-d-02-2",
                "type": "fill-blank",
                "question": "地铁站___（在哪里）",
                "options": [
                  "阿里",
                  "啥人",
                  "几钿",
                  "几岁"
                ],
                "correctAnswer": "阿里",
                "difficulty": 2
              },
              {
                "id": "sh-d-02-3",
                "type": "translate",
                "question": "地铁站在哪里",
                "options": [
                  "地铁站在阿里",
                  "地铁站几钿",
                  "地铁站几岁",
                  "地铁站啥人"
                ],
                "correctAnswer": "地铁站在阿里",
                "difficulty": 2
              },
              {
                "id": "sh-d-02-4",
                "type": "match",
                "question": "出行配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "地铁",
                    "地铁"
                  ],
                  [
                    "公交",
                    "公交"
                  ],
                  [
                    "出租车",
                    "出租车"
                  ],
                  [
                    "飞机",
                    "飞机"
                  ]
                ]
              },
              {
                "id": "sh-d-02-5",
                "type": "listen-pic",
                "question": "听词选图：地铁",
                "options": [
                  "🚇",
                  "🚌",
                  "🚕",
                  "✈️"
                ],
                "correctAnswer": "地铁",
                "difficulty": 2
              },
              {
                "id": "sh-d-02-6",
                "type": "translate",
                "question": "上海",
                "options": [
                  "上海",
                  "北京",
                  "广州",
                  "香港"
                ],
                "correctAnswer": "上海",
                "difficulty": 1
              }
            ]
          },
          {
            "levelId": "sh-daily-03",
            "title": "情感与表达",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "sh-daily-02"
            ],
            "questions": [
              {
                "id": "sh-d-03-1",
                "type": "translate",
                "question": "很漂亮",
                "options": [
                  "交关漂亮",
                  "老丑",
                  "老高",
                  "老矮"
                ],
                "correctAnswer": "交关漂亮",
                "difficulty": 2
              },
              {
                "id": "sh-d-03-2",
                "type": "translate",
                "question": "很开心",
                "options": [
                  "邪气开心",
                  "勿开心",
                  "难过",
                  "生气"
                ],
                "correctAnswer": "邪气开心",
                "difficulty": 2
              },
              {
                "id": "sh-d-03-3",
                "type": "fill-blank",
                "question": "___赞！（很棒！）",
                "options": [
                  "老",
                  "勿",
                  "邪气",
                  "交关"
                ],
                "correctAnswer": "老",
                "difficulty": 2
              },
              {
                "id": "sh-d-03-4",
                "type": "match",
                "question": "程度副词配对",
                "correctAnswer": "match",
                "difficulty": 3,
                "pairs": [
                  [
                    "邪气",
                    "很"
                  ],
                  [
                    "老",
                    "很"
                  ],
                  [
                    "交关",
                    "非常"
                  ],
                  [
                    "一眼眼",
                    "一点点"
                  ]
                ]
              },
              {
                "id": "sh-d-03-5",
                "type": "translate",
                "question": "谢谢侬",
                "options": [
                  "谢谢侬",
                  "对勿住",
                  "侬好",
                  "明朝见"
                ],
                "correctAnswer": "谢谢侬",
                "difficulty": 1
              },
              {
                "id": "sh-d-03-6",
                "type": "repeat",
                "question": "跟读：阿拉上海见！",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "阿拉上海见！"
              }
            ]
          }
        ]
      },
      {
        "id": "scenes",
        "name": "场景实战",
        "color": "#0EA5E9",
        "levels": [
          {
            "levelId": "sh-scenes-01",
            "title": "购物消费",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "sh-s-01-1",
                "type": "translate",
                "question": "便宜点",
                "options": [
                  "便宜眼",
                  "贵点",
                  "买单",
                  "找零"
                ],
                "correctAnswer": "便宜眼",
                "difficulty": 2
              },
              {
                "id": "sh-s-01-2",
                "type": "translate",
                "question": "多少钱",
                "options": [
                  "几钿",
                  "几岁",
                  "几人",
                  "几点"
                ],
                "correctAnswer": "几钿",
                "difficulty": 1
              },
              {
                "id": "sh-s-01-3",
                "type": "fill-blank",
                "question": "我要___个（买这个）",
                "options": [
                  "迭",
                  "伊",
                  "侬",
                  "阿拉"
                ],
                "correctAnswer": "迭",
                "difficulty": 2
              },
              {
                "id": "sh-s-01-4",
                "type": "match",
                "question": "购物配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "便宜眼",
                    "便宜点"
                  ],
                  [
                    "几钿",
                    "多少钱"
                  ],
                  [
                    "买单",
                    "结账"
                  ],
                  [
                    "找零",
                    "找零钱"
                  ]
                ]
              },
              {
                "id": "sh-s-01-5",
                "type": "translate",
                "question": "太贵了",
                "options": [
                  "太贵了",
                  "便宜",
                  "好",
                  "不好"
                ],
                "correctAnswer": "太贵了",
                "difficulty": 1
              },
              {
                "id": "sh-s-01-6",
                "type": "translate",
                "question": "我喜欢",
                "options": [
                  "我喜欢",
                  "我勿喜欢",
                  "我晓得了",
                  "我勿晓得"
                ],
                "correctAnswer": "我喜欢",
                "difficulty": 1
              }
            ]
          },
          {
            "levelId": "sh-scenes-02",
            "title": "工作与学习",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "sh-scenes-01"
            ],
            "questions": [
              {
                "id": "sh-s-02-1",
                "type": "translate",
                "question": "工作",
                "options": [
                  "做生活",
                  "读书",
                  "吃饭",
                  "睏觉"
                ],
                "correctAnswer": "做生活",
                "difficulty": 2
              },
              {
                "id": "sh-s-02-2",
                "type": "translate",
                "question": "公司",
                "options": [
                  "公司",
                  "学堂",
                  "屋里",
                  "店里"
                ],
                "correctAnswer": "公司",
                "difficulty": 1
              },
              {
                "id": "sh-s-02-3",
                "type": "fill-blank",
                "question": "我去___班（上班）",
                "options": [
                  "上",
                  "下",
                  "读",
                  "吃"
                ],
                "correctAnswer": "上",
                "difficulty": 2
              },
              {
                "id": "sh-s-02-4",
                "type": "match",
                "question": "工作配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "做生活",
                    "工作"
                  ],
                  [
                    "上班",
                    "上班"
                  ],
                  [
                    "下班",
                    "下班"
                  ],
                  [
                    "加班",
                    "加班"
                  ]
                ]
              },
              {
                "id": "sh-s-02-5",
                "type": "translate",
                "question": "老师",
                "options": [
                  "老师",
                  "学生",
                  "医生",
                  "护士"
                ],
                "correctAnswer": "老师",
                "difficulty": 1
              },
              {
                "id": "sh-s-02-6",
                "type": "repeat",
                "question": "跟读：阿拉一道去上班。",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "阿拉一道去上班。"
              }
            ]
          },
          {
            "levelId": "sh-scenes-03",
            "title": "沪语特色表达",
            "timeLimit": 180,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "sh-scenes-02"
            ],
            "questions": [
              {
                "id": "sh-s-03-1",
                "type": "translate",
                "question": "上海",
                "options": [
                  "上海",
                  "北京",
                  "广州",
                  "深圳"
                ],
                "correctAnswer": "上海",
                "difficulty": 1
              },
              {
                "id": "sh-s-03-2",
                "type": "translate",
                "question": "弄堂",
                "options": [
                  "弄堂",
                  "马路",
                  "地铁",
                  "公交"
                ],
                "correctAnswer": "弄堂",
                "difficulty": 2
              },
              {
                "id": "sh-s-03-3",
                "type": "translate",
                "question": "老克勒",
                "options": [
                  "老克勒",
                  "小朋友",
                  "老师",
                  "医生"
                ],
                "correctAnswer": "老克勒",
                "difficulty": 3
              },
              {
                "id": "sh-s-03-4",
                "type": "match",
                "question": "沪语特色词",
                "correctAnswer": "match",
                "difficulty": 3,
                "pairs": [
                  [
                    "弄堂",
                    "小巷"
                  ],
                  [
                    "老克勒",
                    "老绅士"
                  ],
                  [
                    "小囡",
                    "小孩"
                  ],
                  [
                    "戆度",
                    "傻瓜"
                  ]
                ]
              },
              {
                "id": "sh-s-03-5",
                "type": "translate",
                "question": "小孩",
                "options": [
                  "小囡",
                  "老人家",
                  "老师",
                  "学生"
                ],
                "correctAnswer": "小囡",
                "difficulty": 2
              },
              {
                "id": "sh-s-03-6",
                "type": "repeat",
                "question": "跟读：阿拉上海人，侬好！",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "阿拉上海人，侬好！"
              }
            ]
          }
        ]
      }
    ]
  },
  "hak": {
    "themes": [
      {
        "id": "basic",
        "name": "基础词汇",
        "color": "#16A34A",
        "levels": [
          {
            "levelId": "hak-basic-01",
            "title": "问候与礼貌",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [],
            "questions": [
              {
                "id": "hak-b-01-1",
                "type": "translate",
                "question": "你好",
                "options": [
                  "你好",
                  "多谢",
                  "细伢仔",
                  "𠊎"
                ],
                "correctAnswer": "你好",
                "difficulty": 1
              },
              {
                "id": "hak-b-01-2",
                "type": "translate",
                "question": "谢谢",
                "options": [
                  "多谢",
                  "你好",
                  "对唔住",
                  "𠊎"
                ],
                "correctAnswer": "多谢",
                "difficulty": 1
              },
              {
                "id": "hak-b-01-3",
                "type": "fill-blank",
                "question": "___係麼个？（这是什么？）",
                "options": [
                  "𠊎",
                  "你",
                  "佢",
                  "佢兜"
                ],
                "correctAnswer": "𠊎",
                "difficulty": 2
              },
              {
                "id": "hak-b-01-4",
                "type": "match",
                "question": "客家话问候配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "你好",
                    "你好"
                  ],
                  [
                    "多谢",
                    "谢谢"
                  ],
                  [
                    "对唔住",
                    "对不起"
                  ],
                  [
                    "𠊎係客家人",
                    "我是客家人"
                  ]
                ]
              },
              {
                "id": "hak-b-01-5",
                "type": "translate",
                "question": "对不起",
                "options": [
                  "对唔住",
                  "多谢",
                  "你好",
                  "𠊎"
                ],
                "correctAnswer": "对唔住",
                "difficulty": 1
              },
              {
                "id": "hak-b-01-6",
                "type": "dictation",
                "question": "听写：朋友",
                "correctAnswer": "朋友",
                "difficulty": 2,
                "audioWord": "朋友"
              }
            ]
          },
          {
            "levelId": "hak-basic-02",
            "title": "代词与家庭",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "hak-basic-01"
            ],
            "questions": [
              {
                "id": "hak-b-02-1",
                "type": "translate",
                "question": "我",
                "options": [
                  "𠊎",
                  "你",
                  "佢",
                  "佢兜"
                ],
                "correctAnswer": "𠊎",
                "difficulty": 1
              },
              {
                "id": "hak-b-02-2",
                "type": "translate",
                "question": "你",
                "options": [
                  "你",
                  "𠊎",
                  "佢",
                  "佢兜"
                ],
                "correctAnswer": "你",
                "difficulty": 1
              },
              {
                "id": "hak-b-02-3",
                "type": "fill-blank",
                "question": "___係客家人（我是客家人）",
                "options": [
                  "𠊎",
                  "你",
                  "佢",
                  "佢兜"
                ],
                "correctAnswer": "𠊎",
                "difficulty": 2
              },
              {
                "id": "hak-b-02-4",
                "type": "match",
                "question": "代词配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "𠊎",
                    "我"
                  ],
                  [
                    "你",
                    "你"
                  ],
                  [
                    "佢",
                    "他"
                  ],
                  [
                    "𠊎兜",
                    "我们"
                  ]
                ]
              },
              {
                "id": "hak-b-02-5",
                "type": "translate",
                "question": "我们",
                "options": [
                  "𠊎兜",
                  "佢兜",
                  "你",
                  "佢"
                ],
                "correctAnswer": "𠊎兜",
                "difficulty": 1
              },
              {
                "id": "hak-b-02-6",
                "type": "translate",
                "question": "他们",
                "options": [
                  "佢兜",
                  "𠊎兜",
                  "你",
                  "佢"
                ],
                "correctAnswer": "佢兜",
                "difficulty": 1
              }
            ]
          },
          {
            "levelId": "hak-basic-03",
            "title": "数字与时间",
            "timeLimit": 120,
            "minScoreFor1Star": 35,
            "minScoreFor2Star": 55,
            "minScoreFor3Star": 75,
            "prerequisites": [
              "hak-basic-02"
            ],
            "questions": [
              {
                "id": "hak-b-03-1",
                "type": "translate",
                "question": "一",
                "options": [
                  "一",
                  "二",
                  "三",
                  "四"
                ],
                "correctAnswer": "一",
                "difficulty": 1
              },
              {
                "id": "hak-b-03-2",
                "type": "translate",
                "question": "今天",
                "options": [
                  "今晡日",
                  "天光日",
                  "昨日",
                  "前日"
                ],
                "correctAnswer": "今晡日",
                "difficulty": 1
              },
              {
                "id": "hak-b-03-3",
                "type": "fill-blank",
                "question": "天光日___去（明天去）",
                "options": [
                  "天光日",
                  "今晡日",
                  "昨日",
                  "前日"
                ],
                "correctAnswer": "天光日",
                "difficulty": 2
              },
              {
                "id": "hak-b-03-4",
                "type": "match",
                "question": "时间配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "今晡日",
                    "今天"
                  ],
                  [
                    "天光日",
                    "明天"
                  ],
                  [
                    "昨日",
                    "昨天"
                  ],
                  [
                    "前日",
                    "前天"
                  ]
                ]
              },
              {
                "id": "hak-b-03-5",
                "type": "translate",
                "question": "昨天",
                "options": [
                  "昨日",
                  "今晡日",
                  "天光日",
                  "前日"
                ],
                "correctAnswer": "昨日",
                "difficulty": 1
              },
              {
                "id": "hak-b-03-6",
                "type": "dictation",
                "question": "听写：吃饭",
                "correctAnswer": "食饭",
                "difficulty": 2,
                "audioWord": "食饭"
              }
            ]
          },
          {
            "levelId": "hak-basic-04",
            "title": "时间与天气",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "hak-basic-03"
            ],
            "questions": [
              {
                "id": "hak-b-04-1",
                "type": "translate",
                "question": "今天",
                "options": [
                  "今晡日",
                  "昨日",
                  "明日",
                  "前日"
                ],
                "correctAnswer": "今晡日",
                "difficulty": 1
              },
              {
                "id": "hak-b-04-2",
                "type": "translate",
                "question": "下雨",
                "options": [
                  "落雨",
                  "出日头",
                  "刮风",
                  "下雪"
                ],
                "correctAnswer": "落雨",
                "difficulty": 1
              },
              {
                "id": "hak-b-04-3",
                "type": "fill-blank",
                "question": "今晡日___好热。（今天好热）",
                "options": [
                  "当",
                  "毋",
                  "唔",
                  "𠮟"
                ],
                "correctAnswer": "当",
                "difficulty": 2
              },
              {
                "id": "hak-b-04-4",
                "type": "match",
                "question": "时间配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "今晡日",
                    "今天"
                  ],
                  [
                    "昨日",
                    "昨天"
                  ],
                  [
                    "明日",
                    "明天"
                  ],
                  [
                    "几时",
                    "什么时候"
                  ]
                ]
              },
              {
                "id": "hak-b-04-5",
                "type": "translate",
                "question": "冷",
                "options": [
                  "冷",
                  "热",
                  "暖",
                  "凉"
                ],
                "correctAnswer": "冷",
                "difficulty": 1
              },
              {
                "id": "hak-b-04-6",
                "type": "repeat",
                "question": "跟读：今晡日天气当好。",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "今晡日天气当好。"
              }
            ]
          }
        ]
      },
      {
        "id": "daily",
        "name": "日常对话",
        "color": "#EA580C",
        "levels": [
          {
            "levelId": "hak-daily-01",
            "title": "饮食与生活",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "hak-d-01-1",
                "type": "translate",
                "question": "吃饭",
                "options": [
                  "食饭",
                  "食水",
                  "食茶",
                  "食酒"
                ],
                "correctAnswer": "食饭",
                "difficulty": 1
              },
              {
                "id": "hak-d-01-2",
                "type": "translate",
                "question": "喝水",
                "options": [
                  "食水",
                  "食饭",
                  "食茶",
                  "食酒"
                ],
                "correctAnswer": "食水",
                "difficulty": 1
              },
              {
                "id": "hak-d-01-3",
                "type": "fill-blank",
                "question": "食___吂？（吃饭了吗？）",
                "options": [
                  "饭",
                  "水",
                  "茶",
                  "酒"
                ],
                "correctAnswer": "饭",
                "difficulty": 2
              },
              {
                "id": "hak-d-01-4",
                "type": "match",
                "question": "饮食配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "食饭",
                    "吃饭"
                  ],
                  [
                    "食水",
                    "喝水"
                  ],
                  [
                    "食茶",
                    "喝茶"
                  ],
                  [
                    "食酒",
                    "喝酒"
                  ]
                ]
              },
              {
                "id": "hak-d-01-5",
                "type": "translate",
                "question": "多少钱",
                "options": [
                  "几多钱",
                  "几多岁",
                  "几只",
                  "几时"
                ],
                "correctAnswer": "几多钱",
                "difficulty": 2
              },
              {
                "id": "hak-d-01-6",
                "type": "repeat",
                "question": "跟读：𠊎去食饭。",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "𠊎去食饭。"
              }
            ]
          },
          {
            "levelId": "hak-daily-02",
            "title": "出行与问路",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "hak-daily-01"
            ],
            "questions": [
              {
                "id": "hak-d-02-1",
                "type": "translate",
                "question": "去哪里",
                "options": [
                  "去哪位",
                  "做麼个",
                  "为麼个",
                  "几时"
                ],
                "correctAnswer": "去哪位",
                "difficulty": 2
              },
              {
                "id": "hak-d-02-2",
                "type": "fill-blank",
                "question": "地铁站___？（地铁站在哪里？）",
                "options": [
                  "在哪位",
                  "做麼个",
                  "为麼个",
                  "几多钱"
                ],
                "correctAnswer": "在哪位",
                "difficulty": 2
              },
              {
                "id": "hak-d-02-3",
                "type": "translate",
                "question": "梅州",
                "options": [
                  "梅州",
                  "广州",
                  "深圳",
                  "香港"
                ],
                "correctAnswer": "梅州",
                "difficulty": 1
              },
              {
                "id": "hak-d-02-4",
                "type": "match",
                "question": "出行配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "地铁",
                    "地铁"
                  ],
                  [
                    "公交",
                    "公交"
                  ],
                  [
                    "出租车",
                    "的士"
                  ],
                  [
                    "飞机",
                    "飞机"
                  ]
                ]
              },
              {
                "id": "hak-d-02-5",
                "type": "listen-pic",
                "question": "听词选图：的士",
                "options": [
                  "🚇",
                  "🚌",
                  "🚕",
                  "✈️"
                ],
                "correctAnswer": "的士",
                "difficulty": 2
              },
              {
                "id": "hak-d-02-6",
                "type": "translate",
                "question": "走路",
                "options": [
                  "行路",
                  "食饭",
                  "食水",
                  "睡觉"
                ],
                "correctAnswer": "行路",
                "difficulty": 1
              }
            ]
          },
          {
            "levelId": "hak-daily-03",
            "title": "情感与表达",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "hak-daily-02"
            ],
            "questions": [
              {
                "id": "hak-d-03-1",
                "type": "translate",
                "question": "很漂亮",
                "options": [
                  "当靓",
                  "当丑",
                  "当高",
                  "当矮"
                ],
                "correctAnswer": "当靓",
                "difficulty": 2
              },
              {
                "id": "hak-d-03-2",
                "type": "translate",
                "question": "很开心",
                "options": [
                  "当开心",
                  "毋开心",
                  "愁",
                  "发恼"
                ],
                "correctAnswer": "当开心",
                "difficulty": 2
              },
              {
                "id": "hak-d-03-3",
                "type": "fill-blank",
                "question": "___好！（很好！）",
                "options": [
                  "当",
                  "毋",
                  "唔",
                  "𠮟"
                ],
                "correctAnswer": "当",
                "difficulty": 2
              },
              {
                "id": "hak-d-03-4",
                "type": "match",
                "question": "程度副词配对",
                "correctAnswer": "match",
                "difficulty": 3,
                "pairs": [
                  [
                    "当",
                    "很"
                  ],
                  [
                    "十分",
                    "非常"
                  ],
                  [
                    "一滴子",
                    "一点点"
                  ],
                  [
                    "几多",
                    "多少"
                  ]
                ]
              },
              {
                "id": "hak-d-03-5",
                "type": "translate",
                "question": "我爱你",
                "options": [
                  "𠊎爱你",
                  "𠊎多谢你",
                  "𠊎对唔住",
                  "𠊎想你"
                ],
                "correctAnswer": "𠊎爱你",
                "difficulty": 1
              },
              {
                "id": "hak-d-03-6",
                "type": "repeat",
                "question": "跟读：𠊎係客家人！",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "𠊎係客家人！"
              }
            ]
          }
        ]
      },
      {
        "id": "scenes",
        "name": "场景实战",
        "color": "#9333EA",
        "levels": [
          {
            "levelId": "hak-scenes-01",
            "title": "购物消费",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "hak-s-01-1",
                "type": "translate",
                "question": "便宜点",
                "options": [
                  "便宜滴子",
                  "贵点",
                  "买单",
                  "找钱"
                ],
                "correctAnswer": "便宜滴子",
                "difficulty": 2
              },
              {
                "id": "hak-s-01-2",
                "type": "translate",
                "question": "多少钱",
                "options": [
                  "几多钱",
                  "几多岁",
                  "几只",
                  "几时"
                ],
                "correctAnswer": "几多钱",
                "difficulty": 1
              },
              {
                "id": "hak-s-01-3",
                "type": "fill-blank",
                "question": "𠊎爱___个（我要这个）",
                "options": [
                  "𠊢",
                  "你",
                  "佢",
                  "𠊎"
                ],
                "correctAnswer": "𠊢",
                "difficulty": 2
              },
              {
                "id": "hak-s-01-4",
                "type": "match",
                "question": "购物配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "便宜滴子",
                    "便宜点"
                  ],
                  [
                    "几多钱",
                    "多少钱"
                  ],
                  [
                    "买单",
                    "结账"
                  ],
                  [
                    "找钱",
                    "找零钱"
                  ]
                ]
              },
              {
                "id": "hak-s-01-5",
                "type": "translate",
                "question": "太贵了",
                "options": [
                  "太贵了",
                  "便宜",
                  "好",
                  "唔好"
                ],
                "correctAnswer": "太贵了",
                "difficulty": 1
              },
              {
                "id": "hak-s-01-6",
                "type": "translate",
                "question": "我喜欢",
                "options": [
                  "𠊎欢喜",
                  "𠊎毋欢喜",
                  "𠊎知",
                  "𠊎唔知"
                ],
                "correctAnswer": "𠊎欢喜",
                "difficulty": 1
              }
            ]
          },
          {
            "levelId": "hak-scenes-02",
            "title": "客家文化",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "hak-scenes-01"
            ],
            "questions": [
              {
                "id": "hak-s-02-1",
                "type": "translate",
                "question": "客家话",
                "options": [
                  "客家话",
                  "普通话",
                  "广东话",
                  "上海话"
                ],
                "correctAnswer": "客家话",
                "difficulty": 1
              },
              {
                "id": "hak-s-02-2",
                "type": "translate",
                "question": "客家人",
                "options": [
                  "客家人",
                  "广东人",
                  "上海人",
                  "北京人"
                ],
                "correctAnswer": "客家人",
                "difficulty": 1
              },
              {
                "id": "hak-s-02-3",
                "type": "fill-blank",
                "question": "___是客家文化中心（梅州）",
                "options": [
                  "梅州",
                  "广州",
                  "深圳",
                  "北京"
                ],
                "correctAnswer": "梅州",
                "difficulty": 2
              },
              {
                "id": "hak-s-02-4",
                "type": "match",
                "question": "客家配对",
                "correctAnswer": "match",
                "difficulty": 3,
                "pairs": [
                  [
                    "客家话",
                    "客家话"
                  ],
                  [
                    "客家人",
                    "客家人"
                  ],
                  [
                    "围龙屋",
                    "客家围屋"
                  ],
                  [
                    "擂茶",
                    "客家擂茶"
                  ]
                ]
              },
              {
                "id": "hak-s-02-5",
                "type": "translate",
                "question": "围屋",
                "options": [
                  "围龙屋",
                  "学校",
                  "公司",
                  "商店"
                ],
                "correctAnswer": "围龙屋",
                "difficulty": 2
              },
              {
                "id": "hak-s-02-6",
                "type": "repeat",
                "question": "跟读：𠊎係客家人。",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "𠊎係客家人。"
              }
            ]
          },
          {
            "levelId": "hak-scenes-03",
            "title": "客家特色表达",
            "timeLimit": 180,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [
              "hak-scenes-02"
            ],
            "questions": [
              {
                "id": "hak-s-03-1",
                "type": "translate",
                "question": "男孩",
                "options": [
                  "细赖仔",
                  "细妹仔",
                  "老人家",
                  "老师"
                ],
                "correctAnswer": "细赖仔",
                "difficulty": 2
              },
              {
                "id": "hak-s-03-2",
                "type": "translate",
                "question": "女孩",
                "options": [
                  "细妹仔",
                  "细赖仔",
                  "老人家",
                  "老师"
                ],
                "correctAnswer": "细妹仔",
                "difficulty": 2
              },
              {
                "id": "hak-s-03-3",
                "type": "translate",
                "question": "爷爷",
                "options": [
                  "阿公",
                  "阿婆",
                  "爷哀",
                  "爸爸"
                ],
                "correctAnswer": "阿公",
                "difficulty": 2
              },
              {
                "id": "hak-s-03-4",
                "type": "match",
                "question": "亲属称谓",
                "correctAnswer": "match",
                "difficulty": 3,
                "pairs": [
                  [
                    "阿公",
                    "爷爷"
                  ],
                  [
                    "阿婆",
                    "奶奶"
                  ],
                  [
                    "爷哀",
                    "父母"
                  ],
                  [
                    "阿爸",
                    "爸爸"
                  ]
                ]
              },
              {
                "id": "hak-s-03-5",
                "type": "translate",
                "question": "奶奶",
                "options": [
                  "阿婆",
                  "阿公",
                  "爷哀",
                  "阿爸"
                ],
                "correctAnswer": "阿婆",
                "difficulty": 2
              },
              {
                "id": "hak-s-03-6",
                "type": "repeat",
                "question": "跟读：𠊎去梅州看阿公阿婆。",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "𠊎去梅州看阿公阿婆。"
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
        "id": "basic",
        "name": "基础词汇",
        "color": "#8B5CF6",
        "levels": [
          {
            "levelId": "zh-SC-basic-01",
            "title": "问候与礼貌",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [],
            "questions": [
              {
                "id": "zh-SC-b-01-1",
                "type": "translate",
                "question": "你好",
                "options": [
                  "你好",
                  "再见",
                  "谢谢",
                  "对不起"
                ],
                "correctAnswer": "你好",
                "difficulty": 1
              },
              {
                "id": "zh-SC-b-01-2",
                "type": "translate",
                "question": "谢谢",
                "options": [
                  "谢谢",
                  "不谢",
                  "再见",
                  "你好"
                ],
                "correctAnswer": "谢谢",
                "difficulty": 1
              },
              {
                "id": "zh-SC-b-01-3",
                "type": "fill-blank",
                "question": "___好！（早上好）",
                "options": [
                  "早",
                  "晚",
                  "中",
                  "夜"
                ],
                "correctAnswer": "早",
                "difficulty": 1
              },
              {
                "id": "zh-SC-b-01-4",
                "type": "match",
                "question": "日常用语配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "你好",
                    "你好"
                  ],
                  [
                    "谢谢",
                    "谢谢"
                  ],
                  [
                    "再见",
                    "再见"
                  ],
                  [
                    "对不起",
                    "对不起"
                  ]
                ]
              },
              {
                "id": "zh-SC-b-01-5",
                "type": "translate",
                "question": "再见",
                "options": [
                  "再见",
                  "你好",
                  "谢谢",
                  "请"
                ],
                "correctAnswer": "再见",
                "difficulty": 1
              },
              {
                "id": "zh-SC-b-01-6",
                "type": "translate",
                "question": "请",
                "options": [
                  "请",
                  "谢",
                  "好",
                  "不"
                ],
                "correctAnswer": "请",
                "difficulty": 1
              }
            ]
          },
          {
            "levelId": "zh-SC-basic-02",
            "title": "数字与颜色",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "zh-SC-basic-01"
            ],
            "questions": [
              {
                "id": "zh-SC-b-02-1",
                "type": "translate",
                "question": "一",
                "options": [
                  "一",
                  "二",
                  "三",
                  "四"
                ],
                "correctAnswer": "一",
                "difficulty": 1
              },
              {
                "id": "zh-SC-b-02-2",
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
                "id": "zh-SC-b-02-3",
                "type": "fill-blank",
                "question": "天是___色的。（天是蓝色的）",
                "options": [
                  "蓝",
                  "红",
                  "绿",
                  "黄"
                ],
                "correctAnswer": "蓝",
                "difficulty": 1
              },
              {
                "id": "zh-SC-b-02-4",
                "type": "match",
                "question": "数字配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "一",
                    "1"
                  ],
                  [
                    "二",
                    "2"
                  ],
                  [
                    "三",
                    "3"
                  ],
                  [
                    "四",
                    "4"
                  ]
                ]
              },
              {
                "id": "zh-SC-b-02-5",
                "type": "translate",
                "question": "五",
                "options": [
                  "五",
                  "六",
                  "七",
                  "八"
                ],
                "correctAnswer": "五",
                "difficulty": 1
              },
              {
                "id": "zh-SC-b-02-6",
                "type": "translate",
                "question": "白色",
                "options": [
                  "白色",
                  "黑色",
                  "灰色",
                  "紫色"
                ],
                "correctAnswer": "白色",
                "difficulty": 1
              }
            ]
          },
          {
            "levelId": "zh-SC-basic-03",
            "title": "饮食与点餐",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "zh-SC-basic-02"
            ],
            "questions": [
              {
                "id": "zh-SC-b-03-1",
                "type": "translate",
                "question": "吃饭",
                "options": [
                  "吃饭",
                  "喝水",
                  "睡觉",
                  "走路"
                ],
                "correctAnswer": "吃饭",
                "difficulty": 1
              },
              {
                "id": "zh-SC-b-03-2",
                "type": "translate",
                "question": "好吃",
                "options": [
                  "好吃",
                  "难吃",
                  "好看",
                  "难听"
                ],
                "correctAnswer": "好吃",
                "difficulty": 1
              },
              {
                "id": "zh-SC-b-03-3",
                "type": "fill-blank",
                "question": "我要一___饭。（我要一碗饭）",
                "options": [
                  "碗",
                  "杯",
                  "盘",
                  "瓶"
                ],
                "correctAnswer": "碗",
                "difficulty": 2
              },
              {
                "id": "zh-SC-b-03-4",
                "type": "match",
                "question": "饮食配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "饭",
                    "饭"
                  ],
                  [
                    "面",
                    "面"
                  ],
                  [
                    "水",
                    "水"
                  ],
                  [
                    "茶",
                    "茶"
                  ]
                ]
              },
              {
                "id": "zh-SC-b-03-5",
                "type": "translate",
                "question": "辣",
                "options": [
                  "辣",
                  "甜",
                  "咸",
                  "酸"
                ],
                "correctAnswer": "辣",
                "difficulty": 1
              },
              {
                "id": "zh-SC-b-03-6",
                "type": "translate",
                "question": "多少钱",
                "options": [
                  "多少钱",
                  "多少岁",
                  "多少斤",
                  "多少里"
                ],
                "correctAnswer": "多少钱",
                "difficulty": 2
              }
            ]
          },
          {
            "levelId": "zh-SC-basic-04",
            "title": "方向与出行",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "zh-SC-basic-03"
            ],
            "questions": [
              {
                "id": "zh-SC-b-04-1",
                "type": "translate",
                "question": "左边",
                "options": [
                  "左边",
                  "右边",
                  "前面",
                  "后面"
                ],
                "correctAnswer": "左边",
                "difficulty": 1
              },
              {
                "id": "zh-SC-b-04-2",
                "type": "translate",
                "question": "去哪里",
                "options": [
                  "去哪里",
                  "做什么",
                  "为什么",
                  "什么时候"
                ],
                "correctAnswer": "去哪里",
                "difficulty": 2
              },
              {
                "id": "zh-SC-b-04-3",
                "type": "fill-blank",
                "question": "地铁站在___？（地铁站在哪里？）",
                "options": [
                  "哪里",
                  "什么",
                  "谁",
                  "怎么"
                ],
                "correctAnswer": "哪里",
                "difficulty": 2
              },
              {
                "id": "zh-SC-b-04-4",
                "type": "match",
                "question": "方向配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "左",
                    "左"
                  ],
                  [
                    "右",
                    "右"
                  ],
                  [
                    "前",
                    "前"
                  ],
                  [
                    "后",
                    "后"
                  ]
                ]
              },
              {
                "id": "zh-SC-b-04-5",
                "type": "translate",
                "question": "出租车",
                "options": [
                  "出租车",
                  "公交车",
                  "地铁",
                  "飞机"
                ],
                "correctAnswer": "出租车",
                "difficulty": 1
              },
              {
                "id": "zh-SC-b-04-6",
                "type": "translate",
                "question": "我迷路了",
                "options": [
                  "我迷路了",
                  "我累了",
                  "我饿了",
                  "我病了"
                ],
                "correctAnswer": "我迷路了",
                "difficulty": 2
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
        "id": "basic",
        "name": "基础词汇",
        "color": "#8B5CF6",
        "levels": [
          {
            "levelId": "zh-DB-basic-01",
            "title": "问候与唠嗑",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [],
            "questions": [
              {
                "id": "zh-DB-b-01-1",
                "type": "translate",
                "question": "你好",
                "options": [
                  "你好",
                  "再见",
                  "谢谢",
                  "对不起"
                ],
                "correctAnswer": "你好",
                "difficulty": 1
              },
              {
                "id": "zh-DB-b-01-2",
                "type": "translate",
                "question": "谢谢",
                "options": [
                  "谢谢",
                  "不客气",
                  "再见",
                  "你好"
                ],
                "correctAnswer": "谢谢",
                "difficulty": 1
              },
              {
                "id": "zh-DB-b-01-3",
                "type": "fill-blank",
                "question": "___上好！（早上好）",
                "options": [
                  "早",
                  "晚",
                  "中",
                  "夜"
                ],
                "correctAnswer": "早",
                "difficulty": 1
              },
              {
                "id": "zh-DB-b-01-4",
                "type": "match",
                "question": "日常用语配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "你好",
                    "你好"
                  ],
                  [
                    "谢谢",
                    "谢谢"
                  ],
                  [
                    "再见",
                    "再见"
                  ],
                  [
                    "对不起",
                    "对不起"
                  ]
                ]
              },
              {
                "id": "zh-DB-b-01-5",
                "type": "translate",
                "question": "再见",
                "options": [
                  "再见",
                  "你好",
                  "谢谢",
                  "请"
                ],
                "correctAnswer": "再见",
                "difficulty": 1
              },
              {
                "id": "zh-DB-b-01-6",
                "type": "translate",
                "question": "咋地",
                "options": [
                  "咋地",
                  "什么",
                  "哪里",
                  "谁"
                ],
                "correctAnswer": "咋地",
                "difficulty": 2
              }
            ]
          },
          {
            "levelId": "zh-DB-basic-02",
            "title": "数字与颜色",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "zh-DB-basic-01"
            ],
            "questions": [
              {
                "id": "zh-DB-b-02-1",
                "type": "translate",
                "question": "一",
                "options": [
                  "一",
                  "二",
                  "三",
                  "四"
                ],
                "correctAnswer": "一",
                "difficulty": 1
              },
              {
                "id": "zh-DB-b-02-2",
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
                "id": "zh-DB-b-02-3",
                "type": "fill-blank",
                "question": "天是___色的。（天是蓝色的）",
                "options": [
                  "蓝",
                  "红",
                  "绿",
                  "黄"
                ],
                "correctAnswer": "蓝",
                "difficulty": 1
              },
              {
                "id": "zh-DB-b-02-4",
                "type": "match",
                "question": "数字配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "一",
                    "1"
                  ],
                  [
                    "二",
                    "2"
                  ],
                  [
                    "三",
                    "3"
                  ],
                  [
                    "四",
                    "4"
                  ]
                ]
              },
              {
                "id": "zh-DB-b-02-5",
                "type": "translate",
                "question": "五",
                "options": [
                  "五",
                  "六",
                  "七",
                  "八"
                ],
                "correctAnswer": "五",
                "difficulty": 1
              },
              {
                "id": "zh-DB-b-02-6",
                "type": "translate",
                "question": "白色",
                "options": [
                  "白色",
                  "黑色",
                  "灰色",
                  "紫色"
                ],
                "correctAnswer": "白色",
                "difficulty": 1
              }
            ]
          },
          {
            "levelId": "zh-DB-basic-03",
            "title": "吃喝与买单",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "zh-DB-basic-02"
            ],
            "questions": [
              {
                "id": "zh-DB-b-03-1",
                "type": "translate",
                "question": "吃饭",
                "options": [
                  "吃饭",
                  "喝水",
                  "睡觉",
                  "走路"
                ],
                "correctAnswer": "吃饭",
                "difficulty": 1
              },
              {
                "id": "zh-DB-b-03-2",
                "type": "translate",
                "question": "好吃",
                "options": [
                  "好吃",
                  "难吃",
                  "好看",
                  "难听"
                ],
                "correctAnswer": "好吃",
                "difficulty": 1
              },
              {
                "id": "zh-DB-b-03-3",
                "type": "fill-blank",
                "question": "我要一___饭。（我要一碗饭）",
                "options": [
                  "碗",
                  "杯",
                  "盘",
                  "瓶"
                ],
                "correctAnswer": "碗",
                "difficulty": 2
              },
              {
                "id": "zh-DB-b-03-4",
                "type": "match",
                "question": "饮食配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "饭",
                    "饭"
                  ],
                  [
                    "面",
                    "面"
                  ],
                  [
                    "水",
                    "水"
                  ],
                  [
                    "茶",
                    "茶"
                  ]
                ]
              },
              {
                "id": "zh-DB-b-03-5",
                "type": "translate",
                "question": "老好吃了",
                "options": [
                  "老好吃了",
                  "老难吃了",
                  "老贵了",
                  "老便宜了"
                ],
                "correctAnswer": "老好吃了",
                "difficulty": 2
              },
              {
                "id": "zh-DB-b-03-6",
                "type": "translate",
                "question": "多少钱",
                "options": [
                  "多少钱",
                  "多少岁",
                  "多少斤",
                  "多少里"
                ],
                "correctAnswer": "多少钱",
                "difficulty": 2
              }
            ]
          },
          {
            "levelId": "zh-DB-basic-04",
            "title": "方向与出行",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "zh-DB-basic-03"
            ],
            "questions": [
              {
                "id": "zh-DB-b-04-1",
                "type": "translate",
                "question": "左边",
                "options": [
                  "左边",
                  "右边",
                  "前面",
                  "后面"
                ],
                "correctAnswer": "左边",
                "difficulty": 1
              },
              {
                "id": "zh-DB-b-04-2",
                "type": "translate",
                "question": "上哪儿去",
                "options": [
                  "上哪儿去",
                  "干啥呢",
                  "为啥呢",
                  "啥时候"
                ],
                "correctAnswer": "上哪儿去",
                "difficulty": 2
              },
              {
                "id": "zh-DB-b-04-3",
                "type": "fill-blank",
                "question": "火车站在___？（火车站在哪儿？）",
                "options": [
                  "哪儿",
                  "什么",
                  "谁",
                  "怎么"
                ],
                "correctAnswer": "哪儿",
                "difficulty": 2
              },
              {
                "id": "zh-DB-b-04-4",
                "type": "match",
                "question": "方向配对",
                "correctAnswer": "match",
                "difficulty": 2,
                "pairs": [
                  [
                    "左",
                    "左"
                  ],
                  [
                    "右",
                    "右"
                  ],
                  [
                    "前",
                    "前"
                  ],
                  [
                    "后",
                    "后"
                  ]
                ]
              },
              {
                "id": "zh-DB-b-04-5",
                "type": "translate",
                "question": "出租车",
                "options": [
                  "出租车",
                  "公交车",
                  "地铁",
                  "飞机"
                ],
                "correctAnswer": "出租车",
                "difficulty": 1
              },
              {
                "id": "zh-DB-b-04-6",
                "type": "translate",
                "question": "我蒙圈了",
                "options": [
                  "我蒙圈了",
                  "我累了",
                  "我饿了",
                  "我病了"
                ],
                "correctAnswer": "我蒙圈了",
                "difficulty": 2
              }
            ]
          }
        ]
      }
    ]
  }
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
