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
    paymentSelect: payment.selectPay,
    authorPay: payment.card.authorPay,
    iban: payment.card.iban,
    nameBank: payment.card.nameBank,
    paypalUrl: payment.paypal.url,
    status: "В роботі",
    statusOffer: 0,
    products: [...products],
    priceDelivery: products.reduce(
      (accum, current) => accum + Number(current.price),
      0
    ),
  };

  const result = await payload.create({
    collection: "orders-user",
    data: data,
  });

  console.log(result);
  await SchemeUser.findByIdAndUpdate(idUser, {
    mySell: [...user.mySell, { id: result.id }],
  });

  return res.send(result);
};

module.exports = addOrder;
