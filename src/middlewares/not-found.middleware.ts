import { Request, Response } from "express";

export const notFoundMiddleware = (req: Request, res: Response): void => {
  res.render("404", {
    title: "404",
    message: "Page not found",
  });
};
