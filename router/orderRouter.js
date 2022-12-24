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
router.posh("/add", addOrder);
router.post("/delete", deleteOrder);
