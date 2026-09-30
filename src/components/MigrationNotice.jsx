// ========== MigrationNotice ==========
// Popup shown once to existing users after v3 growth system migration.
// Explains the new 4-stage model and provides old image preview.

const { useState, useEffect } = React;
const { motion, AnimatePresence } = window.Motion;

function MigrationNotice({ onDismiss, onPreviewOld }) {
  const [visible, setVisible] = useState(true);

  const handleDismiss = () => {
    setVisible(false);
    setTimeout(() => {
      if (typeof onDismiss === 'function') onDismiss();
    }, 300);
  };

  const handlePreview = () => {
    if (typeof onPreviewOld === 'function') onPreviewOld();
  };

  if (!visible) return null;

  return React.createElement(
    motion.div,
    {
      className: 'fixed inset-0 z-[70] flex items-center justify-center p-4',
      style: { background: 'rgba(15, 23, 42, 0.6)', backdropFilter: 'blur(4px)' },
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
    },
    React.createElement(
      motion.div,
      {
        className: 'bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl',
        initial: { scale: 0.9, opacity: 0, y: 20 },
        animate: { scale: 1, opacity: 1, y: 0 },
        exit: { scale: 0.95, opacity: 0, y: 10 },
        transition: { duration: 0.3 },
      },
      [
        React.createElement('div', { key: 'icon', className: 'text-4xl text-center mb-3' }, '🎉'),
        React.createElement('h2', {
          key: 'title',
          className: 'text-lg font-bold text-slate-800 text-center mb-2',
        }, '成长体系升级'),
        React.createElement('div', {
          key: 'body',
          className: 'text-sm text-slate-600 space-y-2 mb-4',
        }, [
          React.createElement('p', { key: 'p1' }, '角色成长体系已升级为新四阶段：'),
          React.createElement('ul', { key: 'list', className: 'list-disc pl-5 space-y-1 text-slate-500' }, [
            React.createElement('li', { key: 's1' }, '婴儿（3-5岁）'),
            React.createElement('li', { key: 's2' }, '幼儿（10-15岁）'),
            React.createElement('li', { key: 's3' }, '成人（18岁）'),
            React.createElement('li', { key: 's4' }, '中青年（30岁）'),
          ]),
          React.createElement('p', { key: 'p2', className: 'text-xs text-slate-400 mt-2' },
            '原「少儿期」角色已归入「幼儿」阶段，成长点数和外观已自动保留。'),
        ]),
        React.createElement('div', { key: 'actions', className: 'flex flex-col gap-2' }, [
          React.createElement('button', {
            key: 'preview',
            onClick: handlePreview,
            className: 'w-full py-2.5 rounded-xl bg-slate-100 text-slate-700 text-sm font-medium hover:bg-slate-200 transition-colors',
          }, '👀 查看旧形象'),
          React.createElement('button', {
            key: 'dismiss',
            onClick: handleDismiss,
            className: 'w-full py-2.5 rounded-xl bg-brand-500 text-white text-sm font-medium hover:bg-brand-600 transition-colors',
          }, '知道了，继续'),
        ]),
      ]
    )
  );
}

Object.assign(window, { MigrationNotice });
