import React from 'react';

/**
 * One grid cell = one card.
 *  - the OUTER div is what GSAP animates on load (opacity / y)
 *  - the INNER anchor owns hover transforms
 * Keeping them on separate elements is what stops the GSAP inline transform
 * from fighting the CSS hover transform (which caused jumping / stuck cards).
 */
export default function CollectionCard({ title, image, href, isActive, onClick, className = '' }) {
  return (
    <div className={`${className} min-w-0`}>
      <a
        href={href || '#'}
        onClick={onClick}
        className={`group relative block w-full aspect-[177/189] overflow-hidden cursor-pointer select-none
          rounded-t-[999px] rounded-b-[3px] border border-[#c59e66]/65 bg-[#180a0e]
          transition-[transform,box-shadow] duration-300 ease-out
          hover:-translate-y-2 hover:shadow-[0_18px_36px_rgba(0,0,0,0.9),0_0_20px_rgba(212,175,55,0.2)]
          ${isActive ? 'ring-1 ring-[#dfbd87]/80 shadow-[0_0_18px_rgba(212,175,55,0.28)]' : ''}`}
      >
        <img
          src={image}
          alt={title}
          draggable="false"
          className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 px-[8%] pb-[7%] z-10">
          <div className="max-md:hidden flex justify-center mb-2 opacity-60 group-hover:opacity-90 transition-opacity">
            <svg viewBox="0 0 20 10" fill="none" className="w-4 h-[10px] text-[#d8ad72]" aria-hidden="true">
              <path d="M10 5 C8 2 5 1 2 2 C1 4 2 7 4 8 C6 9 8 7 10 5Z" stroke="currentColor" strokeWidth="0.7" opacity="0.7" />
              <path d="M10 5 C12 2 15 1 18 2 C19 4 18 7 16 8 C14 9 12 7 10 5Z" stroke="currentColor" strokeWidth="0.7" opacity="0.7" />
              <circle cx="10" cy="5" r="1.1" fill="currentColor" opacity="0.85" />
            </svg>
          </div>
          <div className="flex items-center justify-between max-md:justify-center gap-1 text-[#fbf7f0]">
            <span className="font-sans-ui font-medium tracking-[0.03em] leading-none truncate text-[clamp(11px,0.9vw,14px)] max-md:text-[9.5px] max-md:text-center max-md:leading-[1.15] max-md:whitespace-normal max-md:overflow-visible text-[#fbf7f0]/95 group-hover:text-white transition-colors">
              {title}
            </span>
            <svg className="max-md:hidden shrink-0 w-[14px] h-[14px] text-[#fbf7f0]/75 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-white"
                 viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </div>
        </div>
      </a>
    </div>
  );
}
