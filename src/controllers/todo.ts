import { Request, Response, NextFunction } from "express";
import { Todo, User } from "../models";

export const getTodos = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const todos = await Todo.find().populate("creator", "username name");
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
    const result = await Todo.findById(todoId).populate({
      path: "creator",
      select: "username name",
    });
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
  const { title, description, creator } = req.body;
  const todo = new Todo({
    title,
    description,
    creator,
    status: "todo",
  });
  try {
    const result = await todo.save();
    const user = await User.findById(creator);

    user?.todos?.push(todo);
    await user?.save();
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
      message: "Todo status updated.",
      result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { title, description, creator, status } = req.body;
  const { todoId } = req.params;

  try {
    const todo = await Todo.findById(todoId);
    if (!todo) {
      throw Error("Todo not found.");
    }

    todo.title = title;
    todo.description = description;
    todo.creator = creator;
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

export const deleteTodo = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { todoId } = req.params;
    const { creator } = req.body;
    const result = await Todo.findById(todoId);
    await Todo.findByIdAndDelete(todoId);

    const user = await User.findById(creator);
    user?.todos?.pull(todoId);
    await user?.save();
    res.status(200).json({
      success: true,
      message: "Todo has been deleted.",
    });
  } catch (error) {
    console.log(error);
  }
};

export default {
  getTodos,
  getTodo,
  addTodo,
  updateTodo,
  updateTodoStatus,
  deleteTodo,
};
