import express from "express";
import * as dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import { error } from "console";

const app = express();

const PORT = process.env.PORT || 8002;
const DB = process.env.DATABASE_URL.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

// Connect to DB
mongoose
  .connect(DB)
  .then(() => {
    console.log("DB connections is successufull");
    app.listen(PORT, () => {
      console.log(`Server runs on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
app.get("/", (req, res) => {
  res.send("Hello from the server....");
});
