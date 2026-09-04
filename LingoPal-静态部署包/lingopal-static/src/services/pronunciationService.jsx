// ========== Enhanced Pronunciation Service ==========
// Text-based pronunciation analysis with detailed word-level comparison
// and phonetic-specific feedback. Labels itself as "estimated analysis"

const PronunciationService = {
  // Levenshtein distance (same as original)
  levenshtein(a, b) {
    const matrix = [];
    for (let i = 0; i <= b.length; i++) matrix[i] = [i];
    for (let j = 0; j <= a.length; j++) matrix[0][j] = j;
    for (let i = 1; i <= b.length; i++) {
      for (let j = 1; j <= a.length; j++) {
        matrix[i][j] = b.charAt(i - 1) === a.charAt(j - 1)
          ? matrix[i - 1][j - 1]
          : Math.min(matrix[i - 1][j - 1] + 1, Math.min(matrix[i][j - 1] + 1, matrix[i - 1][j] + 1));
      }
    }
    return matrix[b.length][a.length];
  },

  // Longest Common Subsequence for better alignment
  lcs(a, b) {
    const m = a.length, n = b.length;
    const dp = Array(m + 1).fill(null).map(() => Array(n + 1).fill(0));
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (a[i - 1] === b[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1] + 1;
        } else {
          dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
      }
    }
    return dp[m][n];
  },

  // Main scoring function - enhanced version
  calculateScore(target, recognized, language = 'en') {
    if (!recognized || !target) {
      return {
        total: 0,
        details: {},
        wordAnalysis: [],
        tips: [],
        isEstimate: true,
      };
    }

    const t = target.toLowerCase().trim();
    const r = recognized.toLowerCase().trim();

    // 1. Levenshtein similarity (0-100)
    const dist = this.levenshtein(t, r);
    const maxLen = Math.max(t.length, r.length);
    const levenshteinScore = maxLen === 0 ? 100 : Math.round(((maxLen - dist) / maxLen) * 100);

    // 2. Character-level accuracy
    const targetChars = t.replace(/\s/g, '').split('');
    const recogChars = r.replace(/\s/g, '').split('');
    let charMatches = 0;
    const minCharLen = Math.min(targetChars.length, recogChars.length);
    for (let i = 0; i < minCharLen; i++) {
      if (targetChars[i] === recogChars[i]) charMatches++;
    }
    const charAccuracy = targetChars.length === 0 ? 0 : Math.round((charMatches / targetChars.length) * 100);

    // 3. Word-level accuracy with alignment
    const targetWords = t.split(/\s+/).filter(w => w);
    const recogWords = r.split(/\s+/).filter(w => w);
    const wordAnalysis = this._analyzeWords(targetWords, recogWords);
    const wordAccuracy = targetWords.length === 0 ? 0 :
      Math.round((wordAnalysis.filter(w => w.status === 'correct').length / targetWords.length) * 100);

    // 4. LCS-based continuity score
    const lcsLen = this.lcs(targetChars, recogChars);
    const continuityScore = targetChars.length === 0 ? 0 :
      Math.round((lcsLen / targetChars.length) * 100);

    // Combined score (weighted)
    const total = Math.round(
      levenshteinScore * 0.30 +
      charAccuracy * 0.20 +
      wordAccuracy * 0.25 +
      continuityScore * 0.25
    );

    // Generate detailed tips
    const tips = this._generateDetailedTips(wordAnalysis, total, language);

    return {
      total: Math.min(100, Math.max(0, total)),
      details: {
        levenshtein: levenshteinScore,
        charAccuracy,
        wordAccuracy,
        continuityScore,
        recognizedText: r,
        targetText: t,
      },
      wordAnalysis,
      tips,
      isEstimate: true,
    };
  },

  // Word-by-word alignment analysis
  _analyzeWords(targetWords, recogWords) {
    const analysis = [];
    const usedRecog = new Set();

    for (let i = 0; i < targetWords.length; i++) {
      const tw = targetWords[i];
      let bestMatch = { idx: -1, dist: Infinity };

      // Find best matching recognized word within window
      for (let j = Math.max(0, i - 1); j < Math.min(recogWords.length, i + 2); j++) {
        if (usedRecog.has(j)) continue;
        const rw = recogWords[j];
        const d = this.levenshtein(tw, rw);
        if (d < bestMatch.dist) {
          bestMatch = { idx: j, dist: d };
        }
      }

      if (bestMatch.idx >= 0) {
        const rw = recogWords[bestMatch.idx];
        const maxLen = Math.max(tw.length, rw.length);
        const similarity = maxLen === 0 ? 100 : Math.round(((maxLen - bestMatch.dist) / maxLen) * 100);

        let status = 'incorrect';
        if (tw === rw) status = 'correct';
        else if (similarity >= 80) status = 'close';
        else if (similarity >= 50) status = 'partial';

        usedRecog.add(bestMatch.idx);

        analysis.push({
          targetWord: tw,
          recognizedWord: rw,
          status,
          similarity,
          position: i,
        });
      } else {
        analysis.push({
          targetWord: tw,
          recognizedWord: null,
          status: 'missing',
          similarity: 0,
          position: i,
        });
      }
    }

    // Add extra words
    for (let j = 0; j < recogWords.length; j++) {
      if (!usedRecog.has(j)) {
        analysis.push({
          targetWord: null,
          recognizedWord: recogWords[j],
          status: 'extra',
          similarity: 0,
          position: -1,
        });
      }
    }

    return analysis;
  },

  // Generate detailed pronunciation tips
  _generateDetailedTips(wordAnalysis, totalScore, language) {
    const tips = [];

    if (totalScore >= 90) {
      tips.push({ type: 'success', text: '发音很棒！整体流畅度很高。' });
    } else if (totalScore >= 70) {
      tips.push({ type: 'info', text: '整体不错，个别词需要再练习。' });
    } else if (totalScore >= 50) {
      tips.push({ type: 'warning', text: '发音有进步空间，建议重点练习标记的词。' });
    } else {
      tips.push({ type: 'error', text: '建议先听标准发音，放慢语速逐词模仿。' });
    }

    // Analyze specific errors
    const incorrectWords = wordAnalysis.filter(w => w.status === 'incorrect' || w.status === 'partial');
    const missingWords = wordAnalysis.filter(w => w.status === 'missing');
    const closeWords = wordAnalysis.filter(w => w.status === 'close');

    if (closeWords.length > 0) {
      const words = closeWords.map(w => `「${w.targetWord}」`).slice(0, 3);
      tips.push({
        type: 'info',
        text: `${words.join('、')} 发音接近但不够准确，注意尾音清晰度。`,
      });
    }

    if (incorrectWords.length > 0) {
      for (const w of incorrectWords.slice(0, 2)) {
        const phoneticTip = this._getPhoneticTip(w.targetWord, w.recognizedWord, language);
        if (phoneticTip) {
          tips.push({ type: 'warning', text: phoneticTip });
        }
      }
    }

    if (missingWords.length > 0) {
      const words = missingWords.map(w => `「${w.targetWord}」`).slice(0, 3);
      tips.push({
        type: 'warning',
        text: `${words.join('、')} 未被识别到，可能是发音过轻或漏读。`,
      });
    }

    // General tips based on pattern
    if (incorrectWords.length >= 3) {
      tips.push({
        type: 'info',
        text: '建议：1) 放慢语速，逐个词清晰发音；2) 注意元音饱满度；3) 区分相似辅音。',
      });
    }

    return tips;
  },

  // Get specific phonetic tip for a word
  _getPhoneticTip(targetWord, recognizedWord, language) {
    if (language !== 'en' || !recognizedWord) return null;

    const target = targetWord.toLowerCase();
    const recog = recognizedWord.toLowerCase();

    // Check for common pronunciation errors
    const tips = PHONETIC_TIPS[target];
    if (tips) {
      return `「${targetWord}」${tips}`;
    }

    // Check character-level differences
    if (target.length > 0 && recog.length > 0) {
      // Missing final consonant
      if (target.slice(-1) !== recog.slice(-1) && /[tdksz]/.test(target.slice(-1))) {
        return `「${targetWord}」注意尾音 /${target.slice(-1)}/ 要清晰发出。`;
      }

      // Missing initial consonant
      if (target[0] !== recog[0]) {
        const initial = target[0];
        if (initial === 't') return `「${targetWord}」注意开头 /t/ 是清辅音，舌尖抵上齿龈。`;
        if (initial === 'd') return `「${targetWord}」注意开头 /d/ 是浊辅音，声带要振动。`;
        if (initial === 's') return `「${targetWord}」注意开头 /s/ 要送气清晰。`;
        if (initial === 'r') return `「${targetWord}」注意 /r/ 是卷舌音，舌尖不要接触上颚。`;
        if (initial === 'l') return `「${targetWord}」注意 /l/ 舌尖抵上齿龈。`;
        if (initial === 'v') return `「${targetWord}」注意 /v/ 上齿轻触下唇。`;
        if (initial === 'w') return `「${targetWord}」注意 /w/ 嘴唇收圆。`;
      }

      // Vowel confusion
      if (target.includes('th') && !recog.includes('th')) {
        return `「${targetWord}」注意 th 咬舌音，舌尖轻触上下齿。`;
      }
      if (target.includes('sh') && !recog.includes('sh')) {
        return `「${targetWord}」注意 /ʃ/ 音，嘴唇微收圆。`;
      }
      if (target.includes('ch') && !recog.includes('ch')) {
        return `「${targetWord}」注意 /tʃ/ 音，类似"吃"的起始音。`;
      }
    }

    return `「${targetWord}」发音识别为「${recognizedWord}」，注意对比标准发音。`;
  },

  // Get color for score display
  getScoreColor(score) {
    if (score >= 90) return 'text-emerald-500';
    if (score >= 70) return 'text-amber-500';
    if (score >= 50) return 'text-orange-500';
    return 'text-red-500';
  },

  getScoreBg(score) {
    if (score >= 90) return 'bg-emerald-50 border-emerald-200';
    if (score >= 70) return 'bg-amber-50 border-amber-200';
    if (score >= 50) return 'bg-orange-50 border-orange-200';
    return 'bg-red-50 border-red-200';
  },

  getWordStatusColor(status) {
    switch (status) {
      case 'correct': return 'text-emerald-600';
      case 'close': return 'text-amber-600';
      case 'partial': return 'text-orange-600';
      case 'incorrect': return 'text-red-600';
      case 'missing': return 'text-slate-400 line-through';
      case 'extra': return 'text-blue-500';
      default: return 'text-slate-600';
    }
  },

  getWordStatusLabel(status) {
    switch (status) {
      case 'correct': return '准确';
      case 'close': return '接近';
      case 'partial': return '部分';
      case 'incorrect': return '不准';
      case 'missing': return '漏读';
      case 'extra': return '多余';
      default: return '';
    }
  },
};

// Common phonetic tips for English words
const PHONETIC_TIPS = {
  'hello': '注意 /h/ 轻读，/ə/ 是弱读的 schwa 音。',
  'thank': '注意 th 咬舌音 /θ/，不要读成 /s/ 或 /f/。',
  'you': '注意 /juː/，嘴唇微微收圆。',
  'please': '注意 /pl/ 连读，尾音 /z/ 要清晰。',
  'sorry': '注意 /ɒ/ 音嘴巴张大，/r/ 卷舌。',
  'restaurant': '注意美式发音 /ˈrestərɑːnt/，重音在第一音节。',
  'coffee': '注意 /ˈkɔːfi/，重音在第一音节，尾音轻读。',
  'bathroom': '注意 /ˈbæθruːm/，th 咬舌，/r/ 卷舌。',
  'recommend': '注意 /ˌrekəˈmend/，重音在第三音节。',
  'bathroom?': '注意 /ˈbæθruːm/，th 咬舌，/r/ 卷舌。',
  'hotel': '注意 /hoʊˈtel/，重音在第二音节。',
  'subway': '注意 /ˈsʌbweɪ/，重音在第一音节。',
  'directions': '注意 /dɪˈrekʃnz/，/r/ 卷舌，/ʃ/ 嘴唇微收圆。',
  'schedule': '注意美式发音 /ˈskedʒuːl/，/k/ 后接 /e/。',
  'meeting': '注意 /ˈmiːtɪŋ/，长音 /iː/，尾音 /ŋ/ 鼻音。',
  'contract': '注意 /ˈkɑːntrækt/，重音在第一音节。',
  'proposal': '注意 /prəˈpoʊzl/，重音在第二音节。',
  'vegetarian': '注意 /ˌvedʒəˈteriən/，重音在第三音节。',
  'discount': '注意 /ˈdɪskaʊnt/，/aʊ/ 双元音嘴巴张大。',
};

Object.assign(window, { PronunciationService });
