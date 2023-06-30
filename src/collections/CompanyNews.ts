import { CollectionConfig } from "payload/types";
import { isAdmin } from "../access/isAdmin";
import { isAdminOrSelf } from "../access/isAdminOrSelf";

const NewsCompany: CollectionConfig = {
  slug: "newsCompany",
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
      name: "desc",
      type: "textarea",
      required: true,
    },
    {
      name: "img",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "descList",
      type: "array",
      fields: [
        {
          name: "title",
          type: "text",
        },
        {
          name: "text",
          type: "textarea",
        },
      ],
    },
  ],
};

export default NewsCompany;
