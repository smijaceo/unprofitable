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
    copy: 'Oversized black tee with the front mark, low patch, and arched DISCIPLINED back artwork.',
    image: tee,
    alt: 'DISCIPLINED Oversized Tee front and back product image',
    href: '/products/disciplined-oversized-tee.html',
    interest: 'tee',
    tags: ['Oversized fit', 'Back print', 'Early access']
  },
  {
    index: '03 / Hat',
    name: 'DISCIPLINED Structured Hat',
    title: 'Hat',
    copy: 'Structured black cap with front DISCIPLINED embroidery and back UNPROFITABLE stitch.',
    image: hat,
    alt: 'DISCIPLINED Structured Hat front and back product image',
    href: '/products/disciplined-structured-hat.html',
    interest: 'hat',
    tags: ['Structured cap', 'Embroidery proof', 'Early access']
  }
];

type Props = {
  onJoin: (source: string, interest?: string) => void;
};

export function StackedCardsInteraction({ onJoin }: Props) {
  return (
    <section id="drop" className="brand-container py-16 sm:py-24" aria-labelledby="drop-title">
      <div className="mb-9 grid gap-6 lg:grid-cols-[1fr_0.56fr] lg:items-end">
        <div>
          <p className="mono-label">DROP 001 CAPSULE</p>
          <h2 id="drop-title" className="mt-4 text-[clamp(3.8rem,15vw,10rem)] font-black uppercase leading-[0.78] tracking-[-0.085em]">
            Three Pieces. One Standard.
          </h2>
        </div>
        <p className="max-w-xl text-pretty text-base leading-7 text-white/62 sm:text-lg">
          Hoodie, tee, and hat. A focused blacked-out capsule for the reset.
        </p>
      </div>
      <div className="grid gap-5">
        {products.map((product, index) => (
          <article
            key={product.name}
            className="sticky top-[82px] grid min-h-[560px] overflow-hidden border border-white/14 bg-[linear-gradient(135deg,#070707,#151515_52%,#020202)] p-3 shadow-editorial sm:p-5 lg:grid-cols-[0.85fr_1.15fr] lg:gap-6"
            style={{ top: `${82 + index * 18}px` }}
          >
            <div className="order-2 flex flex-col justify-between p-3 sm:p-5 lg:order-1">
              <div>
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/45">{product.index}</p>
                <h3 className="mt-4 text-[clamp(4.4rem,18vw,9rem)] font-black uppercase leading-[0.72] tracking-[-0.085em]">{product.title}</h3>
                <p className="mt-6 max-w-md text-pretty text-base leading-7 text-white/65">{product.copy}</p>
                <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap">
                  <Button onClick={() => onJoin(`home-capsule-${product.interest}`, product.interest)} className="w-full sm:w-auto">Join {product.title} List</Button>
                  <Button asChild variant="outline" className="w-full sm:w-auto">
                    <a href={product.href}>Details</a>
                  </Button>
                </div>
              </div>
              <div className="mt-8 grid grid-cols-1 gap-2 sm:grid-cols-3">
                {product.tags.map((tag) => (
                  <span key={tag} className="border border-white/12 px-3 py-3 text-center font-mono text-[10px] uppercase tracking-[0.14em] text-white/50">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={product.href}
              className="order-1 grid min-h-[330px] place-items-center overflow-hidden bg-[radial-gradient(circle_at_50%_42%,#fff_0,#e9e9e9_46%,#cacaca_100%)] p-5 lg:order-2 lg:min-h-[520px]"
              aria-label={`View ${product.name} details`}
            >
              <img src={product.image} alt={product.alt} loading="eager" decoding="async" className="max-h-[310px] w-full object-contain drop-shadow-[0_24px_42px_rgba(0,0,0,.36)] lg:max-h-[500px]" />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
