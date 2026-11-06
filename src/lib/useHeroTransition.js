import { useLayoutEffect } from 'react';
import { gsap, ScrollTrigger } from './gsap';

/**
 * Cinematic hero → collection transition.
 *
 * One pinned, scrubbed timeline on the existing hero section. Nothing is cloned
 * or rebuilt: it animates elements that already exist (nav, copy, cards, the
 * photo, the dark gradients) plus the single `.hero__intro` overlay and
 * `.hero__scrim` layer that live inside the hero.
 *
 * Elements the hero's intro animation / mouse-parallax already write to
 * (.anim-*, photoRef, parallaxRef) are never touched here. We animate their
 * parents or a dedicated wrapper (.hero__bg-zoom) instead, so no two tweens
 * ever fight over one transform.
 *
 * Only opacity / visibility / transform are animated — no layout properties.
 *
 *  ≥768px + motion allowed : pinned, scrubbed, full sequence
 *  phones (<768px) / windows shorter than 660px : nothing is created — fully static
 *  prefers-reduced-motion   : nothing is created — page behaves as before
 *
 * gsap.matchMedia reverts everything automatically when a query stops
 * matching, and mm.revert() on unmount makes StrictMode's double mount safe.
 */
export default function useHeroTransition(heroRef, { disabled = false } = {}) {
  useLayoutEffect(() => {
    const hero = heroRef.current;
    if (!hero || disabled) return;

    const mm = gsap.matchMedia();

    mm.add(
      {
        // The hero is min-height 660px; pinning it in a shorter window would hide its bottom.
        // Phones (<768px) and short windows get no scroll animation at all.
        desktop: '(min-width: 768px) and (min-height: 660px) and (prefers-reduced-motion: no-preference)',
      },
      (ctx) => {
        const q = gsap.utils.selector(hero);

        /* ── Full: pinned cinematic sequence ───────────────────────── */
        const tl = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: hero,
            start: 'top top',
            end: '+=260%',
            pin: true,            // pinSpacing (default) reserves the scroll distance → no jump on release
            scrub: 0.7,           // light smoothing so wheel notches feel filmic
            anticipatePin: 1,
            invalidateOnRefresh: true,
            // The hero sits above triggers that were created earlier (child
            // effects run first); refresh it first so their offsets include
            // the pin spacer.
            refreshPriority: 1,
          },
        });

        // Start state for the overlay (CSS also hides it, so there is no flash).
        const words = q('.intro-word');
        const hairline = q('.intro-rule');
        const links = q('.intro-link');

        /* Act 1 · 0 → 2.4 — hero UI lets go, upwards/downwards out of frame */
        tl.fromTo(q('.hero__nav'),       { autoAlpha: 1, y: 0 }, { autoAlpha: 0, y: -48, duration: 1.5, ease: 'power2.in' }, 0)
          .fromTo(q('.hero__main'),      { autoAlpha: 1, y: 0 }, { autoAlpha: 0, y: -72, duration: 2.0, ease: 'power2.in' }, 0.1)
          .fromTo(q('.hero__cards-wrap'),{ autoAlpha: 1, y: 0 }, { autoAlpha: 0, y: 90,  duration: 1.8, ease: 'power2.in' }, 0.2);

        /* Act 2 · 0 → 11 — the photograph pushes in toward the model.
           One long, eased move (not a stop-start) so it reads as a camera dolly. */
        tl.fromTo(q('.hero__bg-zoom'), { scale: 1 }, { scale: 1.6, duration: 11, ease: 'power1.inOut' }, 0);

        //   the surrounding burgundy/black shading melts away into the image…
        tl.to(q('.hero__shade'),               { opacity: 0, duration: 3.6 }, 0.8)
          .to(q('.hero__bg-deco'),             { opacity: 0, duration: 2 }, 0)
        //   …then a deep burgundy scrim settles over it for legibility + mood.
          .fromTo(q('.hero__scrim'), { opacity: 0 }, { opacity: 1, duration: 3.6, ease: 'power1.inOut' }, 3);

        /* Act 3 · 5.4 → 9.6 — the collection opens, staggered */
        tl.fromTo(q('.hero__intro'), { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.01 }, 5.3)
          .fromTo(q('.intro-eyebrow'), { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 1.1, ease: 'power3.out' }, 5.5)
          .fromTo(words,    { yPercent: 118 }, { yPercent: 0, duration: 1.5, stagger: 0.3, ease: 'power4.out' }, 5.9)
          .fromTo(hairline, { scaleX: 0, opacity: 0 }, { scaleX: 1, opacity: 1, duration: 1.2, ease: 'power3.out' }, 7.0)
          .fromTo(q('.intro-sub'),  { y: 22, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }, 7.2)
          .fromTo(links,    { y: 34, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, stagger: 0.22, ease: 'power3.out' }, 8.1);

        /* Hold — lets the final frame breathe before the pin releases */
        tl.to({}, { duration: 1.4 }, '>');
      },
      hero
    );

    // Pin spacers + late-loading fonts/images: measure once the frame settles.
    const raf = requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      cancelAnimationFrame(raf);
      mm.revert();
    };
  }, [heroRef, disabled]);
}
