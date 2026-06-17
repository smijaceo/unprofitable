import { motion } from 'framer-motion';
import heroWebp from '../../assets/images/hero/drop001-hoodie-hat-editorial-hero.webp';
import heroPng from '../../assets/images/hero/drop001-hoodie-hat-editorial-hero.png';
import heroMobileWebp from '../../assets/images/hero/drop001-hoodie-hat-editorial-hero-mobile.webp';
import heroMobilePng from '../../assets/images/hero/drop001-hoodie-hat-editorial-hero-mobile.png';

type MinimalistHeroProps = {
  onJoin: (source: string, interest?: string) => void;
};

export function MinimalistHero({ onJoin }: MinimalistHeroProps) {
  return (
    <section id="top" className="drop-hero" aria-labelledby="hero-title">
      <div className="hero-ambient" aria-hidden="true" />
      <div className="hero-ghost-001" aria-hidden="true">001</div>

      <motion.p
        className="hero-eyebrow"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      >
        DROP 001: DISCIPLINED / 001
      </motion.p>

      <motion.h1
        id="hero-title"
        className="hero-headline"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.58, delay: 0.03, ease: [0.16, 1, 0.3, 1] }}
      >
        <span>THE</span>
        <span>UNIFORM</span>
        <span>FOR THE</span>
        <span>RESET.</span>
      </motion.h1>

      <motion.picture
        className="hero-model-cutout"
        initial={{ opacity: 0, scale: 0.985, y: 18 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
      >
        <source media="(max-width: 767px)" srcSet={heroMobileWebp} type="image/webp" />
        <source media="(max-width: 767px)" srcSet={heroMobilePng} type="image/png" />
        <source srcSet={heroWebp} type="image/webp" />
        <img
          src={heroPng}
          width="1024"
          height="1536"
          alt="Model wearing the black UNPROFITABLE hoodie and DISCIPLINED hat for Drop 001"
          decoding="async"
          fetchPriority="high"
        />
      </motion.picture>

      <div className="hero-crosshair" aria-hidden="true">
        <span />
        <b>001</b>
      </div>

      <motion.p
        className="hero-microcopy"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="hero-microcopy-mobile">BLACKED-OUT</span>
        <span className="hero-microcopy-mobile">HEAVYWEIGHT</span>
        <span className="hero-microcopy-mobile">PIECES FOR</span>
        <span className="hero-microcopy-mobile">REBUILDING</span>
        <span className="hero-microcopy-mobile">STANDARDS.</span>
        <span className="hero-microcopy-mobile">PROOF FIRST.</span>
        <span className="hero-microcopy-mobile">CHECKOUT</span>
        <span className="hero-microcopy-mobile">LATER.</span>
        <span className="hero-microcopy-desktop">Proof first. Checkout later. Sizing, product photos, and launch notice go to the list before the drop opens.</span>
      </motion.p>

      <motion.div
        className="hero-status"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
      >
        DROP LIST OPEN
      </motion.div>

      <motion.button
        type="button"
        className="hero-drop-cta"
        onClick={() => onJoin('home-hero-join', 'full_drop')}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.58, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        JOIN DROP LIST →
      </motion.button>
    </section>
  );
}
