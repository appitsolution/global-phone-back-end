import payload from "payload";
import createPrice from "../utils/createPricce";

const CollectionsPhone = {
  slug: "collections-phone",
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "model",
  },
  hooks: {
    afterChange: [
      async (args) => {
        if (args.operation === "create") {
          const idPrice = await createPrice(
            args.doc.model + " " + args.doc.storage[0].storage
          );

          payload.update({
            collection: "collections-phone",
            id: args.doc.id,
            data: {
              idPrice: idPrice,
            },
          });
        }
      },
    ],
  },
  fields: [
    {
      name: "brand",
      type: "relationship",
      relationTo: "brand-phones",
      hasMany: false,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "model",
      type: "text",
      required: true,
    },
    {
      name: "storage",
      type: "array",

      required: true,
      fields: [
        {
          name: "storage",
          type: "text",
        },
      ],
    },
    {
      name: "color",
      type: "array",
      required: true,
      fields: [
        {
          name: "color",
          type: "text",
        },
      ],
    },
    {
      name: "batteryHidden",
      type: "select",
      required: true,
      options: [
        {
          label: "Не питати",
          value: "not",
        },
        {
          label: "Запитувати",
          value: "yes",
        },
      ],
    },
    {
      name: "idPrice",
      type: "text",
      defaultValue: " ",
      admin: {
        hidden: true,
      },
    },
    {
      name: "percent",
      type: "text",
      defaultValue: "0",
      admin: {
        description: `Якщо ви хочете додати відсоток, використовуйте "+",
           (приклад: +10), або використовуйте "-"
           (приклад: -10). Якщо ви не хочете змінювати відсоток, то не редагуйте це поле`,
      },
    },
  ],
};
export default CollectionsPhone;
