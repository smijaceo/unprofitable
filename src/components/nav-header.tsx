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
  ['Home', '/#top'],
  ['Proof', '/#proof'],
  ['Drop 001', '/#drop'],
  ['Access', '/#join']
] as const;

export function NavHeader({ onJoin }: NavHeaderProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function closeOnResize() {
      if (window.innerWidth >= 768) setOpen(false);
    }
    window.addEventListener('resize', closeOnResize);
    return () => window.removeEventListener('resize', closeOnResize);
  }, []);

  function join(source = 'nav-join-list') {
    setOpen(false);
    onJoin(source, 'full_drop');
  }

  return (
    <header className="site-header sticky top-0 z-50 border-b border-white/10 bg-black/78 backdrop-blur-2xl supports-[backdrop-filter]:bg-black/64">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
      <div className="site-header-inner brand-container flex h-16 items-center justify-between gap-3 sm:h-[76px] sm:gap-4">
        <a href="/#top" className="group flex min-w-0 items-center gap-3" aria-label="UNPROFITABLE home" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/14 bg-white/[0.035] transition duration-300 group-hover:border-white/32 group-hover:bg-white/[0.07] sm:h-11 sm:w-11">
            <img src={mark} alt="" className="h-7 w-7 object-contain sm:h-8 sm:w-8" />
          </span>
          <span className="min-w-0">
            <span className="block truncate text-[12px] font-black uppercase tracking-[0.17em] text-white sm:text-sm sm:tracking-[0.2em]">UNPROFITABLE</span>
            <span className="hidden font-mono text-[9px] uppercase tracking-[0.24em] text-white/36 sm:block">Drop 001 / Disciplined</span>
          </span>
        </a>

        <nav className="hidden items-center rounded-full border border-white/10 bg-white/[0.025] p-1 text-[10px] font-black uppercase tracking-[0.16em] text-white/54 md:flex" aria-label="Site sections">
          {navItems.map(([label, href]) => (
            <a key={label} className="rounded-full px-4 py-2.5 transition duration-300 hover:bg-white/[0.08] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" href={href}>
              {label}
            </a>
          ))}
        </nav>

        <div className="site-header-actions flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={() => join()} className="hidden h-10 border-white/20 bg-white/[0.045] px-4 text-[10px] tracking-[0.18em] hover:border-white/60 hover:bg-white hover:text-black min-[375px]:inline-flex">
            Join List
          </Button>
          <button
            type="button"
            className={cn(
              'grid h-11 w-11 place-items-center rounded-full border border-white/16 bg-white/[0.035] text-white/78 transition duration-300 hover:border-white/35 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:hidden',
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
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="brand-container pb-3 md:hidden"
          >
            <nav className="grid overflow-hidden border border-white/12 bg-[#070707] p-2 shadow-[0_28px_80px_rgba(0,0,0,.72)]" aria-label="Mobile site sections">
              {navItems.map(([label, href]) => (
                <a key={label} href={href} onClick={() => setOpen(false)} className="rounded-full px-4 py-3.5 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-white/62 transition hover:bg-white/[0.08] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
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
