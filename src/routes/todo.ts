import { Router } from "express";
import controller from "../controllers";

const router = Router();
const {
  todo: { getTodos },
} = controller;

router.get("/todos", getTodos);

export default router;
