// ========== Multi-device Sync (Export/Import) ==========
const { useState, useEffect } = React;
const { motion } = window.Motion;

const DeviceSync = () => {
  const [syncStatus, setSyncStatus] = useState('idle'); // idle | exporting | importing | success | error
  const [lastSync, setLastSync] = useState(null);
  const [dataSize, setDataSize] = useState(0);
  const userId = useUserStore(s => s.userId);

  useEffect(() => {
    const saved = localStorage.getItem('lingopal_last_sync');
    if (saved) setLastSync(new Date(saved));
    calculateDataSize();
  }, [userId]);

  const calculateDataSize = async () => {
    if (!userId) return;
    const data = await exportUserData(userId);
    if (data) {
      const size = new Blob([JSON.stringify(data)]).size;
      setDataSize(size);
    }
  };

  const handleExport = async () => {
    if (!userId) {
      useUIStore.getState().showNotification('请先登录', 'error');
      return;
    }
    setSyncStatus('exporting');
    try {
      const data = await exportUserData(userId);
      if (!data) throw new Error('导出失败');
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `lingopal-backup-${todayStr()}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      localStorage.setItem('lingopal_last_sync', new Date().toISOString());
      setLastSync(new Date());
      setSyncStatus('success');
      useUIStore.getState().showNotification('数据导出成功！', 'success');
      setTimeout(() => setSyncStatus('idle'), 2000);
    } catch (e) {
      console.error('[DeviceSync] 导出失败:', e);
      setSyncStatus('error');
      useUIStore.getState().showNotification('导出失败，请重试', 'error');
    }
  };

  const handleImport = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!userId) {
      useUIStore.getState().showNotification('请先登录', 'error');
      return;
    }
    setSyncStatus('importing');
    try {
      const text = await file.text();
      const data = JSON.parse(text);
      const success = await importUserData(userId, data);
      if (success) {
        // Reload stores
        await useUserStore.getState().init();
        await useTranslationStore.getState().loadHistory();
        localStorage.setItem('lingopal_last_sync', new Date().toISOString());
        setLastSync(new Date());
        setSyncStatus('success');
        useUIStore.getState().showNotification('数据导入成功！已同步', 'success');
        calculateDataSize();
      } else {
        throw new Error('导入失败');
      }
      setTimeout(() => setSyncStatus('idle'), 2000);
    } catch (e) {
      console.error('[DeviceSync] 导入失败:', e);
      setSyncStatus('error');
      useUIStore.getState().showNotification('导入失败，文件可能损坏', 'error');
    }
    e.target.value = '';
  };

  const formatSize = (bytes) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  return (
    <div className="space-y-4">
      <div className="bg-brand-50 rounded-xl p-4 text-center">
        <div className="text-3xl mb-2">🔄</div>
        <h3 className="text-sm font-semibold text-brand-700">多设备同步</h3>
        <p className="text-xs text-brand-500 mt-1">通过导出/导入 JSON 文件同步学习进度</p>
      </div>

      {/* Data summary */}
      <div className="bg-white rounded-xl p-4 border border-slate-100">
        <h4 className="text-sm font-semibold text-slate-700 mb-3">数据概览</h4>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-slate-50 rounded-lg p-3 text-center">
            <p className="text-lg font-bold text-brand-600">{formatSize(dataSize)}</p>
            <p className="text-xs text-slate-500">数据大小</p>
          </div>
          <div className="bg-slate-50 rounded-lg p-3 text-center">
            <p className="text-lg font-bold text-brand-600">{lastSync ? '已同步' : '未同步'}</p>
            <p className="text-xs text-slate-500">
              {lastSync ? lastSync.toLocaleDateString() : '—'}
            </p>
          </div>
        </div>
      </div>

      {/* Export */}
      <div className="bg-white rounded-xl p-4 border border-slate-100 space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-lg">📤</div>
          <div className="flex-1">
            <h4 className="text-sm font-semibold">导出数据</h4>
            <p className="text-xs text-slate-500">将学习进度下载为 JSON 文件</p>
          </div>
        </div>
        <Button
          onClick={handleExport}
          variant="primary"
          fullWidth
          loading={syncStatus === 'exporting'}
          icon="upload"
        >
          {syncStatus === 'exporting' ? '导出中...' : '导出到文件'}
        </Button>
      </div>

      {/* Import */}
      <div className="bg-white rounded-xl p-4 border border-slate-100 space-y-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-lg">📥</div>
          <div className="flex-1">
            <h4 className="text-sm font-semibold">导入数据</h4>
            <p className="text-xs text-slate-500">从 JSON 文件恢复学习进度</p>
          </div>
        </div>
        <label className="block">
          <input
            type="file"
            accept=".json"
            onChange={handleImport}
            className="hidden"
            disabled={syncStatus === 'importing'}
          />
          <div className={`w-full py-2.5 px-4 rounded-xl text-sm font-medium text-center cursor-pointer transition-all ${
            syncStatus === 'importing'
              ? 'bg-slate-100 text-slate-400'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}>
            {syncStatus === 'importing' ? '导入中...' : '选择备份文件'}
          </div>
        </label>
      </div>

      {/* Tips */}
      <div className="bg-amber-50 rounded-xl p-4 border border-amber-100">
        <p className="text-xs text-amber-700">
          <span className="font-semibold">提示：</span>
          建议定期导出备份，以防浏览器数据丢失。导出的文件可以在其他设备或浏览器中导入。
        </p>
      </div>
    </div>
  );
};

Object.assign(window, { DeviceSync });
