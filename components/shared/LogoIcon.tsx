'use client';

import React from 'react';

interface LogoIconProps extends React.ComponentPropsWithoutRef<'svg'> {
  size?: number;
}

export default function LogoIcon({ size = 24, className = '', ...props }: LogoIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
      {...props}
    >
      {/* 
        DEVELOPER NOTE: Replace the paths below with the paths from your black-and-white digital SVG.
        Ensure you remove any hardcoded inline style="fill: #000" or fill="#000000" from your SVG, 
        and instead use fill="currentColor" or stroke="currentColor" so it adapts magically to 
        the active Tailwind text-colors across the app!
      */}
      
      {/* Anchor Ring */}
      <circle cx="50" cy="20" r="10" stroke="currentColor" strokeWidth="6" />

      {/* Anchor Shaft */}
      <line x1="50" y1="30" x2="50" y2="72" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />

      {/* Crossbar (Shackle) */}
      <line x1="30" y1="42" x2="70" y2="42" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
      
      {/* Thermometer / Temperature level bar right alongside shaft */}
      <line x1="42" y1="48" x2="42" y2="64" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />

      {/* Curved Flukes */}
      <path
        d="M20 54 C20 78, 80 78, 80 54"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
      />

      {/* Left Fluke Arrowhead */}
      <path
        d="M20 56 L13 48 L27 48 Z"
        fill="currentColor"
      />

      {/* Right Fluke Arrowhead */}
      <path
        d="M80 56 L73 48 L87 48 Z"
        fill="currentColor"
      />

      {/* Climate Comfort Wave Overlay */}
      <path
        d="M32 82 Q41 76, 50 82 T68 82"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
