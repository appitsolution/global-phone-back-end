const express = require("express");
const payload = require("payload");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
const app = express();

mongoose.connect(process.env.MONGODB_BACK_URI).then(() => {
  console.log("connect db");
});

const { user, order, basket } = require("./router");

app.use(cors());
app.use(bodyParser.json());

app.use("/user", user);
app.use("/order", order);
app.use("/basket", basket);

// Redirect root to Admin panel
app.get("/", (_, res) => {
  res.redirect("/admin");
});

// Initialize Payload
payload.init({
  secret: process.env.PAYLOAD_SECRET,
  mongoURL: process.env.MONGODB_URI,
  express: app,
  onInit: () => {
    payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`);
  },
});

app.listen(3000);
