import { useState, useMemo, useEffect } from 'react';
import ConfigurationForm from './components/ConfigurationForm.jsx';
import PromptPreview from './components/PromptPreview.jsx';
import AboutPage from './components/AboutPage.jsx';
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

export default function App() {
  const [lang, setLang] = useState('de');
  const [config, setConfig] = useState(DEFAULT_CONFIG);
  const [activeField, setActiveField] = useState(null);
  const [currentPage, setCurrentPage] = useState('configurator');

  // Sync the <html lang> attribute so screen readers use the correct phonetics
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

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
          <a
            href="https://github.com/FlorianSi/SAIFE-configurator"
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
            aria-label="GitHub Repository"
          >
            <svg viewBox="0 0 16 16" width="20" height="20" fill="currentColor" aria-hidden="true">
              <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.35 3.12.88.01.47.01.84.01.93 0 .22-.16.47-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
            </svg>
          </a>
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
        <div>
          {s.footer}{' '}
          <button 
            className="footer-link-btn" 
            onClick={() => setCurrentPage('about')}
          >
            {s.footerLink}
          </button>
        </div>
        <div className="footer-credits">
          Made with ♥️ in Potsdam
        </div>
      </footer>
    </div>
  );
}
