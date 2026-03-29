import express from "express";
import { createOrder } from "../controllers/orderController.js";
import { protect } from "../middleware/authMiddleware.js";
import { adminOnly } from "../middleware/adminMiddleware.js";
import Order from "../models/Order.js";

const router = express.Router();

/* USER */

// Create order (LOGIN REQUIRED ILLA)
router.post("/", createOrder);

// My orders
router.get("/myorders", protect, async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.json(orders);
});

/* ADMIN */

// All orders
router.get("/", async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put("/:id/status", protect, adminOnly, async (req, res) => {
  const order = await Order.findById(req.params.id);
  order.orderStatus = req.body.status;
  await order.save();
  res.json(order);
});

export default router;