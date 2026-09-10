// ========== Drama Role Play ==========
// Select a role and record yourself reading lines

const DramaRolePlay = ({ script, scene, onBack }) => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [recordings, setRecordings] = useState([]);
  const [scores, setScores] = useState([]);
  const { isMobile } = useMobileDetect();

  const lines = scene.lines || [];
  const roles = [...new Set(lines.map(l => l.role))];

  const currentLine = lines[currentIndex];
  const isMyTurn = currentLine && currentLine.role === selectedRole;

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      const chunks = [];
      mediaRecorder.ondataavailable = e => chunks.push(e.data);
      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'audio/webm' });
        setRecordings(prev => [...prev, blob]);
        // Simple mock scoring
        const score = Math.floor(70 + Math.random() * 25);
        setScores(prev => [...prev, score]);
        setIsRecording(false);
        stream.getTracks().forEach(t => t.stop());
      };
      mediaRecorder.start();
      window._recorder = mediaRecorder;
      setIsRecording(true);
    } catch (e) {
      useUIStore.getState().showNotification('无法访问麦克风', 'error');
    }
  };

  const stopRecording = () => {
    window._recorder?.stop();
  };

  const nextLine = () => {
    if (currentIndex < lines.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleComplete = () => {
    const userState = useUserStore.getState();
    userState.addXP(XP_SOURCES.DRAMA_ROLEPLAY.base, 'drama_roleplay');
    const roleplayCount = (userState.profile?.dramaRoleplayCount || 0) + 1;
    userState.updateProfile({ dramaRoleplayCount: roleplayCount });
    if (roleplayCount >= 3) {
      userState.unlockAchievement('drama-actor', '台词大师', '完成 3 次角色扮演', '🎬');
    }
    useUIStore.getState().showNotification(`+${XP_SOURCES.DRAMA_ROLEPLAY.base} XP 角色扮演完成`, 'success');
    recordActivity(userState.userId, 'drama_roleplay', { scriptId: script.id }).catch(() => {});
    onBack();
  };

  if (!selectedRole) {
    return (
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-2 mb-4">
          <button onClick={onBack} className="p-2 rounded-xl hover:bg-slate-100">
            <Icon name="arrow-left" size={18} className="text-slate-500" />
          </button>
          <h2 className="text-sm font-bold text-slate-800">选择角色</h2>
        </div>
        <p className="text-xs text-slate-500 mb-3">选择你要扮演的角色，系统将跳过其他角色的台词</p>
        <div className="flex flex-col gap-3">
          {roles.map(role => {
            const roleColor = lines.find(l => l.role === role)?.color || '#6366F1';
            return (
              <button
                key={role}
                onClick={() => setSelectedRole(role)}
                className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-brand-200 transition-colors text-left"
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-lg font-bold" style={{ backgroundColor: roleColor }}>
                  {role[0]}
                </div>
                <div>
                  <p className="font-semibold text-slate-800">{role}</p>
                  <p className="text-xs text-slate-400">{lines.filter(l => l.role === role).length} 句台词</p>
                </div>
                <Icon name="chevron-right" size={18} className="ml-auto text-slate-300" />
              </button>
            );
          })}
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
        <div className="flex-1">
          <h2 className="text-sm font-bold text-slate-800">角色扮演 · {selectedRole}</h2>
          <p className="text-[10px] text-slate-400">{currentIndex + 1} / {lines.length}</p>
        </div>
      </div>

      {/* Progress */}
      <div className="h-1 bg-slate-100 rounded-full mb-4 overflow-hidden">
        <div className="h-full bg-brand-400 rounded-full" style={{ width: `${((currentIndex + 1) / lines.length) * 100}%` }} />
      </div>

      {/* Current line display */}
      <div className="flex-1 flex flex-col items-center justify-center">
        {currentLine && (
          <div className="w-full">
            {!isMyTurn ? (
              <div className="bg-slate-50 rounded-2xl p-5 mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full text-white text-xs flex items-center justify-center font-bold" style={{ backgroundColor: currentLine.color }}>
                    {currentLine.role[0]}
                  </div>
                  <span className="text-xs font-semibold" style={{ color: currentLine.color }}>{currentLine.role}</span>
                </div>
                <p className="text-base text-slate-600">{currentLine.text}</p>
              </div>
            ) : (
              <div className="bg-brand-50 rounded-2xl p-5 mb-4 border border-brand-100">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-brand-500 text-white text-xs flex items-center justify-center font-bold">
                    {selectedRole[0]}
                  </div>
                  <span className="text-xs font-semibold text-brand-600">{selectedRole} (你)</span>
                </div>
                <p className="text-lg font-medium text-slate-800">{currentLine.text}</p>
                {scores[currentIndex] && (
                  <div className="mt-2 text-sm text-emerald-600 font-medium">发音评分: {scores[currentIndex]}分</div>
                )}
              </div>
            )}

            {isMyTurn && (
              <div className="flex justify-center">
                <button
                  onClick={isRecording ? stopRecording : startRecording}
                  className={`w-16 h-16 rounded-full flex items-center justify-center shadow-lg transition-all ${
                    isRecording ? 'bg-red-500 animate-pulse' : 'bg-brand-500 hover:bg-brand-600'
                  }`}
                >
                  <Icon name={isRecording ? 'square' : 'mic'} size={24} className="text-white" />
                </button>
              </div>
            )}

            {!isMyTurn && (
              <div className="flex justify-center">
                <button
                  onClick={nextLine}
                  className="px-6 py-2.5 rounded-xl bg-brand-500 text-white text-sm font-medium hover:bg-brand-600 transition-colors"
                >
                  下一句
                </button>
              </div>
            )}

            {isMyTurn && !isRecording && scores[currentIndex] && (
              <div className="flex justify-center mt-4">
                <button
                  onClick={nextLine}
                  className="px-6 py-2.5 rounded-xl bg-brand-500 text-white text-sm font-medium hover:bg-brand-600 transition-colors"
                >
                  下一句
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {currentIndex >= lines.length - 1 && scores.filter(s => s).length > 0 && (
        <button
          onClick={handleComplete}
          className="mt-4 py-3 rounded-xl bg-emerald-500 text-white text-sm font-medium hover:bg-emerald-600 transition-colors"
        >
          完成角色扮演
        </button>
      )}
    </div>
  );
};

Object.assign(window, { DramaRolePlay });
