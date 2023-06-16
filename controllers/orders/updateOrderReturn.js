const payload = require("payload");

const updateOrderReturn = async (req, res) => {
  const result = await payload.update({
    collection: "orders-user",
    id: req.params.id,
    data: {
      returnStatus: "True",
    },
  });

  return res.send({ status: "ok", numberInvoice: result.numberInvoice });
};
module.exports = updateOrderReturn;
