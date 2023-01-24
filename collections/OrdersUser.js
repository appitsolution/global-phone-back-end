const OrdersUser = {
  slug: "orders-user",
  auth: false,
  access: {
    read: () => true,
    create: () => true,
  },
  admin: {
    defaultColumns: ["status", "priceDelivery"],
  },
  fields: [
    {
      name: "idUser",
      type: "text",
      required: true,
    },

    {
      name: "city",
      type: "text",
      required: true,
    },
    {
      name: "house",
      type: "text",
      required: true,
    },
    {
      name: "index",
      type: "text",
      required: true,
    },
    {
      name: "phone",
      type: "text",
      required: true,
    },
    {
      name: "transfer",
      type: "text",
      required: true,
    },
    {
      name: "paymentSelect",
      type: "text",
      required: true,
    },
    {
      name: "authorPay",
      type: "text",
      required: true,
    },
    {
      name: "iban",
      type: "text",
      required: true,
    },
    {
      name: "nameBank",
      type: "text",
      required: true,
    },
    {
      name: "paypalUrl",
      type: "text",
    },
    {
      name: "status",
      type: "text",
      required: true,
    },
    {
      name: "statusOffer",
      type: "number",
      required: true,
      admin: {
        description:
          "1 - Передано в службу доставки, 2 - Прийнято на діагностику, 3 - Чекає на Ваше підтвердження , 4 - Передане на оплату, 5 - Закрито",
      },
    },
    {
      name: "products",
      type: "array",
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
          name: "condition",
          type: "text",
          required: true,
        },
        {
          name: "display",
          type: "text",
          required: true,
        },
        {
          name: "frame",
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
    },
    {
      name: "priceDelivery",
      type: "number",
      required: true,
    },
  ],
};

export default OrdersUser;
