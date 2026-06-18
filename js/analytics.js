// UNPROFITABLE static-site analytics helper. Non-PII only.
(function () {
  const DROP_KEY = "drop_001_disciplined";
  const PII_KEYS = new Set(["email", "name", "first_name", "last_name", "phone", "address", "company"]);

  function cleanString(value, fallback = "") {
    const text = String(value == null ? fallback : value).trim();
    return text || fallback;
  }

  function normalizeInterest(value) {
    const raw = cleanString(value, "full_drop");
    const lower = raw.toLowerCase();
    if (lower.includes("tee")) return "tee";
    if (lower.includes("hoodie")) return "hoodie";
    if (lower.includes("hat") || lower.includes("cap")) return "hat";
    if (lower.includes("bundle")) return "bundle";
    if (lower.includes("all") || lower.includes("full") || lower.includes("drop")) return "full_drop";
    return raw.replace(/\s+/g, "_").toLowerCase();
  }

  function getDeviceContext() {
    const width = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    let device_type = "desktop";
    if (width <= 767) device_type = "mobile";
    else if (width <= 1023) device_type = "tablet";
    let viewport_bucket = "1024_plus";
    if (width < 390) viewport_bucket = "under_390";
    else if (width <= 430) viewport_bucket = "390_430";
    else if (width <= 767) viewport_bucket = "431_767";
    else if (width <= 1023) viewport_bucket = "768_1023";
    return { device_type, viewport_bucket };
  }

  function normalizeTrafficSource({ utm_source = "", referrer = "" } = {}) {
    const source = cleanString(utm_source, "").toLowerCase();
    const ref = cleanString(referrer, "").toLowerCase();
    const joined = `${source} ${ref}`;
    if (/instagram|\big\b/.test(joined)) return "instagram";
    if (/facebook|\bfb\b|meta/.test(joined)) return "meta";
    if (/tiktok/.test(joined)) return "tiktok";
    if (/google/.test(joined)) return "google";
    if (source) return source;
    if (!ref) return "direct";
    if (ref.includes(location.hostname.toLowerCase())) return "direct";
    return /search|bing|duckduckgo|yahoo/.test(ref) ? "organic" : "referral";
  }

  function getTrafficContext() {
    const params = new URLSearchParams(window.location.search);
    const utm_source = cleanString(params.get("utm_source") || params.get("source") || "", "");
    const utm_medium = cleanString(params.get("utm_medium") || "", "");
    const utm_campaign = cleanString(params.get("utm_campaign") || "", "");
    const utm_content = cleanString(params.get("utm_content") || "", "");
    const utm_term = cleanString(params.get("utm_term") || "", "");
    const referrer = cleanString(document.referrer || "", "");
    return {
      traffic_source: normalizeTrafficSource({ utm_source, referrer }),
      utm_source,
      utm_medium,
      utm_campaign,
      utm_content,
      utm_term,
      referrer
    };
  }

  function getPageContext() {
    const path = window.location.pathname || "/";
    let page_type = "other";
    if (path === "/" || /index\.html$/.test(path)) page_type = "home";
    else if (/shop\.html$/.test(path)) page_type = "shop";
    else if (/\/products\//.test(path)) page_type = "product";
    else if (/returns|privacy|terms|disclaimer/.test(path)) page_type = "legal";
    return { page_type, page_path: path || "/" };
  }

  function sanitizePayload(payload = {}) {
    const safe = {
      drop: DROP_KEY,
      ...getPageContext(),
      ...getDeviceContext(),
      ...getTrafficContext()
    };
    Object.entries(payload || {}).forEach(([key, value]) => {
      if (PII_KEYS.has(String(key).toLowerCase())) return;
      if (value == null) return;
      safe[key] = typeof value === "string" ? cleanString(value) : value;
    });
    safe.drop = cleanString(safe.drop, DROP_KEY);
    if (safe.interest) safe.interest = normalizeInterest(safe.interest);
    return safe;
  }

  function trackEvent(name, payload = {}) {
    const eventName = cleanString(name, "Event");
    const data = sanitizePayload(payload);
    if (typeof window.va === "function") window.va("event", { name: eventName, data });
    return data;
  }

  function trackCTA(payload = {}) { return trackEvent("CTA_Click", payload); }
  function trackPopupView(payload = {}) { return trackEvent("PopupView", payload); }
  function trackPopupSubmit(payload = {}) { return trackEvent("PopupSubmit", payload); }
  function trackProductInterest(payload = {}) { return trackEvent("ProductInterest", payload); }
  function trackProductCardClick(payload = {}) { return trackEvent("ProductCardClick", payload); }

  function trackScrollDepth() {
    const thresholds = [25, 50, 75, 90];
    const seen = new Set();
    let ticking = false;
    const measure = () => {
      ticking = false;
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop || 0;
      const available = Math.max(1, doc.scrollHeight - window.innerHeight);
      const pct = Math.min(100, Math.round((scrollTop / available) * 100));
      thresholds.forEach((depth) => {
        if (!seen.has(depth) && pct >= depth) {
          seen.add(depth);
          trackEvent("ScrollDepth", { depth });
        }
      });
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(measure);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    measure();
  }

  window.UNPAnalytics = {
    getDeviceContext,
    getTrafficContext,
    getPageContext,
    normalizeInterest,
    sanitizePayload,
    trackEvent,
    trackCTA,
    trackPopupView,
    trackPopupSubmit,
    trackProductInterest,
    trackProductCardClick,
    trackScrollDepth
  };
  window.unprofitableTrack = trackEvent;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", trackScrollDepth, { once: true });
  } else {
    trackScrollDepth();
  }
})();
