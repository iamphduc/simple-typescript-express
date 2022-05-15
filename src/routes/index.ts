import { Application } from "express";

import { homeRouter } from "./home.routes";
import { apiRouter } from "./api.routes";
import { notFoundMiddleware } from "../middlewares/not-found.middleware";

export const setRoutes = (app: Application): void => {
  app.use("/", homeRouter);
  app.use("/api", apiRouter);

  app.use(notFoundMiddleware);
};
