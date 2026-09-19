// ========== DimensionTabs ==========
// 四大类维度页签：五官 / 发型 / 外貌特性 / 服装
// Props: activeCategory, onChange(category), activeDimension, onChangeDimension(dimension)

const { motion } = window.Motion;

const CATEGORY_META = {
  face: {
    label: '五官',
    icon: '🎭',
    color: 'from-pink-400 to-rose-400',
    bgActive: 'bg-pink-50',
    textActive: 'text-pink-600',
    borderActive: 'border-pink-300',
  },
  hair: {
    label: '发型',
    icon: '💇',
    color: 'from-amber-400 to-orange-400',
    bgActive: 'bg-amber-50',
    textActive: 'text-amber-600',
    borderActive: 'border-amber-300',
  },
  feature: {
    label: '外貌特性',
    icon: '✨',
    color: 'from-violet-400 to-purple-400',
    bgActive: 'bg-violet-50',
    textActive: 'text-violet-600',
    borderActive: 'border-violet-300',
  },
  outfit: {
    label: '服装',
    icon: '👗',
    color: 'from-sky-400 to-blue-400',
    bgActive: 'bg-sky-50',
    textActive: 'text-sky-600',
    borderActive: 'border-sky-300',
  },
};

// 每个大类下的子维度
const DIMENSIONS_BY_CATEGORY = {
  face: [
    { key: 'faceShape', label: '脸型' },
    { key: 'eyeShape', label: '眼睛' },
    { key: 'eyebrow', label: '眉毛' },
    { key: 'expression', label: '嘴型' },
  ],
  hair: [
    { key: 'hairStyle', label: '发型' },
  ],
  feature: [
    { key: 'accessory', label: '装饰' },
    { key: 'skinTone', label: '肤色' },
  ],
  outfit: [
    { key: 'top', label: '上衣' },
    { key: 'bottom', label: '下装' },
    { key: 'background', label: '背景' },
  ],
};

function CategoryTabs({ activeCategory, onChange }) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1 hide-scrollbar">
      {Object.entries(CATEGORY_META).map(([key, meta]) => {
        const isActive = activeCategory === key;
        return (
          <motion.button
            key={key}
            whileTap={{ scale: 0.95 }}
            onClick={() => onChange(key)}
            className={`relative flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-semibold whitespace-nowrap border-2 transition-all ${
              isActive
                ? `${meta.bgActive} ${meta.textActive} ${meta.borderActive} shadow-sm`
                : 'bg-white text-slate-500 border-slate-100 hover:border-slate-200'
            }`}
          >
            <span className="text-base">{meta.icon}</span>
            <span>{meta.label}</span>
            {isActive && (
              <motion.div
                layoutId="category-indicator"
                className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-gradient-to-r ${meta.color}`}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            )}
          </motion.button>
        );
      })}
    </div>
  );
}

function DimensionPills({ category, activeDimension, onChange }) {
  const dims = DIMENSIONS_BY_CATEGORY[category] || [];
  return (
    <div className="flex gap-2 flex-wrap">
      {dims.map((dim) => {
        const isActive = activeDimension === dim.key;
        return (
          <motion.button
            key={dim.key}
            whileTap={{ scale: 0.92 }}
            onClick={() => onChange(dim.key)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all border ${
              isActive
                ? 'bg-slate-800 text-white border-slate-800 shadow-sm'
                : 'bg-white text-slate-500 border-slate-200 hover:border-slate-300'
            }`}
          >
            {dim.label}
          </motion.button>
        );
      })}
    </div>
  );
}

function DimensionTabs({ activeCategory, onCategoryChange, activeDimension, onDimensionChange }) {
  return (
    <div className="flex flex-col gap-3">
      <CategoryTabs activeCategory={activeCategory} onChange={(cat) => {
        onCategoryChange(cat);
        // Auto-select first dimension of new category
        const firstDim = DIMENSIONS_BY_CATEGORY[cat]?.[0]?.key;
        if (firstDim) onDimensionChange(firstDim);
      }} />
      <DimensionPills
        category={activeCategory}
        activeDimension={activeDimension}
        onChange={onDimensionChange}
      />
    </div>
  );
}

Object.assign(window, {
  DimensionTabs,
  CATEGORY_META,
  DIMENSIONS_BY_CATEGORY,
});

