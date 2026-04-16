import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";

type MinimalSanityClient = {
  fetch: <T>(query: string, params?: Record<string, string>) => Promise<T>;
  config: () => { projectId?: string; dataset?: string };
};

const unconfiguredFetch: MinimalSanityClient["fetch"] = async () => {
  throw new Error("Sanity client is not configured.");
};

export const sanityClient: MinimalSanityClient =
  projectId && projectId.trim().length > 0
    ? createClient({
        projectId,
        dataset,
        apiVersion: "2024-07-01",
        useCdn: true,
      })
    : {
        fetch: unconfiguredFetch,
        config() {
          return { dataset };
        },
      };
