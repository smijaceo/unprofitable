import { Check, LockKeyhole, Ruler } from 'lucide-react';

export function Announcement() {
  return (
    <section className="brand-container py-10 sm:py-14" aria-label="Drop status">
      <div className="grid gap-3 border-y border-white/10 py-4 sm:grid-cols-3 sm:gap-0 sm:py-0">
        {[
          { icon: Ruler, label: 'Sizing before checkout', copy: 'Measurements land before public payment opens.' },
          { icon: Check, label: 'Product proof first', copy: 'Final photos, closeups, and garment details before payment.' },
          { icon: LockKeyhole, label: 'List hears first', copy: 'Launch notice goes to early access before public checkout.' }
        ].map((item) => (
          <div key={item.label} className="group flex gap-4 border-white/10 py-5 sm:border-r sm:px-6 sm:last:border-r-0">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/15 bg-white/[0.03] text-white/75 transition group-hover:border-white/35 group-hover:text-white">
              <item.icon className="h-4 w-4" />
            </div>
            <div>
              <h2 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white">{item.label}</h2>
              <p className="mt-2 max-w-[28ch] text-sm leading-6 text-white/55">{item.copy}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
