import { ImageResponse } from 'next/og';

// Image metadata
export const alt = 'Coastal Calm Therapy - Calm. Clarity. Connection.';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

/**
 * Dynamic OG Image Generator
 * 
 * NOTE: This requires @vercel/og which is not included by default.
 * For now, we'll use a static fallback image (og-template.png).
 * 
 * To enable dynamic OG images:
 * 1. Install @vercel/og: npm install @vercel/og
 * 2. Uncomment the code below
 * 3. Remove or rename public/og-template.png
 */

export default async function Image() {
  // Static fallback - will serve the static image from public/og-template.png
  // Uncomment below to use dynamic generation with @vercel/og
  
  /*
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 64,
          background: 'linear-gradient(to bottom, #F9FAFB, #E5E7EB)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 'bold',
            color: '#1E3A8A',
            marginBottom: 20,
          }}
        >
          Coastal Calm Therapy
        </div>
        <div
          style={{
            fontSize: 48,
            color: '#60A5FA',
          }}
        >
          Calm. Clarity. Connection.
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
  */

  // Placeholder response - Next.js will fallback to static og-template.png
  return new Response(null, { status: 404 });
}

