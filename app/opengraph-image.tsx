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
          background: 'linear-gradient(to bottom right, #0A1628, #050b14)',
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
        {/* Glow overlay */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '450px',
            height: '450px',
            borderRadius: '50%',
            background: 'rgba(0, 102, 255, 0.12)',
            filter: 'blur(80px)',
          }}
        />

        {/* Yacht Wireframe Anchor background decoration */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            right: '40px',
            opacity: 0.05,
            color: '#0066FF',
            display: 'flex',
          }}
        >
          <svg width="280" height="280" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="20" r="10" stroke="currentColor" strokeWidth="6" />
            <line x1="50" y1="30" x2="50" y2="72" stroke="currentColor" strokeWidth="7" />
            <line x1="30" y1="42" x2="70" y2="42" stroke="currentColor" strokeWidth="6" />
            <path d="M20 54 C20 78, 80 78, 80 54" stroke="currentColor" strokeWidth="7" fill="none" />
          </svg>
        </div>

        {/* Top Header Row */}
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
            {/* Minimal white S monogram resembling our custom anchor curve */}
            <span style={{ fontSize: '30px', fontWeight: 'bold', color: 'white' }}>S</span>
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
              fontWeight: 'black',
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
