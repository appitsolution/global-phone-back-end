const { Router } = require("express");
const router = Router();
const {
  login,
  registration,
  verify,
  edit,
  basket,
} = require("../controllers/user");

router.post("/login", login);
router.post("/registration", registration);
router.post("/verify", verify);
router.patch("/edit", edit);
router.patch("/basket", basket);

module.exports = router;
