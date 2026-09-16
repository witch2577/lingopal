// ========== Character Persistence Layer ==========
// Handles localStorage primary storage + IndexedDB backup + version migration.
// Read order: localStorage → IndexedDB fallback → defaults.
// Write order: localStorage (sync) + IndexedDB (async, best-effort).

const CharacterSave = {
  // ---- Read ----

  async loadConfig(userId) {
    let raw = null;
    try {
      const ls = localStorage.getItem(LS_KEY_CONFIG);
      if (ls) raw = JSON.parse(ls);
    } catch (e) {
      console.error('[CharacterSave] loadConfig localStorage error:', e);
    }

    // Fallback to IndexedDB if localStorage missing or corrupted
    if (!raw && userId && window.db) {
      try {
        const rec = await db.characterConfigs.get(userId);
        if (rec?.data) raw = rec.data;
      } catch (e) {
        console.error('[CharacterSave] loadConfig IndexedDB error:', e);
      }
    }

    if (!raw) {
      raw = getDefaultCharacterConfig();
    }

    return migrateCharacterConfig(raw);
  },

  async loadGrowth(userId) {
    let raw = null;
    try {
      const ls = localStorage.getItem(LS_KEY_GROWTH);
      if (ls) raw = JSON.parse(ls);
    } catch (e) {
      console.error('[CharacterSave] loadGrowth localStorage error:', e);
    }

    if (!raw && userId && window.db) {
      try {
        const rec = await db.characterGrowth.get(userId);
        if (rec?.data) raw = rec.data;
      } catch (e) {
        console.error('[CharacterSave] loadGrowth IndexedDB error:', e);
      }
    }

    if (!raw) {
      raw = getDefaultCharacterGrowth();
    }

    return migrateCharacterGrowth(raw);
  },

  async loadNaming(userId) {
    let raw = null;
    try {
      const ls = localStorage.getItem(LS_KEY_NAMING);
      if (ls) raw = JSON.parse(ls);
    } catch (e) {
      console.error('[CharacterSave] loadNaming localStorage error:', e);
    }

    // Naming may also be embedded inside config (newer unified format)
    if (!raw) {
      try {
        const lsConfig = localStorage.getItem(LS_KEY_CONFIG);
        if (lsConfig) {
          const cfg = JSON.parse(lsConfig);
          if (cfg.characterName !== undefined || cfg.userNickname !== undefined) {
            raw = {
              _v: cfg._v || 0,
              characterName: cfg.characterName || '',
              userNickname: cfg.userNickname || '',
              customTitle: cfg.customTitle || '',
              nameChangedAt: cfg.nameChangedAt || null,
              nicknameHistory: cfg.nicknameHistory || [],
            };
          }
        }
      } catch (e) {
        /* ignore */
      }
    }

    if (!raw && userId && window.db) {
      try {
        const rec = await db.characterConfigs.get(userId);
        if (rec?.data?.characterName !== undefined) {
          const d = rec.data;
          raw = {
            _v: d._v || 0,
            characterName: d.characterName || '',
            userNickname: d.userNickname || '',
            customTitle: d.customTitle || '',
            nameChangedAt: d.nameChangedAt || null,
            nicknameHistory: d.nicknameHistory || [],
          };
        }
      } catch (e) {
        console.error('[CharacterSave] loadNaming IndexedDB error:', e);
      }
    }

    if (!raw) {
      raw = getDefaultCharacterNaming();
    }

    return migrateCharacterNaming(raw);
  },

  async loadSnapshots(userId) {
    let raw = [];
    try {
      const ls = localStorage.getItem(LS_KEY_SNAPSHOTS);
      if (ls) {
        const parsed = JSON.parse(ls);
        if (Array.isArray(parsed)) raw = parsed;
      }
    } catch (e) {
      console.error('[CharacterSave] loadSnapshots localStorage error:', e);
    }

    if (!raw.length && userId && window.db) {
      try {
        const recs = await db.characterSnapshots.where('userId').equals(userId).toArray();
        raw = recs.map(r => r.data).filter(Boolean);
      } catch (e) {
        console.error('[CharacterSave] loadSnapshots IndexedDB error:', e);
      }
    }

    return raw;
  },

  // ---- Write ----

  saveConfig(config) {
    try {
      localStorage.setItem(LS_KEY_CONFIG, JSON.stringify(config));
    } catch (e) {
      console.error('[CharacterSave] saveConfig localStorage error:', e);
    }
  },

  saveGrowth(growth) {
    try {
      localStorage.setItem(LS_KEY_GROWTH, JSON.stringify(growth));
    } catch (e) {
      console.error('[CharacterSave] saveGrowth localStorage error:', e);
    }
  },

  saveNaming(naming) {
    try {
      localStorage.setItem(LS_KEY_NAMING, JSON.stringify(naming));
    } catch (e) {
      console.error('[CharacterSave] saveNaming localStorage error:', e);
    }
  },

  saveSnapshots(snapshots) {
    try {
      localStorage.setItem(LS_KEY_SNAPSHOTS, JSON.stringify(snapshots));
    } catch (e) {
      console.error('[CharacterSave] saveSnapshots localStorage error:', e);
    }
  },

  // ---- IndexedDB backup (best-effort) ----

  async backupToDB(userId, config, growth, naming) {
    if (!userId || !window.db) return;
    try {
      await db.characterConfigs.put({ userId, data: config, updatedAt: Date.now() });
      await db.characterGrowth.put({ userId, data: growth, updatedAt: Date.now() });
    } catch (e) {
      console.error('[CharacterSave] backupToDB error:', e);
    }
  },

  async backupSnapshot(userId, snapshot) {
    if (!userId || !window.db) return;
    try {
      await db.characterSnapshots.add({ userId, data: snapshot, createdAt: Date.now() });
    } catch (e) {
      console.error('[CharacterSave] backupSnapshot error:', e);
    }
  },

  // ---- Full load / save helpers ----

  async loadAll(userId) {
    const [config, growth, naming, snapshots] = await Promise.all([
      this.loadConfig(userId),
      this.loadGrowth(userId),
      this.loadNaming(userId),
      this.loadSnapshots(userId),
    ]);
    return { config, growth, naming, snapshots };
  },

  saveAll(config, growth, naming) {
    this.saveConfig(config);
    this.saveGrowth(growth);
    this.saveNaming(naming);
  },

  // ---- Migration runner (called once at init) ----

  async runMigration(userId) {
    let migrated = false;

    // Attempt to load raw localStorage data and migrate if needed
    try {
      const configRaw = localStorage.getItem(LS_KEY_CONFIG);
      if (configRaw) {
        const parsed = JSON.parse(configRaw);
        if ((parsed._v || 0) < CURRENT_CONFIG_VERSION) {
          const migratedConfig = migrateCharacterConfig(parsed);
          this.saveConfig(migratedConfig);
          migrated = true;
          console.log('[CharacterSave] migrated config v' + (parsed._v || 0) + ' → v' + CURRENT_CONFIG_VERSION);
        }
      }
    } catch (e) {
      console.error('[CharacterSave] config migration error:', e);
    }

    try {
      const growthRaw = localStorage.getItem(LS_KEY_GROWTH);
      if (growthRaw) {
        const parsed = JSON.parse(growthRaw);
        if ((parsed._v || 0) < CURRENT_GROWTH_VERSION) {
          const migratedGrowth = migrateCharacterGrowth(parsed);
          this.saveGrowth(migratedGrowth);
          migrated = true;
          console.log('[CharacterSave] migrated growth v' + (parsed._v || 0) + ' → v' + CURRENT_GROWTH_VERSION);
        }
      }
    } catch (e) {
      console.error('[CharacterSave] growth migration error:', e);
    }

    try {
      const namingRaw = localStorage.getItem(LS_KEY_NAMING);
      if (namingRaw) {
        const parsed = JSON.parse(namingRaw);
        if ((parsed._v || 0) < CURRENT_NAMING_VERSION) {
          const migratedNaming = migrateCharacterNaming(parsed);
          this.saveNaming(migratedNaming);
          migrated = true;
          console.log('[CharacterSave] migrated naming v' + (parsed._v || 0) + ' → v' + CURRENT_NAMING_VERSION);
        }
      }
    } catch (e) {
      console.error('[CharacterSave] naming migration error:', e);
    }

    // Backup migrated data to IndexedDB
    if (migrated && userId) {
      const config = await this.loadConfig(userId);
      const growth = await this.loadGrowth(userId);
      const naming = await this.loadNaming(userId);
      await this.backupToDB(userId, config, growth, naming);
    }

    return migrated;
  },

  // ---- Reset (for testing / onboarding redo) ----

  async resetAll() {
    localStorage.removeItem(LS_KEY_CONFIG);
    localStorage.removeItem(LS_KEY_GROWTH);
    localStorage.removeItem(LS_KEY_NAMING);
    localStorage.removeItem(LS_KEY_SNAPSHOTS);
    console.log('[CharacterSave] all character data reset');
  },
};

Object.assign(window, { CharacterSave });
