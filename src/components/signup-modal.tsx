import { FormEvent, useEffect, useId, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
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
  const titleId = useId();
  const descriptionId = useId();

  useEffect(() => {
    document.body.style.overflow = state.open ? 'hidden' : '';
    document.documentElement.style.overflow = state.open ? 'hidden' : '';
    if (state.open) {
      setStatus('');
      setStatusType('idle');
      window.setTimeout(() => inputRef.current?.focus(), 190);
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
      trackDropListSuccess({ interest: lead.interest, source: lead.source, surface: state.source, conversion: 'react-modal-drop-list' });
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

  return (
    <AnimatePresence>
      {state.open && (
        <motion.div
          className="signup-modal-shell fixed inset-0 z-[100] grid place-items-center bg-black/82 px-3 py-4 backdrop-blur-xl sm:p-6 lg:px-12"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          aria-describedby={descriptionId}
          onMouseDown={(event) => event.target === event.currentTarget && onClose()}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
        >
          <motion.div
            className="signup-modal-panel relative w-full max-w-[620px] overflow-hidden border border-white/14 bg-[#090909] text-white shadow-[0_42px_140px_rgba(0,0,0,.86)] max-h-[calc(100vh-2rem)] overflow-y-auto lg:w-[min(1120px,calc(100vw-96px))] lg:max-w-none lg:min-h-[560px] lg:max-h-[calc(100vh-64px)] lg:border-white/75 lg:bg-[#050505] lg:overflow-hidden"
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/45 to-transparent" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,.12),transparent_18rem)] lg:hidden" />

            <div className="relative grid gap-0 lg:grid-cols-[340px_minmax(0,1fr)]">
              <aside className="signup-modal-side hidden border-r border-white/10 bg-white/[0.035] p-6 lg:flex lg:min-h-[560px] lg:flex-col lg:justify-between lg:border-white/18 lg:bg-[linear-gradient(180deg,rgba(255,255,255,.035),transparent_48%),#111] lg:px-[42px] lg:py-11">
                <div>
                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-white/42 lg:text-xs lg:text-white/82">Drop 001</p>
                  <ol className="mt-5 grid list-none gap-2 p-0 font-mono text-[10px] uppercase tracking-[0.16em] text-white/48 lg:mt-[34px] lg:gap-[18px] lg:text-xs lg:font-extrabold lg:tracking-[0.18em] lg:text-white/82">
                    <li>01 Sizing</li>
                    <li>02 Product Proof</li>
                    <li>03 Launch Notice</li>
                  </ol>
                </div>
                <p className="signup-modal-note max-w-[22ch] text-xs leading-5 text-white/42 lg:max-w-none lg:text-sm lg:leading-[1.45] lg:text-white/84">Checkout opens after sizing and product proof are confirmed.</p>
              </aside>

              <section className="relative p-5 pt-16 sm:p-8 sm:pt-10 lg:min-h-[560px] lg:bg-[radial-gradient(circle_at_70%_25%,rgba(255,255,255,.07),transparent_36%),#050505] lg:p-10 lg:pb-12 lg:pl-12 lg:pr-12">
                <div className="absolute right-3 top-3 z-10 lg:static lg:mb-[34px] lg:flex lg:items-center lg:justify-between">
                  <div className="hidden items-center gap-3 lg:flex">
                    <span className="rounded-full border border-white/65 px-[22px] py-3 font-mono text-[11px] font-extrabold uppercase leading-none tracking-[0.18em] text-white">
                      {modalInterestLabel(state.interestLabel)}
                    </span>
                    <span className="rounded-full border border-white/22 px-[22px] py-3 font-mono text-[11px] font-extrabold uppercase leading-none tracking-[0.18em] text-white/72">Early Access</span>
                  </div>
                  <button
                    type="button"
                    onClick={onClose}
                    className="signup-modal-close grid h-11 w-11 place-items-center rounded-full border border-white/14 bg-black/55 text-white/72 backdrop-blur transition duration-300 hover:rotate-90 hover:border-white/40 hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:h-12 sm:w-12 lg:h-[58px] lg:w-[58px] lg:border-white/75 lg:bg-transparent lg:text-[28px] lg:text-white"
                    aria-label="Close signup panel"
                  >
                    <X className="h-4 w-4 lg:h-5 lg:w-5" />
                  </button>
                </div>

                <div className="flex flex-wrap items-center gap-2 lg:hidden">
                  <span className="rounded-full border border-white/14 bg-white/[0.04] px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/58">
                    {modalInterestLabel(state.interestLabel)}
                  </span>
                  <span className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-white/38">Early Access</span>
                </div>

                <div className="signup-modal-main lg:mx-auto lg:max-w-[520px] lg:pt-2">
                  <h2 id={titleId} className="signup-modal-title mt-5 max-w-[9ch] text-[clamp(3.25rem,15vw,5.85rem)] font-black uppercase leading-[0.75] tracking-[-0.085em] lg:mt-0 lg:max-w-[8.5ch] lg:text-[clamp(4.5rem,6vw,7.25rem)] lg:leading-[0.86] lg:tracking-[-0.045em]">
                    Join<br className="hidden lg:block" /> The Drop<br className="hidden lg:block" /> List.
                  </h2>
                  <p id={descriptionId} className="signup-modal-description mt-5 max-w-md text-pretty text-[15px] leading-7 text-white/64 sm:text-base lg:mb-[34px] lg:mt-[22px] lg:max-w-[520px] lg:text-lg lg:leading-[1.45] lg:text-white/90">
                    Sizing, product proof, and launch notice go out before checkout opens.
                  </p>

                  <form className="signup-modal-form mt-7 grid gap-3 lg:mt-0" onSubmit={onSubmit}>
                    <input type="hidden" name="source" value={state.source} />
                    <input type="hidden" name="interest" value={state.interestLabel} />
                    <div className="sr-only" aria-hidden="true">
                      <input name="_honey" type="text" tabIndex={-1} autoComplete="off" value={honey} onChange={(event) => setHoney(event.target.value)} />
                    </div>
                    <label className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/46 lg:mb-2 lg:text-[11px] lg:tracking-[0.22em] lg:text-white" htmlFor="react-drop-list-email">
                      Email address
                    </label>
                    <div className="grid gap-3 sm:grid-cols-[1fr_auto] lg:grid-cols-[minmax(260px,1fr)_180px] lg:gap-[14px]">
                      <input
                        id="react-drop-list-email"
                        ref={inputRef}
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        name="email"
                        autoFocus
                        type="email"
                        autoComplete="email"
                        placeholder="you@example.com"
                        required
                        className="min-h-12 w-full rounded-full border border-white/16 bg-white/[0.06] px-5 text-base text-white placeholder:text-white/28 transition focus:border-white/50 focus:bg-white/[0.09] focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-white lg:h-[58px] lg:border-white/70 lg:bg-white/[0.04] lg:px-6 lg:text-[17px] lg:placeholder:text-white/48"
                      />
                      <Button type="submit" disabled={submitting} className="min-h-12 w-full px-7 sm:w-auto lg:h-[58px] lg:w-full lg:px-4 lg:text-xs lg:font-black lg:tracking-[0.18em]">
                        {submitting ? 'Submitting...' : 'Join List'}
                      </Button>
                    </div>
                    <p className={`min-h-5 text-xs leading-5 lg:mt-[6px] lg:text-[13px] lg:leading-[1.45] ${statusType === 'success' ? 'text-white' : statusType === 'error' ? 'text-white/82' : 'text-white/44 lg:text-white/74'}`} role="status" aria-live="polite">
                      {status || 'Proof first. Checkout later.'}
                    </p>
                  </form>
                </div>
              </section>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
