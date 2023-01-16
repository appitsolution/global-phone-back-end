const Orders = {
  slug: "orders",
  auth: false,
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "brand",
      type: "text",
      required: true,
    },
    {
      name: "model",
      type: "text",
      required: true,
    },
    {
      name: "storage",
      type: "text",
      required: true,
    },
    {
      name: "color",
      type: "text",
      required: true,
    },
    {
      name: "display",
      type: "text",
      required: true,
    },
    {
      name: "tech",
      type: "text",
      required: true,
    },
    {
      name: "battery",
      type: "text",
      required: true,
    },
    {
      name: "kits",
      type: "text",
      required: true,
    },
    {
      name: "price",
      type: "number",
      required: true,
    },
  ],
};

export default Orders;
