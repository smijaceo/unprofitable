import { useCallback, useEffect, useMemo, useState } from 'react';
import { Footer2 } from './components/footer2';
import { MinimalistHero } from './components/minimalist-hero';
import { NavHeader } from './components/nav-header';
import { ProductPage } from './components/product-page';
import { SignupModal, type SignupState } from './components/signup-modal';
import { SpotlightCard } from './components/spotlight-card';
import { CapsuleProductCards } from './components/stacked-cards-interaction';
import { ButtonColorful } from './components/ui/button-colorful';
import { leadMetadata, trackEvent } from './lib/analytics';
import { productBySlug } from './lib/products';

const defaultSignup: SignupState = { open: false, source: 'site', interest: 'full_drop', interestLabel: 'All Drop 001 pieces' };

function interestLabel(interest?: string) {
  if (interest === 'hoodie') return 'Hoodie';
  if (interest === 'tee') return 'Tee';
  if (interest === 'hat') return 'Hat';
  return 'All Drop 001 pieces';
}

function useCurrentPath() {
  const [path, setPath] = useState(() => `${window.location.pathname}${window.location.hash}`);

  useEffect(() => {
    const update = () => setPath(`${window.location.pathname}${window.location.hash}`);
    window.addEventListener('popstate', update);
    window.addEventListener('hashchange', update);
    return () => {
      window.removeEventListener('popstate', update);
      window.removeEventListener('hashchange', update);
    };
  }, []);

  return path;
}

export default function App() {
  const [signup, setSignup] = useState<SignupState>(defaultSignup);
  const currentPath = useCurrentPath();
  const product = useMemo(() => {
    const slug = window.location.pathname.split('/products/')[1]?.replace(/\/$/, '');
    return productBySlug(slug);
  }, [currentPath]);

  const openSignup = useCallback((source: string, interest = 'full_drop') => {
    trackEvent('CTA_Click', { ...leadMetadata({ interest, source }), surface: source.replace(/-/g, '_') });
    setSignup({ open: true, source, interest, interestLabel: interestLabel(interest) });
  }, []);

  const closeSignup = useCallback(() => setSignup((current) => ({ ...current, open: false })), []);

  useEffect(() => {
    window.openUnprofitableDropList = (source = 'site-fallback', interest = 'full_drop') => openSignup(source, interest);
    function onNativeClick(event: MouseEvent) {
      const trigger = (event.target as HTMLElement | null)?.closest<HTMLElement>('[data-drop-list-trigger]');
      if (!trigger) return;
      event.preventDefault();
      openSignup(trigger.dataset.source || 'site-fallback', trigger.dataset.interest || 'full_drop');
    }
    document.addEventListener('click', onNativeClick);
    return () => {
      document.removeEventListener('click', onNativeClick);
      delete window.openUnprofitableDropList;
    };
  }, [openSignup]);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'Organization', '@id': 'https://www.wearunprofitable.com/#organization', name: 'UNPROFITABLE', url: 'https://www.wearunprofitable.com/', logo: 'https://www.wearunprofitable.com/assets/unprofitable-main-logo.png', description: 'Black-and-white streetwear and community brand for people rebuilding their standards.', sameAs: ['https://www.instagram.com/wearunprofitable/'] },
      { '@type': 'WebSite', '@id': 'https://www.wearunprofitable.com/#website', url: 'https://www.wearunprofitable.com/', name: 'UNPROFITABLE', publisher: { '@id': 'https://www.wearunprofitable.com/#organization' } },
      { '@type': 'FAQPage', '@id': 'https://www.wearunprofitable.com/#faq', mainEntity: [
        { '@type': 'Question', name: 'What is DROP 001: DISCIPLINED / 001?', acceptedAnswer: { '@type': 'Answer', text: 'DROP 001: DISCIPLINED / 001 contains exactly three pieces: the DISCIPLINED Oversized Tee, DISCIPLINED Heavyweight Hoodie, and DISCIPLINED Structured Hat.' } },
        { '@type': 'Question', name: 'Does checkout open now?', acceptedAnswer: { '@type': 'Answer', text: 'No. Final sizing, product proof, and launch notice go to the Drop List before checkout opens.' } },
        { '@type': 'Question', name: 'Is UNPROFITABLE a signals or coaching group?', acceptedAnswer: { '@type': 'Answer', text: 'No. UNPROFITABLE does not provide trading signals, financial advice, business advice, income claims, or guaranteed outcomes.' } }
      ] }
    ]
  };

  return (
    <>
      <NavHeader onJoin={openSignup} />
      {product ? (
        <ProductPage product={product} onJoin={openSignup} />
      ) : (
        <main className="bg-black">
          <MinimalistHero onJoin={openSignup} />
          <section className="brand-container py-8 sm:py-12" aria-label="Drop access promise">
            <div className="grid gap-3 border border-white/12 bg-white/[0.025] p-4 sm:grid-cols-3 sm:p-5">
              {['Sizing before checkout', 'Product proof before payment', 'Launch notice to the list first'].map((item) => (
                <div key={item} className="border border-white/10 bg-black px-4 py-4 text-center font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-white/55">
                  {item}
                </div>
              ))}
            </div>
          </section>
          <SpotlightCard />
          <CapsuleProductCards onJoin={openSignup} />
          <section id="join" className="brand-container py-14 sm:py-22 lg:py-24" aria-labelledby="join-title">
            <div className="relative overflow-hidden border border-white bg-white p-6 text-black sm:p-10 lg:grid lg:grid-cols-[1fr_0.42fr] lg:items-end lg:p-14 xl:p-16">
              <div className="pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(circle_at_88%_14%,rgba(0,0,0,.11),transparent_24rem)]" />
              <div className="relative">
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-black/62">Early Access</p>
                <h2 id="join-title" className="mt-4 max-w-[10ch] text-[clamp(3.25rem,13vw,8.4rem)] font-black uppercase leading-[0.78] tracking-[-0.085em]">Drop 001 opens to the list first.</h2>
                <p className="mt-6 max-w-xl text-pretty text-lg leading-7 text-black/72">Final sizing, product proof, and launch notice go out before checkout opens.</p>
              </div>
              <div className="relative mt-8 grid gap-4 lg:mt-0">
                <ButtonColorful className="border-black bg-black text-white shadow-none hover:bg-white hover:text-black focus-visible:outline-black" onClick={() => openSignup('home-final-cta', 'full_drop')}>Join Drop List</ButtonColorful>
                <p className="font-mono text-[10px] uppercase leading-5 tracking-[0.16em] text-black/55">Proof first. Checkout later.</p>
              </div>
            </div>
          </section>
        </main>
      )}
      <Footer2 />
      <SignupModal state={signup} onClose={closeSignup} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
