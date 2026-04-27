import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const site = context.site?.toString().replace(/\/$/, '') ?? '';

  const posts = (await getCollection('posts', ({ data }) => !data.draft))
    .sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

  const tags = [...new Set(posts.flatMap((p) => p.data.tags))];

  const staticRoutes = ['/', '/rss.xml'];

  const postUrls = posts.map((post) => ({
    url: `/posts/${post.id}/`,
    lastmod: (post.data.updatedDate ?? post.data.pubDate).toISOString().split('T')[0],
    priority: '0.8',
  }));

  const tagUrls = tags.map((tag) => ({
    url: `/tags/${tag}/`,
    lastmod: new Date().toISOString().split('T')[0],
    priority: '0.5',
  }));

  const staticUrls = staticRoutes.map((route) => ({
    url: route,
    lastmod: new Date().toISOString().split('T')[0],
    priority: route === '/' ? '1.0' : '0.3',
  }));

  const allUrls = [...staticUrls, ...postUrls, ...tagUrls];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    ({ url, lastmod, priority }) => `  <url>
    <loc>${site}${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>${priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
