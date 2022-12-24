import { buildConfig } from "payload/config";
import Customers from "./collections/Customers";
import Examples from "./collections/Examples";
import Price from "./collections/Price";
import Users from "./collections/Users";

export default buildConfig({
  serverURL: "http://localhost:3000",
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
