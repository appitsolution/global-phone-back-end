import { CollectionConfig } from "payload/types";
import { isAdmin } from "../access/isAdmin";
import { isAdminOrSelf } from "../access/isAdminOrSelf";

const BrandTablet: CollectionConfig = {
  slug: "brand-tablet",
  access: {
    read: () => true,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  admin: {
    useAsTitle: "brandName",
    defaultColumns: ["brandName", "id"],
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

export default BrandTablet;
