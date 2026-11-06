import React from 'react';
import { ArrowRight } from 'lucide-react';

/** Editorial text CTA: underline draws in on hover, arrow nudges. */
export default function ArrowLink({ href = '#', children, tone = 'light', className = '' }) {
  const color = tone === 'dark' ? 'text-[#3a0f1a]' : 'text-[#fbf7f0]';
  const line  = tone === 'dark' ? 'bg-[#3a0f1a]' : 'bg-[#dfbd87]';
  return (
    <a href={href} className={`group relative inline-flex items-center gap-3 py-2 font-sans-ui font-semibold uppercase text-[11px] tracking-[0.2em] ${color} ${className}`}>
      <span>{children}</span>
      <ArrowRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:translate-x-1.5" strokeWidth={1.6} />
      <span aria-hidden="true" className={`absolute left-0 bottom-0 h-px w-full ${line} opacity-40`} />
      <span aria-hidden="true" className={`absolute left-0 bottom-0 h-px w-full ${line} origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100`} />
    </a>
  );
}
