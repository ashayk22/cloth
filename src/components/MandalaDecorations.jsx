import React from 'react';

export default function MandalaDecorations() {
  return (
    <>
      {/* Bottom Left Mandala */}
      <div className="absolute bottom-0 left-0 w-32 sm:w-44 md:w-52 h-auto pointer-events-none select-none z-10 opacity-30 mix-blend-screen transition-opacity duration-700">
        <img
          src="/assets/decorations/mandala_left.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>

      {/* Bottom Right Mandala */}
      <div className="absolute bottom-0 right-0 w-32 sm:w-44 md:w-52 h-auto pointer-events-none select-none z-10 opacity-30 mix-blend-screen transition-opacity duration-700">
        <img
          src="/assets/decorations/mandala_right.png"
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
    </>
  );
}

