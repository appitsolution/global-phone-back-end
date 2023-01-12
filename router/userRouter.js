const { Router } = require("express");
const router = Router();
const { login, registration, verify, edit } = require("../controllers/user");

router.post("/login", login);
router.post("/registration", registration);
router.post("/verify", verify);
router.patch("/edit", edit);
module.exports = router;
