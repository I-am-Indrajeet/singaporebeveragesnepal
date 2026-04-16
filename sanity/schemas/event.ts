export default {
  name: "event",
  type: "document",
  fields: [
    { name: "title", type: "string", validation: (rule: { required: () => unknown }) => rule.required() },
    { name: "slug", type: "slug", options: { source: "title" } },
    { name: "featuredImage", type: "image", options: { hotspot: true } },
    { name: "eventDate", type: "datetime" },
    { name: "location", type: "string" },
    { name: "shortDescription", type: "text" },
    { name: "fullDescription", type: "array", of: [{ type: "block" }] },
    { name: "gallery", type: "array", of: [{ type: "image" }] },
    { name: "published", type: "boolean", initialValue: false },
    { name: "seoTitle", type: "string" },
    { name: "seoDescription", type: "text" },
  ],
};
