const CollectionsPhone = {
  slug: "collections-phone",
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "model",
  },
  fields: [
    {
      name: "brand",
      type: "relationship",
      relationTo: "brand-phones",
      index: false,
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
export default CollectionsPhone;
