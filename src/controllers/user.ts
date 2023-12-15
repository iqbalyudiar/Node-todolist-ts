import { Request, Response, NextFunction } from "express";
import { User } from "../models";

export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username, name } = req.body;

  try {
    const user = new User({
      username,
      name,
    });

    const result = await user.save();
    res.status(201).json({
      success: true,
      result,
    });
  } catch (error) {
    console.log(error);
  }
};

export default { createUser };
