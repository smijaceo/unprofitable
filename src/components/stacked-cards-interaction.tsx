import hoodie from '../../assets/drop001-library/HOODIE_FrontBack_LightBg_V02.png';
import tee from '../../assets/drop001-library/TEE_FrontBack_LightBg_V02.png';
import hat from '../../assets/drop001-library/HAT_FrontBack_LightBg_V02.png';
import { Button } from './ui/button';

type Product = {
  index: string;
  name: string;
  title: string;
  copy: string;
  image: string;
  alt: string;
  href: string;
  interest: string;
  tags: string[];
};

const products: Product[] = [
  {
    index: '01 / Hoodie',
    name: 'DISCIPLINED Heavyweight Hoodie',
    title: 'Hoodie',
    copy: 'The anchor piece: black hoodie, white U/P mark, low patch, and DISCIPLINED back artwork.',
    image: hoodie,
    alt: 'DISCIPLINED Heavyweight Hoodie front and back product image',
    href: '/products/disciplined-heavyweight-hoodie.html',
    interest: 'hoodie',
    tags: ['Black garment', 'White artwork', 'Early access']
  },
  {
    index: '02 / Tee',
    name: 'DISCIPLINED Oversized Tee',
    title: 'Tee',
    copy: 'Black tee with the front mark, low patch, and arched DISCIPLINED back artwork.',
    image: tee,
    alt: 'DISCIPLINED Oversized Tee front and back product image',
    href: '/products/disciplined-oversized-tee.html',
    interest: 'tee',
    tags: ['Black garment', 'Back artwork', 'Early access']
  },
  {
    index: '03 / Hat',
    name: 'DISCIPLINED Structured Hat',
    title: 'Hat',
    copy: 'Black cap with front DISCIPLINED embroidery and back UNPROFITABLE stitch.',
    image: hat,
    alt: 'DISCIPLINED Structured Hat front and back product image',
    href: '/products/disciplined-structured-hat.html',
    interest: 'hat',
    tags: ['Black cap', 'Embroidery proof', 'Early access']
  }
];

type Props = {
  onJoin: (source: string, interest?: string) => void;
};

export function StackedCardsInteraction({ onJoin }: Props) {
  return (
    <section id="drop" className="brand-container py-14 sm:py-22 lg:py-24" aria-labelledby="drop-title">
      <div className="mb-8 grid gap-6 border-t border-white/10 pt-10 lg:grid-cols-[1fr_0.56fr] lg:items-end">
        <div>
          <p className="mono-label">DROP 001 CAPSULE</p>
          <h2 id="drop-title" className="mt-4 text-[clamp(3.75rem,15vw,9.5rem)] font-black uppercase leading-[0.78] tracking-[-0.085em]">
            Three Pieces. One Standard.
          </h2>
        </div>
        <p className="max-w-xl text-pretty text-base leading-7 text-white/62 sm:text-lg">
          Hoodie, tee, and hat. A focused blacked-out capsule for the reset.
        </p>
      </div>
      <div className="grid gap-4">
        {products.map((product, index) => (
          <article
            key={product.name}
            className="group relative grid overflow-hidden border border-white/14 bg-[#060606] p-2 shadow-editorial transition duration-300 hover:border-white/28 sm:p-4 lg:sticky lg:min-h-[548px] lg:grid-cols-[0.82fr_1.18fr] lg:gap-5"
            style={{ top: `${82 + index * 18}px` }}
          >
            <div className="pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(circle_at_82%_18%,rgba(255,255,255,.08),transparent_24rem)]" />
            <div className="relative order-2 flex flex-col justify-between p-4 pt-5 sm:p-5 lg:order-1 lg:p-7">
              <div>
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">{product.index}</p>
                <h3 className="mt-3 text-[clamp(3.2rem,15vw,8.4rem)] font-black uppercase leading-[0.76] tracking-[-0.085em] lg:mt-4 lg:text-[clamp(4.2rem,17vw,8.8rem)] lg:leading-[0.72]">{product.title}</h3>
                <p className="mt-4 max-w-md text-pretty text-sm leading-6 text-white/65 sm:text-base lg:mt-6 lg:leading-7">{product.copy}</p>
                <div className="mt-6 grid gap-3 sm:flex sm:flex-wrap lg:mt-7">
                  <Button onClick={() => onJoin(`home-capsule-${product.interest}`, product.interest)} className="w-full sm:w-auto">Join {product.title} List</Button>
                  <Button asChild variant="outline" className="w-full sm:w-auto">
                    <a href={product.href}>Details</a>
                  </Button>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-3 lg:mt-8">
                {product.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-white/12 bg-white/[0.025] px-3 py-3 text-center font-mono text-[10px] uppercase tracking-[0.14em] text-white/50">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={product.href}
              className="relative order-1 grid min-h-[242px] place-items-center overflow-hidden bg-[radial-gradient(circle_at_50%_42%,#f7f7f7_0,#e2e2e2_47%,#bdbdbd_100%)] p-4 transition duration-300 group-hover:brightness-105 sm:min-h-[350px] sm:p-6 lg:order-2 lg:min-h-[516px]"
              aria-label={`View ${product.name} details`}
            >
              <div className="pointer-events-none absolute inset-3 border border-black/8" />
              <img src={product.image} alt={product.alt} loading="eager" decoding="async" className="relative max-h-[232px] w-full object-contain drop-shadow-[0_24px_42px_rgba(0,0,0,.36)] transition duration-500 group-hover:scale-[1.015] sm:max-h-[326px] lg:max-h-[492px]" />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
