import SchemaUser from "../../db/SchemaUser";
const jwt = require("jsonwebtoken");

const verify = async (req: any, res: any, next) => {
  // console.log("Ok");
  try {
    const { TOKEN_KEY } = process.env;
    const { token } = req.body;
    // const [, token] = req.headers.authorization.split(" ");
    const { id } = jwt.verify(token, TOKEN_KEY);
    const total = await SchemaUser.findById(id);

    if (total) {
      res.status(200).json({
        status: "success",
        code: 200,
        data: total,
      });

      return;
    }

    res.status(403).json({
      status: "error",
      code: 403,
      message: "Bad requst",
    });
  } catch (error) {
    console.log(error);
    res.status(403).json({
      status: "error",
      code: 403,
      message: error,
    });
  }
};

export default verify;
