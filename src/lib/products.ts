import hoodieImage from '../../assets/drop001-library/HOODIE_FrontBack_LightBg_V02.webp';
import hoodieBack from '../../assets/drop001-library/HOODIE_Back_LightBg_V01.webp';
import hoodieDetail from '../../assets/drop001-library/FIT_DetailGrid_HoodieTee_V01.webp';
import teeImage from '../../assets/drop001-library/TEE_FrontBack_LightBg_V02.webp';
import teeBack from '../../assets/drop001-library/TEE_Back_LightBg_V01.webp';
import teeDetail from '../../assets/drop001-library/BACKPRINT_Closeups_Hoodie_Tee_V01.webp';
import hatImage from '../../assets/drop001-library/HAT_FrontBack_LightBg_V02.webp';
import hatDetail from '../../assets/drop001-library/HAT_Embroidery_FrontSideBack_V01.webp';
import hatSide from '../../assets/drop001-library/HAT_FrontBack_LightBg_V01.webp';

export type ProductInterest = 'hoodie' | 'tee' | 'hat';

export type DropProduct = {
  index: string;
  slug: string;
  interest: ProductInterest;
  title: string;
  shortTitle: string;
  eyebrow: string;
  name: string;
  copy: string;
  heroCopy: string;
  image: string;
  alt: string;
  gallery: { src: string; alt: string; label: string }[];
  tags: string[];
  notes: string[];
};

export const products: DropProduct[] = [
  {
    index: '01 / Hoodie',
    slug: 'disciplined-heavyweight-hoodie',
    interest: 'hoodie',
    title: 'Hoodie',
    shortTitle: 'Hoodie',
    eyebrow: 'DISCIPLINED Heavyweight Hoodie',
    name: 'DISCIPLINED Heavyweight Hoodie',
    copy: 'The anchor piece: black hoodie, white U/P mark, low patch, and DISCIPLINED back artwork.',
    heroCopy: 'A blacked-out hero layer for people rebuilding their standards. Final sizing and product proof go to the list before checkout opens.',
    image: hoodieImage,
    alt: 'DISCIPLINED Heavyweight Hoodie front and back product image',
    gallery: [
      { src: hoodieImage, alt: 'DISCIPLINED Heavyweight Hoodie front and back', label: 'Front / Back' },
      { src: hoodieBack, alt: 'DISCIPLINED Heavyweight Hoodie back artwork', label: 'Back Artwork' },
      { src: hoodieDetail, alt: 'Drop 001 hoodie and tee fit detail reference', label: 'Fit References' }
    ],
    tags: ['Black garment', 'White artwork', 'Early access'],
    notes: ['Sizing confirmed before checkout', 'Product proof before payment', 'Drop-list first access']
  },
  {
    index: '02 / Tee',
    slug: 'disciplined-oversized-tee',
    interest: 'tee',
    title: 'Tee',
    shortTitle: 'Tee',
    eyebrow: 'DISCIPLINED Oversized Tee',
    name: 'DISCIPLINED Oversized Tee',
    copy: 'Black tee with the front mark, low patch, and arched DISCIPLINED back artwork.',
    heroCopy: 'The daily uniform piece: clean front mark, DISCIPLINED back graphic, and proof-first launch path.',
    image: teeImage,
    alt: 'DISCIPLINED Oversized Tee front and back product image',
    gallery: [
      { src: teeImage, alt: 'DISCIPLINED Oversized Tee front and back', label: 'Front / Back' },
      { src: teeBack, alt: 'DISCIPLINED Oversized Tee back artwork', label: 'Back Artwork' },
      { src: teeDetail, alt: 'DISCIPLINED back print closeups for hoodie and tee', label: 'Print Detail' }
    ],
    tags: ['Black garment', 'Back artwork', 'Early access'],
    notes: ['Sizing confirmed before checkout', 'Product proof before payment', 'Drop-list first access']
  },
  {
    index: '03 / Hat',
    slug: 'disciplined-structured-hat',
    interest: 'hat',
    title: 'Hat',
    shortTitle: 'Hat',
    eyebrow: 'DISCIPLINED Structured Hat',
    name: 'DISCIPLINED Structured Hat',
    copy: 'Black cap with front DISCIPLINED embroidery and back UNPROFITABLE stitch.',
    heroCopy: 'The quiet signal piece for the capsule: structured black cap, front embroidery, and back branding proof.',
    image: hatImage,
    alt: 'DISCIPLINED Structured Hat front and back product image',
    gallery: [
      { src: hatImage, alt: 'DISCIPLINED Structured Hat front and back', label: 'Front / Back' },
      { src: hatDetail, alt: 'DISCIPLINED Structured Hat embroidery references', label: 'Embroidery' },
      { src: hatSide, alt: 'DISCIPLINED Structured Hat additional product view', label: 'Product Views' }
    ],
    tags: ['Black cap', 'Embroidery proof', 'Early access'],
    notes: ['Product proof before checkout', 'Embroidery reference before payment', 'Drop-list first access']
  }
];

export function productHref(product: Pick<DropProduct, 'slug'>) {
  return `/products/${product.slug}`;
}

export function productBySlug(slug?: string) {
  return products.find((product) => product.slug === slug);
}
