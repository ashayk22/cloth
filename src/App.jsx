import React, { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Navbar from './components/Navbar';
import HeroContent from './components/HeroContent';
import FestiveBadge from './components/FestiveBadge';
import VerticalIndicator from './components/VerticalIndicator';
import CollectionCard from './components/CollectionCard';
import MandalaDecorations from './components/MandalaDecorations';
import HeroCollectionIntro from './components/HeroCollectionIntro';
import useHeroTransition from './lib/useHeroTransition';
import Sections from './Sections';
import { isPhone } from './lib/gsap';

const COLLECTIONS = [
  { id: 1, title: 'Festive Wear',    image: '/assets/cards/festive_wear_clean.jpg',    href: '#festive'  },
  { id: 2, title: 'Wedding Edit',    image: '/assets/cards/wedding_edit_clean.jpg',    href: '#wedding'  },
  { id: 3, title: 'Everyday Ethnic', image: '/assets/cards/everyday_ethnic_clean.jpg', href: '#everyday' },
  { id: 4, title: 'Custom Wear',     image: '/assets/cards/custom_wear_clean.jpg',     href: '#custom'   },
];

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const isStatic = typeof window !== 'undefined' && window.location.search.includes('static');

  const heroRef     = useRef(null);
  const photoRef    = useRef(null);   // intro animation target (scale / opacity)
  const parallaxRef = useRef(null);   // mouse-parallax target (x / y) — separate element, so
                                      // the two tweens never write to the same transform.

  /* ── Intro animation ────────────────────────────────────────────────
     • useLayoutEffect: elements are hidden before first paint (no flash).
     • Only opacity + transforms are animated — never layout properties —
       so nothing can shift the grid.
     • clearProps removes GSAP's inline styles when each tween finishes, so
       CSS hover transforms / layout take over cleanly.
     • gsap.context + revert() makes React 18/19 StrictMode's double-invoked
       effect safe (no duplicated timelines / stuck inline styles).        */
  useLayoutEffect(() => {
    if (isStatic || prefersReducedMotion() || isPhone()) return;   // phones: no intro animation

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', clearProps: 'transform,opacity' } });
      tl.fromTo(photoRef.current,    { scale: 1.05, opacity: 0.6 }, { scale: 1, opacity: 1, duration: 1.6, ease: 'power2.out' })
        .fromTo('.anim-nav',      { y: -24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7  }, '-=1.3')
        .fromTo('.anim-eyebrow',  { y: 20,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.65 }, '-=0.85')
        .fromTo('.anim-headline', { y: 28,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.75 }, '-=0.5')
        .fromTo('.anim-flourish', { scaleX: 0, opacity: 0 }, { scaleX: 1, opacity: 1, duration: 0.55 }, '-=0.45')
        .fromTo('.anim-desc',     { y: 16,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.6  }, '-=0.38')
        .fromTo('.anim-btns',     { y: 16,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.6  }, '-=0.38')
        .fromTo('.anim-right',    { x: 20,  opacity: 0 }, { x: 0, opacity: 1, duration: 0.75 }, '-=0.6')
        .fromTo('.anim-card',     { y: 32,  opacity: 0 }, { y: 0, opacity: 1, duration: 0.65, stagger: 0.08 }, '-=0.6');
    }, heroRef);

    return () => ctx.revert();
  }, [isStatic]);

  /* ── Scroll transition: pinned hero → collection (see lib/useHeroTransition) ── */
  useHeroTransition(heroRef, { disabled: isStatic });

  /* ── Mouse parallax (desktop only) — quickTo reuses one tween, no pile-up ── */
  useLayoutEffect(() => {
    if (isStatic || prefersReducedMotion() || isPhone()) return;
    const el = parallaxRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const xTo = gsap.quickTo(el, 'x', { duration: 1.4, ease: 'power1.out' });
      const yTo = gsap.quickTo(el, 'y', { duration: 1.4, ease: 'power1.out' });
      const onMove = (e) => {
        if (window.innerWidth < 1024) return;
        xTo((e.clientX / window.innerWidth  - 0.5) * 10);
        yTo((e.clientY / window.innerHeight - 0.5) * 6);
      };
      window.addEventListener('mousemove', onMove);
      return () => window.removeEventListener('mousemove', onMove);
    }, heroRef);

    return () => ctx.revert();
  }, [isStatic]);

  return (
    <>
    <section ref={heroRef} className="hero select-none">
      {/* Background (decorative, out of flow) */}
      <div className="hero__bg" aria-hidden="true">
        {/* Scroll-zoom wrapper: its own transform, so it never collides with the
            intro (photoRef) or mouse-parallax (parallaxRef) tweens below it. */}
        <div className="hero__bg-zoom">
          <div ref={parallaxRef} className="hero__bg-parallax">
            <div ref={photoRef} className="hero__bg-photo" />
          </div>
        </div>
        <div className="hero__shade absolute inset-0 bg-gradient-to-r from-black/50 via-black/5 to-transparent" />
        <div className="hero__shade absolute inset-x-0 bottom-0 h-[72%] md:h-[38%] bg-gradient-to-t from-black/85 via-black/50 md:via-black/40 to-transparent" />
        <div className="hero__scrim" />
        <div className="hero__bg-deco"><MandalaDecorations /></div>
      </div>

      {/* Row 1 — navigation */}
      <div className="anim-nav hero__nav">
        <Navbar />
      </div>

      {/* Row 2 — copy (left) + festive badge / indicator (right) */}
      <div className="hero__shell hero__main">
        <HeroContent />

        <aside className="anim-right hero__aside" aria-label="Featured collection">
          <FestiveBadge />
          <VerticalIndicator activeIndex={activeSlide} onSelect={setActiveSlide} />
        </aside>
      </div>

      {/* Row 3 — exactly four equal collection cards */}
      <div className="hero__cards-wrap">
        <div className="hero__cards">
          {COLLECTIONS.map((item, idx) => (
            <CollectionCard
              key={item.id}
              className="anim-card"
              title={item.title}
              image={item.image}
              href={item.href}
              isActive={activeSlide === idx}
              onClick={() => setActiveSlide(idx)}
            />
          ))}
        </div>
      </div>

      {/* Revealed by the scroll timeline (hidden otherwise) */}
      <HeroCollectionIntro items={COLLECTIONS} />
    </section>

    {/* Everything below the hero */}
    <Sections />
    </>
  );
}
