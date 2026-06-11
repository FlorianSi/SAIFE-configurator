import { useState, useEffect, useRef } from 'react';
import { strings } from '../utils/i18n.js';
import { copyToClipboard, downloadTxt, downloadJson } from '../utils/exportUtils.js';

export default function PromptPreview({ promptText, promptChunks, config, lang, activeField }) {
  const s = strings[lang];
  const [copyState, setCopyState] = useState('idle'); // 'idle' | 'copied'
  const scrollRef = useRef(null);

  useEffect(() => {
    // Only auto-scroll on desktop where the preview panel is sticky + independently scrollable.
    // On mobile the page scrolls naturally and we don't want jumps.
    if (!activeField || window.innerWidth <= 900) return;
    if (!scrollRef.current) return;

    const highlighted = scrollRef.current.querySelector('.highlighted');
    if (!highlighted) return;

    const container = scrollRef.current;
    const containerTop = container.getBoundingClientRect().top;
    const elTop = highlighted.getBoundingClientRect().top;

    // Offset of the element relative to the scrollable container
    const relativeTop = elTop - containerTop + container.scrollTop;

    // Center the element in the container
    const targetScroll = relativeTop - (container.clientHeight / 2) + (highlighted.offsetHeight / 2);

    container.scrollTo({ top: targetScroll, behavior: 'smooth' });
  }, [activeField, promptChunks]);

  const charCount = promptText?.length ?? 0;
  const tokenEstimate = Math.round(charCount / 4);

  async function handleCopy() {
    if (!promptText) return;
    try {
      await copyToClipboard(promptText);
      setCopyState('copied');
      setTimeout(() => setCopyState('idle'), 2000);
    } catch {
      // fallback for older browsers
      const ta = document.createElement('textarea');
      ta.value = promptText;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopyState('copied');
      setTimeout(() => setCopyState('idle'), 2000);
    }
  }

  function handleDownloadTxt() {
    if (!promptText) return;
    downloadTxt(promptText, 'saife-system-prompt.txt');
  }

  function handleDownloadJson() {
    if (!promptText) return;
    downloadJson(config, promptText);
  }

  const hasPrompt = !!promptText && promptChunks?.length > 0;

  return (
    <div className="preview-panel">
      {/* Header */}
      <div className="preview-header">
        <div className="preview-title">
          {s.promptTitle}
        </div>
        <div className="preview-actions">
          <button
            id="btn-copy"
            className={copyState === 'copied' ? 'success' : ''}
            onClick={handleCopy}
            disabled={!hasPrompt}
            aria-label={s.copy}
          >
            {copyState === 'copied' ? `✓ ${s.copied}` : `⎘ ${s.copy}`}
          </button>
          <button
            id="btn-download-txt"
            onClick={handleDownloadTxt}
            disabled={!hasPrompt}
            aria-label={s.downloadTxt}
          >
            {s.downloadTxt}
          </button>
          <button
            id="btn-download-json"
            onClick={handleDownloadJson}
            disabled={!hasPrompt}
            aria-label={s.downloadJson}
          >
            {s.downloadJson}
          </button>
        </div>
      </div>

      {/* Prompt Content */}
      <div className="preview-content" aria-live="polite" aria-label={s.promptTitle} ref={scrollRef}>
        {hasPrompt ? (
          <div className="prompt-chunks">
            {promptChunks.map((chunk, index) => {
              const isHighlighted = activeField === chunk.key;
              return (
                <pre 
                  key={index} 
                  className={`prompt-chunk ${isHighlighted ? 'highlighted' : ''}`}
                >
                  {chunk.content}
                </pre>
              );
            })}
          </div>
        ) : (
          <div className="preview-empty">
            {s.promptPlaceholder}
          </div>
        )}
      </div>

      {/* Character / Token Count */}
      <div className="preview-footer">
        <div className="char-count">
          <span>{lang === 'de' ? 'Zeichen' : 'Chars'}: {charCount.toLocaleString()}</span>
          <span style={{ margin: '0 0.8rem', color: 'var(--border)' }}>|</span>
          <span>Tokens: ~{tokenEstimate.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}
