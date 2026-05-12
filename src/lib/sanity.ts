import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageAsset } from "@/types/sanity";

// Use env vars directly — avoids importing sanity:client (server-only virtual module)
// in any file that could be bundled for the browser.
const projectId = import.meta.env.SANITY_PROJECT_ID ?? "urhrskjs";
const dataset = import.meta.env.SANITY_DATASET ?? "production";

const builder = imageUrlBuilder({ projectId, dataset });

export function urlFor(source: SanityImageAsset) {
  return builder.image(source);
}
