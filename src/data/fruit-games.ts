import type { Product } from "@/types/product";

type FruitGamesFlavor = {
  id: string;
  name: string;
  image: string;
  color: string;
  bgLight: string;
  tagline: string;
  description: string;
};

export const FRUIT_GAMES_PRODUCTS: FruitGamesFlavor[] = [
  {
    id: "fruit-gems-black-currant",
    name: "Black Currant",
    image: "/products/fruit-gems-black-currant-drink.png",
    color: "#5B2C6F", // Deep Purple
    bgLight: "#F5EEF8",
    tagline: "Bold & Berrylicious",
    description: "A rich, vibrant blast of black currant refreshment.",
  },
  {
    id: "fruit-gems-cantaloupe",
    name: "Cantaloupe",
    image: "/products/fruit-gems-cantaloupe-drink.png",
    color: "#E67E22", // Melon Orange
    bgLight: "#FEF5E7",
    tagline: "Mellow Melon Magic",
    description: "Smooth and sweet cantaloupe to cool you down.",
  },
  {
    id: "fruit-gems-cranberry",
    name: "Cranberry",
    image: "/products/fruit-gems-cranberry-drink.png",
    color: "#943126", // Dark Red
    bgLight: "#F9EBEA",
    tagline: "Crisp & Tart",
    description: "The sharp, revitalizing taste of real cranberries.",
  },
  {
    id: "fruit-gems-kiwi",
    name: "Kiwi",
    image: "/products/fruit-gems-kiwi-drink.png",
    color: "#229954", // Kiwi Green
    bgLight: "#E9F7EF",
    tagline: "Tropical Tang",
    description: "A zesty burst of exotic kiwi goodness.",
  },
  {
    id: "fruit-gems-lychee",
    name: "Lychee",
    image: "/products/fruit-gems-lychee-drink.png",
    color: "#E74C3C", // Lychee Pinkish Red
    bgLight: "#FDEDEC",
    tagline: "Floral & Sweet",
    description: "Delicate, aromatic lychee for a light refreshment.",
  },
  {
    id: "fruit-gems-mango",
    name: "Mango",
    image: "/products/fruit-gems-mango-drink.png",
    color: "#F39C12", // Mango Yellow
    bgLight: "#FEF9E7",
    tagline: "The King of Fruits",
    description: "Rich, luscious mango flavour in every sip.",
  },
  {
    id: "fruit-gems-mix-fruit",
    name: "Mix Fruit",
    image: "/products/fruit-gems-mix-fruit-drink.png",
    color: "#D35400", // Mixed Orange/Red
    bgLight: "#FDF2E9",
    tagline: "A Fruit Fiesta",
    description: "A perfectly balanced blend of your favourite fruits.",
  },
  {
    id: "fruit-gems-orange",
    name: "Orange",
    image: "/products/fruit-gems-orange-drink.png",
    color: "#E67E22", // Orange
    bgLight: "#FEF5E7",
    tagline: "Citrus Sunrise",
    description: "Classic, refreshing orange packed with zesty energy.",
  },
  {
    id: "fruit-gems-passion-fruit",
    name: "Passion Fruit",
    image: "/products/fruit-gems-passion-fruit-drink.png",
    color: "#8E44AD", // Passion Purple
    bgLight: "#F4ECF7",
    tagline: "Exotic & Bold",
    description: "A tantalizing mix of sweet and tart tropical flavour.",
  },
  {
    id: "fruit-gems-peach",
    name: "Peach",
    image: "/products/fruit-gems-peach-drink.png",
    color: "#F1948A", // Peach
    bgLight: "#FDEDEC",
    tagline: "Peachy Keen",
    description: "Soft, sweet, and incredibly refreshing peach drink.",
  },
  {
    id: "fruit-gems-pineapple",
    name: "Pineapple",
    image: "/products/fruit-gems-pineapple-drink.png",
    color: "#F4D03F", // Pineapple Yellow
    bgLight: "#FEF9E7",
    tagline: "Tropical Sunshine",
    description: "Sweet, tangy pineapple that transports you to the beach.",
  },
  {
    id: "fruit-gems-pink-guava",
    name: "Pink Guava",
    image: "/products/fruit-gems-pink-guava-drink.png",
    color: "#EC7063", // Pink Guava
    bgLight: "#FDEDEC",
    tagline: "Lush & Vibrant",
    description: "The unique, aromatic sweetness of ripe pink guava.",
  },
  {
    id: "fruit-gems-strawberry",
    name: "Strawberry",
    image: "/products/fruit-gems-strawberry-drink.png",
    color: "#CB4335", // Strawberry Red
    bgLight: "#F9EBEA",
    tagline: "Berry Delicious",
    description: "Classic, sweet strawberry perfection in a bottle.",
  },
];

function getTextTone(color: string): Product["textColor"] {
  const normalized = color.replace("#", "");
  const red = Number.parseInt(normalized.slice(0, 2), 16);
  const green = Number.parseInt(normalized.slice(2, 4), 16);
  const blue = Number.parseInt(normalized.slice(4, 6), 16);
  const brightness = red * 0.299 + green * 0.587 + blue * 0.114;

  return brightness > 166 ? "dark" : "light";
}

export const FRUIT_GAMES_CATALOG_PRODUCTS: Product[] = FRUIT_GAMES_PRODUCTS.map(
  (item) => ({
    id: item.id,
    slug: item.id,
    name: item.name,
    shortName: item.name,
    tagline: item.tagline,
    heroHeadline: `${item.name} with bright fruit energy.`,
    heroSubtext: `Part of the Fruit Gems line, ${item.description
      .charAt(0)
      .toLowerCase()}${item.description.slice(1)}`,
    description: `${item.name} in the Fruit Gems collection is designed for playful everyday refreshment, stronger shelf visibility, and a more fruit-forward drinking mood. ${item.description}`,
    image: item.image,
    bgColor: item.bgLight,
    bgColorDark: item.color,
    accentColor: item.color,
    textColor: getTextTone(item.color),
    category: "fruit-gems",
    seoTitle: `Fruit Gems ${item.name} Drink Nepal | Singapore Beverages`,
    seoDescription: `${item.name} fruit drink from the Fruit Gems collection by Singapore Beverages in Nepal.`,
    seoKeywords: [
      `fruit gems ${item.name.toLowerCase()}`,
      `${item.name.toLowerCase()} drink nepal`,
      "fruit drink nepal",
    ],
    sizes: ["250ml"],
    features: [
      item.tagline,
      "Fruit-forward flavour",
      "Serve ice cold",
      "Bright shelf appeal",
    ],
    usageOccasions: [
      "Grab-and-go refreshment",
      "Daytime chill breaks",
      "Casual fruit cravings",
    ],
  }),
);
