const nodemailer = require("nodemailer");

// Создание транспортера для отправки писем через SMTP
const transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  port: 587,
  secure: false, // true для SSL
  auth: {
    user: "",
    pass: "",
  },
});

// Опции письма
const mailOptions = {
  from: "",
  to: "",
  subject: "Тестовое письмо",
  text: "Привет, это тестовое письмо отправленное через Nodemailer!",
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
