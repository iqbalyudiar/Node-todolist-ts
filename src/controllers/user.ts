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

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await User.find();
    const totalItems = await User.find().countDocuments();

    res.status(200).json({
      success: true,
      users,
      totalItems,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userId } = req.params;
    const result = await User.findById(userId);
    res.status(200).json({
      success: true,
      result,
    });
  } catch (error) {
    console.log(error);
  }
};

export default { createUser, getUser, getUsers };
