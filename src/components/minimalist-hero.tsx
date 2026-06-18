import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import heroModel01 from '../../assets/images/hero/rotation/hero-model-01.webp';
import heroModel02 from '../../assets/images/hero/rotation/hero-model-02.webp';
import heroModel03 from '../../assets/images/hero/rotation/hero-model-03.webp';
import heroModel04 from '../../assets/images/hero/rotation/hero-model-04.webp';
import heroModel05 from '../../assets/images/hero/rotation/hero-model-05.webp';
import heroModel06 from '../../assets/images/hero/rotation/hero-model-06.webp';

const heroModels = [heroModel01, heroModel02, heroModel03, heroModel04, heroModel05, heroModel06];

type MinimalistHeroProps = {
  onJoin: (source: string, interest?: string) => void;
};

export function MinimalistHero({ onJoin }: MinimalistHeroProps) {
  const [activeModel, setActiveModel] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const interval = window.setInterval(() => {
      setActiveModel((current) => (current + 1) % heroModels.length);
    }, 5000);

    return () => window.clearInterval(interval);
  }, []);

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

      <motion.div
        className="hero-model-cutout"
        initial={{ opacity: 0, scale: 0.985, y: 18 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
      >
        {heroModels.map((model, index) => (
          <img
            key={model}
            className={`hero-model-img${index === activeModel ? ' is-active' : ''}`}
            src={model}
            width="1122"
            height="1402"
            alt={index === 0 ? 'Model wearing black UNPROFITABLE Drop 001 apparel' : ''}
            aria-hidden={index === 0 ? undefined : true}
            decoding="async"
            fetchPriority={index === 0 ? 'high' : 'auto'}
          />
        ))}
      </motion.div>

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
