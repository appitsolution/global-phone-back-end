import userModel from "../../db/SchemaUser";
import sendCodeModel from "../../db/SchemaCodePassword";
const bcrypt = require("bcryptjs");

const resetPassword = async (req, res) => {
  const { email, code, password } = req.body;
  if (!email || !code) {
    return res.json({
      code: 401,
      message: "Not such arguments",
    });
  }

  const user = await userModel.findOne({ email: email });
  if (!user) {
    return res.json({
      code: 404,
      message: "not found",
    });
  }

  const checkCode = await sendCodeModel.findOne({ email: email });

  if (!checkCode) {
    return res.json({
      code: 404,
      message: "not found",
    });
  }

  if (checkCode.code !== code) {
    return res.json({
      code: 400,
      message: "not correct code",
    });
  }

  await userModel.updateOne(
    { email: email },
    {
      password: bcrypt.hashSync(password),
    }
  );

  await sendCodeModel.findByIdAndDelete(checkCode.id);

  return res.json({
    code: 200,
    message: "ok",
  });
};

export default resetPassword;
