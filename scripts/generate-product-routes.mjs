import { mkdirSync, copyFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const distDir = join(process.cwd(), 'dist');
const indexPath = join(distDir, 'index.html');
const productSlugs = [
  'disciplined-heavyweight-hoodie',
  'disciplined-oversized-tee',
  'disciplined-structured-hat'
];

if (!existsSync(indexPath)) {
  throw new Error('dist/index.html is missing. Run vite build before generating product route fallbacks.');
}

for (const slug of productSlugs) {
  const routeDir = join(distDir, 'products', slug);
  mkdirSync(routeDir, { recursive: true });
  copyFileSync(indexPath, join(routeDir, 'index.html'));
}

console.log(`Generated ${productSlugs.length} product route fallbacks.`);
