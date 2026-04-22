import type { Product } from "@/types/product";
import { FRUIT_GAMES_CATALOG_PRODUCTS } from "@/data/fruit-games";

export const PRODUCTS: Product[] = [
  {
    id: "nimbu-pani",
    slug: "nimbu-pani",
    name: "Nimbu Pani",
    shortName: "Nimbu",
    tagline: "Pure Lemon Zest",
    heroHeadline: "Bright Lemon Refreshment",
    heroSubtext:
      "Clean, bright, and refreshingly citrus. Made for Nepal's warm afternoons.",
    description:
      "Nimbu Pani delivers a crisp lemon profile with balanced sweetness and a clean finish. It is designed for hot days, quick refreshment, and casual meals where citrus brightness keeps the experience light.",
    image: "/products/nimbu-pani.png",
    bgColor: "#C4D940",
    bgColorDark: "#7A9010",
    accentColor: "#E8F542",
    textColor: "dark",
    category: "flavoured",
    seoTitle: "Nimbu Pani – Lemon Drink Nepal | Singapore Beverages",
    seoDescription:
      "Nimbu Pani lemon drink in Nepal. Fresh citrus flavour by Singapore Beverages.",
    seoKeywords: ["nimbu pani nepal", "lemon drink nepal"],
    sizes: ["250ml", "500ml"],
    features: [
      "Real lemon flavour",
      "Lightly sweetened",
      "No preservatives",
      "Chilled serving",
    ],
    usageOccasions: ["Outdoor events", "Post-workout", "Light meals"],
  },
  {
    id: "jeeru",
    slug: "jeeru",
    name: "Jeeru",
    shortName: "Jeeru",
    tagline: "A Classic Cumin Refreshment",
    heroHeadline: "The Bold Taste of Cumin",
    heroSubtext:
      "Nepal's favourite cumin-spiced refreshment, now crafted for the modern palate.",
    description:
      "Jeeru blends the earthy aroma of cumin with a gently sparkling finish for a beverage that feels both familiar and elevated. It is built to complement street food, heavy lunches, and the everyday moments when a bold drink cuts through the heat.",
    image: "/products/jeeru.png",
    bgColor: "#D4852A",
    bgColorDark: "#8B4A10",
    accentColor: "#F5A83C",
    textColor: "light",
    category: "flavoured",
    seoTitle: "Jeeru – Cumin Soft Drink Nepal | Singapore Beverages",
    seoDescription:
      "Buy Jeeru cumin soft drink in Nepal. Premium flavoured beverage by Singapore Beverages.",
    seoKeywords: [
      "jeeru nepal",
      "cumin soft drink nepal",
      "jeeru beverage",
    ],
    sizes: ["250ml", "500ml"],
    features: [
      "Real cumin extract",
      "No artificial colours",
      "Chilled or over ice",
      "Vegan-friendly",
    ],
    usageOccasions: [
      "After meals",
      "Social gatherings",
      "Street food pairing",
    ],
  },
  {
    id: "ginger-ale",
    slug: "ginger-ale",
    name: "Ginger Ale",
    shortName: "Ginger",
    tagline: "Warm Spice, Cool Fizz",
    heroHeadline: "A Refined Ginger Kick",
    heroSubtext:
      "Premium ginger ale with natural warmth and crisp carbonation.",
    description:
      "Ginger Ale brings together lively bubbles and a rounded ginger warmth that works equally well on its own or as a mixer. The profile is polished and versatile, making it fit for dinner tables, bars, and premium casual refreshment.",
    image: "/products/ginger-ale.png",
    bgColor: "#D4852A",
    bgColorDark: "#8B4A10",
    accentColor: "#F5A83C",
    textColor: "light",
    category: "mixer",
    seoTitle: "Ginger Ale Nepal | Singapore Beverages",
    seoDescription:
      "Premium ginger ale in Nepal. Natural ginger flavour by Singapore Beverages.",
    seoKeywords: ["ginger ale nepal", "ginger drink nepal"],
    sizes: ["250ml", "330ml", "500ml"],
    features: [
      "Natural ginger extract",
      "Premium carbonation",
      "Cocktail mixer",
      "Digestive-friendly",
    ],
    usageOccasions: [
      "Cocktail mixing",
      "Dinner companion",
      "Solo refreshment",
    ],
  },
  {
    id: "club-soda",
    slug: "club-soda",
    name: "Club Soda",
    shortName: "Club",
    tagline: "Crisp. Clean. Sparkling.",
    heroHeadline: "Pure Carbonated Perfection",
    heroSubtext: "Ultra-filtered club soda for the purest refreshment.",
    description:
      "Club Soda is built for clean refreshment with tight carbonation, balanced minerals, and a finish that stays neutral. It is dependable in bars, at home, and anywhere a sparkling mixer needs to stay sharp and understated.",
    image: "/products/club-soda.png",
    bgColor: "#B0C4D8",
    bgColorDark: "#4A6B8A",
    accentColor: "#D0E8F5",
    textColor: "dark",
    category: "sparkling",
    seoTitle: "Club Soda Nepal | Singapore Beverages",
    seoDescription:
      "Club soda in Nepal. Crisp sparkling water by Singapore Beverages.",
    seoKeywords: ["club soda nepal", "soda water nepal"],
    sizes: ["200ml", "330ml", "500ml", "1L"],
    features: [
      "Ultra-filtered water",
      "Balanced minerals",
      "Bar-quality bubbles",
      "Zero calories",
    ],
    usageOccasions: ["Bar mixing", "Hydration", "Food pairing"],
  },
  {
    id: "tonic-water",
    slug: "tonic-water",
    name: "Tonic Water",
    shortName: "Tonic",
    tagline: "The Mixer's Choice",
    heroHeadline: "Elevate Every Pour",
    heroSubtext:
      "Crisp premium tonic with a clean bitter finish. The bartender's first choice.",
    description:
      "Tonic Water is tuned for mixing, with crisp carbonation and a measured bitter edge that keeps cocktails bright. It is designed to feel premium in a highball glass while still working as a standalone refreshment.",
    image: "/products/tonic-water.png",
    bgColor: "#2A9D8F",
    bgColorDark: "#1A5F57",
    accentColor: "#52D9C8",
    textColor: "light",
    category: "mixer",
    seoTitle: "Tonic Water Nepal | Singapore Beverages",
    seoDescription:
      "Premium tonic water in Nepal for cocktails and mixers. By Singapore Beverages.",
    seoKeywords: ["tonic water nepal", "tonic mixer nepal"],
    sizes: ["150ml", "250ml", "330ml"],
    features: [
      "Natural quinine",
      "Clean bitter finish",
      "G&T perfect",
      "Premium carbonation",
    ],
    usageOccasions: ["Gin & Tonic", "Cocktail base", "Premium mixers"],
  },
  {
    id: "mango-drink",
    slug: "mango-drink",
    name: "Mango Drink",
    shortName: "Mango",
    tagline: "The King of Fruits",
    heroHeadline: "Rich Mango Indulgence",
    heroSubtext: "A deliciously thick, sweet, and tropical mango nectar made from the finest pulp.",
    description: "Naturals Mango Drink captures the true essence of summer with its rich, pulpy texture and vibrant sweetness. Perfect for sunny afternoons or anytime you crave a tropical escape.",
    image: "/products/naturals-mango-drink-can.png",
    bgColor: "#E89B42",
    bgColorDark: "#AF5514",
    accentColor: "#FFD685",
    textColor: "dark",
    category: "flavoured",
    seoTitle: "Mango Drink Nepal | Singapore Beverages",
    seoDescription: "Delicious thick mango drink in Nepal. Natural mango pulp by Singapore Beverages.",
    seoKeywords: ["mango drink nepal", "mango juice nepal"],
    sizes: ["250ml", "500ml", "1L"],
    features: [
      "Real mango pulp",
      "Rich texture",
      "Tropical flavour",
      "Chilled serving",
    ],
    usageOccasions: ["Summer refreshment", "With meals", "Kids favorite"],
  }
];

export const CATALOG_PRODUCTS: Product[] = [...PRODUCTS, ...FRUIT_GAMES_CATALOG_PRODUCTS];

export const HERO_PRODUCTS = PRODUCTS;
