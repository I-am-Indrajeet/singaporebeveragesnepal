export default {
  name: "product",
  type: "document",
  fields: [
    { name: "name", type: "string", validation: (rule: { required: () => unknown }) => rule.required() },
    { name: "slug", type: "slug", options: { source: "name" } },
    { name: "image", type: "image", options: { hotspot: true } },
    { name: "tagline", type: "string" },
    { name: "description", type: "text" },
    { name: "sizes", type: "array", of: [{ type: "string" }] },
    {
      name: "category",
      type: "string",
      options: { list: ["sparkling", "still", "mixer", "flavoured"] },
    },
    { name: "bgColor", type: "string" },
    { name: "accentColor", type: "string" },
    { name: "seoTitle", type: "string" },
    { name: "seoDescription", type: "text" },
  ],
};
