import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import mark from '../../assets/unprofitable-mark-header.png';

type NavHeaderProps = {
  onJoin: (source: string, interest?: string) => void;
};

const navItems = [
  ['Home', '/#top'],
  ['Drop 001', '/#drop'],
  ['Proof', '/#proof'],
  ['Join List', '/#join']
] as const;

export function NavHeader({ onJoin }: NavHeaderProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  function join(source = 'nav-join-list') {
    setOpen(false);
    onJoin(source, 'full_drop');
  }

  return (
    <header className="site-header" aria-label="UNPROFITABLE drop console">
      <div className="site-header-top">
        <a href="/#top" className="site-brand" aria-label="UNPROFITABLE home" onClick={() => setOpen(false)}>
          <span className="site-brand-mark" aria-hidden="true">
            <img src={mark} alt="" />
          </span>
          <span className="site-wordmark">UNPROFITABLE</span>
        </a>

        <div className="site-header-actions">
          <button type="button" className="site-join-link" onClick={() => join()}>
            JOIN LIST +
          </button>
          <button
            type="button"
            className="site-menu-button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="site-menu-panel"
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className="site-header-rail" aria-hidden="true">
        <span className="site-header-badge">001</span>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id="site-menu-panel"
            className="site-menu-panel"
            initial={{ opacity: 0, height: 0, y: -8 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav className="site-menu-list" aria-label="Site sections">
              {navItems.map(([label, href]) => (
                <a key={label} href={href} onClick={() => setOpen(false)}>
                  {label}
                </a>
              ))}
              <button type="button" onClick={() => join('menu-join-list')}>JOIN DROP LIST →</button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
