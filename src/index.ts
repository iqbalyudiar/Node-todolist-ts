import express from "express";
import routes from "./routes";
import mongoose from "mongoose";

import { dbConnect } from "./utils";

const app = express();
app.use(express.json());

app.use("/", routes);

const port = 5000;

dbConnect(() =>
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  })
);
