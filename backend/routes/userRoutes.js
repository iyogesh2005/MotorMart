// import express from "express";
// import {
//   registerUser,
//   loginUser,
// } from "../controllers/userController.js";

// import { protect } from "../middleware/authMiddleware.js";

// const router = express.Router();

// /*
//   AUTH ROUTES
// */

// // POST /api/users/register
// router.post("/register", registerUser);

// // POST /api/users/login
// router.post("/login", loginUser);


// /*
//   USER PROFILE ROUTE (Protected Example)
// */

// // GET /api/users/profile
// router.get("/profile", protect, (req, res) => {
//   res.json(req.user);
// });

// export default router;

import express from "express";
import { registerUser, loginUser } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/profile", protect, (req, res) => {
  res.json(req.user);
});

export default router;