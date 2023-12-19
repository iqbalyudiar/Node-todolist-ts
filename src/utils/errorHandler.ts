import { Request, Response, NextFunction } from "express";
import { IError } from "../interfaces";

export const errorHandler = (
  error: IError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const status = error.statusCode || 500;
  const message = error.message;
  const { data = [] } = error;
  res.status(status).json({ message, data });
};
