import { nimbuPaniHeroConfig } from "./nimbu-pani";
import { jeeruHeroConfig } from "./jeeru";
import { gingerAleHeroConfig } from "./ginger-ale";
import { clubSodaHeroConfig } from "./club-soda";
import { tonicWaterHeroConfig } from "./tonic-water";
import { mangoDrinkHeroConfig } from "./mango-drink";

import type { HeroProductConfig } from "@/types/hero-product";

/**
 * All hero product configs in display order.
 * Adding a new product: create a new config file and add it here.
 */
export const HERO_PRODUCT_CONFIGS: HeroProductConfig[] = [
  nimbuPaniHeroConfig,
  jeeruHeroConfig,
  gingerAleHeroConfig,
  clubSodaHeroConfig,
  tonicWaterHeroConfig,
  mangoDrinkHeroConfig,
];
