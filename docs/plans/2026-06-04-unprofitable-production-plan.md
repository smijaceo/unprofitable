# UNPROFITABLE Production Website Implementation Plan

> **For Hermes:** Execute phase-by-phase without drifting into trading-signal/guru positioning. Keep the brand merch-first, black/white, premium, and community-second.

**Goal:** Turn the current high-fidelity launch page into a production-ready streetwear website that can be crawled, shared, understood by AI/search engines, capture drop interest, and eventually sell merch.

**Architecture:** Start with the static HTML launch site and add production primitives first: SEO metadata, structured data, AI-readable brand facts, social assets, sitemap/robots/llms, legal placeholders, and a conversion-ready drop list block. Later phases can move to Shopify/Next.js if ecommerce demand warrants it.

**Tech Stack:** Static HTML/CSS/JS, black/white visual system, local assets, JSON-LD structured data, static SEO files.

---

## Phase 1 — Production Foundation

**Status:** Implemented in this sprint.

- Upgrade homepage metadata, canonical URL, Open Graph, Twitter card, favicon, and app manifest.
- Add Organization/WebSite/FAQ JSON-LD.
- Add crawl files: `robots.txt`, `sitemap.xml`, `llms.txt`.
- Add an AI-readable FAQ section clarifying what the brand is and is not.
- Add a drop-list conversion section with honest mailto fallback until a real list provider is selected.
- Add basic legal placeholder pages: `returns.html`, `privacy.html`, `disclaimer.html`.
- Generate share assets: `assets/og-unprofitable.png`, `assets/favicon.svg`, `assets/apple-touch-icon.png`.

## Phase 2 — Real Conversion Wiring

- Choose drop-list provider: Shopify, Klaviyo, Formspree, ConvertKit, Beehiiv, Supabase, or Airtable.
- Replace the mailto fallback with a real POST target.
- Add thank-you state and analytics events for CTA clicks/form submissions.
- Add the real Discord invite only when the community onboarding is ready.

## Phase 3 — Product Pages / Shop

- Create a real `/shop` experience and product detail pages.
- Add product schema, price/drop status, size guide, materials, fit notes, shipping/returns.
- Replace placeholder mockups with real product photography or production-grade mockups.

## Phase 4 — Brand Story / Journal

- Build `/manifesto`, `/about`, `/community`, and `/journal`.
- Publish brand-native articles: recovery arc, drawdown season, risk managed, break-even club, no fake guru energy.
- Keep SEO focused on apparel/community, not strategy education.

## Phase 5 — Ecommerce

- Wire Shopify, Stripe Payment Links, or another checkout path.
- Add inventory/drop status and real product CTAs.
- Add order/shipping/return policy pages with final legal copy.

## Phase 6 — Launch QA

- Lighthouse pass for performance/accessibility/SEO.
- Mobile visual QA.
- Validate structured data.
- Submit sitemap to Google Search Console/Bing.
- Test social previews in Discord/X.
