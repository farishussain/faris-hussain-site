# Pitch deck source

Source for `public/downloads/Faris-Hussain-Client-Pitch-Deck.pdf`.

To regenerate after editing `deck.html`:

```
npm install playwright
npx playwright install chromium   # first time only
node render.js
cp Faris-Hussain-Client-Pitch-Deck.pdf ../public/downloads/
```

This folder is not part of the Next.js app (not under `src/` or imported anywhere) so it does not affect the site build.

The included `portrait.jpg` preserves the About portrait from the published deck.
The user-supplied `cover-portrait.png` is used only on the cover.
Do not replace it with the website's differently cropped portraits.

The cover has its own sizing rules. Slides 2–15 use larger type and cards,
fixed spacing before supporting callouts, and bottom-aligned footers.
The cover identity block sits above the footer. Its portrait uses a cover-only
CSS crop; the About slide uses its separate, unchanged portrait.
Text-heavy slides use `slide-text`; the about, connected process, and engagement
comparison layouts have separate sizing rules. Check every page for clipping after layout changes,
and keep the service descriptions at approximately three readable lines.

Slides 9–11 contain conceptual diagrams derived from the existing delivery and
research summaries, not client architecture exports or measured-results charts.
Keep the scope and research caveats visible when editing them. The closing slide
links to the site's `/contact` page, the LinkedIn profile, and public GitHub work;
verify that all three links remain clickable in the exported PDF.

For cover-only updates, keep a copy of the published PDF before rendering.
Verify that the portrait loads and that the enlarged cover text does not overlap
the portrait. Compare pages 2–15 against the saved PDF before publishing. If any
of those pages differ, replace only page 1 in the saved PDF with the newly
rendered cover rather than publishing the full render.
