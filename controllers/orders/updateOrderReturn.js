const payload = require("payload");

const updateOrderReturn = async (req, res) => {
  await payload.update({
    collection: "orders-user",
    id: req.params.id,
    data: {
      returnStatus: "True",
    },
  });

  return res.send("ok");
};
module.exports = updateOrderReturn;
