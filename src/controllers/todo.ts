import { Request, Response, NextFunction } from "express";
import { Todo } from "../models";

export const getTodos = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json([
    {
      id: 1,
      title: "Sweeping",
      description: "Sweeping a floor",
      status: "todo",
    },
  ]);
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
      result,
    });
  } catch (error) {
    console.log(error);
  }
};

export default { getTodos, addTodo };
