export default {
  name: "newsPost",
  type: "document",
  fields: [
    { name: "title", type: "string", validation: (rule: { required: () => unknown }) => rule.required() },
    { name: "slug", type: "slug", options: { source: "title" } },
    { name: "coverImage", type: "image", options: { hotspot: true } },
    { name: "excerpt", type: "text" },
    { name: "body", type: "array", of: [{ type: "block" }, { type: "image" }] },
    { name: "category", type: "string" },
    { name: "publishDate", type: "datetime" },
    { name: "seoTitle", type: "string" },
    { name: "seoDescription", type: "text" },
  ],
};
