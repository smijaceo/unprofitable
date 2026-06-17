import { useState } from 'react';
import { cn } from '../lib/utils';

const proofItems = [
  { number: '01', title: 'Sizing', copy: 'Measurements before checkout opens.' },
  { number: '02', title: 'Product Proof', copy: 'Final photos, closeups, and garment details before payment.' },
  { number: '03', title: 'Launch Notice', copy: 'The list hears before public checkout opens.' }
];

export function SpotlightCard() {
  const [active, setActive] = useState(0);
  return (
    <section id="proof" className="brand-container py-14 sm:py-22 lg:py-24" aria-labelledby="proof-title">
      <div className="grid gap-8 border-t border-white/10 pt-10 lg:grid-cols-[0.72fr_1fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="mono-label">PROOF BEFORE PAYMENT</p>
          <h2 id="proof-title" className="mt-4 max-w-[8.8ch] text-[clamp(3.3rem,13vw,8.2rem)] font-black uppercase leading-[0.78] tracking-[-0.085em]">
            No Blind Checkout.
          </h2>
          <p className="mt-5 max-w-md text-pretty text-base leading-7 text-white/62">
            The list gets the parts that matter before payment opens: fit, photos, and the release notice.
          </p>
        </div>
        <div className="grid min-w-0 gap-3 sm:grid-cols-3 lg:pt-16">
          {proofItems.map((item, index) => (
            <article
              key={item.number}
              onPointerEnter={() => setActive(index)}
              className={cn(
                'group relative min-w-0 overflow-hidden border border-white/12 bg-[#070707] p-5 transition duration-300 sm:min-h-[320px] lg:min-h-[340px]',
                active === index ? 'border-white/35 shadow-rim' : 'hover:border-white/30'
              )}
            >
              <div className="absolute inset-0 opacity-70 transition duration-300 [background:radial-gradient(circle_at_50%_0%,rgba(255,255,255,.13),transparent_15rem)] group-hover:opacity-100" />
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/35 to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="relative flex h-full flex-col justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/42">{item.number}</span>
                <div>
                  <h3 className="text-[clamp(2rem,3vw,3rem)] font-black uppercase leading-[0.86] tracking-[-0.05em]">{item.title}</h3>
                  <p className="mt-5 text-pretty text-sm leading-6 text-white/62">{item.copy}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
