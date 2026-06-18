export function Footer2() {
  return (
    <footer className="border-t border-white/10 bg-[#030303]" aria-label="Footer">
      <div className="brand-container py-12 sm:py-16">
        <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
          <div>
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-white/42">UNPROFITABLE TODAY. PROFITABLE TOMORROW.</p>
            <div className="mt-4 text-[clamp(2.4rem,8vw,5.6rem)] font-black uppercase leading-[0.82] tracking-[-0.075em]">UNPROFITABLE</div>
            <p className="mt-5 max-w-sm text-pretty text-base leading-7 text-white/58">Streetwear and community brand. Proof first. Checkout later.</p>
          </div>
          <div className="grid grid-cols-2 gap-7 sm:grid-cols-4">
            <FooterGroup title="Drop" links={[['Drop 001', '/#drop'], ['Hoodie', '/products/disciplined-heavyweight-hoodie'], ['Tee', '/products/disciplined-oversized-tee'], ['Hat', '/products/disciplined-structured-hat']]} />
            <FooterGroup title="Brand" links={[['Home', '/#top'], ['Proof', '/#proof'], ['Access', '/#join']]} />
            <FooterGroup title="Support" links={[['Contact', 'mailto:drop@wearunprofitable.com'], ['Shipping / Returns', '/returns.html'], ['Privacy', '/privacy.html'], ['Disclaimer', '/disclaimer.html']]} />
            <FooterGroup title="Social" links={[['Instagram', 'https://www.instagram.com/wearunprofitable/']]} />
          </div>
        </div>
        <p className="mt-8 max-w-4xl text-xs leading-6 text-white/42">
          UNPROFITABLE is a streetwear and community brand. Nothing here is financial, investment, trading, business, or professional advice. No signals. No guaranteed outcomes. Build responsibly.
        </p>
      </div>
    </footer>
  );
}

function FooterGroup({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <h3 className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">{title}</h3>
      <div className="mt-4 grid gap-3 text-sm text-white/62">
        {links.map(([label, href]) => (
          <a key={label} href={href} className="transition hover:text-white" rel={href.startsWith('http') ? 'noopener' : undefined}>{label}</a>
        ))}
      </div>
    </div>
  );
}
