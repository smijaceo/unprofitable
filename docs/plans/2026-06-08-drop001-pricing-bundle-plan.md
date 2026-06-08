# Drop 001 Pricing + Bundle Implementation Plan

> Scope: apply Jace's pricing/bundle handoff to the public static website while checkout remains closed.

## Goals

1. Keep public pricing hidden and use coming-soon language:
   - DISCIPLINED Oversized Tee: Coming soon
   - DISCIPLINED Heavyweight Hoodie: Coming soon
   - DISCIPLINED Structured Hat: Coming soon
2. Add a premium bundle section to `/shop.html` that increases AOV without making the brand feel discounted.
3. Keep every CTA in coming-soon / early-access mode until checkout is intentionally launched.
4. Keep pricing only in memory/internal decision context until Jace approves public display.

## Bundle Architecture

| Bundle | Includes | Normal | Bundle | Save |
|---|---|---:|---:|---:|
| Starter Bundle | Tee + Hat | Coming soon | Coming soon | Coming soon |
| Discipline Kit | Hoodie + Hat | Coming soon | Coming soon | Coming soon |
| Full Drop Bundle | Tee + Hoodie + Hat | Coming soon | Coming soon | Coming soon |

Shipping threshold: coming soon.

## Website Execution

1. Update individual product cards and product pages to coming-soon language.
2. Remove product JSON-LD prices until public pricing is approved.
3. Add `/shop.html` section below individual products:
   - Eyebrow: `DROP 001 BUNDLES`
   - Heading: `BUILD THE UNIFORM.`
   - Copy: premium “complete the uniform” framing, not discount-rack language.
   - Bundle cards with coming-soon labels and early-access CTAs.
   - Microcopy: `Bundle details will be announced before checkout opens.`
4. Keep shipping threshold coming soon in buyer notes.
5. Track bundle CTA clicks with existing Vercel Analytics helper, without personal data.
6. Update docs:
   - master roadmap Phase C/D status
   - Shopify import notes draft prices

## Guardrails

- Do not add `Add to Cart`, `Buy Now`, `Checkout`, or direct Shopify cart links.
- Do not use cheap discount language like `Huge savings`, `Best deal`, or `Limited-time discount`.
- Do not imply bundles are purchasable until checkout opens.
- Keep hoodie as the subtle economic anchor via layout/copy, not aggressive sales pressure.

## Verification

- Search for stale public price numbers after edits.
- Search for forbidden public checkout CTAs.
- Validate HTML refs + JSON-LD.
- QA `/shop.html` desktop and mobile.
- Push to GitHub and verify live `/shop.html` content.
