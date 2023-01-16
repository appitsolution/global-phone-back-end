const NewsCompany = {
  slug: "newsCompany",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    { name: "desc", type: "textarea" },
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
        { name: "text", type: "textarea" },
      ],
    },
  ],
};

export default NewsCompany;
