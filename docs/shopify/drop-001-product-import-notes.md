# Shopify Drop 001 Product Import Notes

CSV file:

`data/shopify/drop-001-products.csv`

## What this CSV creates

Collection to create manually after import:

`DROP 001: DISCIPLINED / 001`

Products included:

1. `DISCIPLINED Oversized Tee`
   - Handle: `disciplined-oversized-tee`
   - Draft price: `$55.00`
   - Sizes: `S, M, L, XL, 2XL`
   - SKUs: `UNP-D001-TEE-BLK-*`

2. `DISCIPLINED Heavyweight Hoodie`
   - Handle: `disciplined-heavyweight-hoodie`
   - Draft price: `$130.00`
   - Sizes: `S, M, L, XL, 2XL`
   - SKUs: `UNP-D001-HOODIE-BLK-*`

3. `DISCIPLINED Structured Hat`
   - Handle: `disciplined-structured-hat`
   - Draft price: `$50.00`
   - Size: `OS`
   - SKU: `UNP-D001-HAT-BLK-OS`

## Import steps

1. Open Shopify Admin.
2. Go to `Products`.
3. Click `Import`.
4. Upload `drop-001-products.csv`.
5. Review import preview.
6. Import products.
7. Keep products in `Draft` until pricing, shipping, tax, and checkout are tested.
8. Create a manual collection named `DROP 001: DISCIPLINED / 001`.
9. Add the three products to the collection.
10. Send the product URLs and collection URL back so the custom site CTAs can be connected.

## Important review items before publishing

- Public prices use clean Drop 001 pricing: Tee `$55`, Hoodie `$130`, Hat `$50`. Internal COGS/margin models can stay exact, but customer-facing pricing should stay clean unless Jace changes vendor/COGS inputs.
- Bundle architecture for checkout setup: Starter Bundle `$95` (tee + hat, normally `$105`), Discipline Kit `$170` (hoodie + hat, normally `$180`), Full Drop Bundle `$220` (tee + hoodie + hat, normally `$235`).
- Recommended free shipping threshold: `$150+`.
- Inventory is set to `0` and status is `draft` so nothing accidentally sells before launch.
- Shipping weights are working estimates:
  - Tee: 283g
  - Hoodie: 907g
  - Hat: 113g
- Confirm exact blanks, materials, size charts, care instructions, supplier details, and fulfillment timing before checkout goes live.
- Product images use public `wearunprofitable.com` asset URLs. If Shopify cannot fetch any image during import, manually upload the matching image from `assets/drop001-library/`.

## Shopify permissions note

If giving someone access to configure this directly, use limited staff permissions only: Products, Collections, Inventory, Content, Online Store/Themes if needed, Customers/Marketing only if wiring list capture. Do not grant Billing, Payouts, Owner Transfer, or User Management.
