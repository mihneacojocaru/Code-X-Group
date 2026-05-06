import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import AutoImport from "astro-auto-import";
import react from "@astrojs/react";
import keystatic from "@keystatic/astro";
import netlify from "@astrojs/netlify";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://code-x.group",
  devToolbar: { enabled: false },
  adapter: netlify({
    imageCDN: false,
  }),
  redirects: {
    "/admin": "/keystatic",
  },
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
    keystatic(),
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
