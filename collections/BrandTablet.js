const BrandTablet = {
  slug: "brand-tablet",
  access: {
    read: () => true,
  },
  fields: [
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

export default BrandTablet;
