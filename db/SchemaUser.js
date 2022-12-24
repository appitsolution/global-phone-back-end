const mongoose = require("mongoose");
const { Schema, model } = mongoose;
mongoose.connect(process.env.MONGODB_BACK_URI).then(() => {
  console.log("connect db");
});
const userSchema = Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
});

const User = model("user", userSchema);

module.exports = User;
