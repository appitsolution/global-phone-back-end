import { CollectionConfig } from "payload/types";
import { isAdmin } from "../access/isAdmin";
import { isAdminOrSelf } from "../access/isAdminOrSelf";

const Tablet: CollectionConfig = {
  slug: "tablet",
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
          relationTo: "brand-tablet",
          required: true,
        },
      ],
      maxRows: 1,
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
          relationTo: "collections-tablet",
          required: true,
        },
      ],
    },
  ],
};

export default Tablet;
