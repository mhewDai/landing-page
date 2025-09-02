import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://yourusername.github.io',
  base: process.env.NODE_ENV === 'production' ? '/landing-page' : undefined,
  build: {
    assets: 'assets'
  }
});