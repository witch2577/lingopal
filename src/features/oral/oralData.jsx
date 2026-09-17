// ========== Oral Module Demo Data ==========
// NOTE: All data below is marked as demo/placeholder data in UI

const ORAL_PRACTICE_DATA = {
  "ar": {
    beginner: [
      {
        text: "مرحبا، كيف حالك؟",
        phonetic: "mar-ha-ba, keef haalak?",
        meaning: "你好，你好吗？",
        tip: "مرحبا mar-ha-ba 重音在 ha"
      },
      {
        text: "شكراً جزيلاً.",
        phonetic: "shuk-ran jazee-lan",
        meaning: "非常感谢。",
        tip: "شكراً shuk-ran 重音在 shuk"
      },
      {
        text: "أين الحمام؟",
        phonetic: "ayn al-ha-mam?",
        meaning: "洗手间在哪里？",
        tip: "أين ayn 疑问词，الحمام al-ha-mam"
      },
    ],
    intermediate: [
      {
        text: "أريد كوباً من الماء.",
        phonetic: "u-reed kaw-ban min al-maa",
        meaning: "我想要一杯水。",
        tip: "أريد u-reed 第一人称，الماء al-maa"
      },
    ],
    advanced: [
      {
        text: "عفواً، أين أقرب محطة مترو؟",
        phonetic: "afwan, ayn aqrab ma-ha-tat me-tro?",
        meaning: "不好意思，最近的地铁站在哪里？",
        tip: "عفواً afwan 不好意思，أقرب aqrab 最近"
      },
      {
        text: "أريد حجز طاولة لشخصين.",
        phonetic: "u-reed hajz ta-wi-la li-shakhsayn",
        meaning: "我想订一张两人桌。",
        tip: "حجز hajz 预订，شخصين shakhsayn 两个人"
      },
    ],
  },
  "de": {
    beginner: [
      {
        text: "Hallo, wie geht es dir?",
        phonetic: "ha-lo, vee gayt es deer",
        meaning: "你好，你好吗？",
        tip: "geht 的 ch 轻读"
      },
      {
        text: "Danke schön.",
        phonetic: "dan-ke shön",
        meaning: "非常感谢。",
        tip: "ö 圆唇音"
      },
      {
        text: "Es tut mir leid.",
        phonetic: "es toot meer lait",
        meaning: "对不起。",
        tip: "leid 的 ei 读 ai"
      },
      {
        text: "Wo ist die Toilette?",
        phonetic: "vo ist dee to-i-le-te",
        meaning: "洗手间在哪里？",
        tip: "Wo 重读"
      },
      {
        text: "Ich möchte eine Tasse Kaffee.",
        phonetic: "ish möch-te ai-ne ta-se ka-fay",
        meaning: "我想要一杯咖啡。",
        tip: "ch 清音"
      },
      {
        text: "Entschuldigung, wo ist die nächste U-Bahn-Station?",
        phonetic: "ent-shul-di-gung, vo ist dee naych-ste oo-bahn-shta-tion",
        meaning: "不好意思，最近的地铁站在哪里？",
        tip: "Entschuldigung 读 ent-shul-di-gung，äch 读 ay"
      },
    ],
    intermediate: [
      {
        text: "Könnten Sie mir ein lokales Restaurant empfehlen?",
        phonetic: "könn-ten zee meer ain lo-ka-les res-tau-rant emp-fay-len",
        meaning: "你能推荐一家本地餐厅吗？",
        tip: "ö 圆唇，ch 清音"
      },
      {
        text: "Ich suche die nächste U-Bahn-Station.",
        phonetic: "ish zu-she dee naych-ste oo-bahn-shta-tion",
        meaning: "我在找最近的地铁站。",
        tip: "ch 清音"
      },
      {
        text: "Wie viel kostet das?",
        phonetic: "vee feel kos-tet das",
        meaning: "这个多少钱？",
        tip: "viel 的 ie 读 i"
      },
    ],
    advanced: [
      {
        text: "Ich möchte einchecken. Ich habe eine Reservierung für zwei Nächte.",
        phonetic: "ish möch-te ain-che-ken. ish ha-be ai-ne ray-zayr-vee-rung für tsfai nech-te",
        meaning: "我想办理入住。我订了两晚。",
        tip: "einchecken 外来语，Reservierung 读 ray-zayr-vee-rung"
      },
      {
        text: "Ich möchte gerne ein Meeting für nächsten Dienstag vereinbaren.",
        phonetic: "ish möch-te ger-ne ain mi-ting für naych-sten dien-stag fer-ain-ba-ren",
        meaning: "我想安排下周二开个会。",
        tip: "ei 读 ai，ie 读 i"
      },
    ],
  },
  "el": {
    beginner: [
      {
        text: "Γειά σου, πώς είσαι;",
        phonetic: "ya su, pos i-se?",
        meaning: "你好，你好吗？",
        tip: "Γειά σου ya su 你好，πώς είσαι pos i-se 你好吗"
      },
      {
        text: "Ευχαριστώ πολύ.",
        phonetic: "ef-ha-ri-sto po-li",
        meaning: "非常感谢。",
        tip: "Ευχαριστώ ef-ha-ri-sto 谢谢，πολύ po-li 非常"
      },
      {
        text: "Συγγνώμη.",
        phonetic: "si-gno-mi",
        meaning: "对不起。",
        tip: "Συγγνώμη si-gno-mi 道歉，γγ 读 ng"
      },
    ],
    intermediate: [
      {
        text: "Πού είναι η τουαλέτα;",
        phonetic: "pu i-ne i tu-a-le-ta?",
        meaning: "洗手间在哪里？",
        tip: "Πού pu 哪里，τουαλέτα tu-a-le-ta 洗手间"
      },
    ],
    advanced: [
      {
        text: "Συγγνώμη, πού είναι ο πιο κοντινός σταθμός του μετρό;",
        phonetic: "si-gno-mi, pu i-ne o pyo kon-di-nos sta-thmos tu me-tro?",
        meaning: "不好意思，最近的地铁站在哪里？",
        tip: "πιο κοντινός pyo kon-di-nos 最近的，σταθμός sta-thmos 车站"
      },
      {
        text: "Θα ήθελα ένα τραπέζι για δύο άτομα.",
        phonetic: "tha i-the-la e-na tra-pe-zi ya di-o a-to-ma",
        meaning: "我想订一张两人桌。",
        tip: "τραπέζι tra-pe-zi 桌子，άτομα a-to-ma 人"
      },
    ],
  },
  "en": {
    beginner: [
      {
        text: "Excuse me, where is the nearest subway station?",
        phonetic: "/ɪkˈskjuːs miː wer ɪz ðə ˈnɪrɪst ˈsʌbweɪ ˈsteɪʃn/",
        meaning: "不好意思，最近的地铁站在哪里？",
        tip: "Excuse me 升调，subway 重音在第一音节"
      },
      {
        text: "I'd like a table for two, please.",
        phonetic: "/aɪd laɪk ə ˈteɪbl fɔːr tuː pliːz/",
        meaning: "我想订一张两人桌，谢谢。",
        tip: "I'd 是 I would 的缩写，table 重音在第一音节"
      },
      {
        text: "I have a reservation under my name.",
        phonetic: "/aɪ hæv ə ˌrezərˈveɪʃn ˈʌndər maɪ neɪm/",
        meaning: "我以我的名字预订了房间。",
        tip: "reservation 重音在第三音节，under 弱读"
      },
      {
        text: "Nice to meet you. I'm looking forward to working with you.",
        phonetic: "/naɪs tuː miːt juː aɪm ˈlʊkɪŋ ˈfɔːrwərd tuː ˈwɜːrkɪŋ wɪð juː/",
        meaning: "很高兴认识你。期待与您合作。",
        tip: "looking forward to 连读，working 的 /ɜːr/ 要圆润"
      },
      {
        text: "Could I have the bill, please?",
        phonetic: "/kʊd aɪ hæv ðə bɪl pliːz/",
        meaning: "请把账单给我好吗？",
        tip: "bill 的 /ɪ/ 短促，please 降调"
      },
      {
        text: "Could you tell me the best way to get to the airport?",
        phonetic: "/kʊd juː tel miː ðə best weɪ tuː ɡet tuː ði ˈerpɔːrt/",
        meaning: "您能告诉我去机场最好的路线吗？",
        tip: "best way 连读，airport 重音在第一音节"
      },
      {
        text: "I'd like to check in. I have a booking for two nights.",
        phonetic: "/aɪd laɪk tuː tʃek ɪn aɪ hæv ə ˈbʊkɪŋ fɔːr tuː naɪts/",
        meaning: "我想办理入住。我订了两晚。",
        tip: "check in 连读，booking 的 /ʊ/ 短促"
      },
      {
        text: "Thank you for your time. Let's keep in touch.",
        phonetic: "/θæŋk juː fɔːr jɔːr taɪm lets kiːp ɪn tʌtʃ/",
        meaning: "感谢您抽出时间。保持联系。",
        tip: "keep in touch 连读，touch 的 /tʃ/ 清晰"
      },
      {
        text: "Hello, how are you?",
        phonetic: "/həˈloʊ haʊ ɑːr juː/",
        meaning: "你好，你好吗？",
        tip: "注意 /h/ 要轻读，are 弱读为 /ɑːr/"
      },
      {
        text: "Nice to meet you.",
        phonetic: "/naɪs tuː miːt juː/",
        meaning: "很高兴认识你。",
        tip: "Nice 尾音 /s/ 要清晰，to 弱读"
      },
      {
        text: "Thank you very much.",
        phonetic: "/ˈθæŋk juː ˈveri mʌtʃ/",
        meaning: "非常感谢。",
        tip: "th 咬舌音 /θ/，very 重音在第一音节"
      },
      {
        text: "Where is the bathroom?",
        phonetic: "/wer ɪz ðə ˈbæθruːm/",
        meaning: "洗手间在哪里？",
        tip: "Where 升调，bathroom 重音在第一音节"
      },
    ],
    intermediate: [
      {
        text: "I would like a cup of coffee.",
        phonetic: "/aɪ wʊd laɪk ə kʌp əv ˈkɔːfi/",
        meaning: "我想要一杯咖啡。",
        tip: "would 弱读为 /wʊd/，of 弱读为 /əv/"
      },
      {
        text: "Could you please recommend a local restaurant?",
        phonetic: "/kʊd juː pliːz ˌrekəˈmend ə ˈloʊkl ˈrestərɑːnt/",
        meaning: "你能推荐一家本地餐厅吗？",
        tip: "recommend 重音在第三音节，restaurant 尾音轻读"
      },
      {
        text: "I am looking for the nearest subway station.",
        phonetic: "/aɪ æm ˈlʊkɪŋ fɔːr ðə ˈnɪrɪst ˈsʌbweɪ ˈsteɪʃn/",
        meaning: "我在找最近的地铁站。",
        tip: "looking for 连读，nearest 注意 /ɪr/ 音"
      },
      {
        text: "How much does this cost?",
        phonetic: "/haʊ mʌtʃ dʌz ðɪs kɔːst/",
        meaning: "这个多少钱？",
        tip: "does 弱读为 /dʌz/，this 的 /ð/ 要清晰"
      },
      {
        text: "I would like to check in, please.",
        phonetic: "/aɪ wʊd laɪk tuː tʃek ɪn pliːz/",
        meaning: "我想办理入住。",
        tip: "check in 连读，please 降调"
      },
      {
        text: "I would like to schedule a meeting for next Tuesday.",
        phonetic: "/aɪ wʊd laɪk tuː ˈskedʒuːl ə ˈmiːtɪŋ fɔːr nekst ˈtuːzdeɪ/",
        meaning: "我想安排下周二开个会。",
        tip: "schedule 美音 /ˈskedʒuːl/"
      },
    ],
    advanced: [
      {
        text: "Could we discuss the terms of the contract?",
        phonetic: "/kʊd wiː dɪˈskʌs ðə tɜːrmz əv ðə ˈkɑːntrækt/",
        meaning: "我们能讨论一下合同条款吗？",
        tip: "discuss 重音在第二音节"
      },
      {
        text: "What are your thoughts on this proposal?",
        phonetic: "/wɑːt ɑːr jɔːr θɔːts ɑːn ðɪs prəˈpoʊzl/",
        meaning: "你对这个提案有什么看法？",
        tip: "thoughts 的 /θ/ 咬舌"
      },
    ],
  },
  "es": {
    beginner: [
      {
        text: "Hola, ¿cómo estás?",
        phonetic: "o-la, ko-mo es-tas",
        meaning: "你好，你好吗？",
        tip: "H 不发音，estás 重音在 tas"
      },
      {
        text: "Muchas gracias.",
        phonetic: "mu-chas gra-thias",
        meaning: "非常感谢。",
        tip: "gracias 的 c 在 i 前读 th"
      },
      {
        text: "Lo siento.",
        phonetic: "lo sien-to",
        meaning: "对不起。",
        tip: "siento 重音在 sen"
      },
      {
        text: "¿Dónde está el baño?",
        phonetic: "don-de es-ta el ba-nyo",
        meaning: "洗手间在哪里？",
        tip: "baño 的 ñ 鼻音"
      },
      {
        text: "Me gustaría un café.",
        phonetic: "me gus-ta-ri-a un ka-fe",
        meaning: "我想要一杯咖啡。",
        tip: "gustaría 重音在 ri"
      },
      {
        text: "Me llamo Tomás.",
        phonetic: "me ya-mo to-mas",
        meaning: "我叫托马斯。",
        tip: "ll 读 y 音"
      },
      {
        text: "¿Cuánto cuesta?",
        phonetic: "kwan-to kwes-ta",
        meaning: "多少钱？",
        tip: "cu 读 kw"
      },
      {
        text: "Está muy delicioso.",
        phonetic: "es-ta muy de-li-thio-so",
        meaning: "很好吃。",
        tip: "c 读 th"
      },
      {
        text: "Una mesa para dos, por favor.",
        phonetic: "u-na me-sa pa-ra dos por fa-bor",
        meaning: "请给我一张两人桌。",
        tip: "por favor 重音在 bor"
      },
      {
        text: "¡Ayuda!",
        phonetic: "a-yu-da",
        meaning: "救命！",
        tip: "yu 读 u"
      },
      {
        text: "Adiós.",
        phonetic: "a-dios",
        meaning: "再见。",
        tip: "d 轻读"
      },
    ],
    intermediate: [
      {
        text: "Disculpe, ¿dónde está la parada de autobús?",
        phonetic: "dis-kul-pe, don-de es-ta la pa-ra-da de au-to-bus",
        meaning: "不好意思，公交站在哪里？",
        tip: "Disculpe 重音在 kul，autobús 重音在 bus"
      },
      {
        text: "Tengo una reserva a nombre de García.",
        phonetic: "ten-go u-na re-ser-va a nom-bre de gar-thi-a",
        meaning: "我以加西亚的名字预订了。",
        tip: "reserva 重音在 ser，García 重音在 ci"
      },
      {
        text: "¿Podría recomendarme un restaurante local?",
        phonetic: "po-dri-a re-ko-men-dar-me un res-tau-ran-te lo-kal",
        meaning: "你能推荐一家本地餐厅吗？",
        tip: "recomendarme 连读"
      },
      {
        text: "Busco la estación de metro más cercana.",
        phonetic: "bus-ko la es-ta-thion de me-tro mas ser-ka-na",
        meaning: "我在找最近的地铁站。",
        tip: "cercana 重音在 ser"
      },
      {
        text: "¿Cuánto cuesta esto?",
        phonetic: "kuan-to kues-ta es-to",
        meaning: "这个多少钱？",
        tip: "cuánto 重音在 kuan"
      },
    ],
    advanced: [
      {
        text: "¿Cuál es la mejor forma de llegar al aeropuerto?",
        phonetic: "kual es la me-khor for-ma de ye-gar al a-e-ro-puer-to",
        meaning: "去机场最好的方式是什么？",
        tip: "mejor 重音在 jor，aeropuerto 重音在 puer"
      },
      {
        text: "Quisiera hacer el check-in. Tengo una reserva para dos noches.",
        phonetic: "ki-sie-ra a-ser el chek-in. ten-go u-na re-ser-va pa-ra dos no-ches",
        meaning: "我想办理入住。我订了两晚。",
        tip: "Quisiera 重音在 sie，noches 的 ch 读 ch"
      },
      {
        text: "Me gustaría programar una reunión para el martes que viene.",
        phonetic: "me gus-ta-ri-a pro-gra-mar u-na re-u-nion pa-ra el mar-tes ke vie-ne",
        meaning: "我想安排下周二开个会。",
        tip: "reunión 重音在 ni"
      },
    ],
  },
  "fr": {
    beginner: [
      {
        text: "Bonjour, comment allez-vous?",
        phonetic: "bon-zhur, ko-mon ta-lay-vu",
        meaning: "你好，您好吗？",
        tip: "on 鼻音，ez 读 ay"
      },
      {
        text: "Merci beaucoup.",
        phonetic: "mer-see bo-ku",
        meaning: "非常感谢。",
        tip: "eu 圆唇音"
      },
      {
        text: "Pardon.",
        phonetic: "par-don",
        meaning: "对不起。",
        tip: "on 鼻音"
      },
      {
        text: "Où sont les toilettes?",
        phonetic: "u son lay twa-let",
        meaning: "洗手间在哪里？",
        tip: "Où 读 u"
      },
      {
        text: "Je voudrais une tasse de café.",
        phonetic: "zhe voo-dray un tas de ka-fay",
        meaning: "我想要一杯咖啡。",
        tip: "ai 读 ay"
      },
      {
        text: "Excusez-moi, où est la station de métro la plus proche?",
        phonetic: "ek-sky-zay-mwa, u ay la sta-syon de may-tro la plü prosh",
        meaning: "不好意思，最近的地铁站在哪里？",
        tip: "Excusez 的 ez 读 ay，proche 的 ch 读 sh"
      },
    ],
    intermediate: [
      {
        text: "Pourriez-vous me recommander un restaurant local?",
        phonetic: "pu-riay-vu me re-ko-mon-day un res-tau-ran lo-kal",
        meaning: "你能推荐一家本地餐厅吗？",
        tip: "eu 圆唇，on 鼻音"
      },
      {
        text: "Je cherche la station de métro la plus proche.",
        phonetic: "zhe kersh la sta-sion de may-tro la plü prosh",
        meaning: "我在找最近的地铁站。",
        tip: "ch 读 sh"
      },
      {
        text: "Combien ça coûte?",
        phonetic: "kon-bien sa kut",
        meaning: "这个多少钱？",
        tip: "ien 读 yen"
      },
    ],
    advanced: [
      {
        text: "Je voudrais enregistrer ma chambre. J'ai une réservation pour deux nuits.",
        phonetic: "zhe voo-dray an-ray-zhi-stray ma sham-bre. zhay un ray-zayr-va-syon pour duh nü-ee",
        meaning: "我想办理入住。我订了两晚。",
        tip: "enregistrer 读 an-ray-zhi-stray，réservation 重音在 va"
      },
      {
        text: "J'aimerais programmer une réunion pour mardi prochain.",
        phonetic: "zhe-mer-ray pro-gra-may un ray-un-yon pour mar-di pro-shen",
        meaning: "我想安排下周二开个会。",
        tip: "in 鼻音，on 鼻音"
      },
    ],
  },
  "hi": {
    beginner: [
      {
        text: "नमस्ते, आप कैसे हैं?",
        phonetic: "namas-te, aap kai-se hain?",
        meaning: "你好，您好吗？",
        tip: "नमस्ते namas-te 双手合十问候"
      },
      {
        text: "धन्यवाद।",
        phonetic: "dhun-ya-vaad",
        meaning: "谢谢。",
        tip: "धन्यवाद dhun-ya-vaad 重音在 vaad"
      },
      {
        text: "माफ़ कीजिए।",
        phonetic: "maaf kee-jie",
        meaning: "对不起。",
        tip: "माफ़ maaf 原谅，कीजिए kee-jie 敬语"
      },
    ],
    intermediate: [
      {
        text: "शौचालय कहाँ है?",
        phonetic: "shau-cha-lay ka-haan hai?",
        meaning: "洗手间在哪里？",
        tip: "शौचालय shau-cha-lay 洗手间，कहाँ ka-haan 哪里"
      },
    ],
    advanced: [
      {
        text: "कृपया, नज़दीकी मेट्रो स्टेशन किधर है?",
        phonetic: "kripa-ya, naz-dee-kee me-tro sta-shan ki-dhar hai?",
        meaning: "请问，最近的地铁站在哪里？",
        tip: "कृपया kripa-ya 请，नज़दीकी naz-dee-kee 最近的"
      },
      {
        text: "मुझे एक स्थानीय रेस्तरां सुझाइए।",
        phonetic: "muj-he ek stha-nee-ya res-ta-ran su-jhaa-ie",
        meaning: "请给我推荐一家本地餐厅。",
        tip: "स्थानीय stha-nee-ya 本地的，सुझाइए su-jhaa-ie 推荐"
      },
    ],
  },
  "it": {
    beginner: [
      {
        text: "Ciao, come stai?",
        phonetic: "cha-o, ko-may stai",
        meaning: "你好，你好吗？",
        tip: "cia 读 cha"
      },
      {
        text: "Grazie mille.",
        phonetic: "gra-tsie mil-le",
        meaning: "非常感谢。",
        tip: "zie 读 tsie"
      },
      {
        text: "Mi scusi.",
        phonetic: "mi sku-zi",
        meaning: "对不起。",
        tip: "sc 在 i 前读 sh"
      },
      {
        text: "Dov'è il bagno?",
        phonetic: "do-vay il ba-nyo",
        meaning: "洗手间在哪里？",
        tip: "gn 读 ny"
      },
      {
        text: "Vorrei una tazza di caffè.",
        phonetic: "vor-ray u-na tat-sa di kaf-fay",
        meaning: "我想要一杯咖啡。",
        tip: "zz 读 ts"
      },
    ],
    intermediate: [
      {
        text: "Potrebbe consigliarmi un ristorante locale?",
        phonetic: "po-tre-be kon-si-lyar-mi un ris-to-ran-te lo-ka-le",
        meaning: "你能推荐一家本地餐厅吗？",
        tip: "gl 读 ly"
      },
      {
        text: "Cerco la stazione della metropolitana più vicina.",
        phonetic: "cher-ko la sta-tsio-ne del-la may-tro-po-li-ta-na piu vi-chi-na",
        meaning: "我在找最近的地铁站。",
        tip: "ce 读 che"
      },
    ],
    advanced: [
      {
        text: "Quanto costa?",
        phonetic: "kwan-to kos-ta",
        meaning: "这个多少钱？",
        tip: "qu 读 kw"
      },
      {
        text: "Vorrei organizzare una riunione per martedì prossimo.",
        phonetic: "vor-ray or-ga-nit-tsa-re u-na riu-nio-ne per mar-te-di pros-si-mo",
        meaning: "我想安排下周二开个会。",
        tip: "zz 读 ts"
      },
    ],
  },
  "ja": {
    beginner: [
      {
        text: "すみません、駅へはどう行けばいいですか。",
        phonetic: "su-mi-ma-se-n, e-ki-e-wa do-u i-ke-ba i-i de-su ka",
        meaning: "不好意思，请问车站怎么走？",
        tip: "行けば 读 i-ke-ba，いい 拉长音"
      },
      {
        text: "二人用の席をお願いします。",
        phonetic: "fu-ta-ri-yo-u no se-ki wo o-ne-ga-i shi-ma-su",
        meaning: "请给我一张两人桌。",
        tip: "二人 读 fu-ta-ri，お願い 降调"
      },
      {
        text: "予約したものですが、名前は田中です。",
        phonetic: "yo-ya-ku shi-ta mo-no de-su ga, na-ma-e-wa ta-na-ka de-su",
        meaning: "我预约了，名字是田中。",
        tip: "予約 读 yo-ya-ku，もの 轻读"
      },
      {
        text: "はじめまして、よろしくお願いします。",
        phonetic: "ha-ji-me-ma-shi-te, yo-ro-shi-ku o-ne-ga-i shi-ma-su",
        meaning: "初次见面，请多关照。",
        tip: "はじめまして 读 ha-ji-me-ma-shi-te"
      },
      {
        text: "メニューをください。",
        phonetic: "me-nyu-u wo ku-da-sa-i",
        meaning: "请给我菜单。",
        tip: "メニュー 外来语，ください 降调"
      },
      {
        text: "空港へ行くには、どの電車に乗ればいいですか。",
        phonetic: "ku-u-ko-u-e i-ku-ni-wa, do-no de-n-sha ni no-re-ba i-i de-su ka",
        meaning: "去机场应该坐哪班电车？",
        tip: "空港 读 ku-u-ko-u，電車 读 de-n-sha"
      },
      {
        text: "チェックインをお願いします。二泊の予約です。",
        phonetic: "che-kku-i-n wo o-ne-ga-i shi-ma-su. ni-ha-ku no yo-ya-ku de-su",
        meaning: "请帮我办理入住。我订了两晚。",
        tip: "チェックイン 外来语，二泊 读 ni-ha-ku"
      },
      {
        text: "お忙しいところありがとうございました。また連絡させていただきます。",
        phonetic: "o-i-so-ga-shi-i to-ko-ro a-ri-ga-to-u go-za-i-ma-shi-ta. ma-ta re-n-ra-ku sa-se-te i-ta-da-ki-ma-su",
        meaning: "感谢您百忙之中抽空。我再与您联系。",
        tip: "お忙しい 读 o-i-so-ga-shi-i，連絡 读 re-n-ra-ku"
      },
      {
        text: "こんにちは。",
        phonetic: "kon-ni-chi-wa",
        meaning: "你好。",
        tip: "に 轻读，は 在这里读 wa"
      },
    ],
    intermediate: [
      {
        text: "ありがとうございます。",
        phonetic: "a-ri-ga-to-u go-za-i-ma-su",
        meaning: "谢谢。",
        tip: "ございます 的 す 要轻"
      },
      {
        text: "すみません。",
        phonetic: "su-mi-ma-se-n",
        meaning: "对不起 / 打扰一下。",
        tip: "せ 要清晰，ん 鼻音"
      },
      {
        text: "お名前は何ですか。",
        phonetic: "o-na-ma-e-wa na-n de-su ka",
        meaning: "你叫什么名字？",
        tip: "名前 读 na-ma-e"
      },
      {
        text: "駅はどこですか。",
        phonetic: "e-ki-wa do-ko de-su ka",
        meaning: "车站在哪里？",
        tip: "駅 读 e-ki，どこ 降调"
      },
    ],
    advanced: [
      {
        text: "これはいくらですか。",
        phonetic: "ko-re-wa i-ku-ra de-su ka",
        meaning: "这个多少钱？",
        tip: "いくら 重音在 ku"
      },
      {
        text: "予約をしたいです。",
        phonetic: "yo-ya-ku-o shi-ta-i de-su",
        meaning: "我想预约。",
        tip: "予約 读 yo-ya-ku"
      },
      {
        text: "会議の日程を調整したいのですが。",
        phonetic: "ka-i-gi no ni-tte-i wo cho-u-se-i shi-ta-i no de-su ga",
        meaning: "我想调整一下会议日程。",
        tip: "日程 读 ni-tte-i"
      },
    ],
  },
  "ko": {
    beginner: [
      {
        text: "안녕하세요.",
        phonetic: "an-nyeong-ha-se-yo",
        meaning: "你好。",
        tip: "안녕 连读，하세요 降调"
      },
      {
        text: "감사합니다.",
        phonetic: "gam-sa-ham-ni-da",
        meaning: "谢谢。",
        tip: "감사 重音在 gam"
      },
      {
        text: "미안합니다.",
        phonetic: "mi-an-ham-ni-da",
        meaning: "对不起。",
        tip: "미안 读 mi-an"
      },
      {
        text: "제 이름은 토마스입니다.",
        phonetic: "je i-reum-eun to-ma-seu-im-ni-da",
        meaning: "我的名字是托马斯。",
        tip: "이름 读 i-reum"
      },
      {
        text: "물 주세요.",
        phonetic: "mul ju-se-yo",
        meaning: "请给我水。",
        tip: "주세요 读 ju-se-yo"
      },
      {
        text: "얼마예요?",
        phonetic: "eol-ma-ye-yo",
        meaning: "多少钱？",
        tip: "얼마예요 升调"
      },
      {
        text: "화장실은 어디예요?",
        phonetic: "hwa-jang-si-reun eo-di-ye-yo",
        meaning: "洗手间在哪里？",
        tip: "화장실 读 hwa-jang-sil"
      },
      {
        text: "맛있어요!",
        phonetic: "ma-si-sseo-yo",
        meaning: "很好吃！",
        tip: "있 双收音"
      },
      {
        text: "도와 주세요!",
        phonetic: "do-wa ju-se-yo",
        meaning: "请帮帮我！",
        tip: "도와 读 do-wa"
      },
      {
        text: "잘 가요.",
        phonetic: "jal ga-yo",
        meaning: "再见。",
        tip: "잘 读 jal，轻音"
      },
      {
        text: "실례합니다, 지하철역이 어디에 있나요?",
        phonetic: "sil-lye-ham-ni-da, ji-ha-cheol-yeo-gi eo-di-e it-na-yo",
        meaning: "不好意思，地铁站在哪里？",
        tip: "실례합니다 读 sil-lye-ham-ni-da"
      },
      {
        text: "두 명 자리 부탁드립니다.",
        phonetic: "du myeong ja-ri bu-tak-deu-rim-ni-da",
        meaning: "请给我两人位。",
        tip: "명 读 myeong，부탁 读 bu-tak"
      },
    ],
    intermediate: [
      {
        text: "예약했는데, 이름은 김철수입니다.",
        phonetic: "ye-ya-kaet-neun-de, i-reu-meun gim-cheol-su-im-ni-da",
        meaning: "我预约了，名字是金哲洙。",
        tip: "예약 读 ye-yak，입니다 读 im-ni-da"
      },
      {
        text: "만나서 반갑습니다. 서울 지사에서 왔습니다.",
        phonetic: "man-na-seo ban-gap-seum-ni-da. seo-ul ji-sa-e-seo wat-seum-ni-da",
        meaning: "很高兴见到您。我从首尔分公司来。",
        tip: "반갑습니다 读 ban-gap-seum-ni-da"
      },
      {
        text: "역은 어디에 있어요?",
        phonetic: "yeog-eun eo-di-e i-sseo-yo",
        meaning: "车站在哪里？",
        tip: "있어요 读 i-sseo-yo"
      },
      {
        text: "이것은 얼마예요?",
        phonetic: "i-geo-seun eol-ma-ye-yo",
        meaning: "这个多少钱？",
        tip: "얼마예요 升调"
      },
      {
        text: "예약을 하고 싶어요.",
        phonetic: "ye-yag-eul ha-go si-peo-yo",
        meaning: "我想预约。",
        tip: "예약 读 ye-yak"
      },
      {
        text: "공항에 가려면 어떤 버스를 타야 하나요?",
        phonetic: "gong-hang-e ga-ryeo-myeon eo-tteon beo-seu-reul ta-ya ha-na-yo",
        meaning: "去机场应该坐哪路公交车？",
        tip: "공항 读 gong-hang，버스 外来语"
      },
    ],
    advanced: [
      {
        text: "체크인 하고 싶은데요. 이틀 예약했습니다.",
        phonetic: "che-keu-in ha-go si-peun-de-yo. i-teul ye-ya-kaet-seum-ni-da",
        meaning: "我想办理入住。我订了两天。",
        tip: "체크인 外来语，이틀 读 i-teul"
      },
      {
        text: "회의 일정을 조정하고 싶은데요.",
        phonetic: "hoe-ui il-jeong-eul jo-jeong-ha-go si-peun-de-yo",
        meaning: "我想调整一下会议日程。",
        tip: "조정 读 jo-jeong"
      },
    ],
  },
  "nl": {
    beginner: [
      {
        text: "Hallo, hoe gaat het?",
        phonetic: "ha-lo, hoo khat het?",
        meaning: "你好，你好吗？",
        tip: "Hallo ha-lo 你好，hoe gaat het hoo khat het 怎么样"
      },
      {
        text: "Hartelijk dank.",
        phonetic: "har-ter-lik dank",
        meaning: "非常感谢。",
        tip: "Hartelijk har-ter-lik 衷心的，dank dank 谢谢"
      },
      {
        text: "Het spijt me.",
        phonetic: "het spayt me",
        meaning: "对不起。",
        tip: "spijt spayt 遗憾，me me 我"
      },
    ],
    intermediate: [
      {
        text: "Waar is het toilet?",
        phonetic: "vaar is het to-let?",
        meaning: "洗手间在哪里？",
        tip: "Waar vaar 哪里，toilet to-let 洗手间"
      },
    ],
    advanced: [
      {
        text: "Pardon, waar is het dichtstbijzijnde metrostation?",
        phonetic: "par-don, vaar is het dikht-stbei-zai-ne me-tro-sta-sion?",
        meaning: "不好意思，最近的地铁站在哪里？",
        tip: "dichtstbijzijnde dikht-stbei-zai-ne 最近的，metrostation me-tro-sta-sion 地铁站"
      },
      {
        text: "Ik wil graag een tafel voor twee personen.",
        phonetic: "ik vil khraakh un ta-fel vor twey per-so-nen",
        meaning: "我想订一张两人桌。",
        tip: "graag khraakh 乐意，tafel ta-fel 桌子"
      },
    ],
  },
  "pl": {
    beginner: [
      {
        text: "Dzień dobry, jak się masz?",
        phonetic: "djen do-bri, yak she mash?",
        meaning: "你好，你好吗？",
        tip: "Dzień djen 天，dobry do-bri 好的"
      },
      {
        text: "Dziękuję bardzo.",
        phonetic: "djen-ku-ye bar-dzo",
        meaning: "非常感谢。",
        tip: "Dziękuję djen-ku-ye 谢谢，bardzo bar-dzo 非常"
      },
      {
        text: "Przepraszam.",
        phonetic: "pshe-pra-sham",
        meaning: "对不起。",
        tip: "Przepraszam pshe-pra-sham 道歉，rz 读 sh"
      },
    ],
    intermediate: [
      {
        text: "Gdzie jest toaleta?",
        phonetic: "gdje jest to-a-le-ta?",
        meaning: "洗手间在哪里？",
        tip: "Gdzie gdje 哪里，toaleta to-a-le-ta 洗手间"
      },
    ],
    advanced: [
      {
        text: "Przepraszam, gdzie jest najbliższa stacja metra?",
        phonetic: "pshe-pra-sham, gdje jest naj-bli-ža sta-tsja me-tra?",
        meaning: "不好意思，最近的地铁站在哪里？",
        tip: "najbliższa naj-bli-ža 最近的，stacja metra sta-tsja me-tra 地铁站"
      },
      {
        text: "Poproszę stolik dla dwóch osób.",
        phonetic: "po-pro-sze sto-lik dla dvo-ikh o-sob",
        meaning: "请给我一张两人桌。",
        tip: "stolik sto-lik 小桌，dla dwóch osób dla dvo-ikh o-sob 两人用"
      },
    ],
  },
  "pt": {
    beginner: [
      {
        text: "Olá, como vai?",
        phonetic: "o-la, ko-mo vai",
        meaning: "你好，你好吗？",
        tip: "Olá 重音在 la"
      },
      {
        text: "Muito obrigado.",
        phonetic: "mu-in-to o-bri-ga-do",
        meaning: "非常感谢。",
        tip: "g 读 g"
      },
      {
        text: "Desculpe.",
        phonetic: "des-kul-pe",
        meaning: "对不起。",
        tip: "cu 重读"
      },
      {
        text: "Onde fica o banheiro?",
        phonetic: "on-de fi-ka o ba-nyei-ro",
        meaning: "洗手间在哪里？",
        tip: "nh 读 ny"
      },
      {
        text: "Eu gostaria de uma xícara de café.",
        phonetic: "eu gos-ta-ri-a de u-ma shi-ka-ra de ka-fe",
        meaning: "我想要一杯咖啡。",
        tip: "x 在 i 前读 sh"
      },
    ],
    intermediate: [
      {
        text: "Você poderia me recomendar um restaurante local?",
        phonetic: "vo-se po-de-ri-a me re-ko-men-dar un res-tau-ran-te lo-kal",
        meaning: "你能推荐一家本地餐厅吗？",
        tip: "r 颤音"
      },
      {
        text: "Estou procurando a estação de metrô mais próxima.",
        phonetic: "es-tau pro-ku-ran-do a es-ta-sion de me-tro mais pro-si-ma",
        meaning: "我在找最近的地铁站。",
        tip: "ô 闭口音"
      },
    ],
    advanced: [
      {
        text: "Quanto custa isso?",
        phonetic: "kwan-to kus-ta i-so",
        meaning: "这个多少钱？",
        tip: "Qu 读 Kw"
      },
      {
        text: "Eu gostaria de marcar uma reunião para a próxima terça-feira.",
        phonetic: "eu gos-ta-ri-a de mar-kar u-ma re-u-ni-on pa-ra a pro-si-ma ter-sa-fei-ra",
        meaning: "我想安排下周二开个会。",
        tip: "ão 鼻化元音"
      },
    ],
  },
  "ru": {
    beginner: [
      {
        text: "Привет, как дела?",
        phonetic: "pri-vyet, kak de-la",
        meaning: "你好，你好吗？",
        tip: "Привет 非正式问候"
      },
      {
        text: "Спасибо большое.",
        phonetic: "spa-si-bo bol-sho-ye",
        meaning: "非常感谢。",
        tip: "бо 重读"
      },
      {
        text: "Извините.",
        phonetic: "iz-vi-ni-te",
        meaning: "对不起。",
        tip: "ви 重读"
      },
      {
        text: "Где туалет?",
        phonetic: "gdye tu-a-lyet",
        meaning: "洗手间在哪里？",
        tip: "где 重读"
      },
      {
        text: "Я хотел бы чашку кофе.",
        phonetic: "ya kho-tyel by cha-shku ko-fye",
        meaning: "我想要一杯咖啡。",
        tip: "бы 弱读"
      },
      {
        text: "Меня зовут Томас.",
        phonetic: "me-nya za-vut to-mas",
        meaning: "我叫托马斯。",
        tip: "зовут 重音在 zu"
      },
      {
        text: "Сколько стоит?",
        phonetic: "skol-ko sto-it",
        meaning: "多少钱？",
        tip: "стоит 重音在 sto"
      },
      {
        text: "Очень вкусно!",
        phonetic: "o-chen vkus-no",
        meaning: "很好吃！",
        tip: "Очень 读 o-chen"
      },
      {
        text: "Столик на двоих, пожалуйста.",
        phonetic: "sto-lik na dvo-ikh po-zha-lu-sta",
        meaning: "请给我一张两人桌。",
        tip: "пожалуйста 读 po-zha-lu-sta"
      },
      {
        text: "Помогите!",
        phonetic: "po-mo-gi-tye",
        meaning: "帮帮我！",
        tip: "ги 读 gi"
      },
      {
        text: "До свидания.",
        phonetic: "do svi-da-ni-ya",
        meaning: "再见。",
        tip: "ния 读 ni-ya"
      },
    ],
    intermediate: [
      {
        text: "Извините, где находится ближайшая остановка метро?",
        phonetic: "iz-vi-ni-tye, gdye na-kho-dit-sya bli-zhey-sha-ya o-sta-nov-ka mye-tro",
        meaning: "不好意思，最近的地铁站在哪里？",
        tip: "находится 读 na-kho-dit-sya，ближайшая 读 bli-zhey-sha-ya"
      },
      {
        text: "У меня есть бронь на имя Иванов.",
        phonetic: "u me-nya yest bron na i-mya i-va-nov",
        meaning: "我以伊万诺夫的名字预订了。",
        tip: "бронь 读 bron，Иванов 重音在 va"
      },
      {
        text: "Не могли бы вы порекомендовать местный ресторан?",
        phonetic: "nye mo-gli by vy po-rye-ko-myen-do-vat myest-ny rye-sto-ran",
        meaning: "你能推荐一家本地餐厅吗？",
        tip: "ресторан 重音在 ran"
      },
      {
        text: "Я ищу ближайшую станцию метро.",
        phonetic: "ya i-shchu bli-zhey-shu-yu sta-ntsi-yu mye-tro",
        meaning: "我在找最近的地铁站。",
        tip: "ищу 重读"
      },
      {
        text: "Сколько это стоит?",
        phonetic: "skol-ko e-ta sto-it",
        meaning: "这个多少钱？",
        tip: "ско 重读"
      },
    ],
    advanced: [
      {
        text: "Подскажите, пожалуйста, как добраться до центра города?",
        phonetic: "pod-ska-zhi-tye, po-zha-lu-sta, kak do-brat-sya do tsen-tra go-ro-da",
        meaning: "请问怎么去市中心？",
        tip: "Подскажите 读 pod-ska-zhi-tye，добраться 读 do-brat-sya"
      },
      {
        text: "Я хотел бы зарегистрироваться. У меня бронь на две ночи.",
        phonetic: "ya kho-tyel by za-rye-gi-stri-ro-vat-sya. u me-nya bron na dva no-chi",
        meaning: "我想办理入住。我订了两晚。",
        tip: "зарегистрироваться 读 za-rye-gi-stri-ro-vat-sya"
      },
      {
        text: "Я хотел бы назначить встречу на следующий вторник.",
        phonetic: "ya kho-tyel by naz-na-chit vstryechu na slye-du-yush-chiy vtor-nik",
        meaning: "我想安排下周二开个会。",
        tip: "встречу 重音在 встре"
      },
    ],
  },
  "sh": {
    beginner: [
      {
        text: "請問，地鐵站勒啥地方？",
        phonetic: "chin1 ven6, di6 thiq7 ze6 la2 sa2 ti6 faon1",
        meaning: "请问，地铁站在什么地方？",
        tip: "地鐵站 di6 thiq7 ze6，啥地方 sa2 ti6 faon1"
      },
      {
        text: "吾想辦理入住，吾訂了兩夜天。",
        phonetic: "ngu6 xian2 be6 li6 zeq5 ny6, ngu6 tin5 liau6 lian6 ya6 thi1",
        meaning: "我想办理入住，我订了两晚。",
        tip: "辦理 be6 li6，兩夜天 lian6 ya6 thi1"
      },
      {
        text: "侬好，饭吃过了伐？",
        phonetic: "non6 he5, ve6 chiq7 ku5 le6 va2",
        meaning: "你好，吃饭了吗？",
        tip: "侬 non6 你，伐 va2 疑问词"
      },
      {
        text: "谢谢侬。",
        phonetic: "zia6 zia6 non6",
        meaning: "谢谢你。",
        tip: "谢谢 zia6 zia6 感谢"
      },
    ],
    intermediate: [
      {
        text: "一杯咖啡。",
        phonetic: "yeq7 be1 ka1 fi1",
        meaning: "一杯咖啡。",
        tip: "杯 be1 杯，咖啡 ka1 fi1 外来语"
      },
      {
        text: "箇只几钿？",
        phonetic: "geq7 zaq7 ji6 di6",
        meaning: "这个多少钱？",
        tip: "箇只 geq7 zaq7 这个，几钿 ji6 di6 多少钱"
      },
    ],
    advanced: [
      {
        text: "請問，附近有啥好吃的店？",
        phonetic: "chin1 ven6, fu6 jin6 yeu6 sa2 he5 chiq7 e5 ti1",
        meaning: "请问，附近有什么好吃的店？",
        tip: "啥 sa2 什么，店 ti1"
      },
    ],
  },
  "th": {
    beginner: [
      {
        text: "ขอโทษค่ะ สถานีรถไฟฟ้าอยู่ที่ไหนคะ",
        phonetic: "kho:-thot kha, sa-tha:-ni: rot-fai-fa: yu: thi:-nai kha",
        meaning: "不好意思，请问地铁站在哪里？",
        tip: "ขอโทษ kho:-thot 升调，สถานี sa-tha:-ni:"
      },
      {
        text: "ฉันอยากเช็คอินค่ะ จองห้องไว้สองคืนค่ะ",
        phonetic: "chan ya:k chek-in kha, jo:ng ho:ng wai so:ng khu:n kha",
        meaning: "我想办理入住。我订了两晚。",
        tip: "เช็คอิน chek-in 外来语，จอง jo:ng 预订"
      },
      {
        text: "สวัสดีค่ะ คุณสบายดีไหมคะ",
        phonetic: "sa-wat-di: kha, khun sa-bai-di: mai kha",
        meaning: "你好，你好吗？",
        tip: "สวัสดี sa-wat-di: 双手合十问候"
      },
      {
        text: "ขอบคุณมากค่ะ",
        phonetic: "khop-khun maak kha",
        meaning: "非常感谢。",
        tip: "ขอบคุณ khop-khun 谢谢，มาก maak 非常"
      },
    ],
    intermediate: [
      {
        text: "ขอโทษค่ะ ห้องน้ำอยู่ที่ไหนคะ",
        phonetic: "kho:-thot kha, ho:ng-na:m yu: thi:-nai kha",
        meaning: "不好意思，洗手间在哪里？",
        tip: "ห้องน้ำ ho:ng-na:m 洗手间"
      },
      {
        text: "น้ำแก้วหนึ่งค่ะ",
        phonetic: "na:m ka:-eu nung kha",
        meaning: "请给我一杯水。",
        tip: "แก้ว ka:-eu 杯，น้ำ na:m 水"
      },
    ],
    advanced: [
      {
        text: "ร้านอาหารท้องถิ่นแนะนำหน่อยค่ะ",
        phonetic: "ra:n a-ha:n tho:ng-thin nae-nam no:i kha",
        meaning: "能推荐一家本地餐厅吗？",
        tip: "ท้องถิ่น tho:ng-thin 本地，แนะนำ nae-nam 推荐"
      },
      {
        text: "เช็คบิลให้หน่อยค่ะ",
        phonetic: "chek-bin hai no:i kha",
        meaning: "请给我账单。",
        tip: "เช็คบิล chek-bin 账单"
      },
    ],
  },
  "tr": {
    beginner: [
      {
        text: "Merhaba, nasılsınız?",
        phonetic: "mer-ha-ba, na-sil-si-niz?",
        meaning: "你好，您好吗？",
        tip: "Merhaba mer-ha-ba 问候，nasılsınız na-sil-si-niz 您好吗"
      },
      {
        text: "Çok teşekkür ederim.",
        phonetic: "chok te-she-kür e-de-rim",
        meaning: "非常感谢。",
        tip: "Çok chok 非常，teşekkür te-she-kür 感谢"
      },
      {
        text: "Özür dilerim.",
        phonetic: "ö-zür di-le-rim",
        meaning: "对不起。",
        tip: "Özür ö-zür 歉意，dilerim di-le-rim 表示"
      },
    ],
    intermediate: [
      {
        text: "Tuvalet nerede?",
        phonetic: "tu-va-let ne-re-de?",
        meaning: "洗手间在哪里？",
        tip: "Tuvalet tu-va-let 洗手间，nerede ne-re-de 在哪里"
      },
    ],
    advanced: [
      {
        text: "Affedersiniz, en yakın metro istasyonu nerede?",
        phonetic: "af-fe-der-si-niz, en ya-kın me-tro is-tas-yo-nu ne-re-de?",
        meaning: "不好意思，最近的地铁站在哪里？",
        tip: "yakın ya-kın 近，metro istasyonu me-tro is-tas-yo-nu 地铁站"
      },
      {
        text: "İki kişilik bir masa ayırtmak istiyorum.",
        phonetic: "i-ki ki-shi-lik bir ma-sa a-yirt-mak is-ti-yo-rum",
        meaning: "我想订一张两人桌。",
        tip: "kişilik ki-shi-lik 人数，ayırtmak a-yirt-mak 预订"
      },
    ],
  },
  "vi": {
    beginner: [
      {
        text: "Xin chào, bạn khỏe không?",
        phonetic: "sin chao, ban khwe khong?",
        meaning: "你好，你好吗？",
        tip: "Xin chào sin chao 问候，khỏe khwe 健康"
      },
      {
        text: "Cảm ơn rất nhiều.",
        phonetic: "kam on zat nieu",
        meaning: "非常感谢。",
        tip: "Cảm ơn kam on 谢谢，rất nhiều zat nieu 很多"
      },
      {
        text: "Xin lỗi.",
        phonetic: "sin loy",
        meaning: "对不起。",
        tip: "Xin lỗi sin loy 道歉，lỗi 读 loy"
      },
    ],
    intermediate: [
      {
        text: "Nhà vệ sinh ở đâu?",
        phonetic: "nya ve sin o dau?",
        meaning: "洗手间在哪里？",
        tip: "Nhà vệ sinh nya ve sin 洗手间，ở đâu o dau 在哪里"
      },
    ],
    advanced: [
      {
        text: "Xin lỗi, ga tàu điện ngầm gần nhất ở đâu?",
        phonetic: "sin loy, ga tau dien ngam gan nyat o dau?",
        meaning: "不好意思，最近的地铁站在哪里？",
        tip: "ga tàu điện ngầm ga tau dien ngam 地铁站，gần nhất gan nyat 最近"
      },
      {
        text: "Tôi muốn đặt bàn cho hai ngưởi.",
        phonetic: "toy mu-on dat ban cho hai nguoi",
        meaning: "我想订一张两人桌。",
        tip: "đặt bàn dat ban 订桌，hai ngưởi hai nguoi 两个人"
      },
    ],
  },
  "hak": {
    beginner: [
      {
        text: "請問，火車站佇哪仔？",
        phonetic: "ciang3 mun4, fo3 cha1 zam4 di4 nai2 er2",
        meaning: "请问，火车站在哪里？",
        tip: "火車站 fo3 cha1 zam4，哪仔 nai2 er2"
      },
      {
        text: "吾想登記入住，吾有訂兩暗日。",
        phonetic: "ngai1 siong3 den4 gi4 ngip4 cu4, ngai1 yiu4 tang4 liong3 am4 ngid4",
        meaning: "我想办理入住，我订了两晚。",
        tip: "登記 den4 gi4，兩暗日 liong3 am4 ngid4"
      },
      {
        text: "食飽吂？",
        phonetic: "shid4 bau3 mang2",
        meaning: "吃饭了吗？",
        tip: "食飽 shid4 bau3 吃饱，吂 mang2 未"
      },
      {
        text: "多謝你。",
        phonetic: "do1 cia4 ng2",
        meaning: "谢谢你。",
        tip: "多謝 do1 cia4 感谢"
      },
    ],
    intermediate: [
      {
        text: "一杯水。",
        phonetic: "yid1 bui1 shui3",
        meaning: "一杯水。",
        tip: "杯 bui1 杯，水 shui3"
      },
      {
        text: "這幾多錢？",
        phonetic: "lia4 gi2 do1 cien2",
        meaning: "这个多少钱？",
        tip: "幾多 gi2 do1 多少，錢 cien2"
      },
    ],
    advanced: [
      {
        text: "請問，附近有麼个好吃的店？",
        phonetic: "ciang3 mun4, fu4 gin4 yiu4 ma2 gai4 ho2 shid4 e4 diam4",
        meaning: "请问，附近有什么好吃的店？",
        tip: "麼个 ma2 gai4 什么，店 diam4"
      },
      {
        text: "吾想辦入住，吾訂了兩暗日。",
        phonetic: "ngai1 siong3 ban4 ngip4 cu4, ngai1 yiu4 tang4 liong3 am4 ngid4",
        meaning: "我想办入住，我订了两晚。",
        tip: "辦入住 ban4 ngip4 cu4，兩暗日 liong3 am4 ngid4"
      },
    ],
  },
  "nan": {
    beginner: [
      {
        text: "請問，捷運站佇佗位？",
        phonetic: "tshian2 bun7, tsiat8 un7 tsam7 ti7 to1 ui7",
        meaning: "请问，地铁站在哪里？",
        tip: "捷運站 tsiat8 un7 tsam7，佗位 to1 ui7"
      },
      {
        text: "我想辦理入住，我訂兩工日。",
        phonetic: "gua2 siunn2 pan7 li2 jip8 tshu3, gua2 ting7 nng7 kang7 jit8",
        meaning: "我想办理入住，我订了两天。",
        tip: "辦理 pan7 li2，兩工日 nng7 kang7 jit8"
      },
      {
        text: "食飽未？",
        phonetic: "tsiah8 pa2 be7",
        meaning: "吃饭了吗？",
        tip: "食飽 tsiah8 pa2 吃饱，未 be7 疑问词"
      },
      {
        text: "多謝。",
        phonetic: "to1 sia7",
        meaning: "谢谢。",
        tip: "多謝 to1 sia7 感谢"
      },
    ],
    intermediate: [
      {
        text: "一杯咖啡。",
        phonetic: "tsit8 pue1 ko1 pi1",
        meaning: "一杯咖啡。",
        tip: "杯 pue1 杯，咖啡 ko1 pi1 外来语"
      },
      {
        text: "這个幾箍？",
        phonetic: "tsit8 e5 kui1 khoo1",
        meaning: "这个多少钱？",
        tip: "幾箍 kui1 khoo1 多少钱"
      },
    ],
    advanced: [
      {
        text: "請問，有甚物好吃的店？",
        phonetic: "tshian2 bun7, u7 sim2 mih4 ho2 tsiah4 e5 tiam3",
        meaning: "请问，有什么好吃的店？",
        tip: "甚物 sim2 mih4 什么，好吃的店 ho2 tsiah4 e5 tiam3"
      },
      {
        text: "我欲去機場，欲按怎去？",
        phonetic: "gua2 beh4 khi3 ki1 tsiunn5, beh4 an2 tsuann2 khi3",
        meaning: "我要去机场，要怎么去？",
        tip: "按怎 an2 tsuann2 怎么"
      },
    ],
  },
  "yue": {
    beginner: [
      {
        text: "你好，食咗饭未呀？",
        phonetic: "nei5 hou2, sik6 zo2 faan6 mei6 aa3",
        meaning: "你好，吃饭了吗？",
        tip: "未 mei6 降调"
      },
      {
        text: "唔该晒。",
        phonetic: "m4 goi1 saai3",
        meaning: "非常感谢。",
        tip: "唔 m4 闭口"
      },
      {
        text: "对唔住。",
        phonetic: "deoi3 m4 zyu6",
        meaning: "对不起。",
        tip: "住 zyu6"
      },
      {
        text: "洗手间喺边度呀？",
        phonetic: "sai2 sau2 gaan1 hai2 bin1 dou6 aa3",
        meaning: "洗手间在哪里？",
        tip: "边度 bin1 dou6"
      },
      {
        text: "我想要一杯咖啡。",
        phonetic: "ngo5 soeng2 jiu3 jat1 bui1 gaa3 fe1",
        meaning: "我想要一杯咖啡。",
        tip: "咖 fe1 阴平"
      },
      {
        text: "唔該，請問地鐵站喺邊度呀？",
        phonetic: "m4 goi1, ceng2 man6 dei6 tit3 zaam6 hai2 bin1 dou6 aa3",
        meaning: "不好意思，请问地铁站在哪里？",
        tip: "地鐵站 dei6 tit3 zaam6，邊度 bin1 dou6"
      },
      {
        text: "我想預訂一間雙人房。",
        phonetic: "ngo5 soeng2 jiu6 deng6 jat1 gaan3 soeng1 jan4 fong2",
        meaning: "我想预订一间双人房。",
        tip: "預訂 jiu6 deng6，雙人房 soeng1 jan4 fong2"
      },
    ],
    intermediate: [
      {
        text: "你可唔可以介绍一间本地餐厅俾我呀？",
        phonetic: "nei5 ho2 m4 ho2 ji5 gaai3 siu3 jat1 gaan3 bun2 dei6 caan1 teng1 bei2 ngo5 aa3",
        meaning: "你能推荐一家本地餐厅吗？",
        tip: "俾 bei2 给"
      },
      {
        text: "我揾紧最近嘅地铁站。",
        phonetic: "ngo5 wan2 gan2 zeoi3 gan6 ge3 dei6 tit3 zaam6",
        meaning: "我在找最近的地铁站。",
        tip: "揾 wan2 找"
      },
      {
        text: "呢个几钱呀？",
        phonetic: "ni1 go3 gei2 cin2 aa3",
        meaning: "这个多少钱？",
        tip: "呢 ni1 这"
      },
    ],
    advanced: [
      {
        text: "請問去機場要點樣搭車呀？",
        phonetic: "ceng2 man6 heoi3 gei1 coeng4 jiu3 dim2 joeng6 daap3 ce1 aa3",
        meaning: "请问去机场要怎么坐车？",
        tip: "機場 gei1 coeng4，點樣 dim2 joeng6"
      },
      {
        text: "我想辦理入住，我訂咗兩晚。",
        phonetic: "ngo5 soeng2 baan6 lei5 jap6 zyu6, ngo5 deng6 zo2 loeng5 maan5",
        meaning: "我想办理入住，我订了两晚。",
        tip: "辦理 baan6 lei5，入住 jap6 zyu6"
      },
      {
        text: "我想安排下个礼拜二开次会议，得唔得呀？",
        phonetic: "ngo5 soeng2 on1 paai4 haa6 go3 lai1 baai3 ji6 hoi1 ci3 wui6 ji5, dak1 m4 dak1 aa3",
        meaning: "我想安排下周二开个会，可以吗？",
        tip: "礼拜 lai1 baai3 星期"
      },
    ],
  },
  "zh-CN": {
    beginner: [
      {
        text: "你好，很高兴认识你。",
        phonetic: "nǐ hǎo，hěn gāo xìng rèn shi nǐ",
        meaning: "你好，很高兴认识你。",
        tip: "你 nǐ 第三声，好 hǎo 第三声"
      },
      {
        text: "请问洗手间在哪里？",
        phonetic: "qǐng wèn xǐ shǒu jiān zài nǎ lǐ",
        meaning: "请问洗手间在哪里？",
        tip: "问 wèn 第四声"
      },
      {
        text: "我想要一杯水。",
        phonetic: "wǒ xiǎng yào yì bēi shuǐ",
        meaning: "我想要一杯水。",
        tip: "想 xiǎng 第三声"
      },
      {
        text: "这个多少钱？",
        phonetic: "zhè ge duō shǎo qián",
        meaning: "这个多少钱？",
        tip: "少 shǎo 第三声"
      },
      {
        text: "很好吃！",
        phonetic: "hěn hǎo chī",
        meaning: "很好吃！",
        tip: "吃 chī 第一声"
      },
      {
        text: "请帮我一下。",
        phonetic: "qǐng bāng wǒ yí xià",
        meaning: "请帮我一下。",
        tip: "帮 bāng 第一声"
      },
      {
        text: "谢谢你的帮助。",
        phonetic: "xiè xie nǐ de bāng zhù",
        meaning: "谢谢你的帮助。",
        tip: "谢 xiè 第四声"
      },
      {
        text: "再见，一路顺风！",
        phonetic: "zài jiàn，yí lù shùn fēng",
        meaning: "再见，一路顺风！",
        tip: "见 jiàn 第四声"
      },
      {
        text: "我迷路了。",
        phonetic: "wǒ mí lù le",
        meaning: "我迷路了。",
        tip: "迷 mí 第二声"
      },
    ],
    intermediate: [
      {
        text: "请问附近有医院吗？",
        phonetic: "qǐng wèn fù jìn yǒu yī yuàn ma",
        meaning: "请问附近有医院吗？",
        tip: "院 yuàn 第四声"
      },
      {
        text: "你能推荐一家好吃的餐厅吗？",
        phonetic: "nǐ néng tuī jiàn yì jiā hǎo chī de cān tīng ma",
        meaning: "你能推荐一家好吃的餐厅吗？",
        tip: "推荐 tuī jiàn"
      },
      {
        text: "关于这个方案，我想补充几点意见。",
        phonetic: "guān yú zhè ge fāng àn，wǒ xiǎng bǔ chōng jǐ diǎn yì jiàn",
        meaning: "关于这个方案，我想补充几点意见。",
        tip: "补充 bǔ chōng"
      },
      {
        text: "这个菜很好吃！",
        phonetic: "zhè ge cài hěn hǎo chī",
        meaning: "这个菜很好吃！",
        tip: "菜 cài 第四声"
      },
    ],
    advanced: [
      {
        text: "请问你会说英语吗？",
        phonetic: "qǐng wèn nǐ huì shuō yīng yǔ ma",
        meaning: "请问你会说英语吗？",
        tip: "英语 yīng yǔ"
      },
      {
        text: "我需要帮助。",
        phonetic: "wǒ xū yào bāng zhù",
        meaning: "我需要帮助。",
        tip: "需要 xū yào"
      },
    ],
  },
  "zh-DB": {
    beginner: [
      {
        text: "不好意思，請問火車站咋走？",
        phonetic: "bu4 hao3 yi4 si1, qing3 wen4 huo3 che1 zhan4 za3 zou3",
        meaning: "不好意思，请问火车站怎么走？",
        tip: "咋 za3 怎么，走 zou3 第三声"
      },
      {
        text: "我要辦入住，我訂了兩宿。",
        phonetic: "wo3 yao4 ban4 ru4 zhu4, wo3 ding4 le3 liang3 xiu3",
        meaning: "我要办入住，我订了两宿。",
        tip: "辦 ban4 第四声，宿 xiu3 第三声"
      },
      {
        text: "你好，吃了吗？",
        phonetic: "ni3 hao3, chi1 le3 ma1",
        meaning: "你好，吃了吗？",
        tip: "东北普通话问候"
      },
      {
        text: "谢谢啊。",
        phonetic: "xie4 xie4 a1",
        meaning: "谢谢啊。",
        tip: "啊 a1 东北语气词"
      },
    ],
    intermediate: [
      {
        text: "整杯水。",
        phonetic: "zheng3 bei1 shui3",
        meaning: "来杯水。",
        tip: "整 zheng3 东北话'弄/来'"
      },
      {
        text: "这玩意儿多钱？",
        phonetic: "zhe4 wan4 yi2 er2 duo1 qian2",
        meaning: "这个东西多少钱？",
        tip: "玩意儿 wan4 yi2 er2 东西"
      },
    ],
    advanced: [
      {
        text: "请问，这块儿有啥好吃的馆子？",
        phonetic: "qing3 wen4, zhe4 kuai4 er2 you3 sha2 hao3 chi1 de2 guan3 zi3",
        meaning: "请问，这块儿有什么好吃的馆子？",
        tip: "这块儿 zhe4 kuai4 er2 这里，馆子 guan3 zi3 餐厅"
      },
      {
        text: "我要办入住，我订了两宿。",
        phonetic: "wo3 yao4 ban4 ru4 zhu4, wo3 ding4 le3 liang3 xiu3",
        meaning: "我要办入住，我订了两宿。",
        tip: "宿 xiu3 东北话'晚'"
      },
    ],
  },
  "zh-SC": {
    beginner: [
      {
        text: "不好意思，請問地鐵站咋個走？",
        phonetic: "bu4 yi2 si1, qin3 wen4 di4 tie3 zhan4 za3 ge4 zou3",
        meaning: "不好意思，请问地铁站怎么走？",
        tip: "咋個 za3 ge4 怎么，走 zou3 第三声"
      },
      {
        text: "我要辦理入住，我訂了兩天。",
        phonetic: "ngo3 yao4 ban4 li3 ru4 zhu4, ngo3 ding4 liao3 liang3 tian1",
        meaning: "我要办理入住，我订了两天。",
        tip: "辦理 ban4 li3，訂 ding4 第四声"
      },
      {
        text: "你好，吃了没得？",
        phonetic: "ni3 hao3, chi1 liao3 mei2 de2",
        meaning: "你好，吃了吗？",
        tip: "没得 mei2 de2 没有，川话常用"
      },
      {
        text: "谢了哈。",
        phonetic: "xie4 liao3 ha1",
        meaning: "谢谢了。",
        tip: "谢了 xie4 liao3 谢谢，哈 ha1 语气词"
      },
    ],
    intermediate: [
      {
        text: "来杯水嘛。",
        phonetic: "lai2 bei1 shui3 ma1",
        meaning: "来杯水吧。",
        tip: "嘛 ma1 语气词"
      },
      {
        text: "这个好多钱哦？",
        phonetic: "zhe4 ge4 hao3 duo1 qian2 o1",
        meaning: "这个多少钱？",
        tip: "好多钱 hao3 duo1 qian2 多少钱，哦 o1 语气词"
      },
    ],
    advanced: [
      {
        text: "请问，附近有没得啥子好吃的？",
        phonetic: "qin3 wen4, fu4 jin4 you3 mei2 de2 sha3 zi3 hao3 chi1 de2",
        meaning: "请问，附近有什么好吃的？",
        tip: "没得 mei2 de2 没有，啥子 sha3 zi3 什么"
      },
      {
        text: "我要办入住，我订了两天。",
        phonetic: "ngo3 yao4 ban4 ru4 zhu4, ngo3 ding4 liao3 liang3 tian1",
        meaning: "我要办入住，我订了两天。",
        tip: "办 ru4 zhu4 入住"
      },
    ],
  },
};

// Dialogue scenarios with rule-based conversation trees
const DIALOGUE_SCENARIOS = {
  restaurant: {
    name: '餐厅点餐',
    opening: '欢迎光临！请问几位用餐？',
    turns: [
      {
        userPrompt: '请回答服务员的问候',
        expectedKeywords: ['两位', '三位', '一位', '2', '3', '1'],
        aiResponse: (input) => {
          if (/两位|2/.test(input)) return '好的，这边请。这是菜单，请问需要推荐吗？';
          if (/三位|3/.test(input)) return '好的，这边请。这是菜单，请问需要推荐吗？';
          return '好的，这边请。这是菜单，请问需要推荐吗？';
        },
        nextOptions: ['请推荐特色菜', '我自己看看', '有素食吗'],
      },
      {
        userPrompt: '你想如何回应？',
        expectedKeywords: ['推荐', '看看', '素食'],
        aiResponse: (input) => {
          if (/推荐/.test(input)) return '今天的特色菜是香煎三文鱼和松露意面，都很受欢迎。';
          if (/素食/.test(input)) return '我们有地中海蔬菜沙拉和素食意面，都很新鲜。';
          return '好的，您慢慢看，决定好了叫我。';
        },
        nextOptions: ['我要香煎三文鱼', '我要沙拉', '再来一杯红酒'],
      },
      {
        userPrompt: '你想点什么？',
        expectedKeywords: ['三文鱼', '沙拉', '红酒', '牛排'],
        aiResponse: (input) => {
          if (/三文鱼/.test(input)) return '好的，香煎三文鱼一份。请问需要配什么饮料？';
          if (/沙拉/.test(input)) return '好的，沙拉一份。请问需要配什么饮料？';
          if (/红酒/.test(input)) return '好的，我们有一款不错的赤霞珠，推荐给您。';
          return '好的，我记下了。请问还需要别的吗？';
        },
        nextOptions: ['就这些，谢谢', '再来一份甜点', '买单'],
      },
    ],
  },
  directions: {
    name: '问路导航',
    opening: '您好，请问有什么可以帮您的？',
    turns: [
      {
        userPrompt: '你想去哪里？',
        expectedKeywords: ['地铁', '车站', '机场', '酒店'],
        aiResponse: (input) => {
          if (/地铁/.test(input)) return '最近的地铁站在前面右转，步行大约5分钟。';
          if (/机场/.test(input)) return '您可以乘坐机场快线，从前面左转的车站出发。';
          if (/酒店/.test(input)) return '您订的是哪家酒店？我可以帮您查路线。';
          return '好的，请问您要去哪里？';
        },
        nextOptions: ['请问怎么走', '有出租车吗', '走路要多久'],
      },
      {
        userPrompt: '你如何继续询问？',
        expectedKeywords: ['走', '出租车', '多久'],
        aiResponse: (input) => {
          if (/出租车/.test(input)) return '前面路口有出租车停靠点，大约等5分钟。';
          if (/多久/.test(input)) return '步行大约10分钟，或者可以骑自行车，3分钟就到。';
          return '沿着这条路直走，看到红绿灯左转就到了。';
        },
        nextOptions: ['谢谢，我知道了', '还有别的路吗'],
      },
    ],
  },
  hotel: {
    name: '酒店入住',
    opening: '欢迎光临，请问有预订吗？',
    turns: [
      {
        userPrompt: '你是否有预订？',
        expectedKeywords: ['有', '预订', '没有'],
        aiResponse: (input) => {
          if (/有|预订/.test(input)) return '好的，请出示您的身份证件，我帮您办理入住。';
          return '没关系，请问您需要什么房型？我们有大床房和双床房。';
        },
        nextOptions: ['我要大床房', '我要双床房', '能看到海景吗'],
      },
      {
        userPrompt: '你想选择什么房型？',
        expectedKeywords: ['大床', '双床', '海景'],
        aiResponse: (input) => {
          if (/海景/.test(input)) return '海景房在12楼以上，每晚加收200元，您看可以吗？';
          return '好的，房间在8楼，含早餐。这是您的房卡。';
        },
        nextOptions: ['可以', '有没有更便宜的', '早餐几点开始'],
      },
    ],
  },
  business: {
    name: '商务会谈',
    opening: '感谢您抽时间见面，我们开始吧。',
    turns: [
      {
        userPrompt: '如何开场？',
        expectedKeywords: ['感谢', '合作', '开始'],
        aiResponse: (input) => {
          if (/合作/.test(input)) return '我也非常期待这次合作。请先介绍一下贵公司的方案。';
          return '不客气。那我们先听听您的想法。';
        },
        nextOptions: ['我来介绍一下', '先看数据吧', '您的预算范围是'],
      },
      {
        userPrompt: '你如何推进会议？',
        expectedKeywords: ['介绍', '数据', '预算'],
        aiResponse: (input) => {
          if (/预算/.test(input)) return '我们的预算在50万到80万之间，具体看方案内容。';
          if (/数据/.test(input)) return '好的，数据分析很重要。请展示一下关键指标。';
          return '请说，我在听。';
        },
        nextOptions: ['这是我们的方案', '下周可以签约吗', '需要修改哪里'],
      },
    ],
  },
  shopping: {
    name: '购物消费',
    opening: '欢迎光临，请问您在找什么？',
    turns: [
      {
        userPrompt: '你想买什么？',
        expectedKeywords: ['衣服', '鞋子', '包', '礼品'],
        aiResponse: (input) => {
          if (/衣服/.test(input)) return '男装在二楼，女装在三楼，当季新品在入口处。';
          if (/鞋子/.test(input)) return '运动鞋在一楼，皮鞋在二楼。';
          if (/礼品/.test(input)) return '礼品区在地下一层，有本地特色商品。';
          return '好的，请随便看看。';
        },
        nextOptions: ['这件多少钱', '可以试穿吗', '有折扣吗'],
      },
      {
        userPrompt: '你想问什么？',
        expectedKeywords: ['多少钱', '试穿', '折扣'],
        aiResponse: (input) => {
          if (/多少钱/.test(input)) return '这件原价599，现在打8折，479元。';
          if (/试穿/.test(input)) return '当然可以，试衣间在那边。';
          if (/折扣/.test(input)) return '今天全场8折，会员再享9折。';
          return '好的，还需要别的吗？';
        },
        nextOptions: ['我要这件', '我再看看', '可以退货吗'],
      },
    ],
  },
  airport: {
    name: '机场出行',
    opening: '您好，请问有什么可以帮您？',
    turns: [
      {
        userPrompt: '你需要什么帮助？',
        expectedKeywords: ['值机', '登机', '行李'],
        aiResponse: (input) => {
          if (/值机/.test(input)) return '值机柜台在A区，请出示护照和机票。';
          if (/登机/.test(input)) return '您的航班在C23登机口，请提前40分钟到达。';
          if (/行李/.test(input)) return '行李托运在B区，超重每公斤收费100元。';
          return '好的，请问还有什么需要？';
        },
        nextOptions: ['我的航班几点起飞', '安检在哪里', '有免税店吗'],
      },
      {
        userPrompt: '你还想问什么？',
        expectedKeywords: ['起飞', '安检', '免税店'],
        aiResponse: (input) => {
          if (/起飞/.test(input)) return '您的航班预计14:30起飞，目前准点。';
          if (/安检/.test(input)) return '安检在二楼，请提前准备好液体物品。';
          if (/免税店/.test(input)) return '免税店在过安检后，国际出发区域。';
          return '祝您旅途愉快！';
        },
        nextOptions: ['谢谢', '再见'],
      },
    ],
  },
};

// Merge business oral data if available
if (typeof BUSINESS_ORAL_DATA !== 'undefined') {
  Object.keys(BUSINESS_ORAL_DATA).forEach(lang => {
    if (ORAL_PRACTICE_DATA[lang] && BUSINESS_ORAL_DATA[lang].business) {
      ORAL_PRACTICE_DATA[lang].business = BUSINESS_ORAL_DATA[lang].business;
    }
  });
}

Object.assign(window, { ORAL_PRACTICE_DATA, DIALOGUE_SCENARIOS });
