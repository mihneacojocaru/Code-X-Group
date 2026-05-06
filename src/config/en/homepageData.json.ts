import { type HomepageData } from "../types/configDataTypes";

const homepageData: HomepageData = {
  solutionBadge: "Our Solution",
  solutionHeading: "What makes Code-X different",
  solutionText:
    "Code-X bridges the gap between technology and business, regulation and market, innovation and investment. We design and implement data space strategies, platform business models, governance structures, and venture capital approaches with a clear focus on market impact.",
  solutionItems: [
    {
      icon: "tabler/devices",
      title: "Technology",
      description: "From infrastructure to scalable platforms",
    },
    {
      icon: "tabler/briefcase",
      title: "Strategy",
      description: "From projects to sustainable business models",
    },
    {
      icon: "tabler/circle-arrow-up",
      title: "Market",
      description: "From funding logic to real market impact",
    },
  ],

  problemBadge: "The Problem",
  problemHeading: "Why Data Spaces Fail Today",
  problemIntro:
    "Despite billions in European investment, data space initiatives fall short of their goals. The root cause is not in technology — but in strategy and operations.",
  problems: [
    {
      title: "No Scaling",
      description: "Data space technologies are not adopted at market scale — despite billions in European investment.",
    },
    {
      title: "Unclear Models",
      description: "Business models remain vague, monetization paths are missing — without clear value creation every initiative fails.",
    },
    {
      title: "Fragmented Governance",
      description: "Missing unified governance structures prevent market impact and paralyze collective value creation.",
    },
    {
      title: "Strategy & Implementation",
      description: "The gap is not technological. It is strategic and operational.",
    },
  ],

  servicesBadge: "What We Do",
  servicesHeading: "Three Core Disciplines",
  servicesIntro:
    "Code-X bridges the gap between technology and business, regulation and market, innovation and investment.",
  services: [
    {
      number: "01",
      title: "Strategy",
      description:
        "Clear positioning, viable business models, and structured market entry for data ecosystems.",
    },
    {
      number: "02",
      title: "Ecosystems",
      description:
        "Design and orchestration of multi-stakeholder environments with effective governance and clear role models.",
    },
    {
      number: "03",
      title: "Investment",
      description:
        "Development of venture capital structures, funding strategies, and investment theses for data spaces.",
    },
  ],

  servicesLinkText: "Learn more",

  industriesBadge: "Industries",
  industriesHeading: "Who We Work With",
  industriesIntro:
    "We guide organizations from different industries toward viable data space business models.",
  industries: [
    {
      title: "Manufacturing & Industry",
      description:
        "Manufacturing-X, industrial platforms, and cross-enterprise data collaboration.",
    },
    {
      title: "Technology Providers",
      description: "Data differentiation, platform strategy, and market positioning for tech companies.",
    },
    {
      title: "Health & EHDS",
      description:
        "Positioning in the European Health Data Space — ecosystem roles and governance models.",
    },
    {
      title: "Associations & Organizations",
      description:
        "Strategic repositioning, governance models, and member value for industry organizations.",
    },
  ],
};

export default homepageData;
