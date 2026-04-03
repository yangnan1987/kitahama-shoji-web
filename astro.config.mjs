// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

function normalizeBasePath(input) {
  let basePath = input ?? '/';
  if (!basePath.startsWith('/')) basePath = `/${basePath}`;
  if (!basePath.endsWith('/')) basePath = `${basePath}/`;
  return basePath;
}

const site = process.env.PUBLIC_SITE_URL ?? 'https://kitahamashoji.com';
const base = normalizeBasePath(process.env.PUBLIC_BASE_PATH ?? '/');

// https://astro.build/config
export default defineConfig({
  site,
  base,
  integrations: [sitemap()],
});
