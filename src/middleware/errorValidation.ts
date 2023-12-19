import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";

const errorValidation = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error("Validation failed.");
    const message = error.message;
    const data = errors.array();
    return res.status(422).json({ message, data });
  }

  next();
};

export default errorValidation;
