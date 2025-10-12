export function GET() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://coastalcalm.vercel.app';

  const robotsTxt = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}

