# Drop 001 Operations / CX Readiness Packet

**Owner lane:** Operations / Customer Experience  
**Drop:** DROP 001: DISCIPLINED / 001  
**Products:** DISCIPLINED Oversized Tee, DISCIPLINED Heavyweight Hoodie, DISCIPLINED Structured Hat  
**Current mode:** Preview / Drop List only. Checkout is not live.  
**Support/contact currently referenced:** `drop@wearunprofitable.com`

---

## 1. Executive Decision

**First Ops/CX project:** create the operating system for what happens after checkout.

This packet keeps UNPROFITABLE from collecting money before the back-end promise is real. The site can keep building demand, but checkout should not open until the gates below are approved.

---

## 2. Current Truth

### Known

- The public website is in preview/list mode.
- Product pages intentionally say final specs, sizing, shipping, and return terms will be posted before payment.
- Drop 001 contains exactly three products.
- Shopify import notes exist and say products should stay in draft until pricing, shipping, tax, and checkout are tested.
- Support/contact currently points to `drop@wearunprofitable.com`.

### Not Approved Yet

- Fulfillment owner.
- Fulfillment model: in-house, supplier/direct, 3PL, Shopify/Fourthwall/etc.
- Inventory model: preorder, limited inventory, made-to-order, or hybrid.
- Shipping regions.
- Carrier and label workflow.
- Shipping price/free-shipping threshold.
- Production or in-hand inventory timeline.
- Packaging materials and packing process.
- Final return/exchange policy.
- Damaged/incorrect item process.
- Support SLA.
- Test order/refund process.

---

## 3. Checkout Readiness Gate

Checkout remains blocked until every item below is complete.

| Gate | Status | Owner/Handoff | Notes |
|---|---:|---|---|
| Fulfillment owner named | Blocked | Jace / Ops | Who physically owns orders after payment? |
| Fulfillment model selected | Blocked | Jace / Product / Ops | In-house, supplier-direct, 3PL, platform fulfillment, or hybrid. |
| Production/inventory timeline confirmed | Blocked | Product/Supplier | Needed before shipping promises. |
| Shipping regions confirmed | Blocked | Jace / Finance / Ops | Start with domestic only unless approved otherwise. |
| Carrier/label workflow selected | Blocked | Ops / Finance | Shopify labels, Pirate Ship, carrier portal, or fulfillment platform. |
| Shipping cost model confirmed | Blocked | Finance | Flat rate, real-time carrier, free threshold, or included in price. |
| Packaging materials confirmed | Blocked | Brand / Finance / Ops | Must balance brand feel and cost. |
| Return/exchange policy approved | Blocked | Jace / Ops | Policy draft needs final decision. |
| Damaged/incorrect item process approved | Blocked | Jace / Ops / Finance | Replacement/refund/reship budget required. |
| Support email and SLA approved | Partial | Jace / Ops | `drop@wearunprofitable.com` exists as current contact; SLA not approved. |
| Customer confirmation/post-purchase email path tested | Blocked | Checkout platform / Ops | Requires checkout platform. |
| Test order/refund completed | Blocked | Ops | Must happen before public checkout. |
| Launch-day monitoring checklist ready | Drafted | Ops | See `docs/launch-checklists/drop-001-ops-launch-day-checklist.md`. |

---

## 4. Proposed Order Lifecycle

This is the working operating model until Jace chooses the final fulfillment path.

1. **Customer buys.**
   - Checkout sends confirmation email.
   - Order enters platform dashboard.
   - Inventory/variant count updates.

2. **Ops triage.**
   - Check payment status.
   - Check product/size/quantity.
   - Check shipping address.
   - Flag high-risk issues: duplicate order, incomplete address, impossible variant, international destination if not approved.

3. **Fulfillment queue.**
   - Pick item.
   - Inspect garment/hat for obvious defects.
   - Add packing slip if platform supports it.
   - Pack according to packaging checklist.

4. **Label creation.**
   - Confirm package weight.
   - Buy/print label from approved workflow.
   - Add tracking to order.

5. **Customer update.**
   - Platform sends tracking email.
   - If a manual issue occurs, support sends a human update.

6. **Post-shipment monitoring.**
   - Watch delivery exceptions.
   - Respond to address/damage/incorrect item requests.
   - Log every issue type so Drop 002 decisions are based on real data.

7. **Closeout.**
   - Mark fulfilled/closed.
   - Track returns/exchanges/damaged items by SKU and size.

---

## 5. Fulfillment Workflow Draft

### If In-House Fulfillment

**Minimum setup required:**

- Clean packing station.
- Product bins by SKU/size.
- Scale.
- Label printer or reliable printer/tape setup.
- Poly mailers or boxes sized for tee/hoodie/hat combinations.
- Packing slips or handwritten insert if approved.
- Returns/damaged item intake folder.

**Daily flow during launch:**

1. Export or view open paid orders.
2. Sort by shipping method and SKU.
3. Pick product.
4. Inspect item.
5. Pack.
6. Weigh.
7. Create label.
8. Mark fulfilled / send tracking.
9. Log exceptions.

### If Supplier/3PL Fulfillment

**Minimum setup required:**

- Written service agreement or clear email confirmation.
- SKU mapping.
- Packaging rules.
- Insert rules.
- Order export/import test.
- Tracking return path.
- Error/reship policy.

**Do not launch until:**

- A test order successfully reaches the fulfiller.
- The fulfiller can send tracking back.
- Packaging/handling matches brand expectations.

---

## 6. Packaging Checklist Draft

### Required Functional Packaging

- Correct mailer/box for product mix.
- Protection for hat structure if hat ships alone or in bundle.
- Moisture-resistant outer packaging.
- Label clearly attached and scannable.
- Packing slip or order note if used.
- No loose ink/adhesive/tags that can stain garments.

### Optional Brand Layer

Requires Jace/Finance approval before purchase:

- Black/white thank-you card.
- Minimal sticker.
- Branded tissue or inner wrap.
- Custom mailer.

### Packing Quality Check

Before sealing:

- Product matches order.
- Size matches order.
- Garment/hat has no obvious damage.
- Customer name/order number checked.
- Return/exchange insert only included if policy is final.

---

## 7. Shipping Workflow Draft

### Decision Needed

Choose one:

1. **Shopify Shipping / built-in labels** — cleanest if Shopify is checkout.
2. **Pirate Ship** — flexible and simple for manual in-house shipping.
3. **Carrier portal** — less ideal unless volume or account rates justify it.
4. **Fulfillment provider labels** — if supplier/3PL handles shipping.

### Recommended Starting Assumption

Start domestic U.S. only unless Jace explicitly approves international shipping costs, duties/taxes language, lost package handling, and support complexity.

### Shipping Promise Structure

Do not promise exact delivery speed yet. Use a two-part promise after decisions are known:

- **Processing time:** how long until the order leaves UNPROFITABLE/fulfiller.
- **Carrier transit time:** carrier estimate after tracking starts.

Example placeholder, not final copy:

> Orders ship after production/packing is complete. Final processing window and carrier estimates will be posted before checkout opens.

---

## 8. Return / Exchange Policy Draft Inputs

Final policy requires Jace approval. Recommended decisions:

| Decision | Recommended Default | Why |
|---|---|---|
| Return window | 14 days from delivery | Enough buyer trust without open-ended liability. |
| Condition | Unworn, unwashed, original condition | Protects small first run. |
| Exchanges | Size exchange if inventory exists | Honest for limited drops. |
| Customer-paid return shipping | Likely yes for buyer preference returns | Protects margin; Finance to confirm. |
| Brand-paid shipping | Damaged/incorrect items only | Fair and operationally clear. |
| Final sale | Avoid broad final sale unless necessary | “No returns” can hurt trust; if used, state clearly before purchase. |
| Refund timing | After item is received/inspected | Prevents fraud/loss. |

Customer-facing language must be simpler than this table once approved.

---

## 9. Damaged / Incorrect Item Workflow

### Intake Requirements

Customer sends:

- Order number.
- Email used at checkout.
- Clear photo of issue.
- Photo of packing slip/label if incorrect item.
- Short description.

### Ops Flow

1. Confirm order exists.
2. Confirm issue type:
   - Damaged in shipment.
   - Defective item.
   - Wrong item.
   - Wrong size shipped.
   - Missing item.
3. Decide remedy based on policy and inventory:
   - Replacement if inventory exists.
   - Refund if replacement unavailable.
   - Partial remedy only if Jace approves; avoid messy one-off discounts by default.
4. Send response template.
5. Log issue by SKU/size/cause.

### Brand Rule

If UNPROFITABLE made the mistake, own it plainly. No corporate deflection.

---

## 10. Support SLA Draft

Recommended launch SLA:

- **Normal:** reply within 1 business day.
- **Launch window:** monitor inbox at least every 2-3 hours while checkout is active.
- **Urgent address/order correction:** prioritize before label creation.

Needs Jace approval before publishing.

---

## 11. Support Inbox Setup

Current referenced inbox: `drop@wearunprofitable.com`.

Recommended labels/folders:

- `Orders`
- `Address Changes`
- `Damaged / Incorrect`
- `Returns / Exchanges`
- `Sizing Questions`
- `Shipping Questions`
- `Wholesale / Collabs` later, not needed for launch ops

Recommended canned-reply naming:

- `PRELAUNCH_SPECS`
- `SIZE_FIT_HELP`
- `SHIPPING_TIMELINE`
- `ADDRESS_CHANGE`
- `DAMAGED_INCORRECT_INTAKE`
- `EXCHANGE_REQUEST`
- `RETURN_REQUEST`
- `DELAY_UPDATE`

---

## 12. Customer Expectation Risks

| Risk | Why it matters | Control |
|---|---|---|
| Product pages stay vague too long | Buyers hesitate or support gets flooded. | Product/Supplier confirms specs before checkout. |
| Shipping promise too aggressive | First drop can miss timelines. | Promise processing + carrier estimate separately. |
| Returns too generous without cost model | Margin risk. | Finance confirms reverse-shipping/reship costs. |
| Returns too harsh | Buyer trust risk. | Plain limited-drop policy with fair damaged/incorrect handling. |
| Hat packaging ignored | Structured hat can arrive crushed. | Packaging test before launch. |
| Support inbox not monitored | Launch feels sloppy. | Launch-day monitoring cadence. |
| Ads promise checkout/fast delivery before ops ready | Customer disappointment. | Marketing must match Ops-approved language. |

---

## 13. Decisions Needed From Jace

1. Fulfillment owner: who physically packs/ships Drop 001?
2. Fulfillment model: in-house, supplier-direct, 3PL/platform, or hybrid?
3. Shipping regions: U.S. only for Drop 001, or international too?
4. Shipping cost model: flat rate, calculated carrier, free threshold, or included?
5. Return window: 14 days, 30 days, exchange-only, or final sale?
6. Size exchange stance: allowed only if inventory exists?
7. Damaged/incorrect remedy: replacement first, refund if unavailable?
8. Support SLA: approve 1 business day normal / launch-window monitoring?
9. Packaging direction: basic clean packaging or branded packaging layer?
10. Inventory model: preorder, in-hand inventory, made-to-order, or hybrid?

---

## 14. Approval / Handoff Needed

- **Finance:** shipping rates, packaging cost, return/reship budget, margin impact.
- **Product/Supplier:** production timing, care instructions, handling constraints, hat packaging risk.
- **Brand QA:** final policy/support tone before publishing.
- **Website:** publish final policy/FAQ once decisions are approved.
- **Marketing:** no ad claims beyond Ops-approved promises.

---

## 15. Current Verdict

**Checkout status:** BLOCKED.

**Reason:** Operations/CX has a readiness framework now, but final decisions are not approved. The brand can keep collecting drop-list interest, but purchase CTAs should not go live yet.
