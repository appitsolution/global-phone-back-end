import payload from "payload";
import createPrice from "../../utils/createPrice";

let limitedRequest = false;

const updateProductWatch = async (req, res) => {
  const { id, collection, data } = req.body;

  if (!id || !collection || !data) return res.status(200);

  if (limitedRequest) return res.status(200);
  limitedRequest = true;

  const idPrice = await createPrice(
    data.model + " " + (!data.year ? "" : data.year)
  );

  await payload.update({
    collection: collection as never,
    id: id,
    data: {
      idPrice: idPrice,
    },
  });

  setTimeout(() => {
    limitedRequest = false;
  }, 2000);

  return res.status(200);
};

export default updateProductWatch;
