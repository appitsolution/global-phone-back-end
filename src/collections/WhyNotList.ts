import { CollectionConfig } from "payload/types";
import { isAdmin } from "../access/isAdmin";

const WhyNotList: CollectionConfig = {
  slug: "whynot-list",
  access: {
    read: () => true,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      required: true,
    },
  ],
};

export default WhyNotList;
