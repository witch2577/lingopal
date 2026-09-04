// ========== Progress Comparison Charts ==========
// Week / Month / Quarter comparison with trend visualization

const ProgressCompare = () => {
  const userId = useUserStore(s => s.userId);
  const [range, setRange] = useState('week'); // week | month | quarter
  const [compareData, setCompareData] = useState(null);
  const chartRef = useRef(null);
  const pieRef = useRef(null);
  const trendRef = useRef(null);

  const rangeConfig = {
    week: { label: '周', days: 7, prevDays: 14 },
    month: { label: '月', days: 30, prevDays: 60 },
    quarter: { label: '季度', days: 90, prevDays: 180 },
  };

  useEffect(() => {
    const load = async () => {
      if (!userId) return;
      const cfg = rangeConfig[range];
      // Fetch current period + previous period
      const allLogs = await db.dailyLogs.where('userId').equals(userId).sortBy('date');
      const today = new Date();

      const getPeriodStats = (offsetDays, periodDays) => {
        const end = new Date(today);
        end.setDate(end.getDate() - offsetDays);
        const start = new Date(end);
        start.setDate(start.getDate() - periodDays);
        const filtered = allLogs.filter(l => {
          const d = new Date(l.date);
          return d >= start && d <= end;
        });
        return {
          studyMinutes: filtered.reduce((s, l) => s + (l.studyMinutes || 0), 0),
          earnedXP: filtered.reduce((s, l) => s + (l.earnedXP || 0), 0),
          totalQuestions: filtered.reduce((s, l) => s + (l.totalQuestions || 0), 0),
          correctCount: filtered.reduce((s, l) => s + (l.correctCount || 0), 0),
          completedLevels: filtered.reduce((s, l) => s + (l.completedLevels || 0), 0),
          newWords: filtered.reduce((s, l) => s + (l.newWords || 0), 0),
          activeDays: filtered.filter(l => l.studyMinutes > 0).length,
        };
      };

      const current = getPeriodStats(0, cfg.days);
      const previous = getPeriodStats(cfg.days, cfg.days);

      // Build daily chart data for current period
      const dailyData = [];
      for (let i = cfg.days - 1; i >= 0; i--) {
        const d = new Date(today);
        d.setDate(d.getDate() - i);
        const ds = d.toISOString().slice(0, 10);
        const log = allLogs.find(l => l.date === ds);
        dailyData.push({
          date: ds,
          label: ds.slice(5),
          minutes: log?.studyMinutes || 0,
          xp: log?.earnedXP || 0,
          questions: log?.totalQuestions || 0,
          correct: log?.correctCount || 0,
        });
      }

      setCompareData({ current, previous, dailyData });
    };
    load();
  }, [userId, range]);

  // Bar chart: current vs previous
  useEffect(() => {
    if (!compareData || !chartRef.current || !window.echarts) return;
    const chart = echarts.init(chartRef.current);
    const dimensions = [
      { key: 'studyMinutes', label: '学习时长(分钟)', color: '#6366F1' },
      { key: 'earnedXP', label: '获得XP', color: '#10B981' },
      { key: 'totalQuestions', label: '答题数', color: '#F59E0B' },
      { key: 'completedLevels', label: '通关数', color: '#EF4444' },
      { key: 'newWords', label: '新词数', color: '#8B5CF6' },
    ];

    const currentVals = dimensions.map(d => compareData.current[d.key]);
    const prevVals = dimensions.map(d => compareData.previous[d.key]);

    const option = {
      grid: { top: 30, right: 10, bottom: 40, left: 10 },
      tooltip: { trigger: 'axis' },
      legend: { data: [`本${rangeConfig[range].label}`, `上${rangeConfig[range].label}`], top: 0, textStyle: { fontSize: 10 } },
      xAxis: {
        type: 'category',
        data: dimensions.map(d => d.label),
        axisLabel: { fontSize: 9, color: '#94A3B8', rotate: 15 },
        axisLine: { show: false },
        axisTick: { show: false },
      },
      yAxis: { type: 'value', splitLine: { lineStyle: { color: '#F1F5F9' } }, axisLabel: { fontSize: 9, color: '#94A3B8' } },
      series: [
        { name: `本${rangeConfig[range].label}`, type: 'bar', data: currentVals, itemStyle: { color: '#6366F1', borderRadius: [4, 4, 0, 0] }, barWidth: '30%' },
        { name: `上${rangeConfig[range].label}`, type: 'bar', data: prevVals, itemStyle: { color: '#CBD5E1', borderRadius: [4, 4, 0, 0] }, barWidth: '30%' },
      ],
    };
    chart.setOption(option, true);
    const handler = () => chart.resize();
    window.addEventListener('resize', handler);
    return () => { window.removeEventListener('resize', handler); chart.dispose(); };
  }, [compareData, range]);

  // Trend line chart
  useEffect(() => {
    if (!compareData?.dailyData || !trendRef.current || !window.echarts) return;
    const chart = echarts.init(trendRef.current);
    const labels = compareData.dailyData.map(d => d.label);
    const minutes = compareData.dailyData.map(d => d.minutes);
    const xp = compareData.dailyData.map(d => d.xp);

    const option = {
      grid: { top: 30, right: 10, bottom: 25, left: 35 },
      tooltip: { trigger: 'axis' },
      legend: { data: ['学习时长', '获得XP'], top: 0, textStyle: { fontSize: 10 } },
      xAxis: {
        type: 'category',
        data: labels,
        axisLabel: { fontSize: 9, color: '#94A3B8', interval: Math.floor(labels.length / 6) },
        axisLine: { show: false },
        axisTick: { show: false },
      },
      yAxis: [
        { type: 'value', name: '分钟', nameTextStyle: { fontSize: 9, color: '#94A3B8' }, splitLine: { lineStyle: { color: '#F1F5F9' } }, axisLabel: { fontSize: 9, color: '#94A3B8' } },
        { type: 'value', name: 'XP', nameTextStyle: { fontSize: 9, color: '#94A3B8' }, splitLine: { show: false }, axisLabel: { fontSize: 9, color: '#94A3B8' } },
      ],
      series: [
        { name: '学习时长', type: 'bar', data: minutes, itemStyle: { color: '#818CF8', borderRadius: [4, 4, 0, 0] }, barWidth: '40%' },
        { name: '获得XP', type: 'line', yAxisIndex: 1, data: xp, smooth: true, symbol: 'circle', symbolSize: 4, lineStyle: { color: '#10B981', width: 2 }, itemStyle: { color: '#10B981' } },
      ],
    };
    chart.setOption(option, true);
    const handler = () => chart.resize();
    window.addEventListener('resize', handler);
    return () => { window.removeEventListener('resize', handler); chart.dispose(); };
  }, [compareData, range]);

  // Accuracy pie
  useEffect(() => {
    if (!compareData || !pieRef.current || !window.echarts) return;
    const chart = echarts.init(pieRef.current);
    const correct = compareData.current.correctCount;
    const wrong = Math.max(0, compareData.current.totalQuestions - correct);

    const option = {
      tooltip: { trigger: 'item', formatter: '{b}: {c} ({d}%)' },
      series: [{
        type: 'pie',
        radius: ['55%', '80%'],
        avoidLabelOverlap: false,
        itemStyle: { borderRadius: 6, borderColor: '#fff', borderWidth: 2 },
        label: {
          show: true, position: 'center',
          formatter: () => {
            const acc = compareData.current.totalQuestions > 0
              ? Math.round((correct / compareData.current.totalQuestions) * 100)
              : 0;
            return `{a|${acc}%}\n{b|正确率}`;
          },
          rich: { a: { fontSize: 24, fontWeight: 'bold', color: '#1E293B' }, b: { fontSize: 11, color: '#94A3B8' } },
        },
        data: [
          { value: correct, name: '正确', itemStyle: { color: '#10B981' } },
          { value: wrong, name: '错误', itemStyle: { color: '#EF4444' } },
        ],
      }],
    };
    chart.setOption(option);
    const handler = () => chart.resize();
    window.addEventListener('resize', handler);
    return () => { window.removeEventListener('resize', handler); chart.dispose(); };
  }, [compareData]);

  const calcChange = (current, previous) => {
    if (previous === 0) return current > 0 ? 100 : 0;
    return Math.round(((current - previous) / previous) * 100);
  };

  const stats = compareData ? [
    { label: '学习时长', current: compareData.current.studyMinutes, prev: compareData.previous.studyMinutes, unit: '分钟', icon: 'clock' },
    { label: '获得XP', current: compareData.current.earnedXP, prev: compareData.previous.earnedXP, unit: 'XP', icon: 'zap' },
    { label: '答题数', current: compareData.current.totalQuestions, prev: compareData.previous.totalQuestions, unit: '题', icon: 'chart' },
    { label: '正确率', current: compareData.current.totalQuestions > 0 ? Math.round((compareData.current.correctCount / compareData.current.totalQuestions) * 100) : 0, prev: compareData.previous.totalQuestions > 0 ? Math.round((compareData.previous.correctCount / compareData.previous.totalQuestions) * 100) : 0, unit: '%', icon: 'target' },
    { label: '通关数', current: compareData.current.completedLevels, prev: compareData.previous.completedLevels, unit: '关', icon: 'trophy' },
    { label: '活跃天数', current: compareData.current.activeDays, prev: compareData.previous.activeDays, unit: '天', icon: 'calendar' },
  ] : [];

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-slate-800">成果对比</h2>
        <div className="flex bg-slate-100 rounded-lg p-0.5">
          {[
            { key: 'week', label: '周' },
            { key: 'month', label: '月' },
            { key: 'quarter', label: '季度' },
          ].map(r => (
            <button
              key={r.key}
              onClick={() => setRange(r.key)}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${
                range === r.key ? 'bg-white text-brand-600 shadow-sm' : 'text-slate-500'
              }`}
            >
              {r.label}
            </button>
          ))}
        </div>
      </div>

      {!compareData ? (
        <div className="flex items-center justify-center py-12">
          <Spinner size={32} className="text-brand-500" />
        </div>
      ) : (
        <>
          {/* Stat cards */}
          <div className="grid grid-cols-2 gap-3">
            {stats.map(s => {
              const change = calcChange(s.current, s.prev);
              const isPositive = change >= 0;
              return (
                <Card key={s.label} padding="p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon name={s.icon} size={14} className="text-brand-500" />
                    <span className="text-xs text-slate-400">{s.label}</span>
                  </div>
                  <div className="flex items-end gap-2">
                    <span className="text-xl font-bold text-slate-800">{s.current}</span>
                    <span className="text-[10px] text-slate-400 mb-1">{s.unit}</span>
                  </div>
                  <div className={`text-[10px] font-medium mt-1 ${isPositive ? 'text-emerald-600' : 'text-red-500'}`}>
                    {isPositive ? '↑' : '↓'} {Math.abs(change)}% vs 上{rangeConfig[range].label}
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Comparison bar chart */}
          <Card padding="p-4">
            <h3 className="font-semibold text-slate-800 text-sm mb-2">
              本{rangeConfig[range].label} vs 上{rangeConfig[range].label}
            </h3>
            <div ref={chartRef} style={{ width: '100%', height: '220px' }} />
          </Card>

          {/* Trend line */}
          <Card padding="p-4">
            <h3 className="font-semibold text-slate-800 text-sm mb-2">学习趋势</h3>
            <div ref={trendRef} style={{ width: '100%', height: '200px' }} />
          </Card>

          {/* Accuracy pie */}
          <div className="grid grid-cols-2 gap-3">
            <Card padding="p-4">
              <h3 className="font-semibold text-slate-800 text-sm mb-2">正确率分布</h3>
              <div ref={pieRef} style={{ width: '100%', height: '180px' }} />
            </Card>
            <Card padding="p-4">
              <h3 className="font-semibold text-slate-800 text-sm mb-2">学习总结</h3>
              <div className="space-y-2 mt-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">总答题</span>
                  <span className="font-medium text-slate-700">{compareData.current.totalQuestions} 题</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">正确</span>
                  <span className="font-medium text-emerald-600">{compareData.current.correctCount} 题</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">新词</span>
                  <span className="font-medium text-violet-600">{compareData.current.newWords} 个</span>
                </div>
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">活跃天数</span>
                  <span className="font-medium text-amber-600">{compareData.current.activeDays} 天</span>
                </div>
                <div className="pt-2 border-t border-slate-100">
                  <p className="text-[10px] text-slate-400 leading-relaxed">
                    {compareData.current.activeDays >= rangeConfig[range].days * 0.7
                      ? '非常棒！你的学习频率很高，继续保持！'
                      : compareData.current.activeDays >= rangeConfig[range].days * 0.3
                      ? '学习节奏不错，试着增加学习频率会更好。'
                      : '学习频率较低，建议设定每日提醒，养成学习习惯。'}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </>
      )}
    </div>
  );
};

Object.assign(window, { ProgressCompare });
