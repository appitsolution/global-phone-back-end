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
      unique: true,
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
      name: "batteryHidden",
      type: "select",
      required: true,
      options: [
        {
          label: "Не питати",
          value: "not",
        },
        {
          label: "Запитувати",
          value: "yes",
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
