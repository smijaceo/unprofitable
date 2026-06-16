import { FormEvent, useEffect, useRef, useState } from 'react';
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

export function SignupModal({ state, onClose }: Props) {
  const [email, setEmail] = useState('');
  const [honey, setHoney] = useState('');
  const [status, setStatus] = useState('');
  const [statusType, setStatusType] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitting, setSubmitting] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    document.body.style.overflow = state.open ? 'hidden' : '';
    document.documentElement.style.overflow = state.open ? 'hidden' : '';
    if (state.open) {
      setTimeout(() => inputRef.current?.focus(), 40);
      trackEvent('PopupView', { ...leadMetadata({ interest: state.interest, source: state.source }), surface: state.source.replace(/-/g, '_') });
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [state.open, state.interest, state.source]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape' && state.open) onClose();
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
    setStatus('Submitting your drop request...');
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
      setStatus('You’re on the Drop 001 list. Watch your inbox for release updates.');
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
    <div className="fixed inset-0 z-[100] grid place-items-center bg-black/78 p-4 backdrop-blur-xl" role="dialog" aria-modal="true" aria-labelledby="signup-modal-title" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <div className="relative w-full max-w-xl border border-white/20 bg-[#f4f4f0] p-6 text-black shadow-[0_36px_120px_rgba(0,0,0,.82)] sm:p-10">
        <button type="button" onClick={onClose} className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-black/15 bg-white text-black transition hover:rotate-90 hover:bg-black hover:text-white" aria-label="Close signup">
          <X className="h-4 w-4" />
        </button>
        <p className="pr-12 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-black/62">Drop 001 Opens To The List First</p>
        <h2 id="signup-modal-title" className="mt-3 text-[clamp(2.6rem,11vw,4.6rem)] font-black uppercase leading-[0.84] tracking-[-0.08em]">Early Access Before Public Checkout.</h2>
        <p className="mt-5 max-w-md text-pretty text-base leading-7 text-black/72">Get final sizing, product proof, bundle details, and launch notice before Drop 001 opens.</p>
        <form className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto]" onSubmit={onSubmit}>
          <input type="hidden" name="source" value={state.source} />
          <input type="hidden" name="interest" value={state.interestLabel} />
          <div className="sr-only" aria-hidden="true"><input name="_honey" type="text" tabIndex={-1} autoComplete="off" value={honey} onChange={(event) => setHoney(event.target.value)} /></div>
          <label className="sr-only" htmlFor="react-drop-list-email">Email</label>
          <input id="react-drop-list-email" ref={inputRef} value={email} onChange={(event) => setEmail(event.target.value)} name="email" type="email" autoComplete="email" placeholder="Email for Drop 001 access" required className="min-h-12 border border-black/20 bg-white px-4 text-base text-black placeholder:text-black/42 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-black" />
          <Button type="submit" variant="dark" disabled={submitting}>{submitting ? 'Submitting...' : 'Join List'}</Button>
          <p className={`min-h-5 text-xs leading-5 sm:col-span-2 ${statusType === 'error' ? 'text-black' : 'text-black/70'}`} role="status" aria-live="polite">{status}</p>
        </form>
      </div>
    </div>
  );
}
