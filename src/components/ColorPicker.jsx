// ========== ColorPicker ==========
// 二次元风格色板选择器
// Props: value (hex), onChange(hex), label

const { useState, useMemo } = React;
const { motion, AnimatePresence } = window.Motion;

const PRESET_COLORS = [
  // 发色常用
  '#2D2D2D', '#4A3426', '#8B4513', '#D4A574', '#F5E6D3',
  '#E8C4C4', '#FFB7C5', '#FF69B4', '#C71585', '#9370DB',
  '#6A5ACD', '#4169E1', '#87CEEB', '#20B2AA', '#2E8B57',
  '#FFD700', '#FF8C00', '#FF4500', '#DC143C', '#FFFFFF',
  // 瞳色常用
  '#5D8AA8', '#4A6741', '#8B4513', '#DAA520', '#9370DB',
  '#708090', '#2F4F4F', '#191970', '#800000', '#556B2F',
  // 肤色常用
  '#F5D0C5', '#FFE0BD', '#E8C4A0', '#D2A679', '#8D5524',
  '#C68642', '#E0AC69', '#F1C27D', '#FFDBAC', '#5C3317',
];

function ColorPicker({ value, onChange, label }) {
  const [customOpen, setCustomOpen] = useState(false);
  const [customValue, setCustomValue] = useState(value || '#6366F1');

  const handleCustomChange = (e) => {
    const v = e.target.value;
    setCustomValue(v);
    if (/^#[0-9A-Fa-f]{6}$/.test(v)) {
      onChange(v);
    }
  };

  return (
    <div className="color-picker">
      {label && (
        <div className="text-xs font-medium text-slate-500 mb-2 tracking-wide">
          {label}
        </div>
      )}
      <div className="flex flex-wrap gap-2">
        {PRESET_COLORS.map((color) => (
          <motion.button
            key={color}
            whileTap={{ scale: 0.85 }}
            onClick={() => onChange(color)}
            className={`w-7 h-7 rounded-full border-2 transition-shadow ${
              value === color
                ? 'border-brand-500 shadow-md shadow-brand-500/30'
                : 'border-white/60 hover:border-brand-300'
            }`}
            style={{ backgroundColor: color }}
            aria-label={`选择颜色 ${color}`}
          />
        ))}
        <motion.button
          whileTap={{ scale: 0.85 }}
          onClick={() => setCustomOpen(!customOpen)}
          className={`w-7 h-7 rounded-full border-2 flex items-center justify-center text-xs ${
            customOpen
              ? 'border-brand-500 bg-brand-50 text-brand-600'
              : 'border-slate-200 bg-slate-50 text-slate-400 hover:border-slate-300'
          }`}
          title="自定义颜色"
        >
          +
        </motion.button>
      </div>
      <AnimatePresence>
        {customOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <div className="mt-2 flex items-center gap-2">
              <input
                type="color"
                value={customValue}
                onChange={handleCustomChange}
                className="w-8 h-8 rounded cursor-pointer border-0 p-0"
              />
              <input
                type="text"
                value={customValue}
                onChange={handleCustomChange}
                className="flex-1 px-2 py-1 text-xs rounded-lg border border-slate-200 bg-white text-slate-700 focus:outline-none focus:ring-2 focus:ring-brand-300"
                placeholder="#RRGGBB"
                maxLength={7}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

Object.assign(window, { ColorPicker });

