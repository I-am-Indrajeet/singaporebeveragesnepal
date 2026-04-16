import createImageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { sanityClient } from "@/lib/cms/client";

const config = sanityClient.config();
const builder =
  config.projectId && config.projectId.trim().length > 0
    ? createImageUrlBuilder(sanityClient)
    : null;

export function urlFor(source: SanityImageSource) {
  return builder?.image(source) ?? null;
}
