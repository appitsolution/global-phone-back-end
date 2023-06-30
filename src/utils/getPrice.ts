import axios from "axios";

const getPrice = async (req: any, res: any) => {
  const { id } = req.query;

  if (!id) return res.status(400);

  const requestPrice = await axios(
    `https://api.priceapi.com/v2/jobs/${id}/download?token=MPDGFRQTHCWEUYDEDQZEBYNEUEWSOMQHBZBJZSHQMMSSYTIOEGQIKGTGNDNVPPMF`
  );

  return res.json(requestPrice.data);
};

export default getPrice;
