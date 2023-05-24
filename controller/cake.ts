import { Request, Response } from "express";

const data = {
  headerFirstWord: "CAKE",
  headerText: " makes our world go round.",
  paragraphText:
    "CAKE token is at the heart of the PancakeSwap ecosystem. Buy it, win it, farm it, spend it, stake it... heck, you can even vote with it!",
  buttonText: "Buy CAKE",
  linkText: "Learn",
  blocks: [
    {
      entry: "Circulating Supply",
      data: 200369318,
    },
    {
      entry: "Total supply",
      data: 385464216,
    },
    {
      entry: "Max Supply",
      data: "750,000,000",
    },
    {
      entry: "Market cap",
      data: "$370 million",
    },
    {
      entry: "Burned to date",
      data: 826186824,
    },
    {
      entry: "Current emissions",
      data: "5.23/block",
    },
  ],
};

export const getCakeData = async (req: Request, res: Response) => {
  res.status(200).json(data);
};
