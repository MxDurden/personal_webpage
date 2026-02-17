import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://isaacquezada.dev',
  output: "static",
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => !page.includes('/h4x0r'),
    }),
  ],
});
