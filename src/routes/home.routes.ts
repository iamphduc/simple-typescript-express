import express from "express";

import { HomeController } from "../controllers/home.controller";

const homeRouter = express.Router();
const homeController = new HomeController();

homeRouter //
  .route("/")
  .get(homeController.renderHomePage);

homeRouter //
  .route("/about")
  .get(homeController.renderAboutPage);

export { homeRouter };
