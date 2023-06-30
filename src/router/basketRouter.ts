import { Router } from "express";
import { edit } from "../controllers/basket";
const router = Router();

router.patch("/edit", edit);

export default router;
