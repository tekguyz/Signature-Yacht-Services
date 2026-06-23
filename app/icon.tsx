import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#0066FF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '6px',
          padding: '12%',
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Anchor Ring */}
          <circle cx="50" cy="20" r="10" stroke="#FFFFFF" strokeWidth="8" fill="none" />
          
          {/* Anchor Shaft */}
          <path d="M50 30 L50 72" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" />
          
          {/* Crossbar */}
          <path d="M30 42 L70 42" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" />
          
          {/* Thermometer temperature level bar alongside shaft */}
          <path d="M42 48 L42 64" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
          
          {/* Curved Flukes */}
          <path
            d="M20 54 C20 78, 80 78, 80 54"
            stroke="#FFFFFF"
            strokeWidth="8"
            strokeLinecap="round"
            fill="none"
          />
          
          {/* Left Fluke Arrowhead */}
          <path
            d="M20 56 L13 48 L27 48 Z"
            fill="#FFFFFF"
          />
          
          {/* Right Fluke Arrowhead */}
          <path
            d="M80 56 L73 48 L87 48 Z"
            fill="#FFFFFF"
          />
          
          {/* Climate Comfort Wave Overlay */}
          <path
            d="M32 82 Q41 76, 50 82 T68 82"
            stroke="#FFFFFF"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}

