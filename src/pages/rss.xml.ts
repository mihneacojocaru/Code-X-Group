import type { APIContext } from "astro";
import rss from "@astrojs/rss";
import { getLocalizedRoute } from "@/js/translationUtils";

// utils
import { defaultLocale } from "@/config/siteSettings.json";
import { getTranslatedData } from "@/js/translationUtils";
import { getAllPostsForLocale } from "@/js/blogUtils";
import { urlFor } from "@/lib/sanity";

// data
const siteData = getTranslatedData("siteData", defaultLocale);

const rssLocale = defaultLocale;

export async function GET(context: APIContext) {
  const posts = await getAllPostsForLocale(rssLocale);

  return rss({
    title: siteData.title,
    description: siteData.description,
    site: context.site ?? import.meta.env.SITE,
    xmlns: {
      media: "http://search.yahoo.com/mrss/",
      atom: "http://www.w3.org/2005/Atom",
    },
    customData: `<atom:link href="${context.site}rss.xml" rel="self" type="application/rss+xml" />`,
    items: posts.map((post) => ({
      title: post.title,
      description: post.description,
      pubDate: new Date(post.publishedAt),
      author: post.author
        ? `${post.author.email ?? ""} (${post.author.name})`
        : undefined,
      customData: post.heroImage
        ? `<media:content medium="image" url="${urlFor(post.heroImage).width(1200).auto("format").url()}" />`
        : "",
      link: getLocalizedRoute(rssLocale, `/blog/${post.slug.current}/`),
    })),
  });
}
