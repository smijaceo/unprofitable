import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Button } from './ui/button';
import { type DropProduct, productHref, products } from '../lib/products';

export type ProductPageProps = {
  product: DropProduct;
  onJoin: (source: string, interest?: string) => void;
};

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

        <div className="grid gap-5 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch">
          <div className="relative overflow-hidden border border-white/12 bg-[radial-gradient(circle_at_50%_38%,#f7f7f7_0,#dedede_48%,#b6b6b6_100%)] p-5 sm:p-8 lg:min-h-[680px]">
            <div className="pointer-events-none absolute inset-4 border border-black/10" />
            <div className="pointer-events-none absolute left-5 top-5 rounded-full border border-black/10 bg-white/45 px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-black/55 backdrop-blur">
              {product.index}
            </div>
            <img
              src={product.image}
              alt={product.alt}
              className="relative mx-auto h-full max-h-[520px] min-h-[300px] w-full object-contain drop-shadow-[0_28px_58px_rgba(0,0,0,.38)] sm:min-h-[420px] lg:max-h-[640px]"
              decoding="async"
              loading="eager"
            />
          </div>

          <div className="relative flex flex-col justify-between overflow-hidden border border-white/12 bg-[#060606] p-5 sm:p-8 lg:p-10">
            <div className="pointer-events-none absolute inset-0 opacity-80 [background:radial-gradient(circle_at_86%_4%,rgba(255,255,255,.10),transparent_25rem)]" />
            <div className="relative">
              <p className="mono-label">{product.eyebrow}</p>
              <h1 id="product-title" className="mt-5 text-[clamp(4.2rem,19vw,12rem)] font-black uppercase leading-[0.72] tracking-[-0.09em]">
                {product.title}
              </h1>
              <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-white/66 sm:text-lg sm:leading-8">
                {product.heroCopy}
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {product.notes.map((note) => (
                  <div key={note} className="border border-white/12 bg-white/[0.025] p-4">
                    <p className="font-mono text-[10px] uppercase leading-5 tracking-[0.16em] text-white/52">{note}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mt-9 grid gap-3 sm:flex sm:flex-wrap">
              <Button size="lg" onClick={() => onJoin(`product-${product.interest}-hero`, product.interest)} className="w-full sm:w-auto">
                Join {product.shortTitle} List
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                <a href="/#proof">View Product Proof</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="brand-container py-8 sm:py-14" aria-labelledby="proof-title">
        <div className="mb-6 grid gap-4 border-t border-white/10 pt-8 lg:grid-cols-[0.8fr_1fr] lg:items-end">
          <div>
            <p className="mono-label">Proof First</p>
            <h2 id="proof-title" className="mt-3 text-[clamp(3.4rem,11vw,7.2rem)] font-black uppercase leading-[0.76] tracking-[-0.085em]">
              No mystery checkout.
            </h2>
          </div>
          <p className="max-w-2xl text-pretty text-base leading-7 text-white/62">
            This page is built to show the piece before payment. Sizing and final product proof will be sent before checkout opens.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {product.gallery.map((image) => (
            <figure key={image.label} className="group overflow-hidden border border-white/12 bg-[#070707] p-3">
              <div className="grid min-h-[260px] place-items-center overflow-hidden bg-[radial-gradient(circle_at_50%_40%,#f4f4f4_0,#dedede_52%,#b8b8b8_100%)] p-4 sm:min-h-[360px]">
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
              <a key={item.slug} href={productHref(item)} className="group grid grid-cols-[96px_1fr] gap-4 border border-white/12 bg-white/[0.025] p-3 transition duration-300 hover:border-white/30 hover:bg-white/[0.045] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
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
