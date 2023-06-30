import mongoose, { Schema } from "mongoose";
require("dotenv").config();

const db2 = mongoose.createConnection(process.env.MONGODB_BACK_URI);

const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    minlength: 8,
    required: true,
  },
  tel: {
    type: String,
    default: "",
  },
  address: {
    city: {
      type: String,
      default: "",
    },
    house: {
      type: String,
      default: "",
    },
    houseNumber: {
      type: String,
      default: "",
    },
    index: {
      type: String,
      default: "",
    },
    phone: {
      type: String,
      default: "",
    },
  },
  payment: {
    selectPay: {
      type: String,
      default: "",
    },
    card: {
      authorPay: {
        type: String,
        default: "",
      },
      iban: {
        type: String,
        default: "",
      },
      nameBank: {
        type: String,
        default: "",
      },
    },
    paypal: {
      url: {
        type: String,
        default: "",
      },
    },
  },
  mySell: [
    {
      id: String,
      date: { type: Date },
      transfer: { type: String },
      payment: { type: String },
      status: { type: String },
      statusOffer: { type: Number },
      products: {
        type: Array,
      },
      priceDelivery: { type: String },
    },
  ],
});

const User = db2.model("user", userSchema);

export default User;
