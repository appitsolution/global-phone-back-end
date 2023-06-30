import express from "express";
import payload from "payload";
import { user, order, basket } from "./router";
import bodyParser from "body-parser";
import cors from "cors";
import getPrice from "./utils/getPrice";

require("dotenv").config();
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/user", user);
app.use("/order", order);
app.use("/basket", basket);
app.get("/getPrice", getPrice);

app.get("/", (_, res) => {
  res.redirect("/admin");
});

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    mongoURL: process.env.MONGODB_URI,
    express: app,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
    },
  });

  // Add your own express routes here

  app.listen(3000);
};

start();
