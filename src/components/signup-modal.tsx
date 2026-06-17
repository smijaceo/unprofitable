import { FormEvent, useEffect, useId, useRef, useState } from 'react';
import { X } from 'lucide-react';
import { Button } from './ui/button';
import { submitToKlaviyoDropList } from '../lib/klaviyo';
import { leadMetadata, trackDropListSuccess, trackEvent } from '../lib/analytics';

export type SignupState = {
  open: boolean;
  source: string;
  interest: string;
  interestLabel: string;
};

type Props = {
  state: SignupState;
  onClose: () => void;
};

function modalInterestLabel(label: string) {
  if (!label || label === 'All Drop 001 pieces') return 'Full Drop';
  return label;
}

export function SignupModal({ state, onClose }: Props) {
  const [email, setEmail] = useState('');
  const [honey, setHoney] = useState('');
  const [status, setStatus] = useState('');
  const [statusType, setStatusType] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitting, setSubmitting] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    document.body.style.overflow = state.open ? 'hidden' : '';
    document.documentElement.style.overflow = state.open ? 'hidden' : '';
    if (state.open) {
      setStatus('');
      setStatusType('idle');
      window.setTimeout(() => inputRef.current?.focus(), 90);
      trackEvent('PopupView', { ...leadMetadata({ interest: state.interest, source: state.source }), surface: state.source.replace(/-/g, '_') });
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [state.open, state.interest, state.source]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (!state.open) return;
      if (event.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [state.open, onClose]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (honey.trim()) {
      setStatus('Request received.');
      setStatusType('success');
      setEmail('');
      return;
    }
    setSubmitting(true);
    setStatus('Submitting...');
    setStatusType('idle');
    try {
      const lead = await submitToKlaviyoDropList({
        email,
        source: state.source,
        interest: state.interest,
        interestLabel: state.interestLabel,
        conversion: 'react-modal-drop-list',
        honey
      });
      trackDropListSuccess({ interest: lead.interest, source: lead.source });
      setEmail('');
      setStatus('You’re on the Drop 001 list. Watch your inbox.');
      setStatusType('success');
    } catch {
      trackEvent('drop_list_submit_error', { drop: 'drop_001_disciplined', source: state.source, interest: state.interest });
      setStatus('Couldn’t submit right now. Email drop@wearunprofitable.com and we’ll add you manually.');
      setStatusType('error');
    } finally {
      setSubmitting(false);
    }
  }

  if (!state.open) return null;

  return (
    <div
      className="signup-modal-shell fixed inset-0 z-[100] grid place-items-center bg-black/78 px-3 py-4 backdrop-blur-xl sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      onMouseDown={(event) => event.target === event.currentTarget && onClose()}
    >
      <div
        ref={panelRef}
        className="signup-modal-panel relative w-full max-w-[620px] overflow-hidden border border-white/14 bg-[#090909] text-white shadow-[0_42px_140px_rgba(0,0,0,.86)]"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,.12),transparent_18rem)]" />
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 grid h-11 w-11 place-items-center rounded-full border border-white/14 bg-black/55 text-white/72 backdrop-blur transition duration-300 hover:rotate-90 hover:border-white/40 hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-5 sm:top-5"
          aria-label="Close signup"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="relative grid gap-0 sm:grid-cols-[0.42fr_0.58fr]">
          <aside className="hidden border-r border-white/10 bg-white/[0.035] p-6 sm:flex sm:flex-col sm:justify-between">
            <div>
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-white/42">Drop 001</p>
              <div className="mt-5 grid gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-white/48">
                <span>01 Sizing</span>
                <span>02 Product Proof</span>
                <span>03 Launch Notice</span>
              </div>
            </div>
            <p className="max-w-[22ch] text-xs leading-5 text-white/42">No checkout link yet. Proof first.</p>
          </aside>

          <div className="p-5 pt-16 sm:p-8 sm:pt-10 lg:p-10">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-white/14 bg-white/[0.04] px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/58">
                {modalInterestLabel(state.interestLabel)}
              </span>
              <span className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-white/38">Early Access</span>
            </div>

            <h2 id={titleId} className="mt-5 max-w-[9ch] text-[clamp(3.25rem,15vw,5.85rem)] font-black uppercase leading-[0.75] tracking-[-0.085em]">
              Join The Drop List.
            </h2>
            <p id={descriptionId} className="mt-5 max-w-md text-pretty text-[15px] leading-7 text-white/64 sm:text-base">
              Sizing, product proof, and launch notice go out before checkout opens.
            </p>

            <form className="mt-7 grid gap-3" onSubmit={onSubmit}>
              <input type="hidden" name="source" value={state.source} />
              <input type="hidden" name="interest" value={state.interestLabel} />
              <div className="sr-only" aria-hidden="true">
                <input name="_honey" type="text" tabIndex={-1} autoComplete="off" value={honey} onChange={(event) => setHoney(event.target.value)} />
              </div>
              <label className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/46" htmlFor="react-drop-list-email">
                Email address
              </label>
              <div className="grid gap-3 sm:grid-cols-[1fr_auto]">
                <input
                  id="react-drop-list-email"
                  ref={inputRef}
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                  className="min-h-12 w-full rounded-full border border-white/16 bg-white/[0.06] px-5 text-base text-white placeholder:text-white/28 transition focus:border-white/50 focus:bg-white/[0.09] focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-white"
                />
                <Button type="submit" disabled={submitting} className="min-h-12 w-full px-7 sm:w-auto">
                  {submitting ? 'Submitting...' : 'Join List'}
                </Button>
              </div>
              <p className={`min-h-5 text-xs leading-5 ${statusType === 'success' ? 'text-white' : statusType === 'error' ? 'text-white/82' : 'text-white/44'}`} role="status" aria-live="polite">
                {status || 'Checkout opens after sizing and product proof are confirmed.'}
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
