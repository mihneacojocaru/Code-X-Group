import { type SiteDataProps } from "../types/configDataTypes";

// Update this file with your site specific information
const siteData: SiteDataProps = {
  name: "Code-X Consulting",
  // Your website's title and description (meta fields)
  title: "Code-X Consulting – Turning Data Spaces into Business",
  description:
    "Strategy, Ecosystems, and Venture Models for AI & Data Spaces in Europe. Code-X makes data spaces economically viable.",

  // Your information for blog post purposes
  author: {
    name: "Code-X Consulting",
    email: "ch@code-x.group",
    twitter: "",
  },

  // default image for meta tags if the page doesn't have an image already
  defaultImage: {
    src: "/images/og-image-en.png",
    alt: "Code-X Consulting – Data Spaces That Pay Off",
  },
};

export default siteData;
