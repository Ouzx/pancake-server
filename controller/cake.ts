import { Request, Response } from "express";

export const getCakeData = async (req: Request, res: Response) => {
  res.status(200).json({ message: "Hello from cake" });
};
