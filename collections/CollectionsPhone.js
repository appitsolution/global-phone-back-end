const CollectionsPhone = {
  slug: "collections-phone",
  fields: [
    {
      name: "owner", // required
      type: "relationship", // required
      relationTo: "newsCompany", // required
      hasMany: false,
    },
  ],
};
export default CollectionsPhone;
