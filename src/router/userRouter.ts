import { Router } from "express";
import {
  login,
  registration,
  verify,
  edit,
  basket,
  sendCodePassword,
  resetPassword,
} from "../controllers/user";
const router = Router();

router.post("/login", login);
router.post("/registration", registration);
router.post("/verify", verify);
router.patch("/edit", edit);
router.patch("/basket", basket);
router.patch("/send-code", sendCodePassword);
router.patch("/reset-password", resetPassword);

export default router;
