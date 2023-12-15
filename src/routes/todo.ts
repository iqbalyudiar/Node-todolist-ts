import { Router } from "express";
import controller from "../controllers";

const router = Router();
const {
  todo: { getTodos, getTodo, addTodo, updateTodo, updateTodoStatus },
} = controller;

// Get all todos
router.get("/todos", getTodos);

// Get single todo
router.get("/todo/:todoId", getTodo);

// Create a todo
router.post("/todo", addTodo);

// Update todo
router.put("/todo/:todoId", updateTodo);

// Update todo status
router.patch("/todo/:todoId/status", updateTodoStatus);

export default router;
