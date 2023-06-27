import React from "react";
import payload from "payload";
import ButtonReturn from "../customField/ButtonReturn";

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
      type: "select",
      required: true,
      options: [
        {
          label: "Очікування",
          value: "0",
        },
        {
          label: "Передано в службу доставки",
          value: "1",
        },
        {
          label: "Прийнято на діагностику",
          value: "2",
        },
        {
          label: "Чекає на Ваше підтвердження",
          value: "3",
        },
        {
          label: "Передане на оплату",
          value: "4",
        },
        {
          label: "Закрито",
          value: "5",
        },
      ],
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
          defaultValue: " ",
          // required: true,
        },
        {
          name: "frame",
          type: "text",
          defaultValue: " ",
          // required: true,
        },
        {
          name: "tech",
          type: "text",
          defaultValue: " ",
          // required: true,
        },
        {
          name: "battery",
          type: "text",
          defaultValue: " ",
          // required: true,
        },
        {
          name: "kits",
          type: "text",
          defaultValue: " ",

          // required: true,
        },
        {
          name: "kitsDescription",
          type: "text",
          defaultValue: " ",

          // required: true,
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
    {
      name: "returnStatus",
      type: "text",
      defaultValue: "False",
      admin: {
        hidden: true,
      },
    },
    {
      name: "numberInvoice",
      type: "text",
      defaultValue: " ",
    },
    {
      name: "button",
      type: "ui",
      admin: {
        components: {
          Field: ButtonReturn,
        },
      },
    },
  ],
};

export default OrdersUser;
