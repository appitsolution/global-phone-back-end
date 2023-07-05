import { buildConfig } from "payload/config";
import path from "path";
import { Users } from "./collections/Users";
import OrdersUser from "./collections/OrdersUser";
import Media from "./collections/Media";
import Answers from "./collections/Answers";
import CompanyNews from "./collections/CompanyNews";

import CollectionsPhone from "./collections/CollectionsPhone";
import BrandPhones from "./collections/BrandPhones";

import CollectionsTablet from "./collections/CollectionsTablet";
import BrandTablet from "./collections/BrandTablet";

import CollectionsWatch from "./collections/CollectionsWatch";
import BrandWatch from "./collections/BrandWatch";
import ListPosts from "./collections/ListPosts";
import BestProducts from "./collections/BestProducts";

import OfferList from "./collections/OfferList";
import WhyNotList from "./collections/WhyNotList";
import AGB from "./collections/AGB";
import Policy from "./collections/Policy";
import Impressum from "./collections/Impressum";
import Phones from "./collections/Phones";
import Tablet from "./collections/Tablet";
import Watch from "./collections/Watch";

export default buildConfig({
  serverURL: process.env.SERVER_URL,
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    OrdersUser,
    CompanyNews,
    Media,
    Answers,
    Phones,
    CollectionsPhone,
    BrandPhones,
    Tablet,
    CollectionsTablet,
    BrandTablet,
    Watch,
    CollectionsWatch,
    BrandWatch,
    ListPosts,
    BestProducts,
    OfferList,
    WhyNotList,
    AGB,
    Policy,
    Impressum,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
});
