const { Router } = require("express");
const router = Router();
const { login, registration } = require("../controllers/user");

router.post("/login", login);
router.post("/registration", registration);

module.exports = router;
