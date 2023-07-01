const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com",
  port: 587,
  secure: false, // true для SSL
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendMail = (to = "", title = "", text = "") => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: to,
    subject: title,
    text: text,
  };

  // Отправка письма
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Ошибка при отправке письма:", error);
    } else {
      console.log("Письмо успешно отправлено!");
      console.log("ID сообщения:", info.messageId);
    }
  });
};

export default sendMail;
