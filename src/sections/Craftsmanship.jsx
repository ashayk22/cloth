import React, { useCallback, useRef } from 'react';
import useScrollFx from '../lib/useScrollFx';
import Eyebrow from '../components/ui/Eyebrow';
import Lines from '../components/ui/Lines';
import Photo from '../components/ui/Photo';
import { CRAFT } from '../data/content';

/**
 * 02 · Full-bleed immersive photograph with oversized type, a scrubbed
 * outline-type ticker, and three embroidery details at staggered heights.
 */
const DETAIL_LAYOUT = [
  { cell: 'md:col-span-6',               ratio: 'aspect-[16/9]', mt: 'md:mt-0'  },
  { cell: 'md:col-span-2 md:col-start-8', ratio: 'aspect-[3/4]',  mt: 'md:mt-28' },
  { cell: 'md:col-span-3 md:col-start-10', ratio: 'aspect-[4/3]',  mt: 'md:mt-10' },
];

export default function Craftsmanship() {
  const root = useRef(null);
  const tickerRef = useRef(null);

  // ticker slides sideways as the section scrolls (scrubbed, transform only)
  const extra = useCallback((gsap) => {
    if (!tickerRef.current) return;
    gsap.fromTo(tickerRef.current, { xPercent: 0 }, {
      xPercent: -38, ease: 'none',
      scrollTrigger: { trigger: tickerRef.current, start: 'top bottom', end: 'bottom top', scrub: 0.8 },
    });
  }, []);
  useScrollFx(root, extra);

  return (
    <section id="craft" ref={root} className="relative bg-[#2a0a12] text-[#fbf7f0] [overflow-x:clip]">
      {/* ── immersive photograph + oversized headline ── */}
      <div className="relative min-h-[clamp(560px,92vh,960px)] overflow-hidden">
        <Photo
          src={CRAFT.hero.img} alt="Hand-embroidered lehenga fabric in warm light"
          w={CRAFT.hero.w} h={CRAFT.hero.h} reveal={false} parallax={0.07}
          className="absolute inset-0" position="60% 50%"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-[#1a0509]/45" />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#2a0a12] to-transparent" />

        <div className="relative mx-auto flex min-h-[inherit] w-full max-w-[1720px] flex-col justify-end px-6 pb-[clamp(48px,8vw,120px)] pt-32 sm:px-12 lg:px-16 xl:px-20">
          <Eyebrow className="mb-8">Craftsmanship</Eyebrow>
          <Lines
            lines={['Every Thread', <em key="e" className="italic text-[#dfbd87]">Tells a Story.</em>]}
            className="font-editorial text-[clamp(44px,11.2vw,210px)] leading-[0.86] tracking-[-0.02em]"
          />
        </div>
      </div>

      {/* ── scrubbed outline ticker ── */}
      <div aria-hidden="true" className="select-none overflow-hidden py-[clamp(28px,4vw,64px)]">
        <div ref={tickerRef} className="flex w-max items-center gap-[4vw] whitespace-nowrap font-editorial italic text-[clamp(56px,9vw,150px)] leading-none will-change-transform">
          {[...CRAFT.words, ...CRAFT.words].map((w, i) => (
            <React.Fragment key={i}>
              <span className="[-webkit-text-stroke:1px_rgba(223,189,135,.7)] text-transparent">{w}</span>
              <span className="h-2 w-2 rotate-45 bg-[#dfbd87]/80" />
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ── embroidery details ── */}
      <div className="mx-auto w-full max-w-[1720px] px-6 pb-[clamp(72px,10vw,160px)] pt-[clamp(24px,4vw,64px)] sm:px-12 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-12">
          {CRAFT.details.map((d, i) => {
            const L = DETAIL_LAYOUT[i];
            return (
              <figure key={d.id} className={`group ${L.cell} ${L.mt}`}>
                <Photo
                  src={d.img} alt={d.title} w={d.w} h={d.h} className={`${L.ratio} w-full`}
                  imgClassName="transition-transform duration-[1600ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.08]"
                />
                <figcaption data-reveal className="mt-5 max-w-xs">
                  <div className="flex items-center gap-3">
                    <span className="font-sans-ui text-[11px] tracking-[0.2em] text-[#dfbd87]">0{i + 1}</span>
                    <span className="h-px w-8 bg-[#dfbd87]/50 transition-all duration-500 group-hover:w-14" />
                  </div>
                  <h3 className="mt-3 font-editorial text-[clamp(24px,2vw,32px)] leading-tight">{d.title}</h3>
                  <p className="mt-2 font-sans-ui font-light text-[13.5px] leading-[1.7] text-[#fbf7f0]/65">{d.note}</p>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
