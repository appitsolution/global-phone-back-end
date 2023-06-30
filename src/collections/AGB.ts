import { CollectionConfig } from "payload/types";
import { isAdmin } from "../access/isAdmin";
import { isAdminOrSelf } from "../access/isAdminOrSelf";

const AGB: CollectionConfig = {
  slug: "agb",
  access: {
    read: () => true,
    create: isAdminOrSelf,
    update: isAdminOrSelf,
    delete: isAdmin,
  },
  fields: [
    {
      name: "content",
      type: "richText",
      required: true,
    },
  ],
};

export default AGB;
