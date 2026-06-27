// /api/size — Drop List size capture for UNPROFITABLE.
//
// Called from the size-intent email's S/M/L/XL... buttons:
//   https://www.wearunprofitable.com/size?s=<SIZE>&id=<klaviyo profile id>
// Public URL /size routes here via vercel.json rewrite.
//
// On one click it sets ONLY the Klaviyo profile property drop001_size = <SIZE>
// on the given profile, then returns a minimal on-brand HTML confirmation.
//
// The private Klaviyo key is read from process.env.KLAVIYO_API_KEY (server-side
// only) — never shipped to the browser, never logged.

const VALID_SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
const KLAVIYO_REVISION = '2024-10-15';
const HOME = 'https://www.wearunprofitable.com/';

// House palette (email design system §1).
const PAGE = '#efeee9';
const BLACK = '#050505';
const PAPER = '#f7f5ef';
const SOFT = '#b8b2a8';
const MUTED = '#8f887e';
const LINE = '#2b2925';

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (ch) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]
  ));
}

function page({ headlineHtml, sub, eyebrow }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="robots" content="noindex, nofollow" />
<meta name="color-scheme" content="only light" />
<title>UNPROFITABLE</title>
<style>
  *{box-sizing:border-box;}
  html,body{margin:0;padding:0;}
  body{
    background:${PAGE};
    font-family:Arial,Helvetica,sans-serif;
    min-height:100vh;
    display:flex;align-items:center;justify-content:center;
    padding:24px;
    overflow-x:hidden;
  }
  .card{
    background:${BLACK};
    color:${PAPER};
    border:1px solid ${LINE};
    max-width:560px;width:100%;
    padding:56px 40px;
    text-align:center;
    overflow-wrap:break-word;
  }
  .eyebrow{
    font-size:11px;font-weight:900;letter-spacing:3px;text-transform:uppercase;
    color:${MUTED};margin:0 0 22px;
  }
  .h1{
    font-size:clamp(40px, 13vw, 64px);
    line-height:0.92;font-weight:900;letter-spacing:-0.05em;
    color:${PAPER};margin:0;
  }
  .h1 .size,.h1 .logged{display:block;}
  .rule{width:84px;height:2px;background:${PAPER};margin:26px auto;}
  .sub{
    font-size:clamp(16px, 4.6vw, 19px);
    line-height:1.5;color:${SOFT};margin:0 0 32px;
  }
  .back{
    display:inline-block;
    font-size:clamp(11px, 3.2vw, 12px);
    font-weight:900;letter-spacing:0.18em;
    text-transform:uppercase;color:${PAPER};text-decoration:none;
    border:1px solid ${PAPER};padding:14px 26px;
  }
  .back:hover{background:${PAPER};color:${BLACK};}
  @media (max-width:430px){
    body{padding:16px;}
    .card{padding:40px 22px;}
  }
</style>
</head>
<body>
  <main class="card">
    <p class="eyebrow">${escapeHtml(eyebrow)}</p>
    <h1 class="h1">${headlineHtml}</h1>
    <div class="rule"></div>
    <p class="sub">${escapeHtml(sub)}</p>
    <a class="back" href="${HOME}">Back to UNPROFITABLE</a>
  </main>
</body>
</html>`;
}

function send(res, status, html) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.end(html);
}

function fallback(res, status) {
  send(res, status, page({
    eyebrow: 'DROP 001 · DISCIPLINED / 001',
    headlineHtml: '<span class="logged">NOT LOGGED.</span>',
    sub: "That link didn't carry a valid size. Head back and tap your size from the email again — we'll log it then."
  }));
}

export default async function handler(req, res) {
  try {
    if (req.method !== 'GET') {
      return fallback(res, 405);
    }

    // Parse query params (req.query is provided by Vercel; fall back to URL parse).
    const query = req.query || Object.fromEntries(
      new URL(req.url, 'http://localhost').searchParams.entries()
    );

    const rawSize = Array.isArray(query.s) ? query.s[0] : query.s;
    const rawId = Array.isArray(query.id) ? query.id[0] : query.id;

    const size = String(rawSize || '').trim().toUpperCase();
    const id = String(rawId || '').trim();

    // Validate size against the allow-list.
    if (!VALID_SIZES.includes(size)) {
      return fallback(res, 400);
    }

    // Guard the id: Klaviyo profile ids are ULID-like (26 chars, alphanumeric).
    // This blocks malformed / injected ids and keeps unmerged email tags
    // (e.g. a literal "{{ person.id }}") from ever hitting the API.
    if (!/^[A-Za-z0-9]{20,40}$/.test(id)) {
      return fallback(res, 400);
    }

    const key = process.env.KLAVIYO_API_KEY;
    if (!key) {
      // Misconfiguration — never expose detail to the visitor.
      return fallback(res, 500);
    }

    // Idempotent PATCH: sets ONLY drop001_size; re-tapping just re-writes the
    // same value. Nothing else on the profile is touched.
    const apiRes = await fetch(`https://a.klaviyo.com/api/profiles/${encodeURIComponent(id)}/`, {
      method: 'PATCH',
      headers: {
        Authorization: `Klaviyo-API-Key ${key}`,
        revision: KLAVIYO_REVISION,
        'content-type': 'application/json',
        accept: 'application/json'
      },
      body: JSON.stringify({
        data: {
          type: 'profile',
          id,
          attributes: { properties: { drop001_size: size } }
        }
      })
    });

    if (!apiRes.ok) {
      return fallback(res, 502);
    }

    // `size` is from the fixed VALID_SIZES allow-list, so it is safe to inline.
    return send(res, 200, page({
      eyebrow: 'DROP 001 · DISCIPLINED / 001',
      headlineHtml: `<span class="size">${size}</span><span class="logged">LOGGED.</span>`,
      sub: 'Thanks for helping us build it right. We build to the list so nothing goes to waste.'
    }));
  } catch (err) {
    // Never leak a stack trace or the key.
    return fallback(res, 500);
  }
};
