import { Response, NextFunction } from "express";
import { IAuthRequest, IDecodeJWT } from "../interfaces";
import jwt from "jsonwebtoken";

const isAuth: any = (req: IAuthRequest, res: Response, next: NextFunction) => {
  const authHeader = req.get("Authorization");
  if (!authHeader) {
    const error = new Error("Not authenticated.");
    throw error;
  }

  const token = authHeader.split(" ")[1];
  let decodedToken;

  try {
    decodedToken = jwt.verify(token, "secret") as IDecodeJWT;
  } catch (err) {
    throw err;
  }

  if (!decodedToken) {
    const error = new Error("Not authenticated");
    throw error;
  }
  req.userId = decodedToken.userId;
  next();
};

export default isAuth;
