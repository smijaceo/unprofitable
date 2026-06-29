import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Button } from './ui/button';
import { type DropProduct, type SizeGuide, productHref, products } from '../lib/products';
import { leadMetadata, trackEvent } from '../lib/analytics';

export type ProductPageProps = {
  product: DropProduct;
  onJoin: (source: string, interest?: string) => void;
};

function trackRelatedProductClick(product: DropProduct) {
  const surface = `product-related-${product.interest}`;
  trackEvent('ProductCardClick', {
    ...leadMetadata({ interest: product.interest, source: surface, surface }),
    product: product.slug,
    interaction_type: 'details'
  });
}

function ProductShowcase({ product }: { product: DropProduct }) {
  if (product.interest === 'hat') {
    const hatGallery = product.heroGallery ?? product.gallery;
    const [main, ...support] = hatGallery;

    return (
      <div className="relative overflow-hidden border border-white/12 bg-[#f2f2f2] p-2.5 text-black shadow-[0_28px_80px_rgba(0,0,0,.42)] sm:p-4 lg:min-h-[660px]">
        <div className="pointer-events-none absolute inset-3 border border-black/10" />
        <div className="pointer-events-none absolute left-4 top-4 z-10 rounded-full border border-black/10 bg-white/70 px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-black/58 backdrop-blur">
          {product.index}
        </div>
        <div className="relative grid h-full gap-2.5 pt-9 sm:gap-3 lg:grid-rows-[1fr_auto]">
          <figure className="grid min-h-[360px] place-items-center overflow-hidden border border-black/10 bg-white p-2 shadow-[0_18px_44px_rgba(0,0,0,.13)] sm:min-h-[470px] sm:p-3 lg:min-h-[505px] lg:p-4">
            <img
              src={main?.src ?? product.image}
              alt={main?.alt ?? product.alt}
              className="max-h-[460px] w-full scale-[1.08] object-contain drop-shadow-[0_26px_46px_rgba(0,0,0,.28)] sm:max-h-[560px] lg:max-h-[650px]"
              decoding="async"
              loading="eager"
            />
          </figure>
          <div className="grid gap-2.5 sm:grid-cols-2">
            {support.map((image) => (
              <figure key={image.label} className="grid min-h-[150px] place-items-center overflow-hidden border border-black/10 bg-white p-2 shadow-[0_12px_26px_rgba(0,0,0,.10)] sm:min-h-[180px]">
                <img src={image.src} alt={image.alt} className="max-h-[190px] w-full scale-[1.04] object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,.20)]" decoding="async" loading="eager" />
              </figure>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden border border-white/12 bg-[#f2f2f2] p-2.5 text-black shadow-[0_28px_80px_rgba(0,0,0,.42)] sm:p-4 lg:min-h-[660px]">
      <div className="pointer-events-none absolute inset-3 border border-black/10" />
      <div className="pointer-events-none absolute left-4 top-4 z-10 rounded-full border border-black/10 bg-white/70 px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-black/58 backdrop-blur">
        {product.index}
      </div>
      <figure className="relative grid h-full min-h-[390px] place-items-center overflow-hidden border border-black/10 bg-white p-2 pt-9 shadow-[0_18px_44px_rgba(0,0,0,.13)] sm:min-h-[540px] sm:p-4 sm:pt-10 lg:min-h-[620px] lg:p-5 lg:pt-11">
        <img
          src={product.image}
          alt={product.alt}
          className="max-h-[540px] w-full scale-[1.08] object-contain drop-shadow-[0_30px_58px_rgba(0,0,0,.32)] sm:max-h-[700px] lg:max-h-[800px]"
          decoding="async"
          loading="eager"
        />
      </figure>
    </div>
  );
}

function SizeGuideSection({ guide, title }: { guide: SizeGuide; title: string }) {
  const cols = [
    { key: 'length', label: 'Length', in: 'lengthIn', cm: 'lengthCm' },
    { key: 'chest', label: 'Chest', in: 'chestIn', cm: 'chestCm' },
    { key: 'shoulder', label: 'Shoulder', in: 'shoulderIn', cm: 'shoulderCm' },
    { key: 'sleeve', label: 'Sleeve', in: 'sleeveIn', cm: 'sleeveCm' }
  ] as const;
  const thCls = 'border-b border-white/25 px-4 py-3.5 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-white/54';
  const tdCls = 'whitespace-nowrap border-b border-white/10 px-4 py-3.5 text-[15px] text-white';

  return (
    <section id="fit-sizing" className="brand-container py-8 sm:py-14" aria-labelledby="fit-title">
      <div className="mb-6 grid gap-4 border-t border-white/10 pt-8 lg:grid-cols-[0.8fr_1fr] lg:items-end">
        <div>
          <p className="mono-label">Fit / Sizing</p>
          <h2 id="fit-title" className="mt-3 text-[clamp(3.4rem,11vw,7.2rem)] font-black uppercase leading-[0.76] tracking-[-0.085em]">
            How it fits.
          </h2>
        </div>
        <p className="max-w-2xl text-pretty text-base leading-7 text-white/62">{guide.findCopy}</p>
      </div>

      <div className="overflow-x-auto border border-white/12 bg-[#070707]" style={{ WebkitOverflowScrolling: 'touch' }}>
        <table className="w-full min-w-[560px] border-collapse text-right [font-variant-numeric:tabular-nums]">
          <caption className="px-4 pb-1 pt-4 text-left font-mono text-[10px] uppercase tracking-[0.18em] text-white/48">
            {title} — {guide.fitLabel}
          </caption>
          <thead>
            <tr>
              <th scope="col" className={`sticky left-0 z-10 bg-[#070707] text-left ${thCls}`}>Size</th>
              {cols.map((c) => (
                <th key={c.key} scope="col" className={thCls}>{c.label}</th>
              ))}
              <th scope="col" className={thCls}>Fits height</th>
              <th scope="col" className={thCls}>Fits weight</th>
            </tr>
          </thead>
          <tbody className="[&_tr:last-child_td]:border-b-0 [&_tr:last-child_th]:border-b-0">
            {guide.rows.map((row) => (
              <tr key={row.size}>
                <th scope="row" className="sticky left-0 z-10 border-b border-white/10 bg-[#070707] px-4 py-3.5 text-left text-base font-black text-white">{row.size}</th>
                {cols.map((c) => (
                  <td key={c.key} className={tdCls}>
                    {row[c.in]}
                    <span className="block font-mono text-[11px] text-white/42">{row[c.cm]}</span>
                  </td>
                ))}
                <td className={tdCls}>{row.height}</td>
                <td className={tdCls}>{row.weight}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-5 max-w-3xl text-base leading-7 text-white/66">{guide.note}</p>
      <p className="mt-2 text-sm leading-6 text-white/42">{guide.finePrint}</p>
    </section>
  );
}

export function ProductPage({ product, onJoin }: ProductPageProps) {
  const related = products.filter((item) => item.slug !== product.slug);

  return (
    <main className="bg-black pt-8 text-white sm:pt-12">
      <section className="brand-container py-8 sm:py-12 lg:py-16" aria-labelledby="product-title">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-5">
          <Button asChild variant="ghost" size="sm" className="pl-0 text-white/52 hover:text-white">
            <a href="/#drop" aria-label="Back to Drop 001">
              <ArrowLeft className="mr-2 h-3.5 w-3.5" aria-hidden />
              Drop 001
            </a>
          </Button>
          <span className="rounded-full border border-white/12 bg-white/[0.03] px-3 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-white/48">
            Early Access List Open
          </span>
        </div>

        <div className="grid gap-5 lg:grid-cols-[minmax(0,1.32fr)_minmax(360px,1fr)] lg:items-stretch">
          <ProductShowcase product={product} />

          <div className="relative flex min-h-full flex-col justify-between overflow-hidden border border-white/12 bg-[#060606] p-5 sm:p-8 lg:p-9">
            <div className="pointer-events-none absolute inset-0 opacity-80 [background:radial-gradient(circle_at_86%_4%,rgba(255,255,255,.10),transparent_25rem)]" />
            <div className="relative">
              <p className="font-mono text-[11px] font-extrabold uppercase tracking-[0.18em] text-white/48">{product.index}</p>
              <p className="mono-label mt-3">{product.eyebrow}</p>
              <div className="mt-5 h-px w-full bg-white/12" />
              <h1 id="product-title" className="mt-6 text-[clamp(3rem,5.8vw,5.4rem)] font-black uppercase leading-[0.9] tracking-[-0.055em]">
                {product.title}
              </h1>
              <p className="mt-5 max-w-xl text-pretty text-base leading-7 text-white/66 sm:text-lg sm:leading-8">
                {product.heroCopy}
              </p>

              <div className="mt-7 grid gap-3">
                {product.notes.map((note) => (
                  <div key={note} className="border border-white/12 bg-white/[0.025] px-4 py-3.5">
                    <p className="font-mono text-[10px] uppercase leading-5 tracking-[0.16em] text-white/56">{note}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mt-8 border-t border-white/12 pt-6">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <Button size="lg" onClick={() => onJoin(`product-${product.interest}-hero`, product.interest)} className="w-full">
                  Join {product.shortTitle} List
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full">
                  <a href="#product-proof">View Product Proof</a>
                </Button>
              </div>
              <div className="mt-5 flex flex-wrap items-center justify-between gap-3 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/38">
                <span>Secure. Private. No spam.</span>
                <span>Only for the disciplined.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {product.sizeGuide ? <SizeGuideSection guide={product.sizeGuide} title={product.name} /> : null}

      <section id="product-proof" className="brand-container py-8 sm:py-14" aria-labelledby="proof-title">
        <div className="mb-6 grid gap-4 border-t border-white/10 pt-8 lg:grid-cols-[0.8fr_1fr] lg:items-end">
          <div>
            <p className="mono-label">Proof First</p>
            <h2 id="proof-title" className="mt-3 text-[clamp(3.4rem,11vw,7.2rem)] font-black uppercase leading-[0.76] tracking-[-0.085em]">
              No mystery checkout.
            </h2>
          </div>
          <p className="max-w-2xl text-pretty text-base leading-7 text-white/62">
            See the piece before payment opens: silhouette, artwork placement, detail views, and final sizing notes go to the list first.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {product.gallery.map((image) => (
            <figure key={image.label} className="group overflow-hidden border border-white/12 bg-[#070707] p-3">
              <div className="grid min-h-[260px] place-items-center overflow-hidden bg-[#f2f2f2] p-4 sm:min-h-[360px]">
                <img src={image.src} alt={image.alt} loading="eager" decoding="async" className="max-h-[330px] w-full object-contain drop-shadow-[0_18px_40px_rgba(0,0,0,.30)] transition duration-500 group-hover:scale-[1.015]" />
              </div>
              <figcaption className="flex items-center justify-between gap-3 px-1 py-4">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/54">{image.label}</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-white/35" aria-hidden />
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="brand-container py-8 sm:py-14 lg:py-18" aria-labelledby="related-title">
        <div className="grid gap-4 border-t border-white/10 pt-8 lg:grid-cols-[0.62fr_1fr]">
          <div>
            <p className="mono-label">Complete the Capsule</p>
            <h2 id="related-title" className="mt-3 text-5xl font-black uppercase leading-[0.82] tracking-[-0.07em] sm:text-7xl">Related Pieces.</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {related.map((item) => (
              <a key={item.slug} href={productHref(item)} onClick={() => trackRelatedProductClick(item)} className="group grid grid-cols-[96px_1fr] gap-4 border border-white/12 bg-white/[0.025] p-3 transition duration-300 hover:border-white/30 hover:bg-white/[0.045] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                <span className="grid h-24 place-items-center bg-white text-black">
                  <img src={item.image} alt="" className="max-h-20 w-full object-contain" loading="eager" decoding="async" />
                </span>
                <span className="flex min-w-0 flex-col justify-center">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/42">{item.index}</span>
                  <span className="mt-1 text-xl font-black uppercase tracking-[-0.04em] text-white">{item.name}</span>
                  <span className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-white/48 group-hover:text-white">View piece →</span>
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-5 border border-white bg-white p-5 text-black sm:p-8 lg:flex lg:items-center lg:justify-between lg:gap-8">
          <div>
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-black/58">Product-specific access</p>
            <p className="mt-3 max-w-2xl text-2xl font-black uppercase leading-[0.92] tracking-[-0.06em] sm:text-4xl">Get the {product.shortTitle.toLowerCase()} proof before checkout opens.</p>
          </div>
          <Button variant="dark" size="lg" onClick={() => onJoin(`product-${product.interest}-final`, product.interest)} className="mt-5 w-full lg:mt-0 lg:w-auto">
            Join {product.shortTitle} List
          </Button>
        </div>
      </section>
    </main>
  );
}
