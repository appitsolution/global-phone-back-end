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
      name: "id",
      label: "brandName",
      type: "text",
      required: true,
      // unique: true,
      index: false,
    },
    {
      name: "brandImg",
      type: "upload",
      relationTo: "media",
      required: true,
      index: false,
    },
  ],
};

export default BrandPhones;
