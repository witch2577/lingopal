// ========== Study Groups / Community ==========
const { useState, useEffect } = React;
const { motion, AnimatePresence } = window.Motion;

const StudyGroups = () => {
  const [groups, setGroups] = useState([]);
  const [showCreate, setShowCreate] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState(null);
  const [loading, setLoading] = useState(true);
  const userId = useUserStore(s => s.userId);

  useEffect(() => {
    loadGroups();
  }, [userId]);

  const loadGroups = async () => {
    if (!userId) return;
    setLoading(true);
    const data = await getStudyGroups(userId);
    setGroups(data);
    setLoading(false);
  };

  const handleJoin = async (groupId) => {
    const success = await joinGroup(userId, groupId);
    if (success) {
      useUIStore.getState().showNotification('加入成功！', 'success');
      loadGroups();
    }
  };

  const handleLeave = async (groupId) => {
    await leaveGroup(userId, groupId);
    useUIStore.getState().showNotification('已退出小组', 'info');
    loadGroups();
  };

  if (selectedGroup) {
    return <GroupDetail group={selectedGroup} onBack={() => setSelectedGroup(null)} onLeave={() => handleLeave(selectedGroup.groupId)} />;
  }

  if (showCreate) {
    return <CreateGroupForm onCancel={() => setShowCreate(false)} onCreated={() => { setShowCreate(false); loadGroups(); }} />;
  }

  if (loading) {
    return <PageSkeleton type="list" />;
  }

  const myGroups = groups.filter(g => g.isMember);
  const otherGroups = groups.filter(g => !g.isMember);
  const hasAnyGroups = myGroups.length > 0 || otherGroups.length > 0;

  return (
    <div className="space-y-4 animate-fade-in">
      <div className="flex gap-2">
        <Button onClick={() => setShowCreate(true)} variant="primary" icon="plus" className="flex-1">创建小组</Button>
      </div>

      {!hasAnyGroups && (
        <Card padding="p-0">
          <EmptyStudyGroups onCreate={() => setShowCreate(true)} />
        </Card>
      )}

      {myGroups.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold text-slate-700 mb-2">我的小组</h3>
          <div className="space-y-2">
            {myGroups.map(group => (
              <GroupCard key={group.groupId} group={group} isMember onClick={() => setSelectedGroup(group)} />
            ))}
          </div>
        </div>
      )}

      {otherGroups.length > 0 && (
        <div>
          <h3 className="text-sm font-semibold text-slate-700 mb-2">推荐小组</h3>
          <div className="space-y-2">
            {otherGroups.map(group => (
              <GroupCard key={group.groupId} group={group} onJoin={() => handleJoin(group.groupId)} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const GroupCard = ({ group, isMember, onClick, onJoin }) => {
  return (
    <motion.div
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-100 cursor-pointer hover:border-brand-200 transition-colors"
    >
      <div className="w-12 h-12 rounded-xl bg-brand-100 flex items-center justify-center text-2xl">
        {group.icon}
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold truncate">{group.name}</p>
        <p className="text-xs text-slate-500 truncate">{group.description}</p>
        <div className="flex items-center gap-2 mt-1">
          <Badge variant="primary" className="text-[10px]">{LANGUAGE_MAP[group.language]?.name || group.language}</Badge>
          <span className="text-xs text-slate-400">{group.memberCount} 人</span>
        </div>
      </div>
      {isMember ? (
        <span className="text-xs text-emerald-600 font-medium">已加入</span>
      ) : (
        <Button size="sm" variant="primary" onClick={(e) => { e.stopPropagation(); onJoin(); }}>加入</Button>
      )}
    </motion.div>
  );
};

const GroupDetail = ({ group, onBack, onLeave }) => {
  const [activeTab, setActiveTab] = useState('members');
  const [messages, setMessages] = useState([
    { nickname: '小明', text: '大家今天学习了吗？', time: '10:30' },
    { nickname: 'Amy', text: '刚完成了一个语法课，收获很大！', time: '10:35' },
    { nickname: '小明', text: '太棒了，继续保持！', time: '10:36' },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const mockMembers = [
    { nickname: '小明', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=xiaoming', xp: 1250, streak: 12, role: 'owner' },
    { nickname: 'Amy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=amy', xp: 3400, streak: 45, role: 'member' },
    { nickname: '我', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=me', xp: 800, streak: 7, role: 'member' },
  ];

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    const now = new Date();
    const timeStr = `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`;
    setMessages(prev => [...prev, { nickname: '我', text: newMessage.trim(), time: timeStr }]);
    setNewMessage('');
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <button onClick={onBack} className="p-2 rounded-lg hover:bg-slate-100">
          <Icon name="chevron-left" size={20} />
        </button>
        <h2 className="text-lg font-bold">{group.name}</h2>
      </div>

      <div className="bg-white rounded-xl p-4 border border-slate-100 text-center">
        <div className="text-4xl mb-2">{group.icon}</div>
        <h3 className="font-semibold">{group.name}</h3>
        <p className="text-sm text-slate-500 mt-1">{group.description}</p>
        <div className="flex justify-center gap-4 mt-3 text-sm">
          <span className="text-slate-600">👥 {group.memberCount} 成员</span>
          <span className="text-slate-600">📚 {LANGUAGE_MAP[group.language]?.name}</span>
        </div>
      </div>

      <div className="flex gap-2">
        {[
          { key: 'members', label: '成员' },
          { key: 'chat', label: '讨论' },
          { key: 'progress', label: '进度' },
        ].map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex-1 py-2 rounded-xl text-sm font-medium transition-all ${
              activeTab === tab.key ? 'bg-brand-500 text-white' : 'bg-slate-100 text-slate-600'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'members' && (
        <div className="space-y-2">
          <div className="flex items-center gap-1 px-2 py-1">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 text-[10px] font-medium">
              <Icon name="alert-circle" size={10} />
              演示数据
            </span>
            <span className="text-[10px] text-slate-400">成员信息仅供演示</span>
          </div>
          {mockMembers.map((m, i) => (
            <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-100">
              <img src={m.avatar} className="w-10 h-10 rounded-full" />
              <div className="flex-1">
                <p className="text-sm font-medium">{m.nickname}</p>
                <p className="text-xs text-slate-500">⚡ {m.xp} XP · 🔥 {m.streak}天</p>
              </div>
              {m.role === 'owner' && <Badge variant="accent">组长</Badge>}
            </div>
          ))}
        </div>
      )}

      {activeTab === 'chat' && (
        <div className="space-y-3 bg-white rounded-xl p-4 border border-slate-100">
          <div className="flex items-center gap-1">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 text-[10px] font-medium">
              <Icon name="alert-circle" size={10} />
              演示数据
            </span>
            <span className="text-[10px] text-slate-400">聊天记录仅保存在本地</span>
          </div>
          {messages.map((msg, i) => (
            <div key={i} className="flex gap-2">
              <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-xs font-bold text-brand-600">
                {msg.nickname[0]}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium">{msg.nickname}</span>
                  <span className="text-[10px] text-slate-400">{msg.time}</span>
                </div>
                <p className="text-sm text-slate-700 mt-0.5">{msg.text}</p>
              </div>
            </div>
          ))}
          <div className="flex gap-2 mt-3">
            <input
              type="text"
              placeholder="发送消息..."
              value={newMessage}
              onChange={e => setNewMessage(e.target.value)}
              onKeyDown={e => { if (e.key === 'Enter') handleSendMessage(); }}
              className="flex-1 px-3 py-2 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-400"
            />
            <Button size="sm" variant="primary" onClick={handleSendMessage}>发送</Button>
          </div>
        </div>
      )}

      {activeTab === 'progress' && (
        <div className="space-y-3">
          <div className="flex items-center gap-1 px-2 py-1">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 text-[10px] font-medium">
              <Icon name="alert-circle" size={10} />
              演示数据
            </span>
            <span className="text-[10px] text-slate-400">进度信息仅供演示</span>
          </div>
          {mockMembers.map((m, i) => (
            <div key={i} className="bg-white rounded-xl p-3 border border-slate-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">{m.nickname}</span>
                <span className="text-xs text-slate-500">{Math.min(100, Math.floor(m.xp / 50))}%</span>
              </div>
              <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-brand-500 rounded-full"
                  style={{ width: `${Math.min(100, Math.floor(m.xp / 50))}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      )}

      <Button onClick={onLeave} variant="outline" fullWidth className="text-red-500 border-red-200 hover:bg-red-50">
        退出小组
      </Button>
    </div>
  );
};

const CreateGroupForm = ({ onCancel, onCreated }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [icon, setIcon] = useState('📚');
  const [language, setLanguage] = useState('en');
  const userId = useUserStore(s => s.userId);

  const icons = ['📚', '🎌', '💜', '💃', '⚽', '🎵', '🎨', '💼', '✈️', '🍜'];

  const handleSubmit = async () => {
    if (!name.trim()) {
      useUIStore.getState().showNotification('请输入小组名称', 'error');
      return;
    }
    await createStudyGroup(userId, name, description, icon, language);
    useUserStore.getState().unlockAchievement('group-founder', '小组长', '创建学习小组', '🏫');
    useUIStore.getState().showNotification('小组创建成功！', 'success');
    onCreated();
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <button onClick={onCancel} className="p-2 rounded-lg hover:bg-slate-100">
          <Icon name="chevron-left" size={20} />
        </button>
        <h2 className="text-lg font-bold">创建学习小组</h2>
      </div>

      <div className="space-y-3">
        <div>
          <label className="text-sm font-medium text-slate-700">小组名称</label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="例如：英语每日打卡"
            className="w-full mt-1 px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-400"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-slate-700">描述</label>
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            placeholder="描述一下你的小组..."
            rows={3}
            className="w-full mt-1 px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-400 resize-none"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-slate-700">图标</label>
          <div className="flex gap-2 mt-1 flex-wrap">
            {icons.map(ic => (
              <button
                key={ic}
                onClick={() => setIcon(ic)}
                className={`w-10 h-10 rounded-xl text-xl flex items-center justify-center transition-all ${
                  icon === ic ? 'bg-brand-100 ring-2 ring-brand-400' : 'bg-slate-100 hover:bg-slate-200'
                }`}
              >
                {ic}
              </button>
            ))}
          </div>
        </div>
        <div>
          <label className="text-sm font-medium text-slate-700">语言</label>
          <select
            value={language}
            onChange={e => setLanguage(e.target.value)}
            className="w-full mt-1 px-3 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-brand-400 bg-white"
          >
            {LANGUAGES.filter(l => l.type === 'standard').map(l => (
              <option key={l.code} value={l.code}>{l.name}</option>
            ))}
          </select>
        </div>
      </div>

      <Button onClick={handleSubmit} variant="primary" fullWidth>创建</Button>
    </div>
  );
};

Object.assign(window, { StudyGroups });
