# Drop 001 Pricing + Bundle Implementation Plan

> Scope: apply Jace's pricing/bundle handoff to the public static website while checkout remains closed.

## Goals

1. Replace weird/exact public pricing with clean streetwear pricing:
   - DISCIPLINED Oversized Tee: `$55`
   - DISCIPLINED Heavyweight Hoodie: `$130`
   - DISCIPLINED Structured Hat: `$50`
2. Add a premium bundle section to `/shop.html` that increases AOV without making the brand feel discounted.
3. Keep every CTA in coming-soon / early-access mode until checkout is intentionally launched.
4. Document pricing decisions in roadmap/Shopify notes so future checkout setup uses the same numbers.

## Bundle Architecture

| Bundle | Includes | Normal | Bundle | Save |
|---|---|---:|---:|---:|
| Starter Bundle | Tee + Hat | `$105` | `$95` | `$10` |
| Discipline Kit | Hoodie + Hat | `$180` | `$170` | `$10` |
| Full Drop Bundle | Tee + Hoodie + Hat | `$235` | `$220` | `$15` |

Free shipping threshold: `$150+`.

## Website Execution

1. Update individual product cards and product pages to the clean public prices.
2. Update product JSON-LD prices to match the public display prices.
3. Add `/shop.html` section below individual products:
   - Eyebrow: `DROP 001 BUNDLES`
   - Heading: `BUILD THE UNIFORM.`
   - Copy: premium “complete the uniform” framing, not discount-rack language.
   - Bundle cards with `Normally`, `Save`, and early-access CTAs.
   - Microcopy: `Bundle pricing available when checkout opens.`
4. Add `Free shipping over $150.` in buyer notes.
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

- Search for stale prices `$56` and `$134` after edits.
- Search for forbidden public checkout CTAs.
- Validate HTML refs + JSON-LD.
- QA `/shop.html` desktop and mobile.
- Push to GitHub and verify live `/shop.html` content.
