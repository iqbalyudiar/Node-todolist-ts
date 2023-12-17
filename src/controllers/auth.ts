import { Request, Response, NextFunction } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models";

export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username, name, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({
      username,
      name,
      password: hashedPassword,
    });

    const result = await user.save();
    res.status(201).json({
      success: true,
      message: "User created!",
      userId: result._id,
    });
  } catch (error) {
    console.log(error);
  }
};

export default { signup };
