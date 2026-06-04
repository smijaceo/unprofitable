# UNPROFITABLE

Premium monochrome trading streetwear landing page.

Core line:

```text
UNPROFITABLE TODAY.
PROFITABLE TOMORROW.
```

## Current build

This repo currently ships a static launch site with:

- merch-first homepage structure
- black/white premium streetwear visual direction
- editorial hero with hoodie/badge mockup
- product drop preview cards
- drop-list conversion section with mailto fallback
- manifesto section
- Discord/community conversion section
- FAQ section for SEO/AI readability
- Organization/WebSite/FAQ JSON-LD
- `robots.txt`, `sitemap.xml`, `llms.txt`, favicon, manifest, and OG image
- basic placeholder legal pages
- responsive desktop/mobile layout

## CTA status

- Product cards are intentionally marked as preview / coming soon because ecommerce is not wired yet.
- Drop-list form currently opens a prefilled email to `hello@unprofitable.today`; replace with Shopify/Klaviyo/Formspree/etc. when the list provider is chosen.
- Discord CTA is intentionally marked `Discord Invite Coming Soon` until the actual invite URL is available.

## Production plan

See `docs/plans/2026-06-04-unprofitable-production-plan.md`.

## Local preview

Open `index.html` directly in a browser, or serve the folder with any static server.

```bash
python -m http.server 4173
```

Then visit:

```text
http://localhost:4173
```
