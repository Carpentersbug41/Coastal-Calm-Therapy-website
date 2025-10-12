import { generateRssFeed } from '@/lib/rss';

export function GET() {
  const feed = generateRssFeed();

  return new Response(feed, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}

