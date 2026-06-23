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
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        style={{
          background: 'linear-gradient(135deg, #0066FF 0%, #0044CC 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '24%',
          padding: '8%',
        }}
      >
        {/* Anchor Ring */}
        <circle cx="50" cy="20" r="10" stroke="#FFFFFF" strokeWidth="8" fill="none" />
        
        {/* Anchor Shaft */}
        <line x1="50" y1="30" x2="50" y2="72" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" />
        
        {/* Crossbar */}
        <line x1="30" y1="42" x2="70" y2="42" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" />
        
        {/* Flukes */}
        <path
          d="M20 54 C20 78, 80 78, 80 54"
          stroke="#FFFFFF"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Left Arrowhead */}
        <polyline points="12,46 20,54 28,46" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        
        {/* Right Arrowhead */}
        <polyline points="72,46 80,54 88,46" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    ),
    {
      ...size,
    }
  );
}
