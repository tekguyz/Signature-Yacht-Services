import React from 'react';

interface WaveDividerProps {
  className?: string; // Standard customization class
  flip?: boolean;
}

export function WaveDivider({ className = '', flip = false }: WaveDividerProps) {
  return (
    <div className={`w-full overflow-hidden leading-[0] ${flip ? 'rotate-180' : ''} ${className}`}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="relative block w-full h-[32px] md:h-[48px]"
      >
        <path
          d="M0,0 C150,90 350,110 500,60 C650,10 850,30 1200,90 L1200,120 L0,120 Z"
          className="fill-current"
        />
      </svg>
    </div>
  );
}
