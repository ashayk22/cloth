import React, { useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import useScrollFx from '../lib/useScrollFx';
import Eyebrow from '../components/ui/Eyebrow';
import Lines from '../components/ui/Lines';
import { PRODUCTS } from '../data/content';

/**
 * 03 · A "lookbook index": a sticky photograph on the left that cross-fades as
 * you move through a typographic list on the right. No cards, no grid of
 * thumbnails — the names are the interface.
 */
export default function FeaturedCollection() {
  const root = useRef(null);
  const [active, setActive] = useState(0);
  useScrollFx(root);

  return (
    <section id="featured" ref={root} className="relative bg-[#120708] text-[#fbf7f0] [overflow-x:clip] py-[clamp(72px,11vw,170px)]">
      <div className="mx-auto w-full max-w-[1720px] px-6 sm:px-12 lg:px-16 xl:px-20">
        <header className="mb-[clamp(40px,6vw,96px)] flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow className="mb-6">Featured Collection</Eyebrow>
            <Lines
              lines={['The season’s', <em key="e" className="italic">chosen pieces.</em>]}
              className="font-editorial text-[clamp(44px,6vw,100px)] leading-[0.95] tracking-[-0.01em]"
            />
          </div>
          <p data-reveal className="max-w-xs font-sans-ui font-light text-[14px] leading-[1.75] text-[#fbf7f0]/60">
            Each piece is made in limited runs. Visit a boutique or write to us to enquire.
          </p>
        </header>

        <div className="grid gap-10 md:grid-cols-12 md:gap-x-10">
          {/* sticky photograph (desktop) */}
          <div className="hidden md:col-span-5 md:block">
            <div className="sticky top-24">
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#1a0b0e]">
                {PRODUCTS.map((p, i) => (
                  <img
                    key={p.id} src={p.img} alt={p.name} width={p.w} height={p.h}
                    loading="lazy" decoding="async"
                    style={{ objectPosition: p.pos }}
                    className={`absolute inset-0 h-full w-full object-cover transition-all duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)] ${
                      i === active ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.08]'
                    }`}
                  />
                ))}
                <span aria-hidden="true" className="pointer-events-none absolute inset-4 border border-[#dfbd87]/40" />
              </div>
              <div className="mt-4 flex items-center justify-between font-sans-ui text-[11px] uppercase tracking-[0.2em] text-[#dfbd87]">
                <span>{String(active + 1).padStart(2, '0')} / {String(PRODUCTS.length).padStart(2, '0')}</span>
                <span className="text-[#fbf7f0]/50">{PRODUCTS[active].category}</span>
              </div>
            </div>
          </div>

          {/* typographic list */}
          <ul data-reveal-stagger className="md:col-span-7 md:col-start-6 border-t border-[#fbf7f0]/15">
            {PRODUCTS.map((p, i) => (
              <li key={p.id} className="border-b border-[#fbf7f0]/15">
                <a
                  href="#enquire"
                  onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)}
                  className="group grid grid-cols-[auto_1fr_auto] items-center gap-x-5 gap-y-1 py-[clamp(20px,2.6vw,38px)] sm:gap-x-8"
                >
                  {/* mobile thumbnail replaces the sticky image */}
                  <img src={p.img} alt="" width={p.w} height={p.h} loading="lazy" decoding="async"
                       style={{ objectPosition: p.pos }}
                       className="h-20 w-16 object-cover md:hidden" />
                  <span className="hidden md:block font-sans-ui text-[11px] tracking-[0.2em] text-[#dfbd87]">{String(i + 1).padStart(2, '0')}</span>

                  <div className="min-w-0 transition-transform duration-500 ease-out group-hover:translate-x-3">
                    <h3 className={`font-editorial leading-[1.02] text-[clamp(28px,3.6vw,60px)] transition-colors duration-500 ${i === active ? 'text-[#fbf7f0]' : 'md:text-[#fbf7f0]/45'} group-hover:text-[#fbf7f0]`}>
                      {p.name}
                    </h3>
                    <p className="mt-1.5 font-sans-ui text-[11px] uppercase tracking-[0.2em] text-[#d6b07c]">{p.category}</p>
                  </div>

                  <div className="flex items-center gap-4 text-right">
                    <span className="hidden sm:block font-sans-ui text-[13px] text-[#fbf7f0]/70">
                      {p.price || 'Price on request'}
                    </span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#dfbd87]/40 text-[#dfbd87] transition-all duration-500 group-hover:bg-[#dfbd87] group-hover:text-[#1a0f0d]">
                      <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
