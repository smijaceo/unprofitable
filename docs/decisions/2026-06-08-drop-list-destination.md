# Decision: Drop 001 list destination

Date: 2026-06-08

## Decision

Use `drop@wearunprofitable.com` as the Drop 001 waitlist destination and public contact fallback.

## Implementation

- Homepage FormSubmit AJAX endpoint: `https://formsubmit.co/ajax/drop@wearunprofitable.com`
- Footer contact fallback: `mailto:drop@wearunprofitable.com`
- Legal placeholder contact fallback: `drop@wearunprofitable.com`

## Notes

FormSubmit can return a 200 response while still requiring inbox activation. Before sending traffic, verify that the `drop@wearunprofitable.com` inbox receives the FormSubmit activation email, the activation link is clicked, and a test signup arrives with the expected fields: email, identity, product interest, and source.
