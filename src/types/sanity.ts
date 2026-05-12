import type { PortableTextBlock } from "@portabletext/types";

export interface SanityImageAsset {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
  hotspot?: {
    x: number;
    y: number;
    height: number;
    width: number;
  };
  alt?: string;
  caption?: string;
}

export interface SanityAuthor {
  _id: string;
  name: string;
  slug: { current: string };
  avatar?: SanityImageAsset;
  about?: string;
  email?: string;
  authorLink?: string;
}

export interface SanityPost {
  _id: string;
  title: string;
  slug: { current: string };
  language: "de" | "en";
  description: string;
  publishedAt: string;
  updatedAt?: string;
  heroImage?: SanityImageAsset;
  categories?: string[];
  draft?: boolean;
  author?: SanityAuthor;
  body?: PortableTextBlock[];
  mappingKey?: string;
}

export type { PortableTextBlock };
