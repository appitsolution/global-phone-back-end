const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = Schema({
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
    index: {
      type: String,
      default: "",
    },
    phone: {
      type: String,
      default: "",
    },
  },
  basket: {
    type: Array,
  },
  payment: {
    selectPay: {
      type: String,
      default: "",
    },
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
  mySell: [
    {
      id: Schema.ObjectId,
      date: { type: Date },
      priceDelivery: { type: String },
      transfer: { type: String },
      pay: { type: String },
      status: { type: String },
      statusOffer: { type: Number },
      products: [
        {
          title: { type: String },
          storage: { type: String },
          type: { type: String },
          color: { type: String },
          price: { type: String },
        },
      ],
    },
  ],
});

const User = model("user", userSchema);

module.exports = User;
