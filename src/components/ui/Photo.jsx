import React from 'react';

/**
 * Frame + lazy image. `parallax` oversizes the image vertically so drift never
 * exposes an edge. width/height are the source dimensions (prevents layout shift).
 */
export default function Photo({ src, alt, w, h, className = '', imgClassName = '', parallax, reveal = true, delay, position = 'center', eager }) {
  return (
    <div
      data-img-reveal={reveal ? '' : undefined}
      data-delay={delay}
      className={`${className.includes('absolute') ? '' : 'relative'} overflow-hidden bg-[#1a0b0e] ${className}`}
    >
      <img
        src={src}
        alt={alt}
        width={w}
        height={h}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        draggable="false"
        data-parallax={parallax}
        className={`absolute left-0 w-full object-cover ${parallax ? 'top-[-12%] h-[124%]' : 'top-0 h-full'} ${imgClassName}`}
        style={{ objectPosition: position }}
      />
    </div>
  );
}
