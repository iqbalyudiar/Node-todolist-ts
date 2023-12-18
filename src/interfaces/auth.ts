import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";
export interface IAuthRequest extends Request {
  userId: string;
}

export interface IDecodeJWT extends JwtPayload {
  userId: string;
}
