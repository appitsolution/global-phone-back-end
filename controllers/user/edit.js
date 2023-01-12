const SchemaUser = require("../../db/SchemaUser");

const edit = async (req, res) => {
  const { id } = req.body;
  const user = SchemaUser.findById(id);
  if (user === undefined) {
    res.send("Not Found");
    return;
  }
  const {
    firstName,
    lastName,
    email,
    tel,
    address: { city, house, index, phone },
    payment: { selectPay, authorPay, iban, nameBank },
  } = req.body.options;

  const result = await SchemaUser.findByIdAndUpdate(id, {
    ...req.body.options,
  });

  res.status(200);
  res.send(result);
  return;
};

module.exports = edit;
