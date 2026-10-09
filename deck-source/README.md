# Pitch deck source

Source for `public/downloads/Faris-Hussain-Client-Pitch-Deck.pdf`.

To regenerate after editing `deck.html`:

```
cp ../public/portrait-contact.jpg portrait.jpg
npm install playwright
npx playwright install chromium   # first time only
node render.js
cp Faris-Hussain-Client-Pitch-Deck.pdf ../public/downloads/
```

This folder is not part of the Next.js app (not under `src/` or imported anywhere) so it does not affect the site build.
