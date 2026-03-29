import express from "express";
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

import { protect } from "../middleware/authMiddleware.js";
import { adminOnly } from "../middleware/adminMiddleware.js";

const router = express.Router();

/*
  PUBLIC ROUTES
*/

// GET /api/products
router.get("/", getProducts);

// GET /api/products/:id
router.get("/:id", getProductById);


/*
  ADMIN ROUTES
*/

// POST /api/products
router.post("/", protect, adminOnly, createProduct);

// PUT /api/products/:id
router.put("/:id", protect, adminOnly, updateProduct);

// DELETE /api/products/:id
router.delete("/:id", protect, adminOnly, deleteProduct);

export default router;