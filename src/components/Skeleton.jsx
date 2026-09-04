// ========== Skeleton Loading Components ==========

const SkeletonLine = ({ width = '100%', height = '16px', className = '' }) => (
  <div
    className={`bg-slate-200 rounded animate-pulse ${className}`}
    style={{ width, height }}
  />
);

const SkeletonCircle = ({ size = '40px', className = '' }) => (
  <div
    className={`bg-slate-200 rounded-full animate-pulse ${className}`}
    style={{ width: size, height: size }}
  />
);

const SkeletonCard = ({ lines = 3, hasHeader = true, className = '' }) => (
  <div className={`bg-white rounded-2xl border border-slate-100 p-4 space-y-3 ${className}`}>
    {hasHeader && (
      <div className="flex items-center gap-3">
        <SkeletonCircle size="36px" />
        <div className="flex-1 space-y-2">
          <SkeletonLine width="60%" height="14px" />
          <SkeletonLine width="40%" height="10px" />
        </div>
      </div>
    )}
    {Array.from({ length: lines }).map((_, i) => (
      <SkeletonLine key={i} width={`${85 + Math.random() * 15}%`} height="12px" />
    ))}
  </div>
);

const SkeletonList = ({ count = 4, className = '' }) => (
  <div className={`space-y-3 ${className}`}>
    {Array.from({ length: count }).map((_, i) => (
      <div key={i} className="flex items-center gap-3 bg-white rounded-xl p-3 border border-slate-100">
        <SkeletonCircle size="40px" />
        <div className="flex-1 space-y-2">
          <SkeletonLine width="70%" height="14px" />
          <SkeletonLine width="45%" height="10px" />
        </div>
        <SkeletonLine width="48px" height="24px" className="rounded-lg" />
      </div>
    ))}
  </div>
);

const SkeletonGrid = ({ rows = 2, cols = 2, className = '' }) => (
  <div className={`grid grid-cols-${cols} gap-3 ${className}`}>
    {Array.from({ length: rows * cols }).map((_, i) => (
      <div key={i} className="bg-white rounded-2xl border border-slate-100 p-4 space-y-3">
        <SkeletonLine width="50%" height="24px" />
        <SkeletonLine width="80%" height="10px" />
      </div>
    ))}
  </div>
);

const SkeletonHeatmap = ({ className = '' }) => (
  <div className={`bg-white rounded-2xl border border-slate-100 p-4 ${className}`}>
    <SkeletonLine width="40%" height="16px" className="mb-3" />
    <div className="grid grid-cols-7 gap-1">
      {Array.from({ length: 28 }).map((_, i) => (
        <div key={i} className="aspect-square rounded bg-slate-200 animate-pulse" style={{ animationDelay: `${i * 0.02}s` }} />
      ))}
    </div>
  </div>
);

const SkeletonChart = ({ className = '' }) => (
  <div className={`bg-white rounded-2xl border border-slate-100 p-4 ${className}`}>
    <SkeletonLine width="50%" height="16px" className="mb-3" />
    <div className="h-40 bg-slate-100 rounded-xl animate-pulse flex items-end justify-around px-4 pb-4 gap-2">
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="w-full bg-slate-200 rounded-t-lg animate-pulse"
          style={{ height: `${20 + Math.random() * 60}%`, animationDelay: `${i * 0.05}s` }}
        />
      ))}
    </div>
  </div>
);

const PageSkeleton = ({ type = 'list', className = '' }) => {
  const skeletons = {
    list: (
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <SkeletonCircle size="48px" />
          <div className="flex-1 space-y-2">
            <SkeletonLine width="50%" height="18px" />
            <SkeletonLine width="30%" height="12px" />
          </div>
        </div>
        <SkeletonLine width="100%" height="40px" className="rounded-xl" />
        <SkeletonList count={5} />
      </div>
    ),
    cards: (
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <SkeletonCircle size="48px" />
          <div className="flex-1 space-y-2">
            <SkeletonLine width="50%" height="18px" />
            <SkeletonLine width="30%" height="12px" />
          </div>
        </div>
        <SkeletonLine width="100%" height="40px" className="rounded-xl" />
        <SkeletonGrid rows={2} cols={2} />
      </div>
    ),
    dashboard: (
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <SkeletonLine width="30%" height="20px" />
          <SkeletonLine width="80px" height="28px" className="rounded-lg" />
        </div>
        <SkeletonGrid rows={1} cols={2} />
        <SkeletonCard lines={2} />
        <SkeletonChart />
        <div className="grid grid-cols-2 gap-3">
          <SkeletonChart />
          <SkeletonChart />
        </div>
      </div>
    ),
    translator: (
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <SkeletonCircle size="48px" />
          <div className="flex-1 space-y-2">
            <SkeletonLine width="40%" height="18px" />
            <SkeletonLine width="60%" height="12px" />
          </div>
        </div>
        <SkeletonLine width="100%" height="40px" className="rounded-xl" />
        <SkeletonCard lines={4} hasHeader={false} className="h-40" />
        <SkeletonCard lines={3} hasHeader={false} className="h-32" />
      </div>
    ),
    quiz: (
      <div className="space-y-4">
        <SkeletonLine width="100%" height="8px" className="rounded-full" />
        <SkeletonCard lines={1} hasHeader={false} className="h-32" />
        <div className="space-y-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <SkeletonLine key={i} width="100%" height="52px" className="rounded-xl" />
          ))}
        </div>
      </div>
    ),
    leaderboard: (
      <div className="space-y-4">
        <SkeletonLine width="100%" height="40px" className="rounded-xl" />
        <div className="flex items-end justify-center gap-3 py-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <SkeletonCircle size="48px" />
              <div className="w-16 bg-slate-200 rounded-t-xl animate-pulse" style={{ height: `${60 + i * 20}px` }} />
            </div>
          ))}
        </div>
        <SkeletonList count={6} />
      </div>
    ),
  };

  return (
    <div className={`animate-fade-in ${className}`}>
      {skeletons[type] || skeletons.list}
    </div>
  );
};

Object.assign(window, {
  SkeletonLine, SkeletonCircle, SkeletonCard, SkeletonList,
  SkeletonGrid, SkeletonHeatmap, SkeletonChart, PageSkeleton,
});
