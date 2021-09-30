import { Application } from "express";
import { join } from "path";

const setViewEngine = (app: Application): void => {
  app.set("view engine", "pug");
  app.set("views", join(__dirname, "../../views/"));
};

export default setViewEngine;
