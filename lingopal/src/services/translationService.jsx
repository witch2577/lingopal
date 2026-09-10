// ========== Translation Service ==========
// Local dictionary + rule-based dialect + MyMemory API with fallback

const TranslationService = {
  _dailyCount: 0,
  _failStreak: 0,
  _maxDaily: 800,
  _circuitBreakerThreshold: 3,

  async translate(text, sourceLang, targetLang) {
    if (!text || !text.trim()) return { translatedText: '', isLocalDict: true, confidence: 0 };

    const trimmed = text.trim();

    // Step 1: try smart dialect translation (includes local dict + rules)
    if (sourceLang !== 'auto') {
      const dialectResult = dialectTranslate(trimmed, sourceLang, targetLang);
      if (dialectResult.confidence > 0) {
        const alts = getAlternatives(trimmed, sourceLang, targetLang);
        return {
          translatedText: dialectResult.text,
          isLocalDict: true,
          confidence: dialectResult.confidence,
          isRuleBased: dialectResult.isRuleBased,
          alternatives: alts.length > 0 ? alts : undefined,
          note: dialectResult.note,
        };
      }
    }

    // Step 2: dialects to non-zh-CN standard langs: pre-translate dialect->zh-CN then API
    if (DIALECT_CODES.includes(sourceLang) && targetLang !== 'zh-CN' && targetLang !== 'auto') {
      const pre = dialectTranslate(trimmed, sourceLang, 'zh-CN');
      if (pre.confidence > 0) {
        // chain to API with pre-translated text
        const apiResult = await this._callMyMemory(pre.text, 'zh-CN', targetLang);
        return {
          ...apiResult,
          translatedText: apiResult.translatedText,
          confidence: apiResult.confidence * pre.confidence,
          note: `方言→普通话→${LANGUAGE_MAP[targetLang]?.name || targetLang}（演示数据）`,
          isDialectChain: true,
        };
      }
      // If dialect pre-translation fails, show clear fallback
      return {
        translatedText: `${trimmed}（方言翻译暂不支持此内容，请尝试常用短句）`,
        isLocalDict: true,
        confidence: 0.2,
        isUnsupported: true,
      };
    }

    // Step 3: target is dialect but source is standard lang -> no API, use rules
    if (DIALECT_CODES.includes(targetLang) && !DIALECT_CODES.includes(sourceLang)) {
      const dialectResult = dialectTranslate(trimmed, 'zh-CN', targetLang);
      if (dialectResult.confidence > 0) {
        return {
          translatedText: dialectResult.text,
          isLocalDict: true,
          confidence: dialectResult.confidence,
          isRuleBased: true,
          note: '基于规则映射（演示数据）',
        };
      }
      return {
        translatedText: `${trimmed}（${LANGUAGE_MAP[targetLang]?.name || targetLang}规则翻译暂不支持）`,
        isLocalDict: true,
        confidence: 0.2,
        isUnsupported: true,
      };
    }

    // Step 4: 离线模式下直接走本地词典降级
    if (typeof navigator !== 'undefined' && !navigator.onLine) {
      return this._offlineFallback(trimmed, sourceLang, targetLang);
    }

    // Step 5: MyMemory API for standard language pairs
    return this._callMyMemory(trimmed, sourceLang, targetLang);
  },

  _detectLang(text) {
    if (/[\u4e00-\u9fff]/.test(text)) return 'zh-CN';
    if (/[\u3040-\u30ff]/.test(text)) return 'ja';
    if (/[\uac00-\ud7af]/.test(text)) return 'ko';
    if (/[\u0400-\u04ff]/.test(text)) return 'ru';
    return 'en';
  },

  async _callMyMemory(text, sourceLang, targetLang) {
    if (this._failStreak >= this._circuitBreakerThreshold) {
      return {
        translatedText: text,
        isLocalDict: true,
        confidence: 0,
        isFallback: true,
        note: '翻译服务暂不可用，已为你显示原文',
      };
    }

    // Check Supabase quota if configured
    if (IS_SUPABASE_CONFIGURED && window.useAuthStore) {
      try {
        const quotaResult = await useAuthStore.getState().consumeQuota('translation');
        const quotaAllowed = quotaResult.allowed || !!quotaResult.localMode;
        if (!quotaAllowed) {
          this._failStreak++;
          return {
            translatedText: text,
            isLocalDict: true,
            confidence: 0,
            isFallback: true,
            note: '额度检查失败，已为你显示原文',
          };
        }
      } catch (e) {
        // Fail closed: quota check errors block translation
        this._failStreak++;
        console.warn('[TranslationService] quota check failed:', e);
        return {
          translatedText: text,
          isLocalDict: true,
          confidence: 0,
          isFallback: true,
          note: '额度检查失败，已为你显示原文',
        };
      }
    }

    if (this._dailyCount >= this._maxDaily) {
      return {
        translatedText: text,
        isLocalDict: true,
        confidence: 0,
        isFallback: true,
        note: '今日翻译额度已用完，已为你显示原文',
      };
    }

    try {
      const detectedLang = sourceLang === 'auto' ? this._detectLang(text) : undefined;
      const src = sourceLang === 'auto' ? detectedLang : sourceLang;
      const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=${src}|${targetLang}`;

      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000);

      const resp = await fetch(url, { signal: controller.signal });
      clearTimeout(timeoutId);

      if (!resp.ok) throw new Error('API error');

      const data = await resp.json();
      const responseData = data?.responseData || {};
      const translated = responseData.translatedText || '';
      const detected = responseData.detectedLanguage || '';

      // Check for API failure / quota exhaustion / invalid response
      const responseStatus = responseData.responseStatus;
      const isWarning = /^MYMEMORY WARNING/i.test(translated);
      const isInvalid = /INVALID/i.test(translated);
      if (responseStatus !== 200 || isWarning || isInvalid) {
        throw new Error('API quota exhausted or invalid response');
      }

      // Confidence scale compatibility: MyMemory match is 0–1, but some responses may use 0–100
      const m = Number(responseData.match);
      const confidence = m > 1 ? m / 100 : (m > 0 ? m : 0.8);

      this._dailyCount++;
      this._failStreak = 0;

      return {
        translatedText: translated,
        detectedLang: detected || detectedLang || undefined,
        isLocalDict: false,
        confidence,
      };
    } catch (e) {
      this._failStreak++;
      console.warn('Translation API failed:', e.message);
      return {
        translatedText: text,
        isLocalDict: true,
        confidence: 0.3,
        isFallback: true,
        note: '今日在线翻译免费额度已用完，将于明日自动重置；已为你显示原文',
      };
    }
  },

  _mockTranslate(text, src, tgt) {
    return `[离线模式] ${text}`;
  },

  // 离线降级：优先查本地词典，否则给出友好提示
  _offlineFallback(text, sourceLang, targetLang) {
    // 尝试本地词典精确匹配
    const dictResult = this._lookupLocalDict(text, sourceLang, targetLang);
    if (dictResult) {
      return {
        translatedText: dictResult,
        isLocalDict: true,
        confidence: 0.85,
        isOffline: true,
        note: '离线模式 · 本地词典',
      };
    }
    // 无匹配时返回友好提示
    const tgtName = LANGUAGE_MAP[targetLang]?.name || targetLang;
    return {
      translatedText: text,
      isLocalDict: true,
      confidence: 0.3,
      isOffline: true,
      isFallback: true,
      note: `离线模式 · 暂无「${tgtName}」翻译结果，请联网后重试`,
    };
  },

  // 本地词典查找（基于已有的 dictionary.jsx 数据）
  _lookupLocalDict(text, sourceLang, targetLang) {
    if (typeof window.LOCAL_DICT === 'undefined') return null;
    const key = text.toLowerCase();
    // 查双语词典
    if (window.LOCAL_DICT[sourceLang]?.[targetLang]?.[key]) {
      return window.LOCAL_DICT[sourceLang][targetLang][key];
    }
    if (window.LOCAL_DICT[targetLang]?.[sourceLang]?.[key]) {
      return window.LOCAL_DICT[targetLang][sourceLang][key];
    }
    return null;
  },

  resetDaily() {
    this._dailyCount = 0;
    this._failStreak = 0;
  },
};

Object.assign(window, { TranslationService });
