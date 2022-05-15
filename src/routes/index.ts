import { Application } from "express";

// Import routers
import homeRouter from "./home.routes";
import apiRouter from "./api.routes";

const route = (app: Application): void => {
  app.use("/", homeRouter);
  app.use("/api", apiRouter);
};

export default route;
