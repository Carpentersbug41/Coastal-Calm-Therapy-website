import { getAllPostsSorted } from './posts';

export function generateRssFeed(): string {
  const posts = getAllPostsSorted();
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://coastalcalm.vercel.app';
  const buildDate = new Date().toUTCString();

  const rssItems = posts
    .map((post) => {
      const postUrl = `${siteUrl}/articles/${post.slug}`;
      const pubDate = new Date(post.date).toUTCString();

      return `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${postUrl}</link>
      <guid>${postUrl}</guid>
      <pubDate>${pubDate}</pubDate>
      <description><![CDATA[${post.description}]]></description>
      ${post.tags.map((tag) => `<category>${tag}</category>`).join('\n      ')}
    </item>`;
    })
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Coastal Calm Therapy Blog</title>
    <link>${siteUrl}</link>
    <description>Calm. Clarity. Connection. - Insights on mindfulness, mental health, and calm living.</description>
    <language>en-gb</language>
    <lastBuildDate>${buildDate}</lastBuildDate>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml"/>
${rssItems}
  </channel>
</rss>`;
}

