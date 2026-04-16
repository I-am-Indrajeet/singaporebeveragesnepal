import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

import { schemaTypes } from "./sanity/schemas";

export default defineConfig({
  name: "default",
  title: "Singapore Beverages Studio",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "demo1234",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
});
