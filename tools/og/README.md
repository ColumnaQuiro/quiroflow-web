# OG card sources

The four `public/og-*.png` social cards are generated from this template
rather than drawn by hand, so a copy change means editing text here and
re-running the command instead of reopening a design file.

`template.html` is the card layout with `__EYEBROW__`, `__TITLE__`, `__SUB__`
and `__PROOF__` placeholders. `cards.json` holds the per-card copy. `build.mjs`
substitutes one into the other and rasterises the result with headless Chrome
at exactly 1200x630, the size every platform crops from.

```bash
node tools/og/build.mjs
```

Requires Google Chrome at the standard macOS path (override with `CHROME=`).
The template pulls Instrument Sans from Google Fonts at render time, so the
machine running this needs network access — without it the cards silently
fall back to the system sans and stop matching the site.
