import { AnimatePresence, motion } from 'framer-motion';
import { KeyboardEvent, MouseEvent, useEffect, useRef, useState } from 'react';
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
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.requestAnimationFrame(() => menuButtonRef.current?.focus());
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  function join(source = 'nav-join-list') {
    setOpen(false);
    onJoin(source, 'full_drop');
  }

  function closeMenu() {
    setOpen(false);
  }

  function scrollToSection(event: MouseEvent<HTMLAnchorElement>, href: string) {
    const id = href.replace(/^\/?#/, '');
    let target = document.getElementById(id);
    if (id === 'drop' && (!target || target.getClientRects().length === 0)) {
      target = document.getElementById('drop-desktop');
    }
    if (!target) {
      closeMenu();
      return;
    }
    event.preventDefault();
    closeMenu();
    window.history.pushState(null, '', `#${id}`);
    window.setTimeout(() => target.scrollIntoView({ block: 'start' }), 0);
  }

  function trapFocus(event: KeyboardEvent<HTMLElement>) {
    if (!open || event.key !== 'Tab') return;
    const focusable = headerRef.current?.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
    );
    if (!focusable?.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const active = document.activeElement;

    if (event.shiftKey && active === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && active === last) {
      event.preventDefault();
      first.focus();
    }
  }

  return (
    <header
      ref={headerRef}
      className={`site-header${open ? ' site-header-open' : ''}`}
      aria-label="UNPROFITABLE drop console"
      onKeyDown={trapFocus}
    >
      <div className="site-header-top">
        <a href="/#top" className="site-brand" aria-label="UNPROFITABLE home" onClick={(event) => scrollToSection(event, '/#top')}>
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
            ref={menuButtonRef}
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
            role="dialog"
            aria-modal="true"
            aria-label="UNPROFITABLE drop navigation"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          >
            <nav className="site-menu-list" aria-label="Site sections">
              {navItems.map(([label, href], index) => (
                <motion.a
                  key={label}
                  href={href}
                  onClick={(event) => scrollToSection(event, href)}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: 0.04 + index * 0.025, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span>{label}</span>
                  <span aria-hidden="true">0{index + 1}</span>
                </motion.a>
              ))}
            </nav>
            <div className="site-menu-footer">
              <button type="button" className="site-menu-cta" onClick={() => join('menu-join-list')}>
                JOIN DROP LIST →
              </button>
              <p>DROP 001: DISCIPLINED / 001</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
