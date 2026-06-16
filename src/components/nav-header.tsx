import { Menu } from 'lucide-react';
import mark from '../../assets/unprofitable-mark-header.png';
import { Button } from './ui/button';

type NavHeaderProps = {
  onJoin: (source: string, interest?: string) => void;
};

export function NavHeader({ onJoin }: NavHeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/78 backdrop-blur-xl supports-[backdrop-filter]:bg-black/62">
      <div className="brand-container flex h-16 items-center justify-between gap-4 sm:h-[72px]">
        <a href="#top" className="flex min-w-0 items-center gap-3" aria-label="UNPROFITABLE home">
          <img src={mark} alt="" className="hidden h-9 w-7 object-contain sm:block" />
          <span className="truncate text-xs font-black uppercase tracking-[0.18em] sm:text-sm">UNPROFITABLE</span>
        </a>
        <nav className="hidden items-center gap-8 text-[11px] font-bold uppercase tracking-[0.16em] text-white/58 md:flex" aria-label="Homepage sections">
          <a className="transition hover:text-white" href="#top">Home</a>
          <a className="transition hover:text-white" href="#proof">Proof</a>
          <a className="transition hover:text-white" href="#drop">Drop 001</a>
          <a className="transition hover:text-white" href="#join">Access</a>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" onClick={() => onJoin('nav-join-list')} className="inline-flex">Join List</Button>
          <button className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/[0.03] text-white/70 md:hidden" aria-label="Menu">
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
