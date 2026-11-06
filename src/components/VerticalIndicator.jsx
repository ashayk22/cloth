import React from 'react';

const ITEMS = ['01', '02', '03', '04'];

/**
 * The one-and-only collection indicator. A 2-column grid: numbers | rail.
 * The glowing dot is a single element that slides along the rail via a CSS
 * variable (--i), so there is never a second copy to duplicate or mis-align.
 */
export default function VerticalIndicator({ activeIndex = 0, onSelect }) {
  return (
    <div className="vindicator select-none" style={{ '--i': activeIndex }} role="tablist" aria-label="Collections">
      <span className="vindicator__rail" aria-hidden="true" />
      <span className="vindicator__dot" aria-hidden="true" />

      {ITEMS.map((num, idx) => {
        const isActive = idx === activeIndex;
        return (
          <button
            key={num}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-label={`Collection ${num}`}
            onClick={() => onSelect && onSelect(idx)}
            style={{ gridColumn: 1, gridRow: idx + 1 }}
            className={`group cursor-pointer font-sans-ui text-[13px] font-medium tracking-widest transition-colors duration-200 ${
              isActive ? 'text-[#fbf7f0]' : 'text-[#fbf7f0]/35 hover:text-[#fbf7f0]/70'
            }`}
          >
            {num}
          </button>
        );
      })}
    </div>
  );
}
