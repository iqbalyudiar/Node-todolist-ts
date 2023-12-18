import { Router } from "express";
import controller from "../controllers";
import isAuth from "../middleware/is-auth";

const router = Router();
const {
  todo: {
    getTodos,
    getTodo,
    addTodo,
    updateTodo,
    updateTodoStatus,
    deleteTodo,
  },
} = controller;

// Get all todos
router.get("/todos", isAuth, getTodos);

// Get single todo
router.get("/todo/:todoId", getTodo);

// Create a todo
router.post("/todo", isAuth, addTodo);

// Update todo
router.put("/todo/:todoId", updateTodo);

// Update todo status
router.patch("/todo/:todoId/status", updateTodoStatus);

// Delete todo
router.delete("/todo/:todoId", deleteTodo);

export default router;
