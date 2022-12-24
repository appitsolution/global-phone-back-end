const { Router } = require("express");
const router = Router();
const {
  allOrders,
  oneOrder,
  addOrder,
  deleteOrder,
} = require("../controllers/orders");

router.get("/get", allOrders);
router.get("/one/:id", oneOrder);
router.post("/add", addOrder);
router.post("/delete", deleteOrder);

module.exports = router;
