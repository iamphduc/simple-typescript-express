import express from "express";

import { setViewEngine } from "./configs/view-engine";
import { setRoutes } from "./routes";

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.static(__dirname + "/public"));

setViewEngine(app);
setRoutes(app);

app.listen(PORT, () => {
  console.log(`App running at: http://localhost:${PORT}`);
});
