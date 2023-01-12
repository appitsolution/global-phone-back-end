import { buildConfig } from "payload/config";
import Customers from "./collections/Customers";
import Examples from "./collections/Examples";
import Price from "./collections/Price";
import Users from "./collections/Users";

export default buildConfig({
  serverURL: "https://global-phone.onrender.com",
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    Customers,
    Price,
    // Add Collections here
    // Examples
  ],
});
