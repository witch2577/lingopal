// ========== FeedbackEngine ==========
// Detects learning moments and triggers character feedback.
// Manages session state (consecutive correct/wrong, mutual exclusion)
// and persistent cooldowns (localStorage, 24h per scenario).

const FB_SCENARIOS = FeedbackConfig.SCENARIOS;
const TYPE = FeedbackConfig.TYPE;
const THRESHOLDS = FeedbackConfig.THRESHOLDS;

const LS_KEY_COOLDOWNS = 'lp_feedback_cooldowns_v1';
const LS_KEY_SESSION = 'lp_feedback_session_v1';

// ---- Session state (in-memory, resets on page reload) ----
let _sessionState = {
  consecutiveCorrect: 0,
  consecutiveWrong: 0,
  comfortTriggered: false,
  lastFeedbackTime: 0,
  comfortScenarioLocked: false, // lock comfort after triggering, until user gets correct
};

// ---- Evolution flag (blocks all other feedback) ----
let _evolutionActive = false;

function _loadCooldowns() {
  try {
    const raw = localStorage.getItem(LS_KEY_COOLDOWNS);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

function _saveCooldowns(cooldowns) {
  try {
    localStorage.setItem(LS_KEY_COOLDOWNS, JSON.stringify(cooldowns));
  } catch (e) {
    console.error('[FeedbackEngine] save cooldowns error:', e);
  }
}

function _loadSession() {
  try {
    const raw = localStorage.getItem(LS_KEY_SESSION);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    return null;
  }
}

function _saveSession() {
  try {
    localStorage.setItem(LS_KEY_SESSION, JSON.stringify({
      consecutiveCorrect: _sessionState.consecutiveCorrect,
      consecutiveWrong: _sessionState.consecutiveWrong,
      comfortTriggered: _sessionState.comfortTriggered,
      lastFeedbackTime: _sessionState.lastFeedbackTime,
      comfortScenarioLocked: _sessionState.comfortScenarioLocked,
    }));
  } catch (e) {
    console.error('[FeedbackEngine] save session error:', e);
  }
}

// ---- Cooldown checks ----

function _isScenarioOnCooldown(scenario) {
  const cooldowns = _loadCooldowns();
  const lastTime = cooldowns[scenario];
  if (!lastTime) return false;
  const elapsed = Date.now() - lastTime;
  return elapsed < THRESHOLDS.sameScenarioCooldownHours * 3600 * 1000;
}

function _isMinIntervalMet() {
  const elapsed = Date.now() - _sessionState.lastFeedbackTime;
  return elapsed >= THRESHOLDS.minIntervalMs;
}

function _recordCooldown(scenario) {
  const cooldowns = _loadCooldowns();
  cooldowns[scenario] = Date.now();
  _saveCooldowns(cooldowns);
}

// ---- Public API ----

const FeedbackEngine = {
  /**
   * Reset session state (e.g. when starting a new practice session).
   */
  resetSession() {
    _sessionState = {
      consecutiveCorrect: 0,
      consecutiveWrong: 0,
      comfortTriggered: false,
      lastFeedbackTime: 0,
      comfortScenarioLocked: false,
    };
    _saveSession();
  },

  /**
   * Set evolution active flag. When true, all other feedback is suppressed.
   */
  setEvolutionActive(active) {
    _evolutionActive = active;
  },

  /**
   * Check if evolution is currently active.
   */
  isEvolutionActive() {
    return _evolutionActive;
  },

  /**
   * Call when a user submits an answer.
   * Returns feedback data if a trigger condition is met, else null.
   *
   * @param {boolean} isCorrect
   * @param {Object} context - { source: 'quiz'|'written'|'listening'|'typing', combo? }
   * @returns {Object|null} feedback descriptor
   */
  onAnswer(isCorrect, context) {
    if (_evolutionActive) return null;

    // Update consecutive counters
    if (isCorrect) {
      _sessionState.consecutiveCorrect++;
      _sessionState.consecutiveWrong = 0;
      // Reset comfort lock when user gets a correct answer
      if (_sessionState.comfortScenarioLocked) {
        _sessionState.comfortScenarioLocked = false;
      }
    } else {
      _sessionState.consecutiveWrong++;
      _sessionState.consecutiveCorrect = 0;
    }

    _saveSession();

    // Check min interval
    if (!_isMinIntervalMet()) return null;

    // ---- Encouragement: consecutive correct >= 5 ----
    if (isCorrect && _sessionState.consecutiveCorrect >= THRESHOLDS.consecutiveCorrect) {
      if (_sessionState.comfortTriggered) return null; // mutual exclusion
      if (_isScenarioOnCooldown(FB_SCENARIOS.CONSECUTIVE_CORRECT)) return null;

      _recordCooldown(FB_SCENARIOS.CONSECUTIVE_CORRECT);
      _sessionState.lastFeedbackTime = Date.now();
      _saveSession();
      return this._buildFeedback(FB_SCENARIOS.CONSECUTIVE_CORRECT);
    }

    // ---- Comfort: consecutive wrong >= 3 ----
    if (!isCorrect && _sessionState.consecutiveWrong >= THRESHOLDS.consecutiveWrong) {
      if (_sessionState.comfortScenarioLocked) return null; // no repeat comfort
      if (_isScenarioOnCooldown(FB_SCENARIOS.CONSECUTIVE_WRONG)) return null;

      _recordCooldown(FB_SCENARIOS.CONSECUTIVE_WRONG);
      _sessionState.lastFeedbackTime = Date.now();
      _sessionState.comfortTriggered = true;
      _sessionState.comfortScenarioLocked = true;
      _saveSession();
      return this._buildFeedback(FB_SCENARIOS.CONSECUTIVE_WRONG);
    }

    return null;
  },

  /**
   * Call when a level / practice session ends.
   * Returns feedback based on overall accuracy.
   *
   * @param {number} correctCount
   * @param {number} totalQuestions
   * @param {Object} context
   * @returns {Object|null}
   */
  onSessionEnd(correctCount, totalQuestions, context) {
    if (_evolutionActive) return null;
    if (totalQuestions <= 0) return null;
    if (!_isMinIntervalMet()) return null;

    const accuracy = Math.round((correctCount / totalQuestions) * 100);

    // ---- Encouragement: high accuracy >= 85% ----
    if (accuracy >= THRESHOLDS.highAccuracy) {
      if (_sessionState.comfortTriggered) return null;
      if (_isScenarioOnCooldown(FB_SCENARIOS.HIGH_ACCURACY)) return null;

      _recordCooldown(FB_SCENARIOS.HIGH_ACCURACY);
      _sessionState.lastFeedbackTime = Date.now();
      _saveSession();
      return this._buildFeedback(FB_SCENARIOS.HIGH_ACCURACY);
    }

    // ---- Comfort: high error rate < 60% ----
    if (accuracy < THRESHOLDS.highErrorRate) {
      if (_isScenarioOnCooldown(FB_SCENARIOS.HIGH_ERROR_RATE)) return null;

      _recordCooldown(FB_SCENARIOS.HIGH_ERROR_RATE);
      _sessionState.lastFeedbackTime = Date.now();
      _sessionState.comfortTriggered = true;
      _saveSession();
      return this._buildFeedback(FB_SCENARIOS.HIGH_ERROR_RATE);
    }

    return null;
  },

  /**
   * Build a feedback descriptor enriched with character data.
   * @private
   */
  _buildFeedback(scenario) {
    const charState = typeof useCharacterStore !== 'undefined'
      ? useCharacterStore.getState()
      : null;
    const stage = charState?.growth?.currentStage || 1;
    const config = charState?.config || {};

    const dialogueData = FeedbackConfig.getFeedbackDialogue(scenario, stage);
    if (!dialogueData) return null;

    const lines = NamingManager.formatDialogues(dialogueData.lines, config);

    return {
      scenario,
      type: dialogueData.type,
      stage,
      stageName: FeedbackConfig.STAGE_DISPLAY_NAMES[stage] || '婴儿期',
      lines,
      style: dialogueData.style,
      isInfant: stage === 1,
      timestamp: Date.now(),
    };
  },

  /**
   * Get current session state (for debugging / testing).
   */
  getSessionState() {
    return { ..._sessionState };
  },

  /**
   * Get cooldown state (for debugging / testing).
   */
  getCooldownState() {
    return _loadCooldowns();
  },

  /**
   * Force clear all cooldowns (for testing).
   */
  clearAllCooldowns() {
    try {
      localStorage.removeItem(LS_KEY_COOLDOWNS);
      localStorage.removeItem(LS_KEY_SESSION);
    } catch (e) {}
    this.resetSession();
  },

  /**
   * Check if feedback can be triggered for a scenario (for testing).
   */
  canTrigger(scenario) {
    if (_evolutionActive) return false;
    if (!_isMinIntervalMet()) return false;
    if (_isScenarioOnCooldown(scenario)) return false;
    return true;
  },
};

// Restore session from localStorage on load
(function initSession() {
  const saved = _loadSession();
  if (saved) {
    _sessionState = {
      consecutiveCorrect: saved.consecutiveCorrect || 0,
      consecutiveWrong: saved.consecutiveWrong || 0,
      comfortTriggered: saved.comfortTriggered || false,
      lastFeedbackTime: saved.lastFeedbackTime || 0,
      comfortScenarioLocked: saved.comfortScenarioLocked || false,
    };
  }
})();

Object.assign(window, {
  FeedbackEngine,
});
