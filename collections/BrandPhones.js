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
    },
  ],
};

export default BrandPhones;
