import { type ContactData } from "../types/configDataTypes";

const contactData: ContactData = {
  badge: "Code-X Consulting",
  heading: "Let's talk.",
  description:
    "If you work on data spaces, AI, or platform ecosystems and want to achieve real market success — let's talk.",
  
  contactLinks: [
    {
      title: "Email",
      description: "Direct inquiry for strategic conversations",
      linkText: "ch@code-x.group",
      href: "mailto:ch@code-x.group",
      icon: "email",
    },
    {
      title: "LinkedIn",
      description: "Connect & follow insights",
      linkText: "Christoph Herr",
      href: "https://www.linkedin.com/in/christoph-herr-bonn/",
      icon: "linkedin",
      external: true,
    },
    {
      title: "Calendly",
      description: "Book a strategy session directly",
      linkText: "Book appointment",
      href: "#",
      icon: "calendar",
    },
  ],
};

export default contactData;
