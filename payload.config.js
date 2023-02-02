import { buildConfig } from "payload/config";
import Users from "./collections/Users";
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

export default buildConfig({
  serverURL: "http://localhost:3000",
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    OrdersUser,
    CompanyNews,
    Media,
    Answers,
    CollectionsPhone,
    BrandPhones,
    CollectionsTablet,
    BrandTablet,
    CollectionsWatch,
    BrandWatch,
    ListPosts,
    BestProducts,
    OfferList,
    WhyNotList,
  ],
});
