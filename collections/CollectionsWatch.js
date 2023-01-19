const CollectionsWatch = {
  slug: "collections-watch",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "brand", // required
      type: "relationship", // required
      relationTo: "brand-watch", // required
      required: true,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "model",
      type: "text",
      required: true,
    },
    {
      name: "storage",
      type: "array",
      required: true,
      fields: [
        {
          name: "storage",
          type: "text",
        },
      ],
    },
    {
      name: "color",
      type: "array",
      required: true,
      fields: [
        {
          name: "color",
          type: "text",
        },
      ],
    },
    {
      name: "price",
      type: "text",
      required: true,
    },
  ],
};
export default CollectionsWatch;
