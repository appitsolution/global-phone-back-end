const Answers = {
  slug: "answers",
  access: {
    read: () => true,
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
  ],
};

export default Answers;
