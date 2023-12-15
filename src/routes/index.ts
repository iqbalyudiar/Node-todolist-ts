import { Router } from "express";
import todoRoutes from "./todo";
import userRoutes from "./user";

const router = Router();

router.use("/", todoRoutes);
router.use("/", userRoutes);

export default router;
