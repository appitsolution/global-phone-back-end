import payload from "payload";
import axios from "axios";

const updateOrderReturn = async (req, res) => {
  const result: any = await payload.update({
    collection: "orders-user" as never,
    id: req.params.id,
    data: {
      returnStatus: "True",
    },
  });

  try {
    const resultDeleteOrder = await axios.delete(
      `https://api-sandbox.dhl.com/parcel/de/transportation/pickup/v1/orders?orderID=${result.numberInvoice}`,
      {
        headers: {
          Accept: "application/json",
          "dhl-api-key": "FGAJK85YWwJuOoDdzvewskAGN0velKyG",
          "Content-Type": "application/json",
          Authorization:
            "Basic MjIyMjIyMjIyMl9hYnJfMDgwMTpTOFBqbUxCIXMydnJ6V1Yzbw==",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  } catch (err) {
    console.log(err);
  }

  return res.json({ status: "ok", numberInvoice: result.numberInvoice });
};
export default updateOrderReturn;
