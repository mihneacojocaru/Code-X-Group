import { locales, defaultLocale } from "@/config/siteSettings.json";

/**
 * * returns the current locale gathered from the URL
 */
export function getLocaleFromUrl(url: URL): (typeof locales)[number] {
  const [, locale] = url.pathname.split("/");

  //@ts-expect-error element is guaranteed to be an appropriate string
  if (locales.includes(locale)) return locale as (typeof locales)[number];
  return defaultLocale;
}

/**
 * * removes any instances of the locale from the URL slug
 */
export function removeLocaleFromSlug(slug: string): string {
  const SlugElements = slug.split("/");
  const newSlugElements = SlugElements.filter(
    //@ts-expect-error element is guaranteed to be an appropriate string
    (element) => !locales.includes(element),
  );
  return newSlugElements.join("/");
}
