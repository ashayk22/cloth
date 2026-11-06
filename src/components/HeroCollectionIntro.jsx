import React from 'react';

/** Wraps one word in an overflow mask so it can rise into view. */
const Word = ({ children, italic }) => (
  <span className="inline-block overflow-hidden align-bottom pb-[0.12em] -mb-[0.12em] pr-[0.08em] -mr-[0.08em]">
    <span className={`intro-word inline-block will-change-transform ${italic ? 'italic' : ''}`}>{children}</span>
  </span>
);

/**
 * The "A World of Elegance." opening that lives INSIDE the pinned hero.
 * It is hidden (CSS visibility) until the scroll timeline reveals it, so for
 * reduced-motion users and small screens it simply never appears.
 *
 * It re-uses the existing collection list (passed in from App) — it does not
 * create a second set of collection data or cards.
 */
export default function HeroCollectionIntro({ items }) {
  return (
    <div className="hero__intro" aria-label="Collections">
      <div className="intro-eyebrow flex items-center gap-3 mb-7 opacity-0">
        <span aria-hidden="true" className="block h-px w-9 bg-[#d6b07c]/75" />
        <span className="font-sans-ui uppercase font-medium text-[11px] tracking-[0.3em] text-[#d6b07c]">
          The Collections
        </span>
        <span aria-hidden="true" className="block h-px w-9 bg-[#d6b07c]/75" />
      </div>

      <h2
        className="font-editorial text-[#fdfbf7] font-normal m-0"
        style={{ fontSize: 'clamp(48px, 7.4vw, 124px)', lineHeight: 0.98, letterSpacing: '-0.01em' }}
      >
        <Word>A</Word>{' '}
        <Word>World</Word>{' '}
        <Word>of</Word>{' '}
        <Word italic>Elegance.</Word>
      </h2>

      <span
        aria-hidden="true"
        className="intro-rule block h-px w-[clamp(120px,14vw,220px)] my-7 bg-gradient-to-r from-transparent via-[#d4af6a] to-transparent opacity-0"
      />

      <p className="intro-sub font-sans-ui font-light text-[#e9dccb] text-[14px] xl:text-[16px] tracking-[0.02em] m-0 opacity-0">
        Discover the artistry of Indian dressing.
      </p>

      <ul className="intro-list">
        {items.map((c, i) => (
          <li key={c.id}>
            <a href={c.href} className="intro-link group opacity-0">
              <span className="font-sans-ui text-[11px] tracking-[0.22em] text-[#d6b07c]">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="font-editorial italic text-[#fbf7f0] text-[clamp(22px,2.1vw,32px)] leading-none transition-colors duration-500 group-hover:text-[#f0d9a8]">
                {c.title}
              </span>
              <span aria-hidden="true" className="intro-link__line" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
