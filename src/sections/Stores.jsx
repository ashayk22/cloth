import React, { useRef } from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import useScrollFx from '../lib/useScrollFx';
import Eyebrow from '../components/ui/Eyebrow';
import Lines from '../components/ui/Lines';
import Photo from '../components/ui/Photo';
import ArrowLink from '../components/ui/ArrowLink';
import { STORES } from '../data/content';

/**
 * 05 · Three boutiques as staggered arches — the same arch silhouette used by
 * the hero's collection cards, so the page keeps one architectural motif.
 * Details (address / hours / phone) render only when filled in data/content.js.
 */
const OFFSETS = ['md:mt-0', 'md:mt-24', 'md:mt-10'];

function Detail({ icon: Icon, children }) {
  if (!children) return null;
  return (
    <li className="flex items-start gap-3 text-[13.5px] leading-[1.6] text-[#fbf7f0]/70">
      <Icon className="mt-[3px] h-4 w-4 shrink-0 text-[#dfbd87]" strokeWidth={1.4} />
      <span>{children}</span>
    </li>
  );
}

export default function Stores() {
  const root = useRef(null);
  useScrollFx(root);

  return (
    <section id="stores" ref={root} className="relative bg-[#1a070b] text-[#fbf7f0] [overflow-x:clip] py-[clamp(72px,11vw,170px)]">
      <div className="mx-auto w-full max-w-[1720px] px-6 sm:px-12 lg:px-16 xl:px-20">
        <header className="mb-[clamp(48px,7vw,110px)] grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <Eyebrow className="mb-6">Visit Our Stores</Eyebrow>
            <Lines
              lines={['Come, sit.', <em key="e" className="italic">Stay a while.</em>]}
              className="font-editorial text-[clamp(44px,6.4vw,108px)] leading-[0.95] tracking-[-0.01em]"
            />
          </div>
          <p data-reveal className="md:col-span-3 md:col-start-10 font-sans-ui font-light text-[14px] leading-[1.75] text-[#fbf7f0]/60">
            Three boutiques, one welcome — chai, a private fitting and the whole collection laid out for you.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-x-8 gap-y-20 md:grid-cols-3">
          {STORES.map((s, i) => (
            <article key={s.id} className={`group ${OFFSETS[i]}`}>
              <Photo
                src={s.img} alt={`${s.city} boutique`} w={s.w} h={s.h} position={s.pos}
                className="aspect-[4/5] w-full rounded-t-[999px] rounded-b-[2px]"
                imgClassName="transition-transform duration-[1600ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.07]"
              />
              <div className="mt-7 text-center md:text-left">
                <p data-reveal className="font-sans-ui text-[11px] uppercase tracking-[0.24em] text-[#d6b07c]">{s.region}</p>
                <h3 data-reveal className="mt-2 font-editorial text-[clamp(44px,5vw,84px)] leading-[0.95] transition-transform duration-500 group-hover:translate-x-2">{s.city}</h3>
                <p data-reveal className="mt-4 max-w-sm font-sans-ui font-light text-[14px] leading-[1.75] text-[#fbf7f0]/60 mx-auto md:mx-0">{s.blurb}</p>

                <ul className="mt-5 space-y-2.5 max-w-sm mx-auto md:mx-0 text-left">
                  <Detail icon={MapPin}>{s.address}</Detail>
                  <Detail icon={Clock}>{s.hours}</Detail>
                  <Detail icon={Phone}>{s.phone}</Detail>
                </ul>

                <div className="mt-6">
                  <ArrowLink href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Bandhani ' + s.city)}`}>Get directions</ArrowLink>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
