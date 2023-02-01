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
      options: [
        {
          label: "Не питати",
          value: "false",
        },
        {
          label: "Запитувати",
          value: "true",
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
