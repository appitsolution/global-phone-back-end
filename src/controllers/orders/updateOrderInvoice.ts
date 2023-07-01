import payload from "payload";

const updateOrderInvoice = async (req, res) => {
  const { params, body } = req;

  console.log(params, body);

  await payload.update({
    collection: "orders-user" as never,
    id: params.id,
    data: {
      numberInvoice: body.numberInvoice,
    },
  });

  return res.send("ok");
};

export default updateOrderInvoice;
