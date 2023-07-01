import userModel from "../../db/SchemaUser";
import sendCodeModel from "../../db/SchemaCodePassword";
import sendMail from "../../utils/sendMail";

function generateCode() {
  const code = Math.floor(1000 + Math.random() * 9000); // Генерируем случайное число от 1000 до 9999
  return code.toString(); // Преобразуем число в строку и возвращаем
}

const sendCodePassword = async (req, res) => {
  const { email } = req.body;
  if (!email) {
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
  const passCode = generateCode();
  if (!checkCode) {
    await sendCodeModel.create({
      email: email,
      code: passCode,
    });
    sendMail(email, "Код перевірки", `Ваш код перевірки: ${passCode}`);
  } else {
    await sendCodeModel.updateOne(
      { email: email },
      {
        email: email,
        code: passCode,
      }
    );
    sendMail(email, "Код перевірки", `Ваш код перевірки: ${passCode}`);
  }

  return res.json({
    code: 200,
    message: "ok",
  });
};

export default sendCodePassword;
