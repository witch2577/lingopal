// ========== Language Selector Component ==========

const LanguageSelector = ({
  value,
  onChange,
  label,
  showAuto = true,
  showDialects = true,
  className = '',
}) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentLang = LANGUAGE_MAP[value] || LANGUAGES[0];

  const filteredLangs = LANGUAGES.filter(l => {
    if (l.code === 'auto' && !showAuto) return false;
    if (l.type === 'dialect' && !showDialects) return false;
    return true;
  });

  const autoLang = filteredLangs.find(l => l.code === 'auto');
  const standardLangs = filteredLangs.filter(l => l.type === 'standard');
  const betaLangs = filteredLangs.filter(l => l.type === 'beta');
  const dialectLangs = filteredLangs.filter(l => l.type === 'dialect');

  // Group beta languages by region
  const betaGroups = [
    { key: 'europe', label: '欧洲', langs: betaLangs.filter(l => l.region === 'europe') },
    { key: 'middle-east', label: '中东', langs: betaLangs.filter(l => l.region === 'middle-east') },
    { key: 'south-asia', label: '南亚', langs: betaLangs.filter(l => l.region === 'south-asia') },
  ].filter(g => g.langs.length > 0);

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleSelect = (code) => {
    onChange(code);
    setOpen(false);
  };

  const renderLangItem = (lang) => (
    <button
      key={lang.code}
      onClick={() => handleSelect(lang.code)}
      className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors touch-target ${
        value === lang.code
          ? 'bg-brand-50 text-brand-700'
          : 'hover:bg-slate-50 text-slate-700'
      }`}
    >
      <span className="text-xl">{lang.flag}</span>
      <div className="flex items-center gap-2 flex-1">
        <span className="text-sm font-medium">{lang.name}</span>
        {lang.type === 'beta' && (
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-100 text-amber-700 font-medium">Beta</span>
        )}
      </div>
      {value === lang.code && <Icon name="check" size={16} className="ml-auto text-brand-500" />}
    </button>
  );

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors btn-press touch-target w-full"
      >
        <span className="text-lg">{currentLang.flag}</span>
        <div className="text-left flex-1 min-w-0">
          {label && <div className="text-[10px] text-slate-400 leading-tight">{label}</div>}
          <div className="text-sm font-medium text-slate-700 leading-tight truncate">{currentLang.name}</div>
        </div>
        <Icon name="chevron-down" size={16} className={`text-slate-400 transition-transform flex-shrink-0 ${open ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 35 }}
            className="absolute top-full left-0 mt-2 w-full min-w-[14rem] sm:w-56 bg-white rounded-2xl shadow-xl border border-slate-100 py-2 z-50 overflow-hidden max-h-[70vh] overflow-y-auto"
          >
            {autoLang && renderLangItem(autoLang)}
            {standardLangs.map(renderLangItem)}

            {betaLangs.length > 0 && (
              <>
                <div className="px-4 py-1.5 text-[11px] font-semibold text-slate-400 uppercase tracking-wider bg-slate-50">新增语言 (Beta)</div>
                {betaGroups.map(group => (
                  <div key={group.key}>
                    <div className="px-4 py-1 text-[10px] text-slate-400">{group.label}</div>
                    {group.langs.map(renderLangItem)}
                  </div>
                ))}
              </>
            )}

            {dialectLangs.length > 0 && (
              <>
                <div className="px-4 py-1.5 text-[11px] font-semibold text-slate-400 uppercase tracking-wider bg-slate-50">方言</div>
                {dialectLangs.map(renderLangItem)}
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

Object.assign(window, { LanguageSelector });
