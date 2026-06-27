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
const DROP = 'https://www.wearunprofitable.com/#drop';

// Site palette (Design System v1 — the live wearunprofitable.com is dark).
// Surface ink #000, white text ladder (.92/.66/.48), hairline borders .10.
const INK = '#000000';
const HEADER_BG = 'rgba(2,2,2,.96)';
const FOOTER_BG = '#030303';
const TEXT_1 = 'rgba(255,255,255,.92)';
const TEXT_2 = 'rgba(255,255,255,.66)';
const TEXT_3 = 'rgba(255,255,255,.48)';
const LABEL = 'rgba(255,255,255,.55)';
const LINE_1 = 'rgba(255,255,255,.10)';
const LINE_2 = 'rgba(255,255,255,.16)';

// Header brand mark, inlined so the page is fully self-contained.
const MARK = 'data:image/png;base64,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';

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (ch) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[ch]
  ));
}

// Server-rendered confirmation page, styled to the live wearunprofitable.com
// site (Design System v1): dark surface, Geist / Anton / Geist Mono web fonts,
// the site header (mark + wordmark + 001 rail) and footer. Self-contained so it
// renders without the Vite bundle. Visual only — logic below is unchanged.
function page({ headlineHtml, sub, eyebrow, primary }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="robots" content="noindex, nofollow" />
<meta name="color-scheme" content="dark" />
<meta name="theme-color" content="#000000" />
<title>UNPROFITABLE — DROP 001: DISCIPLINED / 001</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Geist:wght@400;500;600;700;800;900&family=Geist+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
  *{box-sizing:border-box;}
  :root{color-scheme:dark;}
  html,body{margin:0;padding:0;background:${INK};}
  body{
    color:${TEXT_1};
    font-family:'Geist','Inter',ui-sans-serif,system-ui,sans-serif;
    min-height:100vh;
    display:flex;flex-direction:column;
    overflow-x:hidden;
    -webkit-font-smoothing:antialiased;
  }
  a{color:inherit;text-decoration:none;}
  ::selection{background:#fff;color:#000;}
  :focus-visible{outline:2px solid #fff;outline-offset:4px;}
  .mono{font-family:'Geist Mono',ui-monospace,SFMono-Regular,Menlo,monospace;text-transform:uppercase;font-variant-numeric:tabular-nums;}

  /* Header — mirrors .site-header (sticky bar, mark + wordmark, 001 rail). */
  .site-header{
    position:sticky;top:0;z-index:50;
    padding:17px 22px 0;
    background:${HEADER_BG};
    border-bottom:1px solid rgba(255,255,255,.08);
    backdrop-filter:blur(18px) saturate(140%);
  }
  .site-header-top{
    display:flex;align-items:center;justify-content:space-between;gap:13px;
    max-width:1440px;margin:0 auto;
  }
  .site-brand{display:flex;align-items:center;gap:11px;min-width:0;}
  .site-brand-mark{width:42px;height:42px;flex:0 0 auto;display:grid;place-items:center;}
  .site-brand-mark img{width:42px;height:42px;object-fit:contain;}
  .site-wordmark{
    font-size:12px;font-weight:700;letter-spacing:.22em;color:${TEXT_1};
    overflow:hidden;text-overflow:ellipsis;white-space:nowrap;
  }
  .site-join-link{
    min-height:44px;display:inline-flex;align-items:center;
    color:rgba(255,255,255,.86);font-size:10px;font-weight:800;letter-spacing:.18em;
  }
  .site-header-rail{position:relative;max-width:1440px;height:29px;margin:4px auto 0;}
  .site-header-rail::before{content:"";position:absolute;left:0;right:0;top:14px;height:1px;background:${LINE_2};}
  .site-header-badge{
    position:absolute;left:50%;top:0;transform:translateX(-50%);
    min-width:54px;height:28px;display:grid;place-items:center;
    border:1px solid ${LINE_2};background:#020202;color:${TEXT_2};
    font-size:10px;font-weight:800;letter-spacing:.22em;padding-left:.22em;
  }

  /* Main confirmation block. */
  .wrap{flex:1 0 auto;display:flex;align-items:center;justify-content:center;}
  .brand-container{width:100%;max-width:1440px;margin:0 auto;padding:0 16px;}
  .panel{
    max-width:680px;margin:0 auto;padding:clamp(56px,14vw,120px) 0;text-align:center;
  }
  .eyebrow{
    font-size:10px;font-weight:700;letter-spacing:.20em;text-transform:uppercase;
    color:${LABEL};margin:0 0 26px;
  }
  .h1{
    font-family:'Anton','Impact','Arial Narrow',sans-serif;
    font-size:clamp(44px,13.5vw,128px);line-height:1;
    letter-spacing:-.02em;text-transform:uppercase;
    color:#fff;margin:0;max-width:100%;
  }
  .h1 .size,.h1 .logged{display:block;}
  .h1 .logged{margin-top:.14em;}
  .h1 .size{font-variant-numeric:tabular-nums;}
  .rule{width:88px;height:1px;background:${LINE_2};margin:34px auto;}
  .sub{
    font-size:clamp(16px,4.4vw,19px);line-height:1.6;
    color:${TEXT_2};margin:0 auto 36px;max-width:42ch;text-wrap:pretty;
  }
  .cta{display:flex;flex-wrap:wrap;gap:12px;justify-content:center;}
  .cta .btn{flex:0 1 auto;}
  .btn{
    display:inline-flex;align-items:center;justify-content:center;min-height:44px;
    border-radius:999px;padding:13px 24px;
    font-size:11px;font-weight:900;letter-spacing:.16em;text-transform:uppercase;
    border:1px solid #fff;
    transition:transform .28s cubic-bezier(.16,1,.3,1),background-color .28s cubic-bezier(.16,1,.3,1),color .28s cubic-bezier(.16,1,.3,1);
  }
  .btn-primary{background:#fff;color:#000;}
  .btn-primary:hover{transform:translateY(-2px);background:#000;color:#fff;}
  .btn-outline{border-color:rgba(255,255,255,.25);background:rgba(255,255,255,.03);color:#fff;}
  .btn-outline:hover{transform:translateY(-2px);border-color:#fff;background:rgba(255,255,255,.10);}

  /* Footer — mirrors footer2 (thin line, wordmark, mono labels, disclaimer). */
  .site-footer{
    flex:0 0 auto;border-top:1px solid ${LINE_1};background:${FOOTER_BG};
  }
  .site-footer .brand-container{padding-top:48px;padding-bottom:48px;}
  .footer-tag{font-size:10px;font-weight:700;letter-spacing:.20em;text-transform:uppercase;color:${LABEL};margin:0;}
  .footer-mark{
    font-family:'Anton','Impact',sans-serif;text-transform:uppercase;
    font-size:clamp(2.4rem,8vw,4.4rem);line-height:.90;letter-spacing:.01em;
    color:#fff;margin:14px 0 0;
  }
  .footer-line{font-size:12px;line-height:1.6;color:${TEXT_3};margin:20px 0 0;max-width:60ch;}

  @media (prefers-reduced-motion: reduce){
    *,*::before,*::after{transition-duration:.01ms !important;}
  }
  @media (max-width:430px){
    .site-header{padding:14px 16px 0;}
    .panel{padding:64px 0;}
  }
</style>
</head>
<body>
  <header class="site-header">
    <div class="site-header-top">
      <a class="site-brand" href="${HOME}" aria-label="UNPROFITABLE home">
        <span class="site-brand-mark" aria-hidden="true"><img src="${MARK}" alt="" width="42" height="42" /></span>
        <span class="site-wordmark mono" translate="no">UNPROFITABLE</span>
      </a>
      <a class="site-join-link mono" href="${DROP}">View Drop 001</a>
    </div>
    <div class="site-header-rail" aria-hidden="true">
      <span class="site-header-badge mono">001</span>
    </div>
  </header>

  <div class="wrap">
    <main class="brand-container">
      <div class="panel">
        <p class="eyebrow mono">${escapeHtml(eyebrow)}</p>
        <h1 class="h1">${headlineHtml}</h1>
        <div class="rule" aria-hidden="true"></div>
        <p class="sub">${escapeHtml(sub)}</p>
        <div class="cta">
          <a class="btn btn-primary" href="${DROP}">${escapeHtml(primary)}</a>
          <a class="btn btn-outline" href="${HOME}">Back to site</a>
        </div>
      </div>
    </main>
  </div>

  <footer class="site-footer" aria-label="Footer">
    <div class="brand-container">
      <p class="footer-tag mono">UNPROFITABLE TODAY. PROFITABLE TOMORROW.</p>
      <div class="footer-mark" translate="no">UNPROFITABLE</div>
      <p class="footer-line">Streetwear and community brand. Proof first. Checkout later. Nothing here is financial, investment, or trading advice.</p>
    </div>
  </footer>
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
    headlineHtml: '<span class="size">Not</span><span class="logged">Logged.</span>',
    sub: "That link didn't carry a valid size. Open the email again and tap your size. We'll log it then.",
    primary: 'View Drop 001'
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
      headlineHtml: `<span class="size">${size}</span><span class="logged">Logged.</span>`,
      sub: "You're set. We build to the list so nothing goes to waste. The drop comes to you first.",
      primary: 'View Drop 001'
    }));
  } catch (err) {
    // Never leak a stack trace or the key.
    return fallback(res, 500);
  }
};
