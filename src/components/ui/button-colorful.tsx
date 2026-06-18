import * as React from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';

export function ButtonColorful({ className, children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        'group relative inline-flex min-h-12 items-center justify-center overflow-hidden rounded-full border border-white bg-white px-6 py-3 text-[11px] font-black uppercase tracking-[0.16em] text-black shadow-[0_0_0_1px_rgba(255,255,255,.18),0_18px_60px_rgba(255,255,255,.12)] transition duration-300 hover:-translate-y-0.5 hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white disabled:pointer-events-none disabled:opacity-50',
        className
      )}
      {...props}
    >
      <span className="absolute inset-0 bg-[linear-gradient(110deg,transparent,rgba(0,0,0,.08),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="relative z-10 flex items-center gap-2">
        {children}
        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
      </span>
    </button>
  );
}
