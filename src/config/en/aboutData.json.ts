import { type AboutData } from "../types/configDataTypes";
import strategyImage from "@images/abouts/GraphikKI-&Datenökosystemstrategie.png";
import industrialImage from "@images/abouts/GraphikIndustrialAI&DataEcosystems.png";
import dataSpacesImage from "@images/abouts/GraphikDatenökonomie&DataSpaces.png";
import coworkingImage from "@images/abouts/GraphikVenture,M&A&Innovation.png";

const aboutData: AboutData = {
  heroBadge: "Code-X Consulting",
  heroHeading: "Data Spaces That Pay Off",
  heroText:
    "I guide organizations from funded projects to sustainable business models — with clear strategy, strong governance, and scalable approaches.",

  missionBadge: "Mission",
  missionHeading: "What Drives Me",
  missionText:
    "Despite billions in European investment, many data space initiatives fail. The root cause is not in technology — but in strategy and operations. Code-X bridges this gap: between technology and business, regulation and market, innovation and investment.",

  whyPartner: {
    badge: "Christoph Herr",
    heading: "Why I'm the Right Partner",
    subheading:
      "A unique combination of operational experience, strategic expertise, and European networks — rarely found at this depth.",
    stats: [
      {
        value: 20,
        suffix: "+",
        label: "Years of Experience",
        description: "In technology, industry, and innovation",
      },
      {
        value: 80,
        suffix: "+",
        label: "Startup Projects",
        description: "Scouting, evaluation, and strategic guidance",
      },
      {
        value: 3,
        suffix: "",
        label: "Core Competencies",
        description: "AI, data economy & industrial transformation",
      },
    ],
    cards: [
      {
        title: "Unique Combination",
        description:
          "AI, data economy, industry, and venture — rarely found in a single person.",
      },
      {
        title: "European Initiatives",
        description:
          "Active co-shaping of Manufacturing-X, GAIA-X, and EHDS / sphin-X firsthand.",
      },
      {
        title: "Strong Network",
        description:
          "Connected with industry, startups, research, and the public sector across Europe.",
      },
    ],
  },

  expertiseBadge: "Strategy",
  expertiseHeading: "Services",
  expertiseSubheading:
    "Four strategic focus areas — tailored for industrial decision-makers, technology providers, and public institutions.",
  expertise: [
    {
      image: strategyImage,
      title: "AI & Data Ecosystem Strategy",
      items: [
        "Developing AI and data strategies",
        "Integrating AI into industrial environments",
        "Designing data ecosystems and architectures",
        "Aligning with European initiatives and regulations (EHDS, EU Data Act, Data Governance Act, …)",
      ],
    },
    {
      image: industrialImage,
      title: "Industrial AI & Data Ecosystems",
      items: [
        "Strategy for data-driven ecosystems",
        "Defining AI use cases in industrial contexts",
        "Scaling AI solutions in enterprise environments",
        "Integrating machine and production data",
      ],
    },
    {
      image: dataSpacesImage,
      title: "Data Economy & Data Spaces",
      items: [
        "sphin-X, Manufacturing-X, Factory-X, Scale-MX, GAIA-X, …",
        "Data governance and interoperability",
        "Designing data exchange models",
        "Developing data-driven business models",
      ],
    },
    {
      image: coworkingImage,
      title: "Venture, M&A & Innovation",
      items: [
        "Startup scouting and evaluation",
        "Technology assessment (AI / Deep Tech)",
        "Build-vs.-buy decisions",
        "Strategic partnerships and ecosystem development",
      ],
    },
  ],

  servicesBadge: "Services",
  servicesHeading: "What I Offer",
  services: [
    {
      title: "Data Space Strategy",
      description:
        "Define your ecosystem role, develop business models, and establish market positioning.",
    },
    {
      title: "Ecosystem Design",
      description: "Shape actors, roles, governance, and value creation models.",
    },
    {
      title: "Venture & Investment Models",
      description: "Develop venture capital structures, funding strategies, and investment theses.",
    },
    {
      title: "Strategic Transformation",
      description: "Guide organizational restructuring and strategic initiatives.",
    },
    {
      title: "Interim & Advisory",
      description: "Take on active leadership roles in transformation programs.",
    },
  ],

  referencesBadge: "References",
  referencesHeading: "Selected Engagements",
  references: [
    {
      title: "VDMA",
      description:
        "Expert in platform economics and business software, Working Group CDO & CIO, Task Force Manufacturing-X",
    },
    {
      title: "KION Group AG",
      description:
        "Digital Business, Corporate Venture Capital — innovative digital products for intralogistics",
    },
    {
      title: "Startup & Venture Capital Industry",
      description:
        ">10 years as GmbH Managing Director / AG Board Member; innovative IT products with disruption potential; Investment Manager for venture capital investments",
    },
    {
      title: "Deutsche Forschungsgemeinschaft (DFG)",
      description:
        "Engineering Sciences Group (DFG Ideas Workshop) — innovative products and services from DFG-funded research",
    },
    {
      title: "Deutsche Telekom AG",
      description: "Headquarters, Board Division Technology & Services",
    },
  ],
};

export default aboutData;
