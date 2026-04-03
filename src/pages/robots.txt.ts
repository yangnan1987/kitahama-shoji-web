import type { APIRoute } from 'astro';

export const prerender = true;

export const GET: APIRoute = ({ site }) => {
  const siteRoot = site.toString().replace(/\/$/, '');
  const baseUrl = (import.meta.env.BASE_URL ?? '/').toString();
  const baseNormalized = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  const sitemapUrl = `${siteRoot}${baseNormalized}sitemap-index.xml`;

  return new Response(
    `User-agent: *\nAllow: /\nSitemap: ${sitemapUrl}\n`,
    {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    }
  );
};

