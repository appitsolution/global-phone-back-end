import { CollectionConfig } from "payload/types";
import { isAdmin } from "../access/isAdmin";
import { isAdminOrSelf } from "../access/isAdminOrSelf";

const BrandWatch: CollectionConfig = {
  slug: "brand-watch",
  access: {
    read: () => true,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
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

export default BrandWatch;
