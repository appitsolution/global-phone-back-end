const BrandPhones = {
  slug: "brand-phones",
  access: {
    read: () => true,
  },

  admin: {
    useAsTitle: "brandName",
    defaultColumns: ["brandName", "id"],
  },
  fields: [
    {
      type: "text",
      name: "id",
      index: false,
    },
    {
      name: "brandName",
      type: "text",
      required: true,
      // unique: true,
    },
    {
      name: "brandImg",
      type: "upload",
      relationTo: "media",
      required: true,
      unique: false,
    },
  ],
};

export default BrandPhones;
