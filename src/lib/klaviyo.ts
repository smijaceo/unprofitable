import { normalizeDropInterest } from './analytics';

const KLAVIYO_COMPANY_ID = 'UWEuLX';
const KLAVIYO_DROP_001_LIST_ID = 'TsxeTg';

export type SignupPayload = {
  email: string;
  source: string;
  interest: string;
  interestLabel: string;
  identity?: string;
  conversion?: string;
  honey?: string;
};

function getCampaignProperties() {
  const params = new URLSearchParams(window.location.search);
  const utmSource = params.get('utm_source') || params.get('source') || '';
  const utmMedium = params.get('utm_medium') || '';
  const utmCampaign = params.get('utm_campaign') || '';
  const utmContent = params.get('utm_content') || '';
  const utmTerm = params.get('utm_term') || '';
  const joined = `${utmSource} ${utmCampaign} ${document.referrer || ''}`.toLowerCase();
  const trafficSource = /instagram|\big\b/.test(joined) ? 'instagram'
    : /facebook|\bfb\b|meta/.test(joined) ? 'meta'
      : /tiktok/.test(joined) ? 'tiktok'
        : /google/.test(joined) ? 'google'
          : utmSource || (document.referrer ? 'referral' : 'direct');
  return {
    traffic_source: trafficSource,
    utm_source: utmSource,
    utm_medium: utmMedium,
    utm_campaign: utmCampaign,
    utm_content: utmContent,
    utm_term: utmTerm
  };
}

export async function submitToKlaviyoDropList(payload: SignupPayload) {
  const email = payload.email.trim().toLowerCase();
  if (!email) throw new Error('Email is required');
  if (payload.honey?.trim()) return { email, source: 'honeypot', interest: 'full_drop' };

  const source = String(payload.source || 'website').replace(/^wearunprofitable\.com\s+/i, '') || 'website';
  const interest = normalizeDropInterest(payload.interest);
  const interestLabel = payload.interestLabel || payload.interest || 'All Drop 001 pieces';
  const identity = payload.identity?.trim() || 'Not specified';
  const campaign = getCampaignProperties();

  const body = {
    data: {
      type: 'subscription',
      attributes: {
        custom_source: `UNPROFITABLE Drop 001 - ${source}`,
        profile: {
          data: {
            type: 'profile',
            attributes: {
              email,
              properties: {
                drop: 'Drop 001: DISCIPLINED / 001',
                drop_key: 'drop_001_disciplined',
                source,
                interest,
                interest_label: interestLabel,
                identity,
                signup_surface: payload.conversion || 'drop-list',
                traffic_source: campaign.traffic_source,
                utm_source: campaign.utm_source,
                utm_medium: campaign.utm_medium,
                utm_campaign: campaign.utm_campaign,
                utm_content: campaign.utm_content,
                utm_term: campaign.utm_term,
                site: 'wearunprofitable.com'
              },
              subscriptions: {
                email: { marketing: { consent: 'SUBSCRIBED' } }
              }
            }
          }
        }
      },
      relationships: {
        list: { data: { type: 'list', id: KLAVIYO_DROP_001_LIST_ID } }
      }
    }
  };

  const res = await fetch(`https://a.klaviyo.com/client/subscriptions/?company_id=${KLAVIYO_COMPANY_ID}`, {
    method: 'POST',
    headers: {
      Accept: 'application/vnd.api+json',
      'Content-Type': 'application/vnd.api+json',
      revision: '2026-04-15'
    },
    body: JSON.stringify(body)
  });

  if (!res.ok) throw new Error(await res.text().catch(() => 'Klaviyo signup failed'));
  return { email, source, interest, identity };
}
