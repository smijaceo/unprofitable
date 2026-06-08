# Shopify Direct Cart Integration

## Decision

UNPROFITABLE keeps `wearunprofitable.com` as the primary branded ecommerce experience. Shopify is used as the product/cart/checkout backend, not as a secondary storefront that replaces the custom site.

## Store

```text
https://unprofitable.myshopify.com
```

## Integration method

Product pages use Shopify cart permalinks:

```text
https://unprofitable.myshopify.com/cart/<variant_id>:1
```

The custom product pages render size/fit selectors and update the `Add Selected to Cart` link client-side based on the selected Shopify variant ID.

## Drop 001 variant map

### DISCIPLINED Oversized Tee

| Size | Variant ID |
|---|---:|
| S | 48751062057175 |
| M | 48751062089943 |
| L | 48751062122711 |
| XL | 48751062155479 |
| 2XL | 48751062188247 |

### DISCIPLINED Heavyweight Hoodie

| Size | Variant ID |
|---|---:|
| S | 48751062253783 |
| M | 48751062286551 |
| L | 48751062319319 |
| XL | 48751062352087 |
| 2XL | 48751062384855 |

### DISCIPLINED Structured Hat

| Fit | Variant ID |
|---|---:|
| OS | 48751062450391 |

## Shopify publication requirements

For the cart links to work publicly, Shopify must be able to expose the variants to the Online Store channel.

Minimum Shopify setup:

```text
Product status: Active
Sales channel: Online Store enabled
Variant exists and is not deleted
Inventory: launch quantity or test quantity loaded
Continue selling when out of stock: OFF unless deliberately overselling
Store password: disabled for public launch, or test using the storefront password flow
```

## Current verification note

As of the first integration pass, the custom site links are generated correctly, but Shopify returned:

- `/products/disciplined-oversized-tee` -> `404`
- `/cart/<variant_id>:1` -> `410 Link no longer exists`
- `/cart/add.js?id=<variant_id>&quantity=1` -> `422 Cannot find variant`

That means the website wiring is ready, but Shopify is not yet exposing these products/variants publicly through the Online Store channel. The next Shopify-side task is to publish the products/collection to Online Store and load at least test inventory, then re-run cart-link QA.

## Files wired

- `disciplined-oversized-tee.html`
- `disciplined-heavyweight-hoodie.html`
- `disciplined-structured-hat.html`
- `assets/product-page.css`
- `index.html`
