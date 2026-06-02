import { type ContactData } from "../types/configDataTypes";

const contactData: ContactData = {
  badge: "Code-X Consulting",
  heading: "Let's talk.",
  description:
    "Wenn Sie an Datenräumen, KI oder Plattform-Ökosystemen arbeiten und echten Markterfolg erzielen möchten – sprechen wir.",
  
  contactLinks: [
    {
      title: "E-Mail",
      description: "Direkte Anfrage für strategische Gespräche",
      linkText: "ch@code-x.group",
      href: "mailto:ch@code-x.group",
      icon: "email",
    },
    {
      title: "LinkedIn",
      description: "Vernetzen & Insights folgen",
      linkText: "Christoph Herr",
      href: "https://www.linkedin.com/in/christoph-herr-bonn/",
      icon: "linkedin",
      external: true,
    },
    {
      title: "Calendly",
      description: "Strategiegespräch direkt buchen",
      linkText: "Termin buchen",
      href: "#",
      icon: "calendar",
    },
  ],
};

export default contactData;
