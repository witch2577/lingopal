// ========== Web Speech API Service ==========
// Speech recognition + speech synthesis with graceful degradation

const SpeechService = {
  _recognition: null,
  _synthesis: null,

  // Language code mapping for speech APIs
  _langMap: {
    'zh-CN': 'zh-CN',
    'en': 'en-US',
    'ja': 'ja-JP',
    'ko': 'ko-KR',
    'es': 'es-ES',
    'ru': 'ru-RU',
    'de': 'de-DE',
    'fr': 'fr-FR',
    'it': 'it-IT',
    'pt': 'pt-PT',
    'ar': 'ar-SA',
    'hi': 'hi-IN',
    'th': 'th-TH',
    'vi': 'vi-VN',
    'tr': 'tr-TR',
    'pl': 'pl-PL',
    'nl': 'nl-NL',
    'el': 'el-GR',
    // Dialects fall back to Mandarin for speech APIs
    'yue': 'zh-CN',
    'nan': 'zh-CN',
    'zh-SC': 'zh-CN',
    'zh-DB': 'zh-CN',
    'sh': 'zh-CN',
    'hak': 'zh-CN',
  },

  isRecognitionSupported() {
    return 'SpeechRecognition' in window || 'webkitSpeechRecognition' in window;
  },

  isSynthesisSupported() {
    return 'speechSynthesis' in window;
  },

  getSpeechLang(langCode) {
    return this._langMap[langCode] || langCode;
  },

  // Check if a language supports speech (dialects don't)
  supportsSpeech(langCode) {
    return !!this._langMap[langCode];
  },

  // --- Speech Recognition ---
  createRecognition(lang = 'zh-CN') {
    if (!this.isRecognitionSupported()) return null;

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = this.getSpeechLang(lang);
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.maxAlternatives = 1;

    return recognition;
  },

  // --- Speech Synthesis ---
  speak(text, lang = 'zh-CN', rate = 1.0) {
    return new Promise((resolve, reject) => {
      if (!this.isSynthesisSupported()) {
        reject(new Error('Speech synthesis not supported'));
        return;
      }
      if (!text) { resolve(); return; }

      // Cancel any ongoing speech
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = this.getSpeechLang(lang);
      utterance.rate = rate;
      utterance.pitch = 1;
      utterance.volume = 1;

      // Try to pick a matching voice
      const voices = window.speechSynthesis.getVoices();
      const speechLang = this.getSpeechLang(lang);
      const matchingVoice = voices.find(v => v.lang.startsWith(speechLang.split('-')[0]));
      if (matchingVoice) {
        utterance.voice = matchingVoice;
      }

      utterance.onend = () => resolve();
      utterance.onerror = (e) => reject(e);

      window.speechSynthesis.speak(utterance);
    });
  },

  stopSpeaking() {
    if (this.isSynthesisSupported()) {
      window.speechSynthesis.cancel();
    }
  },

  isSpeaking() {
    return this.isSynthesisSupported() && window.speechSynthesis.speaking;
  },

  // get available voices
  getVoices() {
    if (!this.isSynthesisSupported()) return [];
    return window.speechSynthesis.getVoices();
  },
};

// Prime voices on load
if ('speechSynthesis' in window) {
  // Chrome needs an event to load voices
  window.speechSynthesis.onvoiceschanged = () => {};
  window.speechSynthesis.getVoices();
}

Object.assign(window, { SpeechService });
