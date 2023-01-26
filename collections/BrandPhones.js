const BrandPhones = {
  slug: "brand-phones",
  access: {
    read: () => true,
  },

  admin: {
    useAsTitle: "brandName",
    defaultColumns: ["brandName"],
  },
  fields: [
    {
      name: "brandName",
      type: "text",
      required: true,
      unique: false,
      index: false,
    },
    {
      name: "brandImg",
      type: "upload",
      relationTo: "media",
      required: true,
      index: false,
      unique: false,
    },
  ],
};

export default BrandPhones;
