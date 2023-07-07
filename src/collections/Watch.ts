import { CollectionConfig } from "payload/types";
import { isAdmin } from "../access/isAdmin";
import { isAdminOrSelf } from "../access/isAdminOrSelf";

const Watch: CollectionConfig = {
  slug: "watch",
  access: {
    read: () => true,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: "brand",
      type: "array",
      fields: [
        {
          name: "brand",
          type: "relationship",
          relationTo: "brand-watch",
          required: true,
        },
      ],
      maxRows: 1,
      required: true,
    },
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "models",
      type: "array",
      fields: [
        {
          name: "model",
          type: "relationship",
          relationTo: "collections-watch",
          required: true,
        },
      ],
    },
  ],
};

export default Watch;
