import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0A1628',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          color: '#ffffff',
          fontFamily: 'sans-serif',
          position: 'relative',
          border: '4px solid #0066FF',
        }}
      >
        {/* Glow overlay without unsupported filter blur */}
        <div
          style={{
            position: 'absolute',
            top: '-150px',
            right: '-150px',
            width: '400px',
            height: '400px',
            borderRadius: '200px',
            background: 'rgba(0, 102, 255, 0.15)',
          }}
        />

        {/* Yacht Wireframe Anchor background decoration using standard paths */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            right: '40px',
            opacity: 0.05,
            display: 'flex',
          }}
        >
          <svg width="280" height="280" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="20" r="10" stroke="#0066FF" strokeWidth="6" fill="none" />
            <path d="M50 30 L50 72" stroke="#0066FF" strokeWidth="7" strokeLinecap="round" />
            <path d="M30 42 L70 42" stroke="#0066FF" strokeWidth="6" strokeLinecap="round" />
            <path d="M20 54 C20 78, 80 78, 80 54" stroke="#0066FF" strokeWidth="7" strokeLinecap="round" fill="none" />
          </svg>
        </div>

        {/* Top Header Row with white custom LogoIcon */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '12px',
              background: '#0066FF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '20px',
            }}
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Anchor Ring */}
              <circle cx="50" cy="20" r="10" stroke="#FFFFFF" strokeWidth="6" fill="none" />
              
              {/* Anchor Shaft */}
              <path d="M50 30 L50 72" stroke="#FFFFFF" strokeWidth="7" strokeLinecap="round" />
              
              {/* Crossbar */}
              <path d="M30 42 L70 42" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round" />
              
              {/* Thermometer temperature level alongside shaft */}
              <path d="M42 48 L42 64" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
              
              {/* Curved Flukes */}
              <path
                d="M20 54 C20 78, 80 78, 80 54"
                stroke="#FFFFFF"
                strokeWidth="7"
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
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontSize: '28px',
                fontWeight: 'bold',
                letterSpacing: '2px',
                lineHeight: 1,
              }}
            >
              SIGNATURE
            </span>
            <span
              style={{
                fontSize: '11px',
                letterSpacing: '4px',
                color: '#0066FF',
                fontWeight: 600,
                marginTop: '3px',
              }}
            >
              YACHT SERVICES
            </span>
          </div>
        </div>

        {/* Headline Row */}
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: '30px' }}>
          <div
            style={{
              fontSize: '13px',
              fontWeight: 'bold',
              letterSpacing: '4px',
              color: '#0066FF',
              textTransform: 'uppercase',
              marginBottom: '15px',
            }}
          >
            Fort Lauderdale, Florida — 24/7 Dispatch
          </div>
          <div
            style={{
              fontSize: '58px',
              fontWeight: 800,
              lineHeight: 1.15,
              textTransform: 'uppercase',
              letterSpacing: '-1.5px',
            }}
          >
            Maximum Yacht Comfort.
            <br />
            <span style={{ color: '#0066FF' }}>Expert Climate Care.</span>
          </div>
        </div>

        {/* Bottom Footer Row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '35px',
            marginTop: '40px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '15px', color: '#64748B', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
              Service Capabilities
            </span>
            <span style={{ fontSize: '18px', color: '#E2E8F0', marginTop: '4px' }}>
              HVAC • Refrigeration • Mold Cleaning • Piping Insulation
            </span>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <span style={{ fontSize: '15px', color: '#64748B', textTransform: 'uppercase', letterSpacing: '1.5px' }}>
              Rapid Call Out
            </span>
            <span style={{ fontSize: '26px', fontWeight: 'bold', color: '#ffffff', marginTop: '4px' }}>
              (954) 701-0752
            </span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
