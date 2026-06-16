import { useState } from 'react';
import { cn } from '../lib/utils';

const proofItems = [
  { number: '01', title: 'Proof', copy: 'No blind checkout. The list gets final product proof before payment opens.' },
  { number: '02', title: 'Fit', copy: 'Sizing and fit notes come before launch so buyers know what they are entering.' },
  { number: '03', title: 'Notice', copy: 'Early access gets the launch notice before public checkout unlocks.' }
];

export function SpotlightCard() {
  const [active, setActive] = useState(0);
  return (
    <section id="proof" className="brand-container py-16 sm:py-24" aria-labelledby="proof-title">
      <div className="grid gap-8 border-t border-white/10 pt-10 lg:grid-cols-[0.72fr_1fr] lg:gap-16">
        <div>
          <p className="mono-label">WHAT THE LIST GETS FIRST</p>
          <h2 id="proof-title" className="mt-4 max-w-[9ch] text-[clamp(3.3rem,13vw,8.5rem)] font-black uppercase leading-[0.78] tracking-[-0.085em]">
            What The List Gets First.
          </h2>
          <p className="mt-5 max-w-md text-pretty text-base leading-7 text-white/62">
            Sizing, final product photos, and launch notice go to the list before checkout opens.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3 lg:pt-16">
          {proofItems.map((item, index) => (
            <article
              key={item.number}
              onPointerEnter={() => setActive(index)}
              className={cn(
                'relative min-h-[260px] overflow-hidden border border-white/12 bg-[linear-gradient(180deg,#121212,#050505)] p-5 transition duration-300 sm:min-h-[360px]',
                active === index ? 'border-white/35 bg-[linear-gradient(180deg,#191919,#060606)] shadow-rim' : 'hover:border-white/30'
              )}
            >
              <div className="absolute inset-0 opacity-60 [background:radial-gradient(circle_at_50%_0%,rgba(255,255,255,.16),transparent_16rem)]" />
              <div className="relative flex h-full flex-col justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/42">{item.number}</span>
                <div>
                  <h3 className="text-[clamp(2.4rem,3.8vw,3.7rem)] font-black uppercase leading-[0.86] tracking-[-0.045em]">{item.title}</h3>
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
