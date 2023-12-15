import { Request, Response, NextFunction } from "express";
import { Todo } from "../models";

export const getTodos = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const todos = await Todo.find();
    const totalItems = await Todo.find().countDocuments();

    res.status(200).json({
      success: true,
      todos,
      totalItems,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { todoId } = req.params;
    const result = await Todo.findById(todoId);
    res.status(200).json({
      success: true,
      result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const addTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { title, description } = req.body;
  const todo = new Todo({
    title,
    description,
    creator: "Iqbal",
    status: "todo",
  });
  try {
    const result = await todo.save();
    res.status(201).json({
      message: "Todo created",
      success: true,
      result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateTodoStatus = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { status } = req.body;
  const { todoId } = req.params;

  try {
    const todo = await Todo.findById(todoId);
    if (!todo) {
      throw Error("Todo not found.");
    }

    todo.status = status;
    const result = await todo.save();
    res.status(200).json({
      success: true,
      message: "Todo updated.",
      result,
    });
  } catch (error) {
    console.log(error);
  }
};

export default { getTodos, getTodo, addTodo, updateTodoStatus };
