// ========== Shop Items Data (17 SKU + 3 Consumables) ==========
// Product catalog for the game化商城.
// 17 standard SKUs per doc v2.5 section 4.5.7 + 3 consumables for MVP functionality.
// Each item maps to a CharacterItems part ID for real-time try-on.

const SHOP_ITEMS = [
  // === 上装 (6) ===
  {
    id: 'shop-top-tshirt',
    name: '白色基础T恤',
    category: 'top',
    price: 50,
    gender: 'universal',
    unlockType: 'purchase',
    wearSlot: 'top',
    itemId: 'top-tshirt',
    icon: '👕',
    image: 'assets/mall/shop-tshirt-white.png',
    description: '舒适的基础款T恤，百搭日常',
  },
  {
    id: 'shop-top-shirt',
    name: '条纹衬衫',
    category: 'top',
    price: 150,
    gender: 'universal',
    unlockType: 'purchase',
    wearSlot: 'top',
    itemId: 'top-sailor',
    icon: '👔',
    image: 'assets/mall/shop-shirt-striped.png',
    description: '经典条纹设计，清爽利落',
  },
  {
    id: 'shop-top-hoodie',
    name: '连帽卫衣',
    category: 'top',
    price: 350,
    gender: 'universal',
    unlockType: 'purchase',
    wearSlot: 'top',
    itemId: 'top-hoodie',
    icon: '🧥',
    image: 'assets/mall/shop-hoodie.png',
    description: '休闲连帽款式，街头潮流',
  },
  {
    id: 'shop-top-denim',
    name: '牛仔外套',
    category: 'top',
    price: 350,
    gender: 'universal',
    unlockType: 'purchase',
    wearSlot: 'top',
    itemId: 'top-hoodie',
    icon: '🧥',
    image: 'assets/mall/shop-denim-jacket.png',
    description: '百搭牛仔风格，永不过时',
  },
  {
    id: 'shop-top-suit',
    name: '格子西装',
    category: 'top',
    price: 1500,
    gender: 'universal',
    unlockType: 'purchase',
    wearSlot: 'top',
    itemId: 'top-sailor',
    icon: '🤵',
    image: 'assets/mall/shop-blazer-plaid.png',
    description: '高级格纹西装，绅士气质',
  },
  {
    id: 'shop-top-cardigan',
    name: '针织开衫',
    category: 'top',
    price: 150,
    gender: 'universal',
    unlockType: 'purchase',
    wearSlot: 'top',
    itemId: 'top-tshirt',
    icon: '🧶',
    image: 'assets/mall/shop-cardigan.png',
    description: '温暖针织质感，温柔治愈',
  },

  // === 下装 (4) ===
  {
    id: 'shop-bottom-jeans',
    name: '蓝色牛仔裤',
    category: 'bottom',
    price: 150,
    gender: 'universal',
    unlockType: 'purchase',
    wearSlot: 'bottom',
    itemId: 'bottom-pants',
    icon: '👖',
    image: 'assets/mall/shop-jeans.png',
    description: '经典蓝色牛仔，耐穿百搭',
  },
  {
    id: 'shop-bottom-shorts',
    name: '运动短裤',
    category: 'bottom',
    price: 50,
    gender: 'universal',
    unlockType: 'purchase',
    wearSlot: 'bottom',
    itemId: 'bottom-shorts',
    icon: '🩳',
    image: 'assets/mall/shop-shorts-sport.png',
    description: '透气运动款，活力满满',
  },
  {
    id: 'shop-bottom-skirt',
    name: '百褶裙',
    category: 'bottom',
    price: 150,
    gender: 'girl',
    unlockType: 'purchase',
    wearSlot: 'bottom',
    itemId: 'bottom-pleated-skirt',
    icon: '👗',
    image: 'assets/mall/shop-skirt-pleated.png',
    description: '甜美百褶裙，少女专属',
  },
  {
    id: 'shop-bottom-cargo',
    name: '工装裤',
    category: 'bottom',
    price: 150,
    gender: 'boy',
    unlockType: 'purchase',
    wearSlot: 'bottom',
    itemId: 'bottom-pants',
    icon: '👖',
    image: 'assets/mall/shop-pants-khaki.png',
    description: '帅气工装风，酷感十足',
  },

  // === 配饰 (4) ===
  {
    id: 'shop-acc-glasses',
    name: '黑框眼镜',
    category: 'accessory',
    price: 50,
    gender: 'universal',
    unlockType: 'purchase',
    wearSlot: 'accessory',
    itemId: 'acc-glasses',
    icon: '👓',
    image: 'assets/mall/shop-glasses.png',
    description: '知性黑框眼镜，文艺气质',
  },
  {
    id: 'shop-acc-hairpin',
    name: '星星发夹',
    category: 'accessory',
    price: 150,
    gender: 'girl',
    unlockType: 'purchase',
    wearSlot: 'accessory',
    itemId: 'acc-hairpin',
    icon: '✨',
    image: 'assets/mall/shop-hairclip-star.png',
    description: '闪亮星星发夹，梦幻点缀',
  },
  {
    id: 'shop-acc-watch',
    name: '运动手表',
    category: 'accessory',
    price: 350,
    gender: 'universal',
    unlockType: 'language',
    wearSlot: 'accessory',
    itemId: 'acc-glasses',
    icon: '⌚',
    image: 'assets/mall/shop-watch.png',
    description: '学习日语30分钟即可解锁',
    unlockParam: { language: 'ja', minutes: 30 },
  },
  {
    id: 'shop-acc-earbuds',
    name: '无线耳机',
    category: 'accessory',
    price: 350,
    gender: 'universal',
    unlockType: 'achievement',
    wearSlot: 'accessory',
    itemId: 'acc-hairpin',
    icon: '🎧',
    image: 'assets/mall/shop-earphones.png',
    description: '连续7天打卡即可解锁',
    unlockParam: { achievement: 'streak-7' },
  },

  // === 背景 (3) ===
  {
    id: 'shop-bg-room',
    name: '温馨卧室',
    category: 'background',
    price: 150,
    gender: 'universal',
    unlockType: 'purchase',
    wearSlot: 'background',
    itemId: 'bg-room',
    icon: '🏠',
    image: 'assets/mall/shop-bg-bedroom.png',
    description: '温馨居家背景，舒适放松',
  },
  {
    id: 'shop-bg-campus',
    name: '校园操场',
    category: 'background',
    price: 350,
    gender: 'universal',
    unlockType: 'language',
    wearSlot: 'background',
    itemId: 'bg-park',
    icon: '🏫',
    image: 'assets/mall/shop-bg-campus.png',
    description: '学习英语30分钟即可解锁',
    unlockParam: { language: 'en', minutes: 30 },
  },
  {
    id: 'shop-bg-starry',
    name: '星空夜景',
    category: 'background',
    price: 800,
    gender: 'universal',
    unlockType: 'achievement',
    wearSlot: 'background',
    itemId: 'bg-room',
    icon: '🌌',
    image: 'assets/mall/shop-bg-starry.png',
    description: '口语达人成就即可解锁',
    unlockParam: { achievement: 'oral-master' },
  },

  // === 消耗品 (3) - MVP额外添加以满足功能验收 ===
  {
    id: 'shop-snack-cookie',
    name: '能量饼干',
    category: 'consumable',
    price: 50,
    gender: 'universal',
    unlockType: 'purchase',
    wearSlot: null,
    itemId: null,
    icon: '🍪',
    image: 'assets/mall/shop-snack-cookie.png',
    description: '补充能量的小饼干',
    effect: { moodBoost: 5, gpBonus: 0 },
    dailyLimit: 3,
  },
  {
    id: 'shop-snack-candy',
    name: '水果糖',
    category: 'consumable',
    price: 30,
    gender: 'universal',
    unlockType: 'purchase',
    wearSlot: null,
    itemId: null,
    icon: '🍬',
    image: 'assets/mall/shop-snack-candy.png',
    description: '甜甜的水果糖',
    effect: { moodBoost: 3, gpBonus: 0 },
    dailyLimit: 5,
  },
  {
    id: 'shop-snack-drink',
    name: '能量饮料',
    category: 'consumable',
    price: 80,
    gender: 'universal',
    unlockType: 'purchase',
    wearSlot: null,
    itemId: null,
    icon: '🥤',
    image: 'assets/mall/shop-snack-drink.png',
    description: '提神能量饮料',
    effect: { moodBoost: 8, gpBonus: 0 },
    dailyLimit: 2,
  },
];

// ---- Category labels for UI ----
const SHOP_CATEGORY_LABELS = {
  top: '上装',
  bottom: '下装',
  accessory: '配饰',
  background: '背景',
  consumable: '消耗品',
};

// ---- Category order ----
const SHOP_CATEGORY_ORDER = ['top', 'bottom', 'accessory', 'background', 'consumable'];

// ---- Build indexes ----
const SHOP_ITEMS_BY_ID = SHOP_ITEMS.reduce((idx, item) => {
  idx[item.id] = item;
  return idx;
}, {});

const SHOP_ITEMS_BY_CATEGORY = SHOP_ITEMS.reduce((idx, item) => {
  if (!idx[item.category]) idx[item.category] = [];
  idx[item.category].push(item);
  return idx;
}, {});

// ---- Resolve shop item to CharacterItems part ID with gender suffix ----
function resolveShopItemPartId(shopItem, gender) {
  if (!shopItem || !shopItem.itemId) return null;
  const baseId = shopItem.itemId;
  // For universal items, try gendered variant first, fallback to base
  if (shopItem.gender === 'universal') {
    const genderedId = `${baseId}-${gender === 'boy' ? 'boy' : 'girl'}`;
    if (CHARACTER_ITEMS_BY_ID[genderedId]) return genderedId;
    if (CHARACTER_ITEMS_BY_ID[baseId]) return baseId;
    return null;
  }
  // For gender-specific items
  const genderedId = `${baseId}-${shopItem.gender === 'boy' ? 'boy' : 'girl'}`;
  if (CHARACTER_ITEMS_BY_ID[genderedId]) return genderedId;
  if (CHARACTER_ITEMS_BY_ID[baseId]) return baseId;
  return null;
}

// ---- Check if an item is unlocked for the user ----
function isShopItemUnlocked(shopItem, userState) {
  if (shopItem.unlockType === 'purchase') return true;
  if (shopItem.unlockType === 'language') {
    // Check if user has learned the required language for enough minutes
    const param = shopItem.unlockParam;
    if (!param || !param.language) return false;
    // MVP simplified: check unlockedItems in config
    const config = useCharacterStore?.getState?.()?.config;
    if (config?.unlockedItems?.includes(shopItem.id)) return true;
    return false;
  }
  if (shopItem.unlockType === 'achievement') {
    const param = shopItem.unlockParam;
    if (!param || !param.achievement) return false;
    const achievements = useUserStore?.getState?.()?.achievements || [];
    if (achievements.includes(param.achievement)) return true;
    // Also check unlockedItems
    const config = useCharacterStore?.getState?.()?.config;
    if (config?.unlockedItems?.includes(shopItem.id)) return true;
    return false;
  }
  return true;
}

// ---- Get unlock description text ----
function getUnlockDescription(shopItem) {
  if (shopItem.unlockType === 'purchase') return null;
  if (shopItem.unlockType === 'language') {
    const lang = shopItem.unlockParam?.language || '?';
    const mins = shopItem.unlockParam?.minutes || 30;
    return `学习${lang}累计${mins}分钟解锁`;
  }
  if (shopItem.unlockType === 'achievement') {
    return shopItem.description || '达成成就解锁';
  }
  return null;
}

Object.assign(window, {
  SHOP_ITEMS,
  SHOP_CATEGORY_LABELS,
  SHOP_CATEGORY_ORDER,
  SHOP_ITEMS_BY_ID,
  SHOP_ITEMS_BY_CATEGORY,
  resolveShopItemPartId,
  isShopItemUnlocked,
  getUnlockDescription,
});
