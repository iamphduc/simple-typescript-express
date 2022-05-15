import { Request, Response } from "express";

export class HomeController {
  // [GET] /
  renderHomePage(req: Request, res: Response) {
    res.render("home", {
      title: "Home",
      message: "Welcome to Simple Typescript Express",
    });
  }

  // [GET] /about
  renderAboutPage(req: Request, res: Response) {
    res.render("about", {
      title: "About",
    });
  }
}
