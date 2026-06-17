import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { productHref, products } from '../lib/products';
import { cn } from '../lib/utils';

type Props = {
  onJoin: (source: string, interest?: string) => void;
};

const proofCopy = {
  hoodie: 'Oversized black hoodie for Drop 001. Sizing and final proof go to the list before checkout.',
  tee: 'Black oversized tee for Drop 001. Final photos and measurements come before checkout opens.',
  hat: 'Structured black hat for Drop 001. Final embroidery proof goes to the list first.'
} as const;

export function CapsuleProductCards({ onJoin }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProduct = products[activeIndex];

  function goTo(index: number) {
    setActiveIndex((index + products.length) % products.length);
  }

  return (
    <section id="drop" className="brand-container py-14 sm:py-22 lg:py-24" aria-labelledby="drop-title">
      <div className="mb-8 grid gap-6 border-t border-white/10 pt-10 lg:grid-cols-[1fr_0.56fr] lg:items-end">
        <div>
          <p className="mono-label">DROP 001 CAPSULE</p>
          <h2 id="drop-title" className="mt-4 text-[clamp(3.75rem,15vw,9.5rem)] font-black uppercase leading-[0.78] tracking-[-0.085em]">
            Three Pieces. One Standard.
          </h2>
        </div>
        <p className="max-w-xl text-pretty text-base leading-7 text-white/62 sm:text-lg">
          Hoodie, tee, and hat. A focused blacked-out capsule for the reset.
        </p>
      </div>

      <div className="product-carousel relative overflow-hidden border border-white/14 bg-[#050505] p-3 shadow-[0_28px_100px_rgba(0,0,0,.72)] sm:p-4 lg:p-5">
        <div className="pointer-events-none absolute inset-0 opacity-80 [background:radial-gradient(circle_at_74%_18%,rgba(255,255,255,.11),transparent_28rem),linear-gradient(135deg,rgba(255,255,255,.055),transparent_32%)]" />
        <div className="pointer-events-none absolute inset-x-5 top-5 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

        <div className="relative grid gap-4 lg:grid-cols-[0.38fr_0.62fr] lg:items-stretch">
          <div className="order-2 flex flex-col justify-between border border-white/10 bg-black/78 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,.07)] sm:p-7 lg:order-1 lg:min-h-[610px]">
            <motion.div
              key={activeProduct.slug}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-white/45">{activeProduct.index}</p>
              <h3 className="mt-4 text-[clamp(4rem,19vw,9.4rem)] font-black uppercase leading-[0.72] tracking-[-0.09em] lg:text-[clamp(5.2rem,8.5vw,10rem)]">
                {activeProduct.title}
              </h3>
              <p className="mt-5 max-w-md text-pretty text-base leading-7 text-white/68 sm:text-lg lg:mt-7">
                {proofCopy[activeProduct.interest]}
              </p>
              <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap">
                <Button onClick={() => onJoin(`home-product-carousel-${activeProduct.interest}`, activeProduct.interest)} className="w-full sm:w-auto">
                  Join {activeProduct.title} List
                </Button>
                <Button asChild variant="outline" className="w-full sm:w-auto">
                  <a href={productHref(activeProduct)}>View Details</a>
                </Button>
              </div>
            </motion.div>

            <div className="mt-8 grid gap-3">
              <div className="flex items-center justify-between gap-3">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/38">Product Carousel</p>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => goTo(activeIndex - 1)}
                    className="grid h-11 w-11 place-items-center rounded-full border border-white/14 bg-white/[0.035] text-white/70 transition hover:border-white/35 hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    aria-label="Previous product"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => goTo(activeIndex + 1)}
                    className="grid h-11 w-11 place-items-center rounded-full border border-white/14 bg-white/[0.035] text-white/70 transition hover:border-white/35 hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    aria-label="Next product"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                {products.map((product, index) => (
                  <button
                    key={product.slug}
                    type="button"
                    onClick={() => goTo(index)}
                    className={cn(
                      'group relative grid min-h-[104px] place-items-center overflow-hidden border border-white/10 bg-[radial-gradient(circle_at_50%_34%,#fff_0,#ededed_46%,#bdbdbd_100%)] p-1 transition duration-300 hover:border-white/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:min-h-[128px]',
                      activeIndex === index && 'border-white/55 ring-1 ring-white/22'
                    )}
                    aria-label={`Show ${product.name}`}
                    aria-current={activeIndex === index ? 'true' : undefined}
                  >
                    <img
                      src={product.image}
                      alt=""
                      loading="eager"
                      decoding="async"
                      className={cn(
                        'absolute inset-0 h-full w-full scale-[1.1] object-cover drop-shadow-[0_14px_24px_rgba(0,0,0,.38)] transition duration-300 group-hover:scale-[1.18]',
                        product.interest === 'hat' ? 'object-[48%_50%]' : 'object-[18%_50%]'
                      )}
                    />
                    <span className="absolute bottom-1.5 left-1.5 rounded-full bg-black px-2 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-white/78">{product.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 grid gap-3 lg:order-2">
            <motion.a
              key={activeProduct.slug}
              href={productHref(activeProduct)}
              initial={{ opacity: 0, x: 18, scale: 0.985 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
              className="product-hero-card group relative grid min-h-[380px] place-items-center overflow-hidden border border-white/12 bg-[radial-gradient(circle_at_50%_36%,#fbfbfb_0,#e7e7e7_45%,#b8b8b8_100%)] p-5 transition duration-300 hover:border-white/28 sm:min-h-[560px] sm:p-8 lg:min-h-[610px]"
              aria-label={`View ${activeProduct.name} details`}
            >
              <div className="pointer-events-none absolute inset-4 border border-black/8" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_44%,rgba(0,0,0,.17)_100%)] opacity-70" />
              <img
                src={activeProduct.image}
                alt={activeProduct.alt}
                loading="eager"
                decoding="async"
                className="relative z-10 max-h-[350px] w-full object-contain drop-shadow-[0_34px_52px_rgba(0,0,0,.34)] transition duration-500 group-hover:scale-[1.025] sm:max-h-[520px] lg:max-h-[570px]"
              />
              <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between gap-3 border border-black/10 bg-white/72 px-4 py-3 text-black shadow-[0_18px_50px_rgba(0,0,0,.22)] backdrop-blur sm:bottom-5 sm:left-5 sm:right-5">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-black/62">{activeProduct.eyebrow}</span>
                <span className="hidden font-mono text-[10px] uppercase tracking-[0.16em] text-black/45 sm:inline">View Details</span>
              </div>
            </motion.a>

            <div className="grid gap-3 sm:grid-cols-3">
              {products.map((product, index) => (
                <button
                  key={product.slug}
                  type="button"
                  onClick={() => goTo(index)}
                  className={cn(
                    'relative overflow-hidden border border-white/10 bg-white/[0.025] p-3 text-left transition duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.05] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
                    activeIndex === index && 'border-white/42 bg-white/[0.07]'
                  )}
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/38">0{index + 1}</p>
                  <p className="mt-2 text-2xl font-black uppercase leading-none tracking-[-0.06em] text-white">{product.title}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
