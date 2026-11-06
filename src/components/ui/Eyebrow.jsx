import React from 'react';

export default function Eyebrow({ children, tone = 'gold', className = '' }) {
  const color = tone === 'burgundy' ? 'text-[#7a2a38]' : 'text-[#d6b07c]';
  const rule  = tone === 'burgundy' ? 'bg-[#7a2a38]/60' : 'bg-[#d6b07c]/75';
  return (
    <div data-reveal className={`flex items-center gap-3 ${className}`}>
      <span className={`font-sans-ui uppercase font-medium text-[11px] tracking-[0.26em] ${color}`}>{children}</span>
      <span aria-hidden="true" className={`block h-px w-9 ${rule}`} />
    </div>
  );
}
