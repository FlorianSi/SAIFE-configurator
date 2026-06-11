import { safetyGuardrails } from '../data/safetyGuardrails.js';
import { ageRules, socratesLevels, languageLevelRules, personaRules } from '../data/didacticRules.js';
import { bundeslandModules } from '../data/bundeslandModules.js';

const emergencyNumbers = {
  de: { number: '116 111', org: 'Telefonseelsorge Deutschland' },
  at: { number: '147', org: 'Rat auf Draht (Österreich)' },
  ch: { number: '143', org: 'Die Dargebotene Hand (Schweiz)' },
};

/**
 * Generates the full system prompt from the configuration state.
 * @param {Object} config - The full configuration object
 * @param {string} lang - 'de' | 'en'
 * @returns {Object} An object containing the full text string and an array of structured chunks for the UI preview.
 */
export function generatePrompt(config, lang) {
  const { ageGroup, languageLevel, bundesland, role, socratesLevel, subject, emergencyRegion } = config;

  if (!ageGroup) return { text: '', chunks: [] };

  const subjectStr = subject || (lang === 'de' ? 'das aktuelle Thema' : 'the current topic');

  // Construct Emergency Response Sentence
  let emergencyResponse;
  if (lang === 'de') {
    if (emergencyRegion === 'intl') {
      emergencyResponse = 'Das klingt sehr schwer. Bitte wende dich jetzt an jemanden, dem du vertraust — oder ruf an unter: lokale Notrufnummern / Fachstellen (örtliche Hilfsangebote). Ich bin ein KI-System und kann keine psychologische Hilfe leisten.';
    } else {
      const emergency = emergencyNumbers[emergencyRegion] || emergencyNumbers.de;
      emergencyResponse = `Das klingt sehr schwer. Bitte wende dich jetzt an jemanden, dem du vertraust — oder ruf an unter: ${emergency.number} (${emergency.org}). Ich bin ein KI-System und kann keine psychologische Hilfe leisten.`;
    }
  } else {
    if (emergencyRegion === 'intl') {
      emergencyResponse = 'That sounds very difficult. Please reach out to someone you trust or look for local emergency numbers and professional help services. I am an AI system and cannot provide psychological help.';
    } else {
      // For EN fallback to DE numbers since the numbers are the same
      const emergency = emergencyNumbers[emergencyRegion] || emergencyNumbers.de; 
      emergencyResponse = `That sounds very difficult. Please reach out to someone you trust — or contact: ${emergency.number} (${emergency.org}). I am an AI system and cannot provide psychological help.`;
    }
  }

  const chunks = [];
  const safety = safetyGuardrails[lang];

  // --- P0 Safety Guardrails ---
  // Header (no hover highlight)
  chunks.push({ key: 'safetyHeader', content: safety.header });
  
  // Crisis Intervention (highlighted on Emergency Region hover)
  const crisisText = safety.crisis.replace('{EMERGENCY_RESPONSE}', emergencyResponse);
  chunks.push({ key: 'emergencyRegion', content: crisisText });

  // Rest of safety rules (highlighted on Safety Badge or no highlight)
  const restText = safety.rest.replace('{SUBJECT}', subjectStr);
  chunks.push({ key: 'safetyBadge', content: restText });

  // --- Language Level Rules ---
  if (languageLevelRules[languageLevel]) {
    chunks.push({ key: 'languageLevel', content: languageLevelRules[languageLevel][lang] });
  }

  // --- Age Group Rules ---
  if (ageRules[ageGroup]) {
    chunks.push({ key: 'ageGroup', content: ageRules[ageGroup][lang] });
  }

  // --- Socratic / Help Level Rules ---
  if (socratesLevels[socratesLevel]) {
    chunks.push({ key: 'socratesLevel', content: socratesLevels[socratesLevel][lang] });
  }

  // --- Persona Rules ---
  if (role === 'persona' && personaRules.persona) {
    let personaContent = personaRules.persona[lang];
    const pName = config.personaName ? config.personaName.trim() : (lang === 'de' ? 'dieser historischen Figur' : 'this historical figure');
    personaContent = personaContent.replace(/\[Persona\]/g, pName);
    chunks.push({ key: 'role', content: personaContent });
  } else if (role === 'tutor' && personaRules.tutor) {
    chunks.push({ key: 'role', content: personaRules.tutor[lang] });
  }

  // --- Subject Scope ---
  if (subject) {
    const subjText = lang === 'de'
      ? `## THEMATISCHER FOKUS\nDieser Chatbot ist für das Fach/Thema "${subject}" konfiguriert. Alle Gesprächsinhalte sollen sich auf diesen Bereich beziehen. Nutze das Gentle-Redirecting-Protokoll [§7] für alle Off-Topic-Anfragen.`
      : `## THEMATIC FOCUS\nThis chatbot is configured for the subject/topic "${subject}". All conversation content should relate to this area. Use the Gentle Redirecting protocol [§7] for all off-topic requests.`;
    chunks.push({ key: 'subject', content: subjText });
  }

  // --- Bundesland Module ---
  if (bundesland) {
    const stateModule = bundeslandModules[bundesland] || bundeslandModules.default;
    chunks.push({ key: 'bundesland', content: stateModule[lang] });
  }

  // Footer removed as per user request (not strictly needed for injection prevention)

  const separator = '\n\n'; // Using double newline because elements are pre tags
  const text = chunks.map(c => c.content).filter(Boolean).join(separator + '---\n\n');

  return { text, chunks };
}
