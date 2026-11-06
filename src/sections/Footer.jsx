import React, { useRef } from 'react';
import { ArrowUp } from 'lucide-react';
import useScrollFx from '../lib/useScrollFx';
import { BRAND, FOOTER_NAV, STORES } from '../data/content';
import { InstagramIcon } from './InstagramGallery';

function Col({ title, children }) {
  return (
    <div>
      <h4 className="mb-6 font-sans-ui text-[11px] font-medium uppercase tracking-[0.26em] text-[#d6b07c]">{title}</h4>
      {children}
    </div>
  );
}

const linkCls = 'group relative inline-block font-sans-ui text-[14.5px] font-light text-[#fbf7f0]/80 transition-colors hover:text-[#fbf7f0]';

export default function Footer() {
  const root = useRef(null);
  useScrollFx(root);

  return (
    <footer ref={root} className="relative bg-[#2a0a12] text-[#fbf7f0] [overflow-x:clip]">
      <div className="mx-auto w-full max-w-[1720px] px-6 pt-[clamp(64px,8vw,130px)] sm:px-12 lg:px-16 xl:px-20">
        <div className="grid gap-12 border-b border-[#fbf7f0]/15 pb-14 md:grid-cols-12">
          <p data-reveal className="md:col-span-4 max-w-sm font-editorial italic text-[clamp(26px,2.4vw,38px)] leading-[1.15]">
            Timeless Indian elegance, made by hand.
          </p>

          <div data-reveal-stagger className="grid grid-cols-2 gap-10 md:col-span-8 md:col-start-6 md:grid-cols-3">
            <Col title="Explore">
              <ul className="space-y-3">
                {FOOTER_NAV.map((n) => (
                  <li key={n.label}>
                    <a href={n.href} className={linkCls}>
                      {n.label}
                      <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-[#dfbd87] transition-transform duration-500 group-hover:scale-x-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </Col>

            <Col title="Boutiques">
              <ul className="space-y-4">
                {STORES.map((s) => (
                  <li key={s.id} className="font-sans-ui text-[14.5px] font-light leading-snug text-[#fbf7f0]/80">
                    <span className="block text-[#fbf7f0]">{s.city}</span>
                    <span className="text-[12.5px] text-[#fbf7f0]/55">{s.address || s.region}</span>
                    {s.hours && <span className="block text-[12.5px] text-[#fbf7f0]/55">{s.hours}</span>}
                    {s.phone && <span className="block text-[12.5px] text-[#fbf7f0]/55">{s.phone}</span>}
                  </li>
                ))}
              </ul>
            </Col>

            <Col title="Follow">
              <ul className="space-y-3">
                {BRAND.socials.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" className={`${linkCls} inline-flex items-center gap-2`}>
                      {s.label === 'Instagram' && <InstagramIcon className="h-4 w-4 text-[#dfbd87]" />}
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </Col>
          </div>
        </div>
      </div>

      {/* oversized identity — bottom edge deliberately bleeds off the page */}
      <div aria-hidden="true" className="relative select-none overflow-hidden">
        <div data-lines className="mx-auto max-w-[1720px] px-2 text-center">
          <span className="line block overflow-hidden">
            <span className="line__in block font-editorial italic font-normal leading-[0.8] tracking-[-0.03em] text-[#dfbd87] text-[clamp(72px,27vw,520px)] translate-y-[8%] pt-[0.06em]">
              bandhani
            </span>
          </span>
        </div>
      </div>

      <div className="relative border-t border-[#fbf7f0]/10 bg-[#210810]">
        <div className="mx-auto flex w-full max-w-[1720px] flex-col items-center justify-between gap-4 px-6 py-6 font-sans-ui text-[12px] text-[#fbf7f0]/50 sm:flex-row sm:px-12 lg:px-16 xl:px-20">
          <span>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</span>
          <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
             className="inline-flex items-center gap-2 uppercase tracking-[0.2em] transition-colors hover:text-[#dfbd87]">
            Back to top <ArrowUp className="h-3.5 w-3.5" strokeWidth={1.6} />
          </a>
        </div>
      </div>
    </footer>
  );
}
