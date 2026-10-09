const { chromium } = require('playwright');
const path = require('path');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  await page.goto('file://' + path.resolve(__dirname, 'deck.html'));
  await page.waitForTimeout(300);
  await page.pdf({
    path: path.resolve(__dirname, 'Faris-Hussain-Client-Pitch-Deck.pdf'),
    width: '1920px',
    height: '1080px',
    printBackground: true,
    margin: { top: 0, bottom: 0, left: 0, right: 0 },
  });
  await browser.close();
  console.log('done');
})();
