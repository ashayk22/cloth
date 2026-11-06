import React, { useRef } from 'react';
import useScrollFx from '../lib/useScrollFx';
import Eyebrow from '../components/ui/Eyebrow';
import Lines from '../components/ui/Lines';
import Photo from '../components/ui/Photo';
import ArrowLink from '../components/ui/ArrowLink';
import { STORY } from '../data/content';

/**
 * 04 · Asymmetric image + text. A large landscape plate bleeds off the left
 * edge; a small portrait overlaps it and drifts at a different speed.
 * Text sits in a narrow right column, vertically centred on the overlap.
 */
export default function OurStory() {
  const root = useRef(null);
  useScrollFx(root);

  return (
    <section id="story" ref={root} className="relative bg-[#ebdfcc] text-[#3a0f1a] [overflow-x:clip] py-[clamp(72px,11vw,180px)]">
      <div className="grid items-center gap-y-14 md:grid-cols-12">
        {/* images — left, bleeding to the viewport edge */}
        <div className="relative md:col-span-7 md:pr-0">
          <Photo
            src={STORY.main.img} alt="A bride seated beneath a carved sandstone arch in golden light"
            w={STORY.main.w} h={STORY.main.h} parallax={0.06} position="50% 50%"
            className="aspect-[5/4] w-[94%] md:w-[92%]"
          />
          <div className="absolute -bottom-10 right-4 w-[38%] max-w-[300px] md:-bottom-16 md:right-[2%]" data-reveal data-delay="0.2">
            <Photo
              src={STORY.inset.img} alt="Zari-bordered dupatta draped over embroidered silk"
              w={STORY.inset.w} h={STORY.inset.h} parallax={0.12} reveal={false} position="50% 40%"
              className="aspect-[4/5] w-full border-[10px] border-[#ebdfcc]"
            />
          </div>
        </div>

        {/* text — right */}
        <div className="px-6 sm:px-12 md:col-span-5 md:col-start-8 md:pl-0 md:pr-[clamp(32px,5.5vw,96px)] pt-8 md:pt-0">
          <Eyebrow tone="burgundy" className="mb-7">Our Story</Eyebrow>
          <Lines
            lines={['Rooted in', 'Tradition.', <em key="e" className="italic">Designed</em>, <em key="f" className="italic">for Today.</em>]}
            className="font-editorial text-[clamp(44px,5.4vw,92px)] leading-[0.95] tracking-[-0.01em]"
          />
          <div data-reveal-stagger className="mt-9 max-w-md space-y-5 font-sans-ui font-light text-[14.5px] xl:text-[15.5px] leading-[1.85] text-[#3a0f1a]/80">
            <p>Bandhani began with a belief that Indian dressing is never only a garment — it is a memory made in cloth: the tie-and-dye of Rajasthan, the zari of Gujarat, the patience of the hands that make them.</p>
            <p>We work with the same craft communities that have kept these techniques alive for generations, and cut them for the way you live now.</p>
          </div>
          <div data-reveal className="mt-10">
            <ArrowLink href="#story-full" tone="dark">Discover Our Story</ArrowLink>
          </div>
        </div>
      </div>
    </section>
  );
}
