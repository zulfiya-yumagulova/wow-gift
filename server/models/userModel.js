import mongoose from "mongoose";

export const userSchema = mongoose.Schema({
  name: {
    type: String,
    requered: true,
  },
});
