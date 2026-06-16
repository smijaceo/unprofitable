import { cpSync, existsSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';

const root = process.cwd();
const dist = join(root, 'dist');

function copyIfExists(from, to = from) {
  const source = join(root, from);
  if (!existsSync(source)) return;
  const target = join(dist, to);
  mkdirSync(dirname(target), { recursive: true });
  cpSync(source, target, { recursive: true, force: true });
}

// Keep non-home static pages and required site metadata available when Vite owns the homepage build.
[
  'shop.html', 'privacy.html', 'returns.html', 'terms.html', 'disclaimer.html', 'faq.html', 'community.html', 'manifesto.html',
  'disciplined-heavyweight-hoodie.html', 'disciplined-oversized-tee.html', 'disciplined-structured-hat.html',
  'robots.txt', 'sitemap.xml', 'llms.txt', 'site.webmanifest'
].forEach((file) => copyIfExists(file));

['products', 'js'].forEach((dir) => copyIfExists(dir));
[
  'assets/favicon.svg',
  'assets/apple-touch-icon.png',
  'assets/og-unprofitable.png',
  'assets/unprofitable-main-logo.png',
  'assets/unprofitable-mark-header.png',
  'assets/unprofitable-badge-reference.webp'
].forEach((file) => copyIfExists(file));
['assets/drop001-library', 'assets/images'].forEach((dir) => copyIfExists(dir));

console.log('Static homepage support files copied into dist/.');
