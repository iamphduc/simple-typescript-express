import express, { Router } from "express";

// Import all APIController functions
import * as apiController from "../controllers/api.controller";

// Create Express API router
const apiRouter: Router = express.Router();

export default apiRouter.get("/authors", apiController.getAuthorInfo);
