import React from 'react';

/**
 * Left editorial column. Plain document flow (flex column) — every block owns
 * its own spacing, so nothing can overlap regardless of viewport size.
 */
export default function HeroContent() {
  return (
    <div className="hero__copy">
      {/* Eyebrow */}
      <div className="anim-eyebrow flex items-center gap-3 mb-4 md:mb-5">
        <span className="font-sans-ui uppercase font-medium text-[#d6b07c] whitespace-nowrap text-[10px] md:text-[11px] xl:text-[11.5px] tracking-[0.2em] md:tracking-[0.26em]">
          The Art of Indian Dressing
        </span>
        <span aria-hidden="true" className="block h-px w-7 shrink-0 bg-[#d6b07c]/75" />
      </div>

      {/* Headline — two lines, Cormorant Garamond */}
      <h1
        className="anim-headline font-editorial m-0 p-0 text-[#fdfbf7] font-normal text-[clamp(40px,11vw,52px)] md:text-[clamp(52px,5.85vw,98px)]"
        style={{
          lineHeight: 0.98,
          letterSpacing: '-0.005em',
        }}
      >
        <span className="block whitespace-nowrap">Timeless</span>
        <span className="block whitespace-nowrap">
          <em className="italic font-normal">Indian</em> Elegance.
        </span>
      </h1>

      {/* Gold calligraphic flourish (gradient uses userSpaceOnUse so it renders) */}
      <div
        aria-hidden="true"
        className="anim-flourish pointer-events-none mb-4 md:mb-6"
        style={{ width: 'clamp(180px, 23.8vw, 400px)', transformOrigin: 'left center' }}
      >
        <svg viewBox="0 0 352 30" className="block w-full h-auto" fill="none">
          <defs>
            <linearGradient id="flourish-grad" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="352" y2="0">
              <stop offset="0"    stopColor="#f0d9a8" stopOpacity="0.35" />
              <stop offset="0.18" stopColor="#f3d99a" />
              <stop offset="0.6"  stopColor="#d4af6a" />
              <stop offset="1"    stopColor="#c89f55" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <path
            d="M0 4 C50 20 120 27 200 21 C270 16 320 8 352 2 C318 9 268 19 200 25 C120 31 46 25 0 4 Z"
            fill="url(#flourish-grad)"
          />
        </svg>
      </div>

      {/* Description */}
      <p className="anim-desc font-sans-ui font-light text-[#d9cbbd] text-[13.5px] md:text-[14px] xl:text-[15px] leading-[1.6] md:leading-[1.65] max-w-[26rem] mb-6 md:mb-8">
        An expression of heritage, craftsmanship<br />
        and contemporary Indian dressing.
      </p>

      {/* CTAs — flex row below the description; wraps instead of overlapping */}
      <div className="anim-btns flex flex-wrap items-center gap-2.5 md:gap-3.5">
        <a
          href="#explore"
          className="group inline-flex items-center gap-2.5 md:gap-3 h-11 md:h-12 px-5 md:px-7 whitespace-nowrap font-sans-ui font-bold uppercase text-[10px] md:text-[11px] tracking-[0.14em] md:tracking-[0.16em] text-[#1a0f0d] bg-gradient-to-r from-[#dfbd87] via-[#d5ae76] to-[#c89f67] transition-shadow duration-300 hover:shadow-[0_4px_20px_rgba(223,189,135,0.4)]"
        >
          <span>Explore Collections</span>
          <svg className="w-[14px] h-[14px] transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>

        <a
          href="#story"
          className="group inline-flex items-center gap-2.5 md:gap-3 h-11 md:h-12 px-5 md:px-7 whitespace-nowrap font-sans-ui font-semibold uppercase text-[10px] md:text-[11px] tracking-[0.14em] md:tracking-[0.16em] text-[#fbf7f0] border border-[#b48c5a]/75 transition-colors duration-300 hover:border-[#dfbd87] hover:bg-[#1a090d]/50"
        >
          <span>Discover Our Story</span>
          <svg className="w-[14px] h-[14px] transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>
    </div>
  );
}
