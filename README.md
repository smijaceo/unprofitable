# UNPROFITABLE

Premium monochrome trading streetwear.

Core line:

```text
UNPROFITABLE TODAY.
PROFITABLE TOMORROW.
```

Current campaign:

```text
DROP 001: DISCIPLINED / 001
PROCESS OVER OUTCOME
```

## Current build

This repo currently ships a static launch site with:

- merch-first homepage structure
- premium monochrome trading streetwear positioning
- actual Drop 001 product imagery for tee, hoodie, and hat
- focused Drop 001 preview with exactly three pieces:
  - DISCIPLINED Oversized Tee
  - DISCIPLINED Heavyweight Hoodie
  - DISCIPLINED Structured Hat
- Design Details / Garment Code section covering the U/P logo, bottom-left garment patch, arched DISCIPLINED typography, and PROCESS OVER OUTCOME line
- manifesto section centered on discipline before profitability
- Discord/community conversion section framed as accountability and discipline, not signals
- drop-list conversion section with mailto fallback
- FAQ section for SEO/AI readability
- Organization/WebSite/FAQ JSON-LD
- `robots.txt`, `sitemap.xml`, `llms.txt`, favicon, manifest, and OG/social image metadata
- basic placeholder legal pages
- responsive desktop/mobile layout

## CTA status

- Product cards are intentionally marked as preview / coming soon because ecommerce is not wired yet.
- Drop-list form currently opens a prefilled email to `hello@wearunprofitable.com`; replace with Shopify/Klaviyo/Formspree/etc. when the list provider is chosen.
- Discord CTA is intentionally marked `Discord Invite Coming Soon` until the actual invite URL is available.

## Production plan

See `docs/plans/2026-06-04-unprofitable-production-plan.md`, `docs/plans/2026-06-04-builder-expansion-drop001-plan.md`, and `docs/plans/2026-06-04-disciplined-drop001-revision-plan.md`.

## Local preview

Open `index.html` directly in a browser, or serve the folder with any static server.

```bash
python -m http.server 4173
```

Then visit:

```text
http://localhost:4173
```
