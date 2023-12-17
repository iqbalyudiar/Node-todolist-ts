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

export const signin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { username, password } = req.body;
  let foundUser;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      const error = new Error("User not found");
      throw error;
    }

    foundUser = user;
    const isEqual = await bcrypt.compare(password, user.password);
    if (!isEqual) {
      const error = new Error("Wrong password!");
      throw error;
    }

    const token = jwt.sign(
      {
        username: foundUser.username,
        userId: foundUser._id.toString(),
      },
      "secret"
    );
    res.status(201).json({
      success: true,
      token,
      userID: foundUser._id,
    });
  } catch (error) {
    console.log(error);
  }
};

export default { signup, signin };
