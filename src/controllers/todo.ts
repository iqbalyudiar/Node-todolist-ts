import { Request, Response, NextFunction } from "express";
export const getTodos = (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json([
    {
      id: 1,
      title: "Sweeping",
      description: "Sweeping a floor",
      status: "todo",
    },
  ]);
};

export default { getTodos };
