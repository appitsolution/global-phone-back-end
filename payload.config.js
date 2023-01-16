import { buildConfig } from "payload/config";
import Customers from "./collections/Customers";
import Examples from "./collections/Examples";
import Users from "./collections/Users";
import Orders from "./collections/Orders";
import Media from "./collections/Media";
import Answers from "./collections/Answers";
import CompanyNews from "./collections/CompanyNews";
import CollectionsPhone from "./collections/CollectionsPhone.js";

export default buildConfig({
  serverURL: "http://localhost:3000",
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    Orders,
    CompanyNews,
    Media,
    Answers,
    CollectionsPhone,

    // Add Collections here
    // Examples
  ],
});
