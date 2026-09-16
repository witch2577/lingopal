// ========== Shop Store ==========
// Handles consumable inventory, SC transaction history, daily feeding limits,
// and SC grant hooks (onboarding 30SC + first-goal 20SC).
// Persisted to localStorage + IndexedDB.

const LS_KEY_SHOP_INVENTORY = 'lp_shop_inventory';
const LS_KEY_SHOP_TRANSACTIONS = 'lp_shop_transactions';
const LS_KEY_SHOP_DAILY_FEED = 'lp_shop_daily_feed';
const LS_KEY_SHOP_ONBOARDING = 'lp_shop_onboarding';

const MAX_TRANSACTION_HISTORY = 200;

// ---- Default inventory ----
function getDefaultInventory() {
  return {
    consumables: {}, // { itemId: count }
  };
}

// ---- Load / Save helpers ----
function loadInventory() {
  try {
    const raw = localStorage.getItem(LS_KEY_SHOP_INVENTORY);
    if (raw) return JSON.parse(raw);
  } catch (e) { console.error('[ShopStore] loadInventory error:', e); }
  return getDefaultInventory();
}

function saveInventory(inventory) {
  try {
    localStorage.setItem(LS_KEY_SHOP_INVENTORY, JSON.stringify(inventory));
  } catch (e) { console.error('[ShopStore] saveInventory error:', e); }
}

function loadTransactions() {
  try {
    const raw = localStorage.getItem(LS_KEY_SHOP_TRANSACTIONS);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed)) return parsed;
    }
  } catch (e) { console.error('[ShopStore] loadTransactions error:', e); }
  return [];
}

function saveTransactions(transactions) {
  try {
    localStorage.setItem(LS_KEY_SHOP_TRANSACTIONS, JSON.stringify(transactions.slice(-MAX_TRANSACTION_HISTORY)));
  } catch (e) { console.error('[ShopStore] saveTransactions error:', e); }
}

function loadDailyFeed() {
  try {
    const raw = localStorage.getItem(LS_KEY_SHOP_DAILY_FEED);
    if (raw) return JSON.parse(raw);
  } catch (e) { console.error('[ShopStore] loadDailyFeed error:', e); }
  return { date: todayStr(), counts: {} };
}

function saveDailyFeed(dailyFeed) {
  try {
    localStorage.setItem(LS_KEY_SHOP_DAILY_FEED, JSON.stringify(dailyFeed));
  } catch (e) { console.error('[ShopStore] saveDailyFeed error:', e); }
}

function loadOnboardingState() {
  try {
    const raw = localStorage.getItem(LS_KEY_SHOP_ONBOARDING);
    if (raw) return JSON.parse(raw);
  } catch (e) { console.error('[ShopStore] loadOnboardingState error:', e); }
  return { welcomeGranted: false, firstGoalGranted: false };
}

function saveOnboardingState(state) {
  try {
    localStorage.setItem(LS_KEY_SHOP_ONBOARDING, JSON.stringify(state));
  } catch (e) { console.error('[ShopStore] saveOnboardingState error:', e); }
}

// ---- Transaction recorder ----
function recordTransaction(type, itemId, amount, balanceBefore, balanceAfter, note) {
  const tx = {
    id: 'tx_' + Date.now() + '_' + Math.random().toString(36).slice(2, 8),
    type,        // 'purchase' | 'feed' | 'grant_onboarding' | 'grant_first_goal' | 'refund'
    itemId,
    amount,      // SC amount (positive = in, negative = out)
    balanceBefore,
    balanceAfter,
    note,
    timestamp: Date.now(),
    date: todayStr(),
  };
  const txs = loadTransactions();
  txs.push(tx);
  saveTransactions(txs);
  return tx;
}

// ---- SC Grant Hooks (called by onboarding flow in Task 6) ----

/**
 * Grant 30 SC welcome bonus. Idempotent — safe to call multiple times.
 * Returns { granted: boolean, newBalance: number }
 */
function grantWelcomeStarCoins() {
  const state = loadOnboardingState();
  if (state.welcomeGranted) {
    return { granted: false, newBalance: null };
  }

  const charStore = useCharacterStore?.getState?.();
  if (!charStore || !charStore.config) {
    return { granted: false, newBalance: null, error: 'Character store not ready' };
  }

  const oldBalance = charStore.config.starCoin || 0;
  const newBalance = oldBalance + 30;

  charStore.setConfig({ starCoin: newBalance });
  recordTransaction('grant_onboarding', null, 30, oldBalance, newBalance, 'Welcome bonus: 30 SC');

  state.welcomeGranted = true;
  saveOnboardingState(state);

  return { granted: true, newBalance };
}

/**
 * Grant 20 SC first-goal bonus. Idempotent — safe to call multiple times.
 * Returns { granted: boolean, newBalance: number }
 */
function grantFirstGoalStarCoins() {
  const state = loadOnboardingState();
  if (state.firstGoalGranted) {
    return { granted: false, newBalance: null };
  }

  const charStore = useCharacterStore?.getState?.();
  if (!charStore || !charStore.config) {
    return { granted: false, newBalance: null, error: 'Character store not ready' };
  }

  const oldBalance = charStore.config.starCoin || 0;
  const newBalance = oldBalance + 20;

  charStore.setConfig({ starCoin: newBalance });
  recordTransaction('grant_first_goal', null, 20, oldBalance, newBalance, 'First goal bonus: 20 SC');

  state.firstGoalGranted = true;
  saveOnboardingState(state);

  return { granted: true, newBalance };
}

// ---- Purchase logic ----

/**
 * Purchase a shop item. Deducts SC, adds to purchasedItems, handles consumables inventory.
 * Returns { success: boolean, error?: string, transaction?: object }
 */
function purchaseShopItem(shopItemId) {
  const shopItem = SHOP_ITEMS_BY_ID[shopItemId];
  if (!shopItem) {
    return { success: false, error: '商品不存在' };
  }

  const charStore = useCharacterStore?.getState?.();
  if (!charStore || !charStore.config) {
    return { success: false, error: '角色数据未加载' };
  }

  const config = charStore.config;
  const purchasedItems = config.purchasedItems || [];

  // Check if already purchased (non-consumables)
  if (shopItem.category !== 'consumable' && purchasedItems.includes(shopItemId)) {
    return { success: false, error: '已拥有该商品' };
  }

  // Check unlock condition
  if (!isShopItemUnlocked(shopItem)) {
    return { success: false, error: '该商品尚未解锁' };
  }

  // Check SC balance
  const currentSC = config.starCoin || 0;
  if (currentSC < shopItem.price) {
    return { success: false, error: `星币不足，还差 ${shopItem.price - currentSC} SC` };
  }

  // Deduct SC
  const newBalance = currentSC - shopItem.price;

  // Update purchased items (non-consumables)
  let newPurchasedItems = purchasedItems;
  if (shopItem.category !== 'consumable') {
    newPurchasedItems = [...purchasedItems, shopItemId];
  }

  // Update inventory (consumables)
  let newInventory = loadInventory();
  if (shopItem.category === 'consumable') {
    newInventory = {
      ...newInventory,
      consumables: {
        ...newInventory.consumables,
        [shopItemId]: (newInventory.consumables[shopItemId] || 0) + 1,
      },
    };
    saveInventory(newInventory);
  }

  // Update equipped items (auto-equip on purchase for wearables)
  let newEquipped = config.equippedShopItems || { top: null, bottom: null, accessory: null, background: null };
  if (shopItem.wearSlot && shopItem.category !== 'consumable') {
    newEquipped = { ...newEquipped, [shopItem.wearSlot]: shopItemId };
  }

  // Apply config updates
  charStore.setConfig({
    starCoin: newBalance,
    purchasedItems: newPurchasedItems,
    equippedShopItems: newEquipped,
  });

  // Record transaction
  const tx = recordTransaction('purchase', shopItemId, -shopItem.price, currentSC, newBalance, `购买 ${shopItem.name}`);

  return { success: true, transaction: tx, newBalance };
}

// ---- Wardrobe logic ----

/**
 * Equip a purchased wearable item.
 * Returns { success: boolean, error?: string }
 */
function equipShopItem(shopItemId) {
  const shopItem = SHOP_ITEMS_BY_ID[shopItemId];
  if (!shopItem || shopItem.category === 'consumable') {
    return { success: false, error: '不可穿戴的商品' };
  }

  const charStore = useCharacterStore?.getState?.();
  if (!charStore || !charStore.config) {
    return { success: false, error: '角色数据未加载' };
  }

  const config = charStore.config;
  const purchasedItems = config.purchasedItems || [];
  if (!purchasedItems.includes(shopItemId)) {
    return { success: false, error: '尚未购买该商品' };
  }

  const equipped = { ...(config.equippedShopItems || { top: null, bottom: null, accessory: null, background: null }) };
  equipped[shopItem.wearSlot] = shopItemId;

  charStore.setConfig({ equippedShopItems: equipped });
  return { success: true };
}

/**
 * Unequip a wearable item from a slot.
 * Returns { success: boolean }
 */
function unequipShopItem(wearSlot) {
  const charStore = useCharacterStore?.getState?.();
  if (!charStore || !charStore.config) {
    return { success: false, error: '角色数据未加载' };
  }

  const equipped = { ...(charStore.config.equippedShopItems || { top: null, bottom: null, accessory: null, background: null }) };
  equipped[wearSlot] = null;

  charStore.setConfig({ equippedShopItems: equipped });
  return { success: true };
}

// ---- Consumable / Feeding logic ----

/**
 * Feed a consumable to the character.
 * Checks daily limit, deducts inventory, calls MoodEngine if available.
 * Returns { success: boolean, error?: string, moodBoost?: number }
 */
function feedConsumable(shopItemId) {
  const shopItem = SHOP_ITEMS_BY_ID[shopItemId];
  if (!shopItem || shopItem.category !== 'consumable') {
    return { success: false, error: '不是消耗品' };
  }

  // Check inventory
  const inventory = loadInventory();
  const currentCount = inventory.consumables[shopItemId] || 0;
  if (currentCount <= 0) {
    return { success: false, error: '库存不足' };
  }

  // Check daily limit
  let dailyFeed = loadDailyFeed();
  const today = todayStr();
  if (dailyFeed.date !== today) {
    dailyFeed = { date: today, counts: {} };
  }
  const dailyCount = dailyFeed.counts[shopItemId] || 0;
  if (dailyCount >= shopItem.dailyLimit) {
    return { success: false, error: `今日已达上限 (${shopItem.dailyLimit} 次)` };
  }

  // Check if character is in sick/sleeping state (do not override)
  const charStore = useCharacterStore?.getState?.();
  if (charStore?.growth?.currentMood === 'sick') {
    return { success: false, error: '角色正在沉睡，无法喂食' };
  }

  // Deduct inventory
  const newInventory = {
    ...inventory,
    consumables: {
      ...inventory.consumables,
      [shopItemId]: currentCount - 1,
    },
  };
  saveInventory(newInventory);

  // Update daily feed count
  dailyFeed.counts[shopItemId] = dailyCount + 1;
  saveDailyFeed(dailyFeed);

  // Apply mood boost via MoodEngine or direct growth update
  const moodBoost = shopItem.effect?.moodBoost || 0;
  if (moodBoost > 0 && charStore?.growth) {
    // If MoodEngine has a feed method, call it; otherwise direct update
    if (typeof window.MoodEngine !== 'undefined' && MoodEngine.feed) {
      MoodEngine.feed(moodBoost);
    } else {
      // Direct mood update: set to happy if not already
      if (charStore.growth.currentMood !== 'happy') {
        charStore.setGrowth({ currentMood: 'happy' });
      }
    }
  }

  // Record transaction (feed is not an SC transaction, but we log it)
  const tx = recordTransaction('feed', shopItemId, 0, null, null, `喂食 ${shopItem.name}`);

  return { success: true, moodBoost, remaining: currentCount - 1, dailyCount: dailyCount + 1 };
}

/**
 * Get current consumable inventory counts.
 * Returns { [itemId]: count }
 */
function getConsumableInventory() {
  const inventory = loadInventory();
  return inventory.consumables || {};
}

/**
 * Get today's feeding counts.
 * Returns { date: string, counts: { [itemId]: number } }
 */
function getDailyFeedCounts() {
  let dailyFeed = loadDailyFeed();
  const today = todayStr();
  if (dailyFeed.date !== today) {
    return { date: today, counts: {} };
  }
  return dailyFeed;
}

/**
 * Get SC transaction history.
 * Returns array of transaction objects.
 */
function getTransactionHistory(limit = 50) {
  const txs = loadTransactions();
  return txs.slice(-limit).reverse();
}

/**
 * Get current SC balance.
 */
function getStarCoinBalance() {
  const charStore = useCharacterStore?.getState?.();
  return charStore?.config?.starCoin || 0;
}

/**
 * Reset all shop data (for testing).
 */
function resetShopData() {
  localStorage.removeItem(LS_KEY_SHOP_INVENTORY);
  localStorage.removeItem(LS_KEY_SHOP_TRANSACTIONS);
  localStorage.removeItem(LS_KEY_SHOP_DAILY_FEED);
  localStorage.removeItem(LS_KEY_SHOP_ONBOARDING);
}

Object.assign(window, {
  grantWelcomeStarCoins,
  grantFirstGoalStarCoins,
  purchaseShopItem,
  equipShopItem,
  unequipShopItem,
  feedConsumable,
  getConsumableInventory,
  getDailyFeedCounts,
  getTransactionHistory,
  getStarCoinBalance,
  resetShopData,
  loadInventory,
  saveInventory,
  loadTransactions,
  saveTransactions,
});
