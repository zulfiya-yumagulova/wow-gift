import { Gift } from "../models/giftModel.js";

// Create a gift
export const createGift = async (req, res) => {
  try {
    if (!req.body.title || !req.body.description || !req.body.price) {
      return res.status(400).json({
        message: "Send all required fields: title, description, price",
      });
    }
    const newGift = await Gift.create(req.body);

    res.status(201).json({
      status: "success",
      data: {
        newGift,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

// Get all gifts
export const getAllGifts = async (req, res) => {
  try {
    const allGifts = await Gift.find();
    // Success
    res.status(200).json({
      status: "success",
      results: allGifts.length,
      data: {
        allGifts,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

// Get gift by id
export const getGiftById = async (req, res) => {
  try {
    const gift = await Gift.findById(req.params.id);
    res.status(200).json({
      data: {
        gift,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

// Update a gift
export const updateGift = async (req, res) => {
  try {
    const gift = await Gift.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    // Success
    res.status(200).json({
      status: "success",
      message: "The gift has been updated",
      data: gift,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

// Delete Gift
export const deleteGift = async (req, res) => {
  try {
    await Gift.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};
