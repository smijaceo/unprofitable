import hoodieImage from '../../assets/drop001-library/HOODIE_FrontBack_LightBg_V02.webp';
import hoodieBack from '../../assets/drop001-library/HOODIE_Back_LightBg_V01.webp';
import hoodieDetail from '../../assets/drop001-library/BACKPRINT_Closeups_Hoodie_Tee_V01.webp';
import teeImage from '../../assets/drop001-library/TEE_FrontBack_LightBg_V02.webp';
import teeBack from '../../assets/drop001-library/TEE_Back_LightBg_V01.webp';
import teeDetail from '../../assets/drop001-library/BACKPRINT_Closeups_Hoodie_Tee_V01.webp';
import hatImage from '../../assets/drop001-library/HAT_FrontBack_LightBg_V02.webp';
import hatDetail from '../../assets/drop001-library/HAT_Embroidery_FrontSideBack_V01.webp';
import hatSide from '../../assets/drop001-library/HAT_FrontBack_LightBg_V01.webp';
import hatFrontHero from '../../assets/drop001-library/HAT_Front_LightBg_V01.png';
import hatBackHero from '../../assets/drop001-library/HAT_Back_LightBg_V01.png';
import hatRightHero from '../../assets/drop001-library/HAT_Right_LightBg_V01.png';

export type ProductInterest = 'hoodie' | 'tee' | 'hat';

export type SizeRow = {
  size: string;
  lengthIn: string; lengthCm: string;
  chestIn: string; chestCm: string;
  shoulderIn: string; shoulderCm: string;
  sleeveIn: string; sleeveCm: string;
  height: string;
  weight: string;
};

export type SizeGuide = {
  fitLabel: string;
  findCopy: string;
  note: string;
  finePrint: string;
  rows: SizeRow[];
};

const SIZE_FINE_PRINT =
  'Garment measured flat, by hand. Allow about 1". Height and weight are a guide, not a rule.';

const hoodieSizeGuide: SizeGuide = {
  fitLabel: 'Oversized gym fit · inches (cm)',
  findCopy:
    "Don't guess off height. Lay a hoodie you already own flat, measure straight across the chest (pit to pit), and match the Chest column. That's your size.",
  note: 'Built to wear heavy. Between sizes? Size down for a cleaner cut, stay true to wear it oversized.',
  finePrint: SIZE_FINE_PRINT,
  rows: [
    { size: 'S', lengthIn: '27.2"', lengthCm: '69 cm', chestIn: '25.6"', chestCm: '65 cm', shoulderIn: '25.2"', shoulderCm: '64 cm', sleeveIn: '21.7"', sleeveCm: '55 cm', height: '5\'3"-5\'7"', weight: '100-120 lb' },
    { size: 'M', lengthIn: '28.0"', lengthCm: '71 cm', chestIn: '26.4"', chestCm: '67 cm', shoulderIn: '26.0"', shoulderCm: '66 cm', sleeveIn: '22.0"', sleeveCm: '56 cm', height: '5\'7"-5\'9"', weight: '120-145 lb' },
    { size: 'L', lengthIn: '28.7"', lengthCm: '73 cm', chestIn: '27.2"', chestCm: '69 cm', shoulderIn: '26.8"', shoulderCm: '68 cm', sleeveIn: '22.4"', sleeveCm: '57 cm', height: '5\'9"-5\'11"', weight: '130-165 lb' },
    { size: 'XL', lengthIn: '29.5"', lengthCm: '75 cm', chestIn: '28.0"', chestCm: '71 cm', shoulderIn: '27.6"', shoulderCm: '70 cm', sleeveIn: '22.8"', sleeveCm: '58 cm', height: '5\'9"-6\'1"', weight: '155-185 lb' },
    { size: 'XXL', lengthIn: '30.3"', lengthCm: '77 cm', chestIn: '28.7"', chestCm: '73 cm', shoulderIn: '28.3"', shoulderCm: '72 cm', sleeveIn: '23.2"', sleeveCm: '59 cm', height: '5\'11"-6\'5"', weight: '165-200 lb' }
  ]
};

const teeSizeGuide: SizeGuide = {
  fitLabel: 'Oversized, process-first · inches (cm)',
  findCopy:
    "Don't guess off height. Lay a tee you already own flat, measure straight across the chest (pit to pit), and match the Chest column. That's your size.",
  note: 'A simple tee until you look at the details. Wears oversized. Between sizes? Size down for a cleaner cut, stay true for the drop fit.',
  finePrint: SIZE_FINE_PRINT,
  rows: [
    { size: 'XS', lengthIn: '28.3"', lengthCm: '72 cm', chestIn: '22.0"', chestCm: '56 cm', shoulderIn: '21.7"', shoulderCm: '55 cm', sleeveIn: '9.1"', sleeveCm: '23 cm', height: '5\'3"-5\'5"', weight: '90-110 lb' },
    { size: 'S', lengthIn: '29.1"', lengthCm: '74 cm', chestIn: '22.8"', chestCm: '58 cm', shoulderIn: '22.2"', shoulderCm: '56.5 cm', sleeveIn: '9.3"', sleeveCm: '23.5 cm', height: '5\'5"-5\'7"', weight: '100-120 lb' },
    { size: 'M', lengthIn: '29.9"', lengthCm: '76 cm', chestIn: '23.6"', chestCm: '60 cm', shoulderIn: '22.8"', shoulderCm: '58 cm', sleeveIn: '9.4"', sleeveCm: '24 cm', height: '5\'5"-5\'9"', weight: '120-145 lb' },
    { size: 'L', lengthIn: '30.7"', lengthCm: '78 cm', chestIn: '24.4"', chestCm: '62 cm', shoulderIn: '23.4"', shoulderCm: '59.5 cm', sleeveIn: '9.6"', sleeveCm: '24.5 cm', height: '5\'7"-5\'11"', weight: '130-165 lb' },
    { size: 'XL', lengthIn: '31.5"', lengthCm: '80 cm', chestIn: '25.2"', chestCm: '64 cm', shoulderIn: '24.0"', shoulderCm: '61 cm', sleeveIn: '9.8"', sleeveCm: '25 cm', height: '5\'9"-6\'1"', weight: '155-185 lb' },
    { size: 'XXL', lengthIn: '32.3"', lengthCm: '82 cm', chestIn: '26.0"', chestCm: '66 cm', shoulderIn: '24.6"', shoulderCm: '62.5 cm', sleeveIn: '10.0"', sleeveCm: '25.5 cm', height: '5\'11"-6\'3"', weight: '175-200 lb' }
  ]
};

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
  heroGallery?: { src: string; alt: string; label: string }[];
  tags: string[];
  notes: string[];
  sizeGuide?: SizeGuide;
};

export const products: DropProduct[] = [
  {
    index: '01 / HOODIE',
    slug: 'disciplined-heavyweight-hoodie',
    interest: 'hoodie',
    title: 'Hoodie',
    shortTitle: 'Hoodie',
    eyebrow: 'DISCIPLINED HEAVYWEIGHT HOODIE',
    name: 'DISCIPLINED Heavyweight Hoodie',
    copy: 'The anchor piece: black hoodie, white U/P mark, low patch, and DISCIPLINED back artwork.',
    heroCopy: 'A blacked-out hero layer for people rebuilding their standards. Final sizing and product proof go to the list before checkout opens.',
    image: hoodieImage,
    alt: 'DISCIPLINED Heavyweight Hoodie front and back product image',
    gallery: [
      { src: hoodieImage, alt: 'DISCIPLINED Heavyweight Hoodie front and back', label: 'Front / Back' },
      { src: hoodieBack, alt: 'DISCIPLINED Heavyweight Hoodie back artwork', label: 'Back Artwork' },
      { src: hoodieDetail, alt: 'DISCIPLINED Heavyweight Hoodie back print closeup detail', label: 'Print Detail' }
    ],
    tags: ['Black garment', 'White artwork', 'Early access'],
    notes: ['Sizing confirmed before checkout', 'Product proof before payment', 'Drop-list first access'],
    sizeGuide: hoodieSizeGuide
  },
  {
    index: '02 / TEE',
    slug: 'disciplined-oversized-tee',
    interest: 'tee',
    title: 'Tee',
    shortTitle: 'Tee',
    eyebrow: 'DISCIPLINED OVERSIZED TEE',
    name: 'DISCIPLINED Oversized Tee',
    copy: 'Black tee with the front mark, low patch, and arched DISCIPLINED back artwork.',
    heroCopy: 'A blacked-out daily layer cut for the reset. Final sizing and product proof go to the list before checkout opens.',
    image: teeImage,
    alt: 'DISCIPLINED Oversized Tee front and back product image',
    gallery: [
      { src: teeImage, alt: 'DISCIPLINED Oversized Tee front and back', label: 'Front / Back' },
      { src: teeBack, alt: 'DISCIPLINED Oversized Tee back artwork', label: 'Back Artwork' },
      { src: teeDetail, alt: 'DISCIPLINED back print closeups for hoodie and tee', label: 'Print Detail' }
    ],
    tags: ['Black garment', 'Back artwork', 'Early access'],
    notes: ['Sizing confirmed before checkout', 'Product proof before payment', 'Drop-list first access'],
    sizeGuide: teeSizeGuide
  },
  {
    index: '03 / HAT',
    slug: 'disciplined-structured-hat',
    interest: 'hat',
    title: 'Hat',
    shortTitle: 'Hat',
    eyebrow: 'DISCIPLINED STRUCTURED HAT',
    name: 'DISCIPLINED Structured Hat',
    copy: 'Black cap with front DISCIPLINED embroidery and back UNPROFITABLE stitch.',
    heroCopy: 'A structured black cap for keeping the standard visible. Final fit details and product proof go to the list before checkout opens.',
    image: hatImage,
    alt: 'DISCIPLINED Structured Hat front and back product image',
    gallery: [
      { src: hatImage, alt: 'DISCIPLINED Structured Hat front and back', label: 'Front / Back' },
      { src: hatDetail, alt: 'DISCIPLINED Structured Hat embroidery references', label: 'Embroidery' },
      { src: hatSide, alt: 'DISCIPLINED Structured Hat additional product view', label: 'Product Views' }
    ],
    heroGallery: [
      { src: hatFrontHero, alt: 'DISCIPLINED Structured Hat front embroidery', label: 'Front Embroidery' },
      { src: hatBackHero, alt: 'DISCIPLINED Structured Hat back embroidery', label: 'Back Embroidery' },
      { src: hatRightHero, alt: 'DISCIPLINED Structured Hat side profile', label: 'Side Profile' }
    ],
    tags: ['Black cap', 'Embroidery proof', 'Early access'],
    notes: ['Fit details before checkout', 'Product proof before payment', 'Drop-list first access']
  }
];

export function productHref(product: Pick<DropProduct, 'slug'>) {
  return `/products/${product.slug}`;
}

export function productBySlug(slug?: string) {
  return products.find((product) => product.slug === slug);
}
