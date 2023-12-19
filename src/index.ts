import express from "express";
import routes from "./routes";

import { dbConnect, errorHandler } from "./utils";

const app = express();
app.use(express.json());

app.use("/", routes);
app.use(errorHandler);

const port = 5000;

dbConnect(() =>
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  })
);
