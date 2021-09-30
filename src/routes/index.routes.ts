import { Application } from "express";

// Import routers
import homeRouter from "./homeRouter";
import apiRouter from "./apiRouter";

const route = (app: Application): void => {
  app.use("/", homeRouter);
  app.use("/api", apiRouter);
};

export default route;
