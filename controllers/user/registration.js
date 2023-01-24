const SchemaUser = require("../../db/SchemaUser");
const bcrypt = require("bcryptjs");

const registration = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    const check = await SchemaUser.find({ email });
    if (check.length > 0) {
      return res.status(409).json({
        status: "Such mail exists",
        code: 409,
      });
    }

    const result = await SchemaUser.create({
      firstName,
      lastName,
      email: email,
      password: bcrypt.hashSync(password),
      tel: req.body?.tel,
    });
    res.status(201);
    res.send(result);
  } catch (err) {
    res.send(err);
    return err;
  }
};

module.exports = registration;
