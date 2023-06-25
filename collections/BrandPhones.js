const BrandPhones = {
  slug: "brand-phones",
  access: {
    read: () => true,
    create: () => true,
  },

  admin: {
    useAsTitle: "brandName",
    defaultColumns: ["brandName", "id"],
  },
  fields: [
    {
      name: "id",
      type: "text",
      required: true,
    },
    {
      name: "brandName",
      type: "text",
      required: true,
    },
    {
      name: "brandImg",
      type: "upload",
      relationTo: "media",
      required: true,
    },
  ],
};

export default BrandPhones;
