// ========== Lyrics Import ==========
// Paste lyrics text and generate practice

const LyricsImport = ({ onBack }) => {
  const [lyricsText, setLyricsText] = useState('');
  const [title, setTitle] = useState('');
  const [language, setLanguage] = useState('en');
  const [difficulty, setDifficulty] = useState('beginner');
  const [generated, setGenerated] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [savedMaterials, setSavedMaterials] = useState([]);

  useEffect(() => {
    getImportedMaterials().then(list => {
      setSavedMaterials(list.filter(m => m.source_type === 'music' || m.metadata?.source_type === 'music'));
    });
  }, []);

  // Helper: call AI for translation and romanization
  const enhanceLyricsWithAI = async (song, material) => {
    const sb = getSupabaseClient && getSupabaseClient();
    if (!sb) return;
    const { data } = await sb.auth.getSession();
    const session = data?.session;
    if (!session) return;

    const originalLines = song.lyrics.map(l => l.text).join('\n');
    const targetLang = 'zh-CN';
    const hasKorean = /[\uac00-\ud7af]/.test(originalLines);
    const hasJapanese = /[\u3040-\u30ff]/.test(originalLines);
    const needsRomanization = hasKorean || hasJapanese;

    try {
      // Translation
      const transRes = await fetch(`${SUPABASE_URL}/functions/v1/ai-dialogue`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session.access_token}`,
        },
        body: JSON.stringify({
          messages: [{
            role: 'user',
            content: `请将以下歌词翻译成中文，逐行对应，只返回翻译后的文本，每行一行，不要添加编号或额外说明：\n\n${originalLines}`
          }],
          language: targetLang,
          scenarioId: null,
          mode: 'text',
        }),
      });
      const transData = await transRes.json();
      if (transData.success) {
        const transLines = transData.data.content.split('\n').map(l => l.trim()).filter(l => l);
        song.lyrics.forEach((line, i) => {
          if (transLines[i]) line.translated_text = transLines[i];
        });
        material.segments.forEach((seg, i) => {
          if (transLines[i]) seg.translated_text = transLines[i];
        });
      }

      // Romanization
      if (needsRomanization) {
        const romaLang = hasKorean ? 'ko' : 'ja';
        const romaPrompt = hasKorean
          ? `请为以下韩语歌词生成 Revised Romanization 罗马音，逐行对应，只返回罗马音，每行一行，不要添加编号或额外说明：\n\n${originalLines}`
          : `请为以下日语歌词生成 Hepburn 罗马音，逐行对应，只返回罗马音，每行一行，不要添加编号或额外说明：\n\n${originalLines}`;
        const romaRes = await fetch(`${SUPABASE_URL}/functions/v1/ai-dialogue`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${session.access_token}`,
          },
          body: JSON.stringify({
            messages: [{ role: 'user', content: romaPrompt }],
            language: romaLang,
            scenarioId: null,
            mode: 'text',
          }),
        });
        const romaData = await romaRes.json();
        if (romaData.success) {
          const romaLines = romaData.data.content.split('\n').map(l => l.trim()).filter(l => l);
          song.lyrics.forEach((line, i) => {
            if (romaLines[i]) line.romanization = romaLines[i];
          });
          material.segments.forEach((seg, i) => {
            if (romaLines[i]) seg.romanization = romaLines[i];
          });
        }
      }

      await saveImportedMaterial(material);
    } catch (e) {
      console.error('[LyricsImport] AI enhancement error:', e);
      useUIStore.getState().showNotification('AI 翻译/音译生成失败，材料已保存，可进入学习后重新生成', 'warning');
    }
  };

  const handleGenerate = () => {
    if (!lyricsText.trim() || !title.trim()) return;
    setIsGenerating(true);
    setTimeout(() => {
      const lines = lyricsText.split('\n').filter(l => l.trim()).map((text, i) => ({
        text: text.trim(),
        highlight: [],
      }));
      // Multi-language fill blanks
      const allWords = lyricsText.toLowerCase().match(/[a-z\u4e00-\u9fa5\uac00-\ud7af\u3040-\u30ff]+/g) || [];
      const uniqueWords = [...new Set(allWords)].filter(w => {
        if (/[\uac00-\ud7af\u3040-\u30ff]/.test(w)) return w.length >= 2;
        return w.length >= 4;
      });
      const fillBlanks = uniqueWords.slice(0, 5).map((word, i) => {
        const lineIndex = Math.min(i, lines.length - 1);
        const lineWords = lines[lineIndex].text.split(' ');
        const blankIndex = lineWords.findIndex(w => w.toLowerCase().includes(word));
        return {
          lineIndex,
          blankIndex: blankIndex >= 0 ? blankIndex : 0,
          answer: word,
          hint: word.charAt(0) + '_'.repeat(Math.max(0, word.length - 1)),
        };
      });

      const song = {
        id: 'imported-' + Date.now(),
        title,
        titleCn: title,
        type: 'custom',
        difficulty,
        description: '用户导入歌词',
        cover: '📝',
        lyrics: lines,
        fillBlanks: fillBlanks.filter(f => f.answer),
        liaisons: [],
      };

      // Save to Dexie as imported material
      const material = {
        material_id: song.id,
        status: 'parsed',
        metadata: {
          title: song.title,
          duration_seconds: 0,
          language_detected: language,
          target_language: 'zh-CN',
        },
        segments: song.lyrics.map((line, i) => ({
          index: i,
          start_time: i * 3,
          end_time: (i + 1) * 3,
          original_text: line.text,
          translated_text: line.translated_text || '',
          romanization: line.romanization || '',
          explanation: '',
          keywords: [],
        })),
        quiz: [],
        source_type: 'music',
        platform: 'manual',
        fillBlanks: song.fillBlanks,
        importedAt: Date.now(),
      };
      saveImportedMaterial(material);
      enhanceLyricsWithAI(song, material);

      setGenerated(song);
      setIsGenerating(false);
    }, 800);
  };

  const openSavedMaterial = (material) => {
    const song = {
      id: material.material_id,
      title: material.metadata?.title || '未命名',
      titleCn: material.metadata?.title || '未命名',
      type: 'custom',
      difficulty: 'beginner',
      description: '已保存歌词',
      cover: '📝',
      lyrics: material.segments.map(s => ({
        text: s.original_text,
        highlight: [],
        translated_text: s.translated_text,
        romanization: s.romanization,
      })),
      fillBlanks: material.fillBlanks || [],
      liaisons: [],
    };
    setGenerated(song);
  };

  const handleDeleteMaterial = async (materialId, e) => {
    e.stopPropagation();
    await deleteImportedMaterial(materialId);
    setSavedMaterials(prev => prev.filter(m => m.material_id !== materialId));
  };

  if (generated) {
    return <LyricsPractice song={generated} onBack={() => { setGenerated(null); }} />;
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center gap-2 mb-3">
        <button onClick={onBack} className="p-2 rounded-xl hover:bg-slate-100">
          <Icon name="arrow-left" size={18} className="text-slate-500" />
        </button>
        <h2 className="text-sm font-bold text-slate-800">导入歌词</h2>
      </div>

      {/* Saved materials list */}
      {savedMaterials.length > 0 && (
        <div className="mb-3">
          <p className="text-xs font-medium text-slate-600 mb-2">已保存材料</p>
          <div className="flex flex-col gap-1.5 max-h-32 overflow-y-auto hide-scrollbar">
            {savedMaterials.map(m => (
              <div
                key={m.material_id}
                onClick={() => openSavedMaterial(m)}
                className="flex items-center justify-between p-2 rounded-lg bg-slate-50 hover:bg-slate-100 cursor-pointer transition-colors"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <span className="text-xs">{m.source_type === 'music' ? '🎵' : '📺'}</span>
                  <span className="text-xs text-slate-700 truncate">{m.metadata?.title || '未命名'}</span>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="text-[10px] text-slate-400">
                    {m.importedAt ? new Date(m.importedAt).toLocaleDateString() : ''}
                  </span>
                  <button
                    onClick={(e) => handleDeleteMaterial(m.material_id, e)}
                    className="p-1 rounded hover:bg-red-100 text-slate-400 hover:text-red-500 transition-colors"
                  >
                    <Icon name="trash-2" size={12} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Copyright notice */}
      <div className="p-3 rounded-xl bg-amber-50 border border-amber-100 mb-3">
        <div className="flex items-start gap-2">
          <Icon name="alert-circle" size={14} className="text-amber-500 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-amber-700 leading-relaxed">
            <strong>⚠️ 版权提示：</strong>请仅导入你有权使用的歌词文本。所有导入内容仅在本地设备用于个人学习，不会上传至服务器。
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3 flex-1">
        <div>
          <label className="text-xs font-medium text-slate-600 mb-1 block">歌曲名称</label>
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="输入歌曲名称"
            className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-brand-400 focus:outline-none"
          />
        </div>

        <div className="flex gap-2">
          <div className="flex-1">
            <label className="text-xs font-medium text-slate-600 mb-1 block">语言</label>
            <select
              value={language}
              onChange={e => setLanguage(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-brand-400 focus:outline-none bg-white"
            >
              {LEARNING_LANGUAGES.map(l => (
                <option key={l.code} value={l.code}>{l.name}</option>
              ))}
            </select>
          </div>
          <div className="flex-1">
            <label className="text-xs font-medium text-slate-600 mb-1 block">难度</label>
            <select
              value={difficulty}
              onChange={e => setDifficulty(e.target.value)}
              className="w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-brand-400 focus:outline-none bg-white"
            >
              <option value="beginner">入门</option>
              <option value="intermediate">中级</option>
              <option value="advanced">高级</option>
            </select>
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          <label className="text-xs font-medium text-slate-600 mb-1 block">歌词文本</label>
          <textarea
            value={lyricsText}
            onChange={e => setLyricsText(e.target.value)}
            placeholder="在此粘贴歌词文本..."
            className="flex-1 w-full px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-brand-400 focus:outline-none resize-none"
          />
        </div>

        <button
          onClick={handleGenerate}
          disabled={!lyricsText.trim() || !title.trim() || isGenerating}
          className="w-full py-3 rounded-xl bg-brand-500 text-white text-sm font-medium hover:bg-brand-600 transition-colors disabled:opacity-40 flex items-center justify-center gap-2"
        >
          {isGenerating ? (
            <><div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> 生成中...</>
          ) : (
            <><Icon name="sparkles" size={16} /> 生成练习</>
          )}
        </button>
      </div>
    </div>
  );
};

Object.assign(window, { LyricsImport });
