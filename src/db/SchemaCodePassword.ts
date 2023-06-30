import mongoose, { Schema } from "mongoose";
require("dotenv").config();

const db2 = mongoose.createConnection(process.env.MONGODB_BACK_URI);

const codePasswordSchema = new Schema({
  email: {
    type: String,
  },
  code: {
    type: String,
  },
});

const CodePassword = db2.model("code-password", codePasswordSchema);

export default CodePassword;
