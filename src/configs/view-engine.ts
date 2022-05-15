import { Application } from "express";
import { join } from "path";

export const setViewEngine = (app: Application): void => {
  app.set("view engine", "pug");
  app.set("views", join(__dirname, "../../views/"));
};
