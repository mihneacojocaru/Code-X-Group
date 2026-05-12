import { sanityClient } from "sanity:client";
import type { SanityPost } from "@/types/sanity";
import { slugify } from "@/js/textUtils";
import { locales } from "@/config/siteSettings.json";

// GROQ projection used in all post queries
const POST_PROJECTION = `{
  _id,
  title,
  slug,
  language,
  description,
  publishedAt,
  updatedAt,
  heroImage,
  categories,
  draft,
  mappingKey,
  author-> {
    _id,
    name,
    slug,
    avatar,
    about,
    email,
    authorLink
  }
}`;

// --------------------------------------------------------
/**
 * Get all published posts, optionally filtered by language, sorted newest first.
 */
export async function getAllPosts(lang?: (typeof locales)[number]): Promise<SanityPost[]> {
  const langFilter = lang ? `&& language == $lang` : "";
  const query = `*[_type == "post" && draft != true ${langFilter}] | order(publishedAt desc) ${POST_PROJECTION}`;
  const params = lang ? { lang } : {};
  return sanityClient.fetch<SanityPost[]>(query, params);
}

// --------------------------------------------------------
/**
 * Like getAllPosts but falls back to "en" if the requested locale has no posts.
 */
export async function getAllPostsForLocale(
  lang: (typeof locales)[number],
): Promise<SanityPost[]> {
  const posts = await getAllPosts(lang);
  if (posts.length === 0 && lang !== "en") {
    return getAllPosts("en");
  }
  return posts;
}

// --------------------------------------------------------
/**
 * Get all published posts with body (for single post pages).
 */
export async function getPostBySlug(slug: string): Promise<SanityPost | null> {
  const query = `*[_type == "post" && slug.current == $slug && draft != true][0] {
    _id,
    title,
    slug,
    language,
    description,
    publishedAt,
    updatedAt,
    heroImage,
    categories,
    draft,
    mappingKey,
    body,
    author-> {
      _id,
      name,
      slug,
      avatar,
      about,
      email,
      authorLink
    }
  }`;
  return sanityClient.fetch<SanityPost | null>(query, { slug });
}

// --------------------------------------------------------
/**
 * Get all post slugs for static path generation.
 */
export async function getAllPostSlugs(lang?: (typeof locales)[number]): Promise<string[]> {
  const langFilter = lang ? `&& language == $lang` : "";
  const query = `*[_type == "post" && draft != true ${langFilter}]{ "slug": slug.current }`;
  const params = lang ? { lang } : {};
  const results = await sanityClient.fetch<{ slug: string }[]>(query, params);
  return results.map((r) => r.slug);
}

// --------------------------------------------------------
/**
 * Returns true if two posts share at least one category.
 */
export function arePostsRelated(postOne: SanityPost, postTwo: SanityPost): boolean {
  if (postOne._id === postTwo._id) return false;

  if (
    !postOne.categories ||
    !postTwo.categories ||
    postOne.categories.length === 0 ||
    postTwo.categories.length === 0
  )
    return false;

  const sluggedOne = postOne.categories.map(slugify);
  const sluggedTwo = postTwo.categories.map(slugify);

  return sluggedOne.some((cat) => sluggedTwo.includes(cat));
}

// --------------------------------------------------------
/**
 * Returns an object with counts of each item.
 * e.g. { productivity: 2, 'cool-code': 1 }
 */
export function countItems(items: string[]): Record<string, number> {
  return items.reduce(
    (acc, item) => {
      const key = slugify(item);
      return { ...acc, [key]: (acc[key] || 0) + 1 };
    },
    {} as Record<string, number>,
  );
}

// --------------------------------------------------------
/**
 * Returns array of [key, count] pairs sorted by count descending.
 * e.g. [ ['productivity', 2], ['cool-code', 1] ]
 */
export function sortByValue(obj: Record<string, number>): [string, number][] {
  return Object.entries(obj).sort((a, b) => b[1] - a[1]);
}

// --------------------------------------------------------
/**
 * Extracts headings from Portable Text body blocks for the Table of Contents.
 */
export interface BlogHeading {
  depth: number;
  slug: string;
  text: string;
}

export function extractHeadingsFromBody(
  body: import("@/types/sanity").PortableTextBlock[] | undefined,
): BlogHeading[] {
  if (!body) return [];

  return body
    .filter(
      (block): block is import("@/types/sanity").PortableTextBlock =>
        block._type === "block" && /^h[2-6]$/.test((block as { style?: string }).style ?? ""),
    )
    .map((block) => {
      const style = (block as { style?: string }).style ?? "h2";
      const children = (block as { children?: { text?: string }[] }).children ?? [];
      const text = children.map((c) => c.text ?? "").join("");
      return {
        depth: parseInt(style.charAt(1)),
        slug: slugify(text),
        text,
      };
    });
}
