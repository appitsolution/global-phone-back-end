import axios from "axios";
import payload from "payload";

export const generateID = async () => {
  const request = async () => {
    const posts = await payload.find({
      collection: "brand-phones",
    });
    console.log(posts.docs);
  };

  setTimeout(() => {
    request();
  }, 6000);

  return "test";
};
