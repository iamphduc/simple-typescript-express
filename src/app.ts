import express, { Application } from "express";

import setViewEngine from "./configs/viewEngine";
import route from "./routes/index.routes";

// Create Express server
const app: Application = express();
const PORT = process.env.PORT || 5000;

// Static public directory
app.use(express.static(__dirname + "/public"));

// App view engine
setViewEngine(app);

// App routes
route(app);

app.listen(PORT, () => {
  console.log(`App listening: http://localhost:${PORT}`);
});
