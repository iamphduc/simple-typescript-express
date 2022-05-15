import express, { Router } from "express";

// Import all HomeController functions
import * as homeController from "../controllers/home.controller";

// Create Express home router
const homeRouter: Router = express.Router();

export default homeRouter
  .get("/", homeController.createHomePage)
  .get("/about", homeController.createAboutPage);
