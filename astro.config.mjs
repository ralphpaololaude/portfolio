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
    fallbacks: ["font-serif"],
    },
    {
    provider: fontProviders.google(),
    name: "Rubik Dirt",
    cssVariable: "--font-hero",
    fallbacks: ["font-serif"],
    },
    {
    provider: fontProviders.google(),
    name: "Fira Sans",
    cssVariable: "--font-content",
    fallbacks: ["font-sans"],
    },
    {
    provider: fontProviders.fontsource(),
    name: "Adamina",
    cssVariable: "--font-header",
    fallbacks: ["font-serif"],
    },
    {
    provider: fontProviders.fontsource(),
    name: "Mononoki",
    cssVariable: "--font-code",
    fallbacks: ["font-mono"],
    },
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});