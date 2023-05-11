import { Request, Response } from "express";

const data = {
  title: "Used by millions. Trusted with billions.",
  description:
    "PancakeSwap has the most users of any decentralized platform, ever. And those users are now entrusting the platform with over $2.2 billion in funds.",
  question: "Will you join them?",
  cards: [
    {
      number: "1.6 million",
      adj: "users",
      description: "in the last 30 days",
    },
    {
      number: "21 million",
      adj: "trades",
      description: "made in the last 30 days",
    },
    {
      number: "$2.2 billion",
      adj: "staked  ",
      description: "total Value Locked",
    },
  ],
};

export const getUsedTrustedData = async (req: Request, res: Response) => {
  res.status(200).json(data);
};
