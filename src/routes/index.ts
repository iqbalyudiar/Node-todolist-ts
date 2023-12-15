import { Router } from "express";
import todoRoutes from "./todo";

const router = Router();

router.use("/", todoRoutes);

export default router;
