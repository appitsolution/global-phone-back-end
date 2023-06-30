const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const basketSchema = Schema({
  basket: {
    id: {
      type: String,
    },
    basketList: {
      type: Array,
    },
    totalPrice: {
      type: Number,
    },
  },
});

const User = model("basket", basketSchema);

export default User;
