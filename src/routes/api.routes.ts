import express from "express";

import { ApiController } from "../controllers/api.controller";

const apiRouter = express.Router();
const apiController = new ApiController();

apiRouter //
  .route("/authors")
  .get(apiController.getAuthorInfo);

export { apiRouter };
