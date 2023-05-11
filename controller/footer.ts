import { Request, Response } from "express";

const data = {
  footer: [
    {
      title: "About",
      links: [
        "Contact",
        " Bran",
        "Blog",
        "Community",
        "Litepaper",
        "Terms Of Service",
      ],
    },
    {
      title: "Help",
      links: ["Customer Support", "Troubleshooting", "Guides"],
    },
    {
      title: "Developers",
      links: ["Github", "Documentation", "Bug Bounty", "Audits", "Careers"],
    },
  ],
};

export const getFooterData = async (req: Request, res: Response) => {
  res.status(200).json(data);
};
