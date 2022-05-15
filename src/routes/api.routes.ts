import express from "express";

import { ApiService } from "../services/api.service";
import { ApiController } from "../controllers/api.controller";

const apiRouter = express.Router();
const apiService = new ApiService();
const apiController = new ApiController(apiService);

apiRouter //
  .route("/authors")
  .get(apiController.getAuthorInfo);

export { apiRouter };
