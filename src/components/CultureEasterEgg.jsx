// ========== CultureEasterEgg ==========
// Flip-card cultural trivia triggered when per-language study time reaches threshold.
// Collection page for unlocked eggs. LocalStorage-based tracking.

const { useState, useEffect, useCallback, useMemo } = React;

// --- Data pools ---
const CULTURE_EGG_POOLS = {
  ja: {
    name: '日语',
    theme: '和风节气',
    cards: [
      { title: '立春·七草粥', content: '日本立春有喝七草粥的习俗，七种春季野菜煮成稀粥，寓意祛病消灾、迎接新春。' },
      { title: '夏至·鲤鱼旗', content: '日本男孩节（5月5日）会悬挂鲤鱼旗，寓意孩子像鲤鱼一样勇敢跃过龙门、茁壮成长。' },
      { title: '花见·赏樱', content: '日本花见文化始于奈良时代，最初赏梅，平安时代转为赏樱。樱花七日，短暂而绚烂。' },
    ],
  },
  fr: {
    name: '法语',
    theme: '巴黎冷知识',
    cards: [
      { title: '埃菲尔铁塔会「长高」', content: '夏天高温时，埃菲尔铁塔因热胀冷缩可「长高」约15厘米，真是会呼吸的铁塔呢~' },
      { title: '法棍的「保护法」', content: '法国法律规定，传统法棍只能由面粉、水、盐和酵母四种原料制成，真是对面包的极致尊重！' },
      { title: '巴黎的「地下城」', content: '巴黎地下墓穴安葬着约600万具遗骸，隧道总长达300公里，是名副其实的地下世界。' },
    ],
  },
  en: {
    name: '英语',
    theme: '英伦趣闻',
    cards: [
      { title: '英国人的茶缘', content: '英国人每天平均喝3杯茶，全国每年消耗约600亿杯茶，茶 truly 是英国的国民饮料~' },
      { title: '世界最早的地铁', content: '伦敦地铁第一条线路 Metropolitan Line 建于1863年，是世界上最早的地下铁路系统。' },
      { title: '大本钟不是塔名', content: '大家常说的「大本钟」其实是钟的名字，塔楼正式名称是「伊丽莎白塔」，2012年为纪念女王登基钻石禧年更名。' },
    ],
  },
  ko: {
    name: '韩语',
    theme: '首尔风情',
    cards: [
      { title: '韩屋的暖炕', content: '传统韩屋的「温突」（暖炕）利用厨房炊烟加热地板，冬天整个房间都暖烘烘的~' },
      { title: '首尔塔的爱心锁', content: 'N首尔塔的爱情锁墙是情侣们的朝圣地，据说挂上同心锁就能锁住爱情，现在已有超过10万把锁！' },
      { title: '泡菜冰箱', content: '韩国有专门存放泡菜的「泡菜冰箱」，能精准控制温度和湿度，让泡菜保持在最佳发酵状态。' },
    ],
  },
  es: {
    name: '西班牙语',
    theme: '拉美色彩',
    cards: [
      { title: '墨西哥亡灵节', content: '11月1-2日的亡灵节是墨西哥最重要的节日，人们用万寿菊铺满道路，相信逝者会循着花香归来。' },
      { title: '阿根廷的探戈', content: '探戈诞生于19世纪末的布宜诺斯艾利斯港口区，融合了非洲、欧洲和拉丁美洲的音乐元素。' },
      { title: '西班牙的午睡文化', content: '西班牙传统午休「Siesta」通常在下午2-5点，商店关门、街道安静，是逃离炎热的好方式~' },
    ],
  },
};

const THRESHOLD_MINUTES = 60;
const LS_PREFIX = 'lp_culture_egg_';
const LS_MINUTES = 'lp_culture_minutes_v1';

// --- Helpers ---
function _getMinutesKey() {
  try {
    const raw = localStorage.getItem(LS_MINUTES);
    return raw ? JSON.parse(raw) : {};
  } catch (e) { return {}; }
}

function _saveMinutesKey(data) {
  try { localStorage.setItem(LS_MINUTES, JSON.stringify(data)); } catch (e) {}
}

function _getTriggerKey(lang, index) {
  try {
    return localStorage.getItem(LS_PREFIX + lang + '_' + index) === '1';
  } catch (e) { return false; }
}

function _setTriggerKey(lang, index) {
  try { localStorage.setItem(LS_PREFIX + lang + '_' + index, '1'); } catch (e) {}
}

function _getUnlocked() {
  const unlocked = [];
  Object.keys(CULTURE_EGG_POOLS).forEach(lang => {
    const pool = CULTURE_EGG_POOLS[lang];
    pool.cards.forEach((card, idx) => {
      if (_getTriggerKey(lang, idx)) {
        unlocked.push({ lang, index: idx, ...card, theme: pool.theme, langName: pool.name });
      }
    });
  });
  return unlocked;
}

function _checkTrigger(lang) {
  const mins = _getMinutesKey();
  const total = mins[lang] || 0;
  if (total < THRESHOLD_MINUTES) return null;
  const pool = CULTURE_EGG_POOLS[lang];
  if (!pool) return null;
  // Find first untriggered card
  for (let i = 0; i < pool.cards.length; i++) {
    if (!_getTriggerKey(lang, i)) {
      _setTriggerKey(lang, i);
      return { lang, index: i, ...pool.cards[i], theme: pool.theme, langName: pool.name };
    }
  }
  return null;
}

// --- Components ---

const CultureEasterEggTrigger = ({ egg, characterName, userNickname, onDismiss }) => {
  const [flipped, setFlipped] = useState(false);
  if (!egg) return null;

  const name = characterName || '小语伴';
  const address = userNickname || '这里';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" onClick={() => { if (flipped) { onDismiss && onDismiss(); } }}>
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-fade-in" />
      <div className="relative z-10 flex flex-col items-center gap-4 px-6 max-w-xs w-full">
        {/* Character line */}
        <div className="text-center animate-slide-up">
          <p className="text-white text-sm font-medium">
            {name}，你在 {address} 学{egg.langName}很努力呢！送你一个小知识~
          </p>
        </div>

        {/* Flip card */}
        <div
          className="relative w-full aspect-[3/4] cursor-pointer perspective-1000"
          onClick={(e) => { e.stopPropagation(); setFlipped(!flipped); }}
        >
          <div className={`relative w-full h-full transition-transform duration-700 preserve-3d ${flipped ? 'rotate-y-180' : ''}`}>
            {/* Front */}
            <div className="absolute inset-0 backface-hidden rounded-2xl shadow-2xl overflow-hidden bg-white">
              <div className="h-2/3 bg-gradient-to-br from-brand-400 to-purple-500 flex items-center justify-center">
                <span className="text-6xl">🎁</span>
              </div>
              <div className="h-1/3 p-4 flex flex-col justify-center">
                <span className="text-xs text-brand-500 font-bold">{egg.theme}</span>
                <span className="text-sm font-bold text-slate-800 mt-1">{egg.title}</span>
                <span className="text-xs text-slate-400 mt-1">点击翻转查看</span>
              </div>
            </div>
            {/* Back */}
            <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl shadow-2xl overflow-hidden bg-white p-5 flex flex-col justify-center">
              <span className="text-xs text-brand-500 font-bold">{egg.theme}</span>
              <h4 className="text-base font-bold text-slate-800 mt-2">{egg.title}</h4>
              <p className="text-sm text-slate-600 mt-3 leading-relaxed">{egg.content}</p>
              <div className="mt-4 text-center">
                <span className="text-xs text-slate-400">点击任意处关闭</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CultureCollection = ({ onBack }) => {
  const [selected, setSelected] = useState(null);
  const unlocked = useMemo(() => _getUnlocked(), []);

  const grouped = useMemo(() => {
    const g = {};
    unlocked.forEach(u => {
      if (!g[u.lang]) g[u.lang] = { langName: u.langName, theme: u.theme, cards: [] };
      g[u.lang].cards.push(u);
    });
    return g;
  }, [unlocked]);

  return (
    <div className="flex flex-col gap-4 min-h-full pb-safe">
      <div className="flex items-center gap-3">
        <button onClick={onBack} className="p-2 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors touch-target">
          <Icon name="chevron-left" size={20} />
        </button>
        <h2 className="text-lg font-bold text-slate-800">文化收藏</h2>
      </div>

      {unlocked.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-4xl mb-3">📚</div>
          <p className="text-sm text-slate-500">还没有解锁任何文化彩蛋</p>
          <p className="text-xs text-slate-400 mt-1">继续学习，累计60分钟即可解锁~</p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {Object.keys(grouped).map(lang => (
            <div key={lang}>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-bold text-slate-700">{grouped[lang].langName}</span>
                <span className="text-xs text-slate-400">{grouped[lang].theme}</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {grouped[lang].cards.map((card, i) => (
                  <button
                    key={i}
                    onClick={() => setSelected(card)}
                    className="p-3 bg-white rounded-xl border border-slate-100 shadow-sm text-left hover:shadow-md transition-shadow"
                  >
                    <div className="text-2xl mb-2">🎴</div>
                    <div className="text-xs font-bold text-slate-700 line-clamp-1">{card.title}</div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Detail modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center" onClick={() => setSelected(null)}>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
          <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-6 max-w-xs w-full mx-4" onClick={e => e.stopPropagation()}>
            <span className="text-xs text-brand-500 font-bold">{selected.theme}</span>
            <h4 className="text-base font-bold text-slate-800 mt-2">{selected.title}</h4>
            <p className="text-sm text-slate-600 mt-3 leading-relaxed">{selected.content}</p>
            <button onClick={() => setSelected(null)} className="mt-4 w-full py-2.5 rounded-xl bg-slate-100 text-slate-600 text-sm font-semibold hover:bg-slate-200 transition-colors">
              知道了
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// --- Global API ---
const CultureEggs = {
  pools: CULTURE_EGG_POOLS,
  THRESHOLD_MINUTES,

  /**
   * Accumulate study minutes for a language.
   * Call this after completing a learning activity.
   */
  accumulateLanguageMinutes(lang, minutes) {
    if (!lang || !minutes || minutes <= 0) return;
    const data = _getMinutesKey();
    data[lang] = (data[lang] || 0) + minutes;
    _saveMinutesKey(data);
  },

  /**
   * Check if any new egg should trigger. Returns the egg object or null.
   * Call when entering character page.
   */
  checkTrigger(lang) {
    return _checkTrigger(lang);
  },

  /**
   * Check all languages for triggers. Returns array of egg objects.
   */
  checkAllTriggers(languages) {
    const results = [];
    (languages || Object.keys(CULTURE_EGG_POOLS)).forEach(lang => {
      const egg = _checkTrigger(lang);
      if (egg) results.push(egg);
    });
    return results;
  },

  getUnlocked() {
    return _getUnlocked();
  },

  getMinutes(lang) {
    const data = _getMinutesKey();
    return data[lang] || 0;
  },

  // Component references for global access
  CultureEasterEggTrigger,
  CultureCollection,
};
