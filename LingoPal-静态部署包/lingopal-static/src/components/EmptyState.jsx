// ========== Empty State Components ==========

const EmptyState = ({
  icon = '📭',
  title = '暂无内容',
  description = '这里还没有任何内容',
  action = null,
  actionText = '去创建',
  onAction = null,
  size = 'md',
  className = '',
}) => {
  const sizeMap = {
    sm: { icon: 'text-3xl', title: 'text-sm', desc: 'text-xs', padding: 'py-6' },
    md: { icon: 'text-5xl', title: 'text-base', desc: 'text-sm', padding: 'py-10' },
    lg: { icon: 'text-6xl', title: 'text-lg', desc: 'text-sm', padding: 'py-16' },
  };
  const s = sizeMap[size] || sizeMap.md;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`flex flex-col items-center text-center ${s.padding} ${className}`}
    >
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.1, type: 'spring', stiffness: 200 }}
        className={`${s.icon} mb-4`}
      >
        {icon}
      </motion.div>
      <h3 className={`${s.title} font-semibold text-slate-700 mb-1`}>{title}</h3>
      <p className={`${s.desc} text-slate-400 max-w-xs leading-relaxed whitespace-pre-line`}>
        {description}
      </p>
      {action && onAction && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mt-4"
        >
          <Button variant="primary" size="sm" onClick={onAction}>
            {actionText}
          </Button>
        </motion.div>
      )}
    </motion.div>
  );
};

// Predefined empty states for common scenarios
const EmptyWordBook = ({ onAction }) => (
  <EmptyState
    icon="📚"
    title="单词本空空如也"
    description="还没有收藏任何单词\n翻译时点击收藏按钮即可添加"
    action={!!onAction}
    actionText="去翻译"
    onAction={onAction}
    size="md"
  />
);

const EmptyErrorBook = ({ onAction }) => (
  <EmptyState
    icon="📝"
    title="错题本空空如也"
    description="还没有错题记录\n答题错误会自动记录到这里\n继续努力，加油！"
    action={!!onAction}
    actionText="去练习"
    onAction={onAction}
    size="md"
  />
);

const EmptyLeaderboard = () => (
  <EmptyState
    icon="🏆"
    title="排行榜暂无数据"
    description="还没有足够的用户数据来生成排行榜\n多多学习，积累 XP 吧！"
    size="md"
  />
);

const EmptyStudyGroups = ({ onCreate }) => (
  <EmptyState
    icon="👥"
    title="还没有学习小组"
    description="加入或创建一个学习小组\n和志同道合的伙伴一起进步"
    action={!!onCreate}
    actionText="创建小组"
    onAction={onCreate}
    size="md"
  />
);

const EmptyDailyReport = ({ onAction }) => (
  <EmptyState
    icon="📊"
    title="今日还没有学习记录"
    description="快去开始一局练习吧！\n坚持每日学习，积累更多数据"
    action={!!onAction}
    actionText="开始学习"
    onAction={onAction}
    size="sm"
  />
);

const EmptyAchievements = () => (
  <EmptyState
    icon="🎯"
    title="还没有解锁成就"
    description="完成学习目标、坚持连胜、\n挑战关卡，解锁属于你的成就！"
    size="md"
  />
);

const EmptyScenarios = () => (
  <EmptyState
    icon="🎭"
    title="场景学习暂不可用"
    description="该语言的场景学习内容正在准备中\n请先尝试关卡地图模式"
    size="md"
  />
);

const EmptySearch = ({ query }) => (
  <EmptyState
    icon="🔍"
    title="未找到相关内容"
    description={`没有找到与 "${query || ''}" 相关的内容\n换个关键词试试？`}
    size="md"
  />
);

Object.assign(window, {
  EmptyState, EmptyWordBook, EmptyErrorBook, EmptyLeaderboard,
  EmptyStudyGroups, EmptyDailyReport, EmptyAchievements,
  EmptyScenarios, EmptySearch,
});
