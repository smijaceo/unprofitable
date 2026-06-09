# Drop 001 Ops Launch-Day Checklist

**Owner lane:** Operations / Customer Experience  
**Status:** Draft checklist. Checkout still blocked until final approvals and test order/refund pass.  
**Related doc:** `docs/ops/drop-001-ops-readiness-packet.md`

---

## 48 Hours Before Checkout

- [ ] Confirm checkout platform is final.
- [ ] Confirm products/SKUs/variants are correct.
- [ ] Confirm product statuses are intentionally set: draft until launch, active only when approved.
- [ ] Confirm inventory quantities match the approved Drop 001 model.
- [ ] Confirm pricing is approved by Jace/Finance.
- [ ] Confirm shipping regions are approved.
- [ ] Confirm shipping rates/free-shipping threshold are approved and configured.
- [ ] Confirm taxes/payment settings are configured.
- [ ] Confirm return/exchange policy is approved and live.
- [ ] Confirm damaged/incorrect item process is approved and live or linked.
- [ ] Confirm support email is active and monitored.
- [ ] Confirm support templates are loaded or easily accessible.
- [ ] Confirm packaging materials are in hand.
- [ ] Confirm scale/printer/labels are working if fulfilling in-house.
- [ ] Confirm fulfillment owner and backup owner.
- [ ] Confirm Product/Supplier has signed off on production/inventory timeline.
- [ ] Confirm Finance has signed off on packaging/shipping/reship assumptions.
- [ ] Confirm Brand QA has reviewed policy/support tone.
- [ ] Confirm Marketing is not promising faster shipping, easier returns, or availability than Ops approved.

---

## 24 Hours Before Checkout

- [ ] Place a test order.
- [ ] Confirm confirmation email received.
- [ ] Confirm order appears in dashboard.
- [ ] Confirm SKU/variant/size/order details are correct.
- [ ] Confirm shipping rate charged correctly.
- [ ] Confirm tracking/label workflow works or is ready.
- [ ] Test refund or cancellation workflow.
- [ ] Confirm policy links in footer/product/checkout work.
- [ ] Confirm no checkout CTA is live before approval.
- [ ] Check mobile product pages and checkout path.
- [ ] Check `drop@wearunprofitable.com` receives inbound messages.
- [ ] Prepare launch monitoring sheet or order issue log.

---

## 1 Hour Before Checkout

- [ ] Confirm Jace approval to open checkout.
- [ ] Confirm products are active only if meant to be active.
- [ ] Confirm inventory caps are correct.
- [ ] Confirm discount/bundle logic, if any, is approved and tested.
- [ ] Confirm shipping settings one more time.
- [ ] Confirm return/exchange/damaged policies are live.
- [ ] Confirm support inbox is open.
- [ ] Confirm payment provider is not in test mode.
- [ ] Confirm analytics/events are not breaking the checkout path.
- [ ] Confirm public CTAs match reality: `Shop the Drop` only if checkout is truly live.

---

## During Launch Window

- [ ] Monitor orders every 15-30 minutes for the first hour.
- [ ] Watch for failed payments, duplicate orders, wrong variants, impossible inventory behavior.
- [ ] Watch support inbox every 30-60 minutes.
- [ ] Prioritize address correction requests before labels are created.
- [ ] Log all customer questions by type.
- [ ] Log any inventory/variant issue immediately.
- [ ] Do not improvise policy exceptions without Jace approval.
- [ ] If a checkout-breaking issue appears, pause traffic/CTAs before more orders come in.

---

## After First 5-10 Orders

- [ ] Spot-check order details.
- [ ] Confirm sizes/variants look correct.
- [ ] Confirm tax/shipping charges look as expected.
- [ ] Confirm confirmation emails are sending.
- [ ] Confirm inventory is decrementing correctly.
- [ ] Confirm fulfillment queue is readable.
- [ ] Confirm no customer confusion pattern is emerging from support emails.

---

## Fulfillment Start

- [ ] Pick first order.
- [ ] Inspect product.
- [ ] Pack using approved packaging checklist.
- [ ] Weigh package.
- [ ] Create label.
- [ ] Confirm tracking attaches/sends.
- [ ] Mark fulfilled only when truly ready.
- [ ] Record packaging/shipping cost for Finance.

---

## End-of-Day Review

- [ ] Total orders.
- [ ] Revenue, if Finance requests it.
- [ ] Units sold by product/size.
- [ ] Support tickets by type.
- [ ] Shipping/address issues.
- [ ] Damaged/incorrect reports, if any.
- [ ] Inventory remaining.
- [ ] Customer questions that need website FAQ updates.
- [ ] Any policy friction or unclear promise.
- [ ] Decision: keep checkout open, pause, or adjust communication.

---

## Emergency Pause Conditions

Pause checkout/traffic and alert Jace if:

- Shipping rates are wrong.
- Inventory is overselling.
- Wrong products/variants are being sold.
- Payment capture is broken.
- Product page promises conflict with policy.
- Support receives repeated confusion about the same critical issue.
- Fulfillment owner cannot process orders within the approved window.
