/**
 * Syncs root pages to src/pages/en/ before build/dev.
 * Only edit root pages (src/pages/*.astro) — this script keeps /en/ in sync automatically.
 * Pages listed in UNIQUE_EN_PAGES are skipped (they have unique EN content).
 */

import { copyFileSync, mkdirSync, existsSync, readdirSync, statSync } from "fs";
import { join, dirname, relative } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const srcPages = join(root, "src/pages");
const enPages = join(root, "src/pages/en");

// These paths (relative to src/pages/) in /en/ are maintained manually — do NOT overwrite them
const UNIQUE_EN_PAGES = new Set(["impressum.astro", "404.astro", "blog/[...slug].astro"]);

// These root-level pages/folders are synced to /en/
const SYNC_TARGETS = [
  "index.astro",
  "about.astro",
  "contact.astro",
  "blog/index.astro",
  "blog/[...slug].astro",
  "categories/index.astro",
  "categories/[category].astro",
  "rss.xml.ts",
];

let synced = 0;

for (const target of SYNC_TARGETS) {
  const filename = target.split("/").pop();
  if (UNIQUE_EN_PAGES.has(filename) || UNIQUE_EN_PAGES.has(target)) continue;

  const src = join(srcPages, target);
  const dest = join(enPages, target);

  if (!existsSync(src)) continue;

  mkdirSync(dirname(dest), { recursive: true });
  copyFileSync(src, dest);
  synced++;
}

console.log(`[sync-en-pages] Synced ${synced} pages to src/pages/en/`);
