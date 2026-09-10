// ========== Link Import ==========
// Paste video/music links, parse via Edge Function, enter learning loop

const LinkImport = ({ onBack, onMaterialParsed, typeHint }) => {
  const [url, setUrl] = useState('');
  const [isParsing, setIsParsing] = useState(false);
  const [error, setError] = useState(null);
  const [detectedPlatform, setDetectedPlatform] = useState(null);
  const [showManualPaste, setShowManualPaste] = useState(false);
  const [manualText, setManualText] = useState('');
  const [manualTitle, setManualTitle] = useState('');
  const [manualType, setManualType] = useState(typeHint || 'video');
  const { isMobile } = useMobileDetect();

  // Platform detection regex (mirrors Edge Function)
  const detectPlatform = (input) => {
    const u = input.trim();
    if (/youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\//.test(u)) return { platform: 'youtube', name: 'YouTube', icon: '📺', color: 'bg-red-50 text-red-600' };
    if (/bilibili\.com\/video\/BV|b23\.tv\/BV/.test(u)) return { platform: 'bilibili', name: 'Bilibili', icon: '📺', color: 'bg-pink-50 text-pink-600' };
    if (/open\.spotify\.com\/(track|album)/.test(u)) return { platform: 'spotify', name: 'Spotify', icon: '🎵', color: 'bg-green-50 text-green-600' };
    if (/music\.apple\.com/.test(u)) return { platform: 'apple_music', name: 'Apple Music', icon: '🎵', color: 'bg-rose-50 text-rose-600' };
    if (/lrclib\.net/.test(u)) return { platform: 'lrclib', name: 'LRCLIB', icon: '🎵', color: 'bg-slate-50 text-slate-600' };
    return null;
  };

  useEffect(() => {
    setDetectedPlatform(detectPlatform(url));
  }, [url]);

  const handleParse = async () => {
    if (!url.trim()) return;

    // Pre-check: must be logged in
    const sb = getSupabaseClient();
    let session = null;
    if (sb) {
      const { data } = await sb.auth.getSession();
      session = data?.session;
    }
    if (!session) {
      setError({
        type: 'unauthorized',
        title: '请先登录',
        detail: '链接解析需要登录后才能使用。请登录或注册账号后继续。',
        fallback: { available: ['login'] },
      });
      return;
    }

    setIsParsing(true);
    setError(null);

    try {
      const targetLang = useLearningStore.getState().currentLanguage || 'en';
      const res = await fetch(`${SUPABASE_URL}/functions/v1/link-parser`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session.access_token}`,
        },
        body: JSON.stringify({ url: url.trim(), type_hint: typeHint, target_language: targetLang }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        const errType = data.type || '';
        const errTitle = data.title || '解析失败';
        const errDetail = data.detail || '无法解析该链接';
        const fallback = data.fallback || {};

        if (res.status === 401 || errType.includes('unauthorized')) {
          setError({ type: 'unauthorized', title: '登录已过期', detail: '请重新登录后再试', fallback: { available: ['login'] } });
        } else if (errType.includes('unsupported-platform')) {
          setError({ type: 'unsupported', title: errTitle, detail: errDetail, fallback });
        } else if (errType.includes('subtitle-unavailable')) {
          setError({ type: 'no-subtitles', title: errTitle, detail: errDetail, fallback });
        } else if (errType.includes('subtitle-extraction-failed')) {
          setError({ type: 'extract-fail', title: errTitle, detail: errDetail, fallback });
        } else if (errType.includes('quota-exceeded')) {
          setError({ type: 'quota', title: errTitle, detail: errDetail, fallback });
        } else {
          setError({ type: 'unknown', title: errTitle, detail: errDetail, fallback });
        }
        setIsParsing(false);
        return;
      }

      if (data.ok && data.data) {
        onMaterialParsed && onMaterialParsed(data.data);
      } else {
        setError({ type: 'unknown', title: '解析异常', detail: '返回数据格式不正确' });
      }
    } catch (e) {
      console.error('[LinkImport] parse error:', e);
      setError({ type: 'network', title: '网络错误', detail: '连接解析服务失败，请检查网络后重试', fallback: { available: ['retry', 'manual_paste'] } });
    } finally {
      setIsParsing(false);
    }
  };

  const handleManualGenerate = () => {
    if (!manualText.trim() || !manualTitle.trim()) return;
    const targetLang = useLearningStore.getState().currentLanguage || 'en';
    const lines = manualText.split('\n').filter(l => l.trim()).map((text, i) => ({
      index: i,
      start_time: i * 3,
      end_time: (i + 1) * 3,
      original_text: text.trim(),
      translated_text: '',
      explanation: '',
      keywords: [],
    }));

    // Auto-generate fill blanks for music
    const allWords = manualText.toLowerCase().match(/[a-z\u4e00-\u9fa5]+/g) || [];
    const uniqueWords = [...new Set(allWords)].filter(w => w.length >= 4);
    const fillBlanks = uniqueWords.slice(0, 3).map((word, i) => {
      const lineIndex = Math.min(i, lines.length - 1);
      const lineWords = lines[lineIndex].original_text.split(' ');
      const blankIndex = lineWords.findIndex(w => w.toLowerCase().includes(word));
      return {
        lineIndex,
        blankIndex: blankIndex >= 0 ? blankIndex : 0,
        answer: word,
        hint: word.replace(/[aeiou\u4e00-\u9fa5]/g, '_'),
      };
    });

    const material = {
      material_id: 'manual-' + Date.now(),
      status: 'parsed',
      metadata: {
        title: manualTitle,
        duration_seconds: 0,
        language_detected: targetLang,
        target_language: 'zh-CN',
      },
      segments: lines,
      quiz: [],
      source_type: manualType,
      platform: 'manual',
      fillBlanks: fillBlanks.filter(f => f.answer),
    };
    onMaterialParsed && onMaterialParsed(material);
  };

  if (showManualPaste) {
    return (
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-2 mb-3">
          <button onClick={() => { setShowManualPaste(false); setError(null); }} className="p-2 rounded-xl hover:bg-slate-100">
            <Icon name="arrow-left" size={18} className="text-slate-500" />
          </button>
          <h2 className="text-sm font-bold text-slate-800">手动导入</h2>
        </div>

        <div className="p-3 rounded-xl bg-amber-50 border border-amber-100 mb-3">
          <div className="flex items-start gap-2">
            <Icon name="alert-circle" size={14} className="text-amber-500 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-amber-700 leading-relaxed">
              <strong>⚠️ 版权提示：</strong>请仅导入你有权使用的内容。所有导入内容仅用于个人学习，不会公开分享。
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3 flex-1">
          <div>
            <label className="text-xs font-medium text-slate-600 mb-1 block">内容类型</label>
            <div className="flex gap-2">
              <button
                onClick={() => setManualType('video')}
                className={`flex-1 py-2 rounded-xl text-xs font-medium transition-all ${manualType === 'video' ? 'bg-brand-100 text-brand-700' : 'bg-slate-50 text-slate-500'}`}
              >
                影视字幕
              </button>
              <button
                onClick={() => setManualType('music')}
                className={`flex-1 py-2 rounded-xl text-xs font-medium transition-all ${manualType === 'music' ? 'bg-brand-100 text-brand-700' : 'bg-slate-50 text-slate-500'}`}
              >
                音乐歌词
              </button>
            </div>
          </div>

          <div>
            <label className="text-xs font-medium text-slate-600 mb-1 block">标题</label>
            <input
              type="text"
              value={manualTitle}
              onChange={e => setManualTitle(e.target.value)}
              placeholder="输入内容标题"
              className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-brand-400 focus:outline-none"
            />
          </div>

          <div className="flex-1 flex flex-col">
            <label className="text-xs font-medium text-slate-600 mb-1 block">
              {manualType === 'video' ? '字幕文本（每行一句）' : '歌词文本（每行一句）'}
            </label>
            <textarea
              value={manualText}
              onChange={e => setManualText(e.target.value)}
              placeholder={manualType === 'video' ? '在此粘贴字幕文本...' : '在此粘贴歌词文本...'}
              className="flex-1 w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-brand-400 focus:outline-none resize-none"
            />
          </div>

          <button
            onClick={handleManualGenerate}
            disabled={!manualText.trim() || !manualTitle.trim()}
            className="w-full py-3 rounded-xl bg-brand-500 text-white text-sm font-medium hover:bg-brand-600 transition-colors disabled:opacity-40"
          >
            生成学习材料
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-2 mb-3">
        <button onClick={onBack} className="p-2 rounded-xl hover:bg-slate-100">
          <Icon name="arrow-left" size={18} className="text-slate-500" />
        </button>
        <h2 className="text-sm font-bold text-slate-800">
          {typeHint === 'music' ? '导入音乐/MV' : '导入视频字幕'}
        </h2>
      </div>

      {/* Copyright notice */}
      <div className="p-3 rounded-xl bg-amber-50 border border-amber-100 mb-3">
        <div className="flex items-start gap-2">
          <Icon name="alert-circle" size={14} className="text-amber-500 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-amber-700 leading-relaxed">
            <strong>⚠️ 版权提示：</strong>请仅导入公开可访问的内容链接。所有内容仅用于个人学习，不存储原始音视频文件。
          </p>
        </div>
      </div>

      {/* URL Input */}
      <div className="flex flex-col gap-3 flex-1">
        <div>
          <label className="text-xs font-medium text-slate-600 mb-1 block">粘贴链接</label>
          <div className="relative">
            <input
              type="text"
              value={url}
              onChange={e => setUrl(e.target.value)}
              placeholder={typeHint === 'music' ? 'Spotify / Apple Music / LRCLIB 链接...' : 'YouTube / Bilibili 视频链接...'}
              className="w-full px-3 py-2.5 pr-10 rounded-xl border border-slate-200 text-sm focus:border-brand-400 focus:outline-none"
            />
            {detectedPlatform && (
              <span className={`absolute right-2 top-1/2 -translate-y-1/2 text-[10px] px-2 py-0.5 rounded-full font-medium ${detectedPlatform.color}`}>
                {detectedPlatform.icon} {detectedPlatform.name}
              </span>
            )}
          </div>
          <p className="text-[10px] text-slate-400 mt-1">
            支持：YouTube、Bilibili{ typeHint === 'music' ? '、Spotify、Apple Music、LRCLIB' : '' }
          </p>
        </div>

        {/* Error display */}
        {error && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-3 rounded-xl bg-red-50 border border-red-100"
          >
            <div className="flex items-start gap-2">
              <Icon name="alert-triangle" size={14} className="text-red-500 flex-shrink-0 mt-0.5" />
              <div className="flex-1">
                <p className="text-xs font-medium text-red-700">{error.title}</p>
                <p className="text-xs text-red-600 mt-0.5">{error.detail}</p>
                <div className="flex gap-2 mt-2">
                  {error.fallback?.available?.includes('login') && (
                    <button
                      onClick={() => window.navigateTo && window.navigateTo('/auth')}
                      className="px-3 py-1.5 rounded-lg bg-brand-500 text-white text-xs font-medium hover:bg-brand-600 transition-colors"
                    >
                      去登录
                    </button>
                  )}
                  {error.fallback?.available?.includes('retry') && (
                    <button
                      onClick={handleParse}
                      className="px-3 py-1.5 rounded-lg bg-red-100 text-red-700 text-xs font-medium hover:bg-red-200 transition-colors"
                    >
                      重试
                    </button>
                  )}
                  {error.fallback?.available?.includes('manual_paste') && (
                    <button
                      onClick={() => setShowManualPaste(true)}
                      className="px-3 py-1.5 rounded-lg bg-brand-100 text-brand-700 text-xs font-medium hover:bg-brand-200 transition-colors"
                    >
                      手动粘贴
                    </button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        <div className="flex-1" />

        {/* Action buttons */}
        <div className="flex flex-col gap-2">
          <button
            onClick={handleParse}
            disabled={!url.trim() || isParsing}
            className="w-full py-3 rounded-xl bg-brand-500 text-white text-sm font-medium hover:bg-brand-600 transition-colors disabled:opacity-40 flex items-center justify-center gap-2"
          >
            {isParsing ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                正在解析字幕...
              </>
            ) : (
              <>
                <Icon name="link" size={16} />
                解析链接
              </>
            )}
          </button>
          <button
            onClick={() => setShowManualPaste(true)}
            className="w-full py-2.5 rounded-xl bg-slate-50 text-slate-600 text-xs font-medium hover:bg-slate-100 transition-colors"
          >
            手动粘贴字幕/歌词
          </button>
        </div>
      </div>
    </div>
  );
};

Object.assign(window, { LinkImport });
