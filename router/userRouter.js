const { Router } = require("express");
const router = Router();
const { login, registration, verify } = require("../controllers/user");

router.post("/login", login);
router.post("/registration", registration);
router.post("/registration", verify);

module.exports = router;
