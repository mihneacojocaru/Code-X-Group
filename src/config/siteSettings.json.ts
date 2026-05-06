/**
 * Global site settings
 */

import { type SiteSettingsProps } from "./types/configDataTypes";

// The below locales need to match what you've put in your `astro.config.mjs` file
export const locales = ["de", "en"] as const;
export const defaultLocale = "de" as const;

// localeMap is used to map languages to their respective locales - used for formatDate function
export const localeMap = {
  de: "de-DE",
  en: "en-US",
} as const;

// text to show in the language switcher for each locale
export const languageSwitcherMap = {
  de: "DE",
  en: "EN",
} as const;

// site settings that don't change between languages
export const siteSettings: SiteSettingsProps = {
  useViewTransitions: true,
  // set to "false" to disable the copy link button for headings on blog posts
  copyLinkButtons: true,
  useAnimations: true,
};

export default siteSettings;
