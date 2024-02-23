import express from "express";
import cors from "cors";
import { giftRouter } from "./routers/giftRouter.js";

export const app = express();
// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS Policy
app.use(cors());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use("/gifts", giftRouter);
