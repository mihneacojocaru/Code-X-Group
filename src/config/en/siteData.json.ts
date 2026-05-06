import { type SiteDataProps } from "../types/configDataTypes";

// Update this file with your site specific information
const siteData: SiteDataProps = {
  name: "Code-X Group",
  // Your website's title and description (meta fields)
  title: "Code-X Group – Turning Data Spaces into Business",
  description:
    "Strategy, Ecosystems, and Venture Models for AI & Data Spaces in Europe. Code-X makes data spaces economically viable.",

  // Your information for blog post purposes
  author: {
    name: "Code-X Group",
    email: "ch@code-x.group",
    twitter: "",
  },

  // default image for meta tags if the page doesn't have an image already
  defaultImage: {
    src: "/images/theme.png",
    alt: "Code-X Group – Turning Data Spaces into Business",
  },
};

export default siteData;
