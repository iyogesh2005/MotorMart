import mongoose from "mongoose";

const reviewSchema = mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  rating: Number,
  comment: String,
}, { timestamps: true });

const productSchema = mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  image: String,
  category: String,
  stock: Number,
  reviews: [reviewSchema],
}, { timestamps: true });

export default mongoose.model("Product", productSchema);