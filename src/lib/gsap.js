import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Registered once, imported everywhere from here.
gsap.registerPlugin(ScrollTrigger);

export const reducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Phones get a static page: no GSAP motion at all (see index.css for the CSS side).
export const isPhone = () =>
  typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches;

export { gsap, ScrollTrigger };
