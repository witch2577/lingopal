// ========== Character Items Metadata (MVP Simplified) ==========
// 8 dimensions x boy/girl placeholder SVG definitions.
// Naming: {layer}-{dimension}-{variant}.svg
// All items aligned with blueprint layer-dimension-variant spec.

const CHARACTER_ITEMS = [
  // ========== BACKGROUND (universal) ==========
  { id: 'bg-room',    category: 'background', gender: 'universal', name: '温馨房间', layer: 'background', path: 'universal/background/bg-room.png',    colorable: false },
  { id: 'bg-park',    category: 'background', gender: 'universal', name: '阳光公园', layer: 'background', path: 'universal/background/bg-park.png',    colorable: false },

  // ========== BODY (universal, gendered) ==========
  { id: 'body-boy',   category: 'body',       gender: 'boy',       name: '男生体型', layer: 'body',       path: 'universal/body/body-boy.svg',       colorable: true },
  { id: 'body-girl',  category: 'body',       gender: 'girl',      name: '女生体型', layer: 'body',       path: 'universal/body/body-girl.svg',      colorable: true },

  // ========== FACE SHAPE ==========
  // Boy
  { id: 'face-round-boy',  category: 'faceShape', gender: 'boy',  name: '圆脸',   layer: 'face', path: 'boy/face/face-round.png',  anchor: { x: 0, y: 0 } },
  { id: 'face-oval-boy',   category: 'faceShape', gender: 'boy',  name: '鹅蛋脸', layer: 'face', path: 'boy/face/face-oval.png',   anchor: { x: 0, y: 0 } },
  { id: 'face-square-boy', category: 'faceShape', gender: 'boy',  name: '方脸',   layer: 'face', path: 'boy/face/face-square.png', anchor: { x: 0, y: 0 } },
  // Girl
  { id: 'face-round-girl',  category: 'faceShape', gender: 'girl', name: '圆脸',   layer: 'face', path: 'girl/face/face-round.png',  anchor: { x: 0, y: 0 } },
  { id: 'face-oval-girl',   category: 'faceShape', gender: 'girl', name: '鹅蛋脸', layer: 'face', path: 'girl/face/face-oval.png',   anchor: { x: 0, y: 0 } },
  { id: 'face-square-girl', category: 'faceShape', gender: 'girl', name: '方脸',   layer: 'face', path: 'girl/face/face-square.png', anchor: { x: 0, y: 0 } },

  // ========== HAIR STYLE (back + front pairs) ==========
  // Boy
  { id: 'hair-short-boy-back',   category: 'hairStyle', gender: 'boy', name: '短发',   layer: 'hairBack',  path: 'boy/hair/hair-short-back.png',   colorable: true },
  { id: 'hair-short-boy-front',  category: 'hairStyle', gender: 'boy', name: '短发',   layer: 'hairFront', path: 'boy/hair/hair-short-front.png',  colorable: true },
  { id: 'hair-medium-boy-back',  category: 'hairStyle', gender: 'boy', name: '中发',   layer: 'hairBack',  path: 'boy/hair/hair-medium-back.png',  colorable: true },
  { id: 'hair-medium-boy-front', category: 'hairStyle', gender: 'boy', name: '中发',   layer: 'hairFront', path: 'boy/hair/hair-medium-front.png', colorable: true },
  { id: 'hair-long-boy-back',    category: 'hairStyle', gender: 'boy', name: '长发',   layer: 'hairBack',  path: 'boy/hair/hair-long-back.png',    colorable: true },
  { id: 'hair-long-boy-front',   category: 'hairStyle', gender: 'boy', name: '长发',   layer: 'hairFront', path: 'boy/hair/hair-long-front.png',   colorable: true },
  { id: 'hair-spiky-boy-back',   category: 'hairStyle', gender: 'boy', name: '刺猬头', layer: 'hairBack',  path: 'boy/hair/hair-spiky-back.svg',   colorable: true },
  { id: 'hair-spiky-boy-front',  category: 'hairStyle', gender: 'boy', name: '刺猬头', layer: 'hairFront', path: 'boy/hair/hair-spiky-front.png',  colorable: true },
  // Girl
  { id: 'hair-short-girl-back',   category: 'hairStyle', gender: 'girl', name: '短发',   layer: 'hairBack',  path: 'girl/hair/hair-short-back.png',   colorable: true },
  { id: 'hair-short-girl-front',  category: 'hairStyle', gender: 'girl', name: '短发',   layer: 'hairFront', path: 'girl/hair/hair-short-front.png',  colorable: true },
  { id: 'hair-bob-girl-back',     category: 'hairStyle', gender: 'girl', name: '波波头', layer: 'hairBack',  path: 'girl/hair/hair-bob-back.png',     colorable: true },
  { id: 'hair-bob-girl-front',    category: 'hairStyle', gender: 'girl', name: '波波头', layer: 'hairFront', path: 'girl/hair/hair-bob-front.png',    colorable: true },
  { id: 'hair-long-girl-back',    category: 'hairStyle', gender: 'girl', name: '长发',   layer: 'hairBack',  path: 'girl/hair/hair-long-back.png',    colorable: true },
  { id: 'hair-long-girl-front',   category: 'hairStyle', gender: 'girl', name: '长发',   layer: 'hairFront', path: 'girl/hair/hair-long-front.png',   colorable: true },
  { id: 'hair-twin-girl-back',    category: 'hairStyle', gender: 'girl', name: '双马尾', layer: 'hairBack',  path: 'girl/hair/hair-twin-back.png',    colorable: true },
  { id: 'hair-twin-girl-front',   category: 'hairStyle', gender: 'girl', name: '双马尾', layer: 'hairFront', path: 'girl/hair/hair-twin-front.svg',   colorable: true },

  // ========== EYE SHAPE ==========
  // Boy
  { id: 'eye-big-boy',    category: 'eyeShape', gender: 'boy',  name: '大眼睛', layer: 'eyes', path: 'boy/eyes/eye-big.png',    colorable: true },
  { id: 'eye-almond-boy', category: 'eyeShape', gender: 'boy',  name: '杏仁眼', layer: 'eyes', path: 'boy/eyes/eye-almond.png', colorable: true },
  { id: 'eye-droopy-boy', category: 'eyeShape', gender: 'boy',  name: '下垂眼', layer: 'eyes', path: 'boy/eyes/eye-droopy.png', colorable: true },
  // Girl
  { id: 'eye-big-girl',    category: 'eyeShape', gender: 'girl', name: '大眼睛', layer: 'eyes', path: 'girl/eyes/eye-big.png',    colorable: true },
  { id: 'eye-almond-girl', category: 'eyeShape', gender: 'girl', name: '杏仁眼', layer: 'eyes', path: 'girl/eyes/eye-almond.png', colorable: true },
  { id: 'eye-droopy-girl', category: 'eyeShape', gender: 'girl', name: '下垂眼', layer: 'eyes', path: 'girl/eyes/eye-droopy.png', colorable: true },

  // ========== EYEBROW SHAPE ==========
  // Boy
  { id: 'brow-straight-boy', category: 'eyebrow', gender: 'boy',  name: '直眉', layer: 'eyebrows', path: 'boy/eyebrows/brow-straight.png', colorable: true },
  { id: 'brow-arched-boy',   category: 'eyebrow', gender: 'boy',  name: '弯眉', layer: 'eyebrows', path: 'boy/eyebrows/brow-arched.png',   colorable: true },
  { id: 'brow-thick-boy',    category: 'eyebrow', gender: 'boy',  name: '粗眉', layer: 'eyebrows', path: 'boy/eyebrows/brow-thick.png',    colorable: true },
  // Girl
  { id: 'brow-straight-girl', category: 'eyebrow', gender: 'girl', name: '直眉', layer: 'eyebrows', path: 'girl/eyebrows/brow-straight.png', colorable: true },
  { id: 'brow-arched-girl',   category: 'eyebrow', gender: 'girl', name: '弯眉', layer: 'eyebrows', path: 'girl/eyebrows/brow-arched.png',   colorable: true },
  { id: 'brow-thick-girl',    category: 'eyebrow', gender: 'girl', name: '粗眉', layer: 'eyebrows', path: 'girl/eyebrows/brow-thick.png',    colorable: true },

  // ========== EXPRESSION / MOUTH (shared universal) ==========
  { id: 'expr-smile',   category: 'expression', gender: 'universal', name: '微笑',   layer: 'mouth', path: 'boy/mouth/expr-smile.svg',   colorable: false },
  { id: 'expr-serious', category: 'expression', gender: 'universal', name: '严肃',   layer: 'mouth', path: 'boy/mouth/expr-serious.png', colorable: false },
  { id: 'expr-sleepy',  category: 'expression', gender: 'universal', name: '困倦',   layer: 'mouth', path: 'boy/mouth/expr-sleepy.png',  colorable: false },

  // ========== TOP ==========
  // Boy
  { id: 'top-tshirt-boy',     category: 'top', gender: 'boy',  name: 'T恤',    layer: 'top', path: 'boy/top/top-tshirt.png',     colorable: true, unlockCondition: null },
  { id: 'top-sailor-boy',     category: 'top', gender: 'boy',  name: '水手服', layer: 'top', path: 'boy/top/top-sailor.png',     colorable: true, unlockCondition: null },
  { id: 'top-sportswear-boy', category: 'top', gender: 'boy',  name: '运动服', layer: 'top', path: 'boy/top/top-sportswear.png', colorable: true, unlockCondition: { type: 'streak', minStreak: 3 } },
  { id: 'top-hoodie-boy',     category: 'top', gender: 'boy',  name: '卫衣',   layer: 'top', path: 'boy/top/top-hoodie.png',     colorable: true, unlockCondition: { type: 'gp', minGP: 500 } },
  // Girl
  { id: 'top-tshirt-girl',     category: 'top', gender: 'girl', name: 'T恤',    layer: 'top', path: 'girl/top/top-tshirt.png',     colorable: true, unlockCondition: null },
  { id: 'top-sailor-girl',     category: 'top', gender: 'girl', name: '水手服', layer: 'top', path: 'girl/top/top-sailor.png',     colorable: true, unlockCondition: null },
  { id: 'top-sportswear-girl', category: 'top', gender: 'girl', name: '运动服', layer: 'top', path: 'girl/top/top-sportswear.png', colorable: true, unlockCondition: { type: 'streak', minStreak: 3 } },
  { id: 'top-hoodie-girl',     category: 'top', gender: 'girl', name: '卫衣',   layer: 'top', path: 'girl/top/top-hoodie.png',     colorable: true, unlockCondition: { type: 'gp', minGP: 500 } },

  // ========== BOTTOM ==========
  // Boy
  { id: 'bottom-shorts-boy', category: 'bottom', gender: 'boy',  name: '短裤', layer: 'bottom', path: 'boy/bottom/bottom-shorts.png', colorable: true, unlockCondition: null },
  { id: 'bottom-pants-boy',  category: 'bottom', gender: 'boy',  name: '长裤', layer: 'bottom', path: 'boy/bottom/bottom-pants.png',  colorable: true, unlockCondition: null },
  { id: 'bottom-skirt-boy',  category: 'bottom', gender: 'boy',  name: '短裙', layer: 'bottom', path: 'boy/bottom/bottom-skirt.svg',  colorable: true, unlockCondition: null },
  // Girl
  { id: 'bottom-shorts-girl',       category: 'bottom', gender: 'girl', name: '短裤',     layer: 'bottom', path: 'girl/bottom/bottom-shorts.png',       colorable: true, unlockCondition: null },
  { id: 'bottom-pants-girl',        category: 'bottom', gender: 'girl', name: '长裤',     layer: 'bottom', path: 'girl/bottom/bottom-pants.png',        colorable: true, unlockCondition: null },
  { id: 'bottom-pleated-skirt-girl', category: 'bottom', gender: 'girl', name: '百褶裙',   layer: 'bottom', path: 'girl/bottom/bottom-pleated-skirt.png', colorable: true, unlockCondition: null },

  // ========== ACCESSORY (shared universal) ==========
  { id: 'acc-glasses', category: 'accessory', gender: 'universal', name: '眼镜',   layer: 'accessory', path: 'boy/accessory/acc-glasses.png', colorable: false, unlockCondition: null },
  { id: 'acc-hairpin', category: 'accessory', gender: 'universal', name: '发夹',   layer: 'accessory', path: 'boy/accessory/acc-hairpin.png', colorable: true,  unlockCondition: null },

  // ========== REAL PNG ASSETS (第五批补产) ==========
  // Baby body - real photographic PNGs
  { id: 'baby-boy',  category: 'body',       gender: 'boy',  name: '男宝宝基准',  layer: 'body', path: 'universal/body/baby-boy.png',  colorable: false, unlockCondition: null, isBaby: true },
  { id: 'baby-girl', category: 'body',       gender: 'girl', name: '女宝宝基准',  layer: 'body', path: 'universal/body/baby-girl.png', colorable: false, unlockCondition: null, isBaby: true },
  // Mole - 3 variants (replace SVG mole-corner + add new positions)
  { id: 'mole-eye',    category: 'mole',    gender: 'universal', name: '眼角痣', layer: 'face', path: 'universal/mole/mole-eye.png',    colorable: false, unlockCondition: null },
  { id: 'mole-cheek',  category: 'mole',    gender: 'universal', name: '脸颊痣', layer: 'face', path: 'universal/mole/mole-cheek.png',  colorable: false, unlockCondition: null },
  { id: 'mole-mouth',  category: 'mole',    gender: 'universal', name: '嘴角痣', layer: 'face', path: 'universal/mole/mole-mouth.png',  colorable: false, unlockCondition: null },
  // Freckles - 2 variants
  { id: 'freckles-light', category: 'freckles', gender: 'universal', name: '淡雀斑', layer: 'face', path: 'universal/freckles/freckles-light.png', colorable: false, unlockCondition: null },
  { id: 'freckles-heavy', category: 'freckles', gender: 'universal', name: '浓雀斑', layer: 'face', path: 'universal/freckles/freckles-heavy.png', colorable: false, unlockCondition: null },
  // Blush - 2 variants
  { id: 'blush-pink',  category: 'blush',  gender: 'universal', name: '粉红腮红', layer: 'face', path: 'universal/blush/blush-pink.png',  colorable: false, unlockCondition: null },
  { id: 'blush-peach', category: 'blush',  gender: 'universal', name: '蜜桃腮红', layer: 'face', path: 'universal/blush/blush-peach.png', colorable: false, unlockCondition: null },
  // Glasses (PNG real assets, replacing SVG)
  { id: 'acc-glasses-round',   category: 'accessory', gender: 'universal', name: '圆框眼镜',   layer: 'accessory', path: 'universal/accessory/acc-glasses-round.png',   colorable: false, unlockCondition: null },
  { id: 'acc-glasses-rimless', category: 'accessory', gender: 'universal', name: '无框眼镜',   layer: 'accessory', path: 'universal/accessory/acc-glasses-rimless.png', colorable: false, unlockCondition: null },
  // Hair accessories for girl (PNG)
  { id: 'hairacc-bow',      category: 'hairAccessory', gender: 'girl', name: '蝴蝶结',   layer: 'accessory', path: 'girl/hairAccessory/hairacc-bow.png',      colorable: true,  unlockCondition: null },
  { id: 'hairacc-headband', category: 'hairAccessory', gender: 'girl', name: '发带',     layer: 'accessory', path: 'girl/hairAccessory/hairacc-headband.png', colorable: true,  unlockCondition: null },
];

// ---- Layer rendering order (bottom -> top) ----
// 13 layers per blueprint; neck and hands are MVP placeholders (empty)
const LAYER_ORDER = [
  'background',  // z: 0
  'body',        // z: 1
  'hairBack',    // z: 8  (behind face)
  'neck',        // z: 7  (MVP placeholder)
  'face',        // z: 6
  'eyes',        // z: 5
  'eyebrows',    // z: 4
  'mouth',       // z: 3
  'hairFront',   // z: 2  (bangs in front)
  'hands',       // z: 9  (MVP optional placeholder)
  'bottom',      // z: 10
  'top',         // z: 11
  'accessory',   // z: 12
];

// ---- Category -> config key mapping ----
const CATEGORY_CONFIG_KEY = {
  background: 'background',
  body: 'gender',           // resolved via gender, not a direct config key
  faceShape: 'faceShape',
  hairStyle: 'hairStyle',
  eyeShape: 'eyeShape',
  eyebrow: 'eyebrow',
  expression: 'expression',
  top: 'top',
  bottom: 'bottom',
  accessory: 'accessory',
};

// ---- Build indexes ----
const CHARACTER_ITEMS_INDEX = CHARACTER_ITEMS.reduce((idx, item) => {
  const key = `${item.category}:${item.gender}`;
  if (!idx[key]) idx[key] = [];
  idx[key].push(item);
  return idx;
}, {});

const CHARACTER_ITEMS_BY_ID = CHARACTER_ITEMS.reduce((idx, item) => {
  idx[item.id] = item;
  return idx;
}, {});

const CHARACTER_ITEMS_BY_LAYER = LAYER_ORDER.reduce((idx, layer) => {
  idx[layer] = CHARACTER_ITEMS.filter(item => item.layer === layer);
  return idx;
}, {});

// ---- Resolution helpers ----

/**
 * Resolve which item(s) should render for a given layer, based on CharacterConfig.
 * Returns an array of item objects (usually 0 or 1; hair returns 2 for back+front).
 */
function resolveLayerItems(layer, config) {
  const gender = config.gender || 'girl';

  switch (layer) {
    case 'background':
      return findItemsByCategory('background', config.background, gender);
    case 'body':
      return findItemsByCategory('body', gender === 'boy' ? 'body-boy' : 'body-girl', gender);
    case 'hairBack':
      return findItemsByCategory('hairStyle', config.hairStyle, gender)
        .filter(item => item.layer === 'hairBack');
    case 'hairFront':
      return findItemsByCategory('hairStyle', config.hairStyle, gender)
        .filter(item => item.layer === 'hairFront');
    case 'neck':
      // MVP placeholder: no neck SVGs yet
      return [];
    case 'face':
      return findItemsByCategory('faceShape', config.faceShape, gender);
    case 'eyes':
      return findItemsByCategory('eyeShape', config.eyeShape, gender);
    case 'eyebrows':
      return findItemsByCategory('eyebrow', config.eyebrow, gender);
    case 'mouth':
      return findItemsByCategory('expression', config.expression, gender);
    case 'hands':
      // MVP optional: no hand SVGs yet
      return [];
    case 'bottom':
      return findItemsByCategory('bottom', config.bottom, gender);
    case 'top':
      return findItemsByCategory('top', config.top, gender);
    case 'accessory':
      return config.accessory ? findItemsByCategory('accessory', config.accessory, gender) : [];
    default:
      return [];
  }
}

/**
 * Find items matching category + configValue, filtered by gender.
 * For universal items (expression, accessory, background), gender filter is skipped.
 * @param {string} category - item category
 * @param {string} configValue - config value (base id, may include gender suffix)
 * @param {string} [genderHint] - optional gender override ('boy'|'girl')
 */
function findItemsByCategory(category, configValue, genderHint) {
  if (!configValue) return [];

  // Try exact id match first
  const exact = CHARACTER_ITEMS_BY_ID[configValue];
  if (exact && exact.category === category) {
    return [exact];
  }

  // Resolve gender: explicit hint > store > default 'girl'
  let gender = genderHint;
  if (!gender && typeof useCharacterStore !== 'undefined') {
    gender = useCharacterStore.getState().config?.gender;
  }
  gender = gender || 'girl';

  const suffixes = [`-${gender}`, `-${gender === 'boy' ? 'boy' : 'girl'}`];

  for (const suffix of suffixes) {
    const suffixedId = configValue + suffix;
    const item = CHARACTER_ITEMS_BY_ID[suffixedId];
    if (item && item.category === category) {
      return [item];
    }
  }

  // Fallback: search by category index for gender + universal
  const candidates = [];
  const gendersToCheck = [gender, 'universal'];
  for (const g of gendersToCheck) {
    const key = `${category}:${g}`;
    const list = CHARACTER_ITEMS_INDEX[key] || [];
    for (const item of list) {
      // Match by base id (strip gender suffix and optional hair layer suffix)
      const baseId = item.id.replace(/-(boy|girl|universal)(-(back|front))?$/, '');
      const baseConfig = configValue.replace(/-(boy|girl|universal)(-(back|front))?$/, '');
      if (baseId === baseConfig || item.id === configValue) {
        candidates.push(item);
      }
    }
  }

  // For hairStyle, return all matched layers (back + front)
  if (category === 'hairStyle') {
    return candidates;
  }

  // For other categories, return first match
  return candidates.length ? [candidates[0]] : [];
}

/**
 * Resolve full 13-layer stack for a CharacterConfig.
 * Returns array of { layer, item, colorVar } objects in render order.
 */
function resolveCharacterLayers(config) {
  const results = [];
  for (const layer of LAYER_ORDER) {
    const items = resolveLayerItems(layer, config);
    for (const item of items) {
      let colorVar = null;
      if (item.colorable) {
        if (layer === 'hairBack' || layer === 'hairFront') {
          colorVar = config.hairColor;
        } else if (layer === 'eyes') {
          colorVar = config.eyeColor;
        } else if (layer === 'body') {
          colorVar = config.skinTone;
        }
        // top/bottom/accessory/eyebrows can also use currentColor but
        // MVP defaults to fixed SVG colors unless explicitly colorable
      }
      results.push({ layer, item, colorVar });
    }
  }
  return results;
}

/**
 * Get list of all SVG paths needed for a given config.
 * Used by AssetLoader for preloading.
 */
function getRequiredAssetPaths(config) {
  const layers = resolveCharacterLayers(config);
  return layers.map(l => l.item.path).filter(Boolean);
}

/**
 * Get available options for a dimension, filtered by gender.
 */
function getDimensionOptions(category, gender) {
  const key = `${category}:${gender}`;
  const genderItems = CHARACTER_ITEMS_INDEX[key] || [];
  const universalKey = `${category}:universal`;
  const universalItems = CHARACTER_ITEMS_INDEX[universalKey] || [];

  // Deduplicate by base id
  const seen = new Set();
  const all = [...genderItems, ...universalItems];
  return all.filter(item => {
    const baseId = item.id.replace(/-(boy|girl|universal)$/, '');
    if (seen.has(baseId)) return false;
    seen.add(baseId);
    return true;
  });
}

Object.assign(window, {
  CHARACTER_ITEMS,
  CHARACTER_ITEMS_INDEX,
  CHARACTER_ITEMS_BY_ID,
  CHARACTER_ITEMS_BY_LAYER,
  LAYER_ORDER,
  CATEGORY_CONFIG_KEY,
  resolveLayerItems,
  resolveCharacterLayers,
  getRequiredAssetPaths,
  getDimensionOptions,
});
