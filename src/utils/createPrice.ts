import axios from "axios";

const createPrice = async (value: any) => {
  const apiUrl = "https://api.priceapi.com/v2/jobs";

  const requestData = {
    token: "MPDGFRQTHCWEUYDEDQZEBYNEUEWSOMQHBZBJZSHQMMSSYTIOEGQIKGTGNDNVPPMF",
    country: "de",
    source: "google_shopping",
    topic: "product_and_offers",
    key: "term",
    max_age: "1200",
    max_pages: "2",
    sort_by: "ranking_descending",
    condition: "any",
    shipping: "any",
    values: value,
  };

  const responsePrice = await axios.post(apiUrl, requestData);

  return responsePrice.data.job_id;
};

export default createPrice;
