/**
 * Single source of truth for everything below the hero.
 *
 * PHOTOGRAPHY: the project currently ships one hi-res photograph (the hero).
 * Every `img` below is a detail crop from it (public/assets/editorial/*).
 * To use real shoot photography, drop files in public/assets/ and change the
 * path here — no component needs to change.
 *
 * COPY / DETAILS: names, blurbs and store details are placeholders to be
 * replaced with real brand information. Empty `price`, `address`, `hours`
 * and `phone` values simply aren't rendered.
 */
const E = (n) => `/assets/editorial/${n}.jpg`;

export const BRAND = {
  name: 'Bandhani',
  instagramHandle: '@bandhani',          // TODO: real handle
  instagramUrl: 'https://www.instagram.com/', // TODO: real profile URL
  socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/' },
    { label: 'Pinterest', href: 'https://www.pinterest.com/' },
    { label: 'YouTube',   href: 'https://www.youtube.com/' },
    { label: 'WhatsApp',  href: 'https://wa.me/' },
  ],
};

export const COLLECTIONS = [
  { id: 'wedding',  no: '01', title: 'Wedding Edit',    tag: 'Bridal & trousseau',     img: E('bridal-portrait'),   w: 800,  h: 1000, pos: '50% 30%', href: '#wedding'  },
  { id: 'festive',  no: '02', title: 'Festive Wear',    tag: 'Celebrations & occasions', img: E('maroon-drape'),    w: 1200, h: 750,  pos: '50% 50%', href: '#festive'  },
  { id: 'everyday', no: '03', title: 'Everyday Ethnic', tag: 'Considered, wearable',   img: E('pallu-border'),      w: 900,  h: 1125,  pos: '50% 40%', href: '#everyday' },
  { id: 'custom',   no: '04', title: 'Custom Wear',     tag: 'Made to your measure',   img: E('embroidery-lehenga'), w: 1400, h: 667,  pos: '50% 50%', href: '#custom'   },
];

export const CRAFT = {
  hero:  { img: E('craft-wide'), w: 1920, h: 1080 },
  words: ['Zari', 'Resham', 'Zardozi', 'Gota Patti', 'Bandhani', 'Mirror Work'],
  details: [
    { id: 'floral', title: 'Resham florals',   note: 'Silk-thread blossoms stitched by hand, one petal at a time.', img: E('embroidery-floral'),   w: 1200, h: 675 },
    { id: 'border', title: 'Zari borders',     note: 'Metallic thread laid in patient, repeating lines of gold.',    img: E('pallu-border'),         w: 900, h: 1125 },
    { id: 'skirt',  title: 'Beaded fall',      note: 'Pearls and sequins weighted to move with the fabric.',         img: E('embroidery-lehenga'),   w: 1400, h: 667 },
  ],
};

export const PRODUCTS = [
  { id: 'p1', name: 'Gulabi Bridal Lehenga', category: 'Wedding Edit',    price: '', img: E('lehenga-seated'),     w: 1200,  h: 900,  pos: '45% 50%' },
  { id: 'p2', name: 'Zari Border Dupatta',   category: 'Everyday Ethnic', price: '', img: E('pallu-border'),       w: 900,  h: 1125,  pos: '50% 40%' },
  { id: 'p3', name: 'Maroon Silk Drape',     category: 'Festive Wear',    price: '', img: E('maroon-drape'),       w: 1200, h: 750,  pos: '40% 50%' },
  { id: 'p4', name: 'Pearl Fall Skirt',      category: 'Custom Wear',     price: '', img: E('skirt-gold'),         w: 1000,  h: 537,  pos: '50% 50%' },
  { id: 'p5', name: 'Jhumka & Blossom Set',  category: 'Jewellery',       price: '', img: E('jhumka'),             w: 800,  h: 1000,  pos: '50% 35%' },
];

export const STORY = {
  main:  { img: E('story-scene'),   w: 1200, h: 960 },
  inset: { img: E('pallu-border'),  w: 900,  h: 1125 },
};

export const STORES = [
  { id: 'jodhpur',   city: 'Jodhpur',   region: 'Rajasthan', blurb: 'Where our story began — sandstone, lanes of block-print and the first stitch.', img: E('arch-left'),   w: 900,  h: 1125,  pos: '50% 50%', address: '', hours: '', phone: '' },
  { id: 'ahmedabad', city: 'Ahmedabad', region: 'Gujarat',   blurb: 'A boutique shaped by the city’s textile heritage and its love of colour.',      img: E('ivy'),         w: 900,  h: 1125,  pos: '50% 50%', address: '', hours: '', phone: '' },
  { id: 'surat',     city: 'Surat',     region: 'Gujarat',   blurb: 'Silk, zari and celebration — an atelier for the weddings of the season.',       img: E('blossom'),     w: 900,  h: 1125,  pos: '50% 50%', address: '', hours: '', phone: '' },
];

export const INSTAGRAM = [
  { img: E('bridal-portrait'),    w: 800,  h: 1000, span: 'tall' },
  { img: E('embroidery-floral'),  w: 1200,  h: 675,  span: 'wide' },
  { img: E('blossom'),            w: 900,  h: 1125,  span: 'sq'   },
  { img: E('pallu-border'),       w: 900,  h: 1125,  span: 'tall' },
  { img: E('skirt-gold'),         w: 1000,  h: 537,  span: 'sq'   },
  { img: E('maroon-drape'),       w: 1200, h: 750,  span: 'wide' },
  { img: E('jhumka'),             w: 800,  h: 1000,  span: 'sq'   },
];

export const FOOTER_NAV = [
  { label: 'Collections', href: '#collections' },
  { label: 'Craftsmanship', href: '#craft' },
  { label: 'Featured', href: '#featured' },
  { label: 'Our Story', href: '#story' },
  { label: 'Visit Us', href: '#stores' },
];
