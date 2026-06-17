import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import heroWebp from '../../assets/images/hero/drop001-hoodie-hat-editorial-hero.webp';
import heroPng from '../../assets/images/hero/drop001-hoodie-hat-editorial-hero.png';
import heroMobileWebp from '../../assets/images/hero/drop001-hoodie-hat-editorial-hero-mobile.webp';
import heroMobilePng from '../../assets/images/hero/drop001-hoodie-hat-editorial-hero-mobile.png';
import { Button } from './ui/button';
import { ButtonColorful } from './ui/button-colorful';

type MinimalistHeroProps = {
  onJoin: (source: string, interest?: string) => void;
};

export function MinimalistHero({ onJoin }: MinimalistHeroProps) {
  return (
    <section id="top" className="unp-hero relative isolate overflow-hidden bg-black pt-5 sm:pt-10 lg:min-h-[calc(100svh-72px)]">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_58%_28%,rgba(255,255,255,.13),transparent_31rem),radial-gradient(circle_at_78%_78%,rgba(255,255,255,.07),transparent_24rem),linear-gradient(180deg,#000,#050505_50%,#000)]" />
      <div className="absolute inset-x-4 top-20 -z-10 h-px bg-white/10 sm:inset-x-8" />
      <div className="brand-container unp-hero-grid grid gap-4 pb-14 md:grid-cols-[0.9fr_1.1fr] md:items-end md:gap-0 lg:pb-20">
        <div className="hero-type relative order-1 min-w-0 md:pb-14 md:pr-0 lg:-mr-8">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mono-label"
          >
            DROP 001: DISCIPLINED / 001
          </motion.p>
          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="hero-title mt-4 max-w-[8.1ch] text-balance text-[clamp(3rem,14.6vw,4.55rem)] font-black uppercase leading-[0.82] tracking-[-0.085em] sm:text-[clamp(6rem,15vw,13rem)] sm:leading-[0.76] md:max-w-[7.15ch] lg:text-[clamp(8.1rem,10.8vw,14.2rem)]"
          >
            THE UNIFORM FOR THE RESET.
          </motion.h1>
          <motion.figure
            initial={{ opacity: 0, scale: 0.98, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="mobile-hero-model relative z-10 mx-auto hidden w-full place-items-center md:hidden"
            aria-label="DROP 001 model wearing UNPROFITABLE hoodie and DISCIPLINED hat"
          >
            <picture className="hero-model-picture relative block w-full overflow-visible">
              <source srcSet={heroMobileWebp} type="image/webp" />
              <img
                src={heroMobilePng}
                width="1024"
                height="1536"
                alt="Model wearing the black UNPROFITABLE hoodie and DISCIPLINED hat for Drop 001"
                className="mx-auto h-auto w-full object-contain object-top saturate-0"
                decoding="async"
                fetchPriority="high"
              />
            </picture>
          </motion.figure>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12 }}
            className="hero-copy mt-5 max-w-xl text-pretty text-base leading-7 text-white/68 sm:text-lg md:max-w-md"
          >
            A blacked-out uniform for rebuilding standards. Final sizing, product proof, and launch notice go to the list before checkout opens.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18 }}
            className="hero-cta mt-6 grid gap-3 sm:flex sm:flex-wrap sm:items-center md:mt-7"
          >
            <ButtonColorful onClick={() => onJoin('home-hero-join', 'full_drop')}>Join Drop List</ButtonColorful>
            <Button asChild variant="outline" size="lg">
              <a href="#drop">View Drop 001</a>
            </Button>
          </motion.div>
          <p className="hero-note mt-4 max-w-sm font-mono text-[11px] uppercase leading-5 tracking-[0.16em] text-white/44">
            Checkout opens after sizing and product proof are confirmed.
          </p>
        </div>

        <motion.figure
          initial={{ opacity: 0, scale: 0.98, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08 }}
          className="hero-model relative z-30 order-2 mx-auto -mt-1 hidden w-full max-w-[390px] min-w-0 place-items-center md:-ml-5 md:mt-0 md:grid md:max-w-[630px] lg:-ml-10 lg:max-w-[720px]"
          aria-label="DROP 001 model wearing UNPROFITABLE hoodie and DISCIPLINED hat"
        >
          <div className="absolute left-1/2 top-[12%] -z-10 hidden h-[84%] w-[82%] -translate-x-1/2 rounded-[999px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,.09),rgba(255,255,255,.025)_45%,rgba(255,255,255,.065))] shadow-[inset_0_0_70px_rgba(255,255,255,.055)] sm:block" />
          <div className="absolute left-[11%] top-[9%] -z-10 h-[78%] w-px bg-gradient-to-b from-transparent via-white/18 to-transparent" />
          <div className="absolute inset-x-3 bottom-0 -z-10 h-1/2 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,.19),transparent_66%)]" />
          <picture className="hero-model-picture relative block w-full overflow-hidden drop-shadow-[0_38px_62px_rgba(0,0,0,.82)] sm:overflow-visible md:translate-x-2 lg:translate-x-4">
            <source media="(max-width: 767px)" srcSet={heroMobileWebp} type="image/webp" />
            <source media="(max-width: 767px)" srcSet={heroMobilePng} type="image/png" />
            <source srcSet={heroWebp} type="image/webp" />
            <img
              src={heroPng}
              width="1024"
              height="1536"
              alt="Model wearing the black UNPROFITABLE hoodie and DISCIPLINED hat for Drop 001"
              className="mx-auto aspect-[4/5] h-auto w-full object-cover object-[50%_34%] contrast-[1.04] saturate-0 max-md:!aspect-auto max-md:!object-contain max-md:!object-center sm:aspect-auto sm:object-contain sm:object-center"
              decoding="async"
              fetchPriority="high"
            />
          </picture>
          <figcaption className="absolute bottom-8 right-0 hidden border border-white/12 bg-black/70 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white/58 backdrop-blur md:block">
            DISCIPLINED / 001
          </figcaption>
        </motion.figure>
      </div>
      <a href="#proof" className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white/38 transition hover:text-white lg:flex">
        Proof first <ArrowDown className="h-3 w-3" />
      </a>
    </section>
  );
}
