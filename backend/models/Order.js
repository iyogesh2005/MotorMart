import mongoose from "mongoose";

const orderSchema = mongoose.Schema({

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  orderItems: [
    {
      name: String,
      qty: Number,
      price: Number,
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
      }
    }
  ],

  shippingAddress: {
    address: String,
    city: String,
    country: String
  },

  totalPrice: Number,

  paymentStatus: {
    type: String,
    default: "Pending"
  },

  orderStatus: {
    type: String,
    default: "Processing"
  }

}, { timestamps: true });

export default mongoose.model("Order", orderSchema);