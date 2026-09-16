const NEW_QUIZ_DATA = {
  "ar": {
    "themes": [
      {
        "id": "basic",
        "name": "基础词汇",
        "color": "#065F46",
        "levels": [
          {
            "levelId": "ar-basic-04",
            "title": "数字与颜色",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "ar-basic-03"
            ],
            "questions": [
              {
                "id": "ar-t-03",
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
                "id": "ar-f-04",
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
                "id": "ar-t-05",
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
                "id": "ar-m-03",
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
                "id": "ar-d-07",
                "type": "dictation",
                "question": "听写：一",
                "correctAnswer": "واحد",
                "difficulty": 2,
                "audioWord": "wahid"
              },
              {
                "id": "ar-r-08",
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
        "color": "#10B981",
        "levels": [
          {
            "levelId": "ar-daily-02",
            "title": "自我介绍",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "ar-t-00",
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
                "id": "ar-f-01",
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
                "id": "ar-t-02",
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
                "id": "ar-m-00",
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
                "id": "ar-d-04",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "كم السعر؟",
                "difficulty": 2,
                "audioWord": "kam as-sa'r"
              },
              {
                "id": "ar-r-05",
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
                "id": "ar-t-00",
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
                "id": "ar-f-01",
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
                "id": "ar-t-02",
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
                "id": "ar-m-00",
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
                "id": "ar-d-04",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "كم السعر؟",
                "difficulty": 2,
                "audioWord": "kam as-sa'r"
              },
              {
                "id": "ar-r-05",
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
                "id": "ar-t-00",
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
                "id": "ar-f-01",
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
                "id": "ar-t-02",
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
                "id": "ar-m-00",
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
                "id": "ar-d-04",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "حجز فندق",
                "difficulty": 2,
                "audioWord": "hajz funduq"
              },
              {
                "id": "ar-r-05",
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
                "id": "ar-t-00",
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
                "id": "ar-f-01",
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
                "id": "ar-t-02",
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
                "id": "ar-m-00",
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
                "id": "ar-d-04",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "حجز فندق",
                "difficulty": 2,
                "audioWord": "hajz funduq"
              },
              {
                "id": "ar-r-05",
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
                "id": "ar-t-00",
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
                "id": "ar-f-01",
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
                "id": "ar-t-02",
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
                "id": "ar-m-00",
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
                "id": "ar-d-04",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "حجز فندق",
                "difficulty": 2,
                "audioWord": "hajz funduq"
              },
              {
                "id": "ar-r-05",
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
                "id": "ar-t-00",
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
                "id": "ar-f-01",
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
                "id": "ar-t-02",
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
                "id": "ar-m-00",
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
                "id": "ar-d-04",
                "type": "dictation",
                "question": "听写：是",
                "correctAnswer": "يكون",
                "difficulty": 2,
                "audioWord": "yakun"
              },
              {
                "id": "ar-r-05",
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
                "id": "ar-t-00",
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
                "id": "ar-f-01",
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
                "id": "ar-t-02",
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
                "id": "ar-m-00",
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
                "id": "ar-d-00",
                "type": "dictation",
                "question": "听写：开斋节",
                "correctAnswer": "عيد الفطر",
                "difficulty": 2,
                "audioWord": "eid al-fitr"
              },
              {
                "id": "ar-r-01",
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
        "color": "#1E3A8A",
        "levels": [
          {
            "levelId": "de-basic-04",
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
                "id": "de-b-04-1",
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
                "id": "de-b-04-2",
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
                "id": "de-b-04-3",
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
                "id": "de-b-04-4",
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
                "id": "de-b-04-5",
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
                "id": "de-b-04-6",
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
            "levelId": "de-basic-05",
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
                "id": "de-b-05-1",
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
                "id": "de-b-05-2",
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
                "id": "de-b-05-3",
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
                "id": "de-b-05-4",
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
                "id": "de-b-05-5",
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
                "id": "de-b-05-6",
                "type": "dictation",
                "question": "听写：朋友",
                "correctAnswer": "amico",
                "difficulty": 2,
                "audioWord": "amico"
              }
            ]
          },
          {
            "levelId": "de-basic-06",
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
                "id": "de-b-06-1",
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
                "id": "de-b-06-2",
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
                "id": "de-b-06-3",
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
                "id": "de-b-06-4",
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
                "id": "de-b-06-5",
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
                "id": "de-b-06-6",
                "type": "dictation",
                "question": "听写：朋友",
                "correctAnswer": "صديق",
                "difficulty": 2,
                "audioWord": "sadiq"
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
                "id": "de-t-00",
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
                "id": "de-f-01",
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
                "id": "de-t-02",
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
                "id": "de-m-00",
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
                "id": "de-d-04",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "ein hotel buchen",
                "difficulty": 2,
                "audioWord": "ein hotel buchen"
              },
              {
                "id": "de-r-05",
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
                "id": "de-t-00",
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
                "id": "de-f-01",
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
                "id": "de-t-02",
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
                "id": "de-m-00",
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
                "id": "de-d-04",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "ein hotel buchen",
                "difficulty": 2,
                "audioWord": "ein hotel buchen"
              },
              {
                "id": "de-r-05",
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
                "id": "de-t-00",
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
                "id": "de-f-01",
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
                "id": "de-t-02",
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
                "id": "de-m-00",
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
                "id": "de-d-04",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "ein hotel buchen",
                "difficulty": 2,
                "audioWord": "ein hotel buchen"
              },
              {
                "id": "de-r-05",
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
                "id": "de-t-00",
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
                "id": "de-f-01",
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
                "id": "de-t-02",
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
                "id": "de-m-00",
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
                "id": "de-d-04",
                "type": "dictation",
                "question": "听写：是",
                "correctAnswer": "bin/ist/sind",
                "difficulty": 2,
                "audioWord": "bin ist sind"
              },
              {
                "id": "de-r-05",
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
                "id": "de-t-00",
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
                "id": "de-f-01",
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
                "id": "de-t-02",
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
                "id": "de-m-00",
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
                "id": "de-d-00",
                "type": "dictation",
                "question": "听写：慕尼黑啤酒节",
                "correctAnswer": "oktoberfest",
                "difficulty": 2,
                "audioWord": "oktoberfest"
              },
              {
                "id": "de-r-01",
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
        "name": "希腊语基础词汇",
        "color": "#0891B2",
        "levels": [
          {
            "levelId": "el-basic-04",
            "title": "问候与礼貌",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [],
            "questions": [
              {
                "id": "el-t-03",
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
                "id": "el-f-04",
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
                "id": "el-t-05",
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
                "id": "el-m-03",
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
                "id": "el-d-07",
                "type": "dictation",
                "question": "听写：一",
                "correctAnswer": "ένα",
                "difficulty": 2,
                "audioWord": "ena"
              },
              {
                "id": "el-r-08",
                "type": "repeat",
                "question": "跟读：δύο",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "δύο"
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
            "levelId": "el-daily-02",
            "title": "自我介绍",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "el-t-00",
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
                "id": "el-f-01",
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
                "id": "el-t-02",
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
                "id": "el-m-00",
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
                "id": "el-d-04",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "πόσο κάνει?",
                "difficulty": 2,
                "audioWord": "poso kanei"
              },
              {
                "id": "el-r-05",
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
                "id": "el-t-00",
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
                "id": "el-f-01",
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
                "id": "el-t-02",
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
                "id": "el-m-00",
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
                "id": "el-d-04",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "πόσο κάνει?",
                "difficulty": 2,
                "audioWord": "poso kanei"
              },
              {
                "id": "el-r-05",
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
                "id": "el-t-00",
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
                "id": "el-f-01",
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
                "id": "el-t-02",
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
                "id": "el-m-00",
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
                "id": "el-d-04",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "κράτηση ξενοδοχείου",
                "difficulty": 2,
                "audioWord": "kratisi xenodochiou"
              },
              {
                "id": "el-r-05",
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
                "id": "el-t-00",
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
                "id": "el-f-01",
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
                "id": "el-t-02",
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
                "id": "el-m-00",
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
                "id": "el-d-04",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "κράτηση ξενοδοχείου",
                "difficulty": 2,
                "audioWord": "kratisi xenodochiou"
              },
              {
                "id": "el-r-05",
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
                "id": "el-t-00",
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
                "id": "el-f-01",
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
                "id": "el-t-02",
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
                "id": "el-m-00",
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
                "id": "el-d-04",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "κράτηση ξενοδοχείου",
                "difficulty": 2,
                "audioWord": "kratisi xenodochiou"
              },
              {
                "id": "el-r-05",
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
                "id": "el-t-00",
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
                "id": "el-f-01",
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
                "id": "el-t-02",
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
                "id": "el-m-00",
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
                "id": "el-d-04",
                "type": "dictation",
                "question": "听写：是",
                "correctAnswer": "είμαι/είναι",
                "difficulty": 2,
                "audioWord": "eimai einai"
              },
              {
                "id": "el-r-05",
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
                "id": "el-t-00",
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
                "id": "el-f-01",
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
                "id": "el-t-02",
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
                "id": "el-m-00",
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
                "id": "el-d-00",
                "type": "dictation",
                "question": "听写：圣诞节",
                "correctAnswer": "χριστούγεννα",
                "difficulty": 2,
                "audioWord": "christougenna"
              },
              {
                "id": "el-r-01",
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
        "color": "#F59E0B",
        "levels": [
          {
            "levelId": "es-basic-04",
            "title": "数字与颜色",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "es-basic-03"
            ],
            "questions": [
              {
                "id": "es-t-03",
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
                "id": "es-f-04",
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
                "id": "es-t-05",
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
                "id": "es-m-03",
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
                "id": "es-d-07",
                "type": "dictation",
                "question": "听写：一",
                "correctAnswer": "uno",
                "difficulty": 2,
                "audioWord": "uno"
              },
              {
                "id": "es-r-08",
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
        "color": "#6366F1",
        "levels": [
          {
            "levelId": "es-daily-02",
            "title": "自我介绍",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "es-t-00",
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
                "id": "es-f-01",
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
                "id": "es-t-02",
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
                "id": "es-m-00",
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
                "id": "es-d-04",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "¿Cuánto cuesta?",
                "difficulty": 2,
                "audioWord": "cuánto cuesta"
              },
              {
                "id": "es-r-05",
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
                "id": "es-t-00",
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
                "id": "es-f-01",
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
                "id": "es-t-02",
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
                "id": "es-m-00",
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
                "id": "es-d-04",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "¿Cuánto cuesta?",
                "difficulty": 2,
                "audioWord": "cuánto cuesta"
              },
              {
                "id": "es-r-05",
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
                "id": "es-t-00",
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
                "id": "es-f-01",
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
                "id": "es-t-02",
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
                "id": "es-m-00",
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
                "id": "es-d-04",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "Reservar un hotel",
                "difficulty": 2,
                "audioWord": "reservar un hotel"
              },
              {
                "id": "es-r-05",
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
                "id": "es-t-00",
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
                "id": "es-f-01",
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
                "id": "es-t-02",
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
                "id": "es-m-00",
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
                "id": "es-d-04",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "Reservar un hotel",
                "difficulty": 2,
                "audioWord": "reservar un hotel"
              },
              {
                "id": "es-r-05",
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
                "id": "es-t-00",
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
                "id": "es-f-01",
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
                "id": "es-t-02",
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
                "id": "es-m-00",
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
                "id": "es-d-04",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "Reservar un hotel",
                "difficulty": 2,
                "audioWord": "reservar un hotel"
              },
              {
                "id": "es-r-05",
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
                "id": "es-t-00",
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
                "id": "es-f-01",
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
                "id": "es-t-02",
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
                "id": "es-m-00",
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
                "id": "es-d-04",
                "type": "dictation",
                "question": "听写：我是/去（过去式）",
                "correctAnswer": "fui",
                "difficulty": 2,
                "audioWord": "fui"
              },
              {
                "id": "es-r-05",
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
                "id": "es-t-00",
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
                "id": "es-f-01",
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
                "id": "es-t-02",
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
                "id": "es-m-00",
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
                "id": "es-d-04",
                "type": "dictation",
                "question": "听写：我是/去（过去式）",
                "correctAnswer": "fui",
                "difficulty": 2,
                "audioWord": "fui"
              },
              {
                "id": "es-r-05",
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
                "id": "es-t-00",
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
                "id": "es-f-01",
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
                "id": "es-t-02",
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
                "id": "es-m-00",
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
                "id": "es-d-00",
                "type": "dictation",
                "question": "听写：圣诞节",
                "correctAnswer": "Navidad",
                "difficulty": 2,
                "audioWord": "Navidad"
              },
              {
                "id": "es-r-01",
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
                "id": "es-t-00",
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
                "id": "es-f-01",
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
                "id": "es-t-02",
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
                "id": "es-m-00",
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
                "id": "es-d-00",
                "type": "dictation",
                "question": "听写：圣诞节",
                "correctAnswer": "Navidad",
                "difficulty": 2,
                "audioWord": "Navidad"
              },
              {
                "id": "es-r-01",
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
            "levelId": "fr-basic-04",
            "title": "问候与礼貌",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [],
            "questions": [
              {
                "id": "fr-t-03",
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
                "id": "fr-f-04",
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
                "id": "fr-t-05",
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
                "id": "fr-m-03",
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
                "id": "fr-d-07",
                "type": "dictation",
                "question": "听写：一",
                "correctAnswer": "un",
                "difficulty": 2,
                "audioWord": "un"
              },
              {
                "id": "fr-r-08",
                "type": "repeat",
                "question": "跟读：deux",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "deux"
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
            "title": "自我介绍",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "fr-t-00",
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
                "id": "fr-f-01",
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
                "id": "fr-t-02",
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
                "id": "fr-m-00",
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
                "id": "fr-d-04",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "combien ça coûte?",
                "difficulty": 2,
                "audioWord": "combien ca coute"
              },
              {
                "id": "fr-r-05",
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
                "id": "fr-t-00",
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
                "id": "fr-f-01",
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
                "id": "fr-t-02",
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
                "id": "fr-m-00",
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
                "id": "fr-d-04",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "combien ça coûte?",
                "difficulty": 2,
                "audioWord": "combien ca coute"
              },
              {
                "id": "fr-r-05",
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
                "id": "fr-t-00",
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
                "id": "fr-f-01",
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
                "id": "fr-t-02",
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
                "id": "fr-m-00",
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
                "id": "fr-d-04",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "réserver un hôtel",
                "difficulty": 2,
                "audioWord": "reserver un hotel"
              },
              {
                "id": "fr-r-05",
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
                "id": "fr-t-00",
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
                "id": "fr-f-01",
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
                "id": "fr-t-02",
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
                "id": "fr-m-00",
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
                "id": "fr-d-04",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "réserver un hôtel",
                "difficulty": 2,
                "audioWord": "reserver un hotel"
              },
              {
                "id": "fr-r-05",
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
                "id": "fr-t-00",
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
                "id": "fr-f-01",
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
                "id": "fr-t-02",
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
                "id": "fr-m-00",
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
                "id": "fr-d-04",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "réserver un hôtel",
                "difficulty": 2,
                "audioWord": "reserver un hotel"
              },
              {
                "id": "fr-r-05",
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
                "id": "fr-t-00",
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
                "id": "fr-f-01",
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
                "id": "fr-t-02",
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
                "id": "fr-m-00",
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
                "id": "fr-d-04",
                "type": "dictation",
                "question": "听写：是",
                "correctAnswer": "je suis/il est",
                "difficulty": 2,
                "audioWord": "je suis il est"
              },
              {
                "id": "fr-r-05",
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
                "id": "fr-t-00",
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
                "id": "fr-f-01",
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
                "id": "fr-t-02",
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
                "id": "fr-m-00",
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
                "id": "fr-d-00",
                "type": "dictation",
                "question": "听写：圣诞节",
                "correctAnswer": "noël",
                "difficulty": 2,
                "audioWord": "noel"
              },
              {
                "id": "fr-r-01",
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
        "color": "#7C3AED",
        "levels": [
          {
            "levelId": "hi-basic-04",
            "title": "问候与礼貌",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [],
            "questions": [
              {
                "id": "hi-t-03",
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
                "id": "hi-f-04",
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
                "id": "hi-t-05",
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
                "id": "hi-m-03",
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
                "id": "hi-d-07",
                "type": "dictation",
                "question": "听写：一",
                "correctAnswer": "एक",
                "difficulty": 2,
                "audioWord": "ek"
              },
              {
                "id": "hi-r-08",
                "type": "repeat",
                "question": "跟读：दो",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "दो"
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
            "levelId": "hi-daily-02",
            "title": "自我介绍",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "hi-t-00",
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
                "id": "hi-f-01",
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
                "id": "hi-t-02",
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
                "id": "hi-m-00",
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
                "id": "hi-d-04",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "यह कितने का है?",
                "difficulty": 2,
                "audioWord": "yeh kitne ka hai"
              },
              {
                "id": "hi-r-05",
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
                "id": "hi-t-00",
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
                "id": "hi-f-01",
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
                "id": "hi-t-02",
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
                "id": "hi-m-00",
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
                "id": "hi-d-04",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "यह कितने का है?",
                "difficulty": 2,
                "audioWord": "yeh kitne ka hai"
              },
              {
                "id": "hi-r-05",
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
                "id": "hi-t-00",
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
                "id": "hi-f-01",
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
                "id": "hi-t-02",
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
                "id": "hi-m-00",
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
                "id": "hi-d-04",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "होटल बुक करना",
                "difficulty": 2,
                "audioWord": "hotel book karna"
              },
              {
                "id": "hi-r-05",
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
                "id": "hi-t-00",
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
                "id": "hi-f-01",
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
                "id": "hi-t-02",
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
                "id": "hi-m-00",
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
                "id": "hi-d-04",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "होटल बुक करना",
                "difficulty": 2,
                "audioWord": "hotel book karna"
              },
              {
                "id": "hi-r-05",
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
                "id": "hi-t-00",
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
                "id": "hi-f-01",
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
                "id": "hi-t-02",
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
                "id": "hi-m-00",
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
                "id": "hi-d-04",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "होटल बुक करना",
                "difficulty": 2,
                "audioWord": "hotel book karna"
              },
              {
                "id": "hi-r-05",
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
                "id": "hi-t-00",
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
                "id": "hi-f-01",
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
                "id": "hi-t-02",
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
                "id": "hi-m-00",
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
                "id": "hi-d-04",
                "type": "dictation",
                "question": "听写：是",
                "correctAnswer": "हूँ/है",
                "difficulty": 2,
                "audioWord": "hoon hai"
              },
              {
                "id": "hi-r-05",
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
                "id": "hi-t-00",
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
                "id": "hi-f-01",
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
                "id": "hi-t-02",
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
                "id": "hi-m-00",
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
                "id": "hi-d-00",
                "type": "dictation",
                "question": "听写：排灯节",
                "correctAnswer": "दीवाली",
                "difficulty": 2,
                "audioWord": "diwali"
              },
              {
                "id": "hi-r-01",
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
        "color": "#047857",
        "levels": [
          {
            "levelId": "it-basic-04",
            "title": "数字与颜色",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [
              "it-basic-03"
            ],
            "questions": [
              {
                "id": "it-t-03",
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
                "id": "it-f-04",
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
                "id": "it-t-05",
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
                "id": "it-m-03",
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
                "id": "it-d-07",
                "type": "dictation",
                "question": "听写：一",
                "correctAnswer": "uno",
                "difficulty": 2,
                "audioWord": "uno"
              },
              {
                "id": "it-r-08",
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
        "color": "#34D399",
        "levels": [
          {
            "levelId": "it-daily-02",
            "title": "自我介绍",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "it-t-00",
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
                "id": "it-f-01",
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
                "id": "it-t-02",
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
                "id": "it-m-00",
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
                "id": "it-d-04",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "quanto costa?",
                "difficulty": 2,
                "audioWord": "quanto costa"
              },
              {
                "id": "it-r-05",
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
                "id": "it-t-00",
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
                "id": "it-f-01",
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
                "id": "it-t-02",
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
                "id": "it-m-00",
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
                "id": "it-d-04",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "quanto costa?",
                "difficulty": 2,
                "audioWord": "quanto costa"
              },
              {
                "id": "it-r-05",
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
                "id": "it-t-00",
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
                "id": "it-f-01",
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
                "id": "it-t-02",
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
                "id": "it-m-00",
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
                "id": "it-d-04",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "prenotare un albergo",
                "difficulty": 2,
                "audioWord": "prenotare un albergo"
              },
              {
                "id": "it-r-05",
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
                "id": "it-t-00",
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
                "id": "it-f-01",
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
                "id": "it-t-02",
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
                "id": "it-m-00",
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
                "id": "it-d-04",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "prenotare un albergo",
                "difficulty": 2,
                "audioWord": "prenotare un albergo"
              },
              {
                "id": "it-r-05",
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
                "id": "it-t-00",
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
                "id": "it-f-01",
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
                "id": "it-t-02",
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
                "id": "it-m-00",
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
                "id": "it-d-04",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "prenotare un albergo",
                "difficulty": 2,
                "audioWord": "prenotare un albergo"
              },
              {
                "id": "it-r-05",
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
                "id": "it-t-00",
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
                "id": "it-f-01",
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
                "id": "it-t-02",
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
                "id": "it-m-00",
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
                "id": "it-d-04",
                "type": "dictation",
                "question": "听写：是",
                "correctAnswer": "sono/è",
                "difficulty": 2,
                "audioWord": "sono e"
              },
              {
                "id": "it-r-05",
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
                "id": "it-t-00",
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
                "id": "it-f-01",
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
                "id": "it-t-02",
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
                "id": "it-m-00",
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
                "id": "it-d-00",
                "type": "dictation",
                "question": "听写：圣诞节",
                "correctAnswer": "natale",
                "difficulty": 2,
                "audioWord": "natale"
              },
              {
                "id": "it-r-01",
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
        "id": "daily",
        "name": "日常对话",
        "color": "#6366F1",
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
                "id": "ko-t-00",
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
                "id": "ko-f-01",
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
                "id": "ko-t-02",
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
                "id": "ko-m-00",
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
                "id": "ko-d-04",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "얼마예요",
                "difficulty": 2,
                "audioWord": "eolmayeyo"
              },
              {
                "id": "ko-r-05",
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
                "id": "ko-t-00",
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
                "id": "ko-f-01",
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
                "id": "ko-t-02",
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
                "id": "ko-m-00",
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
                "id": "ko-d-04",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "얼마예요",
                "difficulty": 2,
                "audioWord": "eolmayeyo"
              },
              {
                "id": "ko-r-05",
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
                "id": "ko-t-00",
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
                "id": "ko-f-01",
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
                "id": "ko-t-02",
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
                "id": "ko-m-00",
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
                "id": "ko-d-04",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "호텔을 예약해요",
                "difficulty": 2,
                "audioWord": "hotereul yeyakaeyo"
              },
              {
                "id": "ko-r-05",
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
                "id": "ko-t-00",
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
                "id": "ko-f-01",
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
                "id": "ko-t-02",
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
                "id": "ko-m-00",
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
                "id": "ko-d-04",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "호텔을 예약해요",
                "difficulty": 2,
                "audioWord": "hotereul yeyakaeyo"
              },
              {
                "id": "ko-r-05",
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
                "id": "ko-t-00",
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
                "id": "ko-f-01",
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
                "id": "ko-t-02",
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
                "id": "ko-m-00",
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
                "id": "ko-d-04",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "호텔을 예약해요",
                "difficulty": 2,
                "audioWord": "hotereul yeyakaeyo"
              },
              {
                "id": "ko-r-05",
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
                "id": "ko-t-00",
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
                "id": "ko-f-01",
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
                "id": "ko-t-02",
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
                "id": "ko-m-00",
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
                "id": "ko-d-04",
                "type": "dictation",
                "question": "听写：是",
                "correctAnswer": "이에요/예요",
                "difficulty": 2,
                "audioWord": "ieyo yeyo"
              },
              {
                "id": "ko-r-05",
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
                "id": "ko-t-00",
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
                "id": "ko-f-01",
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
                "id": "ko-t-02",
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
                "id": "ko-m-00",
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
                "id": "ko-d-04",
                "type": "dictation",
                "question": "听写：是",
                "correctAnswer": "이에요/예요",
                "difficulty": 2,
                "audioWord": "ieyo yeyo"
              },
              {
                "id": "ko-r-05",
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
                "id": "ko-t-00",
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
                "id": "ko-f-01",
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
                "id": "ko-t-02",
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
                "id": "ko-m-00",
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
                "id": "ko-d-00",
                "type": "dictation",
                "question": "听写：春节/新年",
                "correctAnswer": "설날",
                "difficulty": 2,
                "audioWord": "seollal"
              },
              {
                "id": "ko-r-01",
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
                "id": "ko-t-00",
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
                "id": "ko-f-01",
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
                "id": "ko-t-02",
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
                "id": "ko-m-00",
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
                "id": "ko-d-00",
                "type": "dictation",
                "question": "听写：春节/新年",
                "correctAnswer": "설날",
                "difficulty": 2,
                "audioWord": "seollal"
              },
              {
                "id": "ko-r-01",
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
        "name": "荷兰语基础词汇",
        "color": "#F59E0B",
        "levels": [
          {
            "levelId": "nl-basic-04",
            "title": "问候与礼貌",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [],
            "questions": [
              {
                "id": "nl-t-03",
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
                "id": "nl-f-04",
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
                "id": "nl-t-05",
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
                "id": "nl-m-03",
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
                "id": "nl-d-07",
                "type": "dictation",
                "question": "听写：一",
                "correctAnswer": "een",
                "difficulty": 2,
                "audioWord": "een"
              },
              {
                "id": "nl-r-08",
                "type": "repeat",
                "question": "跟读：twee",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "twee"
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
            "levelId": "nl-daily-02",
            "title": "自我介绍",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "nl-t-00",
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
                "id": "nl-f-01",
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
                "id": "nl-t-02",
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
                "id": "nl-m-00",
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
                "id": "nl-d-04",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "hoeveel kost dit?",
                "difficulty": 2,
                "audioWord": "hoeveel kost dit"
              },
              {
                "id": "nl-r-05",
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
                "id": "nl-t-00",
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
                "id": "nl-f-01",
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
                "id": "nl-t-02",
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
                "id": "nl-m-00",
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
                "id": "nl-d-04",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "hoeveel kost dit?",
                "difficulty": 2,
                "audioWord": "hoeveel kost dit"
              },
              {
                "id": "nl-r-05",
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
                "id": "nl-t-00",
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
                "id": "nl-f-01",
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
                "id": "nl-t-02",
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
                "id": "nl-m-00",
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
                "id": "nl-d-04",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "een hotel boeken",
                "difficulty": 2,
                "audioWord": "een hotel boeken"
              },
              {
                "id": "nl-r-05",
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
                "id": "nl-t-00",
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
                "id": "nl-f-01",
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
                "id": "nl-t-02",
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
                "id": "nl-m-00",
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
                "id": "nl-d-04",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "een hotel boeken",
                "difficulty": 2,
                "audioWord": "een hotel boeken"
              },
              {
                "id": "nl-r-05",
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
                "id": "nl-t-00",
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
                "id": "nl-f-01",
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
                "id": "nl-t-02",
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
                "id": "nl-m-00",
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
                "id": "nl-d-04",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "een hotel boeken",
                "difficulty": 2,
                "audioWord": "een hotel boeken"
              },
              {
                "id": "nl-r-05",
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
                "id": "nl-t-00",
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
                "id": "nl-f-01",
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
                "id": "nl-t-02",
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
                "id": "nl-m-00",
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
                "id": "nl-d-04",
                "type": "dictation",
                "question": "听写：是",
                "correctAnswer": "ben/is/zijn",
                "difficulty": 2,
                "audioWord": "ben is zijn"
              },
              {
                "id": "nl-r-05",
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
                "id": "nl-t-00",
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
                "id": "nl-f-01",
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
                "id": "nl-t-02",
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
                "id": "nl-m-00",
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
                "id": "nl-d-00",
                "type": "dictation",
                "question": "听写：圣诞节",
                "correctAnswer": "kerstmis",
                "difficulty": 2,
                "audioWord": "kerstmis"
              },
              {
                "id": "nl-r-01",
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
        "name": "波兰语基础词汇",
        "color": "#DC2626",
        "levels": [
          {
            "levelId": "pl-basic-04",
            "title": "问候与礼貌",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [],
            "questions": [
              {
                "id": "pl-t-03",
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
                "id": "pl-f-04",
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
                "id": "pl-t-05",
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
                "id": "pl-m-03",
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
                "id": "pl-d-07",
                "type": "dictation",
                "question": "听写：一",
                "correctAnswer": "jeden",
                "difficulty": 2,
                "audioWord": "jeden"
              },
              {
                "id": "pl-r-08",
                "type": "repeat",
                "question": "跟读：dwa",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "dwa"
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
            "levelId": "pl-daily-02",
            "title": "自我介绍",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "pl-t-00",
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
                "id": "pl-f-01",
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
                "id": "pl-t-02",
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
                "id": "pl-m-00",
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
                "id": "pl-d-04",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "ile to kosztuje?",
                "difficulty": 2,
                "audioWord": "ile to kosztuje"
              },
              {
                "id": "pl-r-05",
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
                "id": "pl-t-00",
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
                "id": "pl-f-01",
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
                "id": "pl-t-02",
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
                "id": "pl-m-00",
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
                "id": "pl-d-04",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "ile to kosztuje?",
                "difficulty": 2,
                "audioWord": "ile to kosztuje"
              },
              {
                "id": "pl-r-05",
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
                "id": "pl-t-00",
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
                "id": "pl-f-01",
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
                "id": "pl-t-02",
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
                "id": "pl-m-00",
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
                "id": "pl-d-04",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "zarezerwować hotel",
                "difficulty": 2,
                "audioWord": "zarezerwowac hotel"
              },
              {
                "id": "pl-r-05",
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
                "id": "pl-t-00",
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
                "id": "pl-f-01",
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
                "id": "pl-t-02",
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
                "id": "pl-m-00",
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
                "id": "pl-d-04",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "zarezerwować hotel",
                "difficulty": 2,
                "audioWord": "zarezerwowac hotel"
              },
              {
                "id": "pl-r-05",
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
                "id": "pl-t-00",
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
                "id": "pl-f-01",
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
                "id": "pl-t-02",
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
                "id": "pl-m-00",
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
                "id": "pl-d-04",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "zarezerwować hotel",
                "difficulty": 2,
                "audioWord": "zarezerwowac hotel"
              },
              {
                "id": "pl-r-05",
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
                "id": "pl-t-00",
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
                "id": "pl-f-01",
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
                "id": "pl-t-02",
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
                "id": "pl-m-00",
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
                "id": "pl-d-04",
                "type": "dictation",
                "question": "听写：是",
                "correctAnswer": "jestem/jest",
                "difficulty": 2,
                "audioWord": "jestem jest"
              },
              {
                "id": "pl-r-05",
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
                "id": "pl-t-00",
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
                "id": "pl-f-01",
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
                "id": "pl-t-02",
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
                "id": "pl-m-00",
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
                "id": "pl-d-00",
                "type": "dictation",
                "question": "听写：圣诞节",
                "correctAnswer": "boże narodzenie",
                "difficulty": 2,
                "audioWord": "boze narodzenie"
              },
              {
                "id": "pl-r-01",
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
        "color": "#B45309",
        "levels": [
          {
            "levelId": "pt-basic-04",
            "title": "问候与礼貌",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [],
            "questions": [
              {
                "id": "pt-t-03",
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
                "id": "pt-f-04",
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
                "id": "pt-t-05",
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
                "id": "pt-m-03",
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
                "id": "pt-d-07",
                "type": "dictation",
                "question": "听写：一",
                "correctAnswer": "um",
                "difficulty": 2,
                "audioWord": "um"
              },
              {
                "id": "pt-r-08",
                "type": "repeat",
                "question": "跟读：dois",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "dois"
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
            "levelId": "pt-daily-02",
            "title": "自我介绍",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "pt-t-00",
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
                "id": "pt-f-01",
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
                "id": "pt-t-02",
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
                "id": "pt-m-00",
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
                "id": "pt-d-04",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "quanto custa?",
                "difficulty": 2,
                "audioWord": "quanto custa"
              },
              {
                "id": "pt-r-05",
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
                "id": "pt-t-00",
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
                "id": "pt-f-01",
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
                "id": "pt-t-02",
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
                "id": "pt-m-00",
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
                "id": "pt-d-04",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "quanto custa?",
                "difficulty": 2,
                "audioWord": "quanto custa"
              },
              {
                "id": "pt-r-05",
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
                "id": "pt-t-00",
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
                "id": "pt-f-01",
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
                "id": "pt-t-02",
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
                "id": "pt-m-00",
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
                "id": "pt-d-04",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "reservar um hotel",
                "difficulty": 2,
                "audioWord": "reservar um hotel"
              },
              {
                "id": "pt-r-05",
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
                "id": "pt-t-00",
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
                "id": "pt-f-01",
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
                "id": "pt-t-02",
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
                "id": "pt-m-00",
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
                "id": "pt-d-04",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "reservar um hotel",
                "difficulty": 2,
                "audioWord": "reservar um hotel"
              },
              {
                "id": "pt-r-05",
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
                "id": "pt-t-00",
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
                "id": "pt-f-01",
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
                "id": "pt-t-02",
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
                "id": "pt-m-00",
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
                "id": "pt-d-04",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "reservar um hotel",
                "difficulty": 2,
                "audioWord": "reservar um hotel"
              },
              {
                "id": "pt-r-05",
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
                "id": "pt-t-00",
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
                "id": "pt-f-01",
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
                "id": "pt-t-02",
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
                "id": "pt-m-00",
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
                "id": "pt-d-04",
                "type": "dictation",
                "question": "听写：是",
                "correctAnswer": "sou/é",
                "difficulty": 2,
                "audioWord": "sou e"
              },
              {
                "id": "pt-r-05",
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
                "id": "pt-t-00",
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
                "id": "pt-f-01",
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
                "id": "pt-t-02",
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
                "id": "pt-m-00",
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
                "id": "pt-d-00",
                "type": "dictation",
                "question": "听写：圣诞节",
                "correctAnswer": "natal",
                "difficulty": 2,
                "audioWord": "natal"
              },
              {
                "id": "pt-r-01",
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
        "color": "#6366F1",
        "levels": [
          {
            "levelId": "ru-basic-04",
            "title": "问候与礼貌",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [],
            "questions": [
              {
                "id": "ru-t-03",
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
                "id": "ru-f-04",
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
                "id": "ru-t-05",
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
                "id": "ru-m-03",
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
                "id": "ru-d-07",
                "type": "dictation",
                "question": "听写：一",
                "correctAnswer": "один",
                "difficulty": 2,
                "audioWord": "odin"
              },
              {
                "id": "ru-r-08",
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
        "color": "#6366F1",
        "levels": [
          {
            "levelId": "ru-daily-02",
            "title": "自我介绍",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "ru-t-00",
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
                "id": "ru-f-01",
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
                "id": "ru-t-02",
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
                "id": "ru-m-00",
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
                "id": "ru-d-04",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "Сколько стоит?",
                "difficulty": 2,
                "audioWord": "skolko stoit"
              },
              {
                "id": "ru-r-05",
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
                "id": "ru-t-00",
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
                "id": "ru-f-01",
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
                "id": "ru-t-02",
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
                "id": "ru-m-00",
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
                "id": "ru-d-04",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "Сколько стоит?",
                "difficulty": 2,
                "audioWord": "skolko stoit"
              },
              {
                "id": "ru-r-05",
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
                "id": "ru-t-00",
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
                "id": "ru-f-01",
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
                "id": "ru-t-02",
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
                "id": "ru-m-00",
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
                "id": "ru-d-04",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "Забронировать отель",
                "difficulty": 2,
                "audioWord": "zabronirovat otyel"
              },
              {
                "id": "ru-r-05",
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
                "id": "ru-t-00",
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
                "id": "ru-f-01",
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
                "id": "ru-t-02",
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
                "id": "ru-m-00",
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
                "id": "ru-d-04",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "Забронировать отель",
                "difficulty": 2,
                "audioWord": "zabronirovat otyel"
              },
              {
                "id": "ru-r-05",
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
                "id": "ru-t-00",
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
                "id": "ru-f-01",
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
                "id": "ru-t-02",
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
                "id": "ru-m-00",
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
                "id": "ru-d-04",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "Забронировать отель",
                "difficulty": 2,
                "audioWord": "zabronirovat otyel"
              },
              {
                "id": "ru-r-05",
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
                "id": "ru-t-00",
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
                "id": "ru-f-01",
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
                "id": "ru-t-02",
                "type": "translate",
                "question": "他/她去",
                "options": [
                  "иду",
                  "есть",
                  "идёт",
                  "есть"
                ],
                "correctAnswer": "идёт",
                "difficulty": 1
              },
              {
                "id": "ru-m-00",
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
                "id": "ru-d-04",
                "type": "dictation",
                "question": "听写：是/有",
                "correctAnswer": "есть",
                "difficulty": 2,
                "audioWord": "yest"
              },
              {
                "id": "ru-r-05",
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
                "id": "ru-t-00",
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
                "id": "ru-f-01",
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
                "id": "ru-t-02",
                "type": "translate",
                "question": "他/她去",
                "options": [
                  "идёт",
                  "есть",
                  "есть",
                  "быть"
                ],
                "correctAnswer": "идёт",
                "difficulty": 1
              },
              {
                "id": "ru-m-00",
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
                "id": "ru-d-04",
                "type": "dictation",
                "question": "听写：是/有",
                "correctAnswer": "есть",
                "difficulty": 2,
                "audioWord": "yest"
              },
              {
                "id": "ru-r-05",
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
                "id": "ru-t-00",
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
                "id": "ru-f-01",
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
                "id": "ru-t-02",
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
                "id": "ru-m-00",
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
                "id": "ru-d-00",
                "type": "dictation",
                "question": "听写：新年",
                "correctAnswer": "Новый год",
                "difficulty": 2,
                "audioWord": "Novyy god"
              },
              {
                "id": "ru-r-01",
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
                "id": "ru-t-00",
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
                "id": "ru-f-01",
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
                "id": "ru-t-02",
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
                "id": "ru-m-00",
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
                "id": "ru-d-00",
                "type": "dictation",
                "question": "听写：新年",
                "correctAnswer": "Новый год",
                "difficulty": 2,
                "audioWord": "Novyy god"
              },
              {
                "id": "ru-r-01",
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
        "name": "泰语基础词汇",
        "color": "#1E3A8A",
        "levels": [
          {
            "levelId": "th-basic-04",
            "title": "问候与礼貌",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [],
            "questions": [
              {
                "id": "th-t-03",
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
                "id": "th-f-04",
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
                "id": "th-t-05",
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
                "id": "th-m-03",
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
                "id": "th-d-07",
                "type": "dictation",
                "question": "听写：一",
                "correctAnswer": "หนึ่ง",
                "difficulty": 2,
                "audioWord": "nueng"
              },
              {
                "id": "th-r-08",
                "type": "repeat",
                "question": "跟读：สอง",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "สอง"
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
            "levelId": "th-daily-02",
            "title": "自我介绍",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "th-t-00",
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
                "id": "th-f-01",
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
                "id": "th-t-02",
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
                "id": "th-m-00",
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
                "id": "th-d-04",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "เท่าไหร่",
                "difficulty": 2,
                "audioWord": "thao rai"
              },
              {
                "id": "th-r-05",
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
                "id": "th-t-00",
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
                "id": "th-f-01",
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
                "id": "th-t-02",
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
                "id": "th-m-00",
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
                "id": "th-d-04",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "เท่าไหร่",
                "difficulty": 2,
                "audioWord": "thao rai"
              },
              {
                "id": "th-r-05",
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
                "id": "th-t-00",
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
                "id": "th-f-01",
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
                "id": "th-t-02",
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
                "id": "th-m-00",
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
                "id": "th-d-04",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "จองโรงแรม",
                "difficulty": 2,
                "audioWord": "jong rong raem"
              },
              {
                "id": "th-r-05",
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
                "id": "th-t-00",
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
                "id": "th-f-01",
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
                "id": "th-t-02",
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
                "id": "th-m-00",
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
                "id": "th-d-04",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "จองโรงแรม",
                "difficulty": 2,
                "audioWord": "jong rong raem"
              },
              {
                "id": "th-r-05",
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
                "id": "th-t-00",
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
                "id": "th-f-01",
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
                "id": "th-t-02",
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
                "id": "th-m-00",
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
                "id": "th-d-04",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "จองโรงแรม",
                "difficulty": 2,
                "audioWord": "jong rong raem"
              },
              {
                "id": "th-r-05",
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
                "id": "th-t-00",
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
                "id": "th-f-01",
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
                "id": "th-t-02",
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
                "id": "th-m-00",
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
                "id": "th-d-04",
                "type": "dictation",
                "question": "听写：有",
                "correctAnswer": "มี",
                "difficulty": 2,
                "audioWord": "mee"
              },
              {
                "id": "th-r-05",
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
                "id": "th-t-00",
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
                "id": "th-f-01",
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
                "id": "th-t-02",
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
                "id": "th-m-00",
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
                "id": "th-d-00",
                "type": "dictation",
                "question": "听写：泼水节",
                "correctAnswer": "สงกรานต์",
                "difficulty": 2,
                "audioWord": "songkran"
              },
              {
                "id": "th-r-01",
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
        "name": "土耳其语基础词汇",
        "color": "#7C3AED",
        "levels": [
          {
            "levelId": "tr-basic-04",
            "title": "问候与礼貌",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [],
            "questions": [
              {
                "id": "tr-t-03",
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
                "id": "tr-f-04",
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
                "id": "tr-t-05",
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
                "id": "tr-m-03",
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
                "id": "tr-d-07",
                "type": "dictation",
                "question": "听写：一",
                "correctAnswer": "bir",
                "difficulty": 2,
                "audioWord": "bir"
              },
              {
                "id": "tr-r-08",
                "type": "repeat",
                "question": "跟读：iki",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "iki"
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
            "levelId": "tr-daily-02",
            "title": "自我介绍",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "tr-t-00",
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
                "id": "tr-f-01",
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
                "id": "tr-t-02",
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
                "id": "tr-m-00",
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
                "id": "tr-d-04",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "bu ne kadar?",
                "difficulty": 2,
                "audioWord": "bu ne kadar"
              },
              {
                "id": "tr-r-05",
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
                "id": "tr-t-00",
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
                "id": "tr-f-01",
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
                "id": "tr-t-02",
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
                "id": "tr-m-00",
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
                "id": "tr-d-04",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "bu ne kadar?",
                "difficulty": 2,
                "audioWord": "bu ne kadar"
              },
              {
                "id": "tr-r-05",
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
                "id": "tr-t-00",
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
                "id": "tr-f-01",
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
                "id": "tr-t-02",
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
                "id": "tr-m-00",
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
                "id": "tr-d-04",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "otel rezervasyonu",
                "difficulty": 2,
                "audioWord": "otel rezervasyonu"
              },
              {
                "id": "tr-r-05",
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
                "id": "tr-t-00",
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
                "id": "tr-f-01",
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
                "id": "tr-t-02",
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
                "id": "tr-m-00",
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
                "id": "tr-d-04",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "otel rezervasyonu",
                "difficulty": 2,
                "audioWord": "otel rezervasyonu"
              },
              {
                "id": "tr-r-05",
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
                "id": "tr-t-00",
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
                "id": "tr-f-01",
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
                "id": "tr-t-02",
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
                "id": "tr-m-00",
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
                "id": "tr-d-04",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "otel rezervasyonu",
                "difficulty": 2,
                "audioWord": "otel rezervasyonu"
              },
              {
                "id": "tr-r-05",
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
                "id": "tr-t-00",
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
                "id": "tr-f-01",
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
                "id": "tr-t-02",
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
                "id": "tr-m-00",
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
                "id": "tr-d-04",
                "type": "dictation",
                "question": "听写：是",
                "correctAnswer": "im/iz/sin",
                "difficulty": 2,
                "audioWord": "im iz sin"
              },
              {
                "id": "tr-r-05",
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
                "id": "tr-t-00",
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
                "id": "tr-f-01",
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
                "id": "tr-t-02",
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
                "id": "tr-m-00",
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
                "id": "tr-d-00",
                "type": "dictation",
                "question": "听写：开斋节",
                "correctAnswer": "ramazan bayramı",
                "difficulty": 2,
                "audioWord": "ramazan bayrami"
              },
              {
                "id": "tr-r-01",
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
        "name": "越南语基础词汇",
        "color": "#1D4ED8",
        "levels": [
          {
            "levelId": "vi-basic-04",
            "title": "问候与礼貌",
            "timeLimit": 120,
            "minScoreFor1Star": 30,
            "minScoreFor2Star": 50,
            "minScoreFor3Star": 70,
            "prerequisites": [],
            "questions": [
              {
                "id": "vi-t-03",
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
                "id": "vi-f-04",
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
                "id": "vi-t-05",
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
                "id": "vi-m-03",
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
                "id": "vi-d-07",
                "type": "dictation",
                "question": "听写：一",
                "correctAnswer": "một",
                "difficulty": 2,
                "audioWord": "mot"
              },
              {
                "id": "vi-r-08",
                "type": "repeat",
                "question": "跟读：hai",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "hai"
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
            "levelId": "vi-daily-02",
            "title": "自我介绍",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "vi-t-00",
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
                "id": "vi-f-01",
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
                "id": "vi-t-02",
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
                "id": "vi-m-00",
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
                "id": "vi-d-04",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "bao nhiêu tiền?",
                "difficulty": 2,
                "audioWord": "bao nhieu tien"
              },
              {
                "id": "vi-r-05",
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
                "id": "vi-t-00",
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
                "id": "vi-f-01",
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
                "id": "vi-t-02",
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
                "id": "vi-m-00",
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
                "id": "vi-d-04",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "bao nhiêu tiền?",
                "difficulty": 2,
                "audioWord": "bao nhieu tien"
              },
              {
                "id": "vi-r-05",
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
                "id": "vi-t-00",
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
                "id": "vi-f-01",
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
                "id": "vi-t-02",
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
                "id": "vi-m-00",
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
                "id": "vi-d-04",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "đặt phòng khách sạn",
                "difficulty": 2,
                "audioWord": "dat phong khach san"
              },
              {
                "id": "vi-r-05",
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
                "id": "vi-t-00",
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
                "id": "vi-f-01",
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
                "id": "vi-t-02",
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
                "id": "vi-m-00",
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
                "id": "vi-d-04",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "đặt phòng khách sạn",
                "difficulty": 2,
                "audioWord": "dat phong khach san"
              },
              {
                "id": "vi-r-05",
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
                "id": "vi-t-00",
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
                "id": "vi-f-01",
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
                "id": "vi-t-02",
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
                "id": "vi-m-00",
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
                "id": "vi-d-04",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "đặt phòng khách sạn",
                "difficulty": 2,
                "audioWord": "dat phong khach san"
              },
              {
                "id": "vi-r-05",
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
                "id": "vi-t-00",
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
                "id": "vi-f-01",
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
                "id": "vi-t-02",
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
                "id": "vi-m-00",
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
                "id": "vi-d-04",
                "type": "dictation",
                "question": "听写：在",
                "correctAnswer": "ở",
                "difficulty": 2,
                "audioWord": "o"
              },
              {
                "id": "vi-r-05",
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
                "id": "vi-t-00",
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
                "id": "vi-f-01",
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
                "id": "vi-t-02",
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
                "id": "vi-m-00",
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
                "id": "vi-d-00",
                "type": "dictation",
                "question": "听写：春节",
                "correctAnswer": "tết",
                "difficulty": 2,
                "audioWord": "tet"
              },
              {
                "id": "vi-r-01",
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
                "id": "yue-t-03",
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
                "id": "yue-f-04",
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
                "id": "yue-t-05",
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
                "id": "yue-m-03",
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
                "id": "yue-d-07",
                "type": "dictation",
                "question": "听写：一",
                "correctAnswer": "一",
                "difficulty": 2,
                "audioWord": "jat1"
              },
              {
                "id": "yue-r-08",
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
            "levelId": "yue-daily-02",
            "title": "自我介绍",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "yue-t-00",
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
                "id": "yue-f-01",
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
                "id": "yue-t-02",
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
                "id": "yue-m-00",
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
                "id": "yue-d-04",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "几钱呀？",
                "difficulty": 2,
                "audioWord": "gei2 cin2 aa3"
              },
              {
                "id": "yue-r-05",
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
                "id": "yue-t-00",
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
                "id": "yue-f-01",
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
                "id": "yue-t-02",
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
                "id": "yue-m-00",
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
                "id": "yue-d-04",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "几钱呀？",
                "difficulty": 2,
                "audioWord": "gei2 cin2 aa3"
              },
              {
                "id": "yue-r-05",
                "type": "repeat",
                "question": "跟读：我要呢个",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "我要呢个"
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
                "id": "yue-t-00",
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
                "id": "yue-f-01",
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
                "id": "yue-t-02",
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
                "id": "yue-m-00",
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
                "id": "yue-d-04",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "订酒店",
                "difficulty": 2,
                "audioWord": "deng6 zau2 dim3"
              },
              {
                "id": "yue-r-05",
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
                "id": "yue-t-00",
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
                "id": "yue-f-01",
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
                "id": "yue-t-02",
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
                "id": "yue-m-00",
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
                "id": "yue-d-04",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "订酒店",
                "difficulty": 2,
                "audioWord": "deng6 zau2 dim3"
              },
              {
                "id": "yue-r-05",
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
                "id": "yue-t-00",
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
                "id": "yue-f-01",
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
                "id": "yue-t-02",
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
                "id": "yue-m-00",
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
                "id": "yue-d-04",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "订酒店",
                "difficulty": 2,
                "audioWord": "deng6 zau2 dim3"
              },
              {
                "id": "yue-r-05",
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
                "id": "yue-t-00",
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
                "id": "yue-f-01",
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
                "id": "yue-t-02",
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
                "id": "yue-m-00",
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
                "id": "yue-d-04",
                "type": "dictation",
                "question": "听写：没有",
                "correctAnswer": "冇",
                "difficulty": 2,
                "audioWord": "mou5"
              },
              {
                "id": "yue-r-05",
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
                "id": "yue-t-00",
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
                "id": "yue-f-01",
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
                "id": "yue-t-02",
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
                "id": "yue-m-00",
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
                "id": "yue-d-00",
                "type": "dictation",
                "question": "听写：农历新年",
                "correctAnswer": "农历新年",
                "difficulty": 2,
                "audioWord": "nung4 lik3 san1 nin4"
              },
              {
                "id": "yue-r-01",
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
                "id": "zh-CN-t-06",
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
                "id": "zh-CN-f-07",
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
                "id": "zh-CN-t-08",
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
                "id": "zh-CN-m-06",
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
                "id": "zh-CN-d-10",
                "type": "dictation",
                "question": "听写：Four",
                "correctAnswer": "四",
                "difficulty": 2,
                "audioWord": "sì"
              },
              {
                "id": "zh-CN-r-11",
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
                "id": "zh-CN-t-12",
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
                "id": "zh-CN-f-13",
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
                "id": "zh-CN-t-14",
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
                "id": "zh-CN-m-12",
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
                "id": "zh-CN-d-16",
                "type": "dictation",
                "question": "听写：Black",
                "correctAnswer": "黑色",
                "difficulty": 2,
                "audioWord": "hēisè"
              },
              {
                "id": "zh-CN-r-17",
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
                "id": "zh-CN-t-18",
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
                "id": "zh-CN-f-19",
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
                "id": "zh-CN-t-20",
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
                "id": "zh-CN-m-18",
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
                "id": "zh-CN-d-22",
                "type": "dictation",
                "question": "听写：Mother",
                "correctAnswer": "妈妈",
                "difficulty": 2,
                "audioWord": "māma"
              },
              {
                "id": "zh-CN-r-23",
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
                "id": "zh-CN-t-03",
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
                "id": "zh-CN-f-04",
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
                "id": "zh-CN-t-05",
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
                "id": "zh-CN-m-03",
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
                "id": "zh-CN-d-07",
                "type": "dictation",
                "question": "听写：One",
                "correctAnswer": "一",
                "difficulty": 2,
                "audioWord": "yī"
              },
              {
                "id": "zh-CN-r-08",
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
                "id": "zh-CN-t-00",
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
                "id": "zh-CN-f-01",
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
                "id": "zh-CN-t-02",
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
                "id": "zh-CN-m-00",
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
                "id": "zh-CN-d-04",
                "type": "dictation",
                "question": "听写：How much is this?",
                "correctAnswer": "这个多少钱？",
                "difficulty": 2,
                "audioWord": "zhège duōshao qián"
              },
              {
                "id": "zh-CN-r-05",
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
                "id": "zh-CN-t-00",
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
                "id": "zh-CN-f-01",
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
                "id": "zh-CN-t-02",
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
                "id": "zh-CN-m-00",
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
                "id": "zh-CN-d-04",
                "type": "dictation",
                "question": "听写：How much is this?",
                "correctAnswer": "这个多少钱？",
                "difficulty": 2,
                "audioWord": "zhège duōshao qián"
              },
              {
                "id": "zh-CN-r-05",
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
                "id": "zh-CN-t-00",
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
                "id": "zh-CN-f-01",
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
                "id": "zh-CN-t-02",
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
                "id": "zh-CN-m-00",
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
                "id": "zh-CN-d-04",
                "type": "dictation",
                "question": "听写：How much is this?",
                "correctAnswer": "这个多少钱？",
                "difficulty": 2,
                "audioWord": "zhège duōshao qián"
              },
              {
                "id": "zh-CN-r-05",
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
                "id": "zh-CN-t-00",
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
                "id": "zh-CN-f-01",
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
                "id": "zh-CN-t-02",
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
                "id": "zh-CN-m-00",
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
                "id": "zh-CN-d-04",
                "type": "dictation",
                "question": "听写：Hotel reservation",
                "correctAnswer": "预订酒店",
                "difficulty": 2,
                "audioWord": "yùdìng jiǔdiàn"
              },
              {
                "id": "zh-CN-r-05",
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
                "id": "zh-CN-t-00",
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
                "id": "zh-CN-f-01",
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
                "id": "zh-CN-t-02",
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
                "id": "zh-CN-m-00",
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
                "id": "zh-CN-d-04",
                "type": "dictation",
                "question": "听写：Hotel reservation",
                "correctAnswer": "预订酒店",
                "difficulty": 2,
                "audioWord": "yùdìng jiǔdiàn"
              },
              {
                "id": "zh-CN-r-05",
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
                "id": "zh-CN-t-00",
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
                "id": "zh-CN-f-01",
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
                "id": "zh-CN-t-02",
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
                "id": "zh-CN-m-00",
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
                "id": "zh-CN-d-04",
                "type": "dictation",
                "question": "听写：Hotel reservation",
                "correctAnswer": "预订酒店",
                "difficulty": 2,
                "audioWord": "yùdìng jiǔdiàn"
              },
              {
                "id": "zh-CN-r-05",
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
                "id": "zh-CN-t-00",
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
                "id": "zh-CN-f-01",
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
                "id": "zh-CN-t-02",
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
                "id": "zh-CN-m-00",
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
                "id": "zh-CN-d-04",
                "type": "dictation",
                "question": "听写：question particle",
                "correctAnswer": "吗",
                "difficulty": 2,
                "audioWord": "ma"
              },
              {
                "id": "zh-CN-r-05",
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
                "id": "zh-CN-t-00",
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
                "id": "zh-CN-f-01",
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
                "id": "zh-CN-t-02",
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
                "id": "zh-CN-m-00",
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
                "id": "zh-CN-d-04",
                "type": "dictation",
                "question": "听写：question particle",
                "correctAnswer": "吗",
                "difficulty": 2,
                "audioWord": "ma"
              },
              {
                "id": "zh-CN-r-05",
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
                "id": "zh-CN-t-00",
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
                "id": "zh-CN-f-01",
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
                "id": "zh-CN-t-02",
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
                "id": "zh-CN-m-00",
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
                "id": "zh-CN-d-00",
                "type": "dictation",
                "question": "听写：Spring Festival",
                "correctAnswer": "春节",
                "difficulty": 2,
                "audioWord": "Chūnjié"
              },
              {
                "id": "zh-CN-r-01",
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
                "id": "zh-CN-t-00",
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
                "id": "zh-CN-f-01",
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
                "id": "zh-CN-t-02",
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
                "id": "zh-CN-m-00",
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
                "id": "zh-CN-d-00",
                "type": "dictation",
                "question": "听写：Spring Festival",
                "correctAnswer": "春节",
                "difficulty": 2,
                "audioWord": "Chūnjié"
              },
              {
                "id": "zh-CN-r-01",
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
                "id": "zh-DB-t-00",
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
                "id": "zh-DB-f-01",
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
                "id": "zh-DB-t-02",
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
                "id": "zh-DB-m-00",
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
                "id": "zh-DB-d-04",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "多钱儿？",
                "difficulty": 2,
                "audioWord": "duo1 qian2 er5"
              },
              {
                "id": "zh-DB-r-05",
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
                "id": "zh-DB-t-00",
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
                "id": "zh-DB-f-01",
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
                "id": "zh-DB-t-02",
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
                "id": "zh-DB-m-00",
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
                "id": "zh-DB-d-04",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "多钱儿？",
                "difficulty": 2,
                "audioWord": "duo1 qian2 er5"
              },
              {
                "id": "zh-DB-r-05",
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
                "id": "zh-DB-t-00",
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
                "id": "zh-DB-f-01",
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
                "id": "zh-DB-t-02",
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
                "id": "zh-DB-m-00",
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
                "id": "zh-DB-d-04",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "多钱儿？",
                "difficulty": 2,
                "audioWord": "duo1 qian2 er5"
              },
              {
                "id": "zh-DB-r-05",
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
            "levelId": "zh-DB-scenario-01",
            "title": "交通出行",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "zh-DB-t-00",
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
                "id": "zh-DB-f-01",
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
                "id": "zh-DB-t-02",
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
                "id": "zh-DB-m-00",
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
                "id": "zh-DB-d-04",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "订宾馆",
                "difficulty": 2,
                "audioWord": "ding4 bin1 guan3"
              },
              {
                "id": "zh-DB-r-05",
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
                "id": "zh-DB-t-00",
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
                "id": "zh-DB-f-01",
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
                "id": "zh-DB-t-02",
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
                "id": "zh-DB-m-00",
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
                "id": "zh-DB-d-04",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "订宾馆",
                "difficulty": 2,
                "audioWord": "ding4 bin1 guan3"
              },
              {
                "id": "zh-DB-r-05",
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
                "id": "zh-DB-t-00",
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
                "id": "zh-DB-f-01",
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
                "id": "zh-DB-t-02",
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
                "id": "zh-DB-m-00",
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
                "id": "zh-DB-d-04",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "订宾馆",
                "difficulty": 2,
                "audioWord": "ding4 bin1 guan3"
              },
              {
                "id": "zh-DB-r-05",
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
                "id": "zh-DB-t-00",
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
                "id": "zh-DB-f-01",
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
                "id": "zh-DB-t-02",
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
                "id": "zh-DB-m-00",
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
                "id": "zh-DB-d-04",
                "type": "dictation",
                "question": "听写：有",
                "correctAnswer": "有",
                "difficulty": 2,
                "audioWord": "you3"
              },
              {
                "id": "zh-DB-r-05",
                "type": "repeat",
                "question": "跟读：行",
                "correctAnswer": "repeat",
                "difficulty": 2,
                "sentence": "行"
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
                "id": "zh-DB-t-00",
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
                "id": "zh-DB-f-01",
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
                "id": "zh-DB-t-02",
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
                "id": "zh-DB-m-00",
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
                "id": "zh-DB-d-00",
                "type": "dictation",
                "question": "听写：过年",
                "correctAnswer": "过年",
                "difficulty": 2,
                "audioWord": "guo4 nian2"
              },
              {
                "id": "zh-DB-r-01",
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
                "id": "zh-SC-t-00",
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
                "id": "zh-SC-f-01",
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
                "id": "zh-SC-t-02",
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
                "id": "zh-SC-m-00",
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
                "id": "zh-SC-d-04",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "好多钱？",
                "difficulty": 2,
                "audioWord": "hao3 duo1 qian2"
              },
              {
                "id": "zh-SC-r-05",
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
                "id": "zh-SC-t-00",
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
                "id": "zh-SC-f-01",
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
                "id": "zh-SC-t-02",
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
                "id": "zh-SC-m-00",
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
                "id": "zh-SC-d-04",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "好多钱？",
                "difficulty": 2,
                "audioWord": "hao3 duo1 qian2"
              },
              {
                "id": "zh-SC-r-05",
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
                "id": "zh-SC-t-00",
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
                "id": "zh-SC-f-01",
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
                "id": "zh-SC-t-02",
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
                "id": "zh-SC-m-00",
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
                "id": "zh-SC-d-04",
                "type": "dictation",
                "question": "听写：多少钱？",
                "correctAnswer": "好多钱？",
                "difficulty": 2,
                "audioWord": "hao3 duo1 qian2"
              },
              {
                "id": "zh-SC-r-05",
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
            "levelId": "zh-SC-scenario-01",
            "title": "交通出行",
            "timeLimit": 150,
            "minScoreFor1Star": 40,
            "minScoreFor2Star": 60,
            "minScoreFor3Star": 80,
            "prerequisites": [],
            "questions": [
              {
                "id": "zh-SC-t-00",
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
                "id": "zh-SC-f-01",
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
                "id": "zh-SC-t-02",
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
                "id": "zh-SC-m-00",
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
                "id": "zh-SC-d-04",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "订酒店",
                "difficulty": 2,
                "audioWord": "ding4 jiu3 dian4"
              },
              {
                "id": "zh-SC-r-05",
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
                "id": "zh-SC-t-00",
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
                "id": "zh-SC-f-01",
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
                "id": "zh-SC-t-02",
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
                "id": "zh-SC-m-00",
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
                "id": "zh-SC-d-04",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "订酒店",
                "difficulty": 2,
                "audioWord": "ding4 jiu3 dian4"
              },
              {
                "id": "zh-SC-r-05",
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
                "id": "zh-SC-t-00",
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
                "id": "zh-SC-f-01",
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
                "id": "zh-SC-t-02",
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
                "id": "zh-SC-m-00",
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
                "id": "zh-SC-d-04",
                "type": "dictation",
                "question": "听写：预订酒店",
                "correctAnswer": "订酒店",
                "difficulty": 2,
                "audioWord": "ding4 jiu3 dian4"
              },
              {
                "id": "zh-SC-r-05",
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
                "id": "zh-SC-t-00",
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
                "id": "zh-SC-f-01",
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
                "id": "zh-SC-t-02",
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
                "id": "zh-SC-m-00",
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
                "id": "zh-SC-d-04",
                "type": "dictation",
                "question": "听写：有",
                "correctAnswer": "有",
                "difficulty": 2,
                "audioWord": "you3"
              },
              {
                "id": "zh-SC-r-05",
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
                "id": "zh-SC-t-00",
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
                "id": "zh-SC-f-01",
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
                "id": "zh-SC-t-02",
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
                "id": "zh-SC-m-00",
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
                "id": "zh-SC-d-00",
                "type": "dictation",
                "question": "听写：过年",
                "correctAnswer": "过年",
                "difficulty": 2,
                "audioWord": "guo4 nian2"
              },
              {
                "id": "zh-SC-r-01",
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
