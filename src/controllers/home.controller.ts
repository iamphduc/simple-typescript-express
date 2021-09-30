import { Request, Response } from "express";

/**
 * HomeController
 * @route GET /
 * @route GET /about
 */

// [GET] /
export const createHomePage = (req: Request, res: Response): void => {
  res.render("home", {
    title: "Home",
    message: "Welcome to Simple Typescript Express",
  });
};

// [GET] /about
export const createAboutPage = (req: Request, res: Response): void => {
  res.render("about", { title: "About" });
};
