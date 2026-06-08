# Drop 001 Shop Hub Implementation Plan

> **For Hermes:** Execute directly in the static UNPROFITABLE repo and verify locally + live after push.

**Goal:** Add a buyer-ready `/shop.html` hub that makes Drop 001 easier to browse remotely while checkout remains pre-live.

**Architecture:** Keep the site static HTML/CSS/JS on Vercel. Reuse existing monochrome product assets, product-page visual language, FormSubmit waitlist path, and Vercel Analytics event conventions. Do not introduce checkout CTAs until ecommerce is wired.

**Tech Stack:** Static HTML, CSS, lightweight vanilla JS, Vercel Analytics, existing image assets under `assets/drop001-library/`.

---

## Locked Brand Rules

- Black/white only.
- Merch-first, community-second.
- Primary conversion remains `Join Drop List`.
- Product actions say preview/early access, not checkout/live shopping.
- No signals, guru, fake finance claims, or red/green chart language.

## Task 1: Create `/shop.html` Drop 001 hub

**Objective:** Give buyers a single collection page for the three-product Drop 001 preview.

**Files:**
- Create: `shop.html`

**Steps:**
1. Build a static page with canonical `https://www.wearunprofitable.com/shop.html`.
2. Include Vercel Analytics static script.
3. Add hero copy: `DROP 001: DISCIPLINED / 001`, `The first uniform for rebuilding standards.`
4. Add three product cards with real Drop 001 assets:
   - `TEE_FrontBack_CardBg_V04.png`
   - `HOODIE_FrontBack_CardBg_V04.png`
   - `HAT_FrontBack_CardBg_V04.png`
5. Display current preview prices already present on product pages: `$56`, `$134`, `$50`.
6. Use `Early Access List Open` and `Join List for First Access` until checkout exists.
7. Add one concise buyer-info section for status, sizing, shipping/returns, and next step.
8. Add ItemList JSON-LD for the collection.

**Verification:**
- `shop.html` parses without malformed JSON-LD.
- All image paths return 200 locally.
- CTAs are honest and do not say checkout/shop is live.

## Task 2: Wire navigation and footer paths

**Objective:** Make the shop hub discoverable without disrupting the approved homepage.

**Files:**
- Modify: `index.html`
- Modify: `disciplined-oversized-tee.html`
- Modify: `disciplined-heavyweight-hoodie.html`
- Modify: `disciplined-structured-hat.html`

**Steps:**
1. Add `Shop` to desktop nav.
2. Change hero secondary CTA from `View Drop 001` anchor to `/shop.html`.
3. Change mobile secondary CTA from `Preview Drop` anchor to `/shop.html`.
4. Add `Shop / Drop 001` to footer drop links.
5. On product pages, change “Back to Drop 001” / related full-drop links to `shop.html`.

**Verification:**
- Links resolve locally.
- Mobile still has only two CTA buttons.
- Product page navigation keeps `Join Drop List` primary.

## Task 3: Update crawl/AI docs and roadmap

**Objective:** Keep launch foundation docs aligned with the new page.

**Files:**
- Modify: `sitemap.xml`
- Modify: `llms.txt`
- Modify: `docs/roadmap/unprofitable-master-roadmap.md`

**Steps:**
1. Add `/shop.html` to sitemap with priority above individual product pages.
2. Add `/shop.html` to llms primary pages.
3. Mark C3 static shop hub as complete in the roadmap, with a short status note.

**Verification:**
- Sitemap XML parses.
- Roadmap reflects current state without overstating checkout readiness.

## Task 4: Analytics hooks

**Objective:** Track the collection journey without collecting sensitive data.

**Files:**
- Modify: `shop.html`
- Modify: `index.html` if needed

**Steps:**
1. Track `view_drop_001_click` for links into the shop hub.
2. Track `product_page_view` on `shop.html` as a collection view with `product: Drop 001 Collection`.
3. Track `join_drop_list_click` on shop-page drop-list CTAs.
4. Track `product_card_click` for product cards.

**Verification:**
- Local browser console has no errors if `window.va` is available or queued.
- Event payloads contain only product/drop/placement labels.

## Task 5: QA, commit, push

**Objective:** Verify local and remote behavior before reporting completion.

**Steps:**
1. Run static checks for JSON-LD/sitemap/image references.
2. Serve locally and inspect `/shop.html` in browser.
3. QA desktop and mobile visual layout.
4. Commit with a clear message.
5. Push to GitHub.
6. Verify live URL and deployed asset/script responses.

**Done when:**
- `/shop.html` exists and is navigable.
- Homepage/product pages point to it.
- Sitemap/llms/roadmap are updated.
- Local + live checks pass.
