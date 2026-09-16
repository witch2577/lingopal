// ========== NamingManager ==========
// Replaces {name} and {address} placeholders in dialogue templates
// with actual values from CharacterConfig.
// Falls back gracefully when names are not set.

const NAMING_FALLBACKS = {
  name: '小伙伴',
  address: '你',
};

/**
 * Replace placeholders in a template string.
 * @param {string} template - e.g. "{address}好棒！"
 * @param {Object} config - CharacterConfig with characterName, userNickname
 * @returns {string} replaced string
 */
function formatDialogue(template, config) {
  if (!template) return '';
  const name = config?.characterName?.trim() || NAMING_FALLBACKS.name;
  const address = config?.userNickname?.trim() || NAMING_FALLBACKS.address;
  return template
    .replace(/\{name\}/g, name)
    .replace(/\{address\}/g, address);
}

/**
 * Batch format multiple dialogue lines.
 * @param {string[]} templates
 * @param {Object} config
 * @returns {string[]}
 */
function formatDialogues(templates, config) {
  if (!Array.isArray(templates)) return [];
  return templates.map(t => formatDialogue(t, config));
}

Object.assign(window, {
  NamingManager: {
    formatDialogue,
    formatDialogues,
    fallbacks: NAMING_FALLBACKS,
  },
});
