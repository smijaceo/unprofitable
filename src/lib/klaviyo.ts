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

export async function submitToKlaviyoDropList(payload: SignupPayload) {
  const email = payload.email.trim().toLowerCase();
  if (!email) throw new Error('Email is required');
  if (payload.honey?.trim()) return { email, source: 'honeypot', interest: 'full_drop' };

  const source = String(payload.source || 'website').replace(/^wearunprofitable\.com\s+/i, '') || 'website';
  const interest = normalizeDropInterest(payload.interest);
  const interestLabel = payload.interestLabel || payload.interest || 'All Drop 001 pieces';
  const identity = payload.identity?.trim() || 'Not specified';

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
