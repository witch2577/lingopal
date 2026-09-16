// ========== CharacterInteractions ==========
// Stage-aware dialogue pools for 3 hotzones + rapid-click special.
// Cooldown system, rapid-click tracker, placeholder resolution.

const CharacterInteractions = (function() {
  const STAGE_NAMES = ['婴儿期', '幼儿期', '少儿期', '成年期'];

  const HOTZONES = {
    HEAD: 'head',
    FACE: 'face',
    BODY: 'body',
  };

  // Dialogue pools per hotzone per stage (0-based stage index)
  // Placeholders: {name} = character name, {address} = user nickname/location
  const DIALOGUE_POOLS = {
    [HOTZONES.HEAD]: [
      // 婴儿期
      ['{name}，摸头会长不高的哦~', '咿呀~ {name} 的脑袋被摸啦~', '（眯眼）{name} 好舒服呀~'],
      // 幼儿期
      ['{name}，头发会乱掉的啦！', '嘿嘿，{name} 被摸头了呢~', '（害羞）{name} 会不好意思的~'],
      // 少儿期
      ['{name}，发型可是很重要的！', '哼，{name} 才不是小孩子呢~', '（脸红）{name} 的头发很软对吧~'],
      // 成年期
      ['{name}，温柔一点嘛~', '（微笑）{name} 喜欢你这样~', '{name} 今天也想被你摸摸头~'],
    ],
    [HOTZONES.FACE]: [
      // 婴儿期
      ['呜，{name} 的脸要被戳扁了！', '咿？{name} 的脸蛋软软的对吧~', '（嘟嘴）{name} 不开心了~'],
      // 幼儿期
      ['{name} 的脸不是面团啦！', '（嘟嘴）{name} 会生气的哦~', '嘿嘿，{name} 的脸蛋弹弹的~'],
      // 少儿期
      ['{name} 的脸……不要一直戳啦！', '（扭头）{name} 才不想被捏脸呢~', '{name} 的脸都红了……'],
      // 成年期
      ['{name}，你这样很犯规的……', '（轻笑）{name} 的脸只有你能碰~', '{name} 的脸颊在发烫呢~'],
    ],
    [HOTZONES.BODY]: [
      // 婴儿期
      ['{name} 今天也想陪你学习呢~', '咿呀~ {name} 被拍了一下~', '{name} 要抱抱~'],
      // 幼儿期
      ['{name} 会好好努力的！', '（挺胸）{name} 很强壮哦~', '{name} 今天也元气满满~'],
      // 少儿期
      ['{name} 的身体可不是随便能拍的哦~', '（叉腰）{name} 在学习呢，别闹~', '{name} 会保护你的~'],
      // 成年期
      ['{name} 会一直陪着你的~', '（张开双臂）{name} 给你充充电~', '{name} 在 {address} 也要加油哦~'],
    ],
  };

  // Special rapid-click dialogues (per stage)
  const RAPID_POOLS = [
    ['{name} 转圈圈~ 咿呀咿呀~', '{name} 头晕啦~', '（倒地装死）{name} 被玩坏了~'],
    ['{name} 在 {address} 也要温柔一点呀~', '转圈圈~ {name} 要飞起来啦~', '{name} 投降投降~'],
    ['{name} 被你玩坏了啦！', '（转圈）{name} 是陀螺吗！', '{name} 在 {address} 温柔一点嘛~'],
    ['{name} 真是拿你没办法~', '（无奈笑）{name} 陪你闹吧~', '{name} 在 {address} 也要开心哦~'],
  ];

  // Cooldown per hotzone (ms)
  const COOLDOWN_MS = 5000;
  // Rapid click window and threshold
  const RAPID_WINDOW_MS = 3000;
  const RAPID_THRESHOLD = 5;

  // In-memory cooldown map: hotzone -> lastTriggerTime
  const _cooldowns = {};
  // Rapid click tracker: hotzone -> { clicks: number, firstTime: number }
  const _rapid = {};

  function _getStageIndex(stageOrGrowth) {
    if (typeof stageOrGrowth === 'number') return Math.max(0, Math.min(3, stageOrGrowth - 1));
    // stageOrGrowth may be growth object
    const stage = stageOrGrowth?.currentStage || 1;
    return Math.max(0, Math.min(3, stage - 1));
  }

  function _resolve(template, name, address) {
    return template.replace(/\{name\}/g, name || '小语伴').replace(/\{address\}/g, address || '这里');
  }

  function _rand(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  return {
    HOTZONES,

    /**
     * Get a dialogue line for a hotzone interaction.
     * @param {string} hotzone - 'head'|'face'|'body'
     * @param {number|object} stageOrGrowth - stage number (1-4) or growth object
     * @param {string} name - character name
     * @param {string} address - user nickname / location placeholder
     * @returns {string} resolved dialogue
     */
    getDialogue(hotzone, stageOrGrowth, name, address) {
      const stageIdx = _getStageIndex(stageOrGrowth);
      const pool = DIALOGUE_POOLS[hotzone];
      if (!pool || !pool[stageIdx]) return _resolve('{name}~', name, address);
      const line = _rand(pool[stageIdx]);
      return _resolve(line, name, address);
    },

    /**
     * Get a rapid-click special dialogue.
     */
    getRapidDialogue(stageOrGrowth, name, address) {
      const stageIdx = _getStageIndex(stageOrGrowth);
      const pool = RAPID_POOLS[stageIdx];
      if (!pool) return _resolve('{name} 被你玩坏啦~', name, address);
      return _resolve(_rand(pool), name, address);
    },

    /**
     * Check if a hotzone is on cooldown.
     */
    isOnCooldown(hotzone) {
      const last = _cooldowns[hotzone];
      if (!last) return false;
      return Date.now() - last < COOLDOWN_MS;
    },

    /**
     * Record a cooldown for a hotzone.
     */
    recordCooldown(hotzone) {
      _cooldowns[hotzone] = Date.now();
    },

    /**
     * Track a click for rapid-click detection.
     * @returns {boolean} true if rapid-click threshold reached
     */
    trackRapidClick(hotzone) {
      const now = Date.now();
      if (!_rapid[hotzone] || now - _rapid[hotzone].firstTime > RAPID_WINDOW_MS) {
        _rapid[hotzone] = { clicks: 1, firstTime: now };
        return false;
      }
      _rapid[hotzone].clicks += 1;
      if (_rapid[hotzone].clicks >= RAPID_THRESHOLD) {
        _rapid[hotzone] = { clicks: 0, firstTime: 0 }; // reset
        return true;
      }
      return false;
    },

    /**
     * Get animation class name for a hotzone interaction.
     */
    getAnimationClass(hotzone, isRapid) {
      if (isRapid) return 'interact-rapid';
      return 'interact-' + hotzone;
    },

    STAGE_NAMES,
  };
})();
