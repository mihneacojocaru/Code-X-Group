import type { SanityPost, SanityAuthor } from "@/types/sanity";

// utils
import { getTranslatedData } from "@/js/translationUtils";
import { defaultLocale } from "@/config/siteSettings.json";

// data - siteData.title should not change based on locale so this should be fine
const siteData = getTranslatedData("siteData", defaultLocale);

interface GeneralProps {
  type: "general";
}

type JsonLdAuthor = {
  "@type": "Person";
  name: string;
  url: string;
};

export interface BlogProps {
  type: "blog";
  post: SanityPost;
  image: { src: string };
  canonicalUrl: URL;
}

export type JsonLDProps = BlogProps | GeneralProps;

export default function jsonLDGenerator(props: JsonLDProps) {
  const { type } = props;
  if (type === "blog") {
    const { post, image, canonicalUrl } = props as BlogProps;

    let authorsJsonLd: JsonLdAuthor | JsonLdAuthor[] | undefined;
    if (post.author) {
      authorsJsonLd = {
        "@type": "Person",
        name: post.author.name,
        url: post.author.authorLink ?? "",
      };
    }

    return `<script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "Blogposting",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "${canonicalUrl}"
        },
        "headline": "${post.title.replace(/"/g, '\\"')}",
        "description": "${post.description.replace(/"/g, '\\"')}",
        "image": "${image.src}",
        ${authorsJsonLd ? `"author": ${JSON.stringify(authorsJsonLd)},` : ""}
        "datePublished": "${post.publishedAt}",
        "dateModified": "${post.updatedAt ?? post.publishedAt}"
      }
    </script>`;
  }
  return `<script type="application/ld+json">
      {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      "name": "${siteData.title}",
      "url": "${import.meta.env.SITE}"
      }
    </script>`;
}
