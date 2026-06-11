import { strings, bundeslaender } from '../utils/i18n.js';
import ReferenceTooltip from './ReferenceTooltip.jsx';

const SOCRATES_MIN = 1;
const SOCRATES_MAX = 5;

export default function ConfigurationForm({ config, onConfigChange, lang, onFieldFocus, onFieldBlur }) {
  const s = strings[lang];

  function update(key, value) {
    onConfigChange({ ...config, [key]: value });
  }

  function handleFocus(key) {
    if (onFieldFocus) onFieldFocus(key);
  }

  function handleBlur() {
    if (onFieldBlur) onFieldBlur();
  }

  // To highlight when interacting, we bind to focus events (which trigger on click/tab)
  const bindEvents = (key) => ({
    onFocus: () => handleFocus(key),
    onBlur: handleBlur,
  });

  return (
    <div className="config-panel">
      <p className="config-section-title">
        {lang === 'de' ? '// konfiguration' : '// configuration'}
      </p>

      {/* AGE GROUP */}
      <div className="field" id="field-age-group" {...bindEvents('ageGroup')}>
        <div className="field-header">
          <label className="field-label" htmlFor="select-age-group">
            {s.ageGroupLabel}
          </label>
          <ReferenceTooltip refKey="cognitiveLoad" lang={lang} />
        </div>
        <select
          id="select-age-group"
          value={config.ageGroup}
          onChange={(e) => update('ageGroup', e.target.value)}
        >
          <option value="">
            {lang === 'de' ? '— Auswählen —' : '— Select —'}
          </option>
          <option value="grundschule">{s.ageGroupOptions.grundschule}</option>
          <option value="sekI">{s.ageGroupOptions.sekI}</option>
          <option value="sekII">{s.ageGroupOptions.sekII}</option>
        </select>
      </div>

      {/* LANGUAGE LEVEL */}
      <div className="field" id="field-language-level" {...bindEvents('languageLevel')}>
        <div className="field-header">
          <label className="field-label" htmlFor="select-language-level">
            {s.languageLevelLabel}
          </label>
          <ReferenceTooltip refKey="cognitiveLoad" lang={lang} />
        </div>
        <select
          id="select-language-level"
          value={config.languageLevel}
          onChange={(e) => update('languageLevel', e.target.value)}
        >
          <option value="leichte">{s.languageLevelOptions.leichte}</option>
          <option value="standard">{s.languageLevelOptions.standard}</option>
          <option value="fach">{s.languageLevelOptions.fach}</option>
        </select>
      </div>

      {/* SUBJECT */}
      <div className="field" id="field-subject" {...bindEvents('subject')}>
        <div className="field-header">
          <label className="field-label optional" htmlFor="input-subject">
            {s.subjectLabel}
          </label>
        </div>
        <input
          id="input-subject"
          type="text"
          value={config.subject}
          onChange={(e) => update('subject', e.target.value)}
          placeholder={s.subjectPlaceholder}
          maxLength={80}
        />
      </div>

      {/* ROLE */}
      <div className="field" id="field-role" {...bindEvents('role')}>
        <div className="field-header">
          <label className="field-label" htmlFor="select-role">
            {s.roleLabel}
          </label>
          <ReferenceTooltip refKey="parasocialBonding" lang={lang} />
        </div>
        <select
          id="select-role"
          value={config.role}
          onChange={(e) => update('role', e.target.value)}
        >
          <option value="tutor">{s.roleOptions.tutor}</option>
          <option value="persona">{s.roleOptions.persona}</option>
        </select>
      </div>

      {config.role === 'persona' && (
        <div className="field" id="field-persona-name" {...bindEvents('role')}>
          <div className="field-header">
            <label className="field-label" htmlFor="input-persona-name">
              {s.personaNameLabel}
            </label>
          </div>
          <input
            id="input-persona-name"
            type="text"
            value={config.personaName || ''}
            onChange={(e) => update('personaName', e.target.value)}
            placeholder={s.personaNamePlaceholder}
            maxLength={60}
            autoFocus
          />
        </div>
      )}

      {/* HELP LEVEL (Socratic Strictness) */}
      <div className="field" id="field-socrates" {...bindEvents('socratesLevel')}>
        <div className="field-header">
          <label className="field-label" htmlFor="slider-socrates">
            {s.socratesLabel}
          </label>
          <ReferenceTooltip refKey="socraticMethod" lang={lang} />
        </div>
        <div className="slider-container">
          <input
            id="slider-socrates"
            type="range"
            min={SOCRATES_MIN}
            max={SOCRATES_MAX}
            value={config.socratesLevel}
            onChange={(e) => update('socratesLevel', Number(e.target.value))}
          />
          <div className="slider-labels">
            <span>{lang === 'de' ? 'Direkte Hilfe' : 'Direct help'}</span>
            <span>{lang === 'de' ? 'Nur Fragen' : 'Questions only'}</span>
          </div>
          <div className="slider-value">
            [{config.socratesLevel}/5] {s.socratesLevels[config.socratesLevel]}
          </div>
        </div>
      </div>

      <p className="config-section-title" style={{ marginTop: '0.5rem' }}>
        {lang === 'de' ? '// curriculum' : '// curriculum'}
      </p>

      {/* BUNDESLAND */}
      <div className="field" id="field-bundesland" {...bindEvents('bundesland')}>
        <div className="field-header">
          <label className="field-label optional" htmlFor="select-bundesland">
            {s.bundeslandLabel}
          </label>
          <ReferenceTooltip refKey="bundeslandInfo" lang={lang} type="info" />
        </div>
        <select
          id="select-bundesland"
          value={config.bundesland}
          onChange={(e) => update('bundesland', e.target.value)}
        >
          <option value="">{s.bundeslandNone}</option>
          {bundeslaender.map((bl) => (
            <option key={bl.value} value={bl.value}>
              {lang === 'de' ? bl.labelDe : bl.labelEn}
            </option>
          ))}
        </select>
      </div>

      <p className="config-section-title" style={{ marginTop: '0.5rem' }}>
        {lang === 'de' ? '// sicherheit' : '// safety'}
      </p>

      {/* EMERGENCY REGION */}
      <div className="field" id="field-emergency" {...bindEvents('emergencyRegion')}>
        <div className="field-header">
          <label className="field-label" htmlFor="select-emergency">
            {s.emergencyRegionLabel}
          </label>
          <ReferenceTooltip refKey="crisisIntervention" lang={lang} />
        </div>
        <select
          id="select-emergency"
          value={config.emergencyRegion}
          onChange={(e) => update('emergencyRegion', e.target.value)}
        >
          <option value="de">{s.emergencyRegionOptions.de}</option>
          <option value="at">{s.emergencyRegionOptions.at}</option>
          <option value="ch">{s.emergencyRegionOptions.ch}</option>
          <option value="intl">{s.emergencyRegionOptions.intl}</option>
        </select>
      </div>

      {/* SAFETY BADGE */}
      <div className="safety-badge" role="status" aria-live="polite">
        <span className="safety-badge-icon">ℹ</span>
        <span>
          {s.safetyNote}
          {' '}
          <ReferenceTooltip refKey="dsgvo" lang={lang} />
        </span>
      </div>
    </div>
  );
}
