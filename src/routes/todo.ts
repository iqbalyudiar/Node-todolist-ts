import { Router } from "express";
import controller from "../controllers";

const router = Router();
const {
  todo: { getTodos, getTodo, addTodo },
} = controller;

router.get("/todos", getTodos);

router.get("/todo/:todoId", getTodo);

router.post("/todo", addTodo);

export default router;
