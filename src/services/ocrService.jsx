// ========== OCR Service (Tesseract.js) ==========

const OCRService = {
  _worker: null,
  _initPromise: null,
  _currentLang: 'eng+chi_sim',

  _langMap: {
    'en': 'eng',
    'zh-CN': 'chi_sim',
    'ja': 'jpn',
    'ko': 'kor',
    'es': 'spa',
    'ru': 'rus',
    'de': 'deu',
    'fr': 'fra',
    'it': 'ita',
    'pt': 'por',
    'ar': 'ara',
    'hi': 'hin',
    'yue': 'chi_sim+chi_tra',
    'nan': 'chi_sim',
    'zh-SC': 'chi_sim',
    'zh-DB': 'chi_sim',
    'sh': 'chi_sim',
    'hak': 'chi_sim',
  },

  // Right-to-left languages
  _rtlLangs: ['ar'],

  getOCRLang(langCode) {
    return this._langMap[langCode] || 'eng';
  },

  async initWorker(lang = 'eng+chi_sim') {
    if (this._worker && this._currentLang === lang) {
      return this._worker;
    }
    if (this._initPromise) {
      return this._initPromise;
    }

    if (typeof Tesseract === 'undefined') {
      throw new Error('Tesseract.js not loaded');
    }

    this._initPromise = Tesseract.createWorker(lang, 1, {
      logger: m => {
        // can pass progress via callback
        if (typeof this._onProgress === 'function' && m.status) {
          this._onProgress(m);
        }
      },
    }).then(worker => {
      this._worker = worker;
      this._currentLang = lang;
      this._initPromise = null;
      return worker;
    }).catch(err => {
      this._initPromise = null;
      throw err;
    });

    return this._initPromise;
  },

  setProgressCallback(cb) {
    this._onProgress = cb;
  },

  async recognize(imageFile, lang = 'en') {
    const ocrLang = this.getOCRLang(lang);
    const worker = await this.initWorker(ocrLang);

    try {
      const result = await worker.recognize(imageFile);
      const data = result.data;
      return {
        text: data.text || '',
        words: (data.words || []).map(w => ({
          text: w.text,
          confidence: w.confidence,
          bbox: w.bbox, // { x0, y0, x1, y1 }
        })),
        confidence: data.confidence || 0,
      };
    } catch (e) {
      console.warn('OCR recognition failed:', e);
      throw e;
    }
  },

  async terminate() {
    if (this._worker) {
      await this._worker.terminate();
      this._worker = null;
      this._initPromise = null;
    }
  },

  // Mock OCR for testing (when Tesseract fails to load)
  mockRecognize() {
    return {
      text: 'Hello World\nWelcome to LingoPal\nThis is a sample text.',
      words: [
        { text: 'Hello', confidence: 96, bbox: { x0: 10, y0: 10, x1: 80, y1: 35 } },
        { text: 'World', confidence: 95, bbox: { x0: 90, y0: 10, x1: 160, y1: 35 } },
        { text: 'Welcome', confidence: 94, bbox: { x0: 10, y0: 50, x1: 110, y1: 75 } },
      ],
      confidence: 95,
    };
  },
};

Object.assign(window, { OCRService });
