import kryptek from "../assets/projects/kryptek.png";
import thewavewalker from "../assets/projects/thewavewalker.png";
import gideon from "../assets/projects/gideon-app.png";
import maven from "../assets/projects/maven.png";
import sog from "../assets/projects/sogknives.png";
import rovince from "../assets/projects/rovince.png";
import bonez from "../assets/projects/bonezbully.png";
import dollarwoof from "../assets/projects/dollarwoofclub.png";
import easyvariant from "../assets/projects/easyvariants.png";

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  problem?: string;
  architecture?: string;
  tech: string[];
  results?: string;
  impact?: string;
  image: string;
  link: string;
  featured?: boolean;
}

export const projectsData: Project[] = [
  {
    id: "kryptek",
    title: "Kryptek UK",
    subtitle: "Hunting Apperal E-commerce",
    description:
      "Tactical hunting camo gear, apparel, and accessories storefront tailored for the UK market.",
    problem:
      "Needed a robust localized storefront with complex product catalog and high traffic capability.",
    architecture:
      "Shopify Plus implementation with region-specific customizations.",
    tech: ["Shopify Plus", "React", "GraphQL"],
    results: "Seamless localization and high availability.",
    impact: "Expanded reach in the UK market.",
    image: kryptek,
    link: "https://kryptek.com/",
    featured: true,
  },
  {
    id: "the-wavewalker",
    title: "The Wavewalker",
    subtitle: "Hybrid Footwear E-commerce",
    description:
      "Modern D2C brand storefront showcasing hybrid moccasins and formal shoes.",
    tech: ["Shopify", "React", "Tailwind CSS"],
    image: thewavewalker,
    link: "https://www.thewavewalker.com/",
    featured: true,
  },
  {
    id: "gideon-ai-search",
    title: "Gideon AI Search",
    subtitle: "Public Shopify App",
    description:
      "An AI-driven visual search solution built to enhance product discoverability.",
    problem:
      "Users struggling to find specific products using traditional keyword search.",
    architecture: "AI integration with image-based capabilities.",
    tech: ["Python", "AI", "React", "Shopify API"],
    results: "Smart search bar with predictive suggestions.",
    impact: "Increases search-based conversions.",
    image: gideon,
    link: "https://apps.shopify.com/gideon-ai-search",
    featured: true,
  },
  {
    id: "maven-optics",
    title: "Maven Optics",
    subtitle: "Custom E-commerce Storefront",
    description:
      "Award-winning optics storefront built for scale and performance with direct-to-consumer customization capabilities.",
    problem:
      "Needed a high-performance storefront to handle complex product customizations and bundles without retail markup.",
    architecture:
      "Decoupled architecture with advanced product customization flows.",
    tech: ["Shopify", "React", "Tailwind CSS"],
    results: "Improved customization experience and page load times.",
    impact: "Boosted direct-to-consumer conversions.",
    image: maven,
    link: "https://mavenoptics.com/",
    // featured: true,
  },
  {
    id: "sog-knives",
    title: "SOG Knives",
    subtitle: "Tactical Gear Storefront",
    description:
      "High-performance e-commerce experience for tactical and utility knives.",
    problem:
      "Legacy monolithic theme causing slow load times and poor mobile conversion rates.",
    architecture:
      "Optimized storefront with edge-cached responses and optimized image delivery pipeline.",
    tech: ["Shopify", "JavaScript", "CSS"],
    results: "Significant improvement in Lighthouse scores.",
    impact: "Increased mobile conversion rates.",
    image: sog,
    link: "https://www.sogknives.com/",
    // featured: true,
  },
  {
    id: "rovince-uk",
    title: "Rovince UK",
    subtitle: "Anti Tick Adventure Clothing",
    description:
      "E-commerce platform for specialized anti-tick adventure clothing.",
    tech: ["Shopify", "CSS", "JavaScript"],
    image: rovince,
    link: "https://rovince.co.uk/",
  },
  {
    id: "bonez-bully-sticks",
    title: "Bonez Bully Sticks",
    subtitle: "Pet Supply Store",
    description: "D2C storefront for premium quality beef dog treats.",
    tech: ["Shopify", "HTML", "CSS"],
    image: bonez,
    link: "https://bonezbullysticks.com/",
  },
  {
    id: "dollar-woof-club",
    title: "Dollar Woof Club",
    subtitle: "Subscription Pet Products",
    description:
      "Interactive storefront for a dog product subscription and store experience.",
    tech: ["Shopify", "JavaScript", "Tailwind CSS"],
    image: dollarwoof,
    link: "https://dollarwoofclub.com/",
  },
  {
    id: "easy-variant-images-automator",
    title: "Easy Variant Images Automator",
    subtitle: "Public Shopify App",
    description:
      "A specialized app designed to optimize shopping by dynamically showing relevant variant images.",
    problem:
      "Merchants struggle to manage complex variant image assignments manually.",
    architecture:
      "Event-driven architecture processing updates via Shopify Admin API.",
    tech: ["Node.js", "React", "Shopify API", "Redis"],
    results: "Automates variant image assignment natively.",
    impact:
      "Boosted conversions for merchants by improving the variant selection UX.",
    image: easyvariant,
    link: "https://apps.shopify.com/easy-variant-images-automator",
    // featured: true,
  },
];
