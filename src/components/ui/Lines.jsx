import React from 'react';

/** Masked line-by-line headline. Pass explicit lines so wrapping is art-directed, not accidental. */
export default function Lines({ lines, as: Tag = 'h2', className = '', lineClassName = '' }) {
  return (
    <Tag data-lines className={className}>
      {lines.map((l, i) => (
        <span key={i} className={`line block overflow-hidden pb-[0.08em] -mb-[0.08em] ${lineClassName}`}>
          <span className="line__in block will-change-transform">{l}</span>
        </span>
      ))}
    </Tag>
  );
}
