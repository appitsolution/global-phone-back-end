import axios from "axios";
import payload from "payload";
import SchemeUser from "../../db/SchemaUser";
// import createPrice from "../../utils/createPrice";
// import payload from "payload";

const addOrder = async (req, res) => {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 7);

  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;

  const { idUser, payment, products } = req.body;

  const user = await SchemeUser.findById(idUser);

  if (!user) return res.send("Not Found");

  const data = {
    idUser: idUser,
    city: user.address.city,
    house: user.address.house,
    houseNumber: user.address.houseNumber,
    index: user.address.index,
    phone: user.address.phone,
    transfer: "Трансфер безкоштовно",
    paymentSelect: payment.selectPay,
    authorPay: payment.card.authorPay,
    iban: payment.card.iban,
    nameBank: payment.card.nameBank,
    paypalUrl: payment.paypal.url,
    status: "work",
    statusOffer: 0,
    products: [...products],
    priceDelivery: products.reduce(
      (accum, current) => accum + Number(current.price),
      0
    ),
  };

  const result: any = await payload.create({
    collection: "orders-user" as never,
    data: data,
  });

  const configDeliveryDHL = {
    method: "post",
    url: "https://api-sandbox.dhl.com/parcel/de/transportation/pickup/v1/orders?=false",
    headers: {
      Accept: "application/json",
      "dhl-api-key": "FGAJK85YWwJuOoDdzvewskAGN0velKyG",
      "Content-Type": "application/json",
      Authorization:
        "Basic MjIyMjIyMjIyMl9hYnJfMDgwMTpTOFBqbUxCIXMydnJ6V1Yzbw==",
      "Access-Control-Allow-Origin": "*",
    },
    data: {
      customerDetails: {
        billingNumber: "22222222220801",
      },
      pickupLocation: {
        pickupAddress: {
          name1: "Deutsche Post DHL Group",
          addressStreet: user.address.house,
          addressHouse: user.address.houseNumber,
          postalCode: user.address.index,
          city: user.address.city,
          country: "DE",
        },
      },
      contactPerson: {
        name: `${user.firstName} ${user.lastName}`,
        phone: user.tel,
        email: user.email,
      },
      pickupDetails: {
        pickupDate: {
          type: "Date",
          value: formattedDate,
        },
        emailNotification: user.email,
      },
      shipmentDetails: {
        shipments: [
          {
            transportationType: "PAKET",
            pickupServices: {
              bulkyGood: {
                comment: "Fahrrad",
              },
            },
            customerReference: "987654321",
          },
        ],
      },
    },
  };

  const createDeliveryDhl = await axios.request(configDeliveryDHL);

  console.log(createDeliveryDhl);

  await payload.update({
    collection: "orders-user" as never,
    id: result.id,
    data: {
      numberInvoice: createDeliveryDhl.data.confirmation.value.orderID,
    },
  });

  // console.log(result);
  await SchemeUser.findByIdAndUpdate(idUser, {
    mySell: [...user.mySell, { id: result.id }],
    numberInvoice: createDeliveryDhl.data.confirmation.value.orderID,
  });

  return res.send(result);
};

export default addOrder;
