import { Application } from "express";

import { homeRouter } from "./home.routes";
import { apiRouter } from "./api.routes";

export const setRoutes = (app: Application): void => {
  app.use("/", homeRouter);
  app.use("/api", apiRouter);
};
