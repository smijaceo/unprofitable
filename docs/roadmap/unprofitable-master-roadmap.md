# UNPROFITABLE Master Roadmap

> Operating document for keeping the UNPROFITABLE website, Drop 001 launch, ecommerce setup, community onboarding, and marketing work on track.
>
> Brand guardrail: **UNPROFITABLE TODAY. PROFITABLE TOMORROW.** Premium black-and-white streetwear for builders rebuilding standards. Merch-first, community-second, no signals, no guru act, no fake finance claims.

---

## 0. Current Baseline

### Live property

- Website: `https://www.wearunprofitable.com/`
- Repo: `C:\Users\mrmer\projects\unprofitable`
- GitHub remote: `https://github.com/smijaceo/unprofitable.git`
- Current primary site format: static HTML/CSS/JS on Vercel.
- Current conversion mode: **drop-list / preview**, not live checkout.

### Drop 001 scope

`DROP 001: DISCIPLINED / 001`

Exactly three pieces:

1. `DISCIPLINED Oversized Tee`
2. `DISCIPLINED Heavyweight Hoodie`
3. `DISCIPLINED Structured Hat`

### Current site assets/features already in place

- Homepage with premium monochrome editorial layout.
- Product-preview / Featured Drop system.
- Standalone product pages:
  - `disciplined-oversized-tee.html`
  - `disciplined-heavyweight-hoodie.html`
  - `disciplined-structured-hat.html`
- Drop 001 product photo library integrated.
- Metadata, Open Graph/Twitter card, favicon/touch icon, manifest.
- `robots.txt`, `sitemap.xml`, `llms.txt`.
- JSON-LD for Organization/WebSite/FAQ and product pages.
- Legal placeholder pages:
  - `returns.html`
  - `privacy.html`
  - `disclaimer.html`
- Waitlist/drop-list form currently using FormSubmit AJAX to `drop@wearunprofitable.com`.
- FormSubmit activation/delivery still needs to be verified in the `drop@wearunprofitable.com` inbox before traffic is sent.
- Discord CTA currently placeholder/coming soon unless a real invite is supplied.

### Current copy/positioning standard

Use this tone across the site and launch material:

```text
PROCESS OVER OUTCOME.
Blacked-out streetwear for people rebuilding their standards.
No signals. No guru act. No fake flex. Just a uniform for getting back to work.
```

Keep copy buyer-facing and sharp. Avoid internal build terms like `source truth`, `zip library`, `AI crawlers`, `backend`, `POST target`, etc. Public language should feel premium, not defensive.

---

## 1. Operating Rules

### How to use this roadmap

Work one phase at a time. Do not skip ahead into more visual redesigns when the next bottleneck is operational. Each phase has:

- **Goal** — what the phase unlocks.
- **Tasks** — concrete work to complete.
- **Done when** — exit criteria.
- **Do not drift into** — guardrails.

### Prioritization rule

The brand is currently past visual mockup. The next highest-leverage path is:

```text
Conversion infrastructure -> product/shop readiness -> checkout -> launch QA -> marketing traffic.
```

### Design guardrails

- Black/white only unless Jace explicitly changes the rule.
- Merch remains visually central.
- Discord/community supports the brand; it is not the only product.
- No red/green trading clichés.
- No signal-room positioning.
- No P&L claims, fake wins, income claims, or guaranteed outcomes.
- No generic Shopify-template energy.
- Preserve exact supplied product/logo imagery when Jace says it is source-of-truth.

### Technical guardrails

- Verify before claiming complete.
- For static HTML changes, check:
  - file exists
  - no broken asset references
  - browser console clean when practical
  - desktop and mobile visual QA
  - live URL after push/deploy, if deployed
- Separate local status, GitHub push status, Vercel/live status, and blockers.

---

## 2. Phase A — Roadmap + Tracking Foundation

### Goal

Create a shared operating plan so every future UNPROFITABLE task maps to a phase instead of becoming random tweaking.

### Tasks

- [x] Create this master roadmap file.
- [ ] Add a lightweight task tracker/checklist file if needed.
- [x] Add a `docs/decisions/` log for durable business/design decisions.
- [ ] Add a `docs/launch-checklists/` folder for repeatable QA.

### Done when

- This roadmap exists in the repo.
- Future work can be tagged to a phase.
- Jace and the website agent both know the next piece.

### Do not drift into

- Rewriting the whole visual direction.
- Adding more abstract brand pages before conversion/shop blockers are solved.

---

## 3. Phase B — Conversion Infrastructure

### Goal

Make the drop-list reliable, organized, and brand-owned before driving traffic.

### Current state

- Waitlist form exists.
- Form currently routes through FormSubmit AJAX to `drop@wearunprofitable.com`.
- Destination system chosen: domain email alias/inbox `drop@wearunprofitable.com` for Drop 001 list + contact fallback.
- FormSubmit activation is complete and a live browser test returned success.
- `drop@wearunprofitable.com` received the test submission confirmation from Jace.
- Signup segmentation captures builder/creator/trader/discipline intent and product interest.

### Tasks

#### B1. Choose destination inbox/list system

**Decision:** use `drop@wearunprofitable.com` as the Drop 001 destination and contact fallback.

Pick one path:

1. **Dedicated brand Gmail** — fastest clean setup.
   - Example: `wearunprofitable@gmail.com`
   - Labels: Drop List, Customer Support, Orders, Collabs, Manufacturing, Ads, Website, Discord/Community.
2. **Google Workspace/domain email** — best brand setup.
   - Suggested aliases: `hello@wearunprofitable.com`, `drop@wearunprofitable.com`, `support@wearunprofitable.com`, `collabs@wearunprofitable.com`.
3. **Email marketing platform** — best long-term conversion setup.
   - Shopify Email, Klaviyo, ConvertKit, Beehiiv, Mailchimp, etc.
4. **Temporary form service** — acceptable short-term only.
   - FormSubmit/Formspree while the list is small.

#### B2. Wire and verify signup delivery

- [x] Replace personal/temporary destination if Jace chooses a brand inbox/provider.
- [x] Confirm FormSubmit activation email if FormSubmit remains.
- [x] Submit a test signup.
- [x] Confirm the destination receives the signup.
- [x] Confirm fields arrive cleanly:
  - email
  - identity
  - product interest
  - source
- [x] Confirm spam/honeypot behavior does not block real users.
- [x] Add failure/success states that feel polished.

**Status — 2026-06-08:** B2 is complete for the current FormSubmit setup. Live test response returned success and Jace confirmed the destination inbox result.

#### B3. Add analytics

- [ ] Decide analytics provider:
  - Vercel Analytics
  - Plausible
  - Google Analytics
  - Meta Pixel
  - Shopify/Klaviyo analytics later
- [ ] Track core events:
  - `join_drop_list_click`
  - `drop_list_submit_success`
  - `drop_list_submit_error`
  - `product_page_view`
  - `view_drop_001_click`
  - `discord_cta_click`
- [ ] Verify events fire without breaking performance/privacy expectations.

### Done when

- A test signup reliably lands in the selected destination.
- Success and error states are clear on desktop/mobile.
- Analytics captures the funnel.
- The public site still says `Join Drop List`, not `Shop the Drop`, while checkout is not live.

### Do not drift into

- Using a personal inbox as the long-term brand system.
- Mentioning FormSubmit/Klaviyo/backend details in customer-facing copy.
- Running ads before signup delivery is proven.

---

## 4. Phase C — Product + Shop Readiness

### Goal

Turn the current preview/product pages into buyer-ready product information before checkout.

### Tasks

#### C1. Product data

For each product, finalize:

- [ ] Retail price.
- [ ] Available sizes.
- [ ] Fit notes.
- [ ] Materials/fabric weight.
- [ ] Print/embroidery details.
- [ ] Care instructions.
- [ ] Production timeline.
- [ ] Shipping region assumptions.
- [ ] Return/exchange stance.
- [ ] Drop status language.

Products:

- [ ] `DISCIPLINED Oversized Tee`
- [ ] `DISCIPLINED Heavyweight Hoodie`
- [ ] `DISCIPLINED Structured Hat`

#### C2. Product page polish

- [ ] Ensure each page has a clean product gallery.
- [ ] Add or improve size/fit section.
- [ ] Add material/care section.
- [ ] Add shipping/returns note.
- [ ] Ensure product schema reflects price/status once known.
- [ ] Keep CTAs honest until checkout is live.

#### C3. Shop/index structure

Decide whether to add:

- [ ] `/shop.html` as a clean Drop 001 hub.
- [ ] `/drop-001.html` as a campaign/drop landing page.
- [ ] Shopify collection page later.

Recommended short-term: create a static `/shop.html` or `/drop-001.html` that collects the three product pages and waitlist CTA.

### Done when

- A buyer can answer: what is it, how does it fit, what is it made of, what does it cost, when can I get it, and what happens if there is an issue?
- Product pages feel intentional on mobile, not just photo dumps.
- Product schema is updated with accurate info.

### Do not drift into

- Adding extra products outside Drop 001.
- Inventing fake scarcity or fake inventory.
- Overloading product pages with trading philosophy instead of buyer information.

---

## 5. Phase D — Finance, Pricing, and Inventory Model

### Goal

Make the drop financially coherent before checkout or inventory commitments.

### Tasks

- [ ] Confirm COGS estimates by product.
- [ ] Confirm blank/production supplier options.
- [ ] Confirm print/embroidery costs.
- [ ] Confirm packaging costs.
- [ ] Confirm shipping/fulfillment costs.
- [ ] Confirm platform/payment fees.
- [ ] Finalize target gross margin and contribution margin.
- [ ] Finalize retail pricing.
- [ ] Decide preorder vs limited inventory vs made-to-order.
- [ ] Build launch inventory scenarios:
  - conservative
  - expected
  - aggressive
- [ ] Define break-even units.
- [ ] Define max acceptable CAC by product/order.

### Done when

- Prices are not guessed.
- Launch quantity is tied to cash/risk tolerance.
- Ecommerce path can show real prices confidently.

### Do not drift into

- Treating vanity revenue as profit.
- Ordering inventory before demand/list/COGS are clear.
- Confusing UNPROFITABLE brand finance with Jace's trading systems.

---

## 6. Phase E — Ecommerce Checkout

### Goal

Enable actual purchases when product/pricing/fulfillment are ready.

### Checkout options

1. **Shopify** — recommended long-term for apparel.
   - Best for product catalog, inventory, discount codes, email capture, analytics, shipping/tax, and order management.
2. **Stripe Payment Links** — fastest simple launch.
   - Good for a small first drop if fulfillment is manual.
3. **Fourthwall / merch platform** — easier fulfillment but less brand/control depending on provider.
4. **Static site + custom checkout** — avoid unless there is a strong reason.

### Tasks

- [ ] Choose checkout platform.
- [ ] Create products/SKUs.
- [ ] Add sizes/variants.
- [ ] Add shipping settings.
- [ ] Add tax settings if needed.
- [ ] Add return/refund policies.
- [ ] Test checkout.
- [ ] Test email receipts.
- [ ] Test inventory/drop status.
- [ ] Replace `Join Drop List` product CTAs with `Shop the Drop` only when purchase is actually live.

### Done when

- A test order can be placed and fulfilled/refunded if needed.
- Product CTAs are truthful.
- Legal/policy pages are updated for real commerce.

### Do not drift into

- Saying shop is live before test checkout works.
- Publishing final prices without platform/product confirmation.

---

## 7. Phase F — Discord / Community Onboarding

### Goal

Make Discord a clean brand/community conversion path, not a signal-room trap.

### Tasks

- [ ] Decide community access model:
  - public
  - waitlist-only
  - customer-only
  - private invite
- [ ] Create/confirm Discord invite URL.
- [ ] Define community promise:
  - accountability
  - discipline
  - rebuild standards
  - process proof
  - no signals/trade alerts
- [ ] Add site copy explaining what happens inside.
- [ ] Add onboarding channel structure if needed.
- [ ] Replace placeholder CTA with real invite when ready.

### Done when

- The site can explain why someone should join without sounding like coaching/signals.
- Invite link works.
- Community positioning matches streetwear/community, not trading guru energy.

### Do not drift into

- Signal service positioning.
- Trade-alert language.
- Fake exclusivity without real onboarding.

---

## 8. Phase G — Brand Story + SEO Content

### Goal

Build durable brand depth and search/entity clarity without turning the site into trading education.

### Recommended pages

- [ ] `/manifesto.html`
- [ ] `/about.html`
- [ ] `/community.html`
- [ ] `/journal.html`
- [ ] `/drop-001.html` if not already handled in shop phase.

### Recommended journal/editorial topics

- [ ] `DRAWDOWN TO DISCIPLINE.`
- [ ] `The Uniform for Getting Your Standards Back`
- [ ] `Process Over Outcome`
- [ ] `The Loss Happened. Now What?`
- [ ] `No Guru Act`
- [ ] `Built Before Paid`
- [ ] `Risk Managed`

### Done when

- The brand has enough story for buyers, search engines, and AI answer engines to understand it.
- Content supports merch/community conversion.
- No content reads like financial/trading instruction.

### Do not drift into

- Strategy tutorials.
- Trading signals.
- Long AI-sounding self-improvement essays.
- Generic SEO pages with no brand taste.

---

## 9. Phase H — Launch QA

### Goal

Make the public launch reliable across devices, links, forms, metadata, and social previews.

### Technical QA

- [ ] Homepage returns 200.
- [ ] Product pages return 200.
- [ ] Legal pages return 200.
- [ ] `robots.txt` returns 200.
- [ ] `sitemap.xml` returns 200 and parses.
- [ ] `llms.txt` returns 200.
- [ ] Manifest JSON parses.
- [ ] JSON-LD parses.
- [ ] Product images return 200.
- [ ] No console errors.
- [ ] No broken links.
- [ ] No stale internal language.

### Visual/mobile QA

Check at:

- [ ] 360px
- [ ] 390px
- [ ] 430px
- [ ] desktop width

Watch for:

- [ ] Hero headline clipping.
- [ ] Product images too dark or hidden on black.
- [ ] Sticky CTA covering content.
- [ ] Waitlist options collapsing into paragraphs.
- [ ] Product gallery awkward crops.
- [ ] Horizontal overflow.
- [ ] Tap targets under 44px.

### SEO/social QA

- [ ] Open Graph preview looks good in Discord.
- [ ] X/Twitter card metadata works.
- [ ] Meta description is clean.
- [ ] Canonical URL is correct.
- [ ] Sitemap submitted to Google Search Console.
- [ ] Optional: submit to Bing Webmaster Tools.

### Done when

- Site is ready to share publicly without caveats.
- Form/checkout/community link behavior is verified.
- Mobile experience feels premium.

### Do not drift into

- New design changes during final QA unless they fix a real defect.
- Launching paid traffic before forms/checkout are tested.

---

## 10. Phase I — Launch Marketing System

### Goal

Drive qualified attention to Drop 001 with brand-native content and ads.

### Organic launch assets

- [ ] Founder launch post.
- [ ] Drop announcement post.
- [ ] Product carousel: tee / hoodie / hat.
- [ ] Story sequence: loss -> review -> rebuild -> return.
- [ ] Behind-the-drop post.
- [ ] Discord/community invite post, if ready.
- [ ] Email/waitlist announcement.

### Paid ad assets

Create concepts for:

- [ ] Meta feed ad.
- [ ] Meta story/reel ad.
- [ ] Retargeting ad for site visitors.
- [ ] Product-focused carousel.
- [ ] Manifesto/brand-code ad.

Ad rules:

- Keep black/white only.
- Product first.
- No fake financial claims.
- No trading-result claims.
- No guru visual language.
- CTA should match current state:
  - `Join Drop List` before checkout
  - `Shop Drop 001` after checkout

### Done when

- Organic content and paid creative match the site.
- Traffic lands on a verified conversion path.
- Ad claims are compliant and brand-safe.

### Do not drift into

- Cheap meme-store ads.
- Red/green trading visuals.
- Screenshots of P&L or implied outcomes.

---

## 11. Phase J — Post-Launch Ops + Iteration

### Goal

Use real buyer/list data to decide next moves instead of guessing.

### Track

- [ ] Site visitors.
- [ ] Product-page views.
- [ ] Waitlist conversion rate.
- [ ] Product interest split.
- [ ] Email open/click rate.
- [ ] Checkout conversion if live.
- [ ] Abandoned checkout if platform supports it.
- [ ] CAC if paid ads run.
- [ ] Gross/contribution margin.
- [ ] Return/exchange issues.
- [ ] Customer questions.

### Iterate

- [ ] Improve product-page clarity based on questions.
- [ ] Improve sizing/fit details if buyers hesitate.
- [ ] Adjust CTA/copy based on funnel data.
- [ ] Create retargeting ads from strongest creative.
- [ ] Decide Drop 001 restock or Drop 002 direction.

### Done when

- The brand has a repeatable loop:

```text
Traffic -> list/shop -> purchase/community -> feedback -> next drop.
```

### Do not drift into

- Changing the whole brand because of tiny sample size.
- Launching Drop 002 before learning from Drop 001.

---

## 12. Immediate Next Piece

The next concrete piece should be **Phase B: Conversion Infrastructure**.

Recommended first task:

```text
Choose the brand-owned drop-list destination.
```

Decision needed from Jace:

1. Use a dedicated brand Gmail for now.
2. Set up domain email / Google Workspace.
3. Choose an email platform like Shopify Email, Klaviyo, ConvertKit, Beehiiv, or Mailchimp.
4. Keep FormSubmit temporarily but route it to a better destination than a personal inbox.

After that decision, the next build task is:

```text
Wire the selected destination, test signup delivery, add analytics events, and verify desktop/mobile success/error states.
```

---

## 13. Quick Phase Index

| Phase | Name | Primary outcome |
|---|---|---|
| A | Roadmap + Tracking Foundation | Shared plan and docs |
| B | Conversion Infrastructure | Reliable drop-list + analytics |
| C | Product + Shop Readiness | Buyer-ready product info |
| D | Finance/Pricing/Inventory | Real prices and quantity logic |
| E | Ecommerce Checkout | Purchases enabled |
| F | Discord/Community | Real community path |
| G | Brand Story/SEO | Durable brand pages/content |
| H | Launch QA | Site ready to share publicly |
| I | Launch Marketing | Organic/paid traffic assets |
| J | Post-Launch Ops | Data-backed iteration |

---

## 14. Definition of Launch-Ready

UNPROFITABLE is launch-ready when:

- Drop-list or checkout is real and tested.
- Product info is complete enough for buyers.
- Legal/policy pages are not placeholders for commerce.
- Mobile QA passes.
- Social previews work.
- Analytics are installed.
- Community CTA is either real or honestly marked as coming soon.
- All public CTAs are truthful.
- No customer-facing page contains internal build language.
- The site still feels like premium black/white streetwear, not a guru funnel.
