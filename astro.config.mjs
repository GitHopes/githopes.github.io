// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import netlify from '@astrojs/netlify';
// import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: 'https://githopes.github.io',
  base: "/githopes.github.io/",
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [react()],

  experimental: {
    fonts: [{
      provider: fontProviders.google(),
      name: "Geist",
      cssVariable: "--font-geist",
      fallbacks: ["Inter", "sans-serif"],
    }]
  },
  adapter: netlify()
//  adapter: vercel()
});