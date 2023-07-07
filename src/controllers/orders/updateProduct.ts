import payload from "payload";
import createPrice from "../../utils/createPrice";

let limitedRequest = false;

const updateProduct = async (req, res) => {
  const { id, collection, data } = req.body;

  if (!id || !collection || !data) return res.status(200);

  if (limitedRequest) return res.status(200);
  limitedRequest = true;

  const idPriceResponse: any = await Promise.all(
    data.storage.map(async (item) => {
      const idPrice = await createPrice(
        data.model +
          " " +
          item.storage +
          " gb" +
          " " +
          (!item.year ? "" : item.year)
      );

      return { ...item, idPrice: idPrice };
    })
  );

  await payload.update({
    collection: collection as never,
    id: id,
    data: {
      storage: idPriceResponse,
    },
  });

  setTimeout(() => {
    limitedRequest = false;
  }, 2000);

  return res.status(200);
};

export default updateProduct;
