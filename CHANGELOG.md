# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0-rc.1] - 2026-06-11

> [!NOTE]
> This is a pre-release version (Release Candidate 1) containing multiple security, correctness, and accessibility bug fixes from code review. Note that the generated chatbot configurations have only been verified via manual chat session testing; classroom-level testing has not yet been conducted.


### Security
- Fixed a potential Cross-Site Scripting (XSS) vulnerability in `AboutPage.jsx` by replacing `dangerouslySetInnerHTML` with standard text interpolation when rendering source citations.

### Fixed
- Replaced 4 instances of the undefined CSS custom property `var(--text)` with the defined `var(--text-primary)` in `index.css` (lines 554, 595, 629, 647). This resolves low-contrast text visibility bugs on dark backgrounds.
- Replaced the undefined CSS custom property `var(--border-hover)` with `var(--border-accent)` in `index.css` (line 630).
- Grouped imports correctly in `src/App.jsx` by moving the `AboutPage` import from the middle of the file to the top of the imports block.
- Corrected character-to-token estimation heuristic in `PromptPreview.jsx` to be language-aware, applying a ratio of ~3.3 characters per token for German text (handling compound words and umlauts) and ~4.0 characters per token for English text.
- Synchronized the `<html>` element's `lang` attribute dynamically with the user-selected language in `src/App.jsx` to ensure screen readers use the correct phonetic engine.

### Removed
- Deleted the entirely unused and redundant stylesheet `src/App.css` (185 lines of Vite template leftovers).
- Removed the duplicate `import './index.css'` from `src/App.jsx` to keep `src/main.jsx` as the single entry point for global styles.
- Removed the duplicate and immediately overridden `min-height: auto` property declaration from `.preview-content` in `src/index.css` (line 524).
- Removed the `autoFocus` attribute from the persona name input field in `ConfigurationForm.jsx` to comply with WCAG accessibility guidelines on focus theft.
