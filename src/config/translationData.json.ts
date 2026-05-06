/**
 * * Configuration of the i18n system data files and text translations
 * Example translations below are for English and French, with textTranslations used in src/layouts/BlogLayoutCenter.astro and src/components/hero/[hero].astro
 */

/**
 * * Data file configuration for the i18n system
 * Every {Data} key must exist in the below object
 */
import siteDataEn from "./en/siteData.json";
import navDataEn from "./en/navData.json";
import faqDataEn from "./en/faqData.json";
import testimonialDataEn from "./en/testimonialData.json";
import teamDataEn from "./en/teamData.json";
import homepageDataEn from "./en/homepageData.json";
import aboutDataEn from "./en/aboutData.json";
import contactDataEn from "./en/contactData.json";
import siteDataDe from "./de/siteData.json";
import navDataDe from "./de/navData.json";
import faqDataDe from "./de/faqData.json";
import testimonialDataDe from "./de/testimonialData.json";
import teamDataDe from "./de/teamData.json";
import homepageDataDe from "./de/homepageData.json";
import aboutDataDe from "./de/aboutData.json";
import contactDataDe from "./de/contactData.json";

export const dataTranslations = {
  de: {
    siteData: siteDataDe,
    navData: navDataDe,
    faqData: faqDataDe,
    testimonialData: testimonialDataDe,
    teamData: teamDataDe,
    homepageData: homepageDataDe,
    aboutData: aboutDataDe,
    contactData: contactDataDe,
  },
  en: {
    siteData: siteDataEn,
    navData: navDataEn,
    faqData: faqDataEn,
    testimonialData: testimonialDataEn,
    teamData: teamDataEn,
    homepageData: homepageDataEn,
    aboutData: aboutDataEn,
    contactData: contactDataEn,
  },
} as const;

/**
 * * Text translations are used with the `useTranslation` function from src/js/i18nUtils.ts to translate various strings on your site.
 *
 * ## Examples
 *
 * ```ts
 * import { getLocaleFromUrl } from "@/js/localeUtils";
 * import { useTranslations } from "@/js/translationUtils";
 * const currLocale = getLocaleFromUrl(Astro.url);
 * const t = useTranslations(currLocale);
 * t("back_to_all_posts"); // this would be "Retour à tous les articles" if the current locale is "fr"
 * ```
 * or
 * ```ts
 * import { useTranslations } from "@/js/translationUtils";
 * const t = useTranslations("fr");
 * t("back_to_all_posts"); // this would be "Retour à tous les articles"
 * ```
 */
export const textTranslations = {
  de: {
    hero_text: "Turning Data Spaces into Business",
    hero_description: `Strategy, Ecosystems und Venture Models für KI & Datenräume in Europa.`,
    hero_button: "Jetzt sprechen",

    // cta
    cta_heading: "Let's talk.",
    cta_text: "Wenn Sie an Datenräumen, KI oder Plattform-Ökosystemen arbeiten und echten Markterfolg erzielen möchten – sprechen wir.",
    cta_button: "Kontakt aufnehmen",

    // blog
    back_to_all_posts: "Zurück zur Übersicht",
    updated: "Aktualisiert",
    share_this_article: "Artikel teilen",
    table_of_contents: "Inhaltsverzeichnis",

    // Authentication - Sign In
    signin_title: "In Ihrem Konto anmelden",
    signin_welcome: "Schön, Sie wiederzusehen!",
    signin_with_google: "Mit Google anmelden",
    signin_with_apple: "Mit Apple anmelden",
    signin_with_email: "oder mit E-Mail anmelden",
    email_placeholder: "E-Mail-Adresse eingeben",
    password_placeholder: "Passwort eingeben",
    login_button: "Anmelden",
    no_account: "Noch kein Konto? ",
    signup_link: "Registrieren",

    // Authentication - Sign Up
    signup_title: "Konto erstellen",
    signup_welcome: "Willkommen!",
    signup_with_google: "Mit Google registrieren",
    signup_with_apple: "Mit Apple registrieren",
    signup_with_email: "oder mit E-Mail registrieren",
    signup_button: "Registrieren",
    have_account: "Bereits ein Konto? ",
    signin_link: "Anmelden",
  },
  en: {
    hero_text: "Turning Data Spaces into Business",
    hero_description: `Strategy, Ecosystems, and Venture Models for AI & Data Spaces in Europe.`,
    hero_button: "Let's talk",

    // cta
    cta_heading: "Let's talk.",
    cta_text: "If you work on data spaces, AI, or platform ecosystems and want to achieve real market success — let's talk.",
    cta_button: "Get in touch",

    // blog
    back_to_all_posts: "Back to all posts",
    updated: "Updated",
    share_this_article: "Share this article",
    table_of_contents: "Table of Contents",

    // Authentication - Sign In
    signin_title: "Log in to your account",
    signin_welcome: "Good to have you back!",
    signin_with_google: "Sign in with Google",
    signin_with_apple: "Sign in with Apple",
    signin_with_email: "or sign in with email",
    email_placeholder: "Enter your email",
    password_placeholder: "Enter your password",
    login_button: "Log in",
    no_account: "Don't have an account? ",
    signup_link: "Sign up",

    // Authentication - Sign Up
    signup_title: "Create your account",
    signup_welcome: "Join our community today!",
    signup_with_google: "Sign up with Google",
    signup_with_apple: "Sign up with Apple",
    signup_with_email: "or sign up with email",
    signup_button: "Sign up",
    have_account: "Already have an account? ",
    signin_link: "Sign in",
  },
} as const;

/**
 * * Route translations are used to translate route names for the language switcher component
 * This can be useful for SEO reasons. The key does not matter, it just needs to match between languages
 *
 * These routes must be everything after the base domain. So if this is "atlas.com/blog", the route would be "blog"
 * Or if this is "atlas.com/legal/privacy", the route would be "legal/privacy"
 *
 * This also supports wildcards. For example, "categories/*" would match "categories/1" or "categories/2" etc for that language.
 *
 * Note: This works in conjunction with the localizedCollections object below
 */
export const routeTranslations = {
  de: {
    overviewKey: "overview",
    categoryKey: "categories",
    categoryKey2: "categories/*",
    categoryKey3: "categories",
    blogKey: "blog",
    careersKey: "careers",
  },
  en: {
    overviewKey: "overview",
    categoryKey: "categories",
    categoryKey2: "categories/*",
    categoryKey3: "categories",
    blogKey: "blog",
    careersKey: "careers",
  },
} as const;

/**
 * * Content collection translations used by the language switcher and hreflang generator
 *
 * Per-collection, per-locale route base mapping (collections to localize are the keys)
 *
 * If you have a key of "blog" then the blog content collection will be localized. This will look
 * for a "mappingKey" in the entry metadata, and use that to map the entry to the correct locale
 *
 * You can use the locale value to map the collection to a different route if desired
 */
export const localizedCollections = {
  blog: {
    de: "blog",
    en: "blog",
  },
  // Add more collections/locales as needed
} as const;
