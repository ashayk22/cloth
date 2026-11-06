import React, { useRef } from 'react';
import useScrollFx from '../lib/useScrollFx';
import Eyebrow from '../components/ui/Eyebrow';
import Lines from '../components/ui/Lines';
import ArrowLink from '../components/ui/ArrowLink';
import { BRAND, INSTAGRAM } from '../data/content';

export function InstagramIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.4" cy="6.6" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

/**
 * 06 · Tight, gutter-less collage on a 6-column grid. Tile shapes (tall / wide /
 * square) interlock to fill 6×3 exactly; the ninth tile is the follow CTA.
 */
const SPAN = {
  tall: 'row-span-2',
  wide: 'col-span-2',
  sq:   '',
};

export default function InstagramGallery() {
  const root = useRef(null);
  useScrollFx(root);

  return (
    <section id="instagram" ref={root} className="relative bg-[#f4ece0] text-[#3a0f1a] [overflow-x:clip] py-[clamp(72px,11vw,170px)]">
      <div className="mx-auto w-full max-w-[1720px] px-6 sm:px-12 lg:px-16 xl:px-20">
        <header className="mb-[clamp(36px,5vw,80px)] flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow tone="burgundy" className="mb-6">{BRAND.instagramHandle}</Eyebrow>
            <Lines
              lines={['Follow our', <em key="e" className="italic">journey.</em>]}
              className="font-editorial text-[clamp(44px,6.6vw,112px)] leading-[0.95] tracking-[-0.01em]"
            />
          </div>
          <div data-reveal>
            <ArrowLink href={BRAND.instagramUrl} tone="dark">Follow Our Journey</ArrowLink>
          </div>
        </header>

        <div
          data-reveal-stagger
          className="grid grid-cols-2 [grid-auto-flow:dense] auto-rows-[44vw] gap-1.5 sm:gap-2 md:grid-cols-6 md:auto-rows-[clamp(150px,15vw,260px)]"
        >
          {INSTAGRAM.map((t, i) => (
            <a
              key={i} href={BRAND.instagramUrl} target="_blank" rel="noopener noreferrer"
              aria-label={`View on Instagram, post ${i + 1}`}
              className={`group relative overflow-hidden bg-[#1a0b0e] ${SPAN[t.span]} ${t.span === 'wide' ? 'col-span-2' : ''}`}
            >
              <img
                src={t.img} alt="" width={t.w} height={t.h} loading="lazy" decoding="async"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.08]"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-[#2a0a12]/0 text-[#f4ece0] opacity-0 transition-all duration-500 group-hover:bg-[#2a0a12]/55 group-hover:opacity-100">
                <InstagramIcon className="h-7 w-7 translate-y-2 transition-transform duration-500 group-hover:translate-y-0" />
              </span>
            </a>
          ))}

          {/* CTA tile completes the grid */}
          <a
            href={BRAND.instagramUrl} target="_blank" rel="noopener noreferrer"
            className="group relative flex flex-col items-center justify-center gap-3 bg-[#2a0a12] p-4 text-center text-[#f4ece0] transition-colors duration-500 hover:bg-[#3a0f1a]"
          >
            <InstagramIcon className="h-7 w-7 text-[#dfbd87]" />
            <span className="font-editorial italic text-[clamp(20px,1.9vw,30px)] leading-tight">Follow Our<br />Journey</span>
          </a>
        </div>
      </div>
    </section>
  );
}
