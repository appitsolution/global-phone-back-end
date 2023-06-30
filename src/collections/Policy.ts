import { CollectionConfig } from "payload/types";
import { isAdmin } from "../access/isAdmin";
import { isAdminOrSelf } from "../access/isAdminOrSelf";

const Policy: CollectionConfig = {
  slug: "policy",
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

export default Policy;
