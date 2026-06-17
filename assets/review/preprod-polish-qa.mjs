import { chromium } from 'playwright';

const base = 'http://127.0.0.1:4173/?v=local';
const shots = {
  desktop: 'assets/review/site-polish-desktop.png',
  mobile390: 'assets/review/site-polish-mobile-390.png',
  modalDesktop: 'assets/review/signup-modal-desktop.png',
  modalMobile: 'assets/review/signup-modal-mobile.png'
};

async function inspectPage(page) {
  return await page.evaluate(() => {
    const doc = document.documentElement;
    const body = document.body;
    const text = body.innerText;
    return {
      overflow: Math.max(body.scrollWidth, doc.scrollWidth) > doc.clientWidth + 2,
      viewportWidth: doc.clientWidth,
      scrollWidth: Math.max(body.scrollWidth, doc.scrollWidth),
      footerDisclaimer: text.includes('UNPROFITABLE is a streetwear and community brand. Nothing here is financial, investment, trading, business, or professional advice. No signals. No guaranteed outcomes. Build responsibly.'),
      internalTerms: ['StackedCardsInteraction', 'Announcement', 'Proof Status', 'Source Truth', 'AI-readable', 'backend', 'crawler', 'source library', 'Formspree', 'debug', 'prototype'].filter((term) => text.includes(term)),
      productCards: [...document.querySelectorAll('#drop article')].length,
      proofCards: [...document.querySelectorAll('#proof article')].length
    };
  });
}

async function opensModalFrom(page, label, clicker) {
  await clicker();
  await page.waitForSelector('[role="dialog"]', { state: 'visible', timeout: 4000 });
  await page.waitForTimeout(180);
  const focused = await page.evaluate(() => document.activeElement?.id === 'react-drop-list-email');
  const visible = await page.locator('[role="dialog"]').isVisible();
  await page.keyboard.press('Escape');
  await page.waitForSelector('[role="dialog"]', { state: 'detached', timeout: 4000 });
  return { label, visible, focused, escapeCloses: true };
}

const browser = await chromium.launch({ headless: true });
const desktop = await browser.newPage({ viewport: { width: 1440, height: 1200 }, deviceScaleFactor: 1 });
const consoleErrors = [];
desktop.on('console', (msg) => { if (msg.type() === 'error') consoleErrors.push(msg.text()); });
desktop.on('pageerror', (err) => consoleErrors.push(err.message));
desktop.on('response', (response) => { if (response.status() >= 400) consoleErrors.push(`${response.status()} ${response.url()}`); });
await desktop.goto(base, { waitUntil: 'networkidle' });
await desktop.screenshot({ path: shots.desktop, fullPage: true });
const desktopInspect = await inspectPage(desktop);

const ctaResults = [];
ctaResults.push(await opensModalFrom(desktop, 'Header JOIN LIST', () => desktop.getByRole('button', { name: /^Join List$/i }).click()));
ctaResults.push(await opensModalFrom(desktop, 'Hero JOIN DROP LIST', () => desktop.getByRole('button', { name: /Join Drop List/i }).first().click()));
await desktop.locator('#drop').scrollIntoViewIfNeeded();
ctaResults.push(await opensModalFrom(desktop, 'Product JOIN HOODIE LIST', () => desktop.getByRole('button', { name: /Join Hoodie List/i }).click()));
ctaResults.push(await opensModalFrom(desktop, 'Product JOIN TEE LIST', () => desktop.getByRole('button', { name: /Join Tee List/i }).click()));
ctaResults.push(await opensModalFrom(desktop, 'Product JOIN HAT LIST', () => desktop.getByRole('button', { name: /Join Hat List/i }).click()));
await desktop.locator('#join').scrollIntoViewIfNeeded();
ctaResults.push(await opensModalFrom(desktop, 'Final JOIN DROP LIST', () => desktop.locator('#join').getByRole('button', { name: /Join Drop List/i }).click()));

await desktop.getByRole('button', { name: /^Join List$/i }).click();
await desktop.waitForSelector('[role="dialog"]', { state: 'visible' });
await desktop.screenshot({ path: shots.modalDesktop, fullPage: false });
await desktop.mouse.click(12, 12);
await desktop.waitForSelector('[role="dialog"]', { state: 'detached', timeout: 4000 });
const outsideClose = true;

await desktop.getByRole('link', { name: /Drop 001/i }).first().click();
await desktop.waitForTimeout(500);
const dropTop = await desktop.locator('#drop').boundingBox();
const viewDropScrolls = !!dropTop && dropTop.y < 180;

const mobile = await browser.newPage({ viewport: { width: 390, height: 980 }, isMobile: true, deviceScaleFactor: 2 });
const mobileErrors = [];
mobile.on('console', (msg) => { if (msg.type() === 'error') mobileErrors.push(msg.text()); });
mobile.on('pageerror', (err) => mobileErrors.push(err.message));
mobile.on('response', (response) => { if (response.status() >= 400) mobileErrors.push(`${response.status()} ${response.url()}`); });
await mobile.goto(base, { waitUntil: 'networkidle' });
await mobile.screenshot({ path: shots.mobile390, fullPage: true });
const mobileInspect = await inspectPage(mobile);
await mobile.getByRole('button', { name: /^Join List$/i }).click();
await mobile.waitForSelector('[role="dialog"]', { state: 'visible' });
await mobile.waitForTimeout(180);
const mobileModal = await mobile.evaluate(() => {
  const dialog = document.querySelector('[role="dialog"] > div');
  const inputFocused = document.activeElement?.id === 'react-drop-list-email';
  if (!dialog) return { fits: false, inputFocused };
  const box = dialog.getBoundingClientRect();
  return { fits: box.width <= window.innerWidth && box.height <= window.innerHeight, inputFocused, width: box.width, height: box.height, windowWidth: window.innerWidth, windowHeight: window.innerHeight };
});
await mobile.screenshot({ path: shots.modalMobile, fullPage: false });
await mobile.getByRole('button', { name: /Close signup/i }).click();
await mobile.waitForSelector('[role="dialog"]', { state: 'detached', timeout: 4000 });

await browser.close();

console.log(JSON.stringify({
  base,
  screenshots: shots,
  consoleErrors,
  mobileErrors,
  desktopInspect,
  mobileInspect,
  ctaResults,
  outsideClose,
  viewDropScrolls,
  mobileModal
}, null, 2));
