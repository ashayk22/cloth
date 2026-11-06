import { useLayoutEffect } from 'react';
import { gsap, ScrollTrigger, reducedMotion, isPhone } from './gsap';

/**
 * Declarative scroll effects for everything inside `rootRef`.
 *
 *   data-reveal                  fade + rise
 *   data-reveal-stagger          children of this element rise in sequence
 *   data-img-reveal              clip-path wipe (the <img> inside gently de-zooms)
 *   data-lines                   children with .line > .line__in slide up from a mask
 *   data-parallax="0.12"         vertical drift, fraction of element height (desktop only)
 *
 * Everything lives in one gsap.context, so cleanup is a single revert() and
 * React StrictMode's double-mount can't leave duplicate triggers behind.
 * Only opacity / transform / clip-path are animated — no layout properties.
 */
export default function useScrollFx(rootRef, extra) {
  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root || reducedMotion() || isPhone()) return;

    const ctx = gsap.context(() => {
      const trig = (el, start = 'top 86%') => ({ trigger: el, start, once: true });

      gsap.utils.toArray('[data-reveal]').forEach((el) => {
        gsap.fromTo(el, { y: 36, opacity: 0 }, {
          y: 0, opacity: 1, duration: 1, ease: 'power3.out', clearProps: 'transform,opacity',
          delay: parseFloat(el.dataset.delay || 0), scrollTrigger: trig(el),
        });
      });

      gsap.utils.toArray('[data-reveal-stagger]').forEach((el) => {
        gsap.fromTo(el.children, { y: 40, opacity: 0 }, {
          y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', stagger: 0.12, clearProps: 'transform,opacity',
          scrollTrigger: trig(el, 'top 82%'),
        });
      });

      gsap.utils.toArray('[data-img-reveal]').forEach((el) => {
        const img = el.querySelector('img');
        const tl = gsap.timeline({ scrollTrigger: trig(el, 'top 88%') });
        tl.fromTo(el, { clipPath: 'inset(100% 0% 0% 0%)' }, {
          clipPath: 'inset(0% 0% 0% 0%)', duration: 1.3, ease: 'expo.out', clearProps: 'clipPath',
          delay: parseFloat(el.dataset.delay || 0),
        });
        if (img) tl.fromTo(img, { scale: 1.18 }, { scale: 1, duration: 1.8, ease: 'expo.out', clearProps: 'transform' }, 0);
      });

      gsap.utils.toArray('[data-lines]').forEach((el) => {
        gsap.fromTo(el.querySelectorAll('.line__in'), { yPercent: 110 }, {
          yPercent: 0, duration: 1.15, ease: 'power4.out', stagger: 0.11,
          scrollTrigger: trig(el, 'top 85%'),
        });
      });

      // Parallax only where it is cheap and meaningful.
      const mm = gsap.matchMedia();
      mm.add('(min-width: 768px)', () => {
        gsap.utils.toArray('[data-parallax]').forEach((el) => {
          const k = parseFloat(el.dataset.parallax || 0.1);
          gsap.fromTo(el, { yPercent: -k * 100 }, {
            yPercent: k * 100, ease: 'none',
            scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: 0.6 },
          });
        });
      });

      if (extra) extra(gsap);
    }, root);

    return () => ctx.revert();
  }, [rootRef, extra]);
}
