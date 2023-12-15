import express from "express";
import routes from "./routes";

const app = express();
app.use(express.json());

app.use("/", routes);

const port = 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
