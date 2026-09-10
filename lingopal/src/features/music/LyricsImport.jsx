// ========== Lyrics Import ==========
// Paste lyrics text and generate practice

const LyricsImport = ({ onBack }) => {
  const [lyricsText, setLyricsText] = useState('');
  const [title, setTitle] = useState('');
  const [language, setLanguage] = useState('en');
  const [difficulty, setDifficulty] = useState('beginner');
  const [generated, setGenerated] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    if (!lyricsText.trim() || !title.trim()) return;
    setIsGenerating(true);
    // Simulate generation delay
    setTimeout(() => {
      const lines = lyricsText.split('\n').filter(l => l.trim()).map((text, i) => ({
        text: text.trim(),
        highlight: [],
      }));
      // Simple auto-generate fill blanks: pick longer words
      const allWords = lyricsText.toLowerCase().match(/[a-z\u4e00-\u9fa5]+/g) || [];
      const uniqueWords = [...new Set(allWords)].filter(w => w.length >= 4);
      const fillBlanks = uniqueWords.slice(0, 3).map((word, i) => {
        const lineIndex = Math.min(i, lines.length - 1);
        const lineWords = lines[lineIndex].text.split(' ');
        const blankIndex = lineWords.findIndex(w => w.toLowerCase().includes(word));
        return {
          lineIndex,
          blankIndex: blankIndex >= 0 ? blankIndex : 0,
          answer: word,
          hint: word.replace(/[aeiou\u4e00-\u9fa5]/g, '_'),
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
      setGenerated(song);
      setIsGenerating(false);
    }, 800);
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
