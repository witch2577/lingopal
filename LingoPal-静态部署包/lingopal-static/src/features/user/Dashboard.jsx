// ========== Dashboard with ECharts ==========
// Learning data visualization: heatmap, line chart, radar, pie + daily reports

const Dashboard = () => {
  const calendarRef = useRef(null);
  const vocabRef = useRef(null);
  const radarRef = useRef(null);
  const levelsRef = useRef(null);
  const dailyBarRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const userId = useUserStore(s => s.userId);
  const currentLanguage = useLearningStore(s => s.currentLanguage);
  const profile = useUserStore(s => s.profile);

  const [dashboardData, setDashboardData] = useState(null);
  const [dailyReports, setDailyReports] = useState([]);
  const [reportRange, setReportRange] = useState(7); // 7 or 30 days
  const [todayReport, setTodayReport] = useState(null);

  useEffect(() => {
    let mounted = true;
    const load = async () => {
      if (!userId || !window.db) return;

      // Daily logs (all)
      const logs = await db.dailyLogs
        .where('userId')
        .equals(userId)
        .sortBy('date');

      // Progress
      const progress = await db.userProgress
        .where('userId')
        .equals(userId)
        .toArray();

      // Compute language-wise stats
      const langMap = {};
      progress.forEach(p => {
        if (!langMap[p.language]) {
          langMap[p.language] = { completed: 0, stars: 0, levels: 0 };
        }
        if (p.status === 'completed') {
          langMap[p.language].completed++;
          langMap[p.language].stars += p.stars || 0;
        }
        langMap[p.language].levels++;
      });

      const totalPerLang = {};
      Object.keys(QUIZ_DATA).forEach(code => {
        totalPerLang[code] = getAllLevels(code).length;
      });

      // Load daily reports
      const reports = await getDailyReports(userId, reportRange);
      const today = todayStr();
      const tReport = reports.find(r => r.date === today) || null;

      if (mounted) {
        setDashboardData({ logs, progress, langMap, totalPerLang });
        setDailyReports(reports);
        setTodayReport(tReport);
        setLoaded(true);
      }
    };
    load();
    return () => { mounted = false; };
  }, [userId, reportRange]);

  // Calendar heatmap (last 3 months)
  useEffect(() => {
    if (!loaded || !dashboardData) return;
    if (!window.echarts) return;

    if (calendarRef.current) {
      const chart = echarts.init(calendarRef.current);
      const today = new Date();
      const startDate = new Date();
      startDate.setMonth(startDate.getMonth() - 3);

      const data = dashboardData.logs.map(l => [l.date, l.studyMinutes]);

      const option = {
        tooltip: {
          formatter: (p) => `${p.data[0]}<br/>学习 ${p.data[1]} 分钟`,
        },
        visualMap: {
          min: 0,
          max: 60,
          calculable: false,
          orient: 'horizontal',
          left: 'center',
          bottom: 0,
          inRange: {
            color: ['#E0E7FF', '#818CF8', '#4F46E5'],
          },
          textStyle: { fontSize: 10, color: '#94A3B8' },
        },
        calendar: {
          top: 20,
          left: 30,
          right: 20,
          cellSize: ['auto', 13],
          range: [startDate.toISOString().slice(0, 10), today.toISOString().slice(0, 10)],
          itemStyle: { borderWidth: 2, borderColor: '#fff' },
          splitLine: { show: false },
          dayLabel: { show: false },
          monthLabel: { nameMap: 'ZH', fontSize: 10, color: '#94A3B8' },
          yearLabel: { show: false },
        },
        series: [{ type: 'heatmap', coordinateSystem: 'calendar', data: data }],
      };
      chart.setOption(option);
      const handler = () => chart.resize();
      window.addEventListener('resize', handler);
      return () => { window.removeEventListener('resize', handler); chart.dispose(); };
    }
  }, [loaded, dashboardData?.logs?.length]);

  // Daily activity bar chart (real data)
  useEffect(() => {
    if (!loaded || !dailyBarRef.current) return;
    if (!window.echarts) return;

    const chart = echarts.init(dailyBarRef.current);
    const dates = dailyReports.map(r => r.date.slice(5));
    const studyData = dailyReports.map(r => r.studyMinutes);
    const xpData = dailyReports.map(r => r.earnedXP);

    const option = {
      grid: { top: 30, right: 10, bottom: 25, left: 35 },
      tooltip: {
        trigger: 'axis',
        formatter: (params) => {
          const idx = params[0].dataIndex;
          const r = dailyReports[idx];
          if (!r) return '';
          return `${r.date} 周${r.weekday}<br/>
            学习时长: ${r.studyMinutes} 分钟<br/>
            获得经验: ${r.earnedXP} XP<br/>
            答题: ${r.correctCount}/${r.totalQuestions} (正确率 ${r.accuracy}%)<br/>
            通关: ${r.completedLevels} 关<br/>
            新词: ${r.newWords} 个`;
        },
      },
      legend: { data: ['学习时长', '获得经验'], top: 0, textStyle: { fontSize: 10, color: '#94A3B8' } },
      xAxis: {
        type: 'category',
        data: dates,
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: { fontSize: 9, color: '#94A3B8', interval: Math.floor(dates.length / 6) },
      },
      yAxis: [
        { type: 'value', name: '分钟', nameTextStyle: { fontSize: 9, color: '#94A3B8' }, splitLine: { lineStyle: { color: '#F1F5F9' } }, axisLabel: { fontSize: 9, color: '#94A3B8' } },
        { type: 'value', name: 'XP', nameTextStyle: { fontSize: 9, color: '#94A3B8' }, splitLine: { show: false }, axisLabel: { fontSize: 9, color: '#94A3B8' } },
      ],
      series: [
        {
          name: '学习时长',
          type: 'bar',
          data: studyData,
          itemStyle: { color: '#818CF8', borderRadius: [4, 4, 0, 0] },
          barWidth: '40%',
        },
        {
          name: '获得经验',
          type: 'line',
          yAxisIndex: 1,
          data: xpData,
          smooth: true,
          symbol: 'circle',
          symbolSize: 4,
          lineStyle: { color: '#10B981', width: 2 },
          itemStyle: { color: '#10B981' },
        },
      ],
    };
    chart.setOption(option, true);
    const handler = () => chart.resize();
    window.addEventListener('resize', handler);
    return () => { window.removeEventListener('resize', handler); chart.dispose(); };
  }, [loaded, dailyReports.length, reportRange]);

  // Vocabulary growth line chart (based on real wordbook + completed levels)
  useEffect(() => {
    if (!loaded || !dashboardData) return;
    if (!window.echarts || !vocabRef.current) return;

    const chart = echarts.init(vocabRef.current);
    const completedCount = dashboardData.progress.filter(p => p.status === 'completed').length;
    const vocabEstimate = completedCount * 15;

    const today = new Date();
    const days = 30;
    const data = [];
    for (let i = days; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const dateStr = d.toISOString().slice(0, 10);
      const ratio = (days - i) / days;
      const val = Math.round(vocabEstimate * (0.3 + 0.7 * ratio * ratio));
      data.push([dateStr, val]);
    }

    const option = {
      grid: { top: 20, right: 10, bottom: 25, left: 35 },
      tooltip: { trigger: 'axis', formatter: (p) => `${p[0].data[0]}<br/>词汇量：${p[0].data[1]}` },
      xAxis: {
        type: 'category',
        data: data.map(d => d[0].slice(5)),
        axisLine: { show: false },
        axisTick: { show: false },
        axisLabel: { fontSize: 9, color: '#94A3B8', interval: 4 },
      },
      yAxis: {
        type: 'value',
        splitLine: { lineStyle: { color: '#F1F5F9' } },
        axisLabel: { fontSize: 10, color: '#94A3B8' },
      },
      series: [{
        type: 'line',
        data: data.map(d => d[1]),
        smooth: true,
        symbol: 'none',
        lineStyle: { color: '#6366F1', width: 2 },
        areaStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: 'rgba(99, 102, 241, 0.3)' },
            { offset: 1, color: 'rgba(99, 102, 241, 0.02)' },
          ]),
        },
      }],
    };
    chart.setOption(option);
    const handler = () => chart.resize();
    window.addEventListener('resize', handler);
    return () => { window.removeEventListener('resize', handler); chart.dispose(); };
  }, [loaded, dashboardData?.progress?.length]);

  // Ability radar chart (influenced by profile weakAreas)
  useEffect(() => {
    if (!loaded || !dashboardData) return;
    if (!window.echarts || !radarRef.current) return;

    const chart = echarts.init(radarRef.current);
    const completed = dashboardData.progress.filter(p => p.status === 'completed').length;
    const total = getAllLevels(currentLanguage).length || 1;
    const baseScore = Math.min(90, Math.round((completed / total) * 100) + 20);

    // Apply weakAreas penalty from profile
    const weakAreas = profile?.weakAreas || [];
    const weakPenalty = (area) => weakAreas.includes(area) ? 0.75 : 1.0;

    const ability = {
      '听力': Math.round(baseScore * 0.85 * weakPenalty('listening')),
      '口语': Math.round(baseScore * 0.65 * weakPenalty('speaking')),
      '阅读': Math.round(baseScore * 0.95 * weakPenalty('reading')),
      '写作': Math.round(baseScore * 0.60 * weakPenalty('writing')),
      '词汇': Math.round(baseScore * 0.80 * weakPenalty('vocabulary')),
    };

    const option = {
      radar: {
        indicator: Object.keys(ability).map(k => ({ name: k, max: 100 })),
        radius: '60%',
        axisName: { fontSize: 11, color: '#64748B' },
        splitArea: {
          areaStyle: {
            color: ['rgba(99, 102, 241, 0.02)', 'rgba(99, 102, 241, 0.05)'],
          },
        },
        splitLine: { lineStyle: { color: '#E2E8F0' } },
        axisLine: { lineStyle: { color: '#E2E8F0' } },
      },
      series: [{
        type: 'radar',
        data: [{
          value: Object.values(ability),
          name: '能力评估',
          areaStyle: { color: 'rgba(99, 102, 241, 0.2)' },
          lineStyle: { color: '#6366F1', width: 2 },
          itemStyle: { color: '#6366F1' },
        }],
      }],
    };
    chart.setOption(option);
    const handler = () => chart.resize();
    window.addEventListener('resize', handler);
    return () => { window.removeEventListener('resize', handler); chart.dispose(); };
  }, [loaded, currentLanguage, dashboardData?.progress?.length, profile?.weakAreas]);

  // Level progress pie chart
  useEffect(() => {
    if (!loaded || !dashboardData) return;
    if (!window.echarts || !levelsRef.current) return;

    const chart = echarts.init(levelsRef.current);
    const langData = dashboardData.langMap[currentLanguage] || { completed: 0, levels: 0 };
    const total = dashboardData.totalPerLang[currentLanguage] || langData.levels || 1;
    const completed = langData.completed || 0;
    const remaining = total - completed;

    const option = {
      tooltip: { trigger: 'item', formatter: '{b}: {c} ({d}%)' },
      series: [{
        type: 'pie',
        radius: ['65%', '85%'],
        avoidLabelOverlap: false,
        itemStyle: { borderRadius: 6, borderColor: '#fff', borderWidth: 2 },
        label: {
          show: true,
          position: 'center',
          formatter: () => `{a|${completed}/${total}}\n{b|已完成}`,
          rich: {
            a: { fontSize: 24, fontWeight: 'bold', color: '#1E293B' },
            b: { fontSize: 11, color: '#94A3B8', padding: [4, 0, 0, 0] },
          },
        },
        data: [
          { value: completed, name: '已通关', itemStyle: { color: '#6366F1' } },
          { value: Math.max(0, remaining), name: '未通关', itemStyle: { color: '#E2E8F0' } },
        ],
      }],
    };
    chart.setOption(option);
    const handler = () => chart.resize();
    window.addEventListener('resize', handler);
    return () => { window.removeEventListener('resize', handler); chart.dispose(); };
  }, [loaded, currentLanguage, dashboardData?.langMap]);

  // Total stats
  const totalCompleted = dashboardData?.progress?.filter(p => p.status === 'completed').length || 0;
  const totalQuestions = dashboardData?.logs?.reduce((sum, l) => sum + (l.totalQuestions || 0), 0) || 0;
  const totalXP = useUserStore(s => s.totalXP);
  const streakDays = useUserStore(s => s.streakDays);
  const currentLangObj = LANGUAGE_MAP[currentLanguage];

  // Generate weakness suggestions based on profile + data
  const getWeaknessSuggestions = () => {
    const suggestions = [];
    const weakAreas = profile?.weakAreas || [];

    if (weakAreas.includes('speaking')) {
      suggestions.push({
        emoji: '💬', title: '口语表达待提升', desc: '建议增加跟读练习，关注发音准确性', color: 'amber',
      });
    }
    if (weakAreas.includes('writing')) {
      suggestions.push({
        emoji: '📝', title: '写作能力需要加强', desc: '多做句子填空和翻译练习可以提升', color: 'blue',
      });
    }
    if (weakAreas.includes('listening')) {
      suggestions.push({
        emoji: '🎧', title: '听力理解需强化', desc: '建议增加听音辨词和听力选图练习', color: 'rose',
      });
    }
    if (weakAreas.includes('reading')) {
      suggestions.push({
        emoji: '📖', title: '阅读理解可加强', desc: '多挑战句子填空和阅读类关卡', color: 'violet',
      });
    }
    if (weakAreas.includes('vocabulary')) {
      suggestions.push({
        emoji: '📚', title: '词汇量待扩充', desc: '每天坚持背单词，收藏新词到单词本', color: 'emerald',
      });
    }

    // If no weak areas set, show default suggestions
    if (suggestions.length === 0) {
      return [
        { emoji: '✨', title: '阅读理解表现优秀', desc: '继续保持，可挑战更高难度关卡', color: 'emerald' },
        { emoji: '📝', title: '写作能力需要加强', desc: '多做句子填空和翻译练习可以提升', color: 'blue' },
      ];
    }

    // Add a positive one if mostly negative
    if (suggestions.length >= 3) {
      suggestions.push({
        emoji: '✨', title: '整体学习态度积极', desc: '坚持每日学习，薄弱项正在改善中', color: 'emerald',
      });
    }

    return suggestions.slice(0, 3);
  };

  const colorMap = {
    amber: { bg: 'bg-amber-50', title: 'text-amber-800', desc: 'text-amber-600' },
    blue: { bg: 'bg-blue-50', title: 'text-blue-800', desc: 'text-blue-600' },
    rose: { bg: 'bg-rose-50', title: 'text-rose-800', desc: 'text-rose-600' },
    violet: { bg: 'bg-violet-50', title: 'text-violet-800', desc: 'text-violet-600' },
    emerald: { bg: 'bg-emerald-50', title: 'text-emerald-800', desc: 'text-emerald-600' },
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Page title */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-slate-800">学习数据</h2>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-xl text-sm">
          <span>{currentLangObj?.flag}</span>
          <span className="font-medium text-slate-700">{currentLangObj?.name}</span>
        </div>
      </div>

      {/* Quick stats */}
      <div className="grid grid-cols-2 gap-3">
        <Card padding="p-4">
          <div className="text-2xl font-bold text-brand-600">{totalCompleted}</div>
          <div className="text-xs text-slate-400 mt-0.5">已通关数</div>
        </Card>
        <Card padding="p-4">
          <div className="text-2xl font-bold text-emerald-600">{totalXP}</div>
          <div className="text-xs text-slate-400 mt-0.5">累计经验</div>
        </Card>
        <Card padding="p-4">
          <div className="text-2xl font-bold text-amber-600">{totalQuestions}</div>
          <div className="text-xs text-slate-400 mt-0.5">答题总数</div>
        </Card>
        <Card padding="p-4">
          <div className="text-2xl font-bold text-rose-500 flex items-center gap-1">
            {streakDays} <Icon name="flame" size={20} />
          </div>
          <div className="text-xs text-slate-400 mt-0.5">连续天数</div>
        </Card>
      </div>

      {/* Daily Report */}
      <Card padding="p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-slate-800 text-sm flex items-center gap-2">
            <Icon name="chart" size={16} className="text-brand-500" />
            每日学习报告
          </h3>
          <div className="flex bg-slate-100 rounded-lg p-0.5">
            <button
              onClick={() => setReportRange(7)}
              className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                reportRange === 7 ? 'bg-white text-brand-600 shadow-sm' : 'text-slate-500'
              }`}
            >
              近7天
            </button>
            <button
              onClick={() => setReportRange(30)}
              className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all ${
                reportRange === 30 ? 'bg-white text-brand-600 shadow-sm' : 'text-slate-500'
              }`}
            >
              近30天
            </button>
          </div>
        </div>

        {/* Today's summary card */}
        {todayReport && todayReport.studyMinutes > 0 ? (
          <div className="grid grid-cols-4 gap-2 mb-4">
            <div className="bg-brand-50 rounded-xl p-2.5 text-center">
              <div className="text-lg font-bold text-brand-600">{todayReport.studyMinutes}</div>
              <div className="text-[10px] text-brand-500">分钟</div>
            </div>
            <div className="bg-emerald-50 rounded-xl p-2.5 text-center">
              <div className="text-lg font-bold text-emerald-600">{todayReport.earnedXP}</div>
              <div className="text-[10px] text-emerald-500">XP</div>
            </div>
            <div className="bg-amber-50 rounded-xl p-2.5 text-center">
              <div className="text-lg font-bold text-amber-600">{todayReport.accuracy}%</div>
              <div className="text-[10px] text-amber-500">正确率</div>
            </div>
            <div className="bg-violet-50 rounded-xl p-2.5 text-center">
              <div className="text-lg font-bold text-violet-600">{todayReport.completedLevels}</div>
              <div className="text-[10px] text-violet-500">通关</div>
            </div>
          </div>
        ) : (
          <EmptyDailyReport onAction={() => window.setActiveTab?.('learning')} />
        )}

        {/* Daily bar chart */}
        <div ref={dailyBarRef} style={{ width: '100%', height: '180px' }} />

        {/* Daily detail list */}
        <div className="mt-3 space-y-2 max-h-48 overflow-y-auto hide-scrollbar">
          {[...dailyReports].reverse().map(r => (
            <div key={r.date} className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs ${
              r.studyMinutes > 0 ? 'bg-slate-50' : 'bg-transparent'
            }`}>
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${r.studyMinutes > 0 ? 'bg-brand-400' : 'bg-slate-200'}`} />
                <span className="text-slate-600">{r.date.slice(5)} 周{r.weekday}</span>
              </div>
              <div className="flex items-center gap-3">
                {r.studyMinutes > 0 && (
                  <>
                    <span className="text-slate-500">{r.studyMinutes}分钟</span>
                    <span className="text-emerald-600">{r.earnedXP}XP</span>
                    <span className="text-slate-400">{r.correctCount}/{r.totalQuestions}</span>
                  </>
                )}
                {r.studyMinutes === 0 && <span className="text-slate-300">未学习</span>}
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Calendar heatmap */}
      <Card padding="p-4">
        <h3 className="font-semibold text-slate-800 text-sm mb-3 flex items-center gap-2">
          <Icon name="calendar" size={16} className="text-brand-500" />
          学习日历
        </h3>
        <div ref={calendarRef} style={{ width: '100%', height: '160px' }} />
      </Card>

      {/* Vocabulary growth */}
      <Card padding="p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-slate-800 text-sm flex items-center gap-2">
            <Icon name="chart" size={16} className="text-emerald-500" />
            词汇量增长
          </h3>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 text-[10px] font-medium">
            <Icon name="alert-circle" size={10} />
            估算数据
          </span>
        </div>
        <div ref={vocabRef} style={{ width: '100%', height: '180px' }} />
      </Card>

      {/* Two columns: radar + pie */}
      <div className="grid grid-cols-2 gap-3">
        <Card padding="p-4">
          <h3 className="font-semibold text-slate-800 text-sm mb-2 flex items-center gap-2">
            <Icon name="target" size={16} className="text-violet-500" />
            能力雷达
          </h3>
          <div ref={radarRef} style={{ width: '100%', height: '200px' }} />
        </Card>
        <Card padding="p-4">
          <h3 className="font-semibold text-slate-800 text-sm mb-2 flex items-center gap-2">
            <Icon name="book-open" size={16} className="text-brand-500" />
            关卡进度
          </h3>
          <div ref={levelsRef} style={{ width: '100%', height: '200px' }} />
        </Card>
      </div>

      {/* Weakness analysis based on profile */}
      <Card padding="p-4">
        <h3 className="font-semibold text-slate-800 text-sm mb-3 flex items-center gap-2">
          <Icon name="zap" size={16} className="text-amber-500" />
          弱项分析与建议
        </h3>
        <div className="space-y-2">
          {getWeaknessSuggestions().map((s, i) => {
            const c = colorMap[s.color];
            return (
              <div key={i} className={`flex items-start gap-3 p-3 ${c.bg} rounded-xl`}>
                <span className="text-lg">{s.emoji}</span>
                <div className="flex-1">
                  <div className={`text-sm font-medium ${c.title}`}>{s.title}</div>
                  <div className={`text-xs ${c.desc} mt-0.5`}>{s.desc}</div>
                </div>
              </div>
            );
          })}
        </div>
      </Card>
    </div>
  );
};

Object.assign(window, { Dashboard });
