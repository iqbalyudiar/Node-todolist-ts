import { Request, Response, NextFunction } from "express";
import { User } from "../models";

export const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await User.find().populate(
      "todos",
      "title description status"
    );
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
    const result = await User.findById(userId).populate(
      "todos",
      "title description status"
    );
    res.status(200).json({
      success: true,
      result,
    });
  } catch (error) {
    console.log(error);
  }
};

export default { getUser, getUsers };
