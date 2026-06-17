import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';

const base = 'http://127.0.0.1:4173';
const out = 'assets/review';
mkdirSync(out, { recursive: true });

const routes = {
  home: '/',
  hoodie: '/products/disciplined-heavyweight-hoodie/',
  tee: '/products/disciplined-oversized-tee/',
  hat: '/products/disciplined-structured-hat/',
};

const shots = [
  { file: 'site-complete-home-desktop.png', route: routes.home, width: 1440, height: 1100 },
  { file: 'site-complete-home-mobile.png', route: routes.home, width: 390, height: 900 },
  { file: 'site-complete-hoodie-desktop.png', route: routes.hoodie, width: 1440, height: 1100 },
  { file: 'site-complete-tee-desktop.png', route: routes.tee, width: 1440, height: 1100 },
  { file: 'site-complete-hat-desktop.png', route: routes.hat, width: 1440, height: 1100 },
  { file: 'site-complete-hoodie-mobile.png', route: routes.hoodie, width: 390, height: 900 },
  { file: 'site-complete-tee-mobile.png', route: routes.tee, width: 390, height: 900 },
  { file: 'site-complete-hat-mobile.png', route: routes.hat, width: 390, height: 900 },
];

const browser = await chromium.launch();
const page = await browser.newPage();
const errors = [];
page.on('console', (msg) => {
  if (['error', 'warning'].includes(msg.type())) errors.push(`${msg.type()}: ${msg.text()}`);
});
page.on('pageerror', (err) => errors.push(`pageerror: ${err.message}`));

async function warmPage(route) {
  await page.goto(`${base}${route}`, { waitUntil: 'networkidle' });
  await page.evaluate(async () => {
    const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    const height = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    for (const y of [0, height * 0.2, height * 0.4, height * 0.6, height * 0.8, height]) {
      window.scrollTo(0, y);
      await sleep(140);
    }
    await Promise.all(Array.from(document.images).map((img) => {
      if (img.complete && img.naturalWidth > 0) return Promise.resolve();
      return new Promise((resolve) => {
        img.addEventListener('load', resolve, { once: true });
        img.addEventListener('error', resolve, { once: true });
      });
    }));
    window.scrollTo(0, 0);
    await sleep(220);
  });
}

for (const shot of shots) {
  await page.setViewportSize({ width: shot.width, height: shot.height });
  await warmPage(shot.route);
  await page.addStyleTag({ content: 'header.sticky{position:absolute!important;top:0!important}' });
  await page.screenshot({ path: `${out}/${shot.file}`, fullPage: true });
}

await page.setViewportSize({ width: 390, height: 900 });
await warmPage(routes.home);
await page.getByRole('button', { name: /join list/i }).first().click();
await page.waitForSelector('[role="dialog"]');
await page.getByLabel(/email address/i).focus();
await page.waitForTimeout(450);
await page.screenshot({ path: `${out}/site-complete-modal-mobile.png`, fullPage: true });
await page.keyboard.press('Escape');
await page.waitForTimeout(250);

const qaWidths = [375, 390, 430];
const overflow = [];
for (const width of qaWidths) {
  for (const [name, route] of Object.entries(routes)) {
    await page.setViewportSize({ width, height: 900 });
    await warmPage(route);
    const metrics = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
      h1: document.querySelector('h1')?.textContent?.trim() || '',
      hasFooterDisclaimer: document.body.innerText.includes('Nothing here is financial'),
    }));
    if (metrics.scrollWidth > metrics.clientWidth + 1) {
      overflow.push({ width, name, ...metrics });
    }
    if (!metrics.hasFooterDisclaimer) {
      errors.push(`missing footer disclaimer on ${name} @ ${width}`);
    }
  }
}

await browser.close();
console.log(JSON.stringify({ screenshots: shots.length + 1, errors, overflow }, null, 2));
process.exit(errors.length || overflow.length ? 1 : 0);
