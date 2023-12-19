import { body } from "express-validator";
import { User } from "../models";
export const signupRules = [
  body("username").custom(async (username) => {
    const user = await User.findOne({ username });
    if (user) {
      const error = new Error("User already exists");
      throw error;
    }
    return true;
  }),
  body("password").trim().isLength({ min: 5 }),
  body("name").trim().not().isEmpty(),
];

export const signinRules = [
  body("username").notEmpty().withMessage("Username cant be empty"),
  body("password").notEmpty().withMessage("Username cant be empty"),
];
