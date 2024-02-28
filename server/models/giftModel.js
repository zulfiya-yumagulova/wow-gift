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
  discount: {
    type: Boolean,
  },
  discountPrice: {
    type: Number,
  },
  nname: String,
  location: {
    type: {
      type: String,
      enum: ["Point"],
      // required: true,
    },
    coordinates: {
      type: [Number],
      // required: true,
    },
  },
  time: { type: Date, default: Date.now },
});

export const Gift = mongoose.model("Gift", giftSchema);
