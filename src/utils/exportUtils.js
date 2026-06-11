/**
 * Export utilities: clipboard copy, .txt download, .json download.
 */

export function copyToClipboard(text) {
  return navigator.clipboard.writeText(text);
}

export function downloadTxt(text, filename = 'saife-system-prompt.txt') {
  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  triggerDownload(blob, filename);
}

export function downloadJson(config, promptText) {
  const payload = {
    meta: {
      generator: 'SAIFE Configurator',
      version: '0.1.0',
      generatedAt: new Date().toISOString(),
      note: 'This JSON contains both the raw system prompt and the structured configuration parameters for API integration.',
    },
    configuration: {
      ageGroup: config.ageGroup,
      languageLevel: config.languageLevel,
      bundesland: config.bundesland || null,
      role: config.role,
      socratesLevel: config.socratesLevel,
      subject: config.subject || null,
      emergencyRegion: config.emergencyRegion,
    },
    systemPrompt: promptText,
  };

  const json = JSON.stringify(payload, null, 2);
  const blob = new Blob([json], { type: 'application/json;charset=utf-8' });
  triggerDownload(blob, 'saife-config.json');
}

function triggerDownload(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
