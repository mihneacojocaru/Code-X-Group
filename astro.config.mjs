import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import AutoImport from "astro-auto-import";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
import icon from "astro-icon";
import sanity from "@sanity/astro";

// Load .env file (Node.js 22+ built-in, no vite import needed)
try { process.loadEnvFile(); } catch {}

const SANITY_PROJECT_ID = process.env.SANITY_PROJECT_ID ?? "urhrskjs";
const SANITY_DATASET = process.env.SANITY_DATASET ?? "production";
const SANITY_API_VERSION = process.env.SANITY_API_VERSION ?? "2024-01-01";
const SANITY_TOKEN = process.env.SANITY_TOKEN;

// https://astro.build/config
export default defineConfig({
  site: "https://code-x.group",
  devToolbar: { enabled: false },
  adapter: vercel(),
  // i18n configuration must match src/config/translations.json.ts
  i18n: {
    defaultLocale: "de",
    locales: ["de", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  markdown: {
    shikiConfig: {
      // Shiki Themes: https://shiki.style/themes
      theme: "css-variables",
      wrap: true,
    },
  },
  integrations: [
    // example auto import component into blog post mdx files
    AutoImport({
      imports: [
        // https://github.com/delucis/astro-auto-import
        "@/components/admonition/Admonition.astro",
      ],
    }),
    mdx(),
    react(),
    icon(),
    sanity({
      projectId: SANITY_PROJECT_ID,
      dataset: SANITY_DATASET,
      useCdn: false,
      apiVersion: SANITY_API_VERSION,
      token: SANITY_TOKEN,
    }),
    sitemap(),
  ],

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      esbuildOptions: {
        target: "es2022",
      },
    },
    // fix for client router script duplication issues on 404 page
    build: {
      assetsInlineLimit: 0,
      target: "es2022",
    },
  },
});
