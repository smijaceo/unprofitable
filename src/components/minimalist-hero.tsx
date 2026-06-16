import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import heroWebp from '../../assets/images/hero/drop001-hoodie-hat-editorial-hero.webp';
import heroPng from '../../assets/images/hero/drop001-hoodie-hat-editorial-hero.png';
import { Button } from './ui/button';
import { ButtonColorful } from './ui/button-colorful';

type MinimalistHeroProps = {
  onJoin: (source: string, interest?: string) => void;
};

export function MinimalistHero({ onJoin }: MinimalistHeroProps) {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-black pt-5 sm:pt-10 lg:min-h-[calc(100svh-72px)]">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_8%,rgba(255,255,255,.12),transparent_34rem),linear-gradient(180deg,#000,#050505_50%,#000)]" />
      <div className="absolute inset-x-4 top-20 -z-10 h-px bg-white/10 sm:inset-x-8" />
      <div className="brand-container grid gap-7 pb-14 md:grid-cols-[0.88fr_1.05fr] md:items-end md:gap-10 lg:pb-20">
        <div className="relative z-10 order-1 min-w-0 md:pb-12">
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
            className="mt-4 max-w-full text-balance text-[clamp(3.25rem,15.8vw,5rem)] font-black uppercase leading-[0.8] tracking-[-0.085em] sm:max-w-[8.2ch] sm:text-[clamp(6rem,15vw,13rem)] sm:leading-[0.76] md:max-w-[7.6ch] lg:text-[clamp(8.5rem,12vw,15.5rem)]"
          >
            THE UNIFORM FOR THE RESET.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12 }}
            className="mt-5 max-w-xl text-pretty text-base leading-7 text-white/68 sm:text-lg md:max-w-md"
          >
            A blacked-out uniform for rebuilding standards. Final sizing, product proof, and launch notice go to the list before checkout opens.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18 }}
            className="mt-7 grid gap-3 sm:flex sm:flex-wrap sm:items-center"
          >
            <ButtonColorful onClick={() => onJoin('home-hero-join', 'full_drop')}>Join Drop List</ButtonColorful>
            <Button asChild variant="outline" size="lg">
              <a href="#drop">View Drop 001</a>
            </Button>
          </motion.div>
          <p className="mt-4 max-w-sm font-mono text-[11px] uppercase leading-5 tracking-[0.16em] text-white/44">
            Checkout opens after sizing and product proof are confirmed.
          </p>
        </div>

        <motion.figure
          initial={{ opacity: 0, scale: 0.98, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08 }}
          className="relative order-2 mx-auto grid w-full max-w-[430px] min-w-0 place-items-center md:max-w-[560px] lg:max-w-[640px]"
          aria-label="DROP 001 model wearing UNPROFITABLE hoodie and DISCIPLINED hat"
        >
          <div className="absolute left-1/2 top-[18%] -z-10 h-[58vw] max-h-[520px] w-[58vw] max-w-[520px] -translate-x-1/2 rounded-full border border-white/10 bg-white/[0.045] blur-[1px]" />
          <div className="absolute inset-x-3 bottom-0 -z-10 h-1/2 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,.16),transparent_64%)]" />
          <picture className="relative block w-full drop-shadow-[0_36px_60px_rgba(0,0,0,.78)]">
            <source srcSet={heroWebp} type="image/webp" />
            <img
              src={heroPng}
              width="1024"
              height="1536"
              alt="Model wearing the black UNPROFITABLE hoodie and DISCIPLINED hat for Drop 001"
              className="mx-auto h-auto w-full object-contain"
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
