import { useState, useRef, useEffect, useCallback } from 'react';
import { REFERENCES } from '../data/references.js';

export default function ReferenceTooltip({ refKey, lang = 'de', type = 'ref' }) {
  const [open, setOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0, direction: 'below' });
  const wrapperRef = useRef(null);
  const tooltipRef = useRef(null);
  const ref = REFERENCES[refKey];

  // Calculate position relative to viewport using fixed positioning
  const updatePosition = useCallback(() => {
    if (!wrapperRef.current) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    const tooltipHeight = 360; // estimated max height
    const tooltipWidth = 320;
    const margin = 8;

    // Decide if tooltip should open above or below
    const spaceBelow = window.innerHeight - rect.bottom;
    const direction = spaceBelow >= tooltipHeight + margin ? 'below' : 'above';

    let top;
    if (direction === 'below') {
      top = rect.bottom + margin;
    } else {
      top = rect.top - tooltipHeight - margin;
      // Clamp to top of viewport
      if (top < margin) top = margin;
    }

    // Horizontal: try to align to button, but clamp to viewport
    let left = rect.left;
    if (left + tooltipWidth > window.innerWidth - margin) {
      left = window.innerWidth - tooltipWidth - margin;
    }
    if (left < margin) left = margin;

    setPosition({ top, left, direction });
  }, []);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e) => {
      if (
        wrapperRef.current && !wrapperRef.current.contains(e.target) &&
        tooltipRef.current && !tooltipRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  // Recalculate on scroll or resize while open
  useEffect(() => {
    if (!open) return;
    updatePosition();
    window.addEventListener('scroll', updatePosition, true);
    window.addEventListener('resize', updatePosition);
    return () => {
      window.removeEventListener('scroll', updatePosition, true);
      window.removeEventListener('resize', updatePosition);
    };
  }, [open, updatePosition]);

  function handleToggle() {
    if (!open) {
      updatePosition();
    }
    setOpen((v) => !v);
  }

  if (!ref) return null;

  return (
    <span className="ref-tooltip-wrapper" ref={wrapperRef}>
      <button
        className="ref-btn"
        onClick={handleToggle}
        aria-label={
          type === 'info'
            ? (lang === 'de' ? 'Informationen anzeigen' : 'Show information')
            : (lang === 'de' ? 'Wissenschaftliche Quelle anzeigen' : 'Show scientific source')
        }
        title={
          type === 'info'
            ? (lang === 'de' ? 'Informationen' : 'Information')
            : (lang === 'de' ? 'Wissenschaftliche Quelle (MLA)' : 'Scientific source (MLA)')
        }
      >
        {type === 'info' ? '[info]' : '[ref]'}
      </button>
      {open && (
        <div
          className="ref-tooltip"
          role="tooltip"
          ref={tooltipRef}
          style={{
            position: 'fixed',
            top: `${position.top}px`,
            left: `${position.left}px`,
          }}
        >
          <p>{ref.concept[lang]}</p>
          {ref.citations && ref.citations.length > 0 && (
            <div className="ref-cite">
              {ref.citations.map((c, i) => (
                <p key={i} style={{ marginTop: i > 0 ? '0.4rem' : 0 }}>{c}</p>
              ))}
            </div>
          )}
        </div>
      )}
    </span>
  );
}
