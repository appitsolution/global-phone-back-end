const { Router } = require("express");
const router = Router();
const { edit } = require("../controllers/basket");

router.patch("/edit", edit);

module.exports = router;
