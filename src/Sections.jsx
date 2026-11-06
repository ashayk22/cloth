import React, { useEffect } from 'react';
import { ScrollTrigger } from './lib/gsap';
import CollectionShowcase from './sections/CollectionShowcase';
import Craftsmanship from './sections/Craftsmanship';
import FeaturedCollection from './sections/FeaturedCollection';
import OurStory from './sections/OurStory';
import Stores from './sections/Stores';
import InstagramGallery from './sections/InstagramGallery';
import Footer from './sections/Footer';

/** Everything below the hero, in page order. */
export default function Sections() {
  // Fonts and lazy images change section heights after first paint; re-measure
  // trigger positions once they settle so reveals fire at the right scroll offsets.
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();
    document.fonts?.ready.then(refresh);
    window.addEventListener('load', refresh);
    let t;
    const onResize = () => { clearTimeout(t); t = setTimeout(refresh, 250); };
    window.addEventListener('resize', onResize);
    return () => { window.removeEventListener('load', refresh); window.removeEventListener('resize', onResize); clearTimeout(t); };
  }, []);

  return (
    <main>
      <CollectionShowcase />
      <Craftsmanship />
      <FeaturedCollection />
      <OurStory />
      <Stores />
      <InstagramGallery />
      <Footer />
    </main>
  );
}
