import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import mark from '../../assets/unprofitable-mark-header.png';
import { Button } from './ui/button';
import { cn } from '../lib/utils';

type NavHeaderProps = {
  onJoin: (source: string, interest?: string) => void;
};

const navItems = [
  ['Home', '#top'],
  ['Proof', '#proof'],
  ['Drop 001', '#drop'],
  ['Access', '#join']
] as const;

export function NavHeader({ onJoin }: NavHeaderProps) {
  const [open, setOpen] = useState(false);

  function join(source = 'nav-join-list') {
    setOpen(false);
    onJoin(source, 'full_drop');
  }

  return (
    <header className="site-header sticky top-0 z-50 border-b border-white/10 bg-black/74 backdrop-blur-xl supports-[backdrop-filter]:bg-black/62">
      <div className="site-header-inner brand-container flex h-14 items-center justify-between gap-3 sm:h-[72px] sm:gap-4">
        <a href="#top" className="flex min-w-0 items-center gap-3" aria-label="UNPROFITABLE home" onClick={() => setOpen(false)}>
          <img src={mark} alt="" className="h-8 w-6 object-contain sm:h-9 sm:w-7" />
          <span className="truncate text-[11px] font-black uppercase tracking-[0.14em] sm:text-sm sm:tracking-[0.18em]">UNPROFITABLE</span>
        </a>
        <nav className="hidden items-center gap-8 text-[11px] font-bold uppercase tracking-[0.16em] text-white/58 md:flex" aria-label="Homepage sections">
          {navItems.map(([label, href]) => (
            <a key={label} className="transition hover:text-white" href={href}>{label}</a>
          ))}
        </nav>
        <div className="site-header-actions flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={() => join()} className="h-10 px-4 text-[10px] tracking-[0.16em] max-[374px]:hidden">Join List</Button>
          <button
            type="button"
            className={cn(
              'grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/[0.03] text-white/72 transition hover:border-white/35 hover:bg-white/10 md:hidden',
              open && 'border-white/35 bg-white/10 text-white'
            )}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="brand-container pb-3 md:hidden">
          <nav className="grid overflow-hidden rounded-[1.5rem] border border-white/12 bg-[#070707] p-2 shadow-[0_28px_80px_rgba(0,0,0,.72)]" aria-label="Mobile homepage sections">
            {navItems.map(([label, href]) => (
              <a key={label} href={href} onClick={() => setOpen(false)} className="rounded-full px-4 py-3 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-white/62 transition hover:bg-white/[0.08] hover:text-white">
                {label}
              </a>
            ))}
            <button type="button" onClick={() => join('mobile-menu-join-list')} className="mt-1 min-h-11 rounded-full border border-white bg-white px-4 py-3 text-[11px] font-black uppercase tracking-[0.16em] text-black transition hover:bg-black hover:text-white">
              Join Drop List
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
