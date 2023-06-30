import { CollectionConfig } from "payload/types";
import { isAdmin } from "../access/isAdmin";
import { isAdminOrSelf } from "../access/isAdminOrSelf";
import payload from "payload";

import createPrice from "../utils/createPrice";

const CollectionsPhone: CollectionConfig = {
  slug: "collections-phone",
  access: {
    read: () => true,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  admin: {
    useAsTitle: "model",
  },
  hooks: {
    afterChange: [
      async (args) => {
        if (args.operation === "create") {
          const idPriceResponse: any = await Promise.all(
            args.doc.storage.map(async (item) => {
              const idPrice = await createPrice(
                args.doc.model + " " + item.storage + " gb"
              );

              return { ...item, idPrice: idPrice };
            })
          );
          console.log(idPriceResponse);
          await payload.update({
            // @ts-nocheck
            collection: "collections-phone" as never,
            id: args.doc.id,
            data: {
              storage: idPriceResponse,
            },
          });
        }
      },
    ],
  },
  fields: [
    {
      name: "brand",
      type: "array",
      fields: [
        {
          name: "brand",
          type: "relationship",
          relationTo: "brand-phones",
          required: true,
        },
      ],
      maxRows: 1,
      required: true,
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
        {
          name: "idPrice",
          type: "text",
          admin: {
            hidden: true,
          },
          defaultValue: " ",
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
        {
          name: "image",
          type: "upload",
          relationTo: "media",
          required: true,
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
      required: true,
      label: "Загальний відсоток",
      defaultValue: "0",
      admin: {
        description: `Якщо ви хочете додати відсоток, використовуйте "+",
           (приклад: +10), або використовуйте "-"
           (приклад: -10). Якщо ви не хочете змінювати відсоток, то не редагуйте це поле`,
      },
    },
    {
      name: "display",
      type: "group",
      admin: {
        description: `Якщо ви хочете додати відсоток, використовуйте "+",
           (приклад: +10), або використовуйте "-"
           (приклад: -10). Якщо ви не хочете змінювати відсоток, то не редагуйте це поле`,
      },
      label: "Діагностика дисплею",
      fields: [
        {
          name: "veryBeautiful",
          type: "group",
          label: "Дуже гарний",
          fields: [
            {
              name: "title",
              type: "text",
              defaultValue: "Дуже гарний",
              admin: {
                hidden: true,
              },
            },
            {
              name: "value",
              type: "text",
              defaultValue: "0",
              label: "Значення",
            },
          ],
        },
        {
          name: "beautiful",
          type: "group",
          label: "Гарний",
          fields: [
            {
              name: "title",
              type: "text",
              defaultValue: "Гарний",
              admin: {
                hidden: true,
              },
            },
            {
              name: "value",
              type: "text",
              defaultValue: "0",
              label: "Значення",
            },
          ],
        },
        {
          name: "average",
          type: "group",
          label: "Середній",
          fields: [
            {
              name: "title",
              type: "text",
              defaultValue: "Середній",
              admin: {
                hidden: true,
              },
            },
            {
              name: "value",
              type: "text",
              defaultValue: "0",
              label: "Значення",
            },
          ],
        },
        {
          name: "bad",
          type: "group",
          label: "Поганий",
          fields: [
            {
              name: "title",
              type: "text",
              defaultValue: "Поганий",
              admin: {
                hidden: true,
              },
            },
            {
              name: "value",
              type: "text",
              defaultValue: "0",
              label: "Значення",
            },
          ],
        },
      ],
    },
    {
      name: "frame",
      type: "group",
      admin: {
        description: `Якщо ви хочете додати відсоток, використовуйте "+",
           (приклад: +10), або використовуйте "-"
           (приклад: -10). Якщо ви не хочете змінювати відсоток, то не редагуйте це поле`,
      },
      label: "Діагностика корпусу",
      fields: [
        {
          name: "veryBeautiful",
          type: "group",
          label: "Дуже гарний",
          fields: [
            {
              name: "title",
              type: "text",
              defaultValue: "Дуже гарний",
              admin: {
                hidden: true,
              },
            },
            {
              name: "value",
              type: "text",
              defaultValue: "0",
              label: "Значення",
            },
          ],
        },
        {
          name: "beautiful",
          type: "group",
          label: "Гарний",
          fields: [
            {
              name: "title",
              type: "text",
              defaultValue: "Гарний",
              admin: {
                hidden: true,
              },
            },
            {
              name: "value",
              type: "text",
              defaultValue: "0",
              label: "Значення",
            },
          ],
        },
        {
          name: "average",
          type: "group",
          label: "Середній",
          fields: [
            {
              name: "title",
              type: "text",
              defaultValue: "Середній",
              admin: {
                hidden: true,
              },
            },
            {
              name: "value",
              type: "text",
              defaultValue: "0",
              label: "Значення",
            },
          ],
        },
        {
          name: "bad",
          type: "group",
          label: "Поганий",
          fields: [
            {
              name: "title",
              type: "text",
              defaultValue: "Поганий",
              admin: {
                hidden: true,
              },
            },
            {
              name: "value",
              type: "text",
              defaultValue: "0",
              label: "Значення",
            },
          ],
        },
      ],
    },
    {
      name: "tech",
      type: "group",
      admin: {
        description: `Якщо ви хочете додати відсоток, використовуйте "+",
           (приклад: +10), або використовуйте "-"
           (приклад: -10). Якщо ви не хочете змінювати відсоток, то не редагуйте це поле`,
      },
      label: "Діагностика апаратної частини",
      fields: [
        {
          name: "veryBeautiful",
          type: "group",
          label: "Незначні  дефекти",
          fields: [
            {
              name: "title",
              type: "text",
              defaultValue: "Незначні  дефекти",
              admin: {
                hidden: true,
              },
            },
            {
              name: "value",
              type: "text",
              defaultValue: "0",
              label: "Значення",
            },
          ],
        },
        {
          name: "beautiful",
          type: "group",
          label: "Значні дефекти",
          fields: [
            {
              name: "title",
              type: "text",
              defaultValue: "Значні дефекти",
              admin: {
                hidden: true,
              },
            },
            {
              name: "value",
              type: "text",
              defaultValue: "0",
              label: "Значення",
            },
          ],
        },
        {
          name: "average",
          type: "group",
          label: "Критичні дефекти",
          fields: [
            {
              name: "title",
              type: "text",
              defaultValue: "Критичні дефекти",
              admin: {
                hidden: true,
              },
            },
            {
              name: "value",
              type: "text",
              defaultValue: "0",
              label: "Значення",
            },
          ],
        },
        {
          name: "bad",
          type: "group",
          label: "Пошкодження",
          fields: [
            {
              name: "title",
              type: "text",
              defaultValue: "Пошкодження",
              admin: {
                hidden: true,
              },
            },
            {
              name: "value",
              type: "text",
              defaultValue: "0",
              label: "Значення",
            },
          ],
        },
      ],
    },
    {
      name: "battery",
      type: "group",
      admin: {
        description: `Якщо ви хочете додати відсоток, використовуйте "+",
           (приклад: +10), або використовуйте "-"
           (приклад: -10). Якщо ви не хочете змінювати відсоток, то не редагуйте це поле`,
      },
      label: "Акамуляторна батарея",
      fields: [
        {
          name: "average",
          type: "group",
          label: "Менше 80%",
          fields: [
            {
              name: "title",
              type: "text",
              defaultValue: "Менше 80%",
              admin: {
                hidden: true,
              },
            },
            {
              name: "value",
              type: "text",
              defaultValue: "0",
              label: "Значення",
            },
          ],
        },
        {
          name: "bad",
          type: "group",
          label: "Батарея вздулась",
          fields: [
            {
              name: "title",
              type: "text",
              defaultValue: "Батарея вздулась",
              admin: {
                hidden: true,
              },
            },
            {
              name: "value",
              type: "text",
              defaultValue: "0",
              label: "Значення",
            },
          ],
        },
      ],
    },
    {
      name: "kits",
      type: "group",
      admin: {
        description: `Якщо ви хочете додати відсоток, використовуйте "+",
           (приклад: +10), або використовуйте "-"
           (приклад: -10). Якщо ви не хочете змінювати відсоток, то не редагуйте це поле`,
      },
      label: "Комплектація",
      fields: [
        {
          name: "beautiful",
          type: "group",
          label: "Частковий",
          fields: [
            {
              name: "title",
              type: "text",
              defaultValue: "Частковий",
              admin: {
                hidden: true,
              },
            },
            {
              name: "value",
              type: "text",
              defaultValue: "0",
              label: "Значення",
            },
          ],
        },
        {
          name: "average",
          type: "group",
          label: "Немає комплекту",
          fields: [
            {
              name: "title",
              type: "text",
              defaultValue: "Немає комплекту",
              admin: {
                hidden: true,
              },
            },
            {
              name: "value",
              type: "text",
              defaultValue: "0",
              label: "Значення",
            },
          ],
        },
      ],
    },
  ],
};
export default CollectionsPhone;