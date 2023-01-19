const axios = require("axios");
const payload = require("payload");
const SchemeUser = require("../../db/SchemaUser");
// import payload from "payload";

const addOrder = async (req, res) => {
  const { idUser, payment, products } = req.body;

  const user = await SchemeUser.findById(idUser);

  if (!user) return res.send("Not Found");

  const data = {
    idUser: idUser,
    city: user.address.city,
    house: user.address.house,
    index: user.address.index,
    phone: user.address.phone,
    transfer: "Трансфер безкоштовно",
    payment: payment,
    status: "В роботе",
    statusOffer: 0,
    products: [...products],
    priceDelivery: products.reduce(
      (accum, current) => accum + current.price,
      0
    ),
  };

  const result = await payload.create({
    collection: "orders-user",
    data: data,
  });

  await SchemeUser.findByIdAndUpdate(idUser, {
    mySell: [...user.mySell, result],
  });

  return res.send(result);
};

module.exports = addOrder;
