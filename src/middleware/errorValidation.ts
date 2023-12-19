import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import { IError } from "../interfaces";

const errorValidation = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = new Error("Validation failed.") as IError;
    error.data = errors.array();
    error.statusCode = 422;
    throw error;
  }

  next();
};

export default errorValidation;
