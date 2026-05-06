// site data types
export interface SiteDataProps {
  name: string;
  title: string;
  description: string;
  author: {
    // used for blog post purposes
    name: string;
    email: string;
    twitter: string; // used for twitter cards when sharing a blog post on twitter
  };
  defaultImage: {
    src: string;
    alt: string;
  };
}

// --------------------------------------------------------
// nav data types
export interface navLinkItem {
  text: string;
  link: string;
  newTab?: boolean; // adds target="_blank" rel="noopener noreferrer" to link
  icon?: string; // adds an icon to the left of the text
}

export interface navDropdownItem {
  text: string;
  dropdown: navLinkItem[];
}

export interface navMegaDropdownColumn {
  title: string;
  items: navLinkItem[];
}

export interface navMegaDropdownItem {
  text: string;
  megaMenuColumns: navMegaDropdownColumn[];
}

export type navItem = navLinkItem | navDropdownItem | navMegaDropdownItem;

// --------------------------------------------------------
// faq data types
export interface FaqItem {
  question: string; // this is the question of the accordion
  answer: string; // these are the details seen after expanding the accordion
}

// --------------------------------------------------------
// testimonial data types
export interface TestimonialItem {
  avatar: ImageMetadata; // an imported image
  name: string;
  title: string;
  testimonial: string;
}

// --------------------------------------------------------
// team data types
export interface teamMember {
  image: ImageMetadata; // an imported image
  name: string;
  title: string;
  bio: string;
}

// --------------------------------------------------------
// homepage data types
export interface HomepageItem {
  title: string;
  description: string;
}

export interface SolutionItem {
  icon: string;
  title: string;
  description: string;
}

export interface HomepageData {
  solutionBadge: string;
  solutionHeading: string;
  solutionText: string;
  solutionItems: SolutionItem[];
  problemBadge: string;
  problemHeading: string;
  problemIntro: string;
  problems: HomepageItem[];
  servicesBadge: string;
  servicesHeading: string;
  servicesIntro: string;
  services: (HomepageItem & { number: string })[];
  servicesLinkText: string;
  industriesBadge: string;
  industriesHeading: string;
  industriesIntro: string;
  industries: (HomepageItem & { icon: string })[];
}

// --------------------------------------------------------
// about page data types
export interface AboutData {
  heroBadge: string;
  heroHeading: string;
  heroText: string;
  missionBadge: string;
  missionHeading: string;
  missionText: string;
  visionBadge: string;
  visionHeading: string;
  visionText: string;
  expertiseBadge: string;
  expertiseHeading: string;
  expertise: (HomepageItem & { number: string })[];
  servicesBadge: string;
  servicesHeading: string;
  services: HomepageItem[];
  referencesBadge: string;
  referencesHeading: string;
  references: HomepageItem[];
}

// --------------------------------------------------------
// contact page data types
export interface ContactLink {
  title: string;
  description: string;
  linkText: string;
  href: string;
  icon: "email" | "linkedin" | "calendar";
  external?: boolean;
}

export interface ContactData {
  badge: string;
  heading: string;
  description: string;
  contactLinks: ContactLink[];
}

// --------------------------------------------------------
// site settings types
export interface SiteSettingsProps {
  useViewTransitions?: boolean;
  useAnimations?: boolean;
  copyLinkButtons?: boolean;
}
