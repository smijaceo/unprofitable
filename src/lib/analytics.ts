export type LeadMeta = {
  drop?: string;
  source?: string;
  interest?: string;
  surface?: string;
  conversion?: string;
};

declare global {
  interface Window {
    UNPAnalytics?: { trackEvent: (name: string, data?: Record<string, unknown>) => Record<string, unknown> | void };
    va?: (type: string, payload: Record<string, unknown>) => void;
    unprofitableTrackMetaLead?: (metadata?: LeadMeta) => LeadMeta;
  }
}

export function normalizeDropInterest(value?: string) {
  const raw = String(value || 'full_drop').trim();
  const lower = raw.toLowerCase();
  if (lower.includes('tee')) return 'tee';
  if (lower.includes('hoodie')) return 'hoodie';
  if (lower.includes('hat')) return 'hat';
  if (lower.includes('all') || lower.includes('full')) return 'full_drop';
  return raw || 'full_drop';
}

export function leadMetadata(raw: LeadMeta = {}) {
  const params = new URLSearchParams(window.location.search);
  const campaignSource = params.get('source') || params.get('utm_source') || '';
  const campaignName = params.get('utm_campaign') || '';
  const isMeta = /meta|facebook|instagram|ig|fb|drop001/i.test(`${campaignSource} ${campaignName}`);
  return {
    drop: 'drop_001_disciplined',
    source: isMeta ? 'meta' : String(raw.source || campaignSource || 'site').replace(/^wearunprofitable\.com\s+/i, '') || 'site',
    interest: normalizeDropInterest(raw.interest || 'full_drop'),
    ...(raw.surface ? { surface: String(raw.surface).replace(/-/g, '_') } : {}),
    ...(raw.conversion ? { conversion: String(raw.conversion).replace(/-/g, '_') } : {})
  };
}

export function trackEvent(name: string, data: Record<string, unknown> = {}) {
  if (window.UNPAnalytics?.trackEvent) return window.UNPAnalytics.trackEvent(name, data);
  if (typeof window.va === 'function') window.va('event', { name, data });
  return data;
}

export function trackDropListSuccess(raw: LeadMeta = {}) {
  const meta = leadMetadata(raw);
  window.unprofitableTrackMetaLead?.(meta);
  trackEvent('Lead', meta);
  trackEvent('ProductInterest', meta);
  trackEvent('PopupSubmit', meta);
  try { localStorage.setItem('unp_drop001_signup', '1'); } catch { /* noop */ }
  document.documentElement.dataset.dropListJoined = 'true';
}
