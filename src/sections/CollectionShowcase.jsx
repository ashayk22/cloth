import React, { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import useScrollFx from '../lib/useScrollFx';
import Eyebrow from '../components/ui/Eyebrow';
import Lines from '../components/ui/Lines';
import Photo from '../components/ui/Photo';
import { COLLECTIONS } from '../data/content';

/**
 * 01 · Asymmetric editorial grid on ivory.
 * One tall portrait, one wide landscape, one narrow, one square — each with a
 * different aspect ratio and vertical offset so the eye zig-zags down the page.
 */
const LAYOUT = {
  // row A — tall portrait left, shorter landscape right and dropped lower
  wedding:  { cell: 'md:col-span-5',                          ratio: 'aspect-[4/5]',   parallax: 0.05 },
  festive:  { cell: 'md:col-span-6 md:col-start-7 md:mt-[14%]', ratio: 'aspect-[16/10]', parallax: 0.06 },
  // row B — small portrait indented left, wide embroidery panel right
  everyday: { cell: 'md:col-span-3 md:col-start-2 md:-mt-[2%]', ratio: 'aspect-[4/5]',   parallax: 0.04 },
  custom:   { cell: 'md:col-span-7 md:col-start-6 md:mt-[6%]',  ratio: 'aspect-[21/10]', parallax: 0.04 },
};

function Tile({ item }) {
  const L = LAYOUT[item.id];
  return (
    <a href={item.href} className={`group block ${L.cell}`} aria-label={`${item.title} — ${item.tag}`}>
      <div className="relative">
        <Photo
          src={item.img} alt={item.title} w={item.w} h={item.h}
          className={`${L.ratio} w-full`} parallax={L.parallax} position={item.pos}
          imgClassName="transition-transform duration-[1400ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.07]"
        />
        {/* hover: burgundy wash + inset gold keyline + "View" chip */}
        <span aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[#2a0a12]/0 transition-colors duration-700 group-hover:bg-[#2a0a12]/35" />
        <span aria-hidden="true" className="pointer-events-none absolute inset-4 border border-[#dfbd87]/0 scale-[1.04] transition-all duration-700 ease-out group-hover:border-[#dfbd87]/80 group-hover:scale-100" />
        <span aria-hidden="true" className="pointer-events-none absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#f4ece0] text-[#3a0f1a] opacity-0 translate-y-3 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
          <ArrowUpRight className="h-5 w-5" strokeWidth={1.5} />
        </span>
      </div>

      <div className="mt-5 flex items-baseline justify-between gap-4 border-b border-[#3a0f1a]/15 pb-4">
        <div className="flex items-baseline gap-4">
          <span className="font-sans-ui text-[11px] tracking-[0.2em] text-[#8a5a3c]">{item.no}</span>
          <h3 className="font-editorial text-[clamp(26px,2.4vw,38px)] leading-none text-[#3a0f1a] transition-transform duration-500 group-hover:translate-x-2">
            {item.title}
          </h3>
        </div>
        <span className="hidden sm:block font-sans-ui text-[11px] uppercase tracking-[0.18em] text-[#3a0f1a]/55 text-right">{item.tag}</span>
      </div>
    </a>
  );
}

export default function CollectionShowcase() {
  const root = useRef(null);
  useScrollFx(root);

  return (
    <section id="collections" ref={root} className="relative bg-[#f4ece0] text-[#3a0f1a] [overflow-x:clip] py-[clamp(72px,11vw,170px)]">
      {/* Hand-off from the pinned hero: starts at the hero's closing #120708 and melts into the ivory. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[clamp(72px,9vw,140px)] bg-gradient-to-b from-[#120708] to-[#120708]/0" />
      <div className="relative mx-auto w-full max-w-[1720px] px-6 sm:px-12 lg:px-16 xl:px-20">
        <header className="mb-[clamp(48px,7vw,110px)] grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <Eyebrow tone="burgundy" className="mb-6">The Collections</Eyebrow>
            <Lines
              lines={['Four ways to wear', <em key="e" className="italic">a heritage.</em>]}
              className="font-editorial text-[clamp(44px,6.6vw,112px)] leading-[0.95] tracking-[-0.01em]"
            />
          </div>
          <p data-reveal className="md:col-span-3 md:col-start-10 font-sans-ui font-light text-[14px] xl:text-[15px] leading-[1.75] text-[#3a0f1a]/75 max-w-sm">
            From the bride’s first fitting to the quiet elegance of a Tuesday — each edit is cut, embroidered and finished by hand.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-x-6 gap-y-14 md:grid-cols-12 md:gap-y-14 md:items-start">
          {COLLECTIONS.map((c) => <Tile key={c.id} item={c} />)}
        </div>
      </div>
    </section>
  );
}
