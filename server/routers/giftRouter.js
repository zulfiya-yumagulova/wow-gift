import exress from "express";
import {
  createGift,
  deleteGift,
  getAllGifts,
  getGiftById,
  updateGift,
} from "../controllers/giftController.js";

// Gift Router
export const giftRouter = exress.Router();

// Gift CRUD Operations

// POST
giftRouter.post("/", createGift);

// GET
giftRouter.get("/", getAllGifts);

// GET One Gift
giftRouter.get("/:id", getGiftById);
// PATCH
giftRouter.patch("/:id", updateGift);

// DELETE
giftRouter.delete("/:id", deleteGift);
