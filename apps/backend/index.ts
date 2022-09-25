import express from "express";
import cors from "cors";
import routes from "./router";
const app = express();
app.use(cors());
app.use(routes);

app.listen(5000, () => {
  console.log("Server started");
});
