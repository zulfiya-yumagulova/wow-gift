import * as dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import { Gift } from "./models/giftModel.js";
import { app } from "./app.js";

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
