import { CalendarRange, Rocket, Sparkles, Trophy } from "lucide-react";

export interface Milestone {
  year: string;
  title: string;
  body: string;
  icon: typeof Sparkles;
}

export const JOURNEY_MILESTONES: Milestone[] = [
  {
    year: "2016",
    title: "The Beginning",
    body: "Singapore Beverages Nepal began its journey with a vision to create quality Nepali beverages.",
    icon: Sparkles,
  },
  {
    year: "2017",
    title: "Official Incorporation",
    body: "The company was formally incorporated and established its manufacturing base in Mechinagar, Jhapa.",
    icon: CalendarRange,
  },
  {
    year: "Early Years",
    title: "Carbonated Drink Production",
    body: "The brand started by producing carbonated soft drinks for the local market.",
    icon: Rocket,
  },
  {
    year: "Expansion Phase",
    title: "New Beverage Categories",
    body: "Singapore Beverages Nepal expanded into juices and energy drinks, strengthening its product range.",
    icon: Rocket,
  },
  {
    year: "Growth Phase",
    title: "Product Portfolio Development",
    body: "The company introduced and grew brands such as Jeeru, Fruit Gems, Nimbu Pani, Joiner, London Dry, Club Soda, and more.",
    icon: Sparkles,
  },
  {
    year: "2025",
    title: "Public Brand Activation",
    body: "The company hosted \"Sip Snap and Squeeze\" in Kathmandu and launched KETO as a new product concept.",
    icon: Trophy,
  },
  {
    year: "2026",
    title: "9 Years of Refreshing Nepal",
    body: "Singapore Beverages Nepal celebrated its 9th anniversary and continued building its identity as a proud Nepali beverage brand.",
    icon: Trophy,
  },
];
