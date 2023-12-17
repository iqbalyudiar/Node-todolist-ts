import { Router } from "express";
import todoRoutes from "./todo";
import userRoutes from "./user";
import authRoutes from "./auth";

const router = Router();

router.use("/", todoRoutes);
router.use("/", userRoutes);
router.use("/auth", authRoutes);

export default router;
