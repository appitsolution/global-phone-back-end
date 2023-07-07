import { Router } from "express";
import {
  allOrders,
  updateOrderReturn,
  addOrder,
  deleteOrder,
  updateOrderInvoice,
  updateProduct,
} from "../controllers/orders";
const router = Router();

router.get("/get", allOrders);
router.post("/update-return/:id", updateOrderReturn);
router.post("/update-invoice/:id", updateOrderInvoice);
router.post("/update-product", updateProduct);
router.post("/add", addOrder);
router.post("/delete", deleteOrder);

export default router;
