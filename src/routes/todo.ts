import { Router } from "express";
import controller from "../controllers";

const router = Router();
const {
  todo: { getTodos, addTodo },
} = controller;

router.get("/todos", getTodos);

router.post("/todo", addTodo);

export default router;
