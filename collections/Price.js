const Price = {
  slug: "price",
  auth: true,
  fields: [
    {
      name: "Name_Device",
      type: "text",
      required: true,
    },
    {
      name: "Model_Device",
      type: "text",
      required: true,
    },
    {
      name: "Price_Device",
      type: "number",
      required: true,
    },
    {
      name: "Color_Device",
      type: "select",
      required: true,
      options: [
        {
          label: "Black",
          value: "Black",
        },
        {
          label: "White",
          value: "White",
        },
        {
          label: "Red",
          value: "Red",
        },
      ],
    },
  ],
};

export default Price;
