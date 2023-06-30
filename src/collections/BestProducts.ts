import { CollectionConfig } from "payload/types";
import { isAdmin } from "../access/isAdmin";
import { isAdminOrSelf } from "../access/isAdminOrSelf";

const BestProducts: CollectionConfig = {
  slug: "best-products",
  access: {
    read: () => true,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
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
