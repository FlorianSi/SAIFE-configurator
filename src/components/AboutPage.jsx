import { strings } from '../utils/i18n.js';
import { REFERENCES } from '../data/references.js';

export default function AboutPage({ lang, onBack }) {
  const s = strings[lang];

  return (
    <div className="about-page fade-in">
      <button className="back-btn" onClick={onBack}>
        {s.aboutBack}
      </button>

      <header className="about-header">
        <h1 className="about-title">{s.aboutTitle}</h1>
      </header>

      <section className="about-section">
        <h2>{s.aboutIntroTitle}</h2>
        <p>{s.aboutIntroText}</p>
      </section>

      <section className="about-section">
        <h2>{s.aboutSourcesTitle}</h2>
        <p>{s.aboutSourcesText}</p>

        <div className="sources-list">
          {Object.entries(REFERENCES).map(([key, data]) => {
            if (!data.citations || data.citations.length === 0) return null;
            return (
              <div key={key} className="source-item">
                <p className="source-concept">
                  <strong>{data.concept[lang]}</strong>
                </p>
                <ul className="source-citations">
                  {data.citations.map((citation, idx) => (
                    <li key={idx} dangerouslySetInnerHTML={{ __html: citation }} />
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
