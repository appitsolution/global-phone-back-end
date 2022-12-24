const express = require("express");
const payload = require("payload");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();

const { user } = require("./router");

// Redirect root to Admin panel
app.use(cors());
app.use(bodyParser.json());

app.use("/user", user);

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

// Add your own express routes here

app.listen(3000);
