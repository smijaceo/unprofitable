import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import mark from '../../assets/unprofitable-mark-header.png';
import { Button } from './ui/button';
import { cn } from '../lib/utils';

type NavHeaderProps = {
  onJoin: (source: string, interest?: string) => void;
};

const navItems = [
  ['Home', '/#top', 'top'],
  ['Drop 001', '/#drop', 'drop'],
  ['Proof', '/#proof', 'proof'],
  ['Join List', '/#join', 'join']
] as const;

export function NavHeader({ onJoin }: NavHeaderProps) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('top');

  useEffect(() => {
    function closeOnResize() {
      if (window.innerWidth >= 768) setOpen(false);
    }
    window.addEventListener('resize', closeOnResize);
    return () => window.removeEventListener('resize', closeOnResize);
  }, []);

  useEffect(() => {
    const sectionIds = navItems.map(([, , id]) => id);
    function updateActive() {
      const scrollPoint = window.scrollY + 110;
      let current = 'top';
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element && element.offsetTop <= scrollPoint) current = id;
      }
      setActive(current);
    }
    updateActive();
    window.addEventListener('scroll', updateActive, { passive: true });
    window.addEventListener('hashchange', updateActive);
    return () => {
      window.removeEventListener('scroll', updateActive);
      window.removeEventListener('hashchange', updateActive);
    };
  }, []);

  function join(source = 'nav-join-list') {
    setOpen(false);
    onJoin(source, 'full_drop');
  }

  return (
    <header className="site-header sticky top-0 z-50 border-b border-white/10 bg-black/74 backdrop-blur-2xl supports-[backdrop-filter]:bg-black/58">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/24 to-transparent" />
      <div className="site-header-inner brand-container flex h-16 items-center justify-between gap-3 sm:h-[76px] sm:gap-4">
        <a href="/#top" className="group flex min-w-0 items-center gap-3" aria-label="UNPROFITABLE home" onClick={() => setOpen(false)}>
          <span className="relative grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/14 bg-white/[0.035] shadow-[inset_0_1px_0_rgba(255,255,255,.12),0_14px_40px_rgba(0,0,0,.55)] transition duration-300 group-hover:border-white/32 group-hover:bg-white/[0.075] sm:h-11 sm:w-11">
            <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,.18),transparent_62%)] opacity-70" />
            <img src={mark} alt="" className="relative h-7 w-7 object-contain sm:h-8 sm:w-8" />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-[12px] font-black uppercase tracking-[0.17em] text-white sm:text-sm sm:tracking-[0.2em]">UNPROFITABLE</span>
            <span className="hidden font-mono text-[9px] uppercase tracking-[0.24em] text-white/36 sm:block">Drop 001 / Disciplined</span>
          </span>
        </a>

        <nav className="hidden items-center rounded-full border border-white/10 bg-white/[0.03] p-1 text-[10px] font-black uppercase tracking-[0.16em] text-white/52 shadow-[inset_0_1px_0_rgba(255,255,255,.08),0_18px_54px_rgba(0,0,0,.35)] md:flex" aria-label="Site sections">
          {navItems.map(([label, href, id]) => (
            <a
              key={label}
              className={cn(
                'relative rounded-full px-4 py-2.5 transition duration-300 ease-out hover:bg-white/[0.08] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
                active === id && 'bg-white text-black shadow-[0_8px_24px_rgba(255,255,255,.12)] hover:bg-white hover:text-black'
              )}
              href={href}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="site-header-actions flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={() => join()} className="hidden h-10 border-white/20 bg-white/[0.045] px-4 text-[10px] tracking-[0.18em] shadow-[inset_0_1px_0_rgba(255,255,255,.08)] hover:border-white/60 hover:bg-white hover:text-black min-[375px]:inline-flex">
            Join List
          </Button>
          <button
            type="button"
            className={cn(
              'grid h-11 w-11 place-items-center rounded-full border border-white/16 bg-white/[0.04] text-white/78 shadow-[inset_0_1px_0_rgba(255,255,255,.1)] transition duration-300 ease-out hover:border-white/35 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:hidden',
              open && 'border-white/40 bg-white text-black hover:bg-white hover:text-black'
            )}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="brand-container pb-3 md:hidden"
          >
            <nav className="grid overflow-hidden rounded-[1.5rem] border border-white/12 bg-[#070707]/95 p-2 shadow-[0_28px_80px_rgba(0,0,0,.78)] ring-1 ring-white/[0.03]" aria-label="Mobile site sections">
              {navItems.map(([label, href, id]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'rounded-full px-4 py-3.5 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-white/62 transition hover:bg-white/[0.08] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white',
                    active === id && 'bg-white/[0.08] text-white'
                  )}
                >
                  {label}
                </a>
              ))}
              <button type="button" onClick={() => join('mobile-menu-join-list')} className="mt-1 min-h-12 rounded-full border border-white bg-white px-4 py-3 text-[11px] font-black uppercase tracking-[0.16em] text-black transition hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                Join Drop List
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
