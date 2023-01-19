const BestProducts = {
  slug: "best-products",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "product", // required
      type: "relationship", // required
      relationTo: [
        "collections-phone",
        "collections-tablet",
        "collections-watch",
      ], // required
      required: true,
    },
  ],
};

export default BestProducts;
