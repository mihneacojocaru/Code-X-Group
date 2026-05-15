import { sanityClient } from "sanity:client";
import type { SanityPress } from "@/types/sanity";

export async function getAllPressItems(): Promise<SanityPress[]> {
  return sanityClient.fetch(
    `*[_type == "press"] | order(order asc, _createdAt asc) {
      _id, category, title, description, url, linkText, order
    }`,
  );
}
