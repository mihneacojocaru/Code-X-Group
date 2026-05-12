import { type AboutData } from "../types/configDataTypes";
import strategyImage from "@images/strategy.jpg";
import industrialImage from "@images/industrial.jpg";
import dataSpacesImage from "@images/data-spaces.jpg";
import coworkingImage from "@images/coworking.jpg";

const aboutData: AboutData = {
  heroBadge: "Code-X Group",
  heroHeading: "Wir machen Datenräume wirtschaftlich.",
  heroText:
    "Code-X begleitet Organisationen von geförderten Projekten hin zu nachhaltigen Geschäftsmodellen – mit klarer Strategie, starker Governance und skalierbaren Ansätzen.",

  missionBadge: "Mission",
  missionHeading: "Was uns antreibt",
  missionText:
    "Trotz milliardenschwerer europäischer Investitionen scheitern viele Datenraum-Initiativen. Die Ursache liegt nicht in der Technologie – sondern in Strategie und Operations. Code-X schließt diese Lücke: zwischen Technologie und Business, Regulierung und Markt, Innovation und Investment.",

  visionBadge: "Vision",
  visionHeading: "Wohin wir wollen",
  visionText:
    "Code-X wird die führende europäische Kraft in Datenraum-Strategie, KI-getriebenen Ökosystemen und Plattform- und Investitionsmodellen – mit klarem Fokus auf Marktwirkung und Skalierbarkeit.",

  whyPartner: {
    badge: "Christoph Herr",
    heading: "Warum ich der richtige Partner bin",
    subheading:
      "Eine einzigartige Kombination aus operativer Erfahrung, strategischer Expertise und europäischem Netzwerk — selten in dieser Tiefe vereint.",
    stats: [
      {
        value: 20,
        suffix: "+",
        label: "Jahre Erfahrung",
        description: "In Technologie, Industrie und Innovation",
      },
      {
        value: 80,
        suffix: "+",
        label: "Startup-Projekte",
        description: "Scouting, Bewertung und strategische Begleitung",
      },
      {
        value: 3,
        suffix: "",
        label: "Kernkompetenzen",
        description: "KI, Datenökonomie & industrielle Transformation",
      },
    ],
    cards: [
      {
        title: "Einzigartige Kombination",
        description:
          "KI, Datenökonomie, Industrie und Venture — selten in einer Person vereint.",
      },
      {
        title: "Europäische Initiativen",
        description:
          "Aktive Mitgestaltung von Manufacturing-X, GAIA-X und EHDS / sphin-X aus erster Hand.",
      },
      {
        title: "Starkes Netzwerk",
        description:
          "Vernetzt mit Industrie, Startups, Forschung und öffentlichem Sektor europaweit.",
      },
    ],
  },

  expertiseBadge: "Strategie",
  expertiseHeading: "Leistungen",
  expertiseSubheading:
    "Vier strategische Schwerpunkte — maßgeschneidert für industrielle Entscheider, Technologieanbieter und öffentliche Institutionen.",
  expertise: [
    {
      image: strategyImage,
      title: "KI- & Datenökosystemstrategie",
      items: [
        "Entwicklung von KI- und Datenstrategien",
        "Integration von KI in industrielle Umgebungen",
        "Design von Datenökosystemen und -architekturen",
        "Ausrichtung an europäischen Initiativen und Regulierungen (EHDS, EU Data Act, Data Governance Act, …)",
      ],
    },
    {
      image: industrialImage,
      title: "Industrial AI & Data Ecosystems",
      items: [
        "Strategie für datengetriebene Ökosysteme",
        "Definition von KI-Anwendungsfällen im industriellen Kontext",
        "Skalierung von KI-Lösungen im Unternehmensumfeld",
        "Integration von Maschinen- und Produktionsdaten",
      ],
    },
    {
      image: dataSpacesImage,
      title: "Datenökonomie & Data Spaces",
      items: [
        "sphin-X, Manufacturing-X, Factory-X, Scale-MX, GAIA-X, …",
        "Data Governance und Interoperabilität",
        "Design von Datenaustauschmodellen",
        "Entwicklung datengetriebener Geschäftsmodelle",
      ],
    },
    {
      image: coworkingImage,
      title: "Venture, M&A & Innovation",
      items: [
        "Startup-Scouting und -bewertung",
        "Technologiebewertung (KI / Deep Tech)",
        "Build-vs.-Buy-Entscheidungen",
        "Strategische Partnerschaften und Ökosystementwicklung",
      ],
    },
  ],

  servicesBadge: "Leistungen",
  servicesHeading: "Was wir anbieten",
  services: [
    {
      title: "Data Space Strategie",
      description:
        "Rolle im Ökosystem definieren, Geschäftsmodelle entwickeln, Marktpositionierung erarbeiten.",
    },
    {
      title: "Ökosystem-Design",
      description:
        "Akteure, Rollen, Governance und Wertschöpfungsmodelle gestalten und orchestrieren.",
    },
    {
      title: "Venture & Investitionsmodelle",
      description:
        "Venture-Capital-Strukturen, Finanzierungsstrategien und Investment-Thesen entwickeln.",
    },
    {
      title: "Strategische Transformation",
      description: "Organisationsumbau und strategische Initiativen begleiten.",
    },
    {
      title: "Interim & Advisory",
      description: "Aktive Führungsrollen in Transformationsprogrammen übernehmen.",
    },
  ],

  referencesBadge: "Referenzen",
  referencesHeading: "Ausgewählte Engagements",
  references: [
    {
      title: "VDMA Fachverband Software und Digitalisierung",
      description:
        "Experte Plattformökonomie und Business-Software, AK CDO & CIO, Task Force Manufacturing-X",
    },
    {
      title: "KION Group AG",
      description:
        "Digital Business, Corporate Venture Capital — Innovative digitale Produkte für die Intralogistik",
    },
    {
      title: "Startup- & Venture Capital-Branche",
      description:
        ">10 Jahre GmbH-Geschäftsführer / AG-Vorstand; innovative IT-Produkte mit Disruptionpotenzial; Investment-Manager für Venture Capital-Investments",
    },
    {
      title: "Deutsche Forschungsgemeinschaft (DFG)",
      description:
        "Gruppe Ingenieurwissenschaften (DFG-Ideenwerkstatt) — Innovative Produkte und Services aus DFG-geförderter Forschung",
    },
    {
      title: "Deutsche Telekom AG",
      description: "Headquarters, Vorstandsbereich Technik & Dienste",
    },
  ],
};

export default aboutData;
