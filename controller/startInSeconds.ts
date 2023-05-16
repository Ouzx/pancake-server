import { Request, Response } from "express";

const data = {
  header: 'Start in seconds.',
  paragraph: 'Connect your crypto wallet to start using the app in seconds.',
    paragraphBold: 'No registration needed.',
    buttonText: "Connect Wallet",
    linkText: "Learn how to start",
}

export const getStartInSecondsData = async (req: Request, res: Response) => {
  res.status(200).json(data);
};
