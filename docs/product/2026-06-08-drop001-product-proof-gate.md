# DROP 001 Product Proof Gate — First Product/Supplier Project

**Owner:** Product / Supplier  
**Date:** 2026-06-08  
**Drop:** DISCIPLINED / 001  
**Products:** DISCIPLINED Oversized Tee, DISCIPLINED Heavyweight Hoodie, DISCIPLINED Structured Hat  
**Current stage:** Preview / drop-list. Checkout must stay closed until this gate is passed.

## Project Choice

First project: **Product Proof Gate v1**.

Reason: the site already has product pages, images, Shopify draft import data, and buyer-confidence placeholder copy, but the real product proof is not complete. Before supplier/order/checkout decisions, Product/Supplier needs a single source of truth showing what is confirmed, what is assumed, what is blocked, and what Jace must approve.

## Goal

Turn Drop 001 from “good-looking mockup pages” into a controlled product-readiness process that prevents unsupported claims like premium, heavyweight, oversized, structured, durable, or buyer-ready from going live before specs/sample evidence exists.

## Scope

### In scope

- Product proof checklist for each product.
- Spec fields required before checkout.
- Website/marketing claim approval status.
- Sample review and wash-test checklist.
- Production risk list.
- Inputs Finance and Ops/CX need from Product/Supplier.
- Jace approval points.

### Out of scope

- Website layout/design changes.
- Final pricing and margin approval.
- Fulfillment execution.
- Ad strategy or paid media.
- Final supplier/sample approval without Jace.

## Source Audit Completed

Checked current repo sources:

- `data/shopify/drop-001-products.csv`
- `docs/shopify/drop-001-product-import-notes.md`
- `docs/roadmap/unprofitable-master-roadmap.md`
- `docs/agents/chief-of-staff-blockers.md`
- Product pages:
  - `disciplined-oversized-tee.html`
  - `disciplined-heavyweight-hoodie.html`
  - `disciplined-structured-hat.html`
- Asset library: `assets/drop001-library/`

## Current Confirmed Facts

These are supported by repo/docs, not supplier/sample proof:

| Item | Confirmed in repo | Notes |
| --- | --- | --- |
| Drop name | Yes | `DROP 001: DISCIPLINED / 001` |
| Products | Yes | Tee, hoodie, hat only |
| Current sales status | Yes | Early access / drop-list; checkout not live |
| Shopify draft SKUs | Yes | CSV includes SKUs for S-2XL tee/hoodie and OS hat |
| Draft inventory | Yes | CSV sets inventory to `0`, draft status |
| Customer-facing pricing | Yes | Hidden/coming soon until Jace approves |
| Asset library | Yes | 26 image assets present |
| Real product specs | No | Blank, GSM, blend, measurements, production method not confirmed |
| Real sample photos | Not proven | Assets appear to be product/mockup/campaign reference imagery; mark as unverified until sample origin is confirmed |

## Product Proof Matrix

Legend:

- **Confirmed** = backed by supplier spec, sample measurement, or source document.
- **Assumption** = acceptable placeholder but cannot support strong public claim yet.
- **Blocked** = missing proof needed before checkout.

### DISCIPLINED Oversized Tee

| Requirement | Status | Current evidence | Needed before checkout |
| --- | --- | --- | --- |
| Final blank | Blocked | Not found in repo | Supplier/blank name, style code, color, country/origin if available |
| GSM / fabric weight | Blocked | CSV says final fabric weight must be confirmed | Supplier spec sheet with oz/yd² or GSM |
| Material blend | Blocked | Not found in repo | Cotton/poly/etc. exact blend |
| Oversized / boxy fit proof | Blocked | Product name/copy says oversized | Size chart + sample measurements: chest width, body length, shoulder, sleeve opening |
| Available sizes | Assumption | CSV variants S, M, L, XL, 2XL | Jace confirms final size run and supplier availability |
| Print method | Blocked | Product copy references front/back graphics and patch | Decoration method: screen print/DTF/DTG/embroidery/patch method, ink/thread specs if available |
| Patch placement | Blocked | Assets show low-body patch concept | Final measurement from hem/side seam and sample photo |
| Shrinkage/care | Blocked | Product pages say care notes will be posted | Wash test + supplier care instructions |
| Real sample photos | Blocked | Assets exist but sample authenticity not proven | Real sample/product photos or clearly labeled production mockups |

### DISCIPLINED Heavyweight Hoodie

| Requirement | Status | Current evidence | Needed before checkout |
| --- | --- | --- | --- |
| Final blank | Blocked | Not found in repo | Supplier/blank name, style code, color, origin if available |
| GSM / fabric weight | Blocked | Copy says heavyweight; CSV says exact blank/fabric weight must be confirmed | Supplier spec sheet; minimum proof threshold recommended before claiming heavyweight |
| Material blend | Blocked | Not found in repo | Cotton/poly/fleece blend, face yarn if available |
| Heavyweight proof | Blocked | Product name/copy says heavyweight | GSM/oz confirmation + sample weight/handfeel notes |
| Hood structure | Blocked | Not found in repo | Sample review: double-layer hood, drawcord/no drawcord, collar/hood shape photos |
| Available sizes | Assumption | CSV variants S, M, L, XL, 2XL | Jace confirms final size run and supplier availability |
| Print/decoration method | Blocked | Copy references chest mark, low patch, sleeve hit, arched back print | Confirm method by placement; test stretch/crack behavior |
| Patch placement | Blocked | Assets show low patch concept | Final measurement and sample photo |
| Shrinkage/care | Blocked | Product pages say care notes will be posted | Wash test + supplier care instructions |
| Real sample photos | Blocked | Assets exist but sample authenticity not proven | Real sample/product photos or clearly labeled production mockups |

### DISCIPLINED Structured Hat

| Requirement | Status | Current evidence | Needed before checkout |
| --- | --- | --- | --- |
| Final blank | Blocked | Not found in repo | Supplier/blank name, style code, color, panel count, crown profile |
| Material blend | Blocked | Not found in repo | Cotton/poly/wool/acrylic blend and structure material |
| Structured fit proof | Blocked | Copy says structured | Crown profile, closure type, head size range, brim shape |
| Closure type | Blocked | Product page says closure will be confirmed | Snapback/strapback/fitted/etc. |
| Embroidery method | Blocked | Copy says front, side, back embroidery | Stitch count estimate, thread color, placement measurements, embroidery proof/sample |
| Sizing | Assumption | CSV has OS | Confirm head circumference range and adjustability |
| Care | Blocked | Care notes not found | Spot-clean / hand-wash guidance from supplier/decorator |
| Real sample photos | Blocked | Assets exist but sample authenticity not proven | Real sample/product photos or clearly labeled production mockups |

## Claims Approval Status

### Approved right now

These are safe because they match current preview status and do not overclaim product proof:

- `Drop 001: DISCIPLINED / 001`
- `Early access list open`
- `Checkout is not live yet`
- `Final specs will be confirmed before checkout`
- `Black-and-white product direction` if visuals remain accurate
- `Sizes currently planned: S-2XL for tee/hoodie, OS for hat` only if labeled as planned/draft

### Conditional / needs proof before use as strong claim

- `Oversized tee` — needs measurements/fit sample.
- `Heavyweight hoodie` — needs GSM/oz and sample confirmation.
- `Structured hat` — needs blank/profile/closure confirmation.
- `Durable print` — needs print method + wash test.
- `Premium` — needs actual blank/spec/sample proof; otherwise use softer language.
- `Real product photos` — only if the assets are confirmed to be real sample/product shots.

### Not approved yet

Do not publish these as final claims until proof exists:

- Exact GSM/fabric weight.
- Exact material blend.
- Exact size chart.
- Shrinkage performance.
- Production timeline.
- Shipping timeline/region promise.
- Return/exchange final terms.
- Any “will not crack/fade/shrink” guarantee.

## Sample Approval Checklist

For each sample, capture:

1. Supplier/blank name and style code.
2. Size received and color.
3. Flat-lay measurements:
   - Tee: chest width, body length, shoulder width, sleeve length/opening, hem width.
   - Hoodie: chest width, body length, shoulder width, sleeve length, cuff/hem rib, hood height/width.
   - Hat: crown height, brim length/width, closure type, head circumference range.
4. Weight/GSM/fabric proof from supplier spec.
5. On-body photos: front, side, back.
6. Detail photos: neck label, seams, ribbing, hem, patch, print/embroidery closeups.
7. Decoration review:
   - Alignment.
   - Color accuracy.
   - Edge cleanliness.
   - Handfeel.
   - Stretch/crack behavior for prints.
   - Thread density/puckering for embroidery.
8. Defect notes.
9. Pass/fail decision.
10. Jace approval required before finalizing.

## Wash Test Checklist

Run one controlled wash test per product/sample before final checkout language:

1. Measure and photograph sample before wash.
2. Wash inside-out, cold water, mild detergent.
3. Hang dry preferred; if dryer is likely for customers, run separate low-heat test.
4. Re-measure after wash 1.
5. Inspect print/embroidery/patch:
   - Cracking.
   - Peeling.
   - Fading.
   - Puckering.
   - Edge lift.
6. Repeat to wash 3 if timeline allows.
7. Record shrinkage percentage by measurement point.
8. Approve final care instructions.

## Production Risk List

| Risk | Impact | Mitigation |
| --- | --- | --- |
| Unknown blank quality | Product may not match premium promise | Do not finalize supplier/checkout until samples are reviewed |
| Unsupported `heavyweight` hoodie claim | Buyer disappointment / brand trust hit | Require GSM/oz and sample handfeel review |
| `Oversized` tee may be standard fit | Wrong fit expectations / returns | Require size chart and on-body fit proof |
| Hat embroidery can pucker or look cheap | Premium promise weakens | Require stitch-out or sample closeup before approval |
| Mockups mistaken for real product photos | Misleading customer expectation | Label mockups/reference images until sample photos are confirmed |
| Decoration method not tested | Cracking/fading after wash | Confirm method and run wash test |
| Size availability is only draft CSV data | Overselling / wrong variants | Confirm final supplier size run before Shopify publish |
| Finance lacks real COGS | Pricing/margin math unreliable | Send supplier costs, decoration costs, MOQ, shipping assumptions to Finance |
| Ops lacks care/timing inputs | Support and policy copy incomplete | Send production timeline, care instructions, damage implications to Ops/CX |

## Finance Inputs Needed From Product/Supplier

- Blank cost by product and size.
- Decoration cost by placement.
- Patch cost and application cost.
- Embroidery setup/digitizing/stitch cost for hat.
- MOQ by product/color/size.
- Sample cost and lead time.
- Production lead time.
- Defect/reprint allowance.
- Packaging requirements if supplier handles folding/bagging/labeling.
- Estimated packed weight if shipping weights differ from draft CSV.

## Ops/CX Inputs Needed From Product/Supplier

- Final care instructions.
- Production timeline and delay buffer.
- Damage/defect criteria with photo requirements.
- Replacement feasibility by inventory quantity.
- Packaging/product handling notes.
- Expected shrinkage/fit caveats.

## Jace Approval Required

Jace must approve before these become final:

1. Supplier/manufacturer path.
2. Blank for tee, hoodie, and hat.
3. Final sample pass/fail.
4. Size run.
5. Product quality claims: oversized, heavyweight, structured, premium, durable.
6. Quantity/production run.
7. Checkout going live.

## Next Execution Steps

1. Build a supplier/blank shortlist for the tee, hoodie, and hat using this proof gate as evaluation criteria.
2. Request/collect spec sheets and sample quotes for top options.
3. Fill the product matrix with real supplier evidence and produce a Jace decision brief.

## Checkout Gate Decision

**Status:** BLOCKED for checkout.

Reason: product pages are in a good preview state, but final blank/spec/sample/wash evidence is missing. Current public pages are mostly safe because they repeatedly say final specs will be confirmed before checkout, but Product/Supplier should not approve live checkout or stronger product-quality claims yet.
