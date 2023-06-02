const payload = require("payload");

const updateOrderInvoice = async (req, res) => {
  const { params, body } = req;

  console.log(params, body);

  await payload.update({
    collection: "orders-user",
    id: params.id,
    data: {
      numberInvoice: body.numberInvoice,
    },
  });

  return res.send("ok");
};

module.exports = updateOrderInvoice;
