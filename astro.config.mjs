// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import preact from '@astrojs/preact';
import icon from 'astro-icon';
import mdx from '@astrojs/mdx';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [preact(), icon(), mdx()],
  fonts: [
    {
    provider: fontProviders.google(),
    name: "Special Elite",
    cssVariable: "--font-rugged",
    },
    {
    provider: fontProviders.google(),
    name: "Rubik Dirt",
    cssVariable: "--font-header",
    },
    {
    provider: fontProviders.google(),
    name: "Ubuntu",
    cssVariable: "--font-content",
    fallbacks: ["font-sans"],
    },
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});