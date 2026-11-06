import React from 'react';

export default function FestiveBadge() {
  return (
    <a href="#festive" className="group flex flex-col items-start select-none self-start mt-[104px]">
      {/* 8-pt star motif */}
      <svg
        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1"
        className="w-[22px] h-[22px] mb-3 text-[#d8ad72] transition-transform duration-500 group-hover:rotate-45"
        style={{ filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.8))' }}
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="2.4" />
        <polygon points="12,2 14.4,9.6 22,12 14.4,14.4 12,22 9.6,14.4 2,12 9.6,9.6" strokeWidth="1" />
        <polygon
          points="4.9,4.9 10.2,8.5 12,3.5 13.8,8.5 19.1,4.9 15.5,10.2 20.5,12 15.5,13.8 19.1,19.1 13.8,15.5 12,20.5 10.2,15.5 4.9,19.1 8.5,13.8 3.5,12 8.5,10.2"
          strokeWidth="0.7" opacity="0.75"
        />
      </svg>

      <div className="font-editorial italic font-medium text-[#fbf7f0] mb-3" style={{ fontSize: 'clamp(24px, 1.95vw, 32px)', lineHeight: 1.08 }}>
        <span className="block">Festive</span>
        <span className="block">Collection</span>
      </div>

      <div className="flex items-center gap-2 font-sans-ui font-medium text-[13px] text-[#d8ad72] [text-shadow:0_1px_10px_rgba(0,0,0,0.65)] transition-colors group-hover:text-[#f3caa1]">
        <span>Now Live</span>
        <svg className="w-[14px] h-[14px] transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M5 12h14M13 6l6 6-6 6" />
        </svg>
      </div>
    </a>
  );
}
