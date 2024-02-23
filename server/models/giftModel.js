import mongoose from "mongoose";

//Create Schema structure
const giftSchema = mongoose.Schema({
  title: {
    type: String,
    requered: true,
  },
  description: {
    type: String,
    requered: true,
  },
  price: {
    type: Number,
    requered: true,
  },
  time: { type: Date, default: Date.now },
});

export const Gift = mongoose.model("Gift", giftSchema);
