import { Menu } from 'lucide-react';
import mark from '../../assets/unprofitable-mark-header.png';
import { Button } from './ui/button';

type NavHeaderProps = {
  onJoin: (source: string, interest?: string) => void;
};

export function NavHeader({ onJoin }: NavHeaderProps) {
  return (
    <header className="site-header sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-md supports-[backdrop-filter]:bg-black/58 sm:bg-black/78 sm:backdrop-blur-xl sm:supports-[backdrop-filter]:bg-black/62">
      <div className="site-header-inner brand-container flex h-14 items-center justify-between gap-3 sm:h-[72px] sm:gap-4">
        <a href="#top" className="flex min-w-0 items-center gap-3" aria-label="UNPROFITABLE home">
          <img src={mark} alt="" className="hidden h-9 w-7 object-contain sm:block" />
          <span className="truncate text-[11px] font-black uppercase tracking-[0.14em] sm:text-sm sm:tracking-[0.18em]">UNPROFITABLE</span>
        </a>
        <nav className="hidden items-center gap-8 text-[11px] font-bold uppercase tracking-[0.16em] text-white/58 md:flex" aria-label="Homepage sections">
          <a className="transition hover:text-white" href="#top">Home</a>
          <a className="transition hover:text-white" href="#proof">Proof</a>
          <a className="transition hover:text-white" href="#drop">Drop 001</a>
          <a className="transition hover:text-white" href="#join">Access</a>
        </nav>
        <div className="site-header-actions flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={() => onJoin('nav-join-list')} className="hidden h-10 px-4 text-[10px] tracking-[0.16em] sm:inline-flex">Join List</Button>
          <button className="hidden h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/[0.03] text-white/70" aria-label="Menu">
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
