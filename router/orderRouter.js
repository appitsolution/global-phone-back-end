const { Router } = require("express");
const router = Router();
const {
  allOrders,
  updateOrderReturn,
  addOrder,
  deleteOrder,
  updateOrderInvoice,
} = require("../controllers/orders");

router.get("/get", allOrders);
router.post("/update-return/:id", updateOrderReturn);
router.post("/update-invoice/:id", updateOrderInvoice);
router.post("/add", addOrder);
router.post("/delete", deleteOrder);

module.exports = router;
