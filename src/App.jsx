import { useState, useMemo } from 'react';
import './index.css';
import ConfigurationForm from './components/ConfigurationForm.jsx';
import PromptPreview from './components/PromptPreview.jsx';
import { strings } from './utils/i18n.js';
import { generatePrompt } from './utils/promptGenerator.js';

function detectEmergencyRegion() {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (tz === 'Europe/Berlin' || tz === 'Europe/Busingen') return 'de';
    if (tz === 'Europe/Vienna') return 'at';
    if (tz === 'Europe/Zurich') return 'ch';
  } catch {
    // Fallback if Intl API is unavailable
  }
  return 'intl'; // Default to worldwide
}

const DEFAULT_CONFIG = {
  ageGroup: '',
  languageLevel: 'leichte',
  bundesland: '',
  role: 'tutor',
  socratesLevel: 3,
  subject: '',
  emergencyRegion: detectEmergencyRegion(),
  personaName: '',
};

import AboutPage from './components/AboutPage.jsx';

export default function App() {
  const [lang, setLang] = useState('de');
  const [config, setConfig] = useState(DEFAULT_CONFIG);
  const [activeField, setActiveField] = useState(null);
  const [currentPage, setCurrentPage] = useState('configurator');

  const s = strings[lang];

  const promptData = useMemo(() => {
    if (!config.ageGroup) return { text: '', chunks: [] };
    return generatePrompt(config, lang);
  }, [config, lang]);

  return (
    <div className="app">
      {/* HEADER */}
      <header className="header">
        <div className="header-brand">
          <h1 className="header-title">
            <span>SAIFE</span> {lang === 'de' ? 'Konfigurator' : 'Configurator'}
          </h1>
          <p className="header-subtitle">
            <span className="subtitle-letter">S</span>afe{' '}
            <span className="subtitle-letter">A</span>
            <span className="subtitle-letter">I</span>{' '}
            <span className="subtitle-letter">F</span>ramework for{' '}
            <span className="subtitle-letter">E</span>ducation
          </p>
        </div>
        <div className="header-right">
          {/* Language Toggle */}
          <nav className="lang-toggle" aria-label="Language / Sprache">
            <button
              id="btn-lang-de"
              className={lang === 'de' ? 'active' : ''}
              onClick={() => setLang('de')}
              aria-pressed={lang === 'de'}
            >
              DE
            </button>
            <button
              id="btn-lang-en"
              className={lang === 'en' ? 'active' : ''}
              onClick={() => setLang('en')}
              aria-pressed={lang === 'en'}
            >
              EN
            </button>
          </nav>
        </div>
      </header>

      {/* MAIN CONTENT AREA */}
      {currentPage === 'configurator' ? (
        <main className="main">
          <ConfigurationForm
            config={config}
            onConfigChange={setConfig}
            lang={lang}
            onFieldFocus={setActiveField}
            onFieldBlur={() => setActiveField(null)}
          />
          <PromptPreview
            promptText={promptData.text}
            promptChunks={promptData.chunks}
            config={config}
            lang={lang}
            activeField={activeField}
          />
        </main>
      ) : (
        <main className="main single-pane">
          <AboutPage lang={lang} onBack={() => setCurrentPage('configurator')} />
        </main>
      )}

      {/* FOOTER */}
      <footer className="footer">
        {s.footer}{' '}
        <button 
          className="footer-link-btn" 
          onClick={() => setCurrentPage('about')}
        >
          {s.footerLink}
        </button>
      </footer>
    </div>
  );
}
