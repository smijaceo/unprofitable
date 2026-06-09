# Drop 001 Ops/CX Readiness Implementation Plan

> **For Hermes:** Execute directly in the Operations / Customer Experience lane. Do not enable checkout until every approval gate is resolved.

**Goal:** Build the first operational readiness packet for UNPROFITABLE Drop 001 so the brand knows exactly what happens after checkout before money is accepted.

**Architecture:** This is a documentation-first operations project. The repo stays in preview mode while we create internal checklists, customer-support templates, policy drafts, and launch-day workflows that can later be converted into final website/policy copy after Jace approves the business decisions.

**Tech Stack:** Static HTML site + markdown operating docs in `docs/ops/`, `docs/launch-checklists/`, and `docs/plans/`.

---

## Project Chosen

**Project:** Drop 001 Post-Checkout Readiness Packet.

**Why this first:** The site already has preview/product pages, but checkout cannot open until fulfillment, shipping, returns/exchanges, damaged-item handling, support expectations, and launch-day monitoring are defined. This project turns the current known gaps into a usable operating system without inventing final promises.

## Non-Negotiables

- Checkout stays blocked.
- Customer-facing policy language remains draft until Jace approval.
- No fake shipping speed, fake scarcity, or vague “easy returns” promise.
- Support tone stays minimal, human, and premium — no corporate filler.
- Finance must confirm shipping, packaging, and return cost assumptions before final policy copy goes live.
- Product/Supplier must confirm production timing, handling, care, and packaging constraints before final promise language goes live.

---

## Task 1: Create the Ops Readiness Packet

**Objective:** Create one source-of-truth doc for fulfillment workflow, shipping workflow, packaging checklist, returns/exchanges, damaged items, support SLA, approval gates, and blockers.

**Files:**
- Create: `docs/ops/drop-001-ops-readiness-packet.md`

**Steps:**
1. Document the current mode: preview/list only, no checkout.
2. Define the proposed order lifecycle from purchase to support closeout.
3. Separate approved facts from decisions needed.
4. Add readiness gates and owner handoffs.
5. Add a launch-blocker list.

**Verification:**
- The doc answers: what happens after someone buys, who packs, how it ships, what happens if damaged, what support email is used, and what still needs Jace approval.

---

## Task 2: Create Customer Support Templates

**Objective:** Draft reusable support replies that are operationally safe and on-brand.

**Files:**
- Create: `docs/ops/drop-001-support-templates.md`

**Templates:**
- Pre-launch product/spec question.
- Size/fit question.
- Shipping timeline question.
- Order confirmation / “what happens next.”
- Address correction.
- Damaged or incorrect item intake.
- Exchange request.
- Return/refund request.
- Delayed shipment.
- Sold-out/restock question.

**Verification:**
- Templates avoid corporate boilerplate and do not promise unapproved shipping timelines, free returns, refunds, or exchanges.

---

## Task 3: Create Launch-Day Ops Checklist

**Objective:** Create a day-of-launch operating checklist to prevent avoidable customer problems.

**Files:**
- Create: `docs/launch-checklists/drop-001-ops-launch-day-checklist.md`

**Checklist Sections:**
- 48 hours before checkout.
- 24 hours before checkout.
- 1 hour before checkout.
- During launch window.
- After first orders.
- End-of-day review.

**Verification:**
- Checklist includes test order/refund, policy pages, inbox monitoring, order export, label workflow, inventory/variant sanity, and escalation rules.

---

## Task 4: Create Customer FAQ/Policy Draft Inputs

**Objective:** Draft the plain-English customer questions that website/policy pages need to answer once decisions are approved.

**Files:**
- Create: `docs/ops/drop-001-customer-faq-policy-inputs.md`

**Verification:**
- Each FAQ answer is marked either `Draft safe now` or `Needs decision` so nothing gets accidentally published as final.

---

## Task 5: Update Roadmap Tracking

**Objective:** Record Ops/CX as the active blocker for checkout readiness.

**Files:**
- Modify: `docs/roadmap/unprofitable-master-roadmap.md`

**Verification:**
- Roadmap points to the new Ops/CX docs.
- Checkout remains blocked until approvals are complete.

---

## Success Criteria

This first project is complete when:

- `docs/ops/drop-001-ops-readiness-packet.md` exists.
- `docs/ops/drop-001-support-templates.md` exists.
- `docs/launch-checklists/drop-001-ops-launch-day-checklist.md` exists.
- `docs/ops/drop-001-customer-faq-policy-inputs.md` exists.
- The roadmap references the Ops/CX readiness packet.
- Final customer-facing promises are clearly blocked pending Jace/Finance/Product approvals.
