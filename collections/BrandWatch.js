const BrandWatch = {
  slug: "brand-watch",
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

export default BrandWatch;
